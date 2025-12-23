import React from 'react';

export default function About() {
  return (
    <section id="sobre" className="py-12 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="order-1 md:order-2">
            <div className="relative group max-w-sm mx-auto md:max-w-full">
              {/* MUDANÇA: lg:group-hover */}
              <div className="absolute -inset-4 bg-[#FF6B00] rounded-2xl rotate-3 opacity-20 lg:group-hover:rotate-6 transition-transform duration-300"></div>
              <img 
                src="/img/joelly-placeholder.jpg" 
                alt="Foto de Joelly" 
                className="relative w-full h-auto aspect-[3/4] object-cover object-top rounded-2xl shadow-2xl transition-all duration-500"
              />
            </div>
          </div>

          <div className="order-2 md:order-1 text-left">
            <h2 className="font-montserrat font-extrabold text-3xl sm:text-5xl text-[#1A1A1A] mb-6 md:mb-8" aria-labelledby="quem-e-joelly">
              Quem é <span className="text-[#FF6B00]">Joelly Kerolin</span>
            </h2>
            
            <div className="space-y-4 md:space-y-6 font-inter text-base md:text-lg text-gray-600">
              <p>
                Joelly Kerolin é personal trainer e terapeuta nutricional há mais de 10 anos na área da saúde, estética e condicionamento físico. Pós graduada em treinamento desportivo e personal trainer.
              </p>

              <p>
                Desde muito jovem dedica-se ao bem-estar corporal, apaixonada pela profissão e pela transformação que o exercício proporciona. Especializou-se em diferentes áreas complementares para oferecer um atendimento completo e personalizado.
              </p>

              <p>
                Ao longo da carreira, ajudou diversas pessoas a aumentar autoestima, melhorar a saúde e adotar hábitos mais saudáveis com resultados visíveis em pouco tempo graças ao seu método personalizado e humanizado.
              </p>

              <p>
                Atualmente oferece consultoria presencial e online, com foco em planejar treinos seguros, eficazes e ajustados ao estilo de vida de cada cliente.
              </p>

              <p>
                Sou profissional da área de nutrição e treinamento físico, apaixonada por saúde, bem-estar e transformação de vidas. Acredito que cada pessoa é única e, por isso, meu trabalho é totalmente personalizado, respeitando objetivos, rotina e individualidade de cada aluno ou paciente.
              </p>

              <p>
                Atuo ajudando pessoas a conquistarem mais saúde, autoestima e qualidade de vida, por meio de uma alimentação equilibrada e treinos eficientes, seguros e adaptados à realidade de cada um.
              </p>

              <p>
                Meu propósito vai além da estética: é promover hábitos sustentáveis, resultados reais e duradouros, sempre com acompanhamento, motivação e cuidado.
              </p>

              <p className="font-semibold text-[#FF6B00]">
                Nutrição e treino alinhados para transformar corpo e mente.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}