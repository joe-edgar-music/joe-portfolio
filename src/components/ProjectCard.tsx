export default function ProjectCard({ project }: { project: any }) {
  return (
    <div className="bg-zinc-800">
      <img 
        src={project.image} 
        alt={project.title}
        className="
          w-full
          h-full
          object-cover
          aspect-3/4
          md:aspect-16/10
        "
      />
      <h3>{project.title}</h3>
    </div>
  );
}