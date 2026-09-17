import React from "react";
import type { Metadata } from "next";
import { companyData } from "@/lib/data/company";

export const metadata: Metadata = {
  title: "Terms of Service | Virtual Stack",
  description: "Terms and conditions governing the use of Virtual Stack's website and service offerings.",
};

export default function TermsPage() {
  return (
    <div className="py-16 lg:py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#071A2A] tracking-tight font-heading mt-2">
            Terms of Service
          </h1>
          <p className="text-xs text-[#5F7183] mt-2">Last Updated: January 2026</p>
        </div>

        <div className="prose prose-sm text-[#5F7183] space-y-6 text-sm leading-relaxed border-t border-[#DDE6ED] pt-8">
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-[#071A2A] font-heading">1. Acceptance of Terms</h2>
            <p>
              By accessing or using the Virtual Stack website (virtualstack.us), you agree to comply with
              and be bound by these Terms of Service. If you do not agree with these terms, please do not use
              our website.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-[#071A2A] font-heading">2. Professional Services Engagements</h2>
            <p>
              All professional outsourcing, customer care, dispatch, and dedicated remote team services provided
              by Virtual Stack are governed by formal, mutually executed Master Services Agreements (MSAs),
              Statements of Work (SOWs), and Service Level Agreements (SLAs).
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-[#071A2A] font-heading">3. Intellectual Property</h2>
            <p>
              All trademarks, logos, diagrams, text, and visual design assets on this website are the property
              of Virtual Stack Technologies Inc. or their respective licensors.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-[#071A2A] font-heading">4. Contact Information</h2>
            <div className="p-4 rounded-xl bg-[#F7FAFC] border border-[#DDE6ED] text-xs space-y-1">
              <p className="font-bold text-[#071A2A]">{companyData.name}</p>
              <p>{companyData.corporateHeadquarters.fullAddress}</p>
              <p>Email: {companyData.contacts.email}</p>
              <p>Phone: {companyData.contacts.tollFreeDisplay}</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
