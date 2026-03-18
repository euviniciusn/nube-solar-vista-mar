"use client";

import { useCallback, useEffect, useRef, useState } from "react";

export function Pricing() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  const handleIntersect = useCallback(
    (entries: IntersectionObserverEntry[]) => {
      if (entries[0].isIntersecting) setVisible(true);
    },
    [],
  );

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(handleIntersect, {
      threshold: 0.3,
    });
    observer.observe(el);
    return () => observer.disconnect();
  }, [handleIntersect]);

  return (
    <section ref={ref} className="section-divider mx-auto w-full max-w-7xl px-4 py-12 sm:px-8 sm:py-24 lg:py-32">

      <h2 className="mb-3 text-center text-2xl font-bold tracking-tight sm:mb-4 sm:text-4xl lg:text-5xl">
        Investimento
      </h2>
      <p className="mx-auto mb-8 max-w-lg text-center text-sm text-muted-foreground sm:mb-12 sm:text-lg">
        De R$ 3.400/mês do condomínio para um valor por unidade.
      </p>

      <div className="flex flex-col items-center gap-8 sm:flex-row sm:justify-center sm:gap-0">
        {/* Valor atual */}
        <div
          className="rounded-2xl border border-border bg-card flex w-full max-w-sm flex-col items-center gap-2 p-6 text-center sm:gap-3 sm:p-12"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateX(0)" : "translateX(-30px)",
            transition: "opacity 0.6s cubic-bezier(0.16,1,0.3,1), transform 0.6s cubic-bezier(0.16,1,0.3,1)",
          }}
        >
          <span className="text-sm font-semibold uppercase tracking-[0.15em] text-muted-foreground sm:text-base">
            Valor atual do condomínio
          </span>
          <div className="flex items-baseline gap-1 sm:gap-2">
            <span className="text-lg font-bold text-muted-foreground sm:text-2xl lg:text-3xl">R$</span>
            <span className="text-3xl font-extrabold tracking-tight sm:text-6xl lg:text-7xl">3.400</span>
          </div>
          <span className="text-sm text-muted-foreground">/mês</span>
        </div>

        {/* Arrow */}
        <div
          className="flex shrink-0 items-center justify-center sm:px-8 lg:px-12"
          style={{
            opacity: visible ? 1 : 0,
            transition: "opacity 0.6s ease 0.3s",
          }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary sm:hidden" aria-hidden="true">
            <path d="M12 5v14" />
            <path d="m19 12-7 7-7-7" />
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="hidden text-primary sm:block" aria-hidden="true">
            <path d="M5 12h14" />
            <path d="m12 5 7 7-7 7" />
          </svg>
        </div>

        {/* Escopo completo */}
        <div
          className="relative flex w-full max-w-sm flex-col items-center gap-2 overflow-hidden rounded-2xl border-2 border-primary/50 bg-primary/5 p-6 text-center shadow-[0_0_40px_rgba(124,58,237,0.15)] sm:gap-3 sm:p-12"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateX(0) scale(1)" : "translateX(30px) scale(0.95)",
            transition: "opacity 0.6s cubic-bezier(0.16,1,0.3,1) 0.2s, transform 0.6s cubic-bezier(0.16,1,0.3,1) 0.2s",
          }}
        >
          <span className="text-sm font-semibold uppercase tracking-[0.15em] text-muted-foreground sm:text-base">
            Escopo completo
          </span>
          <div className="flex items-baseline gap-1 sm:gap-2">
            <span className="text-lg font-bold text-primary/70 sm:text-2xl lg:text-3xl">R$</span>
            <span className="text-gradient text-3xl font-extrabold tracking-tight sm:text-6xl lg:text-7xl">49,90</span>
          </div>
          <span className="text-sm font-medium text-muted-foreground">/unidade por mês*</span>
        </div>
      </div>

      <p className="mt-6 text-center text-sm text-muted-foreground sm:mt-10 sm:text-base">
        *Inclui todo o sistema existente + novas entregas. Não inclui internet — contrato à parte.
      </p>
    </section>
  );
}
