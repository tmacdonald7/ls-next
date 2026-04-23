import type { Metadata } from "next";
import {
  Gauge,
  CheckCheck,
  Mic,
  Rocket,
  Rows3,
  ScanSearch,
} from "lucide-react";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { layout } from "@/lib/layout";

const quickStart = [
  {
    step: "01",
    title: "Find VoicePrompt",
    body: "Open the Extensions view in VS Code and search for VoicePrompt for Agents.",
  },
  {
    step: "02",
    title: "Install the Extension",
    body: "Install it from the Marketplace, then open the VoicePrompt panel inside VS Code.",
  },
  {
    step: "03",
    title: "Start Speaking",
    body: "Choose your transcription backend, hold Space or tap R, and route the transcript where you work.",
  },
];

const features = [
  {
    title: "Talk to the Agent, Not the Input Box",
    body: "Say the prompt, correction, or follow-up out loud instead of breaking your flow to type every next instruction by hand.",
  },
  {
    title: "Stay in Codex, Copilot, or Terminal Loops",
    body: "Route transcripts straight into the surfaces where agent-driven work already happens instead of copying text between tools.",
  },
  {
    title: "Keep the Loop Moving After You Speak",
    body: "Review, append, replace, auto-submit, or send approval keys from the panel so the workflow keeps moving after capture.",
  },
  {
    title: "Built for Real Developer Setups",
    body: "Use local capture, practical fallbacks, OpenAI, or your own command backend without rebuilding your environment around a voice toy.",
  },
];

const worksWith = [
  "GitHub Copilot",
  "Codex",
  "VS Code",
  "OpenAI",
  "Windows",
  "Linux",
  "macOS",
];

const benefitCards = [
  {
    icon: Gauge,
    title: "Stay in flow longer",
    body: "Less typing. Less context switching.",
  },
  {
    icon: Rocket,
    title: "Move from idea to execution faster",
    body: "Get prompts into action quickly.",
  },
  {
    icon: ScanSearch,
    title: "Make agents easier to use all day",
    body: "Use agents more naturally in real work.",
  },
];

const workflowCards = [
  {
    icon: Mic,
    eyebrow: "Capture",
    title: "Record without leaving VS Code",
    body: "Start with tap-to-record or hold-to-talk, keep the audio local when a native recorder exists, and fall back cleanly when it does not.",
    bullets: [
      "Tap R or hold Space to speak",
      "Cancel and retry without breaking flow",
      "Windows and Linux local capture, with browser fallback when needed",
    ],
  },
  {
    icon: Rows3,
    eyebrow: "Route",
    title: "Send the transcript where work happens",
    body: "VoicePrompt is built around the surfaces developers actually use during agent work instead of making you copy text around by hand.",
    bullets: [
      "Route into Copilot or Codex chat",
      "Send directly to the active terminal or Codex CLI",
      "Paste into the active editor when that is the right target",
    ],
  },
  {
    icon: CheckCheck,
    eyebrow: "Control",
    title: "Keep momentum after capture",
    body: "Review when you want control, or keep things moving with draft management, auto-submit, and terminal approval shortcuts.",
    bullets: [
      "Append, replace, or clear the current draft",
      "Choose paste-only or optional auto-submit",
      "Use Y, N, 1, 2, 3, Enter, and T from the panel",
    ],
  },
];

const trustCards = [
  {
    title: "Local Capture First",
    body: "VoicePrompt records locally when a native recorder is available and only falls back when the machine needs it.",
  },
  {
    title: "Backend Choice Stays Yours",
    body: "Use the OpenAI transcription path or point the extension at your own command-based backend.",
  },
  {
    title: "Current Build, Clear Limits",
    body: "This release is built for VS Code chat and terminal workflows first, with practical guardrails instead of fake perfection.",
  },
];

const marketplaceUrl =
  "https://marketplace.visualstudio.com/items?itemName=tmacdonald7.voiceprompt-for-agents";

