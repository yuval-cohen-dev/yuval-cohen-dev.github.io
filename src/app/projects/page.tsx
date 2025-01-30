import ProjectList from "@/components/project/ProjectList";
import { PROJECTS } from "@constants";

export default function Page() {
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gray-100 text-gray-800">
      <ProjectList projects={PROJECTS}/>
    </div>
  );
}
