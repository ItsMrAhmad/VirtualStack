# Virtual Stack website audit (Sep 28, 2026)

**Scope:**
- The live build at `virtualstack.pages.dev` at commit `072f6e9`.
- A full read of every page, component and data file.
- The chatbot engine run against 20 realistic visitor questions.
- A mobile check in a real browser.

**Already fixed by the earlier SEO commit (verified live):**
- Per-page canonicals.
- Unique titles.
- Sitemap with the blog posts.
- JSON-LD structured data.
- `noindex` on `pages.dev`.
- One-year caching on `/_next/static`.
- WebP images.
- Lazy-loaded chatbot.
- Single footer.

---

## A. Critical: leads are being lost

| # | Problem | Where | Fix |
|---|---|---|---|
| A1 | **The contact form sends nothing.** It shows "Inquiry Received! …we'll reach out within 2 hours", but it only runs a `setTimeout`. | `components/forms/ConsultationForm.tsx:21-29` | Send submissions to a real endpoint (see "Decisions needed" at the end). |
| A2 | **The booking page is a fake scheduler.** Live, it shows hard-coded dates ("Thu, Sep 3", "Fri, Sep 4"), and "Confirm" books nothing. `NEXT_PUBLIC_CALENDLY_URL` is not set in the Cloudflare build. | `components/booking/CalendlyEmbed.tsx:70-81`; confirmed live on `/book-a-consultation` | Set the real Calendly URL. Until then, replace the fake widget with a "call / email / contact form" fallback, not fake slots. |
| A3 | **The newsletter form goes nowhere.** It uses `action="#"`, and the input has no `name`, so the email is thrown away. | `app/resources/blog/page.tsx:156` | Hook it up to the same form endpoint, or remove it. |
| A4 | **Two chatbot links lead to 404 pages.** | `chatEngine.ts:318` `/services/sales-prospecting` (should be `/services/lead-generation`); `knowledgeBase.ts:134` `/services/data-entry` (should be `/services/data-management`) | Correct the slugs. |

## B. Chatbot ("Sarah")

**Test result:** 20 realistic questions gave about 11 wrong or weak answers. The first one below was reproduced live.

| Visitor asks | Bot answers with | Cause |
|---|---|---|
| "Can you help **us** with customer support?" | The **USA coverage** answer | The word "us" triggers the USA intent, which is checked before customer support. |
| "Can you send **us** a quote?" | The USA coverage answer | Same cause. |
| "Tell **us** about your company" | The USA coverage answer | Same cause. |
| "How does **billing** work?" | The back-office services answer | "billing" appears in the back-office list, which is checked before the billing intent. |
| "Shopify returns" / "Shopify ecommerce store" | A generic "we use your tools" reply | "shopify" is in the tools intent, which is checked before e-commerce. |
| "Answer our phones after hours" / "24/7 answering for our clinic" | A generic hours reply | There's no receptionist intent, so the bot never links `/services/virtual-receptionist`. |
| "Are you a real person?" | Contact details | "real person" matches the contact intent before the "are you a bot" intent. |
| "I want to hire a virtual assistant" | The staff leasing / Employer of Record answer | Wrong service. |
| "Can you do bookkeeping?" | "I'm not sure" | The financial-services industry page exists but isn't covered. |
| "Do you offer lead generation?" | A correct answer, but its link is a 404 | See A4. |
| "French speaking agents?" | The consultation answer | Unclear, and the site's schema claims French support. |

**Other chatbot issues:**
1. **Unverified compliance claims.** The bot says "SOC 2 Type II, ISO 27001, and HIPAA compliance" (`chatEngine.ts:685`). The industries page shows "HIPAA • SOC 2 • PCI-DSS • ISO 27001" in one place and "HIPAA-ready… PCI-DSS *awareness*" in another. These contradict each other, and a false certification claim is a legal risk.
2. **Promises that appear nowhere else on the site:**
   - "100% free candidate replacement guarantee"
   - "30 days notice"
   - "CAD billing"
   - "backup generators"
   - "12,000 loads monthly with under 0.5% missed booking"
