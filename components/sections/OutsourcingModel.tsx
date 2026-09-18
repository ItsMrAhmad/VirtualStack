import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Users, Network, ShieldCheck, TrendingUp, Calendar, ArrowRight, CheckCircle2 } from "lucide-react";

const outsourcingPillars = [
  {
    step: "01",
    title: "Dedicated, Pre-Vetted Pods",
    desc: "Top 2% English-fluent specialists assigned exclusively to your business—no shared queues, no context switching.",
    icon: Users,
    highlight: "Exclusive Allocation",
  },
  {
    step: "02",
    title: "Native System Integration",
    desc: "We work directly inside your existing CRMs, ticketing systems, ERPs, and load boards with zero software migrations.",
    icon: Network,
    highlight: "Zero Disruption",
  },
  {
    step: "03",
    title: "Supervised QA & SLA Governance",
    desc: "Experienced operational team leads monitor queues live, audit performance daily, and deliver transparent reporting.",
    icon: ShieldCheck,
    highlight: "100% Accountability",
  },
  {
    step: "04",
    title: "Elastic Scale & Cost Efficiency",
    desc: "Ramp pods up or down within 1–2 weeks with predictable, flat monthly billing and up to 60% operating cost savings.",
    icon: TrendingUp,
    highlight: "Up to 60% Savings",
  },
];

export default function OutsourcingModel() {
  return (
    <section
      id="how-we-outsource"
      className="h-screen h-[100dvh] min-h-screen min-h-[100dvh] w-full snap-start snap-always flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 pt-18 sm:pt-22 pb-6 relative z-10 overflow-y-auto sm:overflow-visible bg-[#071A2A] text-white border-b border-[#1A2E40]"
    >
      {/* Background Graphic with Glowing Outsourcing Network */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <Image
          src="/images/outsourcing-model.jpg"
          alt="Virtual Stack Modern Outsourcing Model"
          fill
          sizes="100vw"
          className="object-cover object-[center_28%] lg:object-[85%_25%] opacity-35 sm:opacity-45 scale-105"
        />
        {/* Deep Navy Scrim Overlay for Maximum Typography Clarity */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, rgba(7, 26, 42, 0.97) 0%, rgba(7, 26, 42, 0.90) 45%, rgba(7, 26, 42, 0.70) 75%, rgba(7, 26, 42, 0.45) 100%)",
          }}
        />
        {/* Top and Bottom Bleed Gradients */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(7, 26, 42, 0.92) 0%, transparent 22%, transparent 78%, rgba(7, 26, 42, 0.95) 100%)",
          }}
        />
        {/* Subtle Radial Blue Glow Accent */}
        <div className="absolute right-1/4 top-1/2 -translate-y-1/2 w-[420px] h-[420px] bg-[#08A9E6]/10 rounded-full blur-3xl pointer-events-none" />
      </div>

      <div className="my-auto w-full max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 xl:gap-12 items-center">
          {/* Left Column: Explanatory Copy & Value Proposition */}
          <div className="lg:col-span-5 xl:col-span-5 space-y-3.5 sm:space-y-4 text-left">
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-[#08A9E6]/15 text-[#08A9E6] border border-[#08A9E6]/30 shadow-xs">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#08A9E6] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#08A9E6]" />
              </span>
              <span>Our Outsourcing Model</span>
            </div>

            {/* Headline */}
            <h2 className="text-2xl sm:text-3xl lg:text-[32px] xl:text-[36px] font-extrabold text-white tracking-tight leading-[1.16] font-heading">
              How We Deliver <span className="text-[#08A9E6]">High-Impact Outsourcing</span> Without the Headaches
            </h2>

            {/* Explanatory Body Copy */}
            <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed">
              Traditional outsourcing often fails due to disconnected call centers, high turnover, and poor communication.
              Virtual Stack operates differently: we build <strong className="text-white font-semibold">custom, dedicated talent pods</strong> that
              function seamlessly as an organic extension of your domestic operation.
            </p>

            <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed hidden sm:block">
              We handle end-to-end recruitment, workstation provisioning, compliance, and active management—giving you
              expert execution across customer support, back-office workflows, dispatch, and growth operations.
            </p>

            {/* Key Assurance Indicators */}
            <div className="pt-1 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-[#94A3B8]">
              <span className="flex items-center gap-1.5 text-slate-200">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#08A9E6]" />
                Direct Slack / Teams integration
              </span>
              <span className="flex items-center gap-1.5 text-slate-200">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#08A9E6]" />
                Daily KPI & SLA reporting
              </span>
            </div>

            {/* CTAs */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <Link
                href="/book-a-consultation"
                className="bg-[#08A9E6] hover:bg-[#078FCC] text-white text-xs sm:text-sm font-semibold px-5 py-2.5 sm:py-3 rounded-xl shadow-md hover:shadow-lg transition-all duration-200 flex items-center gap-2 group"
              >
                <Calendar className="w-4 h-4 text-white" />
                <span>Get a 10-Min Scoping Call</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </Link>

              <Link
                href="/services"
                className="bg-white/5 hover:bg-white/10 text-white text-xs sm:text-sm font-medium px-4 py-2.5 sm:py-3 rounded-xl border border-white/15 hover:border-[#08A9E6]/40 transition-all flex items-center gap-1.5"
              >
                <span>View All Services</span>
              </Link>
            </div>
          </div>

          {/* Right Column: 4-Step Process & Architecture Pod Cards */}
          <div className="lg:col-span-7 xl:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-3.5">
              {outsourcingPillars.map((pillar) => {
                const IconComponent = pillar.icon;
                return (
                  <div
                    key={pillar.step}
                    className="bg-[#0A2238]/70 backdrop-blur-md border border-[#1C354E] hover:border-[#08A9E6]/50 rounded-2xl p-4 sm:p-4.5 shadow-lg transition-all duration-200 group flex flex-col justify-between"
                  >
                    <div>
                      {/* Top Bar: Step + Icon */}
                      <div className="flex items-center justify-between mb-2.5">
                        <div className="w-8 h-8 rounded-xl bg-[#08A9E6]/15 border border-[#08A9E6]/30 flex items-center justify-center text-[#08A9E6] group-hover:bg-[#08A9E6] group-hover:text-white transition-colors">
                          <IconComponent className="w-4 h-4" />
                        </div>
                        <span className="text-[10px] font-bold text-[#08A9E6] bg-[#08A9E6]/10 px-2 py-0.5 rounded-full border border-[#08A9E6]/20">
                          {pillar.highlight}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="text-sm sm:text-base font-bold text-white font-heading mb-1.5 group-hover:text-[#08A9E6] transition-colors">
                        {pillar.title}
                      </h3>

                      {/* Description */}
                      <p className="text-xs text-[#94A3B8] leading-relaxed">
                        {pillar.desc}
                      </p>
                    </div>

                    {/* Step Number Bottom Indicator */}
                    <div className="pt-3 mt-3 border-t border-white/5 flex items-center justify-between text-[11px] text-[#5F7183]">
                      <span>Phase {pillar.step}</span>
                      <span className="text-[#08A9E6] font-semibold text-[10px] uppercase tracking-wider">
                        Virtual Stack SOP
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
