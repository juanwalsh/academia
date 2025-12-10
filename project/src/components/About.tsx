import { Award, Clock, Thermometer, TrendingUp } from 'lucide-react';

const features = [
  {
    icon: Award,
    title: 'Treinadores Certificados',
    description: 'Profissionais qualificados e experientes'
  },
  {
    icon: Clock,
    title: 'Planos Flexíveis',
    description: 'Horários que se adaptam à sua rotina'
  },
  {
    icon: Thermometer,
    title: 'Espaço Climatizado',
    description: 'Ambiente confortável o ano todo'
  },
  {
    icon: TrendingUp,
    title: 'Acompanhamento Profissional',
    description: 'Resultados monitorados e ajustados'
  }
];

export default function About() {
  return (
    <section id="sobre" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-montserrat font-extrabold text-4xl sm:text-5xl md:text-6xl text-[#1A1A1A] mb-6">
            Muito Além de Uma <span className="text-[#FF6B00]">Academia</span>
          </h2>
          <p className="font-inter text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Academia premium com foco em performance, bem-estar e experiência.
            Equipamentos de ponta, ambiente motivador e treinos personalizados.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-[#E8E8E8] hover:bg-[#1A1A1A] p-8 rounded-2xl transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="bg-[#FF6B00] group-hover:bg-[#FF6B00] w-16 h-16 rounded-xl flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-montserrat font-bold text-xl text-[#1A1A1A] group-hover:text-white mb-3 transition-colors">
                {feature.title}
              </h3>
              <p className="font-inter text-gray-600 group-hover:text-gray-300 transition-colors">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
