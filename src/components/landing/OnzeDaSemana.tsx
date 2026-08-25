"use client";

import { FadeIn } from "@/components/FadeIn";
import { StaggerChildren, StaggerItem } from "@/components/StaggerChildren";
import { athleteCards, type AthleteCard } from "@/lib/constants";
import { trackAthleteModalOpen } from "@/lib/analytics";
import { AthleteProfileModal } from "./AthleteProfileModal";
import Image from "next/image";
import { useState } from "react";

export function OnzeDaSemana() {
  const [selectedAthlete, setSelectedAthlete] = useState<AthleteCard | null>(null);

  return (
    <section id="onze-da-semana" className="px-5 md:px-10 lg:px-16 py-24 md:py-36 border-t border-white/[0.06] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <FadeIn className="text-center">
          <p className="font-display font-medium text-sm md:text-base tracking-widest text-text-muted uppercase mb-6">Preview</p>
          <h2 className="font-display font-semibold text-3xl sm:text-5xl lg:text-7xl leading-[1.05] tracking-[-0.01em] text-text mb-4">O Onze da Semana</h2>
          <p className="text-text-muted text-lg md:text-xl mb-2 max-w-2xl mx-auto">Os atletas com maior Trending Score da semana. Atualizado toda segunda.</p>
          <p className="text-text-muted/60 text-sm mb-16 md:mb-20 max-w-2xl mx-auto">Uma curadoria semanal dos atletas em destaque no mercado, ranqueados por crescimento de audiência, engajamento e relevância para marcas.</p>
        </FadeIn>

        <StaggerChildren className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {athleteCards.map((atleta) => (
            <StaggerItem key={atleta.name}>
              <div
                className="group card-hover border border-white/[0.06] hover:border-accent/30 rounded-xl overflow-hidden bg-bg-card transition-colors duration-300 cursor-pointer"
                onClick={() => { setSelectedAthlete(atleta); trackAthleteModalOpen(atleta.name); }}
              >
                <div className="relative w-full h-48 sm:h-56 overflow-hidden">
                  <Image
                    src={atleta.photo}
                    alt={atleta.name}
                    fill
                    className="object-cover img-grayscale group-hover:filter-none transition-all duration-400"
                    onError={(e) => { (e.target as HTMLImageElement).src = "/logo-pattern.svg"; }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-bg-card via-bg-card/20 to-transparent" />
                  <div className="absolute top-3 right-3 w-8 h-8 flex items-center justify-center rounded-full bg-bg/60 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="text-accent"><path d="M7 17L17 7M17 7H7M17 7v10" /></svg>
                  </div>
                </div>
                <div className="p-5">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="font-display font-semibold text-xl text-text">{atleta.name}</h3>
                      <p className="text-xs text-text-muted mt-0.5">{atleta.position} · {atleta.club}</p>
                    </div>
                    <span className="font-display text-xs text-text-muted">{atleta.followers}</span>
                  </div>

                  <div className="mt-4 grid grid-cols-3 gap-2">
                    <div className="bg-bg/50 rounded-lg px-3 py-2.5 text-center">
                      <p className="font-mono font-bold text-lg text-text tabular-nums">{atleta.brandSafety}</p>
                      <p className="font-display text-[9px] tracking-wider text-text-muted uppercase mt-0.5">Safety</p>
                    </div>
                    <div className="bg-bg/50 rounded-lg px-3 py-2.5 text-center">
                      <p className="font-mono font-bold text-lg text-accent tabular-nums">{atleta.fit}</p>
                      <p className="font-display text-[9px] tracking-wider text-text-muted uppercase mt-0.5">Fit</p>
                    </div>
                    <div className="bg-bg/50 rounded-lg px-3 py-2.5 text-center">
                      <p className="font-mono font-bold text-lg text-accent tabular-nums">{atleta.trending}</p>
                      <p className="font-display text-[9px] tracking-wider text-text-muted uppercase mt-0.5">Trend</p>
                    </div>
                  </div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>

      <AthleteProfileModal
        atleta={selectedAthlete}
        open={!!selectedAthlete}
        onClose={() => setSelectedAthlete(null)}
      />
    </section>
  );
}
