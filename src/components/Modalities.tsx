import { Dumbbell, Flame, Heart, Target, Users, Zap } from 'lucide-react';

const modalities = [
  {
    icon: Dumbbell,
    title: 'Musculação',
    description: 'Equipamentos modernos e treinos personalizados para ganho de massa.',
    image: 'https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    icon: Flame,
    title: 'Funcional',
    description: 'Movimentos naturais e dinâmicos para melhorar força e equilíbrio.',
    image: 'https://images.pexels.com/photos/4162449/pexels-photo-4162449.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    icon: Zap,
    title: 'Cross Training',
    description: 'Treinos intensos combinando força, cardio e resistência.',
    image: 'https://images.pexels.com/photos/1552252/pexels-photo-1552252.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    icon: Target,
    title: 'HIIT',
    description: 'Alta intensidade em intervalos para máxima queima calórica.',
    image: 'https://images.pexels.com/photos/4162438/pexels-photo-4162438.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    icon: Heart,
    title: 'Pilates',
    description: 'Fortalecimento do core, flexibilidade e consciência corporal.',
    image: 'https://images.pexels.com/photos/3822906/pexels-photo-3822906.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    icon: Users,
    title: 'Personal Trainer',
    description: 'Acompanhamento individual e exclusivo focado em você.',
    image: 'https://images.pexels.com/photos/6456157/pexels-photo-6456157.jpeg?auto=compress&cs=tinysrgb&w=800'
  }
];

export default function Modalities() {
  return (
    <section id="modalidades" className="py-12 md:py-24 bg-[#1A1A1A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 md:mb-16">
          <h2 className="font-montserrat font-extrabold text-3xl sm:text-5xl md:text-6xl text-white mb-4">
            Modalidades de <span className="text-[#FF6B00]">Treino</span>
          </h2>
          <p className="font-inter text-base sm:text-xl text-gray-400 max-w-3xl mx-auto">
            Variedade completa para você alcançar seus objetivos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {modalities.map((modality, index) => (
            <div
              key={index}
              // MUDANÇA: lg:hover
              className="group relative bg-[#000000] rounded-2xl overflow-hidden lg:hover:shadow-2xl lg:hover:shadow-[#FF6B00]/20 transition-all duration-500 transform lg:hover:-translate-y-2"
            >
              <div className="relative h-48 md:h-64 overflow-hidden">
                <img
                  src={modality.image}
                  alt={modality.title}
                  // MUDANÇA: lg:group-hover (zoom só no PC)
                  className="w-full h-full object-cover transition-transform duration-500 lg:group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent"></div>
                <div className="absolute top-4 right-4 bg-[#FF6B00] w-10 h-10 md:w-12 md:h-12 rounded-xl flex items-center justify-center lg:group-hover:rotate-12 transition-transform duration-300">
                  <modality.icon className="w-5 h-5 md:w-6 md:h-6 text-white" />
                </div>
              </div>

              <div className="p-5 md:p-6">
                <h3 className="font-montserrat font-bold text-xl md:text-2xl text-white mb-2 md:mb-3">
                  {modality.title}
                </h3>
                <p className="font-inter text-sm md:text-base text-gray-400">
                  {modality.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}