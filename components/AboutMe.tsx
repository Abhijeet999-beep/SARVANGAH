"use client";

import Link from "next/link";
import {
  ArrowRight,
  Sparkles,
  Heart,
  Eye,
  Compass,
  CircleDot,
} from "lucide-react";

import { aboutMePageContent } from "@/content/aboutMePage";

type Principle = {
  title: string;
  description: string;
};

export default function AboutMe() {
  const content = aboutMePageContent;

  return (
    <main className="min-h-screen bg-[#f4eddf] text-[#2f251d]">

      {/* =========================================================
          HERO — PRIMARY H1: PERSON 1 (SHLOKE THAKUR)
      ========================================================= */}
      <section className="relative overflow-hidden px-6 pb-20 pt-28 sm:pt-32 md:px-10 md:pb-28 md:pt-36">
        <div className="pointer-events-none absolute -right-40 -top-40 h-[600px] w-[600px] rounded-full border border-[#a77827]/10" />
        <div className="pointer-events-none absolute -right-20 -top-20 h-[440px] w-[440px] rounded-full border border-[#a77827]/10" />

        <div className="relative mx-auto max-w-[1150px]">
          <p className="text-[10px] font-medium uppercase tracking-[0.38em] text-[#a77827]">
            {content.hero.eyebrow}
          </p>

          <h1 className="mt-5 max-w-[1000px] font-serif text-[clamp(44px,6.5vw,84px)] font-normal leading-[1] tracking-[-0.02em] text-[#2f251d]">
            {content.hero.name}
          </h1>

          <div className="mt-7 flex items-center gap-4">
            <div className="h-px w-20 bg-[#b58a3a]" />
            <span className="text-[#a77827]">✦</span>
            <div className="h-px w-20 bg-[#b58a3a]" />
          </div>

          <p className="mt-7 max-w-[850px] font-serif text-[20px] leading-[1.65] text-[#594a3d] md:text-[26px]">
            {content.hero.description}
          </p>
        </div>
      </section>

      {/* =========================================================
          SHLOKE — 1. MY JOURNEY (H2)
      ========================================================= */}
      <section className="border-t border-[#3e3025]/10 px-6 py-20 md:px-10 md:py-28">
        <div className="mx-auto grid max-w-[1150px] gap-14 md:grid-cols-[0.72fr_1.5fr]">
          <div>
            <p className="text-[9px] uppercase tracking-[0.35em] text-[#a77827]">
              {content.introduction.eyebrow}
            </p>

            <h2 className="mt-5 font-serif text-[36px] font-normal leading-tight text-[#2f251d] md:text-[50px]">
              {content.introduction.title}
            </h2>
          </div>

          <div className="space-y-6 text-[15px] leading-[1.95] text-[#66584c]">
            {content.introduction.paragraphs.map(
              (paragraph: string, index: number) => (
                <p key={index}>{paragraph}</p>
              )
            )}
          </div>
        </div>
      </section>

      {/* =========================================================
          SHLOKE — 2. SHIVA & MY PATH (H2)
      ========================================================= */}
      <section className="bg-[#eee4d2] px-6 py-20 md:px-10 md:py-28">
        <div className="mx-auto grid max-w-[1150px] gap-14 md:grid-cols-[0.72fr_1.5fr]">
          <div>
            <p className="text-[9px] uppercase tracking-[0.35em] text-[#a77827]">
              {content.shiva.eyebrow}
            </p>

            <h2 className="mt-5 font-serif text-[36px] font-normal leading-tight text-[#2f251d] md:text-[50px]">
              {content.shiva.title}
            </h2>
          </div>

          <div>
            <p className="font-serif text-[21px] leading-[1.6] text-[#493c32] md:text-[26px]">
              {content.shiva.description}
            </p>

            <div className="mt-8 space-y-6 text-[15px] leading-[1.95] text-[#66584c]">
              {content.shiva.paragraphs.map(
                (paragraph: string, index: number) => (
                  <p key={index}>{paragraph}</p>
                )
              )}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          SHLOKE — 3. HOW I TEACH (H2 + H3 PRINCIPLES)
      ========================================================= */}
      <section className="px-6 py-20 md:px-10 md:py-28">
        <div className="mx-auto max-w-[1150px]">
          <p className="text-[9px] uppercase tracking-[0.35em] text-[#a77827]">
            {content.teaching.eyebrow}
          </p>

          <h2 className="mt-5 font-serif text-[36px] font-normal leading-tight text-[#2f251d] md:text-[50px]">
            {content.teaching.title}
          </h2>

          <p className="mt-7 max-w-[800px] text-[15px] leading-[1.95] text-[#66584c]">
            {content.teaching.description}
          </p>

          <div className="mt-14 grid gap-px overflow-hidden border border-[#3e3025]/10 bg-[#3e3025]/10 md:grid-cols-3">
            {content.teaching.principles.map(
              (principle: Principle, index: number) => (
                <div
                  key={principle.title}
                  className="bg-[#f4eddf] p-8 md:p-10"
                >
                  <span className="font-serif text-[38px] text-[#b58a3a]/60">
                    0{index + 1}
                  </span>

                  <h3 className="mt-6 font-serif text-[26px] font-normal text-[#2f251d]">
                    {principle.title}
                  </h3>

                  <p className="mt-4 text-[14px] leading-[1.85] text-[#706154]">
                    {principle.description}
                  </p>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* =========================================================
          SHLOKE — 4. PSYCHIC PRACTICE (H2)
      ========================================================= */}
      <section className="bg-[#eee4d2] px-6 py-20 md:px-10 md:py-28">
        <div className="mx-auto grid max-w-[1150px] gap-14 md:grid-cols-[0.72fr_1.5fr]">
          <div>
            <p className="text-[9px] uppercase tracking-[0.35em] text-[#a77827]">
              {content.psychic.eyebrow}
            </p>

            <h2 className="mt-5 font-serif text-[36px] font-normal leading-tight text-[#2f251d] md:text-[50px]">
              {content.psychic.title}
            </h2>
          </div>

          <div>
            <p className="font-serif text-[21px] leading-[1.6] text-[#493c32] md:text-[26px]">
              {content.psychic.description}
            </p>

            <div className="mt-8 space-y-6 text-[15px] leading-[1.95] text-[#66584c]">
              {content.psychic.paragraphs.map(
                (paragraph: string, index: number) => (
                  <p key={index}>{paragraph}</p>
                )
              )}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          SHLOKE — 5. ENERGY & INTUITION (H2)
      ========================================================= */}
      <section className="relative overflow-hidden px-6 py-20 md:px-10 md:py-28">
        <div className="pointer-events-none absolute -left-40 top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full border border-[#a77827]/10" />

        <div className="relative mx-auto grid max-w-[1150px] gap-14 md:grid-cols-[0.72fr_1.5fr]">
          <div>
            <div className="flex h-14 w-14 items-center justify-center rounded-full border border-[#b58a3a]/40">
              <Sparkles
                size={20}
                strokeWidth={1.2}
                className="text-[#a77827]"
              />
            </div>

            <p className="mt-7 text-[9px] uppercase tracking-[0.35em] text-[#a77827]">
              {content.energy.eyebrow}
            </p>

            <h2 className="mt-5 font-serif text-[36px] font-normal leading-tight text-[#2f251d] md:text-[50px]">
              {content.energy.title}
            </h2>
          </div>

          <div>
            <p className="font-serif text-[22px] leading-[1.6] text-[#493c32] md:text-[28px]">
              {content.energy.description}
            </p>

            <div className="mt-9 space-y-6 text-[15px] leading-[1.95] text-[#66584c]">
              {content.energy.paragraphs.map(
                (paragraph: string, index: number) => (
                  <p
                    key={index}
                    className={
                      paragraph === "It is about connection."
                        ? "font-serif text-[26px] italic text-[#493c32]"
                        : ""
                    }
                  >
                    {paragraph}
                  </p>
                )
              )}
            </div>

            <div className="mt-12 border-l border-[#b58a3a] pl-6">
              <p className="text-[15px] leading-[1.9] text-[#5e5044]">
                {content.energy.closing}
              </p>
            </div>

            <div className="mt-9 space-y-6 text-[15px] leading-[1.95] text-[#66584c]">
              {content.energy.paragraphsAfterClosing.map(
                (paragraph: string, index: number) => (
                  <p key={index}>{paragraph}</p>
                )
              )}
            </div>

            <p className="mt-10 font-serif text-[22px] italic leading-[1.6] text-[#493c32]">
              “{content.energy.reflection}”
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================
          SHLOKE — 6. TANTRA (H2)
      ========================================================= */}
      <section className="bg-[#eee4d2] px-6 py-20 md:px-10 md:py-28">
        <div className="mx-auto grid max-w-[1150px] gap-14 md:grid-cols-[0.72fr_1.5fr]">
          <div>
            <p className="text-[9px] uppercase tracking-[0.35em] text-[#a77827]">
              {content.tantra.eyebrow}
            </p>

            <h2 className="mt-5 font-serif text-[36px] font-normal leading-tight text-[#2f251d] md:text-[50px]">
              {content.tantra.title}
            </h2>
          </div>

          <div>
            <p className="font-serif text-[21px] leading-[1.6] text-[#493c32] md:text-[26px]">
              {content.tantra.description}
            </p>

            <div className="mt-8 space-y-6 text-[15px] leading-[1.95] text-[#66584c]">
              {content.tantra.paragraphs.map(
                (paragraph: string, index: number) => (
                  <p key={index}>{paragraph}</p>
                )
              )}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          SHLOKE — 7. GUIDANCE (H2)
      ========================================================= */}
      <section className="px-6 py-20 md:px-10 md:py-28">
        <div className="mx-auto max-w-[900px]">
          <p className="text-[9px] uppercase tracking-[0.35em] text-[#a77827]">
            {content.guidance.eyebrow}
          </p>

          <h2 className="mt-5 font-serif text-[36px] font-normal leading-tight text-[#2f251d] md:text-[50px]">
            {content.guidance.title}
          </h2>

          <p className="mt-8 font-serif text-[21px] leading-[1.65] text-[#493c32] md:text-[26px]">
            {content.guidance.description}
          </p>

          <div className="mt-8 space-y-6 text-[15px] leading-[1.95] text-[#66584c]">
            {content.guidance.paragraphs.map(
              (paragraph: string, index: number) => (
                <p key={index}>{paragraph}</p>
              )
            )}
          </div>
        </div>
      </section>

      {/* =========================================================
          SHLOKE — 8. STILL LEARNING (H2)
      ========================================================= */}
      <section className="bg-[#eee4d2] px-6 py-20 md:px-10 md:py-28">
        <div className="mx-auto max-w-[900px]">
          <p className="text-[9px] uppercase tracking-[0.35em] text-[#a77827]">
            {content.learning.eyebrow}
          </p>

          <h2 className="mt-5 font-serif text-[36px] font-normal leading-tight text-[#2f251d] md:text-[50px]">
            {content.learning.title}
          </h2>

          <p className="mt-8 text-[15px] leading-[1.95] text-[#66584c]">
            {content.learning.description}
          </p>

          <blockquote className="mt-10 border-l border-[#b58a3a] pl-6">
            <p className="font-serif text-[22px] italic leading-[1.7] text-[#493c32] md:text-[26px]">
              “{content.learning.quote}”
            </p>
          </blockquote>
        </div>
      </section>

      {/* =========================================================
          SHLOKE — 9. MY INTENTION (H2)
      ========================================================= */}
      <section className="px-6 py-20 md:px-10 md:py-28">
        <div className="mx-auto max-w-[900px]">
          <p className="text-[9px] uppercase tracking-[0.35em] text-[#a77827]">
            {content.intention.eyebrow}
          </p>

          <h2 className="mt-5 font-serif text-[36px] font-normal leading-tight text-[#2f251d] md:text-[50px]">
            {content.intention.title}
          </h2>

          <p className="mt-8 font-serif text-[21px] leading-[1.65] text-[#493c32] md:text-[26px]">
            {content.intention.description}
          </p>
        </div>
      </section>

      {/* =========================================================
          TRANSITION TO PERSON 2: ABHIJEET SINGH (H2)
      ========================================================= */}
      <section className="relative overflow-hidden border-t-2 border-[#b58a3a]/30 bg-[#f4eddf] px-6 py-24 md:px-10 md:py-32">
        <div className="pointer-events-none absolute -right-48 top-1/2 h-[650px] w-[650px] -translate-y-1/2 rounded-full border border-[#a77827]/10" />

        <div className="relative mx-auto max-w-[1150px]">
          <div className="mb-16 max-w-[900px]">
            <p className="text-[10px] font-medium uppercase tracking-[0.38em] text-[#a77827]">
              {content.abhijeet.eyebrow}
            </p>

            <h2 className="mt-5 font-serif text-[clamp(42px,6vw,76px)] font-normal leading-[1.02] tracking-[-0.02em] text-[#2f251d]">
              {content.abhijeet.name}
            </h2>

            <div className="mt-7 flex items-center gap-4">
              <div className="h-px w-20 bg-[#b58a3a]" />
              <span className="text-[#a77827]">✦</span>
              <div className="h-px w-20 bg-[#b58a3a]" />
            </div>
          </div>

          {/* ABHIJEET SUBSECTION 1: MY JOURNEY WITHIN (H3) */}
          <div className="max-w-[900px]">
            <h3 className="font-serif text-[28px] font-normal leading-tight text-[#2f251d] md:text-[38px]">
              {content.abhijeet.title}
            </h3>

            <div className="mt-8 space-y-7 text-[15px] leading-[2] text-[#66584c]">
              {content.abhijeet.introduction.map(
                (paragraph: string, index: number) => (
                  <p
                    key={index}
                    className={
                      paragraph.includes(
                        "my journey with energy and intuition truly began"
                      )
                        ? "font-serif text-[23px] italic text-[#493c32]"
                        : ""
                    }
                  >
                    {paragraph}
                  </p>
                )
              )}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          ABHIJEET — SUBSECTION 2: LEARNING TO LISTEN BEYOND WORDS (H3)
      ========================================================= */}
      <section className="bg-[#eee4d2] px-6 py-24 md:px-10 md:py-32">
        <div className="mx-auto grid max-w-[1150px] gap-14 md:grid-cols-[0.72fr_1.5fr]">
          <div>
            <div className="flex h-14 w-14 items-center justify-center rounded-full border border-[#b58a3a]/40">
              <Eye
                size={20}
                strokeWidth={1.2}
                className="text-[#a77827]"
              />
            </div>

            <p className="mt-7 text-[9px] uppercase tracking-[0.35em] text-[#a77827]">
              {content.abhijeet.listening.eyebrow}
            </p>

            <h3 className="mt-5 font-serif text-[32px] font-normal leading-tight text-[#2f251d] md:text-[44px]">
              {content.abhijeet.listening.title}
            </h3>
          </div>

          <div>
            <div className="space-y-7 text-[15px] leading-[2] text-[#66584c]">
              {content.abhijeet.listening.paragraphs.map(
                (paragraph: string, index: number) => (
                  <p key={index}>{paragraph}</p>
                )
              )}
            </div>

            <div className="mt-12 border-l border-[#b58a3a] pl-6">
              <div className="space-y-5">
                {content.abhijeet.listening.emphasis.map(
                  (paragraph: string, index: number) => (
                    <p
                      key={index}
                      className={
                        index ===
                        content.abhijeet.listening.emphasis.length - 1
                          ? "font-serif text-[23px] italic leading-[1.6] text-[#493c32]"
                          : "text-[15px] leading-[1.9] text-[#66584c]"
                      }
                    >
                      {paragraph}
                    </p>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          ABHIJEET — SUBSECTION 3: CONNECTION (H3)
      ========================================================= */}
      <section className="px-6 py-24 md:px-10 md:py-32">
        <div className="mx-auto grid max-w-[1150px] gap-14 md:grid-cols-[0.72fr_1.5fr]">
          <div>
            <div className="flex h-14 w-14 items-center justify-center rounded-full border border-[#b58a3a]/40">
              <Heart
                size={20}
                strokeWidth={1.2}
                className="text-[#a77827]"
              />
            </div>

            <p className="mt-7 text-[9px] uppercase tracking-[0.35em] text-[#a77827]">
              {content.abhijeet.connection.eyebrow}
            </p>

            <h3 className="mt-5 font-serif text-[32px] font-normal leading-tight text-[#2f251d] md:text-[44px]">
              {content.abhijeet.connection.title}
            </h3>
          </div>

          <div className="space-y-7 text-[15px] leading-[2] text-[#66584c]">
            {content.abhijeet.connection.paragraphs.map(
              (paragraph: string, index: number) => (
                <p
                  key={index}
                  className={
                    paragraph ===
                    "That is the kind of space I try to create."
                      ? "font-serif text-[23px] italic text-[#493c32]"
                      : ""
                  }
                >
                  {paragraph}
                </p>
              )
            )}
          </div>
        </div>
      </section>

      {/* =========================================================
          ABHIJEET — SUBSECTION 4: HEALING (H3)
      ========================================================= */}
      <section className="bg-[#eee4d2] px-6 py-24 md:px-10 md:py-32">
        <div className="mx-auto max-w-[1150px]">
          <div className="max-w-[850px]">
            <p className="text-[9px] uppercase tracking-[0.35em] text-[#a77827]">
              {content.abhijeet.healing.eyebrow}
            </p>

            <h3 className="mt-6 font-serif text-[36px] font-normal leading-tight text-[#2f251d] md:text-[50px]">
              {content.abhijeet.healing.title}
            </h3>
          </div>

          <div className="mt-14 grid gap-14 md:grid-cols-[1.2fr_0.8fr]">
            <div className="space-y-7 text-[15px] leading-[2] text-[#66584c]">
              {content.abhijeet.healing.paragraphs.map(
                (paragraph: string, index: number) => (
                  <p
                    key={index}
                    className={
                      paragraph === "Healing can be about remembering."
                        ? "font-serif text-[25px] italic text-[#493c32]"
                        : ""
                    }
                  >
                    {paragraph}
                  </p>
                )
              )}
            </div>

            <div className="h-fit border border-[#3e3025]/10 bg-[#f4eddf] p-8 md:p-10">
              <CircleDot
                size={22}
                strokeWidth={1.2}
                className="text-[#a77827]"
              />

              <div className="mt-7 space-y-5 font-serif text-[19px] italic leading-[1.65] text-[#493c32]">
                {content.abhijeet.healing.reflection.map(
                  (paragraph: string, index: number) => (
                    <p key={index}>{paragraph}</p>
                  )
                )}
              </div>
            </div>
          </div>

          <div className="mx-auto mt-16 max-w-[850px] space-y-7 text-[15px] leading-[2] text-[#66584c]">
            {content.abhijeet.healing.closing.map(
              (paragraph: string, index: number) => (
                <p key={index}>{paragraph}</p>
              )
            )}
          </div>

          <div className="mx-auto mt-14 max-w-[850px] border-l-2 border-[#b58a3a] pl-7">
            <p className="font-serif text-[24px] italic leading-[1.6] text-[#493c32] md:text-[30px]">
              “{content.abhijeet.healing.finalThought}”
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================
          ABHIJEET — SUBSECTION 5: WHY SARVĀṄGAḤ (H3)
      ========================================================= */}
      <section className="relative overflow-hidden px-6 py-24 md:px-10 md:py-32">
        <div className="pointer-events-none absolute -left-56 top-1/2 h-[650px] w-[650px] -translate-y-1/2 rounded-full border border-[#a77827]/10" />

        <div className="relative mx-auto grid max-w-[1150px] gap-14 md:grid-cols-[0.72fr_1.5fr]">
          <div>
            <div className="flex h-14 w-14 items-center justify-center rounded-full border border-[#b58a3a]/40">
              <Compass
                size={20}
                strokeWidth={1.2}
                className="text-[#a77827]"
              />
            </div>

            <p className="mt-7 text-[9px] uppercase tracking-[0.35em] text-[#a77827]">
              {content.abhijeet.sarvanga.eyebrow}
            </p>

            <h3 className="mt-5 font-serif text-[32px] font-normal leading-tight text-[#2f251d] md:text-[44px]">
              {content.abhijeet.sarvanga.title}
            </h3>
          </div>

          <div className="space-y-7 text-[15px] leading-[2] text-[#66584c]">
            {content.abhijeet.sarvanga.paragraphs.map(
              (paragraph: string, index: number) => (
                <p
                  key={index}
                  className={
                    paragraph === "How am I actually doing?"
                      ? "font-serif text-[26px] italic text-[#493c32]"
                      : ""
                  }
                >
                  {paragraph}
                </p>
              )
            )}
          </div>
        </div>
      </section>

      {/* =========================================================
          ABHIJEET — SUBSECTION 6: WALKING ALONGSIDE YOU (H3)
      ========================================================= */}
      <section className="bg-[#2f251d] px-6 py-24 text-[#f4eddf] md:px-10 md:py-32">
        <div className="mx-auto max-w-[1000px]">
          <div className="text-center">
            <p className="text-[9px] uppercase tracking-[0.38em] text-[#d1a85a]">
              {content.abhijeet.walking.eyebrow}
            </p>

            <h3 className="mt-6 font-serif text-[38px] font-normal leading-tight text-[#f4eddf] md:text-[56px]">
              {content.abhijeet.walking.title}
            </h3>

            <div className="mx-auto mt-8 h-px w-20 bg-[#b58a3a]" />
          </div>

          <div className="mx-auto mt-14 max-w-[820px] space-y-7 text-[15px] leading-[2] text-[#d4c6b5]">
            {content.abhijeet.walking.paragraphs.map(
              (paragraph: string, index: number) => (
                <p
                  key={index}
                  className={
                    paragraph === "Energy speaks long before words do."
                      ? "font-serif text-[26px] italic leading-[1.6] text-[#efe2d0]"
                      : ""
                  }
                >
                  {paragraph}
                </p>
              )
            )}
          </div>

          <div className="mx-auto mt-16 max-w-[820px] border-t border-[#efe2d0]/15 pt-12">
            <div className="space-y-6 text-[15px] leading-[2] text-[#d4c6b5]">
              {content.abhijeet.walking.spirituality.map(
                (paragraph: string, index: number) => (
                  <p
                    key={index}
                    className={
                      index === 0
                        ? "font-serif text-[25px] italic text-[#efe2d0]"
                        : ""
                    }
                  >
                    {paragraph}
                  </p>
                )
              )}
            </div>
          </div>

          <div className="mx-auto mt-16 max-w-[820px] border-t border-[#efe2d0]/15 pt-12">
            <div className="space-y-7 text-[15px] leading-[2] text-[#d4c6b5]">
              {content.abhijeet.walking.closing.map(
                (paragraph: string, index: number) => (
                  <p key={index}>{paragraph}</p>
                )
              )}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          FINAL SHARED REFLECTION (H2)
      ========================================================= */}
      <section className="px-6 py-24 md:px-10 md:py-32">
        <div className="mx-auto max-w-[850px] text-center">
          <p className="text-[9px] uppercase tracking-[0.35em] text-[#a77827]">
            {content.reflection.eyebrow}
          </p>

          <h2 className="mt-6 font-serif text-[36px] font-normal leading-tight text-[#2f251d] md:text-[52px]">
            {content.reflection.title}
          </h2>

          <p className="mx-auto mt-8 max-w-[650px] text-[14px] leading-[1.9] text-[#66584c]">
            {content.reflection.description}
          </p>

          <div className="mx-auto mt-10 h-px w-20 bg-[#b58a3a]" />

          <p className="mx-auto mt-10 max-w-[750px] font-serif text-[22px] italic leading-[1.7] text-[#493c32] md:text-[28px]">
            “{content.reflection.quote}”
          </p>
        </div>
      </section>

      {/* =========================================================
          CTA (H2)
      ========================================================= */}
      <section className="border-t border-[#3e3025]/10 px-6 py-24 md:px-10 md:py-32">
        <div className="mx-auto max-w-[850px] text-center">
          <p className="text-[9px] uppercase tracking-[0.35em] text-[#a77827]">
            SARVĀṄGAḤ
          </p>

          <h2 className="mt-6 font-serif text-[36px] font-normal leading-tight text-[#2f251d] md:text-[50px]">
            {content.cta.title}
          </h2>

          <p className="mx-auto mt-7 max-w-[650px] text-[15px] leading-[1.9] text-[#66584c]">
            {content.cta.description}
          </p>

          <Link
            href={content.cta.buttonHref}
            className="group mt-10 inline-flex items-center gap-3 border border-[#a77827] px-8 py-4 text-[10px] uppercase tracking-[0.22em] text-[#493c32] transition-all duration-300 hover:bg-[#a77827] hover:text-[#f4eddf]"
          >
            {content.cta.buttonText}

            <ArrowRight
              size={16}
              strokeWidth={1.4}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
        </div>
      </section>

    </main>
  );
}