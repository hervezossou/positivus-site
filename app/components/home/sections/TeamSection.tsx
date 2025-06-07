import { members } from "../../../lib/data"
import { Heading } from "@/common/Heading"
import { Typography } from "@/common/Typography"
import { MemberCard } from "@/home/ui/MemberCard"
import { Button } from "@/common/Button"

export const TeamSection = () => {
    return (
        <section className="flex flex-col gap-y-10 py-4 lg:py-10">
            <div className="flex flex-col items-center justify-center gap-8 md:flex-row md:justify-start md:gap-10">
                <Heading variant="lime" label="Team" />
                <Typography variant="p" className="w-auto text-center md:w-[473px] md:text-left">
                    Meet the skilled and experienced team behind our successful digital marketing strategies
                </Typography>
            </div>
            <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-6 lg:grid-cols-3 lg:gap-8">
                {members.map((person, index) => (
                    <MemberCard 
                        key={`${person.name}-${index}`} 
                        data={person} 
                    />
                ))}
            </div>
            <div className="flex justify-end">
                <Button 
                    variant="contained" 
                    label="See all of them" 
                    onClick={() => alert("You get all the team members !")} 
                />
            </div>
        </section>
    )
}