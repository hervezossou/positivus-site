import Image from "next/image"
import { Typography } from "@/common/Typography"

export const PostAuthorCard = () => {
    return (
    <div className="max-w-max flex items-center justify-between gap-4 p-4">
        <Image 
            src="/images/sarah-kim.png" 
            width={64} 
            height={64} 
            className="object-cover aspect-square"
            priority={false}
            loading="lazy"
            alt="Post Author Picture"
        />
        <div className="flex flex-col items-start justify-between gap-auto">
            <h4 className="font-semibold text-black text-sm md:text-base">Sarah Kim</h4>
            <Typography variant="p">
                Content Creator
            </Typography>
        </div>
    </div>
    )
}