import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Geist_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nube Soluções — Solar Vista Mar",
  description:
    "Segurança eletrônica, controle de acesso e manutenção para o Condomínio Solar Vista Mar. Sem investimento inicial.",
  icons: { icon: "/favicon.png" },
  other: {
    "theme-color": "#0f0f1a",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "black-translucent",
  },
  openGraph: {
    title: "Nube Soluções — Solar Vista Mar",
    description:
      "Segurança eletrônica, controle de acesso e manutenção para o Condomínio Solar Vista Mar.",
    images: [{ url: "/solar-vista-mar-logo-nube.png", width: 512, height: 512, alt: "Nube Soluções — Solar Vista Mar" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nube Soluções — Solar Vista Mar",
    description:
      "Segurança eletrônica, controle de acesso e manutenção para o Condomínio Solar Vista Mar.",
    images: [{ url: "/solar-vista-mar-logo-nube.png", width: 512, height: 512, alt: "Nube Soluções — Solar Vista Mar" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${inter.variable} ${geistMono.variable} dark`}
    >
      <body className="min-h-screen font-sans antialiased">{children}</body>
    </html>
  );
}
