import Image from "next/image"
import { Typography } from "@/common/Typography";

interface AwardCardProps {
    imageUrl: string;
    awardTitle: string;
    awardDescription: string;
}

export const AwardCard = ({ imageUrl, awardTitle, awardDescription } : AwardCardProps) => {
    return (
        <div className="h-full flex flex-col items-center justify-between gap-8 bg-cloud rounded-4xl px-4 xl:px-8 py-10 xl:py-20 xl:w-80">
            <Image 
                src={imageUrl} 
                alt={awardTitle} 
                width={64}
                height={64}
            />
            <Typography variant="h4">
                {awardTitle}
            </Typography>
            <Typography variant="p">
                {awardDescription}
            </Typography>
        </div>
    )
}