import { Heading } from "../../common/Heading"
import { Typography } from "../../common/Typography"
import { useMediaQuery } from "components/app/lib/utils/hooks"
import { FaqData } from "components/app/lib/data"
import { AccordeonItem } from "../ui/AccordeonItem"
import { useState } from "react"

export const FaqSection = () => {
    const isMobile = useMediaQuery('(max-width: 768px)');
    const [openIndex, setOpenIndex] = useState(0); // the first accordeon is open by default

    const handleToggle = (index: number) => {
        setOpenIndex(index === openIndex ? -1 : index); // onClick on the opened accordeon to close it
    };

    return (
        <section className="flex flex-col gap-y-14 py-4 lg:py-10">
            <div className="flex flex-col items-center justify-center gap-8 md:flex-row md:justify-start md:gap-10">
                {isMobile ? 
                (<div className="flex flex-col items-center gap-0">
                    <Heading variant="lime" label="Our Working" />
                    <Heading variant="lime" label="Process" />
                </div>) : (
                    <Heading variant="lime" label="Our Working Process" />
                )}
                <Typography variant="p" className="w-auto text-center md:w-[292px] md:text-left">
                    Step-by-Step Guide to Achieving Your Business Goals
                </Typography>
            </div>
            <div className="w-full flex flex-col items-center justify-between gap-y-4">
                {FaqData.map((item, index) => (
                    <AccordeonItem 
                        isOpen={openIndex === index}
                        key={`${item.title}-${index}`} 
                        data={item}
                        onToggle={() => handleToggle(index)}
                    />
                ))}
            </div>
        </section>
    )
}