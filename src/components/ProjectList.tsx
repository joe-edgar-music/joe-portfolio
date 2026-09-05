import ProjectCard from "./ProjectCard";
import ProjectCardAlt from "./ProjectCardAlt";
import { useEffect, useState } from "react";
import { getProjects } from "../lib/getProjects";
import { Link } from "react-router";

export default function ProjectList({featured}: {featured?: boolean}) {
  const [projects, setProjects] = useState<any[]>([]);
  

  useEffect(() => {
    getProjects().then(setProjects);
  }, []);

  return (
    <section className="flex flex-col gap-4 py-4">
      <div>
        <h2 className="text-2xl tracking-wider">PORTFOLIO</h2>
        {featured && (
          <Link to="/portfolio" className="hover:underline">
            See All
          </Link>
        )}
      </div>
      <div className="gap-4 columns-1 lg:columns-3">
        {projects.map((project, index) => (
          ((project.featured || !featured) &&
            <ProjectCardAlt key={index} project={project} />
          )
        ))}
      </div>
    </section>
  );
}