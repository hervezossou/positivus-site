"use client"

import { ContactForm } from "@/home/ui/ContactForm";
import { Heading } from "@/common/Heading";
import { Typography } from "@/common/Typography";
import Image from "next/image";

export const ContactSection = () => {
    return (
        <section className="flex flex-col gap-y-10 py-4 lg:py-10">
            <div className="flex flex-col items-center justify-center gap-8 md:flex-row md:justify-start md:gap-10">
                <Heading variant="lime" label="Contact Us" />
                <Typography variant="p" className="max-w-[390px] text-center md:w-[473px] md:text-left">
                    Connect with Us: Let&apos;s Discuss Your Digital Marketing Needs
                </Typography>
            </div>
            <div className={`bg-cloud rounded-45 flex items-center px-5 py-10 h-full lg:justify-between lg:gap-x-6`}>
                <ContactForm />
                <div className="hidden translate-x-73 lg:h-screen lg:flex lg:items-center lg:rounded-3xl">
                    <Image 
                        src="/images/star-sun.png" 
                        width={692} 
                        height={648} 
                        alt="illustration" 
                        className="object-cover scale-110"
                    />
                </div>
            </div>
        </section>
    )
}