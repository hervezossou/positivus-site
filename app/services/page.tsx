import { HeroSection } from "@/services/sections/HeroSection"
import { BoostRanking } from "@/services/sections/BoostRanking"
import { WorkProcess } from "@/services/sections/WorkProcess"
import { UseCaseSection } from "@/services/sections/UseCaseSection"

export default function Page() {
    return (
        <>
            <HeroSection />
            <BoostRanking />
            <WorkProcess />
            <UseCaseSection />
        </>
    )
}
