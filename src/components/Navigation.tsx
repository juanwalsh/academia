import { Menu, X, Zap } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [scrolled, setScrolled] = useState(false);

  const menuItems = [
    { label: 'Sobre', href: '#sobre' },
    { label: 'Modalidades', href: '#modalidades' },
    { label: 'Resultados', href: '#resultados' },
    { label: 'Planos', href: '#planos' },
    { label: 'Depoimentos', href: '#depoimentos' }
  ];

  // Detect scroll for nav background change
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Detect active section
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-50% 0px -50% 0px' }
    );

    const sections = document.querySelectorAll('section[id]');
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
      scrolled
        ? 'bg-black/95 backdrop-blur-xl shadow-lg shadow-black/20'
        : 'bg-black/80 backdrop-blur-md'
    }`}>
      {/* Gradient border bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#FF6B00]/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <div className="bg-[#FF6B00] p-2 rounded-lg transition-all duration-300 group-hover:shadow-lg group-hover:shadow-[#FF6B00]/30">
              <Zap className="w-6 h-6 text-white" fill="white" />
            </div>
            <span className="font-montserrat font-extrabold text-xl text-white">
              Consultoria <span className="text-[#FF6B00]">Fitness</span>
            </span>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-1">
            {menuItems.map((item) => {
              const isActive = activeSection === item.href.slice(1);
              return (
                <a
                  key={item.label}
                  href={item.href}
                  className={`relative font-inter font-medium px-4 py-2 rounded-lg transition-all duration-300 ${
                    isActive
                      ? 'text-[#FF6B00]'
                      : 'text-white/80 lg:hover:text-white lg:hover:bg-white/5'
                  }`}
                >
                  {item.label}
                  {/* Active indicator - underline */}
                  {isActive && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-6 h-0.5 bg-[#FF6B00] rounded-full" />
                  )}
                </a>
              );
            })}

            {/* Nutrition link - special style */}
            <Link
              to="/nutricao"
              className="relative font-inter font-medium px-4 py-2 text-[#FF6B00] lg:hover:text-[#FF8A33] transition-colors duration-300 flex items-center gap-1"
            >
              <span className="relative">
                Nutrição
                <span className="absolute -top-1 -right-3 text-[8px] bg-[#FF6B00] text-white px-1 rounded font-bold">
                  NEW
                </span>
              </span>
            </Link>

            {/* CTA Button */}
            <a
              href="https://wa.me/5522992359977"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-4 bg-gradient-to-r from-[#FF6B00] to-[#FF8A33] lg:hover:from-[#FF8A33] lg:hover:to-[#FF6B00] text-white font-montserrat font-bold px-6 py-3 rounded-xl transition-all duration-300 shadow-md shadow-[#FF6B00]/20 lg:hover:shadow-lg lg:hover:shadow-[#FF6B00]/40"
            >
              Falar com Joelly
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-white p-2 rounded-lg hover:bg-white/10 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-6 border-t border-white/10 mt-2 pt-4">
            <div className="flex flex-col gap-1">
              {menuItems.map((item) => {
                const isActive = activeSection === item.href.slice(1);
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    className={`font-inter font-medium px-4 py-3 rounded-lg transition-all duration-300 ${
                      isActive
                        ? 'text-[#FF6B00] bg-[#FF6B00]/10'
                        : 'text-white/80'
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </a>
                );
              })}
              <Link
                to="/nutricao"
                className="font-inter font-medium px-4 py-3 text-[#FF6B00] flex items-center gap-2"
                onClick={() => setIsOpen(false)}
              >
                Nutrição
                <span className="text-[8px] bg-[#FF6B00] text-white px-1.5 py-0.5 rounded font-bold">
                  NEW
                </span>
              </Link>
              <a
                href="https://wa.me/5522992359977"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 bg-gradient-to-r from-[#FF6B00] to-[#FF8A33] text-white font-montserrat font-bold px-6 py-3 rounded-xl text-center"
              >
                Falar com Joelly
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
