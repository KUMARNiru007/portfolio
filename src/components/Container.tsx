import React from "react";

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({
  children,
  className = "",
  ...props
}) => {
  return (
    <div
      className={`container mx-auto max-w-3xl animate-fade-in-blur ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

export default Container;
