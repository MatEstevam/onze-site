"use client";

import { Wordmark } from "@/components/Wordmark";
import { FadeIn } from "@/components/FadeIn";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { MetricRing } from "@/components/MetricRing";
import { MetricBadge } from "@/components/MetricBadge";
import { TextReveal } from "@/components/TextReveal";
import { ScrollProgress } from "@/components/ScrollProgress";
import { ScrollFillText } from "@/components/ScrollFillText";
import { MobileMenu } from "@/components/MobileMenu";
import { StaggerChildren, StaggerItem } from "@/components/StaggerChildren";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

/* ═══════════════════════════════════════════════════════════════════════════
   DATA
   ═══════════════════════════════════════════════════════════════════════════ */

const athleteCards = [
  { name: "Vinicius Jr.", position: "Atacante", club: "Real Madrid", brandSafety: 94, fit: "A+", trending: "+45%", followers: "58M", photo: "/athletes/vinicius-jr.jpg" },
  { name: "Neymar Jr.", position: "Atacante", club: "Al-Hilal", brandSafety: 78, fit: "A", trending: "+12%", followers: "215M", photo: "/athletes/neymar.jpg" },
  { name: "Endrick", position: "Atacante", club: "Real Madrid", brandSafety: 96, fit: "A+", trending: "+62%", followers: "12M", photo: "/athletes/endrick.jpg" },
  { name: "Mbappé", position: "Atacante", club: "Real Madrid", brandSafety: 91, fit: "A", trending: "+28%", followers: "110M", photo: "/athletes/mbappe.jpg" },
  { name: "Rodrygo", position: "Atacante", club: "Real Madrid", brandSafety: 93, fit: "A+", trending: "+31%", followers: "22M", photo: "/athletes/rodrygo.jpg" },
  { name: "Raphinha", position: "Atacante", club: "Barcelona", brandSafety: 90, fit: "A", trending: "+19%", followers: "15M", photo: "/athletes/raphinha.jpg" },
  { name: "Casemiro", position: "Volante", club: "Manchester Utd", brandSafety: 95, fit: "A+", trending: "+8%", followers: "38M", photo: "/athletes/casemiro.jpg" },
  { name: "Alisson", position: "Goleiro", club: "Liverpool", brandSafety: 97, fit: "A+", trending: "+15%", followers: "18M", photo: "/athletes/alisson.jpg" },
];


const painPointCards = ["Planilha", "DM no Instagram", "PDF", "Pix avulso", "Contrato solto"];

const scoreCards = [
  { name: "Brand Safety Score", range: "0–100", description: "Autenticidade de audiência, sentimento e histórico contextual analisados continuamente.", value: 87, type: "number" as const, prefix: "", suffix: "" },
  { name: "Fit Score", range: "A+ a C", description: "Sobreposição demográfica, geográfica e contextual entre marca e atleta.", display: "A+", type: "grade" as const },
  { name: "Trending Score", range: "Variação semanal", description: "Identificação de atletas em crescimento antes do pico de mercado.", value: 34, type: "delta" as const, prefix: "+", suffix: "%" },
];

const categoryCards = ["Sportswear", "Suplementos", "Wellness", "Cosméticos", "Automotivo", "Tecnologia"];

/* ═══════════════════════════════════════════════════════════════════════════
   HELPERS
   ═══════════════════════════════════════════════════════════════════════════ */

function GlowOrb({ className, color = "white" }: { className?: string; color?: "accent" | "white" }) {
  return (
    <div
      className={`absolute rounded-full blur-[120px] pointer-events-none drift-slow ${color === "accent" ? "bg-accent/10" : "bg-white/[0.03]"} ${className}`}
    />
  );
}

