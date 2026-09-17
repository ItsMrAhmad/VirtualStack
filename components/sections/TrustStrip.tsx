import React from "react";
import { ShieldCheck, CheckCircle2 } from "lucide-react";
import { companyData } from "@/lib/data/company";

const trustedClients = [
  { name: "Fergus Elora Taxi", location: "Canada", type: "Fleet Dispatch" },
  { name: "Barco Leads", location: "USA", type: "B2B Lead Gen" },
  { name: "Leamington Taxi", location: "Canada", type: "Transport Dispatch" },
];

export default function TrustStrip() {
  return (
    <section id="trust-strip" className="bg-white py-10 border-b border-[#DDE6ED]" aria-label="Operational Metrics and Verified Clients">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="sr-only">Key Operational Verification & Metrics</h2>

        {/* 4 Stats Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
          {companyData.verifiedStats.map((stat, idx) => (
            <div
              key={idx}
              className="flex flex-col p-4 rounded-xl bg-[#F7FAFC] border border-[#DDE6ED] hover:border-[#08A9E6]/40 transition-colors shadow-2xs"
            >
              <span className="text-3xl lg:text-4xl font-extrabold text-[#0B1724] tracking-tight font-heading">
                {stat.value}
              </span>
              <span className="text-sm font-bold text-[#08A9E6] mt-1">
                {stat.label}
              </span>
              <span className="text-xs text-[#5F7183] mt-1 line-clamp-2">
                {stat.description}
              </span>
            </div>
          ))}
        </div>

        {/* Real Client Trust Bar */}
        <div className="pt-8 mt-8 border-t border-[#DDE6ED] flex flex-col md:flex-row items-center justify-between gap-4 text-xs">
          <div className="flex items-center gap-2 text-[#5F7183] font-semibold uppercase tracking-wider text-[11px]">
            <ShieldCheck className="w-4 h-4 text-[#08A9E6]" />
            <span>Trusted Daily Operations Partner For:</span>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            {trustedClients.map((client, i) => (
              <div
                key={i}
                className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#F7FAFC] border border-[#DDE6ED] text-[#0B1724] font-bold text-xs shadow-2xs hover:border-[#08A9E6]/40 transition-colors"
              >
                <CheckCircle2 className="w-3.5 h-3.5 text-[#12C98A]" />
                <span>{client.name}</span>
                <span className="text-[10px] text-[#08A9E6] font-semibold bg-[#EBF7FD] px-1.5 py-0.5 rounded">
                  {client.location}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
