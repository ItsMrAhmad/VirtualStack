export interface IndustryItem {
  slug: string;
  name: string;
  shortName: string;
  headline: string;
  tagline: string;
  description: string;
  iconName: string;
  challenges: {
    title: string;
    description: string;
  }[];
  solutions: {
    title: string;
    description: string;
  }[];
  capabilities: string[];
  operationalBenefits: {
    title: string;
    description: string;
  }[];
  relevantServices: {
    name: string;
    slug: string;
  }[];
  faqs: {
    question: string;
    answer: string;
  }[];
}

export const industriesData: IndustryItem[] = [
  {
    slug: "dispatch-logistics",
    name: "Dispatch & Logistics",
    shortName: "Logistics",
    headline: "24/7 Fleet Dispatch, Driver Coordination & Load Tracking",
    tagline: "Dedicated dispatch pods managing night, weekend, and peak freight volumes.",
    description: "Virtual Stack provides dedicated logistics coordinators and dispatchers around the clock to manage load scheduling, driver check calls, detention tracking, and rate confirmations - preventing missed check-ins, unbilled detention fees, and dropped broker appointments.",
    iconName: "Truck",
    challenges: [
      {
        title: "24/7 Demands vs. Limited In-House Staff",
        description: "Drivers and freight operate overnight and on weekends when domestic dispatch staff are off the clock."
      },
      {
        title: "High Driver Turnover & Communication Breakdowns",
        description: "Delayed check calls, missed check-ins, and slow status updates lead to costly demurrage and broker penalties."
      },
      {
        title: "Heavy Documentation Burden",
        description: "Processing Bills of Lading (BOLs), proof of delivery (POD), and fuel receipts consumes hours of office time."
      }
    ],
    solutions: [
      {
        title: "Continuous 24/7/365 Track & Trace",
        description: "Dedicated night and weekend coverage monitoring GPS coordinates, updating load boards, and logging milestones."
      },
      {
        title: "Rapid Driver & Broker Communications",
        description: "Prompt responses to broker inquiries, route adjustments, and appointment rescheduling."
      },
      {
        title: "Accelerated Document Auditing",
        description: "Same-day indexing and verification of BOLs and PODs to speed up invoicing and factoring collections."
      }
    ],
    capabilities: [
      "24/7 Live Fleet Dispatch & Load Assignment",
      "Driver Check Calls & Milestone GPS Tracking",
      "Load Board Monitoring (DAT, Truckstop)",
      "BOL / POD Document Auditing & Invoicing Prep",
      "Detention & Lumper Fee Logging",
      "Broker & Shipper Status Reporting"
    ],
    operationalBenefits: [
      {
        title: "Zero Missed Check-Ins",
        description: "Keep shippers and freight brokers fully informed with proactive milestone updates."
      },
      {
        title: "Faster Cash Flow",
        description: "Same-day POD and invoice processing gets carriers paid days earlier."
      },
      {
        title: "Up to 60% Labor Cost Savings",
        description: "Scale dispatch capacity as your fleet grows without leasing physical office space, paying payroll taxes, or incurring domestic overtime."
      }
    ],
    relevantServices: [
      { name: "Customer Support Outsourcing", slug: "customer-support" },
      { name: "Back Office Operations", slug: "back-office-operations" },
      { name: "Document Processing", slug: "document-processing" },
      { name: "Dedicated Remote Teams", slug: "dedicated-remote-teams" }
    ],
    faqs: [
      {
        question: "What price value and cost savings do carriers get?",
        answer: "Carriers and freight brokerages typically achieve 50% to 60%+ in operational savings compared to in-house US dispatchers ($65K+ base salary plus overtime, benefits, and office space). Virtual Stack provides transparent, flat monthly pod rates with zero hidden fees."
      },
      {
        question: "Can your dispatchers work with our TMS software?",
        answer: "Yes, our team operates within standard industry Transportation Management Systems (McLeod, TMW, Rose Rocket, Turvo) and proprietary load portals."
      },
      {
        question: "Do you offer overnight and weekend coverage?",
        answer: "Yes, our 24/7/365 infrastructure allows for custom shifts covering nights, weekends, and statutory holidays."
      }
    ]
  },
  {
    slug: "healthcare",
    name: "Healthcare & Medical BPO",
    shortName: "Healthcare",
    headline: "Patient Care Coordination, Medical Records & Scheduling",
    tagline: "Empathetic patient support and secure administrative healthcare workflows.",
    description: "Healthcare providers face rising administrative overhead alongside increasing patient expectations. Virtual Stack delivers HIPAA-aligned medical support teams that handle patient intake, appointment bookings, insurance verification, and billing follow-up.",
    iconName: "HeartPulse",
    challenges: [
      {
        title: "Front Desk Overwhelmed by Phone Calls",
        description: "Clinic staff juggling in-person patients while phones ring continuously creates long hold times and poor patient experiences."
      },
      {
        title: "Complex Insurance Eligibility Checks",
        description: "Manual verification of co-pays, deductibles, and prior authorizations causes claims denials and delayed care."
      },
      {
        title: "Strict Privacy & Regulatory Compliance",
        description: "Handling Protected Health Information (PHI) requires audited workstation security and strict protocols."
      }
    ],
    solutions: [
      {
        title: "Dedicated Patient Intake & Scheduling",
        description: "Trained medical receptionists who answer patient inquiries with warmth, collect intake info, and book clinic visits."
      },
      {
        title: "Pre-Visit Insurance Verification",
        description: "Proactive verification of coverage and benefits before appointments to minimize billing disputes."
      },
      {
        title: "Secure Restrictive Workstations",
        description: "Cleanroom environment with biometric access, disabled removable media, and encrypted data channels."
      }
    ],
    capabilities: [
      "Patient Appointment Scheduling & Rescheduling",
      "Medical Answering & After-Hours Triage",
      "Insurance Eligibility & Benefit Verification",
      "Patient Registration & Records Indexing",
      "Prescription Refill Request Routing",
      "Post-Care Satisfaction Follow-up"
    ],
    operationalBenefits: [
      {
        title: "Eliminate Front-Desk Chaos",
        description: "Enable on-site medical staff to focus 100% on patients in the clinic."
      },
      {
        title: "Lower Claim Denial Rates",
        description: "Accurate upfront demographic and insurance entry prevents billing rejections."
      },
      {
        title: "Higher Patient Retention",
        description: "Courteous, zero-wait call handling reinforces patient trust and practice loyalty."
      }
    ],
    relevantServices: [
      { name: "Virtual Receptionist Services", slug: "virtual-receptionist" },
      { name: "Customer Support Outsourcing", slug: "customer-support" },
      { name: "Document Processing", slug: "document-processing" },
      { name: "Data Management", slug: "data-management" }
    ],
    faqs: [
      {
        question: "How do you protect patient privacy and confidentiality?",
        answer: "All operations are carried out on secure, monitored workstations with biometric entrance controls, non-exportable environments, and strict non-disclosure agreements."
      }
    ]
  },
  {
    slug: "financial-services",
    name: "Financial Services & Fintech",
    shortName: "Financial Services",
    headline: "Secure Transaction Support, KYC Verification & Account Servicing",
    tagline: "Scalable back-office and customer care for banking, lending, and fintech.",
    description: "Financial institutions require uncompromising accuracy and stringent security. Virtual Stack provides disciplined operational pods for loan document indexing, KYC/AML review, account verification, and tier-1 customer inquiries.",
    iconName: "Landmark",
    challenges: [
      {
        title: "Surging Loan & Account Applications",
        description: "Peak application periods create processing delays that drive borrowers to competing digital lenders."
      },
      {
        title: "Strict Compliance Auditing",
        description: "Regulatory mandates require flawless documentation and complete audit trails for every verified record."
      }
    ],
    solutions: [
      {
        title: "Rapid Application Verification",
        description: "Trained analysts reviewing pay stubs, bank statements, and identity documents against approval matrices."
      },
      {
        title: "24/7 Account Support",
        description: "Real-time assistance for card issues, password resets, and transaction balance inquiries."
      }
    ],
    capabilities: [
      "Loan Document Indexing & Stips Auditing",
      "KYC / Customer Identification Verification",
      "Inbound Account Servicing & Balance Inquiries",
      "Fraud Alert Customer Verification Calling",
      "Accounts Receivable & Delinquency Reminders",
      "Credit Application Data Entry"
    ],
    operationalBenefits: [
      {
        title: "Faster Underwriting Turnarounds",
        description: "Verify applicant documentation within hours to approve loans ahead of competitors."
      },
      {
        title: "Strict Process Adherence",
        description: "Eliminate underwriting errors through standardized verification SOPs."
      }
    ],
    relevantServices: [
      { name: "Back Office Operations", slug: "back-office-operations" },
      { name: "Customer Support Outsourcing", slug: "customer-support" },
      { name: "Document Processing", slug: "document-processing" },
      { name: "Dedicated Remote Teams", slug: "dedicated-remote-teams" }
    ],
    faqs: [
      {
        question: "Do your staff have access to sensitive financial credentials?",
        answer: "No. Work is structured with role-based access control, masked sensitive fields, and zero local storage access."
      }
    ]
  },
  {
    slug: "insurance",
    name: "Insurance Operations",
    shortName: "Insurance",
    headline: "Claims Processing, Policy Servicing & FNOL Call Handling",
    tagline: "Speed up claims resolution and policyholder communication.",
    description: "Insurance carriers and brokerages need high-speed document indexing and compassionate First Notice of Loss (FNOL) call handling. Virtual Stack delivers certified insurance operations support.",
    iconName: "ShieldCheck",
    challenges: [
      {
        title: "Catastrophic Call Surges",
        description: "Severe weather events trigger sudden spikes in FNOL calls that overwhelm in-house adjusters."
      },
      {
        title: "Manual Claims Document Review",
        description: "Reviewing police reports, repair estimates, and medical receipts creates bottlenecks."
      }
    ],
    solutions: [
      {
        title: "Elastic FNOL Intake Capacity",
        description: "200+ workstations ready to absorb emergency claim call volume with empathy and structured data capture."
      },
      {
        title: "Accelerated Claims File Preparation",
        description: "Gathering, indexing, and organizing claims documents so licensed adjusters can settle files quickly."
      }
    ],
    capabilities: [
      "First Notice of Loss (FNOL) Call Intake",
      "Policy Endorsement & Address Updates",
      "Certificate of Insurance (COI) Generation",
      "Claims Documentation Tagging & OCR Verification",
      "Underwriting File Preparation",
      "Premium Renewal & Payment Follow-up"
    ],
    operationalBenefits: [
      {
        title: "Zero Abandoned Emergency Calls",
        description: "Provide immediate human empathy to distressed policyholders during claims incidents."
      },
      {
        title: "Shorter Claims Settlement Cycles",
        description: "Deliver complete, indexed claim packets to your adjusters for swift resolution."
      }
    ],
    relevantServices: [
      { name: "Omnichannel Contact Center", slug: "contact-center" },
      { name: "Document Processing", slug: "document-processing" },
      { name: "Customer Support Outsourcing", slug: "customer-support" }
    ],
    faqs: [
      {
        question: "Can your agents handle emergency calls outside business hours?",
        answer: "Yes, our 24/7 contact center takes FNOL calls day or night, gathering key details and dispatching emergency response per your guidelines."
      }
    ]
  },
  {
    slug: "real-estate",
    name: "Real Estate & Property Management",
    shortName: "Real Estate",
    headline: "Tenant Dispatch, Lead Qualification & Listing Management",
    tagline: "Support property managers, brokerages, and real estate investors.",
    description: "Real estate professionals shouldn't be tied to their desks answering maintenance requests or qualifying online leads. Virtual Stack handles 24/7 tenant calls, lease application processing, and listing updates.",
    iconName: "Building2",
    challenges: [
      {
        title: "Urgent Maintenance Calls at 2 AM",
        description: "Property managers waking up for emergency pipe bursts and heating failures."
      },
      {
        title: "Speed-to-Lead on Inbound Inquiries",
        description: "Real estate buyers and renters move on if their web inquiry isn't answered within 5 minutes."
      }
    ],
    solutions: [
      {
        title: "24/7 Emergency Maintenance Dispatch",
        description: "Trained operators triage tenant requests and dispatch pre-approved local contractors for real emergencies."
      },
      {
        title: "Instant Inbound Lead Response",
        description: "Immediate phone and text follow-up to qualify prospective buyers and schedule showings."
      }
    ],
    capabilities: [
      "24/7 Maintenance Hotline & Vendor Dispatch",
      "Zillow / Realtor.com Lead Speed-to-Lead Intake",
      "Rental Application Screening & Verification",
      "MLS Listing Data Entry & Photo Optimization",
      "Lease Renewal Notification Calling",
      "HOA Inbound Inquiry Handling"
    ],
    operationalBenefits: [
      {
        title: "Sleep Through the Night",
        description: "Only true emergencies are escalated to property managers; routine calls are handled per your protocol."
      },
      {
        title: "Convert More Showing Inquiries",
        description: "Instant response to property inquiries dramatically boosts showing conversion rates."
      }
    ],
    relevantServices: [
      { name: "Virtual Receptionist Services", slug: "virtual-receptionist" },
      { name: "B2B Lead Generation", slug: "lead-generation" },
      { name: "Back Office Operations", slug: "back-office-operations" }
    ],
    faqs: [
      {
        question: "Can you dispatch our specific contracted plumbing and electrical vendors?",
        answer: "Yes, we maintain your vendor directory with custom escalation guidelines based on issue type and budget thresholds."
      }
    ]
  },
  {
    slug: "ecommerce",
    name: "E-Commerce & Digital Retail",
    shortName: "E-Commerce",
    headline: "Omnichannel Shopper Support, Order Tracking & Catalog Care",
    tagline: "Turn shoppers into loyal repeat buyers with seamless 24/7 customer care.",
    description: "Online shoppers demand immediate answers on shipping, returns, and product sizing. Virtual Stack powers high-converting customer support across Shopify, Amazon, live chat, and social channels.",
    iconName: "ShoppingCart",
    challenges: [
      {
        title: "Black Friday & Holiday Ticket Surges",
        description: "Seasonal spikes that leave customer tickets unanswered for days, resulting in chargebacks and bad reviews."
      },
      {
        title: "Abandoned Carts from Unanswered Questions",
        description: "Shoppers leave the checkout page if basic product or shipping questions aren't answered in live chat."
      }
    ],
    solutions: [
      {
        title: "Real-Time Live Chat Conversion",
        description: "Proactive live chat agents guiding customers through sizing, fit, and checkout."
      },
      {
        title: "Fast Order & Returns Resolution",
        description: "Instant lookups in Shopify, Gorgias, and Zendesk to resolve WISMO (Where Is My Order?) tickets."
      }
    ],
    capabilities: [
      "24/7 Live Chat & Social Media DM Support",
      "WISMO (Where Is My Order?) Inquiry Handling",
      "Shopify / WooCommerce / Gorgias Ticketing",
      "Return & Exchange Portal Management",
      "Product Catalog & Inventory Data Updates",
      "Post-Purchase Review Moderation"
    ],
    operationalBenefits: [
      {
        title: "Higher Conversion Rate",
        description: "Live chat assistance converts hesitant visitors into completed checkouts."
      },
      {
        title: "Lower Chargeback Ratios",
        description: "Fast, helpful refund and cancellation resolution prevents disputed charges."
      }
    ],
    relevantServices: [
      { name: "Customer Support Outsourcing", slug: "customer-support" },
      { name: "Omnichannel Contact Center", slug: "contact-center" },
      { name: "Data Management", slug: "data-management" }
    ],
    faqs: [
      {
        question: "Can your team process exchanges and refunds directly in Shopify?",
        answer: "Yes, our agents work within your Shopify or ecommerce portal adhering strictly to your defined refund policies."
      }
    ]
  },
  {
    slug: "technology",
    name: "Technology & SaaS",
    shortName: "Technology",
    headline: "Tier 1 & Tier 2 Technical Help Desk, Onboarding & User Success",
    tagline: "Help users succeed with your software without pulling engineers away from code.",
    description: "Fast-growing SaaS companies need customer support that understands software. Virtual Stack provides tech-savvy agents who handle user onboarding, triage bug reports, and resolve user issues around the clock.",
    iconName: "Code",
    challenges: [
      {
        title: "Product Engineers Bogged Down by Tickets",
        description: "High-cost software developers answering user password resets and basic setup questions."
      },
      {
        title: "Slow User Onboarding Leading to Churn",
        description: "New users who encounter friction during trial setups abandon the platform."
      }
    ],
    solutions: [
      {
        title: "Skilled Technical Triage Pods",
        description: "Agents capable of reviewing logs, reproducing bugs, and providing step-by-step guidance."
      },
      {
        title: "Comprehensive Bug Documentation",
        description: "Reproducible bug tickets logged directly in Jira, Linear, or GitHub with exact browser logs."
      }
    ],
    capabilities: [
      "24/7 Tier 1 & Tier 2 SaaS Help Desk",
      "Live Chat & In-App Support (Intercom, Crisp)",
      "User Onboarding Walkthroughs",
      "Jira & Linear Engineering Ticket Escalation",
      "Knowledge Base Article Maintenance",
      "API & Webhook Failure Triaging"
    ],
    operationalBenefits: [
      {
        title: "Engineers Keep Shipping Features",
        description: "Shield your engineering team from repetitive user inquiries so they can hit roadmap goals."
      },
      {
        title: "Higher Trial-to-Paid Conversion",
        description: "Immediate setup guidance ensures new users experience your product's value quickly."
      }
    ],
    relevantServices: [
      { name: "Outsourced Technical Support", slug: "technical-support" },
      { name: "Customer Support Outsourcing", slug: "customer-support" },
      { name: "Dedicated Remote Teams", slug: "dedicated-remote-teams" }
    ],
    faqs: [
      {
        question: "How do you handle feature requests and product bugs?",
        answer: "We capture user context, screenshots, and logs, creating structured tickets in your bug tracking tool with clear reproduction steps."
      }
    ]
  },
  {
    slug: "professional-services",
    name: "Professional & Corporate Services",
    shortName: "Professional Services",
    headline: "Client Intake, Executive Assistance & Billing Administration",
    tagline: "Eliminate administrative drag for law firms, consultancies, and accounting practices.",
    description: "High-rate professionals should spend their time serving clients, not managing calendars or chasing invoices. Virtual Stack provides executive assistants, client intake specialists, and billing coordinators for elite service firms.",
    iconName: "Briefcase",
    challenges: [
      {
        title: "Loss of High-Value Billable Hours",
        description: "Partners spending 10–15 hours weekly on administrative chores and meeting coordination."
      },
      {
        title: "Slow Client Intake Response",
        description: "High-value prospective clients reaching voicemail and hiring other firms."
      }
    ],
    solutions: [
      {
        title: "Dedicated Legal & Consulting VAs",
        description: "Experienced coordinators who manage calendars, travel, and client follow-ups."
      },
      {
        title: "Polished Front-Desk Representation",
        description: "Every call answered with executive etiquette and prompt intake capture."
      }
    ],
    capabilities: [
      "Executive Calendar & Meeting Scheduling",
      "New Client Intake & Conflict Check Coordination",
      "Invoicing & Accounts Receivable Follow-up",
      "Document Formatting, Transcripts & Briefing Packs",
      "Travel Planning & Expense Reconciliation",
      "Confidential Records Archiving"
    ],
    operationalBenefits: [
      {
        title: "Reclaim Billable Time",
        description: "Partners redirect administrative hours back into client billing and business development."
      },
      {
        title: "Corporate Prestige",
        description: "Ensure clients experience flawless professionalism every time they contact your firm."
      }
    ],
    relevantServices: [
      { name: "Executive & Specialist Virtual Assistants", slug: "virtual-assistants" },
      { name: "Virtual Receptionist Services", slug: "virtual-receptionist" },
      { name: "Administrative Support Services", slug: "administrative-support" }
    ],
    faqs: [
      {
        question: "Can our virtual assistant coordinate across multiple partner calendars?",
        answer: "Yes, our assistants are experienced in multi-calendar scheduling, managing conflicts, and meeting room coordination."
      }
    ]
  }
];
