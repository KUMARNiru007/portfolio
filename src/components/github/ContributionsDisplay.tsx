import React from "react";
import Reveal from "../../components/Reveal";
import GitHubContributions from "./GitHubContributions";
import SectionHeading from "../SectionHeading";
import Container from "../Container";

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
      <Container className="mt-8">
      {/* Section Heading */}
        <div className="text-base sm:text-xl leading-relaxed -tracking-[0.01em] mb-4 px-4">
        <SectionHeading subHeading="Featured" heading="GitHub" />
        <h2 className="sm:text-xl opacity-30 mt-2 ">
          GitHub Contributions{" "}
          <span className="opacity-20">●</span> @{username}
          </h2>
        </div>

        {/* Calendar */}
        <div className="mb-4 sm:mb-6">
          <GitHubContributions
            username={username}
            compact={isCompact}
            className={className}
          />
        </div>
      </Container>
    </Reveal>
  );
};

export default ContributionsDisplay;
