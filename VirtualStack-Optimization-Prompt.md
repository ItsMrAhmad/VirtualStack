# Virtual Stack website: SEO, speed & cleanup implementation prompt

> Paste everything below this line into the implementing agent.

---

You are working on the **Virtual Stack** marketing website. Your job is to **remove unused code and pages, fix SEO, and make the site load faster.** Don't do anything outside that scope.

- **Local repo:** `C:\Users\Master\.gemini\antigravity\scratch\virtual-stack`
- **GitHub:** `https://github.com/ItsMrAhmad/VirtualStack`, branch `main`. Every push to `main` auto-deploys to Cloudflare Pages.
- **Live build:** `https://virtualstack.pages.dev`. The final domain will be `https://virtualstack.us`, but it is **not connected yet**, and connecting it is **not part of this task**. Keep `metadataBase` set to `https://virtualstack.us` so every canonical, OG and sitemap URL is already correct when the domain is switched.
- **Stack:** Next.js 16.3 (App Router, Turbopack), React 19.2, TypeScript, Tailwind CSS 4, static export (`output: "export"`, `images.unoptimized: true`).
- **Brand colours:** Navy `#071A2A`, Cyan `#08A9E6`, Green `#12C98A`. Don't change the visual design.

**Before you write code,** read `AGENTS.md`. This Next.js version has breaking changes, so check the bundled docs in `node_modules/next/dist/docs/` for the Metadata API, `next/image` custom loaders, `not-found`, and static export.

**Rules:**
1. Commit each phase separately, with a clear message.
2. After every phase, run `npm run lint` and `npm run build`. Both must pass and `out/` must be generated before you move on.
3. Don't change page copy, business facts, or the design, except where a task says to.
4. Don't add new features such as form backends, analytics, or new pages, other than `not-found`.
5. Push to `main` only when every acceptance check at the bottom passes.

---

## Audit findings (evidence)

| # | Finding | Evidence |
|---|---|---|
| 1 | **Every page's canonical points to the homepage.** Google will treat each inner page as a duplicate of `/` and won't rank it. | `app/layout.tsx` sets `alternates.canonical: "https://virtualstack.us"`, and no page overrides it. Live, `/services`, `/about` and `/services/customer-support` all output `<link rel="canonical" href="https://virtualstack.us">`. |
| 2 | **The brand name is duplicated in page titles.** | The root template is `"%s \| Virtual Stack"`, but page titles already end in "\| Virtual Stack". Live examples: "Privacy Policy \| Virtual Stack \| Virtual Stack" and "Customer Support Outsourcing \| Virtual Stack Operations \| Virtual Stack". |
| 3 | **Inner pages lose their OG image, siteName and type.** | Next.js merges metadata shallowly, so a page-level `openGraph` object replaces the root one entirely. |
| 4 | **The sitemap leaves out all 10 blog articles** and sets `lastModified: new Date()` on every build. | The live `/sitemap.xml` has 35 URLs and 0 `/resources/blog/*` URLs. |
| 5 | **`*.pages.dev` is indexable**, which will create duplicate content once `virtualstack.us` goes live. | `robots: index, follow` is served on pages.dev. |
| 6 | **Static assets are never cached by browsers.** | `/_next/static/*` (hashed, immutable), fonts and `/images/*` are all served with `Cache-Control: public, max-age=0, must-revalidate`. |
| 7 | **Images are very heavy.** | 18 JPGs in `public/images/` weigh 680–965 KB each (about 13.5 MB in total). None are WebP/AVIF and none have responsive sizes. The homepage preloads two of them: `hero-operations.jpg` (912 KB) and `outsourcing-model.jpg`. `og-image.jpg` is 452 KB, `logo.png` 68 KB and `logo-white.png` 41 KB. |
| 8 | **Too much JavaScript for a marketing site.** | About 250 KB of JS (brotli) plus 14 KB of CSS load on the homepage. The chatbot (`ChatbotWidget`, plus 25 KB `chatEngine` and 11 KB `knowledgeBase`) loads eagerly on every page. |
| 9 | **Unused components, files and dependencies.** | See Phase 1. |
| 10 | **Every snap page renders two `<footer>` elements**, and the mobile sticky CTA never appears. | The layout renders `<Footer/>` and hides it with CSS, and each page renders its own `<Footer/>` as well. `MobileStickyCTA` listens to `window.scroll`, which never fires because `body` is `overflow:hidden`. |
| 11 | **The only structured data is `Organization`.** | There's no WebSite, Service, BreadcrumbList, BlogPosting or FAQPage markup. |
| 12 | **No branded 404 page, and the README is still the create-next-app boilerplate.** | |

