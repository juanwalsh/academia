import { Link } from 'react-router-dom';
import { ArrowLeft, Check, Salad, Target, Clock, MessageCircle, Zap, Apple, Utensils, Heart } from 'lucide-react';

const benefits = [
  {
    icon: Target,
    title: 'Plano Personalizado',
    description: 'Dieta adaptada aos seus objetivos, rotina e preferências alimentares'
  },
  {
    icon: Clock,
    title: 'Flexibilidade',
    description: 'Cardápios práticos que se encaixam no seu dia a dia corrido'
  },
  {
    icon: Heart,
    title: 'Saúde Integral',
    description: 'Foco em nutrientes essenciais para energia, disposição e bem-estar'
  },
  {
    icon: MessageCircle,
    title: 'Suporte Contínuo',
    description: 'Acompanhamento via WhatsApp para tirar dúvidas e ajustes'
  }
];

const howItWorks = [
  {
    step: 1,
    title: 'Avaliação Inicial',
    description: 'Analisamos seu histórico, objetivos, rotina e preferências alimentares'
  },
  {
    step: 2,
    title: 'Plano Alimentar',
    description: 'Criamos um cardápio personalizado com opções práticas e saborosas'
  },
  {
    step: 3,
    title: 'Acompanhamento',
    description: 'Monitoramos seu progresso e fazemos ajustes conforme necessário'
  },
  {
    step: 4,
    title: 'Resultados',
    description: 'Você alcança seus objetivos com saúde e mantém os resultados'
  }
];

const plans = [
  {
    name: 'Plano Básico',
    price: '150',
    features: [
      'Avaliação nutricional completa',
      'Plano alimentar personalizado',
      'Lista de substituições',
      'Suporte via WhatsApp (horário comercial)',
      '1 ajuste mensal'
    ],
    popular: false
  },
  {
    name: 'Plano Completo',
    price: '250',
    features: [
      'Tudo do plano básico',
      'Cardápio semanal variado',
      'Receitas fit exclusivas',
      'Suporte ilimitado via WhatsApp',
      'Ajustes semanais',
      'Dicas de compras no mercado'
    ],
    popular: true
  }
];

