import React from "react";
import Reveal from "../components/Reveal";
import { Marquee } from "../components/ui/marquee";

// react-icons (brand icons)
import {
  FaJs,
  FaJava,
  FaPython,
  FaReact,
  FaNodeJs,
  FaDocker,
  FaGitAlt,
  FaAws,
} from "react-icons/fa";
import {
  SiTypescript,
  SiMongodb,
  SiPostgresql,
  SiRedis,
  SiTailwindcss,
  SiExpress,
  SiGooglecloud,
} from "react-icons/si";

// lucide-react
import { Boxes, Cloud } from "lucide-react";
import SectionHeading from "./SectionHeading";
import Container from "./Container";
import { FaRegFloppyDisk } from "react-icons/fa6";

/* -------------------- Types -------------------- */

type Tech = {
  name: string;
  icon: React.ReactNode;
  color: string;
};

/* -------------------- Tech Stack (Brand Colors) -------------------- */

const techStack: Tech[] = [
  { name: "JavaScript", icon: <FaJs />, color: "text-yellow-400" },
  { name: "TypeScript", icon: <SiTypescript />, color: "text-blue-500" },
  { name: "Java", icon: <FaJava />, color: "text-red-500" },
  { name: "Python", icon: <FaPython />, color: "text-yellow-300" },

  { name: "React", icon: <FaReact />, color: "text-cyan-400" },
  { name: "Node.js", icon: <FaNodeJs />, color: "text-green-500" },
  { name: "Express", icon: <SiExpress />, color: "text-gray-400" },
  { name: "Tailwind CSS", icon: <SiTailwindcss />, color: "text-sky-400" },

  { name: "MongoDB", icon: <SiMongodb />, color: "text-green-600" },
  { name: "PostgreSQL", icon: <SiPostgresql />, color: "text-blue-400" },
  { name: "Redis", icon: <FaRegFloppyDisk />, color: "text-red-500" },

  { name: "Git", icon: <FaGitAlt />, color: "text-orange-500" },
  { name: "Docker", icon: <FaDocker />, color: "text-blue-400" },
  { name: "AWS", icon: <FaAws />, color: "text-orange-400" },
  { name: "Google Cloud", icon: <SiGooglecloud />, color: "text-blue-500" },

  { name: "shadcn/ui", icon: <SchadCNui />, color: "text-foreground" },
  { name: "Cloud Tools", icon: <Cloud />, color: "text-sky-500" },
];

/* -------------------- Tech Icon -------------------- */

const TechIcon: React.FC<{ tech: Tech }> = ({ tech }) => {
  return (
    <div className="group flex min-w-[90px] flex-col items-center gap-2 p-3 transition hover:scale-105">
      <div
        className={`text-2xl transition-transform duration-300 group-hover:scale-110 ${tech.color}`}
      >
        {tech.icon}
      </div>
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
      <Container className="mt-8">
      {/* Section Heading */}
        <div className="text-base sm:text-xl leading-relaxed -tracking-[0.01em] mb-4 px-4">
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
