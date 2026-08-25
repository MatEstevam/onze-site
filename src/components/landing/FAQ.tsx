"use client";

import { FadeIn } from "@/components/FadeIn";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqItems } from "@/lib/constants";
import { trackFAQExpand } from "@/lib/analytics";

export function FAQ() {
  if (faqItems.length === 0) return null;

  return (
    <section className="px-5 md:px-10 lg:px-16 py-24 md:py-36 border-t border-white/[0.06] overflow-hidden">
      <div className="max-w-3xl mx-auto">
        <FadeIn className="text-center mb-16">
          <p className="font-display font-medium text-sm md:text-base tracking-widest text-text-muted uppercase mb-6">FAQ</p>
          <h2 className="font-display font-semibold text-3xl sm:text-5xl lg:text-7xl leading-[1.05] tracking-[-0.01em] text-text">
            Perguntas frequentes.
          </h2>
        </FadeIn>

        <FadeIn>
          <Accordion className="space-y-3">
            {faqItems.map((item, i) => (
              <AccordionItem
                key={i}
                className="rounded-xl border border-white/[0.06] bg-bg-card px-6 data-open:border-accent/20"
              >
                <AccordionTrigger onClick={() => trackFAQExpand(i)} className="py-5 font-display font-semibold text-base md:text-lg text-text hover:text-accent hover:no-underline transition-colors aria-expanded:text-accent">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="pb-5 text-base text-text-muted leading-relaxed">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </FadeIn>
      </div>
    </section>
  );
}
