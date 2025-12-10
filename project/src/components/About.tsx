import React from 'react';

export default function About() {
  return (
    <section id="sobre" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Coluna da Imagem (Mobile: Primeiro / Desktop: Segundo) */}
          <div className="order-1 md:order-2">
            <div className="relative group max-w-md mx-auto md:max-w-full">
              <div className="absolute -inset-4 bg-[#FF6B00] rounded-2xl rotate-3 opacity-20 group-hover:rotate-6 transition-transform duration-300"></div>
              {/* Alterado: h-auto e aspect-[3/4] para mostrar mais do corpo (formato retrato) */}
              <img 
                src="/img/joelly-placeholder.jpg" 
                alt="Foto de Joelly" 
                className="relative w-full h-auto aspect-[3/4] object-cover object-top rounded-2xl shadow-2xl transition-all duration-500"
              />
            </div>
          </div>

          {/* Coluna do Texto (Mobile: Segundo / Desktop: Primeiro) */}
          <div className="order-2 md:order-1 text-left">
            <h2 className="font-montserrat font-extrabold text-4xl sm:text-5xl text-[#1A1A1A] mb-8" aria-labelledby="quem-e-joelly">
              Quem é <span className="text-[#FF6B00]">Joelly Kerolin</span>
            </h2>
            
            <div className="space-y-6 font-inter text-lg text-gray-600">
              <p>
                Joelly Kerolin é licenciada em Educação Física pela Universidade Estácio Cabo Frio, RJ e atua há mais de 15 anos na área de saúde, estética e condicionamento físico. Desde muito jovem dedica-se ao bem-estar corporal, apaixonada pela profissão e pela transformação que o exercício proporciona.
              </p>
              
              <p>
                Especializou-se em diferentes áreas complementares para oferecer um atendimento completo e personalizado. Ao longo da carreira, ajudou diversas pessoas a aumentar autoestima, melhorar a saúde e adotar hábitos mais saudáveis — com resultados visíveis em pouco tempo graças ao seu método personalizado e humanizado.
              </p>

              <p>
                Atualmente oferece consultoria presencial e online, com foco em planejar treinos seguros, eficazes e ajustados ao estilo de vida de cada cliente.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}