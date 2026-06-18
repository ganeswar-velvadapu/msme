"use client";
import { useState } from "react";
import Link from "next/link";
import { FileText } from "lucide-react";

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
      <div className="relative group w-full max-w-sm mx-auto px-4">
        <Link
          href={`/news/${news.id}`}
          className="block bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl border border-gray-100 transition-all duration-300 transform hover:-translate-y-1 cursor-pointer"
        >
          <div className="h-[250px] relative overflow-hidden bg-gray-50 flex items-center justify-center">
            {isImageFile(news.news_image) ? (
              <img
                src={getImageUrl(news)}
                alt={news.news_title}
                className="max-w-full max-h-full object-contain transition-transform duration-500 hover:scale-105"
              />
            ) : (
              <div className="w-full h-full bg-slate-50 flex flex-col items-center justify-center text-slate-400 p-4">
                <FileText size={48} className="text-red-500 mb-2" />
                <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">Document</span>
                {news.news_image?.filename && (
                  <span className="text-[10px] text-slate-400 truncate max-w-[80%] mt-1">{news.news_image.filename}</span>
                )}
              </div>
            )}
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
          className="absolute -left-6 lg:-left-12 top-1/2 -translate-y-1/2 bg-white shadow-xl rounded-full p-3 hover:bg-gray-50 hover:scale-110 transition-all z-10 border border-gray-100 cursor-pointer"
          aria-label="Previous news"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          onClick={nextSlide}
          className="absolute -right-6 lg:-right-12 top-1/2 -translate-y-1/2 bg-white shadow-xl rounded-full p-3 hover:bg-gray-50 hover:scale-110 transition-all z-10 border border-gray-100 cursor-pointer"
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
        {newsItems.map((news, index) => (
          <Link
            key={index}
            href={`/news/${news.id}`}
            className="news-card bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg border border-gray-100 hover:border-indigo-200 transition-all duration-300 transform hover:-translate-y-1 block cursor-pointer"
          >
            <div className="h-[200px] relative overflow-hidden bg-gray-50 flex items-center justify-center">
              {isImageFile(news.news_image) ? (
                <img
                  src={getImageUrl(news)}
                  alt={news.news_title}
                  className="max-w-full max-h-full object-contain transition-transform duration-500 hover:scale-110"
                />
              ) : (
                <div className="w-full h-full bg-slate-50 flex flex-col items-center justify-center text-slate-400 p-4">
                  <FileText size={48} className="text-red-500 mb-2" />
                  <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">Document</span>
                  {news.news_image?.filename && (
                    <span className="text-[10px] text-slate-400 truncate max-w-[80%] mt-1">{news.news_image.filename}</span>
                  )}
                </div>
              )}
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

              <div
                className="text-sm text-slate-800 font-bold hover:text-black flex items-center transition-colors duration-200 group"
              >
                Read more
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </Link>
        ))}
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