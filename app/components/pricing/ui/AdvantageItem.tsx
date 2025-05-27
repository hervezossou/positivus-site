import { Check } from "lucide-react"

type Variant = "light" | "dark";

interface AdavantageItemProps {
    item: string;
    variant: Variant
}

export const AdavantageItem = ({ item, variant } : AdavantageItemProps) => {
    return (
        <div className="flex items-center gap-x-4">
            <div className="bg-lime flex items-center justify-center text-black size-6 p-1 rounded-full">
                <Check className="size-5 font-bold text-black" />
            </div>
            <p className={`text-sm ${variant === "light" ? "text-black" : "text-white"} md:text-base`}>{item}</p>
        </div>
    )
}