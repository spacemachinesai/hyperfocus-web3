"use client";

import Image from "next/image";

const logos = [
  { src: "/images/bea01a873a54823b1b79c71b16e74e94d7871b14-170x60.svg", alt: "LG CNS" },
  { src: "/images/44b6dcb718341a204c9684ecd69889fd204d1368-170x60.svg", alt: "FUJITSU" },
  { src: "/images/9210d325433b4057e78429767006c4886df08ac4-170x60.svg", alt: "Bell" },
  { src: "/images/e8a30bc84caccaef42d84f2c447c58c63443d2fb-170x60.svg", alt: "Asana" },
  { src: "/images/d5bd03ccb68aceccae91a5e93f104e143b8b930d-170x60.svg", alt: "SAP" },
];

export default function LogoCarousel() {
  return (
    <section className="py-10 bg-pureWhite">
      <div className="container-web3">
        <p className="text-web3-16 text-neutral-50 text-center mb-12">
          Trusted by industry leaders and developers worldwide
        </p>

        {/* Static large logos - Cohere style */}
        <div className="flex items-center justify-center gap-16 md:gap-24 lg:gap-32 flex-wrap">
          {logos.map((logo, index) => (
            <div key={index} className="flex-shrink-0">
              <Image
                src={logo.src}
                alt={logo.alt}
                width={170}
                height={60}
                className="h-[40px] md:h-[50px] w-auto grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
