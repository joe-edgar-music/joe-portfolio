import ProjectCard from "./ProjectCard";
import joe1 from "../assets/joe1.jpg";
import joe2 from "../assets/joe2.jpg"
import joe3 from "../assets/joe3.jpg"
import ProjectCardAlt from "./ProjectCardAlt";

export default function ProjectList() {
  const projects = [
    { title: "Guitar playin'", image: joe1 },
    { title: "Loungin'", image: joe2 },
    { title: "Folkin'", image: joe3 }
  ];

  return (
    <section className="flex flex-col gap-4 py-4">
      <h2 className="text-2xl tracking-wider">RECENT PROJECTS</h2>
      <div className="columns-3 gap-4">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </section>
  );
}