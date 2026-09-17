import React from "react";
import Link from "next/link";
import { Calendar, PhoneCall, ArrowRight } from "lucide-react";
import { companyData } from "@/lib/data/company";

export default function MidPageCTA() {
  return (
    <section className="h-screen h-[100dvh] min-h-screen min-h-[100dvh] w-full snap-start snap-always flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 pt-18 sm:pt-22 pb-6 relative z-10 overflow-y-auto sm:overflow-visible bg-white border-b border-[#DDE6ED]">
      <div className="my-auto w-full max-w-7xl mx-auto">
        <div className="bg-gradient-to-r from-[#071A2A] via-[#0D253C] to-[#071A2A] rounded-3xl p-8 sm:p-10 lg:p-12 text-white shadow-xl relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-8 border border-[#1C354E]">
          {/* Subtle Glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#08A9E6]/10 rounded-full blur-3xl pointer-events-none" />

          {/* Left Content */}
          <div className="space-y-3 text-center lg:text-left max-w-2xl relative z-10">
            <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight font-heading text-white">
              Have a specific operational bottleneck or upcoming surge?
            </h3>
            <p className="text-sm sm:text-base text-[#94A3B8] leading-relaxed">
              In a focused 10-minute consultation, we'll map your SOPs, estimate pod requirements, and deliver transparent pricing.
            </p>
          </div>

          {/* Right Action Cluster */}
          <div className="flex flex-col sm:flex-row items-center gap-3.5 shrink-0 w-full lg:w-auto relative z-10">
            <Link
              href="/book-a-consultation"
              className="w-full sm:w-auto bg-[#08A9E6] hover:bg-[#078FCC] text-white font-semibold text-sm px-6 py-3.5 rounded-xl shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 group text-center"
            >
              <Calendar className="w-4 h-4" />
              <span>Get a Free Consultation</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </Link>
            <a
              href="tel:+18889100868"
              className="w-full sm:w-auto bg-[#0D253C] hover:bg-[#102D48] text-white font-semibold text-sm px-5 py-3.5 rounded-xl border border-[#1C354E] transition-colors flex items-center justify-center gap-2 text-center"
            >
              <PhoneCall className="w-4 h-4 text-[#08A9E6]" />
              <span>Call Now</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
