"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const testimonials = [
  {
    company: "FUJITSU",
    logo: (
      <svg className="h-8" viewBox="0 0 120 24" fill="currentColor">
        <text x="0" y="20" fontSize="20" fontWeight="bold">FUJITSU</text>
      </svg>
    ),
    quote: "With Cohere's latest highly secure enterprise LLMs, we aim to provide businesses with powerful and adaptable AI solutions that address specific needs and accelerate the adoption of generative AI globally.",
    author: "Vivek Mahajan",
    role: "Corporate Vice President, CTO and CPO",
    image: "/images/d59ed9db0ddb73f0ea4faac7947f9e84265e6be5-2880x1680.jpg",
  },
  {
    company: "Oracle",
    logo: (
      <svg className="h-6" viewBox="0 0 100 20" fill="currentColor">
        <text x="0" y="16" fontSize="16" fontWeight="bold">ORACLE</text>
      </svg>
    ),
    quote: "Cohere's enterprise-focused approach to AI aligns perfectly with our mission to help organizations harness the power of data and AI responsibly.",
    author: "Larry Ellison",
    role: "Chairman and CTO",
    image: "/images/b69260eb0e7a7e01b46e46ef7a15649f6dccd9c7-2880x1200.png",
  },
];

export default function Testimonials() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const testimonial = testimonials[currentSlide];

  return (
    <section className="pt-12 md:pt-20 pb-12 md:pb-20 bg-pureWhite">
      <div className="container-web3">
        {/* Header */}
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-web3-24 md:text-web3-36 font-medium text-volcanic-900">
            Why leading teams trust Cohere
          </h2>

          {/* Navigation Arrows */}
          <div className="flex items-center gap-2">
            <button
              onClick={prevSlide}
              className="w-10 h-10 rounded-full border border-neutral-90 flex items-center justify-center hover:bg-neutral-90 transition-opacity duration-300 ease-in-out"
              aria-label="Previous"
            >
              <svg className="w-5 h-5 text-volcanic-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={nextSlide}
              className="w-10 h-10 rounded-full border border-neutral-90 flex items-center justify-center hover:bg-neutral-90 transition-opacity duration-300 ease-in-out"
              aria-label="Next"
            >
              <svg className="w-5 h-5 text-volcanic-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Testimonial Card */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 rounded-[20px] overflow-hidden border border-neutral-90">
          {/* Left - Quote */}
          <div className="p-8 lg:p-12 bg-pureWhite flex flex-col">
            {/* Company Logo */}
            <div className="text-volcanic-900 mb-6">
              {testimonial.logo}
            </div>

            {/* Quote */}
            <blockquote className="text-web3-20 md:text-web3-24 text-volcanic-900 mb-6 flex-grow">
              &ldquo;{testimonial.quote}&rdquo;
            </blockquote>

            {/* Author */}
            <div className="mb-6">
              <p className="text-volcanic-900 font-medium">— {testimonial.author}</p>
              <p className="text-neutral-50 text-sm">{testimonial.role}</p>
            </div>

            {/* Link */}
            <Link
              href="#case-study"
              className="inline-flex items-center gap-2 text-web3-14 font-medium text-volcanic-900 hover:text-neutral-50 transition-colors duration-300 ease-in-out"
            >
              Read more
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </Link>
          </div>

          {/* Right - Image */}
          <div className="relative aspect-square lg:aspect-auto">
            <Image
              src={testimonial.image}
              alt={testimonial.company}
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Progress Bar */}
        <div className="mt-8 flex justify-center">
          <div className="w-64 h-1 bg-neutral-90 rounded-full overflow-hidden">
            <div
              className="h-full bg-coral-500 rounded-full transition-all duration-300 ease-in-out"
              style={{ width: `${((currentSlide + 1) / testimonials.length) * 100}%` }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
