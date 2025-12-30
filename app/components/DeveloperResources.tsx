"use client";

import Link from "next/link";
import { useState } from "react";

const docSections = [
  { title: "Get Started", items: ["Introduction", "Installation", "Creating a client", "Quickstart", "Playground", "FAQs"] },
  { title: "Models", items: ["An Overview of Cohere's Models", "Command", "Embed", "Rerank", "Aya"] },
  { title: "Text Generation", items: [] },
];

const codeExample = `import cohere

co = cohere.ClientV2(api_key="YOUR_API_KEY")`;

export default function DeveloperResources() {
  const [activeSection, setActiveSection] = useState("Creating a client");
  const [activeTab, setActiveTab] = useState("Python");

  return (
    <section className="relative overflow-hidden">
      {/* Blue gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1e3a8a] via-[#3730a3] to-[#4c1d95]" />

      <div className="container-web3 relative z-10 pb-16 md:pb-36">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-white">
            <h2 className="text-web3-36 md:text-web3-48 font-medium mb-6">
              Developer resources
            </h2>
            <p className="text-web3-18 text-white/80 mb-8">
              Find everything you need to start building, from API access to deep technical docs, and try our models in the Playground.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="#docs"
                className="inline-flex items-center justify-center px-6 py-3 border border-white text-white rounded-full font-medium hover:bg-white/10 transition-colors duration-300 ease-in-out"
              >
                Let&apos;s go
              </Link>
              <Link
                href="#api-key"
                className="inline-flex items-center gap-2 text-white font-medium hover:text-white/80 transition-colors duration-300 ease-in-out"
              >
                Get an API key
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Right - Docs Panel */}
          <div className="bg-pureWhite rounded-card shadow-2xl overflow-hidden">
            {/* Header */}
            <div className="p-4 border-b">
              <div className="flex items-center gap-2">
                <span className="text-coral-500 font-bold text-lg">⚡</span>
                <span className="font-medium text-volcanic-900">cohere docs</span>
                <span className="ml-2 px-2 py-0.5 bg-neutral-100 rounded text-sm text-neutral-60">v2 API</span>
              </div>
            </div>

            {/* Tabs */}
            <div className="flex gap-2 p-4 border-b overflow-x-auto">
              {["Guides and concepts", "API Reference", "Release Notes", "LLMU", "Cookbooks"].map((tab) => (
                <button
                  key={tab}
                  className="px-3 py-1.5 text-sm text-volcanic-900 whitespace-nowrap hover:bg-neutral-100 rounded transition-colors duration-300 ease-in-out"
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Content */}
            <div className="flex">
              {/* Sidebar */}
              <div className="w-48 border-r p-4 text-sm hidden md:block">
                {docSections.map((section) => (
                  <div key={section.title} className="mb-4">
                    <p className="font-medium text-volcanic-900 mb-2">{section.title}</p>
                    <ul className="space-y-1">
                      {section.items.map((item) => (
                        <li key={item}>
                          <button
                            onClick={() => setActiveSection(item)}
                            className={`w-full text-left px-2 py-1 rounded text-sm transition-colors duration-300 ease-in-out ${
                              activeSection === item
                                ? "bg-green-500 text-white"
                                : "text-neutral-60 hover:bg-neutral-100"
                            }`}
                          >
                            {item}
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              {/* Main content */}
              <div className="flex-1 p-6">
                <p className="text-sm text-green-500 mb-1">Get Started</p>
                <h3 className="text-2xl font-medium text-volcanic-900 mb-4">Creating a client</h3>
                <p className="text-sm text-neutral-60 mb-4">
                  To start using all features available in the Cohere SDK first.
                </p>

                {/* Language tabs */}
                <div className="flex gap-4 mb-4 text-sm">
                  {["Python", "TypeScript", "Java", "Go"].map((lang) => (
                    <button
                      key={lang}
                      onClick={() => setActiveTab(lang)}
                      className={`transition-colors duration-300 ease-in-out ${
                        activeTab === lang
                          ? "text-volcanic-900 font-medium border-b-2 border-volcanic-900"
                          : "text-neutral-50 hover:text-volcanic-900"
                      }`}
                    >
                      {lang}
                    </button>
                  ))}
                </div>

                {/* Code block */}
                <div className="bg-gray-900 rounded-lg p-4 text-sm font-mono">
                  <div className="text-gray-400">
                    <span className="text-purple-400">1</span>{"  "}
                    <span className="text-pink-400">import</span>{" "}
                    <span className="text-green-400">cohere</span>
                  </div>
                  <div className="text-gray-400">
                    <span className="text-purple-400">2</span>
                  </div>
                  <div className="text-gray-400">
                    <span className="text-purple-400">3</span>{"  "}
                    <span className="text-blue-300">co</span>{" "}
                    <span className="text-pink-400">=</span>{" "}
                    <span className="text-green-400">cohere</span>.
                    <span className="text-yellow-300">ClientV2</span>(
                    <span className="text-blue-300">api_key</span>=
                    <span className="text-orange-300">&quot;YOUR_API_KEY&quot;</span>)
                  </div>
                </div>

                <Link href="#source" className="inline-flex items-center gap-1 mt-4 text-sm text-green-500 hover:underline">
                  Source
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
