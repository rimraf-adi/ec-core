import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Syllabus from "@/components/Syllabus";
import { domains, levelOrder } from "@/data/arsenal";

type Params = Promise<{ slug: string }>;

// Every slug is prerendered by generateStaticParams, so skip the dev-only
// instant-navigation check on params.
export const instant = false;

export function generateStaticParams() {
  return domains.map((d) => ({ slug: d.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const { slug } = await params;
  const d = domains.find((x) => x.slug === slug);
  return d
    ? { title: `${d.name} · EC Core Arsenal`, description: d.blurb }
    : {};
}

const levelStyle = {
  foundation: "text-muted",
  core: "text-accent",
  advanced: "text-warn",
} as const;

export default async function DomainPage({ params }: { params: Params }) {
  const { slug } = await params;
  const idx = domains.findIndex((x) => x.slug === slug);
  if (idx === -1) notFound();
  const d = domains[idx];
  const next = domains[(idx + 1) % domains.length];

  return (
    <article className="pt-14">
      <Link href="/#domains" className="font-mono text-xs text-muted hover:text-accent">
        ← all domains
      </Link>
      <p className="mt-6 font-mono text-xs text-accent">[{d.code}]</p>
      <h1 className="mt-2 text-4xl font-semibold tracking-tight sm:text-5xl">
        {d.name}
      </h1>
      <p className="mt-3 text-lg text-accent/80">{d.tagline}</p>
      <p className="mt-4 max-w-2xl text-muted">{d.blurb}</p>

      <section className="mt-12">
        <h2 className="mb-4 font-mono text-sm text-muted">{"// curriculum"}</h2>
        <div className="grid gap-4 md:grid-cols-3">
          {levelOrder.map((lvl) => (
            <div key={lvl} className="rounded-lg border border-line bg-panel p-4">
              <h3 className={`mb-3 font-mono text-xs uppercase ${levelStyle[lvl]}`}>
                {lvl}
              </h3>
              <ul className="space-y-2 text-sm">
                {d.topics
                  .filter((t) => t.level === lvl)
                  .map((t) => (
                    <li key={t.name} className="flex gap-2">
                      <span className={levelStyle[lvl]}>▸</span>
                      {t.name}
                    </li>
                  ))}
                {d.topics.every((t) => t.level !== lvl) && (
                  <li className="text-muted">—</li>
                )}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section id="syllabus" className="mt-12 scroll-mt-20">
        <h2 className="mb-1 font-mono text-sm text-muted">
          {"// detailed syllabus"}
        </h2>
        <p className="mb-4 text-sm text-muted">
          Units are filled in over time as this den grows.
        </p>
        <Syllabus domain={d} />
      </section>

      <div className="mt-12 grid gap-8 md:grid-cols-2">
        <section>
          <h2 className="mb-4 font-mono text-sm text-muted">{"// tools"}</h2>
          <ul className="divide-y divide-line rounded-lg border border-line bg-panel">
            {d.tools.map((t) => (
              <li key={t.name} className="flex items-start gap-3 p-4">
                <span className="mt-0.5 rounded border border-line px-1.5 font-mono text-[10px] text-accent">
                  {t.kind}
                </span>
                <div>
                  <p className="font-semibold">{t.name}</p>
                  <p className="text-sm text-muted">{t.use}</p>
                </div>
              </li>
            ))}
          </ul>
        </section>
        <section>
          <h2 className="mb-4 font-mono text-sm text-muted">{"// labs to build"}</h2>
          <ul className="divide-y divide-line rounded-lg border border-line bg-panel">
            {d.labs.map((l, i) => (
              <li key={l} className="flex gap-3 p-4 text-sm">
                <span className="font-mono text-accent">
                  {String(i + 1).padStart(2, "0")}
                </span>
                {l}
              </li>
            ))}
          </ul>
        </section>
      </div>

      <Link
        href={`/domains/${next.slug}`}
        className="mt-16 block rounded-lg border border-line p-5 transition hover:border-accent"
      >
        <span className="font-mono text-xs text-muted">next →</span>
        <p className="mt-1 text-lg font-semibold">{next.name}</p>
      </Link>
    </article>
  );
}
