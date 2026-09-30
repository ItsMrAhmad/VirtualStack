"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { Search, Calendar, Clock, ArrowRight, BookOpen, X } from "lucide-react";
import { Article, blogCategories } from "@/lib/data/articles";

interface BlogClientProps {
  articles: Article[];
}

export default function BlogClient({ articles }: BlogClientProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");

  // Filter articles based on category and search query. Every card is rendered
  // (no pagination) so all article links are present in the static HTML.
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

  return (
    <section className="min-h-[100dvh] md:h-[100dvh] w-full md:snap-start md:snap-always flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 py-6 sm:py-8 relative z-10 overflow-y-auto sm:overflow-visible bg-white border-b border-[#DDE6ED]">
      <div className="my-auto w-full max-w-7xl mx-auto space-y-4">
        {/* Category Pills & Search Toolbar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-3 border-b border-[#DDE6ED] pb-3">
          <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto pb-1 md:pb-0 scrollbar-none">
            {blogCategories.map((cat) => {
              const isActive = selectedCategory === cat.slug;
              return (
                <button
                  key={cat.slug}
                  type="button"
                  aria-pressed={isActive}
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
            <Search className="w-3.5 h-3.5 text-[#5F7183] absolute left-3 top-1/2 -translate-y-1/2" aria-hidden="true" />
            <label htmlFor="blog-search" className="sr-only">
              Search articles
            </label>
            <input
              id="blog-search"
              type="search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search insights..."
              className="w-full pl-8 pr-7 py-1.5 rounded-full text-xs bg-white border border-[#DDE6ED] text-[#071A2A] placeholder-[#5F7183] focus:outline-none focus:border-[#08A9E6] transition-colors"
            />
            {searchQuery && (
              <button
                type="button"
                aria-label="Clear search"
                onClick={() => setSearchQuery("")}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-[#5F7183] hover:text-[#071A2A]"
              >
                <X className="w-3 h-3" />
              </button>
            )}
          </div>
        </div>

        {/* Section Header */}
        <div className="flex items-center gap-2.5 border-b border-[#DDE6ED] pb-3">
          <BookOpen className="w-5 h-5 text-[#08A9E6]" aria-hidden="true" />
          <div>
            <h2 className="text-lg sm:text-xl font-bold text-[#071A2A] font-heading">
              {selectedCategory === "all"
                ? "Operational Insights Library"
                : `${blogCategories.find((c) => c.slug === selectedCategory)?.name || "Filtered"} Library`}
            </h2>
            <p className="text-xs text-[#5F7183]" aria-live="polite">
              Showing {filteredArticles.length} published blueprints and benchmark reports.
            </p>
          </div>
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
            {filteredArticles.map((article) => (
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
