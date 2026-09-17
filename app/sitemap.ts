import { MetadataRoute } from "next";
import { servicesData } from "@/lib/data/services";
import { industriesData } from "@/lib/data/industries";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://virtualstack.us";

  // Core static pages
  const staticRoutes = [
    "",
    "/services",
    "/industries",
    "/why-virtual-stack",
    "/about",
    "/case-studies",
    "/resources",
    "/resources/faqs",
    "/resources/blog",
    "/contact",
    "/book-a-consultation",
    "/privacy",
    "/terms",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1.0 : 0.8,
  }));

  // Dynamic service pages
  const serviceRoutes = servicesData.map((service) => ({
    url: `${baseUrl}/services/${service.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  // Dynamic industry pages
  const industryRoutes = industriesData.map((ind) => ({
    url: `${baseUrl}/industries/${ind.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [...staticRoutes, ...serviceRoutes, ...industryRoutes];
}
