import { useEffect, useState } from "react";

export function VisitorCount({ className }) {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchVisitorStats() {
      try {
        const umamiBaseUrl = import.meta.env.VITE_UMAMI_BASE_URL;
        const shareId = import.meta.env.VITE_UMAMI_SHARE_ID;

        if (!umamiBaseUrl || !shareId) {
          console.error("Umami env variables are not configured");
          return;
        }

        const response = await fetch(
          `${umamiBaseUrl}/share/${shareId}/stats`,
          {
            method: 'GET',
            cache: "no-store"
          }
        );

        if (response.ok) {
          const data = await response.json();
          setStats({
            uniqueVisitors: data.visitors || 0,
          });
        }
      } catch (error) {
        console.error("Failed to fetch visitor stats:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchVisitorStats();
  }, []);

  if (loading || !stats) {
    return null;
  }

  return (
    <div className={className}>
      <span className="font-medium">
        {stats.uniqueVisitors.toLocaleString()}
      </span>{" "}
      visitors
    </div>
  );
}
