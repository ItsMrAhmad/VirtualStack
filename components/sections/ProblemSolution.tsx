import React from "react";
import Link from "next/link";
import { AlertCircle, ArrowRight, CheckCircle2, TrendingDown, Clock, Users } from "lucide-react";

export default function ProblemSolution() {
  const frictionPoints = [
    {
      icon: <Clock className="w-5 h-5 text-amber-500" />,
      problem: "Growing Operational Workload",
      description:
        "Leadership and key revenue generators spend hours every day on repetitive inbox triage, paperwork, and routine customer tickets instead of strategic business growth.",
    },
    {
      icon: <TrendingDown className="w-5 h-5 text-rose-500" />,
      problem: "Rising Staffing & Facility Costs",
      description:
        "Domestic recruitment costs, full-time benefits, payroll taxes, and workstation overhead make scaling in-house operational headcount increasingly unsustainable.",
    },
    {
      icon: <Users className="w-5 h-5 text-orange-500" />,
      problem: "Inconsistent Coverage & Churn Risk",
      description:
        "Customer inquiries and critical shipment check-calls happen around the clock. Gaps in after-hours or weekend coverage lead directly to lost deals and customer churn.",
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-[#F7FAFC] border-b border-[#DDE6ED]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#071A2A] tracking-tight font-heading">
            Your team shouldn't have to do everything.
          </h2>
          <p className="text-base sm:text-lg text-[#5F7183] leading-relaxed">
            Fast growth creates operational friction. When senior team members get bogged down by daily execution
            chores, momentum slows and customer satisfaction suffers.
          </p>
        </div>

        {/* 3 Core Friction Points */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {frictionPoints.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-7 border border-[#DDE6ED] shadow-sm hover:shadow-md transition-shadow relative overflow-hidden"
            >
              <div className="w-10 h-10 rounded-xl bg-[#F7FAFC] border border-[#DDE6ED] flex items-center justify-center mb-5">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-[#071A2A] mb-3 font-heading">
                {item.problem}
              </h3>
              <p className="text-sm text-[#5F7183] leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Solution Transition Banner */}
        <div className="bg-[#071A2A] rounded-2xl p-8 lg:p-10 text-white shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#08A9E6]/10 rounded-full blur-3xl -z-0 pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-3">
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-heading">
                We take the operational load off your team.
              </h3>
              <p className="text-sm sm:text-base text-[#94A3B8] leading-relaxed max-w-2xl">
                We build dedicated, professionally trained operational pods that plug directly into your tools
                and SOPs. You maintain full strategic direction while we execute the daily work with 24/7
                discipline and guaranteed SLAs.
              </p>
            </div>
            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col items-start lg:items-end gap-3.5">
              <Link
                href="/book-a-consultation"
                className="w-full sm:w-auto bg-[#08A9E6] hover:bg-[#078FCC] text-white text-sm font-semibold px-6 py-3 rounded-xl shadow-md transition-all flex items-center justify-center gap-2 group"
              >
                <span>Discuss Your Workflow</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </Link>
              <span className="text-xs text-[#94A3B8] text-center lg:text-right">
                Zero setup disruption • Free discovery session
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
