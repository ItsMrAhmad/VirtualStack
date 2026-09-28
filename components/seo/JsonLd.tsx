import React from "react";
import { companyData } from "@/lib/data/company";

interface JsonLdProps {
  data: Record<string, unknown> | Record<string, unknown>[];
}

export default function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export const ORG_ID = "https://virtualstack.us/#organization";

export function getOrganizationAndWebsiteJsonLd() {
  return [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "@id": ORG_ID,
      name: companyData.name,
      legalName: companyData.legalName,
      url: "https://virtualstack.us",
      logo: "https://virtualstack.us/logo.png",
      foundingDate: String(companyData.establishedYear),
      description: companyData.shortDescription,
      address: {
        "@type": "PostalAddress",
        streetAddress: `${companyData.corporateHeadquarters.addressLine1}, ${companyData.corporateHeadquarters.suite}`,
        addressLocality: companyData.corporateHeadquarters.city,
        addressRegion: companyData.corporateHeadquarters.provinceState,
        postalCode: companyData.corporateHeadquarters.postalCode,
        addressCountry: "CA",
      },
      contactPoint: {
        "@type": "ContactPoint",
        telephone: companyData.contacts.tollFreePhone,
        contactType: "customer service",
        availableLanguage: ["English"],
        hoursAvailable: "Mo-Su 00:00-24:00",
      },
      sameAs: [
        companyData.socials.facebook,
        companyData.socials.linkedin,
        companyData.socials.twitter,
        companyData.socials.instagram,
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      name: companyData.name,
      image: "https://virtualstack.us/logo.png",
      "@id": "https://virtualstack.us/#localBusiness",
      url: "https://virtualstack.us",
      telephone: companyData.contacts.tollFreePhone,
      address: {
        "@type": "PostalAddress",
        streetAddress: `${companyData.corporateHeadquarters.addressLine1}, ${companyData.corporateHeadquarters.suite}`,
        addressLocality: companyData.corporateHeadquarters.city,
        addressRegion: companyData.corporateHeadquarters.provinceState,
        postalCode: companyData.corporateHeadquarters.postalCode,
        addressCountry: "CA",
      },
      priceRange: "$$",
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      url: "https://virtualstack.us",
      name: companyData.name,
      publisher: {
        "@id": ORG_ID,
      },
    },
  ];
}

export function getServiceJsonLd(service: {
  name: string;
  shortDescription: string;
  slug: string;
  pillarName?: string;
}) {
  return [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: service.name,
      description: service.shortDescription,
      serviceType: service.pillarName || "Business Process Outsourcing",
      url: `https://virtualstack.us/services/${service.slug}`,
      provider: {
        "@id": ORG_ID,
      },
      areaServed: ["US", "CA"],
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://virtualstack.us",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Services",
          item: "https://virtualstack.us/services",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: service.name,
          item: `https://virtualstack.us/services/${service.slug}`,
        },
      ],
    },
  ];
}

export function getIndustryJsonLd(industry: {
  name: string;
  description: string;
  slug: string;
}) {
  return [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: `${industry.name} Outsourcing Solutions`,
      description: industry.description,
      serviceType: `${industry.name} Operational Support`,
      url: `https://virtualstack.us/industries/${industry.slug}`,
      provider: {
        "@id": ORG_ID,
      },
      audience: {
        "@type": "Audience",
        audienceType: `${industry.name} Businesses`,
      },
      areaServed: ["US", "CA"],
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://virtualstack.us",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Industries",
          item: "https://virtualstack.us/industries",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: industry.name,
          item: `https://virtualstack.us/industries/${industry.slug}`,
        },
      ],
    },
  ];
}

export function getBlogPostingJsonLd(article: {
  title: string;
  excerpt: string;
  slug: string;
  date: string;
  image: string;
  author: { name: string; role?: string };
}) {
  const imageUrl = article.image.startsWith("http")
    ? article.image
    : `https://virtualstack.us${article.image.startsWith("/") ? "" : "/"}${article.image}`;
  const parsed = new Date(article.date);
  const isoDate = isNaN(parsed.getTime()) ? "2026-09-26" : parsed.toISOString().split("T")[0];

  return [
    {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      headline: article.title,
      description: article.excerpt,
      image: imageUrl,
      datePublished: isoDate,
      dateModified: isoDate,
      author: {
        "@type": "Person",
        name: article.author.name,
        jobTitle: article.author.role,
      },
      publisher: {
        "@id": ORG_ID,
      },
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": `https://virtualstack.us/resources/blog/${article.slug}`,
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://virtualstack.us",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Blog",
          item: "https://virtualstack.us/resources/blog",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: article.title,
          item: `https://virtualstack.us/resources/blog/${article.slug}`,
        },
      ],
    },
  ];
}

export function getFaqPageJsonLd(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.answer,
      },
    })),
  };
}

export function getContactPageJsonLd() {
  return [
    {
      "@context": "https://schema.org",
      "@type": "ContactPage",
      name: "Contact Virtual Stack",
      url: "https://virtualstack.us/contact",
      description:
        "Contact Virtual Stack 24/7/365 operational management and client onboarding teams.",
    },
    {
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      name: companyData.name,
      legalName: companyData.legalName,
      url: "https://virtualstack.us",
      telephone: companyData.contacts.tollFreePhone,
      email: companyData.contacts.email,
      openingHours: "Mo-Su 00:00-23:59",
      address: {
        "@type": "PostalAddress",
        streetAddress: `${companyData.corporateHeadquarters.addressLine1}, ${companyData.corporateHeadquarters.suite}`,
        addressLocality: companyData.corporateHeadquarters.city,
        addressRegion: companyData.corporateHeadquarters.provinceState,
        postalCode: companyData.corporateHeadquarters.postalCode,
        addressCountry: "CA",
      },
      priceRange: "$$",
    },
  ];
}
