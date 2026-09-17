"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Calendar, PhoneCall, ChevronDown } from "lucide-react";
import OperationsDiagram from "./OperationsDiagram";
import { companyData } from "@/lib/data/company";

const rotatingUseCases = [
  "24/7 Taxi & Fleet Dispatch",
  "B2B Lead Generation & Telesales",
  "Omnichannel Customer Support",
  "Back-Office Processing & KYC",
  "Dedicated Remote Virtual Assistants",
];

export default function HeroSection() {
  const [currentCaseIndex, setCurrentCaseIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentCaseIndex((prev) => (prev + 1) % rotatingUseCases.length);
    }, 2800);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="h-screen h-[100dvh] min-h-screen min-h-[100dvh] w-full snap-start snap-always flex flex-col justify-start sm:justify-center items-center px-4 sm:px-6 lg:px-8 pt-4 sm:pt-6 pb-6 relative z-10 overflow-y-auto sm:overflow-visible bg-[#071A2A] text-white border-b border-[#1A2E40]">
      {/* Background Operations Center Image Backdrop (Right-Anchored & Blended into Deep Navy) */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <Image
          src="/images/hero-operations.jpg"
          alt="Virtual Stack 24/7 Live Operations Floor"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center md:object-[75%_center] opacity-65 sm:opacity-70"
        />
        {/* Gradient scrim overlay: dark on left for text readability, gently transparent toward the right */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, rgba(7, 26, 42, 0.93) 0%, rgba(7, 26, 42, 0.82) 45%, rgba(7, 26, 42, 0.55) 75%, rgba(7, 26, 42, 0.42) 100%)",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(7, 26, 42, 0.75) 0%, transparent 30%, transparent 70%, rgba(7, 26, 42, 0.85) 100%)",
          }}
        />
      </div>

      {/* Decorative Technical Grid Overlay */}
      <div
        className="absolute inset-0 z-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(to right, #08A9E6 1px, transparent 1px), linear-gradient(to bottom, #08A9E6 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 xl:gap-10 items-center">
          {/* Left Column: Core Positioning Copy */}
          <div className="lg:col-span-7 space-y-3.5 sm:space-y-4">
            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-[40px] xl:text-[45px] font-extrabold text-white tracking-tight leading-[1.12] font-heading">
              Scale Your Business With a Team You Can{" "}
              <span className="text-[#08A9E6]">Trust</span>
            </h1>

            {/* Dynamic Rotating Subheadline */}
            <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#08A9E6] min-h-[1.5rem]">
              <span className="text-[#94A3B8] font-normal">Active Operations:</span>
              <span className="key-rotating transition-all duration-300 bg-[#0A2238] px-2 py-0.5 rounded-md border border-[#08A9E6]/30 text-[#08A9E6] font-bold">
                {rotatingUseCases[currentCaseIndex]}
              </span>
            </div>

            {/* Supporting Copy */}
            <p className="text-sm sm:text-base text-[#94A3B8] max-w-xl font-normal leading-relaxed">
              Virtual Stack delivers dedicated customer support, back-office operations, B2B sales support,
              and dedicated remote teams built around the way your business works.
            </p>

            {/* CTA Buttons */}
            <div className="space-y-2 pt-0.5">
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <Link
                  href="/book-a-consultation"
                  className="bg-[#08A9E6] hover:bg-[#078FCC] text-white text-sm font-semibold px-6 py-2.5 sm:py-3 rounded-xl shadow-md hover:shadow-lg transition-all duration-200 flex items-center justify-center gap-2 group"
                >
                  <Calendar className="w-4 h-4 text-white" />
                  <span>Get a Free Consultation</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </Link>
                <Link
                  href="/services"
                  className="bg-white/[0.04] hover:bg-[#08A9E6]/10 text-white hover:text-white text-sm font-semibold px-5 py-2.5 sm:py-3 rounded-xl border border-white/20 hover:border-[#08A9E6]/50 transition-all duration-200 flex items-center justify-center shadow-xs"
                >
                  Explore Services
                </Link>
              </div>

              {/* Direct Toll-Free Phone Call Link */}
              <div className="pt-0.5 flex items-center gap-1.5 text-xs text-[#94A3B8]">
                <PhoneCall className="w-3 h-3 text-[#08A9E6]" />
                <span>Prefer to talk now? Call toll-free:</span>
                <a
                  href={`tel:${companyData.contacts.tollFreePhone}`}
                  className="font-bold text-white hover:text-[#08A9E6] transition-colors underline decoration-dotted"
                >
                  {companyData.contacts.tollFreeDisplay}
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Operations Visual */}
          <div className="lg:col-span-5">
            <OperationsDiagram />
          </div>
        </div>

      </div>

      {/* Scroll Down Visual Affordance */}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-0.5 pointer-events-none">
        <span className="text-[10px] font-semibold text-[#94A3B8] tracking-widest uppercase">Scroll</span>
        <ChevronDown className="w-3.5 h-3.5 animate-bounce text-[#08A9E6]" />
      </div>
    </section>
  );
}
