"use client";

import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative bg-pureWhite pt-28 pb-12 md:pt-40 md:pb-20 text-volcanic-900">
      <div className="container-web3">
        {/* Centered Content */}
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-16">
          {/* Main Headline */}
          <h1 className="text-web3-40 md:text-web3-56 lg:text-web3-72 font-medium tracking-tight text-volcanic-900 mb-6">
            Your next breakthrough,
            <br />
            powered by AI
          </h1>

          {/* Subheadline */}
          <p className="text-web3-18 md:text-web3-20 text-neutral-50 mb-8 max-w-2xl">
            Cohere is where powerful AI meets practical business solutions — so you can work smarter.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <Link
              href="#demo"
              className="btn-primary"
            >
              Request a demo
            </Link>
            <Link
              href="#products"
              className="group text-web3-16 font-medium text-volcanic-900 hover:text-neutral-50 transition-colors inline-flex items-center gap-1"
            >
              Explore products
              <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>

        {/* Demo Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Left Card - Financial Analysis Agent */}
          <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#1a1a2e] via-[#2d1b4e] to-[#1a1a2e] aspect-[4/3]">
            {/* Abstract Background */}
            <div className="absolute inset-0">
              <Image
                src="/images/b69260eb0e7a7e01b46e46ef7a15649f6dccd9c7-2880x1200.png"
                alt="Abstract background"
                fill
                className="object-cover opacity-80"
              />
            </div>

            {/* UI Mockup */}
            <div className="absolute inset-0 flex items-center justify-center p-8">
              <div className="bg-[#1a1a1a]/90 backdrop-blur-sm rounded-2xl p-6 w-full max-w-md shadow-2xl">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 bg-[#3a3a3a] rounded flex items-center justify-center text-white text-sm font-medium">
                    F
                  </div>
                  <span className="text-white font-medium">Financial Analysis Agent</span>
                </div>
                <div className="flex gap-2 mb-4">
                  {/* Folder icon - green */}
                  <span className="px-3 py-1.5 bg-[#2a2a2a] rounded-full text-xs text-gray-300 flex items-center gap-2">
                    <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
                    </svg>
                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
                    READY
                  </span>
                  {/* Google Drive icon - colored */}
                  <span className="px-3 py-1.5 bg-[#2a2a2a] rounded-full text-xs text-gray-300 flex items-center gap-2">
                    <svg className="w-4 h-4" viewBox="0 0 87.3 78" fill="none">
                      <path d="M6.6 66.85l3.85 6.65c.8 1.4 1.95 2.5 3.3 3.3l13.75-23.8H0c0 1.55.4 3.1 1.2 4.5l5.4 9.35z" fill="#0066DA"/>
                      <path d="M43.65 25L29.9 1.2c-1.35.8-2.5 1.9-3.3 3.3L0 53.35c-.8 1.4-1.2 2.95-1.2 4.5h27.5L43.65 25z" fill="#00AC47"/>
                      <path d="M73.55 76.8c1.35-.8 2.5-1.9 3.3-3.3l1.6-2.75 7.65-13.25c.8-1.4 1.2-2.95 1.2-4.5H59.85L73.55 76.8z" fill="#EA4335"/>
                      <path d="M43.65 25L57.4 1.2C56.05.4 54.5 0 52.95 0H34.4c-1.55 0-3.1.4-4.5 1.2L43.65 25z" fill="#00832D"/>
                      <path d="M59.85 53H27.5L13.75 76.8c1.35.8 2.9 1.2 4.5 1.2h36.8c1.55 0 3.1-.4 4.5-1.2L59.85 53z" fill="#2684FC"/>
                      <path d="M73.4 26.5l-12.7-22c-.8-1.4-1.95-2.5-3.3-3.3L43.65 25l16.2 28h27.45c0-1.55-.4-3.1-1.2-4.5l-12.7-22z" fill="#FFBA00"/>
                    </svg>
                    <span className="w-1.5 h-1.5 bg-yellow-500 rounded-full"></span>
                    READY
                  </span>
                  {/* Dropbox icon - blue */}
                  <span className="px-3 py-1.5 bg-[#2a2a2a] rounded-full text-xs text-gray-300 flex items-center gap-2">
                    <svg className="w-4 h-4 text-[#0061FF]" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 6.134L6.069 9.797 12 13.459l5.931-3.662L12 6.134zM6.069 14.47L12 18.13l5.931-3.66L12 10.81l-5.931 3.66zm5.931-12L1.5 8.465l4.569 2.854L12 7.956l5.931 3.363L22.5 8.465 12 2.47zm0 15.322l-5.931-3.66L1.5 17.134 12 23.13l10.5-5.996-4.569-3.003L12 17.792z"/>
                    </svg>
                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
                    READY
                  </span>
                </div>
                <div className="bg-[#2a2a2a] rounded-xl p-3">
                  <span className="text-gray-400 text-sm">Help me understand our 17% Q3 revenue surplus...</span>
                </div>
              </div>
            </div>

            {/* Floating Badge */}
            <div className="absolute bottom-8 left-8 bg-pureWhite rounded-lg px-4 py-2 shadow-lg">
              <span className="text-volcanic-900 font-medium text-sm">$18.5 million upside</span>
            </div>
          </div>

          {/* Right Card - Woman working on laptop */}
          <div className="relative rounded-3xl overflow-hidden aspect-[4/3]">
            <Image
              src="/images/60898fc5b86d38de0dafde5f3520c3c9f19a0a9d-880x1120.png"
              alt="Woman speaking on the phone while working"
              fill
              className="object-cover object-top"
            />
            {/* Floating Badge */}
            <div className="absolute bottom-8 right-8 bg-pureWhite rounded-lg px-4 py-2 shadow-lg">
              <span className="text-volcanic-900 font-medium text-sm">expanded deal sizes</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
