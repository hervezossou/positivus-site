"use client"

import { Typography } from "@/common/Typography"
import { Button } from "@/common/Button"
import Image from "next/image"

export const CallToAction = () => {
    return (
        <section className="py-4 lg:py-10 lg:my-12">
            <div className="bg-cloud h-[347px] rounded-45 flex items-center justify-between gap-[275px] px-15">
                <div className="flex flex-col max-w-[500px] gap-[26px]">
                    <Typography variant="h3">
                        Let&apos;s make things happen
                    </Typography>
                    <Typography variant="p">
                        Contact us today to learn more about how our digital marketing services can help your business grow and succeed online.
                    </Typography>
                    <Button 
                        variant="contained" 
                        label="Get your free proposal" 
                        onClick={() => alert("You ask for a proposal")}
                    />
                </div>
                <div className="lg:flex items-center justify-center hidden">
                    <Image 
                        src="/images/call-to-action.png" 
                        width={359} 
                        height={394.27} 
                        className="object-cover h-auto mr-[135px] scale-140" 
                        alt="Call To Action"
                    />
                </div>
            </div>
        </section>
    )
}