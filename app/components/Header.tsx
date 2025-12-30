"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const navItems = [
  { label: "Products", href: "#products" },
  { label: "Solutions", href: "#solutions" },
  { label: "Developers", href: "#developers" },
  { label: "Research", href: "#research" },
  { label: "Company", href: "#company" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-nav bg-white transition-all duration-300">
      <nav
        role="navigation"
        className="flex w-full items-center justify-between gap-x-10 px-4 py-5 md:px-6 md:py-4 [@media(min-width:919px)]:px-10"
      >
        {/* Logo */}
        <Link href="/" className="mr-auto flex flex-1 justify-start">
          <Image
            src="/images/logo.svg"
            alt="Cohere"
            width={118}
            height={20}
            className="hidden h-5 w-[118px] md:block"
            priority
          />
          <Image
            src="/images/logo_mobile.svg"
            alt="Cohere"
            width={32}
            height={32}
            className="h-8 w-8 md:hidden"
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden flex-1 list-none justify-center gap-x-8 lg:flex xl:gap-x-10">
          {navItems.map((item) => (
            <li key={item.label} className="group/listItem pointer-events-auto">
              <Link
                href={item.href}
                className="text-web3-14 font-body text-[#212121] hover:text-[#71717a] transition-colors"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <div className="hidden flex-1 items-center justify-end gap-x-4 lg:flex">
          <Link
            href="#contact"
            className="text-web3-14 font-medium text-[#212121] hover:text-[#71717a] transition-colors"
          >
            Contact Sales
          </Link>
          <Link
            href="#try"
            className="btn-primary inline-flex items-center"
          >
            Try Now
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="flex h-8 w-8 items-center justify-center lg:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <Image
              src="/images/close.svg"
              alt="Close"
              width={24}
              height={24}
            />
          ) : (
            <Image
              src="/images/nav_icon.svg"
              alt="Menu"
              width={24}
              height={24}
            />
          )}
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-[72px] bg-white z-50 lg:hidden">
          <div className="flex flex-col p-6">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="py-4 text-xl font-medium text-[#212121] border-b border-[#E5E5E5]"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="mt-8 flex flex-col gap-4">
              <Link
                href="#contact"
                className="btn-secondary text-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact Sales
              </Link>
              <Link
                href="#try"
                className="btn-primary text-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                Try Now
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
