import { ProjectItem } from "@/types/types";

import ProjectCard from "./ProjectCard";
import Motion from "@Motion";

export default function ProjectList({ projects }: { projects: ProjectItem[] }) {
  return (
    <div id="projects">
      <Motion
        type="div"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-extrabold mb-6 text-center text-white">
          Projects
        </h2>
      </Motion>
      <Motion
        type="section"
        className="py-20 px-8"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div key={`project_${index}`} className="">
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </Motion>
    </div>
  );
}
