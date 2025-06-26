import { AboutHeroSection } from "@/about/sections/AboutHeroSection"
import { ImpactNumbersSection } from "@/about/sections/ImpactNumbersSection"
import { JourneySection } from "@/about/sections/JourneySection"
import { CoreValueSection } from "@/about/sections/CoreValueSection"
import { AwardSection } from "@/about/sections/AwardSection"
import { ExploreCareer } from "@/about/sections/ExploreCareer"
import { QuoteSection } from "@/about/sections/QuoteSection"

export default function Page() {
    return (
        <>
            <AboutHeroSection />
            <ImpactNumbersSection />
            <JourneySection />
            <CoreValueSection />
            <QuoteSection />
            <AwardSection />
            <ExploreCareer />
        </>
    )
}