"use client";

import Link from "next/link";
import { useState } from "react";

const footerLinks = {
  Products: [
    { label: "North", href: "#" },
    { label: "Compass", href: "#" },
    { label: "Command", href: "#" },
    { label: "Embed", href: "#" },
    { label: "Rerank", href: "#" },
    { label: "Customization", href: "#" },
    { label: "Pricing", href: "#" },
    { label: "Deployment Options", href: "#" },
    { label: "Private Deployments", href: "#" },
  ],
  Solutions: [
    { label: "Technology", href: "#" },
    { label: "Energy and Utilities", href: "#" },
    { label: "Financial Services", href: "#" },
    { label: "Healthcare and Life Sciences", href: "#" },
    { label: "Manufacturing", href: "#" },
    { label: "Public Sector", href: "#" },
  ],
  Resources: [
    { label: "Blog", href: "#" },
    { label: "Developers", href: "#" },
    { label: "Events", href: "#" },
    { label: "On-Demand Events", href: "#" },
    { label: "LLM University", href: "#" },
    { label: "Documentation", href: "#" },
    { label: "Release Notes", href: "#" },
  ],
  Company: [
    { label: "About", href: "#" },
    { label: "Careers", href: "#" },
    { label: "Research", href: "#" },
    { label: "Newsroom", href: "#" },
    { label: "Partners", href: "#" },
    { label: "Security", href: "#" },
    { label: "Trust Center", href: "#" },
    { label: "Modern Slavery Act", href: "#" },
  ],
};

export default function Footer() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Newsletter signup:", email);
    setEmail("");
  };

  return (
    <footer className="bg-neutral-15 text-white">
      {/* Main Footer */}
      <div className="container-web3 pt-12 md:pt-20 pb-12 md:pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-14">
          {/* Newsletter Section - Left */}
          <div className="lg:col-span-4">
            <h3 className="text-web3-20 font-medium text-coral-500 mb-2">
              AI moves fast
            </h3>
            <p className="text-white mb-4">
              We&apos;ll keep you up to date with the latest.
            </p>
            <p className="text-web3-14 text-neutral-65 mb-6">
              Enter your business email below to receive updates from Cohere. Please refer to our{" "}
              <Link href="#" className="underline hover:text-white">privacy policy</Link>{" "}
              for details or to contact us. You can unsubscribe at any time.
            </p>
            <form onSubmit={handleSubmit} className="relative max-w-sm">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email Address"
                className="w-full px-0 py-3 bg-transparent border-b border-white/30 text-white placeholder:text-neutral-65 focus:outline-none focus:border-white transition-colors duration-300 ease-in-out"
                required
              />
              <button
                type="submit"
                className="absolute right-0 top-1/2 -translate-y-1/2 text-neutral-65 hover:text-white transition-colors duration-300 ease-in-out"
                aria-label="Submit"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </form>
          </div>

          {/* Links - Right */}
          <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-8">
            {Object.entries(footerLinks).map(([category, links], index) => (
              <div key={category}>
                <h4 className="text-web3-14 font-medium mb-4 flex items-center gap-1">
                  {category}
                  {index === 0 && (
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  )}
                </h4>
                <ul className="space-y-3">
                  {links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-web3-14 text-neutral-65 hover:text-white transition-colors duration-300 ease-in-out"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row md:justify-end items-center gap-4">
          {/* Social Links */}
          <div className="flex items-center gap-4 order-1">
            <Link href="#" className="text-neutral-65 hover:text-white transition-colors duration-300 ease-in-out" aria-label="LinkedIn">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </Link>
            <Link href="#" className="text-neutral-65 hover:text-white transition-colors duration-300 ease-in-out" aria-label="Discord">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189z" />
              </svg>
            </Link>
            <Link href="#" className="text-neutral-65 hover:text-white transition-colors duration-300 ease-in-out" aria-label="X">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </Link>
            <Link href="#" className="text-neutral-65 hover:text-white transition-colors duration-300 ease-in-out" aria-label="Email">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </Link>
          </div>

          {/* Copyright and Links */}
          <div className="flex flex-wrap items-center justify-center gap-6 order-2">
            <span className="text-web3-14 text-neutral-65">
              Cohere &copy; {new Date().getFullYear()}
            </span>
            <Link href="#" className="text-web3-14 text-neutral-65 hover:text-white transition-colors duration-300 ease-in-out">
              Privacy
            </Link>
            <Link href="#" className="text-web3-14 text-neutral-65 hover:text-white transition-colors duration-300 ease-in-out">
              Terms of Use
            </Link>
            <Link href="#" className="text-web3-14 text-neutral-65 hover:text-white transition-colors duration-300 ease-in-out">
              Manage Cookies
            </Link>
            <button className="text-web3-14 text-neutral-65 hover:text-white transition-colors duration-300 ease-in-out flex items-center gap-1">
              English
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
