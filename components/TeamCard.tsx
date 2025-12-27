import { User } from "lucide-react";
import type { TeamMember } from "@/lib/data";

export function TeamCard({ member }: { member: TeamMember }) {
  return (
    <div className="bg-surface shadow-soft rounded-2xl border border-app p-6">
      <div className="flex items-start gap-4">
        <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-app bg-app">
          <User className="h-5 w-5" />
        </div>
        <div>
          <div className="text-base font-semibold">{member.name}</div>
          <div className="text-sm text-muted">{member.role}</div>
        </div>
      </div>
      <p className="mt-4 text-sm leading-relaxed text-muted">{member.blurb}</p>
    </div>
  );
}
