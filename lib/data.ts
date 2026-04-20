// C:\Users\tmacd\Projects\ls-next\lib\data.ts

export type SocialLinks = {
  linkedin?: string;
  x?: string;
  youtube?: string;
  instagram?: string;
};

export type TeamMember = {
  name: string;
  role: string;
  blurb: string;
  imageSrc: string;
  socials?: SocialLinks;
};

export type AppItem = {
  name: string;
  description: string;
  href?: string;
  badge?: string;
  available?: boolean;
  ctaLabel?: string;
  icon?: "mic" | "camera" | "play" | "bot";
  state?: "public-beta" | "private-beta" | "active-development";
};

export const team: TeamMember[] = [
  {
    name: "Thomas Grant MacDonald",
    role: "Product Lead",
    blurb:
      "Builds internal-first tools for operators. Focused on clarity, leverage, and shipping software that actually gets used.",
    imageSrc: "/team/thomas.webp",
    socials: {
      linkedin: "https://www.linkedin.com/in/thomasgrantmacdonald/",
      // Update these to your actual profiles as needed:
      x: "https://x.com/@thomasgrantmacd",
      youtube: "https://www.youtube.com/@thomasgrantmacdonald",
      instagram: "https://www.instagram.com/thomasgrantmacdonald",
    },
  },
  {
    name: "Brett Richardson",
    role: "UI / UX",
    blurb:
      "Designs and refines systems with an eye for usability, structure, and long-term maintainability.",
    imageSrc: "/team/placeholder.webp",
    socials: {
      // Add Brett’s links when you have them
      linkedin: "https://www.linkedin.com/",
    },
  },
];

export const apps: AppItem[] = [
  {
    name: "Voice Prompt",
    description:
      "Voice input for agents in VS Code so you can speak prompts, skip the typing bottleneck, and keep moving.",
    href: "/voiceprompt",
    badge: "Public Beta",
    available: true,
    ctaLabel: "View app",
    icon: "mic",
    state: "public-beta",
  },
  {
    name: "Authority",
    description:
      "AI-assisted tooling for producing professional, on-camera authority content. Still unstable and being refined internally.",
    badge: "Private Beta",
    available: false,
    ctaLabel: "Internal only",
    icon: "camera",
    state: "private-beta",
  },
  {
    name: "Hesperus",
    description:
      "A Telegram-driven OpenClaw agent for YouTube workflows that we are actively developing for internal use.",
    badge: "Private Beta",
    available: false,
    ctaLabel: "Internal only",
    icon: "play",
    state: "private-beta",
  },
  {
    name: "Perslane",
    description:
      "A Telegram-driven OpenClaw engineering agent built to support internal development and execution workflows.",
    badge: "Private Beta",
    available: false,
    ctaLabel: "Internal only",
    icon: "bot",
    state: "private-beta",
  },
];
