// components/ContactForm.tsx
"use client";

import { useMemo, useState } from "react";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );

  const isBusy = status === "sending";

  const actionUrl = useMemo(() => "/__forms.html", []);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    try {
      const form = e.currentTarget;
      const formData = new FormData(form);

      const res = await fetch(actionUrl, {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData as any).toString(),
      });

      if (!res.ok) throw new Error(`HTTP ${res.status}`);

      setStatus("sent");
      // keep your existing behavior
      window.location.assign("/?sent=1#contact");
    } catch {
      setStatus("error");
    }
  }

  return (
    <form
      name="contact"
      method="POST"
      onSubmit={handleSubmit}
      className="mt-8 grid gap-4"
    >
      {/* required for Netlify */}
      <input type="hidden" name="form-name" value="contact" />

      {/* honeypot */}
      <p className="hidden">
        <label>
          Don’t fill this out: <input name="bot-field" />
        </label>
      </p>

      <div className="grid gap-2">
        <label className="text-sm font-medium" htmlFor="name">
          Name
        </label>
        <input
          id="name"
          name="name"
          required
          className="w-full rounded-2xl border border-app bg-app px-4 py-3 text-[rgb(var(--text))] placeholder:text-muted ring-soft"
          placeholder="Your name"
        />
      </div>

      <div className="grid gap-2">
        <label className="text-sm font-medium" htmlFor="email">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="w-full rounded-2xl border border-app bg-app px-4 py-3 text-[rgb(var(--text))] placeholder:text-muted ring-soft"
          placeholder="you@domain.com"
        />
      </div>

      <div className="grid gap-2">
        <label className="text-sm font-medium" htmlFor="message">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="w-full resize-none rounded-2xl border border-app bg-app px-4 py-3 text-[rgb(var(--text))] placeholder:text-muted ring-soft"
          placeholder="What are we building?"
        />
      </div>

      <button
        type="submit"
        disabled={isBusy}
        className="inline-flex items-center justify-center rounded-2xl border border-app bg-[rgb(var(--accent))] px-5 py-3 text-sm font-semibold text-[rgb(var(--bg))] hover:opacity-95 disabled:opacity-60 ring-soft"
      >
        {isBusy ? "Sending…" : "Send"}
      </button>

      {status === "error" ? (
        <p className="text-xs text-muted">
          Something went wrong. Please try again.
        </p>
      ) : (
        <p className="text-xs text-muted">
          Goes to <span className="font-medium">hello@lochsidestudio.com</span>.
        </p>
      )}
    </form>
  );
}
