import { Outlet, createFileRoute, useRouterState } from "@tanstack/react-router";
import { CourseList } from "@/components/site/CourseList";
import { getCoursesByCategory } from "@/data/courses";
import { useT } from "@/lib/i18n";

export const Route = createFileRoute("/academy-programs")({
  head: () => ({
    meta: [
      { title: "Academy Programs — SK Institute" },
      { name: "description", content: "Academy programs at SK Institute — Class 6-8 Foundation, Class 9-10, Class 11-12 Commerce/Science/Arts, Spoken English, Personality Development and Competitive Exam Preparation." },
      { property: "og:title", content: "Academy Programs — SK Institute" },
    ],
  }),
  component: AcademyProgramsRouteComponent,
});

function AcademyProgramsRouteComponent() {
  const { t } = useT();
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  if (pathname !== "/academy-programs") {
    return <Outlet />;
  }

  return (
    <CourseList
      title={t("categories.academy")}
      subtitle={t("courses.sectionLabel")}
      intro={t("categories.academyIntro")}
      items={getCoursesByCategory("academy")}
    />
  );
}
