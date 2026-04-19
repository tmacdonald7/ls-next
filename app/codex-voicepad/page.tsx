import type { Metadata } from "next";
import Image from "next/image";
import type { CSSProperties } from "react";

const quickStart = [
  "Install Codex Voice Pad",
  "Connect to Codex (CLI or VS Code extension)",
  "Hold key to speak",
  "Optional: enable auto-submit",
];

const features = [
  {
    title: "Speak Prompts",
    body: "Say what you want instead of typing every prompt by hand.",
  },
  {
    title: "Auto Submit",
    body: "Skip Enter and move straight from transcript to execution.",
  },
  {
    title: "Direct Routing",
    body: "Send the transcript to chat, terminal, or the active editor.",
  },
  {
    title: "Works in VS Code",
    body: "Fits the tools you already use instead of adding another environment.",
  },
  {
    title: "Low Latency",
    body: "Keep the speech-to-action loop short enough to stay in flow.",
  },
  {
    title: "Push-to-Talk",
    body: "Hold a key, speak, release, and keep moving.",
  },
];

const worksWith = ["Codex CLI", "Codex VS Code Extension", "Windows", "Linux"];

const useCases = [
  "Debug without breaking flow",
  "Rapid prompt iteration",
  "Refactor code on the fly",
  "Ask for explanations instantly",
];

const repoUrl = "https://github.com/tmacdonald7/codex-voice-pad";

export const metadata: Metadata = {
  title: "Codex Voice Pad | Lochside Studio",
  description:
    "Typing is slow. Codex Voice Pad brings local voice capture and fast routing into Codex workflows inside VS Code.",
};

