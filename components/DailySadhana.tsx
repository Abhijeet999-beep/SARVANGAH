"use client";

import { useState } from "react";
import { motion } from "motion/react";
import {
  Check,
  Circle,
  Clock3,
  Flame,
  RotateCcw,
} from "lucide-react";

interface SadhanaPractice {
  id: string;
  title: string;
  description: string;
  duration?: string;
  icon: string;
}

interface DailySadhanaProps {
  eyebrow: string;
  title: string;
  description: string;
  practices: SadhanaPractice[];
  completionLabel: string;
  resetLabel: string;
}

const iconMap = {
  meditation: Clock3,
  mantra: Flame,
  reflection: Circle,
};

export default function DailySadhana({
  eyebrow,
  title,
  description,
  practices,
  completionLabel,
  resetLabel,
}: DailySadhanaProps) {
  const [completed, setCompleted] = useState<string[]>([]);

  const togglePractice = (id: string) => {
    setCompleted((current) =>
      current.includes(id)
        ? current.filter((item) => item !== id)
        : [...current, id]
    );
  };

  const resetPractices = () => {
    setCompleted([]);
  };

  const completedCount = completed.length;
  const totalCount = practices.length;

  const progress =
    totalCount > 0
      ? (completedCount / totalCount) * 100
      : 0;

  return (
    <section className="sadhana">
      <div className="sadhana-inner">

        <motion.div
          className="sadhana-heading"
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

        <motion.div
          className="sadhana-card"
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
            duration: 0.8,
          }}
        >
          <div className="sadhana-card-header">
            <div>
              <span className="sadhana-day">
                TODAY'S PRACTICE
              </span>

              <div className="sadhana-progress-text">
                {completedCount} / {totalCount}
              </div>
            </div>

            <button
              type="button"
              className="sadhana-reset"
              onClick={resetPractices}
              aria-label={resetLabel}
            >
              <RotateCcw size={16} />
            </button>
          </div>

          <div className="sadhana-progress">
            <motion.div
              className="sadhana-progress-bar"
              animate={{
                width: `${progress}%`,
              }}
              transition={{
                duration: 0.5,
              }}
            />
          </div>

          <div className="sadhana-list">
            {practices.map((practice, index) => {
              const Icon =
                iconMap[
                  practice.icon as keyof typeof iconMap
                ];

              const isCompleted =
                completed.includes(practice.id);

              return (
                <motion.button
                  type="button"
                  key={practice.id}
                  className={`sadhana-item ${
                    isCompleted
                      ? "sadhana-item-completed"
                      : ""
                  }`}
                  onClick={() =>
                    togglePractice(practice.id)
                  }
                  initial={{
                    opacity: 0,
                    x: -15,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    delay: index * 0.08,
                  }}
                >
                  <div className="sadhana-item-icon">
                    {isCompleted ? (
                      <Check size={18} />
                    ) : (
                      Icon && (
                        <Icon
                          size={18}
                          strokeWidth={1.4}
                        />
                      )
                    )}
                  </div>

                  <div className="sadhana-item-content">
                    <strong>{practice.title}</strong>

                    <span>
                      {practice.description}
                    </span>
                  </div>

                  {practice.duration && (
                    <span className="sadhana-duration">
                      {practice.duration}
                    </span>
                  )}
                </motion.button>
              );
            })}
          </div>

          <div className="sadhana-footer">
            {completedCount === totalCount &&
            totalCount > 0
              ? completionLabel
              : `${completedCount} of ${totalCount} practices completed`}
          </div>
        </motion.div>

      </div>
    </section>
  );
}