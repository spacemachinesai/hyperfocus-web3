"use client";

import { useState } from "react";
import Link from "next/link";

const models = [
  {
    name: "Command",
    description: "A family of high-performance generative models",
    features: [
      "Supports 23 languages for global communication and discovery",
      "Seamlessly integrates into existing systems without disruption",
      "Powers AI applications that reason, act, and generate insights anchored in your data",
    ],
  },
  {
    name: "Embed",
    description: "Industry-leading semantic search and RAG capabilities",
    features: [
      "Best-in-class text embeddings for semantic search",
      "Multilingual support for 100+ languages",
      "Optimized for retrieval-augmented generation",
    ],
  },
  {
    name: "Rerank",
    description: "Intelligent relevance ranking for search results",
    features: [
      "Dramatically improves search quality",
      "Works with any search system",
      "Understands context and intent",
    ],
  },
];

export default function Models() {
  const [activeModel, setActiveModel] = useState(0);

  return (
    <section className="pt-12 md:pt-20 pb-16 md:pb-36 bg-pureWhite">
      <div className="container-web3">
        {/* Section Header */}
        <div className="text-center mb-14">
          <h2 className="text-web3-36 md:text-web3-48 font-medium text-neutral-50">
            Our models. All business.
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          {/* Left - Chat Demo */}
          <div className="bg-neutral-90 rounded-[20px] p-8">
            {/* User message */}
            <div className="flex items-start gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-neutral-80 overflow-hidden flex-shrink-0">
                <div className="w-full h-full bg-gradient-to-br from-neutral-70 to-neutral-60" />
              </div>
              <div className="flex-1">
                <p className="text-volcanic-900 text-web3-16">
                  Draft a concise product description for our new energy management platform. Here are the details:
                </p>
                <div className="mt-3 inline-flex items-center gap-2 bg-pureWhite rounded-lg px-4 py-2">
                  <svg className="w-5 h-5 text-neutral-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  <div>
                    <p className="text-sm font-medium text-volcanic-900">E-MANAGE-PLATFORM_3.5</p>
                    <p className="text-xs text-neutral-50">PDF • 132 KB</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Generating button */}
            <div className="flex justify-center mb-6">
              <button className="inline-flex items-center gap-2 bg-coral-500 text-white px-6 py-3 rounded-full font-medium">
                <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                </svg>
                Generating...
              </button>
            </div>

            {/* AI Response */}
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-lg bg-coral-500 flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <rect x="4" y="4" width="6" height="6" rx="1" />
                  <rect x="14" y="4" width="6" height="6" rx="1" />
                  <rect x="4" y="14" width="6" height="6" rx="1" />
                  <rect x="14" y="14" width="6" height="6" rx="1" />
                </svg>
              </div>
              <div className="flex-1 bg-pureWhite rounded-2xl p-4">
                <p className="text-volcanic-900 text-web3-14 mb-3">
                  Certainly! Here&apos;s an initial draft of a product description for your energy management platform.
                </p>
                <p className="text-green-500 text-web3-14 italic">
                  Introducing the ultimate solution for efficient energy management: our cutting-edge platform. This innovative system empowers businesses and organizations to take control of their energy consumption with razor sharp accuracy and data-driven insights...
                </p>
                <div className="flex items-center gap-2 mt-4 text-gray-400">
                  <button className="hover:text-gray-600">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                    </svg>
                  </button>
                  <button className="hover:text-gray-600">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Model Accordion */}
          <div className="space-y-0">
            {models.map((model, index) => (
              <div
                key={index}
                className="border-t border-neutral-90 first:border-t-0"
              >
                <button
                  onClick={() => setActiveModel(activeModel === index ? -1 : index)}
                  className="w-full py-6 flex items-center justify-between text-left"
                >
                  <span className={`text-web3-24 font-medium transition-colors duration-300 ease-in-out ${activeModel === index ? "text-volcanic-900" : "text-neutral-50"}`}>
                    {model.name}
                  </span>
                  <svg
                    className={`w-5 h-5 text-volcanic-900 transition-transform duration-300 ease-in-out ${activeModel === index ? "rotate-180" : ""}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {activeModel === index && (
                  <div className="pb-6">
                    {/* Blue accent line */}
                    <div className="w-full h-0.5 bg-blue-500 mb-4" />

                    <p className="text-web3-16 text-neutral-50 mb-4">
                      {model.description}
                    </p>

                    <ul className="space-y-3 mb-6">
                      {model.features.map((feature, fIndex) => (
                        <li key={fIndex} className="flex items-start gap-3">
                          <svg className="w-5 h-5 text-volcanic-900 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-web3-14 text-volcanic-900">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <Link
                      href={`#${model.name.toLowerCase()}`}
                      className="inline-flex items-center gap-2 text-web3-14 font-medium text-volcanic-900 hover:text-neutral-50 transition-colors duration-300 ease-in-out"
                    >
                      Learn more
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </Link>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
