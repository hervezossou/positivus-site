import clsx from "clsx";
import Link from "next/link";
import { ArrowUpRightIcon } from "@heroicons/react/24/solid";

type Variant = "lime" | "dark" | "light";

interface IconLinkProps {
    variant: Variant;
    label: string;
    href?: string;
}

const globalStyle = "w-auto h-[41px] flex items-center gap-[15px] text-xl font-normal p-0 group"
const baseIconVariantStyle = "flex items-center justify-center w-[41px] h-[41px] rounded-full group-hover:rotate-45 ease-in-out duration-300"
const baseLabelStyle = "text-xl leading-[28px] group-hover:underline"

const iconVariantStyle: Record<Variant, string> = {
    dark: "bg-dark text-lime stroke-lime group-hover:text-white group-hover:stroke-white",
    light: "bg-white text-dark stroke-dark group-hover:text-lime group-hover:stroke-lime",
    lime: "bg-lime text-dark stroke-dark group-hover:text-white group-hover:stroke-white",
}

const labelVariantStyle: Record<Variant, string> = {
    dark: "text-black",
    light: "text-white",
    lime: "text-black",
}

export const IconLink = ({variant = "dark", label, href}: IconLinkProps) => {
    return(
        <Link className={clsx(globalStyle)} href={`${href ? href : "/"}`}>
            <div className={clsx(baseIconVariantStyle, iconVariantStyle[variant])}>
                <ArrowUpRightIcon className="size-6 font-bold stroke-2" />
            </div>
            <span className={clsx(baseLabelStyle, labelVariantStyle[variant])}>{label}</span>
        </Link>
    )
}