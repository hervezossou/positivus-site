import clsx from "clsx"
import { Typography } from "@/common/Typography";
import { IconLink } from "@/common/IconLink";

type Variant = "contained" | "outlined";

interface ArticleCardProps {
    title: string;
    description: string;
    variant: Variant;
}

const baseStyle = "w-full flex flex-col items-start justify-between gap-y-4 px-8 py-12"

const variantStyles: Record<Variant, string> = {
    "contained": "bg-white rounded-45 border [filter:drop-shadow(0px_5px_0px_#191A23)]",
    "outlined": ""
}

export const ArticleCard = ({ title, description, variant } : ArticleCardProps) => {
    return (
        <div className={clsx(baseStyle, variantStyles[variant])}>
            <Typography variant="h3">
                {title}
            </Typography>
            <Typography variant="p">
                {description}
            </Typography>
            <IconLink variant="lime" label="Read article" />
        </div>
    )
}