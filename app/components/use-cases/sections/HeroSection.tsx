import { Typography } from "@/common/Typography"
import Image from "next/image"

export const HeroSection = () => {
    return (
        <section className="py-4 lg:py-10">
            <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center lg:bg-cloud lg:p-8 lg:rounded-45">
                <div className="w-full flex flex-col items-start justify-between gap-4 lg:w-1/2">
                    <Typography variant="h1" className="block max-w-lg leading-16 lg:hidden">
                        Proven Success Stories
                    </Typography>
                    <Image 
                        src="/images/home-hero.png" 
                        width={540} 
                        height={540} 
                        alt="illustration" 
                        loading="lazy"
                    />
                </div>
                <div className="w-full flex flex-col items-start justify-between gap-4 lg:w-1/2 lg:p-12 lg:gap-12">
                    <Typography variant="h1" className="hidden lg:block lg:max-w-lg lg:leading-16">
                        Proven Success Stories
                    </Typography>
                    <Typography variant="p" className="text-justify max-w-lg lg:max-w-md">
                        See how our innovative digital marketing strategies have transformed businesses. Whether through SEO, PPC, social media, or web design, these use cases highlight the tangible impact of our work. Explore the successes and envision what we can achieve together.
                    </Typography>
                </div>
            </div>
        </section>
    )
}