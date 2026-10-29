import type { Metadata } from "next";
import Link from "next/link";
import { domains } from "@/data/arsenal";

export const metadata: Metadata = { title: "Tools · EC Core Arsenal" };

export default function ToolsPage() {
  return (
    <div className="pt-14">
      <p className="font-mono text-xs text-accent">$ ls tools/</p>
      <h1 className="mt-2 text-4xl font-semibold tracking-tight">Tool index</h1>
      <p className="mt-3 max-w-2xl text-muted">
        Every simulator, EDA flow, library and instrument in the arsenal,
        grouped by domain.
      </p>

      <div className="mt-10 overflow-x-auto rounded-lg border border-line bg-panel">
        <table className="w-full min-w-[560px] text-left text-sm">
          <thead className="border-b border-line font-mono text-xs text-muted">
            <tr>
              <th className="p-3">Tool</th>
              <th className="p-3">Type</th>
              <th className="p-3">Use</th>
              <th className="p-3">Domain</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-line">
            {domains.flatMap((d) =>
              d.tools.map((t) => (
                <tr key={`${d.slug}-${t.name}`}>
                  <td className="p-3 font-semibold">{t.name}</td>
                  <td className="p-3 font-mono text-xs text-accent">{t.kind}</td>
                  <td className="p-3 text-muted">{t.use}</td>
                  <td className="p-3">
                    <Link
                      href={`/domains/${d.slug}`}
                      className="font-mono text-xs hover:text-accent"
                    >
                      {d.code}
                    </Link>
                  </td>
                </tr>
              )),
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
