import type { Metadata } from "next";
import Script from "next/script";
import { Bebas_Neue, Poppins } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { LocalBusinessSchema, ServiceAreaSchema } from "@/components/seo/structured-data";
import { generateSEOMetadata } from "@/components/seo/seo-metadata";
import { structuredData } from "@/lib/seo-config";

const poppins = Poppins({
  variable: "--font-super-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const bebas = Bebas_Neue({
  variable: "--font-super-display",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const structuredData = {
  "@context": "https://schema.org",
  "@type": "AutoDetailingService",
  name: "Super Shines",
  alternateName: "Super Shines Mobile Detailing",
  url: "https://supershines.com",
  description:
    "Super Shines delivers premium mobile auto detailing for St. Petersburg, Gulfport, Seminole, Clearwater Beach, Dunedin, Palm Harbor, and the greater Pinellas County area.",
  image: "https://supershines.com/images/hero-detailing.jpg",
  telephone: "+1-800-555-0123",
  priceRange: "$$",
  areaServed: [
    { "@type": "City", name: "St. Petersburg", addressRegion: "FL" },
    { "@type": "City", name: "Gulfport", addressRegion: "FL" },
    { "@type": "City", name: "Seminole", addressRegion: "FL" },
    { "@type": "City", name: "Pinellas Park", addressRegion: "FL" },
    { "@type": "City", name: "Safety Harbor", addressRegion: "FL" },
    { "@type": "City", name: "Palm Harbor", addressRegion: "FL" },
    { "@type": "City", name: "Dunedin", addressRegion: "FL" },
    { "@type": "City", name: "Clearwater Beach", addressRegion: "FL" },
    { "@type": "AdministrativeArea", name: "Pinellas County", addressRegion: "FL" },
  ],
  serviceType: [
    "Mobile exterior detailing",
    "Mobile interior detailing",
    "Full service detailing",
    "Fleet detailing",
  ],
  sameAs: [
    "https://facebook.com",
    "https://instagram.com",
    "https://linkedin.com",
    "https://youtube.com",
  ],
};

export const metadata: Metadata = generateSEOMetadata({
  title: "Mobile Car Detailing St. Petersburg & Pinellas County | Super Shines",
  description: "Premium mobile auto detailing that comes to you. Serving St. Petersburg, Gulfport, Seminole, Clearwater Beach, and all of Pinellas County. Professional car cleaning at your location.",
  keywords: [
    "mobile car detailing St. Petersburg FL",
    "auto detailing Seminole Florida", 
    "car detailing service Pinellas Park",
    "mobile detailing Clearwater Beach",
    "car wash Gulfport FL",
    "vehicle detailing Pinellas County",
    "mobile car wash near me",
    "professional auto detailing",
    "ceramic coating St Pete",
    "paint correction Florida",
  ],
  path: "/",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${poppins.variable} ${bebas.variable} antialiased font-sans bg-surface text-ink`}
      >
        <Script
          id="ld-json-super-shines"
          type="application/ld+json"
          strategy="beforeInteractive"
        >
          {JSON.stringify(structuredData.organization)}
        </Script>
        <LocalBusinessSchema />
        <ServiceAreaSchema />
        <div className="flex min-h-screen flex-col">
          <SiteHeader />
          <main className="flex-1">{children}</main>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
