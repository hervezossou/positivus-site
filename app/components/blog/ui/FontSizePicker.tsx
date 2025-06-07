import { FontSize } from "../../../lib/utils/types"
import { useFontSizeStore } from "../../../lib/stores/useFontSizeStore";

interface SizeObject {
    label: string;
    value: FontSize;
}

export const FontSizePicker = () => {
    const { size, setSize } = useFontSizeStore();

    const sizes: SizeObject[] = [
        {label: "A", value: "small"}, 
        {label: "A", value: "medium"}, 
        {label: "A", value: "large"}, 
    ]

    return (
        <div className="w-max flex flex-row-reverse items-end justify-between gap-2">
            {sizes.map((s, index) => (
                <p 
                    key={`${s.value}-${index}`} 
                    className={`${s.value === size ? "font-bold text-black" : "font-normal text-gray-300"} ${s.value === "small" ? "text-xl" : s.value === "medium" ? "text-3xl" : "text-4xl"} hover:cursor-pointer transition-all ease-in-out duration-300`}
                    onClick={() => setSize(s.value)}
                >
                    {s.label}
                </p>
            ))}
        </div>
    )
}