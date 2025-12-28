import { Check, Star } from 'lucide-react';

const plans = [
  {
    name: 'Online',
    fullName: 'Consultoria Online',
    price: '69',
    popular: false,
    ariaLabel: 'Plano Consultoria Online - R$ 69 por mês',
    features: [
      'Avaliação inicial completa.',
      'Treinos com vídeos explicativos.',
      'Metas e estratégia SMART.',
      'Suporte via chat e vídeo.'
    ]
  },
  {
    name: 'Presencial',
    fullName: 'Consultoria Presencial',
    price: '350',
    popular: true,
    ariaLabel: 'Plano Consultoria Presencial - R$ 350 por mês',
    features: [
      'Resultados acelerados.',
      'Supervisão reduz risco de lesão.',
      'Horário agendado (Compromisso).',
      'Treino em casa, academia ou parque.'
    ]
  },
  {
    name: 'Híbrido',
    fullName: 'Presencial e On-line',
    price: '419',
    popular: false,
    ariaLabel: 'Plano Híbrido - R$ 419 por mês',
    features: [
      'O melhor dos dois mundos.',
      'Acompanhamento contínuo.',
      'Segurança da supervisão presencial.',
      'Flexibilidade total de rotina.'
    ]
  }
];

export default function Pricing() {
  
  const getWhatsAppLink = (planName: string) => {
    const phoneNumber = "5522992359977";
    const message = `Oi Joelly, eu vim pelo site e estou interessado no plano ${planName}. pode explicar mais como funciona?`;
    return `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  };

  return (
    <section id="planos" className="py-12 md:py-24 bg-[#1A1A1A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="font-montserrat font-extrabold text-3xl sm:text-5xl md:text-6xl text-white mb-4">
            Planos & <span className="text-[#FF6B00]">Preços</span>
          </h2>
          <p className="font-inter text-base sm:text-xl text-gray-400 max-w-3xl mx-auto">
            Escolha o plano ideal para seus objetivos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-6">
          {plans.map((plan, index) => (
            <div
              key={index}
              role="article"
              aria-label={plan.ariaLabel}
              // MUDANÇA: lg:hover
              className={`relative bg-black rounded-3xl p-6 md:p-8 transition-all duration-300 flex flex-col ${
                plan.popular
                  ? 'border-4 border-[#FF6B00] shadow-2xl shadow-[#FF6B00]/30 md:scale-105'
                  : 'border-2 border-gray-800 lg:hover:border-[#FF6B00]/50 lg:hover:shadow-lg lg:hover:shadow-[#FF6B00]/20'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-full text-center">
                  <div className="inline-flex bg-[#FF6B00] text-white font-montserrat font-bold px-6 py-2 rounded-full text-xs md:text-sm items-center gap-2">
                    <Star className="w-3 h-3 md:w-4 md:h-4" fill="white" />
                    Mais Vendido
                  </div>
                </div>
              )}

              <div className="text-center mb-6 md:mb-8">
                <h3 className="font-montserrat font-bold text-xl md:text-2xl text-white mb-2 md:mb-4">
                  {plan.fullName}
                </h3>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="font-inter text-gray-400 text-base md:text-lg">R$</span>
                  <span className="font-montserrat font-extrabold text-4xl md:text-5xl text-[#FF6B00]">
                    {plan.price}
                  </span>
                  <span className="font-inter text-gray-400 text-sm md:text-base">/mês</span>
                </div>
              </div>

              <ul className="space-y-3 md:space-y-4 mb-6 md:mb-8 flex-grow">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-5 h-5 md:w-6 md:h-6 rounded-full bg-[#FF6B00]/20 flex items-center justify-center mt-0.5">
                      <Check className="w-3 h-3 md:w-4 md:h-4 text-[#FF6B00]" />
                    </div>
                    <span className="font-inter text-gray-300 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href={getWhatsAppLink(plan.fullName)}
                target="_blank"
                rel="noopener noreferrer"
                // MUDANÇA: lg:hover
                className={`w-full py-3 md:py-4 rounded-xl font-montserrat font-bold text-base md:text-lg text-center transition-all duration-300 block ${
                  plan.popular
                    ? 'bg-[#FF6B00] lg:hover:bg-[#FF8A33] text-white shadow-lg shadow-[#FF6B00]/30 lg:hover:shadow-xl lg:hover:shadow-[#FF6B00]/50'
                    : 'bg-white/10 lg:hover:bg-[#FF6B00] text-white border-2 border-white/20 lg:hover:border-[#FF6B00] lg:hover:shadow-lg lg:hover:shadow-[#FF6B00]/30'
                }`}
              >
                Assinar Plano
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}