"use client";

const gradeColors: Record<string, { bg: string; text: string }> = {
  "A+": { bg: "bg-emerald-500/20", text: "text-emerald-400" },
  A: { bg: "bg-emerald-500/15", text: "text-emerald-400" },
  "B+": { bg: "bg-yellow-500/15", text: "text-yellow-400" },
  B: { bg: "bg-yellow-500/10", text: "text-yellow-400" },
  C: { bg: "bg-red-500/15", text: "text-red-400" },
};

export function MetricBadge({
  grade,
  label,
}: {
  grade: string;
  label?: string;
}) {
  const colors = gradeColors[grade] ?? {
    bg: "bg-white/10",
    text: "text-text",
  };

  return (
    <div className="flex items-center gap-3">
      <span
        className={`inline-flex items-center justify-center w-10 h-10 rounded-lg font-display font-bold text-sm ${colors.bg} ${colors.text}`}
      >
        {grade}
      </span>
      {label && <span className="text-xs text-text-muted">{label}</span>}
    </div>
  );
}
