"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const NAV_LINKS = [
  { label: "Início", href: "#hero" },
  { label: "Diferenciais", href: "#differentials" },
  { label: "Entregue", href: "#delivered" },
  { label: "Novo Escopo", href: "#scope" },
  { label: "Internet", href: "#internet" },
  { label: "Investimento", href: "#pricing" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 60);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const ids = NAV_LINKS.map((l) => l.href.replace("#", ""));
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        }
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 },
    );

    for (const id of ids) {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    }
    return () => observer.disconnect();
  }, []);

  // Close menu on scroll
  useEffect(() => {
    if (!menuOpen) return;
    function close() { setMenuOpen(false); }
    window.addEventListener("scroll", close, { passive: true });
    return () => window.removeEventListener("scroll", close);
  }, [menuOpen]);

  return (
    <>
      {/* Desktop pill navbar — hidden on mobile */}
      <nav
        className={`navbar-glass fixed top-4 left-1/2 z-50 hidden -translate-x-1/2 rounded-full px-5 py-2.5 transition-all duration-500 sm:block ${
          scrolled ? "shadow-lg shadow-primary/5" : ""
        }`}
      >
        <div className="flex items-center gap-1.5">
          <div
            className={`mr-3 overflow-hidden transition-all duration-300 ${
              scrolled ? "w-9 opacity-100" : "w-0 opacity-0"
            }`}
          >
            <Image
              src="/logo-nube.png"
              alt="Nube"
              width={36}
              height={36}
              className="h-9 w-9 object-contain"
            />
          </div>

          {NAV_LINKS.map((link) => {
            const sectionId = link.href.replace("#", "");
            const isActive = activeSection === sectionId;
            return (
              <a
                key={link.href}
                href={link.href}
                className={`relative rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 ${
                  isActive
                    ? "bg-primary/15 text-primary"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute bottom-0.5 left-1/2 h-0.5 w-4 -translate-x-1/2 rounded-full bg-primary" />
                )}
              </a>
            );
          })}
        </div>
      </nav>

      {/* Mobile hamburger button */}
      <button
        type="button"
        aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
        onClick={() => setMenuOpen(!menuOpen)}
        className={`navbar-glass fixed top-4 right-4 z-50 flex h-11 w-11 items-center justify-center rounded-full transition-all duration-300 sm:hidden ${
          scrolled ? "shadow-lg shadow-primary/5" : ""
        }`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-foreground"
          aria-hidden="true"
        >
          {menuOpen ? (
            <>
              <path d="M18 6 6 18" />
              <path d="m6 6 12 12" />
            </>
          ) : (
            <>
              <path d="M4 8h16" />
              <path d="M4 16h16" />
            </>
          )}
        </svg>
      </button>

      {/* Mobile fullscreen menu */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-2 bg-background/95 backdrop-blur-md sm:hidden">
          {NAV_LINKS.map((link) => {
            const sectionId = link.href.replace("#", "");
            const isActive = activeSection === sectionId;
            return (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={`min-h-12 flex items-center rounded-xl px-8 py-3 text-lg font-medium transition-colors ${
                  isActive
                    ? "bg-primary/15 text-primary"
                    : "text-muted-foreground"
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </div>
      )}
    </>
  );
}
