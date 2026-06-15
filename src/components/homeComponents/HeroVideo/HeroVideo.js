"use client";

import { useState, useRef } from "react";
import { Volume2, VolumeX } from "lucide-react";

const HeroVideo = () => {
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef(null);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  return (
    <div className="relative w-full overflow-hidden" style={{ height: "78vh" }}>
      <video
        ref={videoRef}
        src="/msme_home.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-full object-cover"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black/80" />

      {/* Mute/Unmute Floating Button */}
      <button
        onClick={toggleMute}
        className="absolute bottom-6 right-6 z-20 flex items-center justify-center gap-2 px-4 py-2 bg-black/60 hover:bg-black/80 text-white rounded-full border border-white/20 transition-all duration-300 backdrop-blur-sm shadow-lg group cursor-pointer"
        aria-label={isMuted ? "Unmute video" : "Mute video"}
      >
        {isMuted ? (
          <>
            <VolumeX className="w-5 h-5 text-gray-300 group-hover:scale-110 transition-transform" />
            <span className="text-sm font-medium text-gray-200 select-none">Unmute</span>
          </>
        ) : (
          <>
            <Volume2 className="w-5 h-5 text-white group-hover:scale-110 transition-transform" />
            <span className="text-sm font-medium text-white select-none">Mute</span>
          </>
        )}
      </button>
    </div>
  );
};

export default HeroVideo;