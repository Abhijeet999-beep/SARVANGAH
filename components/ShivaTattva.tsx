"use client";

import { motion } from "motion/react";
import { ArrowRight, Sparkles } from "lucide-react";

interface ShivaTattvaProps {
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

export default function ShivaTattva({
  eyebrow,
  title,
  description,
  quote,
  button,
}: ShivaTattvaProps) {
  return (
    <section className="shiva-tattva">
      <div className="shiva-tattva-inner">
        <motion.div
          className="shiva-tattva-symbol"
          initial={{
            opacity: 0,
            scale: 0.7,
          }}
          whileInView={{
            opacity: 1,
            scale: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.8,
          }}
        >
          <Sparkles
            size={24}
            strokeWidth={1.2}
          />
        </motion.div>

        <motion.div
          className="shiva-tattva-heading"
          initial={{
            opacity: 0,
            y: 25,
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

        <motion.div
          className="shiva-tattva-quote"
          initial={{
            opacity: 0,
            y: 25,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            delay: 0.2,
            duration: 0.8,
          }}
        >
          <blockquote>
            “{quote.text}”
          </blockquote>

          <span>{quote.source}</span>
        </motion.div>

        <motion.a
          href={button.href}
          className="shiva-tattva-button"
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
            delay: 0.35,
          }}
        >
          {button.label}

          <ArrowRight
            size={16}
            strokeWidth={1.5}
          />
        </motion.a>
      </div>
    </section>
  );
}