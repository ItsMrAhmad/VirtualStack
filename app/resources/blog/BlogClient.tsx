"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Search,
  Calendar,
  Clock,
  ArrowRight,
  BookOpen,
  CheckCircle2,
  X,
  Share2,
  Sparkles,
  ArrowUpRight,
  ChevronRight,
  Mail,
} from "lucide-react";
import { Article, blogCategories } from "@/lib/data/articles";

interface BlogClientProps {
  articles: Article[];
}

export default function BlogClient({ articles }: BlogClientProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [activeArticle, setActiveArticle] = useState<Article | null>(null);
  const [copiedSlug, setCopiedSlug] = useState<boolean>(false);

  // Filter articles based on category and search query
  const filteredArticles = useMemo(() => {
    return articles.filter((article) => {
      const matchesCategory =
        selectedCategory === "all" || article.categorySlug === selectedCategory;
      const matchesSearch =
        searchQuery.trim() === "" ||
        article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.tags.some((tag) =>
          tag.toLowerCase().includes(searchQuery.toLowerCase())
        );
      return matchesCategory && matchesSearch;
    });
  }, [articles, selectedCategory, searchQuery]);

  // Featured article (first featured article or first filtered)
  const featuredArticle = useMemo(() => {
    if (selectedCategory === "all" && searchQuery === "") {
      return articles.find((a) => a.featured) || articles[0];
    }
    return null;
  }, [articles, selectedCategory, searchQuery]);

  // Articles for the grid (excluding featured if displayed above)
  const gridArticles = useMemo(() => {
    if (featuredArticle && selectedCategory === "all" && searchQuery === "") {
      return filteredArticles.filter((a) => a.id !== featuredArticle.id);
    }
    return filteredArticles;
  }, [filteredArticles, featuredArticle, selectedCategory, searchQuery]);

  // Slider pagination for grid articles
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [itemsPerPage, setItemsPerPage] = useState<number>(3);

  React.useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setItemsPerPage(3);
      } else if (window.innerWidth >= 640) {
        setItemsPerPage(2);
      } else {
        setItemsPerPage(1);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Reset page when category or search changes
  React.useEffect(() => {
    setCurrentPage(0);
  }, [selectedCategory, searchQuery]);

  const totalPages = Math.max(1, Math.ceil(gridArticles.length / itemsPerPage));
  const paginatedArticles = useMemo(() => {
    const start = currentPage * itemsPerPage;
    return gridArticles.slice(start, start + itemsPerPage);
  }, [gridArticles, currentPage, itemsPerPage]);

  const handlePrevPage = () => {
    setCurrentPage((prev) => Math.max(0, prev - 1));
  };

  const handleNextPage = () => {
    setCurrentPage((prev) => Math.min(totalPages - 1, prev + 1));
  };

  const handleShare = (article: Article) => {
    if (typeof window !== "undefined") {
      const url = `${window.location.origin}/resources/blog/${article.slug}`;
      navigator.clipboard.writeText(url);
      setCopiedSlug(true);
      setTimeout(() => setCopiedSlug(false), 2000);
    }
  };

  // The active featured article to highlight in slide 1
  const displayFeatured = featuredArticle || filteredArticles[0] || articles[0];

  return (
    <>
      {/* Slide 1: Hero & Featured Article with Category Filter Toolbar */}
      <section className="h-screen h-[100dvh] min-h-screen min-h-[100dvh] w-full snap-start snap-always flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 pt-18 sm:pt-22 pb-6 relative z-10 overflow-y-auto sm:overflow-visible bg-gradient-to-b from-[#F7FAFC] to-white border-b border-[#DDE6ED]">
        <div className="my-auto w-full max-w-7xl mx-auto space-y-5">
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#071A2A] tracking-tight font-heading">
              Operational Insights & Benchmarks
            </h1>
            <p className="text-xs sm:text-sm text-[#5F7183] leading-relaxed">
              Practical strategies, frameworks, and data from our operations leadership pod on scaling
              workforces efficiently.
            </p>
          </div>

          {/* Category Pills & Search Toolbar */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-3 border-y border-[#DDE6ED] py-3">
            {/* Categories scrollable on mobile */}
            <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto pb-1 md:pb-0 scrollbar-none">
              {blogCategories.map((cat) => {
                const isActive = selectedCategory === cat.slug;
                return (
                  <button
                    key={cat.slug}
                    onClick={() => setSelectedCategory(cat.slug)}
                    className={`text-xs font-semibold px-3.5 py-1.5 rounded-full whitespace-nowrap transition-all duration-200 ${
                      isActive
                        ? "bg-[#071A2A] text-white shadow-xs"
                        : "bg-white hover:bg-[#EBF7FD] text-[#5F7183] hover:text-[#08A9E6] border border-[#DDE6ED]"
                    }`}
                  >
                    {cat.name}
                  </button>
                );
              })}
            </div>

            {/* Search input */}
            <div className="relative w-full md:w-64 shrink-0">
              <Search className="w-3.5 h-3.5 text-[#5F7183] absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search insights..."
                className="w-full pl-8 pr-7 py-1.5 rounded-full text-xs bg-white border border-[#DDE6ED] text-[#071A2A] placeholder-[#5F7183] focus:outline-none focus:border-[#08A9E6] transition-colors"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-[#5F7183] hover:text-[#071A2A]"
                >
                  <X className="w-3 h-3" />
                </button>
              )}
            </div>
          </div>

          {/* Featured Article Banner */}
          {displayFeatured && (
            <div className="group relative bg-[#F7FAFC] hover:bg-white rounded-2xl border border-[#DDE6ED] hover:border-[#08A9E6]/60 p-4 sm:p-6 transition-all duration-300 shadow-xs hover:shadow-md">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-8 items-center">
                {/* Image Column */}
                <div className="lg:col-span-5 relative aspect-[16/10] w-full rounded-xl overflow-hidden border border-[#DDE6ED]/80 shadow-inner bg-slate-100">
                  <Image
                    src={displayFeatured.image}
                    alt={displayFeatured.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    priority
                  />
                  <div className="absolute top-3 left-3 z-10 flex items-center gap-2">
                    <span className="inline-flex items-center gap-1.5 text-[10px] font-semibold text-white bg-[#071A2A]/90 backdrop-blur-md px-2.5 py-0.5 rounded-full border border-white/20 shadow-xs">
                      <Sparkles className="w-3 h-3 text-[#08A9E6]" />
                      Featured Analysis
                    </span>
                  </div>
                </div>

                {/* Content Column */}
                <div className="lg:col-span-7 flex flex-col justify-between space-y-3">
                  <div className="space-y-2">
                    <div className="flex flex-wrap items-center gap-2.5 text-[11px] text-[#5F7183]">
                      <span className="font-semibold text-[#071A2A] bg-white px-2 py-0.5 rounded-md border border-[#DDE6ED]">
                        {displayFeatured.category}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3 text-[#5F7183]" />
                        {displayFeatured.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3 text-[#5F7183]" />
                        {displayFeatured.readTime}
                      </span>
                    </div>

                    <h2
                      onClick={() => setActiveArticle(displayFeatured)}
                      className="text-lg sm:text-xl lg:text-2xl font-extrabold text-[#071A2A] font-heading group-hover:text-[#08A9E6] transition-colors cursor-pointer leading-snug"
                    >
                      {displayFeatured.title}
                    </h2>

                    <p className="text-xs sm:text-sm text-[#5F7183] leading-relaxed line-clamp-2">
                      {displayFeatured.excerpt}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1 pt-1">
                      {displayFeatured.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="text-[10px] font-medium text-[#5F7183] bg-white px-2 py-0.5 rounded-md border border-[#DDE6ED]"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Author & Action */}
                  <div className="pt-3 border-t border-[#DDE6ED] flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-full bg-[#071A2A] text-white font-bold text-[11px] flex items-center justify-center shadow-xs">
                        {displayFeatured.author.avatarInitials}
                      </div>
                      <div>
                        <p className="text-xs font-bold text-[#071A2A]">
                          {displayFeatured.author.name}
                        </p>
                        <p className="text-[10px] text-[#5F7183]">
                          {displayFeatured.author.role}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <Link
                        href={`/resources/blog/${displayFeatured.slug}`}
                        className="text-xs font-semibold text-[#5F7183] hover:text-[#071A2A] hidden sm:inline"
                      >
                        Direct Link
                      </Link>
                      <button
                        onClick={() => setActiveArticle(displayFeatured)}
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-[#08A9E6] hover:text-[#078FCC] transition-colors group/btn"
                      >
                        <span>Read Analysis</span>
                        <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Slide 2: Articles Library & Interactive Slider Grid */}
      <section className="h-screen h-[100dvh] min-h-screen min-h-[100dvh] w-full snap-start snap-always flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 pt-18 sm:pt-22 pb-6 relative z-10 overflow-y-auto sm:overflow-visible bg-white border-b border-[#DDE6ED]">
        <div className="my-auto w-full max-w-7xl mx-auto space-y-5">
          {/* Section Header with Carousel Controls */}
          <div className="flex items-center justify-between border-b border-[#DDE6ED] pb-4">
            <div className="flex items-center gap-3">
              <BookOpen className="w-5 h-5 text-[#08A9E6]" />
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-[#071A2A] font-heading">
                  {selectedCategory === "all"
                    ? "Operational Insights Library"
                    : `${blogCategories.find((c) => c.slug === selectedCategory)?.name || "Filtered"} Library`}
                </h3>
                <p className="text-xs text-[#5F7183]">
                  Showing {gridArticles.length} published blueprints and benchmark reports.
                </p>
              </div>
            </div>

            {/* Pagination Controls */}
            {totalPages > 1 && (
              <div className="flex items-center gap-2">
                <button
                  onClick={handlePrevPage}
                  disabled={currentPage === 0}
                  className="w-8 h-8 rounded-full border border-[#DDE6ED] flex items-center justify-center text-[#071A2A] hover:border-[#08A9E6] hover:text-[#08A9E6] disabled:opacity-30 disabled:hover:border-[#DDE6ED] disabled:hover:text-[#071A2A] transition-colors"
                  aria-label="Previous articles"
                >
                  <ChevronRight className="w-4 h-4 rotate-180" />
                </button>
                <div className="flex items-center gap-1 px-1">
                  {Array.from({ length: totalPages }).map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setCurrentPage(i)}
                      className={`h-2 rounded-full transition-all duration-200 ${
                        currentPage === i ? "w-6 bg-[#08A9E6]" : "w-2 bg-[#DDE6ED] hover:bg-[#5F7183]"
                      }`}
                      aria-label={`Go to page ${i + 1}`}
                    />
                  ))}
                </div>
                <button
                  onClick={handleNextPage}
                  disabled={currentPage >= totalPages - 1}
                  className="w-8 h-8 rounded-full border border-[#DDE6ED] flex items-center justify-center text-[#071A2A] hover:border-[#08A9E6] hover:text-[#08A9E6] disabled:opacity-30 disabled:hover:border-[#DDE6ED] disabled:hover:text-[#071A2A] transition-colors"
                  aria-label="Next articles"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            )}
          </div>

          {gridArticles.length === 0 ? (
            <div className="py-12 text-center rounded-2xl bg-[#F7FAFC] border border-[#DDE6ED] space-y-3">
              <BookOpen className="w-10 h-10 text-[#5F7183] mx-auto opacity-40" />
              <h4 className="text-base font-bold text-[#071A2A]">
                No articles match your criteria
              </h4>
              <p className="text-xs text-[#5F7183] max-w-sm mx-auto">
                Try adjusting your category filter or search term to discover relevant operational analysis.
              </p>
              <button
                onClick={() => {
                  setSelectedCategory("all");
                  setSearchQuery("");
                }}
                className="text-xs font-bold text-[#08A9E6] hover:underline pt-1 inline-block"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {paginatedArticles.map((article) => (
                <article
                  key={article.id}
                  onClick={() => setActiveArticle(article)}
                  className="group bg-[#F7FAFC] hover:bg-white rounded-2xl border border-[#DDE6ED] hover:border-[#08A9E6]/60 hover:shadow-lg transition-all duration-300 flex flex-col justify-between overflow-hidden cursor-pointer"
                >
                  <div>
                    {/* Card Thumbnail */}
                    <div className="relative aspect-[16/10] w-full bg-slate-100 overflow-hidden border-b border-[#DDE6ED]">
                      <Image
                        src={article.image}
                        alt={article.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-2.5 left-2.5 z-10">
                        <span className="text-[10px] font-semibold text-[#071A2A] bg-white/95 backdrop-blur-sm px-2.5 py-0.5 rounded-md border border-[#DDE6ED] shadow-xs">
                          {article.category}
                        </span>
                      </div>
                    </div>

                    {/* Card Body */}
                    <div className="p-4 sm:p-5 space-y-2.5">
                      {/* Meta Row */}
                      <div className="flex items-center gap-2.5 text-[11px] text-[#5F7183]">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3 h-3 text-[#5F7183]" />
                          {article.date}
                        </span>
                        <span>•</span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3 text-[#5F7183]" />
                          {article.readTime}
                        </span>
                      </div>

                      {/* Title */}
                      <h4 className="text-sm sm:text-base font-bold text-[#071A2A] font-heading group-hover:text-[#08A9E6] transition-colors line-clamp-2 leading-snug">
                        {article.title}
                      </h4>

                      {/* Excerpt */}
                      <p className="text-xs text-[#5F7183] line-clamp-2 leading-relaxed">
                        {article.excerpt}
                      </p>
                    </div>
                  </div>

                  {/* Card Footer */}
                  <div className="px-4 pb-4 sm:px-5 sm:pb-5 pt-2.5 border-t border-[#DDE6ED]/60 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-[#071A2A] text-white font-bold text-[9px] flex items-center justify-center">
                        {article.author.avatarInitials}
                      </div>
                      <div className="truncate max-w-[110px]">
                        <p className="text-[11px] font-bold text-[#071A2A] truncate">
                          {article.author.name}
                        </p>
                      </div>
                    </div>

                    <span className="inline-flex items-center gap-1 text-xs font-bold text-[#08A9E6] group-hover:text-[#078FCC]">
                      <span>Read</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Slide 3: Executive Operational Briefings & Subscription */}
      <section className="h-screen h-[100dvh] min-h-screen min-h-[100dvh] w-full snap-start snap-always flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 pt-18 sm:pt-22 pb-6 relative z-10 overflow-y-auto sm:overflow-visible bg-[#F7FAFC] border-b border-[#DDE6ED]">
        <div className="my-auto w-full max-w-5xl mx-auto space-y-6">
          <div className="p-6 sm:p-8 rounded-3xl bg-white border border-[#DDE6ED] shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2 text-center md:text-left max-w-lg">
              <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#071A2A] bg-[#F7FAFC] px-3 py-1 rounded-full border border-[#DDE6ED]">
                <Mail className="w-3.5 h-3.5 text-[#08A9E6]" />
                Executive Operational Briefings
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-[#071A2A] font-heading">
                Receive Quarterly Outsourcing & Cost Benchmarks
              </h3>
              <p className="text-xs sm:text-sm text-[#5F7183] leading-relaxed">
                Curated analysis on North American staffing wage rates, SLA governance frameworks, and automated tooling stacks.
              </p>
            </div>

            <div className="w-full md:w-auto shrink-0 space-y-2">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  alert("Thank you for subscribing to Virtual Stack Operational Briefings.");
                }}
                className="flex flex-col sm:flex-row gap-2"
              >
                <input
                  type="email"
                  required
                  placeholder="Enter work email..."
                  className="px-4 py-2 rounded-xl border border-[#DDE6ED] text-xs text-[#071A2A] placeholder-[#5F7183] w-full sm:w-64 outline-none focus:border-[#08A9E6] bg-[#F7FAFC]"
                />
                <button
                  type="submit"
                  className="bg-[#08A9E6] hover:bg-[#078FCC] text-white text-xs font-semibold px-5 py-2 rounded-xl transition-colors shrink-0"
                >
                  Subscribe Free
                </button>
              </form>
              <p className="text-[10px] text-[#5F7183] text-center md:text-left">
                Strictly executive research. Zero spam. Unsubscribe anytime.
              </p>
            </div>
          </div>

          {/* 3 Executive Pillars Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-5 rounded-2xl bg-white border border-[#DDE6ED] space-y-1.5">
              <div className="text-xl font-extrabold text-[#08A9E6] font-heading">50–65%</div>
              <h4 className="text-xs font-bold text-[#071A2A]">Direct Overhead Savings</h4>
              <p className="text-[11px] text-[#5F7183] leading-relaxed">
                Compared to fully-burdened domestic hiring with zero compromise on execution quality.
              </p>
            </div>
            <div className="p-5 rounded-2xl bg-white border border-[#DDE6ED] space-y-1.5">
              <div className="text-xl font-extrabold text-[#08A9E6] font-heading">14 Days</div>
              <h4 className="text-xs font-bold text-[#071A2A]">SOP Shadow to Live Flight</h4>
              <p className="text-[11px] text-[#5F7183] leading-relaxed">
                Structured knowledge transfer and sandbox certification before live deployment.
              </p>
            </div>
            <div className="p-5 rounded-2xl bg-white border border-[#DDE6ED] space-y-1.5">
              <div className="text-xl font-extrabold text-[#08A9E6] font-heading">SOC-Grade</div>
              <h4 className="text-xs font-bold text-[#071A2A]">Perimeter & Cloud Security</h4>
              <p className="text-[11px] text-[#5F7183] leading-relaxed">
                Biometric building access, disabled USB workstations, and enterprise VPN controls.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Full Article Reader Modal */}
      {activeArticle && (
        <div
          className="fixed inset-0 z-50 bg-[#071A2A]/70 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 overflow-y-auto"
          onClick={() => setActiveArticle(null)}
        >
          <div
            className="relative w-full max-w-3xl bg-white rounded-3xl border border-[#DDE6ED] shadow-2xl overflow-hidden my-auto max-h-[90vh] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header Bar */}
            <div className="px-6 py-4 border-b border-[#DDE6ED] bg-[#F7FAFC] flex items-center justify-between shrink-0">
              <div className="flex items-center gap-2">
                <span className="text-xs font-semibold text-[#071A2A] bg-white px-2.5 py-0.5 rounded-md border border-[#DDE6ED]">
                  {activeArticle.category}
                </span>
                <span className="text-xs text-[#5F7183]">•</span>
                <span className="text-xs text-[#5F7183]">{activeArticle.readTime}</span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => handleShare(activeArticle)}
                  className="p-1.5 rounded-lg text-[#5F7183] hover:text-[#071A2A] hover:bg-white border border-transparent hover:border-[#DDE6ED] transition-colors"
                  title="Copy link to article"
                >
                  <Share2 className="w-4 h-4" />
                </button>
                {copiedSlug && (
                  <span className="text-[10px] font-bold text-[#12C98A]">Copied!</span>
                )}
                <button
                  onClick={() => setActiveArticle(null)}
                  className="p-1.5 rounded-lg text-[#5F7183] hover:text-[#071A2A] hover:bg-white border border-transparent hover:border-[#DDE6ED] transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Modal Scrollable Content */}
            <div className="p-6 sm:p-8 lg:p-10 overflow-y-auto space-y-6">
              {/* Article Hero Image */}
              <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden border border-[#DDE6ED] shadow-sm">
                <Image
                  src={activeArticle.image}
                  alt={activeArticle.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 800px"
                  className="object-cover"
                  priority
                />
              </div>

              {/* Title & Excerpt */}
              <div className="space-y-3">
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-[#071A2A] font-heading leading-tight">
                  {activeArticle.title}
                </h2>
                <p className="text-sm sm:text-base text-[#5F7183] leading-relaxed font-medium">
                  {activeArticle.excerpt}
                </p>
              </div>

              {/* Author Strip */}
              <div className="p-4 rounded-2xl bg-[#F7FAFC] border border-[#DDE6ED] flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#071A2A] text-white font-bold text-xs flex items-center justify-center">
                    {activeArticle.author.avatarInitials}
                  </div>
                  <div>
                    <p className="text-xs font-bold text-[#071A2A]">
                      {activeArticle.author.name}
                    </p>
                    <p className="text-[11px] text-[#5F7183]">
                      {activeArticle.author.role} • Virtual Stack Research
                    </p>
                  </div>
                </div>
                <span className="text-xs text-[#5F7183] hidden sm:inline">
                  Published {activeArticle.date}
                </span>
              </div>

              {/* Key Takeaways Box */}
              <div className="p-5 sm:p-6 rounded-2xl bg-[#EBF7FD]/60 border border-[#08A9E6]/30 space-y-3">
                <div className="flex items-center gap-2 text-xs font-bold text-[#071A2A]">
                  <CheckCircle2 className="w-4 h-4 text-[#08A9E6]" />
                  Executive Takeaways & Benchmarks
                </div>
                <ul className="space-y-2.5">
                  {activeArticle.content.keyTakeaways.map((takeaway, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#0B1724]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#08A9E6] shrink-0 mt-2" />
                      <span className="leading-relaxed">{takeaway}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Article Body Sections */}
              <div className="space-y-6 pt-2">
                <div className="text-sm text-[#0B1724] leading-relaxed">
                  {activeArticle.content.introduction}
                </div>

                {activeArticle.content.sections.map((sec, idx) => (
                  <div key={idx} className="space-y-2.5">
                    <h3 className="text-lg font-bold text-[#071A2A] font-heading">
                      {sec.heading}
                    </h3>
                    <p className="text-sm text-[#5F7183] leading-relaxed">
                      {sec.body}
                    </p>
                  </div>
                ))}

                <div className="p-4 rounded-xl bg-[#F7FAFC] border-l-4 border-[#08A9E6] text-xs sm:text-sm text-[#071A2A] font-medium leading-relaxed">
                  {activeArticle.content.conclusion}
                </div>
              </div>

              {/* Action Bar */}
              <div className="pt-6 border-t border-[#DDE6ED] flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex flex-wrap gap-1.5">
                  {activeArticle.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[11px] font-semibold text-[#5F7183] bg-[#F7FAFC] px-2.5 py-1 rounded-md border border-[#DDE6ED]"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <Link
                    href="/book-a-consultation"
                    onClick={() => setActiveArticle(null)}
                    className="flex-1 sm:flex-none text-center bg-[#08A9E6] hover:bg-[#078FCC] text-white text-xs font-bold px-5 py-2.5 rounded-xl transition-colors shadow-sm"
                  >
                    Schedule Operations Audit
                  </Link>
                  <button
                    onClick={() => setActiveArticle(null)}
                    className="flex-1 sm:flex-none bg-[#F7FAFC] hover:bg-[#DDE6ED] text-[#071A2A] text-xs font-bold px-4 py-2.5 rounded-xl transition-colors border border-[#DDE6ED]"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
