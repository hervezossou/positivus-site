import { Typography } from "@/common/Typography"
import { members } from "../../../lib/data"
import Image from "next/image"
import Link from "next/link"

interface MemberCardProps {
    data: typeof members[0];
}

export const MemberCard = ({ data } : MemberCardProps) => {
    return (
        <div className="w-full  bg-cloud flex flex-col gap-[30px] px-[35px] py-[40px] rounded-45 border [filter:drop-shadow(0px_5px_0px_#191A23)] hover:scale-105 duration-300 ease-in-out">
            <div className="flex h-[102px] items-end justify-between space-x-3">
                <div className="flex items-center justify-center w-[102.82px] h-[102.82px]">
                    <Image 
                        src={data.picture} 
                        alt={`${data.name} picture`} 
                        width={102}
                        height={102}
                        loading="lazy"
                    />
                </div>
                <div className="flex flex-col items-end gap-4">
                    <Link 
                        href="https://www.linkedin.com/in/hervezossou" 
                        target="_blank" 
                        className="bg-black w-[34px] h-[34px] flex items-center justify-center rounded-full group hover:scale-110 duration-200 ease-in-out"
                    >
                        <Image 
                            src={data.icon} 
                            alt="linkedin icon" 
                            width={17} 
                            height={17} 
                            className="duration-200 ease-in-out group-hover:scale-110"
                        />
                    </Link>
                    <div className="flex w-full flex-col items-start">
                        <Typography variant="h4">
                            {data.name}
                        </Typography>
                        <Typography variant="p">
                            {data.role}
                        </Typography>
                    </div>
                </div>
            </div>
            <div className="bg-black w-full h-[1px] my-2"></div>
            <Typography variant="p" className="w-[317px]">
                {data.description}
            </Typography>
        </div>
    )
}