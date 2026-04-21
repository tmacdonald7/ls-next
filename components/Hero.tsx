import Link from "next/link";
import { ArrowDown, Mail } from "lucide-react";
import Image from "next/image";
import { layout } from "@/lib/layout";

function LochzillaMark() {
  return (
    <div
      className="pointer-events-none absolute -bottom-6 right-6 hidden select-none sm:block"
      aria-hidden="true"
    >
      <div className="rounded-2xl border border-app bg-surface px-3 py-2 text-xs text-muted shadow-soft">
        Lochzilla
      </div>
    </div>
  );
}

function HeroFigure({
  src,
  alt,
  side,
  size = "md",
  scale = 1,
}: {
  src: string;
  alt: string;
  side: "left" | "right";
  size?: "sm" | "md" | "lg";
  scale?: number;
}) {
  const isLeft = side === "left";

  const widthClass =
    size === "sm"
      ? "w-[220px] md:w-[290px]"
      : size === "lg"
        ? "w-[300px] md:w-[380px]"
        : "w-[260px] md:w-[340px]";

  const offsetClass = isLeft
    ? "-left-24 md:-left-36"
    : "-right-32 md:-right-44";

  // Fixed frame height so both figures share the same floor line.
  const frameHeightClass = "h-[340px] md:h-[420px]";

  return (
    <div
      className={[
        "pointer-events-none absolute bottom-0 hidden select-none sm:block",
        offsetClass,
      ].join(" ")}
      aria-hidden="true"
    >
      <div className={["relative", widthClass, frameHeightClass].join(" ")}>
        <div className="absolute inset-x-6 bottom-4 h-6 rounded-full bg-black/10 blur-xl" />

        <div
          className="absolute inset-x-0 bottom-0 origin-bottom"
          style={{ transform: `scale(${scale})` }}
        >
          <Image
            src={src}
            alt={alt}
            width={420}
            height={560}
            priority
            className={[
              "h-auto w-full object-contain",
              side === "right" ? "opacity-85" : "opacity-90",
            ].join(" ")}
          />
        </div>
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className={`${layout.container} py-16 sm:py-20`}>
        <div className="relative rounded-[2.5rem] border border-app bg-surface px-6 py-14 shadow-soft sm:px-10">
          <HeroFigure
            src="/hero/thomas2.webp"
            alt="Tom from Lochside Studio"
            side="left"
          />

          <HeroFigure
            src="/hero/brett.webp"
            alt="Brett Richardson from Lochside Studio"
            side="right"
            size="sm"
            scale={0.93}
          />

          <div className="relative mx-auto max-w-2xl text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-app bg-app px-3 py-1 text-xs text-muted">
              Lochside Studio / Internal-First Product Studio
            </div>

            <h1 className="text-3xl font-semibold tracking-tight sm:text-5xl">
              We build internal-first tools that help businesses leverage AI.
            </h1>

            <p className="mt-5 text-base leading-relaxed text-muted sm:text-lg">
              Every product starts as software we need inside our own companies,
              then gets refined into focused tools that remove friction, speed
              up execution, and work with modern AI systems in the real world.
            </p>

            <div className="mt-8 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-stretch">
              <a
                href="#apps"
                className="ring-soft inline-flex w-full items-center justify-center gap-2 rounded-2xl border border-app bg-[rgb(var(--accent))] px-5 py-3 text-sm font-semibold text-[rgb(var(--accent-fg))] hover:opacity-95 sm:flex-1"
              >
                View Apps <ArrowDown className="h-4 w-4" />
              </a>

              <Link
                href="#contact"
                className="ring-soft inline-flex w-full items-center justify-center gap-2 rounded-2xl border border-app bg-app px-5 py-3 text-sm font-semibold text-[rgb(var(--text))] hover:opacity-90 sm:flex-1"
              >
                Contact <Mail className="h-4 w-4" />
              </Link>
            </div>
          </div>

          <LochzillaMark />
        </div>
      </div>
    </section>
  );
}
