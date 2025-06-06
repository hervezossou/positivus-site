import { PostAuthorCard } from "../ui/PostAuthorCard"
import { FontSizePicker } from "../ui/FontSizePicker"

export const ArticleHeading = () => {
    return (
        <div className="sticky top-24 backdrop-blur-xs bg-white/40 space-y-8">
            <div className="flex items-center justify-between gap-auto px-4">
                <PostAuthorCard />
                <FontSizePicker />
            </div>
            <div className="bg-black w-full h-0.5 -mt-6"></div>
        </div>
    )
}