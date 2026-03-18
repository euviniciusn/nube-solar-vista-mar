const ITEMS = [
  {
    title: "Já estamos aqui",
    text: "70 câmeras e 5 faciais funcionando agora. Não é promessa.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    ),
  },
  {
    title: "Zero retrabalho",
    text: "A fase de implantação e ajustes já passou. Sistema rodando.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
  },
  {
    title: "Suporte em 6 horas",
    text: "Equipe local a 700m. Atendimento em até 6h, não 8.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
  },
] as const;

export function Differentials() {
  return (
    <section className="section-divider mx-auto w-full max-w-7xl px-4 py-12 sm:px-8 sm:py-24 lg:py-32">
      <div className="grid gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 lg:gap-8">
        {ITEMS.map((item) => (
          <div
            key={item.title}
            className="rounded-2xl border border-border bg-card group flex flex-col gap-4 p-6 sm:gap-6 sm:p-10 lg:p-12 transition-shadow hover:shadow-lg"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-primary/20 sm:h-16 sm:w-16 sm:rounded-2xl">
              {item.icon}
            </div>
            <h3 className="text-lg font-bold tracking-tight sm:text-2xl lg:text-3xl">
              {item.title}
            </h3>
            <p className="text-sm leading-relaxed text-muted-foreground sm:text-lg">
              {item.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
