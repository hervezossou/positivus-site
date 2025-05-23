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
            className={`max-w-auto h-auto text-xl hover:border-b-3 hover:border-b-lime ease-in-out ${isActive && "bg-lime font-medium py-2 px-3 rounded-md hover:border-none"}`}
        >
            {label}
        </Link>
    )
}