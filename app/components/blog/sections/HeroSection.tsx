"use client"

import Image from "next/image";
import { Typography } from "../../common/Typography";

export const HeroSection = () => {
    return (
        <section className="w-full bg-cloud rounded-2xl lg:rounded-45">
                <div className="flex flex-col gap-y-4 px-5 py-8 md:px-10 md:py-12">
                    <h5 className="bg-gray-200 w-max text-gray-600 px-4 py-1 rounded-md mb-4 lg:hidden">
                        Marketing Strategies
                    </h5>
                    <Typography 
                        variant="h3"  
                        className="w-full lg:hidden"
                    >
                        PPC vs Organic Marketing : Which One Is Right for Your Business?
                    </Typography>
                    <Image 
                        src="/images/home-hero.png" 
                        alt="Hero Section" 
                        width={600} 
                        height={515} 
                        priority={true}
                        className="aspect-auto object-cover lg:hidden"
                    />
                    <Typography 
                        variant="p" 
                        className="md:px-8 text-justify lg:hidden"
                    >
                        PPC and organic marketing are two different strategies that can be used to promote a business. PPC is a paid strategy that uses paid ads to drive traffic to a website, while organic marketing is a free strategy that uses SEO to drive traffic to a website. Discover which strategy aligns with your goals and how to strike the perfect balance.
                    </Typography>
                </div>
                <div className="hidden -mt-16 lg:flex items-center justify-between gap-x-4 px-14 py-4">
                    <div className="flex items-center justify-center">
                        <Image 
                            src="/images/home-hero.png" 
                            alt="Hero Section" 
                            width={600} 
                            height={515} 
                            priority={true}
                            className="aspect-auto object-cover scale-80"
                        />
                    </div>
                    <div className="flex flex-col items-start justify-between gap-y-6">
                        <h5 className="w-max bg-gray-200 text-gray-600 px-4 py-1 rounded-md mb-4">
                            Marketing Strategies
                        </h5>
                        <Typography 
                            variant="h2" 
                            className="max-w-md lg:max-w-lg"
                        >
                            PPC vs Organic Marketing : Which One Is Right for Your Business?
                        </Typography> 
                        <Typography 
                            variant="p" 
                            className="max-w-xl"
                        >
                            PPC and organic marketing are two different strategies that can be used to promote a business. PPC is a paid strategy that uses paid ads to drive traffic to a website, while organic marketing is a free strategy that uses SEO to drive traffic to a website. Discover which strategy aligns with your goals and how to strike the perfect balance.
                        </Typography>
                    </div>
                </div>
        </section>
    )
}