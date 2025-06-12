import clsx from "clsx";
import Link from "next/link";
import { ArrowUpRightIcon } from "@heroicons/react/24/solid";

interface FeaturedLinkProps {
    label: string;
    href?: string;
    className?: string;
}

const globalStyle = "w-auto h-[41px] flex items-center gap-[15px] text-xl font-normal p-0 group";

const baseIconStyle = "flex items-center justify-center w-[41px] h-[41px] rounded-full";
const iconStyle = "bg-lime text-dark stroke-dark";

const labelStyle = "text-xl text-lime leading-[28px] group-hover:underline"

export const FeaturedLink = ({ label, href, className }: FeaturedLinkProps) => {
    return(
        <Link className={clsx(globalStyle, className)} href={`${href ? href : "/"}`}>
            <div className={clsx(baseIconStyle, iconStyle)}>
                <ArrowUpRightIcon className="size-6 font-bold stroke-2" />
            </div>
            <span className={clsx(labelStyle)}>{label}</span>
        </Link>
    )
}