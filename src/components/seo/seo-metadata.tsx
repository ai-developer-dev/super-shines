import { Metadata } from "next"
import { seoConfig, pageMetadata } from "@/lib/seo-config"

interface GenerateMetadataProps {
  title?: string
  description?: string
  keywords?: string[]
  path?: string
  images?: Array<{
    url: string
    width?: number
    height?: number
    alt?: string
  }>
  noindex?: boolean
  type?: "website" | "article"
  publishedTime?: string
  modifiedTime?: string
  author?: string
}

export function generateSEOMetadata({
  title,
  description,
  keywords = [],
  path = "",
  images = [],
  noindex = false,
  type = "website",
  publishedTime,
  modifiedTime,
  author,
}: GenerateMetadataProps): Metadata {
  const url = `${seoConfig.openGraph.url}${path}`
  
  const finalTitle = title || seoConfig.defaultTitle
  const finalDescription = description || seoConfig.description
  const finalKeywords = [...seoConfig.keywords, ...keywords]
  const finalImages = images.length > 0 ? images : seoConfig.openGraph.images
  
  return {
    title: finalTitle,
    description: finalDescription,
    keywords: finalKeywords,
    authors: author ? [{ name: author }] : undefined,
    creator: "Super Shines",
    publisher: "Super Shines",
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: finalTitle,
      description: finalDescription,
      url,
      siteName: seoConfig.openGraph.siteName,
      images: finalImages.map(img => ({
        url: img.url.startsWith("http") ? img.url : `${seoConfig.openGraph.url}${img.url}`,
        width: img.width || 1200,
        height: img.height || 630,
        alt: img.alt || finalTitle,
      })),
      locale: seoConfig.openGraph.locale,
      type: type as any,
      publishedTime,
      modifiedTime,
      authors: author ? [author] : undefined,
    },
    twitter: {
      card: seoConfig.twitter.cardType as any,
      title: finalTitle,
      description: finalDescription,
      images: finalImages.map(img => img.url),
      creator: seoConfig.twitter.handle,
      site: seoConfig.twitter.site,
    },
    robots: noindex ? {
      index: false,
      follow: false,
    } : {
      index: true,
      follow: true,
      nocache: false,
      googleBot: {
        index: true,
        follow: true,
        noimageindex: false,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    verification: {
      google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
      yandex: process.env.NEXT_PUBLIC_YANDEX_VERIFICATION,
      yahoo: process.env.NEXT_PUBLIC_YAHOO_VERIFICATION,
    },
  }
}

export function generateArticleMetadata({
  title,
  description,
  keywords = [],
  path,
  images = [],
  author = "Super Shines Team",
  publishedTime,
  modifiedTime,
}: Omit<GenerateMetadataProps, "type">) {
  return generateSEOMetadata({
    title,
    description,
    keywords,
    path,
    images,
    type: "article",
    author,
    publishedTime,
    modifiedTime,
  })
}