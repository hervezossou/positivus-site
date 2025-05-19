interface TestimonialCardProps {
    testimonial: {
        author: string;
        position: string;
        content: string;
    }
}

export const TestimonialCard = ({ testimonial }: TestimonialCardProps) => {
    return (
        <div className="max-w-[460px] lg:max-w-[606px] h-auto flex shrink-0 flex-col gap-y-10 p-0 relative mx-8">
            <div className="flex items-end">
                <div className="max-w-full min-h-[238px] flex items-center justify-center p-8 rounded-45 border border-lime text-white relative">
                    {testimonial.content}
                </div>
                <div className="triangle-down text-lime absolute right-85 bottom-18 lg:left-20"></div>
            </div>
            <div className="max-w-[526px] ml-14 flex flex-col justify-center px-4 lg:px-8 lg:ml-16">
                <h5 className="text-lime text-xl">{testimonial.author}</h5>
                <p className="text-xl text-white">
                    {testimonial.position}
                </p>
            </div>
        </div>
    )
}