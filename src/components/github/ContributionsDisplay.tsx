import React from "react";
import Reveal from "../../components/Reveal";
import GitHubContributions from "./GitHubContributions";
import { Container } from "lucide-react";

interface ContributionsDisplayProps {
  username: string;
  variant?: "full" | "compact" | "minimal";
  className?: string;
}

const ContributionsDisplay: React.FC<ContributionsDisplayProps> = ({
  username,
  variant = "compact",
  className = "w-full",
}) => {
  // compact + minimal → compact calendar
  const isCompact = variant !== "full";

  return (
    <Reveal delay={0.1}>
      <div className="sm:px-12 px-0 mt-4">
        {/* Section Heading */}
        <h2 className="text-base font-[family-name:var(--font-instrument-serif)] sm:text-xl opacity-20 leading-relaxed -tracking-[0.01em] mb-4 px-4">
          GitHub Contributions{" "}
          <span className="opacity-20">●</span> @{username}
        </h2>

        {/* Calendar */}
        <div className="mb-4 sm:mb-6">
          <GitHubContributions
            username={username}
            compact={isCompact}
            className={className}
          />
        </div>
      </div>
    </Reveal>
  );
};

export default ContributionsDisplay;
