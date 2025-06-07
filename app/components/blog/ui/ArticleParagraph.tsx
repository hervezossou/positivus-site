import clsx from "clsx";
import { paragraphSize } from "components/app/lib/utils/fontsize"
import { useFontSizeStore } from "components/app/lib/stores/useFontSizeStore"
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