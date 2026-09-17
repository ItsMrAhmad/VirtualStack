"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Calendar, ShieldCheck, Phone, Mail } from "lucide-react";
import { companyData } from "@/lib/data/company";

export default function ConsultationForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    serviceInterest: "Customer Support",
    companySize: "11-50 employees",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");

    // Simulate submission
    setTimeout(() => {
      setStatus("success");
    }, 800);
  };

  if (status === "success") {
    return (
      <div className="bg-white rounded-2xl border border-[#DDE6ED] p-8 sm:p-10 shadow-sm text-center space-y-6">
        <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
          <CheckCircle2 className="w-8 h-8" />
        </div>

        <div className="space-y-2">
          <h3 className="text-2xl font-extrabold text-[#071A2A] font-heading">
            Inquiry Received!
          </h3>
          <p className="text-sm text-[#5F7183] max-w-md mx-auto">
            Thank you, <span className="font-semibold text-[#071A2A]">{formData.name}</span>. An operations specialist
            will review your inquiry and reach out within 2 business hours.
          </p>
        </div>

        {/* Prompt to book directly via Calendly */}
        <div className="bg-[#EBF7FD] rounded-xl p-6 border border-[#08A9E6]/30 max-w-md mx-auto space-y-3">
          <div className="flex items-center justify-center gap-2 text-sm font-bold text-[#071A2A]">
            <Calendar className="w-4 h-4 text-[#08A9E6]" />
            <span>Prefer to schedule directly right now?</span>
          </div>
          <p className="text-xs text-[#5F7183]">
            Pick a convenient time on our live calendar and receive a Zoom meeting invitation instantly.
          </p>
          <Link
            href="/book-a-consultation"
            className="inline-flex items-center justify-center gap-2 w-full bg-[#08A9E6] hover:bg-[#078FCC] text-white text-xs font-semibold py-2.5 px-4 rounded-lg shadow-sm transition-colors"
          >
            <span>Book a 10-Min Zoom Consultation →</span>
          </Link>
        </div>

        <div>
          <button
            type="button"
            onClick={() => {
              setStatus("idle");
              setFormData({
                name: "",
                email: "",
                company: "",
                phone: "",
                serviceInterest: "Customer Support",
                companySize: "11-50 employees",
                message: "",
              });
            }}
            className="text-xs font-semibold text-[#5F7183] hover:text-[#071A2A] underline"
          >
            Submit another message
          </button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-2xl border border-[#DDE6ED] p-5 sm:p-8 shadow-sm space-y-3.5 sm:space-y-4.5">
      <div className="border-b border-[#DDE6ED] pb-3.5 space-y-1">
        <h3 className="text-xl font-bold text-[#071A2A] font-heading tracking-tight">
          Send an Inquiry
        </h3>
        <p className="text-xs text-[#5F7183] leading-relaxed">
          Complete this short form and an operations manager will contact you promptly.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4 pt-1">
        <div>
          <label htmlFor="inquiry-full-name" className="block text-xs font-bold text-[#071A2A] mb-1.5">
            Full Name <span className="text-rose-500">*</span>
          </label>
          <input
            id="inquiry-full-name"
            type="text"
            required
            aria-required="true"
            placeholder="Sarah Jenkins"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full px-3.5 py-2.5 rounded-xl border border-[#DDE6ED] text-sm text-[#071A2A] focus:border-[#08A9E6] focus:ring-1 focus:ring-[#08A9E6] outline-none transition-colors"
          />
        </div>

        <div>
          <label htmlFor="inquiry-work-email" className="block text-xs font-bold text-[#071A2A] mb-1.5">
            Work Email <span className="text-rose-500">*</span>
          </label>
          <input
            id="inquiry-work-email"
            type="email"
            required
            aria-required="true"
            placeholder="s.jenkins@company.com"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full px-3.5 py-2.5 rounded-xl border border-[#DDE6ED] text-sm text-[#071A2A] focus:border-[#08A9E6] focus:ring-1 focus:ring-[#08A9E6] outline-none transition-colors"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
        <div>
          <label htmlFor="inquiry-company-name" className="block text-xs font-bold text-[#071A2A] mb-1.5">
            Company Name <span className="text-rose-500">*</span>
          </label>
          <input
            id="inquiry-company-name"
            type="text"
            required
            aria-required="true"
            placeholder="Acme Logistics Inc."
            value={formData.company}
            onChange={(e) => setFormData({ ...formData, company: e.target.value })}
            className="w-full px-3.5 py-2.5 rounded-xl border border-[#DDE6ED] text-sm text-[#071A2A] focus:border-[#08A9E6] focus:ring-1 focus:ring-[#08A9E6] outline-none transition-colors"
          />
        </div>

        <div>
          <label htmlFor="inquiry-phone" className="block text-xs font-bold text-[#071A2A] mb-1.5">
            Phone Number
          </label>
          <input
            id="inquiry-phone"
            type="tel"
            placeholder="+1 (555) 000-0000"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            className="w-full px-3.5 py-2.5 rounded-xl border border-[#DDE6ED] text-sm text-[#071A2A] focus:border-[#08A9E6] focus:ring-1 focus:ring-[#08A9E6] outline-none transition-colors"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
        <div>
          <label htmlFor="inquiry-service-interest" className="block text-xs font-bold text-[#071A2A] mb-1.5">
            What do you need help with?
          </label>
          <select
            id="inquiry-service-interest"
            value={formData.serviceInterest}
            onChange={(e) => setFormData({ ...formData, serviceInterest: e.target.value })}
            className="w-full px-3.5 py-2.5 rounded-xl border border-[#DDE6ED] text-sm text-[#071A2A] bg-white focus:border-[#08A9E6] focus:ring-1 focus:ring-[#08A9E6] outline-none transition-colors"
          >
            <option value="Customer Support">Customer Support / Call Center</option>
            <option value="Back Office">Back Office / Data Operations</option>
            <option value="Sales & Growth">Sales Support & Lead Generation</option>
            <option value="Dedicated Teams">Dedicated Remote Teams</option>
            <option value="Dispatch & Logistics">Dispatch & Logistics Support (Save up to 60%)</option>
            <option value="Other">Other Custom Workflow</option>
          </select>
        </div>

        <div>
          <label htmlFor="inquiry-company-size" className="block text-xs font-bold text-[#071A2A] mb-1.5">
            Company Size
          </label>
          <select
            id="inquiry-company-size"
            value={formData.companySize}
            onChange={(e) => setFormData({ ...formData, companySize: e.target.value })}
            className="w-full px-3.5 py-2.5 rounded-xl border border-[#DDE6ED] text-sm text-[#071A2A] bg-white focus:border-[#08A9E6] focus:ring-1 focus:ring-[#08A9E6] outline-none transition-colors"
          >
            <option value="1-10 employees">1–10 employees</option>
            <option value="11-50 employees">11–50 employees</option>
            <option value="51-200 employees">51–200 employees</option>
            <option value="200+ employees">200+ employees</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="inquiry-message" className="block text-xs font-bold text-[#071A2A] mb-1.5">
          Tell us about your requirements
        </label>
        <textarea
          id="inquiry-message"
          rows={3}
          placeholder="Describe your current challenge, required hours, or specific workflow needs..."
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className="w-full px-3.5 py-2.5 rounded-xl border border-[#DDE6ED] text-sm text-[#071A2A] focus:border-[#08A9E6] focus:ring-1 focus:ring-[#08A9E6] outline-none transition-colors"
        />
      </div>

      <div className="pt-1.5">
        <button
          type="submit"
          disabled={status === "submitting"}
          className="w-full bg-[#08A9E6] hover:bg-[#078FCC] text-white font-semibold text-sm py-3 px-6 rounded-xl shadow-md transition-colors flex items-center justify-center gap-2 group cursor-pointer"
        >
          <span>{status === "submitting" ? "Sending..." : "Talk to an Expert →"}</span>
        </button>
      </div>

      <div className="flex items-center justify-between text-[11px] text-[#5F7183] pt-1">
        <span className="flex items-center gap-1">
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
          Strict NDA protected
        </span>
        <span>Average response: &lt; 2 hours</span>
      </div>
    </form>
  );
}
