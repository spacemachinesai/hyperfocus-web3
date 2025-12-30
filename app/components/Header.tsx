"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

// Products mega menu data
const productsMenu = {
  workplace: {
    title: "Workplace Systems",
    image: "/images/products-workplace.webp",
    items: [
      { name: "North", description: "An enterprise-ready AI platform that powers modern workplace productivity", color: "blue", badge: "NEW" },
      { name: "Compass", description: "An intelligent search and discovery system to surface business insights", color: "blue" },
    ]
  },
  generative: {
    title: "Generative Models",
    image: "/images/products-generative.webp",
    items: [
      { name: "Command", description: "A family of high-performance, scalable language models", color: "quartz" },
      { name: "Aya Expanse", description: "Leading multilingual models that excel across 23 different languages", color: "quartz" },
    ]
  },
  retrieval: {
    title: "Advanced Retrieval Models",
    image: "/images/products-retrieval.webp",
    items: [
      { name: "Embed", description: "A leading multimodal search and retrieval tool", color: "coral" },
      { name: "Rerank", description: "A powerful model that provides a semantic boost to search quality", color: "coral" },
    ]
  },
  bottomLinks: [
    { label: "Customization", href: "#" },
    { label: "Pricing", href: "#" },
  ]
};

// Solutions menu data
const solutionsMenu = {
  industries: [
    "Technology",
    "Financial Services",
    "Healthcare and Life Sciences",
    "Manufacturing",
    "Energy and Utilities",
    "Public Sector",
  ],
  featured: {
    title: "Security",
    description: "Best-in-class AI security and data protection",
    image: "/images/solutions-security.png",
  },
  bottomLinks: [
    { label: "Private Deployments", href: "#" },
  ]
};

// Research menu data
const researchMenu = {
  featured: {
    title: "hyperfocus Labs",
    description: "Our research lab that seeks to solve complex e-commerce analytics problems",
    image: "/images/research-labs.png",
  },
  model: ["Aya"],
  resources: ["Papers", "Videos", "Blog"],
  initiatives: ["Open Science Community", "Scholars Program", "Catalyst Grant Program"],
};

// Resources menu data
const resourcesMenu = {
  learn: ["Blog", "LLM University", "Documentation", "Release Notes"],
  connect: ["Events", "On-Demand Events", "Developers"],
};

// Company menu data
const companyMenu = {
  about: ["About", "Careers", "Research", "Newsroom", "Partners"],
  trust: ["Security", "Trust Center", "Modern Slavery Act"],
};

const navItems = [
  { label: "Products", href: "#products", hasMega: true },
  { label: "Solutions", href: "#solutions", hasMega: true },
  { label: "Research", href: "#research", hasMega: true },
  { label: "Resources", href: "#resources", hasMega: true },
  { label: "Company", href: "#company", hasMega: true },
];

// Arrow icon component
const ArrowIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
  </svg>
);

