import { ArrowRight, Dumbbell, Flame, Heart, Target, Users, Zap } from 'lucide-react';

const modalities = [
  {
    icon: Dumbbell,
    title: 'Musculação',
    description: 'Equipamentos modernos e treinos personalizados para ganho de massa e definição muscular.',
    image: 'https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    icon: Flame,
    title: 'Funcional',
    description: 'Movimentos naturais e dinâmicos para melhorar força, equilíbrio e coordenação.',
    image: 'https://images.pexels.com/photos/4162449/pexels-photo-4162449.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    icon: Zap,
    title: 'Cross Training',
    description: 'Treinos intensos e variados que combinam força, cardio e resistência.',
    image: 'https://images.pexels.com/photos/1552252/pexels-photo-1552252.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    icon: Target,
    title: 'HIIT',
    description: 'Alta intensidade em intervalos para máxima queima calórica e condicionamento.',
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
    description: 'Acompanhamento individual e exclusivo focado nos seus objetivos específicos.',
    image: 'https://images.pexels.com/photos/6456157/pexels-photo-6456157.jpeg?auto=compress&cs=tinysrgb&w=800'
  }
];

export default function Modalities() {
  return (
    <section id="modalidades" className="py-24 bg-[#1A1A1A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-montserrat font-extrabold text-4xl sm:text-5xl md:text-6xl text-white mb-6">
            Modalidades de <span className="text-[#FF6B00]">Treino</span>
          </h2>
          <p className="font-inter text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto">
            Variedade completa para você alcançar seus objetivos com motivação e resultados
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {modalities.map((modality, index) => (
            <div
              key={index}
              className="group relative bg-[#000000] rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-[#FF6B00]/20 transition-all duration-500 transform hover:-translate-y-2"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={modality.image}
                  alt={modality.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent"></div>
                <div className="absolute top-4 right-4 bg-[#FF6B00] w-12 h-12 rounded-xl flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
                  <modality.icon className="w-6 h-6 text-white" />
                </div>
              </div>

              <div className="p-6">
                <h3 className="font-montserrat font-bold text-2xl text-white mb-3">
                  {modality.title}
                </h3>
                <p className="font-inter text-gray-400 mb-6">
                  {modality.description}
                </p>
                <button className="group/btn flex items-center gap-2 text-[#FF6B00] font-montserrat font-bold hover:gap-3 transition-all duration-300">
                  Saiba mais
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
