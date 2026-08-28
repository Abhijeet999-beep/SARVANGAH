"use client";

import { motion } from "motion/react";
import {
  Compass,
  Flame,
  Infinity,
  Sparkles,
} from "lucide-react";

interface PathItem {
  id: string;
  title: string;
  description: string;
  icon: string;
  href?: string;
}

interface SanatanaPathProps {
  eyebrow: string;
  title: string;
  description: string;
  items: PathItem[];
}

const iconMap = {
  dharma: Compass,
  karma: Flame,
  yoga: Infinity,
  moksha: Sparkles,
};

export default function SanatanaPath({
  eyebrow,
  title,
  description,
  items,
}: SanatanaPathProps) {
  return (
    <section className="sanatana-section">
      <div className="section-container">

        <motion.div
          className="section-heading"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
        >
          <p className="section-eyebrow">
            {eyebrow}
          </p>

          <h2>{title}</h2>

          <p>{description}</p>
        </motion.div>

        <div className="sanatana-grid">
          {items.map((item, index) => {
            const Icon =
              iconMap[
                item.icon as keyof typeof iconMap
              ];

            return (
              <motion.a
                key={item.id}
                href={item.href ?? "#"}
                className="sanatana-card"
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
                whileHover={{
                  y: -6,
                }}
              >
                <div className="sanatana-icon">
                  {Icon && (
                    <Icon
                      size={24}
                      strokeWidth={1.3}
                    />
                  )}
                </div>

                <span className="sanatana-number">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <h3>{item.title}</h3>

                <p>{item.description}</p>

                <span className="sanatana-arrow">
                  Explore →
                </span>
              </motion.a>
            );
          })}
        </div>

      </div>
    </section>
  );
}