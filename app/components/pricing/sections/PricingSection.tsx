import { Typography } from "@/common/Typography"
import { PricingCard } from "@/pricing/ui/PricingCard"
import { pricingCardData } from "../../../lib/data"

export const PricingSection = () => {
    return (
        <section className="flex flex-col gap-y-8 py-4 lg:py-8 lg:gap-12">
            <div className="flex flex-col items-start gap-y-4 max-w-2xl lg:flex-row lg:items-center lg:gap-10 lg:max-">
                <Typography variant="h1">
                    Pricing
                </Typography>
                <Typography variant="p">
                    Elevate your Online Presence: Compettitve Pricing for Exceptional Results
                </Typography>
            </div>
            <div className="w-full flex flex-col items-center gap-y-8 md:flex-row md:justify-between md:flex-wrap lg:flex-nowrap lg:gap-x-10">
                {pricingCardData.map((plan, index) => (
                    <PricingCard 
                        key={index} 
                        type={plan.type} 
                        price={plan.price} 
                        isPopular={plan.isPopular} 
                        advantages={plan.advantages}
                        variant={index % 2 === 0 ? "light" : "dark"}
                    />
                ))}
            </div>
        </section>
    )
}