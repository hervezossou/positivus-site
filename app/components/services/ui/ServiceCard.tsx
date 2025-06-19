import Image from "next/image";
import clsx from "clsx";
import { Heading } from "@/common/Heading"
import { IconLink } from "@/common/IconLink";

interface ServiceCardProps {
    service: {
        title: string;
        subtitle: string;
        image: string;
        label: string;
    };
}

const baseStyle = `w-full h-[322px] bg-cloud flex items-start justify-between rounded-[45px] p-[50px] gap-auto border [filter:drop-shadow(0px_5px_0px_#191A23)] md:items-center lg:w-full lg:h-[310px]`

export const ServiceCard = ({ service }: ServiceCardProps) => {

    return (
        <div className={clsx(baseStyle)}>
            <div className="flex flex-col items-start justify-between gap-[93px]">
                <div className="flex flex-col gap-0">
                    <Heading 
                        variant="light"
                        label={service.title} 
                    />
                    <Heading 
                        variant="light"
                        label={service.subtitle}
                    />
                </div>
                <IconLink 
                    variant="dark" 
                    label={service.label} 
                    href="/services" 
                />
            </div>
            <div className="flex items-center justify-center w-[150px] h-[150px] md:w-[180px] md:h-[180px] lg:w-[208px] lg:h-[210px] relative">
                <Image 
                    src={service.image} 
                    width={208} 
                    height={210} 
                    className="object-contain w-full h-full" 
                    alt={`${service.title}-${service.subtitle}`} 
                />
            </div>
        </div>
    )
}