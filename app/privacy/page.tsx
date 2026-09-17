import React from "react";
import type { Metadata } from "next";
import { companyData } from "@/lib/data/company";

export const metadata: Metadata = {
  title: "Privacy Policy | Virtual Stack",
  description: "Virtual Stack's corporate privacy policy and data governance practices.",
};

export default function PrivacyPage() {
  return (
    <div className="py-16 lg:py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#071A2A] tracking-tight font-heading mt-2">
            Privacy Policy
          </h1>
          <p className="text-xs text-[#5F7183] mt-2">Last Updated: January 2026</p>
        </div>

        <div className="prose prose-sm text-[#5F7183] space-y-6 text-sm leading-relaxed border-t border-[#DDE6ED] pt-8">
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-[#071A2A] font-heading">1. Overview</h2>
            <p>
              Virtual Stack ("we", "us", "our") respects the privacy of our clients, website visitors, and
              operational partners. This Privacy Policy explains our practices regarding the collection,
              use, and protection of information gathered through our website (virtualstack.us) and our B2B
              service engagements.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-[#071A2A] font-heading">2. Information We Collect</h2>
            <p>
              We collect information that you voluntarily submit when inquiring about our services or scheduling
              a consultation, including your name, work email address, company name, telephone number, and
              operational requirements.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-[#071A2A] font-heading">3. Operational Data Protection</h2>
            <p>
              When providing Customer Support, back-office, or dedicated staffing services to our clients,
              all client customer data is processed under strict confidentiality agreements. Our operations
              centers enforce biometric physical access control, 24/7 CCTV surveillance, and restricted workstation
              environments with disabled removable media.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-[#071A2A] font-heading">4. Contact Information</h2>
            <p>
              If you have any questions regarding this policy or our data security practices, please contact us at:
            </p>
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
