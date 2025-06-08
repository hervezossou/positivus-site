import clsx from "clsx";
import { titleSize } from "../../../lib/utils/fontsize"
import { useFontSizeStore } from "../../../lib/stores/useFontSizeStore"
import { ReactNode } from "react";

interface ArticleTitleProps {
    children : ReactNode;
    className?: string;
}

export const ArticleTitle = ({ children, className } : ArticleTitleProps) => {
    const { size } = useFontSizeStore();
    return (
        <h2 className={clsx("font-bold", titleSize[size], className)}>
            {children}
        </h2>
    )
}