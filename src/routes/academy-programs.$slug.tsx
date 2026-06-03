import { createFileRoute, notFound } from "@tanstack/react-router";
import { getCourseById } from "@/data/courses";
import { CourseDetail } from "@/components/site/CourseDetail";

export const Route = createFileRoute("/academy-programs/$slug")({
  loader: ({ params }) => {
    const course = getCourseById(params.slug);
    if (!course || course.category !== "academy") throw notFound();
    return { course };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.course.title} — SK Institute` },
          { name: "description", content: `${loaderData.course.title} (${loaderData.course.duration}) at SK Institute. ${loaderData.course.description.slice(0, 120)}` },
          { property: "og:title", content: `${loaderData.course.title} — SK Institute` },
          { property: "og:description", content: loaderData.course.description.slice(0, 150) },
          { property: "og:image", content: loaderData.course.image },
        ]
      : [],
  }),
  notFoundComponent: () => <div className="py-20 text-center"><h1 className="text-3xl font-bold">Program not found</h1></div>,
  errorComponent: ({ error }) => <div className="py-20 text-center text-destructive">{error.message}</div>,
  component: () => {
    const { course } = Route.useLoaderData();
    return <CourseDetail course={course} />;
  },
});
