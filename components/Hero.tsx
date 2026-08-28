"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";

interface HeroButton {
  label: string;
  href: string;
  transition?: {
    enabled: boolean;
    duration: number;
    symbol: string;
  };
}

interface HeroImage {
  src: string;
  alt: string;
}

interface HeroProps {
  eyebrow: string;
  title: string;
  subtitle: string;
  description: string;
  primaryButton: HeroButton;
  secondaryButton: HeroButton;
  image: HeroImage;
}

type TransitionType = "journey" | "wisdom" | null;

export default function Hero({
  eyebrow,
  title,
  subtitle,
  description,
  primaryButton,
  secondaryButton,
  image,
}: HeroProps) {
  const router = useRouter();

  const [activeTransition, setActiveTransition] =
    useState<TransitionType>(null);

  const activeButton =
    activeTransition === "journey"
      ? primaryButton
      : activeTransition === "wisdom"
        ? secondaryButton
        : null;

  const duration =
    activeButton?.transition?.duration ?? 1400;

  const symbol =
    activeButton?.transition?.symbol ??
    (activeTransition === "wisdom" ? "✦" : "ॐ");

  useEffect(() => {
    if (!activeTransition || !activeButton) return;

    const timer = window.setTimeout(() => {
      router.push(activeButton.href);
    }, duration);

    return () => window.clearTimeout(timer);
  }, [
    activeTransition,
    activeButton,
    duration,
    router,
  ]);

  const startTransition = (
    type: "journey" | "wisdom",
    button: HeroButton
  ) => {
    if (activeTransition) return;

    if (!button.transition?.enabled) {
      router.push(button.href);
      return;
    }

    setActiveTransition(type);
  };

  return (
    <>
      <section className="hero">
        {/* Background artwork */}
        <div
          className="hero-background"
          style={{
            backgroundImage: `url("${image.src}")`,
          }}
          role="img"
          aria-label={image.alt}
        />

        {/* Sacred atmosphere */}
        <div className="hero-overlay" />
        <div className="hero-mandala hero-mandala-one" />
        <div className="hero-mandala hero-mandala-two" />

        {/* Content */}
        <div className="hero-content">
          <motion.div
            className="om-symbol"
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            ॐ
          </motion.div>

          <motion.p
            className="eyebrow"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.2,
              duration: 0.8,
            }}
          >
            {eyebrow}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.35,
              duration: 1,
            }}
          >
            {title}
          </motion.h1>

          <motion.div
            className="hero-divider"
            initial={{ width: 0 }}
            animate={{ width: 120 }}
            transition={{
              delay: 0.6,
              duration: 0.8,
            }}
          >
            ✦
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.55,
              duration: 0.8,
            }}
          >
            {subtitle}
          </motion.h2>

          <motion.p
            className="hero-description"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              delay: 0.8,
              duration: 1,
            }}
          >
            {description}
          </motion.p>

          <motion.div
            className="hero-actions"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 1,
              duration: 0.8,
            }}
          >
            {/* BEGIN YOUR JOURNEY */}
            <button
              type="button"
              onClick={() =>
                startTransition("journey", primaryButton)
              }
              disabled={activeTransition !== null}
              className="primary-button"
            >
              <span>{primaryButton.label}</span>

              <motion.span
                animate={
                  activeTransition === "journey"
                    ? { x: 7 }
                    : { x: 0 }
                }
                transition={{ duration: 0.25 }}
              >
                <ArrowRight size={17} />
              </motion.span>
            </button>

            {/* EXPLORE WISDOM */}
            <button
              type="button"
              onClick={() =>
                startTransition("wisdom", secondaryButton)
              }
              disabled={activeTransition !== null}
              className="secondary-button"
            >
              {secondaryButton.label}
            </button>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <div className="hero-bottom">
          <span>Scroll to explore</span>
          <div className="scroll-line" />
        </div>
      </section>

      {/* ======================================================
          TRANSITION
      ====================================================== */}

      <AnimatePresence>
        {activeTransition && (
          <motion.div
            className="fixed inset-0 z-[99999] flex items-center justify-center overflow-hidden bg-[#f7f1e5]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {/* Ambient glow */}
            <motion.div
              className="absolute h-32 w-32 rounded-full bg-[#b58a3a]/10 blur-3xl"
              initial={{
                scale: 0.5,
                opacity: 0,
              }}
              animate={{
                scale:
                  activeTransition === "wisdom"
                    ? 9
                    : 12,
                opacity: 1,
              }}
              transition={{
                duration: duration / 1000,
                ease: [0.16, 1, 0.3, 1],
              }}
            />

            {/* Outer ring */}
            <motion.div
              className="absolute h-28 w-28 rounded-full border border-[#b58a3a]/30"
              initial={{
                scale: 0.2,
                opacity: 0,
              }}
              animate={{
                scale:
                  activeTransition === "wisdom"
                    ? 13
                    : 18,
                opacity: 1,
              }}
              transition={{
                duration: duration / 1000,
                ease: [0.16, 1, 0.3, 1],
              }}
            />

            {/* Middle ring */}
            <motion.div
              className="absolute h-24 w-24 rounded-full border border-[#b58a3a]/40"
              initial={{
                scale: 0.2,
                opacity: 0,
              }}
              animate={{
                scale:
                  activeTransition === "wisdom"
                    ? 9
                    : 12,
                opacity: 1,
              }}
              transition={{
                duration: duration / 1000,
                delay: 0.06,
                ease: [0.16, 1, 0.3, 1],
              }}
            />

            {/* Inner ring */}
            <motion.div
              className="absolute h-20 w-20 rounded-full border border-[#9b7128]/50"
              initial={{
                scale: 0.2,
                opacity: 0,
              }}
              animate={{
                scale:
                  activeTransition === "wisdom"
                    ? 5
                    : 7,
                opacity: 1,
              }}
              transition={{
                duration: duration / 1000,
                delay: 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
            />

            {/* Central symbol */}
            <motion.div
              className="relative z-10 flex h-28 w-28 items-center justify-center rounded-full border border-[#b58a3a]/60 bg-[#f7f1e5]"
              initial={{
                opacity: 0,
                scale: 0.2,
              }}
              animate={{
                opacity: 1,
                scale: [0.2, 1.08, 1],
              }}
              transition={{
                duration: 0.7,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <motion.span
                className={
                  activeTransition === "wisdom"
                    ? "text-5xl text-[#9b7128]"
                    : "text-6xl text-[#9b7128]"
                }
                initial={{
                  opacity: 0,
                  scale: 0.4,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                }}
                transition={{
                  delay: 0.15,
                  duration: 0.5,
                }}
              >
                {symbol}
              </motion.span>
            </motion.div>

            {/* Rotating halo */}
            <motion.div
              className="absolute h-44 w-44 rounded-full border border-dashed border-[#b58a3a]/20"
              initial={{
                opacity: 0,
                rotate: 0,
                scale: 0.7,
              }}
              animate={{
                opacity: 1,
                rotate:
                  activeTransition === "wisdom"
                    ? -360
                    : 360,
                scale: 1,
              }}
              transition={{
                opacity: {
                  duration: 0.4,
                },
                scale: {
                  duration: 0.7,
                },
                rotate: {
                  duration:
                    activeTransition === "wisdom"
                      ? 5
                      : 4,
                  repeat: Infinity,
                  ease: "linear",
                },
              }}
            />

            {/* Transition text */}
            <motion.p
              className="absolute bottom-16 text-[10px] uppercase tracking-[0.45em] text-[#9b7128]"
              initial={{
                opacity: 0,
                y: 12,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.25,
                duration: 0.5,
              }}
            >
              {activeTransition === "wisdom"
                ? "Enter Wisdom"
                : "Begin Within"}
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}