/* ── Check icon ── */
function CheckIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-success" aria-hidden="true">
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

/* ── Badge ── */
type BadgeVariant = "green" | "blue" | "amber";
const BADGE_CLS: Record<BadgeVariant, string> = {
  green: "border-success/30 bg-success/10 text-success",
  blue: "border-info/30 bg-info/10 text-info",
  amber: "border-warning/30 bg-warning/10 text-warning",
};
function Badge({ label, variant }: { label: string; variant: BadgeVariant }) {
  return (
    <span className={`inline-flex w-fit rounded-full border px-3 py-0.5 text-xs font-semibold sm:text-sm ${BADGE_CLS[variant]}`}>
      {label}
    </span>
  );
}

/* ── Data ── */
const DONE: { title: string; badge: string; desc?: string }[] = [
  { title: "Faciais nas torres", badge: "R$ 0" },
  { title: "Câmeras elevadores", badge: "R$ 0" },
  { title: "Wi-Fi áreas comuns", badge: "R$ 0" },
];

interface NewItem {
  title: string;
  text: string;
  badges: { label: string; variant: BadgeVariant }[];
  icon: React.ReactNode;
}

const NEW_ITEMS: NewItem[] = [
  {
    title: "Piscina",
    text: "Catracas com reconhecimento facial + câmera inteligente na grade",
    badges: [{ label: "Novo", variant: "blue" }],
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5c2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1" />
        <path d="M2 12c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1" />
        <path d="M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1" />
      </svg>
    ),
  },
  {
    title: "Portaria",
    text: "Leitor facial de alta qualidade para pedestres + câmera que lê a placa do veículo e libera a entrada automaticamente",
    badges: [{ label: "Upgrade", variant: "amber" }, { label: "Novo", variant: "blue" }],
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect width="18" height="18" x="3" y="3" rx="2" />
        <path d="M3 9h18" />
        <path d="M9 21V9" />
      </svg>
    ),
  },
  {
    title: "Câmeras IA",
    text: "~20 câmeras com inteligência artificial integrada",
    badges: [{ label: "Novo", variant: "blue" }],
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="m22 8-6 4 6 4V8Z" />
        <rect width="14" height="12" x="2" y="6" rx="2" ry="2" />
      </svg>
    ),
  },
  {
    title: "Perímetro",
    text: "Câmeras externas com alerta de invasão",
    badges: [{ label: "Novo", variant: "blue" }],
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
      </svg>
    ),
  },
  {
    title: "App",
    text: "Visitantes, encomendas e gestão",
    badges: [{ label: "Novo", variant: "blue" }],
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect width="14" height="20" x="5" y="2" rx="2" ry="2" />
        <path d="M12 18h.01" />
      </svg>
    ),
  },
  {
    title: "Wi-Fi",
    text: "Expansão para todas as áreas comuns",
    badges: [{ label: "Expansão", variant: "amber" }],
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
    title: "Central inteligente",
    text: "Painel de monitoramento com inteligência artificial",
    badges: [{ label: "Novo", variant: "blue" }],
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect width="20" height="14" x="2" y="3" rx="2" />
        <line x1="8" x2="16" y1="21" y2="21" />
        <line x1="12" x2="12" y1="17" y2="21" />
      </svg>
    ),
  },
  {
    title: "Portões e cancela",
    text: "Manutenção dos motores e da cancela anti-esmagamento",
    badges: [{ label: "Novo", variant: "blue" }],
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect width="18" height="18" x="3" y="3" rx="2" />
        <path d="M3 9h18" />
        <path d="M3 15h18" />
        <path d="M9 3v18" />
        <path d="M15 3v18" />
      </svg>
    ),
  },
];

/* ── Component ── */
export function NewScope() {
  return (
    <section className="section-divider mx-auto w-full max-w-7xl px-4 py-12 sm:px-8 sm:py-24 lg:py-32">
      <h2 className="mb-3 text-center text-2xl font-bold tracking-tight sm:mb-4 sm:text-4xl lg:text-5xl">
        Novo Escopo
      </h2>
      <p className="mx-auto mb-8 max-w-lg text-center text-sm text-muted-foreground sm:mb-14 sm:text-lg">
        O que já está funcionando e o que vem pela frente.
      </p>

      {/* Já atendido */}
      <div className="mb-10 sm:mb-16">
        <h3 className="mb-6 text-center text-base font-semibold tracking-tight text-muted-foreground sm:mb-8 sm:text-2xl">
          Já atendido
        </h3>
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 lg:max-w-none lg:grid-cols-3 lg:gap-6">
          {DONE.map((d) => (
            <div
              key={d.title}
              className="rounded-xl border border-border bg-card flex flex-col items-center gap-2 px-4 py-4 text-center sm:gap-3 sm:px-6 sm:py-5"
            >
              <CheckIcon />
              <span className="text-sm font-semibold leading-tight sm:text-base">{d.title}</span>
              <Badge label={d.badge} variant="green" />
              {d.desc && (
                <span className="text-xs leading-snug text-muted-foreground">{d.desc}</span>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Novas entregas */}
      <div>
        <h3 className="mb-6 text-center text-base font-semibold tracking-tight text-muted-foreground sm:mb-8 sm:text-2xl">
          Novas entregas
        </h3>

        {/* Destaque — Torre de vigilância */}
        <div className="mb-4 rounded-2xl border-2 border-primary/30 bg-card p-5 sm:mb-6 sm:p-10">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:gap-8">
            <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M2 20h20" />
                <path d="M12 2v18" />
                <path d="m8 6 4-4 4 4" />
                <path d="M4 14h4" />
                <path d="M16 14h4" />
                <path d="M7 10h2" />
                <path d="M15 10h2" />
              </svg>
            </div>
            <div className="flex flex-1 flex-col gap-2">
              <div className="flex flex-wrap items-center gap-2.5">
                <span className="text-lg font-bold sm:text-xl">Torre de vigilância externa</span>
                <Badge label="Novo" variant="blue" />
              </div>
              <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
                Poste com câmeras inteligentes na frente do condomínio, monitorando a rua 24 horas com alertas automáticos.
              </p>
            </div>
          </div>
        </div>

        <div className="grid gap-3 sm:grid-cols-2 sm:gap-5 lg:gap-6">
          {NEW_ITEMS.map((item) => (
            <div
              key={item.title}
              className="rounded-xl border border-border bg-card group flex gap-4 p-4 transition-shadow hover:shadow-lg sm:gap-5 sm:p-7"
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-primary/20 sm:h-14 sm:w-14 sm:rounded-2xl">
                {item.icon}
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex flex-wrap items-center gap-2.5">
                  <span className="text-base font-bold sm:text-lg">{item.title}</span>
                  {item.badges.map((b) => (
                    <Badge key={b.label} label={b.label} variant={b.variant} />
                  ))}
                </div>
                <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
