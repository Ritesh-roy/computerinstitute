import { createFileRoute } from "@tanstack/react-router";
import { About, WhyChoose, StatsBar, CTA } from "@/components/site/Sections";
import { logoUrl } from "@/components/site/Logo";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us | SK Institute" },
      { name: "description", content: "About SK Institute — 21+ years of career-focused education in computer courses, academic courses and paramedical training. Experienced trainers, practical learning and placement support." },
      { property: "og:title", content: "About Us | SK Institute" },
      { property: "og:description", content: "21+ years of career-focused education in computer, academy and paramedical training." },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "https://sk-institute-quest.lovable.app/about" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden hero-gradient text-primary-foreground">
        <div aria-hidden className="pointer-events-none absolute -top-20 -right-20 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
        <div aria-hidden className="pointer-events-none absolute -bottom-24 -left-20 h-80 w-80 rounded-full bg-white/10 blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-4 lg:px-8 py-20 lg:py-28 text-center animate-fade-in">
          <img src={logoUrl} alt="SK Institute logo" className="mx-auto h-20 w-20 rounded-2xl bg-white/95 p-2 shadow-lg mb-6" width={80} height={80} />
          <h1 className="text-4xl md:text-6xl font-bold">SK Institute</h1>
          <p className="mt-4 text-lg md:text-2xl font-semibold opacity-95">Computer • Academy • Paramedical</p>
          <p className="mt-4 max-w-2xl mx-auto text-base md:text-lg opacity-90">
            Building careers with practical, affordable and industry-oriented education since 2005.
          </p>
        </div>
      </section>

      <About />
      <WhyChoose />
      <StatsBar />
      <CTA />
    </>
  );
}
