import { useState } from "react";
import { Link } from "@tanstack/react-router";
import {
  Clock, GraduationCap, CheckCircle2, ArrowRight, Phone, MessageCircle, BookOpen,
  Briefcase, Award, Wallet, ClipboardList, Building2, ChevronDown, HelpCircle, Star,
} from "lucide-react";
import type { Course } from "@/data/courses";
import { getCoursesByCategory } from "@/data/courses";
import { getFallbackImage } from "@/data/courseImages";
import { openAdmission } from "@/lib/admission-modal";
import { courseWhatsappUrl, PHONE_NUMBER } from "@/lib/whatsapp";
import { useT } from "@/lib/i18n";
import { CourseCard } from "./CourseCard";

export function CourseDetail({ course }: { course: Course }) {
  const { t } = useT();
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const related = getCoursesByCategory(course.category)
    .filter((c) => c.id !== course.id)
    .slice(0, 3);

  const steps = [
    t("courses.steps.enquiry"),
    t("courses.steps.counsel"),
    t("courses.steps.documents"),
    t("courses.steps.pay"),
    t("courses.steps.start"),
  ];

  return (
    <article className="animate-fade-in">
      {/* Banner */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <img
            src={course.image}
            alt={course.title}
            className="h-full w-full object-cover"
            onError={(e) => {
              const fb = getFallbackImage(course.id, course.category);
              if (e.currentTarget.src !== fb) e.currentTarget.src = fb;
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/40" />
        </div>
        <div className="mx-auto max-w-7xl px-4 lg:px-8 py-16 lg:py-24">
          <div className="inline-flex items-center gap-2 rounded-full bg-card/80 backdrop-blur border border-border px-3 py-1.5 text-xs font-semibold text-primary">
            <GraduationCap className="h-3.5 w-3.5" /> {t(`categories.${course.category}`)}
          </div>
          <h1 className="mt-4 text-3xl md:text-5xl font-bold text-foreground max-w-3xl">{course.title}</h1>
          <p className="mt-4 text-base md:text-lg text-muted-foreground max-w-2xl">{course.description}</p>

          <div className="mt-6 flex flex-wrap gap-3">
            <span className="inline-flex items-center gap-2 rounded-full bg-card border border-border px-4 py-2 text-sm font-semibold text-foreground">
              <Clock className="h-4 w-4 text-primary" /> {t("courses.duration")}: {course.duration}
            </span>
            <span className="inline-flex items-center gap-2 rounded-full bg-card border border-border px-4 py-2 text-sm font-semibold text-foreground">
              <BookOpen className="h-4 w-4 text-primary" /> {t("courses.eligibility")}: {course.eligibility}
            </span>
          </div>

          <div className="mt-7 flex flex-wrap gap-3">
            <button onClick={openAdmission} className="inline-flex items-center gap-2 rounded-full hero-gradient px-6 py-3 text-sm font-semibold text-primary-foreground hover:scale-[1.04] transition-transform soft-shadow">
              {t("courses.applyNow")} <ArrowRight className="h-4 w-4" />
            </button>
            <a href={courseWhatsappUrl(course.title)} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-whatsapp px-6 py-3 text-sm font-semibold text-white hover:opacity-90 hover:scale-[1.04] transition-all">
              <MessageCircle className="h-4 w-4" /> {t("courses.applyWhatsapp")}
            </a>
            <a href={`tel:${PHONE_NUMBER}`} className="inline-flex items-center gap-2 rounded-full bg-card border border-border px-6 py-3 text-sm font-semibold text-foreground hover:border-primary/50 hover:text-primary transition-all">
              <Phone className="h-4 w-4" /> {t("hero.callNow")}
            </a>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-14 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8 grid lg:grid-cols-[1.4fr_1fr] gap-10">
          <div className="space-y-12">
            {/* Overview */}
            <div>
              <h2 className="flex items-center gap-2 text-2xl md:text-3xl font-bold text-foreground">
                <BookOpen className="h-6 w-6 text-primary" /> {t("courses.overview")}
              </h2>
              <p className="mt-4 text-base text-muted-foreground leading-relaxed">{course.description}</p>
              <div className="mt-5 grid sm:grid-cols-3 gap-3">
                {[
                  { icon: Clock, label: t("courses.duration"), value: course.duration },
                  { icon: GraduationCap, label: t("courses.eligibility"), value: course.eligibility },
                  { icon: Wallet, label: t("courses.fees"), value: course.fees },
                ].map((s) => (
                  <div key={s.label} className="rounded-2xl bg-card border border-border p-4">
                    <s.icon className="h-5 w-5 text-primary" />
                    <div className="mt-2 text-xs text-muted-foreground">{s.label}</div>
                    <div className="text-sm font-semibold text-foreground">{s.value}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Syllabus */}
            <div>
              <h2 className="flex items-center gap-2 text-2xl md:text-3xl font-bold text-foreground">
                <ClipboardList className="h-6 w-6 text-primary" /> {t("courses.syllabus")}
              </h2>
              <div className="mt-5 grid sm:grid-cols-2 gap-3">
                {course.syllabus.map((s, i) => (
                  <div key={s} className="flex items-start gap-3 rounded-2xl bg-card border border-border p-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full hero-gradient text-xs font-bold text-primary-foreground">{i + 1}</span>
                    <span className="text-sm text-foreground/85">{s}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Career Opportunities */}
            <div>
              <h2 className="flex items-center gap-2 text-2xl md:text-3xl font-bold text-foreground">
                <Briefcase className="h-6 w-6 text-primary" /> {t("courses.career")}
              </h2>
              <div className="mt-5 flex flex-wrap gap-3">
                {course.career.map((c) => (
                  <span key={c} className="inline-flex items-center gap-2 rounded-xl bg-primary/10 px-4 py-2.5 text-sm font-semibold text-primary">
                    <CheckCircle2 className="h-4 w-4" /> {c}
                  </span>
                ))}
              </div>
            </div>

            {/* Certification */}
            <div>
              <h2 className="flex items-center gap-2 text-2xl md:text-3xl font-bold text-foreground">
                <Award className="h-6 w-6 text-primary" /> {t("courses.certification")}
              </h2>
              <div className="mt-4 rounded-2xl bg-gradient-to-br from-primary/8 to-card border border-border p-5">
                <p className="text-sm text-foreground/85 leading-relaxed">{course.certification}</p>
              </div>
            </div>

            {/* Admission Process */}
            <div>
              <h2 className="flex items-center gap-2 text-2xl md:text-3xl font-bold text-foreground">
                <Building2 className="h-6 w-6 text-primary" /> {t("courses.admissionProcess")}
              </h2>
              <ol className="mt-5 space-y-3">
                {steps.map((s, i) => (
                  <li key={s} className="flex items-start gap-4 rounded-2xl bg-card border border-border p-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full hero-gradient text-sm font-bold text-primary-foreground">{i + 1}</span>
                    <span className="text-sm text-foreground/85 self-center">{s}</span>
                  </li>
                ))}
              </ol>
            </div>

            {/* Placement */}
            <div className="rounded-3xl hero-gradient p-6 md:p-8 text-primary-foreground soft-shadow">
              <h2 className="flex items-center gap-2 text-2xl md:text-3xl font-bold">
                <Star className="h-6 w-6" /> {t("courses.placement")}
              </h2>
              <p className="mt-3 text-sm md:text-base opacity-95 leading-relaxed">{t("courses.placementText")}</p>
              <button onClick={openAdmission} className="mt-5 rounded-full bg-white/95 px-6 py-3 text-sm font-semibold text-primary hover:bg-white transition">
                {t("courses.applyNow")}
              </button>
            </div>

            {/* FAQ */}
            <div>
              <h2 className="flex items-center gap-2 text-2xl md:text-3xl font-bold text-foreground">
                <HelpCircle className="h-6 w-6 text-primary" /> {t("courses.faq")}
              </h2>
              <div className="mt-5 space-y-3">
                {course.faq.map((f, i) => (
                  <div key={f.q} className="rounded-2xl bg-card border border-border overflow-hidden">
                    <button
                      onClick={() => setOpenFaq(openFaq === i ? null : i)}
                      className="flex w-full items-center justify-between gap-3 px-5 py-4 text-left"
                    >
                      <span className="text-sm font-semibold text-foreground">{f.q}</span>
                      <ChevronDown className={`h-4 w-4 shrink-0 text-primary transition-transform ${openFaq === i ? "rotate-180" : ""}`} />
                    </button>
                    {openFaq === i && (
                      <p className="px-5 pb-4 text-sm text-muted-foreground leading-relaxed">{f.a}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <aside>
            <div className="lg:sticky lg:top-24 space-y-6">
              <div className="rounded-3xl bg-card border border-border p-6 soft-shadow">
                <h3 className="text-xl font-bold text-foreground">{t("courses.highlights")}</h3>
                <ul className="mt-4 space-y-3">
                  {course.highlights.map((h) => (
                    <li key={h} className="flex items-start gap-2 text-sm text-foreground/85">
                      <CheckCircle2 className="h-4 w-4 mt-0.5 text-primary shrink-0" /> {h}
                    </li>
                  ))}
                </ul>
                <div className="mt-5 rounded-2xl bg-secondary/40 border border-border p-4">
                  <div className="flex items-center gap-2 text-sm font-semibold text-foreground">
                    <Wallet className="h-4 w-4 text-primary" /> {t("courses.fees")}: {course.fees}
                  </div>
                  <p className="mt-1 text-xs text-muted-foreground">{t("courses.feesNote")}</p>
                </div>
                <button onClick={openAdmission} className="mt-6 w-full rounded-full hero-gradient px-6 py-3 text-sm font-semibold text-primary-foreground hover:scale-[1.02] transition-transform soft-shadow">
                  {t("courses.applyNow")}
                </button>
                <a href={courseWhatsappUrl(course.title)} target="_blank" rel="noreferrer" className="mt-3 flex items-center justify-center gap-2 w-full rounded-full bg-whatsapp px-6 py-3 text-sm font-semibold text-white hover:opacity-90 transition">
                  <MessageCircle className="h-4 w-4" /> {t("courses.applyWhatsapp")}
                </a>
                <a href={`tel:${PHONE_NUMBER}`} className="mt-3 flex items-center justify-center gap-2 w-full rounded-full bg-card border border-border px-6 py-3 text-sm font-semibold text-foreground hover:border-primary/50 hover:text-primary transition">
                  <Phone className="h-4 w-4" /> {t("hero.callNow")}
                </a>
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* Related */}
      {related.length > 0 && (
        <section className="py-14 lg:py-20 bg-secondary/30">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">{t("courses.relatedCourses")}</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {related.map((c) => (
                <CourseCard key={c.id} course={c} />
              ))}
            </div>
          </div>
        </section>
      )}
    </article>
  );
}
