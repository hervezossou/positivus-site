import { Heading } from "@/common/Heading"
import { Typography } from "@/common/Typography"
import { ServiceCard } from "@/services/ui/ServiceCard"
import { servicesData } from "../../../lib/data"

export const ServiceSection = () => {
    return (
        <section className="flex flex-col py-4 gap-y-14 lg:py-10">
            <div className="flex flex-col items-center justify-center gap-8 md:flex-row md:justify-start md:gap-10">
                <Heading variant="lime" label="Our Other Services" />
                <Typography variant="p" className="w-[390px] text-center md:w-[580px] md:text-left">
                    At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include:
                </Typography>
            </div>
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-10">
                {servicesData.map((service, index) => {
                    return (
                        <ServiceCard 
                            key={`${service.title}-${service.subtitle}-${index}`}
                            service={service}
                        />
                    );
                })}
            </div>
        </section>
    )
}