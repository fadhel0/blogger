"use client";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import PostsContext from "@/context/PostsContext";
import { useState } from "react";
import Nav from "@/components/Nav";

const inter = Inter({ subsets: ["latin"] });

const metadata: Metadata = {
  title: "Fadhel Web Dev Blog",
  description: "Like, share and subscribe for more content !",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [posts, setPosts] = useState([
    {
      title: "",
      subheading: "",
      img: "",
      tag: "",
    },
  ]);

  return (
    <PostsContext.Provider value={{ posts, setPosts }}>
      <html lang="en">
        <body className={inter.className}>
          <Nav posts={posts} />
          {children}
        </body>
      </html>
    </PostsContext.Provider>
  );
}
