import * as React from "react";
import { cn } from "../../lib/utils";

interface MarqueeProps {
  children: React.ReactNode;
  className?: string;
  reverse?: boolean;
  pauseOnHover?: boolean;
}

export function Marquee({
  children,
  className,
  reverse = false,
  pauseOnHover = false,
}: MarqueeProps) {
  return (
    <div
      className={cn(
        "group relative flex overflow-hidden",
        pauseOnHover && "hover:[&_.marquee]:pause",
        className
      )}
    >
      <div
        className={cn(
          "marquee flex min-w-full shrink-0 gap-4 animate-marquee",
          reverse && "animate-marquee-reverse"
        )}
      >
        {children}
      </div>
      <div
        className={cn(
          "marquee flex min-w-full shrink-0 gap-4 animate-marquee",
          reverse && "animate-marquee-reverse"
        )}
      >
        {children}
      </div>
    </div>
  );
}
