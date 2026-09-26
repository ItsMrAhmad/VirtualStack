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
    const regex = new RegExp(`\\b${cleanTerm}\\b`, "i");
    return regex.test(query);
  });
}

export function processUserQuery(input: string): ChatMessage {
  const query = normalizeText(input);
  const id = `bot-${Date.now()}`;
  const timestamp = new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });

  // 1. GREETINGS & CASUAL HELLO
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
      text: "Hey! 👋 Thanks for reaching out. How can I help you today?",
      timestamp,
    };
  }

  // 2. CONVERSATIONAL RAPPORT ("How are you?")
  if (
    hasAny(query, [
      "how are you",
      "how are you doing",
      "hows it going",
      "how is it going",
      "hows your day",
      "how is your day",
      "whats up",
      "what's up",
    ])
  ) {
    return {
      id,
      sender: "bot",
      text: "Doing great, thanks for asking! 😊 How's your day going? What can I help you with regarding your team or operations?",
      timestamp,
    };
  }

  // 3. COMPANY OVERVIEW ("What do you guys do?")
  if (
    hasAny(query, [
      "what do you do",
      "what do you guys do",
      "what is virtual stack",
      "who are you guys",
      "tell me about virtual stack",
      "tell me about your company",
      "what services do you offer",
      "what do you offer",
    ])
  ) {
    return {
      id,
      sender: "bot",
      text: "We help companies scale by building dedicated, pre-vetted remote talent pods. Instead of paying high domestic salaries and overhead, we place full-time specialists—like customer support reps, 24/7 fleet dispatchers, back-office staff, or outbound sales SDRs—who work directly inside your tools as an extension of your team.\n\nWhat area of your operations are you looking to scale up right now?",
      linkUrl: "/services",
      linkText: "Explore our service pillars →",
      timestamp,
    };
  }

  // 4. CANADA & CANADIAN COVERAGE
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
      text: "Yes, absolutely! We're proudly headquartered right here in Calgary, Alberta. 🇨🇦\n\nWe work with companies all across Canada (Ontario, BC, Alberta, Quebec, etc.) as well as the US. Working with us means domestic Canadian contract protections, Canadian dollar billing if you prefer, and talent working seamlessly in your local time zone.\n\nAre you looking for customer service, 24/7 fleet dispatch, back-office, or sales support?",
      linkUrl: "/about",
      linkText: "Learn more about our Canadian headquarters →",
      timestamp,
    };
  }

  // 5. USA & US COVERAGE
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
      text: "Yes, definitely! A large portion of our clients are based across the United States.\n\nOur talent pods are custom-trained on US workflows—including interstate trucking dispatch (TMS, DAT, Truckstop), HIPAA-compliant healthcare support, and B2B SaaS helpdesk. We cover all US time zones (EST, CST, MST, PST) 24/7/365 with zero lag.\n\nWhat area of your US business are you looking to expand?",
      linkUrl: "/services",
      linkText: "Explore our US business solutions →",
      timestamp,
    };
  }

  // 6. TALENT LOCATION & ACCENTS
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
      text: "Our executive management and client success leads are in Calgary, Canada, and our talent pods operate out of vetted global delivery hubs staffed with college-educated professionals who speak fluent, neutral-accent English.\n\nBest of all: you interview and approve every single candidate on video before they start, so you only work with people you feel great about.",
      linkUrl: "/why-virtual-stack",
      linkText: "See how our candidate vetting works →",
      timestamp,
    };
  }

  // 7. FLEET DISPATCH & TRUCKING
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
      text: "Fleet dispatch is one of our flagship specialties! Our dedicated dispatchers handle 24/7 driver check calls, live track-and-trace, load booking on DAT and Truckstop, rate confirmations, and route support directly inside your TMS (McLeod, Samsara, KeepTruckin, etc.).\n\nAre you running a fleet of trucks or a freight brokerage? How many trucks are you currently coordinating?",
      linkUrl: "/industries/dispatch-logistics",
      linkText: "View our 24/7 Fleet Dispatch specs →",
      timestamp,
    };
  }

  // 8. CUSTOMER SUPPORT & HELPDESK
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
      text: "We provide dedicated customer support reps who plug right into your existing helpdesk—Zendesk, Freshdesk, Intercom, Gorgias, or phone systems. They handle inbound phone calls, live chat, and email tickets with dedicated QA leads keeping CSAT high.\n\nAre you looking for daytime tier-1 support, 24/7 coverage, or weekend help?",
      linkUrl: "/services/customer-support",
      linkText: "Explore our Customer Support solutions →",
      timestamp,
    };
  }

  // 9. BACK-OFFICE / KYC / DATA ENTRY
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
      text: "Our back-office teams take care of high-volume, detail-heavy workflows so your core team can stay focused on growth. We routinely handle data entry, KYC/AML verification, invoicing, AP/AR reconciliation, and claims processing.\n\nWhat specific workflow is taking up the most time for your team right now?",
      linkUrl: "/services/back-office-operations",
      linkText: "View our Back-Office Operations services →",
      timestamp,
    };
  }

  // 10. B2B SALES PROSPECTING & SDRs
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
      text: "We supply dedicated Outbound SDRs who build prospect lists, do cold outreach (phone, email, LinkedIn), qualify leads, and book meetings directly into your calendar.\n\nWhat kind of clients or industries are you targeting?",
      linkUrl: "/services/sales-prospecting",
      linkText: "Learn about our B2B Sales Prospecting pods →",
      timestamp,
    };
  }

  // 11. PRICING & COSTS
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
      text: "Our clients typically save 50% to 65% compared to hiring locally. Pricing is a flat, predictable monthly rate per dedicated specialist that covers their salary, workstation, fiber internet, supervision, and benefits. Zero hidden fees, and everything is simple month-to-month.\n\nThe exact rate depends on the role (e.g. customer support vs. 24/7 dispatch). What role are you budgeting for?",
      linkUrl: "/book-a-consultation",
      linkText: "Book a 10-Min Scoping Call for an exact quote →",
      timestamp,
    };
  }

  // 12. MINIMUM TEAM SIZE ("Can I hire just 1 person?")
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
      text: "Yes, 100%! You can start with just 1 dedicated specialist (40 hours/week). There's no minimum team requirement at all. Many of our clients start with 1 rep or dispatcher to test the waters and scale up as they grow.\n\nWhat's the first role you're thinking about filling?",
      linkUrl: "/book-a-consultation",
      linkText: "Talk to us about hiring your first specialist →",
      timestamp,
    };
  }

  // 13. ONBOARDING TIMELINE ("How fast can we start?")
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
      text: "Usually between 1 to 2 weeks from start to finish! We source and screen candidates, you interview them on video to pick who you like, and then we walk them through your systems and SOPs.\n\nWhen are you hoping to have someone in place?",
      linkUrl: "/why-virtual-stack",
      linkText: "See our complete step-by-step onboarding model →",
      timestamp,
    };
  }

  // 14. CONTRACTS & CANCELLATION
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
      text: "Everything is month-to-month with no long-term lock-in. If your needs change or seasonal volumes shift, you just give us 30 days notice. We prefer to earn your business every month rather than lock you into multi-year contracts!",
      linkUrl: "/contact",
      linkText: "Request a sample service agreement →",
      timestamp,
    };
  }

  // 15. TRAINING & SOPS ("How do they learn our software?")
  if (
    hasAny(query, [
      "train",
      "training",
      "sop",
      "sops",
      "how do they learn",
      "how do you train",
      "workflow",
      "processes",
      "shadowing",
    ])
  ) {
    return {
      id,
      sender: "bot",
      text: "We handle the foundational screening and professional skills, and you train them on your specific software and SOPs—just like you would with an in-house hire. We also assign a dedicated Team Lead who shadows the training to ensure standards stay high ongoing.\n\nDo you already have documented SOPs in place, or would you need help drafting them?",
      timestamp,
    };
  }

  // 16. SOFTWARE & TOOLS COMPATIBILITY
  if (
    hasAny(query, [
      "tools",
      "software",
      "crm",
      "zendesk",
      "salesforce",
      "hubspot",
      "slack",
      "shopify",
      "quickbooks",
      "teams",
      "apollo",
      "system",
      "stack",
    ])
  ) {
    return {
      id,
      sender: "bot",
      text: "Our team works directly inside whatever tools you already use! We plug right into Slack, Teams, Zendesk, Salesforce, HubSpot, Shopify, McLeod, QuickBooks, Google Workspace, and more. You don't have to change your tech stack at all.",
      timestamp,
    };
  }

  // 17. SHIFTS, HOURS & 24/7 COVERAGE
  if (
    hasAny(query, [
      "shift",
      "shifts",
      "hours",
      "night shift",
      "overnight",
      "weekend",
      "weekends",
      "holidays",
      "24/7",
      "time zone",
      "pst",
      "mst",
      "est",
      "cst",
      "operating hours",
    ])
  ) {
    return {
      id,
      sender: "bot",
      text: "We operate 24/7/365, so we can support any schedule your business needs! Whether that's standard North American business hours (EST, CST, MST, PST), after-hours dispatch, overnight coverage, or weekends, we schedule your team around your exact operating hours.",
      timestamp,
    };
  }

  // 18. TRIAL & CANDIDATE REPLACEMENT
  if (
    hasAny(query, [
      "trial",
      "guarantee",
      "replacement",
      "replace",
      "not working out",
      "bad fit",
      "fire",
      "what if they quit",
      "turnover",
    ])
  ) {
    return {
      id,
      sender: "bot",
      text: "We offer a 100% free candidate replacement guarantee. If someone isn't the right fit for your team for any reason, we'll replace them immediately at no extra cost. Plus, with month-to-month agreements, you're never locked in.",
      timestamp,
    };
  }

  // 19. BILLING & CURRENCIES
  if (
    hasAny(query, [
      "billing",
      "payment",
      "how do i pay",
      "currency",
      "cad",
      "usd",
      "credit card",
      "wire",
      "invoice",
      "ach",
      "bank transfer",
    ])
  ) {
    return {
      id,
      sender: "bot",
      text: "We invoice on simple monthly terms. You can pay via ACH, direct bank transfer, wire, or credit card, and we can bill in either USD or CAD depending on what's easiest for your accounting.",
      timestamp,
    };
  }

  // 20. EQUIPMENT & HARDWARE
  if (
    hasAny(query, [
      "computer",
      "laptop",
      "equipment",
      "hardware",
      "internet",
      "power",
      "headset",
      "setup",
      "workstation",
    ])
  ) {
    return {
      id,
      sender: "bot",
      text: "All equipment is provided by us! Every team member gets high-spec workstations, dual monitors, noise-canceling headsets, high-speed fiber internet, and backup generators to ensure zero downtime.",
      timestamp,
    };
  }

  // 21. MANAGEMENT & SUPERVISION
  if (
    hasAny(query, [
      "manager",
      "management",
      "supervisor",
      "team lead",
      "who manages",
      "oversight",
      "attendance",
      "kpi",
    ])
  ) {
    return {
      id,
      sender: "bot",
      text: "Every pod comes with a dedicated Team Lead and QA supervisor at no extra charge. They handle daily attendance, KPI monitoring, and coaching, while you direct their day-to-day tasks just like an internal hire.",
      timestamp,
    };
  }

  // 22. HEALTHCARE & MEDICAL
  if (
    hasAny(query, [
      "healthcare",
      "medical",
      "clinic",
      "patient",
      "dental",
      "doctor",
      "telehealth",
      "emr",
      "ehr",
    ])
  ) {
    return {
      id,
      sender: "bot",
      text: "Yes! We work with healthcare practices, dental clinics, and telehealth providers. Our pods handle patient intake, appointment scheduling, insurance verification, and billing—all in strict compliance with HIPAA standards.",
      linkUrl: "/industries/healthcare",
      linkText: "Learn about our Healthcare solutions →",
      timestamp,
    };
  }

  // 23. E-COMMERCE & SHOPIFY
  if (
    hasAny(query, [
      "ecommerce",
      "shopify",
      "amazon",
      "returns",
      "orders",
      "refunds",
      "store",
      "woocommerce",
    ])
  ) {
    return {
      id,
      sender: "bot",
      text: "We do a lot in e-commerce! Our reps handle live chat, email inquiries, returns/exchanges, order tracking, and chargebacks inside Shopify, Gorgias, Zendesk, and Amazon Seller Central.\n\nAre you looking for day-to-day customer support or help managing holiday spikes?",
      linkUrl: "/industries/ecommerce",
      linkText: "View our E-Commerce support capabilities →",
      timestamp,
    };
  }

  // 24. REAL ESTATE & PROPERTY MANAGEMENT
  if (
    hasAny(query, [
      "real estate",
      "property management",
      "tenants",
      "leases",
      "maintenance",
      "realtor",
    ])
  ) {
    return {
      id,
      sender: "bot",
      text: "Yes! We support property managers and real estate agencies with tenant maintenance dispatch, lease applications, after-hours emergency calls, and cold calling/lead qualification for brokers.",
      linkUrl: "/industries/real-estate",
      linkText: "Explore our Real Estate operations →",
      timestamp,
    };
  }

  // 25. SECURITY, PRIVACY & COMPLIANCE
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
      text: "We operate under enterprise-grade security standards: SOC 2 Type II, ISO 27001, and HIPAA compliance. All workstations are locked down with MDM, encrypted drives, secure VPNs, and no unauthorized local storage. We also sign bilateral NDAs before anything starts.\n\nDo you have specific compliance requirements we should review?",
      linkUrl: "/why-virtual-stack",
      linkText: "Review our security and infrastructure standards →",
      timestamp,
    };
  }

  // 26. DIRECT CONTACT & SPEAK TO A HUMAN
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
      text: "Our human leadership team is right here and ready to talk with you! Here's how to reach us directly:\n\n• Toll-Free Phone: +1 (888) 910-0868 (Available 24/7)\n• Direct Line: +1 (833) 800-2022\n• Email: info@virtualstack.us\n• Headquarters: 500 4th Avenue SW, Suite 2500, Calgary, AB, Canada\n\nYou can also click 'Zoom Consultation' at the top to book a direct 10-minute video call with us!",
      linkUrl: "/contact",
      linkText: "Open our contact form →",
      timestamp,
    };
  }

  // 27. ZOOM CONSULTATION / BOOKING
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
      text: "You can book a complimentary 10-Minute Zoom Scoping Call directly with our operations leadership! We'll review your workflows, define the skill set you need, and give you an exact price and timeline.\n\nClick the button below to pick a time that works for you!",
      linkUrl: "/book-a-consultation",
      linkText: "Pick a time on our Zoom calendar →",
      timestamp,
    };
  }

  // 28. "ARE YOU A BOT?" / AI CHECK
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
      text: "Good eye! I'm an AI assistant, but our real team in Calgary is right behind the scenes. 😊\n\nIf you'd prefer to talk to a human directly, you can call us at +1 (888) 910-0868 anytime (24/7) or book a quick Zoom call. Otherwise, I'm happy to help answer your questions right here!",
      linkUrl: "/contact",
      linkText: "Connect with our team →",
      timestamp,
    };
  }

  // 29. GRATITUDE & CLOSING
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
      text: "You're welcome! If anything else comes up, just ask—I'm right here. Have a great day! 😊",
      timestamp,
    };
  }

  if (hasAny(query, ["bye", "goodbye", "see ya", "have a good day", "later"])) {
    return {
      id,
      sender: "bot",
      text: "Take care! Feel free to come back anytime, or give us a call at +1 (888) 910-0868. Talk soon! 👋",
      timestamp,
    };
  }

  // 30. Match against Knowledge Base Items (Fallback search)
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
      linkUrl: bestMatch.linkUrl,
      linkText: bestMatch.linkText,
      timestamp,
    };
  }

  // 31. Natural, Empathetic Human Fallback
  return {
    id,
    sender: "bot",
    text: "Hmm, I'm not 100% sure about that one—I don't want to give you the wrong info!\n\nOur team in Calgary would know best. Want to give us a call at +1 (888) 910-0868 or book a quick 10-minute Zoom call? We're available 24/7!",
    linkUrl: "/book-a-consultation",
    linkText: "Book a quick call with our team →",
    timestamp,
  };
}
