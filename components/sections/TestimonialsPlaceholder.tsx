import React from "react";
import Link from "next/link";
import { Quote, Star, MapPin, ArrowRight } from "lucide-react";

export default function TestimonialsPlaceholder() {
  const testimonials = [
    {
      quote:
        "In the taxi business, an unanswered call is a lost customer. Virtual Stack stepped right into our dispatch software and handled every incoming call with patience and professionalism. My drivers are dispatched seamlessly, response times are faster than ever, and I finally have complete peace of mind.",
      author: "Bob Marsland",
      role: "Owner",
      company: "Fergus Elora Taxi",
      location: "Fergus & Elora, ON",
      country: "Canada",
      serviceScope: "24/7 Fleet Dispatch & Call Handling",
    },
    {
      quote:
        "Generating qualified B2B leads requires discipline every single day. Virtual Stack built a dedicated outreach pod that learned our ICP, mastered our CRM workflows, and started booking solid sales conversations within two weeks. Their daily transparency and reporting make them feel like an in-house team.",
      author: "Tab Cohen",
      role: "Owner",
      company: "Barco Leads",
      location: "United States",
      country: "USA",
      serviceScope: "B2B Lead Generation & Sales Prospecting",
    },
    {
      quote:
        "Reliability is everything when people are counting on a ride to work or medical appointments. Virtual Stack's dispatchers are polite, attentive, and incredibly quick at coordinating routes. Having dependable 24/7 coverage has significantly boosted our customer satisfaction without hiring headaches.",
      author: "Sunish Joseph",
      role: "Owner",
      company: "Leamington Taxi",
      location: "Leamington, ON",
      country: "Canada",
      serviceScope: "24/7 Passenger Dispatch & Customer Care",
    },
  ];

  return (
    <section
      id="testimonials"
      className="h-screen h-[100dvh] min-h-screen min-h-[100dvh] w-full snap-start snap-always flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 pt-18 sm:pt-22 pb-6 relative z-10 overflow-y-auto sm:overflow-visible bg-[#F7FAFC] border-b border-[#DDE6ED]"
    >
      <div className="my-auto w-full max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-5 sm:mb-6 space-y-1">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B1724] tracking-tight font-heading">
            Trusted by Business Owners Across North America
          </h2>
          <p className="text-xs sm:text-sm text-[#5F7183] leading-relaxed">
            Hear directly from company leaders who rely on Virtual Stack every day for mission-critical operations, fleet dispatch, and sales growth.
          </p>
        </div>

        {/* 3 Testimonial Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6">
          {testimonials.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl p-5 sm:p-6 border border-[#DDE6ED] shadow-xs hover:shadow-md transition-shadow duration-200 flex flex-col justify-between"
            >
              <div>
                {/* Top Bar: Stars + Country Pill */}
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-0.5">
                    {[...Array(5)].map((_, sIdx) => (
                      <Star key={sIdx} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#08A9E6] bg-[#EBF7FD] px-2 py-0.5 rounded-full">
                    <MapPin className="w-3 h-3" />
                    <span>{item.country}</span>
                  </span>
                </div>

                {/* Service Tag */}
                <div className="mb-3">
                  <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-[#5F7183] bg-[#F7FAFC] px-2 py-0.5 rounded-md border border-[#DDE6ED]">
                    {item.serviceScope}
                  </span>
                </div>

                {/* Quote Text */}
                <p className="text-xs sm:text-sm text-[#0B1724] leading-relaxed italic mb-4">
                  &ldquo;{item.quote}&rdquo;
                </p>
              </div>

              {/* Author & Business Attribution */}
              <div className="pt-3.5 border-t border-[#DDE6ED] flex items-center justify-between">
                <div>
                  <div className="font-bold text-[#071A2A] text-sm sm:text-base font-heading">
                    {item.author}
                  </div>
                  <div className="text-xs font-semibold text-[#08A9E6]">
                    {item.role}, {item.company}
                  </div>
                  <div className="text-[11px] text-[#5F7183] mt-0.5">
                    {item.location}
                  </div>
                </div>

                <div className="w-8 h-8 rounded-full bg-[#EBF7FD] flex items-center justify-center text-[#08A9E6] shrink-0">
                  <Quote className="w-4 h-4" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Consultation Callout */}
        <div className="mt-6 sm:mt-8 text-center">
          <p className="text-xs sm:text-sm text-[#5F7183]">
            Ready to streamline your operational workload?{" "}
            <Link
              href="/book-a-consultation"
              className="text-[#08A9E6] font-semibold hover:text-[#078FCC] hover:underline inline-flex items-center gap-1 transition-colors"
            >
              <span>Schedule your free consultation</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
