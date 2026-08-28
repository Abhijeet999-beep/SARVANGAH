"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import {
  Show,
  SignInButton,
  SignUpButton,
  UserButton,
} from "@clerk/nextjs";
import { navigationContent } from "@/content/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  // Close mobile menu whenever the route changes
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Close mobile menu with Escape
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, []);

  // Hide global navbar on authentication pages
  if (
    pathname?.startsWith("/login") ||
    pathname?.startsWith("/sign-in") ||
    pathname?.startsWith("/sign-up") ||
    pathname?.startsWith("/sso-callback")
  ) {
    return null;
  }

  const { brand, items } = navigationContent;

  return (
    <>
      {/* =====================================================
          GLOBAL NAVBAR
      ===================================================== */}

      <header
        className="
          fixed
          inset-x-0
          top-0
          z-[100]
          h-[68px]
          w-full
          border-b
          border-[#2b2118]/10
          bg-[#f4efe4]/95
          backdrop-blur-md
        "
        style={{
          margin: 0,
          padding: 0,
        }}
      >
        <nav
          aria-label="Main Navigation"
          className="
            mx-auto
            flex
            h-[68px]
            w-full
            max-w-[1500px]
            items-center
            justify-between
            px-5
            sm:px-8
            lg:px-12
            xl:px-16
          "
          style={{
            marginTop: 0,
            marginBottom: 0,
          }}
        >
          {/* =================================================
              BRAND
          ================================================= */}

          <Link
            href="/"
            aria-label={`${brand.name} home`}
            className="
              flex
              h-full
              shrink-0
              items-center
              gap-3
              leading-none
              transition-opacity
              duration-200
              hover:opacity-90
            "
          >
            <span
              className="
                flex
                h-[46px]
                w-[46px]
                shrink-0
                items-center
                justify-center
                rounded-full
                border
                border-[#b58a3a]
                bg-[#fbf8f2]
                font-serif
                text-[22px]
                leading-none
                text-[#9b7128]
                shadow-sm
                sm:h-[48px]
                sm:w-[48px]
                sm:text-[24px]
              "
            >
              {brand.symbol}
            </span>

            <span
              className="
                whitespace-nowrap
                font-serif
                text-[21px]
                font-semibold
                leading-none
                tracking-wide
                text-[#30251c]
                sm:text-[23px]
              "
            >
              {brand.name}
            </span>
          </Link>

          {/* =================================================
              DESKTOP NAVIGATION
          ================================================= */}

          <div
            className="
              hidden
              h-full
              items-center
              lg:flex
            "
          >
            <div
              className="
                flex
                items-center
                gap-8
                xl:gap-9
              "
            >
              {items.map((item) => {
                const isActive =
                  pathname === item.href ||
                  (item.href !== "/" &&
                    pathname?.startsWith(`${item.href}/`));

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    aria-current={isActive ? "page" : undefined}
                    className={`
                      relative
                      inline-flex
                      h-[68px]
                      items-center
                      whitespace-nowrap
                      text-[14px]
                      leading-none
                      tracking-[0.04em]
                      transition-colors
                      duration-200
                      ${isActive
                        ? "text-[#9b7128]"
                        : "text-[#66594b] hover:text-[#9b7128]"
                      }
                    `}
                  >
                    {item.label}

                    {isActive && (
                      <span
                        className="
                          absolute
                          bottom-[18px]
                          left-1/2
                          h-[1px]
                          w-5
                          -translate-x-1/2
                          bg-[#9b7128]/70
                        "
                      />
                    )}
                  </Link>
                );
              })}
            </div>
          </div>

          {/* =================================================
              RIGHT SIDE
          ================================================= */}

          <div
            className="
              flex
              h-full
              shrink-0
              items-center
              gap-2
              sm:gap-3
            "
          >
            {/* Signed Out */}

            <Show when="signed-out">
              <SignInButton mode="redirect">
                <button
                  type="button"
                  className="
                    inline-flex
                    h-[36px]
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-[#9b7128]
                    px-4
                    text-[12px]
                    font-medium
                    leading-none
                    text-[#6d4f20]
                    transition-all
                    duration-200
                    hover:bg-[#9b7128]
                    hover:text-white
                    cursor-pointer
                    sm:h-[38px]
                    sm:px-5
                    sm:text-[13px]
                  "
                >
                  Log In
                </button>
              </SignInButton>

              <SignUpButton mode="redirect">
                <button
                  type="button"
                  className="
                    hidden
                    h-[38px]
                    items-center
                    justify-center
                    rounded-full
                    bg-[#9b7128]
                    px-5
                    text-[13px]
                    font-medium
                    leading-none
                    text-white
                    shadow-sm
                    transition-all
                    duration-200
                    hover:bg-[#7f5c20]
                    cursor-pointer
                    sm:inline-flex
                  "
                >
                  Create Account
                </button>
              </SignUpButton>
            </Show>

            {/* Signed In */}

            <Show when="signed-in">
              <div
                className="
                  flex
                  h-[40px]
                  w-[40px]
                  items-center
                  justify-center
                "
              >
                <UserButton
                  appearance={{
                    elements: {
                      avatarBox: "h-9 w-9",
                    },
                  }}
                />
              </div>
            </Show>

            {/* Mobile Menu */}

            <button
              type="button"
              aria-label={
                isOpen
                  ? "Close navigation menu"
                  : "Open navigation menu"
              }
              aria-expanded={isOpen}
              aria-controls="mobile-navigation-menu"
              onClick={() => setIsOpen((previous) => !previous)}
              className="
                flex
                h-[40px]
                w-[40px]
                items-center
                justify-center
                rounded-lg
                text-[#30251c]
                transition-colors
                duration-200
                hover:bg-[#2b2118]/5
                cursor-pointer
                lg:hidden
              "
            >
              {isOpen ? (
                <X size={22} strokeWidth={1.7} />
              ) : (
                <Menu size={22} strokeWidth={1.7} />
              )}
            </button>
          </div>
        </nav>
      </header>

      {/* =====================================================
          MOBILE NAVIGATION
      ===================================================== */}

      {isOpen && (
        <>
          {/* Backdrop */}

          <button
            type="button"
            aria-label="Close navigation menu"
            onClick={() => setIsOpen(false)}
            className="
              fixed
              inset-0
              z-[90]
              bg-[#2b2118]/10
              backdrop-blur-[2px]
              lg:hidden
            "
          />

          {/* Menu */}

          <div
            id="mobile-navigation-menu"
            className="
              fixed
              inset-x-0
              top-[68px]
              z-[95]
              border-b
              border-[#b58a3a]/20
              bg-[#f4efe4]/98
              shadow-lg
              backdrop-blur-xl
              lg:hidden
            "
          >
            <nav
              aria-label="Mobile Navigation"
              className="
                mx-auto
                flex
                w-full
                max-w-[1500px]
                flex-col
                px-6
                py-5
                sm:px-8
              "
            >
              {items.map((item) => {
                const isActive =
                  pathname === item.href ||
                  (item.href !== "/" &&
                    pathname?.startsWith(`${item.href}/`));

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    aria-current={isActive ? "page" : undefined}
                    className={`
                      flex
                      min-h-[46px]
                      items-center
                      border-b
                      border-[#b58a3a]/10
                      text-[15px]
                      tracking-wide
                      transition-colors
                      duration-200
                      ${isActive
                        ? "font-semibold text-[#9b7128]"
                        : "text-[#66594b] hover:text-[#9b7128]"
                      }
                    `}
                  >
                    {item.label}
                  </Link>
                );
              })}

              {/* Mobile Create Account */}

              <Show when="signed-out">
                <div className="pt-5">
                  <SignUpButton mode="redirect">
                    <button
                      type="button"
                      onClick={() => setIsOpen(false)}
                      className="
                        flex
                        w-full
                        items-center
                        justify-center
                        rounded-full
                        bg-[#9b7128]
                        py-3
                        text-[13px]
                        font-medium
                        leading-none
                        text-white
                        shadow-sm
                        transition-colors
                        duration-200
                        hover:bg-[#7f5c20]
                        cursor-pointer
                      "
                    >
                      Create Account
                    </button>
                  </SignUpButton>
                </div>
              </Show>
            </nav>
          </div>
        </>
      )}
    </>
  );
}