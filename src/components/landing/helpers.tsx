export function GlowOrb({ className, color = "white" }: { className?: string; color?: "accent" | "white" }) {
  return (
    <div
      className={`absolute rounded-full blur-[120px] pointer-events-none drift-slow ${color === "accent" ? "bg-accent/10" : "bg-white/[0.03]"} ${className}`}
    />
  );
}

export function TrendingArrow({ value }: { value: string }) {
  return (
    <div className="flex items-center gap-1.5">
      <svg width="12" height="12" viewBox="0 0 14 14" fill="none" className="text-accent">
        <path d="M7 2L12 7.5H9V12H5V7.5H2L7 2Z" fill="currentColor" />
      </svg>
      <span className="font-display font-bold text-accent tabular-nums text-sm">{value}</span>
    </div>
  );
}
