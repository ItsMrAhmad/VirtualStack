import React from "react";
import Link from "next/link";
import { Calendar, PhoneCall, ArrowRight, CheckCircle2 } from "lucide-react";
import { companyData } from "@/lib/data/company";

export default function FinalCTA() {
  return (
    <section className="h-screen h-[100dvh] min-h-screen min-h-[100dvh] w-full snap-start snap-always flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 pt-18 sm:pt-22 pb-6 relative z-10 overflow-y-auto sm:overflow-visible bg-[#071A2A] text-white">
      {/* Subtle radial lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#08A9E6]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="my-auto w-full max-w-4xl mx-auto text-center relative z-10 space-y-5 sm:space-y-6">

        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight font-heading max-w-2xl mx-auto leading-tight">
          Ready to take the operational load off your team?
        </h2>

        <p className="text-sm sm:text-base text-[#94A3B8] max-w-xl mx-auto leading-relaxed">
          Schedule a free 10-minute consultation. We'll examine your current workflow, identify quick operational
          wins, and propose a dedicated solution tailored to your business.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 pt-1">
          <Link
            href="/book-a-consultation"
            className="w-full sm:w-auto bg-[#08A9E6] hover:bg-[#078FCC] text-white font-semibold px-6 py-3 sm:px-7 sm:py-3.5 rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 group text-sm sm:text-base"
          >
            <Calendar className="w-4 h-4 sm:w-5 sm:h-5" />
            <span>Get a Free Consultation</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </Link>
          <a
            href={`tel:${companyData.contacts.tollFreePhone}`}
            className="w-full sm:w-auto bg-[#0D253C] hover:bg-[#102D48] text-white font-semibold px-6 py-3 sm:px-7 sm:py-3.5 rounded-xl border border-[#1C354E] transition-colors flex items-center justify-center gap-2 text-sm sm:text-base"
          >
            <PhoneCall className="w-4 h-4 text-[#08A9E6]" />
            <span>Call {companyData.contacts.tollFreeDisplay}</span>
          </a>
        </div>

        {/* Reassurance points */}
        <div className="pt-6 border-t border-[#1C354E] flex flex-wrap items-center justify-center gap-6 text-xs text-[#94A3B8]">
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-[#12C98A]" />
            Zero setup disruption
          </span>
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-[#12C98A]" />
            No rigid long-term contracts
          </span>
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-[#12C98A]" />
            Full NDA & data security guaranteed
          </span>
        </div>
      </div>
    </section>
  );
}
