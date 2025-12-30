"use client";

import Image from "next/image";
import Link from "next/link";

export default function CTA() {
  return (
    <section className="relative pt-12 md:pt-20 pb-12 md:pb-20 min-h-[400px] lg:min-h-[500px] xl:min-h-[600px] overflow-hidden">
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
          <h2 className="text-web3-36 md:text-web3-48 lg:text-web3-56 font-medium text-white mb-8">
            Ready to put AI to work?
          </h2>

          <Link
            href="#demo"
            className="inline-flex items-center justify-center px-8 py-4 bg-pureWhite text-volcanic-900 rounded-full font-medium hover:bg-white/90 transition-colors"
          >
            Request a demo
          </Link>
        </div>
      </div>
    </section>
  );
}
