import Link from "next/link";
import {
  ArrowUpRight,
  Bot,
  Camera,
  Mic,
  Play,
  Sparkles,
} from "lucide-react";
import type { AppItem } from "@/lib/data";

export function AppCard({ app }: { app: AppItem }) {
  const isClickable = app.available !== false && Boolean(app.href);
  const isExternal = isClickable && app.href!.startsWith("http");
  const ctaLabel = app.ctaLabel ?? (isClickable ? "Open app" : "Coming soon");
  const iconMap = {
    mic: Mic,
    camera: Camera,
    play: Play,
    bot: Bot,
  } as const;
  const Icon = app.icon ? iconMap[app.icon] : Sparkles;
  const badgeTone =
    app.state === "public-beta"
      ? "border-[rgb(var(--accent))]/35 bg-[rgb(var(--accent))]/12 text-[rgb(var(--accent))]"
      : app.state === "private-beta"
        ? "border-[rgb(var(--accent2))]/35 bg-[rgb(var(--accent2))]/14 text-[rgb(var(--text))]"
        : "border-app bg-app text-muted";

  const content = (
    <>
      <div className="flex items-start justify-between gap-3">
        <div>
          <div className="flex items-center gap-2">
            <h3 className="text-lg font-semibold tracking-tight">{app.name}</h3>
            {app.badge ? (
              <span
                className={[
                  "rounded-full border px-2 py-0.5 text-xs font-medium",
                  badgeTone,
                ].join(" ")}
              >
                {app.badge}
              </span>
            ) : null}
          </div>
          <p className="mt-2 text-sm leading-relaxed text-muted">
            {app.description}
          </p>
        </div>

        <div
          className={[
            "flex h-10 w-10 shrink-0 items-center justify-center rounded-full border transition",
            isClickable
              ? "border-app bg-app group-hover:border-[rgb(var(--accent))] group-hover:text-[rgb(var(--accent))]"
              : "border-app bg-app/70 text-muted",
          ].join(" ")}
        >
          <Icon className="h-5 w-5" />
        </div>
      </div>

      <div className="mt-5 flex items-center justify-between gap-4">
        <div
          className={[
            "inline-flex items-center gap-2 rounded-xl border px-3 py-2 text-sm font-medium transition",
            isClickable
              ? "border-app bg-app group-hover:border-[rgb(var(--accent))] group-hover:bg-surface"
              : "border-app bg-app/70 text-muted opacity-75",
          ].join(" ")}
          aria-hidden="true"
        >
          {ctaLabel}
          {isClickable ? <ArrowUpRight className="h-4 w-4" /> : null}
        </div>
      </div>
    </>
  );

  if (isClickable) {
    return (
      <Link
        href={app.href!}
        target={isExternal ? "_blank" : undefined}
        rel={isExternal ? "noreferrer" : undefined}
        className="group ring-soft block translate-y-0 transform-gpu cursor-pointer rounded-2xl border border-[rgb(var(--border))] bg-surface p-6 shadow-soft transition-[transform,border-color,background-color,box-shadow] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-0.5 hover:border-[rgb(var(--accent))] hover:bg-[rgba(var(--surface),0.98)] hover:shadow-[0_0_0_2px_rgba(71,192,161,0.42),0_16px_40px_rgba(71,192,161,0.12)]"
      >
        {content}
      </Link>
    );
  }

  return (
    <div className="group rounded-2xl border border-app bg-[rgba(var(--surface),0.82)] p-6">
      {content}
    </div>
  );
}
