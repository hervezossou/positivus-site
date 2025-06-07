"use client"

import { Heading } from "@/common/Heading"
import { frequentlyAskedQuestions } from "../../../lib/data"
import { DisclosureItem } from "@/pricing/ui/DisclosureItem"
import { useState } from "react"

export const FrequentQuestions = () => {
    const [openIndex, setOpenIndex] = useState(0); // the first disclosure is open by default

    const handleToggle = (index: number) => {
        setOpenIndex(index === openIndex ? -1 : index); // onClick on the opened accordeon to close it
    };

    return (
        <section className="flex flex-col gap-y-14 py-4 lg:py-10">
            <div className="flex flex-col items-center justify-center gap-0 md:items-start md:justify-start">
                <Heading 
                    variant="lime" 
                    label="Frequently Asked" 
                />
                <Heading 
                    variant="lime" 
                    label="Questions" 
                />
            </div>
            <div className="w-full flex flex-col items-center justify-between gap-y-8">
                {frequentlyAskedQuestions.map((item, index) => (
                    <DisclosureItem 
                        isOpen={openIndex === index}
                        key={index} 
                        data={item}
                        onToggle={() => handleToggle(index)}
                    />
                ))}
            </div>
        </section>
    )
}