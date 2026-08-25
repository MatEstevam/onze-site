import { partnerLogos } from "@/lib/constants";

export function PartnerLogos() {
  if (partnerLogos.length === 0) return null;

  return (
    <section className="px-5 md:px-10 lg:px-16 py-16 md:py-24 border-t border-white/[0.06] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <p className="text-center font-display font-medium text-sm tracking-widest text-text-muted uppercase mb-10">
          Marcas que confiam na Onze
        </p>
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
          {partnerLogos.map((partner) => (
            <div
              key={partner.name}
              className="flex items-center justify-center h-10 md:h-12 opacity-40 hover:opacity-80 transition-opacity duration-200"
            >
              <span className="font-display font-semibold text-lg md:text-xl text-text-muted tracking-wide">
                {partner.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
