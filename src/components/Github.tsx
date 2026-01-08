import React, { useEffect, useState } from "react";
import { ActivityCalendar } from "react-activity-calendar";
import { FaGithub } from "react-icons/fa";

import { githubConfig } from "../config/Github";
import Container from "./Container";
import { Button } from "./ui/button";
import { useTheme } from "../hooks/useTheme";
import SectionHeading from "./SectionHeading";

/* -------------------- Types -------------------- */

type ContributionItem = {
  date: string;
  count: number;
  level: 0 | 1 | 2 | 3 | 4;
};

type GitHubApiItem = {
  date: string;
  contributionCount: number;
  contributionLevel:
    | "NONE"
    | "FIRST_QUARTILE"
    | "SECOND_QUARTILE"
    | "THIRD_QUARTILE"
    | "FOURTH_QUARTILE";
};

/* -------------------- Helpers -------------------- */

const LEVEL_MAP: Record<GitHubApiItem["contributionLevel"], ContributionItem["level"]> =
{
  NONE: 0,
  FIRST_QUARTILE: 1,
  SECOND_QUARTILE: 2,
  THIRD_QUARTILE: 3,
  FOURTH_QUARTILE: 4,
};

function filterLastYear(data: ContributionItem[]) {
  const oneYearAgo = new Date();
  oneYearAgo.setFullYear(oneYearAgo.getFullYear() - 1);
  return data.filter((d) => new Date(d.date) >= oneYearAgo);
}

/* -------------------- Component -------------------- */

const Github: React.FC = () => {
  const { theme } = useTheme();

  const [data, setData] = useState<ContributionItem[]>([]);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function load() {
      try {
        const res = await fetch(
          `${githubConfig.apiUrl}/${githubConfig.username}.json`
        );
        const json = await res.json();

        const flattened = (json?.contributions ?? []).flat() as GitHubApiItem[];

        const parsed: ContributionItem[] = flattened.map((item) => ({
          date: item.date,
          count: item.contributionCount,
          level: LEVEL_MAP[item.contributionLevel],
        }));

        const lastYear = filterLastYear(parsed);

        setData(lastYear);
        setTotal(parsed.reduce((sum, i) => sum + i.count, 0));
      } catch (err) {
        console.error("GitHub fetch failed:", err);
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    load();
  }, []);

  return (
    <Container className="mt-20">
    <SectionHeading subHeading="Featured" heading="" />
      <div className="space-y-6">
        {/* Header */}
        <div>
          <h2 className="text-2xl font-bold">{githubConfig.title}</h2>
          <p className="text-muted-foreground text-sm">
            <b>{githubConfig.username}</b>’s {githubConfig.subtitle}
          </p>

          {!loading && !error && total > 0 && (
            <p className="mt-1 text-sm font-medium text-primary">
              Total:{" "}
              <span className="font-black">
                {total.toLocaleString()}
              </span>{" "}
              contributions
            </p>
          )}
        </div>

        {/* Loading */}
        {loading && (
          <div className="py-16 text-center">
            <div className="mx-auto mb-4 h-8 w-8 animate-spin rounded-full border-2 border-primary border-t-transparent" />
            <p className="text-muted-foreground text-sm">
              {githubConfig.loadingState.description}
            </p>
          </div>
        )}

        {/* Error */}
        {!loading && (error || data.length === 0) && (
          <div className="rounded-xl border-2 border-dashed p-8 text-center text-muted-foreground">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-muted">
              <FaGithub className="h-8 w-8" />
            </div>
            <p className="mb-2 font-medium">
              {githubConfig.errorState.title}
            </p>
            <p className="mb-4 text-sm">
              {githubConfig.errorState.description}
            </p>

            <Button variant="outline" asChild>
              <a
                href={`https://github.com/${githubConfig.username}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2"
              >
                <FaGithub className="h-4 w-4" />
                {githubConfig.errorState.buttonText}
              </a>
            </Button>
          </div>
        )}

        {/* Calendar */}
        {!loading && !error && data.length > 0 && (
          <div className="overflow-x-auto rounded-lg border border-dashed p-6 dark:border-white/10">
            <ActivityCalendar
              data={data}
              blockSize={12}
              blockMargin={4}
              fontSize={githubConfig.fontSize}
              maxLevel={githubConfig.maxLevel}
              colorScheme={theme === "dark" ? "dark" : "light"}
              hideTotalCount
              theme={githubConfig.theme}
              labels={{
                months: githubConfig.months,
                weekdays: githubConfig.weekdays,
                totalCount: githubConfig.totalCountLabel,
              }}
            />
          </div>
        )}
      </div>
    </Container>
  );
};

export default Github;
