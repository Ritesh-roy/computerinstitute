import { createFileRoute, notFound } from "@tanstack/react-router";
import { getCourseById } from "@/data/courses";
import { CourseDetail } from "@/components/site/CourseDetail";

export const Route = createFileRoute("/courses/$slug")({
  loader: ({ params }) => {
    const course = getCourseById(params.slug);
    if (!course || course.category !== "computer") throw notFound();
    return { course };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.course.title} Course — SK Institute` },
          { name: "description", content: `${loaderData.course.title} (${loaderData.course.duration}) at SK Institute. ${loaderData.course.description.slice(0, 120)}` },
          { property: "og:title", content: `${loaderData.course.title} — SK Institute` },
          { property: "og:description", content: loaderData.course.description.slice(0, 150) },
          { property: "og:image", content: loaderData.course.image },
          { property: "og:type", content: "article" },
        ]
      : [],
    links: loaderData
      ? [{ rel: "canonical", href: `https://sk-institute-quest.lovable.app/courses/${loaderData.course.id}` }]
      : [],
    scripts: loaderData
      ? [{
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Course",
            name: loaderData.course.title,
            description: loaderData.course.description,
            provider: { "@type": "Organization", name: "SK Institute", sameAs: "https://sk-institute-quest.lovable.app" },
            timeRequired: loaderData.course.duration,
          }),
        }]
      : [],
  }),
  notFoundComponent: () => <div className="py-20 text-center"><h1 className="text-3xl font-bold">Course not found</h1></div>,
  errorComponent: ({ error }) => <div className="py-20 text-center text-destructive">{error.message}</div>,
  component: () => {
    const { course } = Route.useLoaderData();
    return <CourseDetail course={course} />;
  },
});
