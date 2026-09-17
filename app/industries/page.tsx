import React from "react";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
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
  Calendar,
  CheckCircle2
} from "lucide-react";
import { industriesData } from "@/lib/data/industries";
import FinalCTA from "@/components/sections/FinalCTA";

import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Industries & Specialized Verticals",
  description:
    "Tailored B2B operations and dedicated outsourcing teams for Logistics, Healthcare, Financial Services, Insurance, Real Estate, E-Commerce, and Technology.",
};

export default function IndustriesPage() {
  const getIndustryIcon = (iconName: string) => {
    switch (iconName) {
      case "Truck":
        return <Truck className="w-5 h-5 text-[#08A9E6]" />;
      case "HeartPulse":
        return <HeartPulse className="w-5 h-5 text-[#08A9E6]" />;
      case "Landmark":
        return <Landmark className="w-5 h-5 text-[#08A9E6]" />;
      case "ShieldCheck":
        return <ShieldCheck className="w-5 h-5 text-[#08A9E6]" />;
      case "Building2":
        return <Building2 className="w-5 h-5 text-[#08A9E6]" />;
      case "ShoppingCart":
        return <ShoppingCart className="w-5 h-5 text-[#08A9E6]" />;
      case "Code":
        return <Code className="w-5 h-5 text-[#08A9E6]" />;
      case "Briefcase":
        return <Briefcase className="w-5 h-5 text-[#08A9E6]" />;
      default:
        return <Briefcase className="w-5 h-5 text-[#08A9E6]" />;
    }
  };

  const transactionalIndustries = industriesData.filter((_, idx) => [0, 1, 2, 5].includes(idx));
  const professionalIndustries = industriesData.filter((_, idx) => [3, 4, 6, 7].includes(idx));

  return (
    <div
      id="industries-scroll-container"
      tabIndex={0}
      className="h-screen h-[100dvh] overflow-y-scroll snap-y snap-mandatory scroll-smooth relative bg-white text-[#0B1724] outline-none"
    >
      {/* Slide 1: Hero */}
      <section className="h-screen h-[100dvh] min-h-screen min-h-[100dvh] w-full snap-start snap-always flex flex-col justify-start pt-24 sm:pt-26 items-center px-4 sm:px-6 lg:px-8 pb-4 sm:pb-6 relative z-10 overflow-y-auto sm:overflow-visible bg-gradient-to-b from-[#F7FAFC] to-white border-b border-[#DDE6ED]">
        <div className="w-full max-w-7xl mx-auto mt-2 sm:mt-3">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center">
            {/* Text on LEFT (lg:col-span-7) */}
            <div className="lg:col-span-7 space-y-2.5 sm:space-y-3 text-left">
              {/* Status / Badge with live ping pulse */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-[#E8F7FD] text-[#08A9E6] border border-[#08A9E6]/30 shadow-xs">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#08A9E6] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#08A9E6]"></span>
                </span>
                <span>Vertical-Specific Operating Pods</span>
              </div>

              <h1 className="text-2xl sm:text-3xl lg:text-[34px] font-extrabold text-[#071A2A] tracking-tight font-heading leading-tight">
                Trained for your industry&apos;s <span className="text-[#08A9E6]">specific workflows.</span>
              </h1>

              <p className="text-xs sm:text-sm text-[#08A9E6] font-semibold leading-snug">
                Engineered around sector compliance, dedicated tools, and real-time SLAs.
              </p>

              <p className="text-xs sm:text-sm text-[#5F7183] leading-relaxed max-w-xl">
                Every vertical has unique compliance mandates, software tools, and customer expectations.
                We train our operational pods specifically on your industry&apos;s standard operating procedures.
              </p>

              {/* Micro Stats Row Grouped with Subtle Tint & Breathing Room */}
              <div className="grid grid-cols-3 gap-3 p-3 sm:p-3.5 my-3 sm:my-3.5 max-w-lg rounded-xl bg-[#F0F7FB]/70 border border-[#DDE6ED] shadow-2xs">
                <div className="py-0.5">
                  <div className="text-sm sm:text-base font-bold text-[#071A2A] font-heading">8 Verticals</div>
                  <div className="text-[11px] text-[#5F7183]">Specialized Training</div>
                </div>
                <div className="py-0.5 border-x border-[#DDE6ED] px-3">
                  <div className="text-sm sm:text-base font-bold text-[#08A9E6] font-heading">100%</div>
                  <div className="text-[11px] text-[#5F7183]">Tool &amp; CRM Integration</div>
                </div>
                <div className="py-0.5 pl-1">
                  <div className="text-sm sm:text-base font-bold text-emerald-600 font-heading">Zero</div>
                  <div className="text-[11px] text-[#5F7183]">Compliance Slippage</div>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 pt-0.5">
                <a
                  href="#transactional-verticals"
                  className="px-3 py-1.5 rounded-lg bg-white border border-[#DDE6ED] hover:border-[#08A9E6] text-xs font-semibold text-[#071A2A] shadow-xs hover:text-[#08A9E6] transition-colors cursor-pointer"
                >
                  Transactional Verticals &darr;
                </a>
                <a
                  href="#professional-verticals"
                  className="px-3 py-1.5 rounded-lg bg-white border border-[#DDE6ED] hover:border-[#08A9E6] text-xs font-semibold text-[#071A2A] shadow-xs hover:text-[#08A9E6] transition-colors cursor-pointer"
                >
                  Professional Verticals &darr;
                </a>
              </div>

              <div className="pt-1 flex flex-wrap items-center gap-2.5">
                <Link
                  href="/book-a-consultation"
                  className="bg-gradient-to-r from-[#08A9E6] to-[#078FCC] hover:from-[#078FCC] hover:to-[#0677aa] text-white text-xs sm:text-sm font-semibold px-5 py-2.5 sm:px-6 sm:py-3 rounded-xl shadow-md shadow-[#08A9E6]/25 transition-all flex items-center gap-2"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Discuss Your Industry Requirements</span>
                </Link>
                <Link
                  href="/contact"
                  className="bg-white hover:bg-[#F7FAFC] text-[#071A2A] text-xs sm:text-sm font-semibold px-5 py-2.5 sm:py-3 rounded-xl border border-[#DDE6ED] shadow-xs transition-colors"
                >
                  Request Scope Review
                </Link>
              </div>
            </div>

            {/* Image on RIGHT (lg:col-span-5) with coloring & effects */}
            <div className="lg:col-span-5 relative group mt-3 lg:mt-0">
              {/* Ambient backdrop glow */}
              <div className="absolute -inset-2 bg-gradient-to-r from-[#08A9E6]/30 via-sky-400/20 to-indigo-500/20 rounded-3xl blur-xl opacity-75 group-hover:opacity-100 transition duration-500" />

              {/* Framed Image Card */}
              <div className="relative rounded-2xl overflow-hidden border-2 border-white shadow-xl bg-white">
                <div className="relative w-full aspect-[16/11] max-h-[320px] sm:max-h-[330px] overflow-hidden">
                  <Image
                    src="/images/hero-operations.jpg"
                    alt="Operations Command Center"
                    fill
                    sizes="(max-width: 1024px) 100vw, 480px"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    priority
                  />
                  {/* Gradient Overlay for Depth */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#071A2A]/85 via-transparent to-transparent opacity-80" />

                  {/* Floating Glassmorphism Status Badge inside image */}
                  <div className="absolute bottom-3 left-3 right-3 bg-white/95 backdrop-blur-md p-3 rounded-xl border border-white/60 shadow-lg flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-lg bg-[#E8F7FD] flex items-center justify-center text-[#08A9E6] shrink-0">
                        <ShieldCheck className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-[#071A2A]">Industry Ops Pods</div>
                        <div className="text-[11px] text-[#5F7183]">SOP-calibrated dedicated teams</div>
                      </div>
                    </div>
                    <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-emerald-50 border border-emerald-200 text-[10px] font-semibold text-emerald-700">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                      Active Pods
                    </div>
                  </div>
                </div>
              </div>

              {/* Security & Compliance Strip to level column bottom */}
              <div className="mt-3 flex items-center justify-between px-3.5 py-2.5 rounded-xl bg-white border border-[#DDE6ED] shadow-xs text-xs">
                <div className="flex items-center gap-2 text-[#071A2A] font-semibold">
                  <ShieldCheck className="w-4 h-4 text-[#08A9E6] shrink-0" />
                  <span>Compliance &amp; Security</span>
                </div>
                <div className="text-[11px] text-[#5F7183] font-medium">
                  HIPAA • SOC 2 • PCI-DSS • ISO 27001
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Slide 2: High-Volume Transactional Verticals */}
      <section
        id="transactional-verticals"
        className="h-screen h-[100dvh] min-h-screen min-h-[100dvh] w-full snap-start snap-always flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 pt-24 sm:pt-28 md:pt-32 pb-6 relative z-10 overflow-y-auto sm:overflow-visible bg-[#F7FAFC] border-b border-[#DDE6ED]"
      >
        <div className="my-auto w-full max-w-7xl mx-auto mt-3 sm:mt-5">
          <div className="text-center max-w-2xl mx-auto mb-5 sm:mb-6 space-y-1">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#071A2A] font-heading">
              High-Volume & Transactional Verticals
            </h2>
            <p className="text-xs sm:text-sm text-[#5F7183]">
              24/7 continuous queue management, live dispatch, and regulatory transaction processing.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {transactionalIndustries.map((ind) => (
              <Link
                key={ind.slug}
                href={`/industries/${ind.slug}`}
                className="bg-white rounded-xl overflow-hidden border border-[#DDE6ED] hover:border-[#08A9E6] hover:shadow-md transition-all duration-200 flex flex-col justify-between group h-full shadow-xs"
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
                    <h3 className="text-sm font-bold text-[#071A2A] group-hover:text-[#08A9E6] transition-colors mb-1 font-heading">
                      {ind.name}
                    </h3>
                    <p className="text-xs text-[#5F7183] leading-relaxed line-clamp-2">
                      {ind.description}
                    </p>
                  </div>

                  <div className="pt-2.5 mt-3 border-t border-[#DDE6ED] flex items-center justify-between text-xs font-semibold text-[#08A9E6]">
                    <span>View Profile</span>
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Slide 3: Professional & Technical Verticals */}
      <section
        id="professional-verticals"
        className="h-screen h-[100dvh] min-h-screen min-h-[100dvh] w-full snap-start snap-always flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 pt-24 sm:pt-28 md:pt-32 pb-6 relative z-10 overflow-y-auto sm:overflow-visible bg-white border-b border-[#DDE6ED]"
      >
        <div className="my-auto w-full max-w-7xl mx-auto mt-3 sm:mt-5">
          <div className="text-center max-w-2xl mx-auto mb-5 sm:mb-6 space-y-1">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#071A2A] font-heading">
              Professional & Technical Verticals
            </h2>
            <p className="text-xs sm:text-sm text-[#5F7183]">
              Specialized workflows requiring advanced domain knowledge, CRM mastery, and diligence.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {professionalIndustries.map((ind) => (
              <Link
                key={ind.slug}
                href={`/industries/${ind.slug}`}
                className="bg-white rounded-xl overflow-hidden border border-[#DDE6ED] hover:border-[#08A9E6] hover:shadow-md transition-all duration-200 flex flex-col justify-between group h-full shadow-xs"
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
                    <h3 className="text-sm font-bold text-[#071A2A] group-hover:text-[#08A9E6] transition-colors mb-1 font-heading">
                      {ind.name}
                    </h3>
                    <p className="text-xs text-[#5F7183] leading-relaxed line-clamp-2">
                      {ind.description}
                    </p>
                  </div>

                  <div className="pt-2.5 mt-3 border-t border-[#DDE6ED] flex items-center justify-between text-xs font-semibold text-[#08A9E6]">
                    <span>View Profile</span>
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Slide 4: Security & Compliance Framework */}
      <section className="h-screen h-[100dvh] min-h-screen min-h-[100dvh] w-full snap-start snap-always flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 pt-24 sm:pt-28 md:pt-32 pb-6 relative z-10 overflow-y-auto sm:overflow-visible bg-[#F7FAFC] border-b border-[#DDE6ED]">
        <div className="my-auto w-full max-w-4xl mx-auto text-center space-y-6 mt-3 sm:mt-5">
          <div className="space-y-2">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#071A2A] font-heading">
              Enterprise Security & Compliance Across All Sectors
            </h2>
            <p className="text-xs sm:text-sm text-[#5F7183] max-w-xl mx-auto">
              Our operations adhere to strict physical, technical, and procedural safeguards regardless of industry.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-left">
            <div className="p-4 rounded-xl bg-white border border-[#DDE6ED] shadow-xs space-y-2">
              <ShieldCheck className="w-6 h-6 text-[#08A9E6]" />
              <h3 className="text-sm font-bold text-[#071A2A] font-heading">Cleanroom Workstations</h3>
              <p className="text-xs text-[#5F7183] leading-relaxed">
                No personal devices, external USB storage, or paper on the production floor.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-white border border-[#DDE6ED] shadow-xs space-y-2">
              <CheckCircle2 className="w-6 h-6 text-emerald-500" />
              <h3 className="text-sm font-bold text-[#071A2A] font-heading">Biometric Access Controls</h3>
              <p className="text-xs text-[#5F7183] leading-relaxed">
                Fingerprint entry checkpoints with 24/7 CCTV surveillance logs.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-white border border-[#DDE6ED] shadow-xs space-y-2">
              <Landmark className="w-6 h-6 text-[#08A9E6]" />
              <h3 className="text-sm font-bold text-[#071A2A] font-heading">Regulatory Alignment</h3>
              <p className="text-xs text-[#5F7183] leading-relaxed">
                HIPAA-ready workflows, PCI-DSS compliance awareness, and strict NDAs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Slide 5: Final CTA */}
      <FinalCTA />

      {/* Slide 6: Dedicated Footer Snap Slide */}
      <div className="industries-snap-section w-full snap-start snap-always min-h-[100dvh] h-[100dvh] bg-[#071A2A] flex flex-col justify-between overflow-y-auto">
        <Footer />
      </div>
    </div>
  );
}
