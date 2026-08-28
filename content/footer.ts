export interface FooterLink {
  id: string;
  label: string;
  href: string;
}

export interface FooterContent {
  brand: {
    symbol: string;
    name: string;
    description: string;
  };

  navigation: {
    title: string;
    links: FooterLink[];
  };

  explore: {
    title: string;
    links: FooterLink[];
  };

  social: FooterLink[];

  copyright: string;
}

export const footerContent: FooterContent = {
  brand: {
    symbol: "ॐ",
    name: "सर्वाङ्गः",
    description:
      "A space for exploring timeless wisdom, conscious living, and the deeper dimensions of Sanatana Dharma.",
  },

  navigation: {
    title: "Explore",
    links: [
      {
        id: "philosophy",
        label: "Philosophy",
        href: "/philosophy",
      },
      {
        id: "practices",
        label: "Practices",
        href: "/practices",
      },
      {
        id: "wisdom",
        label: "Wisdom",
        href: "/wisdom",
      },
      {
        id: "community",
        label: "Community",
        href: "/community",
      },
    ],
  },

  explore: {
    title: "Journey",
    links: [
      {
        id: "dharma",
        label: "Dharma",
        href: "/dharma",
      },
      {
        id: "sadhana",
        label: "Sadhana",
        href: "/sadhana",
      },
      {
        id: "shiva-tattva",
        label: "Shiva Tattva",
        href: "/shiva-tattva",
      },
      {
        id: "about",
        label: "About",
        href: "/about",
      },
    ],
  },

  social: [
    {
      id: "instagram",
      label: "Instagram",
      href: "#",
    },
    {
      id: "youtube",
      label: "YouTube",
      href: "#",
    },
  ],

  copyright: "© 2026 Sarvāṅgaḥ. All rights reserved.",
};