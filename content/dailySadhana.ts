export interface SadhanaPractice {
  id: string;
  title: string;
  description: string;
  duration?: string;
  icon: string;
}

export interface DailySadhanaContent {
  eyebrow: string;
  title: string;
  description: string;
  practices: SadhanaPractice[];
  completionLabel: string;
  resetLabel: string;
}

export const dailySadhanaContent: DailySadhanaContent = {
  eyebrow: "DAILY SADHANA",

  title: "Begin With a Moment of Stillness",

  description:
    "Simple, consistent practices can create space for awareness, discipline, and inner reflection.",

  practices: [
    {
      id: "meditation",
      title: "Meditation",
      description:
        "Sit quietly and observe the breath with awareness.",
      duration: "11 min",
      icon: "meditation",
    },
    {
      id: "mantra",
      title: "Mantra Japa",
      description:
        "Repeat your chosen mantra with attention and sincerity.",
      duration: "108×",
      icon: "mantra",
    },
    {
      id: "reflection",
      title: "Reflection",
      description:
        "Pause and observe your thoughts, words, and actions.",
      duration: "5 min",
      icon: "reflection",
    },
  ],

  completionLabel:
    "Today's practice is complete. Carry this awareness with you.",

  resetLabel: "Reset today's practice",
};