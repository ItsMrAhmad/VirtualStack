import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import { Phone, Mail, MapPin, Clock, ShieldCheck, Calendar, ArrowRight } from "lucide-react";
import { companyData } from "@/lib/data/company";
import ConsultationForm from "@/components/forms/ConsultationForm";

import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Contact Us & Inquiries",
  description:
    "Get in touch with Virtual Stack. Call +1 (888) 910-0868 or send an operational inquiry to discuss dedicated customer care, back-office operations, and remote teams.",
};

export default function ContactPage() {
  return (
    <div
      id="contact-scroll-container"
      tabIndex={0}
      className="h-screen h-[100dvh] overflow-y-scroll snap-y snap-mandatory scroll-smooth relative bg-white text-[#0B1724] outline-none"
    >
      {/* Slide 1: Direct Contact & Instant Scheduling */}
      <section className="h-screen h-[100dvh] min-h-screen min-h-[100dvh] w-full snap-start snap-always flex flex-col justify-start sm:justify-center items-center px-4 sm:px-6 lg:px-8 py-6 sm:py-8 relative z-10 overflow-y-auto bg-gradient-to-b from-[#F7FAFC] to-white border-b border-[#DDE6ED]">
        <div className="my-0 sm:my-auto w-full max-w-5xl mx-auto space-y-6">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#071A2A] tracking-tight font-heading">
              Let&apos;s discuss your operations.
            </h1>
            <p className="text-xs sm:text-sm text-[#5F7183] leading-relaxed">
              Have a question or looking to scope a new dedicated team? Our operations leadership is available
              around the clock.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-stretch">
            {/* Direct Booking Callout */}
            <div className="p-6 sm:p-7 rounded-2xl bg-[#071A2A] text-white shadow-lg space-y-4 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-xs font-semibold text-white/80">
                  <Calendar className="w-4 h-4 text-[#08A9E6]" />
                  <span>Direct Online Scheduling</span>
                </div>
                <h3 className="text-lg sm:text-xl font-bold font-heading">
                  Prefer to schedule directly?
                </h3>
                <p className="text-xs text-[#94A3B8] leading-relaxed">
                  Skip the back-and-forth email replies. Choose a convenient 10-minute slot on our live calendar
                  and receive a Zoom meeting invitation automatically.
                </p>
              </div>

              <div className="space-y-3 pt-2">
                <Link
                  href="/book-a-consultation"
                  className="inline-flex items-center justify-center gap-2 w-full bg-[#08A9E6] hover:bg-[#078FCC] text-white text-xs font-semibold py-3 px-4 rounded-xl shadow transition-colors"
                >
                  <span>Book Free Consultation on Zoom &rarr;</span>
                </Link>
                <a
                  href="#inquiry-form"
                  className="inline-flex items-center justify-center gap-2 w-full bg-white/10 hover:bg-white/15 text-white text-xs font-semibold py-2.5 px-4 rounded-xl transition-colors cursor-pointer"
                >
                  <span>Or Fill Out Detailed Scope Form &darr;</span>
                </a>
              </div>
            </div>

            {/* Verified Contact Details Card */}
            <div className="bg-white rounded-2xl p-6 sm:p-7 border border-[#DDE6ED] shadow-xs space-y-4 flex flex-col justify-between">
              <h3 className="text-sm sm:text-base font-bold text-[#071A2A] uppercase tracking-wider font-heading pb-2.5 border-b border-[#DDE6ED]">
                Verified Corporate Details
              </h3>

              <div className="space-y-3 text-xs sm:text-sm text-[#5F7183]">
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-[#08A9E6] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#071A2A] block text-xs">Main Office:</strong>
                    <span className="leading-relaxed text-xs">{companyData.corporateHeadquarters.fullAddress}</span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <Phone className="w-4 h-4 text-[#08A9E6] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#071A2A] block text-xs">Toll-Free Phone (24/7):</strong>
                    <a
                      href={`tel:${companyData.contacts.tollFreePhone}`}
                      className="text-[#08A9E6] font-bold hover:underline text-xs"
                    >
                      {companyData.contacts.tollFreeDisplay}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <Mail className="w-4 h-4 text-[#08A9E6] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#071A2A] block text-xs">Direct Email:</strong>
                    <a
                      href={`mailto:${companyData.contacts.email}`}
                      className="text-[#08A9E6] hover:underline text-xs"
                    >
                      {companyData.contacts.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <Clock className="w-4 h-4 text-[#08A9E6] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#071A2A] block text-xs">Operating Hours:</strong>
                    <span className="text-xs">{companyData.operatingHours}</span>
                  </div>
                </div>
              </div>

              <div className="p-2.5 rounded-lg bg-[#F7FAFC] border border-[#DDE6ED] flex items-center gap-2 text-[11px] text-[#5F7183]">
                <ShieldCheck className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Protected under mutual non-disclosure (NDA).</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Slide 2: Interactive Operational Inquiry Form */}
      <section
        id="inquiry-form"
        className="h-screen h-[100dvh] min-h-screen min-h-[100dvh] w-full snap-start snap-always flex flex-col justify-start sm:justify-center items-center px-4 sm:px-6 lg:px-8 py-6 sm:py-8 relative z-10 overflow-y-auto bg-[#F7FAFC] border-b border-[#DDE6ED]"
      >
        <div className="my-0 sm:my-auto w-full max-w-3xl mx-auto">
          <ConsultationForm />
        </div>
      </section>

      {/* Slide 3: Dedicated Footer Snap Slide */}
      <div className="contact-snap-section w-full snap-start snap-always min-h-[100dvh] h-[100dvh] bg-[#071A2A] flex flex-col justify-between overflow-y-auto">
        <Footer />
      </div>
    </div>
  );
}
