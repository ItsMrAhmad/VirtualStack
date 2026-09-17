import React from "react";
import Link from "next/link";
import { ArrowRight, MessageSquareCheck, Settings2, Rocket } from "lucide-react";

export default function HowItWorks() {
  const steps = [
    {
      number: "01",
      icon: <MessageSquareCheck className="w-6 h-6 text-[#08A9E6]" />,
      title: "Tell us what you need",
      description:
        "In a focused 20-minute discovery call, we review your current operational workload, tool stack, required hours, and target KPIs.",
      deliverable: "Custom operational assessment & transparent pricing matrix.",
    },
    {
      number: "02",
      icon: <Settings2 className="w-6 h-6 text-[#08A9E6]" />,
      title: "Build your solution",
      description:
        "We source or assign trained operational talent, map your SOP runbooks, integrate with your systems, and conduct supervised dry-run testing.",
      deliverable: "Validated knowledge base & certified operational team.",
    },
    {
      number: "03",
      icon: <Rocket className="w-6 h-6 text-[#08A9E6]" />,
      title: "Scale with confidence",
      description:
        "Your team goes live with dedicated supervisor oversight, transparent weekly reporting, and real-time SLA metrics that keep quality high.",
      deliverable: "Daily operational throughput & ongoing SLA governance.",
    },
  ];

  return (
    <section
      id="how-it-works"
      className="h-screen h-[100dvh] min-h-screen min-h-[100dvh] w-full snap-start snap-always flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 pt-18 sm:pt-22 pb-6 relative z-10 overflow-y-auto sm:overflow-visible bg-white border-b border-[#DDE6ED]"
    >
      <div className="my-auto w-full max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-6 sm:mb-8 space-y-1">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B1724] tracking-tight font-heading">
            How We Get Your Team Up and Running
          </h2>
          <p className="text-xs sm:text-sm text-[#5F7183] leading-relaxed">
            No complex months-long transitions. Our structured onboarding process ensures zero disruption to your daily customer and transactional operations.
          </p>
        </div>

        {/* 3 Step Flow */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6 relative">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="bg-[#F7FAFC] rounded-xl p-5 sm:p-6 border border-[#DDE6ED] shadow-xs relative flex flex-col justify-between hover:shadow-md transition-shadow"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="text-2xl sm:text-3xl font-black text-[#08A9E6] font-heading">
                    {step.number}
                  </div>
                  <div className="p-2.5 rounded-xl bg-[#EBF7FD]">
                    {step.icon}
                  </div>
                </div>

                <h3 className="text-base sm:text-lg font-bold text-[#0B1724] mb-2 font-heading">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#5F7183] leading-relaxed mb-4">
                  {step.description}
                </p>
              </div>

              <div className="pt-3 border-t border-[#DDE6ED] bg-white -mx-5 -mb-5 sm:-mx-6 sm:-mb-6 p-4 rounded-b-xl">
                <span className="text-[10px] sm:text-[11px] font-bold text-[#0B1724] uppercase tracking-wider block mb-0.5">
                  Deliverable:
                </span>
                <span className="text-xs text-[#5F7183] font-medium">
                  {step.deliverable}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* CTA below process */}
        <div className="mt-8 sm:mt-10 text-center">
          <Link
            href="/book-a-consultation"
            className="inline-flex items-center gap-2 bg-[#08A9E6] hover:bg-[#078FCC] text-white text-xs sm:text-sm font-semibold px-5 py-2.5 sm:px-6 sm:py-3 rounded-xl shadow-xs transition-colors group"
          >
            <span>Start Your 20-Minute Operational Assessment</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}
