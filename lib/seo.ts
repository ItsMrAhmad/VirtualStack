import type { Metadata } from "next";

export const SITE_URL = "https://virtualstack.us";

export interface BuildMetadataOptions {
  title: string;
  description: string;
  path: string;
  image?: string;
  type?: "website" | "article";
  publishedTime?: string;
  absoluteTitle?: boolean;
}

export function buildMetadata({
  title,
  description,
  path,
  image = "/og-image.jpg",
  type = "website",
  publishedTime,
  absoluteTitle = false,
}: BuildMetadataOptions): Metadata {
  const fullTitle = absoluteTitle ? title : `${title} | Virtual Stack`;
  const canonicalPath = path.startsWith("/") ? path : `/${path}`;

  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: {
      canonical: canonicalPath,
    },
    openGraph: {
      url: canonicalPath,
      title: fullTitle,
      description,
      siteName: "Virtual Stack",
      locale: "en_US",
      type,
      ...(publishedTime && type === "article"
        ? { publishedTime }
        : {}),
      images: [
        {
          url: image.startsWith("http") ? image : image,
          width: 1200,
          height: 630,
          alt: fullTitle,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [image],
    },
  };
}
