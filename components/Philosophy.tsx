"use client";

import { motion } from "motion/react";
import {
  Brain,
  Heart,
  Sparkles,
  UserRound,
} from "lucide-react";

interface PhilosophyItem {
  id: string;
  title: string;
  description: string;
  icon: string;
}

interface PhilosophyProps {
  eyebrow: string;
  title: string;
  description: string;
  items: PhilosophyItem[];
}

const iconMap = {
  body: UserRound,
  mind: Brain,
  intellect: Sparkles,
  self: Heart,
};

export default function Philosophy({
  eyebrow,
  title,
  description,
  items,
}: PhilosophyProps) {
  return (
    <section className="philosophy">
      <div className="philosophy-inner">

        {/* Section Heading */}
        <motion.div
          className="section-heading"
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: 0.8,
          }}
        >
          <p className="section-eyebrow">
            {eyebrow}
          </p>

          <h2>{title}</h2>

          <p>{description}</p>
        </motion.div>

        {/* Philosophy Items */}
        <div className="pillar-grid">
          {items.map((item, index) => {
            const Icon =
              iconMap[
                item.icon as keyof typeof iconMap
              ];

            return (
              <motion.article
                className="pillar-card"
                key={item.id}
                initial={{
                  opacity: 0,
                  y: 35,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.2,
                }}
                transition={{
                  delay: index * 0.12,
                  duration: 0.7,
                }}
              >
                <div className="pillar-icon">
                  {Icon && (
                    <Icon
                      size={23}
                      strokeWidth={1.4}
                    />
                  )}
                </div>

                <h3>{item.title}</h3>

                <p>{item.description}</p>
              </motion.article>
            );
          })}
        </div>

      </div>
    </section>
  );
}