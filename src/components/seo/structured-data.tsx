import Script from "next/script"

interface StructuredDataProps {
  data: Record<string, unknown> | Record<string, unknown>[]
  id?: string
}

export function StructuredData({ data, id = "structured-data" }: StructuredDataProps) {
  const structuredData = Array.isArray(data) ? data : [data]
  
  return (
    <Script
      id={id}
      type="application/ld+json"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(
          structuredData.length === 1 ? structuredData[0] : structuredData
        ),
      }}
    />
  )
}

export function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://supershines.com/#business",
    name: "Super Shines Mobile Detailing",
    image: [
      "https://supershines.com/images/hero-detailing.jpg",
      "https://supershines.com/images/service-full.jpg",
      "https://supershines.com/images/detailer-parham.jpg",
    ],
    logo: "https://supershines.com/logo.png",
    url: "https://supershines.com",
    telephone: "+1-800-555-0123",
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      addressLocality: "St. Petersburg",
      addressRegion: "FL",
      postalCode: "33701",
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 27.7676,
      longitude: -82.6403,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "18:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "08:00",
        closes: "17:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Sunday",
        opens: "10:00",
        closes: "16:00",
      },
    ],
    sameAs: [
      "https://facebook.com/supershines",
      "https://instagram.com/supershines",
      "https://linkedin.com/company/supershines",
      "https://youtube.com/@supershines",
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Mobile Detailing Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Interior Detailing",
            description: "Complete interior cleaning including vacuuming, shampooing, and protection.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Exterior Detailing",
            description: "Professional exterior wash, clay bar treatment, and wax application.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Full Service Detailing",
            description: "Complete interior and exterior detailing package.",
          },
        },
      ],
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "287",
    },
    review: [
      {
        "@type": "Review",
        reviewRating: {
          "@type": "Rating",
          ratingValue: "5",
        },
        author: {
          "@type": "Person",
          name: "Michael S.",
        },
        datePublished: "2024-01-10",
        reviewBody: "Outstanding service! My car looks brand new after their full detail service.",
      },
      {
        "@type": "Review",
        reviewRating: {
          "@type": "Rating",
          ratingValue: "5",
        },
        author: {
          "@type": "Person",
          name: "Jessica L.",
        },
        datePublished: "2024-01-08",
        reviewBody: "Professional, punctual, and amazing results. Highly recommend!",
      },
    ],
  }
  
  return <StructuredData data={schema} id="local-business-schema" />
}

export function ServiceAreaSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Mobile Auto Detailing",
    provider: {
      "@type": "LocalBusiness",
      name: "Super Shines Mobile Detailing",
    },
    areaServed: [
      {
        "@type": "City",
        name: "St. Petersburg",
        "@id": "https://www.wikidata.org/wiki/Q49255",
      },
      {
        "@type": "City",
        name: "Clearwater",
        "@id": "https://www.wikidata.org/wiki/Q621549",
      },
      {
        "@type": "City",
        name: "Largo",
        "@id": "https://www.wikidata.org/wiki/Q1012604",
      },
      {
        "@type": "AdministrativeArea",
        name: "Pinellas County",
        "@id": "https://www.wikidata.org/wiki/Q488540",
      },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Service Areas",
      itemListElement: [
        {
          "@type": "OfferCatalog",
          name: "St. Petersburg Mobile Detailing",
          url: "https://supershines.com#st-petersburg",
        },
        {
          "@type": "OfferCatalog",
          name: "Clearwater Beach Mobile Detailing",
          url: "https://supershines.com#clearwater-beach",
        },
        {
          "@type": "OfferCatalog",
          name: "Seminole Mobile Detailing",
          url: "https://supershines.com#seminole",
        },
      ],
    },
  }
  
  return <StructuredData data={schema} id="service-area-schema" />
}

export function BreadcrumbSchema({ items }: { items: Array<{ name: string; url: string }> }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@id": item.url,
        name: item.name,
      },
    })),
  }
  
  return <StructuredData data={schema} id="breadcrumb-schema" />
}

export function ArticleSchema({
  title,
  description,
  author = "Super Shines Team",
  datePublished,
  dateModified,
  image,
  url,
}: {
  title: string
  description: string
  author?: string
  datePublished: string
  dateModified?: string
  image: string
  url: string
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: title,
    description,
    author: {
      "@type": "Person",
      name: author,
    },
    datePublished,
    dateModified: dateModified || datePublished,
    image: {
      "@type": "ImageObject",
      url: image,
    },
    url,
    publisher: {
      "@type": "Organization",
      name: "Super Shines",
      logo: {
        "@type": "ImageObject",
        url: "https://supershines.com/logo.png",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
  }
  
  return <StructuredData data={schema} id="article-schema" />
}