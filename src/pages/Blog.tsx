import SectionBorder from '@/components/SectionBorder';
import Container from '../components/Container';
import BlogList from '../components/blogs/BlogList';
import { blogs } from '@/config/blogs';
import { ThemeProvider } from '@/hooks/useTheme';
import { TooltipProvider } from '@/components/ui/tooltip';
import ReactLenis from 'lenis/react';
import Navbar from '@/components/Navbar';
import DiagonalPattern from '@/components/DiagonalPattern';
import Footer from '@/components/Footer';

function BlogPage() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
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
       {/* Header */}
        <div className="space-y-3 text-center mt-14">
          <h1 className="text-4xl font-semibold tracking-tight lg:text-5xl">
            Blogs
          </h1>
          <p className="mx-auto max-w-2xl text-base text-muted-foreground">
          Writing about what I learn while building and exploring technology.
          </p>
        </div>


        <SectionBorder className="mt-6" />

        {/* Blogs */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-semibold">
              All Blogs
              {blogs.length > 0 && (
                <span className="text-muted-foreground ml-2 text-sm font-normal">
                  ({blogs.length}{' '}
                  {blogs.length === 1 ? 'project' : 'blogs'})
                </span>
              )}
            </h2>
          </div>

          <BlogList blogs={blogs} />
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

export default BlogPage;