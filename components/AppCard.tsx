import Link from "next/link";
import { ArrowUpRight, Sparkles } from "lucide-react";
import type { AppItem } from "@/lib/data";

export function AppCard({ app }: { app: AppItem }) {
  return (
    <div className="bg-surface shadow-soft rounded-2xl border border-app p-6">
      <div className="flex items-start justify-between gap-3">
        <div>
          <div className="flex items-center gap-2">
            <h3 className="text-lg font-semibold tracking-tight">{app.name}</h3>
            {app.badge ? (
              <span className="rounded-full border border-app bg-app px-2 py-0.5 text-xs text-muted">
                {app.badge}
              </span>
            ) : null}
          </div>
          <p className="mt-2 text-sm leading-relaxed text-muted">
            {app.description}
          </p>
        </div>

        <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-app bg-app">
          <Sparkles className="h-5 w-5" />
        </div>
      </div>

      <div className="mt-5">
        <Link
          href={app.href}
          className="ring-soft inline-flex items-center gap-2 rounded-xl border border-app bg-app px-3 py-2 text-sm font-medium hover:opacity-90"
          target="_blank"
          rel="noreferrer"
        >
          Open app <ArrowUpRight className="h-4 w-4" />
        </Link>
      </div>
    </div>
  );
}
