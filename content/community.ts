export interface CommunityLink {
  id: string;
  label: string;
  description: string;
  href: string;
}

export interface CommunityContent {
  eyebrow: string;
  title: string;
  description: string;
  links: CommunityLink[];
}

export const communityContent: CommunityContent = {
  eyebrow: "THE COMMUNITY",

  title: "Walk the Path Together",

  description:
    "A space for seekers to learn, reflect, practice, and share the journey with sincerity and respect.",

  links: [
    {
      id: "teachings",
      label: "Teachings",
      description:
        "Explore reflections, discussions, and timeless spiritual teachings.",
      href: "/community/teachings",
    },
    {
      id: "practice",
      label: "Practice Together",
      description:
        "Join collective practices and create a consistent spiritual rhythm.",
      href: "/community/practice",
    },
    {
      id: "dialogue",
      label: "Sacred Dialogue",
      description:
        "Share questions and perspectives through thoughtful conversation.",
      href: "/community/dialogue",
    },
  ],
};