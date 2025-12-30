"use client";

import Image from "next/image";
import Link from "next/link";

export default function Solutions() {
  return (
    <section className="section-padding bg-[#fafafa]">
      <div className="container-web3">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div>
            <span className="font-eyebrow mb-4 block">Why Cohere</span>
            <h2 className="text-web3-36 md:text-web3-48 font-medium text-[#212121] mb-6">
              Built for enterprise
            </h2>
            <p className="text-web3-18 text-[#71717a] mb-8">
              Our platform is designed from the ground up for the unique needs of
              enterprise organizations. Deploy with confidence knowing your data
              stays private and secure.
            </p>

            {/* Feature list */}
            <ul className="space-y-6 mb-8">
              <li className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#39594D] flex items-center justify-center">
                  <svg
                    className="w-4 h-4 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="text-web3-18 font-medium text-[#212121] mb-1">
                    Private & Secure
                  </h4>
                  <p className="text-web3-16 text-[#71717a]">
                    Your data is never used to train our models. Deploy on-premises
                    or in your private cloud.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#39594D] flex items-center justify-center">
                  <svg
                    className="w-4 h-4 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="text-web3-18 font-medium text-[#212121] mb-1">
                    Customizable
                  </h4>
                  <p className="text-web3-16 text-[#71717a]">
                    Fine-tune models on your data to match your unique business
                    terminology and use cases.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#39594D] flex items-center justify-center">
                  <svg
                    className="w-4 h-4 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="text-web3-18 font-medium text-[#212121] mb-1">
                    Enterprise Support
                  </h4>
                  <p className="text-web3-16 text-[#71717a]">
                    Dedicated support, SLAs, and expert guidance to ensure your
                    success.
                  </p>
                </div>
              </li>
            </ul>

            <Link href="#contact" className="btn-primary inline-flex items-center">
              Talk to an Expert
              <svg
                className="ml-2 w-4 h-4"
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

          {/* Right Image */}
          <div className="relative">
            <Image
              src="/images/d59ed9db0ddb73f0ea4faac7947f9e84265e6be5-2880x1680.jpg"
              alt="Enterprise solutions"
              width={720}
              height={420}
              className="rounded-2xl w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
