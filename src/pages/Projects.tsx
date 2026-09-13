import { useEffect, useState } from "react";
import { getProjects } from "../lib/getProjects";
import ProjectCardFull from "../components/ProjectCardFull";

export default function Projects() {
  const [projects, setProjects] = useState<any[]>([]);
  
  useEffect(() => {
    getProjects().then((projects) => {
      setProjects(projects.sort((a, b) => b.order - a.order));
    });
  }, []);

  return (
    <div className="flex flex-col gap-4">
      {projects.map((project, index) => (
        <ProjectCardFull key={index} project={project} reverse={index % 2 === 0} />
      ))}
    </div>
  )
}