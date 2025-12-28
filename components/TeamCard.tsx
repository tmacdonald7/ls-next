import Image from "next/image";
import { Linkedin, X, Youtube, Instagram } from "lucide-react";

type SocialLinks = {
  linkedin?: string;
  x?: string;
  youtube?: string;
  instagram?: string;
};

type TeamMember = {
  name: string;
  role: string;
  blurb: string;
  imageSrc: string;
  socials?: SocialLinks;
};

export function TeamCard({ member }: { member: TeamMember }) {
  const { name, role, blurb, imageSrc, socials } = member;

  return (
    <div className="rounded-2xl border border-app bg-surface p-6 shadow-soft">
      <div className="flex items-start gap-4">
        {/* Avatar */}
        <div className="h-28 w-28 flex-shrink-0 overflow-hidden rounded-full border border-app bg-app">
          <Image
            src={imageSrc}
            alt={name}
            width={112}
            height={112}
            sizes="112px"
            className="h-full w-full object-cover"
          />
        </div>

        {/* Content */}
        <div className="min-w-0">
          <div className="text-sm font-semibold">{name}</div>
          <div className="mt-1 text-sm text-muted">{role}</div>

          <p className="mt-3 text-sm leading-relaxed text-muted">{blurb}</p>

          {socials && (
            <div className="mt-4 flex items-center gap-2">
              {socials.linkedin && (
                <SocialLink href={socials.linkedin} label="LinkedIn">
                  <Linkedin className="h-4 w-4" />
                </SocialLink>
              )}
              {socials.x && (
                <SocialLink href={socials.x} label="X">
                  <X className="h-4 w-4" />
                </SocialLink>
              )}
              {socials.youtube && (
                <SocialLink href={socials.youtube} label="YouTube">
                  <Youtube className="h-4 w-4" />
                </SocialLink>
              )}
              {socials.instagram && (
                <SocialLink href={socials.instagram} label="Instagram">
                  <Instagram className="h-4 w-4" />
                </SocialLink>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

/* --------------------------------------------
   Social icon button
-------------------------------------------- */

function SocialLink({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-app bg-app text-[rgb(var(--text))] transition hover:bg-[rgb(var(--accent))] hover:text-[rgb(var(--accent-fg))]"
    >
      {children}
    </a>
  );
}
