"use client";

import { useState } from "react";

type FormStatus = "idle" | "sending" | "sent" | "error";

function encodeForm(formData: FormData) {
  const params = new URLSearchParams();

  for (const [key, value] of formData.entries()) {
    params.append(key, String(value));
  }

  return params.toString();
}

function FormNote({ status }: { status: FormStatus }) {
  if (status === "sent") {
    return (
      <p className="text-xs text-[rgb(var(--accent))]">
        Received. This goes to <span className="font-medium">hello@lochsidestudio.com</span>.
      </p>
    );
  }

  if (status === "error") {
    return (
      <p className="text-xs text-muted">
        Something went wrong. Please try again.
      </p>
    );
  }

  return (
    <p className="text-xs text-muted">
      Submissions go to <span className="font-medium">hello@lochsidestudio.com</span>.
    </p>
  );
}

export function VoicePromptForms() {
  const [betaStatus, setBetaStatus] = useState<FormStatus>("idle");
  const [feedbackStatus, setFeedbackStatus] = useState<FormStatus>("idle");

  async function submitForm(
    e: React.FormEvent<HTMLFormElement>,
    setStatus: React.Dispatch<React.SetStateAction<FormStatus>>
  ) {
    e.preventDefault();
    setStatus("sending");

    try {
      const form = e.currentTarget;
      const formData = new FormData(form);

      const res = await fetch("/__forms.html", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encodeForm(formData),
      });

      if (!res.ok) throw new Error(`HTTP ${res.status}`);

      setStatus("sent");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  const fieldClassName =
    "w-full rounded-2xl border border-app bg-app px-4 py-3 text-[rgb(var(--text))] placeholder:text-muted ring-soft";

  return (
    <div className="mt-10 grid gap-6 lg:grid-cols-2">
      <section className="rounded-[1.75rem] border border-app bg-app p-6 text-left shadow-soft sm:p-7">
        <p className="text-sm uppercase tracking-[0.28em] text-[rgb(var(--accent))]">
          Request Beta Access
        </p>
        <h3 className="mt-3 text-2xl font-semibold tracking-tight">
          Closed beta for developers and teams using VS Code.
        </h3>
        <p className="mt-3 text-sm leading-7 text-muted sm:text-base">
          Request access here. Installs are handled manually for now so you can
          get the right build, test it in a real workflow, and stay in direct
          contact while the product is still being tightened.
        </p>

        <form
          name="voiceprompt-beta-access"
          method="POST"
          onSubmit={(e) => submitForm(e, setBetaStatus)}
          className="mt-6 grid gap-4"
        >
          <input type="hidden" name="form-name" value="voiceprompt-beta-access" />

          <p className="hidden">
            <label>
              Do not fill this out: <input name="bot-field" />
            </label>
          </p>

          <div className="grid gap-2">
            <label className="text-sm font-medium" htmlFor="beta-name">
              Name
            </label>
            <input
              id="beta-name"
              name="name"
              required
              className={fieldClassName}
              placeholder="Your name"
            />
          </div>

          <div className="grid gap-2">
            <label className="text-sm font-medium" htmlFor="beta-email">
              Email
            </label>
            <input
              id="beta-email"
              name="email"
              type="email"
              required
              className={fieldClassName}
              placeholder="you@company.com"
            />
          </div>

          <div className="grid gap-2">
            <label className="text-sm font-medium" htmlFor="beta-company">
              Company or Team
            </label>
            <input
              id="beta-company"
              name="company_or_team"
              className={fieldClassName}
              placeholder="Optional"
            />
          </div>

          <div className="grid gap-2">
            <label className="text-sm font-medium" htmlFor="beta-setup">
              Primary Setup
            </label>
            <select
              id="beta-setup"
              name="primary_setup"
              required
              className={fieldClassName}
              defaultValue=""
            >
              <option value="" disabled>
                Choose one
              </option>
              <option value="Windows + Copilot">Windows + Copilot</option>
              <option value="Windows + Codex Extension">
                Windows + Codex Extension
              </option>
              <option value="Windows + Codex CLI">Windows + Codex CLI</option>
              <option value="Linux + Codex CLI">Linux + Codex CLI</option>
              <option value="Mixed / team environment">Mixed / team environment</option>
            </select>
          </div>

          <div className="grid gap-2">
            <label className="text-sm font-medium" htmlFor="beta-use-case">
              How would you use it?
            </label>
            <textarea
              id="beta-use-case"
              name="use_case"
              required
              rows={5}
              className={fieldClassName}
              placeholder="What workflow do you want to test?"
            />
          </div>

          <button
            type="submit"
            disabled={betaStatus === "sending"}
            className="inline-flex items-center justify-center rounded-2xl border border-app bg-[rgb(var(--accent))] px-5 py-3 text-sm font-semibold text-[rgb(var(--accent-fg))] ring-soft hover:opacity-95 disabled:opacity-60"
          >
            {betaStatus === "sending" ? "Sending..." : "Request Access"}
          </button>

          <FormNote status={betaStatus} />
        </form>
      </section>

      <section className="rounded-[1.75rem] border border-app bg-surface p-6 text-left shadow-soft sm:p-7">
        <p className="text-sm uppercase tracking-[0.28em] text-[rgb(var(--accent3))]">
          Send Feedback
        </p>
        <h3 className="mt-3 text-2xl font-semibold tracking-tight">
          Tell us what saved time, what broke, and what should change.
        </h3>
        <p className="mt-3 text-sm leading-7 text-muted sm:text-base">
          Use this whether you are testing solo or sharing it around a team.
          The goal right now is simple: find friction fast and improve the
          parts that help developers execute better.
        </p>

        <form
          name="voiceprompt-feedback"
          method="POST"
          onSubmit={(e) => submitForm(e, setFeedbackStatus)}
          className="mt-6 grid gap-4"
        >
          <input type="hidden" name="form-name" value="voiceprompt-feedback" />

          <p className="hidden">
            <label>
              Do not fill this out: <input name="bot-field" />
            </label>
          </p>

          <div className="grid gap-2">
            <label className="text-sm font-medium" htmlFor="feedback-name">
              Name
            </label>
            <input
              id="feedback-name"
              name="name"
              className={fieldClassName}
              placeholder="Optional"
            />
          </div>

          <div className="grid gap-2">
            <label className="text-sm font-medium" htmlFor="feedback-email">
              Email
            </label>
            <input
              id="feedback-email"
              name="email"
              type="email"
              required
              className={fieldClassName}
              placeholder="you@company.com"
            />
          </div>

          <div className="grid gap-2">
            <label className="text-sm font-medium" htmlFor="feedback-workflow">
              What were you using?
            </label>
            <input
              id="feedback-workflow"
              name="workflow"
              required
              className={fieldClassName}
              placeholder="Copilot, Codex extension, Codex CLI, terminal, editor..."
            />
          </div>

          <div className="grid gap-2">
            <label className="text-sm font-medium" htmlFor="feedback-worked">
              What worked?
            </label>
            <textarea
              id="feedback-worked"
              name="what_worked"
              required
              rows={3}
              className={fieldClassName}
              placeholder="What felt good or saved time?"
            />
          </div>

          <div className="grid gap-2">
            <label className="text-sm font-medium" htmlFor="feedback-broke">
              What broke or felt rough?
            </label>
            <textarea
              id="feedback-broke"
              name="what_broke"
              required
              rows={4}
              className={fieldClassName}
              placeholder="What failed, confused you, or needs improvement?"
            />
          </div>

          <div className="grid gap-2">
            <label className="text-sm font-medium" htmlFor="feedback-notes">
              Extra Notes
            </label>
            <textarea
              id="feedback-notes"
              name="notes"
              rows={3}
              className={fieldClassName}
              placeholder="Optional"
            />
          </div>

          <button
            type="submit"
            disabled={feedbackStatus === "sending"}
            className="inline-flex items-center justify-center rounded-2xl border border-app bg-[rgb(var(--accent))] px-5 py-3 text-sm font-semibold text-[rgb(var(--accent-fg))] ring-soft hover:opacity-95 disabled:opacity-60"
          >
            {feedbackStatus === "sending" ? "Sending..." : "Send Feedback"}
          </button>

          <FormNote status={feedbackStatus} />
        </form>
      </section>
    </div>
  );
}
