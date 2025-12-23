import { ArrowRight, Zap } from 'lucide-react';

export default function FinalCTA() {
  const phoneNumber = "5522992359977";
  const message = "Olá! Vim do site e estou interessado em iniciar uma consultoria. Por onde começamos?";
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#1A1A1A] via-[#000000] to-[#1A1A1A]">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#FF6B00] rounded-full filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#FF6B00] rounded-full filter blur-3xl animate-pulse delay-1000"></div>
        </div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex justify-center mb-8">
          <div className="bg-[#FF6B00]/20 backdrop-blur-sm border border-[#FF6B00] p-4 rounded-full">
            <Zap className="w-12 h-12 text-[#FF6B00]" fill="#FF6B00" />
          </div>
        </div>

        <h2 className="font-montserrat font-extrabold text-4xl sm:text-5xl md:text-6xl text-white mb-6">
          Pronto para <span className="text-[#FF6B00]">Começar?</span>
        </h2>

        <p className="font-inter text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
          Dê o primeiro passo rumo à sua melhor versão. Junte-se a centenas de alunos que já transformaram suas vidas.
        </p>

        <a 
          href={whatsappLink}
          target="_blank" 
          rel="noopener noreferrer"
          // MUDANÇA: lg:hover
          className="group bg-[#FF6B00] lg:hover:bg-[#FF8A33] text-white font-montserrat font-bold px-12 py-6 rounded-xl text-xl transition-all duration-300 transform lg:hover:scale-105 lg:hover:shadow-2xl lg:hover:shadow-[#FF6B00]/50 flex items-center justify-center gap-3 mx-auto w-fit"
        >
          QUERO MUDAR DE VIDA
          <ArrowRight className="w-6 h-6 lg:group-hover:translate-x-1 transition-transform" />
        </a>
      </div>
    </section>
  );
}