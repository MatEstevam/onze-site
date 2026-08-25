"use client";

import { FadeIn } from "@/components/FadeIn";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { tractionMetrics } from "@/lib/constants";

export function TractionIndicators() {
  if (tractionMetrics.length === 0) return null;

  return (
    <section className="px-5 md:px-10 lg:px-16 py-24 md:py-36 border-t border-white/[0.06] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <FadeIn className="text-center mb-16">
          <p className="font-display font-medium text-sm md:text-base tracking-widest text-text-muted uppercase mb-6">Tração</p>
          <h2 className="font-display font-semibold text-3xl sm:text-5xl lg:text-7xl leading-[1.05] tracking-[-0.01em] text-text">
            Números que validam.
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {tractionMetrics.map((metric) => (
            <FadeIn key={metric.label}>
              <div className="text-center p-8 md:p-10 rounded-xl border border-white/[0.06] bg-bg-card">
                <div className="font-display font-bold text-6xl lg:text-7xl tracking-[-0.03em] text-accent tabular-nums accent-glow">
                  <AnimatedCounter value={metric.value} suffix={metric.suffix} />
                </div>
                <p className="mt-4 font-display font-medium text-lg text-text-muted">{metric.label}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
