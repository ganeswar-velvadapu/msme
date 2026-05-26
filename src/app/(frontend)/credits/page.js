"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, Mail, Globe, Shield, Code, Heart } from 'lucide-react';
import creditsData from '../../../../public/data/developers_and_maintainers.json';

// Individual Vertical Member Card
const MemberCard = ({ member }) => {
  const [imgError, setImgError] = useState(false);

  // Fallback initials (removes special chars, extracts first 2 letters)
  const initials = member.name
    .replace(/[^a-zA-Z\s]/g, '')
    .split(/\s+/)
    .filter(Boolean)
    .map((n) => n[0])
    .slice(0, 2)
    .join('')
    .toUpperCase();

  return (
    <div className="bg-white rounded-xl border border-gray-200 p-6 md:p-8 hover:shadow-md hover:border-gray-300 transition-all duration-300 flex flex-col items-center text-center space-y-4 w-full">
      
      {/* Profile Photo / Initials Fallback (Square with Rounded Corners) */}
      <div className="w-28 h-28 rounded-xl overflow-hidden bg-slate-100 flex items-center justify-center border border-gray-200/50 shadow-sm relative flex-shrink-0">
        {member.photo && !imgError ? (
          <img
            src={member.photo}
            alt={member.name}
            onError={() => setImgError(true)}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full bg-slate-900 text-white flex items-center justify-center font-bold text-2xl font-mono select-none">
            {initials}
          </div>
        )}
      </div>

      {/* Details */}
      <div className="space-y-1 w-full">
        <h4 className="text-base font-bold text-gray-900 truncate">
          {member.name}
        </h4>
        <p className="text-xs text-gray-500 font-semibold font-mono uppercase tracking-wider">
          {member.role}
        </p>
      </div>

      {/* Contact Links (Text Links) */}
      {(member.email || member.personal_website) && (
        <div className="w-full pt-3 border-t border-gray-100 flex flex-col items-center space-y-1.5 text-sm">
          {member.email && (
            <a 
              href={`mailto:${member.email}`} 
              className="text-gray-600 hover:text-black hover:underline break-all block"
              title={member.email}
            >
              {member.email}
            </a>
          )}
          {member.personal_website && (
            <a 
              href={member.personal_website} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-500 hover:text-black hover:underline font-mono text-xs block"
              title="Personal Website"
            >
              {member.personal_website.replace(/^https?:\/\/(www\.)?/, '')}
            </a>
          )}
        </div>
      )}

    </div>
  );
};

// Main Credits Page Component
export default function CreditsPage() {
  return (
    <div className="min-h-screen bg-gray-50/50 py-16 px-4 sm:px-6 lg:px-8">
      
      {/* Header */}
      <div className="max-w-5xl mx-auto text-center space-y-4 mb-16">
        <Link 
          href="/" 
          className="inline-flex items-center text-xs font-mono text-gray-400 hover:text-black uppercase tracking-wider group transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5 mr-1 group-hover:-translate-x-1 transition-transform" />
          Back to Home
        </Link>
        <h1 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight">
          Website Credits
        </h1>
        <p className="text-sm md:text-base text-gray-500 max-w-xl mx-auto">
          Acknowledging the dedicated team responsible for designing, building, and maintaining the MSME website.
        </p>
      </div>

      {/* Grid Content */}
      <div className="max-w-5xl mx-auto space-y-12">
        
        {/* Developers Section */}
        <div className="space-y-4">
          <div className="flex items-center justify-center space-x-2 border-b border-gray-200 pb-2">
            <h2 className="text-sm font-bold text-gray-900 uppercase tracking-widest font-mono">
              Core Developers
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {creditsData.developers.map((member, idx) => (
              <MemberCard key={idx} member={member} />
            ))}
          </div>
        </div>

        {/* Maintainers Section */}
        <div className="space-y-4">
          <div className="flex items-center justify-center space-x-2 border-b border-gray-200 pb-2">
            <h2 className="text-sm font-bold text-gray-900 uppercase tracking-widest font-mono">
              Current Maintenance
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
            {creditsData.maintainers.map((member, idx) => (
              <MemberCard key={idx} member={member} />
            ))}
          </div>
        </div>

        {/* Helpers Section */}
        <div className="space-y-4">
          <div className="flex items-center justify-center space-x-2 border-b border-gray-200 pb-2">
            <h2 className="text-sm font-bold text-gray-900 uppercase tracking-widest font-mono">
              Content & Operations Support
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
            {creditsData.helpers.map((member, idx) => (
              <MemberCard key={idx} member={member} />
            ))}
          </div>
        </div>

      </div>

    </div>
  );
}
