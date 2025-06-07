// lib/utils/fontSize.ts
import { FontSize } from "./types"

export const paragraphSize: Record<FontSize, string> = {
  small: "text-sm md:text-base",
  medium: "text-base md:text-lg",
  large: "text-lg md:text-xl",
}

export const titleSize: Record<FontSize, string> = {
  small: "text-lg md:text-xl",
  medium: "text-2xl md:text-3xl",
  large: "text-3xl md:text-4xl",
}

export const hightlightSize: Record<FontSize, string> = {
    small: "text-base md:text-lg",
    medium: "text-lg md:text-xl",
    large: "text-xl md:text-2xl"
}
