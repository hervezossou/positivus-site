"use client"

import { HeroSection } from "./components/home/HeroSection";
import { ServiceSection } from "./components/home/ServiceSection";
import { IconLink } from "./components/common/IconLink";

export default function Page() {
  return (
    <main className="mx-auto flex flex-col gap-5 max-w-full max-h-screen pt-10">
        <HeroSection />
        <ServiceSection />
        <IconLink variant="light" label="Learn more" />
    </main>
  );
}
