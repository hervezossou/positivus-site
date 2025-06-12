import clsx from "clsx";
import { Typography } from "@/common/Typography";

type Variant = "lime" | "dark" | "light";

interface HeadingProps {
    variant: Variant;
    label: string;
    className?: string;
}

const baseStyle = "w-max h-[51px] flex items-center justify-center gap-[10px] text-[40px] font-medium py-0 px-[7px] rounded-[7px]"

const variantStyle: Record<Variant, string> = {
    dark: "bg-dark text-white",
    light: "bg-white text-black",
    lime: "bg-lime text-black",
}

export const Heading = ({variant = "dark", label, className}: HeadingProps) => {
    return(
        <div className={clsx(variantStyle[variant], baseStyle, className)}>
            <Typography 
                variant="h2" 
                className={`${variant === "dark" && "text-white"} text-nowrap`}
            >
                {label}
            </Typography>
        </div>
    )
}