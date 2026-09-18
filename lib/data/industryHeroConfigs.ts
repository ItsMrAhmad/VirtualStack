import React from "react";
import {
  Clock,
  PhoneCall,
  CheckCircle2,
  ShieldCheck,
  TrendingUp,
  Briefcase,
  Truck,
  HeartPulse,
  Landmark,
  Building2,
  ShoppingCart,
  Code
} from "lucide-react";
import { HeroStatItem } from "@/components/hero/IndustryServiceHero";

export interface IndustryHeroData {
  badge: string;
  h1Prefix?: string;
  h1Highlight: string;
  h1Suffix?: string;
  subheading?: string;
  description: string;
  stats: [HeroStatItem, HeroStatItem, HeroStatItem];
  primaryCtaText: string;
  trustLine: {
    clientType: string;
    volumeMetric: string;
  };
  compatibility?: {
    title: string;
    tools: string[];
  };
  imageTitle: string;
  imageSubtitle: string;
  statusBadge: string;
  icon: any;
}

export const industryHeroConfigs: Record<string, IndustryHeroData> = {
  "dispatch-logistics": {
    badge: "12,000+ Loads Managed Monthly",
    h1Prefix: "24/7 Fleet Dispatch, ",
    h1Highlight: "Driver Coordination",
    h1Suffix: " & Load Tracking",
    subheading: "Built for mid-size carriers and freight brokerages - save up to 60% vs. domestic staffing.",
    description: "Eliminate missed check-ins, unbilled detention fees, and soaring payroll overhead. Our dedicated coordinators handle driver check calls, rate confirmations, and TMS updates at flat, predictable rates.",
    stats: [
      {
        value: "Up to 60%",
        label: "Dispatch Cost Savings",
        icon: TrendingUp,
        iconBg: "bg-[#ECFDF5] text-[#059669]",
        valueColor: "text-emerald-600"
      },
      {
        value: "< 3 Min",
        label: "Driver Check Call Response",
        icon: PhoneCall,
        iconBg: "bg-[#EFF6FF] text-[#2563EB]",
        valueColor: "text-[#08A9E6]"
      },
      {
        value: "100%",
        label: "TMS Milestone Logging",
        icon: CheckCircle2,
        iconBg: "bg-[#E0F2FE] text-[#0284C7]",
        valueColor: "text-[#071A2A]"
      }
    ],
    primaryCtaText: "Get a Dispatch Coverage Quote",
    trustLine: {
      clientType: "45+ Regional & Long-Haul Carriers",
      volumeMetric: "12,000+ Loads Managed/Month"
    },
    compatibility: {
      title: "TMS & Load Board Compatible",
      tools: ["DAT One", "Truckstop", "McLeod", "Trimble TMW"]
    },
    imageTitle: "Fleet Track & Trace",
    imageSubtitle: "ELD & GPS live monitoring",
    statusBadge: "Live SOP",
    icon: Truck
  },
  "healthcare": {
    badge: "HIPAA-Compliant BAA Included",
    h1Prefix: "Dedicated Healthcare BPO, ",
    h1Highlight: "Patient Intake",
    h1Suffix: " & Medical Billing",
    subheading: "Purpose-built for medical practices, telehealth clinics, and billing networks.",
    description: "Prevent billing backlogs and patient intake bottlenecks with certified healthcare coordinators. We handle insurance verification, patient scheduling, and EHR data entry under strict compliance standards.",
    stats: [
      {
        value: "99.8%",
        label: "EHR Data Accuracy",
        icon: ShieldCheck,
        iconBg: "bg-[#E0F2FE] text-[#0284C7]",
        valueColor: "text-[#071A2A]"
      },
      {
        value: "< 2 Min",
        label: "Patient Intake Queue Time",
        icon: Clock,
        iconBg: "bg-[#EFF6FF] text-[#2563EB]",
        valueColor: "text-[#08A9E6]"
      },
      {
        value: "98%+",
        label: "Clean Claim First-Pass Rate",
        icon: CheckCircle2,
        iconBg: "bg-[#ECFDF5] text-[#059669]",
        valueColor: "text-emerald-600"
      }
    ],
    primaryCtaText: "Get a Medical Staffing Quote",
    trustLine: {
      clientType: "50+ Clinics & Healthcare Providers",
      volumeMetric: "35,000+ Patient Encounters/Mo"
    },
    compatibility: {
      title: "EHR & Medical Platforms",
      tools: ["Epic", "Cerner", "AthenaHealth", "Kareo"]
    },
    imageTitle: "Patient Care Coordination",
    imageSubtitle: "EHR & schedule management",
    statusBadge: "HIPAA Verified",
    icon: HeartPulse
  },
  "financial-services": {
    badge: "SOC 2 Aligned Facility & Workstations",
    h1Prefix: "Dedicated Financial Operations, ",
    h1Highlight: "Bookkeeping",
    h1Suffix: " & Reconciliation",
    subheading: "Engineered for fintechs, CPA firms, lending platforms, and wealth managers.",
    description: "Eliminate ledger backlogs and month-end closing scrambles with trained accounting pods. We manage accounts payable, KYC document verification, and daily cash reconciliations with full audit trails.",
    stats: [
      {
        value: "99.9%",
        label: "Ledger Posting Accuracy",
        icon: ShieldCheck,
        iconBg: "bg-[#E0F2FE] text-[#0284C7]",
        valueColor: "text-[#071A2A]"
      },
      {
        value: "< 24hr",
        label: "Reconciliation Turnaround",
        icon: Clock,
        iconBg: "bg-[#EFF6FF] text-[#2563EB]",
        valueColor: "text-[#08A9E6]"
      },
      {
        value: "100%",
        label: "Audit Trail Verification",
        icon: CheckCircle2,
        iconBg: "bg-[#ECFDF5] text-[#059669]",
        valueColor: "text-emerald-600"
      }
    ],
    primaryCtaText: "Get a Finance Pod Proposal",
    trustLine: {
      clientType: "35+ Fintechs & CPA Firms",
      volumeMetric: "150,000+ Transactions Reconciled/Mo"
    },
    compatibility: {
      title: "Accounting & Fintech Tools",
      tools: ["QuickBooks", "NetSuite", "Xero", "Salesforce"]
    },
    imageTitle: "Financial & Ledger Ops",
    imageSubtitle: "Daily reconciliation & payroll",
    statusBadge: "Audit Ready",
    icon: Landmark
  },
  "insurance": {
    badge: "99.4% FNOL Intake Compliance",
    h1Prefix: "High-Velocity Insurance FNOL, ",
    h1Highlight: "Claims Triage",
    h1Suffix: " & Policy Support",
    subheading: "Built for agencies, MGAs, carriers, and third-party administrators.",
    description: "Prevent policyholder churn and FNOL bottlenecks during severe weather peaks and high-claim volumes. Our licensed-assist coordinators capture first notice of loss, verify policy limits, and manage adjuster scheduling.",
    stats: [
      {
        value: "< 3 Min",
        label: "First Notice of Loss Intake",
        icon: PhoneCall,
        iconBg: "bg-[#E0F2FE] text-[#0284C7]",
        valueColor: "text-[#071A2A]"
      },
      {
        value: "100%",
        label: "Policy File Verification",
        icon: CheckCircle2,
        iconBg: "bg-[#EFF6FF] text-[#2563EB]",
        valueColor: "text-[#08A9E6]"
      },
      {
        value: "18k+",
        label: "Claims Handled Monthly",
        icon: ShieldCheck,
        iconBg: "bg-[#ECFDF5] text-[#059669]",
        valueColor: "text-emerald-600"
      }
    ],
    primaryCtaText: "Get an Insurance Desk Proposal",
    trustLine: {
      clientType: "40+ Insurance Agencies & MGAs",
      volumeMetric: "120,000+ Policies Serviced Annually"
    },
    compatibility: {
      title: "Agency Management Systems",
      tools: ["Applied Epic", "AMS360", "Guidewire", "HawkSoft"]
    },
    imageTitle: "Claims & Policy Ingestion",
    imageSubtitle: "FNOL & policy verifications",
    statusBadge: "Active Desk",
    icon: ShieldCheck
  },
  "real-estate": {
    badge: "< 60s Inbound Tenant Response",
    h1Prefix: "Dedicated Property Management, ",
    h1Highlight: "Tenant Triage",
    h1Suffix: " & Maintenance Dispatch",
    subheading: "Built for property managers, residential portfolios, and commercial asset teams.",
    description: "Stop losing prospective renters to slow inquiry responses and prevent repair delays. We handle 24/7 emergency maintenance calls, tenant lease questions, vendor work orders, and showing bookings.",
    stats: [
      {
        value: "< 60s",
        label: "Tenant Inquiry Response",
        icon: PhoneCall,
        iconBg: "bg-[#E0F2FE] text-[#0284C7]",
        valueColor: "text-[#071A2A]"
      },
      {
        value: "100%",
        label: "Emergency Dispatch Logging",
        icon: CheckCircle2,
        iconBg: "bg-[#EFF6FF] text-[#2563EB]",
        valueColor: "text-[#08A9E6]"
      },
      {
        value: "14k+",
        label: "Active Doors Supported",
        icon: Building2,
        iconBg: "bg-[#ECFDF5] text-[#059669]",
        valueColor: "text-emerald-600"
      }
    ],
    primaryCtaText: "Get a Property Desk Quote",
    trustLine: {
      clientType: "30+ Property Management Groups",
      volumeMetric: "14,000+ Active Doors Supported"
    },
    compatibility: {
      title: "Property Platforms Compatible",
      tools: ["AppFolio", "Buildium", "Yardi", "RealPage"]
    },
    imageTitle: "Property & Tenant Desk",
    imageSubtitle: "Lease, maintenance & inquiries",
    statusBadge: "Live Desk",
    icon: Building2
  },
  "ecommerce": {
    badge: "96%+ Customer CSAT Maintained",
    h1Prefix: "High-Volume E-Commerce Support, ",
    h1Highlight: "Returns",
    h1Suffix: " & Order Resolution",
    subheading: "Engineered for Shopify, Amazon, and DTC retail brands facing peak-volume spikes.",
    description: "Stop lost sales from slow chat replies and eliminate WISMO (Where Is My Order) ticket backlogs. Our trained retail agents process returns, track delayed shipments, and resolve customer issues across live chat, email, and social.",
    stats: [
      {
        value: "< 45s",
        label: "Live Chat First Response",
        icon: Clock,
        iconBg: "bg-[#E0F2FE] text-[#0284C7]",
        valueColor: "text-[#071A2A]"
      },
      {
        value: "96%+",
        label: "CSAT Resolution Score",
        icon: CheckCircle2,
        iconBg: "bg-[#EFF6FF] text-[#2563EB]",
        valueColor: "text-[#08A9E6]"
      },
      {
        value: "35k+",
        label: "Returns & Orders Resolved/Mo",
        icon: ShoppingCart,
        iconBg: "bg-[#ECFDF5] text-[#059669]",
        valueColor: "text-emerald-600"
      }
    ],
    primaryCtaText: "Get an E-Commerce Support Quote",
    trustLine: {
      clientType: "65+ Shopify & Omnichannel Merchants",
      volumeMetric: "400,000+ Customer Inquiries Resolved"
    },
    compatibility: {
      title: "E-Commerce Tech Stack",
      tools: ["Shopify", "Gorgias", "Zendesk", "Klaviyo"]
    },
    imageTitle: "E-Commerce Customer Desk",
    imageSubtitle: "Order tracking, returns & chat",
    statusBadge: "Live Support",
    icon: ShoppingCart
  },
  "technology": {
    badge: "92% First-Contact Ticket Resolution",
    h1Prefix: "Technical Support, ",
    h1Highlight: "Tier 1–3 Helpdesk",
    h1Suffix: " & SaaS Operations",
    subheading: "Built for B2B SaaS, IT services, and software platforms with SLA commitments.",
    description: "Protect retention and prevent churn by resolving user bug reports, onboarding questions, and outage tickets immediately. Our technical support pods triage bugs, reproduce errors in sandbox environments, and route escalations directly into your dev workflow.",
    stats: [
      {
        value: "< 5 Min",
        label: "Critical SLA Ticket Response",
        icon: Clock,
        iconBg: "bg-[#E0F2FE] text-[#0284C7]",
        valueColor: "text-[#071A2A]"
      },
      {
        value: "92%",
        label: "First-Contact Resolution",
        icon: CheckCircle2,
        iconBg: "bg-[#EFF6FF] text-[#2563EB]",
        valueColor: "text-[#08A9E6]"
      },
      {
        value: "100%",
        label: "Jira Escalation SLA",
        icon: Code,
        iconBg: "bg-[#ECFDF5] text-[#059669]",
        valueColor: "text-emerald-600"
      }
    ],
    primaryCtaText: "Get a Technical Helpdesk Quote",
    trustLine: {
      clientType: "45+ High-Growth SaaS Platforms",
      volumeMetric: "60,000+ Active Users Supported"
    },
    compatibility: {
      title: "Tech & DevOps Stack",
      tools: ["Jira", "Zendesk", "GitHub", "Slack", "Datadog"]
    },
    imageTitle: "Technical Helpdesk Pod",
    imageSubtitle: "API, app & infrastructure triage",
    statusBadge: "Live SLA",
    icon: Code
  },
  "professional-services": {
    badge: "Strict NDA & Confidentiality Guaranteed",
    h1Prefix: "Executive Assistance, ",
    h1Highlight: "Client Intake",
    h1Suffix: " & Practice Support",
    subheading: "Built for law firms, management consultancies, and executive advisory practices.",
    description: "Reclaim 15+ billable partner hours every week by delegating administrative friction. Our discreet practice coordinators manage calendar scheduling, client billing prep, travel arrangements, and preliminary intake calls under rigorous confidentiality.",
    stats: [
      {
        value: "15+ Hrs",
        label: "Partner Hours Reclaimed/Wk",
        icon: Clock,
        iconBg: "bg-[#E0F2FE] text-[#0284C7]",
        valueColor: "text-[#071A2A]"
      },
      {
        value: "100%",
        label: "Conflict-Checked Intake",
        icon: ShieldCheck,
        iconBg: "bg-[#EFF6FF] text-[#2563EB]",
        valueColor: "text-[#08A9E6]"
      },
      {
        value: "500+",
        label: "Monthly Retainers Managed",
        icon: Briefcase,
        iconBg: "bg-[#ECFDF5] text-[#059669]",
        valueColor: "text-emerald-600"
      }
    ],
    primaryCtaText: "Get a Practice Support Quote",
    trustLine: {
      clientType: "50+ Law Firms & Consultancies",
      volumeMetric: "5,000+ Matters & Projects Serviced"
    },
    compatibility: {
      title: "Practice Management Compatible",
      tools: ["Clio", "PracticePanther", "Office 365", "Google Workspace"]
    },
    imageTitle: "Executive & Practice Pod",
    imageSubtitle: "Document prep, scheduling & intake",
    statusBadge: "Confidential",
    icon: Briefcase
  }
};
