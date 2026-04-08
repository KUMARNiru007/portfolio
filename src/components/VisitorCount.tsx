import { useEffect, useState } from "react";

const VISITOR_NAMESPACE = import.meta.env.VITE_VISITOR_NAMESPACE || "kumarnirupam-portfolio";
const VISITOR_KEY = import.meta.env.VITE_VISITOR_KEY || "site-visits";
const SESSION_VISIT_KEY = `${VISITOR_NAMESPACE}:${VISITOR_KEY}:counted`;
const MIN_DISPLAY_COUNT = 143;

export function VisitorCount({ className }: { className?: string }) {
  const [visitorCount, setVisitorCount] = useState<number | null>(null);

  useEffect(() => {
    async function fetchVisitorCount() {
      try {
        const hasCountedThisSession = sessionStorage.getItem(SESSION_VISIT_KEY) === "true";
        const endpoint = hasCountedThisSession
          ? `https://api.countapi.xyz/get/${VISITOR_NAMESPACE}/${VISITOR_KEY}`
          : `https://api.countapi.xyz/hit/${VISITOR_NAMESPACE}/${VISITOR_KEY}`;

        const response = await fetch(endpoint, { cache: "no-store" });
        if (!response.ok) {
          return;
        }

        const data = (await response.json()) as { value?: number };
        setVisitorCount(typeof data.value === "number" ? data.value : 0);

        if (!hasCountedThisSession) {
          sessionStorage.setItem(SESSION_VISIT_KEY, "true");
        }
      } catch (error) {
        console.error("Failed to fetch visitor count:", error);
      }
    }

    fetchVisitorCount();
  }, []);

  const displayCount = Math.max(visitorCount ?? 0, MIN_DISPLAY_COUNT);

  return (
    <div className={className}>
      {displayCount.toLocaleString()} visitors
    </div>
  );
}
