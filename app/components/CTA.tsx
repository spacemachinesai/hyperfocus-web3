"use client";

import Link from "next/link";

export default function CTA() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* Purple gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#7c3aed] via-[#6d28d9] to-[#4c1d95]" />

      {/* 3D Abstract shapes */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Large curved shape on left */}
        <div className="absolute -left-32 top-1/4 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-[#a78bfa]/30 to-transparent blur-3xl" />

        {/* Curved shape on right */}
        <div className="absolute -right-32 bottom-0 w-[500px] h-[500px] rounded-full bg-gradient-to-tl from-[#c4b5fd]/20 to-transparent blur-2xl" />

        {/* 3D tube-like element */}
        <svg
          className="absolute left-1/4 top-1/3 w-64 h-64 opacity-40"
          viewBox="0 0 200 200"
          fill="none"
        >
          <ellipse cx="100" cy="100" rx="80" ry="40" stroke="url(#gradient1)" strokeWidth="8" />
          <ellipse cx="100" cy="70" rx="60" ry="30" stroke="url(#gradient2)" strokeWidth="6" />
          <defs>
            <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#c4b5fd" />
              <stop offset="100%" stopColor="#7c3aed" />
            </linearGradient>
            <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ddd6fe" />
              <stop offset="100%" stopColor="#a78bfa" />
            </linearGradient>
          </defs>
        </svg>

        {/* Sphere element */}
        <div className="absolute right-1/4 top-1/4 w-32 h-32 rounded-full bg-gradient-to-br from-[#c4b5fd]/50 to-[#7c3aed]/30 blur-sm" />

        {/* Small floating shapes */}
        <div className="absolute left-1/3 bottom-1/4 w-16 h-16 rounded-full bg-gradient-to-br from-[#ddd6fe]/40 to-transparent" />
        <div className="absolute right-1/3 top-1/2 w-24 h-24 rounded-full bg-gradient-to-tl from-[#a78bfa]/30 to-transparent blur-xl" />
      </div>

      <div className="container-web3 relative z-10">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
          <h2 className="text-web3-36 md:text-web3-48 lg:text-web3-56 font-medium text-white mb-6">
            Ready to put AI to work?
          </h2>

          <p className="text-web3-18 text-white/80 mb-10 max-w-xl">
            Get started with Cohere&apos;s enterprise AI platform and transform how your business works.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="#demo"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-[#212121] rounded-full font-medium hover:bg-white/90 transition-colors"
            >
              Request a demo
            </Link>
            <Link
              href="#try"
              className="inline-flex items-center justify-center px-8 py-4 border border-white/40 text-white rounded-full font-medium hover:bg-white/10 transition-colors"
            >
              Try the API
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
