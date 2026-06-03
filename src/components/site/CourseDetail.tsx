import { Link } from "@tanstack/react-router";
import {
  Clock, GraduationCap, CheckCircle2, ArrowRight, Phone, MessageCircle, BookOpen,
} from "lucide-react";
import type { Course } from "@/data/courses";
import { getCoursesByCategory } from "@/data/courses";
import { openAdmission } from "@/lib/admission-modal";
import { courseWhatsappUrl, PHONE_NUMBER } from "@/lib/whatsapp";
import { useT } from "@/lib/i18n";
import { CourseCard } from "./CourseCard";

export function CourseDetail({ course }: { course: Course }) {
  const { t } = useT();
  const related = getCoursesByCategory(course.category)
    .filter((c) => c.id !== course.id)
    .slice(0, 3);

  return (
    <article className="animate-fade-in">
      {/* Banner */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <img src={course.image} alt={course.title} className="h-full w-full object-cover" />
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
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">{t("courses.syllabus")}</h2>
            <div className="mt-5 grid sm:grid-cols-2 gap-3">
              {course.syllabus.map((s, i) => (
                <div key={s} className="flex items-start gap-3 rounded-2xl bg-card border border-border p-4">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full hero-gradient text-xs font-bold text-primary-foreground">{i + 1}</span>
                  <span className="text-sm text-foreground/85">{s}</span>
                </div>
              ))}
            </div>
          </div>

          <aside>
            <div className="rounded-3xl bg-card border border-border p-6 soft-shadow">
              <h3 className="text-xl font-bold text-foreground">{t("courses.highlights")}</h3>
              <ul className="mt-4 space-y-3">
                {course.highlights.map((h) => (
                  <li key={h} className="flex items-start gap-2 text-sm text-foreground/85">
                    <CheckCircle2 className="h-4 w-4 mt-0.5 text-primary shrink-0" /> {h}
                  </li>
                ))}
              </ul>
              <button onClick={openAdmission} className="mt-6 w-full rounded-full hero-gradient px-6 py-3 text-sm font-semibold text-primary-foreground hover:scale-[1.02] transition-transform soft-shadow">
                {t("courses.applyNow")}
              </button>
              <a href={courseWhatsappUrl(course.title)} target="_blank" rel="noreferrer" className="mt-3 flex items-center justify-center gap-2 w-full rounded-full bg-whatsapp px-6 py-3 text-sm font-semibold text-white hover:opacity-90 transition">
                <MessageCircle className="h-4 w-4" /> {t("courses.applyWhatsapp")}
              </a>
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
