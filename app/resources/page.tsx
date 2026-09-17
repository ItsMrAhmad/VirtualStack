import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import { HelpCircle, BookOpen, FileText, ArrowRight } from "lucide-react";
import FinalCTA from "@/components/sections/FinalCTA";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Resources & Knowledge Hub",
  description:
    "Explore FAQs, operational guides, and strategic insights on scaling your business through modern outsourcing.",
};

export default function ResourcesPage() {
  const hubs = [
    {
      title: "Frequently Asked Questions",
      description:
        "Comprehensive answers on onboarding timelines, security protocols, pricing models, and workstation specifications.",
      link: "/resources/faqs",
      linkText: "Browse All FAQs",
      icon: <HelpCircle className="w-6 h-6 text-[#08A9E6]" />,
      badge: "Knowledge Base",
    },
    {
      title: "Case Studies & Frameworks",
      description:
        "Real operational outcomes and challenge-solution blueprints across freight dispatch, SaaS support, and e-commerce.",
      link: "/case-studies",
      linkText: "View Case Studies",
      icon: <FileText className="w-6 h-6 text-[#08A9E6]" />,
      badge: "Proven Proof",
    },
    {
      title: "Operational Insights & Blog",
      description:
        "Strategic perspectives on building remote teams, managing 24/7 queues, and reducing back-office overhead.",
      link: "/resources/blog",
      linkText: "Read Articles",
      icon: <BookOpen className="w-6 h-6 text-[#08A9E6]" />,
      badge: "Articles & Guides",
    },
  ];

  return (
    <div
      id="resources-scroll-container"
      tabIndex={0}
      className="h-screen h-[100dvh] overflow-y-scroll snap-y snap-mandatory scroll-smooth relative bg-white text-[#0B1724] outline-none"
    >
      {/* Slide 1: Hero & Knowledge Hubs */}
      <section className="h-screen h-[100dvh] min-h-screen min-h-[100dvh] w-full snap-start snap-always flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 pt-18 sm:pt-22 pb-6 relative z-10 overflow-y-auto sm:overflow-visible bg-gradient-to-b from-[#F7FAFC] to-white border-b border-[#DDE6ED]">
        <div className="my-auto w-full max-w-7xl mx-auto space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#071A2A] tracking-tight font-heading">
              Operational insights for growing businesses.
            </h1>
            <p className="text-xs sm:text-sm text-[#5F7183] leading-relaxed">
              Everything you need to know about evaluating, transitioning, and scaling with a modern outsourcing
              partner.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {hubs.map((hub, idx) => (
              <div
                key={idx}
                className="bg-[#F7FAFC] rounded-2xl p-6 sm:p-7 border border-[#DDE6ED] hover:border-[#08A9E6] hover:bg-white hover:shadow-lg transition-all duration-300 flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="p-3 rounded-xl bg-[#EBF7FD] group-hover:bg-[#08A9E6] group-hover:text-white transition-colors">
                      {hub.icon}
                    </div>
                    <span className="text-xs font-semibold text-[#071A2A] bg-white px-2.5 py-0.5 rounded-full border border-[#DDE6ED]">
                      {hub.badge}
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-[#071A2A] font-heading group-hover:text-[#08A9E6] transition-colors">
                    {hub.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#5F7183] leading-relaxed">
                    {hub.description}
                  </p>
                </div>

                <div className="pt-5 mt-5 border-t border-[#DDE6ED]">
                  <Link
                    href={hub.link}
                    className="text-xs font-bold text-[#08A9E6] hover:text-[#078FCC] flex items-center gap-1.5"
                  >
                    <span>{hub.linkText}</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Slide 2: Closing CTA */}
      <FinalCTA />

      {/* Slide 3: Footer */}
      <div className="resources-snap-section w-full snap-start snap-always min-h-[100dvh] h-[100dvh] bg-[#071A2A] flex flex-col justify-between overflow-y-auto">
        <Footer />
      </div>
    </div>
  );
}
