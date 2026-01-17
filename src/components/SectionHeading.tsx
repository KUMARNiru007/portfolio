import React from "react";

interface SectionHeadingProps {
  subHeading: string;
  heading: string;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({
  subHeading,
  heading,
}) => {
  return (
    <div>
      <p className="text-secondary text-sm ">{subHeading}</p>
      <h2 className="text-2xl font-medium ita">{heading}</h2>
    </div>
  );
};

export default SectionHeading;
