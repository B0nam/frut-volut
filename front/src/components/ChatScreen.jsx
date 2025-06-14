import React, { useState, useEffect, useRef } from 'react';
import { Send } from 'lucide-react';
import mascoteLogo from '../assets/mascote.png';

const ChatScreen = ({ user, onContinue }) => {
  const [messages, setMessages] = useState([]);
  const [currentStep, setCurrentStep] = useState(0);
  const [showUserOptions, setShowUserOptions] = useState(false);
  const messagesEndRef = useRef(null);

  const chatSteps = [
    {
      mascotMessage: `Olá ${user?.username}! 👋 Eu sou o Mutirão, seu assistente virtual! Que bom ter você aqui conosco!`,
      userOptions: ["Oi! Prazer em conhecer!", "Olá! Estou animado para começar!", "Que legal! Vamos lá!"]
    },
    {
      mascotMessage: "Nosso aplicativo foi criado para conectar pessoas que querem fazer a diferença em suas comunidades! 🌟 Aqui você pode sugerir ações como limpeza de praças, pintura de muros, ou revitalização de espaços públicos.",
      userOptions: ["Que ideia bacana!", "Adorei o conceito!", "Isso é muito importante!"]
    },
    {
      mascotMessage: "Funciona assim: criamos GRUPOS de pessoas interessadas em melhorar um bairro, cidade ou comunidade específica. 👥 Cada grupo pode organizar vários eventos e ações!",
      userOptions: ["Entendi! Como posso participar?", "Parece muito organizado!", "Que sistema interessante!"]
    },
    {
      mascotMessage: "Dentro de cada grupo, criamos EVENTOS específicos como 'Limpar a Praça Central' ou 'Pintar o Muro da Escola'. 📅 Cada pessoa pode se inscrever e mostrar sua participação com fotos e descrições!",
      userOptions: ["Perfeito! Quero participar!", "Vou adorar contribuir!", "Que forma legal de ajudar!"]
    },
    {
      mascotMessage: "Agora você está pronto para transformar sua comunidade! 🚀 Vamos começar explorando os grupos e eventos disponíveis?",
      userOptions: ["Sim, vamos começar!", "Estou pronto!", "Vamos fazer a diferença!"]
    }
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    // Iniciar o chat com a primeira mensagem do mascote
    if (currentStep < chatSteps.length) {
      const timer = setTimeout(() => {
        setMessages(prev => [...prev, {
          type: 'mascot',
          text: chatSteps[currentStep].mascotMessage,
          timestamp: new Date()
        }]);
        setShowUserOptions(true);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [currentStep]);

  const handleUserResponse = (response) => {
    // Adicionar resposta do usuário
    setMessages(prev => [...prev, {
      type: 'user',
      text: response,
      timestamp: new Date()
    }]);

    setShowUserOptions(false);

    // Avançar para o próximo passo ou finalizar
    if (currentStep < chatSteps.length - 1) {
      setTimeout(() => {
        setCurrentStep(currentStep + 1);
      }, 1500);
    } else {
      // Chat finalizado, ir para a tela principal
      setTimeout(() => {
        onContinue();
      }, 2000);
    }
  };

  return (
    <div className="mobile-container flex flex-col min-h-screen">
      {/* Header do Chat */}
      <div className="glass-effect m-4 p-4 flex items-center space-x-3">
        <img 
          src={mascoteLogo} 
          alt="Mascote" 
          className="w-12 h-12 object-contain floating"
        />
        <div>
          <h2 className="text-lg font-bold text-slate-700">Mutirão</h2>
          <p className="text-sm text-slate-600">Seu assistente virtual</p>
        </div>
      </div>

      {/* Área de Mensagens */}
      <div className="flex-1 p-4 space-y-4 overflow-y-auto">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`chat-bubble ${message.type} ${message.type === 'mascot' ? 'mascot' : 'user'}`}
          >
            {message.type === 'mascot' && (
              <div className="flex items-start space-x-2">
                <img 
                  src={mascoteLogo} 
                  alt="Mascote" 
                  className="w-8 h-8 object-contain mt-1"
                />
                <div className="flex-1">
                  <p className="text-sm">{message.text}</p>
                </div>
              </div>
            )}
            {message.type === 'user' && (
              <p className="text-sm">{message.text}</p>
            )}
          </div>
        ))}

        {/* Opções de Resposta do Usuário */}
        {showUserOptions && currentStep < chatSteps.length && (
          <div className="space-y-2 mt-4">
            <p className="text-sm text-slate-600 text-center mb-3">
              Escolha uma resposta:
            </p>
            {chatSteps[currentStep].userOptions.map((option, index) => (
              <button
                key={index}
                onClick={() => handleUserResponse(option)}
                className="w-full p-3 text-left rounded-2xl bg-white/70 hover:bg-white/90 border border-white/50 transition-all duration-300 hover:transform hover:scale-105"
              >
                <span className="text-sm text-slate-700">{option}</span>
              </button>
            ))}
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Indicador de Progresso */}
      <div className="p-4">
        <div className="glass-effect p-3 text-center">
          <p className="text-xs text-slate-600">
            Passo {currentStep + 1} de {chatSteps.length}
          </p>
          <div className="w-full bg-white/30 rounded-full h-2 mt-2">
            <div 
              className="bg-gradient-to-r from-blue-400 to-turquoise-400 h-2 rounded-full transition-all duration-500"
              style={{ width: `${((currentStep + 1) / chatSteps.length) * 100}%` }}
            ></div>
          </div>
        </div>
      </div>

      {/* Elementos decorativos */}
      <div className="absolute top-32 right-8 w-3 h-3 bg-blue-300 rounded-full opacity-60 floating" style={{animationDelay: '0.5s'}}></div>
      <div className="absolute top-64 left-6 w-4 h-4 bg-turquoise-300 rounded-full opacity-50 floating" style={{animationDelay: '1s'}}></div>
      <div className="absolute bottom-40 right-10 w-2 h-2 bg-green-300 rounded-full opacity-70 floating" style={{animationDelay: '1.5s'}}></div>
    </div>
  );
};

export default ChatScreen;

