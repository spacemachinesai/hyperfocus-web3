"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const industries = [
  {
    title: "Financial Services",
    image: "/images/30ec75e875e50726980c6a68a63b315b8503f1f7-840x840.jpg",
    color: "from-amber-900/70",
    href: "/solutions/financial-services",
  },
  {
    title: "Public Sector",
    image: "/images/6ae6fc28f20cc442e8853d60392c50227a430992-840x840.jpg",
    color: "from-gray-500/70",
    href: "/solutions/public-sector",
  },
  {
    title: "Energy",
    image: "/images/871cc9ed4e63113205ab55e2a6cb207d8d32a2aa-840x840.jpg",
    color: "from-sky-600/70",
    href: "/solutions/energy-and-utilities",
  },
  {
    title: "Technology",
    image: "/images/b5264330c568955041d465542469ebfdeb196547-840x840.jpg",
    color: "from-neutral-700/70",
    href: "/solutions/technology",
  },
];

export default function Industries() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % Math.max(1, industries.length - 3));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + Math.max(1, industries.length - 3)) % Math.max(1, industries.length - 3));
  };

  return (
    <section className="section-padding bg-white">
      <div className="container-web3">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-web3-24 md:text-web3-36 font-medium text-[#212121]">
            Powering progress across industries
          </h2>

          {/* Navigation Arrows */}
          <div className="flex items-center gap-2">
            <button
              onClick={prevSlide}
              className="w-10 h-10 rounded-full border border-[#E5E5E5] flex items-center justify-center hover:bg-gray-50 transition-colors"
              aria-label="Previous"
            >
              <svg className="w-5 h-5 text-[#212121]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={nextSlide}
              className="w-10 h-10 rounded-full border border-[#E5E5E5] flex items-center justify-center hover:bg-gray-50 transition-colors"
              aria-label="Next"
            >
              <svg className="w-5 h-5 text-[#212121]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {industries.map((industry, index) => (
            <Link
              key={index}
              href={industry.href}
              className="group relative aspect-[3/4] rounded-2xl overflow-hidden cursor-pointer block"
            >
              <Image
                src={industry.image}
                alt={industry.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className={`absolute inset-0 bg-gradient-to-t ${industry.color} to-transparent`} />
              <div className="absolute inset-0 p-6 flex flex-col justify-start">
                <h3 className="text-white text-web3-18 font-medium">
                  {industry.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>

        {/* Progress Bar */}
        <div className="mt-8 flex justify-center">
          <div className="w-64 h-1 bg-gray-200 rounded-full overflow-hidden">
            <div
              className="h-full bg-[#FF7759] rounded-full transition-all duration-300"
              style={{ width: `${((currentSlide + 1) / Math.max(1, industries.length - 3)) * 50 + 50}%` }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
