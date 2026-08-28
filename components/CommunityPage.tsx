"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

import { communityPageContent } from "@/content/communityPage";

export default function CommunityPage() {
  const {
    hero,
    introduction,
    foundations,
    study,
    dialogue,
    traditions,
    spaces,
    practice,
    seva,
    instructors,
    guidelines,
    vision,
    cta,
  } = communityPageContent;

  return (
    <main className="min-h-screen overflow-hidden bg-[#f7f1e5] text-[#30251c]">
      {/* ───────────────── HERO ───────────────── */}
      <section className="px-4 pb-10 pt-24 sm:px-6 sm:pb-12 sm:pt-28 md:px-10 md:pb-14 md:pt-36 lg:px-16">
        <div className="mx-auto max-w-5xl text-center">

          <motion.p
            className="text-[10px] uppercase tracking-[0.34em] text-[#9b7128] md:text-[11px]"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {hero.eyebrow}
          </motion.p>

          <motion.h1
            className="mx-auto mt-4 max-w-4xl text-[32px] font-semibold leading-[1.1] tracking-[-0.025em] sm:text-[38px] md:text-[46px] lg:text-[52px]"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            {hero.title}
          </motion.h1>

          <motion.p
            className="mx-auto mt-4 max-w-3xl text-[14px] leading-6 text-[#6b5d4d] sm:mt-5 md:text-[15px] md:leading-7"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {hero.description}
          </motion.p>

          <div className="mt-5 flex items-center justify-center gap-3 sm:mt-6">
            <span className="h-px w-9 bg-[#c6a56a]" />
            <span className="text-sm text-[#9b7128]">ॐ</span>
            <span className="h-px w-9 bg-[#c6a56a]" />
          </div>

        </div>
      </section>

      {/* ───────────────── INTRODUCTION ───────────────── */}
      <section className="border-y border-[#ded2bd] px-4 py-10 sm:px-6 sm:py-12 md:px-10 md:py-14 lg:px-16">
        <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-[0.75fr_1.25fr] md:gap-14">

          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-[10px] uppercase tracking-[0.3em] text-[#9b7128] md:text-[11px]">
              SAṄGHA
            </p>

            <h2 className="mt-3 text-2xl font-semibold leading-tight md:text-3xl">
              {introduction.title}
            </h2>
          </motion.div>

          <motion.div
            className="space-y-3 text-[14px] leading-6 text-[#65594c] md:text-[15px] md:leading-7"
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            {introduction.paragraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </motion.div>

        </div>
      </section>

      {/* ───────────────── FOUNDATIONS ───────────────── */}
      <section className="bg-[#eee5d4] px-6 py-12 md:px-10 md:py-14 lg:px-16">
        <div className="mx-auto max-w-6xl">

          <SectionHeading
            eyebrow={foundations.eyebrow}
            title={foundations.title}
            description={foundations.description}
          />

          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {foundations.items.map((item, index) => (
              <motion.article
                key={item.title}
                className="rounded-xl border border-[#d8cbb3] bg-[#faf6ed] p-6"
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.06,
                }}
              >
                <span className="text-[10px] tracking-[0.22em] text-[#b58a3a]">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <h3 className="mt-4 text-lg font-semibold">
                  {item.title}
                </h3>

                <p className="mt-1 text-[10px] uppercase tracking-[0.16em] text-[#9b7128]">
                  {item.subtitle}
                </p>

                <p className="mt-3 text-[13px] leading-6 text-[#6b5d4d]">
                  {item.description}
                </p>
              </motion.article>
            ))}
          </div>

        </div>
      </section>

      {/* ───────────────── STUDY METHOD ───────────────── */}
      <section className="px-6 py-12 md:px-10 md:py-14 lg:px-16">
        <div className="mx-auto max-w-6xl">

          <SectionHeading
            eyebrow={study.eyebrow}
            title={study.title}
            description={study.description}
          />

          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {study.stages.map((stage, index) => (
              <motion.article
                key={stage.number}
                className="group rounded-xl border border-[#ddd1bc] bg-[#faf6ed] p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.07,
                }}
              >
                <div className="flex items-center justify-between">

                  <span className="text-[10px] tracking-[0.22em] text-[#9b7128]">
                    {stage.number}
                  </span>

                  <ArrowUpRight
                    size={16}
                    strokeWidth={1.3}
                    className="text-[#9b7128] transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                  />

                </div>

                <h3 className="mt-5 text-lg font-semibold">
                  {stage.title}
                </h3>

                <p className="mt-1 text-[10px] uppercase tracking-[0.16em] text-[#9b7128]">
                  {stage.subtitle}
                </p>

                <p className="mt-3 text-[13px] leading-6 text-[#6b5d4d]">
                  {stage.description}
                </p>
              </motion.article>
            ))}
          </div>

        </div>
      </section>

      {/* ───────────────── DIALOGUE ───────────────── */}
      <section className="bg-[#30251c] px-6 py-12 text-[#f7f1e5] md:px-10 md:py-14 lg:px-16">
        <div className="mx-auto max-w-6xl">

          <p className="text-[10px] uppercase tracking-[0.3em] text-[#c9a45d] md:text-[11px]">
            {dialogue.eyebrow}
          </p>

          <h2 className="mt-3 text-2xl font-semibold md:text-3xl">
            {dialogue.title}
          </h2>

          <p className="mt-4 max-w-4xl text-[14px] leading-6 text-[#d4c8b6] md:text-[15px] md:leading-7">
            {dialogue.description}
          </p>

          <div className="mt-8 grid gap-3 md:grid-cols-2 lg:grid-cols-5">
            {dialogue.principles.map((item, index) => (
              <motion.article
                key={item.title}
                className="border border-[#514336] bg-[#352a20] p-5"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.07,
                }}
              >
                <span className="text-[10px] tracking-[0.2em] text-[#c9a45d]">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <h3 className="mt-4 text-base font-semibold">
                  {item.title}
                </h3>

                <p className="mt-3 text-[13px] leading-6 text-[#d4c8b6]">
                  {item.description}
                </p>
              </motion.article>
            ))}
          </div>

        </div>
      </section>

      {/* ───────────────── TRADITIONS ───────────────── */}
      <section className="px-6 py-12 md:px-10 md:py-14 lg:px-16">
        <div className="mx-auto max-w-6xl">

          <SectionHeading
            eyebrow={traditions.eyebrow}
            title={traditions.title}
            description={traditions.description}
          />

          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {traditions.items.map((item, index) => (
              <motion.article
                key={item.title}
                className="rounded-xl border border-[#ddd1bc] bg-[#faf6ed] p-6"
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.06,
                }}
              >
                <span className="text-[10px] tracking-[0.2em] text-[#9b7128]">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <h3 className="mt-4 text-lg font-semibold">
                  {item.title}
                </h3>

                <p className="mt-3 text-[13px] leading-6 text-[#6b5d4d]">
                  {item.description}
                </p>
              </motion.article>
            ))}
          </div>

        </div>
      </section>

      {/* ───────────────── COMMUNITY SPACES ───────────────── */}
      <section className="bg-[#eee5d4] px-6 py-12 md:px-10 md:py-14 lg:px-16">
        <div className="mx-auto max-w-6xl">

          <SectionHeading
            eyebrow={spaces.eyebrow}
            title={spaces.title}
            description={spaces.description}
          />

          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {spaces.items.map((item, index) => (
              <motion.article
                key={item.title}
                className="group rounded-xl border border-[#d8cbb3] bg-[#faf6ed] p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.06,
                }}
              >
                <div className="flex items-center justify-between">

                  <span className="text-[10px] tracking-[0.22em] text-[#9b7128]">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <ArrowUpRight
                    size={16}
                    strokeWidth={1.3}
                    className="text-[#9b7128] transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                  />

                </div>

                <h3 className="mt-5 text-lg font-semibold">
                  {item.title}
                </h3>

                <p className="mt-3 text-[13px] leading-6 text-[#6b5d4d]">
                  {item.description}
                </p>

                <span className="mt-5 inline-block text-[10px] uppercase tracking-[0.14em] text-[#9b7128]">
                  {item.action}
                </span>
              </motion.article>
            ))}
          </div>

        </div>
      </section>

      {/* ───────────────── PRACTICE ───────────────── */}
      <section className="px-6 py-12 md:px-10 md:py-14 lg:px-16">
        <div className="mx-auto max-w-6xl">

          <div className="text-center">

            <p className="text-[10px] uppercase tracking-[0.3em] text-[#9b7128] md:text-[11px]">
              {practice.eyebrow}
            </p>

            <h2 className="mt-3 text-2xl font-semibold md:text-3xl">
              {practice.title}
            </h2>

            <p className="mx-auto mt-4 max-w-3xl text-[14px] leading-6 text-[#65594c] md:text-[15px] md:leading-7">
              {practice.description}
            </p>

          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {practice.steps.map((step, index) => (
              <motion.article
                key={step.number}
                className="rounded-xl border border-[#ddd1bc] bg-[#faf6ed] p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
              >
                <span className="text-[10px] tracking-[0.22em] text-[#9b7128]">
                  {step.number}
                </span>

                <h3 className="mt-4 text-lg font-semibold">
                  {step.title}
                </h3>

                <p className="mt-3 text-[13px] leading-6 text-[#6b5d4d]">
                  {step.description}
                </p>
              </motion.article>
            ))}
          </div>

        </div>
      </section>

      {/* ───────────────── SEVA ───────────────── */}
      <section className="bg-[#eee5d4] px-6 py-12 md:px-10 md:py-14 lg:px-16">
        <div className="mx-auto max-w-6xl">

          <SectionHeading
            eyebrow={seva.eyebrow}
            title={seva.title}
            description={seva.description}
          />

          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {seva.areas.map((item, index) => (
              <motion.article
                key={item.title}
                className="rounded-xl border border-[#d8cbb3] bg-[#faf6ed] p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
              >
                <span className="text-[10px] tracking-[0.2em] text-[#9b7128]">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <h3 className="mt-4 text-lg font-semibold">
                  {item.title}
                </h3>

                <p className="mt-3 text-[13px] leading-6 text-[#6b5d4d]">
                  {item.description}
                </p>
              </motion.article>
            ))}
          </div>

        </div>
      </section>

      {/* ───────────────── INSTRUCTORS ───────────────── */}
      <section className="px-6 py-12 md:px-10 md:py-14 lg:px-16">
        <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-[0.75fr_1.25fr] md:gap-14">

          <div>
            <p className="text-[10px] uppercase tracking-[0.3em] text-[#9b7128] md:text-[11px]">
              {instructors.eyebrow}
            </p>

            <h2 className="mt-3 text-2xl font-semibold leading-tight md:text-3xl">
              {instructors.title}
            </h2>

            <p className="mt-4 text-[14px] leading-6 text-[#65594c] md:text-[15px] md:leading-7">
              {instructors.description}
            </p>
          </div>

          <div>
            {instructors.principles.map((item, index) => (
              <motion.article
                key={item.title}
                className="border-b border-[#ddd1bc] py-5 first:pt-0"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
              >
                <div className="flex gap-4">

                  <span className="pt-1 text-[10px] tracking-[0.2em] text-[#9b7128]">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <div>
                    <h3 className="text-base font-semibold">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-[13px] leading-6 text-[#6b5d4d]">
                      {item.description}
                    </p>
                  </div>

                </div>
              </motion.article>
            ))}
          </div>

        </div>
      </section>

      {/* ───────────────── GUIDELINES ───────────────── */}
      <section className="bg-[#30251c] px-6 py-12 text-[#f7f1e5] md:px-10 md:py-14 lg:px-16">
        <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-[0.75fr_1.25fr] md:gap-14">

          <div>
            <p className="text-[10px] uppercase tracking-[0.3em] text-[#c9a45d] md:text-[11px]">
              {guidelines.eyebrow}
            </p>

            <h2 className="mt-3 text-2xl font-semibold leading-tight md:text-3xl">
              {guidelines.title}
            </h2>

            <p className="mt-4 text-[14px] leading-6 text-[#d4c8b6] md:text-[15px] md:leading-7">
              {guidelines.description}
            </p>
          </div>

          <div>
            {guidelines.rules.map((rule, index) => (
              <motion.div
                key={index}
                className="flex gap-4 border-b border-[#514336] py-4 first:pt-0"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.45,
                  delay: index * 0.04,
                }}
              >
                <span className="pt-1 text-[10px] tracking-[0.2em] text-[#c9a45d]">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <p className="text-[13px] leading-6 text-[#d4c8b6]">
                  {rule}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* ───────────────── VISION ───────────────── */}
      <section className="px-6 py-14 text-center md:px-10 md:py-16 lg:px-16">
        <div className="mx-auto max-w-4xl">

          <div className="text-xl text-[#9b7128]">
            ॐ
          </div>

          <h2 className="mt-4 text-2xl font-semibold md:text-3xl">
            {vision.title}
          </h2>

          <p className="mx-auto mt-4 max-w-3xl text-[14px] leading-6 text-[#65594c] md:text-[15px] md:leading-7">
            {vision.description}
          </p>

          <blockquote className="mx-auto mt-7 max-w-3xl border-y border-[#ddd1bc] py-6 text-base italic leading-7 text-[#5e5143] md:text-lg md:leading-8">
            “{vision.quote}”
          </blockquote>

        </div>
      </section>

      {/* ───────────────── CTA ───────────────── */}
      <section className="bg-[#eee5d4] px-6 py-12 text-center md:px-10 md:py-14 lg:px-16">
        <div className="mx-auto max-w-3xl">

          <h2 className="text-2xl font-semibold md:text-3xl">
            {cta.title}
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-[14px] leading-6 text-[#65594c] md:text-[15px] md:leading-7">
            {cta.description}
          </p>

          <div className="mt-7 flex flex-wrap justify-center gap-3">

            <button
              type="button"
              className="rounded-full bg-[#9b7128] px-7 py-3 text-sm font-medium text-white transition hover:bg-[#7d5b22]"
            >
              {cta.primaryButton}
            </button>

            <Link
              href={cta.secondaryHref}
              className="rounded-full border border-[#cdbd9f] px-7 py-3 text-sm font-medium text-[#6b5d4d] transition hover:border-[#9b7128] hover:text-[#9b7128]"
            >
              {cta.secondaryButton}
            </Link>

          </div>

        </div>
      </section>

    </main>
  );
}

/* ─────────────────────────────────────────────
   REUSABLE SECTION HEADING
───────────────────────────────────────────── */

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div className="max-w-3xl">

      <p className="text-[10px] uppercase tracking-[0.3em] text-[#9b7128] md:text-[11px]">
        {eyebrow}
      </p>

      <h2 className="mt-3 text-2xl font-semibold md:text-3xl">
        {title}
      </h2>

      <p className="mt-4 text-[14px] leading-6 text-[#65594c] md:text-[15px] md:leading-7">
        {description}
      </p>

    </div>
  );
}