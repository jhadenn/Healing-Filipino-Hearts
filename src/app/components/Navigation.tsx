import { useState, useEffect } from "react";

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-lg py-4' : 'bg-transparent py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <div className={`tracking-tight transition-colors duration-300 ${ isScrolled ? 'text-red-600' : 'text-white' } font-[Abhaya_Libre_ExtraBold] text-[24px]`}>
          Healing Filipino Hearts
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {['Home', 'About', 'Events', 'Partners', 'Contact'].map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item.toLowerCase())}
              className={`font-sans text-base font-semibold tracking-tight transition-colors duration-300 hover:opacity-80 ${isScrolled ? 'text-gray-800' : 'text-white'}`}
            >
              {item}
            </button>
          ))}
          <button className={`font-sans text-base font-semibold tracking-tight px-6 py-2 rounded-full transition-all duration-300 ${
            isScrolled 
              ? 'bg-red-600 text-white hover:bg-red-700' 
              : 'bg-white text-red-600 hover:bg-opacity-90'
          }`}>
            Donate
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <div className={`w-6 h-0.5 mb-1.5 transition-colors duration-300 ${
            isScrolled ? 'bg-gray-800' : 'bg-white'
          }`}></div>
          <div className={`w-6 h-0.5 mb-1.5 transition-colors duration-300 ${
            isScrolled ? 'bg-gray-800' : 'bg-white'
          }`}></div>
          <div className={`w-6 h-0.5 transition-colors duration-300 ${
            isScrolled ? 'bg-gray-800' : 'bg-white'
          }`}></div>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg mt-4">
          <div className="flex flex-col gap-4 px-6 py-6">
            {['Home', 'About', 'Events', 'Partners', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="font-sans text-left text-gray-800 font-semibold tracking-tight hover:text-red-600 transition-colors"
              >
                {item}
              </button>
            ))}
            <button className="font-sans font-semibold tracking-tight bg-red-600 text-white px-6 py-2 rounded-full hover:bg-red-700 transition-all">
              Donate
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
