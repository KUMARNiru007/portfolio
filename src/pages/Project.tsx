import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { useSEO } from '@/hooks/useSEO';

import SectionBorder from '@/components/SectionBorder';
import Container from '../components/Container';
import  ProjectList  from '../components/projects/ProjectList';
import { projects } from '@/config/Projects';
import { ThemeProvider } from '@/hooks/useTheme';
import { TooltipProvider } from '@/components/ui/tooltip';
import ReactLenis from 'lenis/react';
import Navbar from '@/components/Navbar';
import DiagonalPattern from '@/components/DiagonalPattern';
import Footer from '@/components/Footer';

 function ProjectsPage() {
  useSEO({
    title: 'Projects - Kumar Nirupam | Full Stack Developer Portfolio',
    description: 'Explore Kumar Nirupam\'s portfolio projects showcasing expertise in web development, React, TypeScript, and full stack technologies across various domains.',
    keywords: 'Kumar Nirupam, Kumar Nirupam projects, Projects, Portfolio, Web Development, React, TypeScript, Full Stack, Software Engineering',
    url: 'https://kumarnirupam.dev/projects',
    type: 'website'
  });
  
  const navigate = useNavigate();



  return (
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      <TooltipProvider>

        <ReactLenis root>
          <div className="min-h-screen transition-colors duration-300 relative"
            style={{ fontFamily: "var(--font-hk-grotesk)" }}>
              {<Navbar />}
           <div className="relative mx-auto max-w-4xl">

            {/* Diagonal Patterns */}
            <DiagonalPattern side="left" />
            <DiagonalPattern side="right" />
    <Container className="py-16">
      <div className="space-y-8">

      <div className="absolute left-4 top-20 z-20">
        <button
        onClick={() => navigate(`/`)}
        className="flex items-center gap-2 rounded-md border px-3 py-1.5 text-sm
                  text-muted-foreground hover:bg-accent hover:text-foreground transition"
      >

          <ArrowLeft className="h-4 w-4" />
          Back
        </button>
      </div>

        {/* Header */}
        <div className="space-y-3 text-center mt-14">
          <h1 className="text-4xl font-semibold tracking-tight lg:text-5xl">
            Projects
          </h1>
          <p className="mx-auto max-w-2xl text-base text-muted-foreground">
          My projects and work across different technologies and domains.
          </p>
        </div>

        <SectionBorder className="mt-6" />

        {/* Projects */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-semibold">
              All Projects
              {projects.length > 0 && (
                <span className="text-muted-foreground ml-2 text-sm font-normal">
                  ({projects.length}{' '}
                  {projects.length === 1 ? 'project' : 'projects'})
                </span>
              )}
            </h2>
          </div>

          <ProjectList projects={projects} />
        </div>
      </div>
    </Container>
    </div>
    <Footer />
                </div>
              </ReactLenis>
        </TooltipProvider>      
    </ThemeProvider>
  );
}
export default ProjectsPage;