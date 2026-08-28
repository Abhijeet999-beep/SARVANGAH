export interface ShivaTattvaContent {
  eyebrow: string;
  title: string;
  description: string;
  quote: {
    text: string;
    source: string;
  };
  button: {
    label: string;
    href: string;
  };
}

export const shivaTattvaContent: ShivaTattvaContent = {
  eyebrow: "SHIVA TATTVA",
  title: "The Consciousness Within",
  description:
    "Explore Shiva as a timeless principle of consciousness, stillness, transformation, and inner freedom.",
  quote: {
    text: "Shiva represents the stillness from which transformation arises.",
    source: "Shiva Tattva",
  },
  button: {
    label: "Explore Shiva Tattva",
    href: "/shiva-tattva",
  },
};