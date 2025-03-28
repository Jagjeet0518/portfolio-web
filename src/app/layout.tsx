import type { Metadata } from "next";
import "./globals.css";
import Lenis from "@/lenis";

export const metadata: Metadata = {
  title: "Snippy | Portfolio",
  description: "Hi, I'm Snippy. I'm a web developer. I'm passionate about web development and I love to create beautiful and functional websites.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="light">
      <body className="antialiased">
        <Lenis>
          {children}
        </Lenis>
      </body>
    </html>
  );
}
