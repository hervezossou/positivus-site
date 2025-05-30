"use client"

import Image from "next/image";
import { Typography } from "../../common/Typography";
import { motion, AnimatePresence } from "motion/react";

interface AccordeonItemProps {
    isOpen: boolean;
    data: {
        question: string;
        response: string;
    };
    onToggle: () => void;
}

export const DisclosureItem = ({ isOpen = false, data, onToggle }: AccordeonItemProps) => {
    return(
        <div className={`${isOpen ? "bg-lime" : "bg-cloud"} w-full flex flex-col gap-[30px] px-6 py-8 md:px-10 md:py-[41px] rounded-45 border [filter:drop-shadow(0px_5px_0px_#191A23)]`}>
            <div className="flex items-center justify-between gap-x-4">
                <h4 className="text-lg md:text-xl font-medium text-black">
                    {data.question}
                </h4>
                <motion.div 
                    className="flex items-center justify-center w-[120px]"
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                    {isOpen ? 
                        <Image
                            src="/icons/minus-icon.png" 
                            width={58}
                            height={58}
                            alt="minus icon"
                            className="size-12 text-white object-cover hover:cursor-pointer" 
                            onClick={onToggle}
                        /> : 
                        <Image
                            src="/icons/plus-icon.png"
                            width={58}
                            height={58}
                            alt="plus icon"
                            className="size-12 text-white object-cover hover:cursor-pointer"
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
                            <Typography variant="p">{data.response}</Typography>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}