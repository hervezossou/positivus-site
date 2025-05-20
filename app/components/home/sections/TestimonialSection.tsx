"use client"

import { Heading } from "../../common/Heading"
import { Typography } from "../../common/Typography"
import { TestimonialCard } from "../ui/TestimonialCard"
import { Navigation } from "../ui/Navigation"
import { testimonials } from "components/app/lib/data"
import { useState } from "react"
import { motion } from "motion/react"

export const TestimonialSection = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrevious = () => {
        setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
    };

    const handleNext = () => {
        setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    };

    return (
        <section className="flex flex-col gap-y-10 py-4 lg:py-10">
            <div className="flex flex-col items-center justify-center gap-8 md:flex-row md:justify-start md:gap-10">
                <Heading variant="lime" label="Testimonials" />
                <Typography variant="p" className="w-auto text-center md:w-[473px] md:text-left">
                    Hear from Our Satisfied Clients: Read Our Testimonials to Learn More about Our Digital Marketing Services
                </Typography>
            </div>
            <div className="w-full h-screen flex flex-col items-center justify-center px-20 bg-dark rounded-45 md:h-[625px]">
                <div className="relative w-full overflow-hidden">
                    <motion.div
                        className="flex w-full shrink-0 items-center justify-between transition-transform duration-500 ease-in-out"
                        style={{ transform: `translateX(-${currentIndex * 80}%)` }}
                    >
                        {testimonials.map((testimonial, index) => (
                            <TestimonialCard key={index} testimonial={testimonial} />
                        ))}
                    </motion.div>
                </div>
                <Navigation 
                    currentIndex={currentIndex} 
                    totalItems={testimonials.length - 1} 
                    onPrevious={handlePrevious}
                    onNext={handleNext}
                />
            </div>
        </section>
    )
}