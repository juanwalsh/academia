import { useState, useRef, TouchEvent, MouseEvent } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

const transformations = [
  {
    id: 1,
    image: 'https://i.ibb.co/Q71ddVFL/Whats-App-Image-2025-12-27-at-23-33-34-3.jpg',
    alt: 'Transformação 1 - Antes e Depois'
  },
  {
    id: 2,
    image: 'https://i.ibb.co/8ghPKPDD/Whats-App-Image-2025-12-27-at-23-33-34-2.jpg',
    alt: 'Transformação 2 - Antes e Depois'
  },
  {
    id: 3,
    image: 'https://i.ibb.co/ymz006jL/Whats-App-Image-2025-12-27-at-23-33-34-1.jpg',
    alt: 'Transformação 3 - Antes e Depois'
  },
  {
    id: 4,
    image: 'https://i.ibb.co/7NQ3y3Dr/Whats-App-Image-2025-12-27-at-23-33-34.jpg',
    alt: 'Transformação 4 - Antes e Depois'
  },
  {
    id: 5,
    image: 'https://i.ibb.co/PzsWFVBL/Whats-App-Image-2025-12-27-at-23-33-33.jpg',
    alt: 'Transformação 5 - Antes e Depois'
  },
  {
    id: 6,
    image: 'https://i.ibb.co/BH2YMjn9/Whats-App-Image-2025-12-27-at-23-33-35-3.jpg',
    alt: 'Transformação 6 - Antes e Depois'
  },
  {
    id: 7,
    image: 'https://i.ibb.co/twVJ4MtF/Whats-App-Image-2025-12-27-at-23-33-35-2.jpg',
    alt: 'Transformação 7 - Antes e Depois'
  },
  {
    id: 8,
    image: 'https://i.ibb.co/FkT343gL/Whats-App-Image-2025-12-27-at-23-33-35-1.jpg',
    alt: 'Transformação 8 - Antes e Depois'
  },
  {
    id: 9,
    image: 'https://i.ibb.co/dRtTJ7N/Whats-App-Image-2025-12-27-at-23-33-35.jpg',
    alt: 'Transformação 9 - Antes e Depois'
  }
];

