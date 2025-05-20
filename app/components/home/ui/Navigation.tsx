import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/solid"

interface NavigationProps {
    totalItems: number;
    currentIndex: number;
    onPrevious: () => void;
    onNext: () => void;
}

export const Navigation = ({ totalItems, currentIndex, onPrevious, onNext }: NavigationProps) => {
    return (
        <div className="w-[564px] h-[14px] flex items-center justify-between mt-[124px] px-20">
            <button 
                onClick={onPrevious}
                className={`${currentIndex === 0 ? "text-white cursor-not-allowed" : "text-lime cursor-pointer"} w-5 h-0.5`}
                disabled={currentIndex === 0}
            >
                <ArrowLeftIcon className="w-5 h-5" />
            </button>
            <div className="flex gap-2">
                {Array.from({ length: totalItems }).map((_, index) => (
                    <svg 
                        key={index}
                        xmlns="http://www.w3.org/2000/svg" 
                        width="14" 
                        height="14" 
                        viewBox="0 0 14 14" 
                        fill="none"
                        className="cursor-pointer"
                        onClick={() => {
                            if (index !== currentIndex) {
                                if (index < currentIndex) {
                                    onPrevious();
                                } else {
                                    onNext();
                                }
                            }
                        }}
                    >
                        <path 
                            d="M7.0099 2.05941L14 0L11.9604 7.0099L14 14L7.0099 11.9604L0 14L2.05941 7.0099L0 0L7.0099 2.05941Z" 
                            fill={index === currentIndex ? "#B9FF66" : "#FFFFFF"}
                            className="transition-colors duration-200"
                        />
                    </svg>
                ))}
            </div>
            <button 
                onClick={onNext}
                className={`${currentIndex === totalItems - 1 ? "text-white cursor-not-allowed" : "text-lime cursor-pointer"} w-5 h-0.5`}
                disabled={currentIndex === totalItems - 1}
            >
                <ArrowRightIcon className="w-5 h-5" />
            </button>
        </div>
    )
}