export type TeamMember = {
  name: string;
  role: string;
  blurb: string;
};

export type AppItem = {
  name: string;
  description: string;
  href: string;
  badge?: string;
};

export const team: TeamMember[] = [
  {
    name: "Tom (Thomas Grant MacDonald)",
    role: "Builder / Operator",
    blurb:
      "Builds internal tools to run real businesses—then turns the best ones into products.",
  },
  {
    name: "Brett Richardson",
    role: "Front-end UI/UX Designer",
    blurb:
      "Designs clean, friendly interfaces that feel playful without losing operator-grade clarity.",
  },
];

export const apps: AppItem[] = [
  {
    name: "Authority",
    description:
      "The fastest way for real humans to create professional, on-camera authority content.",
    href: "https://authority.lochsidestudio.com",
    badge: "Live",
  },
];
