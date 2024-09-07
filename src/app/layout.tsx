import type { Metadata } from "next";
import "./globals.css";
import SessionWrapper from "./components/SessionWrapper";
import NavBar from "./components/NavBar";

export const metadata: Metadata = {
  title: "TODO App",
  description: "TODO App built with Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <SessionWrapper>
          <NavBar />
          {children}
        </SessionWrapper>
      </body>
    </html>
  );
}
