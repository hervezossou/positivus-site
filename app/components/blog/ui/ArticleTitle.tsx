import clsx from "clsx";
import { titleSize } from "../../../lib/utils/fontsize"
import { useFontSizeStore } from "../../../lib/stores/useFontSizeStore"
import { ReactNode } from "react";

export const ArticleTitle = ({ children } : { children : ReactNode}) => {
    const { size } = useFontSizeStore();
    return (
        <h2 className={clsx("font-bold", titleSize[size])}>
            {children}
        </h2>
    )
}