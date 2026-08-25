"use client";

import { FadeIn } from "@/components/FadeIn";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { MetricRing } from "@/components/MetricRing";
import { MetricBadge } from "@/components/MetricBadge";
import { StaggerChildren, StaggerItem } from "@/components/StaggerChildren";
import { scoreCards } from "@/lib/constants";
import { GlowOrb, TrendingArrow } from "./helpers";

export function Scores() {
  return (
    <section id="scores" className="px-5 md:px-10 lg:px-16 py-24 md:py-36 relative grid-pattern overflow-hidden">
      <GlowOrb className="w-[400px] h-[300px] top-0 right-0" color="accent" />

      <div className="max-w-7xl mx-auto">
        <FadeIn className="text-center">
          <p className="font-display font-medium text-sm md:text-base tracking-widest text-text-muted uppercase mb-6">Três scores proprietários</p>
          <h2 className="font-display font-semibold text-3xl sm:text-5xl lg:text-7xl leading-[1.05] tracking-[-0.01em] text-text mb-4">
            Inteligência proprietária para reduzir risco e aumentar fit.
          </h2>
          <p className="text-lg md:text-xl text-text-muted mb-20 max-w-3xl mx-auto">Sofisticado. Difícil de copiar. Tecnológico.</p>
        </FadeIn>

        <StaggerChildren className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
          {scoreCards.map((score) => (
            <StaggerItem key={score.name}>
              <div className="card-hover rounded-xl p-8 md:p-10 border border-white/[0.06] bg-bg-card text-center h-full">
                <span className="font-display font-medium text-sm tracking-widest text-text-muted uppercase">{score.range}</span>
                <div className="my-8 font-display font-bold text-7xl lg:text-8xl tracking-[-0.03em] text-accent tabular-nums accent-glow">
                  {score.type === "grade" ? score.display : (
                    <AnimatedCounter
                      value={score.value!}
                      prefix={score.prefix}
                      suffix={score.suffix}
                    />
                  )}
                </div>
                <div className="flex justify-center mb-4">
                  {score.type === "grade" ? (
                    <MetricBadge grade={score.display!} />
                  ) : score.type === "delta" ? (
                    <TrendingArrow value={`+${score.value}%`} />
                  ) : (
                    <MetricRing value={score.value!} size={56} strokeWidth={4} />
                  )}
                </div>
                <h3 className="font-display font-semibold text-2xl text-text">{score.name}</h3>
                <p className="mt-3 text-base text-text-muted leading-relaxed">{score.description}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}
