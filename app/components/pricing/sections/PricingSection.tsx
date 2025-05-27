import { Typography } from "../../common/Typography"
import { PricingCard } from "../ui/PricingCard"
import { pricingCardData } from "components/app/lib/data"

export const PricingSection = () => {
    return (
        <section className="flex flex-col gap-y-8 py-4 lg:py-10">
            <div className="flex flex-col items-start gap-y-4 max-w-md">
                <Typography variant="h1">
                    Pricing
                </Typography>
                <Typography variant="p">
                    Elevate your Online Presence: Compettitve Pricing for Exceptional Results
                </Typography>
            </div>
            <div className="flex flex-col items-center gap-y-8 md:flex-row md:justify-between md:gap-x-8">
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