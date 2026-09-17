import React from "react";
import type { Metadata } from "next";
import FinalCTA from "@/components/sections/FinalCTA";
import Footer from "@/components/layout/Footer";
import BlogClient from "./BlogClient";
import { articlesData } from "@/lib/data/articles";

export const metadata: Metadata = {
  title: "Operational Insights & Articles | Virtual Stack",
  description:
    "Practical strategies, frameworks, and insights from our operations management team on scaling customer support, back-office workflows, and dedicated remote teams.",
  openGraph: {
    title: "Operational Insights & Articles | Virtual Stack",
    description:
      "Explore executive operational research, staffing cost benchmarks, and SLA blueprints from Virtual Stack.",
    url: "https://virtualstack.us/resources/blog",
  },
};

export default function BlogPage() {
  return (
    <div
      id="blog-scroll-container"
      tabIndex={0}
      className="h-screen h-[100dvh] overflow-y-scroll snap-y snap-mandatory scroll-smooth relative bg-white text-[#0B1724] outline-none"
    >
      {/* BlogClient provides Slide 1 (Hero & Featured), Slide 2 (Library & Slider Grid), Slide 3 (Executive Briefings) */}
      <BlogClient articles={articlesData} />

      {/* Slide 4: Final CTA */}
      <FinalCTA />

      {/* Slide 5: Footer */}
      <div className="blog-snap-section w-full snap-start snap-always min-h-[100dvh] h-[100dvh] bg-[#071A2A] flex flex-col justify-between overflow-y-auto">
        <Footer />
      </div>
    </div>
  );
}
