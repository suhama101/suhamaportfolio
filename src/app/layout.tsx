import type { Metadata } from "next";
import { Instrument_Serif, Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument",
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Suhama Mustafa | Full Stack Developer",
  description:
    "Suhama Mustafa is a Full Stack Developer building AI-driven web apps, government portals, and SaaS products.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${instrumentSerif.variable} antialiased`}>
      <body className="min-h-full bg-[var(--bg)] text-[var(--text-primary)]">{children}</body>
    </html>
  );
}
