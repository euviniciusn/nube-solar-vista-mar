import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { ScrollProgress } from "@/components/ScrollProgress";
import { StatCards } from "@/components/StatCards";
import { Differentials } from "@/components/Differentials";
import { Delivered } from "@/components/Delivered";
import { ComparisonTable } from "@/components/ComparisonTable";
import { NewScope } from "@/components/NewScope";
import { IntercomShowcase } from "@/components/IntercomShowcase";
import { PirajaNet } from "@/components/PirajaNet";
import { InternetPlans } from "@/components/InternetPlans";
import { Pricing } from "@/components/Pricing";

import { Closing } from "@/components/Closing";
import { Footer } from "@/components/Footer";
import { AnimateOnScroll } from "@/components/AnimateOnScroll";

export default function Home() {
  return (
    <div>
      <ScrollProgress />
      <Navbar />

      {/* Hero wrapper — h-screen holds the scroll space,
          Hero inside is sticky so it stays pinned while
          the main content slides up and covers it */}
      <div id="hero" className="min-h-svh sm:h-screen sm:min-h-0">
        <Hero />
      </div>

      {/* Main content — sits above the Hero */}
      <div className="relative z-10 rounded-t-3xl bg-background shadow-[0_-12px_40px_rgba(0,0,0,0.4)]">
        <AnimateOnScroll
          id="stats"
          as="section"
          className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-8 sm:py-24 lg:py-32"
          variant="fade-up"
        >
          <StatCards />
        </AnimateOnScroll>

        <AnimateOnScroll id="differentials" variant="fade-up">
          <Differentials />
        </AnimateOnScroll>

        <AnimateOnScroll id="delivered" variant="fade-up">
          <Delivered />
        </AnimateOnScroll>

        <AnimateOnScroll id="comparison" variant="fade-up">
          <ComparisonTable />
        </AnimateOnScroll>

        <AnimateOnScroll id="scope" variant="fade-up">
          <NewScope />
        </AnimateOnScroll>

        <AnimateOnScroll id="intercom" variant="fade-up">
          <IntercomShowcase />
        </AnimateOnScroll>

        <AnimateOnScroll id="pirajanet" variant="fade-up">
          <PirajaNet />
        </AnimateOnScroll>

        <AnimateOnScroll id="internet" variant="fade-up">
          <InternetPlans />
        </AnimateOnScroll>

        <AnimateOnScroll id="pricing" variant="fade-up">
          <Pricing />
        </AnimateOnScroll>

        <AnimateOnScroll id="closing" variant="fade-up">
          <Closing />
        </AnimateOnScroll>

        <Footer />
      </div>
    </div>
  );
}
