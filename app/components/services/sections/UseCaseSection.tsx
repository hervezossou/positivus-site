"use client"

import { useMediaQuery } from "../../../lib/utils/hooks"
import { UseCaseCard } from "../ui/UseCaseCard"
import { Heading } from "@/common/Heading"
import { Typography } from "@/common/Typography"
import { useCasesData } from "../../../lib/data"
import { useEffect, useState } from "react"

export const UseCaseSection = () => {
    const isDesktop = useMediaQuery("(min-width: 1280px)");

    return (
        <section className="py-4 lg:py-10">
            <div className="flex flex-col items-start justify-between gap-8 xl:gap-12">
                <div className="flex flex-col items-center justify-center gap-6 xl:flex-row xl:items-start xl:justify-start xl:gap-10">
                    <Heading variant="lime" label="Use Cases" />
                    <Typography variant="p" className="w-auto text-center md:w-[460px] xl:text-left">
                        Explore Real-Life Examples of Our Proven Digital Marketing Success through Our Case Studies
                    </Typography>
                </div>
                <div className="flex items-center justify-between gap-8 w-full h-max overflow-x-scroll px-4 py-6 xl:items-start xl:justify-evenly xl:gap-0 xl:pt-12 xl:pb-16 xl:bg-black xl:rounded-4xl xl:overflow-x-hidden">
                    {useCasesData.map((item, index) => (
                        <UseCaseCard 
                            key={`${item.title}-${index}`} 
                            title={item.title} 
                            description={item.description} 
                            goTo="/blog"
                            className={`${isDesktop && index < 2 ? "border-white border-r rounded-none" : ""}`} 
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}