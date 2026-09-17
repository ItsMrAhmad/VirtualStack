import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Phone,
  Mail,
  MapPin,
  ArrowUpRight,
  ArrowUp
} from "lucide-react";
import { companyData } from "@/lib/data/company";
import { servicePillars } from "@/lib/data/services";
import { industriesData } from "@/lib/data/industries";

export default function Footer({ className }: { className?: string }) {
  return (
    <footer
      className={`bg-[#071A2A] text-white w-full min-h-full flex-1 flex flex-col justify-between border-t border-[#1C354E] ${
        className || "pt-16 sm:pt-20 lg:pt-24 pb-6 sm:pb-8"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex-1 flex flex-col justify-between">
        {/* Main Footer Links Grid */}
        <div className="my-auto py-6 sm:py-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 lg:gap-10">
          {/* Brand & Mission Column */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="inline-block py-1" aria-label="Virtual Stack Homepage">
              <Image
                src="/logo-white.png"
                alt="Virtual Stack"
                width={160}
                height={75}
                className="h-11 w-auto object-contain"
              />
            </Link>

            <p className="text-sm text-[#94A3B8] leading-relaxed pr-4">
              Virtual Stack helps North American companies scale through high-touch Customer Support,
              back-office operations, B2B sales support, and dedicated remote teams built around the way your
              business works.
            </p>

            {/* Social Icons SVG */}
            <div className="pt-2 flex items-center space-x-3 text-[#94A3B8]">
              {/* Facebook */}
              <a
                href={companyData.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-[#0D253C] hover:bg-[#08A9E6] hover:text-white flex items-center justify-center transition-colors"
                aria-label="Virtual Stack Facebook"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                </svg>
              </a>
              {/* LinkedIn */}
              <a
                href={companyData.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-[#0D253C] hover:bg-[#08A9E6] hover:text-white flex items-center justify-center transition-colors"
                aria-label="Virtual Stack LinkedIn"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                </svg>
              </a>
              {/* Twitter / X */}
              <a
                href={companyData.socials.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-[#0D253C] hover:bg-[#08A9E6] hover:text-white flex items-center justify-center transition-colors"
                aria-label="Virtual Stack Twitter"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              {/* Instagram */}
              <a
                href={companyData.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-[#0D253C] hover:bg-[#08A9E6] hover:text-white flex items-center justify-center transition-colors"
                aria-label="Virtual Stack Instagram"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Services Column */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider font-heading">
              Services
            </h4>
            <ul className="space-y-2 text-sm text-[#94A3B8]">
              {servicePillars.map((pillar) => (
                <li key={pillar.id}>
                  <Link
                    href={`/services/${pillar.services[0].slug}`}
                    className="hover:text-white hover:translate-x-0.5 transition-all block"
                  >
                    {pillar.title}
                  </Link>
                </li>
              ))}
              <li className="pt-1">
                <Link
                  href="/services"
                  className="text-xs text-[#08A9E6] hover:underline flex items-center gap-1 font-semibold"
                >
                  <span>All 14 Services</span>
                  <ArrowUpRight className="w-3 h-3" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Industries Column */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider font-heading">
              Industries
            </h4>
            <ul className="space-y-2 text-sm text-[#94A3B8]">
              {industriesData.slice(0, 5).map((ind) => (
                <li key={ind.slug}>
                  <Link
                    href={`/industries/${ind.slug}`}
                    className="hover:text-white hover:translate-x-0.5 transition-all block"
                  >
                    {ind.name}
                  </Link>
                </li>
              ))}
              <li className="pt-1">
                <Link
                  href="/industries"
                  className="text-xs text-[#08A9E6] hover:underline flex items-center gap-1 font-semibold"
                >
                  <span>All Industries</span>
                  <ArrowUpRight className="w-3 h-3" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Column */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider font-heading">
              Company
            </h4>
            <ul className="space-y-2 text-sm text-[#94A3B8]">
              <li>
                <Link href="/about" className="hover:text-white transition-colors block">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/why-virtual-stack" className="hover:text-white transition-colors block">
                  Why Virtual Stack
                </Link>
              </li>
              <li>
                <Link href="/case-studies" className="hover:text-white transition-colors block">
                  Case Studies & Proof
                </Link>
              </li>
              <li>
                <Link href="/resources/faqs" className="hover:text-white transition-colors block">
                  FAQs & Security
                </Link>
              </li>
              <li>
                <Link href="/resources/blog" className="hover:text-white transition-colors block">
                  Insights & Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors block">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Direct Verified Contact Column */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider font-heading">
              Get in Touch
            </h4>
            <div className="space-y-3 text-sm text-[#94A3B8]">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#08A9E6] shrink-0 mt-1" />
                <div className="text-xs leading-relaxed">
                  <span className="font-semibold text-white block">Main Office:</span>
                  <span>{companyData.corporateHeadquarters.fullAddress}</span>
                </div>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#08A9E6] shrink-0" />
                <a
                  href={`tel:${companyData.contacts.tollFreePhone}`}
                  className="hover:text-white transition-colors font-medium text-white"
                >
                  {companyData.contacts.tollFreeDisplay}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#08A9E6] shrink-0" />
                <a
                  href={`mailto:${companyData.contacts.email}`}
                  className="hover:text-white transition-colors text-xs"
                >
                  {companyData.contacts.email}
                </a>
              </div>
              <div className="pt-2">
                <Link
                  href="/book-a-consultation"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-white bg-[#08A9E6] hover:bg-[#078FCC] px-3.5 py-2 rounded-lg transition-colors"
                >
                  <span>Book Free Consultation</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Legal & Copyright Bar */}
        <div className="pt-6 sm:pt-8 mt-auto border-t border-[#1C354E] flex flex-col md:flex-row items-center justify-between text-xs text-[#94A3B8] gap-4">
          <div>
            © {new Date().getFullYear()} {companyData.name}. All rights reserved. Operating since 2011.
          </div>
          <div className="flex items-center space-x-6">
            <Link href="/privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
            <Link href="/contact" className="hover:text-white transition-colors">
              Security & Compliance
            </Link>
            <button
              type="button"
              aria-label="Back to top"
              className="flex items-center gap-1 text-[#08A9E6] hover:text-white transition-colors font-medium cursor-pointer"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
