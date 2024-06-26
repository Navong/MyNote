import { NextResponse } from "next/server";
import { revalidatePath } from "next/cache";
import fs from "node:fs/promises";
import { FileState, GoogleAIFileManager } from "@google/generative-ai/files"; // Replace "path/to/GoogleAIFileManager" with the actual path to the module.
import { GoogleGenerativeAI } from "@google/generative-ai";
import { OpenAIStream, StreamingTextResponse } from "ai";
import { response } from "express";

export async function POST(req: Request) {
  try {
    const formData = await req.formData();
    const file = formData.get("file") as File;

    // Save the file to a temporary location
    const arrayBuffer = await file.arrayBuffer();
    const buffer = new Uint8Array(arrayBuffer);
    const fileName = file.name;
    const filePath = `./app/try/uploads/${fileName}`;
    await fs.writeFile(filePath, buffer);

    // console.log(filePath);

    // Get the URL of the saved file
    const fileURL = `app/try/uploads/${fileName}`; // Adjust this URL based on your application setup

    console.log(fileURL);

    const apiKey = process.env.GOOGLE_GENERATIVE_AI_API_KEY || ""; // Ensure that the API key is defined
    const fileManager = new GoogleAIFileManager(apiKey);
    const uploadResult = await fileManager.uploadFile(fileURL, {
      mimeType: "image/jpeg" || "image/png",
      displayName: "image",
    });

    // /home/dev/project/nextjs14-notion/app/try/uploads/img178.png
    // app/try/uploads/img178.png
    console.log(
      `Uploaded file ${uploadResult.file.displayName} as: ${uploadResult.file.uri}`
    );

    // Get a file's metadata.
    const getResult = await fileManager.getFile(uploadResult.file.name);

    // View the response.
    console.log(`Retrieved file ${getResult.displayName} as ${getResult.uri}`);
    // Perform any further actions if needed, such as revalidating cache

    const genAI = new GoogleGenerativeAI(apiKey);

    // Initialize the generative model with a model that supports multimodal input.
    const model = genAI.getGenerativeModel({
      model: "gemini-1.5-flash",
      systemInstruction: "Describe the image with to easier to understand and Detail",
    });

    // Generate content using text and the URI reference for the uploaded file.
    const result = await model.generateContent([
      {
        fileData: {
          mimeType: uploadResult.file.mimeType,
          fileUri: uploadResult.file.uri,
        },
      },
      {
        text: `The first sentent have to be in H2 format, 
        The main point highligh with bullet point,
        every LaTex format convert to Code Format,
        9`,
      },
    ]);

    const response = result.response;
    const text = await response.text();

    console.log(text);

    await fileManager.deleteFile(uploadResult.file.name);

    console.log(`Deleted ${uploadResult.file.displayName}`);

    revalidatePath("/try");

    // Return the file URL in the response
    return NextResponse.json({ status: "success", text });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ status: "fail", error: e });
  }
}
