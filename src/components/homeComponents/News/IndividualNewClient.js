"use client";

import Link from "next/link";
import { ArrowLeft, Calendar, Tag, ExternalLink, FileText } from "lucide-react";

export default function IndividualNewClient({ newsItem }) {
  const isImageFile = (mediaObj) => {
    if (!mediaObj) return false;
    if (mediaObj.mimeType && mediaObj.mimeType.startsWith("image/")) {
      return true;
    }
    if (mediaObj.url) {
      const url = mediaObj.url.toLowerCase();
      return url.endsWith(".png") || url.endsWith(".jpg") || url.endsWith(".jpeg") || url.endsWith(".webp") || url.endsWith(".gif") || url.endsWith(".svg");
    }
    return false;
  };

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

        {/* Poster Image / Document Preview */}
        {newsItem.news_image && newsItem.news_image.url && (
          <div className="w-full bg-gray-50 flex flex-col items-center justify-center border-y border-gray-100 min-h-[30vh] max-h-[75vh] overflow-hidden relative">
            {isImageFile(newsItem.news_image) ? (
              <img
                src={getImageUrl(newsItem)}
                alt={newsItem.news_title}
                className="max-w-full h-auto max-h-[60vh] object-contain"
              />
            ) : newsItem.news_image.url.toLowerCase().endsWith(".pdf") || newsItem.news_image.mimeType === "application/pdf" ? (
              <iframe
                src={`${newsItem.news_image.url}#toolbar=0`}
                title={newsItem.news_title}
                className="w-full h-[60vh] border-none"
              />
            ) : (
              <div className="py-12 px-6 flex flex-col items-center justify-center text-center max-w-md">
                <FileText size={64} className="text-red-500 mb-4 animate-pulse" />
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {newsItem.news_image.filename || "Attached Document"}
                </h3>
                <p className="text-sm text-gray-500 mb-6">
                  This document type cannot be previewed directly in the browser.
                </p>
                <a
                  href={newsItem.news_image.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-black hover:bg-gray-800 text-white font-medium py-2.5 px-6 rounded-lg transition-colors duration-200 cursor-pointer"
                >
                  Download Document
                </a>
              </div>
            )}
          </div>
        )}

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

          {/* Attached Document Download Bar */}
          {newsItem.news_image && newsItem.news_image.url && !isImageFile(newsItem.news_image) && (
            <div className="mt-8 p-4 bg-slate-50 border border-slate-100 rounded-xl flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3 w-full">
                <FileText className="h-8 w-8 text-red-500 shrink-0" />
                <div className="text-left overflow-hidden w-full">
                  <h4 className="font-semibold text-slate-900 text-sm truncate max-w-[80%]">
                    {newsItem.news_image.filename || "Attached Document"}
                  </h4>
                  <p className="text-xs text-slate-500">
                    {newsItem.news_image.mimeType === "application/pdf" ? "PDF Document" : "Attachment"}{" "}
                    {newsItem.news_image.filesize ? `• ${(newsItem.news_image.filesize / 1024 / 1024).toFixed(2)} MB` : ""}
                  </p>
                </div>
              </div>
              <a
                href={newsItem.news_image.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto bg-black hover:bg-gray-800 text-white text-xs font-semibold py-2.5 px-4 rounded-lg transition-colors flex items-center justify-center gap-1.5 shrink-0 cursor-pointer"
              >
                Download File
              </a>
            </div>
          )}

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
