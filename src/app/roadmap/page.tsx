import type { Metadata } from "next";
import { roadmap } from "@/data/arsenal";

export const metadata: Metadata = { title: "Roadmap · EC Core Arsenal" };

export default function RoadmapPage() {
  return (
    <div className="pt-14">
      <p className="font-mono text-xs text-accent">$ cat roadmap.md</p>
      <h1 className="mt-2 text-4xl font-semibold tracking-tight">Roadmap</h1>
      <p className="mt-3 max-w-2xl text-muted">
        Breadth first, then depth in one track, then proof through projects.
      </p>

      <ol className="mt-10 space-y-4 border-l border-line pl-6">
        {roadmap.map((r) => (
          <li key={r.phase} className="relative rounded-lg border border-line bg-panel p-5">
            <span className="absolute -left-[33px] top-6 h-2.5 w-2.5 rounded-full bg-accent" />
            <p className="font-mono text-xs text-accent">phase {r.phase}</p>
            <h2 className="mt-1 text-xl font-semibold">{r.title}</h2>
            <ul className="mt-3 space-y-1.5 text-sm text-muted">
              {r.items.map((i) => (
                <li key={i} className="flex gap-2">
                  <span className="text-accent">▸</span>
                  {i}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </div>
  );
}
