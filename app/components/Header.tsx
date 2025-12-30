"use client";

import { useState } from "react";
import Link from "next/link";

// Hyperfocus Logo with glow bars
const HyperfocusLogo = ({ className = "" }: { className?: string }) => (
  <div className={`flex items-center gap-2 ${className}`}>
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="glowGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#6366F1" stopOpacity="0" />
          <stop offset="50%" stopColor="white" stopOpacity="1" />
          <stop offset="100%" stopColor="#6366F1" stopOpacity="0" />
        </linearGradient>
        <filter id="lineGlow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="0.5" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <filter id="sparkGlow" x="-100%" y="-100%" width="300%" height="300%">
          <feGaussianBlur stdDeviation="0.8" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <g transform="translate(4,0)" filter="url(#lineGlow)">
        <rect x="0" y="6" width="1" height="20" fill="url(#glowGrad)" opacity="0.08" />
        <rect x="1" y="6" width="1" height="20" fill="url(#glowGrad)" opacity="0.12" />
        <rect x="2" y="6" width="1" height="20" fill="url(#glowGrad)" opacity="0.16" />
        <rect x="3" y="6" width="1" height="20" fill="url(#glowGrad)" opacity="0.20" />
        <rect x="4" y="6" width="1" height="20" fill="url(#glowGrad)" opacity="0.24" />
        <rect x="5" y="6" width="1" height="20" fill="url(#glowGrad)" opacity="0.28" />
        <rect x="6" y="6" width="1" height="20" fill="url(#glowGrad)" opacity="0.32" />
        <rect x="7" y="6" width="1" height="20" fill="url(#glowGrad)" opacity="0.36" />
        <rect x="8" y="6" width="1" height="20" fill="url(#glowGrad)" opacity="0.40" />
        <rect x="9" y="6" width="1" height="20" fill="url(#glowGrad)" opacity="0.44" />
        <rect x="10" y="6" width="1" height="20" fill="url(#glowGrad)" opacity="0.48" />
        <rect x="11" y="6" width="1" height="20" fill="url(#glowGrad)" opacity="0.52" />
        <rect x="12" y="6" width="1" height="20" fill="url(#glowGrad)" opacity="0.56" />
        <rect x="13" y="6" width="1" height="20" fill="url(#glowGrad)" opacity="0.60" />
        <rect x="14" y="6" width="1" height="20" fill="url(#glowGrad)" opacity="0.64" />
        <rect x="15" y="6" width="1" height="20" fill="url(#glowGrad)" opacity="0.68" />
        <rect x="16" y="6" width="1" height="20" fill="url(#glowGrad)" opacity="0.72" />
        <rect x="17" y="6" width="1" height="20" fill="url(#glowGrad)" opacity="0.76" />
        <rect x="18" y="6" width="1" height="20" fill="url(#glowGrad)" opacity="0.80" />
        <rect x="19" y="6" width="1" height="20" fill="url(#glowGrad)" opacity="0.84" />
        <rect x="20" y="6" width="1" height="20" fill="url(#glowGrad)" opacity="0.88" />
        <rect x="21" y="6" width="1" height="20" fill="url(#glowGrad)" opacity="0.92" />
        <rect x="22" y="6" width="1" height="20" fill="url(#glowGrad)" opacity="0.96" />
      </g>
      <circle cx="27" cy="9" r="1.2" fill="white" filter="url(#sparkGlow)" />
    </svg>
    <span className="font-mono text-lg font-medium text-volcanic-900">
      hyperfocus<span className="opacity-35">.tech</span>
    </span>
  </div>
);

// Mobile logo (icon only)
const HyperfocusLogoMobile = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="glowGradMobile" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#6366F1" stopOpacity="0" />
        <stop offset="50%" stopColor="#1a1a1a" stopOpacity="1" />
        <stop offset="100%" stopColor="#6366F1" stopOpacity="0" />
      </linearGradient>
      <filter id="lineGlowMobile" x="-50%" y="-50%" width="200%" height="200%">
        <feGaussianBlur stdDeviation="0.5" result="blur" />
        <feMerge>
          <feMergeNode in="blur" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>
    <g transform="translate(4,0)" filter="url(#lineGlowMobile)">
      <rect x="0" y="6" width="1" height="20" fill="url(#glowGradMobile)" opacity="0.08" />
      <rect x="1" y="6" width="1" height="20" fill="url(#glowGradMobile)" opacity="0.12" />
      <rect x="2" y="6" width="1" height="20" fill="url(#glowGradMobile)" opacity="0.16" />
      <rect x="3" y="6" width="1" height="20" fill="url(#glowGradMobile)" opacity="0.20" />
      <rect x="4" y="6" width="1" height="20" fill="url(#glowGradMobile)" opacity="0.24" />
      <rect x="5" y="6" width="1" height="20" fill="url(#glowGradMobile)" opacity="0.28" />
      <rect x="6" y="6" width="1" height="20" fill="url(#glowGradMobile)" opacity="0.32" />
      <rect x="7" y="6" width="1" height="20" fill="url(#glowGradMobile)" opacity="0.36" />
      <rect x="8" y="6" width="1" height="20" fill="url(#glowGradMobile)" opacity="0.40" />
      <rect x="9" y="6" width="1" height="20" fill="url(#glowGradMobile)" opacity="0.44" />
      <rect x="10" y="6" width="1" height="20" fill="url(#glowGradMobile)" opacity="0.48" />
      <rect x="11" y="6" width="1" height="20" fill="url(#glowGradMobile)" opacity="0.52" />
      <rect x="12" y="6" width="1" height="20" fill="url(#glowGradMobile)" opacity="0.56" />
      <rect x="13" y="6" width="1" height="20" fill="url(#glowGradMobile)" opacity="0.60" />
      <rect x="14" y="6" width="1" height="20" fill="url(#glowGradMobile)" opacity="0.64" />
      <rect x="15" y="6" width="1" height="20" fill="url(#glowGradMobile)" opacity="0.68" />
      <rect x="16" y="6" width="1" height="20" fill="url(#glowGradMobile)" opacity="0.72" />
      <rect x="17" y="6" width="1" height="20" fill="url(#glowGradMobile)" opacity="0.76" />
      <rect x="18" y="6" width="1" height="20" fill="url(#glowGradMobile)" opacity="0.80" />
      <rect x="19" y="6" width="1" height="20" fill="url(#glowGradMobile)" opacity="0.84" />
      <rect x="20" y="6" width="1" height="20" fill="url(#glowGradMobile)" opacity="0.88" />
      <rect x="21" y="6" width="1" height="20" fill="url(#glowGradMobile)" opacity="0.92" />
      <rect x="22" y="6" width="1" height="20" fill="url(#glowGradMobile)" opacity="0.96" />
    </g>
    <circle cx="27" cy="9" r="1.2" fill="#1a1a1a" />
  </svg>
);

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
    title: "Cohere Labs",
    description: "Cohere's research lab that seeks to solve complex ML problems",
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
          <HyperfocusLogo className="hidden md:flex" />
          <div className="md:hidden">
            <HyperfocusLogoMobile />
          </div>
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
