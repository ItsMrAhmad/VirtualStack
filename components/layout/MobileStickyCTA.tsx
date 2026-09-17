"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Calendar, Phone } from "lucide-react";
import { companyData } from "@/lib/data/company";

export default function MobileStickyCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show only after user has scrolled down 300px
      setIsVisible(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="lg:hidden fixed bottom-0 inset-x-0 z-40 bg-white/95 backdrop-blur-md border-t border-[#DDE6ED] p-3 shadow-lg animate-in slide-in-from-bottom-2 duration-200">
      <div className="flex items-center gap-2 max-w-md mx-auto">
        <a
          href={`tel:${companyData.contacts.tollFreePhone}`}
          className="p-3 rounded-xl bg-[#F7FAFC] border border-[#DDE6ED] text-[#071A2A] hover:text-[#08A9E6] shrink-0 flex items-center justify-center transition-colors"
          aria-label="Call Virtual Stack"
        >
          <Phone className="w-4 h-4 text-[#08A9E6]" />
        </a>
        <Link
          href="/book-a-consultation"
          className="flex-1 bg-[#08A9E6] hover:bg-[#078FCC] text-white text-xs sm:text-sm font-semibold py-3 px-4 rounded-xl flex items-center justify-center gap-2 shadow-sm text-center transition-colors"
        >
          <Calendar className="w-4 h-4" />
          <span>Get a Free Consultation</span>
        </Link>
      </div>
    </div>
  );
}
