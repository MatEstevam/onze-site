"use client";

import { FadeIn } from "@/components/FadeIn";
import { ScrollFillText } from "@/components/ScrollFillText";
import Image from "next/image";

export function Manifesto() {
  return (
    <section className="relative border-t border-white/[0.06] overflow-hidden">
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
