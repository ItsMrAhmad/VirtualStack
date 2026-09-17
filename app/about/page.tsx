import React from "react";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import {
  Clock,
  ShieldCheck,
  Users,
  Target,
  Heart,
  Award,
  CheckCircle2,
  Calendar,
  MapPin,
  Phone,
  Mail
} from "lucide-react";
import { companyData } from "@/lib/data/company";
import FinalCTA from "@/components/sections/FinalCTA";

import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "About Virtual Stack | Our Story, Mission & Values",
  description:
    "Learn about Virtual Stack's history since 2011, our North American corporate headquarters in Calgary, AB, and our commitment to operational quality.",
};

export default function AboutPage() {
  const values = [
    {
      icon: <Target className="w-5 h-5 text-[#08A9E6]" />,
      title: "Quality Over Volume",
      description:
        "We are a growing operational partner focused on delivering high-touch precision and true craftsmanship, not mass-market commodity staffing.",
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-[#08A9E6]" />,
      title: "Radical Transparency",
      description:
        "Our clients have full visibility into live quality scorecards, call recordings, agent metrics, and operational performance.",
    },
    {
      icon: <Heart className="w-5 h-5 text-[#08A9E6]" />,
      title: "Human Empathy",
      description:
        "Whether answering customer support tickets or dispatching long-haul freight, our people listen attentively and solve problems with care.",
    },
    {
      icon: <Users className="w-5 h-5 text-[#08A9E6]" />,
      title: "Long-Term Partnership",
      description:
        "We view every client engagement as a multi-year collaborative journey. Your business growth is our definitive measure of success.",
    },
  ];

  return (
    <div
      id="about-scroll-container"
      tabIndex={0}
      className="h-screen h-[100dvh] overflow-y-scroll snap-y snap-mandatory scroll-smooth relative bg-white text-[#0B1724] outline-none"
    >
      {/* Slide 1: Company Profile & Mission */}
      <section className="h-screen h-[100dvh] min-h-screen min-h-[100dvh] w-full snap-start snap-always flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 py-4 sm:py-6 relative z-10 overflow-y-auto sm:overflow-visible bg-gradient-to-b from-[#F7FAFC] to-white border-b border-[#DDE6ED]">
        <div className="my-auto w-full max-w-4xl mx-auto text-center space-y-2 sm:space-y-3">
          <h1 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-[#071A2A] tracking-tight font-heading leading-tight">
            North American leadership. Global operational capability.
          </h1>
          <p className="text-xs sm:text-sm text-[#5F7183] leading-relaxed max-w-2xl mx-auto">
            Virtual Stack delivers dedicated operational infrastructure, back-office excellence,
            and high-touch customer support designed to operate as an organic extension of your domestic team.
          </p>
          <div className="pt-0.5 flex justify-center gap-3">
            <Link
              href="/contact"
              className="bg-[#08A9E6] hover:bg-[#078FCC] text-white text-xs sm:text-sm font-semibold px-4 py-2 sm:px-5 sm:py-2.5 rounded-xl shadow-xs transition-colors flex items-center gap-2"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Get in Touch With Leadership</span>
            </Link>
          </div>
          {/* Team Image with Ambient Glow & Full 16:9 Framing */}
          <div className="relative max-w-xl sm:max-w-2xl lg:max-w-[760px] mx-auto mt-3 sm:mt-3.5 group">
            {/* Ambient Backdrop Glow */}
            <div className="absolute -inset-2 bg-gradient-to-r from-[#08A9E6]/25 via-sky-400/20 to-indigo-500/20 rounded-3xl blur-xl opacity-75 group-hover:opacity-100 transition duration-500" />

            {/* Framed Image Card */}
            <div className="relative rounded-2xl overflow-hidden border-2 border-white shadow-xl bg-white">
              <div className="relative w-full aspect-[16/9] max-h-[240px] sm:max-h-[270px] lg:max-h-[300px] overflow-hidden">
                <Image
                  src="/images/about-team.jpg"
                  alt="Virtual Stack leadership team in a collaborative meeting"
                  fill
                  sizes="(max-width: 1024px) 100vw, 760px"
                  className="object-cover object-center group-hover:scale-102 transition-transform duration-500"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Slide 2: Story & Background */}
      <section className="h-screen h-[100dvh] min-h-screen min-h-[100dvh] w-full snap-start snap-always flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 pt-18 sm:pt-22 pb-6 relative z-10 overflow-y-auto sm:overflow-visible bg-white border-b border-[#DDE6ED]">
        <div className="my-auto w-full max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            <div className="lg:col-span-6 space-y-4">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#071A2A] tracking-tight font-heading">
                Over a decade of dependable operational service.
              </h2>
              <p className="text-xs sm:text-sm text-[#5F7183] leading-relaxed">
                Founded in 2011, Virtual Stack began with a singular focus: helping growing companies eliminate
                operational bottlenecks through dependable, well-trained human teams backed by secure technology.
              </p>
              <p className="text-xs sm:text-sm text-[#5F7183] leading-relaxed">
                With our main office in Calgary, Canada, we operate modern facilities with over 200 workstation capacity
                on a 24/7/365 basis. From direct customer service and 24/7 phone answering to freight dispatch
                and complex transaction processing, our teams handle millions of interactions with rigor and care.
              </p>

              <div className="pt-2 border-t border-[#DDE6ED] grid grid-cols-2 gap-4 text-xs">
                <div>
                  <span className="font-bold text-[#071A2A] block">Established:</span>
                  <span className="text-[#5F7183]">2011 (15+ Years Continuous Service)</span>
                </div>
                <div>
                  <span className="font-bold text-[#071A2A] block">Main Office:</span>
                  <span className="text-[#5F7183]">{companyData.corporateHeadquarters.fullAddress}</span>
                </div>
              </div>
            </div>

            {/* Fact Box */}
            <div className="lg:col-span-6 bg-[#F7FAFC] rounded-2xl p-5 lg:p-6 border border-[#DDE6ED] space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-[#DDE6ED]">
                <Image
                  src="/logo.png"
                  alt="Virtual Stack"
                  width={140}
                  height={65}
                  className="h-8 w-auto object-contain"
                />
                <span className="text-[11px] font-semibold text-[#071A2A] bg-white px-2.5 py-0.5 rounded-full border border-[#DDE6ED]">
                  Operating Since 2011
                </span>
              </div>
              <h3 className="text-base sm:text-lg font-bold text-[#071A2A] font-heading">
                Verified Operational Infrastructure
              </h3>
              <div className="space-y-2.5 text-xs text-[#5F7183]">
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#08A9E6] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#071A2A]">200+ Workstation Capacity:</strong> Fully equipped dual-monitor
                    workstations configured to each client’s technical specifications.
                  </div>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#08A9E6] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#071A2A]">24/7/365 Continuity:</strong> Multi-shift operations providing
                    continuous live coverage across all North American time zones.
                  </div>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#08A9E6] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#071A2A]">Biometric Physical Security:</strong> Access to the operations
                    floor is restricted via biometric controls with full CCTV monitoring.
                  </div>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#08A9E6] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#071A2A]">Licensed Cloud VOIP:</strong> 100% cloud telephony infrastructure
                    with encrypted trunks and real-time QA recording.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Slide 3: Core Company Values */}
      <section className="h-screen h-[100dvh] min-h-screen min-h-[100dvh] w-full snap-start snap-always flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 pt-18 sm:pt-22 pb-6 relative z-10 overflow-y-auto sm:overflow-visible bg-[#F7FAFC] border-b border-[#DDE6ED]">
        <div className="my-auto w-full max-w-7xl mx-auto space-y-6">
          <div className="text-center max-w-2xl mx-auto space-y-1">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#071A2A] font-heading">
              The values that drive our team daily.
            </h2>
            <p className="text-xs sm:text-sm text-[#5F7183]">
              Four non-negotiable principles underpinning every client engagement and customer interaction.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {values.map((v, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl p-5 border border-[#DDE6ED] shadow-xs space-y-2.5"
              >
                <div className="p-2 rounded-lg bg-[#EBF7FD] w-fit">
                  {v.icon}
                </div>
                <h3 className="text-sm sm:text-base font-bold text-[#071A2A] font-heading">{v.title}</h3>
                <p className="text-xs text-[#5F7183] leading-relaxed">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Slide 4: Corporate Contact & Location Card */}
      <section className="h-screen h-[100dvh] min-h-screen min-h-[100dvh] w-full snap-start snap-always flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 pt-18 sm:pt-22 pb-6 relative z-10 overflow-y-auto sm:overflow-visible bg-white border-b border-[#DDE6ED]">
        <div className="my-auto w-full max-w-4xl mx-auto">
          <div className="bg-[#071A2A] text-white rounded-3xl p-6 sm:p-8 shadow-xl space-y-5">
            <div className="space-y-1">
              <h3 className="text-xl sm:text-2xl font-extrabold text-white font-heading">
                Main Office & Corporate Operations
              </h3>
              <p className="text-xs text-[#94A3B8]">
                Virtual Stack operates its main office in Calgary, with multi-timezone delivery infrastructure.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 pt-4 border-t border-[#1E3347] text-xs text-[#94A3B8]">
              <div className="space-y-1">
                <span className="font-bold text-white flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#08A9E6]" />
                  Main Office
                </span>
                <p className="leading-relaxed text-white">
                  {companyData.corporateHeadquarters.fullAddress}
                </p>
              </div>

              <div className="space-y-1">
                <span className="font-bold text-white flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-[#08A9E6]" />
                  Telephone
                </span>
                <p className="text-white font-semibold">{companyData.contacts.tollFreeDisplay}</p>
                <p className="text-[11px] text-[#94A3B8]">Toll-Free, Available 24/7</p>
              </div>

              <div className="space-y-1">
                <span className="font-bold text-white flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-[#08A9E6]" />
                  Email Contact
                </span>
                <p className="text-white">{companyData.contacts.email}</p>
                <p className="text-[11px] text-[#94A3B8]">Inquiries answered &lt; 2 hrs</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Slide 5: Closing CTA */}
      <FinalCTA />

      {/* Slide 6: Dedicated Footer Snap Slide */}
      <div className="about-snap-section w-full snap-start snap-always min-h-[100dvh] h-[100dvh] bg-[#071A2A] flex flex-col justify-between overflow-y-auto">
        <Footer />
      </div>
    </div>
  );
}
