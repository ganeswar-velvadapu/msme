"use client";
import { useState } from "react";

export default function NewsClient({ newsItems, isHome }) {
  const [selectedNews, setSelectedNews] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Format date function
  const formatDate = (dateString) => {
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

  const openNewsModal = (news) => {
    setSelectedNews(news);
    setIsModalOpen(true);
  };

  const closeNewsModal = () => {
    setIsModalOpen(false);
  };

  // News Modal Component
  const NewsModal = () => {
    if (!selectedNews) return null;

    return (
      <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 backdrop-blur-md p-4 md:p-8" onClick={closeNewsModal}>
        <div
          className="bg-white rounded-2xl w-full max-w-2xl max-h-[85vh] my-8 overflow-y-auto shadow-2xl transform transition-all"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="relative">
            <div className="h-72 w-full bg-gray-100 flex items-center justify-center overflow-hidden">
              <img
                src={getImageUrl(selectedNews)}
                alt={selectedNews.news_title}
                className="max-w-full max-h-full object-contain"
              />
            </div>

            <button
              onClick={closeNewsModal}
              className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div className="p-6">
            <div className="flex items-center gap-3 mb-6">
              {selectedNews.news_tag && (
                <span className="text-xs font-semibold px-3 py-1 rounded-full bg-black text-white uppercase tracking-wider">
                  {selectedNews.news_tag}
                </span>
              )}
              <span className="text-sm text-gray-500 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                {formatDate(selectedNews.news_date)}
              </span>
            </div>

            <div className="prose max-w-none text-gray-700">
              <p className="text-lg font-medium mb-4">{selectedNews.news_short_description}</p>
              <div dangerouslySetInnerHTML={{ __html: selectedNews.news_read_more_description }} />
            </div>

            {selectedNews.news_web_page && (
              <div className="mt-8">
                <a
                  href={selectedNews.news_web_page}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-black hover:bg-gray-800 text-white py-3 px-6 rounded-lg transition-colors duration-200"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                  Visit Website
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  };

  const [currentIndex, setCurrentIndex] = useState(0);

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
        <div
          className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl border border-gray-100 transition-all duration-300 cursor-pointer transform hover:-translate-y-1"
          onClick={() => openNewsModal(news)}
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
        </div>

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

        {isModalOpen && <NewsModal />}
      </div>
    );
  }

  return (
    <div className="w-full">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {newsItems.map((news, index) => (
          <div
            key={index}
            className="news-card bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg border border-gray-100 hover:border-indigo-200 transition-all duration-300 cursor-pointer transform hover:-translate-y-1"
            onClick={() => openNewsModal(news)}
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

              <button
                className="text-sm text-slate-800 font-bold hover:text-black flex items-center transition-colors duration-200 group"
              >
                Read more
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        ))}
      </div>

      {isModalOpen && <NewsModal />}

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