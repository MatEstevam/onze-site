"use client";

import { type AthleteCard, APP_URL } from "@/lib/constants";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import Image from "next/image";
import { useEffect, useRef } from "react";

export function AthleteProfileModal({ atleta, open, onClose }: { atleta: AthleteCard | null; open: boolean; onClose: () => void }) {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (open) {
      // Reset scroll after dialog open animation completes (duration-100 in CSS)
      const timer = setTimeout(() => {
        if (scrollRef.current) {
          scrollRef.current.scrollTop = 0;
        }
      }, 150);
      return () => clearTimeout(timer);
    }
  }, [open, atleta]);

  if (!atleta) return null;

  const audienceData = [
    { label: "Masculino", pct: 72 },
    { label: "Feminino", pct: 28 },
  ];
  const ageData = [
    { label: "13–17", pct: 12 },
    { label: "18–24", pct: 38 },
    { label: "25–34", pct: 31 },
    { label: "35–44", pct: 13 },
    { label: "45+", pct: 6 },
  ];
  const engagementWeeks = [65, 72, 68, 80, 75, 88, 82, 91, 85, 94, 90, 97];

  return (
    <Dialog open={open} onOpenChange={(v: boolean) => { if (!v) onClose(); }}>
      <DialogContent showCloseButton={false} className="!max-w-3xl max-h-[90vh] rounded-2xl border border-white/[0.08] bg-bg-card p-0 overflow-hidden content-start">
        <DialogTitle className="sr-only">Perfil de {atleta.name}</DialogTitle>
        <div ref={scrollRef} className="overflow-y-auto max-h-[90vh] p-5 sm:p-6 md:p-10 flex flex-col">

        {/* Header */}
        <div className="flex items-center gap-4 sm:gap-6 mb-6 sm:mb-8">
          <div className="relative w-16 h-16 sm:w-24 sm:h-24 rounded-full overflow-hidden border-2 border-accent/30 shrink-0">
            <Image src={atleta.photo} alt={atleta.name} fill className="object-cover" />
          </div>
          <div>
            <h2 className="font-display font-bold text-2xl sm:text-3xl text-text">{atleta.name}</h2>
            <p className="text-text-muted mt-1">{atleta.position} · {atleta.club}</p>
            <p className="text-sm text-text-muted mt-0.5">{atleta.followers} seguidores</p>
          </div>
        </div>

        {/* Score cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
          <div className="rounded-xl border border-white/[0.06] bg-bg/60 p-5 text-center">
            <p className="font-mono font-bold text-4xl text-text tabular-nums">{atleta.brandSafety}</p>
            <p className="font-display text-xs tracking-wider text-text-muted uppercase mt-2">Brand Safety</p>
            <div className="mt-3 h-1.5 rounded-full bg-white/[0.06] overflow-hidden">
              <div className="h-full rounded-full bg-accent" style={{ width: `${atleta.brandSafety}%` }} />
            </div>
          </div>
          <div className="rounded-xl border border-white/[0.06] bg-bg/60 p-5 text-center">
            <p className="font-mono font-bold text-4xl text-accent tabular-nums accent-glow">{atleta.fit}</p>
            <p className="font-display text-xs tracking-wider text-text-muted uppercase mt-2">Fit Score</p>
            <p className="text-xs text-text-muted mt-3">Overlap demográfico alto</p>
          </div>
          <div className="rounded-xl border border-white/[0.06] bg-bg/60 p-5 text-center">
            <p className="font-mono font-bold text-4xl text-accent tabular-nums accent-glow">{atleta.trending}</p>
            <p className="font-display text-xs tracking-wider text-text-muted uppercase mt-2">Trending</p>
            <p className="text-xs text-text-muted mt-3">vs. semana anterior</p>
          </div>
        </div>

        {/* Engagement chart */}
        <div className="rounded-xl border border-white/[0.06] bg-bg/60 p-5 mb-8">
          <p className="font-display font-semibold text-sm text-text mb-4">Engajamento — últimas 12 semanas</p>
          <div className="flex items-end gap-1.5 h-24">
            {engagementWeeks.map((h, i) => (
              <div key={i} className="flex-1 rounded-sm bg-accent/30 hover:bg-accent/60 transition-colors" style={{ height: `${h}%` }} />
            ))}
          </div>
          <div className="flex justify-between mt-2">
            <span className="text-[10px] text-text-muted">12 sem atrás</span>
            <span className="text-[10px] text-text-muted">Hoje</span>
          </div>
        </div>

        {/* Audience breakdown */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          <div className="rounded-xl border border-white/[0.06] bg-bg/60 p-5">
            <p className="font-display font-semibold text-sm text-text mb-4">Gênero</p>
            <div className="space-y-3">
              {audienceData.map((d) => (
                <div key={d.label}>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-text-muted">{d.label}</span>
                    <span className="text-text font-mono tabular-nums">{d.pct}%</span>
                  </div>
                  <div className="h-1.5 rounded-full bg-white/[0.06] overflow-hidden">
                    <div className="h-full rounded-full bg-accent/50" style={{ width: `${d.pct}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-xl border border-white/[0.06] bg-bg/60 p-5">
            <p className="font-display font-semibold text-sm text-text mb-4">Faixa etária</p>
            <div className="space-y-3">
              {ageData.map((d) => (
                <div key={d.label}>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-text-muted">{d.label}</span>
                    <span className="text-text font-mono tabular-nums">{d.pct}%</span>
                  </div>
                  <div className="h-1.5 rounded-full bg-white/[0.06] overflow-hidden">
                    <div className="h-full rounded-full bg-accent/50" style={{ width: `${(d.pct / 38) * 100}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="flex gap-3">
          <a href={`${APP_URL}/register/marca?utm_source=site&utm_medium=cta&utm_campaign=landing`} className="btn-hover flex-1 h-12 flex items-center justify-center bg-accent text-bg font-display font-semibold text-sm rounded-lg">
            Ativar este atleta
          </a>
          <button onClick={onClose} className="h-12 px-6 flex items-center justify-center border border-white/[0.08] text-text-muted font-display font-medium text-sm rounded-lg hover:bg-white/[0.04] transition-colors cursor-pointer">
            Fechar
          </button>
        </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
