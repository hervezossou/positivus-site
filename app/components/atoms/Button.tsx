import clsx from "clsx";

type Variant = "contained" | "outlined" | "positive";

interface ButtonProps {
    variant: Variant;
    label: string;
    onClick?: () => void;
}

const baseStyle = "flex items-center justify-center gap-[10px] font-sans py-5 px-6 rounded-[14px]"

const variantStyle: Record<Variant, string> = {
    contained: "bg-dark text-white hover:scale-105 ease-in-out duration-200",
    outlined: "bg-transparent text-slate-800 border-1 hover:scale-105 ease-in-out duration-200",
    positive: "bg-lime text-slate-800 hover:scale-105 ease-in-out duration-200",
}

export const Button = ({variant = "contained", label, onClick}: ButtonProps) => {
    return(
        <button 
            className={clsx(variantStyle[variant], baseStyle)} 
            onClick={onClick}
        >
            <span className={`text-xl leading-[28px]`}>
                {label}
            </span>
        </button>
    )
}