import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";

import { cn } from "@/lib/utils";
import "../globals.css";
const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Nextjs Shop",
  description: "Shop Where You Get Everything at the Best Price",
  icons: {
    icon: "https://nextjs.org/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased bg-gradient-to-r from-white via-blue-50 to-blue-100  ",
          fontSans.variable
        )}
      >
        {children}
      </body>
    </html>
  );
}
