import { ArrowRight, Zap } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=1920)',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/50"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in-up">
          <h1 className="font-montserrat font-extrabold text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-white mb-6 leading-tight">
            Transforme Seu Corpo.<br />
            <span className="text-[#FF6B00]">Eleve Sua Mente.</span>
          </h1>

          <p className="font-inter text-lg sm:text-xl md:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto">
            Treinos de alta performance, estrutura completa e profissionais dedicados ao seu melhor.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <button className="group bg-[#FF6B00] hover:bg-[#FF8A33] text-white font-montserrat font-bold px-8 py-4 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-[#FF6B00]/50 flex items-center gap-2">
              Matricule-se Agora
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>

            <button className="group bg-transparent hover:bg-white/10 text-white font-montserrat font-bold px-8 py-4 rounded-lg text-lg border-2 border-white transition-all duration-300 transform hover:scale-105">
              Agendar Aula Experimental
            </button>
          </div>

          <div className="inline-flex items-center gap-2 bg-[#FF6B00]/20 backdrop-blur-sm border border-[#FF6B00] px-6 py-3 rounded-full">
            <Zap className="w-5 h-5 text-[#FF6B00]" fill="#FF6B00" />
            <span className="text-white font-inter font-medium">
              Primeira aula gratuita • Resultados em 4 semanas
            </span>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-white rounded-full"></div>
        </div>
      </div>
    </section>
  );
}
