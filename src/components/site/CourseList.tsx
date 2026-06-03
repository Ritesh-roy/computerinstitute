import { useState, useMemo } from "react";
import { Search } from "lucide-react";
import { CourseCard } from "./CourseCard";
import type { Course } from "@/data/courses";
import { useT } from "@/lib/i18n";

export function CourseList({
  title,
  subtitle,
  intro,
  items,
}: {
  title: string;
  subtitle: string;
  intro: string;
  items: Course[];
}) {
  const { t } = useT();
  const [q, setQ] = useState("");

  const filtered = useMemo(() => {
    const s = q.trim().toLowerCase();
    if (!s) return items;
    return items.filter(
      (c) =>
        c.title.toLowerCase().includes(s) ||
        c.description.toLowerCase().includes(s),
    );
  }, [q, items]);

  return (
    <section className="py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-primary mb-3">{subtitle}</div>
          <h1 className="text-3xl md:text-5xl font-bold text-foreground">{title}</h1>
          <p className="mt-4 text-muted-foreground">{intro}</p>
        </div>

        <div className="mx-auto mb-10 max-w-md">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder={t("courses.search")}
              className="w-full rounded-full border border-border bg-card pl-10 pr-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary"
            />
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((c) => (
            <CourseCard key={c.id} course={c} />
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="text-center text-muted-foreground py-12">No courses found.</p>
        )}
      </div>
    </section>
  );
}
