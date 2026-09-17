import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight, CheckCircle2, Calendar, ShieldCheck, TrendingUp, Layers } from "lucide-react";
import { caseStudiesData } from "@/lib/data/caseStudies";
import FinalCTA from "@/components/sections/FinalCTA";

import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Operational Case Studies & Proof",
  description:
    "Explore how Virtual Stack helped North American businesses solve operational challenges, scale coverage, and reduce costs through structured frameworks.",
};

export default function CaseStudiesPage() {
  return (
    <div
      id="case-studies-scroll-container"
      tabIndex={0}
      className="h-screen h-[100dvh] overflow-y-scroll snap-y snap-mandatory scroll-smooth relative bg-white text-[#0B1724] outline-none"
    >
      {/* Slide 1: Hero */}
      <section className="h-screen h-[100dvh] min-h-screen min-h-[100dvh] w-full snap-start snap-always flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 pt-18 sm:pt-22 pb-6 relative z-10 overflow-y-auto sm:overflow-visible bg-gradient-to-b from-[#F7FAFC] to-white border-b border-[#DDE6ED]">
        <div className="my-auto w-full max-w-2xl mx-auto text-center space-y-4">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#071A2A] tracking-tight font-heading">
            Operational outcomes that speak for themselves.
          </h1>
          <p className="text-xs sm:text-sm text-[#5F7183] leading-relaxed">
            Real frameworks showing how our clients solved critical operational bottlenecks, expanded customer
            coverage, and scaled their businesses without increasing overhead.
          </p>
          <div className="pt-2 flex justify-center gap-3">
            <Link
              href="/book-a-consultation"
              className="bg-[#08A9E6] hover:bg-[#078FCC] text-white font-semibold px-5 py-2.5 sm:px-6 sm:py-3 rounded-xl shadow-sm text-xs sm:text-sm flex items-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              <span>Discuss Your Operational Goals</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Slides 2-4: Individual Case Study Slides */}
      {caseStudiesData.map((cs, idx) => (
        <section
          key={cs.id}
          className={`h-screen h-[100dvh] min-h-screen min-h-[100dvh] w-full snap-start snap-always flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 pt-18 sm:pt-22 pb-6 relative z-10 overflow-y-auto sm:overflow-visible ${
            idx % 2 === 0 ? "bg-white" : "bg-[#F7FAFC]"
          } border-b border-[#DDE6ED]`}
        >
          <div className="my-auto w-full max-w-7xl mx-auto">
            <div className="bg-[#F7FAFC] rounded-3xl p-5 sm:p-6 lg:p-7 border border-[#DDE6ED] grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center shadow-xs">
              {/* Left Details */}
              <div className="lg:col-span-7 space-y-4">
                <div className="flex flex-wrap items-center gap-2.5">
                  <span className="text-[11px] font-semibold text-[#071A2A] bg-white px-2.5 py-0.5 rounded-full border border-[#DDE6ED]">
                    {cs.industry}
                  </span>
                  <span className="text-xs text-[#5F7183] font-medium">{cs.serviceCategory}</span>
                </div>

                <h2 className="text-xl sm:text-2xl font-extrabold text-[#071A2A] font-heading leading-snug">
                  {cs.headline}
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-[#5F7183]">
                  <div className="p-3.5 rounded-xl bg-white border border-[#DDE6ED] space-y-1">
                    <span className="font-bold text-[#071A2A] text-[11px] uppercase tracking-wider block">
                      The Challenge:
                    </span>
                    <p className="leading-relaxed text-[#5F7183] line-clamp-3">{cs.challenge}</p>
                  </div>

                  <div className="p-3.5 rounded-xl bg-white border border-[#DDE6ED] space-y-1">
                    <span className="font-bold text-[#071A2A] text-[11px] uppercase tracking-wider block">
                      The Solution:
                    </span>
                    <p className="leading-relaxed text-[#5F7183] line-clamp-3">{cs.solution}</p>
                  </div>
                </div>

                {cs.testimonialQuote && (
                  <div className="p-3.5 rounded-xl bg-white/90 border-l-4 border-[#08A9E6] text-xs italic text-[#5F7183] space-y-1">
                    <p>&ldquo;{cs.testimonialQuote.quote}&rdquo;</p>
                    <span className="block not-italic font-bold text-[#071A2A] text-[11px]">
                      — {cs.testimonialQuote.author}, {cs.testimonialQuote.title}
                    </span>
                  </div>
                )}
              </div>

              {/* Right Metrics Grid */}
              <div className="lg:col-span-5 bg-white rounded-2xl p-5 sm:p-6 border border-[#DDE6ED] shadow-xs space-y-4">
                <h3 className="text-xs font-bold uppercase tracking-wider text-[#071A2A] pb-2 border-b border-[#DDE6ED]">
                  Verified Operational Results
                </h3>

                <div className="space-y-3">
                  {cs.results.map((res, rIdx) => (
                    <div
                      key={rIdx}
                      className="p-3 rounded-xl bg-[#F7FAFC] border border-[#DDE6ED] flex items-center justify-between"
                    >
                      <div>
                        <div className="text-xl sm:text-2xl font-extrabold text-[#071A2A] font-heading">
                          {res.metric}
                        </div>
                        <div className="text-xs text-[#5F7183] mt-0.5 font-medium">{res.label}</div>
                      </div>
                      <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                        Target Met
                      </span>
                    </div>
                  ))}
                </div>

                <div className="pt-1">
                  <Link
                    href="/book-a-consultation"
                    className="w-full bg-[#08A9E6] hover:bg-[#078FCC] text-white text-xs font-semibold py-2.5 px-4 rounded-xl flex items-center justify-center gap-2 shadow-xs transition-colors text-center"
                  >
                    <span>Achieve Similar Results For Your Business &rarr;</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Slide 5: Closing CTA */}
      <FinalCTA />

      {/* Slide 6: Dedicated Footer Snap Slide */}
      <div className="case-studies-snap-section w-full snap-start snap-always min-h-[100dvh] h-[100dvh] bg-[#071A2A] flex flex-col justify-between overflow-y-auto">
        <Footer />
      </div>
    </div>
  );
}
