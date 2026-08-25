"use client";

import { FadeIn } from "@/components/FadeIn";
import { StaggerChildren, StaggerItem } from "@/components/StaggerChildren";
import { painPointCards } from "@/lib/constants";
import Image from "next/image";

function DashboardMockup() {
  return (
    <div className="dashboard-mockup border border-white/10 rounded-xl bg-bg-card p-6 md:p-8 max-w-2xl mx-auto shadow-lg shadow-black/20">
      <div className="flex items-center gap-2 mb-6">
        <div className="w-3 h-3 rounded-full bg-accent" />
        <div className="h-3 w-32 rounded-full bg-white/10" />
        <div className="ml-auto h-3 w-20 rounded-full bg-white/10" />
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        <div className="border border-white/10 rounded-lg p-5 bg-white/[0.04]">
          <p className="text-xs text-text-muted font-mono uppercase tracking-wider">Fit Score</p>
          <p className="text-3xl font-display font-bold text-accent mt-2 tabular-nums">A+</p>
        </div>
        <div className="border border-white/10 rounded-lg p-5 bg-white/[0.04]">
          <p className="text-xs text-text-muted font-mono uppercase tracking-wider">Safety</p>
          <p className="text-3xl font-display font-bold text-text mt-2 tabular-nums">91</p>
        </div>
        <div className="border border-white/10 rounded-lg p-5 bg-white/[0.04]">
          <p className="text-xs text-text-muted font-mono uppercase tracking-wider">Reach</p>
          <p className="text-3xl font-display font-bold text-text mt-2 tabular-nums">58M</p>
        </div>
        <div className="border border-white/10 rounded-lg p-5 bg-white/[0.04]">
          <p className="text-xs text-text-muted font-mono uppercase tracking-wider">Trend</p>
          <p className="text-3xl font-display font-bold text-accent mt-2 tabular-nums">+37%</p>
        </div>
      </div>
      <div className="flex items-end gap-2 h-16">
        {[40, 55, 35, 70, 60, 80, 65, 90, 75, 85, 95].map((h, i) => (
          <div
            key={i}
            className="flex-1 rounded-sm bg-accent/30 chart-bar-grow"
            style={{ height: `${h}%`, animationDelay: `${i * 0.05}s` }}
          />
        ))}
      </div>
    </div>
  );
}

export function Problem() {
  return (
    <section className="px-5 md:px-10 lg:px-16 py-24 md:py-36 border-t border-white/[0.06] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <FadeIn className="text-center">
          <p className="font-display font-medium text-sm md:text-base tracking-widest text-text-muted uppercase mb-6">O mercado hoje</p>
          <h2 className="font-display font-semibold text-3xl sm:text-5xl lg:text-7xl leading-[1.05] tracking-[-0.01em] text-text">
            O mercado que movimenta milhões ainda conecta oportunidades de forma {" "}
            <span className="text-accent">ultrapassada.</span>
          </h2>
          <div className="mt-8 text-lg md:text-xl text-text-muted leading-relaxed max-w-3xl mx-auto space-y-1">
            <p>A marca paga caro pelo nome óbvio.</p>
            <p>O atleta perde oportunidade porque ninguém encontrou.</p>
            <p>A agência opera artesanalmente.</p>
            <p>A negociação sem dado. O pagamento sem garantia. O contrato descentralizado.</p>
          </div>
        </FadeIn>

        <StaggerChildren className="mt-14 flex flex-wrap justify-center gap-3">
          {painPointCards.map((card) => (
            <StaggerItem key={card}>
              <span className="inline-block font-display font-semibold text-sm md:text-base text-red-400/90 px-5 py-2.5 rounded-full bg-red-400/[0.08] border border-red-400/20 hover:bg-red-400/20 hover:border-red-400/40 hover:text-red-300 hover:scale-105 transition-all duration-200 cursor-default">
                {card}
              </span>
            </StaggerItem>
          ))}
        </StaggerChildren>

        <FadeIn delay={0.2}>
          <div className="my-14 flex justify-center">
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" className="text-accent">
              <path d="M20 8v20m0 0l-8-8m8 8l8-8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </FadeIn>

        <FadeIn delay={0.3}>
          <p className="text-center font-display font-semibold text-2xl text-text mb-6">
            A <span className="text-accent">Onze</span> organiza o jogo.
          </p>
          <DashboardMockup />
        </FadeIn>
      </div>
    </section>
  );
}
