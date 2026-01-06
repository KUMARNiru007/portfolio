import React, { useState } from "react";
import {
  MapPin,
  Briefcase,
  Calendar,
  ExternalLink,
  ChevronDown,
} from "lucide-react";

// 🔁 Update these paths based on your Vite project structure
import { Card } from "../components/ui/card";
import { Button } from "../components/ui/button";

interface ExperienceItem {
  id: string;
  company: string;
  position: string;
  location: string;
  workType: string;
  startDate: string;
  endDate: string;
  description: string;
  viewMoreLink?: string;
  websiteLink?: string;
}

const experiences: ExperienceItem[] = [
  {
    id: "1",
    company: "MedYatra",
    position: "Software Engineer",
    location: "Remote",
    workType: "Part Time",
    startDate: "June 2025",
    endDate: "September 2025",
    description: `Led backend development as the founding engineer, delivering MedYatra's official website to production readiness. Designed and implemented REST endpoints, integrated Firebase for secure media storage, and optimized API response times, improving backend efficiency by 20%. Built and integrated APIs with the frontend, enabling seamless session flows and reducing navigation errors by 30%. Collaborated with designers and frontend engineers to debug and resolve 15+ UI/UX issues, ensuring consistent cross-device performance. Deployed and monitored weekly updates, resolved 10+ production bugs to reduce downtime and improve system stability.`,
    websiteLink: "https://www.medyatra.space",
  },
];

const ExperienceCard: React.FC<{ experience: ExperienceItem }> = ({
  experience,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const descriptionPreview =
    experience.description.split(".")[0] + ".";
  const isLongDescription = experience.description.length > 150;

  return (
    <Card className="p-6 border border-border hover:border-primary/50 transition-all duration-200 flex flex-col h-full bg-card">
      {/* Company and Position */}
      <div className="mb-4">
        <h3 className="text-xl font-semibold mb-1">
          {experience.company}
        </h3>
        <p className="text-muted-foreground text-sm">
          {experience.position}
        </p>
      </div>

      {/* Meta Information */}
      <div className="flex flex-wrap gap-2 mb-6">
        <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-xs font-medium">
          <MapPin className="w-3 h-3" />
          {experience.location}
        </span>

        <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-xs font-medium">
          <Briefcase className="w-3 h-3" />
          {experience.workType}
        </span>

        <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-xs font-medium">
          <Calendar className="w-3 h-3" />
          {experience.startDate} – {experience.endDate}
        </span>
      </div>

      {/* Description */}
      <div className="mb-2 grow">
        <p
          className={`text-sm text-muted-foreground transition-all duration-300 overflow-hidden ${
            isExpanded ? "max-h-full" : "line-clamp-3"
          }`}
        >
          {isExpanded ? experience.description : descriptionPreview}
        </p>
      </div>

      {isLongDescription && (
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setIsExpanded(!isExpanded)}
          className="flex items-center gap-2 text-secondary hover:text-primary/80 h-auto p-0 justify-start"
        >
          {isExpanded ? "View Less" : "View More"}
          <ChevronDown
            className={`w-4 h-4 transition-transform duration-300 ${
              isExpanded ? "rotate-180" : ""
            }`}
          />
        </Button>
      )}

      {/* Action */}
      {experience.websiteLink && (
        <div className="flex flex-col gap-2 pt-4 border-t border-border">
          <a
            href={experience.websiteLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors duration-200"
          >
            Visit Website
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      )}
    </Card>
  );
};

const Experience: React.FC = () => {
  return (
    <section className="w-full py-16 md:py-24 px-4 md:px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12 text-center">
          <h2 className="text-4xl md:text-5xl font-bold">
            Experience
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {experiences.map((experience) => (
            <ExperienceCard
              key={experience.id}
              experience={experience}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
