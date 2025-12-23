import { Facebook, Instagram, Mail, MapPin, Phone, Twitter, Youtube, Zap } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-black text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="bg-[#FF6B00] p-2 rounded-lg">
                <Zap className="w-6 h-6 text-white" fill="white" />
              </div>
              <span className="font-montserrat font-extrabold text-2xl">
                Consultoria <span className="text-[#FF6B00]">Fitness</span>
              </span>
            </div>
            <p className="font-inter text-gray-400 mb-6">
              Transformando vidas através do fitness de alta performance e acompanhamento personalizado.
            </p>
            <div className="flex gap-4">
              {/* Link do Instagram Atualizado */}
              <a href="https://www.instagram.com/joelli120/" target="_blank" rel="noopener noreferrer" className="bg-white/10 hover:bg-[#FF6B00] p-2 rounded-lg transition-all duration-300 transform hover:scale-110">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="bg-white/10 hover:bg-[#FF6B00] p-2 rounded-lg transition-all duration-300 transform hover:scale-110">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="bg-white/10 hover:bg-[#FF6B00] p-2 rounded-lg transition-all duration-300 transform hover:scale-110">
                <Youtube className="w-5 h-5" />
              </a>
              <a href="#" className="bg-white/10 hover:bg-[#FF6B00] p-2 rounded-lg transition-all duration-300 transform hover:scale-110">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-montserrat font-bold text-lg mb-6">Links Rápidos</h3>
            <ul className="space-y-3">
              <li>
                <a href="#sobre" className="font-inter text-gray-400 hover:text-[#FF6B00] transition-colors">
                  Sobre Nós
                </a>
              </li>
              <li>
                <a href="#modalidades" className="font-inter text-gray-400 hover:text-[#FF6B00] transition-colors">
                  Modalidades
                </a>
              </li>
              <li>
                <a href="#estrutura" className="font-inter text-gray-400 hover:text-[#FF6B00] transition-colors">
                  Estrutura
                </a>
              </li>
              <li>
                <a href="#planos" className="font-inter text-gray-400 hover:text-[#FF6B00] transition-colors">
                  Planos
                </a>
              </li>
              <li>
                <a href="#depoimentos" className="font-inter text-gray-400 hover:text-[#FF6B00] transition-colors">
                  Depoimentos
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-montserrat font-bold text-lg mb-6">Horários</h3>
            <ul className="space-y-3 font-inter text-gray-400">
              <li>Segunda - Sexta: 5h - 23h</li>
              <li>Sábado: 7h - 20h</li>
              <li>Domingo: 8h - 18h</li>
              <li className="text-[#FF6B00] font-bold pt-2">Suporte Online: Diário</li>
            </ul>
          </div>

          <div>
            <h3 className="font-montserrat font-bold text-lg mb-6">Contato</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#FF6B00] flex-shrink-0 mt-1" />
                <span className="font-inter text-gray-400">
                  Cabo Frio - RJ<br />
                  Atendimento Presencial e Online
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#FF6B00] flex-shrink-0" />
                <a href="https://wa.me/5522992359977" target="_blank" rel="noopener noreferrer" className="font-inter text-gray-400 hover:text-white transition-colors">
                  (22) 99235-9977
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#FF6B00] flex-shrink-0" />
                <span className="font-inter text-gray-400">contato@joelly.fit</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="font-inter text-gray-400">
            © 2024 Joelly Fitness. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}