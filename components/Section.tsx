export function Section({
  id,
  title,
  eyebrow,
  children,
}: {
  id: string;
  title: string;
  eyebrow?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-24 py-14">
      <div className="mx-auto max-w-6xl px-4">
        {eyebrow ? (
          <div className="mb-2 text-sm font-medium text-[rgb(var(--accent))]">
            {eyebrow}
          </div>
        ) : null}
        <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
          {title}
        </h2>
        <div className="mt-6">{children}</div>
      </div>
    </section>
  );
}
