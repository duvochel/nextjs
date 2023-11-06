import type { Metadata } from "next";

import connectDB from "@/lib/connect-db";
import { Inter } from "next/font/google";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Wine Cellar",
  description: "NextJs app for managing your bottles",
};

connectDB().catch((e) => {
  console.error(e);
  process.exit(1);
});

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
