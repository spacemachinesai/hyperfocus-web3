"use client";

import Image from "next/image";
import Link from "next/link";

const newsItems = [
  {
    category: "Company",
    date: "Dec 12, 2024",
    title: "Cohere Launches Command R7B: A Small Model with Big Capabilities",
    image: "/images/b69260eb0e7a7e01b46e46ef7a15649f6dccd9c7-2880x1200.png",
  },
  {
    category: "Research",
    date: "Dec 05, 2024",
    title: "Introducing Aya Expanse: Connecting 23 Languages with Cutting-Edge AI",
    image: "/images/d59ed9db0ddb73f0ea4faac7947f9e84265e6be5-2880x1680.jpg",
  },
  {
    category: "Product",
    date: "Nov 28, 2024",
    title: "North by Cohere: The Enterprise AI Platform Built for Business",
    image: "/images/2bdf37ce948a075fe68d570a9da1b10ca74330a6-1472x1472.png",
  },
];

export default function LatestNews() {
  return (
    <section className="section-padding bg-white">
      <div className="container-web3">
        {/* Header */}
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-web3-24 md:text-web3-36 font-medium text-[#212121]">
            The latest news
          </h2>

          <Link
            href="#blog"
            className="inline-flex items-center gap-2 text-web3-14 font-medium text-[#212121] hover:text-[#71717a] transition-colors"
          >
            View all
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {newsItems.map((item, index) => (
            <Link
              key={index}
              href="#article"
              className="group block"
            >
              {/* Image */}
              <div className="relative aspect-[16/10] rounded-2xl overflow-hidden mb-4">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Meta */}
              <div className="flex items-center gap-3 mb-3">
                <span className="text-web3-12 font-medium text-[#FF7759]">
                  {item.category}
                </span>
                <span className="text-web3-12 text-[#71717a]">
                  {item.date}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-web3-18 font-medium text-[#212121] group-hover:text-[#71717a] transition-colors line-clamp-2">
                {item.title}
              </h3>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
