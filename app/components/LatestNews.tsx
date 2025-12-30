"use client";

import Image from "next/image";
import Link from "next/link";

const newsItems = [
  {
    author: "Cohere Team",
    date: "Dec 11, 2025",
    title: "Introducing Rerank 4: Cohere's most powerful reranker yet",
    image: "/images/251211_Rerank4Launch_Hero.png",
  },
  {
    author: "Cohere Team",
    date: "Nov 27, 2025",
    title: "Cohere Expands Partnership with SAP to Provide Europe Sovereign AI Solutions",
    image: "/images/250501_blog-social-image_SAP-partnership-2.png",
  },
  {
    author: "Cohere Team",
    date: "Oct 07, 2025",
    title: "Announcing the Cohere Partner Program: Boosting enterprise AI",
    image: "/images/cohere_partner_program_blog_hero_1920x960.jpg",
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
            See more on the blog
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
              <div className="flex items-center gap-2 mb-3">
                <span className="text-web3-12 text-[#71717a]">
                  {item.author} - {item.date}
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