---

## Phase 0: Baseline

1. Run Lighthouse (mobile and desktop) on `https://virtualstack.pages.dev` for `/`, `/services`, `/services/customer-support` and `/resources/blog/customer-support-playbook-2026`. Use `npx lighthouse <url> --only-categories=performance,seo,best-practices,accessibility`. Save the scores for the final report.
2. Run `npm ci && npm run build` and confirm it passes before changing anything.

## Phase 1: Remove unused pages, components, assets and dependencies

**Delete these unused components.** Nothing imports them, but grep for each one before deleting to confirm:
- `components/sections/ProblemSolution.tsx`
- `components/sections/ProofSection.tsx`
- `components/sections/SectionNav.tsx`
- `components/sections/ServicesGrid.tsx`
- `components/sections/TechInfrastructure.tsx`
- `components/sections/TrustStrip.tsx`
- `components/sections/WhyUsSection.tsx`

**Delete these unused or duplicate public files:**
- `public/file.svg`, `public/globe.svg`, `public/next.svg`, `public/vercel.svg`, `public/window.svg`. These are create-next-app leftovers and nothing references them.
- `public/images/og-image.jpg`. It's a duplicate; the site references `public/og-image.jpg`.
- `app/favicon.ico` and `app/icon.png`. They duplicate `public/favicon.ico` and `public/icon.png`. Keep the `public/` copies, because `CalendlyEmbed.tsx` and `OperationsDiagram.tsx` load `/icon.png`, and keep the `metadata.icons` block in `app/layout.tsx`. Add a 180×180 `public/apple-touch-icon.png` generated from `icon.png` and point `icons.apple` at it.

**Remove the thin `/resources` page (`app/resources/page.tsx`).** It's a three-card hub that repeats the nav, and neither the navbar nor the footer links to it.
- Delete the file.
- Remove it from `app/sitemap.ts`.
- In `app/resources/blog/[slug]/page.tsx`, point the breadcrumb "Resources" link at `/resources/blog`, or drop that crumb.
- Add `/resources /resources/blog 301` to `public/_redirects` (Phase 2).
- `/resources/faqs` and `/resources/blog` stay exactly where they are.

**Dependencies:**
- Remove `framer-motion`. Nothing imports it.
- `@emnapi/core` and `@emnapi/runtime` were added in commit `d6dbe93` to fix a Cloudflare build. Try removing them, then run `rm -rf node_modules package-lock.json && npm install && npm run build`. If the build still passes, commit without them. If it fails, restore them as `devDependencies`.
- Keep `embla-carousel-*`, `clsx`, `tailwind-merge` and `lucide-react`. They're all used.

**Repo hygiene:**
- Add `/scratch/` to `.gitignore`. It contains untracked design experiments and must never be committed.
- Replace the boilerplate `README.md` with a short project README covering the stack, `npm run dev`/`build`, deploy (push to `main` → Cloudflare Pages) and the env var `NEXT_PUBLIC_CALENDLY_URL`.

## Phase 2: Cloudflare caching & crawl headers

