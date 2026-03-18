function XIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 text-muted-foreground/40" aria-hidden="true">
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 text-success" aria-hidden="true">
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

const OTHERS_ITEMS = [
  "Segurança: R$ 79,90/mês por unidade",
  "Internet \"inclusa\" mas limitada a 600 Mbps",
  "Wi-Fi básico da ONU",
  "Roteador Wi-Fi de qualidade não incluso",
];

const NUBE_ITEMS = [
  "Segurança: R$ XX,XX/mês por unidade",
  "Internet 400 Mbps + Wi-Fi mesh: R$ 39,90/mês",
  "Roteador mesh cobrindo todo o apartamento",
  "Wi-Fi mesh incluso sem custo em todos os planos",
];

export function CostComparison() {
  return (
    <section className="section-divider mx-auto w-full max-w-7xl px-6 py-16 sm:px-8 sm:py-24 lg:py-32">
      <h2 className="mb-4 text-center text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
        Quanto sai do seu bolso?
      </h2>
      <p className="mx-auto mb-12 max-w-lg text-center text-base text-muted-foreground sm:text-lg">
        Custo mensal real por unidade, sem letra miúda.
      </p>

      <div className="mx-auto grid max-w-4xl gap-6 sm:grid-cols-2">
        {/* Concorrência */}
        <div className="flex flex-col rounded-2xl border border-border bg-card p-8 sm:p-10">
          <h3 className="mb-6 text-center text-lg font-semibold text-muted-foreground">
            Com a concorrência
          </h3>

          <ul className="flex flex-1 flex-col gap-4">
            {OTHERS_ITEMS.map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground sm:text-base">
                <XIcon />
                {item}
              </li>
            ))}
          </ul>

          <div className="mt-8 rounded-xl bg-secondary/50 p-5 text-center">
            <span className="text-sm text-muted-foreground">Total mensal</span>
            <p className="mt-1 text-3xl font-extrabold tracking-tight sm:text-4xl">
              R$ 79,90
            </p>
          </div>

          <p className="mt-4 text-center text-xs leading-relaxed text-muted-foreground/70 sm:text-sm">
            Fidelidade de 60 meses. Internet depende do contrato de segurança.
          </p>
        </div>

        {/* Nube + PirajaNet */}
        <div className="flex flex-col rounded-2xl border-2 border-primary/30 bg-card p-8 sm:p-10">
          <h3 className="mb-6 text-center text-lg font-semibold text-primary">
            Com a Nube + PirajaNet
          </h3>

          <ul className="flex flex-1 flex-col gap-4">
            {NUBE_ITEMS.map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm text-foreground sm:text-base">
                <CheckIcon />
                {item}
              </li>
            ))}
          </ul>

          <div className="mt-8 rounded-xl bg-primary/10 p-5 text-center">
            <span className="text-sm text-muted-foreground">Total mensal</span>
            <p className="mt-1 text-3xl font-extrabold tracking-tight text-primary sm:text-4xl">
              R$ XX,XX
            </p>
          </div>

          <p className="mt-4 text-center text-xs leading-relaxed text-muted-foreground/70 sm:text-sm">
            Contratos independentes.
          </p>
        </div>
      </div>
    </section>
  );
}
