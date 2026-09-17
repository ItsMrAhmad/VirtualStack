"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowRight, Calendar } from "lucide-react";

export default function SectionNav() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling past hero (approx 450px)
      setIsVisible(window.scrollY > 450);

      // Simple active section detection
      const sections = ["pillars-showcase", "how-it-works", "industries", "testimonials"];
      const scrollPos = window.scrollY + 200;

      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isVisible) return null;

  const navItems = [
    { label: "Pillars", href: "#pillars-showcase", id: "pillars-showcase" },
    { label: "Process", href: "#how-it-works", id: "how-it-works" },
    { label: "Verticals", href: "#industries", id: "industries" },
    { label: "Client Proof", href: "#testimonials", id: "testimonials" },
  ];

  return (
    <div className="hidden lg:flex fixed bottom-6 left-1/2 -translate-x-1/2 z-40 items-center gap-1.5 bg-white/95 dark:bg-[#071A2A]/95 backdrop-blur-md px-3.5 py-2 rounded-full border border-[#DDE6ED] dark:border-[#1C354E] shadow-xl shadow-[#071A2A]/10 animate-in fade-in slide-in-from-bottom-4 duration-300">
      <span className="text-[11px] font-bold text-[#5F7183] uppercase tracking-wider px-2 border-r border-[#DDE6ED] dark:border-[#1C354E]">
        Explore:
      </span>
      {navItems.map((item) => {
        const isActive = activeSection === item.id;
        return (
          <a
            key={item.id}
            href={item.href}
            className={`px-3 py-1 rounded-full text-xs font-semibold transition-all ${
              isActive
                ? "bg-[#08A9E6] text-white shadow-xs"
                : "text-[#5F7183] dark:text-[#94A3B8] hover:text-[#08A9E6] hover:bg-[#F7FAFC] dark:hover:bg-[#0D253C]"
            }`}
          >
            {item.label}
          </a>
        );
      })}
      <Link
        href="/book-a-consultation"
        className="ml-2 bg-[#071A2A] hover:bg-[#0B1724] dark:bg-[#08A9E6] dark:hover:bg-[#078FCC] text-white text-xs font-semibold px-3.5 py-1.5 rounded-full flex items-center gap-1.5 transition-all shadow-xs"
      >
        <Calendar className="w-3.5 h-3.5" />
        <span>Consultation</span>
      </Link>
    </div>
  );
}
