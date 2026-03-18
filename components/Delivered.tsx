const CARDS: {
  icon: React.ReactNode;
  category: string;
  items: string[];
  badge: string;
  badgeVariant?: "green" | "default";
}[] = [
  {
    category: "Câmeras",
    items: ["62 contratadas", "70 entregues", "8 extras instaladas"],
    badge: "+8 extras sem custo",
    badgeVariant: "green",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M16 16v1a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h2" />
        <path d="M21 3h-7a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h7" />
        <circle cx="17.5" cy="8.5" r="2.5" />
        <path d="M22 2 2 22" />
      </svg>
    ),
  },
  {
    category: "Acesso Facial",
    items: ["1 contratado", "5 entregues", "4 doados ao condomínio"],
    badge: "+4 doados",
    badgeVariant: "green",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M2 12C2 6.5 6.5 2 12 2a10 10 0 0 1 8 4" />
        <path d="M5 19.5C5.5 18 6 15 6 12c0-.7.12-1.37.34-2" />
        <path d="M17.29 21.02c.12-.6.43-2.3.5-3.02" />
        <path d="M12 10a2 2 0 0 0-2 2c0 1.02-.1 2.51-.26 4" />
        <path d="M8.65 22c.21-.66.45-1.32.57-2" />
        <path d="M14 13.12c0 2.38 0 6.38-1 8.88" />
        <path d="M2 16h.01" />
        <path d="M21.8 16c.2-2 .131-5.354 0-6" />
        <path d="M9 6.8a6 6 0 0 1 9 5.2v2" />
      </svg>
    ),
  },
  {
    category: "Rede",
    items: ["26 antenas de rede", "7 pontos Wi-Fi", "10 equipamentos de rede", "Fibra óptica completa"],
    badge: "Infra sem custo",
    badgeVariant: "green",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 20h.01" />
        <path d="M2 8.82a15 15 0 0 1 20 0" />
        <path d="M5 12.859a10 10 0 0 1 14 0" />
        <path d="M8.5 16.429a5 5 0 0 1 7 0" />
      </svg>
    ),
  },
  {
    category: "Suporte",
    items: ["Servidor dedicado", "Bateria de emergência", "Telefonia"],
    badge: "Gratuito",
    badgeVariant: "green",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    ),
  },
];

const BADGE_STYLES = {
  green: "border-success/30 bg-success/10 text-success",
  default: "border-border bg-secondary text-secondary-foreground",
} as const;

export function Delivered() {
  return (
    <section className="section-divider mx-auto w-full max-w-7xl px-4 py-12 sm:px-8 sm:py-24 lg:py-32">
      <h2 className="mb-3 text-center text-2xl font-bold tracking-tight sm:mb-4 sm:text-4xl lg:text-5xl">
        O que já entregamos
      </h2>
      <p className="mx-auto mb-8 max-w-xl text-center text-sm text-muted-foreground sm:mb-12 sm:text-lg">
        Tudo que vai além do contrato foi entregue sem custo adicional.
      </p>

      <div className="flex flex-wrap justify-center gap-4 lg:gap-8">
        {CARDS.map((card) => (
          <div
            key={card.category}
            className="rounded-2xl border border-border bg-card group flex w-full flex-col gap-4 p-5 sm:w-[calc(50%-0.5rem)] sm:gap-5 sm:p-10 lg:w-[calc(33.333%-1.375rem)]"
          >
            {/* Header */}
            <div className="flex items-center gap-3 sm:gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-primary/20 sm:h-14 sm:w-14 sm:rounded-2xl">
                {card.icon}
              </div>
              <h3 className="text-lg font-bold tracking-tight sm:text-xl lg:text-2xl">
                {card.category}
              </h3>
            </div>

            {/* Items */}
            <ul className="flex flex-col gap-2 text-sm text-muted-foreground sm:gap-2.5 sm:text-base">
              {card.items.map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <span className="h-2 w-2 shrink-0 rounded-full bg-primary/50" />
                  {item}
                </li>
              ))}
            </ul>

            {/* Badge */}
            <span
              className={`mt-auto inline-flex w-fit items-center rounded-full border px-3.5 py-1 text-sm font-semibold ${BADGE_STYLES[card.badgeVariant ?? "default"]}`}
            >
              {card.badge}
            </span>
          </div>
        ))}
      </div>

      {/* Bottom highlight */}
      <div className="mt-8 overflow-hidden rounded-2xl border border-primary/30 bg-primary/5 px-5 py-5 text-center sm:mt-12 sm:px-8 sm:py-7">
        <p className="relative z-10 text-base font-semibold sm:text-xl lg:text-2xl">
          <span className="text-gradient">R$ 3.400/mês</span>
          <span className="text-muted-foreground">
            {" "}— tudo acima do contrato foi entregue sem custo adicional.
          </span>
        </p>
      </div>
    </section>
  );
}
