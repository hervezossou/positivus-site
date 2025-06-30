import { Heading } from "@/common/Heading"
import { Typography } from "@/common/Typography"
import { journeyTimeline } from "../../../lib/data"
import { JourneyCard } from "../ui/JourneyCard"

export const JourneySection = () => {
    return (
        <section className="py-4 lg:py-10">
            <div className="flex flex-col items-start justify-between gap-10 lg:gap-20">
                <div className="flex flex-col items-center justify-between gap-5 max-w-4xl lg:flex-row lg:gap-10">
                    <Heading variant="lime" label="Our Journey" />
                    <Typography variant="p" className="text-center lg:text-justify">
                        From humble begginnings to industry leaders, discover how Positivus has evolved to drive success for businesses wordwide.
                    </Typography>
                </div>
                <div className="w-full">
                    <div className="relative max-w-6xl mx-auto">
                        {/* Central Timeline Line */}
                        <div className="absolute inset-0 flex justify-center">
                            <div className="w-1 bg-lime hidden md:block"></div>
                        </div>

                        {/* Timeline Items */}
                        <div className="space-y-8 md:space-y-12">
                            {journeyTimeline.map((item, index) => (
                                <div
                                    key={index}
                                    className={`relative flex flex-col md:flex-row ${index % 2 === 0 ? "md:justify-start" : "md:justify-end"} items-center md:items-start`}
                                >

                                    {/* Timeline Dot */}
                                    <div className="absolute left-1/2 transform -translate-x-1/2 md:block hidden">
                                        <div className="w-4 h-4 bg-lime rounded-full"></div>
                                    </div>

                                    {/* Card */}
                                    <div className="flex flex-col items-start gap-6 lg:flex-row">
                                        <div className="hidden lg:flex items-center gap-4">
                                            <div className="w-3 h-3 bg-lime rounded-full"></div>
                                            <Typography variant="h2" className="my-0 lg:my-12">
                                                {item.year}
                                            </Typography>
                                        </div>
                                        <JourneyCard
                                            title={item.title}
                                            description={item.description}
                                            className={`${index % 2 === 0 ? "md:mr-auto" : "md:ml-auto"}`}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}