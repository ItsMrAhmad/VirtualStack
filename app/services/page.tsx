import React from "react";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import {
  Headphones,
  Layers,
  TrendingUp,
  Users,
  ArrowRight,
  CheckCircle2,
  Calendar,
  ShieldCheck,
  Zap
} from "lucide-react";
import { servicePillars, servicesData } from "@/lib/data/services";
import FinalCTA from "@/components/sections/FinalCTA";

import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Services & Operational Solutions",
  description:
    "Explore Virtual Stack's 4 core service pillars: Customer Support, Back Office Operations, Sales Support, and Dedicated Remote Teams.",
};

export default function ServicesPage() {
  const getPillarIcon = (id: string) => {
    switch (id) {
      case "customer-experience":
        return <Headphones className="w-5 h-5 text-[#08A9E6]" />;
      case "back-office":
        return <Layers className="w-5 h-5 text-[#08A9E6]" />;
      case "sales-growth":
        return <TrendingUp className="w-5 h-5 text-[#08A9E6]" />;
      case "dedicated-teams":
        return <Users className="w-5 h-5 text-[#08A9E6]" />;
      default:
        return <CheckCircle2 className="w-5 h-5 text-[#08A9E6]" />;
    }
  };

  return (
    <div
      id="services-scroll-container"
      tabIndex={0}
      className="h-screen h-[100dvh] overflow-y-scroll snap-y snap-mandatory scroll-smooth relative bg-white text-[#0B1724] outline-none"
    >
      {/* Slide 1: Services Hero & Quick Jump */}
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
                <span>Enterprise Operational Solutions</span>
              </div>

              <h1 className="text-2xl sm:text-3xl lg:text-[34px] font-extrabold text-[#071A2A] tracking-tight font-heading leading-tight">
                Operational capabilities <span className="text-[#08A9E6]">built for scale.</span>
              </h1>

              <p className="text-xs sm:text-sm text-[#08A9E6] font-semibold leading-snug">
                Delivering business outcomes through specialized, SOP-driven operational pods.
              </p>

              <p className="text-xs sm:text-sm text-[#5F7183] leading-relaxed max-w-xl">
                We deliver outcomes, not just headcounts. Choose from specialized customer support,
                back-office processing, outbound sales generation, and dedicated full-time remote teams.
              </p>

              {/* Micro Stats Row Grouped with Subtle Tint & Breathing Room */}
              <div className="grid grid-cols-3 gap-3 p-3 sm:p-3.5 my-3 sm:my-3.5 max-w-lg rounded-xl bg-[#F0F7FB]/70 border border-[#DDE6ED] shadow-2xs">
                <div className="py-0.5">
                  <div className="text-sm sm:text-base font-bold text-[#071A2A] font-heading">4 Pillars</div>
                  <div className="text-[11px] text-[#5F7183]">Specialized Services</div>
                </div>
                <div className="py-0.5 border-x border-[#DDE6ED] px-3">
                  <div className="text-sm sm:text-base font-bold text-[#08A9E6] font-heading">24/7/365</div>
                  <div className="text-[11px] text-[#5F7183]">Global Pod Coverage</div>
                </div>
                <div className="py-0.5 pl-1">
                  <div className="text-sm sm:text-base font-bold text-emerald-600 font-heading">1–2 Wk</div>
                  <div className="text-[11px] text-[#5F7183]">Turnkey Deployment</div>
                </div>
              </div>

              {/* Quick-jump anchor pills */}
              <div className="flex flex-wrap gap-2 pt-0.5">
                {servicePillars.map((p) => (
                  <a
                    key={p.id}
                    href={`#${p.id}`}
                    className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-white border border-[#DDE6ED] hover:border-[#08A9E6] hover:text-[#08A9E6] text-xs font-semibold text-[#071A2A] shadow-xs transition-colors cursor-pointer"
                  >
                    {getPillarIcon(p.id)}
                    <span>{p.title}</span>
                  </a>
                ))}
              </div>

              <div className="pt-1 flex flex-wrap items-center gap-2.5">
                <Link
                  href="/book-a-consultation"
                  className="bg-gradient-to-r from-[#08A9E6] to-[#078FCC] hover:from-[#078FCC] hover:to-[#0677aa] text-white text-xs sm:text-sm font-semibold px-5 py-2.5 sm:px-6 sm:py-3 rounded-xl shadow-md shadow-[#08A9E6]/25 transition-all flex items-center gap-2"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Discuss Your Requirements</span>
                </Link>
                <Link
                  href="/contact"
                  className="bg-white hover:bg-[#F7FAFC] text-[#071A2A] text-xs sm:text-sm font-semibold px-5 py-2.5 sm:py-3 rounded-xl border border-[#DDE6ED] shadow-xs transition-colors"
                >
                  Request a Quote
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
                    src="/images/customer-support-agent.jpg"
                    alt="Professional customer support agent at a modern workstation"
                    fill
                    sizes="(max-width: 1024px) 100vw, 480px"
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    priority
                  />
                  {/* Gradient Overlay for Depth */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#071A2A]/85 via-transparent to-transparent opacity-80" />

                  {/* Floating Glassmorphism Status Badge inside image */}
                  <div className="absolute bottom-3 left-3 right-3 bg-white/95 backdrop-blur-md p-3 rounded-xl border border-white/60 shadow-lg flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-lg bg-[#E8F7FD] flex items-center justify-center text-[#08A9E6] shrink-0">
                        <Headphones className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-[#071A2A]">Enterprise Operations Desk</div>
                        <div className="text-[11px] text-[#5F7183]">Dedicated multi-tiered staffing</div>
                      </div>
                    </div>
                    <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-emerald-50 border border-emerald-200 text-[10px] font-semibold text-emerald-700">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                      Live Operations
                    </div>
                  </div>
                </div>
              </div>

              {/* Standard Operating Procedures Strip to level column bottom */}
              <div className="mt-3 flex items-center justify-between px-3.5 py-2.5 rounded-xl bg-white border border-[#DDE6ED] shadow-xs text-xs">
                <div className="flex items-center gap-2 text-[#071A2A] font-semibold">
                  <ShieldCheck className="w-4 h-4 text-[#08A9E6] shrink-0" />
                  <span>Standard Operating Procedures</span>
                </div>
                <div className="text-[11px] text-[#5F7183] font-medium">
                  Cleanroom Facility • SLA Guaranteed
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Slides 2-5: Each Pillar as a dedicated 100dvh snap slide */}
      {servicePillars.map((pillar, pIdx) => (
        <section
          key={pillar.id}
          id={pillar.id}
          className={`h-screen h-[100dvh] min-h-screen min-h-[100dvh] w-full snap-start snap-always flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 pt-20 sm:pt-24 md:pt-28 pb-4 sm:pb-6 relative z-10 overflow-y-auto sm:overflow-visible ${
            pIdx % 2 === 0 ? "bg-white" : "bg-[#F7FAFC]"
          } border-b border-[#DDE6ED]`}
        >
          <div className="my-auto w-full max-w-7xl mx-auto mt-2 sm:mt-3">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-xl bg-[#EBF7FD]">
                  {getPillarIcon(pillar.id)}
                </div>
                <div>
                  <h2 className="text-lg sm:text-xl lg:text-2xl font-extrabold text-[#071A2A] font-heading">
                    {pillar.title}
                  </h2>
                  <p className="text-xs text-[#5F7183] mt-0.5">{pillar.tagline}</p>
                </div>
              </div>
              <Link
                href="/book-a-consultation"
                className="inline-flex items-center gap-1 text-xs font-semibold text-[#08A9E6] hover:text-[#078FCC] hover:underline"
              >
                <span>Inquire About {pillar.title}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Sub-services cards grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2.5 sm:gap-3">
              {pillar.services.map((service) => (
                <div
                  key={service.slug}
                  className="p-3 sm:p-3.5 rounded-xl bg-white border border-[#DDE6ED] hover:border-[#08A9E6] hover:shadow-md transition-all flex flex-col justify-between group shadow-xs"
                >
                  <div className="space-y-1.5">
                    <h3 className="text-xs sm:text-sm font-bold text-[#071A2A] group-hover:text-[#08A9E6] transition-colors font-heading">
                      {service.name}
                    </h3>
                    <p className="text-[11px] sm:text-xs text-[#5F7183] leading-snug line-clamp-1 sm:line-clamp-2">
                      {service.shortDescription}
                    </p>

                    <div className="space-y-0.5 pt-0.5">
                      {service.capabilities.slice(0, 2).map((cap, cIdx) => (
                        <div key={cIdx} className="text-[11px] text-[#5F7183] flex items-center gap-1.5">
                          <CheckCircle2 className="w-3 h-3 text-[#08A9E6] shrink-0" />
                          <span className="line-clamp-1">{cap}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-2 mt-2 border-t border-[#DDE6ED] flex items-center justify-between text-xs">
                    <Link
                      href={`/services/${service.slug}`}
                      className="font-bold text-[#071A2A] group-hover:text-[#08A9E6] flex items-center gap-1 transition-colors"
                    >
                      <span>View Details</span>
                      <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                    </Link>
                    <Link
                      href="/book-a-consultation"
                      className="text-[#08A9E6] font-semibold hover:underline"
                    >
                      Get Quote
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Slide 6: Delivery Models Comparison */}
      <section className="h-screen h-[100dvh] min-h-screen min-h-[100dvh] w-full snap-start snap-always flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 pt-24 sm:pt-28 md:pt-32 pb-6 relative z-10 overflow-y-auto sm:overflow-visible bg-[#F7FAFC] border-b border-[#DDE6ED]">
        <div className="my-auto w-full max-w-7xl mx-auto mt-3 sm:mt-5">
          <div className="text-center max-w-2xl mx-auto mb-6 space-y-1">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#071A2A] font-heading">
              Flexible delivery models tailored to your volume.
            </h2>
            <p className="text-xs sm:text-sm text-[#5F7183]">
              We adapt our operational structure around your business stage, ticket volume, and timezone needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div className="bg-white rounded-xl p-5 border border-[#DDE6ED] shadow-xs flex flex-col justify-between">
              <div>
                <span className="text-[11px] font-semibold text-[#5F7183]">Engagement Model 01</span>
                <h3 className="text-lg font-bold text-[#071A2A] mt-0.5 mb-1.5 font-heading">Dedicated Pods</h3>
                <p className="text-xs text-[#5F7183] leading-relaxed mb-3">
                  Full-time dedicated specialists assigned 100% exclusively to your account, operating directly
                  under your standard operating procedures.
                </p>
                <ul className="text-xs text-[#5F7183] space-y-1.5 border-t border-[#DDE6ED] pt-3">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                    Exclusive non-shared talent
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                    Direct management control
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                    Best for core ongoing workflows
                  </li>
                </ul>
              </div>
              <div className="pt-4 mt-4 border-t border-[#DDE6ED]">
                <Link
                  href="/book-a-consultation"
                  className="w-full block text-center py-2 rounded-xl bg-[#F7FAFC] hover:bg-[#08A9E6] hover:text-white text-xs font-bold text-[#071A2A] transition-colors"
                >
                  Configure Dedicated Pod
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-xl p-5 border-2 border-[#08A9E6] shadow-sm relative flex flex-col justify-between">
              <span className="absolute -top-2.5 left-1/2 -translate-x-1/2 bg-[#08A9E6] text-white text-[10px] font-semibold px-2.5 py-0.5 rounded-full">
                Most Popular
              </span>
              <div>
                <span className="text-[11px] font-semibold text-[#08A9E6]">Engagement Model 02</span>
                <h3 className="text-lg font-bold text-[#071A2A] mt-0.5 mb-1.5 font-heading">24/7/365 Shared Queue</h3>
                <p className="text-xs text-[#5F7183] leading-relaxed mb-3">
                  Multi-agent coverage designed to handle inbound spikes, after-hours coverage, and weekend
                  queues with zero dropped calls.
                </p>
                <ul className="text-xs text-[#5F7183] space-y-1.5 border-t border-[#DDE6ED] pt-3">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                    24/7/365 continuous presence
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                    Ideal for overflow & reception
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                    Cost-effective fractional capacity
                  </li>
                </ul>
              </div>
              <div className="pt-4 mt-4 border-t border-[#DDE6ED]">
                <Link
                  href="/book-a-consultation"
                  className="w-full block text-center py-2 rounded-xl bg-[#08A9E6] hover:bg-[#078FCC] text-xs font-bold text-white shadow transition-colors"
                >
                  Configure Shared Coverage
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-xl p-5 border border-[#DDE6ED] shadow-xs flex flex-col justify-between">
              <div>
                <span className="text-[11px] font-semibold text-[#5F7183]">Engagement Model 03</span>
                <h3 className="text-lg font-bold text-[#071A2A] mt-0.5 mb-1.5 font-heading">Staff Leasing / EOR</h3>
                <p className="text-xs text-[#5F7183] leading-relaxed mb-3">
                  Build a remote branch with complete legal Employer of Record protection, physical workstations,
                  and local HR management.
                </p>
                <ul className="text-xs text-[#5F7183] space-y-1.5 border-t border-[#DDE6ED] pt-3">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                    Zero international legal liability
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                    Full workstation & IT provided
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                    Custom recruitment for specialized roles
                  </li>
                </ul>
              </div>
              <div className="pt-4 mt-4 border-t border-[#DDE6ED]">
                <Link
                  href="/book-a-consultation"
                  className="w-full block text-center py-2 rounded-xl bg-[#F7FAFC] hover:bg-[#08A9E6] hover:text-white text-xs font-bold text-[#071A2A] transition-colors"
                >
                  Inquire About Staff Leasing
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Slide 7: Final CTA */}
      <FinalCTA />

      {/* Slide 8: Dedicated Footer Snap Slide */}
      <div className="services-snap-section w-full snap-start snap-always min-h-[100dvh] h-[100dvh] bg-[#071A2A] flex flex-col justify-between overflow-y-auto">
        <Footer />
      </div>
    </div>
  );
}
