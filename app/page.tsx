import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Section } from "@/components/Section";
import { TeamCard } from "@/components/TeamCard";
import { AppCard } from "@/components/AppCard";
import { Footer } from "@/components/Footer";
import { apps, team } from "@/lib/data";
import { ContactForm } from "@/components/ContactForm";
import {
  Bot,
  BrainCircuit,
  MessageSquareText,
  ScanSearch,
  Sparkles,
  Workflow,
} from "lucide-react";

export default function Page() {
  return (
    <main id="top" className="min-h-screen">
      <div className="relative">
        {/* Lochzilla texture applies only when the CSS var toggles it on */}
        <div className="lochzilla-texture">
          <Header />
          <Hero />

          <Section
            id="apps"
            title="Current Products"
            eyebrow="Products"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              {apps.map((a) => (
                <AppCard key={a.name} app={a} />
              ))}
            </div>
          </Section>

          <Section
            id="about"
            title="How We Build Software That Actually Gets Used"
            eyebrow="Studio Focus"
          >
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  icon: BrainCircuit,
                  title: "Internal Need Comes First",
                  body: "We do not start with ideas for a pitch deck. We build tools because our own businesses need them, then keep the ones that prove their value in daily use.",
                },
                {
                  icon: Workflow,
                  title: "AI Should Reduce Operator Work",
                  body: "Our products are built to work with modern AI systems in practical workflows, whether that means faster prompting, cleaner execution, or less repetitive manual effort.",
                },
                {
                  icon: ScanSearch,
                  title: "Real Usage Decides What Ships",
                  body: "We test software under real operating conditions, find the friction, and keep refining until it earns a place in the stack instead of becoming another abandoned tool.",
                },
                {
                  icon: MessageSquareText,
                  title: "Interfaces Should Match The Work",
                  body: "Sometimes the right interface is a VS Code extension. Sometimes it is Telegram. We choose the surface that gets the operator to execution fastest.",
                },
                {
                  icon: Bot,
                  title: "Agents Need Better Tooling Around Them",
                  body: "We are not trying to replace good models. We build the surrounding software that makes agents easier to direct, monitor, and use inside actual workflows.",
                },
                {
                  icon: Sparkles,
                  title: "Scope Stays Tight On Purpose",
                  body: "Each tool solves a specific bottleneck clearly enough to earn adoption. We would rather ship a sharp internal advantage than a broad, vague platform.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-app bg-app/35 p-6 backdrop-blur-sm"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-app bg-surface text-[rgb(var(--accent))]">
                      <item.icon className="h-5 w-5" />
                    </div>
                    <div className="text-sm font-semibold">{item.title}</div>
                  </div>
                  <div className="mt-2 text-sm text-muted">
                    {item.body}
                  </div>
                </div>
              ))}
            </div>
          </Section>

          <Section
            id="team"
            title="The Operators Behind the Products"
            eyebrow="Team Leadership"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              {team.map((m) => (
                <TeamCard key={m.name} member={m} />
              ))}
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