3. **The persona is presented as a live human.** The header says "Sarah • Operations Lead · ONLINE", and the bot only admits it's automated if asked. Add a small "Virtual assistant" label; it builds trust and meets disclosure norms.
4. **It captures no leads.** There's no way to leave a name or email, so every conversation ends in "book a call". Add a "Leave your email and we'll reply" step when the bot falls back or the visitor asks about pricing.
5. **It ignores context.** Every message is matched on its own, so a follow-up like "and for 3 people?" loses the topic.
6. **Accessibility:**
   - New messages aren't announced to screen readers (no `aria-live` region).
   - `aria-modal="true"` is set, but focus isn't trapped.
   - The launcher has no `aria-expanded`.
   - The input has no label.
7. **Dark mode:**
   - The "Need Help? 💬" label is invisible, because its text colour is navy on a dark background (seen live).
   - The message area stays light-grey inside a dark panel.
8. **Mobile focus.** The input is re-focused after every bot message (`ChatbotWidget.tsx:54-64`), so the phone keyboard keeps popping up.
9. **Mobile overlap.** On mobile, the launcher and its label cover page content (the "Support Platforms" card on service pages).

**Recommended fix:**
- Re-order and clean up the intent rules. Drop "us", and remove duplicate keywords such as billing, shopify and zendesk.
- Add receptionist, virtual assistant, bookkeeping and French intents.
- Fix the links.
- Make the security answer match what the owner confirms is true.
- Add the "Virtual assistant" label, `aria-live`, and a lead-capture step.
- Keep it rule-based: no API cost, and it works on a static site.

## C. On-page SEO

| # | Issue | Fix |
|---|---|---|
| C1 | **Service FAQ schema doesn't match the page.** The JSON-LD lists every FAQ, but the page shows only the first 4, cut to 2 lines (`slice(0,4)` + `line-clamp-2`). Google requires FAQ markup to match visible content. | Show every FAQ in full, e.g. with `<details>` accordions. |
| C2 | **Most text on service and industry pages is visually cut off.** Challenges, solutions, benefits, process steps and FAQ answers all use `line-clamp-1/2`, so visitors can't read the content that ranks the page. | Remove the clamps, and use accordions or expandable cards where space is tight. |
| C3 | **Several H1s miss the main keyword.** | `/services` "Operational capabilities built for scale" → "Outsourcing Services for Customer Support, Back-Office & Sales"<br>`/industries` → "Industry-Specific Outsourcing Solutions"<br>`/about` "North American leadership…" → "About Virtual Stack: Calgary-Based Outsourcing Since 2011"<br>`/case-studies`, `/resources/faqs` and the blog H1 are all generic<br>`/services/telemarketing` H1 has no "Telemarketing"<br>`/services/customer-support` H1 has no "Outsourcing"<br>`/industries/professional-services` H1 has no "professional services / law firm" |
| C4 | **Keyword cannibalisation.** `/industries/technology` H1 "Technical Support, Tier 1–3 Helpdesk…" competes with `/services/technical-support`. | Refocus the industry page on SaaS/tech companies, e.g. "Outsourcing for SaaS & Technology Companies". |
| C5 | **Related services are computed but never shown** on service pages (`relatedServices` is unused in `services/[slug]/page.tsx:70`). | Render a "Related services" block to add internal links. |
| C6 | **The blog listing only renders 3 article links in its HTML.** The client-side carousel shows the other 6 only after clicks, so crawlers find them less easily from the hub. | Render every article card in the HTML (a grid with a filter), and drop the pagination carousel. |
| C7 | **Blog posts are thin.** About 350–400 words each, yet labelled "6–8 min read". Posts this short rarely rank. | Expand each to 1,200+ words that target real searches (e.g. "outsourced truck dispatch cost", "virtual receptionist for law firms"), and fix the read times. |
| C8 | **Blog "related articles" are always the first 3 posts**, not related ones. | Pick related articles by the same category or tags. |
| C9 | **The blog article body sits inside a nested scroll box** (`max-h-[82vh] overflow-y-auto` inside a snap section). This hurts reading and time-on-page. | Let the article flow as a normal page. |
| C10 | **Industry pages have no FAQPage schema and show only 4 FAQs.** | Same approach as C1. |
| C11 | **Heading levels jump.** Footer column titles are `h4` without a parent `h2`/`h3`, the hero diagram uses `h4`, and article related-cards use `h4` under `h3`. | Use proper levels, or `p`/`span` for labels. |
| C12 | **The Organization schema claims French** (`availableLanguage: ["English","French"]`). The site says "English". | Remove "French" unless it's true. |
| C13 | **The footer link "Security & Compliance" goes to `/contact`.** | Point it to `/resources/faqs#security`. |
| C14 | **The mobile menu has no Blog link.** Desktop has one in the Resources dropdown. | Add "Insights & Blog" to the mobile menu. |
| C15 | **Case studies have no individual pages.** 4 stories share one URL, so they miss long-tail searches like "freight brokerage outsourcing case study". | Optional: give each case study its own page. |
| C16 | **The `/contact` page preconnects to Calendly**, but only `/book-a-consultation` loads it. | Remove the preconnect from `/contact`. |
| C17 | **Image alt text is generic** (e.g. alt = industry name). | Make it descriptive: "Dispatcher coordinating trucks on a TMS dashboard". |

