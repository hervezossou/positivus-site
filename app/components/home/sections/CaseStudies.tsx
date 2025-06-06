import { TextLink } from "../../common/TextLink"
import { Heading } from "../../common/Heading"
import { Typography } from "../../common/Typography"
import { useMediaQuery } from "components/app/lib/utils/hooks"
import { caseStudies } from "components/app/lib/data"
import { CaseStudyCard } from "../ui/CaseStudyCard"

export const CaseStudies = () => {
    const isTablet = useMediaQuery('(max-width: 1024px)');

    return (
        <section className="flex flex-col gap-y-14 py-4 lg:py-10">
            <div className="flex flex-col items-center justify-center gap-8 md:flex-row md:justify-start md:gap-10">
                <Heading variant="lime" label="Case Studies" />
                <Typography variant="p" className="w-[390px] text-center md:w-[580px] md:text-left">
                    Explore Real-Life Examples of Our Proven Digital Marketing Success through Our Case Studies
                </Typography>
            </div>
            {!isTablet ? (
                <div className="flex items-center justify-between gap-x-16 bg-dark rounded-45 py-[70px] px-15">
                    {caseStudies.map((caseStudy, index) => (
                        <div key={index} className="flex gap-2">
                            <div className="w-[286px] h-[183px] flex flex-col justify-between gap-4">
                                <Typography variant="p" className="text-white">{caseStudy.description}</Typography>
                                <TextLink variant="lime" label={caseStudy.label} href="/use-cases" />
                            </div>
                            {(index < caseStudies.length - 1) && (
                                <div className="h-[186px] w-[1px] bg-white ml-14"></div>
                            )}
                        </div>
                    ))}
                </div>
            ) : (
                <div className="flex items-center space-x-8 pb-8 overflow-x-auto">
                    {caseStudies.map((caseStudy, index) => (
                        <CaseStudyCard key={index} caseStudy={caseStudy} />
                    ))}
                </div>
            )}
        </section>
    )
}