"use client"

import { HeroSection } from "@/use-cases/sections/HeroSection"
import { FeaturedStory } from "@/use-cases/sections/FeaturedStory"
import { SuccessStories } from "@/use-cases/sections/SuccessStories"
import { CallToAction } from "@/use-cases/sections/CallToAction"
import { TestimonialSection } from "@/home/sections/TestimonialSection"

export default function Page() {
    return (
        <>
            <HeroSection />
            <FeaturedStory />
            <SuccessStories />
            <TestimonialSection />
            <CallToAction />
        </>
    )
}