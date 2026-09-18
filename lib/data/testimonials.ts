export interface Testimonial {
  name: string;
  role?: string;
  company: string;
  location: string;
  country: "Canada" | "USA" | "UK" | string;
  serviceTag: string;
  quote: string;
  rating: number;
}

export const testimonialsData: Testimonial[] = [
  {
    name: "Bob Marsland",
    role: "Owner",
    company: "Fergus Elora Taxi",
    location: "Fergus & Elora, ON",
    country: "Canada",
    serviceTag: "24/7 FLEET DISPATCH & CALL HANDLING",
    quote:
      "In the taxi business, an unanswered call is a lost customer. Virtual Stack stepped right into our dispatch software and handled every incoming call with patience and professionalism. My drivers are dispatched seamlessly, response times are faster than ever, and I finally have complete peace of mind.",
    rating: 5,
  },
  {
    name: "Tab Cohen",
    role: "Owner",
    company: "Barco Leads",
    location: "United States",
    country: "USA",
    serviceTag: "B2B LEAD GENERATION & SALES PROSPECTING",
    quote:
      "Generating qualified B2B leads requires discipline every single day. Virtual Stack built a dedicated outreach pod that learned our ICP, mastered our CRM workflows, and started booking solid sales conversations within two weeks. Their daily transparency and reporting make them feel like an in-house team.",
    rating: 5,
  },
  {
    name: "Sunish Joseph",
    role: "Owner",
    company: "Leamington Taxi",
    location: "Leamington, ON",
    country: "Canada",
    serviceTag: "24/7 PASSENGER DISPATCH & CUSTOMER CARE",
    quote:
      "Reliability is everything when people are counting on a ride to work or medical appointments. Virtual Stack's dispatchers are polite, attentive, and incredibly quick at coordinating routes. Having dependable 24/7 coverage has significantly boosted our customer satisfaction without hiring headaches.",
    rating: 5,
  },
  {
    name: "Jack Beacham",
    role: "",
    company: "Aventure Works (brokerage firm)",
    location: "New York City, NY",
    country: "USA",
    serviceTag: "SALES SUPPORT & CLIENT OUTREACH",
    quote:
      "In brokerage, speed to contact decides who wins the client. Virtual Stack's sales support team works our pipeline consistently, follows up without being asked, and keeps every conversation documented. We're having more qualified conversations each week without expanding our in-house desk.",
    rating: 5,
  },
  {
    name: "Olu Oshesanya",
    role: "",
    company: "GoHighLevel CRM",
    location: "Birmingham, UK",
    country: "UK",
    serviceTag: "CUSTOMER SUPPORT & CONVERSION TRACKING",
    quote:
      "Their team handles our customer support queue and tracks conversions across the funnel with real accuracy. Response times dropped, our reporting finally reflects what's actually happening, and we can see exactly where revenue is coming from. They integrated into our workflow quickly.",
    rating: 5,
  },
  {
    name: "Harrison Zeigel",
    role: "VP",
    company: "Allstate Insurance",
    location: "Minnesota, USA",
    country: "USA",
    serviceTag: "CUSTOMER SUPPORT",
    quote:
      "Policyholders call at difficult moments and expect a calm, informed person on the line. Virtual Stack's support team is consistently professional, well-trained on our processes, and dependable. They've become a genuine extension of our customer care operation.",
    rating: 5,
  },
];
