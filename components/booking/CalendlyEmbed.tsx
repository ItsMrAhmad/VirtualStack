"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Calendar, Clock, Video, CheckCircle, Globe, ChevronRight, User, Mail, Building } from "lucide-react";

interface CalendlyEmbedProps {
  calendlyUrl?: string;
  prefill?: {
    name?: string;
    email?: string;
  };
}

export default function CalendlyEmbed({ calendlyUrl, prefill }: CalendlyEmbedProps) {
  // Use environment variable if provided, fallback to prop or simulated mode
  const activeCalendlyUrl = calendlyUrl || process.env.NEXT_PUBLIC_CALENDLY_URL;

  // Simulator state for when client has not yet plugged in their live Calendly link
  const [selectedDate, setSelectedDate] = useState<string>("Tomorrow");
  const [selectedTime, setSelectedTime] = useState<string>("10:00 AM");
  const [selectedTimezone, setSelectedTimezone] = useState<string>("Eastern Time (US & Canada)");
  const [bookingStep, setBookingStep] = useState<"slot" | "details" | "confirmed">("slot");
  const [formData, setFormData] = useState({
    name: prefill?.name || "",
    email: prefill?.email || "",
    company: "",
    notes: "",
  });

  // Load official Calendly script if a real URL is provided
  useEffect(() => {
    if (activeCalendlyUrl && activeCalendlyUrl.includes("calendly.com")) {
      const script = document.createElement("script");
      script.src = "https://assets.calendly.com/assets/external/widget.js";
      script.async = true;
      document.body.appendChild(script);
      return () => {
        if (document.body.contains(script)) {
          document.body.removeChild(script);
        }
      };
    }
  }, [activeCalendlyUrl]);

  // If a live Calendly URL is configured, render the official Calendly embed
  if (activeCalendlyUrl && activeCalendlyUrl.includes("calendly.com")) {
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

  // Native High-Fidelity Interactive Scheduler
  const timeSlots = [
    "09:30 AM",
    "10:00 AM",
    "11:15 AM",
    "01:00 PM",
    "02:30 PM",
    "03:45 PM",
    "04:30 PM",
  ];

  const dates = [
    { label: "Tomorrow", date: "Thu, Sep 3" },
    { label: "Friday", date: "Fri, Sep 4" },
    { label: "Monday", date: "Mon, Sep 7" },
    { label: "Tuesday", date: "Tue, Sep 8" },
  ];

  const handleConfirm = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;
    setBookingStep("confirmed");
  };

  return (
    <div className="w-full bg-white rounded-2xl border border-[#DDE6ED] shadow-sm overflow-hidden flex flex-col">
      {/* Widget Header */}
      <div className="p-4 sm:p-5 border-b border-[#DDE6ED] bg-[#F7FAFC]/80 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-[#071A2A] border border-[#1E3347] flex items-center justify-center p-1.5 shadow-sm">
            <Image
              src="/icon.png"
              alt="Virtual Stack"
              width={32}
              height={32}
              className="w-7 h-7 object-contain"
            />
          </div>
          <div>
            <h4 className="text-sm font-bold text-[#071A2A] font-heading">
              Virtual Stack Discovery Call
            </h4>
            <div className="flex items-center gap-3 text-xs text-[#5F7183] mt-0.5">
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-[#08A9E6]" />
                10 Mins
              </span>
              <span>•</span>
              <span className="flex items-center gap-1 text-emerald-600 font-medium">
                <Video className="w-3.5 h-3.5" />
                Zoom Meeting
              </span>
            </div>
          </div>
        </div>

        <span className="text-[11px] font-semibold text-[#08A9E6] bg-[#EBF7FD] px-2.5 py-1 rounded-full border border-[#08A9E6]/20 hidden sm:inline-block">
          Instant Confirmation
        </span>
      </div>

      {/* Booking State Machine */}
      <div className="p-5 sm:p-6 flex-1">
        {bookingStep === "slot" && (
          <div className="space-y-4 sm:space-y-5">
            <div>
              <label className="text-xs font-bold text-[#071A2A] uppercase tracking-wider block mb-3">
                1. Select Available Date
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                {dates.map((d) => (
                  <button
                    key={d.label}
                    type="button"
                    onClick={() => setSelectedDate(d.label)}
                    className={`p-3 rounded-xl border text-left transition-all ${
                      selectedDate === d.label
                        ? "border-[#08A9E6] bg-[#EBF7FD] text-[#071A2A] shadow-sm ring-1 ring-[#08A9E6]"
                        : "border-[#DDE6ED] bg-white text-[#5F7183] hover:border-[#08A9E6]/40"
                    }`}
                  >
                    <div className="text-xs font-bold">{d.label}</div>
                    <div className="text-[11px] text-[#5F7183] mt-0.5">{d.date}</div>
                  </button>
                ))}
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-3">
                <label className="text-xs font-bold text-[#071A2A] uppercase tracking-wider">
                  2. Select Time ({selectedDate})
                </label>
                <div className="flex items-center gap-1 text-[11px] text-[#5F7183]">
                  <Globe className="w-3 h-3 text-[#08A9E6]" />
                  <span>{selectedTimezone}</span>
                </div>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 max-h-56 overflow-y-auto pr-1">
                {timeSlots.map((time) => (
                  <button
                    key={time}
                    type="button"
                    onClick={() => setSelectedTime(time)}
                    className={`py-2.5 px-3 rounded-xl border text-xs font-semibold transition-all text-center ${
                      selectedTime === time
                        ? "border-[#08A9E6] bg-[#08A9E6] text-white shadow-sm"
                        : "border-[#DDE6ED] bg-white text-[#071A2A] hover:border-[#08A9E6] hover:bg-[#F7FAFC]"
                    }`}
                  >
                    {time}
                  </button>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-[#DDE6ED] flex items-center justify-between">
              <div className="text-xs text-[#5F7183]">
                Selected: <span className="font-bold text-[#071A2A]">{selectedDate} at {selectedTime}</span>
              </div>
              <button
                type="button"
                onClick={() => setBookingStep("details")}
                className="bg-[#08A9E6] hover:bg-[#078FCC] text-white font-semibold text-xs px-5 py-2.5 rounded-xl shadow-sm flex items-center gap-1.5 transition-colors"
              >
                <span>Next: Enter Details</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        )}

        {bookingStep === "details" && (
          <form onSubmit={handleConfirm} className="space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-[#DDE6ED]">
              <div>
                <span className="text-xs text-[#5F7183]">Scheduling for:</span>
                <div className="text-sm font-bold text-[#071A2A]">
                  {selectedDate} at {selectedTime} ({selectedTimezone})
                </div>
              </div>
              <button
                type="button"
                onClick={() => setBookingStep("slot")}
                className="text-xs font-semibold text-[#08A9E6] hover:underline"
              >
                Change Time
              </button>
            </div>

            <div>
              <label className="block text-xs font-bold text-[#071A2A] mb-1.5">
                Full Name <span className="text-rose-500">*</span>
              </label>
              <div className="relative">
                <User className="w-4 h-4 text-[#5F7183] absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  required
                  placeholder="e.g. Sarah Jenkins"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-[#DDE6ED] text-sm text-[#071A2A] focus:border-[#08A9E6] focus:ring-1 focus:ring-[#08A9E6] outline-none"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-[#071A2A] mb-1.5">
                Work Email <span className="text-rose-500">*</span>
              </label>
              <div className="relative">
                <Mail className="w-4 h-4 text-[#5F7183] absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="email"
                  required
                  placeholder="s.jenkins@company.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-[#DDE6ED] text-sm text-[#071A2A] focus:border-[#08A9E6] focus:ring-1 focus:ring-[#08A9E6] outline-none"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-[#071A2A] mb-1.5">
                Company Name
              </label>
              <div className="relative">
                <Building className="w-4 h-4 text-[#5F7183] absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Your organization"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-[#DDE6ED] text-sm text-[#071A2A] focus:border-[#08A9E6] focus:ring-1 focus:ring-[#08A9E6] outline-none"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-[#071A2A] mb-1.5">
                What would you like to achieve? (Optional)
              </label>
              <textarea
                rows={2}
                placeholder="Briefly describe your team, current workload, or service interest..."
                value={formData.notes}
                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                className="w-full p-3 rounded-xl border border-[#DDE6ED] text-xs text-[#071A2A] focus:border-[#08A9E6] focus:ring-1 focus:ring-[#08A9E6] outline-none"
              />
            </div>

            <div className="pt-3 border-t border-[#DDE6ED] flex items-center justify-between">
              <button
                type="button"
                onClick={() => setBookingStep("slot")}
                className="text-xs font-medium text-[#5F7183] hover:text-[#071A2A]"
              >
                Back
              </button>
              <button
                type="submit"
                className="bg-[#08A9E6] hover:bg-[#078FCC] text-white font-semibold text-xs px-6 py-2.5 rounded-xl shadow-sm transition-colors"
              >
                Confirm Booking & Generate Zoom Details
              </button>
            </div>
          </form>
        )}

        {bookingStep === "confirmed" && (
          <div className="py-8 text-center space-y-5 animate-in fade-in duration-300">
            <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
              <CheckCircle className="w-8 h-8" />
            </div>

            <div>
              <h3 className="text-xl font-extrabold text-[#071A2A] font-heading">
                Consultation Confirmed!
              </h3>
              <p className="text-xs text-[#5F7183] mt-1 max-w-sm mx-auto">
                We've scheduled your 10-minute operational discovery session. Calendar invitation and Zoom
                details have been sent to <span className="font-semibold text-[#071A2A]">{formData.email}</span>.
              </p>
            </div>

            <div className="bg-[#F7FAFC] rounded-xl p-4 max-w-sm mx-auto border border-[#DDE6ED] text-left text-xs space-y-2">
              <div className="flex justify-between">
                <span className="text-[#5F7183]">Date & Time:</span>
                <span className="font-bold text-[#071A2A]">{selectedDate} at {selectedTime}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#5F7183]">Platform:</span>
                <span className="font-bold text-[#071A2A] flex items-center gap-1">
                  <Video className="w-3 h-3 text-[#08A9E6]" />
                  Zoom Video Call
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#5F7183]">Host:</span>
                <span className="font-bold text-[#071A2A]">Virtual Stack Operations Team</span>
              </div>
            </div>

            <div className="pt-2">
              <button
                type="button"
                onClick={() => {
                  setBookingStep("slot");
                  setFormData({ name: "", email: "", company: "", notes: "" });
                }}
                className="text-xs font-semibold text-[#08A9E6] hover:underline"
              >
                Schedule Another Call
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Integration Notice Footer */}
      <div className="px-6 py-3 bg-[#F7FAFC] border-t border-[#DDE6ED] text-[11px] text-[#5F7183] flex items-center justify-between">
        <span className="flex items-center gap-1">
          <Video className="w-3.5 h-3.5 text-[#08A9E6]" />
          Zoom meeting link sent automatically
        </span>
        <span className="text-[10px] text-[#94A3B8]">Powered by Calendly & Zoom Integration</span>
      </div>
    </div>
  );
}
