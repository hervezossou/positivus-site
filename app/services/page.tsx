import { HeroSection } from "@/services/sections/HeroSection"
import { BoostRanking } from "@/services/sections/BoostRanking"
import { WorkProcess } from "@/services/sections/WorkProcess"
import { UseCaseSection } from "@/services/sections/UseCaseSection"
import { ServiceSection } from "@/services/sections/ServiceSection"
import { SearchRanking } from "@/services/sections/SearchRanking"

export default function Page() {
    return (
        <>
            <HeroSection />
            <BoostRanking />
            <WorkProcess />
            <UseCaseSection />
            <ServiceSection />
            <SearchRanking />
        </>
    )
}
