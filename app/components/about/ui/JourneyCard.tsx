import Image from "next/image"
import { Typography } from "@/common/Typography";

interface JourneyCardProps {
    title: string;
    description: string;
}

export const JourneyCard = ({ title, description }: JourneyCardProps) => {
    return (
        <div className="max-h-64 w-lg flex items-start justify-start gap-8 bg-dark rounded-4xl p-8 lg:w-2xl lg:px-12 lg:gap-12">
            <div className="flex items-center justify-center aspect-square">
                <Image 
                    src="/icons/green-star.png" 
                    alt="star icon"
                    width={64} 
                    height={64}
                />
            </div>
            <div className="flex flex-col items-start justify-between gap-4 pb-12">
                <Typography variant="h3" className="text-white">
                    {title}
                </Typography>
                <p className="text-gray-300 text-sm max-w-xs lg:text-base">
                    {description}
                </p>
            </div>
        </div>
    )
}