import clsx from "clsx";

type Variant = "contained" | "outlined" | "positive";

interface ButtonProps {
    variant: Variant;
    label: string;
    className?: string;
    onClick?: (e: React.FormEvent) => void;
}

const baseStyle = "h-16 flex items-center justify-center gap-[10px] py-5 px-8 rounded-[14px]";
const variantStyle: Record<Variant, string> = {
    contained: "bg-dark w-auto text-white hover:scale-105 ease-in-out duration-200",
    outlined: "bg-transparent text-black border-1 hover:bg-lime hover:text-black hover:border-none ease-in-out duration-200",
    positive: "w-full bg-lime text-black hover:scale-105 ease-in-out duration-200",
}

export const Button = ({variant = "contained", label, className, onClick}: ButtonProps) => {
    return(
        <button 
            className={clsx(variantStyle[variant], baseStyle, className)} 
            onClick={onClick}
        >
            <span className={`text-xl leading-[28px]`}>
                {label}
            </span>
        </button>
    )
}