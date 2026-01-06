import React from "react";

interface SectionBorderProps {
  className?: string;
}

const SectionBorder: React.FC<SectionBorderProps> = ({
  className = "",
}) => {
  return (
    <div
      className={`border-b border-dashed dark:border-white/[0.06] border-black/[0.06] ${className}`}
    />
  );
};

export default SectionBorder;
