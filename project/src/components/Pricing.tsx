import { Check, Star } from 'lucide-react';

const plans = [
  {
    name: 'Básico',
    price: 99,
    popular: false,
    features: [
      'Acesso horário comercial',
      'Musculação completa',
      'Vestiários e armários',
      'Avaliação física inicial'
    ]
  },
  {
    name: 'Performance',
    price: 149,
    popular: true,
    features: [
      'Acesso 24h por dia',
      'Todas as modalidades',
      'Aulas coletivas ilimitadas',
      'Avaliação física mensal',
      'App de treinos',
      'Área de convivência'
    ]
  },
  {
    name: 'Elite',
    price: 249,
    popular: false,
    features: [
      'Tudo do Performance',
      'Personal trainer 2x/semana',
      'Consultoria nutricional',
      'Treinos exclusivos',
      'Prioridade em horários',
      'Toalhas e amenities'
    ]
  }
];

export default function Pricing() {
  return (
    <section id="planos" className="py-24 bg-[#1A1A1A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-montserrat font-extrabold text-4xl sm:text-5xl md:text-6xl text-white mb-6">
            Planos & <span className="text-[#FF6B00]">Preços</span>
          </h2>
          <p className="font-inter text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto">
            Escolha o plano ideal para seus objetivos e comprometa-se com sua transformação
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-6">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-black rounded-3xl p-8 transition-all duration-300 transform hover:-translate-y-2 ${
                plan.popular
                  ? 'border-4 border-[#FF6B00] shadow-2xl shadow-[#FF6B00]/30 md:scale-105'
                  : 'border-2 border-gray-800 hover:border-[#FF6B00]/50'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-[#FF6B00] text-white font-montserrat font-bold px-6 py-2 rounded-full text-sm flex items-center gap-2">
                    <Star className="w-4 h-4" fill="white" />
                    Mais Vendido
                  </div>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="font-montserrat font-bold text-2xl text-white mb-4">
                  {plan.name}
                </h3>
                <div className="flex items-baseline justify-center gap-2">
                  <span className="font-montserrat font-extrabold text-5xl text-[#FF6B00]">
                    R${plan.price}
                  </span>
                  <span className="font-inter text-gray-400">/mês</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#FF6B00]/20 flex items-center justify-center mt-0.5">
                      <Check className="w-4 h-4 text-[#FF6B00]" />
                    </div>
                    <span className="font-inter text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-4 rounded-xl font-montserrat font-bold text-lg transition-all duration-300 transform hover:scale-105 ${
                  plan.popular
                    ? 'bg-[#FF6B00] hover:bg-[#FF8A33] text-white shadow-lg shadow-[#FF6B00]/50'
                    : 'bg-white/10 hover:bg-[#FF6B00] text-white border-2 border-white/20 hover:border-[#FF6B00]'
                }`}
              >
                Assinar Plano
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
