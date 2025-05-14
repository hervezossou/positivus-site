"use client"

import Link from "next/link"
import { usePathname } from "next/navigation";

interface NavLinkProps {
    href: string;
    label: string;
}

export const NavLink = ({href, label}: NavLinkProps ) => {
    const pathname = usePathname();
    const isActive: boolean = href === pathname;
    return (
        <Link 
            href={href} 
            className={`max-w-[99px] h-7 text-xl leading-7 hover:border-b-3 hover:border-b-lime ${isActive && "bg-lime font-medium py-1 px-2 rounded-md"}`}
        >
            {label}
        </Link>
    )
}