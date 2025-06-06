// lib/utils/fontSize.ts
import { FontSize } from "./types"

export const paragraphSize: Record<FontSize, string> = {
  small: "text-sm",
  medium: "text-base md:text-lg",
  large: "text-lg md:text-xl",
}

export const titleSize: Record<FontSize, string> = {
  small: "text-lg",
  medium: "text-xl md:text-2xl",
  large: "text-2xl md:text-3xl",
}

export const hightlightSize: Record<FontSize, string> = {
    small: "text-base md:text-lg",
    medium: "text-lg md:text-xl",
    large: "text-xl md:text-2xl"
}
