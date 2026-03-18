"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="relative top-0 z-0 flex min-h-svh items-center justify-center overflow-hidden px-4 pt-16 sm:sticky sm:h-screen sm:min-h-0 sm:px-6">
      {/* Background image */}
      <Image
        src="/hero-bg.jpg"
        alt=""
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />

      {/* Scrim — gradient overlay for readability */}
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, rgba(15,15,26,0.75) 0%, rgba(15,15,26,0.55) 40%, rgba(15,15,26,0.80) 100%)",
        }}
      />

      {/* Content */}
      <div
        className="relative z-10 mx-auto flex max-w-3xl flex-col items-center gap-6 px-6 text-center"
        style={{
          opacity: mounted ? 1 : 0,
          transform: mounted ? "translateY(0)" : "translateY(16px)",
          transition:
            "opacity 0.7s ease, transform 0.7s ease",
        }}
      >
        <Image
          src="/solar-vista-mar-logo-nube.png"
          alt="Nube Soluções — Solar Vista Mar"
          width={320}
          height={320}
          className="h-24 w-auto sm:h-32 lg:h-36"
          priority
        />

        <h1 className="text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
          Solar Vista Mar
        </h1>

        <p
          className="text-lg font-medium text-white/80 sm:text-xl"
          style={{
            opacity: mounted ? 1 : 0,
            transition: "opacity 0.7s ease 0.2s",
          }}
        >
          Segurança, Tecnologia e Transparência
        </p>

        <span
          className="rounded-full border border-white/20 bg-white/10 px-5 py-2 text-sm font-medium tracking-wide text-white/70 backdrop-blur-sm"
          style={{
            opacity: mounted ? 1 : 0,
            transition: "opacity 0.7s ease 0.35s",
          }}
        >
          Reunião de Alinhamento
        </span>

        <a
          href="#stats"
          className="mt-2 inline-flex min-h-11 items-center gap-2 rounded-full bg-primary px-7 py-3 text-sm font-semibold text-white transition-all hover:bg-primary/90 sm:text-base"
          style={{
            opacity: mounted ? 1 : 0,
            transition: "opacity 0.7s ease 0.5s",
          }}
        >
          Conheça o projeto
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M12 5v14" />
            <path d="m19 12-7 7-7-7" />
          </svg>
        </a>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2">
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="animate-chevron-bounce text-white/40" aria-hidden="true">
          <path d="m6 9 6 6 6-6" />
        </svg>
      </div>
    </section>
  );
}
