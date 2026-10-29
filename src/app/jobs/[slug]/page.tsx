import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { domains } from "@/data/arsenal";
import { jobs } from "@/data/jobs";

type Params = Promise<{ slug: string }>;

// Every slug is prerendered by generateStaticParams, so skip the dev-only
// instant-navigation check on params.
export const instant = false;

export function generateStaticParams() {
  return jobs.map((j) => ({ slug: j.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const { slug } = await params;
  const j = jobs.find((x) => x.slug === slug);
  return j
    ? { title: `${j.title}, ${j.company} · EC Core Arsenal`, description: j.summary }
    : {};
}

export default async function JobPage({ params }: { params: Params }) {
  const { slug } = await params;
  const j = jobs.find((x) => x.slug === slug);
  if (!j) notFound();

  const related = j.domains
    .map((s) => domains.find((d) => d.slug === s))
    .filter((d) => !!d);

  return (
    <article className="pt-14">
      <Link href="/jobs" className="font-mono text-xs text-muted hover:text-accent">
        ← all job descriptions
      </Link>
      <p className="mt-6 font-mono text-xs text-accent">{j.company}</p>
      <h1 className="mt-2 text-4xl font-semibold tracking-tight sm:text-5xl">
        {j.title}
      </h1>
      <p className="mt-4 max-w-2xl text-muted">{j.summary}</p>

      <dl className="mt-8 grid gap-px overflow-hidden rounded-lg border border-line bg-line sm:grid-cols-2">
        {j.facts.map((f) => (
          <div key={f.label} className="bg-panel p-4">
            <dt className="font-mono text-xs text-muted">{f.label}</dt>
            <dd className="mt-1 text-sm">{f.value}</dd>
          </div>
        ))}
      </dl>

      {j.note && (
        <p className="mt-4 rounded border border-warn/40 bg-panel p-3 text-sm text-muted">
          Note: {j.note}
        </p>
      )}

      <div className="mt-10 space-y-8">
        {j.sections.map((s) => (
          <section key={s.heading}>
            <h2 className="mb-3 font-mono text-sm text-accent">{s.heading}</h2>
            {s.text && (
              <p className="max-w-3xl text-sm leading-relaxed text-foreground/90">
                {s.text}
              </p>
            )}
            {s.items && (
              <ul className="space-y-2 text-sm">
                {s.items.map((i) => (
                  <li key={i} className="flex gap-2">
                    <span className="text-accent">▸</span>
                    <span>{i}</span>
                  </li>
                ))}
              </ul>
            )}
          </section>
        ))}
      </div>

      <section className="mt-12">
        <h2 className="mb-3 font-mono text-sm text-muted">
          {"// prepare with these domains"}
        </h2>
        <div className="flex flex-wrap gap-3">
          {related.map((d) => (
            <Link
              key={d.slug}
              href={`/domains/${d.slug}`}
              className="rounded border border-line bg-panel px-4 py-2 text-sm transition hover:border-accent hover:text-accent"
            >
              <span className="mr-2 font-mono text-xs text-accent">[{d.code}]</span>
              {d.name}
            </Link>
          ))}
        </div>
      </section>
    </article>
  );
}
