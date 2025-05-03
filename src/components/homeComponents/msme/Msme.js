"use client";

import Link from "next/link";

export default function MaterialScience() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-16">

      <div className="mt-12 bg-white rounded-lg border border-gray-200 p-8 shadow-sm">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          Welcome to the Materials Science and Metallurgical Engineering (MSME) Department at IIT Hyderabad
        </h2>
        <p className="text-gray-800 leading-relaxed mb-6 text-lg">
          At MSME, we believe in engineering materials from their building blocks (atoms) to practical, real-world applications. The core of our research is built on a materials paradigm connecting process, structure, and property with the material's performance in cutting-edge technologies.
        </p>
        <p className="text-gray-800 leading-relaxed mb-6 text-lg">
          We offer an interdisciplinary academic program designed to groom the next generation of engineers at the forefront of materials design and development.
        </p>
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
