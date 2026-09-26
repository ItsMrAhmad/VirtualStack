import React from "react";
import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import HeroSection from "@/components/hero/HeroSection";
import OutsourcingModel from "@/components/sections/OutsourcingModel";
import ServicesShowcase from "@/components/sections/ServicesShowcase";
import HowItWorks from "@/components/sections/HowItWorks";
import MidPageCTA from "@/components/sections/MidPageCTA";
import IndustryGrid from "@/components/sections/IndustryGrid";
import Testimonials from "@/components/sections/Testimonials";
import FinalCTA from "@/components/sections/FinalCTA";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = buildMetadata({
  title: "Virtual Stack | B2B Outsourcing, Customer Support & Back-Office Teams",
  description:
    "Scale your business with dedicated customer support, back-office operations, sales support, and remote teams. 24/7/365 operational reliability.",
  path: "/",
  absoluteTitle: true,
});

export default function HomePage() {
  return (
    <div
      id="home-scroll-container"
      tabIndex={0}
      className="h-screen h-[100dvh] overflow-y-scroll snap-y snap-mandatory scroll-smooth relative bg-white text-[#0B1724] outline-none"
    >
      {/* 1. Hero Section with Background Operations Imagery */}
      <HeroSection />

      {/* 2. Modern Outsourcing Delivery Model Section */}
      <OutsourcingModel />

      {/* 3. Services Showcase with Visual Pillar Cards */}
      <ServicesShowcase />

      {/* 4. How It Works: 3-Step Consultative Process */}
      <HowItWorks />

      {/* 5. Mid-Page Conversion Consultation Strip */}
      <MidPageCTA />

      {/* 6. Industry Specific Capabilities */}
      <IndustryGrid />

      {/* 7. Client Testimonials */}
      <Testimonials />

      {/* 8. High-Impact Closing CTA */}
      <FinalCTA />

      {/* 9. Dedicated Footer Snap Slide */}
      <div className="home-snap-section w-full snap-start snap-always min-h-[100dvh] h-[100dvh] bg-[#071A2A] flex flex-col justify-between overflow-y-auto">
        <Footer />
      </div>
    </div>
  );
}
