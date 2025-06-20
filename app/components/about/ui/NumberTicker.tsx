"use client"

import clsx from "clsx";
import { useEffect, useState } from "react";

type Variant = "count" | "percent";

interface NumberTickerProps {
  value: number;
  duration?: number; // en millisecondes
  formatFn?: (n: number) => string;
  variant: Variant;
  className?: string;
}

export const NumberTicker = ({
  value,
  duration = 2000,
  formatFn = (n) => n.toLocaleString(),
  variant="count",
  className = "",
}: NumberTickerProps) => {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    let start: number | null = null;
    const startValue = displayValue;
    const diff = value - startValue;

    const step = (timestamp: number) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      const currentValue = startValue + diff * progress;
      setDisplayValue(currentValue);

      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };

    requestAnimationFrame(step);
  }, [value, duration]);

  return (
    <span className={clsx("text-3xl font-bold", className)}>
      {formatFn(Math.round(displayValue))}{variant === "percent" ? "%" : "+"}
    </span>
  );
}
