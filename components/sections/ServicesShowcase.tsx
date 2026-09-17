import React from "react";
import Image from "next/image";
import Link from "next/link";
import { servicePillars } from "@/lib/data/services";

export default function ServicesShowcase() {
  return (
    <section
      id="pillars-showcase"
      className="h-screen h-[100dvh] min-h-screen min-h-[100dvh] w-full snap-start snap-always flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 pt-18 sm:pt-22 pb-6 relative z-10 overflow-y-auto sm:overflow-visible bg-[#F7FAFC] border-b border-[#DDE6ED]"
    >
      <div className="my-auto w-full max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-5 sm:mb-7">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0B1724] font-heading tracking-tight">
            Operational Pillars Built for Scale
          </h2>
          <p className="mt-1.5 text-xs sm:text-sm text-[#5F7183]">
            Comprehensive solutions designed to integrate seamlessly into your business.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">
          {servicePillars.map((pillar) => (
            <div
              key={pillar.id}
              className="bg-white border border-[#DDE6ED] hover:border-[#08A9E6]/60 rounded-2xl shadow-xs hover:shadow-md transition-all duration-200 overflow-hidden flex flex-col group"
            >
              <Link href={`/services#${pillar.id}`} className="block relative w-full h-28 sm:h-32 xl:h-36 overflow-hidden bg-slate-100">
                <Image
                  src={`/images/service-${pillar.id}.jpg`}
                  alt={`${pillar.title} - Virtual Stack BPO`}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-300"
                />
              </Link>
              <div className="p-3.5 sm:p-4 flex flex-col flex-grow">
                <Link href={`/services#${pillar.id}`} className="block">
                  <h3 className="text-sm sm:text-base font-bold text-[#0B1724] group-hover:text-[#08A9E6] transition-colors font-heading mb-1">
                    {pillar.title}
                  </h3>
                </Link>
                <p className="text-xs text-[#5F7183] mb-3 flex-grow leading-relaxed line-clamp-2">
                  {pillar.tagline}
                </p>
                <div className="pt-2.5 border-t border-[#DDE6ED]/70 mt-auto">
                  <Link
                    href={`/services#${pillar.id}`}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#08A9E6] hover:text-[#078FCC] transition-colors"
                  >
                    <span>Explore {pillar.title}</span>
                    <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
