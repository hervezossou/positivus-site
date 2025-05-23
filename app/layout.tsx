import type { Metadata } from "next";
import { spaceGrotesk } from "./lib/fonts";
import "./globals.css";
import { NavBar } from "./components/layout/NavBar";
import { Footer } from "./components/layout/Footer";

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
        className={`${spaceGrotesk.variable} antialiased box-border mx-auto max-w-[1580px] px-5 lg:px-16 2xl:px-[100px] overflow-x-hidden`}
      >
        <NavBar />
        <main className="flex flex-col space-y-10 pt-8">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
