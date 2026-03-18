const FEATURES = [
  "Morador libera visitante direto pelo celular",
  "Portaria faz chamada de vídeo para o apartamento",
  "Funciona mesmo fora do condomínio",
  "Registro completo de todas as visitas",
];

export function IntercomShowcase() {
  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-8 sm:py-24 lg:py-32">
      <div className="rounded-2xl border border-border bg-card p-5 sm:p-12 lg:p-16">
        {/* Header */}
        <div className="mb-6 flex flex-col items-center gap-3 text-center sm:mb-10 sm:gap-4">
          <span className="inline-flex items-center gap-2 rounded-full border border-info/30 bg-info/10 px-3 py-1 text-xs font-semibold text-info sm:text-sm">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
            Novo
          </span>

          <h2 className="text-xl font-bold tracking-tight sm:text-3xl lg:text-4xl">
            Interfonia digital integrada
          </h2>

          <p className="max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            O morador recebe a chamada da portaria direto no celular e libera o visitante com um toque — sem interfone físico, sem fiação extra.
          </p>
        </div>

        {/* Video — 16:9 full width */}
        <div className="mx-auto">
          <div className="relative overflow-hidden rounded-2xl border border-border shadow-lg" style={{ paddingBottom: "56.25%" }}>
            <iframe
              className="absolute inset-0 h-full w-full"
              src="https://www.youtube.com/embed/OgauqtKd9tk"
              title="Interfone digital — Nube Soluções"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>

        {/* Features — grid below video */}
        <div className="mx-auto mt-10 grid max-w-3xl grid-cols-1 gap-4 sm:grid-cols-2">
          {FEATURES.map((feat) => (
            <div key={feat} className="flex items-start gap-3 text-sm text-foreground sm:text-base">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="mt-0.5 shrink-0 text-success" aria-hidden="true">
                <path d="M20 6 9 17l-5-5" />
              </svg>
              {feat}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
