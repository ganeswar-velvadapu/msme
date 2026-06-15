"use client";

import Link from "next/link";
import { ArrowLeft, Calendar, Tag, ExternalLink } from "lucide-react";

export default function IndividualNewClient({ newsItem }) {
  if (!newsItem) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">News item not found</h1>
        <Link href="/news" className="text-blue-600 hover:underline inline-flex items-center gap-2">
          <ArrowLeft size={16} /> Back to News
        </Link>
      </div>
    );
  }

  const formatDate = (dateString) => {
    if (!dateString) return "";
    const newsDate = new Date(dateString);
    return newsDate.toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    });
  };

  const getImageUrl = (news) => {
    if (news.news_image && news.news_image.url) {
      return news.news_image.url;
    }
    return "/api/placeholder/800/600";
  };

  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      {/* Back button */}
      <Link
        href="/news"
        className="inline-flex items-center gap-2 text-gray-600 hover:text-black mb-8 transition-colors group text-sm font-semibold cursor-pointer"
      >
        <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
        Back to News
      </Link>

      <article className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
        {/* Title & Metadata Section (at the top) */}
        <div className="p-6 md:p-10 pb-0">
          {/* Tag and Date */}
          <div className="flex flex-wrap items-center gap-4 mb-4">
            <span className="inline-flex items-center gap-1.5 text-sm text-gray-500">
              <Calendar size={14} />
              {formatDate(newsItem.news_date)}
            </span>
          </div>

          {/* Title */}
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
            {newsItem.news_title}
          </h1>
        </div>

        {/* Poster Image */}
        <div className="w-full bg-gray-50 flex items-center justify-center border-y border-gray-100 max-h-[60vh] overflow-hidden">
          <img
            src={getImageUrl(newsItem)}
            alt={newsItem.news_title}
            className="max-w-full h-auto max-h-[60vh] object-contain"
          />
        </div>

        {/* Content Section (at the bottom) */}
        <div className="p-6 md:p-10 pt-6">
          {/* Descriptions */}
          <div className="space-y-6 text-gray-700 leading-relaxed text-base md:text-lg">
            {newsItem.news_short_description && (
              <p className="font-semibold text-black border-l-4 border-gray-300 pl-4">
                {newsItem.news_short_description}
              </p>
            )}
            {newsItem.news_read_more_description && (
              <div className="whitespace-pre-line text-gray-600">
                {newsItem.news_read_more_description}
              </div>
            )}
          </div>

          {/* External Link */}
          {newsItem.news_web_page && (
            <div className="mt-10 pt-6 border-t border-gray-100">
              <a
                href={newsItem.news_web_page}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-black hover:bg-gray-800 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200"
              >
                Visit Website
                <ExternalLink size={16} />
              </a>
            </div>
          )}
        </div>
      </article>
    </div>
  );
}
