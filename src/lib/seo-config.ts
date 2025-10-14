export const siteConfig = {
  name: "Super Shines",
  url: "https://supershines.com",
  description: "Super Shines provides premium mobile car detailing across St. Petersburg, Gulfport, Seminole, Clearwater Beach, and Pinellas County with concierge-level service.",
  author: "Super Shines",
  email: "info@supershines.com",
  phone: "+1-800-555-0123",
  social: {
    facebook: "https://facebook.com/supershines",
    instagram: "https://instagram.com/supershines",
    linkedin: "https://linkedin.com/company/supershines",
    youtube: "https://youtube.com/@supershines",
  },
}

export const seoConfig = {
  titleTemplate: "%s | Super Shines Mobile Detailing",
  defaultTitle: "Super Shines | Mobile Detailing That Comes To You",
  description: "Super Shines provides premium mobile car detailing across St. Petersburg, Gulfport, Seminole, Clearwater Beach, and Pinellas County with concierge-level service.",
  keywords: [
    "mobile car detailing St. Petersburg",
    "auto detailing Seminole",
    "ceramic free detailing Pinellas Park",
    "interior car cleaning Clearwater Beach",
    "exterior detail Gulfport",
    "mobile auto spa Pinellas County",
    "car detailing near me",
    "mobile car wash St Pete",
    "auto detailing service",
    "professional car cleaning",
    "vehicle detailing Florida",
    "mobile detailing Pinellas",
    "car interior cleaning service",
    "paint correction St Petersburg",
    "headlight restoration Clearwater",
    "fleet detailing Tampa Bay",
    "boat detailing St Pete Beach",
    "RV detailing Pinellas County",
    "motorcycle detailing Florida",
    "Super Shines detailing",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    siteName: siteConfig.name,
    images: [
      {
        url: `${siteConfig.url}/images/hero-detailing.jpg`,
        width: 1600,
        height: 900,
        alt: "Super Shines mobile detailing in St. Petersburg",
      },
    ],
  },
  twitter: {
    handle: "@supershines",
    site: "@supershines",
    cardType: "summary_large_image",
  },
}

export const pageMetadata = {
  home: {
    title: "Mobile Car Detailing St. Petersburg & Pinellas County",
    description: "Premium mobile auto detailing that comes to you. Serving St. Petersburg, Gulfport, Seminole, Clearwater Beach, and all of Pinellas County. Book your shine today!",
    keywords: ["mobile detailing", "car detailing St Petersburg", "auto detailing near me"],
  },
  blog: {
    title: "Auto Care Tips & Detailing Blog",
    description: "Expert tips on car care, detailing techniques, and maintaining your vehicle's appearance. Learn from Super Shines' professional detailers.",
    keywords: ["car care tips", "detailing guide", "auto maintenance"],
  },
  blogPosts: {
    "touch-ups-between-details": {
      title: "Essential Touch-Ups Between Professional Details",
      description: "Learn how to maintain your car's appearance between professional detailing sessions with these expert tips from Super Shines.",
      keywords: ["car maintenance", "detailing tips", "vehicle care"],
    },
    "interior-habits": {
      title: "7 Habits for a Pristine Car Interior",
      description: "Discover the daily habits that keep your car's interior looking showroom fresh between professional details.",
      keywords: ["car interior cleaning", "vehicle habits", "interior maintenance"],
    },
    "ev-road-trip-prep": {
      title: "Preparing Your EV for the Ultimate Road Trip",
      description: "Complete guide to preparing your electric vehicle for long road trips, from charging plans to interior protection.",
      keywords: ["EV road trip", "electric vehicle care", "Tesla detailing"],
    },
    "steam-vs-shampoo": {
      title: "Steam Cleaning vs. Shampooing: Which is Best?",
      description: "Compare steam cleaning and shampooing methods for car interiors. Learn which technique works best for different situations.",
      keywords: ["steam cleaning", "car shampooing", "interior detailing methods"],
    },
  },
}

export const structuredData = {
  organization: {
    "@context": "https://schema.org",
    "@type": "AutoDetailingService",
    "@id": `${siteConfig.url}/#organization`,
    name: siteConfig.name,
    alternateName: "Super Shines Mobile Detailing",
    url: siteConfig.url,
    logo: {
      "@type": "ImageObject",
      url: `${siteConfig.url}/logo.png`,
      width: 300,
      height: 60,
    },
    description: siteConfig.description,
    image: `${siteConfig.url}/images/hero-detailing.jpg`,
    telephone: siteConfig.phone,
    email: siteConfig.email,
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      addressRegion: "FL",
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 27.7676,
      longitude: -82.6403,
    },
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
      "Paint correction",
      "Ceramic coating",
      "Headlight restoration",
    ],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "08:00",
        closes: "18:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Sunday",
        opens: "10:00",
        closes: "16:00",
      },
    ],
    sameAs: Object.values(siteConfig.social),
  },
  
  breadcrumb: (items: Array<{name: string, url: string}>) => ({
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
  }),
  
  faqPage: {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How long does a typical mobile detail take?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A typical mobile detail takes 2-4 hours depending on the service level and vehicle condition. Interior details usually take 2-3 hours, exterior details 1.5-2.5 hours, and full details 3-4 hours.",
        },
      },
      {
        "@type": "Question",
        name: "Do I need to provide water or electricity?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No, our mobile units are fully self-contained with water tanks and power generators. We bring everything needed to detail your vehicle.",
        },
      },
      {
        "@type": "Question",
        name: "What areas do you serve in Pinellas County?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We serve all of Pinellas County including St. Petersburg, Gulfport, Seminole, Clearwater Beach, Dunedin, Palm Harbor, Pinellas Park, and Safety Harbor.",
        },
      },
      {
        "@type": "Question",
        name: "How often should I get my car detailed?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We recommend a full detail every 3-4 months for optimal protection and appearance. However, this varies based on usage, parking conditions, and personal preferences.",
        },
      },
    ],
  },
  
  service: (service: {name: string, description: string, price: string}) => ({
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    description: service.description,
    provider: {
      "@type": "AutoDetailingService",
      name: siteConfig.name,
    },
    areaServed: "Pinellas County, FL",
    offers: {
      "@type": "Offer",
      price: service.price,
      priceCurrency: "USD",
    },
  }),
}