import clsx from "clsx";
import { useFontSizeStore } from "../../../lib/stores/useFontSizeStore";
import { hightlightSize, titleSize } from "../../../lib/utils/fontsize";
import { ArticleParagraph } from "../ui/ArticleParagraph";
import { ArticleTitle } from "@/blog/ui/ArticleTitle";
import { ArticleList } from "@/blog/ui/ArticleList";

export const ArticleText = () => {
    const { size } = useFontSizeStore();

    return (
        <section className="w-full space-y-6 text-justify">
            <ArticleParagraph className="font-medium lg:px-24 xl:px-64">
                In the ever-evolving digital landscape, businesses are faced with an important question : should they invest in pay-per-click (PPC) advertising or focus on organic marketing strategies? While both approaches have their merits, choosing the right one depend on your goals, and timeline. Let&apos;s dive into the stregths, challenges, and real-world applications of PPC and organic marketing to help you make an informed decision.
            </ArticleParagraph>
            <article className="space-y-5 lg:px-24 xl:px-64">
                <ArticleTitle>
                    The Challenge of Standing Out Online
                </ArticleTitle>
                <ArticleParagraph>
                    Every day, millions of businesses compete for visibility online, making it increasingly difficult to capture the attention of potential customers. Organic search results are highly sought after, but earning a top spot on Google takes time and consistent effort. Meanwhile, PPC ads promise instant visibility but can quickly drain your budget if not executed effctively.
                </ArticleParagraph>
                <ArticleParagraph>
                    For small businesses with limited resources, this dilemma can feel like an impossible balancing act. Do you play the long game with organic strategies or opt for quick wins with PPC?
                </ArticleParagraph>
            </article>
            <article className="space-y-5 lg:px-24 xl:px-64">
                <ArticleTitle>
                    Comparing PPC and Organic Marketing
                </ArticleTitle>
                <ArticleParagraph>
                    Pay-per-click (PPC) and organic markting each offer distinct advantages and challenges, making them effective for different business needs. PPC is designed to deliver immediate results by securing top placements on search engines or social media platforms, providing businesses with isntant visibility. It allows for precise targeting based on factors like demographics, bahavior, and location, offering flexibility to start small and scale as needed. However, PPC can become expensive quickly, particularly in competitive industries, and its results are short-lived since the traffic stops when the campaign ends.
                </ArticleParagraph>
                <ArticleParagraph>
                    In constrast, organic marketing fucused on building a strong, sustainable presence through strategies like search engine optimization (SEO) and content creation. This approache builds trust and credibility over time, delivering consistent traffic without the need for ongoing ad spend. While the results can take longer to materialize and are less immediate than PPC, organic marketing provides long-term benefits that make valuable strategy for sustainable growth.
                </ArticleParagraph>
            </article>
            <article className="space-y-5 lg:px-24 xl:px-64">
                <ArticleTitle>
                    Striking the Right Balance
                </ArticleTitle>
                <ArticleParagraph className={clsx(hightlightSize[size], "pl-10 py-1 border-l-4 border-l-lime")}>
                    &quot;PPC and organic marketing aren&apos;t rivals, they&apos;re teammates. The best strategies combine both to create a holistic approch to growth&quot;, says a digital marketing expert.
                </ArticleParagraph>
                <ArticleParagraph>
                    For instance, a business might use PPC to generate quick traffic for a new product launch while building long-term organic authority through SEO and blogging. Combining theses strategies ensures you&apos;re reaching your audience now while laying the groundwork for future success.
                </ArticleParagraph>
                <ArticleParagraph>
                    For small business with limited resources, this dilemma can feel like an impossible balancing act. Do you play the long game with organic strategues or opt for quick wins with PPC?
                </ArticleParagraph>
            </article>
            <div className="lg:px-24 xl:px-64">
                <ArticleTitle>
                    By the Numbers: Facts About PPC and Organic Marketing
                </ArticleTitle>   
            </div>
            <div className="w-full flex flex-col space-y-4 mt-16 mb-20">
                <div className="w-full flex flex-col items-center justify-center gap-4 lg:flex-row">
                    <div className="w-full h-48 p-12 space-y-1 bg-white rounded-3xl border [filter:drop-shadow(0px_5px_0px_#191A23)] lg:basis-xl lg:p-8 xl:basis-3xl xl:p-12">
                        <ArticleParagraph>
                            Business earns an average of
                        </ArticleParagraph>
                        <ArticleTitle>
                            $2 for every $1 spent
                        </ArticleTitle>
                        <ArticleParagraph>
                            on PPC advertising.
                        </ArticleParagraph>
                    </div>
                    <div className="w-full h-48 p-12 space-y-1 bg-lime rounded-3xl">
                        <ArticleTitle>
                            41% of clicks
                        </ArticleTitle>
                        <ArticleParagraph>
                            on search engines go to the top three organic results, showing the importance of ranking highly.
                        </ArticleParagraph>
                    </div>
                </div>
                <div className="w-full flex flex-col items-center justify-center gap-4 lg:flex-row">
                    <div className="w-full h-48 p-12 space-y-1 bg-cloud rounded-3xl">
                        <ArticleParagraph>
                            Content marketing oosts <strong className={clsx(titleSize[size], "pl-4")}>62% less than paid ads</strong>
                        </ArticleParagraph>
                        <ArticleParagraph>
                            but generates <strong className={clsx(titleSize[size], "pl-4")}>3x as many leads</strong>
                        </ArticleParagraph>
                    </div>
                    <div className="w-full h-48 p-12 bg-dark rounded-3xl lg:basis-xl lg:p-4 xl:basis-3xl xl:p-12 xl:space-y-1">
                        <ArticleParagraph className="text-gray-100">
                            Organic search drives
                        </ArticleParagraph>
                        <ArticleTitle className="text-white">
                            <span className="text-lime">53%</span> of all website traffic,
                        </ArticleTitle>
                        <ArticleParagraph className="text-gray-100">
                            making it the largest single source of traffic.
                        </ArticleParagraph>
                    </div>
                </div>
            </div>
            <article className="space-y-5 lg:px-24 xl:px-64">
                <ArticleTitle>
                    Real-World Examples
                </ArticleTitle>
                <ArticleParagraph>
                    PPC and organic marketing have proven effective in different scenarios, and real-world examples highlight their impact. A local restaurant, for instance, leveraged Google Ads to target the search term &quot;best italian food near me&quot;, which led to a remarkable 120% increase in reservations within just two weeks. Similarly, a B2B SaaS company focused on organic marketing by investing in SEO and blog content. This strategic approach helped them rank for competitive keywords and boosted their website traffic by 200% over sice months. Some businesses find success by combining both strategies, like an e-commerce retailer that launched a targeted PPC campaign for seasonal sales while simultaneously optimizing product pages for organic search. This hybrid approach resulted in a 30% higher return on investment compared to relying solely on PPC advertising.
                </ArticleParagraph>
            </article>
            <article className="space-y-5 lg:px-24 xl:px-64">
                <ArticleTitle>
                    Key Takeaways for Your Marketing Strategy
                </ArticleTitle>
                <ArticleList>
                    <li>
                        PPC is ideal for short-term goals, like promoting sales, events, or new products.
                    </li>
                    <li>
                        Organic marketing is better for long-term growth, building trust, and creating lasting customer relationships.
                    </li>
                    <li>
                        A hybrid approach offers the best of both worlds, balancing quick wins with sustainable development.
                    </li>
                </ArticleList>
            </article>
            <article className="space-y-5 lg:px-24 xl:px-64">
                <ArticleTitle>
                    Choosing the Best Strategy for Your Business
                </ArticleTitle>
                <ArticleParagraph>
                    Ultimately, the choice between PPC and organic marketing depends on your specific needs. If you&apos;re working with a tight deadline or launching a new service, PPC can deliver immediate results. On the other hand, if you&apos;re focused on building a loyal audience and maintaining a steady flow of leads, organic marketing is your best bet.
                </ArticleParagraph>
                <ArticleParagraph>
                    By understanding the strenghts and limitations of both strategies, you can create a marketing plan that aligns with your goals, budget, and target audience. Ready to take your next step? Start building a strategy that drives results today.
                </ArticleParagraph>
            </article>
        </section>
    )
}