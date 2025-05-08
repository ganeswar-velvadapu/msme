"use client";
import { useState } from "react";

export default function NewsClient({ newsItems }) {
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
      <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 p-4" onClick={closeNewsModal}>
        <div
          className="bg-white rounded-xl w-full max-w-3xl max-h-[90vh] overflow-y-auto shadow-2xl transform transition-all"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="relative">
            <div className="h-64 w-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-t-xl overflow-hidden">
              <img
                src={getImageUrl(selectedNews)}
                alt={selectedNews.news_title}
                className="w-full h-full object-cover object-center opacity-60"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <h2 className="text-3xl font-bold text-white px-6 text-center drop-shadow-lg">
                  {selectedNews.news_title}
                </h2>
              </div>
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
              <span className="text-sm font-medium px-3 py-1 rounded-full bg-blue-100 text-blue-800 border border-blue-200">
                {selectedNews.news_tag}
              </span>
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
                  className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg transition-colors"
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

  return (
    <div className="w-full">
     

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {newsItems.map((news, index) => (
          <div
            key={index}
            className="news-card bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg border border-gray-100 hover:border-blue-200 transition-all duration-300 cursor-pointer transform hover:-translate-y-1"
            onClick={() => openNewsModal(news)}
          >
            <div className="h-56 relative overflow-hidden">
              <img
                src={getImageUrl(news)}
                alt={news.news_title}
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
              />
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute top-3 left-3">
                <span className="text-xs font-medium px-3 py-1 rounded-full bg-blue-100 text-blue-800 border border-blue-200">
                  {news.news_tag}
                </span>
              </div>
              <div className="absolute bottom-3 left-3 text-white text-sm flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                {formatDate(news.news_date)}
              </div>
            </div>

            <div className="p-4">
              <h3 className="font-bold text-lg text-gray-800 mb-2 line-clamp-2 hover:text-blue-700 transition-colors duration-200">
                {news.news_title}
              </h3>

              <p className="text-gray-600 text-sm line-clamp-3 mb-4">
                {news.news_short_description}
              </p>

              <button
                className="text-sm text-blue-600 hover:text-blue-800 flex items-center transition-colors duration-200 group"
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
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .news-card {
          animation: fadeIn 0.5s ease-out;
        }
        
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