## D. Trust & content accuracy (these hurt conversions and Google's quality assessment)

1. **Case studies label benchmark numbers as verified.** "Verified Operational Results" plus a "Target Met" badge appear even on metrics the data marks `verified: false` (52% cost reduction, 4.8 CSAT). Show the badge only on verified numbers.
2. **The same claims differ from page to page:**
   - Savings: "up to 60%" vs "50–65%".
   - Onboarding: "1–2 weeks" vs "14 business days".
   - Replacement guarantee and contract terms appear only in the chatbot.
   - Pick one set of numbers and use it everywhere.
3. **Stats shown with no source**, on every service and industry hero. Examples: "60+ brands · 250,000+ inquiries/yr", "Top 3% vetted", "99.9% SLA". **[OWNER]** Confirm they're real, or soften them.
4. **Blog author names may not be real** (Marcus Vance, Elena Rostova, Sarah Jenkins…). "Sarah Jenkins" is also the contact-form placeholder name, and the chatbot is "Sarah". **[OWNER]** Use real staff names with LinkedIn links, or publish under "Virtual Stack Operations Team".
5. **[OWNER]** Confirm the six named testimonials (e.g. "Allstate Insurance") are real and approved for publication.

## E. UX, mobile & accessibility

1. **Scroll-snap forces every section to one screen height.** On a 375×812 phone, 4 of the 5 sections on `/services/customer-support` overflow (744 px shown vs up to 960 px of content). Visitors end up scrolling inside a section while the page tries to snap. **Fix:** switch `snap-mandatory` to `snap-proximity` and let sections grow taller than the screen (`min-h` instead of fixed `h`). The design stays the same, but content is no longer squeezed.
2. **Hero stat boxes break on mobile.** "< 60s" wraps to its own line, and the labels overflow their dividers. Use a 3-row stack below 400 px.
3. **The testimonials carousel has `aria-live="polite"` while autoplaying**, so a screen reader announces a new slide every 6 s. Use `aria-live="off"` while autoplay is running.
4. **The blog search input has no label**, and the category buttons don't expose their pressed state (`aria-pressed`).
5. **Some animations do nothing.** `animate-in`, `fade-in`, `zoom-in-95` and `slide-in-from-*` come from a Tailwind plugin that isn't installed. Remove them, or define them in CSS.
6. **`OperationsDiagram` is marked `"use client"` but uses no hooks**, which ships JS for nothing. Make it a server component.

---

## Decisions needed from you before these parts can be done

1. **Form delivery (A1, A3, chatbot lead capture):**
   - **(a)** Web3Forms or Formspree: free, no backend, needs only an access key and your inbox address.
   - **(b)** A Cloudflare Pages Function plus an email API (Resend), which needs an API key.
   - **Recommendation: (a).**
2. **Calendly (A2):** your real Calendly link, which gets added to Cloudflare Pages → Settings → Environment variables.
3. **Certifications (B1, D):** do you actually hold SOC 2, ISO 27001, PCI-DSS or HIPAA attestations? If not, the wording changes to "HIPAA-aligned / SOC 2-aligned controls".
4. **Content (D3–D5):** are the stats, testimonials and blog authors real?

Everything else in sections B, C and E can be implemented without further input.
