"use client";

import { useEffect, useRef, useState, useCallback } from "react";

interface StatItem {
  value: number;
  prefix?: string;
  suffix?: string;
  label: string;
  icon: React.ReactNode;
}

const STATS: StatItem[] = [
  {
    value: 70,
    label: "câmeras instaladas",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="m22 8-6 4 6 4V8Z" />
        <rect width="14" height="12" x="2" y="6" rx="2" ry="2" />
      </svg>
    ),
  },
  {
    value: 5,
    label: "controles faciais",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="8" r="5" />
        <path d="M20 21a8 8 0 0 0-16 0" />
      </svg>
    ),
  },
  {
    value: 7,
    label: "pontos Wi-Fi",
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
    value: 3400,
    prefix: "R$\u00A0",
    label: "valor mensal atual",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <line x1="12" x2="12" y1="2" y2="22" />
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    ),
  },
];

const DURATION_MS = 1600;

function formatNumber(n: number): string {
  return n.toLocaleString("pt-BR");
}

function AnimatedNumber({ item, play }: { item: StatItem; play: boolean }) {
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!play) return;

    let start: number | null = null;
    let raf: number;

    function tick(ts: number) {
      if (start === null) start = ts;
      const elapsed = ts - start;
      const progress = Math.min(elapsed / DURATION_MS, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.round(eased * item.value));
      if (progress < 1) raf = requestAnimationFrame(tick);
    }

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [play, item.value]);

  return (
    <span className="tabular-nums">
      {item.prefix ?? ""}
      {formatNumber(play ? display : 0)}
      {item.suffix ?? ""}
    </span>
  );
}

export function StatCards() {
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
    <div ref={ref} className="grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-4 lg:gap-8">
      {STATS.map((item, i) => (
        <div
          key={item.label}
          className="rounded-2xl border border-border bg-card flex flex-col items-center gap-3 p-5 text-center sm:gap-4 sm:p-10 lg:p-12 transition-shadow hover:shadow-lg"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(24px)",
            transition: `opacity 0.6s cubic-bezier(0.16,1,0.3,1) ${i * 0.12}s, transform 0.6s cubic-bezier(0.16,1,0.3,1) ${i * 0.12}s`,
          }}
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary sm:h-14 sm:w-14 sm:rounded-2xl">
            {item.icon}
          </div>
          <span className="text-3xl font-extrabold tracking-tight text-primary sm:text-5xl lg:text-6xl">
            <AnimatedNumber item={item} play={visible} />
          </span>
          <span className="text-xs font-medium uppercase tracking-[0.12em] text-muted-foreground sm:text-base sm:tracking-[0.15em]">
            {item.label}
          </span>
        </div>
      ))}
    </div>
  );
}
