import { Outlet, createFileRoute, useRouterState } from "@tanstack/react-router";
import { CourseList } from "@/components/site/CourseList";
import { getCoursesByCategory } from "@/data/courses";
import { useT } from "@/lib/i18n";

export const Route = createFileRoute("/courses")({
  head: () => ({
    meta: [
      { title: "Computer course's — SK Institute" },
      { name: "description", content: "Browse all computer courses at SK Institute — BCA, DCA, CCC, Python, Tally Prime, AutoCAD, Web Development, Digital Marketing, Advanced Excel and more." },
      { property: "og:title", content: "Computer course's — SK Institute" },
    ],
  }),
  component: CoursesRouteComponent,
});

function CoursesRouteComponent() {
  const { t } = useT();
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  if (pathname !== "/courses") {
    return <Outlet />;
  }

  return (
    <CourseList
      title={t("categories.computer")}
      subtitle={t("courses.sectionLabel")}
      intro={t("categories.computerIntro")}
      items={getCoursesByCategory("computer")}
    />
  );
}
