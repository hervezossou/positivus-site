import Image from "next/image";
import { Typography } from "@/common/Typography";

interface ProcessCardProps {
    order: string;
    title: string;
    description: string;
}

export const ProcessCard = ({ order, title, description } : ProcessCardProps) => {
    return (
        <div className="w-full bg-cloud flex items-start px-4 py-8 gap-8 rounded-4xl lg:items-center lg:justify-between lg:gap-x-20 lg:px-20 lg:py-14">
            <div className="flex items-center justify-center">
                <Image 
                    src="/icons/star-icon.svg"
                    width={256} 
                    height={256} 
                    alt="star icon"
                    className="relative"
                />
                <h1 className="absolute text-lime leading-12 text-2xl md:text-6xl font-medium md:leading-16">
                    {order}
                </h1>
            </div>
            <div className="flex flex-col items-start justify-between gap-8">
                <Typography variant="h3">
                    {title}
                </Typography>
                <Typography variant="p">
                    {description}
                </Typography>
            </div>
        </div>
    )
}