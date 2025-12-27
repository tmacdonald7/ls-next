// components/ContactForm.tsx
export function ContactForm() {
  return (
    <form
      name="contact"
      method="POST"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      action="/?sent=1#contact"
      className="mt-8 grid gap-4"
    >
      {/* Netlify required hidden inputs */}
      <input type="hidden" name="form-name" value="contact" />
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
        className="inline-flex items-center justify-center rounded-2xl border border-app bg-[rgb(var(--accent))] px-5 py-3 text-sm font-semibold text-[rgb(var(--bg))] hover:opacity-95 ring-soft"
      >
        Send
      </button>

      {/* Optional: little note */}
      <p className="text-xs text-muted">
        Goes to <span className="font-medium">hello@lochsidestudio.com</span>.
      </p>
    </form>
  );
}
