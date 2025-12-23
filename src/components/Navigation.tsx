import { Menu, X, Zap } from 'lucide-react';
import { useState } from 'react';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { label: 'Sobre', href: '#sobre' },
    { label: 'Modalidades', href: '#modalidades' },
    { label: 'Estrutura', href: '#estrutura' },
    { label: 'Planos', href: '#planos' },
    { label: 'Depoimentos', href: '#depoimentos' }
  ];

  return (
    <nav className="absolute top-0 left-0 w-full z-50 bg-black/90 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-2">
            <div className="bg-[#FF6B00] p-2 rounded-lg">
              <Zap className="w-6 h-6 text-white" fill="white" />
            </div>
            <span className="font-montserrat font-extrabold text-xl text-white">
              Consultoria <span className="text-[#FF6B00]">Fitness</span>
            </span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                // MUDANÇA: lg:hover
                className="font-inter font-medium text-white lg:hover:text-[#FF6B00] transition-colors duration-300"
              >
                {item.label}
              </a>
            ))}
            <a 
              href="https://wa.me/5522992359977" 
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#FF6B00] lg:hover:bg-[#FF8A33] text-white font-montserrat font-bold px-6 py-3 rounded-lg transition-all duration-300 transform lg:hover:scale-105"
            >
              Falar com Joelly
            </a>
          </div>

          <button
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden pb-6">
            <div className="flex flex-col gap-4">
              {menuItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  // MUDANÇA: sem hover no menu mobile
                  className="font-inter font-medium text-white transition-colors duration-300"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <a 
                href="https://wa.me/5522992359977"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#FF6B00] text-white font-montserrat font-bold px-6 py-3 rounded-lg text-center transition-all duration-300"
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