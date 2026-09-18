import React from "react";
import {
  Headphones,
  Share2,
  Code,
  PhoneCall,
  Layers,
  ShieldCheck,
  CheckCircle2,
  Clock,
  TrendingUp,
  Calendar,
  Users,
  Briefcase,
  MessageSquare,
  Mail,
  Smartphone
} from "lucide-react";
import { HeroStatItem } from "@/components/hero/IndustryServiceHero";

export interface ServiceHeroData {
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
  extraPills?: React.ReactNode;
}

export const serviceHeroConfigs: Record<string, ServiceHeroData> = {
  // PILLAR 1: CUSTOMER SUPPORT
  "customer-support": {
    badge: "Top 3% Vetted Brand Specialists",
    h1Prefix: "Dedicated Customer Support, ",
    h1Highlight: "Inbound Voice",
    h1Suffix: " & Helpdesk",
    subheading: "Dedicated agents trained exclusively on your brand knowledge base and workflows.",
    description: "Eliminate long hold times, customer frustration, and agent turnover. We staff dedicated customer care specialists who represent your brand across phone, email, and live chat with guaranteed response SLAs.",
    stats: [
      {
        value: "15k+",
        label: "Monthly Inquiries Resolved",
        icon: Headphones,
        iconBg: "bg-[#E0F2FE] text-[#0284C7]",
        valueColor: "text-[#071A2A]"
      },
      {
        value: "< 60s",
        label: "First Response Time",
        icon: PhoneCall,
        iconBg: "bg-[#EFF6FF] text-[#2563EB]",
        valueColor: "text-[#08A9E6]"
      },
      {
        value: "96%+",
        label: "CSAT Satisfaction Rate",
        icon: CheckCircle2,
        iconBg: "bg-[#ECFDF5] text-[#059669]",
        valueColor: "text-emerald-600"
      }
    ],
    primaryCtaText: "Get a Customer Support Quote",
    trustLine: {
      clientType: "60+ Direct-to-Consumer & B2B Brands",
      volumeMetric: "250,000+ Inquiries Resolved Annually"
    },
    compatibility: {
      title: "Support Platforms",
      tools: ["Zendesk", "Freshdesk", "Intercom", "Salesforce Service Cloud"]
    },
    imageTitle: "Customer Support Desk",
    imageSubtitle: "Inbound phone, chat & ticketing",
    statusBadge: "Live Support",
    icon: Headphones
  },
  "contact-center": {
    badge: "Unified Multi-Channel Queue Architecture",
    h1Prefix: "Omnichannel Contact Center, ",
    h1Highlight: "Cloud Telephony",
    h1Suffix: " & Unified Inboxes",
    subheading: "Synchronize voice, chat, email, SMS, and social messaging under one roof.",
    description: "Stop letting customer inquiries fall through the cracks between siloed communication apps. We route and resolve customer touchpoints through a single unified queue with supervisor whisper-coaching and call recording.",
    stats: [
      {
        value: "5 Channels",
        label: "Voice, Chat, Email, SMS & Social",
        icon: Share2,
        iconBg: "bg-[#E0F2FE] text-[#0284C7]",
        valueColor: "text-[#071A2A]"
      },
      {
        value: "< 45s",
        label: "Average Speed to Answer",
        icon: PhoneCall,
        iconBg: "bg-[#EFF6FF] text-[#2563EB]",
        valueColor: "text-[#08A9E6]"
      },
      {
        value: "99.9%",
        label: "VoIP & Telephony Uptime",
        icon: ShieldCheck,
        iconBg: "bg-[#ECFDF5] text-[#059669]",
        valueColor: "text-emerald-600"
      }
    ],
    primaryCtaText: "Get a Contact Center Quote",
    trustLine: {
      clientType: "40+ Omnichannel Enterprise Clients",
      volumeMetric: "500,000+ Monthly Customer Interactions"
    },
    compatibility: {
      title: "Telephony & VoIP Engines",
      tools: ["Twilio", "Five9", "Talkdesk", "RingCentral"]
    },
    imageTitle: "Omnichannel Command Desk",
    imageSubtitle: "Multi-queue voice & live routing",
    statusBadge: "Live Queue",
    icon: Headphones
  },
  "technical-support": {
    badge: "Tier 1–3 Certified Technical Engineers",
    h1Prefix: "Outsourced Technical Support, ",
    h1Highlight: "Helpdesk Triage",
    h1Suffix: " & Troubleshooting",
    subheading: "Resolve user bugs, product setup hurdles, and software issues before they cause churn.",
    description: "Free your core engineering team from handling repetitive user setup issues and basic ticket triage. Our technical support agents isolate bugs, reproduce steps to replicate, and resolve software issues under strict SLA deadlines.",
    stats: [
      {
        value: "< 5 Min",
        label: "Priority First Response",
        icon: Clock,
        iconBg: "bg-[#E0F2FE] text-[#0284C7]",
        valueColor: "text-[#071A2A]"
      },
      {
        value: "88%+",
        label: "First-Contact Bug Resolution",
        icon: CheckCircle2,
        iconBg: "bg-[#EFF6FF] text-[#2563EB]",
        valueColor: "text-[#08A9E6]"
      },
      {
        value: "100%",
        label: "Jira & Ticket SLA Adherence",
        icon: Code,
        iconBg: "bg-[#ECFDF5] text-[#059669]",
        valueColor: "text-emerald-600"
      }
    ],
    primaryCtaText: "Get a Tech Support Quote",
    trustLine: {
      clientType: "35+ SaaS & Software Companies",
      volumeMetric: "12,000+ Incidents Resolved/Month"
    },
    compatibility: {
      title: "DevOps & Helpdesk Integrations",
      tools: ["Jira Service Desk", "Zendesk", "GitHub", "Slack"]
    },
    imageTitle: "Technical Support Desk",
    imageSubtitle: "Bug escalation & sandbox testing",
    statusBadge: "Tier 1-3 Active",
    icon: Code
  },
  "virtual-receptionist": {
    badge: "Zero Missed Calls Guaranteed",
    h1Prefix: "Professional Virtual Receptionists, ",
    h1Highlight: "Call Answering",
    h1Suffix: " & Live Transfer",
    subheading: "Live, articulate front-desk representation for clinics, law firms, and corporate offices.",
    description: "Never let an important caller hit voicemail or bounce to a competitor. Our articulate virtual receptionists greet callers with your custom script, screen inquiries, book appointments, and transfer urgent calls immediately.",
    stats: [
      {
        value: "< 3 Rings",
        label: "Average Pickup Speed",
        icon: PhoneCall,
        iconBg: "bg-[#E0F2FE] text-[#0284C7]",
        valueColor: "text-[#071A2A]"
      },
      {
        value: "0%",
        label: "Missed Call Rate in Hours",
        icon: ShieldCheck,
        iconBg: "bg-[#EFF6FF] text-[#2563EB]",
        valueColor: "text-[#08A9E6]"
      },
      {
        value: "100%",
        label: "Message Delivery SLA",
        icon: CheckCircle2,
        iconBg: "bg-[#ECFDF5] text-[#059669]",
        valueColor: "text-emerald-600"
      }
    ],
    primaryCtaText: "Get a Receptionist Quote",
    trustLine: {
      clientType: "80+ Professional Practices",
      volumeMetric: "45,000+ Calls Screened/Month"
    },
    compatibility: {
      title: "Telephony & Calendars",
      tools: ["Calendly", "RingCentral", "Google Calendar", "Outlook"]
    },
    imageTitle: "Virtual Front Desk",
    imageSubtitle: "Warm transfers & intake screening",
    statusBadge: "Live Answering",
    icon: PhoneCall
  },

  // PILLAR 2: BACK OFFICE OPERATIONS
  "back-office-operations": {
    badge: "Cleanroom Operational Security Protocol",
    h1Prefix: "Back Office Operations, ",
    h1Highlight: "Transaction Processing",
    h1Suffix: " & Workflow Ops",
    subheading: "High-throughput operational execution for repetitive administrative processes.",
    description: "Eliminate administrative delays and manual processing errors that bottleneck business growth. We manage complex back-office queues, invoice audits, vendor verifications, and master record maintenance with guaranteed SLAs.",
    stats: [
      {
        value: "99.9%",
        label: "Data Entry & Accuracy",
        icon: CheckCircle2,
        iconBg: "bg-[#E0F2FE] text-[#0284C7]",
        valueColor: "text-[#071A2A]"
      },
      {
        value: "< 24hr",
        label: "Turnaround SLA",
        icon: Clock,
        iconBg: "bg-[#EFF6FF] text-[#2563EB]",
        valueColor: "text-[#08A9E6]"
      },
      {
        value: "100%",
        label: "Audit Trail Compliance",
        icon: ShieldCheck,
        iconBg: "bg-[#ECFDF5] text-[#059669]",
        valueColor: "text-emerald-600"
      }
    ],
    primaryCtaText: "Get a Back-Office Proposal",
    trustLine: {
      clientType: "55+ Mid-Market Enterprises",
      volumeMetric: "1.2M+ Transactions Processed"
    },
    compatibility: {
      title: "Enterprise ERP & CRM",
      tools: ["SAP", "Oracle", "Salesforce", "Microsoft Dynamics"]
    },
    imageTitle: "Back-Office Processing",
    imageSubtitle: "Billing, records & data operations",
    statusBadge: "Active Batch",
    icon: Layers
  },
  "data-management": {
    badge: "Dual-Entry Verification Standard",
    h1Prefix: "High-Volume Data Entry, ",
    h1Highlight: "Database Cleaning",
    h1Suffix: " & Migration",
    subheading: "Turn unstructured receipts, spreadsheets, and catalogs into pristine database records.",
    description: "Stop your analysts and managers from wasting hours on tedious spreadsheet copy-pasting and manual data hygiene. Our trained data specialists clean, deduplicate, reformat, and migrate high-volume records with 99.9% precision.",
    stats: [
      {
        value: "99.95%",
        label: "Keystroke & Field Accuracy",
        icon: CheckCircle2,
        iconBg: "bg-[#E0F2FE] text-[#0284C7]",
        valueColor: "text-[#071A2A]"
      },
      {
        value: "25k+",
        label: "Daily Records Processed",
        icon: Layers,
        iconBg: "bg-[#EFF6FF] text-[#2563EB]",
        valueColor: "text-[#08A9E6]"
      },
      {
        value: "< 12hr",
        label: "Database Refresh SLA",
        icon: Clock,
        iconBg: "bg-[#ECFDF5] text-[#059669]",
        valueColor: "text-emerald-600"
      }
    ],
    primaryCtaText: "Get a Data Entry Quote",
    trustLine: {
      clientType: "45+ Growing Enterprises",
      volumeMetric: "3.5M+ Records Verified"
    },
    compatibility: {
      title: "Database & Spreadsheet Tools",
      tools: ["Excel", "Airtable", "PostgreSQL", "Google Sheets"]
    },
    imageTitle: "Data Management Desk",
    imageSubtitle: "High-speed keying & normalization",
    statusBadge: "Dual-Key QA",
    icon: Layers
  },
  "document-processing": {
    badge: "100% OCR & Human-in-the-Loop Validation",
    h1Prefix: "Document Processing, ",
    h1Highlight: "Invoice Indexing",
    h1Suffix: " & Records Extraction",
    subheading: "Convert paper scans, PDFs, and invoices into structured ERP data in under 24 hours.",
    description: "Eliminate paper backlogs, lost invoices, and manual indexing delays. We ingest, classify, OCR-verify, and key critical metadata from bills of lading, loan applications, and medical files directly into your core software.",
    stats: [
      {
        value: "< 4hr",
        label: "Rush Document Indexing",
        icon: Clock,
        iconBg: "bg-[#E0F2FE] text-[#0284C7]",
        valueColor: "text-[#071A2A]"
      },
      {
        value: "99.8%",
        label: "OCR Extraction Precision",
        icon: CheckCircle2,
        iconBg: "bg-[#EFF6FF] text-[#2563EB]",
        valueColor: "text-[#08A9E6]"
      },
      {
        value: "100%",
        label: "Encrypted Cleanroom SLA",
        icon: ShieldCheck,
        iconBg: "bg-[#ECFDF5] text-[#059669]",
        valueColor: "text-emerald-600"
      }
    ],
    primaryCtaText: "Get a Document Processing Quote",
    trustLine: {
      clientType: "50+ Enterprise Organizations",
      volumeMetric: "85,000+ Documents Digitized/Mo"
    },
    compatibility: {
      title: "Document Management Systems",
      tools: ["Adobe Sign", "DocuWare", "ABBYY", "SharePoint"]
    },
    imageTitle: "Document Ingestion Desk",
    imageSubtitle: "OCR verification & indexing",
    statusBadge: "Verified OCR",
    icon: Layers
  },
  "administrative-support": {
    badge: "15+ Hours Reclaimed Weekly per Leader",
    h1Prefix: "Corporate Administrative Support, ",
    h1Highlight: "Calendar Ops",
    h1Suffix: " & Travel Coordination",
    subheading: "Dedicated administrative assistants handling scheduling, meeting minutes, and travel.",
    description: "Free your executives and department heads from calendar gridlock and endless administrative friction. Our dedicated administrative specialists coordinate executive schedules, organize expense reports, prep agendas, and handle vendor follow-ups.",
    stats: [
      {
        value: "15+ Hrs",
        label: "Time Reclaimed per Exec/Wk",
        icon: Clock,
        iconBg: "bg-[#E0F2FE] text-[#0284C7]",
        valueColor: "text-[#071A2A]"
      },
      {
        value: "< 15 Min",
        label: "Calendar Request Speed",
        icon: Calendar,
        iconBg: "bg-[#EFF6FF] text-[#2563EB]",
        valueColor: "text-[#08A9E6]"
      },
      {
        value: "100%",
        label: "Expense & Travel Accuracy",
        icon: CheckCircle2,
        iconBg: "bg-[#ECFDF5] text-[#059669]",
        valueColor: "text-emerald-600"
      }
    ],
    primaryCtaText: "Get an Admin Support Quote",
    trustLine: {
      clientType: "75+ Executive Teams",
      volumeMetric: "1,500+ Schedules Managed/Mo"
    },
    compatibility: {
      title: "Productivity Platforms",
      tools: ["Microsoft 365", "Google Workspace", "Slack", "Zoom"]
    },
    imageTitle: "Administrative Operations",
    imageSubtitle: "Executive coordination & booking",
    statusBadge: "Active Desk",
    icon: Briefcase
  },

  // PILLAR 3: SALES & GROWTH
  "lead-generation": {
    badge: "100% Manually Verified Prospect Contacts",
    h1Prefix: "B2B Lead Generation, ",
    h1Highlight: "Account Research",
    h1Suffix: " & Outbound Prospecting",
    subheading: "Deliver sales-ready accounts and validated decision-maker contacts directly to your sales reps.",
    description: "Stop your closers from wasting 40% of their day hunting down outdated email addresses and researching unqualified leads. Our outbound researchers build custom ICP contact lists, enrich prospect data, and verify emails with zero bounce rates.",
    stats: [
      {
        value: "< 2%",
        label: "Email Bounce Rate",
        icon: ShieldCheck,
        iconBg: "bg-[#E0F2FE] text-[#0284C7]",
        valueColor: "text-[#071A2A]"
      },
      {
        value: "3.2x",
        label: "Pipeline Velocity Increase",
        icon: TrendingUp,
        iconBg: "bg-[#EFF6FF] text-[#2563EB]",
        valueColor: "text-[#08A9E6]"
      },
      {
        value: "100%",
        label: "ICP Match Verification",
        icon: CheckCircle2,
        iconBg: "bg-[#ECFDF5] text-[#059669]",
        valueColor: "text-emerald-600"
      }
    ],
    primaryCtaText: "Get a Lead Generation Proposal",
    trustLine: {
      clientType: "50+ B2B Sales Teams",
      volumeMetric: "15,000+ Verified ICP Leads/Mo"
    },
    compatibility: {
      title: "Sales Intelligence Tools",
      tools: ["Apollo.io", "ZoomInfo", "LinkedIn Sales Nav", "HubSpot"]
    },
    imageTitle: "Lead Intelligence Pod",
    imageSubtitle: "Prospect list building & validation",
    statusBadge: "Verified ICP",
    icon: TrendingUp
  },
  "appointment-setting": {
    badge: "B2B Decision-Maker Qualified Calls",
    h1Prefix: "Targeted Appointment Setting, ",
    h1Highlight: "Cold Outreach",
    h1Suffix: " & Calendar Booking",
    subheading: "Fill your account executives' calendars with high-intent sales conversations.",
    description: "Prevent empty sales pipelines and eliminate cold-calling reluctance. Our professional SDRs execute multi-touch phone, email, and social cadences to secure qualified discovery calls with decision-makers who meet your strict criteria.",
    stats: [
      {
        value: "100%",
        label: "ICP Qualification Match",
        icon: CheckCircle2,
        iconBg: "bg-[#E0F2FE] text-[#0284C7]",
        valueColor: "text-[#071A2A]"
      },
      {
        value: "35+",
        label: "Booked Meetings/Mo per SDR",
        icon: Calendar,
        iconBg: "bg-[#EFF6FF] text-[#2563EB]",
        valueColor: "text-[#08A9E6]"
      },
      {
        value: "< 24hr",
        label: "Lead Touch Cadence",
        icon: Clock,
        iconBg: "bg-[#ECFDF5] text-[#059669]",
        valueColor: "text-emerald-600"
      }
    ],
    primaryCtaText: "Get an Appointment Setting Proposal",
    trustLine: {
      clientType: "40+ High-Growth Companies",
      volumeMetric: "1,200+ Sales Meetings Booked/Mo"
    },
    compatibility: {
      title: "Outbound CRM & Cadence Tools",
      tools: ["Outreach", "SalesLoft", "HubSpot", "Salesforce"]
    },
    imageTitle: "SDR Outreach Pod",
    imageSubtitle: "Multi-touch phone & email cadences",
    statusBadge: "Active Cadence",
    icon: Calendar
  },
  "telemarketing": {
    badge: "100% Compliant TCPA & DNC Protocol",
    h1Prefix: "Outbound Telesales, ",
    h1Highlight: "Phone Surveys",
    h1Suffix: " & Database Reactivation",
    subheading: "High-volume telephone outreach executed by articulate, script-trained sales professionals.",
    description: "Turn cold prospect lists and dormant customer accounts into active revenue opportunities. Our outbound calling pods run scripted surveys, verify contact lists, qualify prospect interest, and reactivate lapsed customer accounts at scale.",
    stats: [
      {
        value: "150+",
        label: "Daily Dials per Specialist",
        icon: PhoneCall,
        iconBg: "bg-[#E0F2FE] text-[#0284C7]",
        valueColor: "text-[#071A2A]"
      },
      {
        value: "100%",
        label: "TCPA & DNC Compliance",
        icon: ShieldCheck,
        iconBg: "bg-[#EFF6FF] text-[#2563EB]",
        valueColor: "text-[#08A9E6]"
      },
      {
        value: "4.5x",
        label: "Outbound Cost Efficiency",
        icon: TrendingUp,
        iconBg: "bg-[#ECFDF5] text-[#059669]",
        valueColor: "text-emerald-600"
      }
    ],
    primaryCtaText: "Get a Telesales Campaign Quote",
    trustLine: {
      clientType: "30+ Commercial Enterprises",
      volumeMetric: "80,000+ Calls Placed Monthly"
    },
    compatibility: {
      title: "Dialers & Telephony",
      tools: ["Vicidial", "Five9", "Kixie", "PhoneBurner"]
    },
    imageTitle: "Outbound Calling Floor",
    imageSubtitle: "Scripted qualification & surveys",
    statusBadge: "TCPA Safe",
    icon: PhoneCall
  },

  // PILLAR 4: DEDICATED TEAMS
  "dedicated-remote-teams": {
    badge: "1-2 Week Turnkey Pod Onboarding",
    h1Prefix: "Dedicated Remote Teams, ",
    h1Highlight: "Managed Talent",
    h1Suffix: " & Operational Pods",
    subheading: "Exclusive full-time operational staff operating under your direct workflow management.",
    description: "Scale your core operational capacity without domestic facility leases, recruiter commissions, or HR overhead. We recruit, house, and manage dedicated full-time talent pods equipped with enterprise hardware and supervisor oversight.",
    stats: [
      {
        value: "50–65%",
        label: "Cost Advantage vs Domestic",
        icon: TrendingUp,
        iconBg: "bg-[#E0F2FE] text-[#0284C7]",
        valueColor: "text-[#071A2A]"
      },
      {
        value: "100%",
        label: "Dedicated Single-Client Focus",
        icon: Users,
        iconBg: "bg-[#EFF6FF] text-[#2563EB]",
        valueColor: "text-[#08A9E6]"
      },
      {
        value: "1–2 Wks",
        label: "Rapid Deployment SLA",
        icon: Clock,
        iconBg: "bg-[#ECFDF5] text-[#059669]",
        valueColor: "text-emerald-600"
      }
    ],
    primaryCtaText: "Build Your Remote Pod",
    trustLine: {
      clientType: "45+ Scaling Companies",
      volumeMetric: "200+ Full-Time Specialists Deployed"
    },
    compatibility: {
      title: "Management & Collaboration",
      tools: ["Slack", "Microsoft Teams", "Asana", "ClickUp"]
    },
    imageTitle: "Dedicated Remote Pod",
    imageSubtitle: "Custom workstations & managers",
    statusBadge: "Active Pod",
    icon: Users
  },
  "virtual-assistants": {
    badge: "Top 1% Bilingual Executive Talent",
    h1Prefix: "Dedicated Virtual Assistants, ",
    h1Highlight: "Executive Support",
    h1Suffix: " & Task Execution",
    subheading: "One-on-one executive assistants matched to your work style and software stack.",
    description: "Stop getting buried in inbox management, CRM maintenance, and operational busywork. Your dedicated Virtual Assistant works exclusively on your accounts, learning your priorities and executing tasks with minimal oversight.",
    stats: [
      {
        value: "Top 3%",
        label: "Vetted English-Fluent Talent",
        icon: Users,
        iconBg: "bg-[#E0F2FE] text-[#0284C7]",
        valueColor: "text-[#071A2A]"
      },
      {
        value: "< 2hr",
        label: "Priority Task Turnaround",
        icon: Clock,
        iconBg: "bg-[#EFF6FF] text-[#2563EB]",
        valueColor: "text-[#08A9E6]"
      },
      {
        value: "100%",
        label: "Dedicated 1:1 Focus",
        icon: CheckCircle2,
        iconBg: "bg-[#ECFDF5] text-[#059669]",
        valueColor: "text-emerald-600"
      }
    ],
    primaryCtaText: "Hire a Dedicated Virtual Assistant",
    trustLine: {
      clientType: "60+ Executives & Founders",
      volumeMetric: "25,000+ Tasks Completed Monthly"
    },
    compatibility: {
      title: "Executive Productivity Tools",
      tools: ["Notion", "Google Workspace", "Office 365", "Trello"]
    },
    imageTitle: "Executive Assistant Desk",
    imageSubtitle: "Inbox, calendar & task management",
    statusBadge: "1:1 Dedicated",
    icon: Users
  },
  "staff-leasing": {
    badge: "Zero Foreign Entity or Tax Liability",
    h1Prefix: "Staff Leasing, ",
    h1Highlight: "Employer of Record",
    h1Suffix: " & Facility Infrastructure",
    subheading: "Build an offshore operational hub without establishing foreign corporate subsidiaries.",
    description: "Expand your global team with zero legal or administrative friction. We act as the legal Employer of Record - handling local labor contracts, payroll, benefits, and physical facility security while you manage daily work output.",
    stats: [
      {
        value: "0",
        label: "Foreign Entity Required",
        icon: ShieldCheck,
        iconBg: "bg-[#E0F2FE] text-[#0284C7]",
        valueColor: "text-[#071A2A]"
      },
      {
        value: "100%",
        label: "Legal & Payroll Handled",
        icon: CheckCircle2,
        iconBg: "bg-[#EFF6FF] text-[#2563EB]",
        valueColor: "text-[#08A9E6]"
      },
      {
        value: "99.9%",
        label: "Power & Gigabit Uptime",
        icon: Users,
        iconBg: "bg-[#ECFDF5] text-[#059669]",
        valueColor: "text-emerald-600"
      }
    ],
    primaryCtaText: "Get a Staff Leasing Proposal",
    trustLine: {
      clientType: "35+ Global Employers",
      volumeMetric: "200+ Turnkey Seats Hosted"
    },
    compatibility: {
      title: "Facility & HR Compliance",
      tools: ["Biometric Access", "24/7 CCTV", "Cleanroom Protocols", "EOR"]
    },
    imageTitle: "Employer of Record Hub",
    imageSubtitle: "Payroll, facility & legal compliance",
    statusBadge: "EOR Verified",
    icon: Users
  }
};
