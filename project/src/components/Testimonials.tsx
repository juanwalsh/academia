import { Quote, Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Ana Silva',
    role: 'Empresária',
    image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400',
    text: 'Em 3 meses perdi 12kg e ganhei muito mais disposição. A equipe da IronPulse é extremamente atenciosa e os treinos são desafiadores na medida certa.',
    rating: 5
  },
  {
    name: 'Carlos Mendes',
    role: 'Engenheiro',
    image: 'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=400',
    text: 'Melhor investimento que fiz em mim mesmo. Estrutura impecável, profissionais capacitados e um ambiente que realmente motiva você a superar seus limites.',
    rating: 5
  },
  {
    name: 'Marina Costa',
    role: 'Designer',
    image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=400',
    text: 'Treinava em casa e não via resultados. Aqui, com o acompanhamento profissional e a energia do lugar, minha performance triplicou. Recomendo muito!',
    rating: 5
  }
];

export default function Testimonials() {
  return (
    <section id="depoimentos" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-montserrat font-extrabold text-4xl sm:text-5xl md:text-6xl text-[#1A1A1A] mb-6">
            O Que Dizem Nossos <span className="text-[#FF6B00]">Alunos</span>
          </h2>
          <p className="font-inter text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Histórias reais de transformação e superação
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group bg-[#E8E8E8] hover:bg-[#1A1A1A] rounded-2xl p-8 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="flex items-center gap-4 mb-6">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover border-4 border-[#FF6B00]"
                />
                <div>
                  <h4 className="font-montserrat font-bold text-lg text-[#1A1A1A] group-hover:text-white transition-colors">
                    {testimonial.name}
                  </h4>
                  <p className="font-inter text-sm text-gray-600 group-hover:text-gray-400 transition-colors">
                    {testimonial.role}
                  </p>
                </div>
              </div>

              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-[#FF6B00]" fill="#FF6B00" />
                ))}
              </div>

              <div className="relative">
                <Quote className="absolute -top-2 -left-2 w-8 h-8 text-[#FF6B00] opacity-20" />
                <p className="font-inter text-gray-700 group-hover:text-gray-300 transition-colors relative z-10 pl-4">
                  {testimonial.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
