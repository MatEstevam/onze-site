export const APP_URL = "https://app.11narede.com.br";

export type AthleteCard = {
  name: string;
  position: string;
  club: string;
  brandSafety: number;
  fit: string;
  trending: string;
  followers: string;
  photo: string;
};

export const athleteCards: AthleteCard[] = [
  { name: "Vinicius Jr.", position: "Atacante", club: "Real Madrid", brandSafety: 94, fit: "A+", trending: "+45%", followers: "58M", photo: "/athletes/vinicius-jr.jpg" },
  { name: "Neymar Jr.", position: "Atacante", club: "Al-Hilal", brandSafety: 78, fit: "A", trending: "+12%", followers: "215M", photo: "/athletes/neymar.jpg" },
  { name: "Endrick", position: "Atacante", club: "Real Madrid", brandSafety: 96, fit: "A+", trending: "+62%", followers: "12M", photo: "/athletes/endrick.jpg" },
  { name: "Mbappé", position: "Atacante", club: "Real Madrid", brandSafety: 91, fit: "A", trending: "+28%", followers: "110M", photo: "/athletes/mbappe.jpg" },
  { name: "Rodrygo", position: "Atacante", club: "Real Madrid", brandSafety: 93, fit: "A+", trending: "+31%", followers: "22M", photo: "/athletes/rodrygo.jpg" },
  { name: "Raphinha", position: "Atacante", club: "Barcelona", brandSafety: 90, fit: "A", trending: "+19%", followers: "15M", photo: "/athletes/raphinha.jpg" },
  { name: "Casemiro", position: "Volante", club: "Manchester Utd", brandSafety: 95, fit: "A+", trending: "+8%", followers: "38M", photo: "/athletes/casemiro.jpg" },
  { name: "Alisson", position: "Goleiro", club: "Liverpool", brandSafety: 97, fit: "A+", trending: "+15%", followers: "18M", photo: "/athletes/alisson.jpg" },
];

export const heroMedia = [
  { type: "video" as const, src: "/onze-motion", poster: "" },
];

export const painPointCards = ["Planilha", "DM no Instagram", "PDF", "Pix avulso", "Contrato solto"];

export type ScoreCard = {
  name: string;
  range: string;
  description: string;
  value?: number;
  display?: string;
  type: "number" | "grade" | "delta";
  prefix?: string;
  suffix?: string;
};

export const scoreCards: ScoreCard[] = [
  { name: "Brand Safety Score", range: "0–100", description: "Autenticidade de audiência, sentimento e histórico contextual analisados continuamente.", value: 87, type: "number", prefix: "", suffix: "" },
  { name: "Fit Score", range: "A+ a C", description: "Sobreposição demográfica, geográfica e contextual entre marca e atleta.", display: "A+", type: "grade" },
  { name: "Trending Score", range: "Variação semanal", description: "Identificação de atletas em crescimento antes do pico de mercado.", value: 34, type: "delta", prefix: "+", suffix: "%" },
];

export const categoryCards = ["Sportswear", "Suplementos", "Wellness", "Cosméticos", "Automotivo", "Tecnologia"];

export type Testimonial = {
  name: string;
  role: string;
  company: string;
  photo: string;
  quote: string;
};

export const testimonials: Testimonial[] = [
  {
    name: "Ana Costa",
    role: "Head de Marketing",
    company: "SportBrand Brasil",
    photo: "/testimonials/ana-costa.jpg",
    quote: "A Onze nos deu visibilidade sobre atletas que nunca teríamos encontrado. O Fit Score sozinho já justifica a plataforma.",
  },
  {
    name: "Ricardo Mendes",
    role: "Empresário de Atletas",
    company: "RM Sports Management",
    photo: "/testimonials/ricardo-mendes.jpg",
    quote: "Antes eu perdia 3 dias negociando por WhatsApp. Agora fecho ativações em horas, com contrato e pagamento garantido.",
  },
  {
    name: "Juliana Torres",
    role: "Diretora de Patrocínios",
    company: "Energia Plus",
    photo: "/testimonials/juliana-torres.jpg",
    quote: "O Brand Safety Score nos salvou de uma crise. Identificamos riscos antes de fechar e redirecionamos para atletas seguros.",
  },
  {
    name: "Felipe Oliveira",
    role: "CEO",
    company: "Arena Digital",
    photo: "/testimonials/felipe-oliveira.jpg",
    quote: "A infraestrutura de escrow da Onze profissionalizou nossas operações. Nossos atletas confiam mais no processo.",
  },
];

export type FAQItem = {
  question: string;
  answer: string;
};

export const faqItems: FAQItem[] = [
  {
    question: "Como funciona o pagamento via escrow?",
    answer: "Quando uma ativação é aprovada, o valor é depositado em uma conta escrow segura. O pagamento só é liberado para o atleta após a marca aprovar a entrega do conteúdo. Isso protege ambos os lados da transação.",
  },
  {
    question: "Quanto custa usar a Onze?",
    answer: "A Onze cobra uma comissão sobre cada ativação realizada com sucesso. Não há mensalidade ou taxa de cadastro. Você só paga quando fecha negócio.",
  },
  {
    question: "O que é o Brand Safety Score?",
    answer: "É um score proprietário de 0 a 100 que avalia a autenticidade da audiência do atleta, o sentimento nas redes sociais e o histórico contextual. Quanto maior o score, menor o risco reputacional para a marca.",
  },
  {
    question: "Preciso de contrato separado?",
    answer: "Não. A Onze gera contratos automaticamente com base nos termos acordados na proposta. Ambas as partes assinam eletronicamente dentro da plataforma, com validade jurídica.",
  },
  {
    question: "E se o atleta não entregar o conteúdo?",
    answer: "O pagamento fica retido em escrow até a aprovação da entrega. Se o atleta não cumprir o acordado no prazo, a marca pode abrir uma disputa e o valor é devolvido seguindo nosso processo de resolução.",
  },
  {
    question: "Como funciona o Fit Score?",
    answer: "O Fit Score (de A+ a C) mede a sobreposição demográfica, geográfica e contextual entre a audiência do atleta e o público-alvo da marca. Um Fit Score alto significa que a campanha vai alcançar as pessoas certas.",
  },
];

export type TractionMetric = {
  label: string;
  value: number;
  suffix?: string;
};

export const tractionMetrics: TractionMetric[] = [
  { label: "Atletas cadastrados", value: 150, suffix: "+" },
  { label: "Marcas ativas", value: 45, suffix: "+" },
  { label: "Ativações realizadas", value: 320, suffix: "+" },
];

export type PartnerLogo = {
  name: string;
  logo: string;
};

export const partnerLogos: PartnerLogo[] = [
  { name: "SportBrand", logo: "/partners/sportbrand.svg" },
  { name: "Energia Plus", logo: "/partners/energia-plus.svg" },
  { name: "Arena Digital", logo: "/partners/arena-digital.svg" },
  { name: "VitaFit", logo: "/partners/vitafit.svg" },
  { name: "TechSport", logo: "/partners/techsport.svg" },
];
