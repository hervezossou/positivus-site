import clsx from "clsx";
import Link from "next/link";
import { ArrowUpRightIcon } from "@heroicons/react/24/solid";

type Variant = "lime" | "dark" | "light";

interface TextLinkProps {
    variant: Variant;
    label: string;
    href: string;
}

const baseStyle = "w-auto h-[28px] flex items-center gap-[15px] text-xl font-normal p-0 group"

const variantStyle: Record<Variant, string> = {
    dark: "bg-transparent text-white stroke-white",
    light: "bg-transparent text-white stroke-white",
    lime: "bg-transparent text-lime stroke-lime",
}

export const TextLink = ({variant = "dark", label, href}: TextLinkProps) => {
    return(
        <Link className={clsx(variantStyle[variant], baseStyle)} href={href}>
            <span>{label}</span>
            <ArrowUpRightIcon className="size-6 font-bold stroke-1 group-hover:rotate-45 ease-in-out duration-200" />
        </Link>
    )
}