import { Link } from "@tanstack/react-router";
import { ArrowRight, GraduationCap, Stethoscope, Monitor } from "lucide-react";
import type { Course } from "@/data/courses";
import { getFallbackImage } from "@/data/courseImages";
import { useT } from "@/lib/i18n";

const iconFor = (c: Course["category"]) =>
  c === "paramedical" ? Stethoscope : c === "academy" ? GraduationCap : Monitor;

const routeFor = (c: Course["category"]) =>
  c === "paramedical"
    ? "/paramedical/$slug"
    : c === "academy"
      ? "/academy-programs/$slug"
      : "/courses/$slug";

export function CourseCard({ course }: { course: Course }) {
  const { t } = useT();
  const Icon = iconFor(course.category);

  return (
    <Link
      to={routeFor(course.category)}
      params={{ slug: course.id }}
      preload="intent"
      className="group block"
    >
      <article className="relative h-full overflow-hidden rounded-2xl border border-border bg-card/90 p-4 text-left backdrop-blur-sm transition-all duration-500 hover:-translate-y-1.5 hover:border-primary/45 hover:shadow-[0_20px_60px_-30px_color-mix(in_oklab,var(--primary)_40%,transparent)] sm:p-5">
        <div className="relative overflow-hidden rounded-xl border border-border/60 bg-secondary/35 aspect-[16/10] img-hover-wrap">
          <img
            src={course.image}
            alt={course.title}
            loading="lazy"
            width={960}
            height={640}
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
            onError={(e) => {
              const img = e.currentTarget;
              const fb = getFallbackImage(course.id, course.category);
              if (img.src !== fb) img.src = fb;
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
          <div className="absolute left-3 top-3 flex h-11 w-11 items-center justify-center rounded-xl bg-card/88 text-primary shadow-sm backdrop-blur transition-all group-hover:hero-gradient group-hover:text-primary-foreground">
            <Icon className="h-5 w-5" />
          </div>
          <span className="absolute right-3 top-3 rounded-full bg-card/88 px-2.5 py-1 text-[11px] font-semibold text-foreground shadow-sm backdrop-blur">{course.duration}</span>
          <div className="absolute inset-x-0 bottom-0 p-3">
            <div className="text-sm font-bold text-white sm:text-base">{course.title}</div>
          </div>
        </div>

        <div className="relative mt-4 flex flex-col gap-3">
          <p className="line-clamp-2 text-sm text-muted-foreground">{course.description}</p>
          <div className="flex flex-wrap gap-2">
            {course.syllabus.slice(0, 2).map((s) => (
              <span key={s} className="rounded-full bg-primary/10 px-3 py-1 text-[11px] font-semibold text-primary">
                {s}
              </span>
            ))}
          </div>
          <div className="mt-1 flex items-center justify-between gap-3">
            <span className="text-xs text-muted-foreground">{t("courses.eligibility")}: {course.eligibility}</span>
            <span className="inline-flex items-center gap-1 text-sm font-semibold text-primary transition-all group-hover:gap-2">
              {t("courses.viewDetails")} <ArrowRight className="h-3.5 w-3.5" />
            </span>
          </div>
        </div>
      </article>
    </Link>
  );
}
