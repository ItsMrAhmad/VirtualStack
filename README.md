# Virtual Stack Website

Official marketing website for **Virtual Stack** — modern B2B outsourcing, dedicated customer support, 24/7 fleet dispatch, back-office operations, and sales support.

## Tech Stack

- **Framework**: Next.js 16.3 (App Router, Turbopack)
- **UI & Runtime**: React 19.2, TypeScript, Tailwind CSS 4
- **Deployment**: Cloudflare Pages (`output: "export"`, static HTML/CSS/JS)
- **Typography**: Manrope (headings) & Inter (body) via `next/font/google`
- **Brand Colors**:
  - Primary Navy: `#071A2A`
  - Accent Cyan: `#08A9E6`
  - Status Green: `#12C98A`

## Local Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build production static export
npm run build
```

The production output is generated into the `out/` directory.

## Deployment & Hosting

The repository is hosted on GitHub: `https://github.com/ItsMrAhmad/VirtualStack`.

- Every push to the `main` branch automatically triggers a build and deployment on **Cloudflare Pages**.
- Canonical site domain: `https://virtualstack.us`.

## Environment Variables

- `NEXT_PUBLIC_CALENDLY_URL`: URL for embedding the Calendly/Zoom consultation booking widget (e.g. `https://calendly.com/virtualstack-consultation`). If not set, the consultation forms operate in demonstration mode.
