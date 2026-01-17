import React, { useState } from "react";
import { type Project } from "../../types/projects.ts";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "../../components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "../../components/ui/dialog";
import { Tooltip, TooltipContent, TooltipTrigger } from "../../components/ui/tooltip";

import {
  FaGithub,
  FaGlobe,
} from "react-icons/fa6";
import {
  Play,
  ArrowRight,
} from "lucide-react";

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const [open, setOpen] = useState(false);

  const isWorking = project.isWorking;

  return (
    <Card className="group h-full overflow-hidden border-gray-100 p-0 dark:border-gray-800">
      {/* ---------- Media ---------- */}
      <CardHeader className="p-0">
        <div className="relative aspect-video overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="h-full w-full object-cover"
          />

          {project.video && (
            <Dialog open={open} onOpenChange={setOpen}>
              <DialogTrigger asChild>
                <button className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 transition group-hover:opacity-100">
                  <span className="flex size-16 items-center justify-center rounded-full bg-white/20 backdrop-blur">
                    <Play className="size-8 text-white" />
                  </span>
                </button>
              </DialogTrigger>

              <DialogContent className="max-w-4xl p-0 border-0">
                <video
                  src={project.video}
                  autoPlay
                  loop
                  controls
                  className="aspect-video w-full rounded-lg object-cover"
                />
                <DialogTitle className="sr-only">
                  {project.title}
                </DialogTitle>
              </DialogContent>
            </Dialog>
          )}
        </div>
      </CardHeader>

      {/* ---------- Content ---------- */}
      <CardContent className="px-6 space-y-4">
        {/* Title + Links */}
        <div className="flex justify-between items-center gap-4">
          <a
            href={project.projectDetailsPageSlug}
            className="text-xl font-semibold hover:text-primary"
          >
            {project.title}
          </a>

          <div className="flex gap-2">
            <IconLink href={project.link} label="View Website">
              <FaGlobe />
            </IconLink>

            {project.github && (
              <IconLink href={project.github} label="View GitHub">
                <FaGithub />
              </IconLink>
            )}
          </div>
        </div>

        <p className="text-secondary line-clamp-3">
          {project.description}
        </p>

        {/* Technologies */}
        <div>
          <h4 className="text-sm font-medium text-secondary mb-2">
            Technologies
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <Tooltip key={tech.name}>
                <TooltipTrigger>
                  <div
                     className={`size-6 transition hover:scale-125 ${
                     tech.color ?? "text-secondary"
                     }`}
                  >
                    {tech.icon}
                  </div>
                </TooltipTrigger>
                <TooltipContent>{tech.name}</TooltipContent>
              </Tooltip>
            ))}
          </div>
        </div>
      </CardContent>

      {/* ---------- Footer ---------- */}
      {project.details && (
        <CardFooter className="flex justify-between p-6 pt-0">
          <div
            className={`flex items-center gap-2 px-2 py-1 text-xs rounded-md ${
              isWorking
                ? "border border-green-300 bg-green-500/10"
                : "border border-red-300 bg-red-500/10"
            }`}
          >
            <span
              className={`size-2 rounded-full animate-pulse ${
                isWorking ? "bg-green-500" : "bg-red-500"
              }`}
            />
            {isWorking ? "All Systems Operational" : "Building"}
          </div>

          <a
            href={project.github}
            className="flex items-center gap-2 text-sm text-secondary hover:text-primary hover:underline"
          >
            View Details <ArrowRight className="size-4" />
          </a>
        </CardFooter>
      )}
    </Card>
  );
};

export default ProjectCard;

/* ---------- Reusable Icon Link ---------- */

const IconLink = ({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) => (
  <Tooltip>
    <TooltipTrigger>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={label}
        className="flex size-6 items-center justify-center text-secondary hover:text-primary transition"
      >
        {children}
      </a>
    </TooltipTrigger>
    <TooltipContent>{label}</TooltipContent>
  </Tooltip>
);
