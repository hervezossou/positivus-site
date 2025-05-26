"use client"

import { Button } from "../../common/Button"
import { Typography } from "../../common/Typography"
import { LogoMarquee } from "../ui/LogoMarquee"
import Image from "next/image"
import { useMediaQuery } from "components/app/lib/hooks"

export const HeroSection = () => {
    const isMobile = useMediaQuery('(max-width: 768px)');

    return (
        <section className="flex flex-col gap-y-4">
            <div className="flex flex-col-reverse items-start gap-auto md:flex-row md:items-center lg:items-start">
                <div className="flex flex-col items-start justify-between gap-4 w-full md:w-1/2 md:gap-8">
                    {!isMobile && 
                        <Typography variant="h1" className="md:w-auto lg:w-[531px]">
                            Navigating the digital landscape for success
                        </Typography>
                    }
                    <Typography variant="p" className="mb-4 lg:w-[499px] lg:mb-0">
                        Our digital marketing agency helps businesses grow and succeed online through a range of services including SEO,    PPC, social media marketing, and content creation.
                    </Typography>
                    <Button 
                        variant="contained" 
                        label="Book a consultation"
                        onClick={() => alert("You booked a consultation!")} 
                    />
                </div>
                <div className="flex flex-col items-center justify-start w-full md:w-1/2">
                    {isMobile && 
                        <Typography 
                            variant="h1"  
                            className="w-full"
                        >
                            Navigating the digital landscape for success
                        </Typography>
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
            </div>
            <LogoMarquee />
        </section>
    )
}