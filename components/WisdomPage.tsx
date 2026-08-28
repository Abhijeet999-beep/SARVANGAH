import Link from "next/link";
import { wisdomPageContent } from "@/content/wisdomPage";

export default function WisdomPage() {
  const {
    hero,
    introduction,
    traditions,
    vedanta,
    yoga,
    puranas,
    texts,
    concepts,
    discernment,
    closing,
  } = wisdomPageContent;

  return (
    <main className="min-h-screen overflow-hidden bg-[#f7f1e5] text-[#30251c]">
      {/* ───────────────── HERO ───────────────── */}
      <section className="px-6 pb-12 pt-28 md:px-10 md:pb-14 md:pt-36 lg:px-16">
        <div className="mx-auto max-w-5xl text-center">

          <p className="text-[10px] font-medium uppercase tracking-[0.34em] text-[#9b7128] md:text-[11px]">
            {hero.eyebrow}
          </p>

          <h1 className="mx-auto mt-4 max-w-4xl text-[38px] font-semibold leading-[1.08] tracking-[-0.025em] md:text-[46px] lg:text-[52px]">
            {hero.title}
          </h1>

          <p className="mx-auto mt-5 max-w-3xl text-[14px] leading-6 text-[#6b5d4d] md:text-[15px] md:leading-7">
            {hero.description}
          </p>

          <div className="mt-6 flex items-center justify-center gap-3">
            <span className="h-px w-9 bg-[#c6a56a]" />
            <span className="text-sm text-[#9b7128]">ॐ</span>
            <span className="h-px w-9 bg-[#c6a56a]" />
          </div>

        </div>
      </section>

      {/* ───────────────── INTRODUCTION ───────────────── */}
      <section className="border-y border-[#ded2bd] px-6 py-12 md:px-10 md:py-14 lg:px-16">
        <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-[0.72fr_1.28fr] md:gap-14">

          <div>
            <p className="text-[10px] uppercase tracking-[0.3em] text-[#9b7128] md:text-[11px]">
              Orientation
            </p>

            <h2 className="mt-3 max-w-md text-2xl font-semibold leading-tight md:text-3xl">
              {introduction.title}
            </h2>
          </div>

          <div className="space-y-3 text-[14px] leading-6 text-[#65594c] md:text-[15px] md:leading-7">
            {introduction.paragraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>

        </div>
      </section>

      {/* ───────────────── TEXTUAL ARCHITECTURE ───────────────── */}
      <section className="bg-[#eee5d4] px-6 py-12 md:px-10 md:py-14 lg:px-16">
        <div className="mx-auto max-w-6xl">

          <div className="max-w-3xl">

            <p className="text-[10px] uppercase tracking-[0.3em] text-[#9b7128] md:text-[11px]">
              {traditions.eyebrow}
            </p>

            <h2 className="mt-3 text-2xl font-semibold leading-tight md:text-3xl">
              {traditions.title}
            </h2>

            <p className="mt-3 text-[14px] leading-6 text-[#65594c] md:text-[15px] md:leading-7">
              {traditions.description}
            </p>

          </div>

          <div className="mt-8 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
            {traditions.items.map((item, index) => (
              <article
                key={item.title}
                className="rounded-xl border border-[#d8cbb3] bg-[#faf6ed] p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-sm"
              >
                <div className="flex items-center justify-between">

                  <span className="text-[10px] tracking-[0.2em] text-[#b58a3a]">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span className="text-[9px] uppercase tracking-[0.16em] text-[#927b5e]">
                    {item.subtitle}
                  </span>

                </div>

                <h3 className="mt-4 text-lg font-semibold">
                  {item.title}
                </h3>

                <p className="mt-3 text-[13px] leading-6 text-[#6b5d4d]">
                  {item.description}
                </p>

              </article>
            ))}
          </div>

        </div>
      </section>

      {/* ───────────────── VEDANTA ───────────────── */}
      <section className="px-6 py-12 md:px-10 md:py-14 lg:px-16">
        <div className="mx-auto max-w-6xl">

          <p className="text-[10px] uppercase tracking-[0.3em] text-[#9b7128] md:text-[11px]">
            {vedanta.eyebrow}
          </p>

          <h2 className="mt-3 text-2xl font-semibold leading-tight md:text-3xl">
            {vedanta.title}
          </h2>

          <p className="mt-3 max-w-3xl text-[14px] leading-6 text-[#65594c] md:text-[15px] md:leading-7">
            {vedanta.description}
          </p>

          <div className="mt-8 grid gap-x-10 gap-y-8 md:grid-cols-2">
            {vedanta.schools.map((school) => (
              <article
                key={school.title}
                className="border-t border-[#b58a3a] pt-5"
              >
                <h3 className="text-lg font-semibold">
                  {school.title}
                </h3>

                <p className="mt-1.5 text-[10px] uppercase tracking-[0.16em] text-[#9b7128]">
                  {school.teacher}
                </p>

                <p className="mt-3 text-[13px] leading-6 text-[#6b5d4d]">
                  {school.description}
                </p>
              </article>
            ))}
          </div>

        </div>
      </section>

      {/* ───────────────── YOGA ───────────────── */}
      <section className="bg-[#30251c] px-6 py-12 text-[#f7f1e5] md:px-10 md:py-14 lg:px-16">
        <div className="mx-auto max-w-6xl">

          <p className="text-[10px] uppercase tracking-[0.3em] text-[#c9a45d] md:text-[11px]">
            {yoga.eyebrow}
          </p>

          <h2 className="mt-3 text-2xl font-semibold leading-tight md:text-3xl">
            {yoga.title}
          </h2>

          <p className="mt-3 max-w-3xl text-[14px] leading-6 text-[#d4c8b6] md:text-[15px] md:leading-7">
            {yoga.description}
          </p>

          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {yoga.paths.map((path, index) => (
              <article
                key={path.title}
                className="border border-[#514336] bg-[#352a20] p-5 transition-all duration-300 hover:border-[#806b4e]"
              >
                <span className="text-[10px] tracking-[0.2em] text-[#c9a45d]">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <h3 className="mt-4 text-base font-semibold">
                  {path.title}
                </h3>

                <p className="mt-3 text-[13px] leading-6 text-[#d4c8b6]">
                  {path.description}
                </p>
              </article>
            ))}
          </div>

        </div>
      </section>

      {/* ───────────────── PURANAS ───────────────── */}
      <section className="px-6 py-12 md:px-10 md:py-14 lg:px-16">
        <div className="mx-auto max-w-6xl">

          <p className="text-[10px] uppercase tracking-[0.3em] text-[#9b7128] md:text-[11px]">
            {puranas.eyebrow}
          </p>

          <h2 className="mt-3 text-2xl font-semibold leading-tight md:text-3xl">
            {puranas.title}
          </h2>

          <p className="mt-3 max-w-4xl text-[14px] leading-6 text-[#65594c] md:text-[15px] md:leading-7">
            {puranas.description}
          </p>

          <div className="mt-8 grid gap-3 md:grid-cols-2">
            {puranas.traditions.map((tradition, index) => (
              <article
                key={tradition.title}
                className="rounded-xl border border-[#ddd1bc] bg-[#faf6ed] p-5"
              >
                <div className="flex gap-4">

                  <span className="pt-1 text-[10px] tracking-[0.2em] text-[#9b7128]">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <div>
                    <h3 className="text-lg font-semibold">
                      {tradition.title}
                    </h3>

                    <p className="mt-3 text-[13px] leading-6 text-[#6b5d4d]">
                      {tradition.description}
                    </p>
                  </div>

                </div>
              </article>
            ))}
          </div>

        </div>
      </section>

      {/* ───────────────── PRIMARY TEXTS ───────────────── */}
      <section className="border-y border-[#d9cdb8] bg-[#eee5d4] px-6 py-12 md:px-10 md:py-14 lg:px-16">
        <div className="mx-auto max-w-6xl">

          <p className="text-[10px] uppercase tracking-[0.3em] text-[#9b7128] md:text-[11px]">
            {texts.eyebrow}
          </p>

          <h2 className="mt-3 text-2xl font-semibold leading-tight md:text-3xl">
            {texts.title}
          </h2>

          <p className="mt-3 max-w-3xl text-[14px] leading-6 text-[#65594c] md:text-[15px] md:leading-7">
            {texts.description}
          </p>

          <div className="mt-8 grid gap-x-10 gap-y-6 md:grid-cols-2">
            {texts.items.map((text, index) => (
              <article
                key={text.title}
                className="flex gap-4 border-b border-[#d7c9b1] pb-6"
              >
                <span className="pt-1 text-[10px] tracking-[0.2em] text-[#9b7128]">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <div>

                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1">

                    <h3 className="text-base font-semibold">
                      {text.title}
                    </h3>

                    <span className="text-[9px] uppercase tracking-[0.16em] text-[#9b7128]">
                      {text.category}
                    </span>

                  </div>

                  <p className="mt-2.5 text-[13px] leading-6 text-[#6b5d4d]">
                    {text.description}
                  </p>

                </div>
              </article>
            ))}
          </div>

        </div>
      </section>

      {/* ───────────────── CONCEPTS ───────────────── */}
      <section className="px-6 py-12 md:px-10 md:py-14 lg:px-16">
        <div className="mx-auto max-w-6xl">

          <p className="text-[10px] uppercase tracking-[0.3em] text-[#9b7128] md:text-[11px]">
            {concepts.eyebrow}
          </p>

          <h2 className="mt-3 max-w-3xl text-2xl font-semibold leading-tight md:text-3xl">
            {concepts.title}
          </h2>

          <div className="mt-8 grid gap-x-8 gap-y-8 sm:grid-cols-2 lg:grid-cols-4">
            {concepts.items.map((concept) => (
              <article key={concept.title}>

                <div className="h-px w-8 bg-[#b58a3a]" />

                <h3 className="mt-4 text-base font-semibold">
                  {concept.title}
                </h3>

                <p className="mt-2.5 text-[13px] leading-6 text-[#6b5d4d]">
                  {concept.description}
                </p>

              </article>
            ))}
          </div>

        </div>
      </section>

      {/* ───────────────── DISCERNMENT ───────────────── */}
      <section className="border-y border-[#ddd0b9] bg-[#f0e8da] px-6 py-12 md:px-10 md:py-14 lg:px-16">
        <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-[0.75fr_1.25fr] md:gap-14">

          <div>

            <p className="text-[10px] uppercase tracking-[0.3em] text-[#9b7128] md:text-[11px]">
              {discernment.eyebrow}
            </p>

            <h2 className="mt-3 text-2xl font-semibold leading-tight md:text-3xl">
              {discernment.title}
            </h2>

            <p className="mt-3 text-[14px] leading-6 text-[#65594c] md:text-[15px] md:leading-7">
              {discernment.description}
            </p>

          </div>

          <div>
            <div className="space-y-0">
              {discernment.principles.map((principle, index) => (
                <div
                  key={index}
                  className="flex gap-4 border-b border-[#d6c8b0] py-4 first:pt-0"
                >
                  <span className="shrink-0 pt-1 text-[10px] tracking-[0.2em] text-[#9b7128]">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <p className="text-[13px] leading-6 text-[#5f5244]">
                    {principle}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* ───────────────── CLOSING ───────────────── */}
      <section className="px-6 py-14 text-center md:px-10 md:py-16 lg:px-16">
        <div className="mx-auto max-w-3xl">

          <div className="text-xl text-[#9b7128]">
            ॐ
          </div>

          <h2 className="mt-4 text-2xl font-semibold md:text-3xl">
            {closing.title}
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-[14px] leading-6 text-[#65594c] md:text-[15px] md:leading-7">
            {closing.description}
          </p>

          <Link
            href={closing.buttonHref}
            className="mt-6 inline-flex rounded-full bg-[#9b7128] px-7 py-3 text-sm font-medium text-white transition-all duration-300 hover:bg-[#7d5b22] hover:shadow-md"
          >
            {closing.buttonText}
          </Link>

        </div>
      </section>

    </main>
  );
}