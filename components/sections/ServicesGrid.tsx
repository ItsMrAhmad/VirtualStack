import React from "react";
import Link from "next/link";
import { Headphones, Layers, TrendingUp, Users, ArrowRight, CheckCircle2 } from "lucide-react";
import { servicePillars } from "@/lib/data/services";

export default function ServicesGrid() {
  const getPillarIcon = (id: string) => {
    switch (id) {
      case "customer-experience":
        return <Headphones className="w-6 h-6 text-[#08A9E6]" />;
      case "back-office":
        return <Layers className="w-6 h-6 text-[#08A9E6]" />;
      case "sales-growth":
        return <TrendingUp className="w-6 h-6 text-[#08A9E6]" />;
      case "dedicated-teams":
        return <Users className="w-6 h-6 text-[#08A9E6]" />;
      default:
        return <CheckCircle2 className="w-6 h-6 text-[#08A9E6]" />;
    }
  };

  return (
    <section className="py-20 lg:py-28 bg-white border-b border-[#DDE6ED]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl space-y-4">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#071A2A] tracking-tight font-heading">
              Four operational pillars built for reliable scale.
            </h2>
            <p className="text-base sm:text-lg text-[#5F7183]">
              We avoid generic call center staffing. We build specialized, outcome-focused operational teams
              across four foundational pillars.
            </p>
          </div>
          <div>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-sm font-bold text-[#08A9E6] hover:text-[#078FCC] hover:underline"
            >
              <span>View Full Service Catalog</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {servicePillars.map((pillar) => (
            <div
              key={pillar.id}
              className="bg-[#F7FAFC] rounded-2xl p-8 border border-[#DDE6ED] hover:border-[#08A9E6]/50 hover:bg-white hover:shadow-lg transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="p-3.5 rounded-xl bg-[#EBF7FD] group-hover:bg-[#08A9E6] group-hover:text-white transition-colors">
                    {getPillarIcon(pillar.id)}
                  </div>
                  <span className="text-xs font-bold tracking-wider uppercase text-[#5F7183] bg-white px-3 py-1 rounded-full border border-[#DDE6ED]">
                    {pillar.services.length} Specialized Services
                  </span>
                </div>

                <div>
                  <h3 className="text-2xl font-extrabold text-[#071A2A] group-hover:text-[#08A9E6] transition-colors font-heading">
                    {pillar.title}
                  </h3>
                  <p className="text-sm font-medium text-[#08A9E6] mt-1">
                    {pillar.tagline}
                  </p>
                  <p className="text-sm text-[#5F7183] mt-2.5 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>

                {/* Sub-services list */}
                <div className="pt-4 border-t border-[#DDE6ED]/80">
                  <div className="text-xs font-bold text-[#071A2A] uppercase tracking-wider mb-2.5">
                    Core Solutions:
                  </div>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {pillar.services.map((service) => (
                      <li key={service.slug}>
                        <Link
                          href={`/services/${service.slug}`}
                          className="text-xs text-[#5F7183] hover:text-[#08A9E6] flex items-center gap-1.5 py-1 transition-colors"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-[#08A9E6]" />
                          <span className="line-clamp-1">{service.name}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-[#DDE6ED]/80 flex items-center justify-between">
                <Link
                  href={`/services/${pillar.services[0].slug}`}
                  className="text-sm font-bold text-[#071A2A] group-hover:text-[#08A9E6] flex items-center gap-1.5 transition-colors"
                >
                  <span>Explore {pillar.shortTitle}</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="/book-a-consultation"
                  className="text-xs font-semibold text-[#5F7183] hover:text-[#071A2A] transition-colors"
                >
                  Book Discovery →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
