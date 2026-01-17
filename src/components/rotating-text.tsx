"use client";

import { useEffect, useState } from "react";

const WORDS = [
  "Engineer • Developer • Builder",
  "Open Source Contributor",
  "I build products, not just projects",
  "Learning by building",
  "Vibe coding cleanup specialist",
];

export function RotatingText() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % WORDS.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <span
      key={WORDS[index]}
      className="inline-block text-xs sm:text-sm animate-slide-up"
    >
      {WORDS[index]}
    </span>
  );
}
