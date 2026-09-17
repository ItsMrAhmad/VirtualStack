import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import { HelpCircle, Calendar, ArrowRight, ShieldCheck, CheckCircle2, Lock, Cpu, Clock, DollarSign } from "lucide-react";
import { faqsData } from "@/lib/data/faqs";
import FinalCTA from "@/components/sections/FinalCTA";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Frequently Asked Questions | Virtual Stack",
  description:
    "Get clear answers to common questions about onboarding, security, pricing, and dedicated operational staffing with Virtual Stack.",
};

export default function FAQsPage() {
  const generalFaqs = faqsData.filter((f) => f.category === "General");
  const onboardingFaqs = faqsData.filter((f) => f.category === "Onboarding");
  const securityFaqs = faqsData.filter((f) => f.category === "Security");
  const operationsFaqs = faqsData.filter((f) => f.category === "Operations");
  const billingFaqs = faqsData.filter((f) => f.category === "Billing");

  return (
    <div
      id="faqs-scroll-container"
      tabIndex={0}
      className="h-screen h-[100dvh] overflow-y-scroll snap-y snap-mandatory scroll-smooth relative bg-white text-[#0B1724] outline-none"
    >
      {/* Slide 1: Hero & General Operations */}
      <section
        id="general"
        className="h-screen h-[100dvh] min-h-screen min-h-[100dvh] w-full snap-start snap-always flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 pt-18 sm:pt-22 pb-6 relative z-10 overflow-y-auto sm:overflow-visible bg-gradient-to-b from-[#F7FAFC] to-white border-b border-[#DDE6ED]"
      >
        <div className="my-auto w-full max-w-4xl mx-auto space-y-6">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#071A2A] tracking-tight font-heading">
              Clear answers about partnering with us.
            </h1>
            <p className="text-xs sm:text-sm text-[#5F7183] leading-relaxed">
              Everything you need to know about our operational delivery, data security controls, onboarding
              timelines, and transparent pricing.
            </p>

            {/* Quick jump pills */}
            <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
              <a
                href="#onboarding"
                className="text-xs font-semibold px-3 py-1.5 rounded-full bg-white hover:bg-[#EBF7FD] text-[#071A2A] hover:text-[#08A9E6] border border-[#DDE6ED] transition-colors"
              >
                Onboarding
              </a>
              <a
                href="#security"
                className="text-xs font-semibold px-3 py-1.5 rounded-full bg-white hover:bg-[#EBF7FD] text-[#071A2A] hover:text-[#08A9E6] border border-[#DDE6ED] transition-colors"
              >
                Security & Compliance
              </a>
              <a
                href="#operations"
                className="text-xs font-semibold px-3 py-1.5 rounded-full bg-white hover:bg-[#EBF7FD] text-[#071A2A] hover:text-[#08A9E6] border border-[#DDE6ED] transition-colors"
              >
                Operations & Systems
              </a>
              <a
                href="#billing"
                className="text-xs font-semibold px-3 py-1.5 rounded-full bg-white hover:bg-[#EBF7FD] text-[#071A2A] hover:text-[#08A9E6] border border-[#DDE6ED] transition-colors"
              >
                Pricing & Billing
              </a>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-2 pb-1 border-b border-[#DDE6ED]">
              <span className="w-2.5 h-2.5 rounded-full bg-[#08A9E6]" />
              <h2 className="text-sm font-bold uppercase tracking-wider text-[#071A2A] font-heading">
                General Operations
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {generalFaqs.map((faq, idx) => (
                <div
                  key={idx}
                  className="p-5 sm:p-6 rounded-2xl bg-[#F7FAFC] border border-[#DDE6ED] space-y-2.5 hover:border-[#08A9E6]/50 transition-colors"
                >
                  <h3 className="text-sm sm:text-base font-bold text-[#071A2A] font-heading flex items-start gap-2.5">
                    <HelpCircle className="w-4 h-4 text-[#08A9E6] shrink-0 mt-0.5" />
                    <span>{faq.question}</span>
                  </h3>
                  <p className="text-xs sm:text-sm text-[#5F7183] leading-relaxed pl-6.5">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Slide 2: Onboarding & Deployment */}
      <section
        id="onboarding"
        className="h-screen h-[100dvh] min-h-screen min-h-[100dvh] w-full snap-start snap-always flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 pt-18 sm:pt-22 pb-6 relative z-10 overflow-y-auto sm:overflow-visible bg-white border-b border-[#DDE6ED]"
      >
        <div className="my-auto w-full max-w-4xl mx-auto space-y-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#08A9E6]" />
              <h2 className="text-xl sm:text-2xl font-bold text-[#071A2A] font-heading">
                Onboarding & Dedicated Pods
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-[#5F7183]">
              How we vet, interview, and transition your workflows in 14 business days.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {onboardingFaqs.map((faq, idx) => (
              <div
                key={idx}
                className="p-6 sm:p-7 rounded-2xl bg-[#F7FAFC] border border-[#DDE6ED] space-y-3 hover:border-[#08A9E6]/60 transition-colors"
              >
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-xl bg-[#EBF7FD] flex items-center justify-center text-[#08A9E6] font-bold text-xs">
                    0{idx + 1}
                  </div>
                  <h3 className="text-base font-bold text-[#071A2A] font-heading leading-snug">
                    {faq.question}
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-[#5F7183] leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>

          <div className="p-4 sm:p-5 rounded-2xl bg-[#EBF7FD]/60 border border-[#08A9E6]/30 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
            <div className="flex items-center gap-3">
              <Clock className="w-5 h-5 text-[#08A9E6] shrink-0 hidden sm:block" />
              <p className="text-xs sm:text-sm text-[#071A2A] font-medium">
                Fast-track onboarding available for critical enterprise queue coverage.
              </p>
            </div>
            <Link
              href="/book-a-consultation"
              className="text-xs font-bold text-[#08A9E6] hover:text-[#078FCC] hover:underline shrink-0 flex items-center gap-1"
            >
              <span>Explore timeline</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Slide 3: Enterprise Security & Compliance */}
      <section
        id="security"
        className="h-screen h-[100dvh] min-h-screen min-h-[100dvh] w-full snap-start snap-always flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 pt-18 sm:pt-22 pb-6 relative z-10 overflow-y-auto sm:overflow-visible bg-[#F7FAFC] border-b border-[#DDE6ED]"
      >
        <div className="my-auto w-full max-w-4xl mx-auto space-y-6">
          <div className="space-y-2 text-center max-w-xl mx-auto">
            <div className="flex items-center justify-center gap-2">
              <ShieldCheck className="w-5 h-5 text-[#08A9E6]" />
              <h2 className="text-xl sm:text-2xl font-bold text-[#071A2A] font-heading">
                Security & Data Integrity
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-[#5F7183]">
              SOC-grade controls, physical biometric perimeter access, and zero data leakage policies.
            </p>
          </div>

          {securityFaqs.map((faq, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-8 rounded-3xl bg-white border border-[#DDE6ED] space-y-4 shadow-sm"
            >
              <h3 className="text-base sm:text-lg font-bold text-[#071A2A] font-heading flex items-start gap-3">
                <Lock className="w-5 h-5 text-[#08A9E6] shrink-0 mt-0.5" />
                <span>{faq.question}</span>
              </h3>
              <p className="text-xs sm:text-sm text-[#5F7183] leading-relaxed pl-8">
                {faq.answer}
              </p>

              {/* 4 Security Badges */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 border-t border-[#DDE6ED]">
                {[
                  "Biometric Access",
                  "24/7 CCTV Monitoring",
                  "Disabled USB & Clean Desk",
                  "Encrypted Cloud VPN",
                ].map((item, bIdx) => (
                  <div
                    key={bIdx}
                    className="p-2.5 rounded-xl bg-[#F7FAFC] border border-[#DDE6ED] text-center"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#12C98A] mx-auto mb-1" />
                    <span className="text-[11px] font-semibold text-[#071A2A] block leading-tight">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Slide 4: Operations & Systems Integration */}
      <section
        id="operations"
        className="h-screen h-[100dvh] min-h-screen min-h-[100dvh] w-full snap-start snap-always flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 pt-18 sm:pt-22 pb-6 relative z-10 overflow-y-auto sm:overflow-visible bg-white border-b border-[#DDE6ED]"
      >
        <div className="my-auto w-full max-w-4xl mx-auto space-y-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Cpu className="w-5 h-5 text-[#08A9E6]" />
              <h2 className="text-xl sm:text-2xl font-bold text-[#071A2A] font-heading">
                Operational Delivery & Tech Stack
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-[#5F7183]">
              Seamless software integration and on-site supervisory backup for 99.9% uptime.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {operationsFaqs.map((faq, idx) => (
              <div
                key={idx}
                className="p-6 sm:p-7 rounded-2xl bg-[#F7FAFC] border border-[#DDE6ED] space-y-3 hover:border-[#08A9E6]/60 transition-colors"
              >
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-xl bg-[#EBF7FD] flex items-center justify-center text-[#08A9E6] font-bold text-xs">
                    {idx === 0 ? "STACK" : "SLA"}
                  </div>
                  <h3 className="text-base font-bold text-[#071A2A] font-heading leading-snug">
                    {faq.question}
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-[#5F7183] leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Slide 5: Transparent Billing & Custom Questions */}
      <section
        id="billing"
        className="h-screen h-[100dvh] min-h-screen min-h-[100dvh] w-full snap-start snap-always flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 pt-18 sm:pt-22 pb-6 relative z-10 overflow-y-auto sm:overflow-visible bg-[#F7FAFC] border-b border-[#DDE6ED]"
      >
        <div className="my-auto w-full max-w-4xl mx-auto space-y-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <DollarSign className="w-5 h-5 text-[#08A9E6]" />
              <h2 className="text-xl sm:text-2xl font-bold text-[#071A2A] font-heading">
                Transparent Pricing & Flexible Terms
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-[#5F7183]">
              Predictable month-to-month contracts with 50–65% cost savings and zero hidden fees.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {billingFaqs.map((faq, idx) => (
              <div
                key={idx}
                className="p-5 sm:p-6 rounded-2xl bg-white border border-[#DDE6ED] space-y-2 hover:border-[#08A9E6]/50 transition-colors"
              >
                <h3 className="text-sm sm:text-base font-bold text-[#071A2A] font-heading flex items-start gap-2">
                  <HelpCircle className="w-4 h-4 text-[#08A9E6] shrink-0 mt-0.5" />
                  <span>{faq.question}</span>
                </h3>
                <p className="text-xs sm:text-sm text-[#5F7183] leading-relaxed pl-6">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>

          {/* Unanswered Questions Box */}
          <div className="p-6 sm:p-7 rounded-2xl bg-[#EBF7FD] border border-[#08A9E6]/30 text-center space-y-3">
            <h3 className="text-base sm:text-lg font-bold text-[#071A2A] font-heading">
              Have a question not listed here?
            </h3>
            <p className="text-xs text-[#5F7183] max-w-md mx-auto">
              Our operations directors are available to answer your specific technical, legal, and operational
              questions directly.
            </p>
            <div className="pt-1">
              <Link
                href="/book-a-consultation"
                className="inline-flex items-center gap-2 bg-[#08A9E6] hover:bg-[#078FCC] text-white font-semibold text-xs px-5 py-2.5 rounded-xl shadow transition-colors"
              >
                <Calendar className="w-4 h-4" />
                <span>Ask an Expert in a Quick 20-Min Call</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Slide 6: Closing CTA */}
      <FinalCTA />

      {/* Slide 7: Footer */}
      <div className="faqs-snap-section w-full snap-start snap-always min-h-[100dvh] h-[100dvh] bg-[#071A2A] flex flex-col justify-between overflow-y-auto">
        <Footer />
      </div>
    </div>
  );
}
