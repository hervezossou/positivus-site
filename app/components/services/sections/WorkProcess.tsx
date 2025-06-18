"use client"

import { Typography } from "@/common/Typography"
import { Heading } from "@/common/Heading"
import { useMediaQuery } from "../../../lib/utils/hooks"
import { useEffect, useState } from "react"
import { workProcess } from "../../../lib/data"
import { ProcessCard } from "../ui/ProcessCard"

export const WorkProcess = () => {
    const isMobile = useMediaQuery("(max-width: 768px)");
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <section className="py-4 space-y-8 lg:py-10 md:space-y-14 lg:space-y-20 xl:space-y-28">
            <div className="flex flex-col items-center justify-center gap-8 xl:flex-row xl:items-start xl:justify-start xl:gap-10">
                {mounted && isMobile ? 
                (<div className="flex flex-col items-center gap-0">
                    <Heading variant="lime" label="How We Work:" />
                    <Heading variant="lime" label="SEO Process" />
                </div>) : (
                    <Heading variant="lime" label="How We Work: SEO Process" />
                )}
                <Typography variant="p" className="w-auto text-center md:w-[460px] xl:text-left">
                    Our step-by-step SEO process ensures your website ranks higher, attracts more traffic, and drives lasting results.
                </Typography>
            </div>
            <div className="flex flex-col gap-5 items-center justify-between md:gap-10">
                {workProcess.map((item, index) => (
                    <ProcessCard 
                        key={`${item.title}-${index}`}
                        order={item.order} 
                        title={item.title} 
                        description={item.description} 
                    />
                ))}
            </div>
        </section>
    )
}