"use client";

import Image from "next/image";
import Link from "next/link";
import { SignIn } from "@clerk/nextjs";
import { Sparkles, ArrowLeft } from "lucide-react";

export default function LoginPage() {
  return (
    <div className="relative flex min-h-screen flex-col justify-between overflow-x-hidden bg-[#f4efe4] text-[#2b2118]">

      {/* ─────────────────────────────────────────────────────────────
          1. BACKGROUND SPIRITUAL ARTWORK (Shiv Ji Meditation Art)
      ────────────────────────────────────────────────────────────── */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <div className="relative h-full w-full">
          <Image
            src="/images/hero/meditation.webp"
            alt="Lord Shiva in Deep Meditation - Sarvāṅgaḥ"
            fill
            priority
            className="object-cover object-top opacity-20 lg:object-[left_28%] lg:opacity-30"
          />
          {/* Refined parchment gradient overlay */}
          <div
            className="absolute inset-0 bg-gradient-to-b from-[#f4efe4]/95 via-[#f4efe4]/90 to-[#f4efe4] lg:bg-gradient-to-r lg:from-[#f4efe4]/75 lg:via-[#f4efe4]/90 lg:to-[#f4efe4]"
            aria-hidden="true"
          />
          {/* Subtle sacred gold geometry rings */}
          <div
            className="pointer-events-none absolute -left-28 top-1/4 h-[550px] w-[550px] rounded-full border border-[#a47c3c]/15"
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute -left-14 top-1/4 h-[440px] w-[440px] rounded-full border border-[#a47c3c]/10"
            aria-hidden="true"
          />
        </div>
      </div>

      {/* ─────────────────────────────────────────────────────────────
          2. STANDALONE MINIMAL AUTHENTICATION TOP BAR
      ────────────────────────────────────────────────────────────── */}
      <div role="banner" className="relative z-20 w-full border-b border-[#2b2118]/10 bg-[#f4efe4]/95 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-[1400px] items-center justify-between px-4 sm:h-20 sm:px-8 lg:px-16">
          {/* Brand */}
          <Link href="/" className="flex items-center gap-3" aria-label="Sarvāṅgaḥ Home">
            <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[#b58a3a] bg-[#fbf8f2] font-serif text-lg text-[#9b7128] shadow-sm sm:h-11 sm:w-11 sm:text-xl">
              ॐ
            </span>
            <div className="flex flex-col">
              <span className="font-serif text-xl font-semibold tracking-wider text-[#2b2118] sm:text-2xl">
                SARVĀṄGAḤ
              </span>
              <span className="text-[9px] font-medium uppercase tracking-[0.3em] text-[#9b7128] sm:text-[10px]">
                SANCTUARY OF WHOLENESS
              </span>
            </div>
          </Link>

          {/* Minimal Navigation Action */}

        </div>
      </div>

      {/* ─────────────────────────────────────────────────────────────
          3. MAIN CONTENT: NATURAL DOCUMENT FLOW & BALANCED GRID
      ────────────────────────────────────────────────────────────── */}
      <main className="relative z-10 mx-auto flex w-full max-w-[1400px] flex-1 flex-col justify-start px-4 pt-8 pb-14 sm:px-8 sm:pt-12 sm:pb-16 lg:px-16 lg:pt-14 lg:pb-16">

        <div className="grid w-full items-start gap-8 lg:grid-cols-12 lg:gap-12 lg:items-center xl:gap-16">

          {/* ─────────────────────────────────────────────────────────────
              DESKTOP LEFT COLUMN: Editorial Spiritual Sanctuary Panel (>= 1024px)
          ────────────────────────────────────────────────────────────── */}
          <div className="hidden flex-col justify-center space-y-7 lg:col-span-6 lg:flex xl:col-span-7">

            {/* Eyebrow badge */}
            <div className="inline-flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.35em] text-[#9b7128]">
              <Sparkles size={14} strokeWidth={1.5} />
              <span>✦ CONSCIOUS PRESENCE</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-4">
              <h1 className="font-serif text-[clamp(40px,4.2vw,58px)] font-normal leading-[1.08] tracking-[-0.02em] text-[#2b2118]">
                Return to yourself.
              </h1>

              <p className="max-w-[490px] text-[16px] leading-[1.85] text-[#6f5c48]">
                Continue your journey inward through wisdom, reflection, practice, and conscious living.
              </p>
            </div>

            {/* Sacred Geometry Divider */}
            <div className="flex items-center gap-4 pt-1">
              <span className="h-px w-16 bg-[#b58a3a]/40" />
              <span className="font-serif text-lg text-[#9b7128]">ॐ</span>
              <span className="h-px w-16 bg-[#b58a3a]/40" />
            </div>

            {/* Philosophy Tagline */}
            <div className="text-[13px] leading-relaxed text-[#8a765d]">
              <p className="font-serif italic text-[15px] text-[#7a644f]">
                Wholeness of Body, Mind, Intellect & Soul.
              </p>
            </div>
          </div>

          {/* ─────────────────────────────────────────────────────────────
              RIGHT (Desktop) / PRIMARY (Mobile & Tablet): Authentication Gateway Card
          ────────────────────────────────────────────────────────────── */}
          <div className="flex w-full justify-center lg:col-span-6 lg:justify-end xl:col-span-5">
            <div className="w-full max-w-[440px]">

              {/* Mobile & Tablet Dedicated Spiritual Header (< 1024px) */}
              <div className="mb-6 flex flex-col items-center text-center lg:hidden">
                <div className="inline-flex items-center gap-1.5 text-[10px] font-medium uppercase tracking-[0.3em] text-[#9b7128]">
                  <Sparkles size={12} strokeWidth={1.5} />
                  <span>✦ CONSCIOUS PRESENCE</span>
                </div>
                <h1 className="mt-2 font-serif text-2xl font-normal tracking-tight text-[#2b2118] xs:text-3xl">
                  Return to yourself.
                </h1>
                <p className="mt-1.5 max-w-[320px] text-xs leading-relaxed text-[#6f5c48] xs:text-sm">
                  Continue your journey inward through wisdom, reflection, and practice.
                </p>
                {/* Subtle Divider */}
                <div className="mt-3 flex items-center gap-3">
                  <span className="h-px w-10 bg-[#b58a3a]/30" />
                  <span className="font-serif text-sm text-[#9b7128]">ॐ</span>
                  <span className="h-px w-10 bg-[#b58a3a]/30" />
                </div>
              </div>

              {/* Authentication Shell Card */}
              <div className="w-full rounded-2xl border border-[#2b2118]/10 bg-[#fbf8f2] p-5 shadow-[0_8px_32px_rgba(43,33,24,0.04)] sm:p-8">

                {/* Canonical Authentication Header */}
                <div className="mb-6 text-center">
                  <h2 className="font-serif text-2xl font-normal text-[#2b2118] sm:text-[28px]">
                    Welcome Back
                  </h2>
                  <p className="mt-1 text-xs text-[#6f5c48] sm:text-sm">
                    Continue your journey within.
                  </p>
                </div>

                {/* Clerk Custom-Styled SignIn Component (Strictly Centered) */}
                <SignIn
                  path="/login"
                  routing="path"
                  fallbackRedirectUrl="/"
                  signUpUrl="/sign-up"
                  appearance={{
                    variables: {
                      colorPrimary: "#9b7128",
                      colorBackground: "#fbf8f2",
                      borderRadius: "0.75rem",
                      fontFamily: "inherit",
                    },
                    elements: {
                      rootBox: "w-full max-w-full flex justify-center bg-transparent shadow-none mx-auto",
                      cardBox: "w-full max-w-full shadow-none p-0 border-0 bg-transparent flex justify-center mx-auto",
                      card: "w-full max-w-full shadow-none p-0 border-0 bg-transparent flex flex-col items-center mx-auto",
                      main: "w-full max-w-full bg-transparent flex flex-col items-center mx-auto",
                      form: "w-full max-w-full flex flex-col mx-auto",
                      formField: "w-full max-w-full mx-auto",
                      // Suppress Clerk's generic default headers completely
                      header: "hidden",
                      headerTitle: "hidden",
                      headerSubtitle: "hidden",
                      headerBackRow: "hidden",
                      socialButtons: "w-full max-w-full mx-auto",
                      socialButtonsBlockButton:
                        "w-full max-w-full rounded-full border border-[#2b2118]/15 bg-[#fcfaf6] text-[#493c32] hover:border-[#9b7128] hover:bg-[#f4efe4] transition-colors py-2.5 min-h-[46px] flex items-center justify-center text-xs sm:text-sm font-medium shadow-none mx-auto",
                      socialButtonsBlockButtonText: "text-xs sm:text-sm font-medium text-[#493c32] text-center",
                      dividerRow: "w-full max-w-full my-4 flex items-center justify-center mx-auto",
                      dividerLine: "bg-[#2b2118]/10",
                      dividerText: "text-xs tracking-wider text-[#9b8977] bg-[#fbf8f2] px-3 font-normal",
                      formFieldLabel:
                        "text-[11px] sm:text-xs font-medium uppercase tracking-wider text-[#6f5c48] mb-1.5",
                      formFieldInput:
                        "w-full max-w-full rounded-lg border border-[#2b2118]/15 bg-[#fcfaf6] text-base sm:text-sm text-[#2b2118] focus:border-[#9b7128] focus:ring-1 focus:ring-[#9b7128]/20 transition-colors py-2.5 px-3.5 sm:py-3 sm:px-4 min-h-[46px]",
                      formButtonPrimary:
                        "w-full max-w-full rounded-full bg-[#9b7128] hover:bg-[#7f5c20] text-white text-xs sm:text-sm font-medium py-3 transition-colors duration-200 shadow-none min-h-[48px] cursor-pointer mt-2 mx-auto",
                      // Clean Ivory / Parchment Footer — NO black styling
                      footer: "w-full max-w-full pt-4 border-t border-[#2b2118]/10 mt-4 bg-transparent text-[#6f5c48] mx-auto",
                      footerAction: "w-full max-w-full bg-transparent text-[#6f5c48] flex justify-center items-center text-center mx-auto",
                      footerActionText: "text-xs sm:text-sm text-[#6f5c48]",
                      footerActionLink:
                        "text-[#9b7128] hover:text-[#7f5c20] font-medium underline underline-offset-4 transition-colors ml-1",
                      footerPages: "bg-transparent text-[#6f5c48]",
                      footerPagesLink: "text-[#9b7128] hover:text-[#7f5c20]",
                      identityPreviewText: "text-[#2b2118] text-sm font-medium",
                      identityPreviewEditButton: "text-[#9b7128] hover:text-[#7f5c20] text-xs font-medium",
                      formResendCodeLink: "text-[#9b7128] hover:text-[#7f5c20] text-xs font-medium",
                    },
                  }}
                />
              </div>

            </div>
          </div>

        </div>

      </main>

      {/* ─────────────────────────────────────────────────────────────
          4. MINIMAL FOOTER
      ────────────────────────────────────────────────────────────── */}
      <footer className="relative z-10 w-full border-t border-[#2b2118]/10 bg-[#f4efe4]/80 py-4">
        <div className="mx-auto flex max-w-[1400px] flex-col items-center justify-between gap-2 px-4 text-[10px] tracking-wide text-[#8a765d] sm:flex-row sm:px-8 sm:text-[11px] lg:px-16">
          <span>© {new Date().getFullYear()} Sarvāṅgaḥ. All rights reserved.</span>
          <span className="font-serif text-[#9b7128]">ॐ शान्तिः शान्तिः शान्तिः</span>
        </div>
      </footer>

    </div>
  );
}
