export interface KnowledgeItem {
  id: string;
  category: "service" | "industry" | "pricing" | "onboarding" | "security" | "company" | "dispatch";
  title: string;
  keywords: string[];
  summary: string;
  bullets?: string[];
  linkUrl?: string;
  linkText?: string;
  recommendedAction?: "consultation" | "contact";
}

export const chatbotKnowledge: KnowledgeItem[] = [
  // 1. General & Company Overview
  {
    id: "about-company",
    category: "company",
    title: "About Virtual Stack",
    keywords: ["who are you", "what is virtual stack", "about", "company", "location", "headquarters", "calgary", "experience", "how long"],
    summary: "Virtual Stack is a premier business operations and outsourcing partner founded in 2011 with corporate headquarters in Calgary, Alberta, Canada. We build dedicated, pre-vetted operational talent pods that integrate directly into your software, SOPs, and brand voice.",
    bullets: [
      "Operating continuously since 2011 with 200+ workstation capacity",
      "24/7/365 operational coverage across all North American and global time zones",
      "Corporate headquarters: 500 4th Avenue SW, Suite 2500, Calgary, AB, Canada",
      "Toll-free phone: +1 (888) 910-0868 | Email: info@virtualstack.us"
    ],
    linkUrl: "/about",
    linkText: "Learn more about our company",
    recommendedAction: "consultation",
  },

  // 2. Pricing & Cost Savings
  {
    id: "pricing-savings",
    category: "pricing",
    title: "Pricing & Cost Savings",
    keywords: ["pricing", "cost", "price", "how much", "rates", "fees", "savings", "save", "contract", "billing", "affordable"],
    summary: "On average, Virtual Stack clients save 50% to 65% compared to domestic in-house hiring. We offer predictable, transparent monthly pricing with zero hidden management fees or surprise surcharges.",
    bullets: [
      "Save 50–65% vs. fully burdened domestic payroll, taxes, and office overhead",
      "Structured as dedicated Full-Time Equivalents (FTEs) or custom operational packages",
      "Flexible month-to-month service agreements with zero long-term lock-in",
      "Transparent flat rates covering equipment, facility security, supervision, and benefits"
    ],
    linkUrl: "/book-a-consultation",
    linkText: "Get custom pricing for your team",
    recommendedAction: "consultation",
  },

  // 3. Onboarding & Implementation
  {
    id: "onboarding-timeline",
    category: "onboarding",
    title: "Onboarding & Ramp-Up Timeline",
    keywords: ["onboarding", "how fast", "timeline", "get started", "ramp up", "setup", "interview", "hiring process", "start"],
    summary: "A standard Virtual Stack deployment takes between 1 to 2 weeks from scoping to live operations.",
    bullets: [
      "Week 1: Workflow analysis, systems integration, and candidate screening",
      "Client Approval: You interview and approve your dedicated team members before hiring",
      "Week 2: Deep SOP training, simulated edge cases, and supervised shadowing",
      "Live Launch: Daily SLA reporting, Dedicated QA supervision, and real-time Slack/Teams access"
    ],
    linkUrl: "/why-virtual-stack",
    linkText: "See how our onboarding model works",
    recommendedAction: "consultation",
  },

  // 4. 24/7 Fleet Dispatch & Logistics
  {
    id: "dispatch-logistics",
    category: "dispatch",
    title: "24/7 Fleet Dispatch & Logistics Operations",
    keywords: ["dispatch", "logistics", "freight", "trucking", "fleet", "tms", "driver", "loads", "detention", "check calls", "carriers", "brokerage"],
    summary: "Virtual Stack provides 24/7/365 dedicated fleet dispatch and logistics coordinators for mid-size carriers and freight brokerages, managing over 12,000 loads monthly with under 0.5% missed booking rate.",
    bullets: [
      "Overnight and weekend driver check calls, track & trace, and emergency breakdown routing",
      "Rate confirmations, BOL uploads, detention tracking, and billing coordination",
      "Seamless integration with major TMS platforms (McLeod, Samsara, DAT, Truckstop, KeepTruckin)",
      "Up to 60% dispatch payroll savings compared to domestic on-call staffing"
    ],
    linkUrl: "/industries/dispatch-logistics",
    linkText: "Explore 24/7 Dispatch Solutions",
    recommendedAction: "consultation",
  },

  // 5. Customer Support / Contact Center
  {
    id: "customer-support",
    category: "service",
    title: "Omnichannel Customer Support & Contact Center",
    keywords: ["customer support", "contact center", "customer experience", "call center", "helpdesk", "technical support", "voice", "chat", "email", "ticketing", "zendesk", "freshdesk"],
    summary: "We provide dedicated customer support pods equipped with cloud telephony, intelligent routing, and synchronized multi-channel ticketing across phone, live chat, email, and social channels.",
    bullets: [
      "Sub-30-second average response times and 95%+ CSAT resolution benchmarks",
      "Direct integration into Zendesk, Freshdesk, Salesforce, Gorgias, HubSpot, Intercom",
      "Tier 1 to Tier 3 technical support, ticket escalation, and returns processing",
      "Dedicated, non-shared agents trained exclusively on your brand tone and SOPs"
    ],
    linkUrl: "/services/customer-support",
    linkText: "View Customer Support Solutions",
    recommendedAction: "consultation",
  },

  // 6. Back Office Operations & KYC
  {
    id: "back-office",
    category: "service",
    title: "Back-Office Processing, Data Entry & KYC Verification",
    keywords: ["back office", "data entry", "processing", "kyc", "claims", "billing", "invoicing", "moderation", "transactions", "verification"],
    summary: "Virtual Stack offloads high-volume transactional workflows with 99.8%+ accuracy SLAs, freeing your core domestic team to focus on strategic growth.",
    bullets: [
      "Data entry, OCR verification, document scrubbing, and database indexing",
      "Transaction reconciliation, accounts payable/receivable, and invoice processing",
      "KYC (Know Your Customer) identity verification, AML screening, and fraud review",
      "24/7 user-generated content moderation and marketplace catalog management"
    ],
    linkUrl: "/services/data-entry",
    linkText: "Explore Back-Office Services",
    recommendedAction: "contact",
  },

  // 7. B2B Sales & Outbound Prospecting
  {
    id: "sales-growth",
    category: "service",
    title: "B2B Sales Support & Appointment Setting",
    keywords: ["sales", "leads", "lead generation", "appointment setting", "prospecting", "outbound", "inbound", "sdr", "discovery calls", "b2b"],
    summary: "Our dedicated SDR and appointment setting pods engage prospective decision-makers, handle initial objections, and book qualified meetings directly into your sales team's calendar.",
    bullets: [
      "Custom BANT and MEDDIC qualification criteria to eliminate unqualified tire-kickers",
      "Multi-touch cold email, LinkedIn outreach, and phone follow-up workflows",
      "Inbound lead triage with sub-5-minute speed-to-lead follow-up rates",
      "Direct synchronization with Salesforce, HubSpot, Apollo, and outreach stacks"
    ],
    linkUrl: "/services/appointment-setting",
    linkText: "Explore Sales & Lead Generation",
    recommendedAction: "consultation",
  },

  // 8. Staff Leasing & Dedicated Remote Teams
  {
    id: "staff-leasing",
    category: "service",
    title: "Dedicated Remote Teams & Staff Leasing (EOR)",
    keywords: ["staff leasing", "eor", "employer of record", "remote team", "dedicated team", "hiring", "talent pod", "virtual assistant", "ea"],
    summary: "Build an offshore operational team without establishing foreign corporate subsidiaries. Virtual Stack acts as your legal Employer of Record—managing local contracts, payroll, benefits, hardware, and physical facility security.",
    bullets: [
      "100% dedicated talent exclusively assigned to your business (never shared accounts)",
      "Executive Virtual Assistants managing scheduling, inbox triage, and travel",
      "High-spec workstations with enterprise fiber connections and biometric access",
      "Zero foreign tax liability, corporate filing overhead, or employment compliance risk"
    ],
    linkUrl: "/services/staff-leasing",
    linkText: "Learn about Staff Leasing & EOR",
    recommendedAction: "consultation",
  },

  // 9. Healthcare & HIPAA Compliance
  {
    id: "healthcare-hipaa",
    category: "industry",
    title: "Healthcare Support & HIPAA Compliance",
    keywords: ["healthcare", "medical", "hipaa", "patient", "baa", "phi", "doctor", "clinic", "intake", "ehr"],
    summary: "We operate audit-ready healthcare support pods under strict Business Associate Agreements (BAAs), safeguarding Protected Health Information (PHI) across all patient verification and intake workflows.",
    bullets: [
      "Signed BAA agreements ensuring complete HIPAA regulatory compliance",
      "Patient intake, appointment scheduling, insurance eligibility verification, and billing follow-up",
      "Locked-down Virtual Desktop Infrastructure (VDI) with disabled local drives and USBs",
      "EHR/EMR integration with Epic, Cerner, AthenaHealth, Kareo, and DrChrono"
    ],
    linkUrl: "/industries/healthcare",
    linkText: "View Healthcare Compliance Framework",
    recommendedAction: "consultation",
  },

  // 10. Security & Data Protection
  {
    id: "security-standards",
    category: "security",
    title: "Enterprise Security & Infrastructure",
    keywords: ["security", "safe", "privacy", "protection", "cctv", "biometric", "vdi", "nda", "compliance", "confidential"],
    summary: "Virtual Stack enforces enterprise-grade physical and digital security protocols across all operational delivery hubs.",
    bullets: [
      "Biometric access control and 24/7 CCTV surveillance at all operations centers",
      "Strict clean-desk policies: no personal mobile devices or external storage permitted",
      "Workstations configured without USB access, local downloading, or external export capability",
      "Comprehensive NDAs for all staff, encrypted VPNs, and least-privilege IAM policies"
    ],
    linkUrl: "/why-virtual-stack",
    linkText: "Inspect our security architecture",
    recommendedAction: "contact",
  },

  // 11. Consultation & Contact
  {
    id: "consultation-booking",
    category: "company",
    title: "Zoom Consultation & Contact Options",
    keywords: ["contact", "consultation", "zoom", "call", "talk", "speak", "schedule", "meeting", "phone number", "email"],
    summary: "You can schedule a complimentary 10-minute Zoom scoping consultation with our operations leadership, or send us a message via our contact form.",
    bullets: [
      "10-Minute Zoom Scoping Call: Discuss your workflows, candidate profiles, and custom pricing",
      "Contact Form: Submit your project scope for a guaranteed response within 2 business hours",
      "Direct Toll-Free Phone: +1 (888) 910-0868 (Available 24/7/365)",
      "Direct Email: info@virtualstack.us"
    ],
    linkUrl: "/book-a-consultation",
    linkText: "Book a 10-Min Scoping Call",
    recommendedAction: "consultation",
  },
];
