"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Clock, Video, Phone, Mail, FileText, ArrowRight } from "lucide-react";
import { companyData } from "@/lib/data/company";

interface CalendlyEmbedProps {
  calendlyUrl?: string;
}

export default function CalendlyEmbed({ calendlyUrl }: CalendlyEmbedProps) {
  const activeCalendlyUrl = calendlyUrl || process.env.NEXT_PUBLIC_CALENDLY_URL;
  const hasCalendly = Boolean(activeCalendlyUrl && activeCalendlyUrl.includes("calendly.com"));

  // Load the official Calendly script only when a real scheduling link is configured
  useEffect(() => {
    if (!hasCalendly) return;
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, [hasCalendly]);

  if (hasCalendly) {
    return (
      <div className="w-full bg-white rounded-2xl border border-[#DDE6ED] shadow-sm p-2 sm:p-4 overflow-hidden min-h-[680px]">
        <div
          className="calendly-inline-widget w-full"
          data-url={`${activeCalendlyUrl}?hide_landing_page_details=1&hide_gdpr_banner=1&primary_color=08a8e8`}
          style={{ minWidth: "320px", height: "680px" }}
        />
      </div>
    );
  }

  // No online scheduler configured yet: offer real ways to request the call instead of fake time slots.
  const requestSubject = encodeURIComponent("Consultation request: 10-minute Zoom call");
  const requestBody = encodeURIComponent(
    "Hi Virtual Stack team,\n\nI'd like to book a free 10-minute consultation.\n\nName:\nCompany:\nPhone:\nWhat we need help with:\n\nTimes that suit me (with time zone):\n1.\n2.\n\nThanks,"
  );

  const options = [
    {
      icon: Phone,
      title: "Call us now",
      desc: "Speak with our operations team immediately. Available 24/7/365.",
      cta: companyData.contacts.tollFreeDisplay,
      href: `tel:${companyData.contacts.tollFreePhone}`,
      primary: true,
    },
    {
      icon: Mail,
      title: "Request a Zoom time by email",
      desc: "Send two or three times that suit you and we'll reply with a Zoom invite.",
      cta: "Email a request",
      href: `mailto:${companyData.contacts.email}?subject=${requestSubject}&body=${requestBody}`,
      primary: false,
    },
    {
      icon: FileText,
      title: "Send your requirements",
      desc: "Share your workflow, hours and team size, and we'll come to the call prepared.",
      cta: "Open the scope form",
      href: "/contact#inquiry-form",
      primary: false,
      internal: true,
    },
  ];

  return (
    <div className="w-full bg-white rounded-2xl border border-[#DDE6ED] shadow-sm overflow-hidden flex flex-col">
      <div className="p-4 sm:p-5 border-b border-[#DDE6ED] bg-[#F7FAFC] flex items-center gap-3">
        <div className="w-10 h-10 rounded-xl bg-[#071A2A] border border-[#1E3347] flex items-center justify-center p-1.5 shadow-sm shrink-0">
          <Image src="/icon.png" alt="" width={32} height={32} className="w-7 h-7 object-contain" />
        </div>
        <div>
          <h2 className="text-sm font-bold text-[#071A2A] font-heading">Virtual Stack Discovery Call</h2>
          <div className="flex items-center gap-3 text-xs text-[#5F7183] mt-0.5">
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-[#08A9E6]" />
              10 Mins
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Video className="w-3.5 h-3.5 text-[#08A9E6]" />
              Zoom Meeting
            </span>
          </div>
        </div>
      </div>

      <div className="p-4 sm:p-6 space-y-3">
        <p className="text-xs sm:text-sm text-[#5F7183] leading-relaxed">
          Choose how you&apos;d like to reach us. We&apos;ll confirm your consultation and send the Zoom details to
          your work email.
        </p>

        {options.map((opt) => {
          const Icon = opt.icon;
          const className = `flex items-center justify-between gap-3 p-4 rounded-xl border transition-colors group ${
            opt.primary
              ? "bg-[#071A2A] border-[#071A2A] text-white hover:bg-[#0C1E30]"
              : "bg-[#F7FAFC] border-[#DDE6ED] hover:border-[#08A9E6]"
          }`;
          const content = (
            <>
              <div className="flex items-start gap-3">
                <div
                  className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 ${
                    opt.primary ? "bg-[#08A9E6] text-white" : "bg-[#EBF7FD] text-[#08A9E6]"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                </div>
                <div>
                  <div className={`text-sm font-bold ${opt.primary ? "text-white" : "text-[#071A2A]"}`}>
                    {opt.title}
                  </div>
                  <div className={`text-xs leading-relaxed ${opt.primary ? "text-[#94A3B8]" : "text-[#5F7183]"}`}>
                    {opt.desc}
                  </div>
                </div>
              </div>
              <span
                className={`text-xs font-bold whitespace-nowrap flex items-center gap-1 ${
                  opt.primary ? "text-white" : "text-[#08A9E6]"
                }`}
              >
                {opt.cta}
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </span>
            </>
          );

          return opt.internal ? (
            <Link key={opt.title} href={opt.href} className={className}>
              {content}
            </Link>
          ) : (
            <a key={opt.title} href={opt.href} className={className}>
              {content}
            </a>
          );
        })}
      </div>
    </div>
  );
}
