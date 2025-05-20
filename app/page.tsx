"use client"

import { HeroSection } from "./components/home/sections/HeroSection";
import { ServiceSection } from "./components/home/sections/ServiceSection";
import { CallToAction } from "./components/home/sections/CallToAction";
import { CaseStudies } from "./components/home/sections/CaseStudies";
import { FaqSection } from "./components/home/sections/FaqSection";
import { TeamSection } from "./components/home/sections/TeamSection";
import { TestimonialSection } from "./components/home/sections/TestimonialSection";
import { ContactSection } from "./components/home/sections/ContactSection";

export default function Page() {
  return (
    <>
      <HeroSection />
      <ServiceSection />
      <CallToAction />
      <CaseStudies />
      <FaqSection />
      <TeamSection />
      <TestimonialSection />
      <ContactSection />
    </>
  );
}
