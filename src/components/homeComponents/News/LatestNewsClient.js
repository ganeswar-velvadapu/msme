"use client";
import { useState } from "react";
import Link from "next/link";

export default function NewsClient({ newsItems, isHome }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Format date function
  const formatDate = (dateString) => {
    if (!dateString) return "";
    const newsDate = new Date(dateString);
    return newsDate.toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    });
  };

  // Get image URL or use placeholder
  const getImageUrl = (news) => {
    if (news.news_image && news.news_image.url) {
      return news.news_image.url;
    }
    return "/api/placeholder/400/400";
  };

  const nextSlide = (e) => {
    if (e) e.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % newsItems.length);
  };

  const prevSlide = (e) => {
    if (e) e.stopPropagation();
    setCurrentIndex((prev) => (prev - 1 + newsItems.length) % newsItems.length);
  };

  if (isHome) {
    const news = newsItems[currentIndex];
    if (!news) return null;

    return (
      <div className="relative group w-full max-w-lg mx-auto px-4">
        <Link
          href="/news"
          className="block bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl border border-gray-100 transition-all duration-300 transform hover:-translate-y-1"
        >
          <div className="h-52 relative overflow-hidden bg-gray-50 flex items-center justify-center">
            <img
              src={getImageUrl(news)}
              alt={news.news_title}
              className="max-w-full max-h-full object-contain transition-transform duration-500 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none"></div>

            {news.news_tag && (
              <div className="absolute top-3 left-3">
                <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-black text-white uppercase tracking-wider">
                  {news.news_tag}
                </span>
              </div>
            )}

            <div className="absolute bottom-3 left-3 text-white">
              <div className="text-[11px] font-medium flex items-center opacity-90">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                {formatDate(news.news_date)}
              </div>
            </div>
          </div>

          <div className="p-6 text-center">
            <h3 className="font-bold text-lg text-gray-900 mb-3 line-clamp-2 leading-tight">
              {news.news_title}
            </h3>
            <p className="text-gray-600 text-sm line-clamp-3 leading-relaxed">
              {news.news_short_description}
            </p>
          </div>
        </Link>

        {/* Navigation Buttons */}
        <button
          onClick={prevSlide}
          className="absolute -left-6 lg:-left-12 top-1/2 -translate-y-1/2 bg-white shadow-xl rounded-full p-3 hover:bg-gray-50 hover:scale-110 transition-all z-10 border border-gray-100"
          aria-label="Previous news"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          onClick={nextSlide}
          className="absolute -right-6 lg:-right-12 top-1/2 -translate-y-1/2 bg-white shadow-xl rounded-full p-3 hover:bg-gray-50 hover:scale-110 transition-all z-10 border border-gray-100"
          aria-label="Next news"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    );
  }

  return (
    <div className="w-full">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {newsItems.map((news, index) => {
          const hasWebPage = !!news.news_web_page;
          return (
            <div
              key={index}
              className={`news-card bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg border border-gray-100 hover:border-indigo-200 transition-all duration-300 transform hover:-translate-y-1 ${
                hasWebPage ? "cursor-pointer" : ""
              }`}
              onClick={() => {
                if (hasWebPage) {
                  window.open(news.news_web_page, "_blank");
                }
              }}
            >
              <div className="h-48 relative overflow-hidden bg-gray-50 flex items-center justify-center">
                <img
                  src={getImageUrl(news)}
                  alt={news.news_title}
                  className="max-w-full max-h-full object-contain transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black/60 to-transparent"></div>
                {news.news_tag && (
                  <div className="absolute top-3 left-3">
                    <span className="text-xs font-medium px-3 py-1 rounded-full bg-black text-white">
                      {news.news_tag}
                    </span>
                  </div>
                )}
                <div className="absolute bottom-3 left-3 text-white text-sm flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  {formatDate(news.news_date)}
                </div>
              </div>

              <div className="p-4">
                <h3 className="font-bold text-lg text-gray-800 mb-2 line-clamp-2 hover:text-indigo-700 transition-colors duration-200">
                  {news.news_title}
                </h3>

                <p className="text-gray-600 text-sm line-clamp-3 mb-4">
                  {news.news_short_description}
                </p>

                {hasWebPage && (
                  <button
                    className="text-sm text-slate-800 font-bold hover:text-black flex items-center transition-colors duration-200 group"
                  >
                    Visit website
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </div>

      <style jsx>{`
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
}