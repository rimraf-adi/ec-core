import Link from "next/link";
import DomainGrid from "@/components/DomainGrid";
import { crossSkills, domains } from "@/data/arsenal";

export default function Home() {
  const topicCount = domains.reduce((n, d) => n + d.topics.length, 0);
  const toolCount = domains.reduce((n, d) => n + d.tools.length, 0);
  const labCount = domains.reduce((n, d) => n + d.labs.length, 0);

  return (
    <>
      <section className="pt-20 pb-16">
        <p className="font-mono text-xs text-accent">
          $ ec-core --map everything
        </p>
        <h1 className="mt-4 max-w-3xl text-4xl font-semibold leading-tight tracking-tight sm:text-6xl">
          The arsenal for the{" "}
          <span className="text-accent">EC engineer</span>.
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-muted">
          Controls, embedded, analog and digital VLSI, communications, RF, and
          the topics nobody warns you about. A resource den for preparing for any
          EC role: topics, detailed syllabi, tools, labs and a roadmap. Updated
          as time goes by.
        </p>
        <div className="mt-8 flex flex-wrap gap-3 font-mono text-sm">
          <Link
            href="#domains"
            className="rounded bg-accent px-4 py-2 font-semibold text-black transition hover:opacity-90"
          >
            Explore domains
          </Link>
          <Link
            href="/roadmap"
            className="rounded border border-line px-4 py-2 transition hover:border-accent hover:text-accent"
          >
            View roadmap
          </Link>
        </div>

        <dl className="mt-14 grid max-w-xl grid-cols-4 gap-4 font-mono">
          {[
            [domains.length, "domains"],
            [topicCount, "topics"],
            [toolCount, "tools"],
            [labCount, "labs"],
          ].map(([n, l]) => (
            <div key={l as string}>
              <dt className="text-xs text-muted">{l}</dt>
              <dd className="text-2xl font-semibold text-accent">{n}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section id="domains" className="scroll-mt-20 py-8">
        <h2 className="mb-6 font-mono text-sm text-muted">
          {"// domains"}
        </h2>
        <DomainGrid domains={domains} />
      </section>

      <section className="py-16">
        <h2 className="mb-6 font-mono text-sm text-muted">
          {"// cross-cutting skills"}
        </h2>
        <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {crossSkills.map((s) => (
            <li
              key={s.name}
              className="rounded border border-line bg-panel p-4"
            >
              <p className="font-semibold">{s.name}</p>
              <p className="mt-1 text-sm text-muted">{s.why}</p>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
