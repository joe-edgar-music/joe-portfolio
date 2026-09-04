import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getProjects } from "../lib/getProjects";
import type { Project as ProjectType } from "../types/project";

export default function Project() {
  const { slug } = useParams<{ slug: string }>();
  const [project, setProject] = useState<ProjectType | null>(null);

  useEffect(() => {
    getProjects().then((projects) => {
      const found = projects.find((project) => project.slug === slug);
      setProject(found ?? null);
    });
  }, [slug]);

  if (!project) {
    return <p>Project not found.</p>;
  }

  return (
    <main>
      <img
        src={project.image_url}
        alt={project.title}
        className="
          w-full
          h-full
          object-cover
          object-top-left
          aspect-3/4
          md:aspect-16/10
        "
      />

      <h1 className="text-4xl font-bold">
        {project.title}
      </h1>

      <div>
        {project.content}
      </div>
    </main>
  );
}