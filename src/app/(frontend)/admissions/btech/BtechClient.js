'use client';
import { useState } from "react";

export default function BTechClient({ btechList }) {
  const [activeTab, setActiveTab] = useState("admission");

  const btechAdmissionContent = btechList[0] || {};
  const { admission = "" } = btechAdmissionContent;

  return (
    <div className="bg-white m-8 text-black p-8 rounded-xl shadow-lg max-w-6xl mx-auto">
      <h1 className="text-4xl font-bold text-center mb-8">B.Tech Admission</h1>

      {/* Tabs */}
      <div className="flex flex-wrap justify-center gap-4 mb-8 border-b pb-4">
        <button
          onClick={() => setActiveTab("admission")}
          className={`px-5 py-2 text-base font-semibold rounded-md transition ${
            activeTab === "admission"
              ? "bg-black text-white"
              : "bg-gray-100 text-gray-800 hover:bg-gray-200"
          }`}
        >
          Admissions Requirements
        </button>
      </div>

      {/* Admission Section */}
      {activeTab === "admission" && (
        <div className="space-y-4">
          <p className="text-gray-800 text-base leading-relaxed">{admission}</p>
        </div>
      )}
    </div>
  );
}