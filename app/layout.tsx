import type { Metadata } from "next";
import { spaceGrotesk } from "./lib/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Positivus - Get Good Vibes",
  description: "Crafted with Nextjs & Tailwindcss",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${spaceGrotesk.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
