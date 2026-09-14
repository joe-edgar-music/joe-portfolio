import { Link } from "react-router";

export default function ProjectCardFull({ project, reverse }: { project: any; reverse?: boolean }) {
  return (
    <Link 
      to={`/portfolio/${project.slug}`} 
      className={`
        flex 
        p-4
        gap-8 
        flex-col
        ${reverse ? "md:flex-row-reverse justify-between" : "md:flex-row"}
        border-2
        border-transparent
        hover:border-[var(--border)]
        transition-colors
        group
      `}>
      <img
          src={project.image_url}
          alt={project.title}
          className="
          w-full md:w-2/5 aspect-[4/3] object-cover shrink-0
          "
      />
      <div className="w-full">
        <div className="flex flex-row justify-between w-full">
          <h3 className="text-left text-xl tracking-wide group-hover:underline">{project.title}</h3>
          <p className="text-xl">{project.date}</p>
        </div>
        <p className="text-left">{project.description}</p>
        <p className="text-left italic pt-4">
          {project.long_description ? (
            project.long_description
          ) : (
            <>
              {project.content?.slice(0, 400)}
              {project.content?.length > 400 && "..."}
            </>
          )}
        </p>
      </div>
    </Link>
  )
}