import { Typography } from "../../common/Typography"
import { TextLink } from "../../common/TextLink"

interface CaseStudyProps {
    caseStudy: {
        description: string;
        label: string;
    }
}

export const CaseStudyCard = ({ caseStudy } : CaseStudyProps) => {
    return (
        <div className="bg-dark max-w-[350px] flex flex-shrink-0 flex-col items-start justify-between gap-5 rounded-45 px-[50px] py-[42px]">
            <Typography variant="p" className="text-white">{caseStudy.description}</Typography>
            <TextLink variant="lime" label={caseStudy.label} href="/use-cases" />
        </div>
    )
}