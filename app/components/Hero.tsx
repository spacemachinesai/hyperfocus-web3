"use client";

import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-white pt-24 md:pt-32">
      <div className="container-web3">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="flex flex-col">
            {/* Eyebrow */}
            <span className="font-eyebrow mb-4 md:mb-6">
              Enterprise AI Platform
            </span>

            {/* Main Headline */}
            <h1 className="text-web3-40 md:text-web3-56 lg:text-web3-72 font-medium tracking-tight text-[#212121] mb-6">
              The AI platform for{" "}
              <span className="text-[#39594D]">enterprise</span>
            </h1>

            {/* Subheadline */}
            <p className="text-web3-18 md:text-web3-20 text-[#71717a] mb-8 max-w-xl">
              Cohere builds powerful models and AI solutions enabling enterprises
              to automate processes, empower employees, and turn fragmented data
              into actionable insights.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="#try"
                className="btn-primary text-center inline-flex items-center justify-center"
              >
                Try Now
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
                className="btn-secondary text-center inline-flex items-center justify-center"
              >
                Contact Sales
              </Link>
            </div>

            {/* Trust badges */}
            <div className="mt-12 flex flex-col gap-4">
              <p className="text-web3-12 text-[#71717a] uppercase tracking-wider font-medium">
                Trusted by leading enterprises
              </p>
              <div className="flex items-center gap-8 opacity-60">
                <Image
                  src="/images/d5bd03ccb68aceccae91a5e93f104e143b8b930d-170x60.svg"
                  alt="Partner logo"
                  width={85}
                  height={30}
                />
                <Image
                  src="/images/bea01a873a54823b1b79c71b16e74e94d7871b14-170x60.svg"
                  alt="Partner logo"
                  width={85}
                  height={30}
                />
                <Image
                  src="/images/44b6dcb718341a204c9684ecd69889fd204d1368-170x60.svg"
                  alt="Partner logo"
                  width={85}
                  height={30}
                  className="hidden sm:block"
                />
              </div>
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="relative flex items-center justify-center lg:justify-end">
            <div className="relative w-full max-w-lg lg:max-w-none">
              <Image
                src="/images/b69260eb0e7a7e01b46e46ef7a15649f6dccd9c7-2880x1200.png"
                alt="Enterprise AI Platform"
                width={900}
                height={375}
                className="w-full h-auto"
                priority
              />
            </div>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#fafafa] to-transparent pointer-events-none" />
    </section>
  );
}
