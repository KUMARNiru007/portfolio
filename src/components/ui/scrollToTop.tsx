import * as React from "react";
import { ArrowUpIcon } from "lucide-react";
import {
  motion,
  useScroll,
  useMotionValueEvent,
  useSpring,
} from "motion/react";

import { cn } from "@/lib/utils";

export function ScrollTop() {
  const { scrollY, scrollYProgress } = useScroll();

  const [visible, setVisible] = React.useState(false);

  // Magnetic effect
  const x = useSpring(0, { stiffness: 200, damping: 15 });
  const y = useSpring(0, { stiffness: 200, damping: 15 });

  useMotionValueEvent(scrollY, "change", (latest) => {

    setVisible(latest > 300);
  });

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const offsetX = e.clientX - rect.left - rect.width / 2;
    const offsetY = e.clientY - rect.top - rect.height / 2;

    x.set(offsetX * 0.3);
    y.set(offsetY * 0.3);
  };

  const resetMagnet = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      className="fixed right-6 bottom-6 z-50 flex h-16 w-16 items-center justify-center"
      initial={{ opacity: 0, scale: 0.7, y: 20 }}
      animate={
        visible
          ? { opacity: 1, scale: 1, y: 0 }
          : { opacity: 0, scale: 0.7, y: 20 }
      }
      transition={{ duration: 0.25, ease: "easeOut" }}
    >
      {/* Circular Progress */}
      <svg
        className="absolute inset-0 -rotate-90 text-muted-foreground/20"
        width="64"
        height="64"
        viewBox="0 0 64 64" 
      >
        {/* Background track circle (optional, provides structure) */}
        <circle
          cx="32"
          cy="32"
          r="30"
          fill="none"
          strokeWidth="2"
          stroke="currentColor"
        />
        {/* Progress Circle */}
        <motion.circle
          cx="32"
          cy="32"
          r="30" // Adjusted radius to sit outside the 56px button
          fill="none"
          strokeWidth="3"
          stroke="currentColor"
          className="text-foreground" // Made progress darker/visible
          style={{
            pathLength: scrollYProgress,
          }}
        />
      </svg>

      {/* Button */}
      <motion.button
        onMouseMove={handleMouseMove}
        onMouseLeave={resetMagnet}
        onClick={() =>
          window.scrollTo({ top: 0, behavior: "smooth" })
        }
        style={{ x, y }}
        className={cn(
          "relative h-14 w-14 rounded-full", 
          "flex items-center justify-center",
          "bg-background/80 backdrop-blur-xl",
          "border border-border/40",
          "shadow-lg",
          "hover:scale-105 transition-transform"
        )}
      >
        <ArrowUpIcon className="h-5 w-5" />
        <span className="sr-only">Scroll to top</span>
      </motion.button>
    </motion.div>
  );
}