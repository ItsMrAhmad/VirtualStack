import React from "react";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import {
  ShieldCheck,
  Clock,
  Award,
  Users2,
  Cpu,
  CheckCircle2,
  Calendar,
  ArrowRight,
  TrendingDown,
  Building,
  Headphones,
  Lock
} from "lucide-react";
import FinalCTA from "@/components/sections/FinalCTA";

import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Why Virtual Stack | Credibility, Reliability & Trust",
  description:
    "Discover why North American businesses partner with Virtual Stack for Customer Support, back-office operations, and dedicated remote teams.",
};

export default function WhyVirtualStackPage() {
  const corePillars = [
    {
      title: "People First",
      subtitle: "Trained, dedicated operational talent",
      icon: <Users2 className="w-5 h-5 text-[#08A9E6]" />,
      points: [
        "Rigorous screening: Only top 3% of applicants selected for client pods",
        "Dedicated, non-shared staffing: Your agents work solely on your business",
        "Continuous supervisory coaching, calibration, and quality audits",
        "High staff retention driven by competitive compensation and career paths",
      ],
    },
    {
      title: "Process & Governance",
      subtitle: "Standardized SOPs and transparent metrics",
      icon: <Award className="w-5 h-5 text-[#08A9E6]" />,
      points: [
        "In-depth workflow documentation and knowledge base mapping",
        "Clear SLA commitments with real-time performance tracking",
        "Weekly quality assurance syncs and scorecards shared directly with your team",
        "Structured escalation paths for edge cases and VIP client interactions",
      ],
    },
    {
      title: "Modern Technology",
      subtitle: "Cloud VOIP and secure physical facilities",
      icon: <Cpu className="w-5 h-5 text-[#08A9E6]" />,
      points: [
        "100% cloud-based infrastructure with redundant telephony routing",
        "Biometric fingerprint security controlling all facility floor entries",
        "24/7 CCTV surveillance monitoring and strict cleanroom protocols",
        "Modern workstations continually upgraded to client technical specs",
      ],
    },
    {
      title: "Measurable Economics",
      subtitle: "Enterprise quality at half the domestic cost",
      icon: <TrendingDown className="w-5 h-5 text-[#08A9E6]" />,
      points: [
        "Save 50–65% compared to domestic in-house hiring and facility leases",
        "Zero equipment capital expenditures, recruiter commissions, or payroll tax burdens",
        "Flexible, transparent monthly pricing with no hidden administration charges",
        "Scale capacity up or down to absorb product launches or seasonal spikes",
      ],
    },
  ];

  return (
    <div
      id="why-virtual-stack-scroll-container"
      tabIndex={0}
      className="h-screen h-[100dvh] overflow-y-scroll snap-y snap-mandatory scroll-smooth relative bg-white text-[#0B1724] outline-none"
    >
      {/* Slide 1: Hero & Infrastructure Photo */}
      <section className="h-screen h-[100dvh] min-h-screen min-h-[100dvh] w-full snap-start snap-always flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 py-4 sm:py-6 relative z-10 overflow-y-auto sm:overflow-visible bg-gradient-to-b from-[#F7FAFC] to-white border-b border-[#DDE6ED]">
        <div className="my-auto w-full max-w-7xl mx-auto text-center space-y-2.5 sm:space-y-3.5">
          <div className="max-w-2xl mx-auto space-y-2">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#071A2A] tracking-tight font-heading">
              Why trust Virtual Stack with your business?
            </h1>
            <p className="text-xs sm:text-sm text-[#5F7183] leading-relaxed">
              Outsourcing critical business functions is an act of trust. Here is how we ensure your brand,
              customers, and confidential workflows remain in safe, capable hands every single day.
            </p>
          </div>
          <div className="flex justify-center gap-3">
            <Link
              href="/book-a-consultation"
              className="bg-[#08A9E6] hover:bg-[#078FCC] text-white font-semibold px-5 py-2.5 sm:px-6 sm:py-3 rounded-xl shadow-sm text-xs sm:text-sm flex items-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              <span>Book an Operational Consultation</span>
            </Link>
          </div>
          {/* Operations Floor Image with Ambient Glow & Matching Framing */}
          <div className="relative max-w-xl sm:max-w-2xl lg:max-w-[760px] mx-auto mt-3 sm:mt-3.5 group">
            {/* Ambient Backdrop Glow */}
            <div className="absolute -inset-2 bg-gradient-to-r from-[#08A9E6]/25 via-sky-400/20 to-indigo-500/20 rounded-3xl blur-xl opacity-75 group-hover:opacity-100 transition duration-500" />

            {/* Framed Image Card */}
            <div className="relative rounded-2xl overflow-hidden border-2 border-white shadow-xl bg-white">
              <div className="relative w-full aspect-[16/9] max-h-[240px] sm:max-h-[270px] lg:max-h-[300px] overflow-hidden">
                <Image
                  src="/images/hero-operations.jpg"
                  alt="Virtual Stack modern operations floor with dual-monitor workstations"
                  fill
                  sizes="(max-width: 1024px) 100vw, 760px"
                  className="object-cover object-top group-hover:scale-102 transition-transform duration-500"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Slide 2: 4 Deep Core Pillars */}
      <section className="h-screen h-[100dvh] min-h-screen min-h-[100dvh] w-full snap-start snap-always flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 pt-18 sm:pt-22 pb-6 relative z-10 overflow-y-auto sm:overflow-visible bg-[#F7FAFC] border-b border-[#DDE6ED]">
        <div className="my-auto w-full max-w-7xl mx-auto space-y-4 sm:space-y-5">
          <div className="text-center max-w-2xl mx-auto space-y-1">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#071A2A] font-heading">
              Four pillars that guarantee operational consistency.
            </h2>
            <p className="text-xs sm:text-sm text-[#5F7183]">
              Proven standards engineered to protect service continuity and deliver measurable ROI.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
            {corePillars.map((pillar, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl p-4 sm:p-5 border border-[#DDE6ED] shadow-xs space-y-2.5"
              >
                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded-lg bg-[#EBF7FD]">
                    {pillar.icon}
                  </div>
                  <div>
                    <h3 className="text-sm sm:text-base font-bold text-[#071A2A] font-heading">{pillar.title}</h3>
                    <p className="text-[11px] text-[#08A9E6] font-medium">{pillar.subtitle}</p>
                  </div>
                </div>

                <ul className="space-y-1.5 pt-1">
                  {pillar.points.map((point, pIdx) => (
                    <li key={pIdx} className="flex items-start gap-2 text-xs text-[#5F7183]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#08A9E6] shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Slide 3: Contrast Comparison */}
      <section className="h-screen h-[100dvh] min-h-screen min-h-[100dvh] w-full snap-start snap-always flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 pt-18 sm:pt-22 pb-6 relative z-10 overflow-y-auto sm:overflow-visible bg-white border-b border-[#DDE6ED]">
        <div className="my-auto w-full max-w-7xl mx-auto space-y-6">
          <div className="text-center max-w-2xl mx-auto space-y-1">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#071A2A] font-heading">
              How Virtual Stack compares to traditional BPOs.
            </h2>
            <p className="text-xs sm:text-sm text-[#5F7183]">
              Why high-growth companies graduate from commoditized shared call centers to managed pods.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-4xl mx-auto">
            {/* Traditional BPO */}
            <div className="p-5 rounded-xl bg-[#F7FAFC] border border-[#DDE6ED] space-y-3">
              <h3 className="text-base font-bold text-[#071A2A] font-heading flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-500" />
                <span>Traditional Call Center / Generic BPO</span>
              </h3>
              <ul className="space-y-2.5 text-xs text-[#5F7183]">
                <li className="flex items-start gap-2">
                  <span className="text-rose-500 font-bold">✕</span>
                  <span>Agents shared across dozens of competing clients simultaneously</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-rose-500 font-bold">✕</span>
                  <span>Robotic script reading with minimal product or contextual understanding</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-rose-500 font-bold">✕</span>
                  <span>Rigid multi-year contracts with opaque billings and hidden fees</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-rose-500 font-bold">✕</span>
                  <span>High agent turnover resulting in constantly untrained staff</span>
                </li>
              </ul>
            </div>

            {/* Virtual Stack */}
            <div className="p-5 sm:p-6 rounded-2xl bg-[#EBF7FD]/50 border-2 border-[#08A9E6] shadow-sm space-y-3">
              <h3 className="text-base font-bold text-[#071A2A] font-heading flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                <span>The Virtual Stack Model</span>
              </h3>
              <ul className="space-y-2.5 text-xs text-[#0B1724]">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Dedicated exclusive talent</strong> working solely on your workflows and tools</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Comprehensive brand training</strong> and empathetic, conversational communication</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Transparent monthly pricing</strong> with flexible scaling terms and SLA guarantees</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Long-term career paths</strong> leading to stable, highly experienced agent pods</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Slide 4: Closing CTA */}
      <FinalCTA />

      {/* Slide 5: Dedicated Footer Snap Slide */}
      <div className="why-virtual-stack-snap-section w-full snap-start snap-always min-h-[100dvh] h-[100dvh] bg-[#071A2A] flex flex-col justify-between overflow-y-auto">
        <Footer />
      </div>
    </div>
  );
}
