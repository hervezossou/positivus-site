import { Heading } from "@/common/Heading"
import { Typography } from "@/common/Typography"
import { positivusJourney } from "../../../lib/data"
import { JourneyCard } from "../ui/JourneyCard"

export const JourneySection = () => {
    return (
        <section className="py-4 lg:py-10">
            <div className="flex flex-col items-start justify-between gap-10 lg:gap-20">
                <div className="flex flex-col items-center justify-between gap-5 max-w-4xl lg:flex-row lg:gap-10">
                    <Heading variant="lime" label="Our Journey" />
                    <Typography variant="p">
                        From humble begginnings to industry leaders, discover how Positivus has evolved to drive success for businesses wordwide.
                    </Typography>
                </div>
                <div className={`grid grid-cols-1 mx-auto gap-8 lg:grid-cols-2`}>
                    {positivusJourney.map((item, index) => (
                        <JourneyCard 
                            key={index}
                            title={item.title} 
                            description={item.description} 
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}