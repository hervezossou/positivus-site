import { Typography } from "@/common/Typography"
import Image from "next/image"

interface CoreValueCardProps {
    title: string;
    description: string;
    srcImage?: string;
}

export const CoreValueCard = ({ title, description, srcImage } : CoreValueCardProps) => {
    return (
        <div className="w-full h-72 bg-white flex items-start justify-between p-8 border gap-8 rounded-4xl [filter:drop-shadow(0px_5px_0px_#191A23)]">
            <div className="flex flex-col items-start justify-between gap-8 w-full">
                <Typography variant="h3">
                    {title}
                </Typography>
                <div className="w-full h-[1px] bg-black"></div>
                <Typography variant="p">
                    {description}
                </Typography>
            </div>
            {srcImage && (
            <div className={`flex items-center justify-center`}>
                <Image 
                    src={srcImage} 
                    alt={title} 
                    width={500} 
                    height={500} 
                />
            </div>)}
        </div>
    )
}