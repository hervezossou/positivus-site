"use client"

import Link from "next/link";
import Image from "next/image";
import { navLinks } from "components/app/lib/data";
import { socialLinks, contactInfos } from "components/app/lib/data";
import { Heading } from "../common/Heading";
import { Button } from "../common/Button";

export const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <footer className="mt-16 flex flex-col gap-y-8 bg-dark w-full px-15 pb-[50px] pt-[55px] rounded-t-45 lg:gap-y-16">
            <div className="flex flex-col items-center justify-between gap-y-4 text-white md:flex-row md:gap-y-0 md:gap-x-10 lg:text-lg">
                <Link 
                    href="/" 
                    className="flex items-center justify-center"
                >
                    <Image 
                        src="/logo-light.png" 
                        alt="Positivus white logo" 
                        width={180}
                        height={29}
                    />
                </Link>
                <div className="flex items-center flex-col gap-y-4 lg:flex-row lg:gap-x-4 lg:gap-y-0">
                    {navLinks.map((item, index) => (
                        <Link 
                            key={index} 
                            href={item.path}
                            className="text-base underline hover:text-lime lg:text-lg"
                        >
                            {item.label}
                        </Link>
                    ))}
                </div>
                <div className="hidden lg:flex items-center gap-x-4">
                    {socialLinks.map((item, index) => (
                        <Link 
                            key={index} 
                            href={item.link}
                        >
                            <Image 
                                src={item.icon}
                                width={30} 
                                height={30} 
                                alt={item.alt}
                                className="hover:scale-105 ease-in-out duration-200" 
                            />
                        </Link>
                    ))}
                </div>
            </div>
            <div className="flex flex-col gap-y-4 lg:flex-row lg:items-center lg:justify-between lg:gap-y-0 lg:gap-x-8">
                <div className="flex flex-col items-center gap-y-5 lg:items-start">
                    <Heading variant="lime" label="Contact Us" />
                    <div className="max-w-[332px] space-y-2 text-white text-base lg:text-lg">
                        {contactInfos.map((item, index) => (
                            <div key={index} className="flex flex-col items-center lg:items-start">
                                {item.label === "Email" ? (
                                    <Link 
                                        href={`mailto:${item.value}`} 
                                        className="hover:underline hover:text-lime"
                                    >
                                        {item.label}: {item.value}
                                    </Link>
                                ) : item.label === "Phone" ? (
                                    <Link 
                                        href={`tel:${item.value}`} 
                                        className="hover:underline hover:text-lime"
                                    >
                                        {item.label}: {item.value}
                                    </Link>
                                ) : <p className="text-center lg:text-left">
                                        {item.label}: {item.value}
                                    </p>
                                }
                            </div>
                        ))}
                    </div>
                </div>
                <div className="bg-[#292A32] flex flex-col items-center gap-y-4 w-full rounded-[14px] px-10 py-14 lg:flex-row lg:gap-x-4 lg:w-[634px] lg:h-[210px">
                    <div className="w-full">
                        <label htmlFor="newsletter-email" className="sr-only">
                            Email
                        </label>
                        <input 
                            type="email" 
                            name="newsletter-email" 
                            id="newsletter-email"
                            placeholder="Email"
                            className="w-full lg:w-[285px] text-white placeholder:text-white border border-white rounded-[14px] px-[35px] py-[22px] focus:outline-none focus:border-lime" 
                        />
                    </div>
                    <Button variant="positive" label="Subscribe to news" />
                </div>
            </div>
            <div className="my-4 flex items-center justify-center gap-x-4 lg:hidden">
                {socialLinks.map((item, index) => (
                    <Link 
                        key={index} 
                        href={item.link}
                    >
                        <Image 
                            src={item.icon}
                            width={30} 
                            height={30} 
                            alt={item.alt}
                            className="hover:scale-110 ease-in-out duration-300" 
                        />
                        </Link>
                    ))}
            </div>
            <hr className="text-white"></hr>
            <div className="mt-4 text-base flex flex-col items-center gap-y-4 text-white md:flex-row md:gap-y-0 md:gap-x-10 lg:text-lg">
                <p>
                    © {currentYear} Positivus. All Rights Reserved.
                </p>
                <Link href="#" className="underline">
                    Privacy Policy
                </Link>
            </div>
        </footer>
    )
}