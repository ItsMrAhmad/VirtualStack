import React from "react";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import {
  ArrowRight,
  CheckCircle2,
  Calendar,
  ShieldCheck,
  Clock,
  Layers,
  HelpCircle,
  Headphones,
  TrendingUp,
  Users,
  PhoneCall,
  MessageSquare,
  Mail,
  Smartphone,
  Share2
} from "lucide-react";
import { servicesData, ServiceItem } from "@/lib/data/services";
import { industriesData } from "@/lib/data/industries";
import FinalCTA from "@/components/sections/FinalCTA";

import Footer from "@/components/layout/Footer";
import IndustryServiceHero from "@/components/hero/IndustryServiceHero";
import { serviceHeroConfigs } from "@/lib/data/serviceHeroConfigs";

interface ServicePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return servicesData.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = servicesData.find((s) => s.slug === slug);
  if (!service) return {};

  return {
    title: `${service.name} | Virtual Stack Operations`,
    description: service.shortDescription,
    openGraph: {
      title: `${service.name} | Virtual Stack`,
      description: service.shortDescription,
      url: `https://virtualstack.us/services/${service.slug}`,
    },
  };
}

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = servicesData.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  // Related services in the same pillar
  const relatedServices = servicesData
    .filter((s) => s.pillarId === service.pillarId && s.slug !== service.slug)
    .slice(0, 3);

  const config = serviceHeroConfigs[slug] || {
    badge: `Dedicated ${service.pillarName} Specialists`,
    h1Prefix: `${service.name.split(" ")[0]} `,
    h1Highlight: service.name.split(" ").slice(1).join(" ") || service.name,
    subheading: service.tagline,
    description: service.overview,
    stats: [
      {
        value: "99.9%",
        label: "SLA Adherence",
        icon: ShieldCheck,
        iconBg: "bg-[#E0F2FE] text-[#0284C7]",
        valueColor: "text-[#0F172A]"
      },
      {
        value: "< 60s",
        label: "Response Velocity",
        icon: Clock,
        iconBg: "bg-[#EFF6FF] text-[#2563EB]",
        valueColor: "text-[#08A9E6]"
      },
      {
        value: "98%+",
        label: "Quality & QA Accuracy",
        icon: CheckCircle2,
        iconBg: "bg-[#ECFDF5] text-[#059669]",
        valueColor: "text-emerald-600"
      }
    ],
    primaryCtaText: `Discuss Your ${service.name} Pod`,
    trustLine: {
      clientType: "Enterprise Operations",
      volumeMetric: "High-Throughput Dedicated Pods"
    },
    imageTitle: `${service.name} Desk`,
    imageSubtitle: "Dedicated workflow operations",
    statusBadge: "Live Pod",
    icon: Headphones
  };

  const isContactCenter = service.slug === "contact-center";

  const extraPills = isContactCenter ? (
    <div className="space-y-1.5 pt-0.5">
      <div className="text-[11px] font-bold uppercase tracking-wider text-[#071A2A]">
        Synchronized Channels &amp; Modalities
      </div>
      <div className="flex flex-wrap gap-1.5 sm:gap-2">
        {[
          { icon: PhoneCall, label: "Voice & Cloud VoIP" },
          { icon: MessageSquare, label: "Real-Time Web Chat" },
          { icon: Mail, label: "Email Queues" },
          { icon: Smartphone, label: "SMS & WhatsApp" },
          { icon: Share2, label: "Social Messaging" }
        ].map((ch, idx) => (
          <span
            key={idx}
            className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-[#F8FAFC] border border-[#DDE6ED] shadow-2xs text-[11px] font-medium text-[#071A2A]"
          >
            <ch.icon className="w-3 h-3 text-[#08A9E6]" />
            <span>{ch.label}</span>
          </span>
        ))}
      </div>
    </div>
  ) : undefined;

  return (
    <div
      id="service-detail-scroll-container"
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
        imageSrc={`/images/service-${service.pillarId}.jpg`}
        imageAlt={service.name}
        imageCardTitle={config.imageTitle}
        imageCardSubtitle={config.imageSubtitle}
        imageStatusBadge={config.statusBadge}
        imageIcon={config.icon}
        extraPills={extraPills}
      />

      {/* Slide 2: Challenges & Solutions */}
      <section className="h-screen h-[100dvh] min-h-screen min-h-[100dvh] w-full snap-start snap-always flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 pt-24 sm:pt-28 md:pt-32 pb-6 relative z-10 overflow-y-auto sm:overflow-visible bg-white border-b border-[#DDE6ED]">
        <div className="my-auto w-full max-w-7xl mx-auto space-y-4 sm:space-y-6 mt-3 sm:mt-5">
          <div className="text-center max-w-2xl mx-auto space-y-1">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#071A2A] font-heading">
              The challenges we solve for your team.
            </h2>
            <p className="text-xs sm:text-sm text-[#5F7183]">
              Turning operational strain into dependable, high-throughput workflows.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {/* Challenges */}
            <div className="bg-[#F7FAFC] rounded-xl p-5 border border-[#DDE6ED] space-y-3">
              <h3 className="text-base font-bold text-[#071A2A] font-heading flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-500" />
                <span>Common Operational Pain Points</span>
              </h3>
              <div className="space-y-3">
                {service.challenges.map((c, idx) => (
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
                <span>The Virtual Stack Approach</span>
              </h3>
              <div className="space-y-3">
                {service.solutions.map((s, idx) => (
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

      {/* Slide 3: Core Capabilities & Delivery Workflow */}
      <section className="h-screen h-[100dvh] min-h-screen min-h-[100dvh] w-full snap-start snap-always flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 pt-24 sm:pt-28 md:pt-32 pb-6 relative z-10 overflow-y-auto sm:overflow-visible bg-[#F7FAFC] border-b border-[#DDE6ED]">
        <div className="my-auto w-full max-w-7xl mx-auto space-y-5 mt-3 sm:mt-5">
          <div className="text-center max-w-2xl mx-auto space-y-1">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#071A2A] font-heading">
              Capabilities & Delivery Workflow
            </h2>
            <p className="text-xs sm:text-sm text-[#5F7183]">
              Standardized execution steps and verified functional scope.
            </p>
          </div>

          {/* Capabilities Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {service.capabilities.map((cap, idx) => (
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

          {/* 3 Process Steps */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
            {service.processSteps.map((step, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-white border border-[#DDE6ED] space-y-1.5 shadow-xs"
              >
                <span className="text-xl sm:text-2xl font-black text-[#08A9E6] font-heading">
                  {step.step}
                </span>
                <h3 className="text-xs sm:text-sm font-bold text-[#071A2A] font-heading">{step.title}</h3>
                <p className="text-xs text-[#5F7183] leading-relaxed line-clamp-2">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Slide 4: Business Benefits & FAQs */}
      <section className="h-screen h-[100dvh] min-h-screen min-h-[100dvh] w-full snap-start snap-always flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 pt-24 sm:pt-28 md:pt-32 pb-6 relative z-10 overflow-y-auto sm:overflow-visible bg-white border-b border-[#DDE6ED]">
        <div className="my-auto w-full max-w-7xl mx-auto space-y-5 mt-3 sm:mt-5">
          <div className="text-center max-w-2xl mx-auto space-y-1">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#071A2A] font-heading">
              Measurable Business Value & FAQs
            </h2>
            <p className="text-xs sm:text-sm text-[#5F7183]">
              Bottom-line outcomes and answers to common operational questions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {service.benefits.map((b, idx) => (
              <div key={idx} className="bg-[#F7FAFC] rounded-xl p-4 border border-[#DDE6ED] shadow-xs space-y-1">
                <h3 className="text-xs sm:text-sm font-bold text-[#071A2A] font-heading">{b.title}</h3>
                <p className="text-xs text-[#5F7183] leading-relaxed line-clamp-2">{b.description}</p>
              </div>
            ))}
          </div>

          {/* FAQs */}
          {service.faqs.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 max-w-4xl mx-auto pt-2">
              {service.faqs.slice(0, 4).map((faq, idx) => (
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

      {/* Slide 5: Related Services & Final CTA */}
      <FinalCTA />

      {/* Slide 6: Dedicated Footer Snap Slide */}
      <div className="service-detail-snap-section w-full snap-start snap-always min-h-[100dvh] h-[100dvh] bg-[#071A2A] flex flex-col justify-between overflow-y-auto">
        <Footer />
      </div>
    </div>
  );
}
