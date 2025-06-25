import { AboutHeroSection } from "@/about/sections/AboutHeroSection"
import { ImpactNumbersSection } from "@/about/sections/ImpactNumbersSection"
import { CoreValueSection } from "@/about/sections/CoreValueSection"
import { AwardSection } from "@/about/sections/AwardSection"
import { ExploreCareer } from "@/about/sections/ExploreCareer"

export default function Page() {
    return (
        <>
            <AboutHeroSection />
            <ImpactNumbersSection />
            <CoreValueSection />
            <AwardSection />
            <ExploreCareer />
        </>
    )
}