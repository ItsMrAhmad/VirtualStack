import React from "react";
import HeroSection from "@/components/hero/HeroSection";
import ServicesShowcase from "@/components/sections/ServicesShowcase";
import HowItWorks from "@/components/sections/HowItWorks";
import MidPageCTA from "@/components/sections/MidPageCTA";
import IndustryGrid from "@/components/sections/IndustryGrid";
import TestimonialsPlaceholder from "@/components/sections/TestimonialsPlaceholder";
import FinalCTA from "@/components/sections/FinalCTA";
import Footer from "@/components/layout/Footer";

export default function HomePage() {
  return (
    <div
      id="home-scroll-container"
      tabIndex={0}
      className="h-screen h-[100dvh] overflow-y-scroll snap-y snap-mandatory scroll-smooth relative bg-white text-[#0B1724] outline-none"
    >
      {/* 1. Hero Section with Background Operations Imagery */}
      <HeroSection />

      {/* 2. Services Showcase with Visual Pillar Cards */}
      <ServicesShowcase />

      {/* 3. How It Works: 3-Step Consultative Process */}
      <HowItWorks />

      {/* 4. Mid-Page Conversion Consultation Strip */}
      <MidPageCTA />

      {/* 5. Industry Specific Capabilities */}
      <IndustryGrid />

      {/* 6. Client Testimonials */}
      <TestimonialsPlaceholder />

      {/* 7. High-Impact Closing CTA */}
      <FinalCTA />

      {/* 8. Dedicated Footer Snap Slide */}
      <div className="home-snap-section w-full snap-start snap-always min-h-[100dvh] h-[100dvh] bg-[#071A2A] flex flex-col justify-between overflow-y-auto">
        <Footer />
      </div>
    </div>
  );
}
