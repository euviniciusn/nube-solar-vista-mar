"use client";

import Image from "next/image";

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

/* ── Check icon (inline) ── */
function CheckInline() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-success" aria-hidden="true">
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

/* ── Data ── */
const DONE = [
  "Faciais nas torres",
  "Câmeras elevadores",
  "Wi-Fi áreas comuns",
];

interface ScopeCard {
  headline: string;
  tagline: string;
  badge: { label: string; variant: BadgeVariant };
  placeholderGradient: string;
  icon: React.ReactNode;
  image?: string;
  imagePosition?: string;
}

const SCOPE_CARDS: ScopeCard[] = [
  {
    headline: "Proteção começa na rua",
    tagline: "Poste com câmeras inteligentes na frente do condomínio. Detecta movimentação suspeita na rua e dispara alertas antes de qualquer tentativa de invasão.",
    badge: { label: "Novo", variant: "blue" },
    image: "/torre-vigilancia.png",
    imagePosition: "object-top",
    placeholderGradient: "from-violet-950 via-indigo-900 to-slate-900",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M2 20h20" />
        <path d="M12 2v18" />
        <path d="m8 6 4-4 4 4" />
        <path d="M4 14h4" />
        <path d="M16 14h4" />
        <path d="M7 10h2" />
        <path d="M15 10h2" />
      </svg>
    ),
  },
  {
    headline: "Chegou, abriu. Sem fila.",
    tagline: "A câmera lê a placa do seu carro e abre o portão automaticamente. Pedestres passam pelo facial sem precisar de chave, controle ou senha.",
    badge: { label: "Upgrade", variant: "amber" },
    image: "/portaria-camera.png",
    placeholderGradient: "from-slate-900 via-purple-950 to-slate-900",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect width="18" height="18" x="3" y="3" rx="2" />
        <path d="M3 9h18" />
        <path d="M9 21V9" />
      </svg>
    ),
  },
  {
    headline: "Só quem mora, entra.",
    tagline: "Catracas com reconhecimento facial na entrada da piscina. Câmera inteligente na grade identifica quem tenta pular e dispara alerta em tempo real.",
    badge: { label: "Novo", variant: "blue" },
    image: "/torniquete.jpg",
    placeholderGradient: "from-cyan-950 via-blue-950 to-slate-900",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5c2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1" />
        <path d="M2 12c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1" />
        <path d="M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1" />
      </svg>
    ),
  },
  {
    headline: "Olhos que nunca dormem",
    tagline: "Cerca de 20 câmeras com inteligência artificial cobrindo todo o condomínio. Detectam invasão, objetos abandonados e comportamento suspeito — 24 horas por dia.",
    badge: { label: "Novo", variant: "blue" },
    image: "/cameras-com-ia.png",
    placeholderGradient: "from-slate-900 via-violet-950 to-indigo-950",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="m22 8-6 4 6 4V8Z" />
        <rect width="14" height="12" x="2" y="6" rx="2" ry="2" />
      </svg>
    ),
  },
  {
    headline: "Seu condomínio no bolso",
    tagline: "Autorize visitantes, acompanhe encomendas e abra o portão direto pelo celular. Gestão completa do condomínio sem depender da portaria.",
    badge: { label: "Novo", variant: "blue" },
    image: "/aplicativo.jpg",
    placeholderGradient: "from-purple-950 via-fuchsia-950 to-slate-900",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect width="14" height="20" x="5" y="2" rx="2" ry="2" />
        <path d="M12 18h.01" />
      </svg>
    ),
  },
  {
    headline: "Conectado em todo canto",
    tagline: "Wi-Fi de alta velocidade expandido para todas as áreas comuns — piscina, salão de festas, churrasqueira e playground. Sem zona morta.",
    badge: { label: "Expansão", variant: "amber" },
    placeholderGradient: "from-slate-900 via-emerald-950 to-slate-900",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 20h.01" />
        <path d="M2 8.82a15 15 0 0 1 20 0" />
        <path d="M5 12.859a10 10 0 0 1 14 0" />
        <path d="M8.5 16.429a5 5 0 0 1 7 0" />
      </svg>
    ),
  },
];

