export default function PrivacidadePage() {
  return (
    <div className="min-h-screen bg-[var(--color-bg)] px-5 md:px-10 py-16">
      <div className="max-w-3xl mx-auto">
        <a href="https://11narede.com.br"><img src="/logo-horizontal.svg" alt="Onze" width={120} height={32} className="mb-12" /></a>

        <h1 className="font-display font-bold text-3xl text-[var(--color-text)] mb-8">Política de Privacidade</h1>

        <div className="space-y-6 text-sm text-[var(--color-text-muted)] leading-relaxed">
          <p><strong className="text-[var(--color-text)]">Última atualização:</strong> Junho de 2026</p>

          <p>
            A Onze (&quot;nós&quot;, &quot;nosso&quot;) opera a plataforma 11narede.com.br. Esta política descreve como coletamos,
            usamos e protegemos seus dados pessoais em conformidade com a Lei Geral de Proteção de Dados (LGPD — Lei 13.709/2018).
          </p>

          <h2 className="font-display font-semibold text-lg text-[var(--color-text)] pt-4">1. Dados coletados</h2>
          <p>
            Coletamos dados fornecidos diretamente por você (nome, e-mail, dados da organização) e, mediante consentimento
            explícito do atleta, dados públicos de audiência do Instagram (seguidores, faixa etária, gênero, região e engajamento)
            através da API oficial do Instagram/Meta.
          </p>

          <h2 className="font-display font-semibold text-lg text-[var(--color-text)] pt-4">2. Finalidade</h2>
          <p>
            Os dados são utilizados exclusivamente para: (a) exibir métricas de audiência de atletas para marcas na plataforma;
            (b) calcular scores proprietários (Fit Score, Brand Safety, Trending); (c) facilitar propostas comerciais entre
            marcas e atletas/empresários.
          </p>

          <h2 className="font-display font-semibold text-lg text-[var(--color-text)] pt-4">3. Base legal</h2>
          <p>
            O tratamento de dados é realizado com base no consentimento explícito do titular (LGPD Art. 7º, I) para dados
            de audiência do Instagram, e na execução de contrato (LGPD Art. 7º, V) para dados cadastrais.
          </p>

          <h2 className="font-display font-semibold text-lg text-[var(--color-text)] pt-4">4. Compartilhamento</h2>
          <p>
            Não vendemos dados pessoais. Dados de audiência são exibidos de forma agregada para marcas cadastradas na plataforma.
            Utilizamos serviços terceiros (Supabase, Vercel, Meta/Instagram API) para infraestrutura e processamento.
          </p>

          <h2 className="font-display font-semibold text-lg text-[var(--color-text)] pt-4">5. Direitos do titular</h2>
          <p>
            Você pode, a qualquer momento: acessar, corrigir ou excluir seus dados; revogar consentimento para acesso ao
            Instagram; solicitar portabilidade dos dados. Para exercer seus direitos, entre em contato pelo e-mail abaixo.
          </p>

          <h2 className="font-display font-semibold text-lg text-[var(--color-text)] pt-4">6. Retenção e segurança</h2>
          <p>
            Dados são armazenados enquanto a conta estiver ativa ou conforme necessário para cumprir obrigações legais.
            Utilizamos criptografia em trânsito (TLS) e em repouso, além de controles de acesso baseados em função.
          </p>

          <h2 className="font-display font-semibold text-lg text-[var(--color-text)] pt-4">7. Contato</h2>
          <p>
            Para dúvidas sobre esta política ou sobre o tratamento de seus dados, entre em contato:
            <br /><strong className="text-[var(--color-text)]">contato@11narede.com.br</strong>
          </p>
        </div>
      </div>
    </div>
  );
}
