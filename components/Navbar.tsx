"use client";

import { useState, useEffect, useRef } from "react";
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
  const menuRef = useRef<HTMLDivElement>(null);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Close on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  // Do not render the global navbar on standalone authentication routes
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
      <header
        style={{
          height: "76px",
          minHeight: "76px",
          maxHeight: "76px",
          paddingTop: 0,
          paddingBottom: 0,
          paddingLeft: 0,
          paddingRight: 0,
          margin: 0,
          boxSizing: "border-box",
        }}
        className="fixed top-0 left-0 right-0 z-50 w-full border-b border-[#2b2118]/10 bg-[#f4efe4]/90 p-0 backdrop-blur-md"
      >
        <nav
          style={{
            height: "76px",
            minHeight: "76px",
            maxHeight: "76px",
            margin: 0,
          }}
          className="mx-auto flex h-[76px] w-full max-w-[1400px] items-center justify-between px-4 sm:px-8 lg:px-12"
          aria-label="Main Navigation"
        >
          {/* Brand Logo */}
          <Link
            href="/"
            className="flex shrink-0 items-center gap-3 transition-opacity hover:opacity-90"
            aria-label={`${brand.name} home`}
          >
            <span
              style={{
                width: "46px",
                height: "46px",
              }}
              className="flex items-center justify-center rounded-full border border-[#b58a3a] bg-[#fbf8f2] font-serif text-xl text-[#9b7128] shadow-sm sm:h-12 sm:w-12 sm:text-2xl"
            >
              {brand.symbol}
            </span>

            <span className="font-serif text-xl font-semibold leading-none tracking-wider text-[#30251c] sm:text-2xl">
              {brand.name}
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden items-center gap-8 lg:flex">
            {items.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`inline-flex items-center whitespace-nowrap text-[15px] leading-none tracking-wide transition-colors duration-200 ${
                    isActive
                      ? "font-medium text-[#9b7128] underline underline-offset-8 decoration-[#9b7128]/60"
                      : "text-[#66594b] hover:text-[#9b7128]"
                  }`}
                  aria-current={isActive ? "page" : undefined}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>

          {/* Authentication & Mobile Toggle */}
          <div className="flex shrink-0 items-center gap-2.5 sm:gap-3">
            <Show when="signed-out">
              <SignInButton mode="redirect">
                <button
                  type="button"
                  className="rounded-full border border-[#9b7128] px-3.5 py-1.5 text-xs font-medium text-[#6d4f20] transition-colors hover:bg-[#9b7128] hover:text-white sm:px-5 sm:py-2 sm:text-sm cursor-pointer"
                >
                  Log In
                </button>
              </SignInButton>

              <SignUpButton mode="redirect">
                <button
                  type="button"
                  className="hidden rounded-full bg-[#9b7128] px-4 py-1.5 text-xs font-medium text-white transition-colors hover:bg-[#7f5c20] sm:inline-flex sm:px-5 sm:py-2 sm:text-sm cursor-pointer shadow-sm"
                >
                  Create Account
                </button>
              </SignUpButton>
            </Show>

            <Show when="signed-in">
              <UserButton />
            </Show>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={isOpen}
              aria-controls="mobile-navigation-menu"
              onClick={() => setIsOpen((prev) => !prev)}
              className="flex h-10 w-10 items-center justify-center rounded-lg text-[#30251c] transition-colors hover:bg-[#2b2118]/5 lg:hidden cursor-pointer"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Navigation Dropdown & Backdrop */}
      {isOpen && (
        <div
          ref={menuRef}
          id="mobile-navigation-menu"
          className="fixed inset-x-0 top-[76px] z-50 flex flex-col border-b border-[#b58a3a]/20 bg-[#f4efe4]/98 px-6 py-6 shadow-xl backdrop-blur-lg lg:hidden"
        >
          <nav className="flex flex-col gap-4" aria-label="Mobile Navigation">
            {items.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`py-1 text-lg tracking-wide transition-colors ${
                    isActive
                      ? "font-semibold text-[#9b7128]"
                      : "text-[#66594b] hover:text-[#9b7128]"
                  }`}
                  aria-current={isActive ? "page" : undefined}
                >
                  {item.label}
                </Link>
              );
            })}

            <Show when="signed-out">
              <div className="mt-3 border-t border-[#b58a3a]/20 pt-4 sm:hidden">
                <SignUpButton mode="redirect">
                  <button
                    type="button"
                    onClick={() => setIsOpen(false)}
                    className="w-full rounded-full bg-[#9b7128] py-2.5 text-center text-sm font-medium text-white transition-colors hover:bg-[#7f5c20] cursor-pointer shadow-sm"
                  >
                    Create Account
                  </button>
                </SignUpButton>
              </div>
            </Show>
          </nav>
        </div>
      )}
    </>
  );
}