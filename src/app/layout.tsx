import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import React from "react";
import NavBar from "./src/components/NavBar";
import { ThemeProvider } from "./src/components/theme-provider";
import { MyProvider } from "./src/components/UserContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Flatiron Flashcards",
  description: "by Jamal Ouyang",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <MyProvider>
          <ThemeProvider attribute="class" defaultTheme="system">
            <NavBar />
            {children}
          </ThemeProvider>
        </MyProvider>
      </body>
    </html>
  );
}
