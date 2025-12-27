import Link from "next/link";
import { ArrowDown, Mail } from "lucide-react";

function Silhouette({
  side,
  label,
}: {
  side: "left" | "right";
  label: string;
}) {
  const isLeft = side === "left";
  return (
    <div
      className={[
        "pointer-events-none absolute bottom-0 hidden w-[260px] select-none sm:block md:w-[320px]",
        isLeft ? "-left-10 md:-left-16" : "-right-10 md:-right-16",
      ].join(" ")}
      aria-hidden="true"
    >
      <div className="relative">
        <div
          className={[
            "h-[340px] w-full rounded-[3rem] border border-app bg-surface shadow-soft",
            "opacity-70 blur-[0px]",
          ].join(" ")}
        />
        <div className="absolute inset-0 flex items-end justify-center pb-6">
          <div className="w-[72%] rounded-[2.5rem] border border-app bg-app px-4 py-3 text-center text-xs text-muted">
            Serious anime silhouette placeholder:
            <div className="mt-1 font-semibold text-[rgb(var(--text))]">
              {label}
            </div>
          </div>
        </div>

        {/* “serious face” vibe: minimal cut lines */}
        <div className="absolute left-1/2 top-16 h-32 w-32 -translate-x-1/2 rounded-full border border-app bg-app opacity-70" />
        <div className="absolute left-1/2 top-28 h-2 w-14 -translate-x-1/2 rounded-full bg-[rgb(var(--text))] opacity-20" />
        <div className="absolute left-1/2 top-36 h-2 w-14 -translate-x-1/2 rounded-full bg-[rgb(var(--text))] opacity-20" />
      </div>
    </div>
  );
}

function LochzillaMark() {
  return (
    <div
      className="pointer-events-none absolute -bottom-6 right-6 hidden select-none sm:block"
      aria-hidden="true"
    >
      <div className="rounded-2xl border border-app bg-surface px-3 py-2 text-xs text-muted shadow-soft">
        🦖 <span className="ml-1">Lochzilla</span>
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:py-20">
        <div className="relative rounded-[2.5rem] border border-app bg-surface px-6 py-14 shadow-soft sm:px-10">
          {/* silhouettes */}
          <Silhouette side="left" label="Tom (placeholder)" />
          <Silhouette side="right" label="Brett (placeholder)" />

          {/* center content */}
          <div className="relative mx-auto max-w-2xl text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-app bg-app px-3 py-1 text-xs text-muted">
              Lochside Studio / internal-first product studio
            </div>

            <h1 className="text-3xl font-semibold tracking-tight sm:text-5xl">
              We build tools that give humans leverage in an AI world.
            </h1>

            <p className="mt-5 text-base leading-relaxed text-muted sm:text-lg">
              Built and used by operators to run real businesses—then refined into
              software others can use.
            </p>

            <div className="mt-8 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
              <a
                href="#apps"
                className="ring-soft inline-flex items-center justify-center gap-2 rounded-2xl border border-app bg-[rgb(var(--accent))] px-5 py-3 text-sm font-semibold text-black hover:opacity-95"
              >
                View Apps <ArrowDown className="h-4 w-4" />
              </a>

              <Link
                href="mailto:tmacdonald7@gmail.com"
                className="ring-soft inline-flex items-center justify-center gap-2 rounded-2xl border border-app bg-app px-5 py-3 text-sm font-semibold hover:opacity-90"
              >
                Contact <Mail className="h-4 w-4" />
              </Link>
            </div>

            <p className="mt-6 text-xs text-muted">
              This is a hub—not a funnel. Taste, clarity, execution.
            </p>
          </div>

          {/* small decorative mascot */}
          <LochzillaMark />
        </div>
      </div>
    </section>
  );
}
