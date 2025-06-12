"use client"

import { Heading } from "@/common/Heading"
import { Typography } from "@/common/Typography"
import { StatCard } from "@/use-cases/ui/StatCard"
import { FeaturedLink } from "../ui/FeaturedLink"

import { featuredStory } from "../../../lib/data"

export const FeaturedStory = () => {
    return (
        <section className="py-4 lg:py-10 lg:my-12">
            <div className="bg-dark rounded-45 flex flex-col items-center gap-8 px-8 py-12 md:p-16 md:gap-16 xl:flex-row xl:items-start xl:justify-between xl:p-20">
                <div className="w-full flex flex-col gap-4 lg:gap-10 lg:w-1/2">
                    <>
                        <Heading variant="lime" label="FEATURED" className="sm:hidden" />
                        <Heading variant="lime" label="Featured Success Story" className="hidden sm:flex"/>
                    </>
                    <Typography variant="h3" className="text-white md:max-w-md">
                        Scaling Success for a Leading E-Commerce Brand
                    </Typography>
                    <Typography variant="p" className="text-gray-300 max-w-lg">
                        Through a comprehensive SEO and PPC stratgy, we helped this e-commerce brand increase  visibility, drive traffic, and boost sales.
                    </Typography>
                    <FeaturedLink label="Read story" href="/blog" className="hidden xl:flex" />
                </div>
                <div className="w-auto grid grid-cols-1 items-center gap-4 sm:grid-cols-2 sm:gap-8">
                    {featuredStory.map((stat, index) => (
                        <StatCard 
                            key={index}
                            title={stat.title} 
                            description={stat.description} 
                        />
                    ))}
                    <FeaturedLink label="Read story" href="/blog" className="flex my-4 xl:hidden" />
                </div>
            </div>
        </section>
    )
}