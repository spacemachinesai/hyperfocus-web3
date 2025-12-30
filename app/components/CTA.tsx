"use client";

import Link from "next/link";
import Image from "next/image";

export default function CTA() {
  return (
    <section className="section-padding bg-[#212121] text-white">
      <div className="container-web3">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <span className="text-[#FF7759] font-eyebrow mb-4 block">
              Get Started
            </span>
            <h2 className="text-web3-36 md:text-web3-48 font-medium mb-6">
              Ready to transform your enterprise with AI?
            </h2>
            <p className="text-web3-18 text-[#a1a1aa] mb-8">
              Join leading organizations using Cohere to unlock the power of AI.
              Start building today with our free tier or talk to sales for
              enterprise solutions.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="#try"
                className="inline-flex items-center justify-center px-6 py-3 bg-white text-[#212121] rounded-full font-medium hover:bg-[#f4f4f5] transition-colors"
              >
                Start Free
                <svg
                  className="ml-2 w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Link>
              <Link
                href="#contact"
                className="inline-flex items-center justify-center px-6 py-3 border border-white/30 text-white rounded-full font-medium hover:bg-white/10 transition-colors"
              >
                Contact Sales
              </Link>
            </div>
          </div>

          {/* Right Content */}
          <div className="flex justify-center lg:justify-end">
            <Image
              src="/images/1f6b5d596ac283b5d9c14db03d3bd5863dec1fcc-2880x1200.png"
              alt="AI Platform"
              width={600}
              height={250}
              className="w-full max-w-lg h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
