import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Cloud, PhoneCall, ShieldCheck, Activity, MonitorCheck, Lock, ArrowRight } from "lucide-react";

export default function TechInfrastructure() {
  const features = [
    {
      icon: <Cloud className="w-5 h-5 text-[#08A9E6]" />,
      title: "100% Cloud Architecture",
      benefit: "Zero Single Point of Failure",
      description: "Redundant cloud infrastructure guaranteeing uninterrupted phone routing, data synchronization, and disaster recovery.",
    },
    {
      icon: <PhoneCall className="w-5 h-5 text-[#08A9E6]" />,
      title: "Licensed Enterprise VOIP",
      benefit: "Crystal-Clear Telephony",
      description: "High-definition voice calling with custom IVR trees, automated call recording, and real-time supervisory whisper coaching.",
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-[#08A9E6]" />,
      title: "Biometric Facility Access",
      benefit: "Physical Operational Security",
      description: "All operations center floor entrances require biometric fingerprint authentication. Unauthorized personnel are strictly barred.",
    },
    {
      icon: <Activity className="w-5 h-5 text-[#08A9E6]" />,
      title: "Continuous 24/7 CCTV",
      benefit: "Auditability & Oversight",
      description: "Strategic CCTV camera coverage monitored around the clock to ensure physical compliance with data protection policies.",
    },
    {
      icon: <MonitorCheck className="w-5 h-5 text-[#08A9E6]" />,
      title: "Updated Modern Workstations",
      benefit: "Rapid Task Execution",
      description: "High-speed dual-monitor terminals continually upgraded and maintained to match your exact software requirements.",
    },
    {
      icon: <Lock className="w-5 h-5 text-[#08A9E6]" />,
      title: "Cleanroom Data Protection",
      benefit: "Zero Unauthorized Data Export",
      description: "Restricted USB access, enterprise VPN tunnels, non-exportable environments, and strict NDAs protecting client data.",
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-[#071A2A] text-white border-b border-[#1E3347] relative overflow-hidden">
      {/* Subtle background network pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#08A9E615_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none opacity-40" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-heading">
            Built for modern, secure operations.
          </h2>
          <p className="text-base sm:text-lg text-[#94A3B8]">
            We combine high-touch human expertise with enterprise-grade cloud systems, biometrics, and physical
            security to deliver flawless reliability.
          </p>
        </div>

        {/* Security Infrastructure Image */}
        <div className="max-w-4xl mx-auto mb-14">
          <Image
            src="/images/security-infrastructure.jpg"
            alt="Secure data center with biometric access and CCTV surveillance"
            width={1200}
            height={675}
            className="rounded-2xl border border-[#1E3347] w-full h-auto object-cover opacity-90"
          />
        </div>

        {/* 6 Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-14">
          {features.map((feat, idx) => (
            <div
              key={idx}
              className="bg-[#102C46]/60 backdrop-blur-sm rounded-2xl p-7 border border-[#1E3347] hover:border-[#08A9E6]/50 transition-colors"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 rounded-xl bg-[#071A2A] border border-[#1E3347]">
                  {feat.icon}
                </div>
                <span className="text-[11px] font-semibold text-[#08A9E6] bg-[#08A9E6]/10 px-2.5 py-0.5 rounded-full border border-[#08A9E6]/20">
                  {feat.benefit}
                </span>
              </div>
              <h3 className="text-lg font-bold text-white mb-2 font-heading">
                {feat.title}
              </h3>
              <p className="text-xs text-[#94A3B8] leading-relaxed">
                {feat.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom CTA bar */}
        <div className="p-6 rounded-2xl bg-[#102C46] border border-[#1E3347] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left">
            <h4 className="text-sm font-bold text-white font-heading">
              Have specific security, compliance, or tooling requirements?
            </h4>
            <p className="text-xs text-[#94A3B8] mt-0.5">
              We regularly customize workstation environments, dedicated VPNs, and software permissions.
            </p>
          </div>
          <Link
            href="/book-a-consultation"
            className="bg-[#08A9E6] hover:bg-[#078FCC] text-white text-xs font-semibold px-5 py-2.5 rounded-xl shadow transition-colors flex items-center gap-1.5 shrink-0"
          >
            <span>Request Security Review</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
