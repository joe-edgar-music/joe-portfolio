import { Link } from "react-router";

export default function ProjectCardFull({ project, reverse }: { project: any; reverse?: boolean }) {
  return (
    <Link 
      to={`/portfolio/${project.slug}`} 
      className={`
        flex 
        p-4
        gap-4 
        flex-col
        ${reverse ? "md:flex-row-reverse justify-between" : "md:flex-row"}
        border-2
        border-transparent
        hover:border-zinc-800
        transition-colors
      `}>
      <img
          src={project.image_url}
          alt={project.title}
          className="
          w-full md:w-2/5 aspect-[4/3] object-cover shrink-0
          "
      />
      <div>
        <h3 className="text-left text-xl tracking-wide">{project.title}</h3>
        <p className="text-left">{project.description}</p>
        <p className="text-left">
          {project.content?.slice(0, 400)}
          {project.content?.length > 400 && "..."}
        </p>
      </div>
    </Link>
  )
}