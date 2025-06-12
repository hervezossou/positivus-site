import { Typography } from "@/common/Typography"

interface StatCardProps {
    title: string;
    description: string;
}

export const StatCard = ({ title, description }: StatCardProps) => {
    return (
        <div className="w-full bg-white flex flex-col items-center justify-center gap-4 rounded-3xl p-8 lg:w-52 lg:h-48">
            <Typography variant="h2">
                {title}
            </Typography>
            <Typography variant="p" className="text-center">
                {description}
            </Typography>
        </div>
    )
}