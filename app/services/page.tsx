import { HeroSection } from "@/services/sections/HeroSection"
import { BoostRanking } from "@/services/sections/BoostRanking"
import { WorkProcess } from "@/services/sections/WorkProcess"

export default function Page() {
    return (
        <>
            <HeroSection />
            <BoostRanking />
            <WorkProcess />
        </>
    )
}
