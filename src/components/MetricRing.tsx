"use client";

import { useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export function MetricRing({
  value,
  size = 48,
  strokeWidth = 3,
  label,
}: {
  value: number;
  size?: number;
  strokeWidth?: number;
  label?: string;
}) {
  const ref = useRef<SVGSVGElement>(null);
  const isInView = useInView(ref, { once: false });
  const [offset, setOffset] = useState(100);

  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const fillPercent = Math.min(Math.max(value, 0), 100);

  useEffect(() => {
    if (isInView) {
      setOffset(((100 - fillPercent) / 100) * circumference);
    }
  }, [isInView, fillPercent, circumference]);

  return (
    <div className="flex items-center gap-3">
      <svg
        ref={ref}
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        className="transform -rotate-90"
      >
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          className="metric-ring-bg"
          strokeWidth={strokeWidth}
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          className="metric-ring-fill"
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={isInView ? offset : circumference}
        />
      </svg>
      <div>
        <span className="font-display font-bold text-lg tabular-nums text-text">
          {value}
        </span>
        {label && (
          <span className="block text-xs text-text-muted">{label}</span>
        )}
      </div>
    </div>
  );
}
