import React, { useEffect, useState } from "react";
import {GitHubCalendar} from "react-github-calendar";
import { motion } from "framer-motion";
import { useTheme } from "../theme-provider";

interface GitHubContributionsProps {
  username: string;
  compact?: boolean;
  className?: string;
}

const GitHubContributions: React.FC<GitHubContributionsProps> = ({
  username,
  compact = false,
  className = "",
}) => {
  const { theme } = useTheme();
  const [resolvedTheme, setResolvedTheme] = useState<"light" | "dark">("dark");

  useEffect(() => {
    // Resolve the actual theme (handle "system" theme)
    const root = window.document.documentElement;
    
    if (theme === "system") {
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
      setResolvedTheme(systemTheme);
    } else {
      setResolvedTheme(theme as "light" | "dark");
    }

    // Also check the actual class on the root element as fallback
    const isDark = root.classList.contains("dark");
    setResolvedTheme(isDark ? "dark" : "light");
  }, [theme]);

  // Dynamic theme based on resolved theme
  const calendarTheme = {
    light: ["#ebedf0", "#9be9a8", "#40c463", "#30a14e", "#216e39"],
    dark: ["#161b22", "#0e4429", "#006d32", "#26a641", "#39d353"],
  };

  const isDark = resolvedTheme === "dark";

  return (
    <div className={`relative overflow-hidden rounded-xl ${className}`}>
      <motion.div
        className="w-full rounded-xl transition-shadow duration-300 hover:shadow-sm"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        key={resolvedTheme}
      >
        <div
          className={`${compact ? "p-2" : "p-3"} transition-transform duration-300 hover:scale-[1.005] flex justify-center items-center`}
        >
          <GitHubCalendar
            username={username}
            colorScheme={isDark ? "dark" : "light"}
            fontSize={compact ? 14 : 12}
            blockSize={compact ? 10 : 12}
            blockMargin={compact ? 2 : 4}
            showWeekdayLabels={!compact}
            theme={calendarTheme}
          />
        </div>
      </motion.div>
    </div>
  );
};

export default GitHubContributions;