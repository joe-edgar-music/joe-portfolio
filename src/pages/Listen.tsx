import { useEffect, useState } from "react";
import { getProjects } from "../lib/getProjects";
import { Link } from "react-router";

export default function Listen() {
  const [projects, setProjects] = useState<any[]>([]);
  
  useEffect(() => {
    getProjects().then((projects) => {
      setProjects(projects.sort((a, b) => b.order - a.order));
    });
  }, []);

  return (
    <div className="flex flex-col gap-4">
      {projects.map((project, index) => (
        project.spotify_embed_url && (
          <div key={index}>
            <Link to={`/portfolio/${project.slug}`} className="group">
              <h2 className="text-2xl group-hover:underline">{project.title}</h2>
              <p>{project.description}</p>
            </Link>

            <div className="rounded-[16px] overflow-hidden w-full">
              <iframe 
                className="rounded-[12px] overflow-hidden"
                src={project.spotify_embed_url} 
                width="100%" 
                height="352" 
                frameBorder="0" 
                allow="autoplay; 
                clipboard-write; 
                encrypted-media; 
                fullscreen; 
                picture-in-picture" 
                loading="lazy">
              </iframe>
            </div>
          </div>
        )
      ))}
    </div>
  )
}