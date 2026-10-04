import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Truck,
  HeartPulse,
  Landmark,
  ShieldCheck,
  Building2,
  ShoppingCart,
  Code,
  Briefcase,
  ArrowRight,
} from "lucide-react";
import { industriesData } from "@/lib/data/industries";

function getIndustryIcon(iconName: string) {
  switch (iconName) {
    case "Truck":
      return <Truck className="w-4 h-4 text-[#08A9E6]" />;
    case "HeartPulse":
      return <HeartPulse className="w-4 h-4 text-[#08A9E6]" />;
    case "Landmark":
      return <Landmark className="w-4 h-4 text-[#08A9E6]" />;
    case "ShieldCheck":
      return <ShieldCheck className="w-4 h-4 text-[#08A9E6]" />;
    case "Building2":
      return <Building2 className="w-4 h-4 text-[#08A9E6]" />;
    case "ShoppingCart":
      return <ShoppingCart className="w-4 h-4 text-[#08A9E6]" />;
    case "Code":
      return <Code className="w-4 h-4 text-[#08A9E6]" />;
    case "Briefcase":
      return <Briefcase className="w-4 h-4 text-[#08A9E6]" />;
    default:
      return <Briefcase className="w-4 h-4 text-[#08A9E6]" />;
  }
}

export default function IndustryGrid() {
  return (
    <section
      id="industries"
      className="md:md:min-h-[100dvh] md:h-[100dvh] w-full md:snap-start md:snap-always flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 py-6 sm:py-8 relative z-10 overflow-y-auto sm:overflow-visible bg-[#F7FAFC] border-b border-[#DDE6ED]"
    >
      <div className="my-auto w-full max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-5 sm:mb-6 gap-3">
          <div className="max-w-2xl space-y-1">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B1724] tracking-tight font-heading">
              Tailored Operations for Specialized Verticals
            </h2>
            <p className="text-xs sm:text-sm text-[#5F7183]">
              Trained on specific terminology, regulatory compliance, and software systems of each sector.
            </p>
          </div>
          <div className="flex items-center gap-3 self-start sm:self-auto shrink-0">
            <Link
              href="/industries"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#08A9E6] hover:text-[#078FCC] hover:underline"
            >
              <span>View All Industries</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* Responsive Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5 pt-1">
          {industriesData.map((ind) => (
            <div
              key={ind.slug}
              className="flex flex-col h-full"
            >
              <Link
                href={`/industries/${ind.slug}`}
                className="w-full h-full bg-white rounded-xl overflow-hidden border border-[#DDE6ED] hover:border-[#08A9E6] hover:shadow-md transition-all duration-200 flex flex-col justify-between group"
              >
                <div className="relative w-full h-28 sm:h-32 overflow-hidden bg-slate-100">
                  <Image
                    src={`/images/industry-${ind.slug}.jpg`}
                    alt={`${ind.name} outsourcing services`}
                    fill
                    sizes="(max-width: 640px) 80vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-2 left-2 p-1 rounded-md bg-white/90 backdrop-blur-sm shadow-xs group-hover:bg-[#08A9E6] group-hover:text-white transition-colors">
                    {getIndustryIcon(ind.iconName)}
                  </div>
                </div>

                <div className="p-3.5 sm:p-4 flex flex-col justify-between flex-grow">
                  <div>
                    <h3 className="text-sm font-bold text-[#0B1724] group-hover:text-[#08A9E6] transition-colors mb-1 font-heading">
                      {ind.name}
                    </h3>
                    <p className="text-xs text-[#5F7183] leading-relaxed line-clamp-2">
                      {ind.description}
                    </p>
                  </div>

                  <div className="pt-2.5 mt-3 border-t border-[#DDE6ED] flex items-center justify-between text-xs font-semibold text-[#08A9E6]">
                    <span>View Use Cases</span>
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
