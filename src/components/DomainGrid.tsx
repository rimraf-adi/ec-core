"use client";

import Link from "next/link";
import { useState } from "react";
import type { Domain } from "@/data/arsenal";

export default function DomainGrid({ domains }: { domains: Domain[] }) {
  const [query, setQuery] = useState("");

  const q = query.trim().toLowerCase();
  const shown = domains.filter((d) => {
    if (!q) return true;
    return (
      d.name.toLowerCase().includes(q) ||
      d.topics.some((t) => t.name.toLowerCase().includes(q)) ||
      d.tools.some((t) => t.name.toLowerCase().includes(q))
    );
  });

  return (
    <div>
      <div className="mb-6 flex flex-wrap items-center gap-3">
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="search domains, topics, tools…"
          className="w-full max-w-xs rounded border border-line bg-panel px-3 py-2 font-mono text-xs outline-none placeholder:text-muted focus:border-accent"
        />
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {shown.map((d) => (
          <Link
            key={d.slug}
            href={`/domains/${d.slug}`}
            className="group flex flex-col rounded-lg border border-line bg-panel p-5 transition hover:-translate-y-0.5 hover:border-accent"
          >
            <div className="mb-3 font-mono text-xs text-accent">[{d.code}]</div>
            <h3 className="text-lg font-semibold">{d.name}</h3>
            <p className="mt-1 text-sm text-accent/80">{d.tagline}</p>
            <p className="mt-3 flex-1 text-sm text-muted">{d.blurb}</p>
            <div className="mt-4 font-mono text-xs text-muted">
              {d.topics.length} topics · {d.tools.length} tools · {d.labs.length} labs
              <span className="ml-2 text-accent opacity-0 transition group-hover:opacity-100">
                →
              </span>
            </div>
          </Link>
        ))}
        {shown.length === 0 && (
          <p className="font-mono text-sm text-muted">no match.</p>
        )}
      </div>
    </div>
  );
}
