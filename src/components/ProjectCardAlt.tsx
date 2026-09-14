import { Link } from "react-router";

export default function ProjectCardAlt({ project }: { project: any }) {
  return (
    <Link
      to={`/portfolio/${project.slug}`}
      className="
        relative
        group
        overflow-hidden
        aspect-4/3
        bg-zinc-800
        block
      "
    >
      <img
        src={project.image_url}
        alt={project.title}
        className="
          w-full
          h-full
          object-cover
          transition-all
          duration-300
          group-hover:blur-sm
          group-hover:scale-105
        "
      />

      <div
        className="
          absolute
          inset-0
          flex
          items-center
          justify-center
          bg-black/30
          opacity-0
          group-hover:opacity-100
          transition-opacity
          duration-300
        "
      >
        <div className="flex flex-col">
          <h3 className="text-white text-2xl font-bold" style={{color: "#CA9773", padding: "0px 0px"}}>
            {project.title}
          </h3>
          {project.description && (
            <p style={{color: "#FAFAFA", padding: "0px 10px"}} className="mt-2 text-center">
              {project.description}
            </p>
          )}
        </div>
      </div>
    </Link>
  );
}