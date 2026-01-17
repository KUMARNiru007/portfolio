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
  const lastY = React.useRef(0);

  // Magnetic effect
  const x = useSpring(0, { stiffness: 200, damping: 15 });
  const y = useSpring(0, { stiffness: 200, damping: 15 });

  useMotionValueEvent(scrollY, "change", (latest) => {
    const scrollingDown = latest > lastY.current;

    // show only when scrolling down & past threshold
    setVisible(scrollingDown && latest > 300);

    lastY.current = latest;
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
      className="fixed right-6 bottom-6 z-50"
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
        className="absolute inset-0 -rotate-90"
        width="64"
        height="64"
      >
        <motion.circle
          cx="32"
          cy="32"
          r="28"
          fill="none"
          strokeWidth="3"
          stroke="currentColor"
          className="text-muted-foreground/40"
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
          "bg-background/60 backdrop-blur-xl",
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
