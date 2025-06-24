import { AboutHeroSection } from "@/about/sections/AboutHeroSection"
import { ImpactNumbersSection } from "@/about/sections/ImpactNumbersSection"
import { CoreValueSection } from "@/about/sections/CoreValueSection"
import { AwardSection } from "@/about/sections/AwardSection"

export default function Page() {
    return (
        <>
            <AboutHeroSection />
            <ImpactNumbersSection />
            <CoreValueSection />
            <AwardSection />
        </>
    )
}