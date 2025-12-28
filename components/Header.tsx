"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";

const NAV = [
  { href: "#about", label: "About" },
  { href: "#team", label: "Team" },
  { href: "#apps", label: "Apps" },
  { href: "#contact", label: "Contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  // Close on Escape
  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, []);

  // Prevent body scroll when menu open (mobile)
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-app bg-app/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link
          href="#top"
          className="ring-soft rounded-lg px-2 py-1"
          onClick={() => setOpen(false)}
        >
          <span className="text-lg font-semibold tracking-tight">
            Lochside Studio
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-6 md:flex">
          {NAV.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="ring-soft rounded-lg text-sm text-muted hover:text-[rgb(var(--text))]"
            >
              {n.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />

          {/* Mobile menu button */}
          <button
            type="button"
            className="ring-soft ml-1 inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-app bg-surface shadow-soft md:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      <div className={["md:hidden", open ? "block" : "hidden"].join(" ")}>
        {/* Backdrop */}
        <div
          className="fixed inset-0 z-40 bg-black/30"
          onClick={() => setOpen(false)}
          aria-hidden="true"
        />

        {/* Panel */}
        <div className="relative z-50 border-t border-app bg-app/95 backdrop-blur">
          <div className="mx-auto max-w-6xl px-4 py-4">
            <div className="bg-surface shadow-soft rounded-2xl border border-app p-3">
              <div className="flex flex-col">
                {NAV.map((n) => (
                  <a
                    key={n.href}
                    href={n.href}
                    onClick={() => setOpen(false)}
                    className="ring-soft rounded-xl px-3 py-3 text-sm font-medium text-[rgb(var(--text))] hover:bg-black/5"
                  >
                    {n.label}
                  </a>
                ))}

                <div className="mt-2 border-t border-app pt-2">
                  <Link
                    href="mailto:tmacdonald7@gmail.com"
                    onClick={() => setOpen(false)}
                    className="ring-soft block rounded-xl px-3 py-3 text-sm font-medium text-muted hover:bg-black/5"
                  >
                    Contact
                  </Link>
                </div>
              </div>
            </div>

            <div className="mt-3 text-center text-xs text-muted">
              Press <span className="font-semibold">Esc</span> to close
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
