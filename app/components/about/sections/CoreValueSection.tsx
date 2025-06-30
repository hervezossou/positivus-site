import { Heading } from "@/common/Heading"
import { Typography } from "@/common/Typography"
import { coreValues } from "../../../lib/data"
import { CoreValueCard } from "../ui/CoreValueCard"

export const CoreValueSection = () => {
    return (
        <section className="py-4 space-y-8 lg:py-10 lg:space-y-16">
            <div className="w-full mx-auto flex flex-col items-center justify-between gap-8 max-w-xl lg:mx-0 lg:items-start lg:flex-row lg:gap-12">
                <Heading variant="lime" label="Core Value" />
                <Typography variant="p">
                    At the heart of everything we do are our core values:
                </Typography>
            </div>
            <div className="grid grid-cols-1 items-start justify-between gap-5 xl:grid-cols-2 xl:gap-8">
                {coreValues.map((value, index) => (
                    <CoreValueCard 
                        key={`${index}-${value.title}`}
                        title={value.title} 
                        description={value.description} 
                        srcImage={value.srcImage} 
                    />
                ))}
            </div>
        </section>
    )
}