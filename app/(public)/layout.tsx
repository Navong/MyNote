import React from "react";
//import globall style here
// import "../styles/global.css";

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-full dark:bg-[#1F1F1F]">
      <main className="h-full flex-1 overflow-y-auto">{children}</main>
    </div>
  );
}
