import { useState, useEffect } from "react";

export const useMediaQuery = (query: string) => {
    const [matches, setMatches] = useState(false);

    useEffect(() => {
        const mediaQuery = window.matchMedia(query);

        const handler = () => setMatches(mediaQuery.matches);

        // Check at the mounting time
        handler();
        mediaQuery.addEventListener("change", handler);

        return () => mediaQuery.removeEventListener("change", handler);
    }, [query])
    
    return matches;
}