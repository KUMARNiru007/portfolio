import React from "react";

import BannerSection from "./Banner";
import ContentParagraph from "./ContentParagraph";
import ContentSection from "./ContentSection";
import ProfileHeader from "./ProfileHeader";
import Reveal from "./Reveal";
import SectionBorder from "./SectionBorder";

const Hero: React.FC = () => {
  return (
    <div>
        {/* Main Content */}
        <div className="mx-auto sm:w-[calc(100%-120px)] w-full max-w-4xl sm:px-0">
          {/* Banner */}
          <Reveal delay={0.1}>
            <BannerSection />
          </Reveal>

          {/* Profile Header */}
          <Reveal delay={0.2}>
            <ProfileHeader />
          </Reveal>

          {/* Content */}
          <div className="prose dark:prose-invert max-w-none">
            <div className="text-base">
              <Reveal delay={0.05}>
                <SectionBorder className="mt-6" />
              </Reveal>

              {/* About */}
              <Reveal delay={0.1}>
                <ContentSection className="pb-6 sm:pb-8 pt-4 sm:pt-6 px-2 sm:px-0">
                  <ContentParagraph className="mb-2 text-base sm:text-lg">
                    <span className="font-medium dark:text-white text-black">
                      I build from zero.
                    </span>{" "}
                    Whether it&apos;s frontend, backend, full-stack applications,
                    or AI-powered experiences, I work across the entire
                    development lifecycle. From UI/UX to deployment to user
                    feedback, I care less about technology debates and more about
                    delivering results that people love using.
                  </ContentParagraph>
                </ContentSection>
              </Reveal>

            </div>
          </div>
        </div>
        
      </div>
  );
};

export default Hero;
