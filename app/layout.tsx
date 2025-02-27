import type { Metadata } from "next";
import { GoogleTagManager } from "@next/third-parties/google"
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Become a Decadev",
  description:
    "Decagon is ushering in an era of tech-powered growth and prosperity in Nigeria by training and deploying an army of problem solvers, drivers of innovation and pioneers in tech.",
};

export const dynamic = 'force-dynamic';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      {<GoogleTagManager gtmId="GTM-P49J8NWR" />}
      <body>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
