"use client";

import { motion } from "motion/react";
import { ArrowUpRight, Users } from "lucide-react";

interface CommunityLink {
  id: string;
  label: string;
  description: string;
  href: string;
}

interface CommunityProps {
  eyebrow: string;
  title: string;
  description: string;
  links: CommunityLink[];
}

export default function Community({
  eyebrow,
  title,
  description,
  links,
}: CommunityProps) {
  return (
    <section className="community">
      <div className="community-inner">
        <motion.div
          className="community-heading"
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
          <div className="community-symbol">
            <Users
              size={22}
              strokeWidth={1.3}
            />
          </div>

          <p className="section-eyebrow">
            {eyebrow}
          </p>

          <h2>{title}</h2>

          <p>{description}</p>
        </motion.div>

        <div className="community-grid">
          {links.map((link, index) => (
            <motion.a
              key={link.id}
              href={link.href}
              className="community-card"
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
              <div className="community-card-top">
                <span>
                  {String(index + 1).padStart(2, "0")}
                </span>

                <ArrowUpRight
                  size={18}
                  strokeWidth={1.3}
                />
              </div>

              <div className="community-card-content">
                <h3>{link.label}</h3>

                <p>{link.description}</p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}