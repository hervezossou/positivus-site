import { PostAuthorCard } from "../ui/PostAuthorCard"
import { FontSizePicker } from "../ui/FontSizePicker"

export const ArticleHeading = () => {
    return (
        <>
            <div className="flex items-center justify-between gap-auto p-0">
                <PostAuthorCard />
                <FontSizePicker />
            </div>
            <div className="bg-black w-full h-0.5 -mt-6"></div>
        </>
    )
}