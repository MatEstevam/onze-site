"use client";

import { APP_URL } from "@/lib/constants";
import { trackCTAClick } from "@/lib/analytics";
import { motion } from "framer-motion";

export function HeroCarousel() {
  return (
    <section role="region" aria-label="Galeria de atletas" className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/onze-motion.webm" type="video/webm" />
          <source src="/onze-motion.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-bg/40 via-bg/60 to-bg z-[1]" />

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
            href={`${APP_URL}/register/marca?utm_source=site&utm_medium=cta&utm_campaign=landing`}
            onClick={() => trackCTAClick("marca", "hero")}
            className="btn-hover h-12 sm:h-14 px-8 sm:px-10 flex items-center justify-center bg-accent text-bg font-display font-semibold text-base sm:text-lg rounded-lg"
          >
            Comece agora — é grátis
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
