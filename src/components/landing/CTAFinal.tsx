"use client";

import { FadeIn } from "@/components/FadeIn";
import { TextReveal } from "@/components/TextReveal";
import { APP_URL } from "@/lib/constants";
import { trackCTAClick } from "@/lib/analytics";
import { GlowOrb } from "./helpers";

export function CTAFinal() {
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
              href={`${APP_URL}/register/marca?utm_source=site&utm_medium=cta&utm_campaign=landing`}
              onClick={() => trackCTAClick("marca", "final")}
              className="btn-hover h-12 sm:h-14 px-8 sm:px-10 flex items-center justify-center bg-accent text-bg font-display font-semibold text-base sm:text-lg rounded-lg"
            >
              Sou Marca
            </a>
            <a
              href={`${APP_URL}/register/empresario?utm_source=site&utm_medium=cta&utm_campaign=landing`}
              onClick={() => trackCTAClick("empresario", "final")}
              className="btn-hover h-12 sm:h-14 px-8 sm:px-10 flex items-center justify-center border border-white/10 text-text font-display font-medium text-base sm:text-lg rounded-lg hover:bg-white/5"
            >
              Sou Empresário
            </a>
            <a
              href={`${APP_URL}/register/atleta?utm_source=site&utm_medium=cta&utm_campaign=landing`}
              onClick={() => trackCTAClick("atleta", "final")}
              className="btn-hover h-12 sm:h-14 px-8 sm:px-10 flex items-center justify-center border border-white/10 text-text font-display font-medium text-base sm:text-lg rounded-lg hover:bg-white/5"
            >
              Sou Atleta
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
