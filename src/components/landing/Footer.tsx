import { Wordmark } from "@/components/Wordmark";

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

export function Footer() {
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
          <p className="text-xs text-text-muted">© 2026 Onze. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
