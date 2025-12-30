"use client";

import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative bg-white pt-32 pb-16 md:pt-40 md:pb-24">
      <div className="container-web3">
        {/* Centered Content */}
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-16">
          {/* Main Headline */}
          <h1 className="text-web3-40 md:text-web3-56 lg:text-web3-72 font-medium tracking-tight text-[#212121] mb-6">
            Your next breakthrough,
            <br />
            powered by AI
          </h1>

          {/* Subheadline */}
          <p className="text-web3-18 md:text-web3-20 text-[#71717a] mb-8 max-w-2xl">
            Cohere is where powerful AI meets practical business solutions — so you can work smarter.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <Link
              href="#demo"
              className="btn-primary text-center inline-flex items-center justify-center"
            >
              Request a demo
            </Link>
            <Link
              href="#products"
              className="text-web3-16 font-medium text-[#212121] underline underline-offset-4 hover:text-[#71717a] transition-colors"
            >
              Explore products
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
                  <span className="px-3 py-1 bg-[#2a2a2a] rounded-full text-xs text-gray-300 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
                    READY
                  </span>
                  <span className="px-3 py-1 bg-[#2a2a2a] rounded-full text-xs text-gray-300 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 bg-yellow-500 rounded-full"></span>
                    READY
                  </span>
                  <span className="px-3 py-1 bg-[#2a2a2a] rounded-full text-xs text-gray-300 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
                    READY
                  </span>
                </div>
                <div className="bg-[#2a2a2a] rounded-xl p-3">
                  <span className="text-gray-400 text-sm">Start a chat</span>
                </div>
              </div>
            </div>

            {/* Floating Badge */}
            <div className="absolute bottom-8 left-8 bg-white rounded-lg px-4 py-2 shadow-lg">
              <span className="text-[#212121] font-medium text-sm">$18.5 million upside</span>
            </div>
          </div>

          {/* Right Card - Person with laptop */}
          <div className="relative rounded-3xl overflow-hidden aspect-[4/3]">
            <Image
              src="/images/d59ed9db0ddb73f0ea4faac7947f9e84265e6be5-2880x1680.jpg"
              alt="Professional working"
              fill
              className="object-cover"
            />
            {/* Floating Badge */}
            <div className="absolute bottom-8 right-8 bg-white rounded-lg px-4 py-2 shadow-lg">
              <span className="text-[#212121] font-medium text-sm">expanded deal sizes</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
