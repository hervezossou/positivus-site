import { Heading } from "../common/Heading"
import { Typography } from "../common/Typography"
import { ServiceCard } from "./ServiceCard"
import { services } from "components/app/lib/data"

export const ServiceSection = () => {
    return (
        <section className="flex flex-col px-4 py-4 gap-y-14 lg:px-10 lg:py-10 xl:px-[100px]">
            <div className="flex flex-col items-center justify-center gap-8 md:flex-row md:justify-start md:gap-10">
                <Heading variant="lime" label="Services" />
                <Typography variant="p" className="w-[390px] text-center md:w-[580px] md:text-left">
                    At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include:
                </Typography>
            </div>
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-10">
                {services.map((service, index) => {
                    const position = (index + 1) % 3;
                    const isLatest = index === services.length - 1;
                    const variant = position === 1 ? "light" : position === 2 ? "lime" : "dark";
                    
                    return (
                        <ServiceCard 
                            key={`${service.title}-${service.subtitle}`}
                            variant={variant}
                            isLatest={isLatest}
                            service={service} 
                        />
                    );
                })}
            </div>
        </section>
    )
}