"use client"

import { Button } from "../common/atoms/Button"
import { Typography } from "../common/atoms/Typography"
import Image from "next/image"
import { useOnMobile } from "components/app/lib/hooks"

export const HeroSection = () => {
    const onMobile = useOnMobile();

    return (
        <section className="flex flex-col-reverse items-start gap-auto px-4 md:flex-row lg:px-10 lg:items-start xl:px-[100px]">
            <div className="flex flex-col items-start justify-between gap-4 w-full md:w-1/2 md:gap-8">
                {!onMobile && 
                    <Typography variant="h1" className="md:w-auto lg:w-[531px]">
                        Navigating the digital landscape for success
                    </Typography>
                }
                <Typography variant="p" className="mb-4 lg:w-[499px] lg:mb-0">
                    Our digital marketing agency helps businesses grow and succeed online through a range of services including SEO, PPC, social media marketing, and content creation.
                </Typography>
                <Button variant="contained" label="Book a consultation" />
            </div>
            <div className="flex flex-col items-center justify-start w-full md:w-1/2">
                {onMobile && 
                    <Typography 
                        variant="h1" 
                        children="Navigating the digital landscape for success" 
                        className="w-full"
                    />
                }
                <Image 
                    src="/images/home-hero.png" 
                    width={600} 
                    height={515}
                    priority={true} 
                    alt="home hero illustration" 
                    className="aspect-square lg:aspect-auto"
                />
            </div>
        </section>
    )
}