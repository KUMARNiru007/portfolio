import React from "react";

import Hero from "./components/Hero";
import Footer from "./components/Footer";

import { ThemeProvider } from "./hooks/useTheme";
import { TooltipProvider } from "./components/ui/tooltip";
import Projects from "./components/Projects";
import DiagonalPattern from "./components/DiagonalPattern";
import Navbar from "./components/Navbar";
import TechStackMarquee from "./components/TechStackMarquee";
import ContributionsDisplay  from "./components/github/ContributionsDisplay";
import Reveal from "./components/Reveal";
import SectionBorder from "./components/SectionBorder";
import ExperienceContent from "./components/ExperienceContent";
import { BlogList } from "./components/blogs/BlogList";
import { blogs } from "./config/blogs";
// import { VisitorCount } from "./components/VisitorCount";

const App: React.FC = () => {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <TooltipProvider>
          <div className="min-h-screen transition-colors duration-300 relative"
            style={{ fontFamily: "var(--font-hk-grotesk)" }}>
              {<Navbar />}
           <div className="relative mx-auto max-w-4xl">

            {/* Diagonal Patterns */}
            <DiagonalPattern side="left" />
            <DiagonalPattern side="right" />

              <Hero />

              <Reveal delay={0.05}>
                <SectionBorder className="mt-6" />
              </Reveal>

              <ExperienceContent />

              <Reveal delay={0.05}>
                <SectionBorder className="mt-6" />
              </Reveal>


              <TechStackMarquee />

              <Reveal delay={0.05}>
                <SectionBorder className="mt-6" />
              </Reveal>

              <Projects />

              <Reveal delay={0.05}>
                <SectionBorder className="mt-6" />
              </Reveal>

               <BlogList blogs={blogs} />

               <Reveal delay={0.05}>
                <SectionBorder className="mt-6" />
              </Reveal>
              
              <ContributionsDisplay username="KUMARNiru007" />

              <Reveal delay={0.05}>
                <SectionBorder className="mt-6" />
              </Reveal>

              {/* <VisitorCount className="text-xs text-muted-foreground" /> */}

          
        </div>
        </div>
              <Footer />
      </TooltipProvider>
    </ThemeProvider>
  );
};

export default App;
