"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import Link from "next/link";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { Quote, Star, MapPin, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { testimonialsData } from "@/lib/data/testimonials";

export default function TestimonialsPlaceholder() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  // Autoplay with 6s interval and pause on hover
  const autoplay = useRef(
    Autoplay({
      delay: 6000,
      stopOnInteraction: false,
      stopOnMouseEnter: true,
    })
  );

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "start",
      containScroll: false,
    },
    [autoplay.current]
  );

  // Respect prefers-reduced-motion
  useEffect(() => {
    if (!emblaApi) return;
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const autoplayPlugin = emblaApi.plugins().autoplay;

    if (mediaQuery.matches && autoplayPlugin) {
      autoplayPlugin.stop();
    }

    const handleChange = (e: MediaQueryListEvent) => {
      if (!autoplayPlugin) return;
      if (e.matches) {
        autoplayPlugin.stop();
      } else {
        autoplayPlugin.play();
      }
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    setScrollSnaps(emblaApi.scrollSnapList());
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  // Keyboard navigation
  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        scrollPrev();
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        scrollNext();
      }
    },
    [scrollPrev, scrollNext]
  );

  // Pause on focus, resume on blur
  const handleFocus = useCallback(() => {
    const autoplayPlugin = emblaApi?.plugins().autoplay;
    if (autoplayPlugin) autoplayPlugin.stop();
  }, [emblaApi]);

  const handleBlur = useCallback(() => {
    const autoplayPlugin = emblaApi?.plugins().autoplay;
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (autoplayPlugin && !prefersReduced) {
      autoplayPlugin.play();
    }
  }, [emblaApi]);

  return (
    <section
      id="testimonials"
      className="h-screen h-[100dvh] min-h-screen min-h-[100dvh] w-full snap-start snap-always flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 pt-18 sm:pt-22 pb-6 relative z-10 overflow-y-auto sm:overflow-visible bg-[#F7FAFC] dark:bg-[#04101B] border-b border-[#DDE6ED] dark:border-[#1A2E40]"
      aria-roledescription="carousel"
      aria-label="Client Testimonials"
    >
      <div className="my-auto w-full max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-4 sm:mb-6 space-y-1">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B1724] dark:text-white tracking-tight font-heading">
            Trusted by Business Owners Across North America
          </h2>
          <p className="text-xs sm:text-sm text-[#5F7183] dark:text-[#94A3B8] leading-relaxed">
            Hear directly from company leaders who rely on Virtual Stack every day for mission-critical operations, fleet dispatch, and sales growth.
          </p>
        </div>

        {/* Carousel Viewport */}
        <div
          ref={emblaRef}
          className="overflow-hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-[#08A9E6] rounded-2xl py-1 px-1 cursor-grab active:cursor-grabbing"
          tabIndex={0}
          onKeyDown={handleKeyDown}
          onFocus={handleFocus}
          onBlur={handleBlur}
          role="region"
          aria-live="polite"
        >
          <div className="flex -ml-4 sm:-ml-5 lg:-ml-6 items-stretch">
            {testimonialsData.map((item, idx) => (
              <div
                key={idx}
                className="min-w-0 flex-[0_0_100%] sm:flex-[0_0_50%] lg:flex-[0_0_33.333333%] pl-4 sm:pl-5 lg:pl-6"
                role="group"
                aria-roledescription="slide"
                aria-label={`Slide ${idx + 1} of ${testimonialsData.length}: ${item.name} from ${item.company}`}
              >
                <div className="h-full bg-white dark:bg-[#071A2A] rounded-xl p-5 sm:p-6 border border-[#DDE6ED] dark:border-[#1C354E] shadow-xs hover:shadow-md transition-shadow duration-200 flex flex-col justify-between select-none">
                  <div>
                    {/* Top Bar: Stars + Country Pill */}
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-0.5">
                        {[...Array(item.rating || 5)].map((_, sIdx) => (
                          <Star
                            key={sIdx}
                            className="w-3.5 h-3.5 fill-amber-400 text-amber-400"
                          />
                        ))}
                      </div>
                      <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#08A9E6] bg-[#EBF7FD] dark:bg-[#08A9E6]/10 px-2 py-0.5 rounded-full">
                        <MapPin className="w-3 h-3" />
                        <span>{item.country}</span>
                      </span>
                    </div>

                    {/* Service Tag */}
                    <div className="mb-3">
                      <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-[#5F7183] dark:text-[#94A3B8] bg-[#F7FAFC] dark:bg-[#0D253C] px-2 py-0.5 rounded-md border border-[#DDE6ED] dark:border-[#1C354E]">
                        {item.serviceTag}
                      </span>
                    </div>

                    {/* Quote Text */}
                    <p className="text-xs sm:text-sm text-[#0B1724] dark:text-[#E2E8F0] leading-relaxed italic mb-4">
                      &ldquo;{item.quote}&rdquo;
                    </p>
                  </div>

                  {/* Author & Business Attribution */}
                  <div className="pt-3.5 border-t border-[#DDE6ED] dark:border-[#1C354E] flex items-center justify-between">
                    <div>
                      <div className="font-bold text-[#071A2A] dark:text-white text-sm sm:text-base font-heading">
                        {item.name}
                      </div>
                      <div className="text-xs font-semibold text-[#08A9E6]">
                        {item.role ? `${item.role}, ${item.company}` : item.company}
                      </div>
                      <div className="text-[11px] text-[#5F7183] dark:text-[#94A3B8] mt-0.5">
                        {item.location}
                      </div>
                    </div>

                    <div className="w-8 h-8 rounded-full bg-[#EBF7FD] dark:bg-[#08A9E6]/10 flex items-center justify-center text-[#08A9E6] shrink-0">
                      <Quote className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Carousel Controls: Prev/Next Buttons & Dots */}
        <div className="flex items-center justify-center gap-4 mt-4 sm:mt-5">
          <button
            type="button"
            onClick={scrollPrev}
            aria-label="Previous testimonials"
            className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white dark:bg-[#071A2A] border border-[#DDE6ED] dark:border-[#1C354E] flex items-center justify-center text-[#5F7183] dark:text-[#94A3B8] hover:text-[#08A9E6] hover:border-[#08A9E6] shadow-xs transition-colors cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#08A9E6]"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          <div
            className="flex items-center gap-1.5"
            role="tablist"
            aria-label="Testimonial slides"
          >
            {scrollSnaps.map((_, idx) => (
              <button
                key={idx}
                type="button"
                role="tab"
                aria-selected={idx === selectedIndex}
                aria-label={`Go to slide ${idx + 1}`}
                onClick={() => emblaApi?.scrollTo(idx)}
                className={`h-2 rounded-full transition-all duration-300 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#08A9E6] ${
                  idx === selectedIndex
                    ? "w-6 bg-[#08A9E6]"
                    : "w-2 bg-[#DDE6ED] dark:bg-[#1C354E] hover:bg-[#94A3B8]"
                }`}
              />
            ))}
          </div>

          <button
            type="button"
            onClick={scrollNext}
            aria-label="Next testimonials"
            className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white dark:bg-[#071A2A] border border-[#DDE6ED] dark:border-[#1C354E] flex items-center justify-center text-[#5F7183] dark:text-[#94A3B8] hover:text-[#08A9E6] hover:border-[#08A9E6] shadow-xs transition-colors cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#08A9E6]"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* Consultation Callout (Unchanged) */}
        <div className="mt-4 sm:mt-5 text-center">
          <p className="text-xs sm:text-sm text-[#5F7183] dark:text-[#94A3B8]">
            Ready to streamline your operational workload?{" "}
            <Link
              href="/book-a-consultation"
              className="text-[#08A9E6] font-semibold hover:text-[#078FCC] hover:underline inline-flex items-center gap-1 transition-colors"
            >
              <span>Schedule your free consultation</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