// Product dot component
const ProductDot = ({ color }: { color: string }) => {
  const colorClass = color === "blue" ? "bg-blue-500" : color === "quartz" ? "bg-quartz-500" : "bg-coral-500";
  return <div className={`w-[10px] h-[10px] rounded-full ${colorClass}`} />;
};

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

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
            width={118}
            height={20}
            className="hidden h-5 w-[118px] md:block"
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

        {/* Desktop Navigation */}
        <ul className="hidden flex-1 list-none justify-center gap-x-8 lg:flex xl:gap-x-10">
          {navItems.map((item) => (
            <li
              key={item.label}
              className="group/listItem pointer-events-auto relative"
              onMouseEnter={() => setActiveMenu(item.label)}
              onMouseLeave={() => setActiveMenu(null)}
            >
              <Link
                href={item.href}
                className="nav-link-gradient text-web3-14 font-body text-volcanic-900 hover:text-neutral-50 transition-colors duration-300 ease-in-out"
              >
                {item.label}
              </Link>

              {/* Gradient underline */}
              <div className="relative">
                <div className="absolute mt-0.5 h-[1px] w-0 bg-gradient-to-r from-coral-500 via-violet-500 to-blue-500 transition-[width] group-hover/listItem:w-full" />
              </div>

              {/* Products Mega Menu */}
              {item.label === "Products" && (
                <div className="mega-menu min-w-[900px] p-6">
                  {/* Hover bridge */}
                  <div className="absolute -top-11 left-1/2 h-[calc(100%+44px)] w-[200%] max-w-[948px] -translate-x-1/2 pointer-events-auto" />

                  <div className="relative">
                    {/* Header */}
                    <Link href="#products" className="group/drawer-title flex items-center gap-x-2 mb-4">
                      <p className="text-web3-20 lg:text-web3-24 font-body">Products</p>
                      <ArrowIcon className="w-4 h-4 transition-transform duration-300 ease-in-out group-hover/drawer-title:translate-x-1" />
                    </Link>

                    {/* Three columns */}
                    <div className="flex gap-x-6 mb-10">
                      {/* Workplace Systems */}
                      <div className="w-[284px]">
                        <div className="h-[100px] bg-neutral-90 rounded-[8px] mb-4 overflow-hidden">
                          <div className="w-full h-full bg-gradient-to-br from-blue-500/20 to-quartz-500/20" />
                        </div>
                        <p className="text-web3-14-eyebrow text-neutral-50 mb-3">{productsMenu.workplace.title}</p>
                        <ul className="space-y-4">
                          {productsMenu.workplace.items.map((product) => (
                            <li key={product.name} className="group/item">
                              <Link href="#" className="block menu-item-hover p-2 -m-2 rounded-lg">
                                <div className="flex items-center gap-2 mb-2">
                                  <ProductDot color={product.color} />
                                  <span className="text-web3-16 lg:text-web3-18 font-body">{product.name}</span>
                                  {product.badge && <span className="badge-new">{product.badge}</span>}
                                </div>
                                <p className="text-web3-14 text-neutral-50">{product.description}</p>
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Generative Models */}
                      <div className="w-[284px]">
                        <div className="h-[100px] bg-neutral-90 rounded-[8px] mb-4 overflow-hidden">
                          <div className="w-full h-full bg-gradient-to-br from-quartz-500/20 to-coral-500/20" />
                        </div>
                        <p className="text-web3-14-eyebrow text-neutral-50 mb-3">{productsMenu.generative.title}</p>
                        <ul className="space-y-4">
                          {productsMenu.generative.items.map((product) => (
                            <li key={product.name} className="group/item">
                              <Link href="#" className="block menu-item-hover p-2 -m-2 rounded-lg">
                                <div className="flex items-center gap-2 mb-2">
                                  <ProductDot color={product.color} />
                                  <span className="text-web3-16 lg:text-web3-18 font-body">{product.name}</span>
                                </div>
                                <p className="text-web3-14 text-neutral-50">{product.description}</p>
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Advanced Retrieval */}
                      <div className="w-[284px]">
                        <div className="h-[100px] bg-neutral-90 rounded-[8px] mb-4 overflow-hidden">
                          <div className="w-full h-full bg-gradient-to-br from-coral-500/20 to-blue-500/20" />
                        </div>
                        <p className="text-web3-14-eyebrow text-neutral-50 mb-3">{productsMenu.retrieval.title}</p>
                        <ul className="space-y-4">
                          {productsMenu.retrieval.items.map((product) => (
                            <li key={product.name} className="group/item">
                              <Link href="#" className="block menu-item-hover p-2 -m-2 rounded-lg">
                                <div className="flex items-center gap-2 mb-2">
                                  <ProductDot color={product.color} />
                                  <span className="text-web3-16 lg:text-web3-18 font-body">{product.name}</span>
                                </div>
                                <p className="text-web3-14 text-neutral-50">{product.description}</p>
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Bottom links */}
                    <div className="flex justify-end gap-x-10 border-t border-neutral-80 pt-4">
                      {productsMenu.bottomLinks.map((link) => (
                        <Link key={link.label} href={link.href} className="group/bottom flex items-center gap-x-1.5">
                          <span className="text-web3-14 font-body uppercase">{link.label}</span>
                          <ArrowIcon className="w-3 h-3 transition-transform duration-300 ease-in-out group-hover/bottom:translate-x-1" />
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Solutions Mega Menu */}
              {item.label === "Solutions" && (
                <div className="mega-menu min-w-[600px] p-6">
                  <div className="absolute -top-11 left-1/2 h-[calc(100%+44px)] w-[200%] max-w-[948px] -translate-x-1/2 pointer-events-auto" />

                  <div className="relative">
                    <div className="flex gap-x-6 mb-10">
                      {/* Industries list */}
                      <div className="w-[267px]">
                        <p className="text-web3-14-eyebrow text-neutral-50 mb-4">Industries</p>
                        <ul className="space-y-4">
                          {solutionsMenu.industries.map((industry) => (
                            <li key={industry}>
                              <Link href="#" className="block menu-item-hover p-2 -m-2 rounded-lg">
                                <span className="text-web3-16 lg:text-web3-18 font-body">{industry}</span>
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Featured card */}
                      <Link href="#" className="group/card relative w-[288px] h-[288px] rounded-[8px] overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-green-500 to-mushroom-500" />
                        <div className="absolute bottom-0 h-[137px] w-full gradient-overlay-green" />
                        <div className="absolute bottom-4 left-4 right-4 text-pureWhite">
                          <div className="flex items-center gap-1 mb-2">
                            <span className="text-web3-16 lg:text-web3-18 font-body">{solutionsMenu.featured.title}</span>
                            <ArrowIcon className="w-4 h-4 transition-transform duration-300 ease-in-out group-hover/card:translate-x-1" />
                          </div>
                          <p className="text-web3-14">{solutionsMenu.featured.description}</p>
                        </div>
                      </Link>
                    </div>

                    {/* Bottom links */}
                    <div className="flex justify-end gap-x-10 border-t border-neutral-80 pt-4">
                      {solutionsMenu.bottomLinks.map((link) => (
                        <Link key={link.label} href={link.href} className="group/bottom flex items-center gap-x-1.5">
                          <span className="text-web3-14 font-body uppercase">{link.label}</span>
                          <ArrowIcon className="w-3 h-3 transition-transform duration-300 ease-in-out group-hover/bottom:translate-x-1" />
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Research Mega Menu */}
              {item.label === "Research" && (
                <div className="mega-menu min-w-[850px] p-6">
                  <div className="absolute -top-11 left-1/2 h-[calc(100%+44px)] w-[200%] max-w-[948px] -translate-x-1/2 pointer-events-auto" />

                  <div className="relative">
                    <div className="flex gap-x-6 mb-10">
                      {/* Featured card */}
                      <Link href="#" className="group/card relative w-[288px] h-[288px] rounded-[8px] overflow-hidden flex-shrink-0">
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-quartz-500" />
                        <div className="absolute bottom-0 h-[137px] w-full gradient-overlay-blue" />
                        <div className="absolute bottom-4 left-4 right-4 text-pureWhite">
                          <div className="flex items-center gap-1 mb-2">
                            <span className="text-web3-16 lg:text-web3-18 font-body">{researchMenu.featured.title}</span>
                            <ArrowIcon className="w-4 h-4 transition-transform duration-300 ease-in-out group-hover/card:translate-x-1" />
                          </div>
                          <p className="text-web3-14">{researchMenu.featured.description}</p>
                        </div>
                      </Link>

                      {/* Model & Resources */}
                      <div className="w-[267px]">
                        <p className="text-web3-14-eyebrow text-neutral-50 mb-4">Model</p>
                        <ul className="space-y-4 mb-6">
                          {researchMenu.model.map((item) => (
                            <li key={item}>
                              <Link href="#" className="block menu-item-hover p-2 -m-2 rounded-lg">
                                <span className="text-web3-16 lg:text-web3-18 font-body">{item}</span>
                              </Link>
                            </li>
                          ))}
                        </ul>
                        <p className="text-web3-14-eyebrow text-neutral-50 mb-4">Resources</p>
                        <ul className="space-y-4">
                          {researchMenu.resources.map((item) => (
                            <li key={item}>
                              <Link href="#" className="block menu-item-hover p-2 -m-2 rounded-lg">
                                <span className="text-web3-16 lg:text-web3-18 font-body">{item}</span>
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Initiatives */}
                      <div className="w-[267px]">
                        <p className="text-web3-14-eyebrow text-neutral-50 mb-4">Initiatives</p>
                        <ul className="space-y-4">
                          {researchMenu.initiatives.map((item) => (
                            <li key={item}>
                              <Link href="#" className="block menu-item-hover p-2 -m-2 rounded-lg">
                                <span className="text-web3-16 lg:text-web3-18 font-body">{item}</span>
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Resources Mega Menu */}
              {item.label === "Resources" && (
                <div className="mega-menu min-w-[500px] p-6">
                  <div className="absolute -top-11 left-1/2 h-[calc(100%+44px)] w-[200%] max-w-[948px] -translate-x-1/2 pointer-events-auto" />

                  <div className="relative">
                    <div className="flex gap-x-10">
                      {/* Learn */}
                      <div className="w-[200px]">
                        <p className="text-web3-14-eyebrow text-neutral-50 mb-4">Learn</p>
                        <ul className="space-y-4">
                          {resourcesMenu.learn.map((item) => (
                            <li key={item}>
                              <Link href="#" className="block menu-item-hover p-2 -m-2 rounded-lg">
                                <span className="text-web3-16 lg:text-web3-18 font-body">{item}</span>
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Connect */}
                      <div className="w-[200px]">
                        <p className="text-web3-14-eyebrow text-neutral-50 mb-4">Connect</p>
                        <ul className="space-y-4">
                          {resourcesMenu.connect.map((item) => (
                            <li key={item}>
                              <Link href="#" className="block menu-item-hover p-2 -m-2 rounded-lg">
                                <span className="text-web3-16 lg:text-web3-18 font-body">{item}</span>
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Company Mega Menu */}
              {item.label === "Company" && (
                <div className="mega-menu min-w-[500px] p-6">
                  <div className="absolute -top-11 left-1/2 h-[calc(100%+44px)] w-[200%] max-w-[948px] -translate-x-1/2 pointer-events-auto" />

                  <div className="relative">
                    <div className="flex gap-x-10">
                      {/* About */}
                      <div className="w-[200px]">
                        <p className="text-web3-14-eyebrow text-neutral-50 mb-4">About</p>
                        <ul className="space-y-4">
                          {companyMenu.about.map((item) => (
                            <li key={item}>
                              <Link href="#" className="block menu-item-hover p-2 -m-2 rounded-lg">
                                <span className="text-web3-16 lg:text-web3-18 font-body">{item}</span>
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Trust */}
                      <div className="w-[200px]">
                        <p className="text-web3-14-eyebrow text-neutral-50 mb-4">Trust & Security</p>
                        <ul className="space-y-4">
                          {companyMenu.trust.map((item) => (
                            <li key={item}>
                              <Link href="#" className="block menu-item-hover p-2 -m-2 rounded-lg">
                                <span className="text-web3-16 lg:text-web3-18 font-body">{item}</span>
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <div className="hidden flex-1 items-center justify-end gap-x-4 lg:flex">
          <Link
            href="#signin"
            className="text-web3-14 font-medium text-volcanic-900 hover:text-neutral-50 transition-colors duration-300 ease-in-out"
          >
            Sign in
          </Link>
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
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="py-4 text-xl font-medium text-volcanic-900 border-b border-neutral-90"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="mt-8 flex flex-col gap-4">
              <Link
                href="#signin"
                className="btn-secondary text-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                Sign in
              </Link>
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
