import type { Metadata } from "next";
import { Manrope, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import MobileStickyCTA from "@/components/layout/MobileStickyCTA";
import ScrollSnapDelegate from "@/components/layout/ScrollSnapDelegate";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://virtualstack.us"),
  alternates: {
    canonical: "https://virtualstack.us",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "32x32" },
      { url: "/icon.png", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: "/icon.png",
  },
  title: {
    default: "Virtual Stack | Modern B2B Outsourcing & Business Operations",
    template: "%s | Virtual Stack",
  },
  description:
    "Scale your business with dedicated customer support, back-office operations, B2B sales support, and dedicated remote teams. Operating 24/7/365 with over 200 workstation capacity.",
  keywords: [
    "B2B Outsourcing",
    "Business Operations Partner",
    "Customer Support Outsourcing",
    "Back Office Operations",
    "Dedicated Remote Teams",
    "Lead Generation Services",
    "Outsourced Dispatch Services",
    "Taxi Dispatch Outsourcing",
    "24/7 Call Center Outsourcing",
    "Virtual Receptionist Service",
    "Omnichannel Contact Center",
    "Dedicated Staffing Solutions Canada",
    "BPO Services Calgary",
    "B2B Appointment Setting Service",
    "Outsource Data Entry & KYC",
  ],
  authors: [{ name: "Virtual Stack" }],
  creator: "Virtual Stack",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://virtualstack.us",
    title: "Virtual Stack | Modern B2B Outsourcing & Business Operations",
    description:
      "Scale your business with dedicated customer support, back-office operations, sales support, and remote teams. 24/7/365 reliability.",
    siteName: "Virtual Stack",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Virtual Stack - Modern B2B Outsourcing & Business Operations",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Virtual Stack | Modern B2B Outsourcing & Business Operations",
    description:
      "Scale your business with dedicated customer support, back-office operations, and dedicated remote teams.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Virtual Stack",
  legalName: "Virtual Stack Technologies Inc.",
  url: "https://virtualstack.us",
  logo: "https://virtualstack.us/logo.png",
  foundingDate: "2011",
  description:
    "Virtual Stack delivers dedicated customer support, back-office operations, B2B sales support, and dedicated remote teams built around the way your business works.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "500 4th Avenue SW, Suite 2500",
    addressLocality: "Calgary",
    addressRegion: "AB",
    postalCode: "T2P 2V6",
    addressCountry: "CA",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+1-888-910-0868",
    contactType: "customer service",
    availableLanguage: "English",
    hoursAvailable: "Mo-Su 00:00-24:00",
  },
  sameAs: [
    "https://www.facebook.com/VirtualStack.us",
    "https://www.linkedin.com/company/virtual-stack",
    "https://twitter.com/VirtualStackUS",
    "https://www.instagram.com/virtualstack.us",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${manrope.variable} ${inter.variable} h-full antialiased`}
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                  document.documentElement.classList.add('dark');
                } else {
                  document.documentElement.classList.remove('dark');
                }
              } catch (_) {}
            `,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-white text-[#0B1724] selection:bg-[#08A9E6] selection:text-white">
        <ScrollSnapDelegate />
        <Navbar />
        <main className="flex-1 pt-[var(--header-height)]">{children}</main>
        <Footer />
        <MobileStickyCTA />
      </body>
    </html>
  );
}
