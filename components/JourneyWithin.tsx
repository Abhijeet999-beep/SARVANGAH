"use client";

import { motion } from "motion/react";
import { ArrowDown, Sparkles } from "lucide-react";

interface JourneyStep {
  id: string;
  number: string;
  title: string;
  description: string;
}

interface JourneyWithinProps {
  eyebrow: string;
  title: string;
  description: string;
  steps: JourneyStep[];
  cta: {
    label: string;
    href: string;
  };
}

export default function JourneyWithin({
  eyebrow,
  title,
  description,
  steps,
  cta,
}: JourneyWithinProps) {
  return (
    <section className="journey-section">
      <div className="journey-background">
        <div className="journey-orbit journey-orbit-one" />
        <div className="journey-orbit journey-orbit-two" />
        <div className="journey-orbit journey-orbit-three" />
      </div>

      <div className="journey-container">

        <motion.div
          className="journey-heading"
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
            duration: 0.9,
          }}
        >
          <p className="section-eyebrow">
            {eyebrow}
          </p>

          <div className="journey-symbol">
            <Sparkles
              size={18}
              strokeWidth={1.2}
            />
          </div>

          <h2>{title}</h2>

          <p>{description}</p>
        </motion.div>

        <div className="journey-timeline">
          <div className="journey-line" />

          {steps.map((step, index) => (
            <motion.article
              className={`journey-step ${
                index % 2 === 0
                  ? "journey-step-left"
                  : "journey-step-right"
              }`}
              key={step.id}
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
                amount: 0.25,
              }}
              transition={{
                delay: index * 0.12,
                duration: 0.7,
              }}
            >
              <div className="journey-step-content">
                <span className="journey-number">
                  {step.number}
                </span>

                <h3>{step.title}</h3>

                <p>{step.description}</p>
              </div>

              <div className="journey-node">
                <span />
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          className="journey-cta-wrapper"
          initial={{
            opacity: 0,
            y: 20,
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
          }}
        >
          <a
            href={cta.href}
            className="journey-cta"
          >
            {cta.label}
            <ArrowDown size={15} />
          </a>
        </motion.div>

      </div>
    </section>
  );
}