export default function CodexVoicePadPage() {
  return (
    <main
      className="min-h-screen bg-app text-[rgb(var(--text))]"
      style={
        {
          "--bg": "12 14 18",
          "--surface": "18 21 27",
          "--text": "240 244 248",
          "--muted": "167 177 189",
          "--border": "42 48 58",
          "--accent": "71 192 161",
          "--accent2": "255 160 182",
          "--accent3": "175 166 255",
          "--shadow": "0 24px 80px rgba(0,0,0,0.38)",
          "--ring": "0 0 0 4px rgba(71, 192, 161, 0.18)",
        } as CSSProperties
      }
    >
      <div className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-0 top-0 h-[30rem] w-[30rem] rounded-full bg-[rgb(var(--accent))]/18 blur-3xl" />
          <div className="absolute right-[-8rem] top-20 h-[24rem] w-[24rem] rounded-full bg-[rgb(var(--accent3))]/16 blur-3xl" />
          <div className="absolute bottom-10 left-1/3 h-[18rem] w-[18rem] rounded-full bg-[rgb(var(--accent2))]/10 blur-3xl" />
          <div
            className="absolute inset-0 opacity-[0.08]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)",
              backgroundSize: "64px 64px",
            }}
          />
        </div>

        <section className="relative mx-auto max-w-6xl px-4 pb-14 pt-5 sm:px-6 sm:pb-20 sm:pt-6">
          <div className="p-2 sm:p-4">
            <div className="mx-auto mt-5 max-w-5xl">
              <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-black/15 px-4 py-2.5">
                <Image
                  src="/logo/codex-voicepad.svg"
                  alt="Codex Voice Pad mark"
                  width={34}
                  height={34}
                  className="h-8.5 w-8.5"
                />
                <span className="text-sm font-medium tracking-[0.16em] text-slate-300 uppercase">
                  Codex Voice Pad
                </span>
              </div>

              <h1 className="mt-6 max-w-4xl text-5xl font-semibold tracking-[-0.05em] text-white sm:text-7xl lg:text-[6rem]">
                <span className="block">Typing is slow.</span>
                <span className="mt-1 block text-[rgb(var(--accent2))]">
                  Speak to code instead.
                </span>
              </h1>
              <p className="mt-5 max-w-[46rem] text-lg leading-8 text-slate-200 sm:text-xl">
                Voice input for Codex inside VS Code. Record locally, transcribe
                fast, and route to chat, the CLI, or your editor with optional
                auto-submit so the thought-to-execution loop stays faster than
                typing.
              </p>

              <div className="mt-6 grid gap-3 text-left sm:grid-cols-2">
                <div className="rounded-[1.25rem] border border-white/10 bg-black/15 p-4">
                  <p className="text-[10px] uppercase tracking-[0.28em] text-[rgb(var(--accent2))]">
                    Problem
                  </p>
                  <p className="mt-2 text-base leading-7 text-muted">
                    Prompting an agent by keyboard is functional, but it is often
                    the slowest part of the loop when you already know what you
                    want to say.
                  </p>
                </div>

                <div className="rounded-[1.25rem] border border-white/10 bg-black/15 p-4">
                  <p className="text-[10px] uppercase tracking-[0.28em] text-[rgb(var(--accent))]">
                    Solution
                  </p>
                  <p className="mt-2 text-base leading-7 text-muted">
                    Codex Voice Pad adds local voice capture, direct routing, and
                    auto-submit so speaking can replace repetitive prompt typing.
                  </p>
                </div>
              </div>

              <div className="mt-8 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:justify-start">
                <a
                  href={repoUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="ring-soft inline-flex min-w-56 items-center justify-center rounded-full bg-[rgb(var(--accent2))] px-7 py-4 text-base font-semibold text-black shadow-[0_14px_40px_rgba(255,160,182,0.3)] transition hover:translate-y-[-1px] hover:opacity-95"
                >
                  Get the Codex Voice Pad Extension
                </a>
                <a
                  href={repoUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="ring-soft inline-flex min-w-56 items-center justify-center rounded-full border border-app px-7 py-4 text-base font-semibold text-white transition hover:bg-white/5"
                >
                  View on GitHub
                </a>
              </div>

              <div className="mt-6 max-w-4xl rounded-[1.5rem] border border-white/10 bg-black/15 px-5 py-5 text-left shadow-[0_18px_60px_rgba(0,0,0,0.2)]">
                <p className="text-[10px] uppercase tracking-[0.28em] text-[rgb(var(--accent2))]">
                  Why This Matters
                </p>
                <div className="mt-3 flex flex-col gap-4 sm:flex-row sm:items-center">
                  <img
                    src="https://avatars.githubusercontent.com/u/58493?v=4"
                    alt="Peter Steinberger"
                    width={72}
                    height={72}
                    className="h-[72px] w-[72px] rounded-2xl border border-white/10 object-cover"
                    loading="lazy"
                  />
                  <div className="min-w-0">
                    <blockquote className="text-lg font-semibold tracking-tight text-white sm:text-xl">
                      &ldquo;I don&apos;t write, I talk.&rdquo;
                    </blockquote>
                    <p className="mt-2 text-sm leading-6 text-muted">
                      <span className="font-medium text-slate-200">
                        Peter Steinberger
                      </span>{" "}
                      <span className="text-slate-300">
                        creator of OpenClaw
                      </span>
                      , the viral open-source AI agent that drew 2 million
                      visitors in a week and 100,000+ GitHub stars.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mx-auto mt-10 max-w-5xl">
              <div className="overflow-hidden rounded-[1.75rem] border border-white/10 bg-[#06080b] shadow-[0_30px_90px_rgba(0,0,0,0.45)]">
                <div className="flex items-center justify-between border-b border-white/10 px-4 py-3 text-xs text-muted">
                  <div className="flex items-center gap-2">
                    <span className="h-2.5 w-2.5 rounded-full bg-[rgb(var(--accent2))]" />
                    <span className="h-2.5 w-2.5 rounded-full bg-[rgb(var(--accent))]" />
                    <span className="h-2.5 w-2.5 rounded-full bg-[rgb(var(--accent3))]" />
                  </div>
                  <span>Speech -&gt; Codex -&gt; execution in real time</span>
                </div>

                <video
                  className="block aspect-video w-full bg-black"
                  controls
                  preload="metadata"
                  playsInline
                  poster="/logo/codex-voicepad.svg"
                >
                  <source src="/video/demo.mp4" type="video/mp4" />
                  Your browser does not support embedded video.
                </video>
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                {[
                  "Speak prompts",
                  "Route to chat, CLI, or editor",
                  "Windows + Linux",
                ].map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-slate-200"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="relative mx-auto grid max-w-6xl gap-6 px-4 pb-24 sm:px-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-[1.75rem] border border-app bg-surface p-6 shadow-soft backdrop-blur sm:p-8">
            <div className="text-sm uppercase tracking-[0.28em] text-[rgb(var(--accent2))]">
              Quick Start
            </div>
            <div className="mt-5 overflow-hidden rounded-2xl border border-white/10 bg-[#0a0d11]">
              <div className="border-b border-white/10 px-4 py-3 text-xs text-muted">
                voicepad.runbook
              </div>
              <ol className="space-y-3 px-4 py-5 font-mono text-sm text-slate-200">
                {quickStart.map((step, index) => (
                  <li key={step} className="flex gap-3">
                    <span className="text-[rgb(var(--accent))]">
                      {index + 1}.
                    </span>
                    <span>{step}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>

          <div className="rounded-[1.75rem] border border-app bg-surface p-6 shadow-soft backdrop-blur sm:p-8">
            <div className="text-sm uppercase tracking-[0.28em] text-[rgb(var(--accent3))]">
              Works With
            </div>
            <div className="mt-5 flex flex-wrap gap-3">
              {worksWith.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-100"
                >
                  {item}
                </span>
              ))}
            </div>

            <div className="mt-8">
              <div className="text-sm uppercase tracking-[0.28em] text-[rgb(var(--accent))]">
                Use Cases
              </div>
              <ul className="mt-4 space-y-3 text-sm text-muted sm:text-base">
                {useCases.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-1 h-2 w-2 rounded-full bg-[rgb(var(--accent))]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="relative mx-auto max-w-6xl px-4 pb-24 sm:px-6">
          <div className="rounded-[2rem] border border-app bg-surface p-6 shadow-soft backdrop-blur sm:p-8">
            <div className="flex items-end justify-between gap-4">
              <div>
                <p className="text-sm uppercase tracking-[0.32em] text-[rgb(var(--accent))]">
                  What It Does
                </p>
                <h2 className="mt-3 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                  Voice input built around a Codex workflow
                </h2>
              </div>
            </div>

            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {features.map((feature, index) => (
                <article
                  key={feature.title}
                  className="rounded-[1.5rem] border border-white/10 bg-black/15 p-5"
                >
                  <div className="flex items-center justify-between gap-3">
                    <h3 className="text-lg font-semibold text-white">
                      {feature.title}
                    </h3>
                    <span className="text-xs uppercase tracking-[0.24em] text-muted">
                      0{index + 1}
                    </span>
                  </div>
                  <p className="mt-3 text-sm leading-6 text-muted sm:text-base">
                    {feature.body}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="relative mx-auto max-w-4xl px-4 pb-24 text-center sm:px-6">
          <div className="rounded-[2rem] border border-app bg-surface px-6 py-12 shadow-soft backdrop-blur sm:px-8">
            <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-4xl">
              Speak the prompt. Route it. Keep coding.
            </h2>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href={repoUrl}
                target="_blank"
                rel="noreferrer"
                className="ring-soft inline-flex min-w-48 items-center justify-center rounded-full bg-[rgb(var(--accent))] px-6 py-3 text-sm font-semibold text-black transition hover:opacity-95"
              >
                Get the Codex Voice Pad Extension
              </a>
              <a
                href={repoUrl}
                target="_blank"
                rel="noreferrer"
                className="ring-soft inline-flex min-w-48 items-center justify-center rounded-full border border-app px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/5"
              >
                View on GitHub
              </a>
            </div>
          </div>
        </section>

        <footer className="relative border-t border-white/10 px-4 py-8 sm:px-6">
          <div className="mx-auto flex max-w-6xl flex-col gap-4 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-3">
              <Image
                src="/logo/codex-voicepad.svg"
                alt=""
                width={28}
                height={28}
                aria-hidden="true"
                className="h-7 w-7"
              />
              <p>
                Built by{" "}
                <a className="text-slate-200 hover:text-white" href="/">
                  Lochside Studio
                </a>
              </p>
            </div>
            <div className="flex items-center gap-4">
              <a
                className="ring-soft rounded-lg hover:text-white"
                href={repoUrl}
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
              <a className="ring-soft rounded-lg hover:text-white" href="#top">
                Back to top
              </a>
            </div>
          </div>
        </footer>
      </div>
    </main>
  );
}