/* ── Zigzag Card ── */
function ZigzagCard({ card, index }: { card: ScopeCard; index: number }) {
  const isReversed = index % 2 !== 0;

  return (
    <div className="group overflow-hidden rounded-2xl border border-border transition-all duration-500 hover:border-primary/40">
      <div className={`flex flex-col ${isReversed ? "sm:flex-row-reverse" : "sm:flex-row"}`}>
        {/* Image side */}
        <div className="relative h-72 overflow-hidden sm:h-auto sm:min-h-96 sm:w-1/2 lg:min-h-120">
          {/* Gradient placeholder — always rendered as base layer */}
          <div className={`absolute inset-0 bg-linear-to-br ${card.placeholderGradient}`} />

          {card.image ? (
            /* Real image */
            <Image
              src={card.image}
              alt={card.headline}
              fill
              className={`object-cover transition-transform duration-700 group-hover:scale-105 ${card.imagePosition ?? ""}`}
              sizes="(max-width: 640px) 100vw, 50vw"
            />
          ) : (
            <>
              {/* Icon as placeholder visual */}
              <div className="absolute inset-0 flex items-center justify-center text-white/15 transition-transform duration-700 group-hover:scale-110">
                <div className="scale-150">
                  {card.icon}
                </div>
              </div>

              {/* Subtle light overlay */}
              <div
                className="absolute inset-0 opacity-30"
                style={{
                  backgroundImage: "radial-gradient(circle at 30% 40%, rgba(124,58,237,0.15) 0%, transparent 50%), radial-gradient(circle at 70% 60%, rgba(59,130,246,0.1) 0%, transparent 50%)",
                }}
              />
            </>
          )}

          {/* Badge — top left of image */}
          <div className="absolute left-3 top-3 sm:left-4 sm:top-4">
            <Badge label={card.badge.label} variant={card.badge.variant} />
          </div>
        </div>

        {/* Text side */}
        <div className="flex w-full flex-col justify-center gap-4 p-6 sm:w-1/2 sm:p-8 lg:p-12">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
            {card.icon}
          </div>
          <h3 className="text-xl font-bold leading-tight tracking-tight sm:text-2xl lg:text-3xl">
            {card.headline}
          </h3>
          <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
            {card.tagline}
          </p>
        </div>
      </div>

      {/* Hover glow */}
      <div
        className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{ boxShadow: "inset 0 0 30px rgba(124,58,237,0.1), 0 0 30px rgba(124,58,237,0.08)" }}
      />
    </div>
  );
}

/* ── Main Component ── */
export function NewScope() {
  return (
    <section className="section-divider mx-auto w-full max-w-7xl px-4 py-12 sm:px-8 sm:py-24 lg:py-32">
      <h2 className="mb-3 text-center text-2xl font-bold tracking-tight sm:mb-4 sm:text-4xl lg:text-5xl">
        Novo Escopo
      </h2>
      <p className="mx-auto mb-8 max-w-md text-center text-sm text-muted-foreground sm:mb-14 sm:text-lg">
        O que já funciona e o que vem pela frente.
      </p>

      {/* Já atendido — compact inline bar */}
      <div className="mb-8 flex flex-wrap items-center justify-center gap-3 sm:mb-12 sm:gap-5">
        {DONE.map((item) => (
          <div
            key={item}
            className="flex items-center gap-1.5 rounded-full border border-success/20 bg-success/5 px-3 py-1.5 sm:gap-2 sm:px-4 sm:py-2"
          >
            <CheckInline />
            <span className="text-xs font-medium text-success sm:text-sm">{item}</span>
          </div>
        ))}
      </div>

      {/* Zigzag cards */}
      <div className="flex flex-col gap-5 sm:gap-6 lg:gap-8">
        {SCOPE_CARDS.map((card, i) => (
          <ZigzagCard key={card.headline} card={card} index={i} />
        ))}
      </div>
    </section>
  );
}
