import clsx from "clsx";
import { ArrowUpRightIcon } from "@heroicons/react/24/solid";

type Variant = "lime" | "dark" | "light";

interface TextLinkProps {
    variant: Variant;
    label: string;
}

const baseStyle = "w-auto h-[28px] flex items-center gap-[15px] text-xl font-normal p-0"

const variantStyle: Record<Variant, string> = {
    dark: "bg-transparent text-white",
    light: "bg-transparent text-white",
    lime: "bg-transparent text-lime",
}

export const TextLink = ({variant = "dark", label}: TextLinkProps) => {
    return(
        <div className={clsx(variantStyle[variant], baseStyle)}>
            <span>{label}</span>
            <ArrowUpRightIcon className="size-5" />
        </div>
    )
}