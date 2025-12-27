import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-app">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-10 sm:flex-row sm:items-center sm:justify-between">
        <div className="text-sm text-muted">
          © {new Date().getFullYear()} Lochside Studio
        </div>
        <div className="flex items-center gap-4 text-sm">
          <Link
            className="ring-soft rounded-lg text-muted hover:text-[rgb(var(--text))]"
            href="mailto:tmacdonald7@gmail.com"
          >
            Contact
          </Link>
          <a
            className="ring-soft rounded-lg text-muted hover:text-[rgb(var(--text))]"
            href="#top"
          >
            Back to top
          </a>
        </div>
      </div>
    </footer>
  );
}
