import type { Metadata } from "next";
import Link from "next/link";
import { domains } from "@/data/arsenal";

export const metadata: Metadata = { title: "Syllabus · EC Core Arsenal" };

export default function SyllabusPage() {
  const total = domains.reduce((n, d) => n + d.topics.length, 0);
  const ready = domains.reduce(
    (n, d) => n + d.topics.filter((t) => t.subtopics?.length).length,
    0,
  );

  return (
    <div className="pt-14">
      <p className="font-mono text-xs text-accent">$ syllabus --status</p>
      <h1 className="mt-2 text-4xl font-semibold tracking-tight">
        Syllabus tracker
      </h1>
      <p className="mt-3 max-w-2xl text-muted">
        Detailed syllabi for every domain. The den grows as content is added.
      </p>
      <p className="mt-4 font-mono text-sm">
        <span className="text-accent">{ready}</span>
        <span className="text-muted"> / {total} units ready</span>
      </p>

      <ul className="mt-8 space-y-3">
        {domains.map((d) => {
          const r = d.topics.filter((t) => t.subtopics?.length).length;
          const pct = Math.round((r / d.topics.length) * 100);
          return (
            <li key={d.slug}>
              <Link
                href={`/domains/${d.slug}#syllabus`}
                className="block rounded-lg border border-line bg-panel p-4 transition hover:border-accent"
              >
                <div className="flex items-center justify-between">
                  <span className="font-semibold">
                    <span className="mr-2 font-mono text-xs text-accent">
                      [{d.code}]
                    </span>
                    {d.name}
                  </span>
                  <span className="font-mono text-xs text-muted">
                    {r}/{d.topics.length}
                  </span>
                </div>
                <div className="mt-3 h-1 overflow-hidden rounded bg-line">
                  <div
                    className="h-full bg-accent"
                    style={{ width: `${pct}%` }}
                  />
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
