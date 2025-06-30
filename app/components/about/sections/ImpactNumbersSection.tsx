"use client"

import { useState, useEffect } from "react";
import { Heading } from "@/common/Heading";
import { Typography } from "@/common/Typography";
import { ImpactCard } from "../ui/ImpactCard";
import { useMediaQuery } from "../../../lib/utils/hooks";
import { impactStats } from "../../../lib/data";

export const ImpactNumbersSection = () => {
    const isMobile = useMediaQuery("(max-width: 768px)");
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, [mounted])

    return (
        <section className="py-4 lg:pb-10">
            <div className="flex flex-col items-start justify-between gap-6 px-4 py-6 lg:gap-16">
                <div className="flex flex-col items-center justify-center gap-8 md:flex-row md:justify-start md:gap-10">
                    {mounted && isMobile ? 
                    (<div className="flex flex-col items-center gap-0">
                        <Heading variant="lime" label="Our Impact" />
                        <Heading variant="lime" label="in Numbers" />
                    </div>) : (
                        <Heading variant="lime" label="Our Impact in Numbers" />
                    )}
                    <Typography variant="p" className="w-auto text-center md:w-md md:text-left">
                        A snapshot of the milestones and achievements that drive our success
                    </Typography>
                </div>
                <div className="flex flex-wrap items-center justify-center md:gap-x-0 md:my-4 gap-12 lg:justify-start">
                    {impactStats.map((stat, index) => (
                        <ImpactCard 
                            key={stat.label}
                            value={stat.value} 
                            variant={`${index !== impactStats.length ? "count" : "percent"}`} 
                            label={stat.label} 
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}