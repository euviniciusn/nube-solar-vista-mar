function WifiIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 text-primary" aria-hidden="true">
      <path d="M12 20h.01" />
      <path d="M2 8.82a15 15 0 0 1 20 0" />
      <path d="M5 12.859a10 10 0 0 1 14 0" />
      <path d="M8.5 16.429a5 5 0 0 1 7 0" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 text-success" aria-hidden="true">
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

const PLANS = [
  {
    name: "Conecta",
    speed: "300",
    unit: "Mega",
    price: "39,90",
    featured: false,
  },
  {
    name: "Turbo",
    speed: "600",
    unit: "Mega",
    price: "49,90",
    featured: true,
  },
  {
    name: "Ultra",
    speed: "1000",
    unit: "Mega",
    price: "69,90",
    featured: false,
  },
];

const BULLETS = [
  { icon: "check", text: "Suporte local em até 6 horas" },
  { icon: "check", text: "Provedor licenciado Anatel" },
  { icon: "check", text: "Estrutura própria a menos de 700m do condomínio" },
];

export function InternetPlans() {
  return (
    <section className="section-divider mx-auto w-full max-w-7xl px-4 py-12 sm:px-8 sm:py-24 lg:py-32">
      <h2 className="mb-3 text-center text-2xl font-bold tracking-tight sm:mb-4 sm:text-4xl lg:text-5xl">
        Internet para moradores
      </h2>
      <p className="mx-auto mb-8 max-w-lg text-center text-sm text-muted-foreground sm:mb-12 sm:text-lg">
        Internet por fibra óptica com a PirajaNet, direto pro seu apartamento.
      </p>

      {/* Mesh badge */}
      <div className="mb-6 flex justify-center sm:mb-8">
        <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-center text-xs font-semibold text-primary sm:px-5 sm:text-base">
          <WifiIcon />
          Roteador Wi-Fi mesh incluso sem custo em todos os planos
        </span>
      </div>

      {/* Plan cards */}
      <div className="mx-auto grid max-w-4xl gap-4 sm:grid-cols-3 sm:gap-5 lg:gap-6">
        {PLANS.map((plan) => (
          <div
            key={plan.name}
            className={`relative flex flex-col items-center gap-4 rounded-2xl p-6 text-center sm:gap-5 sm:p-10 ${
              plan.featured
                ? "border-2 border-primary/40 bg-card shadow-lg"
                : "border border-border bg-card"
            }`}
          >
            {plan.featured && (
              <span className="absolute -top-3 inline-flex rounded-full border border-primary/40 bg-primary px-3.5 py-0.5 text-[11px] font-bold uppercase tracking-widest text-primary-foreground">
                Mais popular
              </span>
            )}

            <span className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
              {plan.name}
            </span>

            <div className="flex items-baseline gap-1">
              <span className="text-4xl font-extrabold tracking-tight sm:text-6xl">
                {plan.speed}
              </span>
              <span className="text-lg font-semibold text-muted-foreground">
                {plan.unit}
              </span>
            </div>

            <div>
              <span className="text-2xl font-bold text-primary">
                R$ {plan.price}
              </span>
              <span className="text-sm text-muted-foreground">/mês</span>
            </div>

            <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-secondary/50 px-3 py-1 text-xs font-medium text-muted-foreground">
              <WifiIcon />
              Wi-Fi mesh incluso
            </span>
          </div>
        ))}
      </div>

      {/* Bullets */}
      <div className="mx-auto mt-8 flex max-w-3xl flex-wrap justify-center gap-x-8 gap-y-3 sm:mt-12">
        {BULLETS.map((b) => (
          <div key={b.text} className="flex items-center gap-2 text-sm text-foreground sm:text-base">
            <CheckIcon />
            {b.text}
          </div>
        ))}
      </div>

      {/* Nota final */}
      <p className="mx-auto mt-8 max-w-2xl text-center text-sm leading-relaxed text-muted-foreground sm:mt-12 sm:text-base">
        A internet da PirajaNet funciona independente do contrato de segurança.
        Se você cancelar a segurança, mantém a internet.
        Se trocar de provedor de segurança, mantém a internet.
      </p>
    </section>
  );
}
