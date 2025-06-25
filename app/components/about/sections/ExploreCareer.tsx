"use client"

import Image from "next/image"
import { Typography } from "@/common/Typography"
import { Button } from "@/common/Button"

export const ExploreCareer = () => {
    return (
        <section className="py-4 lg:py-10">
            <div className="w-full flex flex-col items-center justify-between gap-4 px-4 py-8 bg-lime border [filter:drop-shadow(0px_5px_0px_#191A23)] rounded-45 lg:flex-row lg:gap-8 lg:px-20 lg:py-14">
                <div className="max-w-xl flex flex-col items-start justify-between gap-5">
                    <Typography variant="h3">
                        Join Our Team
                    </Typography>
                    <Typography variant="p">
                        At Positivus, we thrive on innnovation and collaboration. We&apos;re always looking  for passionate individuals to join our team and help  businesses grow. Ready to make an impact ?
                    </Typography>
                    <Button 
                        variant="contained" 
                        label="Explore Careers"
                        onClick={() => alert("Explore careers !")}
                    />
                </div>
                <div className="flex items-center justify-center px-10 lg:pr-20">
                    <Image 
                        src="/images/home-hero.png" 
                        alt="illustration" 
                        width={624}
                        height={624}
                    />
                </div>
            </div>
        </section>
    )
}