
# 🖋️ Next.js 14 Notion


![📦 Release](https://img.shields.io/github/release/ladunjexa/nextjs14-notion.svg)  
![✅ PRs](https://img.shields.io/badge/PRs-welcome-ff69b4.svg?style=shields)  
![🚀 Deployment](https://img.shields.io/github/deployments/ladunjexa/nextjs14-notion/Production?logo=vercel&label=Website)

----------

## 🌐 Live Demo

Experience the live demo: [nextjs14-notion](https://nextjs14-notion.vercel.app/)

----------

## 📝 Description

**Notion** is a modern Notion-like application built with:

-   🚀 **Next.js 14**
-   🖌️ **React**
-   📦 **Convex**
-   🎨 **Tailwind CSS**
-   🔐 **Clerk**
-   🗃️ **EdgeStore**

This app provides:

-   Real-time collaborative editing
-   Create/Edit/Delete functionality for documents
-   Notion-style features for publishing notes online

----------

## 📂 Folder Structure

<details><summary>Explore the Project Folder Structure 🗂️</summary>

```bash
nextjs14-notion/
├── app/
├   ├── (main)/
├   ├── (routes)/
├   ├── api/
├── components/
├── convex/
├── hooks/
├── lib/
├── public/
├── pages/
└── utils/

```

</details>

----------

## ✨ Technologies Used

<details><summary>Notion's Technology Stack 🛠️</summary>

-   🌐 [**Next.js**](https://nextjs.org/) - React framework for modern apps
-   🎨 [**Tailwind CSS**](https://tailwindcss.com/) - Utility-first CSS
-   🗄️ [**Convex**](https://convex.dev/) - TypeScript-first ORM for real-time apps
-   🔐 [**Clerk**](https://clerk.dev/) - Authentication & user management
-   📊 [**Zustand**](https://docs.pmnd.rs/zustand/getting-started/introduction) - Lightweight state management
-   🖋️ [**BlockNote**](https://blocknote.dev/) - Notion-like editor
-   🧰 [**Shadcn UI**](https://ui.shadcn.com/) - Elegant UI components
-   🌟 [**Zod**](https://zod.dev/) - Validation library for TypeScript
-   🚀 [**Vercel**](https://vercel.com/) - Deployment platform

</details>

----------

## 🧰 Get Started

### 📋 Prerequisites

Make sure you’ve installed:

-   Node.js
-   NPM
-   Git

### ⚙️ Installation Steps

1.  Clone the repo:

```bash
git clone https://github.com/ladunjexa/nextjs14-notion.git  

```

2.  Install dependencies:

```bash
npm install  

```

3.  Start the local server:

```bash
npm run dev  

```

4.  Open in your browser at:  
    [http://localhost:3000](http://localhost:3000/)

----------

## 🔧 Features

-   🖋️ Real-time database and Notion-like editor
-   🌓 Light & Dark mode
-   🌲 Nested/Infinite documents support
-   🗑️ Trash management with recovery
-   🔗 Real-time icons for each document
-   💻 Fully responsive for mobile and desktop

----------

## 🔒 Environment Variables

Create a `.env` file to configure:

```bash
CONVEX_DEPLOY_KEY=Your_Convex_Key  
NEXT_PUBLIC_CONVEX_URL=Your_Public_URL  

CLERK_PUBLISHABLE_KEY=Your_Clerk_PubKey  
CLERK_SECRET_KEY=Your_Clerk_SecretKey  

EDGE_STORE_ACCESS_KEY=Your_EdgeStore_Key  
EDGE_STORE_SECRET_KEY=Your_EdgeStore_Secret  

```

----------

## 🚀 Deployment

You can deploy on:

-   **Manual**: Build with `npm run build`
-   **Vercel**: [Deploy directly with Vercel](https://vercel.com/)
-   **Netlify**: Works seamlessly

----------

## 💡 Contributions

Feel free to fork and contribute! Follow the standard PR workflow:

1.  Fork the repo
2.  Create a branch for your changes
3.  Submit your PR

**For bugs or feature requests:** [Open an issue](https://github.com/ladunjexa/nextjs14-notion/issues/new)

----------

## 💎 Acknowledgements

Special thanks to:

-   Clerk
-   Convex
-   EdgeStore
-   BlockNote

## 📄 License

This project is licensed under the [MIT License](https://chatgpt.com/c/LICENSE).
