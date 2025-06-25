import { AboutHeroSection } from "@/about/sections/AboutHeroSection"
import { ImpactNumbersSection } from "@/about/sections/ImpactNumbersSection"
import { CoreValueSection } from "@/about/sections/CoreValueSection"
import { AwardSection } from "@/about/sections/AwardSection"
import { ExploreCareer } from "@/about/sections/ExploreCareer"
import { QuoteSection } from "@/about/sections/QuoteSection"

export default function Page() {
    return (
        <>
            <AboutHeroSection />
            <ImpactNumbersSection />
            <CoreValueSection />
            <QuoteSection />
            <AwardSection />
            <ExploreCareer />
        </>
    )
}