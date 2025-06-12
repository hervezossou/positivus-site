import { Heading } from "@/common/Heading"
import { Typography } from "@/common/Typography"
import { ArticleCard } from "@/blog/ui/ArticleCard"
import { successStories } from "../../../lib/data"
import { useMediaQuery } from "../../../lib/utils/hooks"

export const SuccessStories = () => {
    const isDesktop = useMediaQuery("(min-width: 1440px)");

    return (
        <section className="flex flex-col items-center justify-between gap-12 pt-16 pb-12 lg:items-start">
            <div className="flex flex-col items-center justify-center gap-8 md:flex-row md:justify-start md:gap-10">
                <Heading variant="lime" label="All Success Stories" />
                <Typography variant="p" className="w-auto text-center md:w-[473px] md:text-left">
                    Explore Real-Life Examples of Our Proven Digital Marketing Success through Our Cases Studies
                </Typography>
            </div>
            <div className="grid grid-cols-1 justify-between gap-10 md:gap-6 lg:grid-cols-2 xl:grid-cols-3 xl:gap-0 xl:bg-white xl:rounded-45 xl:border xl:[filter:drop-shadow(0px_5px_0px_#191A23)] xl:px-10 xl:py-20">
                {successStories.map((story, index) => (
                    <ArticleCard 
                        key={`${story.title}-${index}`}
                        title={story.title} 
                        description={story.description} 
                        variant={`${isDesktop ? "outlined" : "contained"}`} 
                        className={`
                            xl:px-0 xl:py-0 xl:border-0 border-gray-500
                            ${index % 3 !== 2 ? "xl:border-r" : ""}    // column 1 et 2 : border right
                            ${index < 3 ? "xl:border-b xl:pb-12" : ""}          // row 1 : border and padding bottom
                            ${index > 2 ? "xl:pt-12" : ""}  // padding top to card of row 2
                            ${index % 3 === 0 ? "xl:pl-0 xl:pr-8" : "xl:px-8"} // the 1st card of each row no padding left
                          `}
                    />
                ))}
            </div>
        </section>
    )
}