import React, { useState, useEffect } from "react";

import Hero from "../components/Hero";
import { useSEO } from "../hooks/useSEO";

import { ThemeProvider } from "../hooks/useTheme";
import { TooltipProvider } from "../components/ui/tooltip";
import Projects from "../components/Projects";
import DiagonalPattern from "../components/DiagonalPattern";
import Navbar from "../components/Navbar";
import TechStackMarquee from "../components/TechStackMarquee";
import ContributionsDisplay  from "../components/github/ContributionsDisplay";
import Reveal from "../components/Reveal";
import SectionBorder from "../components/SectionBorder";
import ExperienceContent from "../components/ExperienceContent";
import CTA from "../components/CTA";
import ReactLenis from 'lenis/react';
import Footer from "../components/Footer";
import { Certifications } from "@/components/Certifications";
import { certifications } from "@/config/certifications";
import Blogs from "@/components/Blog";
import Loader from "@/components/Loader";
// import { VisitorCount } from "./components/VisitorCount";

const Home: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Show loader for smooth experience - hide after content is ready
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // 2 second delay for content to render

    return () => clearTimeout(timer);
  }, []);

  useSEO({
    title: 'Kumar Nirupam - Full Stack Software Engineer | Portfolio',
    description: 'Explore Kumar Nirupam\'s portfolio - a skilled full stack software engineer specializing in web development, React, TypeScript, and modern web technologies. View projects, blogs, and professional experience.',
    keywords: 'Software Engineer, Full Stack Developer, React, TypeScript, Web Development, Portfolio, Kumar Nirupam',
    url: 'https://kumarnirupam.dev/',
    type: 'website'
  });

  return (
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      <TooltipProvider>
        {isLoading ? (
          <Loader />
        ) : (

        <ReactLenis root>
          <div className="min-h-screen transition-colors duration-300 relative fade-in"
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

              <ContributionsDisplay username="KUMARNiru007" />

               <Reveal delay={0.05}>
                <SectionBorder className="mt-6" />
              </Reveal>
              
               <Blogs  />


              <Reveal delay={0.05}>
                <SectionBorder className="mt-6" />
              </Reveal>

              <Certifications items={certifications} />  

              <Reveal delay={0.05}>
                <SectionBorder className="mt-6" />
              </Reveal>

             <CTA />

             <Footer />
              

          
        </div>
         
        </div>
        </ReactLenis>
        )}
      </TooltipProvider>
    </ThemeProvider>

  );
};

export default Home;
