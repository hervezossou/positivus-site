"use client"

import { HeroSection } from "./components/home/HeroSection";
import { LogoMarquee } from "./components/home/LogoMarquee";

export default function Page() {
  return (
    <main className="mx-auto space-y-4 max-w-full max-h-screen pt-10">
        <HeroSection />
        <LogoMarquee />
    </main>
  );
}
