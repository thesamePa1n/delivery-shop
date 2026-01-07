import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import "./globals.css";

const rubik = Rubik({
  variable: "--font-rubik-sans",
  subsets: ["cyrillic"],
});

export const metadata: Metadata = {
  title: "Северяночка",
  description: "продажа продуктов",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${rubik.variable} font-sans bg-bg-page`}
      >
        {children}
      </body>
    </html>
  );
}
