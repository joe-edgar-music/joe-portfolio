export default function ProjectCard({ project }: { project: any }) {
  return (
    <div className="bg-zinc-800 rounded-lg overflow-hidden">
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
      <div className="p-4">
        <h3>{project.title}</h3>
      </div>
    </div>
  );
}