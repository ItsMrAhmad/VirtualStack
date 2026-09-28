import { chatbotKnowledge, type KnowledgeItem } from "./knowledgeBase";
import { companyData } from "@/lib/data/company";

export interface ChatMessage {
  id: string;
  sender: "user" | "bot";
  text: string;
  timestamp: string;
  bullets?: string[];
  linkUrl?: string;
  linkText?: string;
  showActionButtons?: boolean;
  /** When set, the widget offers a pre-filled "Email this question" link. */
  emailQuery?: string;
}

const PHONE = companyData.contacts.tollFreeDisplay;
const EMAIL = companyData.contacts.email;

/**
 * Normalizes input text by trimming, lowercasing, and removing extraneous punctuation.
 */
function normalizeText(text: string): string {
  return text
    .toLowerCase()
    .replace(/[’']/g, "")
    .replace(/[?!.,;:()\[\]"]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function escapeRegExp(value: string): string {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

/**
 * Checks if the normalized query contains any of the terms as whole words or whole phrases.
 */
function hasAny(query: string, terms: string[]): boolean {
  return terms.some((term) => {
    const cleanTerm = term.toLowerCase().trim();
    const regex = new RegExp(`(^|[^a-z0-9])${escapeRegExp(cleanTerm)}($|[^a-z0-9])`, "i");
    return regex.test(query);
  });
}

interface Intent {
  terms: string[];
  /** Optional extra guard, e.g. only short greetings. */
  when?: (query: string) => boolean;
  reply: Omit<ChatMessage, "id" | "sender" | "timestamp">;
}

/**
 * Intents are checked in order, so specific topics must come before broad ones
 * (e.g. "shopify" is e-commerce before it is a generic "tools" question).
 */
const INTENTS: Intent[] = [
  // Small talk
  {
    terms: ["how are you", "how are you doing", "hows it going", "how is it going", "hows your day", "how is your day", "whats up"],
    reply: {
      text: "Doing great, thanks for asking! 😊 What can I help you with regarding your team or operations?",
    },
  },

  // Bot disclosure (before "contact", which also listens for "real person")
  {
    terms: [
      "are you a bot",
      "are you an ai",
      "are you ai",
      "are you real",
      "are you a real person",
      "are you human",
      "are you a human",
      "am i talking to a bot",
      "am i talking to a person",
      "is this a bot",
      "is this ai",
      "is this automated",
      "are you a robot",
      "robot",
    ],
    reply: {
      text: `Good question! I'm Virtual Stack's virtual assistant, not a person. For a human, call our team 24/7 at ${PHONE} or email ${EMAIL}. Otherwise I'm happy to answer questions right here!`,
      linkUrl: "/contact",
      linkText: "Contact our team →",
    },
  },

  // Company overview
  {
    terms: [
      "what do you do",
      "what do you guys do",
      "what is virtual stack",
      "who is virtual stack",
      "who are you guys",
      "tell me about virtual stack",
      "tell me about your company",
      "tell us about your company",
      "about your company",
      "what services do you offer",
      "what do you offer",
      "what services",
    ],
    reply: {
      text: "We help companies scale with dedicated, pre-vetted remote specialists: customer support reps, 24/7 dispatchers, back-office staff, sales SDRs and virtual assistants. They work inside your tools as an extension of your team, managed from our Calgary headquarters since 2011.\n\nWhat area of your operations are you looking to scale?",
      linkUrl: "/services",
      linkText: "Explore our services →",
    },
  },

  // Pricing
  {
    terms: [
      "price",
      "pricing",
      "cost",
      "costs",
      "how much",
      "rates",
      "fees",
      "expensive",
      "cheap",
      "affordable",
      "hourly rate",
      "monthly rate",
      "savings",
      "save money",
      "quote",
      "budget",
    ],
    reply: {
      text: "Clients typically save 50–65% compared to hiring locally. Pricing is a flat monthly rate per dedicated specialist that covers salary, workstation, internet, supervision and benefits, with no hidden fees.\n\nThe exact rate depends on the role (e.g. customer support vs. 24/7 dispatch). What role are you budgeting for?",
      linkUrl: "/book-a-consultation",
      linkText: "Get an exact quote →",
    },
  },

  // Virtual receptionist / answering service
  {
    terms: [
      "receptionist",
      "answering service",
      "answer our phones",
      "answer the phones",
      "answer phones",
      "answer our calls",
      "answer calls",
      "phone answering",
      "call answering",
      "missed calls",
      "after hours calls",
      "after-hours calls",
    ],
    reply: {
      text: "Yes! Our virtual receptionists answer your calls live, 24/7, in your company's name. They screen callers, book appointments, take detailed messages and transfer urgent calls, so you never miss a lead or a customer after hours.\n\nWhat hours do you need covered?",
      linkUrl: "/services/virtual-receptionist",
      linkText: "See our Virtual Receptionist service →",
    },
  },

  // Virtual assistants
  {
    terms: [
      "virtual assistant",
      "virtual assistants",
      "executive assistant",
      "personal assistant",
      "admin assistant",
      "va",
      "inbox management",
      "calendar management",
    ],
    reply: {
      text: "Our dedicated virtual assistants handle inbox triage, calendar management, travel booking, CRM updates, research and day-to-day admin. They work your hours, inside your tools, exclusively for you.\n\nWhat tasks would you hand off first?",
      linkUrl: "/services/virtual-assistants",
      linkText: "Explore Virtual Assistants →",
    },
  },

  // Bookkeeping & financial operations
  {
    terms: [
      "bookkeeping",
      "bookkeeper",
      "accounting",
      "accountant",
      "payroll",
      "reconciliation",
      "fintech",
      "cpa",
      "loan processing",
      "mortgage",
      "collections",
    ],
    reply: {
      text: "Yes. Our financial operations teams handle bookkeeping, bank and transaction reconciliation, accounts payable/receivable, invoice processing and loan document indexing for fintechs, lenders and CPA firms. They work in QuickBooks, Xero, NetSuite and your own systems.\n\nWhich workflow takes up the most of your team's time?",
      linkUrl: "/industries/financial-services",
      linkText: "See our Financial Services operations →",
    },
  },

  // Appointment setting (specific service asks win over industry context, e.g. "for our clinic")
  {
    terms: ["appointment setting", "appointment setter", "book meetings", "booking meetings", "set appointments", "meeting setting"],
    reply: {
      text: "Our appointment setters reach out to your target accounts by phone, email and LinkedIn, qualify interest and book meetings straight into your sales team's calendar.\n\nWho is your ideal customer?",
      linkUrl: "/services/appointment-setting",
      linkText: "Explore Appointment Setting →",
    },
  },

  // Telemarketing / outbound calling
  {
    terms: ["telemarketing", "telesales", "outbound calling", "outbound calls", "cold call", "cold calling", "phone surveys", "reactivation"],
    reply: {
      text: "Our outbound teams run telesales, cold calling, phone surveys and database reactivation campaigns, with call recording, scripts tuned to your offer and daily reporting.",
      linkUrl: "/services/telemarketing",
      linkText: "Explore Telemarketing →",
    },
  },

  // Fleet dispatch & trucking
  {
    terms: [
      "dispatch",
      "dispatcher",
      "dispatchers",
      "trucking",
      "logistics",
      "freight",
      "trucks",
      "truck",
      "fleet",
      "loads",
      "tms",
      "samsara",
      "mcleod",
      "dat",
      "truckstop",
      "drivers",
      "check calls",
      "box truck",
      "semi",
      "carrier",
      "brokerage",
      "bol",
      "rate con",
      "taxi",
    ],
    reply: {
      text: "Fleet dispatch is one of our specialties! Our dispatchers handle 24/7 driver check calls, live track-and-trace, load booking on DAT and Truckstop, rate confirmations and route support directly inside your TMS (McLeod, Samsara, KeepTruckin, etc.).\n\nAre you running a fleet or a freight brokerage? How many trucks are you coordinating?",
      linkUrl: "/industries/dispatch-logistics",
      linkText: "View our 24/7 Fleet Dispatch service →",
    },
  },

  // Healthcare
  {
    terms: ["healthcare", "medical", "clinic", "clinics", "patient", "patients", "dental", "dentist", "doctor", "telehealth", "emr", "ehr", "medical billing"],
    reply: {
      text: "Yes! We support healthcare practices, dental clinics and telehealth providers with patient intake, appointment scheduling, insurance verification and medical billing, all in HIPAA-compliant workflows under a signed BAA.",
      linkUrl: "/industries/healthcare",
      linkText: "Learn about our Healthcare solutions →",
    },
  },

  // E-commerce (before the generic "tools" intent, which also knows Shopify)
  {
    terms: ["ecommerce", "e-commerce", "shopify", "amazon", "returns", "orders", "order tracking", "refunds", "store", "online store", "woocommerce", "wismo"],
    reply: {
      text: "We do a lot in e-commerce! Our reps handle live chat, email, returns and exchanges, order tracking and chargebacks inside Shopify, Gorgias, Zendesk and Amazon Seller Central.\n\nAre you looking for day-to-day support or help with holiday spikes?",
      linkUrl: "/industries/ecommerce",
      linkText: "View our E-Commerce support →",
    },
  },

  // Real estate
  {
    terms: ["real estate", "property management", "property manager", "tenants", "tenant", "leases", "realtor", "brokers"],
    reply: {
      text: "Yes! We support property managers and real estate teams with tenant calls, maintenance dispatch, lease applications, after-hours emergency lines and lead qualification for agents.",
      linkUrl: "/industries/real-estate",
      linkText: "Explore our Real Estate operations →",
    },
  },

  // Insurance
  {
    terms: ["insurance", "insurer", "claims", "fnol", "insurance policy", "policy servicing", "policyholders", "underwriting", "mga"],
    reply: {
      text: "We support insurance agencies, MGAs and carriers with first notice of loss (FNOL) intake, claims triage, policy servicing, renewals and certificate requests.",
      linkUrl: "/industries/insurance",
      linkText: "See our Insurance operations →",
    },
  },

  // Legal & professional services
  {
    terms: ["law firm", "legal", "lawyer", "lawyers", "attorney", "attorneys", "paralegal", "consultancy", "consulting firm", "professional services"],
    reply: {
      text: "Yes. Law firms and consultancies use our teams for client intake, scheduling, document preparation, billing support and executive assistance, all under strict confidentiality agreements.",
      linkUrl: "/industries/professional-services",
      linkText: "See our Professional Services support →",
    },
  },

  // Technical support / SaaS
  {
    terms: ["technical support", "tech support", "it support", "it helpdesk", "saas", "software company", "tier 1", "tier 2", "tier-1", "tier-2", "troubleshooting", "bug reports"],
    reply: {
      text: "Our technical support teams handle tier-1 and tier-2 troubleshooting, account and configuration issues, and bug triage, escalating reproducible issues with logs straight into Jira or your ticketing tool.",
      linkUrl: "/services/technical-support",
      linkText: "Explore Technical Support →",
    },
  },

  // Customer support & helpdesk
  {
    terms: [
      "customer support",
      "customer service",
      "customer care",
      "call center",
      "call centre",
      "contact center",
      "helpdesk",
      "help desk",
      "phone support",
      "live chat",
      "email support",
      "chat support",
      "tickets",
      "ticket",
      "zendesk",
      "freshdesk",
      "intercom",
      "gorgias",
      "inbound",
      "omnichannel",
      "csat",
    ],
    reply: {
      text: "We provide dedicated customer support reps who plug into your existing helpdesk (Zendesk, Freshdesk, Intercom, Gorgias or your phone system). They handle calls, live chat and email tickets, with QA leads keeping CSAT high.\n\nAre you looking for daytime support, 24/7 coverage or weekend help?",
      linkUrl: "/services/customer-support",
      linkText: "Explore Customer Support →",
    },
  },

  // Billing & payment terms (before back-office, so "how does billing work" is answered here)
  {
    terms: [
      "billing",
      "billed",
      "payment",
      "payments",
      "how do i pay",
      "how do we pay",
      "currency",
      "cad",
      "usd",
      "credit card",
      "wire",
      "invoiced",
      "ach",
      "bank transfer",
    ],
    reply: {
      text: "We invoice on simple monthly terms. You can pay by ACH, bank transfer, wire or credit card, and we can bill in USD or CAD, whichever is easiest for your accounting.",
    },
  },

  // Back-office / data entry / documents
  {
    terms: [
      "back office",
      "back-office",
      "kyc",
      "aml",
      "data entry",
      "data management",
      "document",
      "documents",
      "document processing",
      "processing",
      "invoice processing",
      "invoicing",
      "accounts payable",
      "accounts receivable",
      "admin",
      "administrative",
    ],
    reply: {
      text: "Our back-office teams take care of high-volume, detail-heavy work so your core team can focus on growth: data entry, KYC/AML checks, document processing, invoicing and AP/AR.\n\nWhich workflow is taking up the most time right now?",
      linkUrl: "/services/back-office-operations",
      linkText: "View Back-Office Operations →",
    },
  },

  // B2B sales & lead generation
  {
    terms: ["sales", "sdr", "sdrs", "bdr", "lead gen", "lead generation", "leads", "prospecting", "cold email", "outbound", "pipeline", "list building"],
    reply: {
      text: "We supply dedicated SDRs who build prospect lists, run cold outreach (phone, email, LinkedIn), qualify leads and book meetings into your calendar.\n\nWhat kind of clients or industries are you targeting?",
      linkUrl: "/services/lead-generation",
      linkText: "Learn about our Lead Generation teams →",
    },
  },

  // Staff leasing / dedicated teams
  {
    terms: [
      "staff leasing",
      "employer of record",
      "eor",
      "dedicated team",
      "dedicated teams",
      "remote team",
      "remote teams",
      "offshore team",
      "build a team",
      "hire staff",
      "full time staff",
    ],
    reply: {
      text: "We build dedicated remote teams that work only for you. With staff leasing, Virtual Stack acts as the employer of record and handles contracts, payroll, benefits, equipment and a secure workspace, while you direct the daily work.",
      linkUrl: "/services/dedicated-remote-teams",
      linkText: "Explore Dedicated Remote Teams →",
    },
  },

  // Minimum team size
  {
    terms: [
      "minimum",
      "just 1",
      "just one",
      "1 person",
      "one person",
      "single person",
      "one agent",
      "1 agent",
      "small business",
      "startup",
      "how many people",
      "small team",
      "can i hire 1",
    ],
    reply: {
      text: "Yes! You can start with just 1 dedicated specialist (40 hours/week). There's no minimum team size. Many clients start with one rep or dispatcher and scale up as they grow.\n\nWhat's the first role you're thinking about?",
      linkUrl: "/book-a-consultation",
      linkText: "Talk to us about your first hire →",
    },
  },

  // Onboarding timeline
  {
    terms: ["how fast", "how long", "timeline", "onboarding", "ramp up", "setup time", "when can we start", "how soon", "get started", "launch"],
    reply: {
      text: "Usually 1 to 2 weeks from start to finish. We source and screen candidates, you interview and approve them on video, and then we train them on your systems and SOPs.\n\nWhen are you hoping to have someone in place?",
      linkUrl: "/why-virtual-stack",
      linkText: "See how onboarding works →",
    },
  },

  // Contracts
  {
    terms: ["contract", "contracts", "commitment", "cancel", "cancellation", "lock in", "locked in", "agreement", "penalty", "long term", "month to month"],
    reply: {
      text: "We don't lock clients into rigid multi-year contracts. Agreements are flexible, with clear trial and scaling terms, so you can adjust as volumes change. We'd rather earn your business every month.",
      linkUrl: "/contact",
      linkText: "Ask about our service agreement →",
    },
  },

  // Candidate fit & replacement
  {
    terms: ["trial", "guarantee", "replacement", "replace", "not working out", "bad fit", "what if they quit", "turnover"],
    reply: {
      text: "You interview and approve every team member before they start. If someone isn't the right fit, tell us and we'll source and train a replacement, and cross-trained backup staff keep your work covered in the meantime.",
    },
  },

  // Legal pages
  {
    terms: ["privacy policy", "terms of service", "terms and conditions", "terms of use"],
    reply: {
      text: "You can read our privacy policy and terms of service at any time. For questions about how we protect client data, just ask me about security.",
      linkUrl: "/privacy",
      linkText: "Read our privacy policy →",
    },
  },

  // Security & compliance
  {
    terms: [
      "security",
      "secure",
      "hipaa",
      "soc 2",
      "soc2",
      "iso",
      "iso 27001",
      "pci",
      "pci dss",
      "pci-dss",
      "compliance",
      "compliant",
      "privacy",
      "safe",
      "nda",
      "confidential",
      "data protection",
      "gdpr",
      "pipeda",
    ],
    reply: {
      text: "Security is built in: our operations are SOC 2 Type II, ISO 27001, PCI-DSS and HIPAA compliant. Workstations are locked down (no USB or local storage), access is biometric with 24/7 CCTV, connections run over encrypted VPN, and every team member signs an NDA.\n\nDo you have specific compliance requirements we should review?",
      linkUrl: "/resources/faqs#security",
      linkText: "Review our security standards →",
    },
  },

  // Training & SOPs
  {
    terms: ["train", "training", "sop", "sops", "how do they learn", "how do you train", "workflow", "workflows", "processes", "shadowing"],
    reply: {
      text: "We handle screening and core professional skills; you (with our help) train them on your specific software and SOPs, just like an in-house hire. A dedicated Team Lead shadows the training to keep standards high.\n\nDo you already have documented SOPs, or would you like help writing them?",
    },
  },

  // Tools compatibility
  {
    terms: ["tools", "software", "crm", "salesforce", "hubspot", "slack", "microsoft teams", "quickbooks", "apollo", "google workspace", "tech stack", "integrate", "integration"],
    reply: {
      text: "Our team works inside whatever tools you already use: Slack, Teams, Zendesk, Salesforce, HubSpot, Shopify, McLeod, QuickBooks, Google Workspace and more. You don't have to change your tech stack.",
    },
  },

  // Shifts & coverage hours
  {
    terms: ["shift", "shifts", "hours", "night shift", "overnight", "weekend", "weekends", "holidays", "24/7", "24 7", "time zone", "timezone", "pst", "mst", "est", "cst", "operating hours"],
    reply: {
      text: "We operate 24/7/365, so we can cover any schedule: standard North American business hours, after-hours, overnight or weekends. We schedule your team around your exact operating hours.",
    },
  },

  // Equipment
  {
    terms: ["computer", "laptop", "equipment", "hardware", "internet", "headset", "workstation", "workstations"],
    reply: {
      text: "We provide all the equipment: dual-monitor workstations, noise-canceling headsets and high-speed internet in our secure facilities, so there's nothing for you to ship or manage.",
    },
  },

  // Management
  {
    terms: ["manager", "management", "supervisor", "supervision", "team lead", "who manages", "oversight", "attendance", "kpi", "kpis", "reporting"],
    reply: {
      text: "Every team comes with a dedicated Team Lead and QA supervision. They handle attendance, KPI monitoring and coaching, while you direct the day-to-day work just like an internal hire.",
    },
  },

  // Talent location & accents
  {
    terms: [
      "where are your staff",
      "where are your agents",
      "where is the team",
      "where is your team",
      "where do you hire",
      "where are you located",
      "offshore",
      "nearshore",
      "accent",
      "accents",
      "philippines",
      "latin america",
      "english",
      "fluency",
    ],
    reply: {
      text: "Our leadership and client success team are in Calgary, Canada, and our specialists work from secure delivery centers with fluent, neutral-accent English.\n\nYou interview and approve every candidate on video before they start, so you only work with people you're happy with.",
      linkUrl: "/why-virtual-stack",
      linkText: "See how we vet candidates →",
    },
  },

  // Languages
  {
    terms: ["french", "spanish", "bilingual", "multilingual", "languages", "language", "francais", "español", "espanol"],
    reply: {
      text: "Our teams work in fluent English. If you need French, Spanish or other language coverage, tell us your requirements and we'll confirm availability for your role.",
      linkUrl: "/contact",
      linkText: "Ask about language coverage →",
    },
  },

  // Canada
  {
    terms: [
      "canada",
      "canadian",
      "calgary",
      "alberta",
      "toronto",
      "ontario",
      "vancouver",
      "british columbia",
      "montreal",
      "quebec",
      "edmonton",
      "ottawa",
      "in canada",
    ],
    reply: {
      text: "Yes! We're headquartered in Calgary, Alberta 🇨🇦 and work with companies across Canada and the US. We can bill in CAD and schedule your team around your local time zone.\n\nAre you looking for customer service, dispatch, back-office or sales support?",
      linkUrl: "/about",
      linkText: "Learn more about us →",
    },
  },

  // United States (whole phrases only, so "us" as a pronoun never triggers this)
  {
    terms: [
      "usa",
      "u s",
      "united states",
      "america",
      "american",
      "texas",
      "california",
      "florida",
      "new york",
      "north america",
      "in the us",
      "serve the us",
      "us clients",
      "us based",
      "us-based",
      "us companies",
      "us businesses",
    ],
    reply: {
      text: "Yes! Many of our clients are based across the United States. We cover every US time zone (EST, CST, MST, PST) 24/7/365, and our teams are trained on US workflows, from interstate dispatch to healthcare and SaaS support.\n\nWhat area of your business are you looking to expand?",
      linkUrl: "/services",
      linkText: "Explore our services →",
    },
  },

  // Contact / talk to a human
  {
    terms: [
      "human",
      "real person",
      "someone",
      "representative",
      "phone",
      "phone number",
      "call",
      "call you",
      "contact",
      "email",
      "address",
      "office",
      "speak to",
      "talk to",
      "number",
      "headquarters",
    ],
    reply: {
      text: `Our team is available 24/7. Here's how to reach us directly:\n\n• Toll-free: ${PHONE}\n• Email: ${EMAIL}\n• Office: ${companyData.corporateHeadquarters.fullAddress}`,
      linkUrl: "/contact",
      linkText: "Open our contact page →",
    },
  },

  // Booking a consultation
  {
    terms: ["zoom", "consultation", "book", "book a call", "schedule", "calendar", "meeting", "appointment", "demo", "video call", "scoping call"],
    reply: {
      text: `We'd love to set up a free 10-minute scoping call! We'll review your workflows, the skills you need, and give you an exact price and timeline. Call ${PHONE} or request a time on our booking page and we'll send you a Zoom invite.`,
      linkUrl: "/book-a-consultation",
      linkText: "Request a consultation →",
    },
  },

  // Greetings (checked late so "hi, I need a quote" is answered as a pricing question)
  {
    terms: ["hi", "hello", "hey", "good morning", "good afternoon", "good evening", "howdy", "hola", "greetings", "yo"],
    when: (q) => q.split(" ").length <= 5,
    reply: { text: "Hey! 👋 Thanks for reaching out. How can I help you today?" },
  },

  // Thanks
  {
    terms: ["thanks", "thank you", "thx", "awesome", "great", "perfect", "appreciate it", "sounds good", "cool"],
    reply: { text: "You're welcome! If anything else comes up, just ask. Have a great day! 😊" },
  },

  // Goodbye
  {
    terms: ["bye", "goodbye", "see ya", "have a good day", "later"],
    reply: { text: `Take care! Come back anytime, or call us at ${PHONE}. 👋` },
  },
];

export function processUserQuery(input: string): ChatMessage {
  const query = normalizeText(input);
  const id = `bot-${Date.now()}`;
  const timestamp = new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });

  for (const intent of INTENTS) {
    if (hasAny(query, intent.terms) && (!intent.when || intent.when(query))) {
      return { id, sender: "bot", timestamp, ...intent.reply };
    }
  }

  // Knowledge base search (whole-word matching only)
  let bestMatch: KnowledgeItem | null = null;
  let highestScore = 0;

  for (const item of chatbotKnowledge) {
    let score = 0;
    if (hasAny(query, [item.title])) score += 15;

    for (const kw of item.keywords) {
      if (hasAny(query, [kw])) score += 8;
      for (const word of kw.toLowerCase().split(" ")) {
        if (word.length > 3 && hasAny(query, [word])) score += 2;
      }
    }

    if (score > highestScore) {
      highestScore = score;
      bestMatch = item;
    }
  }

  if (bestMatch && highestScore >= 8) {
    return {
      id,
      sender: "bot",
      text: bestMatch.summary,
      linkUrl: bestMatch.linkUrl,
      linkText: bestMatch.linkText,
      timestamp,
    };
  }

  // Fallback: be honest and hand off to a human
  return {
    id,
    sender: "bot",
    text: `Hmm, I'm not sure about that one and I don't want to give you the wrong info.\n\nOur team can answer it directly: call ${PHONE} (24/7) or email your question to ${EMAIL}.`,
    emailQuery: input.trim(),
    timestamp,
  };
}
