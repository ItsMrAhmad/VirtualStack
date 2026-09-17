import React from "react";
import { CheckCircle2, Phone, Mail, MapPin, Video, Clock, ShieldCheck } from "lucide-react";
import { companyData } from "@/lib/data/company";

export default function BookingCard() {
  const agendaItems = [
    {
      title: "Evaluate Your Workflow",
      desc: "We analyze your recurring tasks, channel volume, and operational friction points.",
    },
    {
      title: "Determine Staffing & Skill Profiles",
      desc: "Identify whether dedicated full-time pods or shared queue coverage fits best.",
    },
    {
      title: "System & Tool Integration Review",
      desc: "Confirm compatibility with your CRM, ticketing systems, ERP, or TMS.",
    },
    {
      title: "Transparent Cost & Timeline Proposal",
      desc: "Review fixed, predictable monthly pricing and an actionable 1-to-2 week ramp plan.",
    },
  ];

  return (
    <div className="space-y-4 sm:space-y-5">
      {/* Title & Tagline */}
      <div className="space-y-1.5">
        <h1 className="text-2xl sm:text-3xl font-extrabold text-[#071A2A] tracking-tight font-heading leading-tight">
          Book a Free Consultation
        </h1>

        <p className="text-xs sm:text-sm text-[#5F7183] leading-relaxed">
          Tell us what you&apos;re looking to achieve and choose a time that works for you. We&apos;ll examine your
          operational requirements and outline a reliable path to scale.
        </p>
      </div>

      {/* What to Expect in Call */}
      <div className="space-y-2.5">
        <h4 className="text-xs font-bold text-[#071A2A] uppercase tracking-wider font-heading">
          What we cover in this session:
        </h4>
        <div className="space-y-2">
          {agendaItems.map((item, idx) => (
            <div key={idx} className="flex items-start gap-2.5">
              <div className="p-1 rounded-md bg-[#EBF7FD] text-[#08A9E6] shrink-0 mt-0.5">
                <CheckCircle2 className="w-3.5 h-3.5" />
              </div>
              <div>
                <div className="text-xs sm:text-sm font-bold text-[#071A2A]">{item.title}</div>
                <div className="text-xs text-[#5F7183] leading-relaxed">{item.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Platform & Reassurance Box */}
      <div className="p-3.5 rounded-xl bg-[#F7FAFC] border border-[#DDE6ED] space-y-1.5">
        <div className="flex items-center gap-2 text-xs font-bold text-[#071A2A]">
          <Video className="w-3.5 h-3.5 text-[#08A9E6]" />
          <span>Zoom Video Meeting</span>
        </div>
        <p className="text-xs text-[#5F7183] leading-relaxed">
          Once booked, a calendar invitation with secure Zoom meeting details will be sent directly to your
          work email. Zero software downloads required.
        </p>
      </div>

      {/* Direct Verified Contacts */}
      <div className="pt-3 border-t border-[#DDE6ED] space-y-2">
        <div className="text-[11px] font-bold text-[#071A2A] uppercase tracking-wider">
          Prefer to speak immediately?
        </div>
        <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 text-xs text-[#5F7183]">
          <div className="flex items-center gap-1.5">
            <Phone className="w-3.5 h-3.5 text-[#08A9E6]" />
            <a
              href={`tel:${companyData.contacts.tollFreePhone}`}
              className="font-semibold text-[#071A2A] hover:text-[#08A9E6] transition-colors"
            >
              {companyData.contacts.tollFreeDisplay} (24/7)
            </a>
          </div>
          <div className="flex items-center gap-1.5">
            <Mail className="w-3.5 h-3.5 text-[#08A9E6]" />
            <a
              href={`mailto:${companyData.contacts.email}`}
              className="hover:text-[#08A9E6] transition-colors"
            >
              {companyData.contacts.email}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
