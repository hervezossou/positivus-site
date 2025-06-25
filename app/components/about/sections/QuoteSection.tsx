import Image from "next/image"
import { Typography } from "@/common/Typography"

export const QuoteSection = () => {
    return (
        <section className="py-4 lg:py-10">
            <div className="flex flex-col items-center justify-between gap-4 p-5 bg-dark border rounded-4xl [filter:drop-shadow(0px_5px_0px_#000000)] lg:flex-row lg:gap-10 lg:px-10 lg:py-8">
                <div className="flex items-center justify-between lg:w-1/2">
                    <Image 
                        src="/images/quote_illustration.png" 
                        alt="quote illustration" 
                        width={624}
                        height={624}
                    />
                </div>
                <div className="space-y-4 w- lg:space-y-8 lg:max-w-xl lg:pr-10">
                    <Typography variant="h2" className="text-white leading-12">
                        &quot;At Positivus, we believe  that  success is built on innovation, collaboration, and a relentless focus on delivering results.&quot;
                    </Typography>
                    <Typography variant="p" className="text-gray-300">
                        - John Smith, Founder of Positivus
                    </Typography>
                </div>
            </div>
        </section>
    )
}