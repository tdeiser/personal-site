// src/components/Projects/Projects.tsx

import ProjectCard from "./ProjectCard";
import { projects } from "./projects";

export default function Projects() {
  return (
    <section id="projects" className="mb-16">
      <h3 className="text-lg font-semibold text-neutral-100 mb-4">
        Projects
      </h3>

      <div className="overflow-x-auto scrollbar-hide">
        <div className="flex gap-4">
          {projects.map((project) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              description={project.description}
              link={project.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
