"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

const FEATURES = [
  {
    label: "Alta estabilidade",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 20h.01" />
        <path d="M2 8.82a15 15 0 0 1 20 0" />
        <path d="M5 12.859a10 10 0 0 1 14 0" />
        <path d="M8.5 16.429a5 5 0 0 1 7 0" />
      </svg>
    ),
  },
  {
    label: "Funciona 24 horas",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    ),
  },
  {
    label: "Internet exclusiva",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="16" y="16" width="6" height="6" rx="1" />
        <rect x="2" y="16" width="6" height="6" rx="1" />
        <rect x="9" y="2" width="6" height="6" rx="1" />
        <path d="M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3" />
        <path d="M12 12V8" />
      </svg>
    ),
  },
  {
    label: "Autorizada pela Anatel",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
        <path d="M14 2v4a2 2 0 0 0 2 2h4" />
        <path d="m9 15 2 2 4-4" />
      </svg>
    ),
  },
];

const DURATION_MS = 1600;

function AnimatedDistance({ play }: { play: boolean }) {
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
      setDisplay(Math.round(eased * 700));
      if (progress < 1) raf = requestAnimationFrame(tick);
    }
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [play]);

  return <span className="tabular-nums">&lt;{play ? display : 0}m</span>;
}

export function PirajaNet() {
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
    <section ref={ref} className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-8 sm:py-24 lg:py-32">
      <div className="rounded-2xl border-2 border-primary/30 bg-card sm:rounded-3xl">
        <div className="flex flex-col items-center gap-6 p-5 sm:gap-10 sm:p-14 lg:flex-row lg:gap-16 lg:p-16">
          {/* Left — logo + number */}
          <div className="flex shrink-0 flex-col items-center gap-4 sm:gap-6 lg:items-start">
            <Image
              src="/pirajanet-logo.png"
              alt="PirajaNet"
              width={280}
              height={90}
              className="h-16 w-auto sm:h-20 lg:h-24"
            />
            <span className="text-3xl font-extrabold tracking-tight text-primary sm:text-5xl lg:text-6xl">
              <AnimatedDistance play={visible} />
            </span>
          </div>

          {/* Right — features */}
          <div className="grid w-full grid-cols-1 gap-3 min-[400px]:grid-cols-2 sm:gap-5 lg:gap-6">
            {FEATURES.map((f, i) => (
              <div
                key={f.label}
                className="flex items-center gap-3 rounded-xl border border-border/50 bg-secondary/20 px-4 py-3.5 transition-all duration-300 hover:bg-secondary/40 hover:border-primary/20 sm:gap-4 sm:rounded-2xl sm:px-6 sm:py-5"
                style={{
                  opacity: visible ? 1 : 0,
                  transform: visible ? "translateY(0)" : "translateY(12px)",
                  transition: `opacity 0.5s ease ${0.3 + i * 0.1}s, transform 0.5s ease ${0.3 + i * 0.1}s, background-color 0.3s ease, border-color 0.3s ease`,
                }}
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary sm:h-12 sm:w-12 sm:rounded-xl">
                  {f.icon}
                </div>
                <span className="text-sm font-semibold leading-tight sm:text-lg">
                  {f.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
