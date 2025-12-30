"use client";

import Image from "next/image";
import Link from "next/link";

export default function CaseStudy() {
  return (
    <section className="relative min-h-[600px] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/d59ed9db0ddb73f0ea4faac7947f9e84265e6be5-2880x1680.jpg"
          alt="Green landscape"
          fill
          className="object-cover"
          style={{ filter: "hue-rotate(60deg) saturate(1.5)" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent" />
      </div>

      <div className="container-web3 relative z-10 pt-10 pb-12 md:pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-white">
            {/* Logo */}
            <div className="flex items-center gap-2 mb-8">
              <svg className="w-8 h-8" viewBox="0 0 32 32" fill="currentColor">
                <circle cx="8" cy="16" r="4" />
                <circle cx="24" cy="16" r="4" />
                <circle cx="16" cy="8" r="4" />
                <circle cx="16" cy="24" r="4" />
              </svg>
              <span className="text-2xl font-medium">north</span>
            </div>

            {/* Headline */}
            <h2 className="text-web3-36 md:text-web3-48 font-medium mb-6">
              The turnkey AI platform that helps your work flow
            </h2>

            {/* Description */}
            <p className="text-web3-18 text-white/80 mb-8">
              From scattered tools to seamless action — North brings everything together so your work just works.
            </p>

            {/* CTA */}
            <Link
              href="#north"
              className="inline-flex items-center px-6 py-3 bg-pureWhite text-volcanic-900 rounded-full font-medium hover:bg-white/90 transition-colors duration-300 ease-in-out"
            >
              Go North
            </Link>
          </div>

          {/* Right Content - Product UI */}
          <div className="relative">
            <div className="bg-[#0a2a1a]/90 backdrop-blur-sm rounded-2xl p-6 shadow-2xl border border-white/10">
              {/* Sidebar */}
              <div className="flex">
                <div className="w-12 flex flex-col items-center gap-4 py-4 border-r border-white/10">
                  <svg className="w-5 h-5 text-[#4ade80]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  <svg className="w-5 h-5 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                  <svg className="w-5 h-5 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <svg className="w-5 h-5 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>

                {/* Main Content */}
                <div className="flex-1 pl-6">
                  <h3 className="text-[#4ade80] text-xl font-medium mb-2">Trend Forecasting Agent</h3>
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-8 h-8 bg-[#4ade80]/20 rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-[#4ade80]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                    <p className="text-white/80 text-sm">Analyze historical financial data to forecast revenue and expense trends for the next quarter.</p>
                  </div>

                  {/* File attachment */}
                  <div className="bg-[#1a3a2a] rounded-lg p-3 mb-4 inline-flex items-center gap-2">
                    <svg className="w-5 h-5 text-[#4ade80]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    <div>
                      <p className="text-white text-sm font-medium">MONTHLY_REVENUE_EX...</p>
                      <p className="text-white/50 text-xs">.xlsx • 13.7 MB</p>
                    </div>
                  </div>

                  {/* Data table preview */}
                  <div className="bg-pureWhite rounded-lg overflow-hidden text-sm">
                    <div className="grid grid-cols-4 gap-4 p-3 bg-neutral-90 border-b font-medium text-volcanic-900">
                      <span></span>
                      <span className="text-[#4ade80]">Jan</span>
                      <span className="text-[#4ade80]">Feb</span>
                      <span className="text-[#4ade80]">Mar</span>
                    </div>
                    <div className="divide-y">
                      <div className="grid grid-cols-4 gap-4 p-3 text-volcanic-900">
                        <span className="text-neutral-60">Genesis sales</span>
                        <span>$49,500.83</span>
                        <span>$44,890.34</span>
                        <span>$51,994.95</span>
                      </div>
                      <div className="grid grid-cols-4 gap-4 p-3 text-volcanic-900">
                        <span className="text-neutral-60">Mercury sales</span>
                        <span>$13,758.20</span>
                        <span>$34,673.78</span>
                        <span>$71,057.22</span>
                      </div>
                      <div className="grid grid-cols-4 gap-4 p-3 text-volcanic-900">
                        <span className="text-neutral-60">Eclipse sales</span>
                        <span>$1,580.53</span>
                        <span>$2,289.88</span>
                        <span>$1,954.68</span>
                      </div>
                      <div className="grid grid-cols-4 gap-4 p-3 text-volcanic-900">
                        <span className="text-neutral-60">Odyssey sales</span>
                        <span>$30,756.21</span>
                        <span>$67,146.89</span>
                        <span>$34,850.34</span>
                      </div>
                      <div className="grid grid-cols-4 gap-4 p-3 text-volcanic-900">
                        <span className="text-neutral-60">Nova sales</span>
                        <span>$29,670.87</span>
                        <span>$34,675.82</span>
                        <span>$27,805.89</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
