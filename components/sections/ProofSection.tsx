import React from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2, ShieldCheck } from "lucide-react";
import { caseStudiesData } from "@/lib/data/caseStudies";

export default function ProofSection() {
  return (
    <section className="py-20 lg:py-28 bg-white border-b border-[#DDE6ED]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl space-y-4">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#071A2A] tracking-tight font-heading">
              Proven operational frameworks that deliver results.
            </h2>
            <p className="text-base sm:text-lg text-[#5F7183]">
              Real operational impact across fleet dispatch, holiday customer care, SaaS technical support,
              and financial document indexing.
            </p>
          </div>
          <div>
            <Link
              href="/case-studies"
              className="inline-flex items-center gap-2 text-sm font-bold text-[#08A9E6] hover:text-[#078FCC] hover:underline"
            >
              <span>View All Case Studies</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Case Studies Grid (Top 2 for homepage) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {caseStudiesData.slice(0, 2).map((cs) => (
            <div
              key={cs.id}
              className="bg-[#F7FAFC] rounded-2xl p-8 border border-[#DDE6ED] flex flex-col justify-between hover:shadow-md transition-shadow"
            >
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-[#071A2A] bg-white px-3 py-1 rounded-full border border-[#DDE6ED]">
                    {cs.industry}
                  </span>
                  <span className="text-xs text-[#5F7183] font-medium">{cs.clientBadge}</span>
                </div>

                <h3 className="text-xl font-bold text-[#071A2A] leading-snug font-heading">
                  {cs.headline}
                </h3>

                <div className="space-y-3 text-xs text-[#5F7183]">
                  <div>
                    <span className="font-bold text-[#071A2A]">The Challenge: </span>
                    <span>{cs.challenge}</span>
                  </div>
                  <div>
                    <span className="font-bold text-[#071A2A]">The Solution: </span>
                    <span>{cs.solution}</span>
                  </div>
                </div>

                {/* Key Metrics Strip */}
                <div className="pt-4 border-t border-[#DDE6ED] grid grid-cols-3 gap-3">
                  {cs.results.map((res, idx) => (
                    <div key={idx} className="p-3 rounded-xl bg-white border border-[#DDE6ED] text-center">
                      <div className="text-lg sm:text-xl font-extrabold text-[#071A2A] font-heading">
                        {res.metric}
                      </div>
                      <div className="text-[10px] text-[#5F7183] mt-0.5 leading-tight font-medium">
                        {res.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {cs.testimonialQuote && (
                <div className="mt-6 pt-5 border-t border-[#DDE6ED] text-xs italic text-[#5F7183] bg-white/70 p-4 rounded-xl">
                  "{cs.testimonialQuote.quote}"
                  <span className="block not-italic font-bold text-[#071A2A] mt-2">
                    - {cs.testimonialQuote.author}, {cs.testimonialQuote.title}
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
