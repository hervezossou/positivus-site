import clsx from "clsx";
import { paragraphSize } from "../../../lib/utils/fontsize"
import { useFontSizeStore } from "../../../lib/stores/useFontSizeStore"
import { ReactNode } from "react";

interface ArticleParagraphProps {
    children : ReactNode;
    className?: string;
}

export const ArticleParagraph = ({ children, className } : ArticleParagraphProps) => {
    const { size } = useFontSizeStore();
    return (
        <p className={clsx(paragraphSize[size], className)}>
            {children}
        </p>
    )
}