export const metadata: Metadata = {
  title: "VoicePrompt | Lochside Studio",
  description:
    "VoicePrompt for Agents brings speech-to-input to VS Code so you can talk to Copilot, Codex, your terminal, or your editor faster than typing.",
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
          className={`relative ${layout.container} pb-14 pt-5 sm:pb-20 sm:pt-6`}
        >
          <div className="mt-5">
            <h1 className="w-full max-w-none text-5xl font-semibold tracking-[-0.05em] sm:text-7xl lg:text-[6rem]">
              <span className="block">
                <span>THE BEST </span>
                <span>Voice Input</span>
              </span>
              <span className="mt-1 block text-[rgb(var(--accent))]">
                for AI Coding Workflows
              </span>
            </h1>
            <div className={`text-muted mt-5 ${layout.copy}`}>
              <p className="text-lg leading-8 sm:text-xl">
                <strong className="font-semibold text-[rgb(var(--text))]">
                  VoicePrompt for Agents
                </strong>{" "}
                is the fastest way to get spoken prompts into Codex,
                Copilot, and terminal workflows inside VS Code without turning
                every next instruction into another typing task.
              </p>
            </div>

            <div className="mt-4 max-w-3xl text-sm leading-7 text-muted sm:text-base">
              Built from real terminal-first and chat-first agent workflows,
              not from a generic dictation brief.
            </div>

            <div className="mt-8 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:justify-start">
              <a
                href={marketplaceUrl}
                target="_blank"
                rel="noreferrer"
                className="ring-soft inline-flex min-w-56 items-center justify-center rounded-full border border-[rgba(18,24,31,0.48)] bg-[linear-gradient(180deg,rgba(223,250,241,1)_0%,rgba(162,231,207,1)_100%)] px-7 py-4 text-base font-semibold text-[rgb(var(--text))] shadow-[inset_0_1px_0_rgba(255,255,255,0.88),inset_0_-1px_0_rgba(23,92,73,0.22),0_4px_0_rgba(23,92,73,0.62)] transition duration-150 hover:-translate-y-px hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.92),inset_0_-1px_0_rgba(23,92,73,0.24),0_5px_0_rgba(23,92,73,0.66)] active:translate-y-[3px] active:shadow-[inset_0_1px_0_rgba(255,255,255,0.8),inset_0_-1px_0_rgba(23,92,73,0.24),0_1px_0_rgba(23,92,73,0.52)]"
              >
                Install in VS Code
              </a>
            </div>

            <div className="mt-6 rounded-[1.5rem] border border-app bg-surface px-5 py-5 text-left shadow-soft">
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

            <div className="mt-10 grid gap-4 md:grid-cols-3">
              {benefitCards.map((item) => (
                <div key={item.title} className="flex items-start gap-3">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-app bg-app">
                    <item.icon className="h-4 w-4 text-[rgb(var(--accent))]" />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold tracking-tight">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-sm leading-6 text-muted">
                      {item.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div id="demo" className="mt-10">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[rgb(var(--accent))]">
                Watch the Demo
              </p>
              <div className="mt-4 overflow-hidden rounded-[1.75rem] shadow-soft">
                <div className="relative aspect-video w-full bg-app">
                  <iframe
                    className="absolute inset-0 h-full w-full border-0"
                    src="https://customer-8urn5752m36lkzxs.cloudflarestream.com/3c0189295c9978ff80eb06e972d2562c/iframe?preload=auto"
                    title="VoicePrompt demo video"
                    allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </div>
            </div>

            <div className="mt-12">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[rgb(var(--accent))]">
                Why It Feels Faster
              </p>
              <div className="mt-3 max-w-3xl text-sm leading-7 text-muted sm:text-base">
                The point is not voice for its own sake. The point is removing
                the prompt-typing bottleneck in the parts of development where
                you already think faster than you type.
              </div>
              <div className="mt-6 grid gap-4 md:grid-cols-2">
                {features.map((feature) => (
                  <article
                    key={feature.title}
                    className="rounded-[1.5rem] border border-app bg-surface p-5 shadow-soft"
                  >
                    <div className="flex items-center gap-3">
                      <h3 className="text-lg font-semibold">{feature.title}</h3>
                    </div>
                    <p className="mt-3 text-sm leading-6 text-muted sm:text-base">
                      {feature.body}
                    </p>
                  </article>
                ))}
              </div>
            </div>

            <div className="mt-12">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[rgb(var(--accent3))]">
                Works With
              </p>
              <div className="mt-3 max-w-3xl text-sm leading-7 text-muted sm:text-base">
                Built around the developer surfaces and platforms where voice
                input actually matters.
              </div>
              <div className="mt-6 flex flex-wrap gap-3">
                {worksWith.map((item) => (
                  <span
                    key={item}
                    className="inline-flex items-center rounded-full border border-app bg-surface px-4 py-2.5 text-sm font-medium text-[rgb(var(--text))] shadow-soft"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-12">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[rgb(var(--accent))]">
                Quick Start
              </p>
              <div className="mx-auto mt-5 max-w-4xl">
                <ol className="space-y-6">
                  {quickStart.map((item) => (
                    <li
                      key={item.step}
                      className="flex items-start gap-5 border-b border-app pb-6 text-left last:border-b-0 last:pb-0"
                    >
                      <div className="w-16 shrink-0 font-mono text-3xl font-semibold leading-none text-[rgb(var(--accent))] sm:w-20 sm:text-4xl">
                        {item.step}
                      </div>
                      <div className="min-w-0 pt-0.5">
                        <h3 className="text-xl font-semibold tracking-tight sm:text-2xl">
                          {item.title}
                        </h3>
                        <p className="mt-2 text-base leading-7 text-muted sm:text-lg">
                          {item.body}
                        </p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
            </div>

            <div className="mt-12">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[rgb(var(--accent))]">
                How It Works
              </p>
              <div className="mt-3 max-w-3xl text-sm leading-7 text-muted sm:text-base">
                Three pieces make the workflow work: capture speech fast, route
                it into the right place, and keep the next action just as fast.
              </div>
              <div className="mt-6 grid gap-4 lg:grid-cols-3">
                {workflowCards.map((item) => (
                  <article
                    key={item.title}
                    className="rounded-[1.5rem] border border-app bg-surface p-5 shadow-soft"
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-app bg-app">
                        <item.icon className="h-4 w-4 text-[rgb(var(--accent))]" />
                      </div>
                      <div>
                        <p className="text-[10px] uppercase tracking-[0.28em] text-[rgb(var(--accent))]">
                          {item.eyebrow}
                        </p>
                        <h3 className="mt-1 text-lg font-semibold tracking-tight">
                          {item.title}
                        </h3>
                      </div>
                    </div>
                    <p className="mt-4 text-sm leading-6 text-muted sm:text-base">
                      {item.body}
                    </p>
                    <ul className="mt-4 space-y-3 text-sm text-muted">
                      {item.bullets.map((bullet) => (
                        <li key={bullet} className="flex items-start gap-3">
                          <span className="mt-1.5 h-2 w-2 rounded-full bg-[rgb(var(--accent))]" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </article>
                ))}
              </div>
            </div>

          </div>
        </section>

        <section className={`relative ${layout.container} ${layout.section}`}>
          <div className="rounded-[2rem] border border-app bg-surface p-6 shadow-soft backdrop-blur sm:p-8">
            <div className="flex items-end justify-between gap-4">
              <div>
                <p className="text-sm uppercase tracking-[0.32em] text-[rgb(var(--accent))]">
                  Trust and Limits
                </p>
                <h2 className={`mt-3 ${layout.h2}`}>
                  Clear enough to install, honest enough to trust
                </h2>
              </div>
            </div>

            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {trustCards.map((item) => (
                <article
                  key={item.title}
                  className="rounded-[1.5rem] border border-app bg-app p-5"
                >
                  <h3 className="text-lg font-semibold tracking-tight">
                    {item.title}
                  </h3>
                  <p className="mt-4 text-sm leading-6 text-muted sm:text-base">
                    {item.body}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </main>
  );
}
