import React from "react";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import {
  ArrowRight,
  CheckCircle2,
  Calendar,
  Clock,
  ShieldCheck,
  HelpCircle,
  Briefcase,
  Truck,
  HeartPulse,
  Landmark,
  Building2,
  ShoppingCart,
  Code,
  PhoneCall
} from "lucide-react";
import { industriesData, IndustryItem } from "@/lib/data/industries";
import FinalCTA from "@/components/sections/FinalCTA";
import Footer from "@/components/layout/Footer";
import IndustryServiceHero from "@/components/hero/IndustryServiceHero";
import { industryHeroConfigs } from "@/lib/data/industryHeroConfigs";

interface IndustryPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return industriesData.map((industry) => ({
    slug: industry.slug,
  }));
}

export async function generateMetadata({ params }: IndustryPageProps): Promise<Metadata> {
  const { slug } = await params;
  const industry = industriesData.find((i) => i.slug === slug);
  if (!industry) return {};

  return {
    title: `${industry.name} Outsourcing Solutions | Virtual Stack`,
    description: industry.description,
    openGraph: {
      title: `${industry.name} Outsourcing Solutions | Virtual Stack`,
      description: industry.description,
      url: `https://virtualstack.us/industries/${industry.slug}`,
    },
  };
}

export default async function IndustryDetailPage({ params }: IndustryPageProps) {
  const { slug } = await params;
  const industry = industriesData.find((i) => i.slug === slug);

  if (!industry) {
    notFound();
  }

  const config = industryHeroConfigs[slug] || {
    badge: `Specialized ${industry.shortName} Operations`,
    h1Prefix: `${industry.name.split(" ")[0]}, `,
    h1Highlight: `${industry.shortName} Operations`,
    h1Suffix: " Pods",
    description: industry.description,
    stats: [
      {
        value: "100%",
        label: "SLA Adherence",
        icon: ShieldCheck,
        iconBg: "bg-[#E0F2FE] text-[#0284C7]",
        valueColor: "text-[#0F172A]"
      },
      {
        value: "< 3 Min",
        label: "Queue Response",
        icon: Clock,
        iconBg: "bg-[#EFF6FF] text-[#2563EB]",
        valueColor: "text-[#08A9E6]"
      },
      {
        value: "99.9%",
        label: "Quality Score",
        icon: CheckCircle2,
        iconBg: "bg-[#ECFDF5] text-[#059669]",
        valueColor: "text-emerald-600"
      }
    ],
    primaryCtaText: `Discuss Your ${industry.shortName} Pod`,
    trustLine: {
      clientType: "Enterprise Clients",
      volumeMetric: "10,000+ Tasks Handled/Mo"
    },
    imageTitle: `${industry.shortName} Operations`,
    imageSubtitle: "Dedicated workflow management",
    statusBadge: "Live SOP",
    icon: Briefcase
  };

  return (
    <div
      id="industry-detail-scroll-container"
      tabIndex={0}
      className="h-screen h-[100dvh] overflow-y-scroll snap-y snap-mandatory scroll-smooth relative bg-white text-[#0B1724] outline-none"
    >
      {/* Slide 1: Unified Reusable Hero Template */}
      <IndustryServiceHero
        badge={config.badge}
        h1Prefix={config.h1Prefix}
        h1Highlight={config.h1Highlight}
        h1Suffix={config.h1Suffix}
        subheading={config.subheading}
        description={config.description}
        stats={config.stats}
        primaryCtaText={config.primaryCtaText}
        primaryCtaHref="/book-a-consultation"
        secondaryCtaText="Request Scope Review"
        secondaryCtaHref="/contact"
        trustLine={config.trustLine}
        compatibility={config.compatibility}
        imageSrc={`/images/industry-${industry.slug}.jpg`}
        imageAlt={industry.name}
        imageCardTitle={config.imageTitle}
        imageCardSubtitle={config.imageSubtitle}
        imageStatusBadge={config.statusBadge}
        imageIcon={config.icon}
      />

      {/* Slide 2: Challenges & Specialized Solutions */}
      <section className="h-screen h-[100dvh] min-h-screen min-h-[100dvh] w-full snap-start snap-always flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 pt-24 sm:pt-28 md:pt-32 pb-6 relative z-10 overflow-y-auto sm:overflow-visible bg-white border-b border-[#DDE6ED]">
        <div className="my-auto w-full max-w-7xl mx-auto space-y-4 sm:space-y-6 mt-3 sm:mt-5">
          <div className="text-center max-w-2xl mx-auto space-y-1">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#071A2A] font-heading">
              Challenges unique to {industry.shortName}.
            </h2>
            <p className="text-xs sm:text-sm text-[#5F7183]">
              Specialized operational execution engineered around sector compliance and workflows.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {/* Challenges */}
            <div className="bg-[#F7FAFC] rounded-xl p-5 border border-[#DDE6ED] space-y-3">
              <h3 className="text-base font-bold text-[#071A2A] font-heading flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-500" />
                <span>Operational Roadblocks</span>
              </h3>
              <div className="space-y-3">
                {industry.challenges.map((c, idx) => (
                  <div key={idx} className="space-y-0.5">
                    <h4 className="text-xs sm:text-sm font-bold text-[#071A2A]">{c.title}</h4>
                    <p className="text-xs text-[#5F7183] leading-relaxed line-clamp-2">{c.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Solutions */}
            <div className="bg-[#EBF7FD]/50 rounded-xl p-5 border border-[#08A9E6]/30 space-y-3">
              <h3 className="text-base font-bold text-[#071A2A] font-heading flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                <span>Virtual Stack Specialized Solutions</span>
              </h3>
              <div className="space-y-3">
                {industry.solutions.map((s, idx) => (
                  <div key={idx} className="space-y-0.5">
                    <h4 className="text-xs sm:text-sm font-bold text-[#071A2A]">{s.title}</h4>
                    <p className="text-xs text-[#5F7183] leading-relaxed line-clamp-2">{s.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Slide 3: Specialized Capabilities & Operational Benefits */}
      <section className="h-screen h-[100dvh] min-h-screen min-h-[100dvh] w-full snap-start snap-always flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 pt-24 sm:pt-28 md:pt-32 pb-6 relative z-10 overflow-y-auto sm:overflow-visible bg-[#F7FAFC] border-b border-[#DDE6ED]">
        <div className="my-auto w-full max-w-7xl mx-auto space-y-5 mt-3 sm:mt-5">
          <div className="text-center max-w-2xl mx-auto space-y-1">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#071A2A] font-heading">
              Capabilities & Operational Advantages
            </h2>
            <p className="text-xs sm:text-sm text-[#5F7183]">
              Workflow scope and proven benefits for {industry.name}.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {industry.capabilities.map((cap, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl p-3 border border-[#DDE6ED] shadow-xs flex items-center gap-2.5"
              >
                <div className="p-1.5 rounded-lg bg-[#EBF7FD] text-[#08A9E6] shrink-0">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                </div>
                <span className="text-xs font-semibold text-[#071A2A] line-clamp-1">{cap}</span>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
            {industry.operationalBenefits.map((b, idx) => (
              <div key={idx} className="bg-white rounded-xl p-4 border border-[#DDE6ED] shadow-xs space-y-1">
                <h3 className="text-xs sm:text-sm font-bold text-[#071A2A] font-heading">{b.title}</h3>
                <p className="text-xs text-[#5F7183] leading-relaxed line-clamp-2">{b.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Slide 4: Recommended Services & FAQs */}
      <section className="h-screen h-[100dvh] min-h-screen min-h-[100dvh] w-full snap-start snap-always flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 pt-24 sm:pt-28 md:pt-32 pb-6 relative z-10 overflow-y-auto sm:overflow-visible bg-white border-b border-[#DDE6ED]">
        <div className="my-auto w-full max-w-7xl mx-auto space-y-5 mt-3 sm:mt-5">
          <div className="text-center max-w-2xl mx-auto space-y-1">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#071A2A] font-heading">
              Recommended Services & FAQs
            </h2>
            <p className="text-xs sm:text-sm text-[#5F7183]">
              Complementary capabilities and common questions for {industry.shortName} operators.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {industry.relevantServices.map((rel) => (
              <Link
                key={rel.slug}
                href={`/services/${rel.slug}`}
                className="bg-[#F7FAFC] rounded-xl p-3.5 border border-[#DDE6ED] hover:border-[#08A9E6] shadow-xs transition-all group flex items-center justify-between"
              >
                <div className="flex items-center gap-2">
                  <Briefcase className="w-3.5 h-3.5 text-[#08A9E6]" />
                  <span className="text-xs font-bold text-[#071A2A] group-hover:text-[#08A9E6] transition-colors">
                    {rel.name}
                  </span>
                </div>
                <ArrowRight className="w-3 h-3 text-[#5F7183] group-hover:text-[#08A9E6] group-hover:translate-x-0.5 transition-all" />
              </Link>
            ))}
          </div>

          {/* Industry FAQs */}
          {industry.faqs.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 max-w-4xl mx-auto pt-2">
              {industry.faqs.slice(0, 4).map((faq, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-xl bg-[#F7FAFC] border border-[#DDE6ED] space-y-1"
                >
                  <h3 className="text-xs font-bold text-[#071A2A] flex items-center gap-1.5">
                    <HelpCircle className="w-3.5 h-3.5 text-[#08A9E6] shrink-0" />
                    <span className="line-clamp-1">{faq.question}</span>
                  </h3>
                  <p className="text-xs text-[#5F7183] leading-relaxed line-clamp-2 pl-5">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Slide 5: Final CTA */}
      <FinalCTA />

      {/* Slide 6: Dedicated Footer Snap Slide */}
      <div className="industry-detail-snap-section w-full snap-start snap-always min-h-[100dvh] h-[100dvh] bg-[#071A2A] flex flex-col justify-between overflow-y-auto">
        <Footer />
      </div>
    </div>
  );
}
