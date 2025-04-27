"use client";

import Link from "next/link";

export default function MaterialScience() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-16">

      <div className="bg-white rounded-lg border border-gray-200 p-8 shadow-sm">
        <p className="text-gray-800 leading-relaxed mb-8 text-xl">
          Micro, Small and Medium Enterprises (MSMEs) are the backbone of the Indian economy.
          They contribute significantly to the country&apos; s GDP, exports, and employment generation.
        </p>

        <p className="text-gray-800 leading-relaxed mb-8 text-lg">
          This field covers different classes of materials, including metals, ceramics, polymers, and composites:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="group bg-gray-50 p-6 rounded-lg border border-gray-100 hover:shadow-md transition-all">
            <div className="flex items-center mb-4">

              <h3 className="font-medium text-gray-900 text-xl">Metals</h3>
            </div>
            <p className="text-gray-600">Strong, conductive, and widely used in construction, automotive, and aerospace industries.</p>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-6">
          <p className="text-gray-800 leading-relaxed">
            Advances in Material Science contribute to innovations in nanotechnology, biomaterials, and sustainable materials,
            impacting various industries and improving everyday life.
          </p>
        </div>
      </div>

      <div className="mt-8 text-center">
        <Link href="/about" className="inline-flex items-center text-gray-900 font-medium hover:text-gray-600 transition-colors group">
          Learn more about Material Science & Metallurgical Engineering
          <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
          </svg>
        </Link>
      </div>
    </section>
  );
}
