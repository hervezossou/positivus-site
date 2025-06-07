import { Heading } from "@/common/Heading"
import { Typography } from "@/common/Typography"
import { ArticleCard } from "@/blog/ui/ArticleCard"
import { moreInsights } from "../../../lib/data"
import { useMediaQuery } from "../../../lib/utils/hooks"

export const MoreArticles = () => {
    const isMobile = useMediaQuery("(max-width: 768px)");
    return (
        <section className="flex flex-col items-center justify-between gap-12 pt-16 pb-12 lg:items-start">
            <div className="max-w-md flex flex-col items-center gap-8 md:max-w-lg lg:max-w-5xl lg:flex-row lg:gap-16 lg:mb-8">
                {isMobile ? <div className="mx-auto flex flex-col items-center px-10">
                    <Heading variant="lime" label="Explore More" />
                    <Heading variant="lime" label="Insights" />
                </div> : 
                    <Heading variant="lime" label="EXplore More Insights" />
                }
                <Typography variant="p" className="text-center lg:text-left">
                    Discover the expert tips, strategies, and stories to keep you ahead in the digital landscape.
                </Typography>
            </div>
            <div className="grid grid-cols-1 justify-between gap-4 md:gap-6 lg:grid-cols-2 xl:grid-cols-3 xl:gap-8">
                {moreInsights.map((article, index) => (
                    <ArticleCard 
                        key={`${article.title}-${index}`}
                        title={article.title} 
                        description={article.description} 
                        variant="contained" 
                    />
                ))}
            </div>
        </section>
    )
}