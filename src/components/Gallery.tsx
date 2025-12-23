const galleryItems = [
  {
    title: 'Peso Livre',
    image: 'https://images.pexels.com/photos/2261477/pexels-photo-2261477.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    title: 'Máquinas Modernas',
    image: 'https://images.pexels.com/photos/1954524/pexels-photo-1954524.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    title: 'Espaço de Cardio',
    image: 'https://images.pexels.com/photos/1092878/pexels-photo-1092878.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    title: 'Estúdio de Aulas',
    image: 'https://images.pexels.com/photos/3757376/pexels-photo-3757376.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    title: 'Vestiários Premium',
    image: 'https://images.pexels.com/photos/4162451/pexels-photo-4162451.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    title: 'Área de Convivência',
    image: 'https://images.pexels.com/photos/6456299/pexels-photo-6456299.jpeg?auto=compress&cs=tinysrgb&w=800'
  }
];

export default function Gallery() {
  return (
    <section id="estrutura" className="py-12 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="font-montserrat font-extrabold text-3xl sm:text-5xl md:text-6xl text-[#1A1A1A] mb-4">
            Nossa <span className="text-[#FF6B00]">Estrutura</span>
          </h2>
          <p className="font-inter text-base sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Equipamentos de última geração e ambientes projetados para sua melhor experiência
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {galleryItems.map((item, index) => (
            <div
              key={index}
              className="group relative h-56 md:h-80 rounded-2xl overflow-hidden cursor-pointer"
            >
              <img
                src={item.image}
                alt={item.title}
                // MUDANÇA: lg:group-hover
                className="w-full h-full object-cover transition-transform duration-700 lg:group-hover:scale-110"
              />
              {/* MUDANÇA: lg:group-hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 lg:group-hover:opacity-90 transition-opacity duration-300"></div>
              <div className="absolute inset-0 flex items-end p-4 md:p-6">
                {/* MUDANÇA: lg:group-hover */}
                <h3 className="font-montserrat font-bold text-lg md:text-2xl text-white transform translate-y-2 lg:group-hover:translate-y-0 transition-transform duration-300">
                  {item.title}
                </h3>
              </div>
              <div className="absolute inset-0 border-4 border-[#FF6B00] opacity-0 lg:group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}