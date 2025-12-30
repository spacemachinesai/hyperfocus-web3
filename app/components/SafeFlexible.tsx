"use client";

const problemBlocks = [
  {
    title: "The Data Mess",
    headline: "5 dashboards. 3 spreadsheets. 0 clarity.",
    description: "You're not running your business — you're running a data entry operation.",
    icon: (
      <svg className="w-12 h-12" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="6" y="6" width="36" height="36" rx="4" />
        <line x1="6" y1="18" x2="42" y2="18" />
        <line x1="6" y1="30" x2="42" y2="30" />
        <line x1="18" y1="6" x2="18" y2="42" />
        <line x1="30" y1="6" x2="30" y2="42" />
        <circle cx="24" cy="24" r="6" strokeDasharray="3 3" />
      </svg>
    ),
  },
  {
    title: "The Profit Mystery",
    headline: "Amazon says $50K. TikTok says $30K.",
    description: "Your bank account? Doesn't add up. Finding the truth takes days. And you still might miss it.",
    icon: (
      <svg className="w-12 h-12" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="24" cy="24" r="18" />
        <path d="M24 14v20" />
        <path d="M18 20c0-3.3 2.7-6 6-6s6 2.7 6 6-2.7 6-6 6" />
        <circle cx="24" cy="38" r="2" fill="currentColor" />
      </svg>
    ),
  },
  {
    title: "The Firefighting",
    headline: "Stockouts. Cash crunch. Supplier chaos.",
    description: "You're always reacting. Never planning.",
    icon: (
      <svg className="w-12 h-12" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M24 4v8" />
        <path d="M24 36v8" />
        <path d="M4 24h8" />
        <path d="M36 24h8" />
        <path d="M10 10l6 6" />
        <path d="M32 32l6 6" />
        <path d="M10 38l6-6" />
        <path d="M32 16l6-6" />
        <circle cx="24" cy="24" r="8" />
        <path d="M21 21l6 6" strokeWidth="2" />
        <path d="M27 21l-6 6" strokeWidth="2" />
      </svg>
    ),
  },
];

export default function SafeFlexible() {
  return (
    <section className="pt-16 md:pt-24 pb-16 md:pb-24 bg-neutral-100">
      <div className="container-web3">
        {/* Section Header */}
        <div className="text-center mb-14">
          <h2 className="text-web3-14-eyebrow text-coral-500 mb-4">
            REAL. ACTIONABLE. AI-POWERED.
          </h2>
          <p className="text-web3-24 md:text-web3-36 font-medium text-volcanic-900 max-w-3xl mx-auto">
            Sound familiar? You&apos;re not alone.
          </p>
        </div>

        {/* Problem Blocks Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {problemBlocks.map((block, index) => (
            <div
              key={index}
              className="bg-pureWhite rounded-[20px] p-8 border border-neutral-90 hover:border-coral-200 transition-colors duration-300 ease-in-out"
            >
              {/* Icon */}
              <div className="mb-6 text-coral-500">
                {block.icon}
              </div>

              {/* Title */}
              <h3 className="text-web3-14-eyebrow text-neutral-50 mb-3">
                {block.title}
              </h3>

              {/* Headline */}
              <p className="text-web3-20 md:text-web3-24 font-medium text-volcanic-900 mb-4">
                {block.headline}
              </p>

              {/* Description */}
              <p className="text-web3-16 text-neutral-50">
                {block.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
