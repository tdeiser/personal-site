// src/components/Projects/ProjectCard.tsx

import { Project } from "./projects";

export default function ProjectCard({ title, description, link }: Project) {
  return (
    <div className="min-w-[250px] bg-neutral-900 border border-neutral-800 rounded-xl p-4 hover:border-neutral-700 transition">
      <h4 className="text-neutral-100 font-semibold mb-2">{title}</h4>
      <p className="text-neutral-400 text-sm mb-3">{description}</p>
      <a
        href={link}
        className="text-neutral-300 text-sm hover:text-white transition"
      >
        View repo →
      </a>
    </div>
  );
}
