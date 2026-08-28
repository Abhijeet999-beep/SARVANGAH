import Link from "next/link";
import { philosophyPageContent } from "@/content/philosophyPage";

export default function PhilosophyPage() {
  const {
    labels,
    hero,
    introduction,
    dharma,
    shivaTattva,
    innerJourney,
    foundations,
    reflection,
    cta,
  } = philosophyPageContent;

  return (
    <main className="overflow-hidden bg-[#f7f1e5] text-[#30251c]">
      {/* Hero */}
      <section className="px-6 pb-14 pt-28 md:pb-16 md:pt-36 lg:px-12">
        <div className="mx-auto max-w-5xl text-center">
          <p className="mb-3 text-[10px] font-medium uppercase tracking-[0.34em] text-[#9b7128] md:text-[11px]">
            {hero.eyebrow}
          </p>

          <h1 className="mx-auto max-w-4xl text-[38px] font-semibold leading-[1.08] tracking-[-0.025em] md:text-[46px] lg:text-[52px]">
            {hero.title}
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-[14px] leading-6 text-[#6b5d4d] md:mt-6 md:text-[15px] md:leading-7">
            {hero.description}
          </p>

          <div className="mx-auto mt-6 flex items-center justify-center gap-3">
            <span className="h-px w-9 bg-[#c5a467]" />

            <span className="text-sm text-[#9b7128]">
              {labels.symbol}
            </span>

            <span className="h-px w-9 bg-[#c5a467]" />
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="border-t border-[#e1d6c2] px-6 py-14 md:py-16 lg:px-12">
        <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-[0.7fr_1.3fr] md:gap-14">
          <div>
            <p className="text-[10px] uppercase tracking-[0.3em] text-[#9b7128] md:text-[11px]">
              {labels.introduction}
            </p>

            <h2 className="mt-2 max-w-sm text-2xl font-semibold leading-tight md:text-3xl">
              {introduction.title}
            </h2>
          </div>

          <div className="max-w-2xl space-y-3 text-[14px] leading-6 text-[#65594c] md:text-[15px] md:leading-7">
            {introduction.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>

      {/* Dharma */}
      <section className="border-y border-[#ddd0b9] bg-[#eee5d4] px-6 py-14 md:py-16 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-3xl">
            <p className="text-[10px] uppercase tracking-[0.3em] text-[#9b7128] md:text-[11px]">
              {labels.dharma}
            </p>

            <h2 className="mt-2 text-2xl font-semibold leading-tight md:text-3xl">
              {dharma.title}
            </h2>

            <p className="mt-3 max-w-2xl text-[14px] leading-6 text-[#65594c] md:text-[15px] md:leading-7">
              {dharma.description}
            </p>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {dharma.points.map((point, index) => (
              <article
                key={point.title}
                className="group rounded-xl border border-[#d6c7aa] bg-[#f8f2e6] p-5 transition-transform duration-300 hover:-translate-y-1"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[10px] tracking-[0.2em] text-[#b58a3a]">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span className="h-px w-7 bg-[#cbb88f]" />
                </div>

                <h3 className="mt-5 text-base font-semibold">
                  {point.title}
                </h3>

                <p className="mt-2 text-[13px] leading-6 text-[#6b5d4d]">
                  {point.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Shiva Tattva */}
      <section className="px-6 py-14 md:py-16 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-[10px] uppercase tracking-[0.3em] text-[#9b7128] md:text-[11px]">
              {labels.shivaTattva}
            </p>

            <h2 className="mt-2 text-2xl font-semibold leading-tight md:text-3xl">
              {shivaTattva.title}
            </h2>

            <p className="mt-3 text-[14px] leading-6 text-[#65594c] md:text-[15px] md:leading-7">
              {shivaTattva.description}
            </p>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {shivaTattva.principles.map((principle, index) => (
              <article
                key={principle.title}
                className="rounded-xl border border-[#ddd1bc] bg-[#faf6ed] p-5"
              >
                <span className="text-[10px] tracking-[0.2em] text-[#b58a3a]">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <h3 className="mt-4 text-base font-semibold">
                  {principle.title}
                </h3>

                <p className="mt-2 text-[13px] leading-6 text-[#6b5d4d]">
                  {principle.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Inner Journey */}
      <section className="bg-[#30251c] px-6 py-14 text-[#f7f1e5] md:py-16 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-10 md:grid-cols-[0.8fr_1.2fr] md:gap-14">
            <div>
              <p className="text-[10px] uppercase tracking-[0.3em] text-[#c9a45d] md:text-[11px]">
                {labels.innerJourney}
              </p>

              <h2 className="mt-2 text-2xl font-semibold leading-tight md:text-3xl">
                {innerJourney.title}
              </h2>

              <p className="mt-4 max-w-md text-[14px] leading-6 text-[#d5c9b7] md:text-[15px] md:leading-7">
                {innerJourney.description}
              </p>
            </div>

            <div>
              {innerJourney.steps.map((step, index) => (
                <div
                  key={step}
                  className="flex gap-4 border-b border-[#514335] py-3 first:pt-0 last:border-none"
                >
                  <span className="shrink-0 text-[10px] tracking-[0.15em] text-[#c9a45d]">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <p className="text-[13px] leading-6 text-[#eee6d9]">
                    {step}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Foundations */}
      <section className="px-6 py-14 md:py-16 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-3xl">
            <p className="text-[10px] uppercase tracking-[0.3em] text-[#9b7128] md:text-[11px]">
              {labels.foundations}
            </p>

            <h2 className="mt-2 text-2xl font-semibold leading-tight md:text-3xl">
              {foundations.title}
            </h2>

            <p className="mt-3 text-[14px] leading-6 text-[#65594c] md:text-[15px] md:leading-7">
              {foundations.description}
            </p>
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {foundations.items.map((item) => (
              <article
                key={item.title}
                className="border-t-2 border-[#b58a3a] pt-4"
              >
                <span className="text-xl font-semibold text-[#9b7128]">
                  {item.title}
                </span>

                <h3 className="mt-1 text-sm font-semibold">
                  {item.subtitle}
                </h3>

                <p className="mt-2 text-[13px] leading-6 text-[#6b5d4d]">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Reflection */}
      <section className="border-t border-[#e1d6c2] px-6 py-14 md:py-16 lg:px-12">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-[10px] uppercase tracking-[0.3em] text-[#9b7128] md:text-[11px]">
            {labels.reflection}
          </p>

          <h2 className="mt-2 text-2xl font-semibold md:text-3xl">
            {reflection.title}
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-[14px] leading-6 text-[#65594c] md:text-[15px] md:leading-7">
            {reflection.description}
          </p>

          <blockquote className="mx-auto mt-6 max-w-3xl border-y border-[#d8cbb5] py-6 text-base font-medium italic leading-7 text-[#493a2b] md:text-lg md:leading-8">
            “{reflection.quote}”
          </blockquote>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#eee5d4] px-6 py-12 md:py-14 lg:px-12">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-2xl font-semibold md:text-3xl">
            {cta.title}
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-[14px] leading-6 text-[#65594c] md:text-[15px] md:leading-7">
            {cta.description}
          </p>

          <Link
            href={cta.buttonHref}
            className="mt-6 inline-flex rounded-full bg-[#9b7128] px-6 py-2.5 text-sm font-medium text-white transition-all duration-300 hover:bg-[#7f5c20] hover:shadow-md"
          >
            {cta.buttonText}
          </Link>
        </div>
      </section>
    </main>
  );
}