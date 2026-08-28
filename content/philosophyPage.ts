export interface PhilosophyPoint {
  title: string;
  description: string;
}

export interface PhilosophyFoundation {
  title: string;
  subtitle: string;
  description: string;
}

export interface PhilosophyPageContent {
  labels: {
    introduction: string;
    dharma: string;
    shivaTattva: string;
    innerJourney: string;
    foundations: string;
    reflection: string;
    symbol: string;
  };

  hero: {
    eyebrow: string;
    title: string;
    description: string;
  };

  introduction: {
    title: string;
    paragraphs: string[];
  };

  dharma: {
    title: string;
    description: string;
    points: PhilosophyPoint[];
  };

  shivaTattva: {
    title: string;
    description: string;
    principles: PhilosophyPoint[];
  };

  innerJourney: {
    title: string;
    description: string;
    steps: string[];
  };

  foundations: {
    title: string;
    description: string;
    items: PhilosophyFoundation[];
  };

  reflection: {
    title: string;
    description: string;
    quote: string;
  };

  cta: {
    title: string;
    description: string;
    buttonText: string;
    buttonHref: string;

    backLink: {
      label: string;
      href: string;
    };
  };
}

export const philosophyPageContent: PhilosophyPageContent = {
  labels: {
    introduction: "The Beginning",
    dharma: "Dharma",
    shivaTattva: "Shiva Tattva",
    innerJourney: "Sadhana",
    foundations: "The Foundations",
    reflection: "Reflection",
    symbol: "ॐ",
  },

  hero: {
    eyebrow: "THE PATH OF INNER KNOWLEDGE",

    title: "The Philosophy of Conscious Living",

    description:
      "A deeper exploration of consciousness, self-knowledge, dharma, and the timeless journey from outer experience toward inner awareness.",
  },

  introduction: {
    title: "Understanding the Self",

    paragraphs: [
      "Spiritual philosophy begins with a simple but profound question: Who am I? Beyond the body, the name, the roles we carry, and the stories we create about ourselves, there is an inner dimension of existence that can only be understood through awareness and direct experience.",

      "At Sarvanga, philosophy is not treated as intellectual knowledge alone. It is an invitation to observe life, question deeply, and understand the relationship between the body, mind, intellect, emotions, and consciousness.",

      "The ancient spiritual traditions of India have always encouraged the seeker to look within. Knowledge becomes meaningful when it changes the way we see ourselves, the way we relate to others, and the way we experience existence.",
    ],
  },

  dharma: {
    title: "Dharma — Living in Alignment",

    description:
      "Dharma is not merely a collection of rules or duties. It is the principle of living in alignment with truth, responsibility, purpose, and the natural order of life.",

    points: [
      {
        title: "Svadharma",
        description:
          "Understanding one's own responsibilities, nature, abilities, and place in life rather than simply following the path of another.",
      },
      {
        title: "Rta",
        description:
          "Recognizing the deeper harmony and order within existence and learning to live with greater balance and respect for life.",
      },
      {
        title: "Karma",
        description:
          "Understanding that our intentions, choices, and actions shape our experience and influence the world around us.",
      },
    ],
  },

  shivaTattva: {
    title: "Shiva Tattva — The Principle of Consciousness",

    description:
      "Shiva Tattva represents the dimension of pure awareness — the stillness behind movement, the witness behind experience, and the consciousness through which existence is observed.",

    principles: [
      {
        title: "Stillness",
        description:
          "Through silence and meditation, we learn to step back from constant mental activity and experience the quiet space within.",
      },
      {
        title: "Sakshi — The Witness",
        description:
          "Learning to observe thoughts, emotions, and experiences without immediately identifying with them.",
      },
      {
        title: "Transformation",
        description:
          "True transformation begins when awareness allows us to release unconscious patterns and make space for a more conscious way of living.",
      },
    ],
  },

  innerJourney: {
    title: "The Journey Within",

    description:
      "The spiritual path is ultimately an inward journey. It is not about escaping the world, but about developing the awareness to experience the world without losing ourselves within it.",

    steps: [
      "Begin with honest self-observation.",
      "Become aware of thoughts, emotions, desires, and patterns.",
      "Question inherited beliefs and assumptions with openness.",
      "Cultivate discipline through meditation and conscious practice.",
      "Learn to respond to life with awareness rather than unconscious reaction.",
      "Transform knowledge into lived experience.",
      "Allow every experience to become an opportunity for deeper understanding.",
    ],
  },

  foundations: {
    title: "Three Foundations of the Path",

    description:
      "A meaningful spiritual life requires more than knowledge. It requires understanding, practice, and a willingness to contribute beyond oneself.",

    items: [
      {
        title: "Jnana",
        subtitle: "The Path of Knowledge",
        description:
          "Seeking truth through study, contemplation, questioning, and direct inquiry into the nature of the self and existence.",
      },
      {
        title: "Sadhana",
        subtitle: "The Path of Practice",
        description:
          "Transforming understanding into experience through meditation, discipline, awareness, and dedicated spiritual practice.",
      },
      {
        title: "Seva",
        subtitle: "The Path of Service",
        description:
          "Allowing inner growth to express itself through compassion, responsibility, humility, and meaningful service to others.",
      },
    ],
  },

  reflection: {
    title: "From Knowledge to Awareness",

    description:
      "Reading about spirituality is only the beginning. The deeper journey begins when knowledge becomes observation, observation becomes understanding, and understanding becomes a way of living.",

    quote:
      "The journey inward does not ask us to become someone else. It invites us to see clearly what is already within us.",
  },

  cta: {
    title: "Begin the Journey Within",

    description:
      "Philosophy gives us direction. Practice gives us experience. Awareness allows the two to become part of our life.",

    buttonText: "Explore Spiritual Practices",

    buttonHref: "/practices",

    backLink: {
      label: "Back to Sarvāṅgaḥ",
      href: "/",
    },
  },
};