import { MetadataRoute } from "next";
import { servicesData } from "@/lib/data/services";
import { industriesData } from "@/lib/data/industries";
import { articlesData } from "@/lib/data/articles";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://virtualstack.us";
  const SITE_UPDATED = new Date("2026-09-26");

  // Core static pages (excluding /resources, /privacy, /terms)
  const staticRoutes = [
    "",
    "/services",
    "/industries",
    "/why-virtual-stack",
    "/about",
    "/case-studies",
    "/resources/faqs",
    "/resources/blog",
    "/contact",
    "/book-a-consultation",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: SITE_UPDATED,
  }));

  // Dynamic service pages
  const serviceRoutes = servicesData.map((service) => ({
    url: `${baseUrl}/services/${service.slug}`,
    lastModified: SITE_UPDATED,
  }));

  // Dynamic industry pages
  const industryRoutes = industriesData.map((ind) => ({
    url: `${baseUrl}/industries/${ind.slug}`,
    lastModified: SITE_UPDATED,
  }));

  // Dynamic blog articles (with stable parsed dates)
  const blogRoutes = articlesData.map((article) => {
    const parsedDate = new Date(article.date);
    return {
      url: `${baseUrl}/resources/blog/${article.slug}`,
      lastModified: isNaN(parsedDate.getTime()) ? SITE_UPDATED : parsedDate,
    };
  });

  return [...staticRoutes, ...serviceRoutes, ...industryRoutes, ...blogRoutes];
}
