import Link from "next/link";
import { shivaTattvaPageContent } from "@/content/shivaTattvaPage";

export default function ShivaTattvaPage() {
  const {
    hero,
    introduction,
    textualFoundations,
    rudraToShiva,
    shivaShakti,
    thirtySixTattvas,
    fivePureTattvas,
    spanda,
    pratyabhijna,
    triad,
    practice,
    textualStudy,
    distinction,
    reflection,
    cta,
  } = shivaTattvaPageContent;

  return (
    <main className="overflow-hidden bg-[#f7f1e5] text-[#30251c]">

      {/* HERO */}
      <section className="px-6 pb-16 pt-20 md:pb-20 md:pt-24 lg:px-12">
        <div className="mx-auto max-w-5xl text-center">
          <p className="mb-4 text-[11px] font-medium uppercase tracking-[0.35em] text-[#9b7128]">
            {hero.eyebrow}
          </p>

          <h1 className="mx-auto max-w-5xl text-4xl font-semibold leading-[1.08] tracking-[-0.02em] md:text-5xl lg:text-[58px]">
            {hero.title}
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-[15px] leading-8 text-[#6b5d4d] md:text-base">
            {hero.description}
          </p>

          <div className="mx-auto mt-8 flex items-center justify-center gap-3">
            <span className="h-px w-12 bg-[#c5a467]" />
            <span className="text-sm text-[#9b7128]">ॐ</span>
            <span className="h-px w-12 bg-[#c5a467]" />
          </div>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="border-t border-[#e1d6c2] px-6 py-16 md:py-20 lg:px-12">
        <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-[0.7fr_1.3fr] md:gap-16">
          <div>
            <p className="text-[11px] uppercase tracking-[0.3em] text-[#9b7128]">
              Śiva Tattva
            </p>

            <h2 className="mt-3 max-w-sm text-3xl font-semibold leading-tight md:text-4xl">
              {introduction.title}
            </h2>
          </div>

          <div className="max-w-3xl space-y-4 text-[15px] leading-7 text-[#65594c]">
            {introduction.paragraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>

      {/* TEXTUAL FOUNDATIONS */}
      <section className="border-y border-[#ddd0b9] bg-[#eee5d4] px-6 py-16 md:py-20 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-3xl">
            <p className="text-[11px] uppercase tracking-[0.3em] text-[#9b7128]">
              Textual Foundations
            </p>

            <h2 className="mt-3 text-3xl font-semibold md:text-4xl">
              {textualFoundations.title}
            </h2>

            <p className="mt-4 text-[15px] leading-7 text-[#65594c]">
              {textualFoundations.description}
            </p>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {textualFoundations.sources.map((source, index) => (
              <article
                key={source.title}
                className="rounded-xl border border-[#d6c7aa] bg-[#f8f2e6] p-6"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[11px] tracking-[0.2em] text-[#b58a3a]">
                    0{index + 1}
                  </span>

                  <span className="text-[10px] uppercase tracking-[0.15em] text-[#8a765d]">
                    {source.tradition}
                  </span>
                </div>

                <h3 className="mt-5 text-lg font-semibold">
                  {source.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-[#6b5d4d]">
                  {source.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* RUDRA TO SHIVA */}
      <section className="px-6 py-16 md:py-20 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-3xl">
            <p className="text-[11px] uppercase tracking-[0.3em] text-[#9b7128]">
              Historical Development
            </p>

            <h2 className="mt-3 text-3xl font-semibold md:text-4xl">
              {rudraToShiva.title}
            </h2>

            <p className="mt-4 text-[15px] leading-7 text-[#65594c]">
              {rudraToShiva.description}
            </p>
          </div>

          <div className="mt-12">
            {rudraToShiva.stages.map((stage, index) => (
              <div
                key={stage.title}
                className="grid gap-5 border-b border-[#ddd1bc] py-7 first:pt-0 md:grid-cols-[80px_180px_1fr] md:items-start"
              >
                <span className="text-[11px] tracking-[0.2em] text-[#9b7128]">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <div>
                  <h3 className="text-xl font-semibold">
                    {stage.title}
                  </h3>

                  <p className="mt-1 text-[10px] uppercase tracking-[0.16em] text-[#9b7128]">
                    {stage.period}
                  </p>
                </div>

                <p className="max-w-2xl text-sm leading-7 text-[#65594c]">
                  {stage.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SHIVA SHAKTI */}
      <section className="border-y border-[#e1d6c2] bg-[#f3ecdf] px-6 py-16 md:py-20 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-[11px] uppercase tracking-[0.3em] text-[#9b7128]">
              Śiva • Śakti
            </p>

            <h2 className="mt-3 text-3xl font-semibold md:text-4xl">
              {shivaShakti.title}
            </h2>

            <p className="mt-4 text-[15px] leading-7 text-[#65594c]">
              {shivaShakti.description}
            </p>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {shivaShakti.principles.map((principle, index) => (
              <article
                key={principle.title}
                className="rounded-xl border border-[#d8cbb5] bg-[#faf6ed] p-6"
              >
                <span className="text-[11px] tracking-[0.2em] text-[#b58a3a]">
                  0{index + 1}
                </span>

                <h3 className="mt-5 text-lg font-semibold">
                  {principle.title}
                </h3>

                <p className="mt-1 text-xs uppercase tracking-[0.15em] text-[#9b7128]">
                  {principle.subtitle}
                </p>

                <p className="mt-3 text-sm leading-6 text-[#6b5d4d]">
                  {principle.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 36 TATTVAS */}
      <section className="bg-[#30251c] px-6 py-16 text-[#f7f1e5] md:py-20 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-3xl">
            <p className="text-[11px] uppercase tracking-[0.3em] text-[#c9a45d]">
              Śaiva Cosmology
            </p>

            <h2 className="mt-3 text-3xl font-semibold md:text-4xl">
              {thirtySixTattvas.title}
            </h2>

            <p className="mt-4 text-[15px] leading-7 text-[#d5c9b7]">
              {thirtySixTattvas.description}
            </p>
          </div>

          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {thirtySixTattvas.groups.map((group, index) => (
              <article
                key={group.title}
                className="border border-[#514335] bg-[#352a20] p-6"
              >
                <span className="text-[11px] tracking-[0.2em] text-[#c9a45d]">
                  LEVEL 0{index + 1}
                </span>

                <h3 className="mt-4 text-xl font-semibold">
                  {group.title}
                </h3>

                <p className="mt-1 text-[10px] uppercase tracking-[0.15em] text-[#a99780]">
                  {group.subtitle}
                </p>

                <p className="mt-4 text-sm leading-6 text-[#d5c9b7]">
                  {group.description}
                </p>

                <div className="mt-5 space-y-2 border-t border-[#514335] pt-5">
                  {group.items.map((item) => (
                    <p
                      key={item}
                      className="text-sm leading-6 text-[#eee6d9]"
                    >
                      {item}
                    </p>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* FIVE PURE TATTVAS */}
      <section className="px-6 py-16 md:py-20 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-3xl">
            <p className="text-[11px] uppercase tracking-[0.3em] text-[#9b7128]">
              Pure Consciousness
            </p>

            <h2 className="mt-3 text-3xl font-semibold md:text-4xl">
              {fivePureTattvas.title}
            </h2>

            <p className="mt-4 text-[15px] leading-7 text-[#65594c]">
              {fivePureTattvas.description}
            </p>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-5">
            {fivePureTattvas.principles.map((principle, index) => (
              <article
                key={principle.title}
                className="border-t-2 border-[#b58a3a] pt-5"
              >
                <span className="text-[11px] tracking-[0.2em] text-[#9b7128]">
                  0{index + 1}
                </span>

                <h3 className="mt-4 text-lg font-semibold">
                  {principle.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-[#6b5d4d]">
                  {principle.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* SPANDA */}
      <section className="border-y border-[#ddd0b9] bg-[#eee5d4] px-6 py-16 md:py-20 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-10 md:grid-cols-[0.8fr_1.2fr] md:gap-16">
            <div>
              <p className="text-[11px] uppercase tracking-[0.3em] text-[#9b7128]">
                Spanda
              </p>

              <h2 className="mt-3 text-3xl font-semibold md:text-4xl">
                {spanda.title}
              </h2>

              <p className="mt-5 max-w-md text-[15px] leading-7 text-[#65594c]">
                {spanda.description}
              </p>
            </div>

            <div>
              {spanda.teachings.map((teaching, index) => (
                <div
                  key={teaching.title}
                  className="border-b border-[#d8cbb5] py-5 first:pt-0 last:border-none"
                >
                  <div className="flex gap-4">
                    <span className="text-[11px] tracking-[0.15em] text-[#9b7128]">
                      0{index + 1}
                    </span>

                    <div>
                      <h3 className="font-semibold">
                        {teaching.title}
                      </h3>

                      <p className="mt-2 text-sm leading-6 text-[#6b5d4d]">
                        {teaching.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PRATYABHIJNA */}
      <section className="px-6 py-16 md:py-20 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-3xl">
            <p className="text-[11px] uppercase tracking-[0.3em] text-[#9b7128]">
              Recognition
            </p>

            <h2 className="mt-3 text-3xl font-semibold md:text-4xl">
              {pratyabhijna.title}
            </h2>

            <p className="mt-4 text-[15px] leading-7 text-[#65594c]">
              {pratyabhijna.description}
            </p>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {pratyabhijna.stages.map((stage, index) => (
              <article
                key={stage.title}
                className="rounded-xl border border-[#ddd1bc] bg-[#faf6ed] p-6"
              >
                <span className="text-[11px] tracking-[0.2em] text-[#b58a3a]">
                  0{index + 1}
                </span>

                <h3 className="mt-5 text-lg font-semibold">
                  {stage.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-[#6b5d4d]">
                  {stage.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ICCHA JNANA KRIYA */}
      <section className="bg-[#30251c] px-6 py-16 text-[#f7f1e5] md:py-20 lg:px-12">
        <div className="mx-auto max-w-6xl text-center">
          <p className="text-[11px] uppercase tracking-[0.3em] text-[#c9a45d]">
            Three Powers
          </p>

          <h2 className="mt-3 text-3xl font-semibold md:text-4xl">
            {triad.title}
          </h2>

          <p className="mx-auto mt-4 max-w-3xl text-[15px] leading-7 text-[#d5c9b7]">
            {triad.description}
          </p>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {triad.concepts.map((concept) => (
              <article
                key={concept.title}
                className="border border-[#514335] bg-[#352a20] p-7"
              >
                <h3 className="text-xl font-semibold text-[#f4ecdf]">
                  {concept.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-[#d5c9b7]">
                  {concept.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* PRACTICE */}
      <section className="px-6 py-16 md:py-20 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-3xl">
            <p className="text-[11px] uppercase tracking-[0.3em] text-[#9b7128]">
              Contemplation
            </p>

            <h2 className="mt-3 text-3xl font-semibold md:text-4xl">
              {practice.title}
            </h2>

            <p className="mt-4 text-[15px] leading-7 text-[#65594c]">
              {practice.description}
            </p>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {practice.practices.map((item, index) => (
              <article
                key={item.title}
                className="rounded-xl border border-[#ddd1bc] bg-[#faf6ed] p-6"
              >
                <span className="text-[11px] tracking-[0.2em] text-[#b58a3a]">
                  0{index + 1}
                </span>

                <h3 className="mt-5 text-lg font-semibold">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-[#6b5d4d]">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* TEXTUAL STUDY */}
      <section className="border-y border-[#ddd0b9] bg-[#eee5d4] px-6 py-16 md:py-20 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-3xl">
            <p className="text-[11px] uppercase tracking-[0.3em] text-[#9b7128]">
              Scriptural Study
            </p>

            <h2 className="mt-3 text-3xl font-semibold md:text-4xl">
              {textualStudy.title}
            </h2>

            <p className="mt-4 text-[15px] leading-7 text-[#65594c]">
              {textualStudy.description}
            </p>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {textualStudy.texts.map((text, index) => (
              <article
                key={text.title}
                className="flex gap-5 border-b border-[#d8cbb5] pb-5 pt-2"
              >
                <span className="text-[11px] tracking-[0.2em] text-[#9b7128]">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <div>
                  <div className="flex flex-wrap items-center gap-3">
                    <h3 className="text-lg font-semibold">
                      {text.title}
                    </h3>

                    <span className="text-[10px] uppercase tracking-[0.15em] text-[#9b7128]">
                      {text.category}
                    </span>
                  </div>

                  <p className="mt-2 text-sm leading-6 text-[#6b5d4d]">
                    {text.purpose}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* DISCERNMENT */}
      <section className="px-6 py-16 md:py-20 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-10 md:grid-cols-[0.8fr_1.2fr] md:gap-16">
            <div>
              <p className="text-[11px] uppercase tracking-[0.3em] text-[#9b7128]">
                Discernment
              </p>

              <h2 className="mt-3 text-3xl font-semibold leading-tight md:text-4xl">
                {distinction.title}
              </h2>

              <p className="mt-5 text-[15px] leading-7 text-[#65594c]">
                {distinction.description}
              </p>
            </div>

            <div className="space-y-3">
              {distinction.points.map((point, index) => (
                <div
                  key={point}
                  className="flex gap-4 border-b border-[#ddd1bc] py-4 first:pt-0"
                >
                  <span className="text-[11px] tracking-[0.15em] text-[#9b7128]">
                    0{index + 1}
                  </span>

                  <p className="text-sm leading-6 text-[#65594c]">
                    {point}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* REFLECTION */}
      <section className="border-t border-[#e1d6c2] px-6 py-16 md:py-20 lg:px-12">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-[11px] uppercase tracking-[0.3em] text-[#9b7128]">
            Reflection
          </p>

          <h2 className="mt-3 text-3xl font-semibold md:text-4xl">
            {reflection.title}
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-[15px] leading-7 text-[#65594c]">
            {reflection.description}
          </p>

          <blockquote className="mx-auto mt-8 max-w-3xl border-y border-[#d8cbb5] py-7 text-lg font-medium italic leading-8 text-[#493a2b] md:text-xl">
            “{reflection.quote}”
          </blockquote>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#eee5d4] px-6 py-14 md:py-16 lg:px-12">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-semibold md:text-4xl">
            {cta.title}
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-[15px] leading-7 text-[#65594c]">
            {cta.description}
          </p>

          <Link
            href={cta.buttonHref}
            className="mt-7 inline-flex rounded-full bg-[#9b7128] px-7 py-3 text-sm font-medium text-white transition-all duration-300 hover:bg-[#7f5c20] hover:shadow-md"
          >
            {cta.buttonText}
          </Link>
        </div>
      </section>
    </main>
  );
}