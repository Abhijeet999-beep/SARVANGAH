"use client";

import Link from "next/link";
import {
  Shield,
  FileText,
  Lock,
  Scale,
  Award,
  ExternalLink,
  MailCheck,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";
import { rightsPageContent } from "@/content/rightsPage";
import Footer from "@/components/Footer";
import { footerContent } from "@/content/footer";

export default function RightsPage() {
  const content = rightsPageContent;

  return (
    <>
      <main className="min-h-screen overflow-x-hidden bg-[#f7f1e5] text-[#30251c] selection:bg-[#c5a467]/30 selection:text-[#1d1712]">
        {/* =========================================================
            HERO SECTION — PRIMARY H1 (COMPACT & AUTHORITATIVE)
        ========================================================= */}
        <section className="relative overflow-hidden border-b border-[#e1d6c2] px-5 pb-10 pt-24 sm:px-8 sm:pb-12 sm:pt-28 md:px-12 md:pb-14 md:pt-32 lg:px-16">
          {/* Subtle spiritual ambient circles */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-32 -top-32 h-[420px] w-[420px] rounded-full border border-[#9b7128]/10 sm:h-[520px] sm:w-[520px]"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-16 -top-16 h-[280px] w-[280px] rounded-full border border-[#9b7128]/10 sm:h-[360px] sm:w-[360px]"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-36 -left-36 h-[420px] w-[420px] rounded-full border border-[#9b7128]/8"
          />

          <div className="relative mx-auto max-w-4xl text-center">
            {/* Eyebrow */}
            <p className="mb-2.5 inline-flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-[0.32em] text-[#9b7128] sm:text-[11px]">
              <span>ॐ</span>
              <span>{content.hero.eyebrow}</span>
            </p>

            {/* PRIMARY H1 */}
            <h1 className="mx-auto max-w-3xl font-serif text-[32px] font-normal leading-[1.12] tracking-[-0.02em] text-[#2f251d] sm:text-[42px] md:text-[48px] lg:text-[54px]">
              {content.hero.title}
            </h1>

            {/* Decorative Divider */}
            <div className="mx-auto mt-4 flex items-center justify-center gap-2.5">
              <span className="h-px w-8 bg-[#c5a467]" />
              <span className="text-xs text-[#9b7128]">✦</span>
              <span className="h-px w-8 bg-[#c5a467]" />
            </div>

            {/* Description */}
            <p className="mx-auto mt-3.5 max-w-2xl text-[14px] leading-relaxed text-[#6b5d4d] sm:text-[15px] sm:leading-7">
              {content.hero.description}
            </p>

            {/* Date & Copyright Badges */}
            <div className="mt-5 flex flex-wrap items-center justify-center gap-2.5 sm:mt-6 sm:gap-3">
              <div className="inline-flex items-center gap-1.5 rounded-full border border-[#c5a467]/40 bg-[#f4efe4]/90 px-3.5 py-1 text-[11px] font-medium text-[#7d5b22] backdrop-blur-xs sm:text-xs">
                <span className="h-1.5 w-1.5 rounded-full bg-[#9b7128]" />
                <span>{content.hero.effectiveDate}</span>
              </div>
              <div className="inline-flex items-center gap-1.5 rounded-full border border-[#c5a467]/40 bg-[#f4efe4]/90 px-3.5 py-1 text-[11px] font-medium text-[#7d5b22] backdrop-blur-xs sm:text-xs">
                <Shield size={12} strokeWidth={1.7} className="text-[#9b7128]" />
                <span>{content.hero.copyrightNotice}</span>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            SECTION 1: OWNERSHIP (H2)
        ========================================================= */}
        <section className="border-b border-[#e1d6c2] px-5 py-10 sm:px-8 sm:py-12 md:px-12 md:py-14 lg:px-16">
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-6 md:grid-cols-[0.8fr_1.2fr] md:gap-12">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#9b7128] sm:text-[11px]">
                  {content.ownership.eyebrow}
                </p>
                <h2 className="mt-2 font-serif text-2xl font-normal leading-tight text-[#2f251d] sm:text-3xl md:text-[34px]">
                  {content.ownership.title}
                </h2>
                <div className="mt-4 hidden md:block">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#c5a467]/40 bg-[#eee5d4]">
                    <Shield size={18} strokeWidth={1.5} className="text-[#9b7128]" />
                  </div>
                </div>
              </div>

              <div className="space-y-3.5 text-[14px] leading-relaxed text-[#65594c] sm:text-[15px] sm:leading-7">
                {content.ownership.paragraphs.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}

                {/* Ownership Scope Cards */}
                <div className="mt-6 grid gap-3 pt-2 sm:grid-cols-3">
                  {content.ownership.scopePoints.map((point) => (
                    <div
                      key={point.title}
                      className="rounded-lg border border-[#e1d6c2] bg-[#f4ede0] p-3.5 transition-colors hover:border-[#c5a467]/60"
                    >
                      <h4 className="text-xs font-semibold text-[#2f251d] sm:text-sm">
                        {point.title}
                      </h4>
                      <p className="mt-1.5 text-xs leading-relaxed text-[#6b5d4d]">
                        {point.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            SECTION 2: PROTECTED MATERIALS (H2)
        ========================================================= */}
        <section className="border-b border-[#e1d6c2] bg-[#eee5d4] px-5 py-10 sm:px-8 sm:py-12 md:px-12 md:py-14 lg:px-16">
          <div className="mx-auto max-w-6xl">
            <div className="max-w-3xl">
              <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#9b7128] sm:text-[11px]">
                {content.protectedMaterials.eyebrow}
              </p>
              <h2 className="mt-2 font-serif text-2xl font-normal leading-tight text-[#2f251d] sm:text-3xl md:text-[34px]">
                {content.protectedMaterials.title}
              </h2>
              <p className="mt-2.5 text-[14px] leading-relaxed text-[#65594c] sm:text-[15px]">
                {content.protectedMaterials.description}
              </p>
            </div>

            <div className="mt-7 grid gap-3.5 sm:grid-cols-2 lg:grid-cols-3">
              {content.protectedMaterials.categories.map((category, index) => (
                <div
                  key={category.title}
                  className="group relative rounded-xl border border-[#ded3be] bg-[#f7f1e5] p-4.5 transition-all duration-300 hover:border-[#c5a467] hover:shadow-xs sm:p-5"
                >
                  <div className="mb-3 flex items-center justify-between">
                    <span className="text-[10px] font-semibold tracking-wider text-[#9b7128] sm:text-[11px]">
                      0{index + 1}
                    </span>
                    <FileText
                      size={16}
                      strokeWidth={1.5}
                      className="text-[#9b7128]/70 transition-transform group-hover:scale-110"
                    />
                  </div>
                  <h4 className="text-sm font-semibold text-[#2f251d] sm:text-[15px]">
                    {category.title}
                  </h4>
                  <p className="mt-1.5 text-xs leading-relaxed text-[#65594c]">
                    {category.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* =========================================================
            SECTION 3: UNAUTHORIZED USE (H2)
        ========================================================= */}
        <section className="border-b border-[#e1d6c2] px-5 py-10 sm:px-8 sm:py-12 md:px-12 md:py-14 lg:px-16">
          <div className="mx-auto max-w-6xl">
            <div className="max-w-3xl">
              <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#9b7128] sm:text-[11px]">
                {content.unauthorizedUse.eyebrow}
              </p>
              <h2 className="mt-2 font-serif text-2xl font-normal leading-tight text-[#2f251d] sm:text-3xl md:text-[34px]">
                {content.unauthorizedUse.title}
              </h2>
              <p className="mt-2.5 text-[14px] leading-relaxed text-[#65594c] sm:text-[15px]">
                {content.unauthorizedUse.description}
              </p>
            </div>

            <div className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {content.unauthorizedUse.restrictions.map((restriction) => (
                <div
                  key={restriction.title}
                  className="rounded-lg border border-[#e1d6c2] bg-[#fbf8f2] p-3.5 sm:p-4"
                >
                  <div className="flex items-start gap-2.5">
                    <div className="mt-0.5 flex h-4.5 w-4.5 shrink-0 items-center justify-center rounded-full bg-[#f4ede0] text-[#9b7128]">
                      <Lock size={11} strokeWidth={2} />
                    </div>
                    <div>
                      <h4 className="text-xs font-semibold text-[#2f251d] sm:text-sm">
                        {restriction.title}
                      </h4>
                      <p className="mt-1 text-xs leading-relaxed text-[#65594c]">
                        {restriction.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Legal Exceptions / Fair Use Note */}
            <div className="mt-6 rounded-xl border border-[#c5a467]/30 bg-[#f4ede0] p-4 sm:p-5 text-xs leading-relaxed text-[#6b5d4d]">
              <div className="flex items-start gap-2.5">
                <AlertCircle
                  size={16}
                  strokeWidth={1.6}
                  className="mt-0.5 shrink-0 text-[#9b7128]"
                />
                <p>
                  <strong className="text-[#2f251d]">Statutory Exceptions & Fair Dealing: </strong>
                  {content.unauthorizedUse.exceptionsNotice}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            SECTION 4: ENFORCEMENT (H2)
        ========================================================= */}
        <section className="border-b border-[#e1d6c2] bg-[#eee5d4] px-5 py-10 sm:px-8 sm:py-12 md:px-12 md:py-14 lg:px-16">
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-6 md:grid-cols-[0.8fr_1.2fr] md:gap-12">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#9b7128] sm:text-[11px]">
                  {content.enforcement.eyebrow}
                </p>
                <h2 className="mt-2 font-serif text-2xl font-normal leading-tight text-[#2f251d] sm:text-3xl md:text-[34px]">
                  {content.enforcement.title}
                </h2>
                <div className="mt-4 hidden md:block">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#c5a467]/40 bg-[#f7f1e5]">
                    <Scale size={18} strokeWidth={1.5} className="text-[#9b7128]" />
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                {/* Highlighted Official Statement */}
                <blockquote className="rounded-xl border-l-3 border-[#9b7128] bg-[#f7f1e5] p-4 sm:p-5 shadow-2xs">
                  <p className="font-serif text-[15px] italic leading-relaxed text-[#2f251d] sm:text-[17px]">
                    &ldquo;{content.enforcement.statement}&rdquo;
                  </p>
                </blockquote>

                <div className="space-y-3 text-[14px] leading-relaxed text-[#65594c] sm:text-[15px] sm:leading-7">
                  {content.enforcement.paragraphs.map((para, index) => (
                    <p key={index}>{para}</p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            SECTION 5: FOUNDING TEAM (H2) & H3 LEADERSHIP + SIGNATURES
        ========================================================= */}
        <section className="border-b border-[#e1d6c2] px-5 py-10 sm:px-8 sm:py-12 md:px-12 md:py-14 lg:px-16">
          <div className="mx-auto max-w-6xl">
            <div className="text-center">
              <p className="text-[10px] font-semibold uppercase tracking-[0.32em] text-[#9b7128] sm:text-[11px]">
                {content.foundingTeam.eyebrow}
              </p>
              <h2 className="mt-2 font-serif text-2xl font-normal leading-tight text-[#2f251d] sm:text-3xl md:text-[36px]">
                {content.foundingTeam.title}
              </h2>
              <div className="mx-auto mt-3 flex items-center justify-center gap-2.5">
                <span className="h-px w-7 bg-[#c5a467]" />
                <span className="text-xs text-[#9b7128]">✦</span>
                <span className="h-px w-7 bg-[#c5a467]" />
              </div>
              <p className="mx-auto mt-2.5 max-w-2xl text-[14px] leading-relaxed text-[#65594c] sm:text-[15px]">
                {content.foundingTeam.description}
              </p>
            </div>

            {/* Team Members Cards with H3 Structure */}
            <div className="mt-8 grid gap-5 md:grid-cols-2">
              {content.foundingTeam.members.map((member) => (
                <div
                  key={member.name}
                  className="flex flex-col justify-between rounded-xl border border-[#ded3be] bg-[#fbf8f2] p-5 shadow-2xs transition-colors hover:border-[#c5a467] sm:p-6"
                >
                  <div>
                    {/* H3 Role Title */}
                    <div className="flex items-center justify-between border-b border-[#e1d6c2] pb-3">
                      <h3 className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#9b7128]">
                        {member.roleTitle}
                      </h3>
                      <span className="text-[11px] text-[#b58a3a]">Sarvāṅgaḥ</span>
                    </div>

                    {/* Member Name */}
                    <p className="mt-3.5 font-serif text-xl font-normal text-[#2f251d] sm:text-2xl">
                      {member.name}
                    </p>

                    <p className="mt-2 text-xs leading-relaxed text-[#65594c] sm:text-[13px]">
                      {member.roleDescription}
                    </p>

                    {/* Focus Areas */}
                    <div className="mt-4">
                      <p className="text-[10px] font-semibold uppercase tracking-wider text-[#9b7128]">
                        Key Areas of Authorship & Stewardship:
                      </p>
                      <ul className="mt-2 space-y-1.5">
                        {member.focusAreas.map((area) => (
                          <li
                            key={area}
                            className="flex items-center gap-2 text-xs text-[#594a3d]"
                          >
                            <span className="h-1.5 w-1.5 rounded-full bg-[#9b7128]" />
                            <span>{area}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* SIGNATURE SECTION — Clean Typographic Acknowledgement */}
                  <div className="mt-6 border-t border-[#e1d6c2] pt-4">
                    <p className="text-[10px] uppercase tracking-widest text-[#9b7128]">
                      Authorized by
                    </p>
                    <p className="mt-1 font-serif text-base font-medium text-[#2f251d] sm:text-lg">
                      {member.name}
                    </p>
                    <p className="text-xs text-[#7d5b22]">{member.roleTitle}</p>

                    {/* Refined Signature Line */}
                    <div className="mt-3">
                      <div className="flex items-center justify-between text-[9px] uppercase tracking-wider text-[#9b7128] sm:text-[10px]">
                        <span>Signature Acknowledgement</span>
                        <span className="font-mono text-[9px] text-[#9b7128]/70">
                          [ Verified Public Attestation ]
                        </span>
                      </div>
                      <div className="mt-1.5 h-px w-full bg-[#30251c]/30" />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Signature Notice */}
            <p className="mt-5 text-center text-xs text-[#8c7a68]">
              {content.foundingTeam.signatureNotice}
            </p>
          </div>
        </section>

        {/* =========================================================
            SECTION 6: BRAND & IDENTITY (H2)
        ========================================================= */}
        <section className="border-b border-[#e1d6c2] bg-[#eee5d4] px-5 py-10 sm:px-8 sm:py-12 md:px-12 md:py-14 lg:px-16">
          <div className="mx-auto max-w-6xl">
            <div className="max-w-3xl">
              <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#9b7128] sm:text-[11px]">
                {content.brandIdentity.eyebrow}
              </p>
              <h2 className="mt-2 font-serif text-2xl font-normal leading-tight text-[#2f251d] sm:text-3xl md:text-[34px]">
                {content.brandIdentity.title}
              </h2>
              <p className="mt-2.5 text-[14px] leading-relaxed text-[#65594c] sm:text-[15px]">
                {content.brandIdentity.description}
              </p>
            </div>

            <div className="mt-7 grid gap-3.5 sm:grid-cols-2">
              {content.brandIdentity.guidelines.map((guideline) => (
                <div
                  key={guideline.title}
                  className="rounded-xl border border-[#ded3be] bg-[#f7f1e5] p-4.5 transition-colors hover:border-[#c5a467] sm:p-5"
                >
                  <div className="flex items-center gap-2">
                    <Award size={16} strokeWidth={1.5} className="text-[#9b7128]" />
                    <h4 className="text-sm font-semibold text-[#2f251d] sm:text-[15px]">
                      {guideline.title}
                    </h4>
                  </div>
                  <p className="mt-2 text-xs leading-relaxed text-[#65594c]">
                    {guideline.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* =========================================================
            SECTION 7: THIRD-PARTY MATERIALS (H2)
        ========================================================= */}
        <section className="border-b border-[#e1d6c2] px-5 py-10 sm:px-8 sm:py-12 md:px-12 md:py-14 lg:px-16">
          <div className="mx-auto max-w-6xl">
            <div className="max-w-3xl">
              <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#9b7128] sm:text-[11px]">
                {content.thirdPartyMaterials.eyebrow}
              </p>
              <h2 className="mt-2 font-serif text-2xl font-normal leading-tight text-[#2f251d] sm:text-3xl md:text-[34px]">
                {content.thirdPartyMaterials.title}
              </h2>
              <p className="mt-2.5 text-[14px] leading-relaxed text-[#65594c] sm:text-[15px]">
                {content.thirdPartyMaterials.description}
              </p>
            </div>

            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              {content.thirdPartyMaterials.disclaimers.map((item) => (
                <div
                  key={item.title}
                  className="rounded-lg border border-[#e1d6c2] bg-[#fbf8f2] p-3.5 sm:p-4"
                >
                  <div className="flex items-start gap-2.5">
                    <ExternalLink
                      size={15}
                      strokeWidth={1.6}
                      className="mt-0.5 shrink-0 text-[#9b7128]"
                    />
                    <div>
                      <h4 className="text-xs font-semibold text-[#2f251d] sm:text-sm">
                        {item.title}
                      </h4>
                      <p className="mt-1 text-xs leading-relaxed text-[#65594c]">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* =========================================================
            SECTION 8: PERMISSIONS & CONTACT (H2)
        ========================================================= */}
        <section className="border-b border-[#e1d6c2] bg-[#eee5d4] px-5 py-10 sm:px-8 sm:py-12 md:px-12 md:py-14 lg:px-16">
          <div className="mx-auto max-w-6xl">
            <div className="max-w-3xl">
              <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#9b7128] sm:text-[11px]">
                {content.permissionsAndContact.eyebrow}
              </p>
              <h2 className="mt-2 font-serif text-2xl font-normal leading-tight text-[#2f251d] sm:text-3xl md:text-[34px]">
                {content.permissionsAndContact.title}
              </h2>
              <p className="mt-2.5 text-[14px] leading-relaxed text-[#65594c] sm:text-[15px]">
                {content.permissionsAndContact.description}
              </p>
            </div>

            <div className="mt-7 grid gap-3.5 sm:grid-cols-3">
              {content.permissionsAndContact.inquiryProcess.map((step) => (
                <div
                  key={step.title}
                  className="rounded-xl border border-[#ded3be] bg-[#f7f1e5] p-4.5 sm:p-5"
                >
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={15} className="text-[#9b7128]" />
                    <h4 className="text-xs font-semibold text-[#2f251d] sm:text-sm">
                      {step.title}
                    </h4>
                  </div>
                  <p className="mt-2 text-xs leading-relaxed text-[#65594c]">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-xl border border-[#c5a467]/40 bg-[#f4ede0] p-4 sm:p-5">
              <div className="flex flex-col gap-3.5 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-start gap-2.5">
                  <MailCheck size={18} className="mt-0.5 shrink-0 text-[#9b7128]" />
                  <p className="text-xs leading-relaxed text-[#594a3d] sm:text-[13px]">
                    {content.permissionsAndContact.contactNote}
                  </p>
                </div>
                <Link
                  href="/community"
                  className="inline-flex shrink-0 items-center justify-center rounded-full bg-[#9b7128] px-5 py-2 text-xs font-medium text-white transition-colors hover:bg-[#7d5b22]"
                >
                  Community & Contact Touchpoints
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            SECTION 9: COPYRIGHT NOTICE (H2)
        ========================================================= */}
        <section className="px-5 py-10 pb-14 sm:px-8 sm:py-12 sm:pb-16 md:px-12 md:py-14 md:pb-18 lg:px-16">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-[10px] font-semibold uppercase tracking-[0.32em] text-[#9b7128] sm:text-[11px]">
              {content.copyrightSection.eyebrow}
            </p>
            <h2 className="mt-2 font-serif text-2xl font-normal leading-tight text-[#2f251d] sm:text-3xl md:text-[34px]">
              {content.copyrightSection.title}
            </h2>

            <div className="mx-auto mt-3 flex items-center justify-center gap-2.5">
              <span className="h-px w-8 bg-[#c5a467]" />
              <span className="text-xs text-[#9b7128]">ॐ</span>
              <span className="h-px w-8 bg-[#c5a467]" />
            </div>

            <div className="mt-6 rounded-2xl border border-[#c5a467]/40 bg-[#eee5d4] p-5 sm:p-7 text-center shadow-2xs">
              <p className="font-serif text-base font-medium leading-relaxed text-[#2f251d] sm:text-lg">
                {content.copyrightSection.formalNotice}
              </p>
              <div className="mx-auto my-4 h-px w-20 bg-[#c5a467]/60" />
              <p className="text-xs leading-relaxed text-[#7a6b5c]">
                {content.copyrightSection.legalDisclaimer}
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <Footer {...footerContent} />
    </>
  );
}
