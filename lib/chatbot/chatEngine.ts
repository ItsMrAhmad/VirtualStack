import { chatbotKnowledge, KnowledgeItem } from "./knowledgeBase";

export interface ChatMessage {
  id: string;
  sender: "user" | "bot";
  text: string;
  timestamp: string;
  bullets?: string[];
  linkUrl?: string;
  linkText?: string;
  showActionButtons?: boolean;
}

/**
 * Normalizes input text by trimming, lowercasing, and removing extraneous punctuation.
 */
function normalizeText(text: string): string {
  return text
    .toLowerCase()
    .replace(/[?!.,;:()\[\]"']/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

/**
 * Checks if the normalized query contains any of the specified keywords or exact phrases.
 */
function hasAny(query: string, terms: string[]): boolean {
  return terms.some((term) => {
    const cleanTerm = term.toLowerCase().trim();
    if (cleanTerm.includes(" ")) {
      return query.includes(cleanTerm);
    }
    // Word boundary check for single words to avoid accidental substring matches
    const regex = new RegExp(`\\b${cleanTerm}\\b`, "i");
    return regex.test(query);
  });
}

export function processUserQuery(input: string): ChatMessage {
  const query = normalizeText(input);
  const id = `bot-${Date.now()}`;
  const timestamp = new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });

  // 1. CANADA & CANADIAN LOCATIONS (Direct answer to "do you serve in canada?")
  if (
    hasAny(query, [
      "canada",
      "canadian",
      "calgary",
      "alberta",
      "toronto",
      "ontario",
      "vancouver",
      "bc",
      "montreal",
      "quebec",
      "edmonton",
      "ottawa",
      "bilingual",
      "canadian companies",
      "serve in canada",
      "in canada",
    ])
  ) {
    return {
      id,
      sender: "bot",
      text: "Yes, absolutely! We are proudly headquartered right here in Calgary, Alberta, Canada! 🇨🇦\n\nWe actively partner with businesses across all Canadian provinces (from Ontario and British Columbia to Alberta and Quebec) as well as across the United States. Working with Virtual Stack means you get domestic Canadian contract protections, Canadian dollar billing options if preferred, and dedicated talent operating seamlessly in your exact local time zone.\n\nAre you looking for support with customer service, 24/7 fleet dispatch, back-office processing, or sales prospecting here in Canada?",
      bullets: [
        "Headquarters: 500 4th Avenue SW, Suite 2500, Calgary, AB, Canada",
        "Full coverage across all North American time zones (PST, MST, CST, EST)",
        "Bilingual English/French support available upon request",
        "Toll-Free Phone: +1 (888) 910-0868 (24/7 access)",
      ],
      linkUrl: "/about",
      linkText: "Learn more about our Canadian headquarters & story →",
      showActionButtons: true,
      timestamp,
    };
  }

  // 2. USA & NORTH AMERICAN COVERAGE
  if (
    hasAny(query, [
      "usa",
      "us",
      "united states",
      "america",
      "american",
      "texas",
      "california",
      "florida",
      "new york",
      "north america",
      "in the us",
      "serve us",
      "us clients",
    ])
  ) {
    return {
      id,
      sender: "bot",
      text: "Yes, definitely! A significant portion of our clients are based right across the United States.\n\nOur dedicated operational pods are custom-trained on US business workflows—including interstate freight dispatch (TMS, DAT, Truckstop), US healthcare patient coordination (strict HIPAA compliance), and B2B SaaS customer support. We provide 24/7/365 coverage across EST, CST, MST, and PST with zero time-zone lag.\n\nWhat area of your US business are you looking to scale up?",
      bullets: [
        "24/7/365 operational coverage across all US time zones",
        "Strict HIPAA, SOC 2 Type II, and ISO 27001 data compliance",
        "50% to 65% cost savings compared to domestic US hiring",
        "Direct billing in USD with simple month-to-month terms",
      ],
      linkUrl: "/services",
      linkText: "Explore our US business solutions →",
      showActionButtons: true,
      timestamp,
    };
  }

  // 3. WHERE IS YOUR TALENT LOCATED / ACCENTS / OFFSHORE MODEL
  if (
    hasAny(query, [
      "where are your staff",
      "where are your agents",
      "where is the team",
      "where do you hire",
      "offshore",
      "nearshore",
      "accent",
      "accents",
      "philippines",
      "latin america",
      "english",
      "fluency",
      "talent location",
      "how do you find",
    ])
  ) {
    return {
      id,
      sender: "bot",
      text: "Great question! We operate a hybrid model that gives you the best of both worlds:\n\nOur executive management, compliance, and client success leads are based at our headquarters in Calgary, Canada. Our dedicated talent pods are stationed in top-tier global delivery centers staffed with college-educated, neutral-accented English professionals.\n\nEvery candidate undergoes strict voice clarity tests, background checks, and technical assessments. Most importantly: you get to interview and personally approve every single team member before they start!",
      bullets: [
        "100% dedicated to your company (never shared across clients)",
        "Flawless, neutral English fluency with North American cultural fluency",
        "You conduct the final video interviews and make the hiring decision",
        "Free candidate replacement guarantee at any time",
      ],
      linkUrl: "/why-virtual-stack",
      linkText: "See how our vetting and hiring process works →",
      showActionButtons: true,
      timestamp,
    };
  }

  // 4. FLEET DISPATCH & LOGISTICS (Specialty)
  if (
    hasAny(query, [
      "dispatch",
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
      "after hours dispatch",
      "box truck",
      "semi",
      "carrier",
      "brokerage",
      "bol",
      "rate con",
    ])
  ) {
    return {
      id,
      sender: "bot",
      text: "24/7 Fleet Dispatch is one of our flagship specialties! We manage over 12,000 loads every month for mid-size carriers and freight brokerages across North America.\n\nOur dedicated dispatchers handle:\n• 24/7 driver check calls, live track-and-trace, and route support\n• Load board hunting (DAT One, Truckstop) and rate negotiations\n• Broker carrier packets, rate confirmations, and detention tracking\n• Seamless integration into your TMS (McLeod, Samsara, KeepTruckin, etc.)\n\nHow many trucks are in your fleet, or are you running a freight brokerage?",
      bullets: [
        "Full 24/7/365 coverage, including nights, weekends, and holidays",
        "Less than 0.5% missed check-call rate with dedicated supervisors",
        "Up to 60% savings on domestic dispatch payroll costs",
        "Trained on all major TMS platforms and ELD monitoring tools",
      ],
      linkUrl: "/industries/dispatch-logistics",
      linkText: "View our 24/7 Fleet Dispatch case studies & specs →",
      showActionButtons: true,
      timestamp,
    };
  }

  // 5. CUSTOMER SUPPORT / CONTACT CENTER
  if (
    hasAny(query, [
      "customer support",
      "customer service",
      "call center",
      "helpdesk",
      "phone support",
      "live chat",
      "email support",
      "tickets",
      "ticket",
      "zendesk",
      "freshdesk",
      "intercom",
      "gorgias",
      "inbound",
      "omnichannel",
      "csat",
    ])
  ) {
    return {
      id,
      sender: "bot",
      text: "We build dedicated, omnichannel Customer Support pods that protect your brand reputation around the clock.\n\nOur agents integrate directly into your existing help desk (Zendesk, Freshdesk, Intercom, Gorgias, etc.) to handle phone calls, live chat, email ticketing, and social inquiries. We maintain an average CSAT above 94% with rigorous QA monitoring and daily SLA reporting.\n\nAre you looking for daytime tier-1 support, 24/7 coverage, or weekend surge handling?",
      bullets: [
        "Inbound phone, email, live chat, and SMS support",
        "Tier-1 triage up to Tier-2 technical troubleshooting",
        "Dedicated bilingual Team Lead and continuous QA scoring",
        "Average 94%+ CSAT with rapid response time guarantees",
      ],
      linkUrl: "/services/customer-support",
      linkText: "Explore our Customer Support solutions →",
      showActionButtons: true,
      timestamp,
    };
  }

  // 6. BACK-OFFICE / KYC / DATA ENTRY
  if (
    hasAny(query, [
      "back office",
      "kyc",
      "data entry",
      "document",
      "processing",
      "invoicing",
      "billing",
      "claims",
      "accounts payable",
      "accounts receivable",
      "reconciliation",
      "underwriting",
      "admin",
    ])
  ) {
    return {
      id,
      sender: "bot",
      text: "Our Back-Office pods handle repetitive, high-accuracy workflows so your onshore leadership can focus on high-leverage growth.\n\nCommon workflows we manage:\n• KYC/AML customer identity verification and document checks\n• Invoicing, AP/AR reconciliation, and merchant settlement auditing\n• High-volume data entry, catalog maintenance, and CRM cleanup\n• Healthcare and insurance claims processing (99.8%+ accuracy SLA)\n\nWhat specific back-office workflow is taking up the most time for your team?",
      bullets: [
        "99.8%+ SLA accuracy guarantee with dual-verification protocols",
        "SOC 2 and HIPAA compliant data handling",
        "Direct integration with your ERP, QuickBooks, or custom database",
        "Full daily throughput and error-rate reporting",
      ],
      linkUrl: "/services/back-office-operations",
      linkText: "View our Back-Office Operations services →",
      showActionButtons: true,
      timestamp,
    };
  }

  // 7. B2B SALES PROSPECTING / SDRs / APPOINTMENT SETTING
  if (
    hasAny(query, [
      "sales",
      "sdr",
      "bdr",
      "lead gen",
      "lead generation",
      "prospecting",
      "cold call",
      "cold calling",
      "cold email",
      "appointment setting",
      "outbound",
      "pipeline",
    ])
  ) {
    return {
      id,
      sender: "bot",
      text: "We provide dedicated Outbound Sales Development Representatives (SDRs) who build qualified pipeline and book meetings directly into your account executives' calendars.\n\nOur SDRs handle:\n• ICP contact list building and data enrichment (Apollo, ZoomInfo, LinkedIn)\n• Multi-channel outbound (personalized email, LinkedIn messaging, cold phone outreach)\n• Qualification scoring to ensure you only speak with ready buyers\n• Direct booking onto your Zoom/Google Meet schedule\n\nWhat industry or target buyer profile are you looking to reach?",
      bullets: [
        "Full-time dedicated SDRs working exclusively on your sales pipeline",
        "Trained on modern outbound tools (Salesforce, HubSpot, Apollo, Outreach)",
        "Transparent weekly metrics: dials, connects, open rates, and meetings booked",
        "Save over 60% compared to hiring a domestic outbound rep",
      ],
      linkUrl: "/services/sales-prospecting",
      linkText: "Learn about our B2B Sales Prospecting pods →",
      showActionButtons: true,
      timestamp,
    };
  }

  // 8. PRICING, COSTS & RATES
  if (
    hasAny(query, [
      "price",
      "pricing",
      "cost",
      "costs",
      "how much",
      "rates",
      "rate",
      "fees",
      "expensive",
      "cheap",
      "affordable",
      "hourly",
      "monthly",
      "save",
      "savings",
      "quote",
      "budget",
    ])
  ) {
    return {
      id,
      sender: "bot",
      text: "Our clients save between 50% to 65% compared to domestic in-house hiring!\n\nWe provide simple, transparent pricing:\n• Predictable flat monthly or hourly rates covering payroll, high-spec equipment, fiber internet, supervision, and benefits.\n• Zero hidden management fees or unexpected IT overhead.\n• Simple month-to-month agreements with no restrictive long-term lock-ins.\n\nBecause rates depend on the specific role (e.g., 1 dedicated specialist vs. a 24/7 dispatch pod), we can give you an exact customized quote on a quick 10-minute Zoom call. What role are you budgeting for?",
      bullets: [
        "50%–65% overall operational savings vs. domestic payroll and overhead",
        "All hardware, dual-monitor workstations, security, and management included",
        "Flexible month-to-month contracts (no multi-year handcuffs)",
        "Zero setup fees or surprise charges",
      ],
      linkUrl: "/book-a-consultation",
      linkText: "Schedule a 10-Min Scoping Call for an exact quote →",
      showActionButtons: true,
      timestamp,
    };
  }

  // 9. MINIMUM TEAM SIZE ("Can I hire just 1 person?")
  if (
    hasAny(query, [
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
    ])
  ) {
    return {
      id,
      sender: "bot",
      text: "Yes, 100%! You can start with just a single dedicated team member (1 Full-Time Equivalent).\n\nThere is absolutely no forced minimum pod size. Many of our longest-standing clients started with just one customer support rep or one overnight dispatcher, saw how smoothly things ran, and expanded their pod over time.\n\nYou get the exact same dedicated onboarding, QA supervision, and daily management whether you hire 1 specialist or 20!\n\nWhat's the first role you'd like to test out?",
      bullets: [
        "Start with 1 dedicated specialist (40 hours/week)",
        "Dedicated QA and Team Lead oversight included at no extra cost",
        "Scale up or down effortlessly as your business grows",
        "You interview and approve your specialist prior to onboarding",
      ],
      linkUrl: "/book-a-consultation",
      linkText: "Talk to us about hiring your first dedicated specialist →",
      showActionButtons: true,
      timestamp,
    };
  }

  // 10. ONBOARDING TIMELINE ("How fast can we start?")
  if (
    hasAny(query, [
      "how fast",
      "how long",
      "timeline",
      "start",
      "onboarding",
      "ramp up",
      "setup time",
      "when can we start",
      "get started",
      "launch time",
    ])
  ) {
    return {
      id,
      sender: "bot",
      text: "We can typically have your dedicated team sourced, vetted, and launched within 1 to 2 weeks!\n\nHere is how fast our launch process works:\n• Days 1–3: Scoping consultation and candidate profile selection\n• Days 4–6: You interview and approve the candidates via video\n• Days 7–10: Systems access, SOP training, and simulated mock scenarios\n• Week 2: Official go-live with our bilingual Team Lead supervising daily\n\nHow soon are you looking to have your team operational?",
      bullets: [
        "Fast 1–2 week turnaround from scoping call to live operations",
        "Client interview approval on every single team member",
        "Structured SOP training and shadowing before live interactions",
        "Dedicated Team Lead assigned on Day 1 for continuous oversight",
      ],
      linkUrl: "/why-virtual-stack",
      linkText: "See our complete step-by-step onboarding model →",
      showActionButtons: true,
      timestamp,
    };
  }

  // 11. CONTRACTS & CANCELLATION TERMS
  if (
    hasAny(query, [
      "contract",
      "commitment",
      "cancel",
      "cancellation",
      "lock in",
      "terms",
      "agreement",
      "penalty",
      "long term",
      "month to month",
    ])
  ) {
    return {
      id,
      sender: "bot",
      text: "We keep things refreshingly simple: we work on straightforward month-to-month service agreements with zero long-term lock-in handcuffs.\n\nWe believe in earning your business every single month through measurable performance, high CSAT, and flawless reliability. If your business needs shift or seasonal volumes change, you have full flexibility to adjust your pod.\n\nWould you like us to send over our standard onboarding agreement to review?",
      bullets: [
        "Flexible month-to-month service terms",
        "No restrictive 1-year or 3-year contract lock-ins",
        "Free candidate replacement if someone isn't the right fit",
        "Transparent billing with 30-day notice for adjustments",
      ],
      linkUrl: "/contact",
      linkText: "Request a sample service agreement →",
      showActionButtons: true,
      timestamp,
    };
  }

  // 12. SECURITY, PRIVACY & COMPLIANCE
  if (
    hasAny(query, [
      "security",
      "hipaa",
      "soc 2",
      "iso",
      "compliance",
      "privacy",
      "safe",
      "nda",
      "confidential",
      "data protection",
      "secure",
    ])
  ) {
    return {
      id,
      sender: "bot",
      text: "Data security is our top priority. We operate under strict North American enterprise compliance frameworks:\n\n• SOC 2 Type II, ISO 27001, and HIPAA compliance\n• Enterprise-managed hardware equipped with MDM, encrypted drives, and restricted USB/export access\n• Secure corporate VPNs, biometric facility entry, and paperless clean-desk protocols\n• Legally binding bilateral NDAs signed before any work begins\n\nDo you have specific compliance requirements or custom security audits we should review?",
      bullets: [
        "Certified HIPAA, SOC 2 Type II, and ISO 27001 compliant",
        "Rigorous background checks and NDAs for all team members",
        "Zero unauthorized data retention on local devices",
        "Full support for client-mandated VPNs and SSO integrations",
      ],
      linkUrl: "/why-virtual-stack",
      linkText: "Review our security and infrastructure standards →",
      showActionButtons: true,
      timestamp,
    };
  }

  // 13. DIRECT CONTACT / PHONE / SPEAK TO A HUMAN
  if (
    hasAny(query, [
      "human",
      "real person",
      "someone",
      "representative",
      "phone",
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
    ])
  ) {
    return {
      id,
      sender: "bot",
      text: "Our human leadership team is right here and ready to speak with you! Here is our direct contact info:\n\n• Toll-Free Phone: +1 (888) 910-0868 (Available 24/7)\n• Direct Line: +1 (833) 800-2022\n• Official Email: info@virtualstack.us\n• Corporate Headquarters: 500 4th Avenue SW, Suite 2500, Calgary, AB, Canada\n\nYou can also click 'Zoom Consultation' above to book a direct 10-minute video call with our operations team at your convenience!",
      bullets: [
        "Direct access to Canadian operations leadership",
        "Phone line answered 24/7/365: +1 (888) 910-0868",
        "Online contact form replies within 2 business hours",
        "Complimentary 10-minute Zoom scoping sessions",
      ],
      linkUrl: "/contact",
      linkText: "Open our direct contact form →",
      showActionButtons: true,
      timestamp,
    };
  }

  // 14. ZOOM CONSULTATION / BOOKING
  if (
    hasAny(query, [
      "zoom",
      "consultation",
      "book",
      "schedule",
      "calendar",
      "meeting",
      "appointment",
      "demo",
      "video call",
      "scoping call",
    ])
  ) {
    return {
      id,
      sender: "bot",
      text: "You can schedule a complimentary 10-Minute Zoom Scoping Call directly with our operations leadership!\n\nDuring our 10 minutes together:\n• We'll review your specific operational workflows and software tools\n• We'll define the ideal skill set and team structure you need\n• We'll provide transparent pricing and a firm onboarding timeline\n• Zero high-pressure sales tactics—just a practical operational discussion.\n\nClick the button below to pick a day and time that fits your calendar!",
      bullets: [
        "10-Minute targeted video consultation via Zoom",
        "Meet directly with our Calgary operations directors",
        "Instant custom pricing estimate and timeline",
        "No obligation or aggressive sales follow-up",
      ],
      linkUrl: "/book-a-consultation",
      linkText: "Pick a time on our Zoom calendar →",
      showActionButtons: true,
      timestamp,
    };
  }

  // 15. GREETINGS & CASUAL HELLO
  if (
    hasAny(query, [
      "hi",
      "hello",
      "hey",
      "good morning",
      "good afternoon",
      "good evening",
      "howdy",
      "hola",
      "greetings",
      "yo",
    ]) &&
    query.split(" ").length <= 4
  ) {
    return {
      id,
      sender: "bot",
      text: "Hi there! Great to connect with you. I'm part of the Virtual Stack team here in Calgary, Canada.\n\nHow can I help your business today? We specialize in building dedicated, high-performing remote teams for 24/7 fleet dispatch, customer support, back-office data processing, and B2B sales prospecting.\n\nWhat brings you by today?",
      bullets: [
        "24/7 Fleet Dispatch & Logistics coordination",
        "Customer Support (phone, email, live chat)",
        "Back-Office KYC, data entry & invoice processing",
        "B2B Sales Prospecting & SDR appointment setting",
      ],
      showActionButtons: true,
      timestamp,
    };
  }

  // 16. "ARE YOU A BOT?" / AI CHECK
  if (
    hasAny(query, [
      "are you a bot",
      "are you an ai",
      "are you real",
      "are you human",
      "who are you",
      "what are you",
      "is this ai",
      "robot",
    ])
  ) {
    return {
      id,
      sender: "bot",
      text: "I'm Virtual Stack's digital operations assistant, but our real human team in Calgary is right behind this screen!\n\nIf you'd like to speak with a real human right away, you can:\n• Call us directly at +1 (888) 910-0868 (available 24/7)\n• Book a quick 10-Minute Zoom Video Call with our operations director\n• Drop us a note via our contact form for a reply within 2 hours\n\nHow would you prefer to connect?",
      bullets: [
        "Real human operations team based in Calgary, AB, Canada",
        "Toll-Free Phone: +1 (888) 910-0868 (24/7)",
        "Zero-pressure 10-minute video scoping consultations",
      ],
      linkUrl: "/contact",
      linkText: "Connect with our human team →",
      showActionButtons: true,
      timestamp,
    };
  }

  // 17. GRATITUDE & CLOSING
  if (
    hasAny(query, [
      "thanks",
      "thank you",
      "awesome",
      "great",
      "perfect",
      "appreciate it",
      "sounds good",
      "cool",
    ])
  ) {
    return {
      id,
      sender: "bot",
      text: "You are very welcome! We'd love the opportunity to partner with your business.\n\nWhenever you're ready to see how a dedicated team looks for your operations, feel free to book a quick 10-minute Zoom chat with our leadership or drop us a line anytime. Have a fantastic day ahead!",
      showActionButtons: true,
      timestamp,
    };
  }

  if (hasAny(query, ["bye", "goodbye", "see ya", "have a good day", "later"])) {
    return {
      id,
      sender: "bot",
      text: "Thanks for stopping by Virtual Stack! Have an awesome day, and don't hesitate to reach back out or call us at +1 (888) 910-0868 whenever you're ready to scale your team. Take care!",
      showActionButtons: true,
      timestamp,
    };
  }

  // 18. Match against Knowledge Base Items (Fallback search)
  let bestMatch: KnowledgeItem | null = null;
  let highestScore = 0;

  for (const item of chatbotKnowledge) {
    let score = 0;
    if (query.includes(item.title.toLowerCase())) score += 15;

    for (const kw of item.keywords) {
      const cleanKw = kw.toLowerCase();
      if (query.includes(cleanKw)) score += 8;
      const words = cleanKw.split(" ");
      for (const w of words) {
        if (w.length > 3 && query.includes(w)) score += 2;
      }
    }

    if (score > highestScore) {
      highestScore = score;
      bestMatch = item;
    }
  }

  if (bestMatch && highestScore >= 5) {
    return {
      id,
      sender: "bot",
      text: bestMatch.summary,
      bullets: bestMatch.bullets,
      linkUrl: bestMatch.linkUrl,
      linkText: bestMatch.linkText,
      showActionButtons: true,
      timestamp,
    };
  }

  // 19. Natural, Empathetic Human Fallback
  return {
    id,
    sender: "bot",
    text: "I want to make sure I give you the most accurate answer for your specific business setup! 😊\n\nVirtual Stack is a premier operations partner headquartered in Calgary, Canada. We build dedicated, pre-vetted remote teams for 24/7 fleet dispatch, customer support, back-office processing, and B2B sales.\n\nCould you tell me a little more about what your business does or what specific role you're looking to fill? Or if you prefer, our operations directors can answer your exact questions on a quick 10-minute Zoom consultation!",
    bullets: [
      "Save 50% to 65% compared to domestic in-house hiring",
      "Full deployment within 1 to 2 weeks with your candidate approval",
      "24/7 operational coverage across Canada & the United States",
      "Toll-Free Phone: +1 (888) 910-0868 (available 24/7)",
    ],
    linkUrl: "/book-a-consultation",
    linkText: "Schedule a 10-Min Scoping Call with our team →",
    showActionButtons: true,
    timestamp,
  };
}
