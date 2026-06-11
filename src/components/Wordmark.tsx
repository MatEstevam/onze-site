"use client";

import Image from "next/image";
import { useState } from "react";

export function Wordmark({
  className = "",
  variant = "horizontal",
}: {
  className?: string;
  variant?: "horizontal" | "symbol";
}) {
  const [imgError, setImgError] = useState(false);

  if (imgError) {
    return (
      <span
        className={`font-display italic font-semibold tracking-[-0.02em] uppercase ${className}`}
      >
        onze
      </span>
    );
  }

  const src =
    variant === "symbol" ? "/logo-symbol.svg" : "/logo-horizontal.svg";

  return (
    <Image
      src={src}
      alt="Onze"
      width={variant === "symbol" ? 32 : 120}
      height={variant === "symbol" ? 36 : 32}
      className={className}
      onError={() => setImgError(true)}
      priority
    />
  );
}
