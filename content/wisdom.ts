export interface WisdomEntry {
  id: string;
  category: string;
  title: string;
  excerpt: string;
  source: string;
  href: string;
}

export interface WisdomContent {
  eyebrow: string;
  title: string;
  description: string;
  entries: WisdomEntry[];
  button: {
    label: string;
    href: string;
  };
}

export const wisdomContent: WisdomContent = {
  eyebrow: "TIMELESS WISDOM",

  title: "Teachings for the Inner Journey",

  description:
    "Explore reflections drawn from the philosophical traditions of Sanatana Dharma.",

  entries: [
    {
      id: "self-knowledge",
      category: "UPANISHADS",
      title: "Know the Self",
      excerpt:
        "A reflection on self-inquiry and the search for the deeper nature of consciousness.",
      source: "Upanishadic Wisdom",
      href: "/wisdom/self-knowledge",
    },
    {
      id: "karma-yoga",
      category: "BHAGAVAD GITA",
      title: "The Path of Action",
      excerpt:
        "Discover how action, intention, and detachment can become part of a spiritual discipline.",
      source: "Bhagavad Gita",
      href: "/wisdom/karma-yoga",
    },
    {
      id: "inner-stillness",
      category: "YOGA",
      title: "The Practice of Stillness",
      excerpt:
        "Explore the role of attention, discipline, and meditation in cultivating inner clarity.",
      source: "Yoga Tradition",
      href: "/wisdom/inner-stillness",
    },
  ],

  button: {
    label: "Explore All Wisdom",
    href: "/wisdom",
  },
};