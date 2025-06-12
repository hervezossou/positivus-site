"use client"

import { FeaturedStory } from "@/use-cases/sections/FeaturedStory"
import { SuccessStories } from "@/use-cases/sections/SuccessStories"
import { CallToAction } from "@/use-cases/sections/CallToAction"
import { TestimonialSection } from "@/home/sections/TestimonialSection"

export default function Page() {
    return (
        <>
            <FeaturedStory />
            <SuccessStories />
            <TestimonialSection />
            <CallToAction />
        </>
    )
}