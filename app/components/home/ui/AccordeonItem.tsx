"use client"

import Image from "next/image";
import { Typography } from "../../common/Typography";
import { motion, AnimatePresence } from "motion/react";
import { useMediaQuery } from "../../../lib/utils/hooks";

interface AccordeonItemProps {
    isOpen: boolean;
    data: {
        position: string;
        title: string;
        description: string;
    };
    onToggle: () => void;
}

export const AccordeonItem = ({ isOpen = false, data, onToggle }: AccordeonItemProps) => {
    const isMobile = useMediaQuery('max-width: 768px');
    return(
        <div className={`${isOpen ? "bg-lime" : "bg-cloud"} w-full flex flex-col gap-[30px] px-15 py-[41px] rounded-45 border [filter:drop-shadow(0px_5px_0px_#191A23)]`}>
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <Typography variant="h1">{data.position}</Typography>
                    <Typography variant={`${isMobile ? "h4" : "h3"}`}>
                        {data.title}
                    </Typography>
                </div>
                <motion.div 
                    className="flex items-center justify-center"
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                    {isOpen ? 
                        <Image
                            src="/icons/minus-icon.png" 
                            width={58}
                            height={58}
                            alt="minus icon"
                            className="size-12 text-white hover:cursor-pointer" 
                            onClick={onToggle}
                        /> : 
                        <Image
                            src="/icons/plus-icon.png"
                            width={58}
                            height={58}
                            alt="plus icon"
                            className="size-12 text-white hover:cursor-pointer"
                            onClick={onToggle}
                        />
                    }
                </motion.div>
            </div>
            <AnimatePresence initial={false}>
                {isOpen && (
                    <motion.div 
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                    >
                        <div className="flex flex-col items-center gap-2">
                            <div className="bg-black w-full h-[1px] my-2"></div>
                            <Typography variant="p">{data.description}</Typography>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}