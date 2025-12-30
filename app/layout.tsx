import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Run e-commerce ops without the ops team | hyperfocus.tech",
  description: "AI handles the spreadsheets. You handle the business. Real profit by channel, inventory intelligence, and AI recommendations for e-commerce sellers.",
  openGraph: {
    title: "Run e-commerce ops without the ops team | hyperfocus.tech",
    description: "AI handles the spreadsheets. You handle the business. Real profit by channel, inventory intelligence, and AI recommendations for e-commerce sellers.",
    url: "https://hyperfocus.tech/",
    siteName: "hyperfocus.tech",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Run e-commerce ops without the ops team | hyperfocus.tech",
    description: "AI handles the spreadsheets. You handle the business. Real profit by channel, inventory intelligence, and AI recommendations for e-commerce sellers.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link href="https://cdn.jsdelivr.net/npm/geist@1.2.0/dist/fonts/geist-mono/style.css" rel="stylesheet" />
      </head>
      <body className={`${inter.variable} font-sans antialiased bg-white text-[#212121]`}>
        {children}
      </body>
    </html>
  );
}
