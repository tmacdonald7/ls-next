import type { Metadata } from "next";
import {
  Ban,
  Bot,
  Gauge,
  CheckCheck,
  Hand,
  Mic,
  PencilLine,
  Rocket,
  Rows3,
  Replace,
  ScanSearch,
  TerminalSquare,
} from "lucide-react";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { VoicePromptForms } from "@/components/VoicePromptForms";
import { layout } from "@/lib/layout";

const quickStart = [
  "Install VoicePrompt for Agents",
  "Choose a target: Copilot, Codex, terminal, or editor",
  "Hold Space or tap R to record",
  "Pick paste-only, append, replace, or auto-submit",
];

const features = [
  {
    title: "Route to VS Code Targets",
    body: "Send transcripts into Copilot chat, the Codex extension, the active terminal, or the active editor without leaving VS Code.",
  },
  {
    title: "Paste, Append, or Replace",
    body: "Drop in a fresh prompt, append to the current draft, or replace the last version when you want to retry what you said.",
  },
  {
    title: "Auto Submit When It Fits",
    body: "Use paste-only when you want to review first, or auto-submit when you want the transcript to run immediately after capture.",
  },
  {
    title: "Built for One-Hand Use",
    body: "The demo workflow is designed around quick left-hand controls so you can record, cancel, switch targets, and keep moving.",
  },
  {
    title: "CLI-Friendly Workflow",
    body: "The terminal path is a first-class use case, especially for Codex CLI workflows where seeing the full execution trace matters.",
  },
  {
    title: "Still in Beta",
    body: "Some paths are still being improved, including auto-submit behavior in the Codex extension, and the product is actively looking for testers and feedback.",
  },
];

const worksWith = [
  "GitHub Copilot Chat",
  "Codex CLI",
  "Codex VS Code Extension",
  "Windows",
  "Linux",
];

