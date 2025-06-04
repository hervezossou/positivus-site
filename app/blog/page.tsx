"use client"

import clsx from "clsx";
import { useState } from "react";
import { HeroSection } from "../components/blog/sections/HeroSection";
import { ArticleHeading } from "../components/blog/sections/ArticleHeading";

export default function Page() { 
    return (
        <>
            <HeroSection />
            <ArticleHeading />
        </>
    )
}