import { ArrowRight, Zap } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-[500px] lg:min-h-[85vh] flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=1920)',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/50"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-24 lg:pt-20">
        <div className="animate-fade-in-up">
          <h1 className="font-montserrat font-extrabold text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-white mb-4 lg:mb-6 leading-tight">
            Transforme Seu Corpo.<br />
            <span className="text-[#FF6B00]">Eleve Sua Mente.</span>
          </h1>

          <p className="font-inter text-base sm:text-xl md:text-2xl text-gray-300 mb-8 lg:mb-10 max-w-3xl mx-auto">
            Consultoria de alta performance e acompanhamento dedicado ao seu melhor.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 lg:gap-4 justify-center items-center mb-8">
            <a 
              href="https://wa.me/5522992359977?text=Olá! Gostaria de saber mais sobre a consultoria."
              target="_blank"
              rel="noopener noreferrer"
              // MUDANÇA: 'lg:hover' adicionado em tudo que é interativo
              className="w-full sm:w-auto group bg-[#FF6B00] lg:hover:bg-[#FF8A33] text-white font-montserrat font-bold px-6 py-3 lg:px-8 lg:py-4 rounded-lg text-base lg:text-lg transition-all duration-300 shadow-lg shadow-[#FF6B00]/20 lg:hover:shadow-xl lg:hover:shadow-[#FF6B00]/40 flex items-center justify-center gap-2"
            >
              Iniciar Consultoria
              <ArrowRight className="w-5 h-5 lg:group-hover:translate-x-1 transition-transform" />
            </a>

            <a 
              href="https://wa.me/5522992359977?text=Tenho dúvidas sobre os planos."
              target="_blank"
              rel="noopener noreferrer"
              // MUDANÇA: 'lg:hover' aqui também
              className="w-full sm:w-auto group bg-transparent lg:hover:bg-white/10 text-white font-montserrat font-bold px-6 py-3 lg:px-8 lg:py-4 rounded-lg text-base lg:text-lg border-2 border-white transition-all duration-300 lg:hover:shadow-lg lg:hover:shadow-white/20 flex justify-center"
            >
              Tirar Dúvidas
            </a>
          </div>

          <div className="inline-flex items-center gap-2 bg-[#FF6B00]/20 backdrop-blur-sm border border-[#FF6B00] px-4 py-2 lg:px-6 lg:py-3 rounded-full">
            <Zap className="w-4 h-4 lg:w-5 lg:h-5 text-[#FF6B00]" fill="#FF6B00" />
            <span className="text-white font-inter font-medium text-xs lg:text-base">
              Resultados reais • Acompanhamento Personalizado
            </span>
          </div>
        </div>
      </div>

      <div className="absolute bottom-4 lg:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-5 h-8 lg:w-6 lg:h-10 border-2 border-white rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-white rounded-full"></div>
        </div>
      </div>
    </section>
  );
}