import { Typography } from "@/common/Typography";
import { NumberTicker } from "./NumberTicker";
import clsx from "clsx";

interface ImpactCardProps {
    value: number;
    label: string;
    variant: "count" | "percent";
    className?: string;
}

const baseStyle = "w-64 h-12 flex flex-col items-center justify-between px-4 py-5 rounded-t-2xl border-x border-t lg:px-6 lg:py-8 lg:items-start"

export const ImpactCard = ({ value, label, variant="count", className } : ImpactCardProps) => {
    return (
        <div className={clsx(baseStyle, className)}>
            <NumberTicker 
                value={value} 
                variant={variant} 
                className="whitespace-pre-wrap tracking-tighter text-black" 
            />
            <Typography variant="p">
                {label}
            </Typography>
        </div>
    )
}