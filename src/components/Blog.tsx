import React from "react";
import { blogs } from "../config/blogs.tsx";

import Container from "../components/Container";
import SectionHeading from "../components/SectionHeading";
import  BlogList from '../components/blogs/BlogList.tsx'
import { Button } from "../components/ui/button";
import Reveal from "./Reveal.tsx";

const Blogs: React.FC = () => {
  const latestFirstBlogs = [...blogs].reverse();
  const featuredBlogs = latestFirstBlogs.slice(0, 4);

  return (
      
    <Reveal delay={0.1}>
    <Container id="blogs" className="mt-10 scroll-mt-20">
      <div className="text-base sm:text-xl leading-relaxed -tracking-[0.01em] mb-4 px-4">
      <SectionHeading subHeading="Featured" heading="Blogs" />


      <BlogList className="mt-8" blogs={featuredBlogs} />

      <div className="mt-8 flex justify-center">
        <Button variant="outline">
          <a href="/blogs">Show all blogs</a>
        </Button>
      </div>
      </div>
    </Container>
    </Reveal>
  );
};

export default Blogs;
