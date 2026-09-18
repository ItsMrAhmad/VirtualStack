import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Calendar, ArrowRight, CheckCircle2 } from "lucide-react";

export default function OutsourcingModel() {
  return (
    <section
      id="how-we-outsource"
      className="h-screen h-[100dvh] min-h-screen min-h-[100dvh] w-full snap-start snap-always flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 pt-18 sm:pt-22 pb-6 relative z-10 overflow-y-auto sm:overflow-visible bg-[#071A2A] text-white border-b border-[#1A2E40]"
    >
      {/* High-Definition Glowing Outsourcing Graphic Backdrop */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <Image
          src="/images/outsourcing-model.jpg"
          alt="Virtual Stack Modern Outsourcing Network"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[25%_center] md:object-[22%_center] lg:object-[18%_center] opacity-90 sm:opacity-95 scale-100 transition-opacity duration-300"
        />

        {/* Deep Navy Gradient on Right to make text readable while leaving the left graphic completely clear */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, transparent 0%, transparent 35%, rgba(7, 26, 42, 0.75) 55%, rgba(7, 26, 42, 0.94) 75%, rgba(7, 26, 42, 0.98) 100%)",
          }}
        />

        {/* Mobile/Tablet Overlay for Readability */}
        <div
          className="absolute inset-0 lg:hidden"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(7, 26, 42, 0.70) 0%, rgba(7, 26, 42, 0.92) 100%)",
          }}
        />

        {/* Top and Bottom Bleed Gradients to blend smoothly with adjacent snap slides */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(7, 26, 42, 0.85) 0%, transparent 20%, transparent 80%, rgba(7, 26, 42, 0.92) 100%)",
          }}
        />
      </div>

      {/* Content Container: Adjusted to Right Side */}
      <div className="my-auto w-full max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column: Kept open on desktop to showcase the glowing 'OUTSOURCING' sphere and hand */}
          <div className="hidden lg:block lg:col-span-6 xl:col-span-7" />

          {/* Right Column: High-Impact, Concise Text Adjusted to Right Side */}
          <div className="lg:col-span-6 xl:col-span-5 space-y-4 sm:space-y-5 text-left lg:pl-4">
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold bg-[#08A9E6]/20 text-[#08A9E6] border border-[#08A9E6]/35 shadow-xs backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#08A9E6] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#08A9E6]" />
              </span>
              <span>Our Outsourcing Model</span>
            </div>

            {/* Headline */}
            <h2 className="text-2xl sm:text-3xl lg:text-[34px] xl:text-[38px] font-extrabold text-white tracking-tight leading-[1.18] font-heading drop-shadow-md">
              How We Deliver <span className="text-[#08A9E6]">High-Impact Outsourcing</span> Without the Headaches
            </h2>

            {/* Concise, Scannable Body Copy (Short & Engaging) */}
            <p className="text-xs sm:text-sm text-slate-200 leading-relaxed drop-shadow-sm max-w-lg">
              We replace fragmented call centers with <strong className="text-white font-semibold">dedicated talent pods</strong> that
              operate directly inside your software and SOPs—giving you 24/7 operational coverage at up to 60% lower cost.
            </p>

            {/* Key Assurance Indicators */}
            <div className="pt-1 flex flex-col gap-2 text-xs sm:text-sm text-slate-200">
              <span className="inline-flex items-center gap-2 bg-[#071A2A]/75 px-3.5 py-1.5 rounded-full border border-white/15 backdrop-blur-md shadow-xs w-fit">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#08A9E6] shrink-0" />
                Direct Slack & Teams Integration
              </span>
              <span className="inline-flex items-center gap-2 bg-[#071A2A]/75 px-3.5 py-1.5 rounded-full border border-white/15 backdrop-blur-md shadow-xs w-fit">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#08A9E6] shrink-0" />
                Dedicated Pre-Vetted Talent Pods
              </span>
              <span className="inline-flex items-center gap-2 bg-[#071A2A]/75 px-3.5 py-1.5 rounded-full border border-white/15 backdrop-blur-md shadow-xs w-fit">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#08A9E6] shrink-0" />
                Daily SLA & KPI Reporting
              </span>
            </div>

            {/* CTAs */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <Link
                href="/book-a-consultation"
                className="bg-[#08A9E6] hover:bg-[#078FCC] text-white text-xs sm:text-sm font-semibold px-5 py-2.5 sm:py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 flex items-center gap-2 group"
              >
                <Calendar className="w-4 h-4 text-white" />
                <span>Get a 10-Min Scoping Call</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </Link>

              <Link
                href="/services"
                className="bg-white/10 hover:bg-white/15 text-white text-xs sm:text-sm font-medium px-4 py-2.5 sm:py-3 rounded-xl border border-white/20 hover:border-[#08A9E6]/50 transition-all flex items-center gap-1.5 backdrop-blur-md shadow-sm"
              >
                <span>View All Services</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
