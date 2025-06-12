"use client"

import { FeaturedStory } from "@/use-cases/sections/FeaturedStory"
import { MoreArticles } from "@/blog/sections/MoreArticles"
import { CallToAction } from "@/home/sections/CallToAction"
import { TestimonialSection } from "@/home/sections/TestimonialSection"

export default function Page() {
    return (
        <>
            <FeaturedStory />
            <MoreArticles />
            <TestimonialSection />
            <CallToAction />
        </>
    )
}