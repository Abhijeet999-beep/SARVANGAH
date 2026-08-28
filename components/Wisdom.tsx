"use client";

import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

interface WisdomEntry {
  id: string;
  category: string;
  title: string;
  excerpt: string;
  source: string;
  href: string;
}

interface WisdomProps {
  eyebrow: string;
  title: string;
  description: string;
  entries: WisdomEntry[];
  button: {
    label: string;
    href: string;
  };
}

export default function Wisdom({
  eyebrow,
  title,
  description,
  entries,
  button,
}: WisdomProps) {
  return (
    <section className="wisdom">
      <div className="wisdom-inner">
        <motion.div
          className="wisdom-heading"
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

        <div className="wisdom-grid">
          {entries.map((entry, index) => (
            <motion.a
              key={entry.id}
              href={entry.href}
              className="wisdom-card"
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
                amount: 0.15,
              }}
              transition={{
                delay: index * 0.12,
                duration: 0.7,
              }}
            >
              <div className="wisdom-card-top">
                <span>{entry.category}</span>

                <ArrowUpRight
                  size={18}
                  strokeWidth={1.3}
                />
              </div>

              <div className="wisdom-card-content">
                <h3>{entry.title}</h3>

                <p>{entry.excerpt}</p>
              </div>

              <span className="wisdom-source">
                {entry.source}
              </span>
            </motion.a>
          ))}
        </div>

        <motion.div
          className="wisdom-action"
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            delay: 0.3,
          }}
        >
          <a
            href={button.href}
            className="wisdom-button"
          >
            {button.label}

            <ArrowUpRight
              size={16}
              strokeWidth={1.4}
            />
          </a>
        </motion.div>
      </div>
    </section>
  );
}