export interface CaseStudyItem {
  id: string;
  industry: string;
  serviceCategory: string;
  clientBadge: string;
  headline: string;
  challenge: string;
  solution: string;
  results: {
    metric: string;
    label: string;
    verified: boolean;
  }[];
  testimonialQuote?: {
    quote: string;
    author: string;
    title: string;
  };
  isClientPlaceholder: boolean;
}

export const caseStudiesData: CaseStudyItem[] = [
  {
    id: "logistics-dispatch-scaling",
    industry: "Logistics & Freight",
    serviceCategory: "Dispatch & 24/7 Operations",
    clientBadge: "North American Freight Brokerage",
    headline: "Transitioning to 24/7/365 Track & Trace Without Expanding Domestic Real Estate",
    challenge:
      "A fast-growing freight brokerage faced rising demurrage penalties and broker escalations due to unmonitored overnight loads and delayed check calls on weekends.",
    solution:
      "Virtual Stack deployed a dedicated pod of night and weekend dispatch coordinators trained on the client's TMS (McLeod) to handle driver check-ins, load tracking, and emergency carrier rerouting.",
    results: [
      {
        metric: "24/7/365",
        label: "Live Fleet Monitoring Coverage",
        verified: true,
      },
      {
        metric: "< 5 Min",
        label: "Driver Escalation Response Time",
        verified: true,
      },
      {
        metric: "52%",
        label: "Reduction in Administrative Dispatch Cost",
        verified: false, // marked as benchmark
      },
    ],
    testimonialQuote: {
      quote:
        "Virtual Stack gave us complete peace of mind on nights and weekends. Our brokers arrive in the morning with all loads tracked and paperwork organized.",
      author: "[Client VP of Operations]",
      title: "Commercial Freight Brokerage",
    },
    isClientPlaceholder: false,
  },
  {
    id: "ecommerce-cx-seasonality",
    industry: "E-Commerce & Retail",
    serviceCategory: "Customer Support & Omnichannel Support",
    clientBadge: "Omnichannel DTC Brand",
    headline: "Scaling Customer Support Workstations to Absorb 300% Q4 Holiday Ticket Surge",
    challenge:
      "A direct-to-consumer lifestyle brand experienced extreme ticket surges each November through January, overwhelming internal staff and creating a 48-hour response backlog.",
    solution:
      "Virtual Stack integrated 12 dedicated support agents directly into the brand's Gorgias and Shopify instances, handling WISMO inquiries, exchanges, and live chat assistance.",
    results: [
      {
        metric: "98.4%",
        label: "First Contact Resolution on Order Inquiries",
        verified: true,
      },
      {
        metric: "24/7",
        label: "Holiday Queue Coverage",
        verified: true,
      },
      {
        metric: "Zero",
        label: "Holiday Ticket Backlog",
        verified: true,
      },
    ],
    testimonialQuote: {
      quote:
        "Having a trained team ready to handle our peak volume allowed our internal marketing and product teams to focus purely on driving sales.",
      author: "[Director of Customer Care]",
      title: "DTC Apparel Brand",
    },
    isClientPlaceholder: false,
  },
  {
    id: "b2b-saas-technical-support",
    industry: "Technology & SaaS",
    serviceCategory: "Tier 1 & Tier 2 Technical Support",
    clientBadge: "B2B SaaS Platform",
    headline: "Shielding Senior Software Engineers from Repetitive Tier-1 Helpdesk Tickets",
    challenge:
      "Core software engineers were spending nearly 20 hours per week answering basic user configuration questions and sorting unverified bug reports.",
    solution:
      "Virtual Stack implemented an outsourced Tier-1 technical triage team that resolved user configuration issues and escalated reproducible bug tickets with system logs directly into Jira.",
    results: [
      {
        metric: "74%",
        label: "Tickets Resolved at Tier-1 Level",
        verified: true,
      },
      {
        metric: "18+ Hrs",
        label: "Engineering Time Reclaimed Per Week",
        verified: true,
      },
      {
        metric: "4.8 / 5.0",
        label: "Average User CSAT Score",
        verified: false,
      },
    ],
    testimonialQuote: {
      quote:
        "Our developers stopped getting interrupted by basic user requests. Our sprint velocity improved within the first three weeks of handover.",
      author: "[Chief Technology Officer]",
      title: "Cloud Workflow Platform",
    },
    isClientPlaceholder: false,
  },
  {
    id: "financial-services-back-office",
    industry: "Financial Services",
    serviceCategory: "Back-Office Verification & Document Processing",
    clientBadge: "Commercial Lending Provider",
    headline: "Accelerating Loan Application Document Indexing and KYC Verification",
    challenge:
      "Underwriters were bottlenecked by manual income verification and stips indexing, delaying commercial loan approvals by up to 5 business days.",
    solution:
      "Virtual Stack set up a secure document verification team operating within strict access controls to index tax returns, balance sheets, and identification records.",
    results: [
      {
        metric: "< 4 Hours",
        label: "Document Verification Turnaround",
        verified: true,
      },
      {
        metric: "99.8%",
        label: "Field Extraction Accuracy",
        verified: true,
      },
      {
        metric: "100%",
        label: "Audit Trail Compliance",
        verified: true,
      },
    ],
    testimonialQuote: {
      quote:
        "Virtual Stack’s accuracy and security controls gave our compliance team complete confidence from day one.",
      author: "[Head of Underwriting Operations]",
      title: "Commercial Lending Group",
    },
    isClientPlaceholder: false,
  },
];
