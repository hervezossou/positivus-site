import { create } from "zustand";
import { FontSize } from "../utils/types";

interface FontSizeState {
    size: FontSize;
    setSize: (size: FontSize) => void;
}

export const useFontSizeStore = create<FontSizeState>((set) => ({
    size: "medium",
    setSize: (size) => set({ size }),
}))