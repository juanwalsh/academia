import { Bot, MessageSquare, Send, X } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

type Message = {
  id: number;
  type: 'bot' | 'user';
  text: string;
  isTyping?: boolean;
  options?: string[]; // Para botões de escolha
};

type UserData = {
  name: string;
  age: string;
  goal: string;
};

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [step, setStep] = useState(0); // 0: Nome, 1: Idade, 2: Objetivo, 3: Final
  const [inputText, setInputText] = useState('');
  const [userData, setUserData] = useState<UserData>({ name: '', age: '', goal: '' });
  const [isTyping, setIsTyping] = useState(false);
  
  // Controle da notificação flutuante
  const [notificationIndex, setNotificationIndex] = useState(0);
  const [showNotification, setShowNotification] = useState(true);
  
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const notifications = [
    "Olá! Posso te ajudar?",
    "Quer atingir o corpo desejado?",
    "Vamos iniciar sua transformação?"
  ];

  // Rola para o fim do chat
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  // Ciclo de notificações (pop-ups) - ALEATÓRIO
  useEffect(() => {
    if (isOpen) return;

    // Define uma mensagem inicial aleatória
    setNotificationIndex(Math.floor(Math.random() * notifications.length));
    
    const interval = setInterval(() => {
      setShowNotification(false); // Inicia a saída (fade out)
      
      // Tempo para trocar o texto enquanto está invisível
      setTimeout(() => {
        setNotificationIndex((prev) => {
          let newIndex;
          do {
            newIndex = Math.floor(Math.random() * notifications.length);
          } while (newIndex === prev && notifications.length > 1);
          return newIndex;
        });
        setShowNotification(true); // Inicia a entrada (fade in)
      }, 500); // Aguarda a animação de saída terminar
      
    }, 15000); // 15 SEGUNDOS entre as mensagens

    return () => clearInterval(interval);
  }, [isOpen]);

  // Inicializa o chat com saudação
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      startConversation();
    }
  }, [isOpen]);

  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return "Bom dia";
    if (hour < 18) return "Boa tarde";
    return "Boa noite";
  };

  const startConversation = () => {
    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);
      setMessages([
        {
          id: 1,
          type: 'bot',
          text: `${getGreeting()}! Sou o assistente virtual da Joelly. Para começarmos, qual é o seu nome?`
        }
      ]);
    }, 1500);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    
    // Se estiver no passo 1 (Idade), permite APENAS números
    if (step === 1) {
      if (/^\d*$/.test(value)) {
        setInputText(value);
      }
    } else {
      setInputText(value);
    }
  };

  const handleSend = () => {
    if (!inputText.trim()) return;

    const userMsg = inputText;
    setMessages(prev => [...prev, { id: Date.now(), type: 'user', text: userMsg }]);
    setInputText('');
    processResponse(userMsg);
  };

  const handleOptionClick = (option: string) => {
    setMessages(prev => [...prev, { id: Date.now(), type: 'user', text: option }]);
    processResponse(option);
  };

  const processResponse = (response: string) => {
    setIsTyping(true);

    setTimeout(() => {
      setIsTyping(false);
      let botResponse: Message = { id: Date.now(), type: 'bot', text: '' };

      if (step === 0) {
        setUserData(prev => ({ ...prev, name: response }));
        setStep(1);
        botResponse.text = `Prazer, ${response}. Qual a sua idade?`;
      } else if (step === 1) {
        setUserData(prev => ({ ...prev, age: response }));
        setStep(2);
        botResponse.text = "Entendido. Qual é o seu principal objetivo hoje?";
        botResponse.options = ["Hipertrofia", "Emagrecimento", "Definição", "Saúde/Outros"];
      } else if (step === 2) {
        const finalData = { ...userData, goal: response };
        setUserData(finalData);
        setStep(3);
        botResponse.text = "Perfeito! Gerando sua ficha, Vou te encaminhar para a Joelly no WhatsApp agora mesmo!";
        
        setTimeout(() => redirectToWhatsApp(finalData), 3000);
      }

      setMessages(prev => [...prev, botResponse]);
    }, 1500);
  };

  const redirectToWhatsApp = (data: UserData) => {
    const phone = "5522992359977";
    const text = `*SOLICITAÇÃO DE CONSULTORIA*\n\n*FICHA DO ALUNO*\nNome: ${data.name}\nIdade: ${data.age}\nObjetivo: ${data.goal}\n\nOlá Joelly, gostaria de receber informações sobre a consultoria.`;
    
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-4 font-inter">
      
      {/* ================================================================
        Janela do Chat
        Animação controlada pela classe animate-fade-in-up e duration
        ================================================================
      */}
      {isOpen && (
        <div 
          className="bg-[#1A1A1A] border border-[#333] w-[350px] max-w-[90vw] h-[500px] max-h-[80vh] rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-fade-in-up mb-2 origin-bottom-right"
          // COMENTÁRIO: ALTERE O '0.3s' ABAIXO PARA MUDAR A VELOCIDADE DE ABERTURA (ex: 0.1s é ultra rápido, 1s é lento)
          style={{ animationDuration: '0.3s' }} 
        >
          
          {/* Header */}
          <div className="bg-black p-4 flex items-center justify-between border-b border-[#FF6B00]">
            <div className="flex items-center gap-3">
              <div className="bg-[#FF6B00] p-2 rounded-full">
                <Bot className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="text-white font-montserrat font-bold">Assistente Joelly</h3>
                <span className="flex items-center gap-1 text-xs text-[#FF6B00]">
                  <span className="w-2 h-2 bg-[#FF6B00] rounded-full animate-pulse"></span>
                  Online agora
                </span>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-white transition-colors">
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Área de Mensagens */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-thin scrollbar-thumb-[#FF6B00] scrollbar-track-transparent">
            {messages.map((msg) => (
              <div key={msg.id} className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div 
                  className={`max-w-[80%] p-3 rounded-2xl text-sm ${
                    msg.type === 'user' 
                      ? 'bg-[#FF6B00] text-white rounded-br-none' 
                      : 'bg-[#333] text-gray-100 rounded-bl-none'
                  }`}
                >
                  <p>{msg.text}</p>
                </div>
              </div>
            ))}

            {messages.length > 0 && messages[messages.length - 1].options && !isTyping && step !== 3 && (
              <div className="flex flex-col gap-2 mt-2 animate-fade-in">
                {messages[messages.length - 1].options!.map((opt) => (
                  <button
                    key={opt}
                    onClick={() => handleOptionClick(opt)}
                    className="bg-transparent border border-[#FF6B00] text-[#FF6B00] hover:bg-[#FF6B00] hover:text-white py-2 px-4 rounded-xl text-sm font-bold transition-all duration-300"
                  >
                    {opt}
                  </button>
                ))}
              </div>
            )}

            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-[#333] p-3 rounded-2xl rounded-bl-none flex gap-1">
                  <span className="w-2 h-2 bg-gray-500 rounded-full animate-bounce [animation-delay:-0.3s]"></span>
                  <span className="w-2 h-2 bg-gray-500 rounded-full animate-bounce [animation-delay:-0.15s]"></span>
                  <span className="w-2 h-2 bg-gray-500 rounded-full animate-bounce"></span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-3 bg-black border-t border-[#333]">
            <div className="flex items-center gap-2 bg-[#1A1A1A] rounded-full px-4 py-2 border border-[#333] focus-within:border-[#FF6B00] transition-colors">
              <input
                type={step === 1 ? "tel" : "text"} 
                value={inputText}
                onChange={handleInputChange} 
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder={step === 2 ? "Selecione uma opção acima..." : (step === 1 ? "Digite apenas números..." : "Digite sua mensagem...")}
                disabled={step === 2 || step === 3 || isTyping}
                className="flex-1 bg-transparent text-white text-sm outline-none placeholder-gray-500 disabled:opacity-50"
              />
              <button 
                onClick={handleSend}
                disabled={!inputText.trim() || step === 2 || step === 3}
                className="text-[#FF6B00] disabled:opacity-50 hover:scale-110 transition-transform"
              >
                <Send className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Container Botão + Notificação */}
      <div className="flex items-center gap-3">
        
        {/* Notificação Flutuante (À Esquerda do Botão) */}
        {!isOpen && (
          <div 
            // COMENTÁRIO: A classe 'duration-500' controla a velocidade da animação do texto flutuante
            className={`bg-white text-black px-4 py-3 rounded-xl shadow-xl shadow-black/20 max-w-[200px] relative transition-all duration-500 ease-in-out transform ${
              showNotification 
                ? 'opacity-100 translate-y-0 scale-100'  // Visível: Posição normal e tamanho real
                : 'opacity-0 translate-y-2 scale-90'     // Invisível: Levemente pra baixo e menor (efeito de pop)
            }`}
          >
            <p className="text-sm font-medium">{notifications[notificationIndex]}</p>
            
            {/* Triângulo do balão */}
            <div className="absolute top-1/2 -right-1 w-3 h-3 bg-white transform rotate-45 -translate-y-1/2"></div>
          </div>
        )}

        {/* Botão Flutuante (Toggle) */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`bg-[#FF6B00] hover:bg-[#FF8A33] text-white p-4 rounded-full shadow-2xl shadow-[#FF6B00]/50 transition-all duration-300 transform hover:scale-110 ${isOpen ? 'rotate-90' : 'rotate-0'}`}
        >
          {isOpen ? <X className="w-7 h-7" /> : <MessageSquare className="w-7 h-7" />}
        </button>

      </div>
    </div>
  );
}