export default function Nutrition() {
  const whatsappLink = (plan: string) => {
    const message = `Oi Joelly! Vim pelo site e tenho interesse no ${plan} de nutrição. Pode me explicar como funciona?`;
    return `https://wa.me/5522992359977?text=${encodeURIComponent(message)}`;
  };

  return (
    <div className="bg-black min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-black/90 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            <Link to="/" className="flex items-center gap-2 text-white lg:hover:text-[#FF6B00] transition-colors">
              <ArrowLeft className="w-5 h-5" />
              <span className="font-inter font-medium text-sm md:text-base">Voltar</span>
            </Link>
            <div className="flex items-center gap-2">
              <div className="bg-[#FF6B00] p-1.5 md:p-2 rounded-lg">
                <Salad className="w-5 h-5 md:w-6 md:h-6 text-white" />
              </div>
              <span className="font-montserrat font-extrabold text-lg md:text-xl text-white">
                Nutrição <span className="text-[#FF6B00]">Funcional</span>
              </span>
            </div>
            <a
              href="https://wa.me/5522992359977"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#FF6B00] lg:hover:bg-[#FF8A33] text-white font-montserrat font-bold px-3 md:px-6 py-2 md:py-3 rounded-lg transition-all duration-300 shadow-md shadow-[#FF6B00]/20 lg:hover:shadow-lg lg:hover:shadow-[#FF6B00]/40 text-sm md:text-base"
            >
              Falar Agora
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 md:pt-32 pb-12 md:pb-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-[#FF6B00]/20 text-[#FF6B00] px-4 py-2 rounded-full mb-6">
            <Apple className="w-4 h-4" />
            <span className="font-inter font-medium text-sm">Consultoria Nutricional</span>
          </div>
          <h1 className="font-montserrat font-extrabold text-3xl sm:text-5xl md:text-6xl text-white mb-4 md:mb-6 leading-tight">
            Alcance seus objetivos com{' '}
            <span className="text-[#FF6B00]">alimentação inteligente</span>
          </h1>
          <p className="font-inter text-base sm:text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-8">
            Planos alimentares personalizados para emagrecer, ganhar massa muscular ou melhorar sua saúde. Combinado com treino, os resultados são ainda mais rápidos!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#planos-nutricao"
              className="bg-[#FF6B00] lg:hover:bg-[#FF8A33] text-white font-montserrat font-bold px-8 py-4 rounded-xl transition-all duration-300 shadow-lg shadow-[#FF6B00]/20 lg:hover:shadow-xl lg:hover:shadow-[#FF6B00]/40 text-center"
            >
              Ver Planos
            </a>
            <a
              href="https://wa.me/5522992359977"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 lg:hover:bg-white/20 text-white font-montserrat font-bold px-8 py-4 rounded-xl transition-all duration-300 border border-white/20 text-center"
            >
              Tirar Dúvidas
            </a>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-12 md:py-20 px-4 bg-[#1A1A1A]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="font-montserrat font-extrabold text-2xl sm:text-4xl md:text-5xl text-white mb-4">
              Por que fazer <span className="text-[#FF6B00]">acompanhamento nutricional?</span>
            </h2>
            <p className="font-inter text-gray-400 max-w-2xl mx-auto">
              A alimentação correta potencializa seus resultados e melhora sua qualidade de vida
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-black p-6 rounded-2xl border border-gray-800 lg:hover:border-[#FF6B00]/50 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-[#FF6B00]/20 rounded-xl flex items-center justify-center mb-4">
                  <benefit.icon className="w-6 h-6 text-[#FF6B00]" />
                </div>
                <h3 className="font-montserrat font-bold text-lg text-white mb-2">{benefit.title}</h3>
                <p className="font-inter text-gray-400 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-12 md:py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="font-montserrat font-extrabold text-2xl sm:text-4xl md:text-5xl text-white mb-4">
              Como <span className="text-[#FF6B00]">funciona?</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {howItWorks.map((item) => (
              <div key={item.step} className="relative">
                <div className="bg-[#1A1A1A] p-6 rounded-2xl h-full">
                  <div className="w-10 h-10 bg-[#FF6B00] rounded-full flex items-center justify-center mb-4">
                    <span className="font-montserrat font-bold text-white">{item.step}</span>
                  </div>
                  <h3 className="font-montserrat font-bold text-lg text-white mb-2">{item.title}</h3>
                  <p className="font-inter text-gray-400 text-sm">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Combo Banner */}
      <section className="py-12 md:py-16 px-4 bg-gradient-to-r from-[#FF6B00] to-[#FF8A33]">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Zap className="w-8 h-8 text-white" />
            <Utensils className="w-8 h-8 text-white" />
          </div>
          <h2 className="font-montserrat font-extrabold text-2xl sm:text-3xl md:text-4xl text-white mb-4">
            Treino + Nutrição = Resultados Explosivos
          </h2>
          <p className="font-inter text-white/90 mb-6 max-w-2xl mx-auto">
            Combine a consultoria de personal com o acompanhamento nutricional e acelere seus resultados. Pacotes especiais para quem quer o combo completo!
          </p>
          <a
            href="https://wa.me/5522992359977?text=Oi%20Joelly!%20Quero%20saber%20sobre%20o%20combo%20treino%20%2B%20nutri%C3%A7%C3%A3o!"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-[#FF6B00] font-montserrat font-bold px-8 py-4 rounded-xl transition-all duration-300 shadow-lg lg:hover:shadow-xl lg:hover:shadow-white/30"
          >
            Quero o Combo
          </a>
        </div>
      </section>

      {/* Pricing */}
      <section id="planos-nutricao" className="py-12 md:py-20 px-4 bg-[#1A1A1A]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="font-montserrat font-extrabold text-2xl sm:text-4xl md:text-5xl text-white mb-4">
              Planos de <span className="text-[#FF6B00]">Nutrição</span>
            </h2>
            <p className="font-inter text-gray-400">Escolha o plano ideal para seus objetivos</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`relative bg-black rounded-3xl p-6 md:p-8 flex flex-col ${
                  plan.popular
                    ? 'border-4 border-[#FF6B00] shadow-2xl shadow-[#FF6B00]/20'
                    : 'border-2 border-gray-800'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-[#FF6B00] text-white font-montserrat font-bold px-4 py-1 rounded-full text-sm">
                      Recomendado
                    </span>
                  </div>
                )}
                <h3 className="font-montserrat font-bold text-xl md:text-2xl text-white mb-4 text-center">
                  {plan.name}
                </h3>
                <div className="flex items-baseline justify-center gap-1 mb-6">
                  <span className="font-inter text-gray-400">R$</span>
                  <span className="font-montserrat font-extrabold text-4xl md:text-5xl text-[#FF6B00]">
                    {plan.price}
                  </span>
                  <span className="font-inter text-gray-400">/mês</span>
                </div>
                <ul className="space-y-3 mb-8 flex-grow">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-5 h-5 rounded-full bg-[#FF6B00]/20 flex items-center justify-center mt-0.5">
                        <Check className="w-3 h-3 text-[#FF6B00]" />
                      </div>
                      <span className="font-inter text-gray-300 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href={whatsappLink(plan.name)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full py-3 md:py-4 rounded-xl font-montserrat font-bold text-center block transition-colors duration-300 mt-auto ${
                    plan.popular
                      ? 'bg-[#FF6B00] lg:hover:bg-[#FF8A33] text-white'
                      : 'bg-white/10 lg:hover:bg-[#FF6B00] text-white border border-white/20 lg:hover:border-[#FF6B00]'
                  }`}
                >
                  Começar Agora
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-12 md:py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-montserrat font-extrabold text-2xl sm:text-4xl md:text-5xl text-white mb-4">
            Pronto para transformar sua <span className="text-[#FF6B00]">alimentação?</span>
          </h2>
          <p className="font-inter text-gray-400 mb-8 max-w-2xl mx-auto">
            Entre em contato agora e comece sua jornada rumo a uma vida mais saudável
          </p>
          <a
            href="https://wa.me/5522992359977?text=Oi%20Joelly!%20Quero%20come%C3%A7ar%20minha%20consultoria%20nutricional!"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#FF6B00] lg:hover:bg-[#FF8A33] text-white font-montserrat font-bold px-10 py-4 rounded-xl transition-all duration-300 shadow-lg shadow-[#FF6B00]/20 lg:hover:shadow-xl lg:hover:shadow-[#FF6B00]/40"
          >
            Falar com Joelly no WhatsApp
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-white/10">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <Link to="/" className="font-inter text-gray-400 lg:hover:text-white transition-colors">
            ← Voltar para página principal
          </Link>
          <p className="font-inter text-gray-500 text-sm">
            © 2024 Joelly Kerolin. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}
