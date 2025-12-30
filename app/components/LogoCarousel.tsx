"use client";

import Image from "next/image";

const logos = [
  { src: "/images/d5bd03ccb68aceccae91a5e93f104e143b8b930d-170x60.svg", alt: "RBC" },
  { src: "/images/bea01a873a54823b1b79c71b16e74e94d7871b14-170x60.svg", alt: "LG CNS" },
  { src: "/images/44b6dcb718341a204c9684ecd69889fd204d1368-170x60.svg", alt: "FUJITSU" },
  { src: "/images/9210d325433b4057e78429767006c4886df08ac4-170x60.svg", alt: "Bell" },
  { src: "/images/ccb5e5d4efb26a574f0795f046a002f84d7575d8-170x60.svg", alt: "EF" },
  { src: "/images/e7a9cfbbe3c3a6e61b156dd1f5a19219e69f861e-170x60.svg", alt: "McKinsey" },
  { src: "/images/e8a30bc84caccaef42d84f2c447c58c63443d2fb-170x60.svg", alt: "Accenture" },
  { src: "/images/d1d693711b08a6ea65038d7514ba2dbafcc2e1dc-170x60.svg", alt: "BambooHR" },
  { src: "/images/2e187278486f46880d2ee09aa592921051795576-170x60.svg", alt: "Oracle" },
];

export default function LogoCarousel() {
  return (
    <section className="py-16 bg-pureWhite overflow-hidden">
      <div className="container-web3 mb-8">
        <p className="text-web3-16 text-neutral-50 text-center">
          Trusted by industry leaders and developers worldwide
        </p>
      </div>

      <div className="relative">
        {/* Gradient overlays */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-pureWhite to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-pureWhite to-transparent z-10" />

        {/* Scrolling logos */}
        <div className="flex animate-scroll">
          {/* First set */}
          <div className="flex items-center gap-16 px-8 min-w-max">
            {logos.map((logo, index) => (
              <div key={`set1-${index}`} className="flex-shrink-0">
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={120}
                  height={42}
                  className="h-[30px] w-auto grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                />
              </div>
            ))}
          </div>
          {/* Second set (duplicate for infinite scroll) */}
          <div className="flex items-center gap-16 px-8 min-w-max">
            {logos.map((logo, index) => (
              <div key={`set2-${index}`} className="flex-shrink-0">
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={120}
                  height={42}
                  className="h-[30px] w-auto grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
