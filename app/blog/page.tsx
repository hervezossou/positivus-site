"use client"

import { HeroSection } from "../components/blog/sections/HeroSection";
import { ArticleHeading } from "../components/blog/sections/ArticleHeading";
import { ArticleText } from "../components/blog/sections/ArticleText";
import { MoreArticles } from "@/blog/sections/MoreArticles";
import Image from "next/image";

export default function Page() { 
    return (
        <>
            <HeroSection />
            <ArticleHeading />
            <ArticleText />
            <Image 
                src="/icons/star.png" 
                width={24} 
                height={24} 
                alt="Logo star"
                className="flex items-center justify-between mx-auto py-8"
            />
            <MoreArticles />
        </>
    )
}