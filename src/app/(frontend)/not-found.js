"use client";

import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center bg-gray-50/50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full text-center space-y-8 bg-white p-8 sm:p-10 rounded-2xl border border-gray-200/80 shadow-sm">
        
        {/* Error Badge */}
        <div className="inline-flex items-center justify-center px-4 py-1 bg-gray-100 text-gray-800 text-xs font-mono font-semibold rounded-full uppercase tracking-wider">
          Error Code: 404
        </div>

        {/* Text Details */}
        <div className="space-y-3">
          <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight">
            Page Not Found
          </h1>
          <p className="text-gray-500 text-sm leading-relaxed max-w-sm mx-auto">
            Sorry, we couldn&apos;t find the page you are looking for. It might have been moved, renamed, or is temporarily unavailable.
          </p>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
          <Link
            href="/"
            className="inline-flex items-center justify-center px-5 py-2.5 bg-black text-white rounded-lg text-sm font-medium hover:bg-gray-800 transition-all duration-200 shadow-sm"
          >
            Back to Home
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-5 py-2.5 border border-gray-300 text-gray-700 bg-white rounded-lg text-sm font-medium hover:bg-gray-50 transition-all duration-200"
          >
            Contact Us
          </Link>
        </div>

        {/* Links Grid */}
        <div className="border-t border-gray-100 pt-6">
          <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-4">
            Useful Links
          </h3>
          <div className="grid grid-cols-2 gap-3 text-left">
            <Link href="/research/areas" className="text-sm text-gray-600 hover:text-black flex items-center space-x-1 group">
              <span className="text-gray-400 group-hover:text-black transition-colors">→</span>
              <span>Research Areas</span>
            </Link>
            <Link href="/people/faculty" className="text-sm text-gray-600 hover:text-black flex items-center space-x-1 group">
              <span className="text-gray-400 group-hover:text-black transition-colors">→</span>
              <span>Faculty Members</span>
            </Link>
            <Link href="/academia/programs/btech" className="text-sm text-gray-600 hover:text-black flex items-center space-x-1 group">
              <span className="text-gray-400 group-hover:text-black transition-colors">→</span>
              <span>Academic Programs</span>
            </Link>
            <Link href="/about" className="text-sm text-gray-600 hover:text-black flex items-center space-x-1 group">
              <span className="text-gray-400 group-hover:text-black transition-colors">→</span>
              <span>About Us</span>
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
