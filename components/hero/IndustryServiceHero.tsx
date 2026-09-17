import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Calendar, ShieldCheck } from "lucide-react";

export interface HeroStatItem {
  value: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  iconBg?: string;     // e.g. "bg-[#E0F2FE] text-[#0284C7]"
  valueColor?: string; // e.g. "text-[#0F172A]" | "text-[#08A9E6]" | "text-emerald-600"
}

export interface IndustryServiceHeroProps {
  // Credibility Hook
  badge: string;

  // H1 Headline Offer
  h1Prefix?: string;
  h1Highlight: string;
  h1Suffix?: string;

  // Subheading (Optional - omitted if empty or not provided)
  subheading?: string;

  // Pain-to-Outcome Body (1-2 sentences max)
  description: string;

  // 3-Stat Proof Point Block
  stats: [HeroStatItem, HeroStatItem, HeroStatItem];

  // CTAs
  primaryCtaText: string;
  primaryCtaHref?: string;
  secondaryCtaText?: string;
  secondaryCtaHref?: string;

  // Client Trust Line
  trustLine: {
    clientType: string;   // e.g. "45+ Carriers & Fleets"
    volumeMetric: string; // e.g. "12,000+ Loads Managed/Month"
  };

  // Compatibility / Tech Stack Bar (Optional)
  compatibility?: {
    title: string;
    tools: string[];
  };

  // Right-Column Image & Card
  imageSrc: string;
  imageAlt: string;
  imageCardTitle: string;
  imageCardSubtitle: string;
  imageStatusBadge: string;
  imageIcon: React.ComponentType<{ className?: string }>;

  // Optional custom slot (e.g. channel badges on contact-center)
  extraPills?: React.ReactNode;
}