export default function Results() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState<string | null>(null);

  // Touch handling for swipe
  const touchStartX = useRef<number>(0);
  const touchEndX = useRef<number>(0);
  const minSwipeDistance = 50;

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % transformations.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + transformations.length) % transformations.length);
  };

  const openModal = (image: string) => {
    setModalImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalImage(null);
  };

  // Touch handlers for swipe
  const handleTouchStart = (e: TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    const distance = touchStartX.current - touchEndX.current;
    if (Math.abs(distance) > minSwipeDistance) {
      if (distance > 0) {
        nextSlide(); // Swipe left = next
      } else {
        prevSlide(); // Swipe right = prev
      }
    }
  };

  // Prevent scroll jump when clicking buttons
  const handleButtonClick = (e: MouseEvent, index: number) => {
    e.preventDefault();
    e.stopPropagation();

    // Save scroll position before state change
    const scrollY = window.scrollY;

    setCurrentIndex(index);

    // Restore scroll position after React renders
    requestAnimationFrame(() => {
      window.scrollTo(0, scrollY);
    });
  };

  return (
    <section id="resultados" className="py-10 md:py-20 bg-black">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-6 md:mb-12">
          <h2 className="font-montserrat font-extrabold text-2xl sm:text-4xl md:text-5xl text-white mb-2 md:mb-4">
            Resultados <span className="text-[#FF6B00]">Reais</span>
          </h2>
          <p className="font-inter text-sm sm:text-base md:text-lg text-gray-400 max-w-2xl mx-auto">
            Veja as transformações dos nossos alunos
          </p>
        </div>

        {/* Carousel - overflow-anchor prevents scroll anchoring issues */}
        <div className="relative max-w-2xl mx-auto" style={{ overflowAnchor: 'none' }}>
          {/* Main Image Container - fixed height to prevent layout shift */}
          <div
            className="relative bg-gray-900 rounded-xl overflow-hidden cursor-pointer select-none h-[50vh] sm:h-[55vh] md:h-[60vh] flex items-center justify-center"
            onClick={() => openModal(transformations[currentIndex].image)}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <img
              src={transformations[currentIndex].image}
              alt={transformations[currentIndex].alt}
              className="max-w-full max-h-full object-contain"
              draggable={false}
            />

            {/* Overlay info - bottom */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-3 md:p-4">
              <div className="flex justify-between items-center">
                <span className="font-montserrat font-semibold text-white text-sm md:text-base">
                  {currentIndex + 1} / {transformations.length}
                </span>
                <span className="font-inter text-gray-300 text-xs md:text-sm hidden sm:block">
                  Toque para ampliar
                </span>
              </div>
            </div>
          </div>

          {/* Navigation Arrows - hidden on small mobile, visible on larger */}
          <button
            onClick={(e) => { e.stopPropagation(); prevSlide(); }}
            className="hidden sm:flex absolute left-0 md:-left-14 top-1/2 -translate-y-1/2 w-10 h-10 md:w-11 md:h-11 bg-[#FF6B00] rounded-full items-center justify-center text-white transition-all duration-300 lg:hover:bg-[#FF8A33] shadow-lg shadow-[#FF6B00]/30 lg:hover:shadow-xl lg:hover:shadow-[#FF6B00]/50 z-10"
            aria-label="Imagem anterior"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); nextSlide(); }}
            className="hidden sm:flex absolute right-0 md:-right-14 top-1/2 -translate-y-1/2 w-10 h-10 md:w-11 md:h-11 bg-[#FF6B00] rounded-full items-center justify-center text-white transition-all duration-300 lg:hover:bg-[#FF8A33] shadow-lg shadow-[#FF6B00]/30 lg:hover:shadow-xl lg:hover:shadow-[#FF6B00]/50 z-10"
            aria-label="Próxima imagem"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Swipe hint for mobile */}
          <p className="text-center text-gray-500 text-xs mt-2 sm:hidden">
            Deslize para ver mais
          </p>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-4">
            {transformations.map((_, index) => (
              <div
                key={index}
                role="button"
                onClick={(e) => handleButtonClick(e, index)}
                onMouseDown={(e) => e.preventDefault()}
                className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                  index === currentIndex
                    ? 'bg-[#FF6B00] w-6'
                    : 'bg-gray-600 w-2 lg:hover:bg-gray-500'
                }`}
                aria-label={`Ir para transformação ${index + 1}`}
              />
            ))}
          </div>

          {/* Thumbnails */}
          <div className="flex justify-center gap-2 mt-4 overflow-x-auto pb-2 px-2">
            {transformations.map((item, index) => (
              <div
                key={item.id}
                role="button"
                onClick={(e) => handleButtonClick(e, index)}
                onMouseDown={(e) => e.preventDefault()}
                className={`flex-shrink-0 w-12 h-12 md:w-16 md:h-16 rounded-md overflow-hidden transition-all duration-300 cursor-pointer ${
                  index === currentIndex
                    ? 'ring-2 ring-[#FF6B00] ring-offset-2 ring-offset-black'
                    : 'opacity-50 lg:hover:opacity-100'
                }`}
              >
                <img
                  src={item.image}
                  alt={`Miniatura ${index + 1}`}
                  className="w-full h-full object-cover pointer-events-none"
                  draggable={false}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && modalImage && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-2"
          onClick={closeModal}
        >
          <button
            onClick={closeModal}
            className="absolute top-3 right-3 w-9 h-9 bg-[#FF6B00] rounded-full flex items-center justify-center text-white lg:hover:bg-[#FF8A33] transition-colors z-10"
            aria-label="Fechar"
          >
            <X className="w-5 h-5" />
          </button>
          <img
            src={modalImage}
            alt="Imagem ampliada"
            className="max-w-full max-h-[95vh] object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
}
