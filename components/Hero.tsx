import Link from "next/link";
import { ArrowDown, Mail } from "lucide-react";
import Image from "next/image";

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

  // Fixed frame height so both figures share the same “floor”
  const frameHeightClass = "h-[340px] md:h-[420px]";

  return (
    <div
      className={[
        "pointer-events-none absolute hidden select-none sm:block bottom-0",
        offsetClass,
      ].join(" ")}
      aria-hidden="true"
    >
      <div className={["relative", widthClass, frameHeightClass].join(" ")}>
        {/* soft grounding shadow */}
        <div className="absolute inset-x-6 bottom-4 h-6 rounded-full bg-black/10 blur-xl" />

        {/* Bottom-anchored image, scaled from the bottom so feet stay aligned */}
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
      <div className="mx-auto max-w-6xl px-4 py-16 sm:py-20">
        <div className="relative rounded-[2.5rem] border border-app bg-surface px-6 py-14 shadow-soft sm:px-10">
          {/* figures */}
          <HeroFigure
            src="/hero/thomas2.webp"
            alt="Tom – Lochside Studio"
            side="left"
          />

          <HeroFigure
            src="/hero/brett.webp"
            alt="Brett Richardson – Lochside Studio"
            side="right"
            size="sm"
            scale={0.93} // makes him read a bit shorter, BUT keeps bottom aligned
          />

          {/* center content */}
          <div className="relative mx-auto max-w-2xl text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-app bg-app px-3 py-1 text-xs text-muted">
              Lochside Studio / internal-first product studio
            </div>

            <h1 className="text-3xl font-semibold tracking-tight sm:text-5xl">
              We build tools that give humans leverage in an AI world.
            </h1>

            <p className="mt-5 text-base leading-relaxed text-muted sm:text-lg">
              Built and used by operators to run real businesses—then refined
              into software others can use.
            </p>

            <div className="mt-8 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
              <a
                href="#apps"
                className="ring-soft inline-flex items-center justify-center gap-2 rounded-2xl border border-app bg-[rgb(var(--accent))] px-5 py-3 text-sm font-semibold text-black hover:opacity-95"
              >
                View Apps <ArrowDown className="h-4 w-4" />
              </a>

              <Link
                href="#contact"
                className="ring-soft inline-flex items-center justify-center gap-2 rounded-2xl border border-app bg-app px-5 py-3 text-sm font-semibold text-[rgb(var(--text))] hover:opacity-90"
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
