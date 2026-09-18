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
      {/* Background Graphic with Prominently Visible Glowing Outsourcing Network */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <Image
          src="/images/outsourcing-model.jpg"
          alt="Virtual Stack Modern Outsourcing Model"
          fill
          sizes="100vw"
          className="object-cover object-[center_28%] opacity-75 sm:opacity-85 scale-105 transition-opacity duration-300"
        />
        {/* Balanced Translucent Dark Scrim Overlay to maintain text contrast while letting the graphic pop */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(7, 26, 42, 0.68) 0%, rgba(7, 26, 42, 0.80) 55%, rgba(7, 26, 42, 0.92) 100%)",
          }}
        />
        {/* Top and Bottom Bleed Gradients to blend smoothly with adjacent snap slides */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(7, 26, 42, 0.85) 0%, transparent 22%, transparent 78%, rgba(7, 26, 42, 0.92) 100%)",
          }}
        />
        {/* Ambient Blue Glow Highlight */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[520px] h-[520px] bg-[#08A9E6]/15 rounded-full blur-3xl pointer-events-none" />
      </div>

      {/* Centered Content Container */}
      <div className="my-auto w-full max-w-4xl mx-auto relative z-10 text-center space-y-4 sm:space-y-5 px-4">
        {/* Pill Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold bg-[#08A9E6]/20 text-[#08A9E6] border border-[#08A9E6]/35 shadow-xs mx-auto backdrop-blur-md">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#08A9E6] opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#08A9E6]" />
          </span>
          <span>Our Outsourcing Model</span>
        </div>

        {/* Center-Aligned Headline */}
        <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-[42px] font-extrabold text-white tracking-tight leading-[1.18] font-heading max-w-3xl mx-auto drop-shadow-md">
          How We Deliver <span className="text-[#08A9E6]">High-Impact Outsourcing</span> Without the Headaches
        </h2>

        {/* Center-Aligned Explanatory Body Copy */}
        <div className="max-w-2xl mx-auto space-y-3">
          <p className="text-sm sm:text-base text-[#CBD5E1] leading-relaxed drop-shadow-sm">
            Traditional outsourcing often fails due to disconnected call centers, high turnover, and zero operational visibility.
            Virtual Stack operates differently: we build <strong className="text-white font-semibold">custom, dedicated talent pods</strong> that
            function seamlessly as an organic extension of your domestic operation.
          </p>

          <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed drop-shadow-sm hidden sm:block">
            We handle end-to-end recruitment, workstation provisioning, compliance, and active management—giving you
            expert execution across customer support, back-office workflows, dispatch, and growth operations at up to 60% lower operating cost.
          </p>
        </div>

        {/* Key Assurance Indicators — Center Aligned */}
        <div className="pt-2 flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 text-xs sm:text-sm text-[#CBD5E1]">
          <span className="flex items-center gap-1.5 bg-[#071A2A]/70 px-3.5 py-1.5 rounded-full border border-white/15 backdrop-blur-md shadow-xs">
            <CheckCircle2 className="w-3.5 h-3.5 text-[#08A9E6] shrink-0" />
            Direct Slack & Teams Integration
          </span>
          <span className="flex items-center gap-1.5 bg-[#071A2A]/70 px-3.5 py-1.5 rounded-full border border-white/15 backdrop-blur-md shadow-xs">
            <CheckCircle2 className="w-3.5 h-3.5 text-[#08A9E6] shrink-0" />
            Dedicated Pre-Vetted Talent Pods
          </span>
          <span className="flex items-center gap-1.5 bg-[#071A2A]/70 px-3.5 py-1.5 rounded-full border border-white/15 backdrop-blur-md shadow-xs">
            <CheckCircle2 className="w-3.5 h-3.5 text-[#08A9E6] shrink-0" />
            Daily SLA & KPI Reporting
          </span>
        </div>

        {/* Center-Aligned CTAs */}
        <div className="pt-3 flex flex-wrap items-center justify-center gap-3.5">
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
    </section>
  );
}
