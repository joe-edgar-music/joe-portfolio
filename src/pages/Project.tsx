import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getProjects } from "../lib/getProjects";
import type { Project as ProjectType } from "../types/project";
import ReactMarkdown from "react-markdown";

import "../pages/markdown.css";

export default function Project() {
  const { slug } = useParams<{ slug: string }>();
  const [project, setProject] = useState<ProjectType | null>(null);

  useEffect(() => {
    getProjects().then((projects) => {
      const found = projects.find((project) => project.slug === slug);
      setProject(found ?? null);
    });
  }, [slug]);

  if (!project) {
    return <p>Project not found.</p>;
  }

  return (
    <div className="flex flex-col gap-4 py-4 px-4 align-center items-center">
      <div>
        <h1 className="text-4xl font-bold">
          {project.title}
        </h1>

        <p>
          {project.description}
        </p>
      </div>

      <img
        src={project.image_url}
        alt={project.title}
        className="
          w-3/4
          h-auto
          object-cover
        "
      />

      {project.embed_url && (
        <div className="rounded-[16px] overflow-hidden w-3/4">
          <iframe 
            className="rounded-[12px] overflow-hidden"
            src={project.embed_url} 
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
      )}


      <div className="prose">
        <ReactMarkdown>
          {project.content}
        </ReactMarkdown>
      </div>
    </div>
  );
}