function TrendingArrow({ value }: { value: string }) {
  return (
    <div className="flex items-center gap-1.5">
      <svg width="12" height="12" viewBox="0 0 14 14" fill="none" className="text-accent">
        <path d="M7 2L12 7.5H9V12H5V7.5H2L7 2Z" fill="currentColor" />
      </svg>
      <span className="font-display font-bold text-accent tabular-nums text-sm">{value}</span>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════════════════
   01 · NAV
   ═══════════════════════════════════════════════════════════════════════════ */

function Nav() {
  const [visible, setVisible] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    function onScroll() {
      const y = window.scrollY;
      if (y < 100) {
        setVisible(true);
      } else if (y > lastScrollY.current) {
        setVisible(false);
      } else {
        setVisible(true);
      }
      lastScrollY.current = y;
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 sm:px-6 md:px-10 h-14 sm:h-16 md:h-20 bg-bg/70 backdrop-blur-xl border-b border-white/[0.06] safe-top"
    >
      <div className="flex items-center gap-8">
        <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="cursor-pointer">
          <Wordmark variant="horizontal" className="hidden md:block h-10 w-auto" />
          <Wordmark variant="symbol" className="block md:hidden h-9 w-auto" />
        </button>
        <div className="hidden lg:flex items-center gap-6">
          <a href="#scores" className="font-display text-lg text-text-muted hover:text-text transition-colors">Produto</a>
          <a href="#scores" className="font-display text-lg text-text-muted hover:text-text transition-colors">Inteligência</a>

        </div>
      </div>
      <div className="flex items-center gap-2">
        <a
          href="https://app.11narede.com.br/login"
          className="btn-hover h-11 px-7 hidden sm:flex items-center bg-accent text-bg font-display font-semibold text-lg rounded-lg"
        >
          Entrar
        </a>
        <MobileMenu />
      </div>
    </nav>
  );
}

/* ═══════════════════════════════════════════════════════════════════════════
   02 · HERO — Dynamic image grid + bold text overlay
   ═══════════════════════════════════════════════════════════════════════════ */

const heroVideos = ["/hero-9.mp4", "/hero-10.mp4", "/hero-11.mp4", "/hero-12.mp4", "/hero-13.mp4"];

function Hero() {
  const [videoIndex, setVideoIndex] = useState(0);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  useEffect(() => {
    videoRefs.current.forEach((video, i) => {
      if (!video) return;
      if (i === videoIndex) {
        video.currentTime = 0;
        video.play().catch(() => {});
      } else {
        video.pause();
      }
    });
  }, [videoIndex]);

  return (
    <section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        {heroVideos.map((src, i) => (
          <video
            key={src}
            ref={(el) => { videoRefs.current[i] = el; }}
            muted
            playsInline
            onEnded={() => setVideoIndex((prev) => (prev + 1) % heroVideos.length)}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-[1500ms] ease-in-out ${i === videoIndex ? "opacity-100" : "opacity-0 pointer-events-none"}`}
          >
            <source src={src} type="video/mp4" />
          </video>
        ))}
      </div>

      {/* Dark overlay for text contrast */}
      <div className="absolute inset-0 bg-gradient-to-b from-bg/40 via-bg/60 to-bg z-[1]" />

      {/* Text content */}
      <div className="relative z-[2] w-full max-w-7xl text-center px-5 md:px-10">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="font-display font-medium text-sm md:text-base tracking-widest text-text-muted uppercase mb-6 md:mb-8"
        >
          Infraestrutura comercial · Futebol brasileiro
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="font-display font-bold text-[28px] sm:text-7xl lg:text-[96px] xl:text-[120px] leading-[1] sm:leading-[0.92] tracking-[-0.03em] text-text drop-shadow-2xl"
        >
          O mercado entre marcas e atletas{" "}
          <span className="text-accent italic">virou infraestrutura.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.35 }}
          className="mt-6 md:mt-8 text-base sm:text-lg md:text-2xl text-text/90 max-w-3xl mx-auto leading-relaxed drop-shadow-lg"
        >
          Dados, contrato e pagamento garantidos para campanhas com atletas do futebol brasileiro.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.45 }}
          className="mt-10 md:mt-12 flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="https://app.11narede.com.br/login"
            className="btn-hover h-12 sm:h-14 px-8 sm:px-10 flex items-center justify-center bg-accent text-bg font-display font-semibold text-base sm:text-lg rounded-lg"
          >
            Comece já
          </a>
          <a
            href="#demo"
            className="btn-hover h-12 sm:h-14 px-8 sm:px-10 flex items-center justify-center border border-white/20 text-text font-display font-medium text-base sm:text-lg rounded-lg hover:bg-white/10 backdrop-blur-sm"
          >
            Como funciona
          </a>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border/30 to-transparent z-[2]" />
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════════════════
   03 · PROBLEM
   ═══════════════════════════════════════════════════════════════════════════ */

function DashboardMockup() {
  return (
    <div className="dashboard-mockup border border-white/10 rounded-xl bg-bg-card p-6 md:p-8 max-w-2xl mx-auto shadow-lg shadow-black/20">
      {/* Top bar */}
      <div className="flex items-center gap-2 mb-6">
        <div className="w-3 h-3 rounded-full bg-accent" />
        <div className="h-3 w-32 rounded-full bg-white/10" />
        <div className="ml-auto h-3 w-20 rounded-full bg-white/10" />
      </div>
      {/* Metric grid */}
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
      {/* Mini chart bars */}
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

function Problem() {
  return (
    <section className="px-5 md:px-10 lg:px-16 py-24 md:py-36 border-t border-white/[0.06] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <FadeIn className="text-center">
          <p className="font-display font-medium text-sm md:text-base tracking-widest text-text-muted uppercase mb-6">O mercado hoje</p>
          <h2 className="font-display font-semibold text-3xl sm:text-5xl lg:text-7xl leading-[1.05] tracking-[-0.01em] text-text">
            O mercado ainda roda no{" "}
            <span className="text-accent">WhatsApp.</span>
          </h2>
          <div className="mt-8 text-lg md:text-xl text-text-muted leading-relaxed max-w-3xl mx-auto space-y-1">
            <p>Marca paga caro pelo nome óbvio.</p>
            <p>Atleta perde oportunidade porque ninguém encontrou.</p>
            <p>Agência opera artesanalmente.</p>
            <p>Negociação sem dado. Pagamento sem garantia. Contrato descentralizado.</p>
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

        {/* Transition arrow */}
        <FadeIn delay={0.2}>
          <div className="my-14 flex justify-center">
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" className="text-accent">
              <path d="M20 8v20m0 0l-8-8m8 8l8-8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </FadeIn>

        {/* Dashboard mockup */}
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

/* ═══════════════════════════════════════════════════════════════════════════
   04 · COMO FUNCIONA
   ═══════════════════════════════════════════════════════════════════════════ */

function ComoFunciona() {
  const steps = [
    { step: "01", verb: "Descubra", description: "Encontre atletas com dados reais, audiência decomposta e Fit Score proprietário." },
    { step: "02", verb: "Ative", description: "Proponha ativações, negocie e formalize contratos em um único fluxo." },
    { step: "03", verb: "Escale", description: "Pagamento protegido, operação centralizada e performance mensurável." },
  ];

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

/* ═══════════════════════════════════════════════════════════════════════════
   05 · MANIFESTO — "Por que a Onze existe"
   ═══════════════════════════════════════════════════════════════════════════ */

function Manifesto() {
  return (
    <section className="relative border-t border-white/[0.06] overflow-hidden">
      {/* Left — full-height image */}
      <div className="hidden md:block absolute inset-y-0 left-0 w-1/2">
        <Image
          src="/stadium.jpg"
          alt="Estádio de futebol lotado sob luzes noturnas"
          fill
          className="object-cover"
          sizes="50vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-bg/30 to-bg" />
      </div>

      {/* Right — text content */}
      <div className="relative md:ml-[50%] px-5 md:px-10 lg:px-16 py-24 md:py-40">
        <div className="max-w-2xl">
            <FadeIn>
              <p className="font-display font-medium text-sm md:text-base tracking-widest text-text-muted uppercase mb-8">Por que a Onze existe</p>
              <h2 className="font-display font-semibold text-3xl sm:text-4xl lg:text-5xl leading-[1.15] tracking-[-0.01em] text-text">
                O futebol brasileiro movimenta bilhões.
              </h2>
              <h2 className="font-display font-semibold text-3xl sm:text-4xl lg:text-5xl leading-[1.15] tracking-[-0.01em] text-text-muted mt-2">
                A operação comercial ainda é artesanal.
              </h2>
              <p className="mt-8 text-lg text-text-muted leading-relaxed">
                A Onze transforma relacionamento em infraestrutura.
                Marca encontra atleta com contexto.
                Agência opera com escala.
                Negócio fecha com segurança.
              </p>
            </FadeIn>

            {/* Manifesto phrases */}
            <div className="mt-20 space-y-12 border-l-2 border-white/[0.06] pl-8">
              <FadeIn>
                <p className="font-display font-bold text-2xl sm:text-3xl lg:text-4xl leading-[1.15] tracking-[-0.01em] text-text">
                  Dado antes de hype.
                </p>
              </FadeIn>

              <FadeIn>
                <p className="font-display font-bold text-2xl sm:text-3xl lg:text-4xl leading-[1.15] tracking-[-0.01em] text-text">
                  ROI mensurável. Risco auditado.
                </p>
              </FadeIn>

              <FadeIn>
                <p className="font-display font-bold text-2xl sm:text-3xl lg:text-4xl leading-[1.15] tracking-[-0.01em] text-text">
                  O atleta é mídia.
                </p>
              </FadeIn>

              <ScrollFillText
                text="A Onze é infraestrutura."
                className="font-display font-bold text-2xl sm:text-3xl lg:text-4xl leading-[1.15] tracking-[-0.01em]"
              />
            </div>
          </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════════════════
   06 · SCORES PROPRIETÁRIOS
   ═══════════════════════════════════════════════════════════════════════════ */

function Scores() {
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

/* ═══════════════════════════════════════════════════════════════════════════
   07 · SOCIAL PROOF — Category-based
   ═══════════════════════════════════════════════════════════════════════════ */

function SocialProof() {
  return (
    <section className="px-5 md:px-10 lg:px-16 py-24 md:py-36 border-t border-white/[0.06] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <FadeIn className="text-center">
          <p className="font-display font-medium text-sm md:text-base tracking-widest text-text-muted uppercase mb-6">Para quem</p>
          <h2 className="font-display font-semibold text-3xl sm:text-5xl lg:text-7xl leading-[1.05] tracking-[-0.01em] text-text mb-16">
            Feito para marcas que disputam atenção todos os dias.
          </h2>
        </FadeIn>

        <StaggerChildren className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {categoryCards.map((cat) => (
            <StaggerItem key={cat}>
              <div className="border border-white/[0.08] rounded-xl p-4 sm:p-8 text-center font-display font-medium text-base sm:text-xl md:text-2xl text-text-muted hover:border-accent/40 hover:text-accent transition-colors duration-200 cursor-default">
                {cat}
              </div>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════════════════
   08 · ATHLETE PROFILE MODAL
   ═══════════════════════════════════════════════════════════════════════════ */

type Athlete = (typeof athleteCards)[number];

function AthleteProfile({ atleta, onClose }: { atleta: Athlete; onClose: () => void }) {
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
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center p-0 sm:p-4 md:p-8"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-bg/80 backdrop-blur-md" />
      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 40, scale: 0.96 }}
        transition={{ duration: 0.3, ease: [0.25, 0.4, 0.25, 1] }}
        className="relative w-full max-w-3xl h-full sm:h-auto sm:max-h-[90vh] overflow-y-auto rounded-none sm:rounded-2xl border-0 sm:border border-white/[0.08] bg-bg-card p-5 sm:p-6 md:p-10"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button onClick={onClose} className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center rounded-full bg-white/[0.06] hover:bg-white/[0.12] text-text-muted hover:text-text transition-colors cursor-pointer">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M18 6L6 18M6 6l12 12" /></svg>
        </button>

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
          <a href="https://app.11narede.com.br/login" className="btn-hover flex-1 h-12 flex items-center justify-center bg-accent text-bg font-display font-semibold text-sm rounded-lg">
            Ativar este atleta
          </a>
          <button onClick={onClose} className="h-12 px-6 flex items-center justify-center border border-white/[0.08] text-text-muted font-display font-medium text-sm rounded-lg hover:bg-white/[0.04] transition-colors cursor-pointer">
            Fechar
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
}

/* ═══════════════════════════════════════════════════════════════════════════
   08b · O ONZE DA SEMANA
   ═══════════════════════════════════════════════════════════════════════════ */

function OnzeDaSemana() {
  const [selectedAthlete, setSelectedAthlete] = useState<Athlete | null>(null);

  return (
    <section id="onze-da-semana" className="px-5 md:px-10 lg:px-16 py-24 md:py-36 border-t border-white/[0.06] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <FadeIn className="text-center">
          <p className="font-display font-medium text-sm md:text-base tracking-widest text-text-muted uppercase mb-6">Preview</p>
          <h2 className="font-display font-semibold text-3xl sm:text-5xl lg:text-7xl leading-[1.05] tracking-[-0.01em] text-text mb-4">O Onze da Semana</h2>
          <p className="text-text-muted text-lg md:text-xl mb-16 md:mb-20 max-w-2xl mx-auto">Os atletas com maior Trending Score da semana. Atualizado toda segunda.</p>
        </FadeIn>

        <StaggerChildren className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {athleteCards.map((atleta) => (
            <StaggerItem key={atleta.name}>
              <div
                className="group card-hover border border-white/[0.06] hover:border-accent/30 rounded-xl overflow-hidden bg-bg-card transition-colors duration-300 cursor-pointer"
                onClick={() => setSelectedAthlete(atleta)}
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
                  {/* Click hint */}
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

      <AnimatePresence>
        {selectedAthlete && (
          <AthleteProfile atleta={selectedAthlete} onClose={() => setSelectedAthlete(null)} />
        )}
      </AnimatePresence>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════════════════
   08c · PORTAL DEMO — Simulação interativa
   ═══════════════════════════════════════════════════════════════════════════ */

function PortalDemo() {
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

        {/* Toggle */}
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

        {/* Step tabs */}
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

        {/* Active step content */}
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

/* ═══════════════════════════════════════════════════════════════════════════
   09 · CTA FINAL
   ═══════════════════════════════════════════════════════════════════════════ */

function CTAFinal() {
  return (
    <section className="px-5 md:px-10 lg:px-16 py-24 md:py-36 border-t border-white/[0.06] relative overflow-hidden">
      <GlowOrb className="w-[500px] h-[500px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" color="accent" />
      <div className="max-w-7xl mx-auto text-center relative z-10">
        <FadeIn>
          <TextReveal
            text="Monte seu onze."
            as="h2"
            className="font-display font-bold text-4xl sm:text-7xl lg:text-9xl leading-[0.9] tracking-[-0.03em] text-text mb-6"
          />
          <p className="text-lg md:text-xl text-text-muted mb-14">
            Entre cedo na infraestrutura comercial do esporte brasileiro.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://app.11narede.com.br/login"
              className="btn-hover h-12 sm:h-14 px-8 sm:px-10 flex items-center justify-center bg-accent text-bg font-display font-semibold text-base sm:text-lg rounded-lg"
            >
              Comece já
            </a>
            <a
              href="https://app.11narede.com.br/login"
              className="btn-hover h-12 sm:h-14 px-8 sm:px-10 flex items-center justify-center border border-white/10 text-text font-display font-medium text-base sm:text-lg rounded-lg hover:bg-white/5"
            >
              Quero operar atletas
            </a>
            <a
              href="https://app.11narede.com.br/login"
              className="btn-hover h-12 sm:h-14 px-8 sm:px-10 flex items-center justify-center border border-white/10 text-text font-display font-medium text-base sm:text-lg rounded-lg hover:bg-white/5"
            >
              Quero ativar campanhas
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}


/* ═══════════════════════════════════════════════════════════════════════════
   11 · FOOTER
   ═══════════════════════════════════════════════════════════════════════════ */

function Footer() {
  const columns = [
    { title: "Produto", links: ["Marketplace", "Brand Safety", "Fit Score", "Escrow"] },
    { title: "Público", links: ["Marcas", "Agências", "Atletas"] },
    { title: "Institucional", links: [
      { label: "Manifesto", href: "#" },
      { label: "Privacidade", href: "https://11narede.com.br/privacidade" },
      { label: "Contato", href: "mailto:contato@onze.com" },
      { label: "LinkedIn", href: "https://linkedin.com", external: true },
    ]},
  ];

  return (
    <footer className="px-5 md:px-10 lg:px-16 py-12 border-t border-white/[0.06] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div className="sm:col-span-2 lg:col-span-1">
            <Wordmark variant="horizontal" className="h-8 w-auto mb-4" />
            <p className="text-sm text-text-muted">Infraestrutura comercial<br />do esporte brasileiro.</p>
          </div>
          {columns.map((col) => (
            <div key={col.title}>
              <h4 className="font-display font-semibold text-base text-text mb-4">{col.title}</h4>
              <ul className="space-y-2">
                {col.links.map((link) => {
                  const isObj = typeof link === "object";
                  const label = isObj ? link.label : link;
                  const href = isObj ? link.href : "#";
                  const external = isObj && "external" in link && link.external;
                  return (
                    <li key={label}>
                      <a
                        href={href}
                        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                        className="text-sm text-text-muted hover:text-text transition-colors"
                      >
                        {label}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>
        <div className="border-t border-white/[0.06] pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-text-muted">© 2025 Onze. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}

/* ═══════════════════════════════════════════════════════════════════════════
   PAGE
   ═══════════════════════════════════════════════════════════════════════════ */

export default function Home() {
  return (
    <div className="noise" style={{ overflowX: "clip" }}>
      <ScrollProgress />
      <Nav />
      <main>
        <Hero />
        {/* <OnzeDaSemana /> */}
        <PortalDemo />
        <Problem />
        <ComoFunciona />
        <Manifesto />
        <Scores />
        <SocialProof />
        <CTAFinal />
      </main>
      <Footer />
    </div>
  );
}
