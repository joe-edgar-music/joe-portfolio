import ProjectCard from "./ProjectCard";
import ProjectCardAlt from "./ProjectCardAlt";
import { useEffect, useState } from "react";
import { getProjects } from "../lib/getProjects";

export default function ProjectList() {
  const [projects, setProjects] = useState<any[]>([]);
  

  useEffect(() => {
    getProjects().then(setProjects);
  }, []);

  return (
    <section className="flex flex-col gap-4 py-4">
      <h2 className="text-2xl tracking-wider">PORTFOLIO</h2>
      <div className="gap-4 md:columns-1 lg:columns-3">
        {projects.map((project, index) => (
          <ProjectCardAlt key={index} project={project} />
        ))}
      </div>
    </section>
  );
}