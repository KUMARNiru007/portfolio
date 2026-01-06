import React from "react";

interface ContentParagraphProps {
  children: React.ReactNode;
  className?: string;
}

const ContentParagraph: React.FC<ContentParagraphProps> = ({
  children,
  className = "",
}) => {
  return (
    <p
      className={`text-sm sm:text-base dark:text-white/70 text-black/70 leading-relaxed ${className}`}
      style={{ letterSpacing: "-0.02em" }}
    >
      {children}
    </p>
  );
};

export default ContentParagraph;
