"use client";
import { Mail, MapPin, GraduationCap } from "lucide-react";

export default function FacultyCard({ name, designation, email, phdFrom, office, onClick }) {
  return (
    <div 
      className="bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-all p-6 flex flex-col h-full cursor-pointer"
      onClick={onClick}
    >
      <h3 className="text-3xl font-semibold text-gray-900 mb-1">{name}</h3>
      <p className="text-gray-600 mb-4 text-xl">{designation}</p>
      
      <div className="space-y-2 mt-auto">
        <div className="flex items-center gap-2">
          <Mail size={16} className="text-gray-400" />
          <span className="text-lg text-gray-700 truncate">{email}</span>
        </div>
        
        <div className="flex items-center gap-2">
          <GraduationCap size={16} className="text-gray-400" />
          <span className="text-lg text-gray-700 truncate">{phdFrom}</span>
        </div>
        
        <div className="flex items-center gap-2">
          <MapPin size={16} className="text-gray-400" />
          <span className="text-lg text-gray-700 truncate">{office}</span>
        </div>
      </div>
      
      <button className="mt-5 text-sm font-medium text-gray-900 hover:text-gray-700 inline-flex items-center transition-colors hover:cursor-pointer">
        Know more
        <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
        </svg>
      </button>
    </div>
  );
}