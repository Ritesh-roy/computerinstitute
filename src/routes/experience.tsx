import { createFileRoute } from "@tanstack/react-router";
import { Experience, Gallery, Testimonials, CTA } from "@/components/site/Sections";

export const Route = createFileRoute("/experience")({
  head: () => ({
    meta: [
      { title: "Experience | SK Institute" },
      { name: "description", content: "Explore SK Institute's journey, achievements, student success stories, placement highlights, training labs and industry exposure across 21+ years." },
      { property: "og:title", content: "Experience | SK Institute" },
      { property: "og:description", content: "Our journey, achievements, success stories, labs and placement highlights." },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "https://sk-institute-quest.lovable.app/experience" }],
  }),
  component: ExperiencePage,
});

function ExperiencePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-secondary/40 to-background">
        <div className="mx-auto max-w-7xl px-4 lg:px-8 py-16 lg:py-24 text-center animate-fade-in">
          <div className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-primary mb-3">Our Experience</div>
          <h1 className="text-4xl md:text-6xl font-bold text-foreground">
            <span className="bg-clip-text text-transparent hero-gradient">21+ Years</span> of shaping careers
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-muted-foreground text-base md:text-lg">
            A journey of achievements, student success, hands-on training labs and real industry exposure.
          </p>
        </div>
      </section>

      <Experience />
      <Gallery />
      <Testimonials />
      <CTA />
    </>
  );
}
