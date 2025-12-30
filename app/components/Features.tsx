"use client";

import Image from "next/image";
import Link from "next/link";

const features = [
  {
    eyebrow: "Command",
    title: "Enterprise AI Assistant",
    description:
      "Deploy AI assistants that understand your business context, integrate with your tools, and help employees work more efficiently.",
    image: "/images/2bdf37ce948a075fe68d570a9da1b10ca74330a6-1472x1472.png",
    link: "#command",
  },
  {
    eyebrow: "Embed",
    title: "Semantic Search & RAG",
    description:
      "Build powerful search experiences that understand meaning, not just keywords. Connect your data for accurate, grounded responses.",
    image: "/images/e6a8075c9b6ed82405bfea0c8b45687eae67ea78-1472x1472.png",
    link: "#embed",
  },
  {
    eyebrow: "Rerank",
    title: "Intelligent Ranking",
    description:
      "Improve search relevance with AI that understands context and intent. Deliver the right information at the right time.",
    image: "/images/0ea462b7b3d6aee933777aadc96be761703af232-1360x1360.png",
    link: "#rerank",
  },
];

export default function Features() {
  return (
    <section className="section-padding bg-white">
      <div className="container-web3">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-24">
          <span className="font-eyebrow mb-4 block">Our Products</span>
          <h2 className="text-web3-36 md:text-web3-48 font-medium text-[#212121] mb-6">
            Build with the best AI
          </h2>
          <p className="text-web3-18 text-[#71717a] max-w-2xl mx-auto">
            From search to generation, our models power the most demanding
            enterprise applications.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-[#fafafa] rounded-2xl p-8 card-hover"
            >
              {/* Image */}
              <div className="mb-6 overflow-hidden rounded-xl">
                <Image
                  src={feature.image}
                  alt={feature.title}
                  width={368}
                  height={368}
                  className="w-full h-auto transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <span className="font-eyebrow mb-2 block">{feature.eyebrow}</span>
              <h3 className="text-web3-24 font-medium text-[#212121] mb-3">
                {feature.title}
              </h3>
              <p className="text-web3-16 text-[#71717a] mb-6">
                {feature.description}
              </p>

              {/* Link */}
              <Link
                href={feature.link}
                className="link-arrow text-[#212121] font-medium"
              >
                Learn more
                <svg
                  className="w-4 h-4"
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
