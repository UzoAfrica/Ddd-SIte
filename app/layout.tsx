import type { Metadata } from "next";
import { GoogleTagManager } from "@next/third-parties/google";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Become a Decadev",
  description:
    "Decagon is ushering in an era of tech-powered growth and prosperity in Nigeria by training and deploying an army of problem solvers, drivers of innovation and pioneers in tech.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {<GoogleTagManager gtmId="GTM-P49J8NWR" />}
      <body className={inter.className}>{children}</body>
    </html>
  );
}