const useCases = [
  "Talk to Copilot when VS Code has no native speech input",
  "Draft a prompt, then append or replace it before sending",
  "Send instructions directly into Codex CLI in the terminal",
  "Cancel a recording and retry without breaking flow",
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

const demoHighlights = [
  { icon: Hand, label: "Hold Space to record" },
  { icon: Mic, label: "Tap R to trigger" },
  { icon: Bot, label: "Copilot + Codex routing" },
  { icon: TerminalSquare, label: "Codex CLI in terminal" },
  { icon: PencilLine, label: "Paste-only mode" },
  { icon: Replace, label: "Append or replace" },
  { icon: CheckCheck, label: "Optional auto-submit" },
  { icon: Ban, label: "Cancel recording" },
  { icon: Rows3, label: "Active terminal or editor" },
  { icon: Hand, label: "One-hand controls" },
  { icon: TerminalSquare, label: "Q jumps to terminal" },
  { icon: Bot, label: "Windows + Linux workflows" },
];

const repoUrl = "https://github.com/tmacdonald7/voiceprompt-for-agents";

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
            <h1 className={`${layout.readable} text-5xl font-semibold tracking-[-0.05em] sm:text-7xl lg:text-[6rem]`}>
              <span className="block">Typing is slow.</span>
              <span className="mt-1 block text-[rgb(var(--accent))]">
                Speak to code instead.
              </span>
            </h1>
            <div className={`text-muted mt-5 ${layout.copy}`}>
              <p className="text-lg leading-8 sm:text-xl">
                <strong className="font-semibold text-[rgb(var(--text))]">
                  VoicePrompt for Agents
                </strong>{" "}
                helps developers reach agents faster, stay in flow longer, and
                move from idea to execution without typing every prompt by hand.
              </p>
            </div>

            <div className="mt-8 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:justify-start">
              <a
                href={repoUrl}
                target="_blank"
                rel="noreferrer"
                className="ring-soft inline-flex min-w-56 items-center justify-center rounded-full bg-[rgb(var(--accent))] px-7 py-4 text-base font-semibold text-[rgb(var(--accent-fg))] shadow-soft transition hover:translate-y-[-1px] hover:opacity-95"
              >
                Join the Beta
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
                What You Can Do
              </p>
              <div className="mt-6 grid gap-2 sm:grid-cols-2 xl:grid-cols-4">
                {demoHighlights.map((item) => (
                  <div
                    key={item.label}
                    className="flex items-center gap-2 rounded-lg border border-app px-3 py-2.5 text-sm text-muted"
                  >
                    <item.icon className="h-4 w-4 shrink-0 text-[rgb(var(--accent))]" />
                    <span>{item.label}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-10 grid gap-4 md:grid-cols-3">
              {benefitCards.map((item) => (
                <div
                  key={item.title}
                  className="flex items-start gap-3 border-t border-app pt-4"
                >
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

            <div className="mt-10 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:justify-start">
              <a
                href="#contact"
                className="ring-soft inline-flex min-w-56 items-center justify-center rounded-full border border-app bg-surface px-7 py-4 text-base font-semibold transition hover:border-[rgb(var(--accent))] hover:bg-app hover:text-[rgb(var(--text))] hover:shadow-soft"
              >
                Send Feedback
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

            <div className="mt-6 grid gap-3 text-left sm:grid-cols-2">
              <div className="rounded-[1.25rem] border border-app bg-surface p-4 shadow-soft">
                <p className="text-[10px] uppercase tracking-[0.28em] text-[rgb(var(--accent2))]">
                  Problem
                </p>
                <p className="mt-2 text-base leading-7 text-muted">
                  In Windows and Linux, VS Code does not give you native
                  speech-to-input for agent workflows, so talking to Copilot
                  or Codex still turns into typing by hand.
                </p>
              </div>

              <div className="rounded-[1.25rem] border border-app bg-surface p-4 shadow-soft">
                <p className="text-[10px] uppercase tracking-[0.28em] text-[rgb(var(--accent))]">
                  Solution
                </p>
                <p className="mt-2 text-base leading-7 text-muted">
                  VoicePrompt captures your speech locally, transcribes it
                  quickly, and sends it to the right target so speaking can
                  replace repetitive prompt typing.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section
          id="contact"
          className={`relative ${layout.container} ${layout.section}`}
        >
          <div className="rounded-[2rem] border border-app bg-surface px-6 py-8 shadow-soft backdrop-blur sm:px-8 sm:py-10">
              <p className="text-sm uppercase tracking-[0.32em] text-[rgb(var(--accent))]">
                Closed Beta
              </p>
              <h2 className="mt-3 max-w-3xl text-3xl font-semibold tracking-tight sm:text-4xl">
                Get early access if this would help you or your team ship faster.
              </h2>
              <p className="mt-4 max-w-3xl text-sm leading-7 text-muted sm:text-base">
                The beta is meant for developers and teams who work in VS Code
                and want a faster path from thought to prompt to execution.
                Request access, try it in a real workflow, and send feedback so
                the product improves around what actually helps people succeed.
              </p>
              <div className="mt-6 flex flex-wrap gap-3 text-sm text-muted">
                {[
                  "Stay in flow",
                  "Move faster from prompt to execution",
                  "Direct feedback to the builder",
                ].map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-app bg-app px-4 py-2"
                  >
                    {item}
                  </span>
                ))}
              </div>
              <VoicePromptForms />
            </div>
        </section>

        <section
          id="about"
          className={`relative ${layout.container} ${layout.section}`}
        >
          <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
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
          </div>
        </section>

        <section className={`relative ${layout.container} ${layout.section}`}>
          <div className="rounded-[2rem] border border-app bg-surface p-6 shadow-soft backdrop-blur sm:p-8">
            <div className="flex items-end justify-between gap-4">
              <div>
                <p className="text-sm uppercase tracking-[0.32em] text-[rgb(var(--accent))]">
                  What It Does
                </p>
                <h2 className={`mt-3 ${layout.h2}`}>
                  Voice input built around real VS Code agent workflows
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

        <Footer />
      </div>
    </main>
  );
}
