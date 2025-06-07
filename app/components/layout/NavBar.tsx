"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { usePathname } from "next/navigation"
import { navLinks } from "../../../app/lib/data"
import { Button } from "@/common/Button"
import { NavLink } from "@/common/NavLink"
import { motion } from "motion/react"

export const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();

    return (
        <header className="flex items-center py-4 lg:py-10">
            <div className="w-full flex items-center justify-between gap-x-10">
                <Link href="/">
                    <Image 
                        src="/logo-dark.png" 
                        alt="Positivus black logo" 
                        width={180} 
                        height={29} 
                        className="aspect-auto" 
                    />
                </Link>

                {/* Desktop Navbar */}
                <div className="hidden lg:flex items-center gap-x-8">
                    <nav className="flex items-center gap-x-10">
                        {navLinks.map((link) => (
                            <NavLink key={link.label} href={link.path} label={link.label} />
                        ))}
                    </nav>
                    <Button label="Request a Quote" variant="outlined" />
                </div>
                {/* Mobile Navbar */}
                <motion.div 
                    className="flex items-center justify-center lg:hidden"
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                    {isOpen ? 
                        <Image
                            src="/icons/close-icon.svg" 
                            width={58}
                            height={58}
                            alt="minus icon"
                            className="size-12 p-2 text-white flex items-center justify-center hover:cursor-pointer" 
                            onClick={() => setIsOpen(!isOpen)}
                        /> : 
                        <Image
                            src="/icons/menu-icon.svg"
                            width={58}
                            height={58}
                            alt="plus icon"
                            className="size-12 p-2 text-white flex items-center justify-center hover:cursor-pointer"
                            onClick={() => setIsOpen(!isOpen)}
                        />
                    }
                </motion.div>
            </div>
            {isOpen && (
                <motion.div 
                    className="absolute top-20 left-0 flex flex-col gap-y-8 w-full h-screen border-t-1 border-dark px-6 py-8 bg-white"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                >
                    <nav className="flex flex-col gap-y-4">
                        {navLinks.map((link) => (
                            <Link 
                                key={link.label} 
                                href={link.path}
                                className={`text-black text-2xl py-2 bg-gray-100 px-6 rounded-md hover:bg-lime ${link.path === pathname && "bg-lime"}`}
                            >
                                {link.label}
                            </Link>
                        ))}
                    </nav>
                    <Button label="Request a Quote" variant="outlined" />
                </motion.div>
            )}
        </header>   
    )
}