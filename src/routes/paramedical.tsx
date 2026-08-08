import { Outlet, createFileRoute, useRouterState } from "@tanstack/react-router";
import { CourseList } from "@/components/site/CourseList";
import { getCoursesByCategory } from "@/data/courses";
import { useT } from "@/lib/i18n";

export const Route = createFileRoute("/paramedical")({
  head: () => ({
    meta: [
      { title: "Peramedical course's — SK Institute" },
      { name: "description", content: "Paramedical courses at SK Institute — DMLT, CMLT, CMS & ED, X-Ray, ECG, OT and Dialysis Technician, Medical Lab Assistant and General Duty Assistant with clinical training." },
      { property: "og:title", content: "Peramedical course's — SK Institute" },
    ],
  }),
  component: ParamedicalRouteComponent,
});

function ParamedicalRouteComponent() {
  const { t } = useT();
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  if (pathname !== "/paramedical") {
    return <Outlet />;
  }

  return (
    <CourseList
      title={t("categories.paramedical")}
      subtitle={t("courses.sectionLabel")}
      intro={t("categories.paramedicalIntro")}
      items={getCoursesByCategory("paramedical")}
    />
  );
}
