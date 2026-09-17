export interface FAQItem {
  question: string;
  answer: string;
  category: "General" | "Onboarding" | "Security" | "Operations" | "Billing";
}

export const faqsData: FAQItem[] = [
  {
    category: "General",
    question: "What is Virtual Stack and how is it different from a traditional call center?",
    answer: "Virtual Stack is a modern business operations and outsourcing partner, not just a call center. While traditional call centers focus on high-volume script-reading, we build dedicated, trained teams integrated directly into your software, brand voice, and standard operating procedures across Customer Support, back-office processing, sales support, and executive assistance."
  },
  {
    category: "General",
    question: "Where are your operations located?",
    answer: "Virtual Stack has corporate headquarters in Calgary, AB, Canada (established in 2011), with modern delivery centers operating 24/7/365 across North American and global operational time zones with over 200 workstation capacity."
  },
  {
    category: "Onboarding",
    question: "How long does it take to get a team up and running?",
    answer: "A standard deployment takes between 1 to 2 weeks. This includes workflow analysis, knowledge transfer, systems integration, agent training, and a supervised shadowing period before full live operations begin."
  },
  {
    category: "Onboarding",
    question: "Do we get to interview and approve our dedicated agents?",
    answer: "Yes. For dedicated team placements, our recruiting team screens, tests, and shortlists top candidates. You conduct the final interviews and give final hiring approval before onboarding begins."
  },
  {
    category: "Security",
    question: "How do you protect our confidential business and customer data?",
    answer: "We adhere to strict enterprise security standards: biometric access control to our operational premises, 24/7 CCTV surveillance, restricted workstation environments with disabled USB ports, encrypted cloud VOIP, VPN connectivity, and comprehensive non-disclosure agreements for all staff."
  },
  {
    category: "Operations",
    question: "What software and systems do your teams work with?",
    answer: "We integrate directly into your existing technology stack. We regularly work within Salesforce, HubSpot, Zendesk, Freshdesk, Gorgias, Jira, Slack, Shopify, NetSuite, and custom internal ERP and TMS platforms."
  },
  {
    category: "Operations",
    question: "What happens if a team member is sick or unavailable?",
    answer: "Every dedicated pod includes structured cross-training and on-site supervisory backup. For customer-facing queues, shadow agents are trained on your protocols to ensure zero disruption to your daily SLAs."
  },
  {
    category: "Billing",
    question: "How does pricing work?",
    answer: "We offer transparent, predictable monthly pricing with zero hidden management fees. Depending on your needs, solutions are structured either as dedicated full-time equivalents (FTEs) or customized operational packages. On average, clients save 50–65% compared to domestic in-house hiring."
  },
  {
    category: "Billing",
    question: "Are we locked into long-term rigid contracts?",
    answer: "No. We believe in earning your partnership every month through operational performance and measurable business value. We offer flexible service agreements with clear trial and scaling terms."
  }
];
