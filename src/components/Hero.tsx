import React from "react";

import BannerSection from "./Banner";
import ContentParagraph from "./ContentParagraph";
import ContentSection from "./ContentSection";
import ProfileHeader from "./ProfileHeader";
import Reveal from "./Reveal";
import SectionBorder from "./SectionBorder";

const Hero: React.FC = () => {
  return (
    <div id="hero">
      {/* Main Content */}
      <div className="mt-10 mx-auto sm:w-[calc(100%-120px)] w-full max-w-4xl sm:px-0">
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
                <ContentParagraph className="mb-2 text-base sm:text-lg leading-relaxed">
                  <span className="font-medium dark:text-white text-black">
                  Hello there! 👋<br />
                  </span>

                  I&apos;m Kumar Nirupam - a Full-stack developer passionate about building scalable,
                  user-friendly products with clean code and thoughtful design.
                  <br />
                  <br />

                  I specialize in developing high-performance web applications
                  using
                  <span className="font-medium">
                    {" "}
                    React, Node.js, TypeScript
                  </span>
                  , and modern full-stack technologies. Alongside JavaScript,
                  I&apos;m also proficient in{" "}
                  <span className="font-medium">Java</span>, with a strong
                  interest in problem-solving and writing efficient,
                  maintainable code.
                  <br />
                  <br />

                  I&apos;m the Founder of{" "}
                  <a
                    href="https://www.leetsheet.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium underline underline-offset-4 hover:opacity-80 transition"
                  >
                    LeetSheet
                  </a>
                  , a platform focused on structured DSA preparation and
                  effective learning, and Co-founder of{" "}
                  <a
                    href="https://www.swingui.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium underline underline-offset-4 hover:opacity-80 transition"
                  >
                    SwingUi
                  </a>{" "}
                  and{" "}
                  <a
                    href="https://www.chaiteam.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium underline underline-offset-4 hover:opacity-80 transition"
                  >
                    ChaiTeam
                  </a>
                  .
                  <br />
                  <br />

                  Currently, I&apos;m exploring{" "}
                  <span className="font-medium">system design</span>, scalable
                  architectures, and strengthening my data structures knowledge
                  in Java.

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
