import React from "react";
import { type Project } from "../../types/projects.ts";
import ProjectCard from "./ProjectCard.tsx";

interface ProjectListProps {
  projects: Project[];
  className?: string;
}

const ProjectList: React.FC<ProjectListProps> = ({
  projects,
  className = "",
}) => {
  if (!projects.length) {
    return (
      <p className="py-8 text-center text-muted-foreground">
        No projects found.
      </p>
    );
  }

  return (
    <div className={`grid grid-cols-1 gap-4 md:grid-cols-2 ${className}`}>
      {projects.map((project) => (
        <ProjectCard key={project.title} project={project} />
      ))}
    </div>
  );
};

export default ProjectList;
