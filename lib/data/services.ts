export interface ServiceItem {
  slug: string;
  name: string;
  pillarId: "customer-experience" | "back-office" | "sales-growth" | "dedicated-teams";
  pillarName: string;
  tagline: string;
  shortDescription: string;
  overview: string;
  challenges: {
    title: string;
    description: string;
  }[];
  solutions: {
    title: string;
    description: string;
  }[];
  capabilities: string[];
  processSteps: {
    step: string;
    title: string;
    description: string;
  }[];
  benefits: {
    title: string;
    description: string;
  }[];
  targetAudience: string;
  faqs: {
    question: string;
    answer: string;
  }[];
}

export interface ServicePillar {
  id: "customer-experience" | "back-office" | "sales-growth" | "dedicated-teams";
  title: string;
  shortTitle: string;
  tagline: string;
  description: string;
  iconName: string;
  services: ServiceItem[];
}

export const servicesData: ServiceItem[] = [
  // Pillar 1: Customer Support
  {
    slug: "customer-support",
    name: "Customer Support Outsourcing",
    pillarId: "customer-experience",
    pillarName: "Customer Support",
    tagline: "Consistent, empathetic support across every customer touchpoint.",
    shortDescription: "Deliver prompt, 24/7 customer care across phone, email, and live chat with dedicated agents trained on your brand and workflows.",
    overview: "Your customers expect instant, accurate answers and human empathy. Virtual Stack delivers dedicated customer support teams trained specifically on your product catalog, internal policies, and escalation guidelines. Operating 24/7/365, we eliminate response delays, reduce churn, and protect your brand reputation.",
    challenges: [
      {
        title: "High Staff Turnover & Training Overhead",
        description: "Constantly hiring and training in-house support agents drains management bandwidth and creates erratic service quality."
      },
      {
        title: "Limited Coverage & Delayed Response",
        description: "Customers reach out after hours, on weekends, and during holidays. Missing these inquiries directly increases customer churn."
      },
      {
        title: "Fluctuating Seasonal Volumes",
        description: "Scaling an internal support team up for peak seasons and down during slow months is expensive, rigid, and inefficient."
      }
    ],
    solutions: [
      {
        title: "Dedicated, Brand-Aligned Representatives",
        description: "We onboard and train full-time or fractional agents steeped in your product knowledge, tone of voice, and resolution protocols."
      },
      {
        title: "24/7/365 Multi-Tier Availability",
        description: "Continuous coverage across North American and global time zones ensuring first-response times drop to minutes."
      },
      {
        title: "Rigorous QA & Performance Metrics",
        description: "Real-time CSAT tracking, call recording monitoring, and weekly performance reviews ensure adherence to strict SLAs."
      }
    ],
    capabilities: [
      "Inbound Phone Support",
      "Email & Ticketing Management (Zendesk, Freshdesk, HubSpot)",
      "Live Chat & Real-Time Messaging",
      "Tier 1 & Tier 2 Inquiry Resolution",
      "Returns, Refunds & Order Tracking",
      "VIP & Escalation Protocol Handling"
    ],
    processSteps: [
      {
        step: "01",
        title: "Workflow & Knowledge Transfer",
        description: "We map your existing support documentation, ticketing platform, and escalation rules into structured training modules."
      },
      {
        step: "02",
        title: "Agent Rigorous Training & Shadowing",
        description: "Selected agents undergo roleplaying, system testing, and supervised live shifts with your team's oversight."
      },
      {
        step: "03",
        title: "Full Launch & Continuous SLA Tuning",
        description: "Your team transitions operational tickets to Virtual Stack with transparent weekly reporting on CSAT, FRT, and resolution rates."
      }
    ],
    benefits: [
      {
        title: "Up to 50% Reduction in Operating Costs",
        description: "Eliminate payroll tax, recruiting fees, equipment costs, and facility expenses without sacrificing service quality."
      },
      {
        title: "Zero Abandoned Interactions",
        description: "24/7 capacity ensures peak queue times are absorbed without customer frustration or lost sales."
      },
      {
        title: "Scalable Capacity on Demand",
        description: "Quickly scale workstation allocation up or down based on campaign launches or product seasonality."
      }
    ],
    targetAudience: "E-commerce retailers, SaaS companies, subscription brands, and multi-location service businesses seeking dependable frontline support.",
    faqs: [
      {
        question: "How quickly can a dedicated support team be deployed?",
        answer: "Typical onboarding takes between 1 to 2 weeks depending on workflow complexity, software integrations, and product knowledge requirements."
      },
      {
        question: "What ticketing systems and CRM tools do your agents use?",
        answer: "We work directly inside your existing tools — including Zendesk, Freshdesk, Salesforce, HubSpot, Gorgias, Intercom, and custom internal portals."
      },
      {
        question: "How do you guarantee quality and tone consistency?",
        answer: "Every engagement includes dedicated QA supervisors who score interactions against defined rubrics, track CSAT, and hold calibrated weekly syncs."
      }
    ]
  },
  {
    slug: "contact-center",
    name: "Omnichannel Contact Center",
    pillarId: "customer-experience",
    pillarName: "Customer Support",
    tagline: "Unify voice, chat, email, and social customer interactions seamlessly.",
    shortDescription: "Enterprise-grade inbound and outbound contact center infrastructure powered by cloud telephony and multi-skilled representatives.",
    overview: "Modern buyers expect instant, context-aware answers across every communication touchpoint. Virtual Stack deploys dedicated, multi-skilled contact center agents equipped with cloud telephony, intelligent IVR routing, and synchronized multi-channel ticketing—eliminating hold times, queue abandonment, and customer churn.",
    challenges: [
      {
        title: "Fragmented Communication Channels",
        description: "Managing separate tools for phone, email, and web chat creates disconnected customer histories and slow resolution."
      },
      {
        title: "Expensive Telephony Infrastructure",
        description: "Purchasing, configuring, and maintaining on-premise PBX systems and call routing licenses drains capital budgets."
      },
      {
        title: "Unpredictable Call Spikes",
        description: "Marketing campaigns and product updates lead to unexpected surges that overwhelm internal telephone lines."
      }
    ],
    solutions: [
      {
        title: "Single-Pane-of-Glass Operations",
        description: "Agents view unified customer history across voice, email, and chat for context-aware resolutions."
      },
      {
        title: "Enterprise Cloud VOIP & Redundancy",
        description: "High-uptime cloud telephony with intelligent IVR routing, skills-based routing, and real-time supervisory dashboards."
      },
      {
        title: "Elastic Workstation Capacity",
        description: "Over 200 workstations capable of absorbing high-volume inbound queue surges without dropped calls."
      }
    ],
    capabilities: [
      "Inbound & Outbound Voice Handling",
      "Interactive Voice Response (IVR) Configuration",
      "Multi-Channel Queue Synchronization",
      "Call Recording & Analytics",
      "Workforce Management (WFM)",
      "Disaster Recovery & Redundant Telco Routing"
    ],
    processSteps: [
      {
        step: "01",
        title: "Telephony & Channel Assessment",
        description: "We evaluate your current call volumes, peak hours, IVR structure, and channel distribution."
      },
      {
        step: "02",
        title: "Routing & Systems Integration",
        description: "Connecting toll-free numbers, VOIP trunks, and ticketing systems into our centralized contact center platform."
      },
      {
        step: "03",
        title: "Go-Live with Supervisory Monitoring",
        description: "Real-time queue monitoring, whisper coaching, and dashboard visibility into SLA adherence."
      }
    ],
    benefits: [
      {
        title: "Lower First Response & Hold Times",
        description: "Intelligent routing connects customers to the right trained representative immediately."
      },
      {
        title: "Complete Interaction Auditability",
        description: "All recordings, transcripts, and logs remain securely accessible for compliance and training."
      },
      {
        title: "Zero Hardware Capital Expenditure",
        description: "Leverage our fully established enterprise workstations and redundant cloud infrastructure."
      }
    ],
    targetAudience: "Mid-market to enterprise companies with high-volume inbound call traffic, multi-channel customer inquiries, or nationwide customer bases.",
    faqs: [
      {
        question: "Can we keep our existing business phone numbers?",
        answer: "Yes. You can seamlessly forward your current toll-free or local numbers to our secure VOIP trunks, or we can provision new numbers on your behalf."
      },
      {
        question: "Are calls recorded and monitored?",
        answer: "Yes, 100% of calls are digitally recorded and stored with enterprise encryption for compliance, quality assurance, and ongoing training."
      }
    ]
  },
  {
    slug: "technical-support",
    name: "Outsourced Technical Support",
    pillarId: "customer-experience",
    pillarName: "Customer Support",
    tagline: "Resolve technical roadblocks with skilled Tier 1 and Tier 2 specialists.",
    shortDescription: "Empower your users with tech-savvy agents capable of troubleshooting software, hardware, connectivity, and SaaS configurations.",
    overview: "Complex products require more than script readers. Virtual Stack provides technically capable agents who understand diagnostic workflows, API error logs, bug reporting, and hardware troubleshooting to resolve user issues swiftly.",
    challenges: [
      {
        title: "Engineers Distracted by Basic Support",
        description: "High-salary software developers and system engineers waste valuable sprint time addressing repetitive customer configuration issues."
      },
      {
        title: "Frustrated Non-Technical Users",
        description: "Complex technical documentation leaves customers confused, leading to negative reviews and churn."
      },
      {
        title: "Inefficient Bug Escalation",
        description: "Poorly documented bug tickets sent to engineering create confusion and slow engineering resolution cycles."
      }
    ],
    solutions: [
      {
        title: "Tier 1 & Tier 2 Screening",
        description: "Our technical specialists triage, reproduce, and resolve the majority of user issues without burdening core engineers."
      },
      {
        title: "Structured Bug Reporting",
        description: "When escalation is required, agents log clean, reproducible tickets with system logs, browser specs, and reproduction steps."
      },
      {
        title: "Knowledge Base Optimization",
        description: "Continuously updating client documentation based on recurring user friction points."
      }
    ],
    capabilities: [
      "SaaS Product Troubleshooting",
      "Account Configuration & Access Control",
      "Hardware & Device Diagnostic Support",
      "API & Webhook Incident Triaging",
      "Jira / Linear Engineering Ticket Logging",
      "Remote Desktop Diagnostic Assistance"
    ],
    processSteps: [
      {
        step: "01",
        title: "Technical Discovery & Sandboxing",
        description: "Our team tests your software, reviews technical documentation, and creates standard operating runbooks."
      },
      {
        step: "02",
        title: "Simulated Troubleshooting Certification",
        description: "Agents pass rigorous mock scenarios covering common errors, edge cases, and escalation criteria."
      },
      {
        step: "03",
        title: "Integrated Ticket Resolution",
        description: "Full production triage within your help desk and direct coordination with your engineering teams."
      }
    ],
    benefits: [
      {
        title: "Free Up High-Cost Core Engineers",
        description: "Allow your engineering and product teams to focus purely on shipping features rather than answering repetitive tickets."
      },
      {
        title: "Faster Mean Time to Resolution (MTTR)",
        description: "Dedicated technical triage means users get troubleshooting steps in minutes rather than days."
      },
      {
        title: "High First-Contact Resolution (FCR)",
        description: "Trained specialists resolve issues on the initial session, driving user satisfaction."
      }
    ],
    targetAudience: "B2B SaaS companies, IoT hardware providers, telecoms, and digital platform operators requiring skilled technical customer guidance.",
    faqs: [
      {
        question: "How do your agents learn our proprietary software?",
        answer: "We establish an in-depth sandbox onboarding program with your product specialists, creating step-by-step decision trees and error resolution guides."
      },
      {
        question: "Can your agents submit tickets directly to Jira or GitHub?",
        answer: "Yes, our teams integrate with your developer tools to log detailed, reproducible bug reports according to your engineering standards."
      }
    ]
  },
  {
    slug: "virtual-receptionist",
    name: "Virtual Receptionist Services",
    pillarId: "customer-experience",
    pillarName: "Customer Support",
    tagline: "Professional front-desk call handling, message taking, and scheduling.",
    shortDescription: "Never miss a prospective client call. Courteous, professional virtual receptionists representing your business around the clock.",
    overview: "First impressions define your brand credibility. Virtual Stack provides polished, North American-accented virtual receptionists who answer every call warmly, screen inquiries, take precise messages, and route high-priority callers to the right team member.",
    challenges: [
      {
        title: "Missed Calls Mean Lost Revenue",
        description: "Over 67% of callers who reach voicemail hang up and call a competitor instead."
      },
      {
        title: "High Cost of In-House Front Desk Staff",
        description: "Full-time receptionists require salary, benefits, desk space, and are only available 8 hours a day."
      },
      {
        title: "Constant Interruptions for Core Staff",
        description: "Lawyers, accountants, and consultants lose billable hours answering unsolicited sales calls and basic inquiries."
      }
    ],
    solutions: [
      {
        title: "Dedicated Brand Representation",
        description: "Calls answered in your business name with custom greetings tailored to your exact instructions."
      },
      {
        title: "24/7 After-Hours & Overflow Coverage",
        description: "Never send a prospective client to voicemail, whether they call at 2 PM or 2 AM."
      },
      {
        title: "Smart Call Screening & Patching",
        description: "Unsolicited sales pitches are politely deflected; urgent client matters are warm-transferred directly."
      }
    ],
    capabilities: [
      "Custom Branded Call Greetings",
      "Live Call Transfer & Patching",
      "Real-Time Message Forwarding via Email/SMS",
      "Appointment & Calendar Scheduling",
      "Lead Capture & Qualification Intake",
      "After-Hours & Weekend Dispatch"
    ],
    processSteps: [
      {
        step: "01",
        title: "Greeting & Script Customization",
        description: "Define how you want your phone answered, which callers should be transferred, and which require messages."
      },
      {
        step: "02",
        title: "Phone Forwarding Setup",
        description: "Forward your lines 24/7 or only when your line is busy or unanswered."
      },
      {
        step: "03",
        title: "Instant Message Delivery",
        description: "Receive immediate detailed notifications via email or SMS following every completed interaction."
      }
    ],
    benefits: [
      {
        title: "100% Live Call Answer Rate",
        description: "Capture every potential lead without tying up internal professional staff."
      },
      {
        title: "Save 70%+ Compared to Full-Time Staff",
        description: "Pay for coverage without the overhead of physical office space and full-time employee benefits."
      },
      {
        title: "Polished Corporate Image",
        description: "Give callers the experience of dealing with a structured, prestigious corporate organization."
      }
    ],
    targetAudience: "Law firms, accounting practices, medical clinics, real estate brokerages, and busy independent consultants.",
    faqs: [
      {
        question: "Can receptionists book appointments directly on my calendar?",
        answer: "Yes, our team can integrate with Calendly, Google Calendar, Outlook, or your practice management software to schedule qualified appointments."
      },
      {
        question: "Can I choose when to forward my calls?",
        answer: "Yes, you have full flexibility to forward calls full-time, only after business hours, or as rollover when your primary phone is busy."
      }
    ]
  },

  // Pillar 2: Back Office
  {
    slug: "back-office-operations",
    name: "Back Office Operations",
    pillarId: "back-office",
    pillarName: "Back Office",
    tagline: "Streamline routine operational processes with disciplined execution.",
    shortDescription: "Offload administrative, transactional, and compliance workloads to trained specialists so your team can focus on core strategy.",
    overview: "Behind every growing enterprise is a mountain of operational processing. Virtual Stack takes the friction out of your daily operations by managing verification workflows, transaction matching, compliance audits, and internal service requests with precision and speed.",
    challenges: [
      {
        title: "Operational Bottlenecks Stifling Growth",
        description: "As transaction volumes rise, manual paperwork and verification workflows delay delivery and frustrate clients."
      },
      {
        title: "Costly Human Error",
        description: "Fatigued in-house employees handling repetitive data work introduce discrepancies that damage compliance and profitability."
      },
      {
        title: "High Overhead on Non-Revenue Tasks",
        description: "Allocating premium domestic salaries to routine administrative processes inflates operating expenses."
      }
    ],
    solutions: [
      {
        title: "Standardized SOP Execution",
        description: "We document and optimize your workflows into repeatable, auditable standard operating procedures."
      },
      {
        title: "Two-Tier Verification Protocols",
        description: "Built-in quality assurance and dual-check reviews ensure 99%+ operational accuracy."
      },
      {
        title: "Secure Cloud-Based Environment",
        description: "Work carried out on secure, restricted workstations with biometric access control and continuous monitoring."
      }
    ],
    capabilities: [
      "Transaction Processing & Reconciliation",
      "Account Creation & KYC Verification",
      "Vendor Invoice Matching & Auditing",
      "Order Fulfillment Verification",
      "Claims & Application Review",
      "ERP / CRM Data Synchronization"
    ],
    processSteps: [
      {
        step: "01",
        title: "Process Audit & SOP Documentation",
        description: "We document every step of your administrative task, identifying edge cases and approval thresholds."
      },
      {
        step: "02",
        title: "Pilot Testing & Calibration",
        description: "A small dedicated pod executes sample batches with daily accuracy calibration against your benchmarks."
      },
      {
        step: "03",
        title: "Full Operational Scale",
        description: "Workload transition with daily throughput metrics and SLA monitoring."
      }
    ],
    benefits: [
      {
        title: "Significant Cost Efficiency",
        description: "Reduce administrative operating expenses by up to 50% while improving processing turnaround times."
      },
      {
        title: "Enhanced Process Repeatability",
        description: "Strict adherence to established SOPs guarantees consistency regardless of transaction volume."
      },
      {
        title: "Executive Focus Restored",
        description: "Free your core leadership to focus on product development, client acquisition, and strategic growth."
      }
    ],
    targetAudience: "Financial services, logistics brokers, real estate agencies, healthcare administrators, and expanding retail businesses.",
    faqs: [
      {
        question: "How do you ensure data confidentiality and security?",
        answer: "All operations are conducted on secure, access-controlled workstations with biometric entry, no external USB storage, strict NDA coverage, and CCTV monitoring."
      }
    ]
  },
  {
    slug: "data-management",
    name: "Data Management & Entry",
    pillarId: "back-office",
    pillarName: "Back Office",
    tagline: "Accurate, clean, and structured business data at any scale.",
    shortDescription: "Cleanse, digitize, validate, and enrich business data across your databases, CRM systems, and e-commerce catalogs.",
    overview: "Data powers modern decision-making, but dirty, fragmented, or unorganized data leads to costly business mistakes. Virtual Stack provides dedicated data management teams who clean, structure, migrate, and update your business databases with precision.",
    challenges: [
      {
        title: "Data Discrepancies & Duplicate Records",
        description: "Scattered data across multiple legacy systems creates customer friction and misinformed strategic decisions."
      },
      {
        title: "Massive Backlog of Unprocessed Information",
        description: "Paper records, scanned PDFs, and unindexed invoices pile up faster than internal staff can process."
      },
      {
        title: "Resource Draining Data Cleaning",
        description: "High-value analysts spending hours doing manual data cleanup instead of driving strategic analysis."
      }
    ],
    solutions: [
      {
        title: "Rigorous Data Validation Rules",
        description: "Structured workflows with automated validation rules and manual spot-checking for 99.8% accuracy."
      },
      {
        title: "High-Throughput Digitization",
        description: "Rapid transformation of paper forms, contracts, and receipts into structured digital records."
      },
      {
        title: "Continuous Database Maintenance",
        description: "Ongoing deduplication, address verification, and field enrichment to keep CRM systems pristine."
      }
    ],
    capabilities: [
      "CRM & ERP Data Cleansing",
      "E-commerce Catalog & Product Listing Management",
      "Data Deduplication & Normalization",
      "Manual Web Research & Lead Enrichment",
      "Large-Scale System Migration Support",
      "Medical & Insurance Coding Entry"
    ],
    processSteps: [
      {
        step: "01",
        title: "Schema & Rule Definition",
        description: "Define required data fields, formatting conventions, and validation criteria."
      },
      {
        step: "02",
        title: "Batch Execution & Quality Checks",
        description: "High-speed processing with secondary supervisor audit on each completed batch."
      },
      {
        step: "03",
        title: "Database Sync & Reporting",
        description: "Clean data delivery directly into your production databases with complete change logs."
      }
    ],
    benefits: [
      {
        title: "High Data Accuracy",
        description: "Eliminate errors in customer addresses, pricing tiers, and inventory counts."
      },
      {
        title: "Rapid Backlog Elimination",
        description: "Process months of backlog within weeks with dedicated multi-shift processing capacity."
      },
      {
        title: "Better Business Insights",
        description: "Make confident decisions based on clean, structured, and complete business records."
      }
    ],
    targetAudience: "E-commerce retailers, wholesale distributors, insurance carriers, legal firms, and data-heavy tech enterprises.",
    faqs: [
      {
        question: "Can your team work directly inside our proprietary database or ERP?",
        answer: "Yes, our agents work via secure VPN or web portals directly inside SAP, NetSuite, Salesforce, Shopify, or custom internal systems."
      }
    ]
  },
  {
    slug: "document-processing",
    name: "Document Processing & Digitization",
    pillarId: "back-office",
    pillarName: "Back Office",
    tagline: "Rapid extraction, indexing, and validation of complex documentation.",
    shortDescription: "Turn unstructured contracts, invoices, medical records, and claims into indexed, searchable, and verified digital workflows.",
    overview: "Paper forms, scanned PDFs, and varied supplier documentation create operational gridlock. Virtual Stack’s document processing service pairs trained specialists with structured indexing workflows to verify, classify, and extract critical information accurately.",
    challenges: [
      {
        title: "Manual Invoicing & Receipt Delays",
        description: "Accounts payable and receivable teams delayed by manual keying of varied vendor formats."
      },
      {
        title: "Unsearchable Scanned Archives",
        description: "Critical contracts and historical records trapped in unindexed PDF files."
      },
      {
        title: "Compliance & Audit Vulnerabilities",
        description: "Missing or improperly cataloged records creating audit risk and regulatory exposure."
      }
    ],
    solutions: [
      {
        title: "Intelligent Document Classification",
        description: "Fast triage, routing, and metadata tagging of incoming digital documents."
      },
      {
        title: "Accurate Key-Field Extraction",
        description: "Manual verification of key fields including dates, invoice numbers, tax amounts, and line items."
      },
      {
        title: "Audit-Ready Record Indexing",
        description: "Organized storage and file naming structures that streamline compliance retrieval."
      }
    ],
    capabilities: [
      "Invoice & Purchase Order Verification",
      "Loan Application & Mortgage Doc Review",
      "Medical Records Indexing & Archiving",
      "Legal Contract Document Tagging",
      "Insurance Claims Data Extraction",
      "Form Digitization & OCR Correction"
    ],
    processSteps: [
      {
        step: "01",
        title: "Document Ingestion & Template Mapping",
        description: "Establishing secure upload channels and mapping extraction fields."
      },
      {
        step: "02",
        title: "Extraction & Exception Handling",
        description: "Trained operators extract fields and flag discrepancies based on predefined rules."
      },
      {
        step: "03",
        title: "Validation & Export",
        description: "Structured output formatted for automatic ingestion into your ERP or document management system."
      }
    ],
    benefits: [
      {
        title: "Up to 80% Faster Document Turnaround",
        description: "Invoices and applications processed within hours rather than days."
      },
      {
        title: "Lower Compliance Risk",
        description: "Every file systematically indexed and validated against strict compliance guidelines."
      },
      {
        title: "Eliminate Early Payment Penalties",
        description: "Process invoices in time to capture vendor early-payment discounts."
      }
    ],
    targetAudience: "Logistics carriers, title companies, mortgage brokers, insurance adjusters, and enterprise accounting departments.",
    faqs: [
      {
        question: "How do you handle sensitive personal and financial information?",
        answer: "We employ strict data protection controls including masked fields, non-exportable environments, biometric workstation entry, and full audit logs."
      }
    ]
  },
  {
    slug: "administrative-support",
    name: "Administrative Support Services",
    pillarId: "back-office",
    pillarName: "Back Office",
    tagline: "Keep your business running smoothly with dedicated administrative horsepower.",
    shortDescription: "Reliable support for executive scheduling, travel coordination, vendor management, and recurring corporate administration.",
    overview: "Administrative tasks are critical to corporate health, but they consume hours of valuable management time. Virtual Stack provides skilled administrative coordinators who handle daily operational chores with discretion, reliability, and precision.",
    challenges: [
      {
        title: "Executives Overwhelmed by Admin Tasks",
        description: "Founders and executives spending up to 30% of their workweek on scheduling, emails, and logistical coordination."
      },
      {
        title: "Fragmented Internal Workflows",
        description: "Inconsistent communication between departments leading to delayed reports and missed deadlines."
      }
    ],
    solutions: [
      {
        title: "Dedicated Administrative Coordinators",
        description: "Experienced coordinators who integrate into your workflow tools (Slack, Google Workspace, Microsoft 365)."
      },
      {
        title: "Proactive Task Management",
        description: "Coordinators who anticipate scheduling conflicts, prepare briefings, and track project deadlines."
      }
    ],
    capabilities: [
      "Executive Calendar & Meeting Coordination",
      "Travel Planning & Expense Reconciliation",
      "Vendor Communication & Follow-up",
      "Meeting Minutes & Action Item Tracking",
      "Presentation & Report Formatting",
      "Email Inbox Filtering & Organization"
    ],
    processSteps: [
      {
        step: "01",
        title: "Role Definition & Preferences",
        description: "We review your communication style, tool stack, and recurring administrative pain points."
      },
      {
        step: "02",
        title: "Coordinator Assignment",
        description: "Hand-picked coordinator introduced with structured onboarding checklists."
      },
      {
        step: "03",
        title: "Ongoing Day-to-Day Synergy",
        description: "Daily standup communications and seamless routine task execution."
      }
    ],
    benefits: [
      {
        title: "15+ Hours Saved Per Executive Weekly",
        description: "Reclaim high-impact strategic time by delegating routine administrative tasks."
      },
      {
        title: "Never Miss a Critical Deadline",
        description: "Disciplined calendar and follow-up tracking ensures commitments are met on time."
      }
    ],
    targetAudience: "CEOs, managing partners, department heads, and professional services practices.",
    faqs: [
      {
        question: "Can an administrative coordinator work across our team's standard business hours?",
        answer: "Yes, coordinators are assigned directly to match your specific timezone and operational schedule across North America."
      }
    ]
  },

  // Pillar 3: Sales & Growth
  {
    slug: "lead-generation",
    name: "B2B Lead Generation",
    pillarId: "sales-growth",
    pillarName: "Sales & Growth",
    tagline: "Fill your sales pipeline with verified, qualified prospect opportunities.",
    shortDescription: "Targeted outbound prospecting, list building, email outreach, and initial qualification to deliver sales-ready leads to your closers.",
    overview: "A predictable sales pipeline is the foundation of business growth. Virtual Stack designs and executes outbound prospecting programs tailored to your ideal customer profile (ICP). We research target accounts, verify decision-maker contact details, and execute personalized multi-channel outreach to generate genuine interest.",
    challenges: [
      {
        title: "Starving Sales Pipelines",
        description: "Internal closers wasting hours hunting for contact numbers and sending cold emails instead of conducting product demos."
      },
      {
        title: "Stale & Inaccurate Contact Lists",
        description: "Purchased databases full of bounced emails, obsolete phone numbers, and former employees."
      },
      {
        title: "Inconsistent Outreach Cadences",
        description: "Outreach stops whenever sales reps get busy with current deals, creating dramatic revenue feast-or-famine cycles."
      }
    ],
    solutions: [
      {
        title: "Human-Verified Prospect Lists",
        description: "We identify and manually verify key decision-makers matching your industry, revenue, and technology criteria."
      },
      {
        title: "Multi-Touch Outbound Cadences",
        description: "Structured sequences combining personalized emails, phone calls, and LinkedIn touches to maximize reply rates."
      },
      {
        title: "Rigorous Lead Qualification (BANT)",
        description: "Every opportunity is qualified against budget, authority, need, and timeline before being handed over to your team."
      }
    ],
    capabilities: [
      "Ideal Customer Profile (ICP) Mapping",
      "Account-Based Prospect Research",
      "Direct Dial & Work Email Verification",
      "Cold Email Sequencing & Deliverability Management",
      "Inbound Lead Qualification & Speed-to-Lead Response",
      "CRM Sync (HubSpot, Salesforce, Pipedrive)"
    ],
    processSteps: [
      {
        step: "01",
        title: "ICP & Persona Calibration",
        description: "We define your target industries, company sizes, job titles, and value propositions."
      },
      {
        step: "02",
        title: "List Generation & Copywriting",
        description: "We build custom prospect lists and draft tested, consultative outreach copy aligned with your brand."
      },
      {
        step: "03",
        title: "Cadence Launch & Lead Delivery",
        description: "Outbound campaign launch with qualified opportunities synced directly to your sales calendar."
      }
    ],
    benefits: [
      {
        title: "Maximize Closer Productivity",
        description: "Your senior sales executives spend 100% of their time conducting demos and closing qualified buyers."
      },
      {
        title: "Predictable Pipeline Growth",
        description: "Consistent outbound volume creates a reliable, measurable monthly stream of qualified meetings."
      },
      {
        title: "Lower Cost Per Qualified Opportunity",
        description: "Achieve fractional lead gen scale at a fraction of the cost of hiring domestic full-time SDRs."
      }
    ],
    targetAudience: "B2B SaaS companies, professional service firms, industrial equipment suppliers, and commercial service providers.",
    faqs: [
      {
        question: "How do you qualify leads before handing them over?",
        answer: "We align with your custom qualification criteria (BANT, MEDDIC, or custom questions) ensuring your sales reps only meet with decision-makers who have genuine need and budget."
      }
    ]
  },
  {
    slug: "appointment-setting",
    name: "Appointment Setting Services",
    pillarId: "sales-growth",
    pillarName: "Sales & Growth",
    tagline: "Turn warm interest into confirmed discovery calls on your calendar.",
    shortDescription: "Professional phone and email outreach that engages decision-makers and books qualified meetings directly for your sales team.",
    overview: "Generating interest is only half the battle — locking down a confirmed meeting is what drives revenue. Virtual Stack’s appointment setters engage prospective clients professionally, answer initial questions, handle objections, and secure confirmed appointments directly on your calendar.",
    challenges: [
      {
        title: "High Meeting No-Show Rates",
        description: "Leads booked without proper qualification or confirmation fail to show up, wasting sales rep schedules."
      },
      {
        title: "Difficulty Reaching Decision-Makers",
        description: "Executive gatekeepers block unpolished callers, preventing your message from reaching key stakeholders."
      }
    ],
    solutions: [
      {
        title: "Conversational, Consultative Style",
        description: "Our representatives communicate with professionalism and business acumen, avoiding pushy telemarketing tactics."
      },
      {
        title: "Automated Calendar Reminders",
        description: "Double-confirmation protocols and calendar invite management minimize no-shows."
      }
    ],
    capabilities: [
      "Targeted Outbound B2B Cold Calling",
      "Warm Lead Re-Engagement Calling",
      "Direct Calendar Booking (Calendly, Chili Piper, HubSpot)",
      "Meeting Reminder & Rescheduling Follow-up",
      "Call Recording & Pitch Optimization",
      "Gatekeeper Navigation & Executive Etiquette"
    ],
    processSteps: [
      {
        step: "01",
        title: "Scripting & Objection Handling Playbook",
        description: "We build custom conversation flows focusing on value, listening, and objection resolution."
      },
      {
        step: "02",
        title: "Pilot Calling & Pitch Calibration",
        description: "Initial calling runs with call reviews and message refinement."
      },
      {
        step: "03",
        title: "Consistent Meeting Delivery",
        description: "Qualified appointments booked directly onto your closers' calendars."
      }
    ],
    benefits: [
      {
        title: "Packed Sales Calendars",
        description: "Keep your sales closers booked with qualified conversations every week."
      },
      {
        title: "High Show-Up Rates",
        description: "Pre-meeting confirmation steps ensure prospective buyers are prepared and attend."
      }
    ],
    targetAudience: "Consulting firms, technology vendors, commercial insurance brokers, and B2B agencies.",
    faqs: [
      {
        question: "How do appointments get added to our team's calendar?",
        answer: "We connect directly with your scheduling tool (Calendly, HubSpot, etc.) and send calendar invites with complete notes on prospect needs."
      }
    ]
  },
  {
    slug: "telemarketing",
    name: "Outbound Telemarketing & Telesales",
    pillarId: "sales-growth",
    pillarName: "Sales & Growth",
    tagline: "Drive high-volume campaign outreach with compliant, trained callers.",
    shortDescription: "Professional outbound telephone campaigns for customer surveys, renewals, promotional announcements, and event invitations.",
    overview: "When you need to reach thousands of prospects, past customers, or account holders rapidly, Virtual Stack provides the dialer technology and trained outbound voice teams to execute your campaign with speed, precision, and complete regulatory compliance.",
    challenges: [
      {
        title: "Dialer Setup & Compliance Hurdles",
        description: "Navigating TCPA, DNC lists, and telco spam flags requires specialized telecommunications infrastructure."
      },
      {
        title: "Unmotivated & High-Turnover Callers",
        description: "Low-end call centers deliver robotic scripts that damage brand perception."
      }
    ],
    solutions: [
      {
        title: "Enterprise VOIP & Clean Caller ID Reputation",
        description: "Proactive caller ID management to maintain high answer rates and avoid spam tags."
      },
      {
        title: "Motivated, Well-Trained Callers",
        description: "Agents trained on empathetic delivery and conversation pacing to generate genuine engagement."
      }
    ],
    capabilities: [
      "Promotional Campaign Outreach",
      "Customer Win-Back & Subscription Renewal",
      "Webinar & Conference Attendance Driving",
      "Customer Satisfaction & Market Surveys",
      "Database Contact Information Verification",
      "Full Do-Not-Call (DNC) List Scrubbing"
    ],
    processSteps: [
      {
        step: "01",
        title: "List Compliance Scrubbing",
        description: "Checking lists against national DNC registries and suppression files."
      },
      {
        step: "02",
        title: "Campaign Rollout",
        description: "High-volume dialing with live supervision and script adjustment."
      },
      {
        step: "03",
        title: "Disposition Reporting",
        description: "Daily reporting on call outcomes, conversions, and call duration analytics."
      }
    ],
    benefits: [
      {
        title: "Rapid Market Coverage",
        description: "Contact thousands of accounts in days to support time-sensitive campaigns."
      },
      {
        title: "100% Transparent Analytics",
        description: "Track dials, connections, conversations, and outcomes in real time."
      }
    ],
    targetAudience: "Subscription businesses, educational institutions, insurance providers, and event organizers.",
    faqs: [
      {
        question: "Do you follow telemarketing regulations and DNC lists?",
        answer: "Yes, we adhere strictly to all regional telecommunications regulations and automatically scrub calling lists against active Do-Not-Call registries."
      }
    ]
  },

  // Pillar 4: Dedicated Teams
  {
    slug: "dedicated-remote-teams",
    name: "Dedicated Remote Teams",
    pillarId: "dedicated-teams",
    pillarName: "Dedicated Teams",
    tagline: "Full-time, exclusive operational talent managed to your exact standards.",
    shortDescription: "Build an extension of your company with full-time remote teams working exclusively on your systems, culture, and schedules.",
    overview: "When shared service models aren't enough, Virtual Stack builds dedicated, exclusive offshore and nearshore pods that function as an organic extension of your domestic team. You direct the daily work; we manage recruitment, equipment, workstations, payroll, and infrastructure.",
    challenges: [
      {
        title: "Domestic Hiring Delays & Shortages",
        description: "Finding skilled local operational staff takes months and commands unsustainable compensation packages."
      },
      {
        title: "Lack of Cultural Alignment with Generic Outsourcers",
        description: "Shared call centers lack accountability and fail to understand your company values."
      },
      {
        title: "Complex International Payroll & Compliance",
        description: "Setting up foreign legal entities, benefits, and tax compliance creates massive legal hurdles."
      }
    ],
    solutions: [
      {
        title: "Custom Recruitment for Your Tech Stack",
        description: "We hire talent specifically matched to your required software, domain experience, and working hours."
      },
      {
        title: "Dedicated, Non-Shared Staff",
        description: "Your team members work 100% exclusively on your business — never split across multiple accounts."
      },
      {
        title: "Turnkey Facilities & IT Management",
        description: "We provide high-spec hardware, fiber internet, biometric facility security, and local HR management."
      }
    ],
    capabilities: [
      "Custom Talent Sourcing & Skills Testing",
      "Dedicated Supervision & Performance Management",
      "Full IT Equipment & Dual-Monitor Workstations",
      "Time-Tracking & Activity Auditing",
      "Seamless Integration into Your Slack / Teams Channels",
      "Long-Term Staff Retention & Career Development"
    ],
    processSteps: [
      {
        step: "01",
        title: "Role Specification & Profile Definition",
        description: "We outline required technical skills, experience level, personality profile, and working hours."
      },
      {
        step: "02",
        title: "Sourcing & Client Interviewing",
        description: "We pre-screen candidates through testing; you interview and select the finalists."
      },
      {
        step: "03",
        title: "Deployment & Seamless Management",
        description: "Your dedicated pod is onboarded onto your tools with our on-site facility and HR support."
      }
    ],
    benefits: [
      {
        title: "Save 50–65% on Total Employment Costs",
        description: "Dramatically lower payroll and benefit overhead while accessing top-tier English-fluent talent."
      },
      {
        title: "Zero Facility or IT Overhead",
        description: "No leasing office space, buying computers, or managing software licenses."
      },
      {
        title: "Direct Operational Control",
        description: "Manage your remote team members just like your domestic staff, using your own workflows and meetings."
      }
    ],
    targetAudience: "Growing tech firms, logistics coordinators, marketing agencies, and mid-market companies scaling operations.",
    faqs: [
      {
        question: "Do we get to interview and approve the candidates?",
        answer: "Yes, 100%. We source and vet the candidate pool, but you conduct final interviews and make the hiring decision."
      },
      {
        question: "What happens if a team member is sick or leaves?",
        answer: "We provide built-in operational redundancy, cross-training protocols, and immediate replacement sourcing to ensure zero downtime."
      }
    ]
  },
  {
    slug: "virtual-assistants",
    name: "Executive & Specialist Virtual Assistants",
    pillarId: "dedicated-teams",
    pillarName: "Dedicated Teams",
    tagline: "High-caliber executive and operational assistants dedicated to you.",
    shortDescription: "Delegate inbox triage, research, scheduling, invoicing, and personal business operations to experienced executive assistants.",
    overview: "High-performing founders and executives shouldn't spend their days managing calendars and drafting routine follow-ups. Virtual Stack matches you with an experienced, dedicated Virtual Assistant who quickly learns your workflow preferences, handles complex coordination, and gives you back hours each day.",
    challenges: [
      {
        title: "Founder & Leader Burnout",
        description: "Busy leaders spending 15–20 hours a week on low-leverage administrative tasks instead of driving revenue."
      },
      {
        title: "Unreliable Freelance Contractors",
        description: "Gig-economy freelancers disappear without notice, take on competing clients, and lack data security protocols."
      }
    ],
    solutions: [
      {
        title: "Vetted, Full-Time Professional VAs",
        description: "College-educated, fluent English speakers trained in executive assistance and modern digital tools."
      },
      {
        title: "Secure Enterprise Infrastructure",
        description: "Work performed from supervised facilities with encrypted connections and password managers."
      }
    ],
    capabilities: [
      "Executive Calendar Management & Meeting Prep",
      "Email Inbox Triaging & Draft Responses",
      "Expense Tracking & Receipt Categorization",
      "Travel Planning, Flights & Accommodation",
      "Competitor & Market Web Research",
      "CRM & Project Management Tool Updates"
    ],
    processSteps: [
      {
        step: "01",
        title: "Executive Needs Assessment",
        description: "We evaluate your calendar habits, primary communication tools, and highest-friction daily tasks."
      },
      {
        step: "02",
        title: "Assistant Matching & Interview",
        description: "Meet your matched assistant to ensure personality and communication alignment."
      },
      {
        step: "03",
        title: "Structured 2-Week Ramp",
        description: "Daily delegation templates that make handing off work quick and painless."
      }
    ],
    benefits: [
      {
        title: "Reclaim 15–20 Hours Every Week",
        description: "Focus your energy solely on strategy, client relationships, and business growth."
      },
      {
        title: "Dedicated, Reliable Partnership",
        description: "A long-term partner who learns your nuances and anticipates your needs before you ask."
      }
    ],
    targetAudience: "Entrepreneurs, executive leaders, venture-backed founders, and busy professional practitioners.",
    faqs: [
      {
        question: "Is my Virtual Assistant dedicated only to me?",
        answer: "Yes, our dedicated VAs work exclusively for you during your chosen operational schedule."
      }
    ]
  },
  {
    slug: "staff-leasing",
    name: "Staff Leasing & Dedicated Staffing",
    pillarId: "dedicated-teams",
    pillarName: "Dedicated Teams",
    tagline: "Flexible staffing capacity with full employer-of-record compliance.",
    shortDescription: "Access specialized operational, financial, and technical talent without the liabilities of direct international employment.",
    overview: "Scale your workforce without expanding your domestic legal footprint. With Virtual Stack’s Staff Leasing model, we act as the legal Employer of Record (EOR), handling facilities, benefits, payroll, and compliance, while you maintain full day-to-day management of your staff.",
    challenges: [
      {
        title: "Complex Foreign Labor Laws",
        description: "Navigating international labor codes, mandatory benefits, and currency conversions is risky and complex."
      },
      {
        title: "Rigid Long-Term Employment Commitments",
        description: "Traditional domestic employment makes rapid headcount adjustments expensive and legally risky."
      }
    ],
    solutions: [
      {
        title: "Complete Employer of Record (EOR) Protection",
        description: "We assume all local employer liabilities, benefits administration, payroll taxes, and statutory compliance."
      },
      {
        title: "Transparent Cost-Plus Pricing",
        description: "Clear, predictable monthly staffing costs with zero hidden employment fees."
      }
    ],
    capabilities: [
      "Custom Talent Acquisition & Candidate Screening",
      "Full Local Labor Compliance & Payroll Tax Filing",
      "Health Insurance & Statutory Benefits Management",
      "Modern Office Facilities & High-Speed IT Infrastructure",
      "HR Support, Performance Reviews & Disciplinary Management",
      "Flexible Scalability Based on Business Cycles"
    ],
    processSteps: [
      {
        step: "01",
        title: "Staffing Requirements Specification",
        description: "Detail job descriptions, salary bands, and required operational shifts."
      },
      {
        step: "02",
        title: "Recruitment & Onboarding",
        description: "We source candidates, run background checks, and handle all employment contracts."
      },
      {
        step: "03",
        title: "Ongoing Facility & Operational Support",
        description: "Staff report to our facility daily, working directly under your operational guidance."
      }
    ],
    benefits: [
      {
        title: "Zero Direct Legal Liabilities",
        description: "All employment contracts, severance rules, and labor filings remain our responsibility."
      },
      {
        title: "Complete Transparency",
        description: "You know exactly what your talent is paid and what your infrastructure costs are."
      }
    ],
    targetAudience: "Companies looking to establish an offshore or nearshore operations hub without establishing foreign corporate subsidiaries.",
    faqs: [
      {
        question: "What roles can be hired through staff leasing?",
        answer: "We support customer service agents, data specialists, dispatchers, accountants, QA testers, sales reps, and administrative professionals."
      }
    ]
  }
];

