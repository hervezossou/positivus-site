import clsx from "clsx";
import { Typography } from "@/common/Typography"
import { TextLink } from "@/common/TextLink"

interface UseCaseCardProps {
    title: string;
    description: string;
    goTo: string;
    className?: string
}

const baseStyle = "w-96 h-auto bg-black rounded-4xl p-8 flex shrink-0 flex-col items-start justify-between gap-6 px-10 xl:h-[316px] xl:pl-2 xl:pr-8 xl:py-0 xl:bg-transparent"

export const UseCaseCard = ({ title, description, goTo, className } : UseCaseCardProps) => {
    return (
        <div className={clsx(baseStyle, className)}>
            <Typography variant="h3" className="text-white">
                {title}
            </Typography>
            <Typography variant="p" className="text-gray-300">
                {description}
            </Typography> 
            <TextLink 
                variant="lime" 
                label="Learn more" 
                href={goTo} 
            />
        </div>
    )
}