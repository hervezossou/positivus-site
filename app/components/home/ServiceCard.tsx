import Image from "next/image";
import clsx from "clsx";
import { Heading } from "../common/Heading"
import { IconLink } from "../common/IconLink";

type Variant = "lime" | "dark" | "light";

interface ServiceCardProps {
    variant: Variant;
    isLatest?: boolean;
    service: {
        title: string;
        subtitle: string;
        image: string;
        label: string;
    };
}

const baseStyle = "w-full h-[322px] flex items-center justify-between rounded-[45px] p-[50px] gap-auto border drop-shadow-black lg:w-[600px] lg:h-[310px]"

const backgroundVariantStyle: Record<Variant, string> = {
    lime: "bg-lime",
    dark: "bg-black",
    light: "bg-cloud"
}

export const ServiceCard = ({ variant = "light", isLatest=true, service }: ServiceCardProps) => {
    const headingVariant = (variant === "dark" && isLatest) ? "lime" : variant === "lime" || variant === "dark" ? "light" : "lime";
    const iconLinkVariant = variant === "light" || (variant === "lime") ? "dark" : "light";

    return (
        <div className={clsx(baseStyle, backgroundVariantStyle[variant])}>
            <div className="flex flex-col items-start justify-between gap-[93px]">
                <div className="flex flex-col gap-0">
                    <Heading 
                        variant={headingVariant}
                        label={service.title} 
                    />
                    <Heading 
                        variant={headingVariant}
                        label={service.subtitle}
                    />
                </div>
                <IconLink variant={iconLinkVariant} label={service.label} href="/services" />
            </div>
            <div className="flex items-center justify-center w-auto">
                <Image src={service.image} fill className="object-cover" alt={`${service.title}-${service.subtitle}`} />
            </div>
        </div>
    )
}