**Create `public/_headers`** (it's copied into `out/`):
```
/_next/static/*
  Cache-Control: public, max-age=31536000, immutable

/images/*
  Cache-Control: public, max-age=2592000, stale-while-revalidate=86400

/*.png
  Cache-Control: public, max-age=2592000
/*.ico
  Cache-Control: public, max-age=2592000

/*
  X-Content-Type-Options: nosniff
  Referrer-Policy: strict-origin-when-cross-origin
  Permissions-Policy: camera=(), microphone=(), geolocation=()
  X-Frame-Options: SAMEORIGIN

https://:project.pages.dev/*
  X-Robots-Tag: noindex
https://:version.:project.pages.dev/*
  X-Robots-Tag: noindex
```
- Leave HTML on Cloudflare's default (revalidate).
- The `noindex` applies only to `*.pages.dev` hosts. It stops the temporary URL from being indexed as a duplicate. When `virtualstack.us` is connected later, that domain won't match these rules and will be indexable automatically.

**Create `public/_redirects`** with:
```
/resources   /resources/blog   301
```

## Phase 3: Metadata, canonicals & titles (critical)

1. **Create `lib/seo.ts`.**
   - Export `SITE_URL = "https://virtualstack.us"`.
   - Export `buildMetadata({ title, description, path, image?, type?, publishedTime?, absoluteTitle? })`. It returns a complete `Metadata` object:
     - `alternates.canonical: path`, a relative path resolved against `metadataBase`.
     - A full `openGraph`: `url`, `title`, `description`, `siteName: "Virtual Stack"`, `locale: "en_US"`, `type` and `images`. `images` defaults to `/og-image.jpg` at 1200×630.
     - A full `twitter` block (`summary_large_image`).
   - Every page must use this helper. Remove the partial `openGraph` objects.
2. **In `app/layout.tsx`:**
   - Delete `alternates.canonical`.
   - Delete the `keywords` array. Google ignores it.
   - Keep `metadataBase`, `title.template: "%s | Virtual Stack"`, the default OG/Twitter blocks, `icons` and `robots`.
3. **In `app/page.tsx`:** export metadata with `title: { absolute: "Virtual Stack | B2B Outsourcing, Customer Support & Back-Office Teams" }`, the existing description, and canonical `/`.
4. **Every other page and every `generateMetadata`** must call `buildMetadata` with its own `path`.
   - Titles must **not** include "Virtual Stack"; the template adds it.
   - The full title should be 60 characters or fewer. Descriptions should be 120–155 characters.
   - Use these titles:
     - `/services`: "Outsourcing Services: Support, Back-Office & Sales"
     - `/services/[slug]`: `${service.name}` (e.g. "Customer Support Outsourcing")
     - `/industries`: "Industry Outsourcing Solutions"
     - `/industries/[slug]`: `${industry.name} Outsourcing`
     - `/resources/blog`: "Operations Insights & Outsourcing Guides"
     - `/resources/blog/[slug]`: `article.title`. Use `absolute` if adding the template would push it past 60 characters. Pass `type: "article"`, `publishedTime` from `article.date`, and `image: article.image`.
     - `/resources/faqs`: "Outsourcing FAQs: Pricing, Onboarding & Security"
     - `/about`: "About Us: Our Story, Mission & Values"
     - `/why-virtual-stack`: "Why Choose Virtual Stack". Use `absolute` so the brand isn't duplicated.
     - `/case-studies`: "Outsourcing Case Studies & Results"
     - `/contact`: "Contact Us"
     - `/book-a-consultation`: "Book a Free Consultation"
     - `/privacy`: "Privacy Policy"
     - `/terms`: "Terms of Service"
5. **Add `app/not-found.tsx`.** It's a branded 404 page using the existing navy/cyan styling. Set `robots: { index: false }` and link to Home, Services, Industries and Contact. Static export writes `out/404.html`, which Cloudflare serves automatically.
6. **Verify after building:**
   - `grep -o '<link rel="canonical"[^>]*>' out/*.html out/services/*.html out/industries/*.html out/resources/blog/*.html`. Each page must show its **own** URL.
   - Grep every `<title>` in `out/**/*.html`. None may contain "Virtual Stack | Virtual Stack" or "Operations | Virtual Stack".
   - Every page must have a unique title and description.

## Phase 4: Sitemap & robots

1. **Rewrite `app/sitemap.ts`:**
   - Include every indexable route: all static pages (without `/resources`), all 12 services, all 8 industries, and **all 10 blog articles** from `articlesData`.
   - Set a stable `lastModified`. Parse `article.date` for posts, and use a constant `SITE_UPDATED = new Date("2026-09-26")` for everything else. **Never use `new Date()`.**
   - Exclude `/privacy` and `/terms`. They stay indexable but don't belong in the sitemap.
   - Remove `changeFrequency` and `priority`, which Google ignores.
2. **In `app/robots.ts`:** remove `disallow: ["/api/"]`, since there is no API. Keep `sitemap: "https://virtualstack.us/sitemap.xml"`.

## Phase 5: Structured data (JSON-LD)

Create `components/seo/JsonLd.tsx`, a server component that renders `<script type="application/ld+json">`. Reuse data from `lib/data/*`; never hard-code duplicate facts.
- **Layout:**
  - Move the existing `Organization` into `JsonLd` and give it `"@id": "https://virtualstack.us/#organization"`.
  - Add a `WebSite` node (`url`, `name`, `publisher` → the org `@id`). Don't add `SearchAction`.
- **`/services/[slug]`:**
  - A `Service` node: `name`, `description`, `provider` → org `@id`, `areaServed: ["US","CA"]`, `serviceType`, `url`.
  - A `BreadcrumbList`: Home → Services → Service.
- **`/industries/[slug]`:** a `BreadcrumbList` (Home → Industries → Industry) and a `Service` node with an `audience` of that industry.
- **`/resources/blog/[slug]`:**
  - `BlogPosting`: `headline`, `description`, `image` (absolute URL), `datePublished`, `dateModified`, `author` from `article.author`, `publisher` → org, `mainEntityOfPage`.
  - `BreadcrumbList`: Home → Blog → Post.
- **`/resources/faqs`, and any service or industry page that renders FAQs:** `FAQPage`, built from the **same array** that renders the visible questions.
- **`/contact`:** a `ContactPage` node, plus a `ProfessionalService` node with the Calgary address, telephone, and `openingHours: "Mo-Su 00:00-23:59"`, all from `lib/data/company.ts`.

Validate one page of each template with the Schema.org validator (validator.schema.org) against the deployed pages.dev URL. Fix every error.

## Phase 6: Performance

### 6a. Images (biggest win)
1. **Add `sharp` as a devDependency.**
   - Add `scripts/optimize-images.mjs` and run it from a `"prebuild"` npm script.
   - For every `public/images/*.jpg`, write **WebP** versions at widths **640, 1080 and 1920** to `public/images/opt/<name>-<w>.webp`. Use quality ~72, `withoutEnlargement: true`, and strip metadata.
   - Skip a file when its output is newer than the source.
   - Commit the generated files so Cloudflare builds don't depend on sharp's native binaries. If sharp fails on Cloudflare's builder, make `prebuild` a no-op when the files already exist.
2. **In `next.config.ts`:**
   ```ts
   images: {
     loader: "custom",
     loaderFile: "./lib/imageLoader.ts",
     deviceSizes: [640, 1080, 1920],
     imageSizes: [640],
   }
   ```
   - In `lib/imageLoader.ts`, map `/images/<name>.jpg` plus `width` to `/images/opt/<name>-<smallest generated width ≥ width, else 1920>.webp`.
   - Any other `src` (logos, `/icon.png`, `/og-image.jpg`) passes through unchanged.
   - Keep the original JPGs in place: `articles.ts` uses them for OG images, and they're the sharp sources.
3. **Size budgets:**
   - The 1920 hero WebP must be 180 KB or less. Every 640 card WebP must be 45 KB or less. Lower the quality per file if needed.
   - Recompress `public/og-image.jpg` at 1200×630 to 150 KB or less, keeping it as a JPG.
4. **Logos:**
   - Re-export `logo.png` and `logo-white.png` at 2× their rendered size (check the `width`/`height` props in `Navbar.tsx`/`Footer.tsx`), 15 KB or less each. Use sharp PNG palette compression or WebP.
   - `Navbar.tsx` currently swaps the logo `src` after mount (`mounted && isDark`), which causes a flash and layout shift. Render both logos and toggle them with CSS (`dark:hidden` / `hidden dark:block`). Only the light logo gets `priority`.
5. **`priority` / preload:**
   - Remove `priority` from `components/sections/OutsourcingModel.tsx`. That image is on the second slide but is currently preloaded alongside the hero.
   - In `app/resources/blog/BlogClient.tsx`, keep `priority` only on the first above-the-fold image (~line 185) and remove it from the image at ~line 546.
   - Keep `priority` on `HeroSection` and `IndustryServiceHero`.
   - Check that every `fill` image's `sizes` matches its real rendered width.

### 6b. JavaScript
1. **Chatbot:** lazy-load it.
   - In `app/layout.tsx`, replace `<ChatbotWidget />` with a tiny client `ChatLauncher` button that looks identical to the current closed state.
   - Load the real widget with `next/dynamic(() => import("@/components/chatbot/ChatbotWidget"), { ssr: false })` on the first click, and open it immediately.
   - `chatEngine.ts` and `knowledgeBase.ts` must not be in the initial chunks. Confirm by grepping `out/_next/static/chunks` for a unique string from `knowledgeBase.ts` that is only loaded lazily.
2. **`components/hero/HeroSection.tsx`:** it's `"use client"` only because of a rotating-text `setInterval`. Move that into a small `RotatingText` client component, so `HeroSection` (H1, hero image, CTAs) is a server component.
3. **`components/sections/IndustryGrid.tsx`:** it uses a JS `resize` listener to compute items per page. Replace this with a CSS-only responsive layout (e.g. a horizontal CSS scroll-snap row with the same card styles). Remove the listener and drop `"use client"` if nothing else needs it.
4. **`app/resources/blog/BlogClient.tsx`** (31 KB; the whole page is client-side): split it. Keep only the category filter and slider as client components. Render the hero, featured article and article cards as server components so article links are plain static HTML.
5. **`components/layout/Navbar.tsx`** (26 KB): move static link and menu data out of the component body into constants. Don't change its behaviour or appearance.
6. **Fonts (`app/layout.tsx`):** Inter and Manrope are variable fonts. Remove the `weight: [...]` arrays so `next/font` ships one variable file per family, and keep `display: "swap"`.
7. **Calendly:** on `/book-a-consultation` and `/contact` only, add `<link rel="preconnect" href="https://assets.calendly.com">` and `<link rel="preconnect" href="https://calendly.com">`. Keep the script async and injected on mount.

### 6c. Duplicate footer & sticky CTA (keep the current snap-scroll design)
The full-screen snap-scroll design stays, but fix what it breaks:
1. Pages with a `*-scroll-container` already render their own `<Footer/>` inside the container. Stop the root layout from also rendering the hidden `<Footer/>` on those pages:
   - Move `<Footer/>` out of `app/layout.tsx`.
   - Render it directly in the only pages that don't use a scroll container: `/privacy`, `/terms`, and the new `not-found`. Check each `app/**/page.tsx` for `-scroll-container` to find the full list.
   - Then delete the `main:has(...) + footer` / `~ footer` rules in `app/globals.css`.
   - Result: exactly **one** `<footer>` per page in `out/**/*.html`.
2. `MobileStickyCTA.tsx`: listen to the scroll event on the `[id$="-scroll-container"]` element when it exists, and fall back to `window`. Re-attach the listener on route change using `usePathname`.

### 6d. Performance targets (mobile Lighthouse, on `/` and `/services/customer-support`)
- LCP 2.5 s or less, CLS 0.1 or less, TBT 200 ms or less.
- Performance ≥ 90, SEO = 100, Best Practices ≥ 95, Accessibility ≥ 95.
- The homepage's first-view transfer must be 1.2 MB or less.

## Phase 7: On-page SEO fixes (no copy rewrites)

1. **Headings:** exactly one `<h1>` per page, with no skipped levels. Change the tag level only, not the styling. Card grids that go straight from h1 to h3 should use h2.
2. **Service and industry H1s** must contain the page's main phrase (e.g. "Customer Support Outsourcing", "Healthcare Outsourcing"). Check `lib/data/serviceHeroConfigs.ts` and `industryHeroConfigs.ts`. Adjust `h1Prefix`/`h1Highlight` only where the phrase is missing.
3. **Internal links:**
   - Each blog article (`lib/data/articles.ts`) should link to its most relevant `/services/*` or `/industries/*` page. Add a `relatedService` field and render a "Related service" link box on the article page.
   - The footer must link to all 4 service pillars and all 8 industries (verify this).
4. **Image `alt` text:** every `next/image` needs a descriptive `alt`. Decorative images use `alt=""`.
5. **Placeholders:** remove the square-bracket placeholders visible in `lib/data/caseStudies.ts`. For example, change `"[Client VP of Operations]"` to `"VP of Operations"`, and do the same for the other three.
6. Rename `components/sections/TestimonialsPlaceholder.tsx` to `Testimonials.tsx` and update its import.

---

## Acceptance checks (put the results in your final report)

- [ ] `npm run lint` and `npm run build` pass. Everything on the Phase 1 list is gone, and nothing else references it.
- [ ] Every built HTML page has a **self-referencing canonical** on `https://virtualstack.us/...`, a unique title with no duplicated brand, a description of 155 characters or fewer, and full OG and Twitter tags with an image.
- [ ] `out/sitemap.xml` lists every indexable route, including all 10 blog posts, with stable `lastModified` dates.
- [ ] After deploying:
  - `curl -sI https://virtualstack.pages.dev/_next/static/<any chunk>` shows `max-age=31536000, immutable`.
  - `curl -sI https://virtualstack.pages.dev/` shows `X-Robots-Tag: noindex`.
  - `/resources` returns a 301 to `/resources/blog`.
- [ ] JSON-LD validates with no errors for home, one service, one industry, one blog post, FAQs and contact.
- [ ] On the first load of `/`, no image over 200 KB is requested, and the chatbot code isn't in the initial JS.
- [ ] Exactly one `<footer>` per page. The mobile sticky CTA appears after scrolling on mobile.
- [ ] A before/after Lighthouse table (mobile and desktop) for the four Phase 0 URLs.

---

## Appendix: NOT part of this task (for later, when `virtualstack.us` is connected)

Don't implement anything below now. It's recorded here so it isn't lost.

1. **Legacy WordPress 301 redirects:** add these to `public/_redirects` at domain-switch time, with both the trailing-slash and no-slash forms of each source:
   - **Services:**
     - `/our-services/`, `/seo-smm/`, `/web-development/`, `/3d-rendering-services/` → `/services`
     - `/customer-support-outsourcing/`, `/community-moderation-services/`, `/chat-assisstant/`, `/chat-assisstant-2/`, `/order-taking/` → `/services/customer-support`
     - `/call-centre-outsourcing-services/`, `/omnichannel-contact-center/`, `/multilingual-call-center-services/`, `/eservices-call-center/`, `/inbound-calling/` → `/services/contact-center`
     - `/outsourced-technical-support/`, `/mobile-app-customer-support/` → `/services/technical-support`
     - `/virtual-receptionist-services/`, `/phone-answering-service/`, `/24-7-answering-service/` → `/services/virtual-receptionist`
     - `/back-office-services/`, `/accounts-payable-services/`, `/accounts-receivable-services/`, `/outsource-check-processing-services/` → `/services/back-office-operations`
     - `/data-management-services/`, `/survey-processing-services/`, `/market-research-services/` → `/services/data-management`
     - `/certificate-intelligent-document-processing/` → `/services/document-processing`
     - `/hr-outsourcing-services/` → `/services/administrative-support`
     - `/lead-generation-services/` → `/services/lead-generation`
     - `/appointment-setting-services/` → `/services/appointment-setting`
     - `/telemarketing-services/`, `/outsource-telesales/`, `/cold-calling-service/`, `/outbound-calling/` → `/services/telemarketing`
     - `/virtual-assistant-services/` → `/services/virtual-assistants`
     - `/staff-leasing-services/`, `/rpo-services/` → `/services/staff-leasing`
   - **Industries:**
     - `/dispatch-logistics/` → `/industries/dispatch-logistics`
     - `/healthcare-bpo-support-service/` → `/industries/healthcare`
     - `/insurance-bpo-services/` → `/industries/insurance`
     - `/bpo-real-estate-service/` → `/industries/real-estate`
     - `/ecommerce-outsourcing-service/`, `/retail-outsourcing-services/` → `/industries/ecommerce`
     - `/loan-processing-call-center/`, `/debt-collection-services/` → `/industries/financial-services`
     - `/legal-outsourcing-services/` → `/industries/professional-services`
     - `/telecom-bpo-services/` → `/industries/technology`
     - `/travel-outsourcing/`, `/education-process-outsourcing/` → `/industries`
   - **Other pages:**
     - `/about-us/` → `/about`
     - `/contact-us/` → `/contact`
     - `/faq/` → `/resources/faqs`
     - `/blog/` → `/resources/blog`
   - **Leave the WordPress theme demo content as 404s:** `/project/*`, `/service/*`, `/category/*`, and the construction and "hello-world" posts.
2. In Cloudflare Pages, add the custom domains `virtualstack.us` and `www`. Redirect www to the apex with a 301, turn on Always Use HTTPS, then add HSTS to `_headers`.
3. Verify the domain in Google Search Console and Bing Webmaster Tools, submit the sitemap, and enable Cloudflare Web Analytics.
4. Known issues outside SEO/speed that still need a decision:
   - **Contact and newsletter forms don't send anything.** `ConsultationForm` fakes success, and the newsletter form only calls `alert()`.
   - **Confirm `NEXT_PUBLIC_CALENDLY_URL`** is set in the Cloudflare Pages environment variables.
   - **Verify the "SOC 2 / ISO 27001 / HIPAA certified" claims** in `ChatbotWidget.tsx`.
