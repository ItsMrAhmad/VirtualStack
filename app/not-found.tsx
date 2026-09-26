import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import { ArrowLeft, ArrowRight, Home, Layers, Building2, Mail } from "lucide-react";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Page Not Found",
  description: "The page you are looking for does not exist or has been relocated.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col justify-between bg-white text-[#0B1724]">
      <div className="flex-1 flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 py-20 text-center">
        <div className="max-w-xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EBF7FD] text-[#08A9E6] text-xs font-semibold tracking-wide uppercase border border-[#08A9E6]/20">
            Error 404
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-[#071A2A] tracking-tight font-heading">
            Page not found
          </h1>

          <p className="text-sm sm:text-base text-[#5F7183] leading-relaxed max-w-md mx-auto">
            The operational page or resource you are looking for may have been moved, renamed, or is temporarily unavailable.
          </p>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#071A2A] hover:bg-[#0C1E30] text-white text-xs sm:text-sm font-semibold transition-colors shadow-sm"
            >
              <Home className="w-4 h-4 text-[#08A9E6]" />
              <span>Return Home</span>
            </Link>

            <Link
              href="/services"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#F7FAFC] hover:bg-[#EBF7FD] text-[#071A2A] hover:text-[#08A9E6] border border-[#DDE6ED] hover:border-[#08A9E6]/40 text-xs sm:text-sm font-semibold transition-colors shadow-sm"
            >
              <Layers className="w-4 h-4 text-[#08A9E6]" />
              <span>Explore Services</span>
            </Link>

            <Link
              href="/industries"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#F7FAFC] hover:bg-[#EBF7FD] text-[#071A2A] hover:text-[#08A9E6] border border-[#DDE6ED] hover:border-[#08A9E6]/40 text-xs sm:text-sm font-semibold transition-colors shadow-sm"
            >
              <Building2 className="w-4 h-4 text-[#08A9E6]" />
              <span>Industries</span>
            </Link>

            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#F7FAFC] hover:bg-[#EBF7FD] text-[#071A2A] hover:text-[#08A9E6] border border-[#DDE6ED] hover:border-[#08A9E6]/40 text-xs sm:text-sm font-semibold transition-colors shadow-sm"
            >
              <Mail className="w-4 h-4 text-[#08A9E6]" />
              <span>Contact Us</span>
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
