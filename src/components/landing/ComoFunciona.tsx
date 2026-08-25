"use client";

import { FadeIn } from "@/components/FadeIn";
import { TextReveal } from "@/components/TextReveal";
import { StaggerChildren, StaggerItem } from "@/components/StaggerChildren";
import { GlowOrb } from "./helpers";

const steps = [
  { step: "01", verb: "Descubra", description: "Encontre atletas com dados reais, audiência decomposta e Fit Score proprietário." },
  { step: "02", verb: "Ative", description: "Proponha ativações, negocie e formalize contratos em um único fluxo." },
  { step: "03", verb: "Escale", description: "Pagamento protegido, operação centralizada e performance mensurável." },
];

export function ComoFunciona() {
  return (
    <section id="como-funciona" className="px-5 md:px-10 lg:px-16 py-24 md:py-36 relative overflow-hidden">
      <GlowOrb className="w-[400px] h-[400px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />

      <div className="max-w-7xl mx-auto">
        <FadeIn className="text-center">
          <p className="font-display font-medium text-sm md:text-base tracking-widest text-text-muted uppercase mb-6">Como funciona</p>
          <TextReveal
            text="Três passos. Uma plataforma."
            className="font-display font-semibold text-3xl sm:text-5xl lg:text-7xl leading-[1.05] tracking-[-0.01em] text-text mb-20"
          />
        </FadeIn>

        <StaggerChildren className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
          {steps.map((s) => (
            <StaggerItem key={s.step}>
              <div className="card-hover rounded-xl p-8 md:p-10 border border-white/[0.06] bg-bg-card text-center h-full">
                <span className="inline-block font-display font-bold text-base text-text-muted mb-4">{s.step}</span>
                <h3 className="font-display font-semibold text-3xl md:text-4xl text-text">{s.verb}</h3>
                <p className="mt-4 text-base md:text-lg text-text-muted leading-relaxed">{s.description}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}
