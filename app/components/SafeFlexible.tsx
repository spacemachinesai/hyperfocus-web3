"use client";

import Link from "next/link";

const features = [
  {
    title: "Security",
    description: "Ensure privacy and compliance with multi-layered protection, access controls, and industry-certified security standards.",
    icon: (
      <svg className="w-16 h-16" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="16" y="16" width="32" height="32" transform="rotate(45 32 32)" />
        <rect x="22" y="22" width="20" height="20" transform="rotate(45 32 32)" />
        <rect x="28" y="28" width="8" height="8" transform="rotate(45 32 32)" />
      </svg>
    ),
  },
  {
    title: "Deployment",
    description: "Secure your data by deploying within a dedicated virtual private cloud (VPC) environment or on-premises, air-gapped behind your firewall.",
    icon: (
      <svg className="w-16 h-16" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="32" cy="32" r="20" />
        <ellipse cx="32" cy="32" rx="20" ry="8" />
        <ellipse cx="32" cy="32" rx="8" ry="20" />
        <line x1="12" y1="32" x2="52" y2="32" />
        <line x1="32" y1="12" x2="32" y2="52" />
      </svg>
    ),
  },
  {
    title: "Customization",
    description: "Train our models on your proprietary data and partner with us to create unique AI solutions that fit your use cases, needs, and infrastructure.",
    icon: (
      <svg className="w-16 h-16" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5">
        {/* Grid pattern */}
        {[...Array(6)].map((_, i) => (
          <line key={`v-${i}`} x1={12 + i * 8} y1="12" x2={12 + i * 8} y2="52" />
        ))}
        {[...Array(6)].map((_, i) => (
          <line key={`h-${i}`} x1="12" y1={12 + i * 8} x2="52" y2={12 + i * 8} />
        ))}
      </svg>
    ),
  },
];

export default function SafeFlexible() {
  return (
    <section className="section-padding bg-pureWhite">
      <div className="container-web3">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-web3-36 md:text-web3-48 font-medium text-neutral-50">
            Safe. Flexible. Built for business.
          </h2>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col">
              {/* Icon */}
              <div className="mb-6 text-volcanic-900">
                {feature.icon}
              </div>

              {/* Title */}
              <h3 className="text-web3-20 font-medium text-volcanic-900 mb-3">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-web3-16 text-neutral-50 mb-4 flex-grow">
                {feature.description}
              </p>

              {/* Link */}
              <Link
                href={`#${feature.title.toLowerCase()}`}
                className="inline-flex items-center gap-2 text-web3-14 font-medium text-volcanic-900 hover:text-neutral-50 transition-colors"
              >
                Learn more
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
