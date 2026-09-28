import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Sparkles, Calendar, Clock, ArrowRight, Mail } from "lucide-react";
import FinalCTA from "@/components/sections/FinalCTA";
import Footer from "@/components/layout/Footer";
import BlogClient from "./BlogClient";
import { articlesData } from "@/lib/data/articles";
import { companyData } from "@/lib/data/company";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Operations Insights & Outsourcing Guides",
  description:
    "Practical strategies, frameworks, and benchmarks from our management team on scaling customer support, back-office workflows, and dedicated remote teams.",
  path: "/resources/blog",
});

export default function BlogPage() {
  const featuredArticle = articlesData.find((a) => a.featured) || articlesData[0];
  const libraryArticles = articlesData.filter((a) => a.id !== featuredArticle.id);

  return (
    <div
      id="blog-scroll-container"
      tabIndex={0}
      className="lg:h-screen lg:h-[100dvh] lg:overflow-y-scroll lg:snap-y lg:snap-mandatory scroll-smooth relative bg-white text-[#0B1724] outline-none"
    >
      {/* Slide 1: Hero & Featured Article (Server-Rendered) */}
      <section className="min-h-[100dvh] lg:h-[100dvh] w-full lg:snap-start lg:snap-always flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 pt-18 sm:pt-22 pb-6 relative z-10 overflow-y-auto sm:overflow-visible bg-gradient-to-b from-[#F7FAFC] to-white border-b border-[#DDE6ED]">
        <div className="my-auto w-full max-w-7xl mx-auto space-y-5">
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#071A2A] tracking-tight font-heading">
              Outsourcing Insights & Operations Guides
            </h1>
            <p className="text-xs sm:text-sm text-[#5F7183] leading-relaxed">
              Practical strategies, frameworks, and data from our operations leadership pod on scaling
              workforces efficiently.
            </p>
          </div>

          {/* Featured Article Card */}
          <div className="group relative bg-[#F7FAFC] hover:bg-white rounded-2xl border border-[#DDE6ED] hover:border-[#08A9E6]/60 p-4 sm:p-6 transition-all duration-300 shadow-xs hover:shadow-md">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-8 items-center">
              {/* Image Column */}
              <div className="lg:col-span-5 relative aspect-[16/10] w-full rounded-xl overflow-hidden border border-[#DDE6ED]/80 shadow-inner bg-slate-100">
                <Link href={`/resources/blog/${featuredArticle.slug}`} className="block w-full h-full">
                  <Image
                    src={featuredArticle.image}
                    alt={featuredArticle.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    priority
                  />
                </Link>
                <div className="absolute top-3 left-3 z-10 flex items-center gap-2 pointer-events-none">
                  <span className="inline-flex items-center gap-1.5 text-[10px] font-semibold text-white bg-[#071A2A]/90 backdrop-blur-md px-2.5 py-0.5 rounded-full border border-white/20 shadow-xs">
                    <Sparkles className="w-3 h-3 text-[#08A9E6]" />
                    Featured Analysis
                  </span>
                </div>
              </div>

              {/* Content Column */}
              <div className="lg:col-span-7 flex flex-col justify-between space-y-3">
                <div className="space-y-2">
                  <div className="flex flex-wrap items-center gap-2.5 text-[11px] text-[#5F7183]">
                    <span className="font-semibold text-[#071A2A] bg-white px-2 py-0.5 rounded-md border border-[#DDE6ED]">
                      {featuredArticle.category}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3 text-[#5F7183]" />
                      {featuredArticle.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3 text-[#5F7183]" />
                      {featuredArticle.readTime}
                    </span>
                  </div>

                  <Link href={`/resources/blog/${featuredArticle.slug}`} className="block">
                    <h2 className="text-lg sm:text-xl lg:text-2xl font-extrabold text-[#071A2A] font-heading group-hover:text-[#08A9E6] transition-colors leading-snug">
                      {featuredArticle.title}
                    </h2>
                  </Link>

                  <p className="text-xs sm:text-sm text-[#5F7183] leading-relaxed line-clamp-2">
                    {featuredArticle.excerpt}
                  </p>

                  <div className="flex flex-wrap gap-1 pt-1">
                    {featuredArticle.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] font-medium text-[#5F7183] bg-white px-2 py-0.5 rounded-md border border-[#DDE6ED]"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Author & Action */}
                <div className="pt-3 border-t border-[#DDE6ED] flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-full bg-[#071A2A] text-white font-bold text-[11px] flex items-center justify-center shadow-xs">
                      {featuredArticle.author.avatarInitials}
                    </div>
                    <div>
                      <p className="text-xs font-bold text-[#071A2A]">
                        {featuredArticle.author.name}
                      </p>
                      <p className="text-[10px] text-[#5F7183]">
                        {featuredArticle.author.role}
                      </p>
                    </div>
                  </div>

                  <Link
                    href={`/resources/blog/${featuredArticle.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#08A9E6] hover:text-[#078FCC] transition-colors group/btn"
                  >
                    <span>Read Analysis</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Slide 2: Articles Library & Interactive Slider Grid (Client Component) */}
      <BlogClient articles={libraryArticles} />

      {/* Slide 3: Executive Operational Briefings (Server Component) */}
      <section className="min-h-[100dvh] lg:h-[100dvh] w-full lg:snap-start lg:snap-always flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 pt-18 sm:pt-22 pb-6 relative z-10 overflow-y-auto sm:overflow-visible bg-[#F7FAFC] border-b border-[#DDE6ED]">
        <div className="my-auto w-full max-w-5xl mx-auto space-y-6">
          <div className="p-6 sm:p-8 rounded-3xl bg-white border border-[#DDE6ED] shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2 text-center md:text-left max-w-lg">
              <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#071A2A] bg-[#F7FAFC] px-3 py-1 rounded-full border border-[#DDE6ED]">
                <Mail className="w-3.5 h-3.5 text-[#08A9E6]" />
                Executive Operational Briefings
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-[#071A2A] font-heading">
                Receive Quarterly Outsourcing & Cost Benchmarks
              </h2>
              <p className="text-xs sm:text-sm text-[#5F7183] leading-relaxed">
                Curated analysis on North American staffing wage rates, SLA governance frameworks, and automated tooling stacks.
              </p>
            </div>

            <div className="w-full md:w-auto shrink-0 space-y-2">
              <a
                href={`mailto:${companyData.contacts.email}?subject=${encodeURIComponent(
                  "Subscribe: Executive Operational Briefings"
                )}&body=${encodeURIComponent(
                  "Hi Virtual Stack team,\n\nPlease add me to the quarterly Executive Operational Briefings.\n\nName:\nCompany:\n\nThanks,"
                )}`}
                className="inline-flex items-center justify-center gap-2 bg-[#08A9E6] hover:bg-[#078FCC] text-white text-xs font-semibold px-5 py-2.5 rounded-xl transition-colors w-full md:w-auto"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>Request the Briefings by Email</span>
              </a>
              <p className="text-[10px] text-[#5F7183] text-center md:text-left">
                Strictly executive research. Zero spam. Unsubscribe anytime.
              </p>
            </div>
          </div>

          {/* 3 Executive Pillars Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-5 rounded-2xl bg-white border border-[#DDE6ED] space-y-1.5">
              <div className="text-xl font-extrabold text-[#08A9E6] font-heading">50–65%</div>
              <h3 className="text-xs font-bold text-[#071A2A]">Direct Overhead Savings</h3>
              <p className="text-[11px] text-[#5F7183] leading-relaxed">
                Compared to fully-burdened domestic hiring with zero compromise on execution quality.
              </p>
            </div>
            <div className="p-5 rounded-2xl bg-white border border-[#DDE6ED] space-y-1.5">
              <div className="text-xl font-extrabold text-[#08A9E6] font-heading">1–2 Weeks</div>
              <h3 className="text-xs font-bold text-[#071A2A]">SOP Shadow to Live Flight</h3>
              <p className="text-[11px] text-[#5F7183] leading-relaxed">
                Structured knowledge transfer and sandbox certification before live deployment.
              </p>
            </div>
            <div className="p-5 rounded-2xl bg-white border border-[#DDE6ED] space-y-1.5">
              <div className="text-xl font-extrabold text-[#08A9E6] font-heading">SOC-Grade</div>
              <h3 className="text-xs font-bold text-[#071A2A]">Perimeter & Cloud Security</h3>
              <p className="text-[11px] text-[#5F7183] leading-relaxed">
                Biometric building access, disabled USB workstations, and enterprise VPN controls.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Slide 4: Final CTA */}
      <FinalCTA />

      {/* Slide 5: Footer */}
      <div className="blog-snap-section w-full lg:snap-start lg:snap-always min-h-[100dvh] h-[100dvh] bg-[#071A2A] flex flex-col justify-between overflow-y-auto">
        <Footer />
      </div>
    </div>
  );
}
