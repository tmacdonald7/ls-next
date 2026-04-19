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
  href: string;
  badge?: string;
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
    name: "Codex Voice Pad",
    description:
      "Voice input for Codex in VS Code so you can speak prompts, skip the typing bottleneck, and keep moving.",
    href: "/codex-voicepad",
    badge: "Featured",
  },
  {
    name: "Authority",
    description:
      "The fastest way for real humans to create professional, on-camera authority content.",
    href: "https://authority.lochsidestudio.com",
    badge: "Live",
  },
];
