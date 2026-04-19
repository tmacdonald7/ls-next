"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { apps } from "@/lib/data";

const SECTION_LINKS = [
  { href: "#about", label: "About" },
  { href: "#team", label: "Team" },
  { href: "#apps", label: "Apps" },
  { href: "#contact", label: "Contact" },
];

export function Footer() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  function resolveSectionHref(hashHref: string) {
    return isHome ? hashHref : `/${hashHref}`;
  }

  return (
    <footer className="border-t border-app">
      <div className="mx-auto max-w-6xl px-4 py-10">
        <div className="grid gap-8 md:grid-cols-[1.2fr_0.95fr_0.95fr] md:gap-10">
          <div>
            <Link href="/" className="ring-soft inline-block rounded-lg">
              <span className="text-lg font-semibold tracking-tight">
                Lochside Studio
              </span>
            </Link>
            <p className="mt-3 max-w-md text-sm leading-6 text-muted">
              Internal-first software for operators. We build tools that remove
              friction, speed up execution, and hold up under real use.
            </p>
            <div className="mt-5 flex flex-wrap gap-4 text-sm">
              <Link
                href="mailto:tmacdonald7@gmail.com"
                className="ring-soft rounded-lg text-muted hover:text-[rgb(var(--text))]"
              >
                Contact
              </Link>
              <a
                href="#top"
                className="ring-soft rounded-lg text-muted hover:text-[rgb(var(--text))]"
              >
                Back to top
              </a>
            </div>
          </div>

          <div className="md:border-l md:border-app md:pl-6">
            <div className="text-xs font-semibold uppercase tracking-[0.24em] text-muted">
              Navigate
            </div>
            <div className="mt-4 grid gap-x-4 gap-y-3 text-sm sm:grid-cols-2">
              <Link
                href="/"
                className="ring-soft rounded-lg text-muted hover:text-[rgb(var(--text))]"
              >
                Home
              </Link>
              {SECTION_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={resolveSectionHref(link.href)}
                  className="ring-soft rounded-lg text-muted hover:text-[rgb(var(--text))]"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="md:border-l md:border-app md:pl-6">
            <div className="text-xs font-semibold uppercase tracking-[0.24em] text-muted">
              Products
            </div>
            <div className="mt-4 flex flex-col gap-3 text-sm">
              {apps.map((app) =>
                app.available !== false && app.href ? (
                  <Link
                    key={app.name}
                    href={app.href}
                    className="ring-soft rounded-lg text-muted hover:text-[rgb(var(--text))]"
                  >
                    {app.name}
                  </Link>
                ) : (
                  <div key={app.name} className="rounded-lg text-muted">
                    <span>{app.name}</span>
                    {app.badge ? (
                      <span className="ml-2 text-xs uppercase tracking-[0.18em]">
                        {app.badge}
                      </span>
                    ) : null}
                  </div>
                ),
              )}
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-3 border-t border-app pt-5 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
          <div>Copyright {new Date().getFullYear()} Lochside Studio</div>
          <div>Built in Houston. Shipped for real operators.</div>
        </div>
      </div>
    </footer>
  );
}
