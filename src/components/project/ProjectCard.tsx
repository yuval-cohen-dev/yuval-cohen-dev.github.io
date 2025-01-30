import { ProjectItem } from "@/types/types";
import Link from "next/link";

export default function ProjectCard({ project }: { project: ProjectItem }) {
  const { title, description, link } = project;
  return (
    <div className="bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-2xl transition-all transform hover:scale-105">
      <h3 className="text-xl font-semibold text-white">{title}</h3>
      <p className="text-gray-400 mt-2">{description}</p>
      <div className="mt-4 flex justify-between items-center">
        <Link href={link} className="text-blue-500 hover:underline">
          GitHub
        </Link>
        {project.demoLink && (
          <Link href={project.demoLink} target="_blank" className="text-blue-500 hover:underline">
            Live Demo
          </Link>
        )}
      </div>
    </div>
  );
}
