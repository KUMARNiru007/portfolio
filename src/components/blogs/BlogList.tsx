import type { BlogPost } from '../../types/blog';
import Container from '../Container';
import Reveal from '../Reveal';
import SectionHeading from '../SectionHeading';
import { Button } from '../ui/button';
import { BlogCard } from './BlogCard';

interface BlogListProps {
  blogs: BlogPost[];
  className?: string;
  emptyMessage?: string;
}

export function BlogList({ 
  blogs, 
  emptyMessage = 'No blog posts found.' 
}: BlogListProps) {
  if (!blogs || blogs.length === 0) {
    return (
      <div className="py-12 px-4 text-center">
        <p className="text-neutral-500 dark:text-neutral-400">{emptyMessage}</p>
      </div>
    );
  }

  return (
    <Reveal delay={0.1}>
      <Container id="blogs" className="mt-8">
        {/* Section Heading */}
        <div className="text-base sm:text-xl leading-relaxed -tracking-[0.01em] mb-4 px-4">
        <SectionHeading subHeading="Featured" heading="Blogs" />
        <div className="text-base sm:text-xl leading-relaxed -tracking-[0.01em] mb-4 px-4">
        </div>
        
       <div className="mb-4 sm:mb-6">
      {blogs.map((blog) => (
        <BlogCard key={blog.id} blog={blog} />
      ))}
    </div>
    <div className="mt-8 flex justify-center">
        <Button variant="outline">
          <a href="/blogs">Show all Blogs</a>
        </Button>
      </div>
    </div>
    </Container>
    
    </Reveal>
  );
}