"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  Menu,
  X,
  ChevronDown,
  Headphones,
  Layers,
  TrendingUp,
  Users,
  Phone,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Calendar,
  Sun,
  Moon,
} from "lucide-react";
import { companyData } from "@/lib/data/company";
import { servicePillars } from "@/lib/data/services";
import { industriesData } from "@/lib/data/industries";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isDark, setIsDark] = useState(false);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);
    setIsDark(document.documentElement.classList.contains("dark"));
  }, []);

  const toggleTheme = () => {
    const nextDark = !isDark;
    setIsDark(nextDark);
    if (nextDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };


  useEffect(() => {
    const handleScroll = () => {
      const snapContainer = document.querySelector('[id$="-scroll-container"]');
      const scrollTop = snapContainer ? snapContainer.scrollTop : window.scrollY;
      setIsScrolled(scrollTop > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true, capture: true });
    return () => window.removeEventListener("scroll", handleScroll, { capture: true });
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [pathname]);

  // Close dropdowns on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest("header")) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  const getPillarIcon = (id: string) => {
    switch (id) {
      case "customer-experience":
        return <Headphones className="w-5 h-5 text-[#08A9E6]" />;
      case "back-office":
        return <Layers className="w-5 h-5 text-[#08A9E6]" />;
      case "sales-growth":
        return <TrendingUp className="w-5 h-5 text-[#08A9E6]" />;
      case "dedicated-teams":
        return <Users className="w-5 h-5 text-[#08A9E6]" />;
      default:
        return <CheckCircle2 className="w-5 h-5 text-[#08A9E6]" />;
    }
  };

  return (
    <div id="site-navbar" className="sticky top-0 z-50 w-full">
      {/* Top Notification / Verification Bar */}
      <div className="bg-[#071A2A] text-white text-xs border-b border-[#1C354E] hidden md:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-1.5 flex justify-between items-center text-[11px] whitespace-nowrap">
          <div className="flex items-center space-x-3 lg:space-x-5 text-[#94A3B8]">
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#12C98A] animate-pulse" />
              <span>24/7/365 Live Operations</span>
            </span>
            <span className="text-[#1C354E] hidden lg:inline">•</span>
            <span className="hidden lg:inline">200+ Workstation Capacity</span>
            <span className="text-[#1C354E] hidden xl:inline">•</span>
            <span className="hidden xl:inline">Calgary • Est. 2011</span>
          </div>
          <div className="flex items-center space-x-3 lg:space-x-4 text-xs shrink-0">
            <a
              href={`tel:${companyData.contacts.tollFreePhone}`}
              className="text-[#94A3B8] hover:text-white flex items-center gap-1.5 transition-colors"
            >
              <Phone className="w-3 h-3 text-[#08A9E6]" />
              <span className="font-medium text-white">{companyData.contacts.tollFreeDisplay}</span>
            </a>
            <span className="text-[#1C354E]">•</span>
            <a
              href={`mailto:${companyData.contacts.email}`}
              className="text-[#94A3B8] hover:text-[#08A9E6] transition-colors"
            >
              {companyData.contacts.email}
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Navbar */}
      <header
        className={cn(
          "transition-all duration-300 w-full",
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-[#DDE6ED] py-2"
            : "bg-white border-b border-[#DDE6ED] py-2.5"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Logo */}
            <Link href="/" className="flex items-center group py-0.5" aria-label="Virtual Stack Homepage">
              <Image
                src={mounted && isDark ? "/logo-white.png" : "/logo.png"}
                alt="Virtual Stack"
                width={140}
                height={65}
                priority
                className="h-10 sm:h-11 w-auto object-contain transition-transform duration-200 group-hover:scale-[1.02]"
              />
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center space-x-0.5 xl:space-x-1.5 text-[13.5px] xl:text-[15px] font-medium text-[#0B1724]">
              {/* Services Mega Menu Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setActiveDropdown("services")}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button
                  onClick={() => setActiveDropdown(activeDropdown === "services" ? null : "services")}
                  className={cn(
                    "flex items-center gap-1 px-2 xl:px-3 py-1.5 xl:py-2 rounded-lg transition-colors hover:text-[#08A9E6] hover:bg-[#F7FAFC]",
                    (pathname.startsWith("/services") || activeDropdown === "services") && "text-[#08A9E6] font-semibold bg-[#F7FAFC]"
                  )}
                  aria-expanded={activeDropdown === "services"}
                >
                  <span>Services</span>
                  <ChevronDown
                    className={cn(
                      "w-4 h-4 transition-transform duration-200",
                      activeDropdown === "services" && "rotate-180 text-[#08A9E6]"
                    )}
                  />
                </button>

                {/* Mega Menu Container */}
                {activeDropdown === "services" && (
                  <div className="absolute top-full left-0 w-[680px] pt-2 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                    <div className="bg-white rounded-2xl shadow-xl border border-[#DDE6ED] p-4 sm:p-5 grid grid-cols-2 gap-3.5">
                      {servicePillars.map((pillar) => (
                        <div
                          key={pillar.id}
                          className="p-3 rounded-xl hover:bg-[#F7FAFC] transition-colors group/pillar border border-transparent hover:border-[#DDE6ED]"
                        >
                          <div className="flex items-center gap-2.5 mb-2">
                            <div className="p-1.5 rounded-lg bg-[#EBF7FD] group-hover/pillar:bg-[#08A9E6]/15 transition-colors shrink-0">
                              {getPillarIcon(pillar.id)}
                            </div>
                            <Link
                              href={`/services#${pillar.id}`}
                              onClick={() => setActiveDropdown(null)}
                              className="font-bold text-[#071A2A] text-sm group-hover/pillar:text-[#08A9E6] transition-colors font-heading block"
                            >
                              {pillar.title}
                            </Link>
                          </div>
                          <ul className="mt-2 space-y-1 pl-2 border-l border-[#DDE6ED]">
                            {pillar.services.map((service) => (
                              <li key={service.slug}>
                                <Link
                                  href={`/services/${service.slug}`}
                                  onClick={() => setActiveDropdown(null)}
                                  className="text-xs text-[#5F7183] hover:text-[#08A9E6] hover:translate-x-0.5 transition-all flex items-center justify-between py-0.5"
                                >
                                  <span>{service.name}</span>
                                  <ArrowRight className="w-3 h-3 opacity-0 group-hover/pillar:opacity-100 transition-opacity text-[#08A9E6]" />
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                      <div className="col-span-2 pt-2.5 border-t border-[#DDE6ED] flex items-center justify-between text-[11px] text-[#5F7183]">
                        <span className="flex items-center gap-1.5">
                          <ShieldCheck className="w-3.5 h-3.5 text-[#08A9E6]" />
                          All teams operate with dedicated workstations and 24/7 supervisor coverage.
                        </span>
                        <Link
                          href="/services"
                          onClick={() => setActiveDropdown(null)}
                          className="text-[#08A9E6] font-semibold hover:underline flex items-center gap-1"
                        >
                          View All Services Overview →
                        </Link>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Industries Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setActiveDropdown("industries")}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button
                  onClick={() => setActiveDropdown(activeDropdown === "industries" ? null : "industries")}
                  className={cn(
                    "flex items-center gap-1 px-2 xl:px-3 py-1.5 xl:py-2 rounded-lg transition-colors hover:text-[#08A9E6] hover:bg-[#F7FAFC]",
                    (pathname.startsWith("/industries") || activeDropdown === "industries") && "text-[#08A9E6] font-semibold bg-[#F7FAFC]"
                  )}
                  aria-expanded={activeDropdown === "industries"}
                >
                  <span>Industries</span>
                  <ChevronDown
                    className={cn(
                      "w-4 h-4 transition-transform duration-200",
                      activeDropdown === "industries" && "rotate-180 text-[#08A9E6]"
                    )}
                  />
                </button>

                {activeDropdown === "industries" && (
                  <div className="absolute top-full left-0 w-[640px] sm:w-[680px] pt-2 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                    <div className="bg-white rounded-2xl shadow-xl border border-[#DDE6ED] p-4 grid grid-cols-2 gap-2">
                      {industriesData.map((industry) => (
                        <Link
                          key={industry.slug}
                          href={`/industries/${industry.slug}`}
                          onClick={() => setActiveDropdown(null)}
                          className="px-3 py-2.5 rounded-lg hover:bg-[#F7FAFC] transition-colors group flex items-center gap-2.5"
                        >
                          <div className="p-1.5 rounded-md bg-[#EBF7FD] group-hover:bg-[#08A9E6] group-hover:text-white transition-colors text-[#08A9E6] shrink-0">
                            <CheckCircle2 className="w-4 h-4" />
                          </div>
                          <span className="text-xs sm:text-[13px] font-semibold text-[#071A2A] group-hover:text-[#08A9E6] transition-colors whitespace-nowrap">
                            {industry.name}
                          </span>
                        </Link>
                      ))}
                      <div className="col-span-2 pt-3 mt-1 border-t border-[#DDE6ED] flex justify-between items-center text-[11px]">
                        <span className="text-[#5F7183]">Custom workflow matching for unique verticals</span>
                        <Link
                          href="/industries"
                          onClick={() => setActiveDropdown(null)}
                          className="text-[#08A9E6] font-semibold hover:underline"
                        >
                          View All Industries →
                        </Link>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Why Virtual Stack */}
              <Link
                href="/why-virtual-stack"
                className={cn(
                  "px-2 xl:px-3 py-1.5 xl:py-2 rounded-lg transition-colors hover:text-[#08A9E6] hover:bg-[#F7FAFC]",
                  pathname === "/why-virtual-stack" && "text-[#08A9E6] font-semibold"
                )}
              >
                Why Virtual Stack
              </Link>

              {/* About */}
              <Link
                href="/about"
                className={cn(
                  "px-2 xl:px-3 py-1.5 xl:py-2 rounded-lg transition-colors hover:text-[#08A9E6] hover:bg-[#F7FAFC]",
                  pathname === "/about" && "text-[#08A9E6] font-semibold"
                )}
              >
                About
              </Link>

              {/* Resources Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setActiveDropdown("resources")}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button
                  onClick={() => setActiveDropdown(activeDropdown === "resources" ? null : "resources")}
                  className={cn(
                    "flex items-center gap-1 px-2 xl:px-3 py-1.5 xl:py-2 rounded-lg transition-colors hover:text-[#08A9E6] hover:bg-[#F7FAFC]",
                    (pathname.startsWith("/resources") || activeDropdown === "resources") && "text-[#08A9E6] font-semibold bg-[#F7FAFC]"
                  )}
                  aria-expanded={activeDropdown === "resources"}
                >
                  <span>Resources</span>
                  <ChevronDown
                    className={cn(
                      "w-4 h-4 transition-transform duration-200",
                      activeDropdown === "resources" && "rotate-180 text-[#08A9E6]"
                    )}
                  />
                </button>

                {activeDropdown === "resources" && (
                  <div className="absolute top-full left-0 w-[260px] pt-2.5 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                    <div className="bg-white rounded-xl shadow-xl border border-[#DDE6ED] p-3 space-y-1">
                      <Link
                        href="/resources/faqs"
                        onClick={() => setActiveDropdown(null)}
                        className="block p-2.5 rounded-lg hover:bg-[#F7FAFC] text-sm text-[#071A2A] hover:text-[#08A9E6] transition-colors"
                      >
                        <div className="font-semibold">Frequently Asked Questions</div>
                        <div className="text-xs text-[#5F7183]">Answers on onboarding & security</div>
                      </Link>
                      <Link
                        href="/case-studies"
                        onClick={() => setActiveDropdown(null)}
                        className="block p-2.5 rounded-lg hover:bg-[#F7FAFC] text-sm text-[#071A2A] hover:text-[#08A9E6] transition-colors"
                      >
                        <div className="font-semibold">Outcomes & Case Studies</div>
                        <div className="text-xs text-[#5F7183]">Proven operational frameworks</div>
                      </Link>
                      <Link
                        href="/resources/blog"
                        onClick={() => setActiveDropdown(null)}
                        className="block p-2.5 rounded-lg hover:bg-[#F7FAFC] text-sm text-[#071A2A] hover:text-[#08A9E6] transition-colors"
                      >
                        <div className="font-semibold">Insights & Articles</div>
                        <div className="text-xs text-[#5F7183]">Best practices in outsourcing</div>
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              {/* Contact */}
              <Link
                href="/contact"
                className={cn(
                  "px-2 xl:px-3 py-1.5 xl:py-2 rounded-lg transition-colors hover:text-[#08A9E6] hover:bg-[#F7FAFC]",
                  pathname === "/contact" && "text-[#08A9E6] font-semibold"
                )}
              >
                Contact
              </Link>
            </nav>

            {/* Desktop Primary Action CTA & Theme Toggle */}
            <div className="hidden lg:flex items-center space-x-2 xl:space-x-3 shrink-0">
              {/* Dark Mode Toggle Button */}
              <button
                onClick={toggleTheme}
                className="p-2 xl:p-2.5 rounded-xl border border-[#DDE6ED] hover:bg-[#F7FAFC] text-[#071A2A] hover:text-[#08A9E6] transition-all duration-200 flex items-center justify-center cursor-pointer shadow-sm hover:border-[#08A9E6]/40"
                aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
                title={isDark ? "Switch to light mode" : "Switch to dark mode"}
              >
                {mounted && isDark ? (
                  <Sun className="w-4 h-4 xl:w-5 xl:h-5 text-amber-400 transition-transform duration-300 hover:rotate-90" />
                ) : (
                  <Moon className="w-4 h-4 xl:w-5 xl:h-5 text-[#5F7183] transition-transform duration-300 hover:-rotate-12" />
                )}
              </button>

              <Link
                href="/book-a-consultation"
                className="bg-[#08A9E6] hover:bg-[#078FCC] text-white text-[13px] xl:text-[14px] font-semibold px-3.5 xl:px-5 py-2 xl:py-2.5 rounded-xl shadow-sm hover:shadow transition-all duration-200 flex items-center gap-1.5 xl:gap-2 group whitespace-nowrap"
              >
                <Calendar className="w-3.5 h-3.5 xl:w-4 xl:h-4 text-white/90" />
                <span>Get a Free Consultation</span>
              </Link>
            </div>

            {/* Mobile Actions */}
            <div className="flex items-center gap-2.5 lg:hidden">
              {/* Mobile Dark Mode Toggle Button */}
              <button
                onClick={toggleTheme}
                className="p-2 rounded-lg border border-[#DDE6ED] hover:bg-[#F7FAFC] text-[#071A2A] flex items-center justify-center cursor-pointer"
                aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
                title={isDark ? "Switch to light mode" : "Switch to dark mode"}
              >
                {mounted && isDark ? (
                  <Sun className="w-4 h-4 text-amber-400" />
                ) : (
                  <Moon className="w-4 h-4 text-[#5F7183]" />
                )}
              </button>

              <Link
                href="/book-a-consultation"
                className="bg-[#08A9E6] hover:bg-[#078FCC] text-white text-xs font-semibold px-3 py-2 rounded-lg sm:hidden"
              >
                Book Call
              </Link>
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2.5 rounded-xl text-[#071A2A] hover:bg-[#F7FAFC] transition-colors border border-[#DDE6ED]"
                aria-label="Toggle Navigation Menu"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {isMobileMenuOpen && (
          <div className="lg:hidden fixed inset-x-0 top-full bg-white border-b border-[#DDE6ED] shadow-2xl max-h-[85vh] overflow-y-auto px-6 py-6 animate-in slide-in-from-top-4 duration-300">
            <div className="space-y-6">
              {/* Quick Contact Details on Mobile */}
              <div className="p-3.5 rounded-xl bg-[#F7FAFC] border border-[#DDE6ED] flex items-center justify-between">
                <div>
                  <div className="text-xs font-bold text-[#071A2A]">Talk to an Expert Today</div>
                  <div className="text-xs text-[#5F7183]">24/7 North American Support</div>
                </div>
                <a
                  href={`tel:${companyData.contacts.tollFreePhone}`}
                  className="bg-[#071A2A] text-white text-xs font-semibold px-3 py-2 rounded-lg flex items-center gap-1.5"
                >
                  <Phone className="w-3.5 h-3.5 text-[#08A9E6]" />
                  <span>Call Now</span>
                </a>
              </div>

              {/* Mobile Nav Links */}
              <div className="space-y-2">
                <Link
                  href="/"
                  className="block py-2.5 text-base font-semibold text-[#071A2A] border-b border-[#F7FAFC]"
                >
                  Home
                </Link>

                {/* Mobile Services Section */}
                <div className="py-2 border-b border-[#F7FAFC]">
                  <div className="text-xs uppercase font-bold tracking-wider text-[#5F7183] mb-2">
                    Services
                  </div>
                  <div className="grid grid-cols-1 gap-2 pl-2">
                    <Link
                      href="/services"
                      className="text-sm font-semibold text-[#08A9E6] py-1 flex items-center justify-between"
                    >
                      <span>All Services Overview</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                    {servicePillars.map((pillar) => (
                      <div key={pillar.id} className="pt-2">
                        <span className="text-xs font-bold text-[#071A2A] block mb-1">
                          {pillar.title}
                        </span>
                        <div className="space-y-1 pl-2">
                          {pillar.services.map((service) => (
                            <Link
                              key={service.slug}
                              href={`/services/${service.slug}`}
                              className="block text-[13px] text-[#5F7183] hover:text-[#08A9E6] py-1"
                            >
                              {service.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Mobile Industries Section */}
                <div className="py-2 border-b border-[#F7FAFC]">
                  <div className="text-xs uppercase font-bold tracking-wider text-[#5F7183] mb-2">
                    Industries
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pl-2">
                    {industriesData.map((ind) => (
                      <Link
                        key={ind.slug}
                        href={`/industries/${ind.slug}`}
                        className="text-[13px] text-[#5F7183] hover:text-[#08A9E6] py-1"
                      >
                        {ind.name}
                      </Link>
                    ))}
                  </div>
                </div>

                <Link
                  href="/why-virtual-stack"
                  className="block py-2.5 text-base font-semibold text-[#071A2A] border-b border-[#F7FAFC]"
                >
                  Why Virtual Stack
                </Link>

                <Link
                  href="/about"
                  className="block py-2.5 text-base font-semibold text-[#071A2A] border-b border-[#F7FAFC]"
                >
                  About Company
                </Link>

                <Link
                  href="/case-studies"
                  className="block py-2.5 text-base font-semibold text-[#071A2A] border-b border-[#F7FAFC]"
                >
                  Case Studies & Proof
                </Link>

                <Link
                  href="/resources/faqs"
                  className="block py-2.5 text-base font-semibold text-[#071A2A] border-b border-[#F7FAFC]"
                >
                  Frequently Asked Questions
                </Link>

                <Link
                  href="/contact"
                  className="block py-2.5 text-base font-semibold text-[#071A2A]"
                >
                  Contact Us
                </Link>
              </div>

              {/* Mobile CTA */}
              <div className="pt-2">
                <Link
                  href="/book-a-consultation"
                  className="w-full bg-[#08A9E6] hover:bg-[#078FCC] text-white font-semibold py-3.5 rounded-xl flex items-center justify-center gap-2 shadow-sm text-center text-sm"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Get a Free Consultation</span>
                </Link>
              </div>
            </div>
          </div>
        )}
      </header>
    </div>
  );
}
