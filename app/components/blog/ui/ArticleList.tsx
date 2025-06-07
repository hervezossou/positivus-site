import clsx from "clsx";
import { paragraphSize } from "../../../lib/utils/fontsize"
import { useFontSizeStore } from "../../../lib/stores/useFontSizeStore"
import { ReactNode } from "react";

export const ArticleList = ({ children } : { children : ReactNode}) => {
    const { size } = useFontSizeStore();
    return (
        <ul className={clsx("list-disc space-y-5 ml-5", paragraphSize[size])}>
            {children}
        </ul>
    )
}