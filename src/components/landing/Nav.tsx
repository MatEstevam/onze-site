"use client";

import { Wordmark } from "@/components/Wordmark";
import { MobileMenu } from "@/components/MobileMenu";
import { APP_URL } from "@/lib/constants";
import { useEffect, useRef, useState } from "react";

export function Nav() {
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
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 sm:px-6 md:px-10 h-14 sm:h-16 md:h-20 bg-bg/70 backdrop-blur-xl border-b border-white/[0.06] safe-top ${visible ? "nav-visible" : "nav-hidden"}`}
    >
      <div className="flex items-center gap-8">
        <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="cursor-pointer">
          <Wordmark variant="horizontal" className="hidden md:block h-10 w-auto" />
          <Wordmark variant="symbol" className="block md:hidden h-9 w-auto" />
        </button>
        <div className="hidden lg:flex items-center gap-6">
          <a href="#como-funciona" className="font-display text-lg text-text-muted hover:text-text transition-colors">Produto</a>
          <a href="#scores" className="font-display text-lg text-text-muted hover:text-text transition-colors">Inteligência</a>

        </div>
      </div>
      <div className="flex items-center gap-2">
        <a
          href={`${APP_URL}/login`}
          className="btn-hover h-11 px-7 hidden sm:flex items-center bg-accent text-bg font-display font-semibold text-lg rounded-lg"
        >
          Entrar
        </a>
        <MobileMenu />
      </div>
    </nav>
  );
}
