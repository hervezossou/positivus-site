"use client"

import { Heading } from "@/common/Heading"
import { Typography } from "@/common/Typography"
import { Button } from "@/common/Button"

import { useRouter } from "next/navigation"

export const BoostRanking = () => {
    const router = useRouter();

    return (
        <section className="py-4">
            <div className="bg-black px-12 py-10 rounded-4xl flex flex-col item-start justify-between gap-10 lg:flex-row lg:px-24 lg:py-20">
                <div className="flex flex-col w-4/5">
                    <Heading variant="lime" label="Search engine" />
                    <Heading variant="lime" label="optimization" />
                </div>
                <div className="flex flex-col items-start justify-between gap-12">
                    <Typography variant="p" className="text-gray-300">
                        SEO is the process of improving your website&apos;s visibility on search engines like Google. By optimizing your content and site structure. We help your business rank higher in search results, driving more organic traffic and potential customers.
                    </Typography>
                    <Button 
                        variant="light" 
                        label="Boost My Rankings" 
                        onClick={() => router.push("/blog")} 
                    />
                </div>
            </div>
        </section>
    )
}