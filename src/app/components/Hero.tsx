import { ImageWithFallback } from './figma/ImageWithFallback';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1629976532461-563f742de47f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxGaWxpcGlubyUyMGZhbWlseSUyMGhlYWx0aHxlbnwxfHx8fDE3NzM0MzMzNTh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Filipino community"
          className="w-full h-full object-cover animate-fade-in"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
      </div>

      {/* Filipino-inspired accent stripe */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-red-600 to-yellow-400 animate-slide-in-down"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
        <div className="text-white">
          <p className="text-sm md:text-base mb-4 tracking-widest uppercase opacity-0 text-yellow-300 font-[Almarai] italic animate-fade-in-up animation-delay-200"><span className="font-bold">Pagpapagaling ng Puso, Pagbibigay ng Pag-asa</span></p>
          <h1 className="text-5xl md:text-7xl lg:text-8xl mb-6 tracking-tight leading-[0.9] opacity-0 animate-fade-in-up animation-delay-400" style={{ fontSize: 'clamp(3rem, 8vw, 7rem)' }}>
            Healing
            <br />
            Filipino
            <br />
            <span className="text-red-500">Hearts</span>
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