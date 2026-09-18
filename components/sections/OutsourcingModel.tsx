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
      {/* 16:9 Widescreen High-Definition Background Image */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <Image
          src="/images/outsourcing-model.jpg"
          alt="Virtual Stack Global Outsourcing Network"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[70%_center] md:object-[65%_center] lg:object-center opacity-95 sm:opacity-100 scale-100 transition-opacity duration-300"
        />
        {/* Deep Navy Scrim on Left to guarantee crisp text legibility while keeping right image 100% visible */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, rgba(7, 26, 42, 0.96) 0%, rgba(7, 26, 42, 0.92) 38%, rgba(7, 26, 42, 0.55) 58%, transparent 80%)",
          }}
        />
        {/* Top and Bottom Bleed Gradients to blend smoothly with adjacent snap slides */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(7, 26, 42, 0.85) 0%, transparent 20%, transparent 80%, rgba(7, 26, 42, 0.90) 100%)",
          }}
        />
      </div>

      {/* Content Container: Left-Aligned Layout to Showcase Unobstructed Graphic on Right */}
      <div className="my-auto w-full max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column: Text Content Positioned on Left */}
          <div className="lg:col-span-7 xl:col-span-6 space-y-4 sm:space-y-5 text-left">
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold bg-[#08A9E6]/20 text-[#08A9E6] border border-[#08A9E6]/35 shadow-xs backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#08A9E6] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#08A9E6]" />
              </span>
              <span>Our Outsourcing Model</span>
            </div>

            {/* Headline */}
            <h2 className="text-3xl sm:text-4xl lg:text-[40px] xl:text-[44px] font-extrabold text-white tracking-tight leading-[1.14] font-heading drop-shadow-md">
              How We Deliver <span className="text-[#08A9E6]">High-Impact Outsourcing</span> Without the Headaches
            </h2>

            {/* Explanatory Body Copy */}
            <div className="space-y-3 max-w-xl">
              <p className="text-sm sm:text-base text-slate-100 leading-relaxed drop-shadow-sm">
                Traditional outsourcing often fails due to disconnected call centers, high turnover, and zero operational visibility.
                Virtual Stack operates differently: we build <strong className="text-white font-semibold">custom, dedicated talent pods</strong> that
                function seamlessly as an organic extension of your domestic operation.
              </p>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed drop-shadow-sm">
                We handle end-to-end recruitment, workstation provisioning, compliance, and active management—giving you
                expert execution across customer support, back-office workflows, dispatch, and growth operations at up to 60% lower operating cost.
              </p>
            </div>

            {/* Key Assurance Indicators */}
            <div className="pt-1 flex flex-col sm:flex-row sm:flex-wrap gap-2.5 sm:gap-3 text-xs sm:text-sm text-slate-200">
              <span className="inline-flex items-center gap-2 bg-[#071A2A]/80 px-3.5 py-1.5 rounded-full border border-white/15 backdrop-blur-md shadow-xs">
                <CheckCircle2 className="w-4 h-4 text-[#08A9E6] shrink-0" />
                Direct Slack & Teams Integration
              </span>
              <span className="inline-flex items-center gap-2 bg-[#071A2A]/80 px-3.5 py-1.5 rounded-full border border-white/15 backdrop-blur-md shadow-xs">
                <CheckCircle2 className="w-4 h-4 text-[#08A9E6] shrink-0" />
                Dedicated Pre-Vetted Talent Pods
              </span>
              <span className="inline-flex items-center gap-2 bg-[#071A2A]/80 px-3.5 py-1.5 rounded-full border border-white/15 backdrop-blur-md shadow-xs">
                <CheckCircle2 className="w-4 h-4 text-[#08A9E6] shrink-0" />
                Daily SLA & KPI Performance Reports
              </span>
            </div>

            {/* CTAs */}
            <div className="pt-3 flex flex-wrap items-center gap-3.5">
              <Link
                href="/book-a-consultation"
                className="bg-[#08A9E6] hover:bg-[#078FCC] text-white text-xs sm:text-sm font-semibold px-6 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 flex items-center gap-2 group"
              >
                <Calendar className="w-4 h-4 text-white" />
                <span>Get a 10-Min Scoping Call</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </Link>

              <Link
                href="/services"
                className="bg-white/10 hover:bg-white/15 text-white text-xs sm:text-sm font-medium px-5 py-3 rounded-xl border border-white/20 hover:border-[#08A9E6]/50 transition-all flex items-center gap-1.5 backdrop-blur-md shadow-sm"
              >
                <span>View All Services</span>
              </Link>
            </div>
          </div>

          {/* Right Column: Kept completely open on desktop to showcase the graphic */}
          <div className="hidden lg:block lg:col-span-5 xl:col-span-6" />
        </div>
      </div>
    </section>
  );
}
