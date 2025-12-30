"use client";

import Image from "next/image";
import Link from "next/link";

export default function CTA() {
  return (
    <section className="relative pt-12 md:pt-20 pb-16 md:pb-36 md:min-h-[400px] md:max-h-[800px] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/b69260eb0e7a7e01b46e46ef7a15649f6dccd9c7-2880x1200.png"
          alt="Abstract 3D shapes"
          fill
          className="object-cover"
        />
      </div>

      <div className="container-web3 relative z-10">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
          <h2 className="text-web3-36 md:text-web3-48 lg:text-web3-56 font-medium text-white mb-4">
            Stop exporting CSVs. Start knowing your numbers.
          </h2>

          <p className="text-web3-18 md:text-web3-20 text-white/80 mb-6">
            Join the waitlist. We&apos;re onboarding in batches.
          </p>

          <Link
            href="#early-access"
            className="inline-flex items-center justify-center px-8 py-4 bg-pureWhite text-volcanic-900 rounded-full font-medium hover:bg-white/90 transition-colors duration-300 ease-in-out"
          >
            Get Early Access
          </Link>
        </div>
      </div>
    </section>
  );
}
