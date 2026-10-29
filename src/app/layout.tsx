import type { Metadata } from "next";
import Link from "next/link";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "EC Core Arsenal",
  description:
    "A mapped arsenal for electronics and communication engineers: domains, topics, tools, labs and roadmaps.",
};

const nav = [
  { href: "/#domains", label: "Domains" },
  { href: "/syllabus", label: "Syllabus" },
  { href: "/jobs", label: "Jobs" },
  { href: "/tools", label: "Tools" },
  { href: "/roadmap", label: "Roadmap" },
];

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <header className="sticky top-0 z-10 border-b border-line bg-background/80 backdrop-blur">
          <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3">
            <Link href="/" className="font-mono text-sm font-semibold">
              <span className="text-accent">&gt;</span> ec-core
              <span className="text-muted">/arsenal</span>
            </Link>
            <nav className="flex gap-5 font-mono text-xs text-muted">
              {nav.map((n) => (
                <Link
                  key={n.href}
                  href={n.href}
                  className="transition hover:text-accent"
                >
                  {n.label}
                </Link>
              ))}
            </nav>
          </div>
        </header>
        <main className="mx-auto w-full max-w-6xl flex-1 px-5">{children}</main>
        <footer className="mt-24 border-t border-line py-8 text-center font-mono text-xs text-muted">
          ec-core arsenal · built for electronics &amp; communication engineers
        </footer>
      </body>
    </html>
  );
}
