import React from "react";

import type { BlogPost } from '../../types/blog';

import { BlogCard } from './BlogCard.tsx'

interface BlogListProps {
  blogs: BlogPost[];
  className?: string;
}

const BlogList : React.FC<BlogListProps>=({ 
  blogs, 
}) => {
  if (!blogs.length) {
    return (
      <p className="py-8 text-center text-muted-foreground">
        No blogs found.
      </p>
    );
  }
  return (
    <div className="mb-4 sm:mb-6">
       {blogs.map((blog) => (
        <BlogCard key={blog.id} blog={blog} />
      ))}
    </div>
  );
};

export default BlogList;