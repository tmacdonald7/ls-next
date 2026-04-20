import type { Metadata } from "next";
import Image from "next/image";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

const quickStart = [
  "Install VoicePrompt for Agents",
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

const repoUrl = "https://github.com/tmacdonald7/voiceprompt-for-agents";

export const metadata: Metadata = {
  title: "VoicePrompt | Lochside Studio",
  description:
    "Typing is slow. VoicePrompt brings local voice capture and fast routing into agent workflows inside VS Code.",
};

export default function VoicePromptPage() {
  return (
    <main id="top" className="min-h-screen bg-app text-[rgb(var(--text))]">
      <div className="relative overflow-hidden">
        <Header />

        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-0 top-0 h-[30rem] w-[30rem] rounded-full bg-[rgb(var(--accent))]/12 blur-3xl" />
          <div className="absolute right-[-8rem] top-20 h-[24rem] w-[24rem] rounded-full bg-[rgb(var(--accent3))]/12 blur-3xl" />
          <div className="absolute bottom-10 left-1/3 h-[18rem] w-[18rem] rounded-full bg-[rgb(var(--accent))]/10 blur-3xl" />
          <div
            className="absolute inset-0 opacity-[0.05]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(18,24,31,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(18,24,31,0.06) 1px, transparent 1px)",
              backgroundSize: "64px 64px",
            }}
          />
        </div>

        <section
          id="apps"
          className="relative mx-auto max-w-6xl px-4 pb-14 pt-5 sm:px-6 sm:pb-20 sm:pt-6"
        >
          <div className="p-2 sm:p-4">
            <div className="mx-auto mt-5 max-w-5xl">
              <h1 className="max-w-4xl text-5xl font-semibold tracking-[-0.05em] sm:text-7xl lg:text-[6rem]">
                <span className="block">Typing is slow.</span>
                <span className="mt-1 block text-[rgb(var(--accent))]">
                  Speak to code instead.
                </span>
              </h1>
              <div className="text-muted mt-5 max-w-[46rem]">
                <p className="text-lg leading-8 sm:text-xl">
                  <strong className="font-semibold text-[rgb(var(--text))]">
                    VoicePrompt
                  </strong>{" "}
                  enables voice input for agents inside VS Code.
                </p>
                <p className="mt-2 text-base leading-7 sm:text-lg">
                  Record locally, transcribe fast, and route to chat, the CLI,
                  or your editor with optional auto-submit so the
                  thought-to-execution loop stays faster than typing.
                </p>
              </div>

              <div className="mt-6 grid gap-3 text-left sm:grid-cols-2">
                <div className="rounded-[1.25rem] border border-app bg-surface p-4 shadow-soft">
                  <p className="text-[10px] uppercase tracking-[0.28em] text-[rgb(var(--accent2))]">
                    Problem
                  </p>
                  <p className="mt-2 text-base leading-7 text-muted">
                    Prompting an agent by keyboard is functional, but it is often
                    the slowest part of the loop when you already know what you
                    want to say.
                  </p>
                </div>

                <div className="rounded-[1.25rem] border border-app bg-surface p-4 shadow-soft">
                  <p className="text-[10px] uppercase tracking-[0.28em] text-[rgb(var(--accent))]">
                    Solution
                  </p>
                  <p className="mt-2 text-base leading-7 text-muted">
                    VoicePrompt adds local voice capture, direct routing, and
                    auto-submit so speaking can replace repetitive prompt typing.
                  </p>
                </div>
              </div>

              <div className="mt-8 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:justify-start">
                <a
                  href={repoUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="ring-soft inline-flex min-w-56 items-center justify-center rounded-full bg-[rgb(var(--accent))] px-7 py-4 text-base font-semibold text-[rgb(var(--accent-fg))] shadow-soft transition hover:translate-y-[-1px] hover:opacity-95"
                >
                  Get the VoicePrompt for Agents Extension
                </a>
                <a
                  href={repoUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="ring-soft inline-flex min-w-56 items-center justify-center rounded-full border border-app bg-surface px-7 py-4 text-base font-semibold transition hover:border-[rgb(var(--accent))] hover:bg-app hover:text-[rgb(var(--text))] hover:shadow-soft"
                >
                  View on GitHub
                </a>
              </div>

              <div className="mt-6 max-w-4xl rounded-[1.5rem] border border-app bg-surface px-5 py-5 text-left shadow-soft">
                <p className="text-[10px] uppercase tracking-[0.28em] text-[rgb(var(--accent))]">
                  Why This Matters
                </p>
                <div className="mt-3 flex flex-col gap-4 sm:flex-row sm:items-center">
                  <img
                    src="https://avatars.githubusercontent.com/u/58493?v=4"
                    alt="Peter Steinberger"
                    width={72}
                    height={72}
                    className="h-[72px] w-[72px] rounded-2xl border border-app object-cover"
                    loading="lazy"
                  />
                  <div className="min-w-0">
                    <blockquote className="text-lg font-semibold tracking-tight sm:text-xl">
                      &ldquo;I don&apos;t write, I talk.&rdquo;
                    </blockquote>
                    <p className="mt-2 text-sm leading-6 text-muted">
                      <span className="font-medium">Peter Steinberger</span>{" "}
                      <span>creator of OpenClaw</span>
                      , the viral open-source AI agent that drew 2 million
                      visitors in a week and 100,000+ GitHub stars.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mx-auto mt-10 max-w-5xl">
              <div className="overflow-hidden rounded-[1.75rem] border border-app bg-surface shadow-soft">
                <div className="flex items-center justify-between border-b border-app px-4 py-3 text-xs text-muted">
                  <div className="flex items-center gap-2">
                    <span className="h-2.5 w-2.5 rounded-full bg-[rgb(var(--accent))]" />
                    <span className="h-2.5 w-2.5 rounded-full bg-[rgb(var(--accent))]" />
                    <span className="h-2.5 w-2.5 rounded-full bg-[rgb(var(--accent3))]" />
                  </div>
                  <span>Speech -&gt; Codex -&gt; execution in real time</span>
                </div>

                <video
                  className="block aspect-video w-full bg-app"
                  controls
                  preload="metadata"
                  playsInline
                  poster="/logo/voiceprompt.svg"
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
                    className="rounded-full border border-app bg-surface px-3 py-1.5 text-xs shadow-soft"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section
          id="about"
          className="relative mx-auto grid max-w-6xl gap-6 px-4 pb-24 sm:px-6 lg:grid-cols-[1.1fr_0.9fr]"
        >
          <div className="rounded-[1.75rem] border border-app bg-surface p-6 shadow-soft backdrop-blur sm:p-8">
            <div className="text-sm uppercase tracking-[0.28em] text-[rgb(var(--accent))]">
              Quick Start
            </div>
            <div className="mt-5 overflow-hidden rounded-2xl border border-app bg-app">
              <div className="border-b border-app px-4 py-3 text-xs text-muted">
                voiceprompt.runbook
              </div>
              <ol className="space-y-3 px-4 py-5 font-mono text-sm">
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

          <div
            id="team"
            className="rounded-[1.75rem] border border-app bg-surface p-6 shadow-soft backdrop-blur sm:p-8"
          >
            <div className="text-sm uppercase tracking-[0.28em] text-[rgb(var(--accent3))]">
              Works With
            </div>
            <div className="mt-5 flex flex-wrap gap-3">
              {worksWith.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-app bg-app px-4 py-2 text-sm"
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
                <h2 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
                  Voice input built around a Codex workflow
                </h2>
              </div>
            </div>

            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {features.map((feature, index) => (
                <article
                  key={feature.title}
                  className="rounded-[1.5rem] border border-app bg-app p-5"
                >
                  <div className="flex items-center justify-between gap-3">
                    <h3 className="text-lg font-semibold">{feature.title}</h3>
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

        <section
          id="contact"
          className="relative mx-auto max-w-4xl px-4 pb-24 text-center sm:px-6"
        >
          <div className="rounded-[2rem] border border-app bg-surface px-6 py-12 shadow-soft backdrop-blur sm:px-8">
            <h2 className="text-2xl font-semibold tracking-tight sm:text-4xl">
              Speak the prompt. Route it. Keep coding.
            </h2>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href={repoUrl}
                target="_blank"
                rel="noreferrer"
                className="ring-soft inline-flex min-w-48 items-center justify-center rounded-full bg-[rgb(var(--accent))] px-6 py-3 text-sm font-semibold text-[rgb(var(--accent-fg))] transition hover:opacity-95"
              >
                Get the VoicePrompt for Agents Extension
              </a>
              <a
                href={repoUrl}
                target="_blank"
                rel="noreferrer"
                className="ring-soft inline-flex min-w-48 items-center justify-center rounded-full border border-app bg-app px-6 py-3 text-sm font-semibold transition hover:border-[rgb(var(--accent))] hover:bg-surface hover:text-[rgb(var(--text))] hover:shadow-soft"
              >
                View on GitHub
              </a>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </main>
  );
}