export const servicePillars: ServicePillar[] = [
  {
    id: "customer-experience",
    title: "Customer Support",
    shortTitle: "CX Solutions",
    tagline: "Protect your brand with 24/7 empathetic customer touchpoints.",
    description: "Inbound customer support, omnichannel contact center operations, technical troubleshooting, and professional virtual receptionists.",
    iconName: "Headphones",
    services: servicesData.filter((s) => s.pillarId === "customer-experience"),
  },
  {
    id: "back-office",
    title: "Back Office Operations",
    shortTitle: "Back Office",
    tagline: "Streamline routine transactional and administrative workflows.",
    description: "Data management, document processing, transactional reconciliation, and comprehensive executive administrative support.",
    iconName: "Layers",
    services: servicesData.filter((s) => s.pillarId === "back-office"),
  },
  {
    id: "sales-growth",
    title: "Sales & Growth",
    shortTitle: "Sales Support",
    tagline: "Fill your pipeline with verified B2B prospect opportunities.",
    description: "Outbound lead generation, targeted appointment setting, market research surveys, and high-volume compliant telemarketing.",
    iconName: "TrendingUp",
    services: servicesData.filter((s) => s.pillarId === "sales-growth"),
  },
  {
    id: "dedicated-teams",
    title: "Dedicated Teams",
    shortTitle: "Remote Teams",
    tagline: "Exclusive talent pods operating as a direct extension of your business.",
    description: "Dedicated remote teams, specialized executive virtual assistants, and compliant staff leasing / employer of record solutions.",
    iconName: "Users",
    services: servicesData.filter((s) => s.pillarId === "dedicated-teams"),
  },
];
