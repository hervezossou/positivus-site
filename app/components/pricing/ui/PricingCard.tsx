import clsx from "clsx";
import { Button } from "../../common/Button";
import { AdavantageItem } from "./AdvantageItem";

type Variant = "light" | "dark"

interface PricingCardProps {
    type: string
    price: string;
    isPopular: boolean;
    advantages: string[];
    variant: Variant;
}

const baseStyle = "w-full h-[900px] flex flex-col items-start gap-y-4 px-4 pt-5 pb-12 rounded-3xl md:w-xs lg:w-1/3 lg:px-8";
const variantStyle: Record<Variant, string> = {
    light: "bg-white text-black border [filter:drop-shadow(0px_5px_0px_#191A23)]",
    dark: "bg-dark text-white [filter:drop-shadow(0px_5px_0px_#191A23)]",
}

export const PricingCard = ({ type, price, isPopular, advantages, variant } : PricingCardProps) => {
    return (
        <div className={clsx(baseStyle, variantStyle[variant])}>
            <div className="flex items-center justify-between w-full">
                <p className="text-lg font-semibold md:text-xl">
                    {type} Plan
                </p>
                {isPopular && (
                    <div className="bg-lime flex items-center justify-center rounded-45 px-4 py-1 w-max h-max text-sm text-black font-medium md:text-base">
                        Popular
                    </div>
                )}
            </div>
            <p className={`text-2xl ${variant === "light" ? "text-black" : "text-white"} font-semibold md:text-4xl`}>
                {price}<span className="text-sm font-normal md:text-base"> /month</span>
            </p>
            <div className="w-full flex flex-col gap-y-4 pt-8 pb-6">
                {type !== "Pro" ? 
                    <Button 
                        variant="contained" 
                        label="Get Started" 
                    /> : 
                    <Button 
                        variant="positive" 
                        label="Get Started" 
                    />
                }
                <Button 
                    variant="outlined" 
                    label="Request a Quote"
                    className={`${variant === "light" ? "border-black text-black" : "border-white text-white hover:bg-white"}`}
                />
            </div>
            <div className={`w-full h-0.5 bg-black ${variant === "light" ? "bg-black" : "bg-white"}`}></div>
            <div className="flex flex-col items-start gap-y-5 pt-4 pb-32">
                {advantages.map((item, index) => (
                    <AdavantageItem 
                        key={index} 
                        item={item}
                        variant={variant} 
                    />
                ))}
            </div>
        </div>
    )
}