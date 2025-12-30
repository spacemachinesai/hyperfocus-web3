"use client";

import Image from "next/image";

const testimonials = [
  {
    quote:
      "Cohere has transformed how our team works with data. The accuracy and speed of their models is remarkable.",
    author: "Sarah Chen",
    role: "VP of Engineering",
    company: "Tech Company",
    image: "/images/30ec75e875e50726980c6a68a63b315b8503f1f7-840x840.jpg",
  },
  {
    quote:
      "We've seen a 40% increase in productivity since implementing Cohere's AI assistant across our organization.",
    author: "Michael Roberts",
    role: "CTO",
    company: "Enterprise Corp",
    image: "/images/871cc9ed4e63113205ab55e2a6cb207d8d32a2aa-840x840.jpg",
  },
  {
    quote:
      "The privacy and security features gave us the confidence to deploy AI at scale across our entire company.",
    author: "Jennifer Lee",
    role: "Head of AI",
    company: "Global Finance",
    image: "/images/6ae6fc28f20cc442e8853d60392c50227a430992-840x840.jpg",
  },
];

export default function Testimonials() {
  return (
    <section className="section-padding bg-white">
      <div className="container-web3">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="font-eyebrow mb-4 block">Testimonials</span>
          <h2 className="text-web3-36 md:text-web3-48 font-medium text-[#212121]">
            Trusted by leaders
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-[#fafafa] rounded-2xl p-8 card-hover"
            >
              {/* Quote */}
              <p className="text-web3-18 text-[#212121] mb-8 leading-relaxed">
                &ldquo;{testimonial.quote}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <Image
                  src={testimonial.image}
                  alt={testimonial.author}
                  width={48}
                  height={48}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="text-web3-16 font-medium text-[#212121]">
                    {testimonial.author}
                  </p>
                  <p className="text-web3-14 text-[#71717a]">
                    {testimonial.role}, {testimonial.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
