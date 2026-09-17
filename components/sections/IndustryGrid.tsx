"use client";

import React, { useState, useEffect } from "react";
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
  ChevronLeft,
  ChevronRight
} from "lucide-react";
import { industriesData } from "@/lib/data/industries";

export default function IndustryGrid() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(4);

  useEffect(() => {
    const updateItemsPerPage = () => {
      if (window.innerWidth >= 1024) {
        setItemsPerPage(4);
      } else if (window.innerWidth >= 640) {
        setItemsPerPage(2);
      } else {
        setItemsPerPage(1);
      }
    };
    updateItemsPerPage();
    window.addEventListener("resize", updateItemsPerPage);
    return () => window.removeEventListener("resize", updateItemsPerPage);
  }, []);

  const totalPages = Math.ceil(industriesData.length / itemsPerPage);
  const maxIndex = Math.max(0, industriesData.length - itemsPerPage);

  const prevSlide = () => {
    setCurrentIndex((prev) => Math.max(0, prev - itemsPerPage));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => Math.min(maxIndex, prev + itemsPerPage));
  };

  const goToPage = (pageIdx: number) => {
    setCurrentIndex(Math.min(maxIndex, pageIdx * itemsPerPage));
  };

  const activePage = Math.min(totalPages - 1, Math.floor(currentIndex / itemsPerPage));

  const getIndustryIcon = (iconName: string) => {
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
  };

  return (
    <section
      id="industries"
      className="h-screen h-[100dvh] min-h-screen min-h-[100dvh] w-full snap-start snap-always flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 pt-18 sm:pt-22 pb-6 relative z-10 overflow-y-auto sm:overflow-visible bg-[#F7FAFC] border-b border-[#DDE6ED]"
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
              className="inline-flex items-center gap-1 text-xs font-bold text-[#08A9E6] hover:text-[#078FCC] hover:underline mr-2"
            >
              <span>View All</span>
              <ArrowRight className="w-3 h-3" />
            </Link>
            {/* Slider Controls */}
            <div className="flex items-center gap-1.5">
              <button
                type="button"
                onClick={prevSlide}
                disabled={currentIndex === 0}
                aria-label="Previous industries"
                className="w-8 h-8 rounded-lg bg-white border border-[#DDE6ED] flex items-center justify-center text-[#0B1724] disabled:opacity-30 disabled:cursor-not-allowed hover:border-[#08A9E6] hover:text-[#08A9E6] transition-colors cursor-pointer"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={nextSlide}
                disabled={currentIndex >= maxIndex}
                aria-label="Next industries"
                className="w-8 h-8 rounded-lg bg-white border border-[#DDE6ED] flex items-center justify-center text-[#0B1724] disabled:opacity-30 disabled:cursor-not-allowed hover:border-[#08A9E6] hover:text-[#08A9E6] transition-colors cursor-pointer"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Horizontal Slider Track */}
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-out gap-4 lg:gap-5"
            style={{
              transform: `translateX(-${(currentIndex * 100) / itemsPerPage}%)`,
            }}
          >
            {industriesData.map((ind) => (
              <div
                key={ind.slug}
                className="shrink-0"
                style={{
                  width: `calc(${100 / itemsPerPage}% - ${(16 * (itemsPerPage - 1)) / itemsPerPage}px)`,
                }}
              >
                <Link
                  href={`/industries/${ind.slug}`}
                  className="bg-white rounded-xl overflow-hidden border border-[#DDE6ED] hover:border-[#08A9E6] hover:shadow-md transition-all duration-200 flex flex-col justify-between group h-full"
                >
                  <div className="relative w-full h-28 sm:h-32 overflow-hidden bg-slate-100">
                    <Image
                      src={`/images/industry-${ind.slug}.jpg`}
                      alt={ind.name}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
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

        {/* Pagination Dots */}
        <div className="flex justify-center items-center gap-1.5 mt-4">
          {Array.from({ length: totalPages }).map((_, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => goToPage(idx)}
              aria-label={`Go to industry page ${idx + 1}`}
              className={`h-2 rounded-full transition-all cursor-pointer ${
                activePage === idx ? "w-6 bg-[#08A9E6]" : "w-2 bg-[#DDE6ED] hover:bg-[#94A3B8]"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
