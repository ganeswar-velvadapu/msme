"use client";
import { useState, useMemo } from "react";
import { Search } from "lucide-react";

const BooksClient = ({ books }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredBooks = useMemo(() => {
    if (!Array.isArray(books)) return [];
    return books.filter((book) =>
      book?.book_name?.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [books, searchTerm]);

  return (
    <div className="max-w-7xl mx-auto">
      <div className="mb-12">
        <h1 className="text-3xl font-bold text-black mb-6">Books</h1>
        <p className="text-gray-600 max-w-2xl">
          A collection of books authored and edited by our faculty members.
        </p>
      </div>

      {/* Search Bar */}
      <div className="relative max-w-md mb-12">
        <Search
          className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
          size={18}
        />
        <input
          type="text"
          placeholder="Search books by title..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="pl-10 pr-4 py-2 w-full rounded-md border border-gray-200 focus:outline-none focus:ring-1 focus:ring-black bg-white text-black placeholder-gray-400 transition-all"
        />
      </div>

      {/* Books Grid */}
      {filteredBooks.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredBooks.map((book) => (
            <div
              key={book.id}
              className="group bg-white border border-gray-100 rounded-lg overflow-hidden flex flex-col hover:border-gray-300 transition-all duration-300"
            >
              {/* Book Cover */}
              <div className="aspect-[3/4] relative bg-gray-50 overflow-hidden">
                <img
                  src={book?.book_cover_page?.url || "/api/placeholder/400/600"}
                  alt={book.book_name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Book Info */}
              <div className="p-5 flex flex-col flex-grow">
                <h3 className="text-lg font-bold text-black mb-2 min-h-[1.5rem]">
                  {book.book_name}
                </h3>
                
                {book.book_associated_faculty && book.book_associated_faculty.length > 0 && (
                  <div className="mt-auto">
                    <p className="text-xs uppercase tracking-wider text-gray-400 font-semibold mb-2">
                      Associated Faculty
                    </p>
                    <div className="flex flex-wrap gap-1">
                      {book.book_associated_faculty.map((faculty, idx) => (
                        <span
                          key={faculty.id || idx}
                          className="text-sm text-gray-600"
                        >
                          {faculty.faculty_name}{idx < book.book_associated_faculty.length - 1 ? "," : ""}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-20 bg-gray-50 rounded-xl border border-dashed border-gray-200">
          <p className="text-gray-500">No books found matching your search.</p>
        </div>
      )}
    </div>
  );
};

export default BooksClient;