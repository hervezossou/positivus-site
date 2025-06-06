"use client"

import { HeroSection } from "../components/blog/sections/HeroSection";
import { ArticleHeading } from "../components/blog/sections/ArticleHeading";
import { ArticleText } from "../components/blog/sections/ArticleText";

export default function Page() { 
    return (
        <>
            <HeroSection />
            <ArticleHeading />
            <ArticleText />
        </>
    )
}