"use client"

import { HeroSection } from "./components/home/HeroSection";
import { ServiceSection } from "./components/home/ServiceSection";
import { CallToAction } from "./components/home/CallToAction";
import { CaseStudies } from "./components/home/CaseStudies";

export default function Page() {
  return (
    <main className="mx-auto flex flex-col gap-5 max-w-[1440px] max-h-screen pt-10">
        <HeroSection />
        <ServiceSection />
        <CallToAction />
        <CaseStudies />
    </main>
  );
}
