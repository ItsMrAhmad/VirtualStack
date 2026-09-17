import React from "react";
import type { Metadata } from "next";
import BookingCard from "@/components/booking/BookingCard";
import CalendlyEmbed from "@/components/booking/CalendlyEmbed";

import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Book a Free Consultation | Virtual Stack",
  description:
    "Schedule a consultation with Virtual Stack to discuss customer support, back-office operations, dedicated teams, and outsourcing solutions.",
  openGraph: {
    title: "Book a Free Consultation | Virtual Stack",
    description:
      "Schedule a consultation with Virtual Stack to discuss customer support, back-office operations, dedicated teams, and outsourcing solutions.",
    url: "https://virtualstack.us/book-a-consultation",
  },
};

export default function BookAConsultationPage() {
  return (
    <div
      id="booking-scroll-container"
      tabIndex={0}
      className="h-screen h-[100dvh] overflow-y-scroll snap-y snap-mandatory scroll-smooth relative bg-[#F7FAFC] text-[#0B1724] outline-none"
    >
      {/* Slide 1: Discovery & Calendly Embed */}
      <section className="h-screen h-[100dvh] min-h-screen min-h-[100dvh] w-full snap-start snap-always flex flex-col justify-start lg:justify-center items-center px-4 sm:px-6 lg:px-8 pt-24 sm:pt-28 lg:pt-28 pb-8 relative z-10 overflow-y-auto bg-[#F7FAFC] border-b border-[#DDE6ED]">
        <div className="w-full max-w-7xl mx-auto my-auto py-2">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
            {/* Left Column: Value Proposition & Expectations */}
            <div className="lg:col-span-5 bg-white rounded-2xl p-4 sm:p-5 lg:p-6 border border-[#DDE6ED] shadow-xs">
              <BookingCard />
            </div>

            {/* Right Column: Calendly + Zoom Embed */}
            <div className="lg:col-span-7">
              <CalendlyEmbed />
            </div>
          </div>
        </div>
      </section>

      {/* Slide 2: Dedicated Footer Snap Slide */}
      <div className="booking-snap-section w-full snap-start snap-always min-h-[100dvh] h-[100dvh] bg-[#071A2A] flex flex-col justify-between overflow-y-auto">
        <Footer />
      </div>
    </div>
  );
}
