import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import {
  SoftwareApplicationJsonLd,
  OrganizationJsonLd,
  FAQJsonLd,
} from "next-seo";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const SITE_URL = "https://mantis-website-inky.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Mantis - Unified Security Control for macOS",
    template: "%s | Mantis",
  },
  description:
    "See every connection. Control every layer. Manage Proxyman, WARP, TinyShield, and Stratoshark from a single CLI.",
  keywords: [
    "macOS security",
    "network security",
    "CLI tool",
    "Proxyman",
    "WARP",
    "TinyShield",
    "Stratoshark",
    "security profiles",
    "firewall",
    "DNS protection",
  ],
  authors: [{ name: "Mantis CLI" }],
  creator: "Mantis CLI",
  publisher: "Mantis CLI",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Mantis - Unified Security Control for macOS",
    description:
      "See every connection. Control every layer. Unified security CLI for macOS.",
    url: SITE_URL,
    siteName: "Mantis",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Mantis - Unified Security Control for macOS",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mantis - Unified Security Control for macOS",
    description: "See every connection. Control every layer.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/manifest.json",
  alternates: {
    canonical: SITE_URL,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="theme-color" content="#0a0a0a" />
        <SoftwareApplicationJsonLd
          name="Mantis"
          operatingSystem="macOS"
          applicationCategory="SecurityApplication"
          offers={{
            price: 0,
            priceCurrency: "USD",
          }}
        />
        <OrganizationJsonLd
          type="Organization"
          name="Mantis CLI"
          url={SITE_URL}
          logo={`${SITE_URL}/logo.png`}
          sameAs={["https://github.com/mantiscli"]}
        />
        <FAQJsonLd
          questions={[
            {
              question: "Is Mantis free?",
              answer: "Yes, Mantis is completely free and open source under the MIT license.",
            },
            {
              question: "What security tools does Mantis support?",
              answer: "Mantis supports Proxyman, Cloudflare WARP, TinyShield, Stratoshark, custom hosts blocking, and system proxy configuration.",
            },
            {
              question: "How do I install Mantis?",
              answer: "Install via Homebrew with: brew install mantiscli/tap/mantis",
            },
            {
              question: "Does Mantis collect telemetry?",
              answer: "No, Mantis does not collect any telemetry or user data. It works completely offline.",
            },
          ]}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-primary text-primary-foreground px-4 py-2 rounded-md z-[100] focus:outline-none focus:ring-2 focus:ring-primary"
        >
          Skip to main content
        </a>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
