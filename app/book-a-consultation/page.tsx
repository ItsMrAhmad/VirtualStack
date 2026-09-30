import React from "react";
import type { Metadata } from "next";
import BookingCard from "@/components/booking/BookingCard";
import CalendlyEmbed from "@/components/booking/CalendlyEmbed";

import Footer from "@/components/layout/Footer";

import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Book a Free Consultation",
  description:
    "Schedule a 10-minute scoping call with Virtual Stack leadership to discuss customer support, back-office operations, fleet dispatch, and custom pricing.",
  path: "/book-a-consultation",
});

export default function BookAConsultationPage() {
  return (
    <div
      id="booking-scroll-container"
      tabIndex={0}
      className="snap-none md:h-[100dvh] md:overflow-y-scroll md:snap-y md:snap-mandatory scroll-smooth relative bg-[#F7FAFC] text-[#0B1724] outline-none"
    >
      <link rel="preconnect" href="https://assets.calendly.com" />
      <link rel="preconnect" href="https://calendly.com" />
      {/* Slide 1: Discovery & Calendly Embed */}
      <section className="min-h-[100dvh] md:h-[100dvh] w-full md:snap-start md:snap-always flex flex-col justify-start lg:justify-center items-center px-4 sm:px-6 lg:px-8 py-6 sm:py-8 relative z-10 overflow-y-auto bg-[#F7FAFC] border-b border-[#DDE6ED]">
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
      <div className="booking-snap-section w-full md:snap-start md:snap-always min-h-[100dvh] h-[100dvh] bg-[#071A2A] flex flex-col justify-between overflow-y-auto">
        <Footer />
      </div>
    </div>
  );
}
