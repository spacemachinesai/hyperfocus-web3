import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Enterprise AI: Private, Secure, Customizable | Cohere",
  description: "Cohere builds powerful models and AI solutions enabling enterprises to automate processes, empower employees, and turn fragmented data into actionable insights.",
  openGraph: {
    title: "Enterprise AI: Private, Secure, Customizable | Cohere",
    description: "Cohere builds powerful models and AI solutions enabling enterprises to automate processes, empower employees, and turn fragmented data into actionable insights.",
    url: "https://cohere.com/",
    siteName: "Cohere",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Enterprise AI: Private, Secure, Customizable | Cohere",
    description: "Cohere builds powerful models and AI solutions enabling enterprises to automate processes, empower employees, and turn fragmented data into actionable insights.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased bg-white text-[#212121]`}>
        {children}
      </body>
    </html>
  );
}
