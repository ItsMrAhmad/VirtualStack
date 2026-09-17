import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ShieldCheck, Clock, Award, Users2, Cpu, CheckCircle2, ArrowRight } from "lucide-react";

export default function WhyUsSection() {
  const differentiators = [
    {
      icon: <Clock className="w-5 h-5 text-[#08A9E6]" />,
      title: "24/7/365 Multi-Timezone Coverage",
      description:
        "Your customers and operational workflows don't pause at 5 PM. Our multi-shift facilities provide round-the-clock responsiveness across all North American time zones.",
    },
    {
      icon: <Users2 className="w-5 h-5 text-[#08A9E6]" />,
      title: "Dedicated, Non-Shared Staffing",
      description:
        "Unlike shared call centers where agents juggle dozens of unrelated clients, your Virtual Stack pod works exclusively on your accounts, SOPs, and brand standards.",
    },
    {
      icon: <Cpu className="w-5 h-5 text-[#08A9E6]" />,
      title: "100% Cloud VOIP & Modern IT",
      description:
        "Enterprise-grade telephony with intelligent queue routing, call recording, dual-monitor workstations, and redundant power infrastructure.",
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-[#08A9E6]" />,
      title: "Biometric Security & Cleanroom Protocols",
      description:
        "Physical facility entry secured by biometric authentication, continuous CCTV surveillance, restricted USB ports, and strict confidentiality agreements.",
    },
    {
      icon: <Award className="w-5 h-5 text-[#08A9E6]" />,
      title: "Competitive Quality, Transparent Value",
      description:
        "Benchmarked competitively against traditional enterprise BPOs, delivering equal or superior quality standards at approximately half the total operational expense.",
    },
    {
      icon: <CheckCircle2 className="w-5 h-5 text-[#08A9E6]" />,
      title: "Calgary Office & A Decade of Delivery",
      description:
        "Main office in Calgary, operating continuously since 2011 with a proven track record of reliable service and long-term client relationships.",
    },
  ];

  return (
    <section id="why-us" className="py-20 lg:py-28 bg-white border-b border-[#DDE6ED]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column */}
          <div className="lg:col-span-5 space-y-6">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0B1724] tracking-tight leading-[1.15] font-heading">
              Built for performance, transparency, and trust.
            </h2>
            <p className="text-base text-[#5F7183] leading-relaxed">
              We know what makes an outsourcing partnership work: responsiveness, trained people, robust
              technology, and measurable business outcomes. We treat your customers and operations with the
              same care as our own.
            </p>

            {/* Visual Infrastructure Photo Card */}
            <div className="relative w-full h-48 sm:h-56 rounded-2xl overflow-hidden border border-[#DDE6ED] shadow-sm group">
              <Image
                src="/images/security-infrastructure.jpg"
                alt="Virtual Stack Operational Facility & Infrastructure"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover group-hover:scale-103 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#071A2A]/85 via-[#071A2A]/20 to-transparent" />
              <div className="absolute bottom-3.5 left-4 right-4 text-white">
                <div className="text-xs font-bold font-heading flex items-center gap-1.5 text-white">
                  <ShieldCheck className="w-4 h-4 text-[#08A9E6]" />
                  <span>North American Quality & 24/7 Redundancy</span>
                </div>
                <div className="text-[11px] text-[#94A3B8] mt-0.5">
                  Calgary office oversight, biometric facilities, and continuous supervisor coverage
                </div>
              </div>
            </div>

            <div className="pt-2">
              <Link
                href="/why-virtual-stack"
                className="inline-flex items-center gap-2 bg-[#071A2A] hover:bg-[#0B1724] text-white font-semibold px-6 py-3.5 rounded-xl shadow transition-all text-sm group"
              >
                <span>Read Full Differentiators</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Right Column Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {differentiators.map((diff, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-[#F7FAFC] border border-[#DDE6ED] hover:border-[#08A9E6]/40 hover:bg-white hover:shadow-sm transition-all"
              >
                <div className="p-2.5 rounded-xl bg-[#EBF7FD] w-fit mb-3.5">
                  {diff.icon}
                </div>
                <h3 className="text-base font-bold text-[#0B1724] mb-2 font-heading">
                  {diff.title}
                </h3>
                <p className="text-xs text-[#5F7183] leading-relaxed">
                  {diff.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
