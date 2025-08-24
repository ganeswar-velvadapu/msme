'use client';

export default function BTechClient({ btech }) {


  return (
    <div className="bg-white m-8 text-black p-8 rounded-xl shadow-lg max-w-6xl mx-auto">
      <h1 className="text-4xl font-bold text-center mb-8">B.Tech Admission</h1>


      <div className="space-y-4">
        <p className="text-gray-800 text-base leading-relaxed">{btech.admission_process_btech}</p>
        <a href={btech.link_to_jee_website} className="text-blue-600">JEE Website</a>
      </div>

    </div>
  );
}