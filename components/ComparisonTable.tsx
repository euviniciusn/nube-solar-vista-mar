"use client";

import { useCallback, useEffect, useRef, useState } from "react";

interface Row {
  item: string;
  contracted: string;
  delivered: string;
  extra: string;
}

const ROWS: Row[] = [
  { item: "Câmeras", contracted: "62", delivered: "70", extra: "+8 sem custo" },
  { item: "Faciais", contracted: "1", delivered: "5", extra: "+4 doados" },
  { item: "Antenas de rede", contracted: "31", delivered: "33 (26+7)", extra: "—" },
  { item: "Equipamentos de rede", contracted: "10", delivered: "10", extra: "—" },
  { item: "Central de gerenciamento", contracted: "1", delivered: "1", extra: "—" },
  { item: "Bateria de emergência", contracted: "1", delivered: "1", extra: "—" },
  { item: "Telefonia", contracted: "—", delivered: "1 linha + 2 ramais", extra: "Gratuita" },
  { item: "Servidor dedicado", contracted: "—", delivered: "1", extra: "Gratuito" },
  { item: "Câmera com áudio", contracted: "—", delivered: "1", extra: "Sem custo" },
  { item: "Toda a infraestrutura física", contracted: "—", delivered: "Completa", extra: "Sem custo" },
];

function hasExtra(value: string) {
  return value !== "—";
}

export function ComparisonTable() {
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
      threshold: 0.1,
    });
    observer.observe(el);
    return () => observer.disconnect();
  }, [handleIntersect]);

  return (
    <section ref={ref} className="section-divider mx-auto w-full max-w-7xl px-4 py-12 sm:px-8 sm:py-24 lg:py-32">
      <h2 className="mb-3 text-center text-2xl font-bold tracking-tight sm:mb-4 sm:text-4xl lg:text-5xl">
        Contratado vs. Entregue
      </h2>
      <p className="mx-auto mb-8 max-w-lg text-center text-sm text-muted-foreground sm:mb-12 sm:text-lg">
        Uma comparação transparente do que foi acordado e o que foi realmente entregue.
      </p>

      {/* Desktop table */}
      <div className="hidden overflow-hidden rounded-2xl border border-border/50 sm:block ">
        <table className="w-full text-base">
          <thead>
            <tr className="border-b border-border bg-secondary/60 text-left text-sm font-semibold uppercase tracking-wider text-muted-foreground">
              <th className="px-6 py-4">Item</th>
              <th className="px-6 py-4 text-center">Contratado</th>
              <th className="px-6 py-4 text-center">Entregue</th>
              <th className="px-6 py-4 text-center">Extra</th>
            </tr>
          </thead>
          <tbody>
            {ROWS.map((row, i) => (
              <tr
                key={row.item}
                className={`border-b border-border/20 transition-all duration-300 hover:bg-primary/5 ${
                  i % 2 === 0 ? "bg-card" : "bg-secondary/10"
                }`}
                style={{
                  opacity: visible ? 1 : 0,
                  transform: visible ? "translateX(0)" : "translateX(-12px)",
                  transition: `opacity 0.4s ease ${i * 0.05}s, transform 0.4s ease ${i * 0.05}s, background-color 0.2s ease`,
                }}
              >
                <td className="px-6 py-4 font-medium text-base">{row.item}</td>
                <td className="px-6 py-4 text-center text-muted-foreground">
                  {row.contracted}
                </td>
                <td className="px-6 py-4 text-center font-semibold text-foreground">
                  {row.delivered}
                </td>
                <td className="px-6 py-4 text-center">
                  {hasExtra(row.extra) ? (
                    <span className="inline-flex rounded-full border border-success/30 bg-success/10 px-3 py-1 text-sm font-semibold text-success">
                      {row.extra}
                    </span>
                  ) : (
                    <span className="text-muted-foreground/30">{row.extra}</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile cards */}
      <div className="flex flex-col gap-3 sm:hidden">
        {ROWS.map((row, i) => (
          <div
            key={row.item}
            className="rounded-xl border border-border bg-card p-4"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(16px)",
              transition: `opacity 0.4s ease ${i * 0.04}s, transform 0.4s ease ${i * 0.04}s`,
            }}
          >
            <div className="mb-2 flex items-start justify-between gap-2">
              <span className="text-sm font-bold leading-tight wrap-break-word">{row.item}</span>
              {hasExtra(row.extra) && (
                <span className="inline-flex rounded-full border border-success/30 bg-success/10 px-2.5 py-0.5 text-xs font-semibold text-success">
                  {row.extra}
                </span>
              )}
            </div>
            <div className="grid grid-cols-2 gap-3 text-sm">
              <div>
                <span className="text-muted-foreground">Contratado</span>
                <p className="mt-0.5 text-base font-medium">{row.contracted}</p>
              </div>
              <div>
                <span className="text-muted-foreground">Entregue</span>
                <p className="mt-0.5 text-base font-semibold">{row.delivered}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
