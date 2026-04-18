"use client";

const HeroVideo = () => {
  return (
    <div className="relative w-full overflow-hidden"  style={{ height: "78vh" }}>
      <video
        src="/msme_home.mp4"
        autoPlay
        loop
        playsInline
        className="w-full h-full object-cover"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black/80" />

      
    </div>
  );
};

export default HeroVideo;