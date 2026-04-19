import React from 'react';

const PageBanner = ({ title }) => {
  return (
    <div className="relative w-full h-[25vh] overflow-hidden flex items-center justify-center">
      {/* Background Image with Fixed Attachment for Parallax Effect */}
      <div 
        className="absolute inset-0 bg-fixed bg-center bg-cover"
        style={{ 
          backgroundImage: "url('/scrolling_background.jpeg')",
          zIndex: -1 
        }}
      />
      
      {/* Dark Overlay for Text Readability */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative z-10 text-center px-4">
        <h1 className="text-3xl md:text-5xl font-bold text-white tracking-widest uppercase">
          {title}
        </h1>
      </div>
    </div>
  );
};

export default PageBanner;
