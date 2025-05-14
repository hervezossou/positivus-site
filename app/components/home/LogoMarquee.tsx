"use client"

import { useRef } from "react"
import { motion, useAnimationFrame, useTransform, useMotionValue } from "motion/react"
import { logos } from "components/app/lib/data"
import Image from "next/image"

export const LogoMarquee = () => {
    const baseX = useMotionValue(0);
    const containerRef = useRef(null);
    
    // Avance le défilement à chaque frame
    useAnimationFrame((t, delta) => {
        baseX.set(baseX.get() - (delta * 0.003)); // 0.05 = vitesse
    });

    const x = useTransform(baseX, (latest) => `${latest % -100}%`);

    // Nombre de logos visibles
    const visibleCount = logos.length;
    const itemWidthPercent = 100 / visibleCount;

    return (
        <div className="overflow-hidden w-full py-4 px-8">
            <motion.div 
                ref={containerRef}
                className="flex items-center justify-between gap-8"
                style={{ x }}
            >
                {[...logos, ...logos].map((logo, index) => (
                    <div
                        key={index}
                        className="flex-shrink-0"
                        style={{ width: `${itemWidthPercent}%` }}
                    >
                        <Image
                            src={logo}
                            alt={`Logo ${index}`}
                            width={100}
                            height={50}
                            className="mx-auto object-contain"
                        />
                    </div>
                ))}
            </motion.div>
        </div>
    )
}