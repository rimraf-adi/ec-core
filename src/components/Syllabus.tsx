import type { Domain } from "@/data/arsenal";

export default function Syllabus({ domain }: { domain: Domain }) {
  return (
    <ol className="space-y-3">
      {domain.topics.map((t, i) => {
        const filled = !!t.subtopics?.length;
        return (
          <li
            key={t.name}
            className="rounded-lg border border-line bg-panel p-4"
          >
            <div className="flex flex-wrap items-center justify-between gap-2">
              <h3 className="font-semibold">
                <span className="mr-2 font-mono text-xs text-accent">
                  U{String(i + 1).padStart(2, "0")}
                </span>
                {t.name}
              </h3>
            </div>

            <div className="mt-3 grid gap-4 text-sm md:grid-cols-2">
              <div>
                <p className="mb-1 font-mono text-xs text-muted">subtopics</p>
                {filled ? (
                  <ul className="space-y-1">
                    {t.subtopics!.map((s) => (
                      <li key={s}>▸ {s}</li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-muted">
                    Detailed syllabus to be added: subtopics, key derivations,
                    problem types.
                  </p>
                )}
              </div>
              <div>
                <p className="mb-1 font-mono text-xs text-muted">resources</p>
                {t.resources?.length ? (
                  <ul className="space-y-1">
                    {t.resources.map((r) => (
                      <li key={r.title}>
                        {r.url ? (
                          <a
                            href={r.url}
                            target="_blank"
                            rel="noreferrer"
                            className="text-accent hover:underline"
                          >
                            {r.title}
                          </a>
                        ) : (
                          r.title
                        )}
                        {r.kind && (
                          <span className="ml-2 font-mono text-xs text-muted">
                            {r.kind}
                          </span>
                        )}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-muted">
                    Books, lectures, notes and practice sets: coming soon.
                  </p>
                )}
              </div>
            </div>
          </li>
        );
      })}
    </ol>
  );
}
