import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Hero, StatsBar, CTA, Testimonials } from "@/components/site/Sections";
import { CourseCard } from "@/components/site/CourseCard";
import { getCoursesByCategory, type Course } from "@/data/courses";
import { useT } from "@/lib/i18n";
import labImg from "@/assets/hd-lab.jpg";
import successImg from "@/assets/hd-success.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "SK Institute — Home | Computer, Academic & Paramedical Courses" },
      { name: "description", content: "Welcome to SK Institute. 21+ Years of Educational Excellence Since 2005 — professional computer courses, academic courses and paramedical education." },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  const { t } = useT();
  const topComputer = getCoursesByCategory("computer").slice(0, 6);
  const topAcademy = getCoursesByCategory("academy").slice(0, 4);
  const topPara = getCoursesByCategory("paramedical").slice(0, 3);

  return (
    <>
      <Hero />
      <StatsBar />

      <PreviewSection
        title={t("categories.computer")}
        subtitle={t("courses.sectionLabel")}
        intro={t("categories.computerIntro")}
        to="/courses"
        ctaLabel={t("courses.viewAll")}
        items={topComputer}
      />

      <PreviewSection
        title={t("categories.academy")}
        subtitle={t("courses.sectionLabel")}
        intro={t("categories.academyIntro")}
        to="/academy-programs"
        ctaLabel={t("courses.explore")}
        items={topAcademy}
        muted
      />

      <PreviewSection
        title={t("categories.paramedical")}
        subtitle={t("courses.sectionLabel")}
        intro={t("categories.paramedicalIntro")}
        to="/paramedical"
        ctaLabel={t("courses.explore")}
        items={topPara}
      />

      {/* About Preview */}
      <section className="py-16 lg:py-24 bg-secondary/30">
        <div className="mx-auto max-w-6xl px-4 lg:px-8 grid lg:grid-cols-2 gap-10 items-center">
          <div className="relative img-hover-wrap rounded-3xl">
            <img src={labImg} alt="SK Institute modern computer lab" loading="lazy" width={1536} height={1024}
              className="rounded-3xl soft-shadow w-full h-auto object-cover" />
            <div className="absolute -bottom-5 -right-5 hidden md:block rounded-2xl bg-card border border-border p-4 soft-shadow">
              <div className="text-3xl font-bold bg-clip-text text-transparent hero-gradient">21+</div>
              <div className="text-xs text-muted-foreground font-medium">{t("stats.years")}</div>
            </div>
          </div>
          <div>
            <div className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-primary mb-3">{t("about.label")}</div>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground">{t("about.title")}</h2>
            <p className="mt-5 text-muted-foreground text-base md:text-lg">{t("about.p1")}</p>
            <p className="mt-3 text-muted-foreground">{t("about.p2")}</p>
            <Link to="/about" className="mt-7 inline-flex items-center gap-2 rounded-full hero-gradient px-6 py-3 text-sm font-semibold text-primary-foreground hover:scale-[1.03] transition-transform soft-shadow">
              {t("about.readStory")} <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Student Success */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-6xl px-4 lg:px-8 grid lg:grid-cols-2 gap-10 items-center">
          <div className="order-2 lg:order-1">
            <div className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-primary mb-3">Student Success</div>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground">Real graduates. Real careers.</h2>
            <p className="mt-5 text-muted-foreground text-base md:text-lg">
              Our alumni work as developers, accountants, designers, lab technicians and entrepreneurs across India. Every course ends with placement assistance and real interview prep.
            </p>
            <div className="mt-6 grid grid-cols-2 gap-3 max-w-md">
              {[
                { n: "10,000+", l: t("stats.students") },
                { n: "98%", l: t("stats.placement") },
                { n: "29+", l: t("stats.courses") },
                { n: "25+", l: t("stats.faculty") },
              ].map((s) => (
                <div key={s.l} className="rounded-2xl bg-card border border-border p-4">
                  <div className="text-2xl font-bold bg-clip-text text-transparent hero-gradient">{s.n}</div>
                  <div className="text-xs text-muted-foreground mt-1 font-medium">{s.l}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="order-1 lg:order-2 img-hover-wrap rounded-3xl">
            <img src={successImg} alt="SK Institute graduating students celebrating" loading="lazy" width={1536} height={1024}
              className="rounded-3xl soft-shadow w-full h-auto object-cover" />
          </div>
        </div>
      </section>

      <Testimonials />
      <CTA />
    </>
  );
}

function PreviewSection({
  title, subtitle, intro, to, ctaLabel, items, muted = false,
}: {
  title: string;
  subtitle: string;
  intro: string;
  to: string;
  ctaLabel: string;
  items: Course[];
  muted?: boolean;
}) {
  return (
    <section className={`py-16 lg:py-24 ${muted ? "bg-secondary/30" : ""}`}>
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="flex flex-wrap items-end justify-between gap-4 mb-10">
          <div className="max-w-2xl">
            <div className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-primary mb-3">{subtitle}</div>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground">{title}</h2>
            <p className="mt-3 text-muted-foreground">{intro}</p>
          </div>
          <Link to={to} className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-2.5 text-sm font-semibold text-foreground hover:border-primary/50 hover:text-primary transition">
            {ctaLabel} <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map((c) => (
            <CourseCard key={c.id} course={c} />
          ))}
        </div>
      </div>
    </section>
  );
}
