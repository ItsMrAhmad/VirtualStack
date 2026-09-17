import React from "react";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import {
  Calendar,
  Clock,
  ChevronRight,
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  BookOpen,
} from "lucide-react";
import { articlesData } from "@/lib/data/articles";
import FinalCTA from "@/components/sections/FinalCTA";
import Footer from "@/components/layout/Footer";

interface ArticlePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return articlesData.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({ params }: ArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = articlesData.find((a) => a.slug === slug);
  if (!article) return {};

  return {
    title: `${article.title} | Virtual Stack Insights`,
    description: article.excerpt,
    openGraph: {
      title: `${article.title} | Virtual Stack Insights`,
      description: article.excerpt,
      url: `https://virtualstack.us/resources/blog/${article.slug}`,
      images: [
        {
          url: article.image,
          width: 1200,
          height: 675,
          alt: article.title,
        },
      ],
    },
  };
}

export default async function ArticleDetailPage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const article = articlesData.find((a) => a.slug === slug);

  if (!article) {
    notFound();
  }

  // Related articles (same category or others)
  const relatedArticles = articlesData
    .filter((a) => a.id !== article.id)
    .slice(0, 3);

  return (
    <div
      id="article-detail-scroll-container"
      tabIndex={0}
      className="h-screen h-[100dvh] overflow-y-scroll snap-y snap-mandatory scroll-smooth relative bg-white text-[#0B1724] outline-none"
    >
      {/* Slide 1: Hero & Cover Visual */}
      <section className="h-screen h-[100dvh] min-h-screen min-h-[100dvh] w-full snap-start snap-always flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 pt-18 sm:pt-22 pb-6 relative z-10 overflow-y-auto sm:overflow-visible bg-gradient-to-b from-[#F7FAFC] to-white border-b border-[#DDE6ED]">
        <div className="my-auto w-full max-w-4xl mx-auto space-y-4">
          <nav className="flex items-center space-x-2 text-xs text-[#5F7183]">
            <Link href="/" className="hover:text-[#08A9E6] transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3 h-3" />
            <Link href="/resources" className="hover:text-[#08A9E6] transition-colors">
              Resources
            </Link>
            <ChevronRight className="w-3 h-3" />
            <Link href="/resources/blog" className="hover:text-[#08A9E6] transition-colors">
              Insights
            </Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-[#071A2A] font-semibold truncate max-w-[180px] sm:max-w-xs">
              {article.title}
            </span>
          </nav>

          <div className="space-y-2.5">
            <div className="flex flex-wrap items-center gap-2.5 text-xs text-[#5F7183]">
              <span className="font-semibold text-[#071A2A] bg-white px-2.5 py-0.5 rounded-md border border-[#DDE6ED]">
                {article.category}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-[#08A9E6]" />
                <span>{article.readTime}</span>
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5 text-[#08A9E6]" />
                <span>{article.date}</span>
              </span>
            </div>

            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#071A2A] tracking-tight font-heading leading-tight">
              {article.title}
            </h1>

            <p className="text-xs sm:text-sm text-[#5F7183] leading-relaxed max-w-2xl">
              {article.excerpt}
            </p>
            {/* Author info */}
            <div className="p-3 sm:p-4 rounded-xl bg-white border border-[#DDE6ED] flex items-center justify-between shadow-xs">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-[#071A2A] text-white font-bold text-xs flex items-center justify-center">
                  {article.author.avatarInitials}
                </div>
                <div>
                  <p className="text-xs font-bold text-[#071A2A]">
                    {article.author.name}
                  </p>
                  <p className="text-[11px] text-[#5F7183]">
                    {article.author.role} • Virtual Stack Operational Research
                  </p>
                </div>
              </div>
              <span className="text-[11px] font-semibold text-[#08A9E6] hidden sm:inline">
                Scroll to Read Full Analysis ↓
              </span>
            </div>
          </div>

          {/* Cover Photo */}
          <div className="max-w-3xl mx-auto w-full">
            <div className="relative aspect-[16/9] max-h-[320px] sm:max-h-[360px] md:max-h-[400px] w-full rounded-2xl overflow-hidden shadow-md border border-[#DDE6ED]">
              <Image
                src={article.image}
                alt={article.title}
                fill
                sizes="(max-width: 1024px) 100vw, 768px"
                className="object-cover object-top"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Slide 2: Article Analysis & Takeaways (Dedicated Reading Pane) */}
      <section className="h-screen h-[100dvh] min-h-screen min-h-[100dvh] w-full snap-start snap-always flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 pt-18 sm:pt-22 pb-6 relative z-10 overflow-y-auto sm:overflow-visible bg-white border-b border-[#DDE6ED]">
        <div className="my-auto w-full max-w-3xl mx-auto max-h-[82vh] overflow-y-auto pr-2 sm:pr-4 space-y-6">
          {/* Executive Takeaways Box */}
          <div className="p-5 sm:p-6 rounded-2xl bg-[#EBF7FD]/60 border border-[#08A9E6]/30 space-y-3">
            <div className="flex items-center gap-2 text-xs font-bold text-[#071A2A]">
              <CheckCircle2 className="w-4 h-4 text-[#08A9E6]" />
              Executive Takeaways & Benchmarks
            </div>
            <ul className="space-y-2">
              {article.content.keyTakeaways.map((takeaway, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#0B1724]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#08A9E6] shrink-0 mt-1.5" />
                  <span className="leading-relaxed">{takeaway}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Article Body */}
          <div className="space-y-5 text-xs sm:text-sm text-[#0B1724] leading-relaxed">
            <p className="text-sm sm:text-base font-medium text-[#071A2A] leading-relaxed">
              {article.content.introduction}
            </p>

            {article.content.sections.map((sec, idx) => (
              <div key={idx} className="space-y-2 pt-2">
                <h2 className="text-base sm:text-lg font-bold text-[#071A2A] font-heading">
                  {sec.heading}
                </h2>
                <p className="text-[#5F7183] leading-relaxed">
                  {sec.body}
                </p>
              </div>
            ))}

            <div className="p-4 sm:p-5 rounded-2xl bg-[#F7FAFC] border-l-4 border-[#08A9E6] text-xs sm:text-sm text-[#071A2A] font-medium leading-relaxed">
              {article.content.conclusion}
            </div>
          </div>

          {/* Tags */}
          <div className="pt-4 border-t border-[#DDE6ED] flex flex-wrap items-center justify-between gap-3">
            <div className="flex flex-wrap gap-1.5">
              {article.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-[11px] font-semibold text-[#5F7183] bg-[#F7FAFC] px-2.5 py-1 rounded-md border border-[#DDE6ED]"
                >
                  #{tag}
                </span>
              ))}
            </div>

            <span className="text-[11px] text-[#5F7183]">
              Published under {article.category}
            </span>
          </div>
        </div>
      </section>

      {/* Slide 3: Related Operational Insights & Next Steps */}
      <section className="h-screen h-[100dvh] min-h-screen min-h-[100dvh] w-full snap-start snap-always flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 pt-18 sm:pt-22 pb-6 relative z-10 overflow-y-auto sm:overflow-visible bg-[#F7FAFC] border-b border-[#DDE6ED]">
        <div className="my-auto w-full max-w-4xl mx-auto space-y-6">
          <div className="flex items-center justify-between border-b border-[#DDE6ED] pb-3">
            <div className="flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-[#08A9E6]" />
              <h3 className="text-lg sm:text-xl font-bold text-[#071A2A] font-heading">
                Related Operational Insights
              </h3>
            </div>

            <Link
              href="/resources/blog"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#08A9E6] hover:text-[#078FCC]"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to all insights</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {relatedArticles.map((rel) => (
              <Link
                key={rel.id}
                href={`/resources/blog/${rel.slug}`}
                className="p-5 rounded-2xl bg-white border border-[#DDE6ED] hover:border-[#08A9E6] hover:shadow-md transition-all space-y-2.5 group flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <span className="text-[10px] font-semibold text-[#071A2A] bg-[#F7FAFC] px-2 py-0.5 rounded-md border border-[#DDE6ED]">
                    {rel.category}
                  </span>
                  <h4 className="text-xs sm:text-sm font-bold text-[#071A2A] group-hover:text-[#08A9E6] transition-colors line-clamp-2 leading-snug">
                    {rel.title}
                  </h4>
                  <p className="text-[11px] text-[#5F7183] line-clamp-2">
                    {rel.excerpt}
                  </p>
                </div>

                <div className="pt-2 border-t border-[#DDE6ED] flex items-center justify-between text-[11px] text-[#5F7183]">
                  <span>{rel.readTime}</span>
                  <span className="text-xs font-bold text-[#08A9E6] flex items-center gap-1">
                    <span>Read</span>
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                  </span>
                </div>
              </Link>
            ))}
          </div>

          {/* Quick Consultation Callout */}
          <div className="p-5 sm:p-6 rounded-2xl bg-white border border-[#DDE6ED] flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="space-y-1 text-center sm:text-left">
              <h4 className="text-sm sm:text-base font-bold text-[#071A2A] font-heading">
                Ready to benchmark your team&apos;s operational economics?
              </h4>
              <p className="text-xs text-[#5F7183]">
                Schedule a 10-minute operational scoping call with our practice leads.
              </p>
            </div>
            <Link
              href="/book-a-consultation"
              className="bg-[#08A9E6] hover:bg-[#078FCC] text-white text-xs font-bold px-5 py-2.5 rounded-xl transition-colors shadow-xs shrink-0"
            >
              Book Scoping Call
            </Link>
          </div>
        </div>
      </section>

      {/* Slide 4: Final CTA */}
      <FinalCTA />

      {/* Slide 5: Footer */}
      <div className="article-detail-snap-section w-full snap-start snap-always min-h-[100dvh] h-[100dvh] bg-[#071A2A] flex flex-col justify-between overflow-y-auto">
        <Footer />
      </div>
    </div>
  );
}
