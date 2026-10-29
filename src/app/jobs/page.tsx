import type { Metadata } from "next";
import Link from "next/link";
import { domains } from "@/data/arsenal";
import { jobs } from "@/data/jobs";

export const metadata: Metadata = { title: "Job Descriptions · EC Core Arsenal" };

export default function JobsPage() {
  const nameOf = (slug: string) =>
    domains.find((d) => d.slug === slug)?.name ?? slug;

  return (
    <div className="pt-14">
      <p className="font-mono text-xs text-accent">$ ls jobs/</p>
      <h1 className="mt-2 text-4xl font-semibold tracking-tight">
        Job descriptions
      </h1>
      <p className="mt-3 max-w-2xl text-muted">
        JDs from on-campus interviews, reformatted. Each links to the domains
        it draws on so you can prepare against the actual ask.
      </p>

      <ul className="mt-10 grid gap-4 md:grid-cols-2">
        {jobs.map((j) => (
          <li key={j.slug}>
            <Link
              href={`/jobs/${j.slug}`}
              className="group flex h-full flex-col rounded-lg border border-line bg-panel p-5 transition hover:-translate-y-0.5 hover:border-accent"
            >
              <p className="font-mono text-xs text-accent">{j.company}</p>
              <h2 className="mt-2 text-xl font-semibold">{j.title}</h2>
              <p className="mt-2 flex-1 text-sm text-muted">{j.summary}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {j.domains.map((s) => (
                  <span
                    key={s}
                    className="rounded border border-line px-2 py-0.5 font-mono text-[10px] text-muted"
                  >
                    {nameOf(s)}
                  </span>
                ))}
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
