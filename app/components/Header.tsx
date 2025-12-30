"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-nav bg-pureWhite transition-all duration-300 ease-in-out">
      <nav
        role="navigation"
        className="flex w-full items-center justify-between gap-x-10 px-4 py-5 md:px-6 md:py-4 [@media(min-width:919px)]:px-10"
      >
        {/* Logo */}
        <Link href="/" className="mr-auto flex flex-1 justify-start">
          <Image
            src="/images/logo.svg"
            alt="hyperfocus.tech"
            width={150}
            height={24}
            className="hidden h-6 w-[150px] md:block"
            priority
          />
          <Image
            src="/images/logo_mobile.svg"
            alt="hyperfocus.tech"
            width={32}
            height={32}
            className="h-8 w-8 md:hidden"
            priority
          />
        </Link>

        {/* Desktop CTA */}
        <div className="hidden flex-1 items-center justify-end gap-x-4 lg:flex">
          <Link
            href="#early-access"
            className="btn-primary"
          >
            Get early access
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="flex h-8 w-8 items-center justify-center lg:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-[72px] bg-pureWhite z-50 lg:hidden overflow-y-auto">
          <div className="flex flex-col p-6">
            <div className="mt-8 flex flex-col gap-4">
              <Link
                href="#early-access"
                className="btn-primary text-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                Get early access
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
