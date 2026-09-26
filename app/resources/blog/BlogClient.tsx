"use client";

import React, { useState, useMemo, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Search,
  Calendar,
  Clock,
  ArrowRight,
  BookOpen,
  X,
  ChevronRight,
} from "lucide-react";
import { Article, blogCategories } from "@/lib/data/articles";

interface BlogClientProps {
  articles: Article[];
}

export default function BlogClient({ articles }: BlogClientProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [itemsPerPage, setItemsPerPage] = useState<number>(3);

  // Resize handler for responsive carousel items per page
  useEffect(() => {
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

  // Reset page when category or search changes
  useEffect(() => {
    setCurrentPage(0);
  }, [selectedCategory, searchQuery]);

  const totalPages = Math.max(1, Math.ceil(filteredArticles.length / itemsPerPage));
  const paginatedArticles = useMemo(() => {
    const start = currentPage * itemsPerPage;
    return filteredArticles.slice(start, start + itemsPerPage);
  }, [filteredArticles, currentPage, itemsPerPage]);

  const handlePrevPage = () => {
    setCurrentPage((prev) => Math.max(0, prev - 1));
  };

  const handleNextPage = () => {
    setCurrentPage((prev) => Math.min(totalPages - 1, prev + 1));
  };

  return (
    <section className="h-screen h-[100dvh] min-h-screen min-h-[100dvh] w-full snap-start snap-always flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 pt-18 sm:pt-22 pb-6 relative z-10 overflow-y-auto sm:overflow-visible bg-white border-b border-[#DDE6ED]">
      <div className="my-auto w-full max-w-7xl mx-auto space-y-4">
        {/* Category Pills & Search Toolbar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-3 border-b border-[#DDE6ED] pb-3">
          <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto pb-1 md:pb-0 scrollbar-none">
            {blogCategories.map((cat) => {
              const isActive = selectedCategory === cat.slug;
              return (
                <button
                  key={cat.slug}
                  onClick={() => setSelectedCategory(cat.slug)}
                  className={`text-xs font-semibold px-3.5 py-1.5 rounded-full whitespace-nowrap transition-all duration-200 cursor-pointer ${
                    isActive
                      ? "bg-[#071A2A] text-white shadow-xs"
                      : "bg-[#F7FAFC] hover:bg-[#EBF7FD] text-[#5F7183] hover:text-[#08A9E6] border border-[#DDE6ED]"
                  }`}
                >
                  {cat.name}
                </button>
              );
            })}
          </div>

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

        {/* Section Header with Carousel Controls */}
        <div className="flex items-center justify-between border-b border-[#DDE6ED] pb-3">
          <div className="flex items-center gap-2.5">
            <BookOpen className="w-5 h-5 text-[#08A9E6]" />
            <div>
              <h2 className="text-lg sm:text-xl font-bold text-[#071A2A] font-heading">
                {selectedCategory === "all"
                  ? "Operational Insights Library"
                  : `${blogCategories.find((c) => c.slug === selectedCategory)?.name || "Filtered"} Library`}
              </h2>
              <p className="text-xs text-[#5F7183]">
                Showing {filteredArticles.length} published blueprints and benchmark reports.
              </p>
            </div>
          </div>

          {totalPages > 1 && (
            <div className="flex items-center gap-2">
              <button
                onClick={handlePrevPage}
                disabled={currentPage === 0}
                className="w-8 h-8 rounded-full border border-[#DDE6ED] flex items-center justify-center text-[#071A2A] hover:border-[#08A9E6] hover:text-[#08A9E6] disabled:opacity-30 disabled:cursor-not-allowed transition-colors cursor-pointer"
                aria-label="Previous articles"
              >
                <ChevronRight className="w-4 h-4 rotate-180" />
              </button>
              <div className="flex items-center gap-1 px-1">
                {Array.from({ length: totalPages }).map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentPage(i)}
                    className={`h-2 rounded-full transition-all duration-200 cursor-pointer ${
                      currentPage === i ? "w-6 bg-[#08A9E6]" : "w-2 bg-[#DDE6ED] hover:bg-[#5F7183]"
                    }`}
                    aria-label={`Go to page ${i + 1}`}
                  />
                ))}
              </div>
              <button
                onClick={handleNextPage}
                disabled={currentPage >= totalPages - 1}
                className="w-8 h-8 rounded-full border border-[#DDE6ED] flex items-center justify-center text-[#071A2A] hover:border-[#08A9E6] hover:text-[#08A9E6] disabled:opacity-30 disabled:cursor-not-allowed transition-colors cursor-pointer"
                aria-label="Next articles"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>

        {filteredArticles.length === 0 ? (
          <div className="py-12 text-center rounded-2xl bg-[#F7FAFC] border border-[#DDE6ED] space-y-3">
            <BookOpen className="w-10 h-10 text-[#5F7183] mx-auto opacity-40" />
            <h3 className="text-base font-bold text-[#071A2A]">
              No articles match your criteria
            </h3>
            <p className="text-xs text-[#5F7183] max-w-sm mx-auto">
              Try adjusting your category filter or search term to discover relevant operational analysis.
            </p>
            <button
              onClick={() => {
                setSelectedCategory("all");
                setSearchQuery("");
              }}
              className="text-xs font-bold text-[#08A9E6] hover:underline pt-1 inline-block cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {paginatedArticles.map((article) => (
              <article
                key={article.id}
                className="group bg-[#F7FAFC] hover:bg-white rounded-2xl border border-[#DDE6ED] hover:border-[#08A9E6]/60 hover:shadow-lg transition-all duration-300 flex flex-col justify-between overflow-hidden"
              >
                <Link href={`/resources/blog/${article.slug}`} className="block flex-1 flex flex-col justify-between">
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

                      <h3 className="text-sm sm:text-base font-bold text-[#071A2A] font-heading group-hover:text-[#08A9E6] transition-colors line-clamp-2 leading-snug">
                        {article.title}
                      </h3>

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
                </Link>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
