import { Typography } from "@/common/Typography"
import Image from "next/image"

export const AboutHeroSection = () => {
    return (
        <section className="py-4 lg:py-10">
            <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center lg:bg-cloud lg:p-8 lg:rounded-45">
                <div className="w-full flex flex-col items-center justify-between gap-4 lg:w-1/2 lg:items-start">
                    <Typography variant="h1" className="block max-w-2xl leading-16 lg:hidden">
                        Together for Success
                    </Typography>
                    <Image 
                        src="/images/success-together.svg" 
                        width={540} 
                        height={540} 
                        alt="illustration" 
                    />
                </div>
                <div className="w-full flex flex-col items-start justify-between gap-4 lg:w-1/2 lg:p-12 lg:gap-12">
                    <Typography variant="h1" className="hidden lg:block lg:max-w-lg lg:leading-16">
                        Together for Success
                    </Typography>
                    <Typography variant="p" className="text-justify mx-auto max-w-lg lg:mx-0 lg:max-w-md">
                        At Positivus, we help businesses grow by combining creativity, innovation,, and data-driven strategies. Together, we build a future  of shared  success.
                    </Typography>
                </div>
            </div>
        </section>
    )
}