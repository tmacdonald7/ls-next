import { layout } from "@/lib/layout";

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
    <section id={id} className={layout.sectionBlock}>
      <div className={layout.container}>
        {eyebrow ? (
          <div className="mb-2 text-sm font-medium text-[rgb(var(--accent))]">
            {eyebrow}
          </div>
        ) : null}
        <h2 className={layout.h2}>
          {title}
        </h2>
        <div className="mt-6">{children}</div>
      </div>
    </section>
  );
}
