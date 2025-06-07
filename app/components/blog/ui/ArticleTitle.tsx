import clsx from "clsx";
import { titleSize } from "components/app/lib/utils/fontsize"
import { useFontSizeStore } from "components/app/lib/stores/useFontSizeStore"
import { ReactNode } from "react";

export const ArticleTitle = ({ children } : { children : ReactNode}) => {
    const { size } = useFontSizeStore();
    return (
        <h2 className={clsx("font-bold", titleSize[size])}>
            {children}
        </h2>
    )
}