import clsx from "clsx";
import { JSX, ReactNode } from "react";

type Variant = "h1" | "h2" | "h3" | "h4" | "p";

interface TypographyProps {
    variant: Variant;
    className?: string;
    children?: ReactNode;
    component?: keyof JSX.IntrinsicElements;
}

const variantStyles: Record<Variant, string> = {
    h1: "leading-12 text-[43px] md:text-6xl font-medium text-slate-900 md:leading-16",
    h2: "text-4xl md:text-[40px] font-medium text-slate-900",
    h3: "text-[26px] md:text-3xl font-medium text-slate-900",
    h4: "text-lg md:text-xl font-medium text-slate-900",
    p: "text-sm md:text-lg font-normal text-slate-900"
}

export const Typography = ({
    variant = "p",
    component,
    className,
    children,
    ...props
}: TypographyProps) => {
    const Component = component || variant || "p";

    return (
        <Component
            className={clsx(variantStyles[variant], className)}
            {...props}
        >
            {children}
        </Component>
    )
}