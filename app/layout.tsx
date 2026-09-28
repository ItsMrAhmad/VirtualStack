import type { Metadata } from "next";
import { Manrope, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import MobileStickyCTA from "@/components/layout/MobileStickyCTA";
import ScrollSnapDelegate from "@/components/layout/ScrollSnapDelegate";
import ChatLauncher from "@/components/chatbot/ChatLauncher";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://virtualstack.us"),
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "32x32" },
      { url: "/icon.png", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  title: {
    default: "Virtual Stack | Modern B2B Outsourcing & Business Operations",
    template: "%s | Virtual Stack",
  },
  description:
    "Scale your business with dedicated customer support, back-office operations, and remote B2B sales teams. 24/7/365 operational reliability.",
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

import JsonLd, { getOrganizationAndWebsiteJsonLd } from "@/components/seo/JsonLd";

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
        <link rel="preconnect" href="https://calendly.com" />
        <link rel="preconnect" href="https://assets.calendly.com" />
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
        <JsonLd data={getOrganizationAndWebsiteJsonLd()} />
      </head>
      <body className="min-h-full flex flex-col bg-white text-[#0B1724] selection:bg-[#08A9E6] selection:text-white">
        <ScrollSnapDelegate />
        <Navbar />
        <main className="flex-1 pt-[var(--header-height)]">{children}</main>
        <MobileStickyCTA />
        <ChatLauncher />
      </body>
    </html>
  );
}
