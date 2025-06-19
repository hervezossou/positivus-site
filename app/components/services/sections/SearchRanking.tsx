import { Typography } from "@/common/Typography"
import { Button } from "@/common/Button"
import Image from "next/image"

export const SearchRanking = () => {
    return (
        <section className="py-4 lg:py-10">
            <div className="w-full bg-white flex flex-col items-start justify-between gap-6 px-4 py-6 border [filter:drop-shadow(0px_5px_0px_#191A23)] rounded-45 xl:flex-row xl:items-center xl:px-12 xl:py-12">
                <div className="flex flex-col items-start justify-between gap-4 xl:w-1/2 xl:gap-10">
                    <Typography variant="h3">
                        Ready To Elevate Your Search Rankings ?
                    </Typography>
                    <div className="bg-black w-full h-0.5"></div>
                    <Typography variant="p">
                        Our proven SEO strategies  are designed to help  your business achieve long-lasting success in search engines. Whether  you want to boost organic traffic, improve keyword rankings, or increase conversion rate, we're here to make it  happen.
                    </Typography>
                    <Typography variant="h4">
                        Let's work together to grow your online presence.
                    </Typography>
                    <Button 
                        variant="positive" 
                        label="Start My SEO Journey"
                        className="hidden font-semibold xl:flex" 
                    />
                </div>
                <div className="flex flex-col items-center justify-center">
                    <Image 
                        src="/images/home-hero.png"
                        alt="SEO Search Boost"
                        width={512}
                        height={512}
                        loading="lazy"
                    />
                    <Button
                        variant="positive" 
                        label="Start My SEO Journey"
                        className="flex font-semibold xl:hidden"
                    />
                </div>
            </div>
        </section>
    )
}