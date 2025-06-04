import { create } from "zustand";
import { FontSize } from "../types";

interface FontSizeState {
    size: FontSize;
    setSize: (size: FontSize) => void;
}

export const useFontSizeStore = create<FontSizeState>((set) => ({
    size: "small",
    setSize: (size) => set({ size }),
}))