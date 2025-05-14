import { useState, useEffect } from "react";

export const useOnMobile = (breakpoint = 767) => {
    const [onMobile, setOnMobile] = useState(false);

    useEffect(() => {
        const mediaQuery = window.matchMedia(`(max-width: ${breakpoint}px)`);

        const handleChange = () => setOnMobile(mediaQuery.matches);

        // initial value
        handleChange();
        mediaQuery.addEventListener("change", handleChange);

        return () => mediaQuery.removeEventListener("change", handleChange);
    }, [breakpoint])
    
    return onMobile;
}