import clsx from "clsx";
import { Typography } from "./Typography";

type Variant = "lime" | "dark" | "light";

interface HeadingProps {
    variant: Variant;
    label: string;
}

const baseStyle = "w-[119px] h-[51px] flex items-center justify-center gap-[10px] text-[40px] font-medium py-0 px-[7px] rounded-[7px]"

const variantStyle: Record<Variant, string> = {
    dark: "bg-dark text-white",
    light: "bg-white text-slate-800",
    lime: "bg-lime text-slate-800",
}

export const Heading = ({variant = "dark", label}: HeadingProps) => {
    return(
        <div className={clsx(variantStyle[variant], baseStyle)}>
            <Typography variant="h2" className={`${variant === "dark" && "text-white"}`}>{label}</Typography>
        </div>
    )
}