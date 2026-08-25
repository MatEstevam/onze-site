"use client";

import { FadeIn } from "@/components/FadeIn";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { GlowOrb } from "./helpers";

export function PortalDemo() {
  const [activeView, setActiveView] = useState<"marca" | "atleta">("marca");
  const [activeStep, setActiveStep] = useState(0);

  const marcaSteps = [
    {
      title: "Busque atletas",
      description: "Filtre por esporte, região, audiência e Brand Safety. Encontre o fit ideal em segundos.",
      mockup: (
        <div className="rounded-xl border border-white/[0.06] bg-bg-card/80 p-6 space-y-4">
          <div className="flex gap-3">
            <div className="flex-1 h-10 rounded-lg bg-white/[0.04] border border-white/[0.08] flex items-center px-4 text-sm text-text-muted">Buscar atleta...</div>
            <div className="h-10 px-4 rounded-lg bg-accent text-bg font-display font-semibold text-sm flex items-center">Filtrar</div>
          </div>
          <div className="flex flex-wrap gap-2">
            {["Futebol", "São Paulo", "A+ Safety"].map((tag) => (
              <span key={tag} className="text-xs px-3 py-1.5 rounded-full bg-accent/10 text-accent font-display font-medium">{tag}</span>
            ))}
          </div>
          <div className="space-y-2">
            {[{ name: "Lucas M.", safety: 92, fit: "A+" }, { name: "Rafael S.", safety: 88, fit: "A" }, { name: "Gabriel P.", safety: 85, fit: "A+" }].map((a) => (
              <div key={a.name} className="flex items-center justify-between p-3 rounded-lg bg-white/[0.02] border border-white/[0.04]">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-accent/20" />
                  <span className="font-display font-medium text-sm text-text">{a.name}</span>
                </div>
                <div className="flex gap-3 text-xs text-text-muted shrink-0">
                  <span>Safety <span className="text-text font-semibold">{a.safety}</span></span>
                  <span>Fit <span className="text-accent font-semibold">{a.fit}</span></span>
                </div>
              </div>
            ))}
          </div>
        </div>
      ),
    },
    {
      title: "Veja o perfil",
      description: "Dados de audiência, histórico de brand safety, engajamento real. Tudo num perfil verificado.",
      mockup: (
        <div className="rounded-xl border border-white/[0.06] bg-bg-card/80 p-6">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-14 h-14 rounded-full bg-accent/20 flex items-center justify-center font-display font-bold text-accent text-lg">LM</div>
            <div>
              <h4 className="font-display font-semibold text-lg text-text">Lucas M.</h4>
              <p className="text-sm text-text-muted">Atacante · São Paulo · 1.2M seguidores</p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
            {[{ label: "Safety", value: "92", color: "text-text" }, { label: "Fit", value: "A+", color: "text-accent" }, { label: "Trending", value: "+28%", color: "text-accent" }].map((m) => (
              <div key={m.label} className="text-center p-3 rounded-lg bg-white/[0.02] border border-white/[0.04]">
                <p className={`font-mono font-bold text-2xl ${m.color}`}>{m.value}</p>
                <p className="text-xs text-text-muted mt-1">{m.label}</p>
              </div>
            ))}
          </div>
          <div className="h-20 rounded-lg bg-white/[0.02] border border-white/[0.04] flex items-end px-3 pb-2 gap-1">
            {[40, 55, 45, 60, 52, 70, 65, 78, 72, 85, 80, 90].map((h, i) => (
              <div key={i} className="flex-1 rounded-sm bg-accent/30" style={{ height: `${h}%` }} />
            ))}
          </div>
        </div>
      ),
    },
    {
      title: "Envie proposta",
      description: "Defina escopo, valor e prazo. Envie em um clique. Pagamento via escrow.",
      mockup: (
        <div className="rounded-xl border border-white/[0.06] bg-bg-card/80 p-6 space-y-4">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center font-display font-bold text-accent text-sm">LM</div>
            <div>
              <p className="font-display font-semibold text-sm text-text">Proposta para Lucas M.</p>
              <p className="text-xs text-text-muted">Atacante · São Paulo</p>
            </div>
          </div>
          <div className="space-y-3">
            <div className="h-10 rounded-lg bg-white/[0.04] border border-white/[0.08] flex items-center px-4 text-sm text-text-muted">3 posts no Instagram + 1 story</div>
            <div className="flex gap-3">
              <div className="flex-1 h-10 rounded-lg bg-white/[0.04] border border-white/[0.08] flex items-center px-4 text-sm text-text-muted">R$ 25.000</div>
              <div className="flex-1 h-10 rounded-lg bg-white/[0.04] border border-white/[0.08] flex items-center px-4 text-sm text-text-muted">30 dias</div>
            </div>
          </div>
          <div className="flex items-center gap-2 text-xs text-text-muted">
            <svg className="w-4 h-4 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
            Pagamento via escrow — liberação após aprovação
          </div>
          <div className="w-full h-12 rounded-lg bg-accent text-bg font-display font-semibold text-sm flex items-center justify-center">Propor ativação</div>
        </div>
      ),
    },
  ];

  const atletaSteps = [
    {
      title: "Meus deals",
      description: "Veja todas as propostas recebidas, em negociação e fechadas. Tudo num painel só.",
      mockup: (
        <div className="rounded-xl border border-white/[0.06] bg-bg-card/80 p-6 space-y-3">
          <div className="flex items-center justify-between mb-2">
            <h4 className="font-display font-semibold text-text">Meus Deals</h4>
            <span className="text-xs px-3 py-1 rounded-full bg-accent/10 text-accent font-display font-medium">3 ativos</span>
          </div>
          {[
            { brand: "Nike Brasil", value: "R$ 50k", status: "Em negociação", color: "text-yellow-400" },
            { brand: "Red Bull", value: "R$ 30k", status: "Proposta recebida", color: "text-accent" },
            { brand: "Guaraná", value: "R$ 15k", status: "Fechado", color: "text-emerald-400" },
          ].map((deal) => (
            <div key={deal.brand} className="flex items-center justify-between p-3 rounded-lg bg-white/[0.02] border border-white/[0.04]">
              <div>
                <p className="font-display font-medium text-sm text-text">{deal.brand}</p>
                <p className={`text-xs ${deal.color}`}>{deal.status}</p>
              </div>
              <span className="font-display font-semibold text-sm text-text tabular-nums">{deal.value}</span>
            </div>
          ))}
        </div>
      ),
    },
    {
      title: "Minhas métricas",
      description: "Acompanhe seus scores em tempo real. Veja o que marcas veem quando visitam seu perfil.",
      mockup: (
        <div className="rounded-xl border border-white/[0.06] bg-bg-card/80 p-6">
          <h4 className="font-display font-semibold text-text mb-4">Suas métricas</h4>
          <div className="grid grid-cols-3 gap-3 mb-4">
            {[{ label: "Safety", value: "92", trend: "+3" }, { label: "Fit médio", value: "A", trend: "estável" }, { label: "Trending", value: "+28%", trend: "+5%" }].map((m) => (
              <div key={m.label} className="text-center p-3 rounded-lg bg-white/[0.02] border border-white/[0.04]">
                <p className="font-mono font-bold text-xl text-accent">{m.value}</p>
                <p className="text-xs text-text-muted">{m.label}</p>
                <p className="text-xs text-emerald-400 mt-1">{m.trend}</p>
              </div>
            ))}
          </div>
          <div className="h-16 rounded-lg bg-white/[0.02] border border-white/[0.04] flex items-end px-3 pb-2 gap-1">
            {[50, 55, 60, 58, 65, 70, 68, 75].map((h, i) => (
              <div key={i} className="flex-1 rounded-sm bg-accent/30" style={{ height: `${h}%` }} />
            ))}
          </div>
        </div>
      ),
    },
    {
      title: "Meu perfil",
      description: "Conecte o Instagram uma vez. Seu perfil é atualizado automaticamente.",
      mockup: (
        <div className="rounded-xl border border-white/[0.06] bg-bg-card/80 p-6">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-14 h-14 rounded-full bg-accent/20 flex items-center justify-center font-display font-bold text-accent text-lg">VS</div>
            <div>
              <h4 className="font-display font-semibold text-lg text-text">Você</h4>
              <p className="text-sm text-text-muted">Seu esporte · Sua cidade</p>
            </div>
          </div>
          <div className="space-y-3">
            <div className="flex items-center gap-3 p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/20">
              <svg className="w-5 h-5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
              <span className="text-sm text-emerald-400 font-medium">Instagram conectado</span>
            </div>
            <div className="flex items-center gap-3 p-3 rounded-lg bg-white/[0.02] border border-white/[0.04]">
              <span className="text-sm text-text-muted">Perfil visível para <span className="text-text font-semibold">247 marcas</span></span>
            </div>
          </div>
        </div>
      ),
    },
  ];

  const steps = activeView === "marca" ? marcaSteps : atletaSteps;

  return (
    <section id="demo" className="px-5 md:px-10 lg:px-16 xl:px-24 py-24 md:py-36 border-t border-white/[0.06] relative overflow-hidden">
      <GlowOrb className="w-[500px] h-[400px] top-0 left-1/4" color="accent" />

      <div className="max-w-[90rem] mx-auto relative z-10">
        <FadeIn className="text-center">
          <p className="font-display font-medium text-sm md:text-base tracking-widest text-text-muted uppercase mb-6">Como funciona</p>
          <h2 className="font-display font-semibold text-3xl sm:text-5xl lg:text-7xl leading-[1.05] tracking-[-0.01em] text-text mb-4">
            Veja a plataforma em ação.
          </h2>
          <p className="text-lg md:text-xl text-text-muted mb-12 max-w-3xl mx-auto">Explore as duas perspectivas: marca buscando atletas ou atleta gerenciando sua carreira comercial.</p>
        </FadeIn>

        <div className="flex justify-center mb-12">
          <div className="inline-flex rounded-full border border-white/[0.08] bg-white/[0.03] p-1">
            {(["marca", "atleta"] as const).map((view) => (
              <button
                key={view}
                onClick={() => { setActiveView(view); setActiveStep(0); }}
                className={`relative px-6 py-2.5 rounded-full font-display font-semibold text-base transition-all duration-300 cursor-pointer ${activeView === view ? "bg-accent text-bg" : "text-text-muted hover:text-text"}`}
              >
                {view === "marca" ? "Visão Marca" : "Visão Atleta"}
              </button>
            ))}
          </div>
        </div>

        <div className="flex justify-start sm:justify-center gap-3 md:gap-4 mb-10 overflow-x-auto pb-2" style={{ WebkitOverflowScrolling: "touch" }}>
          {steps.map((step, i) => (
            <button
              key={step.title}
              onClick={() => setActiveStep(i)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-lg font-display text-base transition-all duration-200 cursor-pointer ${i === activeStep ? "bg-white/[0.08] text-text" : "text-text-muted hover:text-text"}`}
            >
              <span className={`w-7 h-7 flex items-center justify-center rounded-full text-sm font-bold ${i === activeStep ? "bg-accent text-bg" : "bg-white/[0.06] text-text-muted"}`}>{i + 1}</span>
              <span className="hidden sm:inline">{step.title}</span>
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={`${activeView}-${activeStep}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: [0.25, 0.4, 0.25, 1] }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center max-w-[80rem] mx-auto"
          >
            <div className="text-center md:text-left">
              <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-accent/10 text-accent font-display font-bold text-xl mb-4">{activeStep + 1}</span>
              <h3 className="font-display font-semibold text-3xl md:text-4xl text-text mb-3">{steps[activeStep].title}</h3>
              <p className="text-base md:text-lg text-text-muted leading-relaxed">{steps[activeStep].description}</p>
              {activeStep < steps.length - 1 && (
                <button onClick={() => setActiveStep(activeStep + 1)} className="mt-6 inline-flex items-center gap-2 text-accent font-display font-semibold text-base hover:gap-3 transition-all cursor-pointer">
                  Próximo passo
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                </button>
              )}
            </div>
            <div>{steps[activeStep].mockup}</div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
