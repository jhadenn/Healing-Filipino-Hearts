import { useEffect, useState } from 'react';

const HERO_VIDEO_SRC = '/hero-video.mp4';

export function Hero() {
  const [videoExists, setVideoExists] = useState(true);

  useEffect(() => {
    fetch(HERO_VIDEO_SRC, { method: 'HEAD' })
      .then((response) => setVideoExists(response.ok))
      .catch(() => setVideoExists(false));
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-neutral-950">
      {/* Video Background with Overlay */}
      <div className="absolute inset-0">
        {videoExists && (
          <video
            src={HERO_VIDEO_SRC}
            autoPlay
            muted
            loop
            playsInline
            className="h-full w-full object-cover opacity-60 animate-fade-in"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-950/70 via-neutral-950/45 to-neutral-950/80"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/35 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-neutral-950 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
        <div className="text-white">
          { /* Tagline */}
          <p className="text-sm md:text-base mb-4 tracking-widest uppercase opacity-0 text-yellow-300 font-[Almarai] italic animate-fade-in-up animation-delay-200"><span className="font-bold">Pagpapagaling ng Puso, Pagbibigay ng Pag-asa</span></p>
          <h1
            className="mb-6 font-sans text-[clamp(3.25rem,7vw,6rem)] leading-[0.92] tracking-tight opacity-0 animate-fade-in-up animation-delay-400"
          >
            <span className="block whitespace-nowrap">Together for</span>
            <span className="block whitespace-nowrap text-red-500">Healthier Hearts</span>
          </h1>
          <p className="text-lg md:text-xl max-w-xl mb-10 opacity-0 leading-relaxed animate-fade-in-up animation-delay-600">
            Empowering communities through accessible healthcare, education, and compassion.
          </p>
          <div className="flex flex-wrap gap-4 opacity-0 animate-fade-in-up animation-delay-800">
            <button className="bg-red-600 text-white px-8 py-4 rounded-md hover:bg-red-700 transition-all duration-300 shadow-lg">
              Get Involved
            </button>
            <button className="bg-white/10 backdrop-blur-sm border border-white/30 text-white px-8 py-4 rounded-md hover:bg-white/20 transition-all duration-300">
              Learn More
            </button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce opacity-0 animate-fade-in animation-delay-1000">
        <svg className="w-6 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}
