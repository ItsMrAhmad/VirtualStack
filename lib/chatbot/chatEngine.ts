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

export function processUserQuery(input: string): ChatMessage {
  const query = input.trim().toLowerCase();
  const id = `bot-${Date.now()}`;
  const timestamp = new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });

  // 1. Handle Greetings
  if (
    /^(hi|hello|hey|good morning|good afternoon|good evening|howdy|greetings|hola)\b/i.test(query) &&
    query.split(/\s+/).length <= 4
  ) {
    return {
      id,
      sender: "bot",
      text: "Hello! I am the Virtual Stack Operations Assistant. How can I help you today? I can answer questions about our dedicated talent pods, 24/7 dispatch, pricing, or help you schedule a Zoom scoping consultation.",
      bullets: [
        "Ask about 24/7 Fleet Dispatch & Logistics",
        "Inquire about 50–65% cost savings & transparent pricing",
        "Explore Customer Support, Back Office & Sales pods",
        "Learn about our 1–2 week onboarding ramp-up"
      ],
      showActionButtons: true,
      timestamp,
    };
  }

  // 2. Handle Zoom Consultation / Booking queries
  if (
    query.includes("zoom") ||
    query.includes("consultation") ||
    query.includes("book") ||
    query.includes("schedule") ||
    query.includes("scoping call") ||
    query.includes("appointment") ||
    query.includes("calendar")
  ) {
    return {
      id,
      sender: "bot",
      text: "You can schedule a complimentary 10-Minute Zoom Scoping Call directly with our operational leadership. We'll discuss your required skill sets, software integrations, and custom team pricing.",
      bullets: [
        "10-Minute targeted video consultation",
        "No high-pressure sales pitch—pure operational scoping",
        "Immediate transparent pricing estimate and ramp-up timeline",
      ],
      linkUrl: "/book-a-consultation",
      linkText: "Schedule Your 10-Min Scoping Call →",
      showActionButtons: true,
      timestamp,
    };
  }

  // 3. Handle Contact Form / Direct Phone / Email queries
  if (
    query.includes("contact") ||
    query.includes("phone") ||
    query.includes("call you") ||
    query.includes("email") ||
    query.includes("address") ||
    query.includes("human") ||
    query.includes("representative") ||
    query.includes("support number")
  ) {
    return {
      id,
      sender: "bot",
      text: "You can reach the Virtual Stack team 24/7/365 via our toll-free line, email, or through our online contact form:",
      bullets: [
        "Toll-Free Phone: +1 (888) 910-0868 (Available 24/7)",
        "Secondary Direct: +1 (833) 800-2022",
        "Official Email: info@virtualstack.us",
        "Corporate Headquarters: 500 4th Avenue SW, Suite 2500, Calgary, AB, Canada",
        "Online Contact Form: Guaranteed response within 2 business hours"
      ],
      linkUrl: "/contact",
      linkText: "Open Contact Form →",
      showActionButtons: true,
      timestamp,
    };
  }

  // 4. Handle Thank You / Positive acknowledgments
  if (/^(thanks|thank you|awesome|great|perfect|appreciate it)\b/i.test(query)) {
    return {
      id,
      sender: "bot",
      text: "You're very welcome! If you're ready to explore how we can support your business, click below to book a quick 10-minute Zoom consultation or submit our contact form.",
      showActionButtons: true,
      timestamp,
    };
  }

  // 5. Match against Knowledge Base Items
  let bestMatch: KnowledgeItem | null = null;
  let highestScore = 0;

  for (const item of chatbotKnowledge) {
    let score = 0;

    // Check title match
    if (query.includes(item.title.toLowerCase())) {
      score += 15;
    }

    // Check keywords
    for (const kw of item.keywords) {
      if (query.includes(kw.toLowerCase())) {
        score += 8;
      }
      // Word boundary match
      const words = kw.split(" ");
      for (const w of words) {
        if (w.length > 3 && query.includes(w)) {
          score += 2;
        }
      }
    }

    if (score > highestScore) {
      highestScore = score;
      bestMatch = item;
    }
  }

  if (bestMatch && highestScore >= 6) {
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

  // 6. Helpful Fallback
  return {
    id,
    sender: "bot",
    text: "Virtual Stack provides dedicated, pre-vetted operational talent pods integrated directly into your software and workflows. We specialize in 24/7 Fleet Dispatch, Customer Support, Back-Office KYC & Processing, and B2B Sales Prospecting.",
    bullets: [
      "Save 50% to 65% compared to domestic in-house hiring",
      "Full deployment within 1 to 2 weeks with your interview approval",
      "24/7/365 operational coverage and daily SLA/KPI reporting",
      "Toll-Free Phone: +1 (888) 910-0868"
    ],
    linkUrl: "/services",
    linkText: "Explore our full catalog of services →",
    showActionButtons: true,
    timestamp,
  };
}
