import { Quote, Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Ana Silva',
    role: 'Empresária',
    image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400',
    text: 'Em 3 meses perdi 12kg e ganhei muito mais disposição. O acompanhamento da Joelly é extremamente atencioso.',
    rating: 5
  },
  {
    name: 'Carlos Mendes',
    role: 'Engenheiro',
    image: 'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=400',
    text: 'Melhor investimento que fiz em mim mesmo. Método impecável, profissionais capacitados e suporte que realmente motiva.',
    rating: 5
  },
  {
    name: 'Marina Costa',
    role: 'Designer',
    image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=400',
    text: 'Treinava em casa e não via resultados. Agora, com a consultoria online, minha performance triplicou. Recomendo!',
    rating: 5
  }
];

export default function Testimonials() {
  return (
    <section id="depoimentos" className="py-12 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="font-montserrat font-extrabold text-3xl sm:text-5xl md:text-6xl text-[#1A1A1A] mb-4">
            Resultados <span className="text-[#FF6B00]">Reais</span>
          </h2>
          <p className="font-inter text-base sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Histórias de quem transformou sua vida com nosso método
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              // MUDANÇA: lg:hover
              className="group bg-[#E8E8E8] lg:hover:bg-[#1A1A1A] rounded-2xl p-6 md:p-8 transition-all duration-300 transform lg:hover:-translate-y-2 lg:hover:shadow-xl"
            >
              <div className="flex items-center gap-4 mb-6">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover border-4 border-[#FF6B00]"
                />
                <div>
                  <h4 className="font-montserrat font-bold text-lg text-[#1A1A1A] lg:group-hover:text-white transition-colors">
                    {testimonial.name}
                  </h4>
                  <p className="font-inter text-sm text-gray-600 lg:group-hover:text-gray-400 transition-colors">
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
                <p className="font-inter text-gray-700 lg:group-hover:text-gray-300 transition-colors relative z-10 pl-4">
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