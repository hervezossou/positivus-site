
import { Heading } from "@/common/Heading";
import { Typography } from "@/common/Typography";
import { AwardCard } from "../ui/AwardCard";
import { awards } from "../../../lib/data";

export const AwardSection = () => {
    return (
        <section className="py-4 lg:py-10">
            <div className="flex flex-col items-start justify-between gap-8 lg:gap-28">
                <div className="w-full flex flex-col items-center justify-between gap-8 lg:flex-row lg:items-start lg:justify-start lg:gap-12">
                    <Heading variant="lime" label="Awards & Recognition" />
                    <Typography variant="p" className="max-w-xl">
                        At Positivus, our commitment to excellence has been recognized by industry leaders. Here are some  of our proudest achievements:
                    </Typography>
                </div>
                <div className="w-full grid grid-cols-2 items-start justify-between gap-4 xl:grid-cols-4 xl:gap-8">
                    {awards.map((award, index) => (
                        <AwardCard 
                            key={`${award.awardTitle}-${index}`}
                            imageUrl={award.imageUrl} 
                            awardTitle={award.awardTitle} 
                            awardDescription={award.awardDescription} 
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}