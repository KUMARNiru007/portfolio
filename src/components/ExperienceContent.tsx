import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Tooltip, TooltipTrigger, TooltipContent } from "../components/ui/tooltip";
import Reveal from "../components/Reveal";
import image from "../assets/medyatra.jpg"
import SectionHeading from "./SectionHeading";
import Container from "./Container";

/* -------------------- Types -------------------- */

interface ExperienceItem {
  company: string;
  position: string;
  duration: string;
  location: string;
  achievements?: string[];
  href?: string;
  logoUrl?: string;
}

/* -------------------- Component -------------------- */

const ExperienceContent: React.FC = () => {
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});

  const experiences: ExperienceItem[] = [
    {
      company: "MedYatra",
      position: "Backend Developer (Intern → Part-time)",
      duration: "June 2025 – Sept 2025",
      location: "Remote",
      achievements: [
        "Led backend development as the founding engineer, delivering MedYatra’s official website to production readiness.",
        "Designed and implemented REST endpoints, integrated Firebase for secure media storage, and optimized API response times, improving backend efficiency by 20%.",
        "Built and integrated APIs with the frontend, enabling seamless session flows and reducing navigation errors by 30%.",
        "Collaborated with designers and frontend engineers to debug and resolve 15+ UI/UX issues, ensuring consistent cross-device performance.",
        "Deployed and monitored weekly updates, resolving 10+ production bugs to reduce downtime and improve system stability.",
      ],
      href: "https://www.medyatra.space",
      logoUrl: image, 
    },
  ];

  const toggleExpanded = (company: string) => {
    setExpanded((prev) => ({
      ...prev,
      [company]: !prev[company],
    }));
  };

  return (
    <Reveal delay={0.1}>
      <Container className="mt-8">
      {/* Section Heading */}
        <div className="text-base sm:text-xl leading-relaxed -tracking-[0.01em] mb-4 px-4">
        <SectionHeading subHeading="Work" heading="Experiance" />

        {/* Experience List */}
        <div className="px-4 space-y-4 dark:text-white/70 text-black/70 pb-4">
          {experiences.map((exp) => {
            const isExpanded = expanded[exp.company];

            return (
              <div key={exp.company} className="rounded-lg p-4 sm:p-5">
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4">
                  <div className="flex items-center gap-3 sm:gap-4 flex-1 min-w-0">
                    {/* Logo */}
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-neutral-200 dark:bg-neutral-800 flex items-center justify-center overflow-hidden shrink-0">
                      {exp.logoUrl ? (
                        <img
                          src={exp.logoUrl}
                          alt={exp.company}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <span className="text-sm sm:text-lg font-medium dark:text-white text-black">
                          {exp.company.charAt(0)}
                        </span>
                      )}
                    </div>

                    {/* Company + Role */}
                    <div className="flex-1 min-w-0">
                      <h3 className="font-medium dark:text-white text-black text-sm sm:text-lg">
                        {exp.href ? (
                          <a
                            href={exp.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-[#006FEE] transition-colors"
                          >
                            {exp.company}
                          </a>
                        ) : (
                          exp.company
                        )}
                      </h3>
                      <p className="text-[10px] sm:text-sm opacity-70">
                        {exp.position}
                      </p>
                    </div>
                  </div>

                  {/* Duration + Location + Toggle */}
                  <div className="flex items-center gap-3 sm:gap-4">
                    <p className="text-[10px] sm:text-sm opacity-50 shrink-0 text-right">
                      {exp.duration}
                      <br />
                      {exp.location}
                    </p>

                    {exp.achievements && (
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <button
                            onClick={() => toggleExpanded(exp.company)}
                            className="p-1.5 rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
                            aria-expanded={isExpanded}
                          >
                            <ChevronDown
                              className={`w-4 h-4 transition-transform ${
                                isExpanded ? "rotate-180" : ""
                              }`}
                            />
                          </button>
                        </TooltipTrigger>
                        <TooltipContent>
                          {isExpanded ? "Collapse details" : "Expand details"}
                        </TooltipContent>
                      </Tooltip>
                    )}
                  </div>
                </div>

                {/* Achievements */}
                {exp.achievements && (
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      isExpanded
                        ? "max-h-[1000px] opacity-100 mt-4"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="pt-4 border-t border-neutral-200 dark:border-neutral-800">
                      <ul className="space-y-2.5 text-xs sm:text-sm opacity-80">
                        {exp.achievements.map((item, idx) => (
                          <li key={idx} className="flex gap-2.5">
                            <span className="text-[#006FEE] mt-1.5">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
        </div>
        </Container >
    </Reveal>
  );
};

export default ExperienceContent;
