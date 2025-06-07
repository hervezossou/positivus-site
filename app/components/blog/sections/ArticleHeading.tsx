import { PostAuthorCard } from "@/blog/ui/PostAuthorCard"
import { FontSizePicker } from "@/blog/ui/FontSizePicker"

export const ArticleHeading = () => {
    return (
        <div className="space-y-8">
            <div className="flex items-center justify-between gap-auto px-4">
                <PostAuthorCard />
                <FontSizePicker />
            </div>
            <div className="bg-black w-full h-0.5 -mt-6"></div>
        </div>
    )
}