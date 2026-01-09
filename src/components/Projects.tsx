import React from "react";
import { projects } from "../config/Projects.tsx";

import Container from "../components/Container";
import SectionHeading from "../components/SectionHeading";
import  ProjectList  from "../components/projects/ProjectList.tsx";
import { Button } from "../components/ui/button";
import Reveal from "./Reveal.tsx";

const Projects: React.FC = () => {
  const featuredProjects = projects.slice(0, 4);

  return (
      
    <Reveal delay={0.1}>
    <Container className="mt-20">
      
      <SectionHeading subHeading="Featured" heading="Projects" />

      <ProjectList className="mt-8" projects={featuredProjects} />

      <div className="mt-8 flex justify-center">
        <Button variant="outline">
          <a href="/projects">Show all projects</a>
        </Button>
      </div>
    </Container>
    </Reveal>
  );
};

export default Projects;
