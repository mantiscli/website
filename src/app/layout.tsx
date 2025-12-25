import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mantis - Unified Security Control for macOS",
  description: "See every connection. Control every layer. Manage Proxyman, WARP, TinyShield, and Stratoshark from a single CLI.",
  keywords: ["macOS security", "network security", "CLI tool", "Proxyman", "WARP", "TinyShield", "Stratoshark"],
  authors: [{ name: "Mantis CLI" }],
  openGraph: {
    title: "Mantis - Unified Security Control for macOS",
    description: "See every connection. Control every layer. Unified security CLI for macOS.",
    url: "https://mantiscli.dev",
    siteName: "Mantis",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mantis - Unified Security Control for macOS",
    description: "See every connection. Control every layer.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