export default function IndustryServiceHero({
  badge,
  h1Prefix,
  h1Highlight,
  h1Suffix,
  subheading,
  description,
  stats,
  primaryCtaText,
  primaryCtaHref = "/book-a-consultation",
  secondaryCtaText = "Request Scope Review",
  secondaryCtaHref = "/contact",
  trustLine,
  compatibility,
  imageSrc,
  imageAlt,
  imageCardTitle,
  imageCardSubtitle,
  imageStatusBadge,
  imageIcon: ImageIcon,
  extraPills,
}: IndustryServiceHeroProps) {
  return (
    <section className="h-screen h-[100dvh] min-h-screen min-h-[100dvh] w-full snap-start snap-always flex flex-col justify-start pt-6 sm:pt-8 items-center px-4 sm:px-6 lg:px-8 pb-4 sm:pb-6 relative z-10 overflow-y-auto sm:overflow-visible bg-gradient-to-b from-[#F7FAFC] to-white border-b border-[#DDE6ED]">
      <div className="w-full max-w-7xl mx-auto mt-0 sm:mt-1">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center">
          {/* Left Column: Offer, Copy, Stats, CTAs, Trust */}
          <div className="lg:col-span-7 space-y-2.5 sm:space-y-3 text-left">
            {/* Pill Badge: Credibility Hook with live ping indicator */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-[#E8F7FD] text-[#08A9E6] border border-[#08A9E6]/30 shadow-xs">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#08A9E6] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#08A9E6]"></span>
              </span>
              <span>{badge}</span>
            </div>

            {/* H1 Offer */}
            <h1 className="text-2xl sm:text-3xl lg:text-[34px] font-extrabold text-[#071A2A] tracking-tight font-heading leading-tight">
              {h1Prefix && <span>{h1Prefix}</span>}
              <span className="text-[#08A9E6]">{h1Highlight}</span>
              {h1Suffix && <span className="whitespace-nowrap">{h1Suffix}</span>}
            </h1>

            {/* Subheading (Target audience / scope detail, only if provided) */}
            {subheading && (
              <p className="text-xs sm:text-sm text-[#08A9E6] font-semibold leading-snug">
                {subheading}
              </p>
            )}

            {/* Body Copy: Specific pain points & outcomes, 1-2 sentences */}
            <p className="text-xs sm:text-sm text-[#5F7183] leading-relaxed max-w-xl">
              {description}
            </p>

            {/* Extra Pills Slot (e.g. Omnichannel Contact Center Channels) */}
            {extraPills && <div className="pt-0.5">{extraPills}</div>}

            {/* High-Contrast 3-Stat Proof Point Block (Engineered to match Reference Image) */}
            <div className="grid grid-cols-3 divide-x divide-[#DDE6ED] p-3 sm:p-4 my-2.5 sm:my-3 max-w-xl rounded-2xl bg-white border border-[#DDE6ED] shadow-xs">
              {stats.map((stat, idx) => {
                const StatIcon = stat.icon;
                const iconBg = stat.iconBg || (idx === 0 ? "bg-[#E0F2FE] text-[#0284C7]" : idx === 1 ? "bg-[#EFF6FF] text-[#2563EB]" : "bg-[#ECFDF5] text-[#059669]");
                const valColor = stat.valueColor || (idx === 0 ? "text-[#071A2A]" : idx === 1 ? "text-[#08A9E6]" : "text-emerald-600");

                return (
                  <div
                    key={idx}
                    className={`flex items-center gap-2.5 sm:gap-3 px-2 sm:px-3.5 ${
                      idx === 0 ? "pl-1 sm:pl-2" : idx === 2 ? "pr-1 sm:pr-2" : ""
                    }`}
                  >
                    <div className={`w-9 h-9 sm:w-10 sm:h-10 rounded-xl ${iconBg} flex items-center justify-center shrink-0`}>
                      <StatIcon className="w-4 h-4 sm:w-5 sm:h-5" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className={`text-base sm:text-lg font-black tracking-tight font-heading leading-tight ${valColor}`}>
                        {stat.value}
                      </div>
                      <div className="text-[11px] sm:text-xs text-[#5F7183] font-medium leading-tight mt-0.5">
                        {stat.label}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* CTA Buttons */}
            <div className="pt-1 flex flex-wrap items-center gap-2.5">
              <Link
                href={primaryCtaHref}
                className="bg-gradient-to-r from-[#08A9E6] to-[#078FCC] hover:from-[#078FCC] hover:to-[#0677aa] text-white text-xs sm:text-sm font-semibold px-5 py-2.5 sm:px-6 sm:py-3 rounded-xl shadow-md shadow-[#08A9E6]/25 transition-all flex items-center gap-2"
              >
                <Calendar className="w-4 h-4" />
                <span>{primaryCtaText}</span>
              </Link>
              <Link
                href={secondaryCtaHref}
                className="bg-white hover:bg-[#F7FAFC] text-[#071A2A] text-xs sm:text-sm font-semibold px-5 py-2.5 sm:py-3 rounded-xl border border-[#DDE6ED] shadow-xs transition-colors"
              >
                {secondaryCtaText}
              </Link>
            </div>

            {/* Client Trust Line */}
            <div className="pt-1.5 flex items-center gap-2 text-xs text-[#5F7183]">
              <div className="flex items-center -space-x-1">
                <span className="w-5 h-5 rounded-full bg-[#071A2A] text-amber-400 border-2 border-white flex items-center justify-center text-[10px] font-black shadow-xs">
                  ★
                </span>
                <span className="w-5 h-5 rounded-full bg-[#08A9E6] text-white border-2 border-white flex items-center justify-center text-[10px] font-bold shadow-xs">
                  ✓
                </span>
              </div>
              <span className="font-medium">
                Trusted by <strong className="font-bold text-[#071A2A]">{trustLine.clientType}</strong>{" "}
                <span className="text-[#DDE6ED] mx-1">•</span>{" "}
                <span className="text-[#08A9E6] font-semibold">{trustLine.volumeMetric}</span>
              </span>
            </div>

            {/* Compatibility / Certification Bar (Left Column for High Visibility) */}
            {compatibility && (
              <div className="mt-3 p-3 rounded-xl bg-white border border-[#DDE6ED] shadow-2xs max-w-xl">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div className="flex items-center gap-2 text-[#071A2A] font-bold text-xs">
                    <div className="p-1 rounded-md bg-[#08A9E6]/10 text-[#08A9E6]">
                      <ShieldCheck className="w-4 h-4 text-[#08A9E6]" />
                    </div>
                    <span className="uppercase tracking-wider text-[11px] text-[#071A2A] font-heading">
                      {compatibility.title}
                    </span>
                  </div>
                  <div className="flex flex-wrap items-center gap-1.5 text-[11px]">
                    {compatibility.tools.map((tool) => (
                      <span
                        key={tool}
                        className="px-2 py-0.5 rounded-md bg-[#F7FAFC] border border-[#DDE6ED] text-[#071A2A] font-semibold shadow-2xs"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Right Column: Framed Image Card with Status Badge */}
          <div className="lg:col-span-5 relative group mt-3 lg:mt-0">
            {/* Ambient Backdrop Glow */}
            <div className="absolute -inset-2 bg-gradient-to-r from-[#08A9E6]/30 via-sky-400/20 to-indigo-500/20 rounded-3xl blur-xl opacity-75 group-hover:opacity-100 transition duration-500" />

            {/* Framed Image Card */}
            <div className="relative rounded-2xl overflow-hidden border-2 border-white shadow-xl bg-white">
              <div className="relative w-full aspect-[16/11] max-h-[320px] sm:max-h-[330px] overflow-hidden">
                <Image
                  src={imageSrc}
                  alt={imageAlt}
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
                      <ImageIcon className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-[#071A2A]">{imageCardTitle}</div>
                      <div className="text-[11px] text-[#5F7183]">{imageCardSubtitle}</div>
                    </div>
                  </div>
                  <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-emerald-50 border border-emerald-200 text-[10px] font-semibold text-emerald-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    {imageStatusBadge}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
