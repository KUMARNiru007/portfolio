import React from "react";
import Reveal from "../components/Reveal";
import { Marquee } from "../components/ui/marquee";

import SectionHeading from "./SectionHeading";
import Container from "./Container";


type Tech = {
  name: string;
  category: string;   
  icon: string;      
  color: string;
};


const techStack: Tech[] = [
  // Languages
  { name: "JavaScript", category: "language", icon: "/tech-icons/javascript.svg", color: "bg-gray-500" },
  { name: "TypeScript", category: "language", icon: "/tech-icons/typescript.svg", color: "bg-gray-500" },
  { name: "Java", category: "language", icon: "/tech-icons/java.svg", color: "bg-gray-500" },
  { name: "Python", category: "language", icon: "/tech-icons/python.svg", color: "bg-gray-500" },
  { name: "SQL", category: "language", icon: "/tech-icons/sql.svg", color: "bg-gray-500" },

  // Frameworks & Libraries
  { name: "React.js", category: "framework", icon: "/tech-icons/react.svg", color: "bg-gray-500" },
  // { name: "Next.js", category: "framework", icon: "/tech-icons/nextjs.svg", color: "bg-gray-500" },
  { name: "Express.js", category: "framework", icon: "/tech-icons/express.svg", color: "bg-gray-500" },
  { name: "Node.js", category: "framework", icon: "/tech-icons/nodejs.svg", color: "bg-gray-500" },
  { name: "FastAPI", category: "framework", icon: "/tech-icons/fastapi.svg", color: "bg-gray-500" },
  { name: "Tailwind CSS", category: "framework", icon: "/tech-icons/tailwind.svg", color: "bg-gray-500" },

  // Databases & Tools
  { name: "MongoDB", category: "database", icon: "/tech-icons/mongodb.svg", color: "bg-gray-500" },
  { name: "PostgreSQL", category: "database", icon: "/tech-icons/postgresql.svg", color: "bg-gray-500" },
  { name: "Redis", category: "database", icon: "/tech-icons/redis.svg", color: "bg-gray-500" },

  // Developer Tools
  { name: "Git", category: "tool", icon: "/tech-icons/Git.svg", color: "bg-gray-500" },
  { name: "Docker", category: "tool", icon: "/tech-icons/docker.svg", color: "bg-gray-500" },
  { name: "Azure", category: "tool", icon: "/tech-icons/Azure.svg", color: "bg-gray-500" },
  { name: "AWS", category: "tool", icon: "/tech-icons/AWS.svg", color: "bg-gray-500" },
  { name: "Google Cloud", category: "tool", icon: "/tech-icons/gcp.svg", color: "bg-gray-500" },
  // { name: "Jira", category: "tool", icon: "/tech-icons/Jira.svg", color: "bg-gray-500" },
  // { name: "Nix OS", category: "tool", icon: "/tech-icons/NixOS.svg", color: "bg-gray-500" },
];



const TechIcon: React.FC<{ tech: Tech }> = ({ tech }) => {
  return (
    <div className="group flex min-w-[90px] flex-col items-center gap-2 p-3 transition hover:scale-105">
      {/* Icon */}
      <div className="text-2xl transition-transform duration-300 group-hover:scale-110">
        <img
          src={tech.icon}
          alt={tech.name}
          className="h-9 w-9 object-contain  opacity-110 group-hover:opacity-100"
        />
      </div>

      {/* Name */}
      <span className="text-xs text-center text-muted-foreground group-hover:text-foreground">
        {tech.name}
      </span>
    </div>
  );
};

/* -------------------- Component -------------------- */

const TechStackMarquee: React.FC = () => {
  return (
    <Reveal delay={0.1}>
      <Container id="skills" className="mt-8 scroll-mt-20">
        {/* Section Heading */}
        <div className="mb-4 px-4 text-base sm:text-xl leading-relaxed -tracking-[0.01em]">
          <SectionHeading subHeading="Known" heading="Tech Stack" />
          <p className="text-sm sm:text-base text-muted-foreground">
            Technologies I work with to build products that solve real problems
          </p>
        </div>

        {/* Marquee */}
        <div className="relative">
          <Marquee pauseOnHover>
            {techStack.map((tech) => (
              <TechIcon key={tech.name} tech={tech} />
            ))}
          </Marquee>

          {/* Fade edges */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-background to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-background to-transparent" />
        </div>
      </Container>
    </Reveal>
  );
};

export default TechStackMarquee;
