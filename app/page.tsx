import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Section } from "@/components/Section";
import { TeamCard } from "@/components/TeamCard";
import { AppCard } from "@/components/AppCard";
import { Footer } from "@/components/Footer";
import { apps, team } from "@/lib/data";
import { ContactForm } from "@/components/ContactForm";

export default function Page() {
  return (
    <main id="top" className="min-h-screen">
      <div className="relative">
        {/* Lochzilla texture applies only when the CSS var toggles it on */}
        <div className="lochzilla-texture">
          <Header />
          <Hero />

          <Section id="about" title="What We Do" eyebrow="Studio">
            <div className="grid gap-4 sm:grid-cols-3">
              {[
                "Build focused tools that increase human leverage",
                "Design for speed, clarity, and real-world execution",
                "Ship early, refine through real use",
              ].map((t) => (
                <div
                  key={t}
                  className="bg-surface shadow-soft rounded-2xl border border-app p-6"
                >
                  <div className="text-sm font-semibold">{t}</div>
                  <div className="mt-2 text-sm text-muted">
                    Practical defaults. Minimal overhead. Real operators.
                  </div>
                </div>
              ))}
            </div>
          </Section>

          <Section id="team" title="Team" eyebrow="People">
            <div className="grid gap-4 sm:grid-cols-2">
              {team.map((m) => (
                <TeamCard key={m.name} member={m} />
              ))}
            </div>
          </Section>

          <Section id="apps" title="Apps" eyebrow="Products">
            <div className="grid gap-4 sm:grid-cols-2">
              {apps.map((a) => (
                <AppCard key={a.name} app={a} />
              ))}
            </div>

            <div className="mt-8 rounded-2xl border border-app bg-surface p-6 shadow-soft">
              <div className="text-sm font-semibold">
                Routing note (hub behavior)
              </div>
              <p className="mt-2 text-sm text-muted">
                LochsideStudio.com routes visitors to product subdomains. Each
                app can ship on its own cadence without turning this into a
                funnel.
              </p>
            </div>
          </Section>

          <Section
            id="contact"
            eyebrow="Contact"
            title="Say hello"
            sub-title="Quick note, quick reply. This is a studio, not a funnel."
          >
            <ContactForm />
          </Section>

          <Footer />
        </div>
      </div>
    </main>
  );
}
