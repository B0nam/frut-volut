import React, { useState } from 'react';
import { Users, Calendar, Star, Plus, ArrowLeft } from 'lucide-react';
import iconGrupo from '../assets/icon-grupo.png';
import iconEvento from '../assets/icon-evento.png';
import iconParticipacao from '../assets/icon-participacao.png';

const MainScreen = ({ user, onLogout, onBackToChat }) => {
  const [currentView, setCurrentView] = useState('home');
  const [selectedGroup, setSelectedGroup] = useState(null);
  const [selectedEvent, setSelectedEvent] = useState(null);

  // Dados simulados
  const grupos = [
    {
      id: 1,
      nome: "Amigos do Bairro Centro",
      descricao: "Grupo dedicado a melhorar o centro da cidade",
      membros: 45,
      eventos: 8
    },
    {
      id: 2,
      nome: "Comunidade Verde",
      descricao: "Focado em sustentabilidade e meio ambiente",
      membros: 32,
      eventos: 5
    },
    {
      id: 3,
      nome: "Vizinhos Solidários",
      descricao: "Ajuda mútua entre vizinhos",
      membros: 28,
      eventos: 12
    }
  ];

  const eventos = [
    {
      id: 1,
      grupoId: 1,
      titulo: "Limpeza da Praça Central",
      descricao: "Mutirão para limpeza e organização da praça",
      data: "2025-06-20",
      participantes: 15,
      status: "aberto"
    },
    {
      id: 2,
      grupoId: 1,
      titulo: "Pintura do Muro da Escola",
      descricao: "Renovar a pintura do muro da escola municipal",
      data: "2025-06-25",
      participantes: 8,
      status: "aberto"
    },
    {
      id: 3,
      grupoId: 2,
      titulo: "Plantio de Árvores",
      descricao: "Plantar mudas no parque da cidade",
      data: "2025-06-22",
      participantes: 12,
      status: "aberto"
    }
  ];

  const renderHome = () => (
    <div className="p-6 space-y-6">
      <div className="text-center mb-8">
        <h1 className="text-2xl font-bold text-slate-700 mb-2">
          Olá, {user?.username}! 👋
        </h1>
        <p className="text-slate-600">
          Pronto para transformar sua comunidade?
        </p>
      </div>

      <div className="grid gap-4">
        <div 
          className="frutiger-card cursor-pointer"
          onClick={() => setCurrentView('grupos')}
        >
          <div className="flex items-center space-x-4">
            <img src={iconGrupo} alt="Grupos" className="w-12 h-12" />
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-slate-700">Grupos</h3>
              <p className="text-sm text-slate-600">
                Encontre ou crie grupos em sua comunidade
              </p>
            </div>
            <div className="text-right">
              <span className="text-2xl font-bold text-blue-600">{grupos.length}</span>
              <p className="text-xs text-slate-500">disponíveis</p>
            </div>
          </div>
        </div>

        <div 
          className="frutiger-card cursor-pointer"
          onClick={() => setCurrentView('eventos')}
        >
          <div className="flex items-center space-x-4">
            <img src={iconEvento} alt="Eventos" className="w-12 h-12" />
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-slate-700">Eventos</h3>
              <p className="text-sm text-slate-600">
                Participe de ações em sua comunidade
              </p>
            </div>
            <div className="text-right">
              <span className="text-2xl font-bold text-green-600">{eventos.length}</span>
              <p className="text-xs text-slate-500">ativos</p>
            </div>
          </div>
        </div>

        <div 
          className="frutiger-card cursor-pointer"
          onClick={() => setCurrentView('participacoes')}
        >
          <div className="flex items-center space-x-4">
            <img src={iconParticipacao} alt="Participações" className="w-12 h-12" />
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-slate-700">Minhas Participações</h3>
              <p className="text-sm text-slate-600">
                Veja suas contribuições
              </p>
            </div>
            <div className="text-right">
              <span className="text-2xl font-bold text-orange-600">3</span>
              <p className="text-xs text-slate-500">eventos</p>
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-3 mt-8">
        <button 
          onClick={onBackToChat}
          className="glossy-button w-full"
        >
          Ver Tutorial Novamente
        </button>
        <button 
          onClick={onLogout}
          className="w-full p-3 rounded-2xl bg-white/50 hover:bg-white/70 border border-white/50 transition-all duration-300 text-slate-700"
        >
          Sair
        </button>
      </div>
    </div>
  );

  const renderGrupos = () => (
    <div className="p-6">
      <div className="flex items-center mb-6">
        <button 
          onClick={() => setCurrentView('home')}
          className="mr-4 p-2 rounded-full bg-white/50 hover:bg-white/70"
        >
          <ArrowLeft size={20} className="text-slate-700" />
        </button>
        <h2 className="text-xl font-bold text-slate-700">Grupos</h2>
      </div>

      <div className="space-y-4">
        {grupos.map(grupo => (
          <div key={grupo.id} className="frutiger-card cursor-pointer">
            <div className="flex items-start space-x-4">
              <img src={iconGrupo} alt="Grupo" className="w-10 h-10 mt-1" />
              <div className="flex-1">
                <h3 className="font-semibold text-slate-700">{grupo.nome}</h3>
                <p className="text-sm text-slate-600 mb-2">{grupo.descricao}</p>
                <div className="flex space-x-4 text-xs text-slate-500">
                  <span>{grupo.membros} membros</span>
                  <span>{grupo.eventos} eventos</span>
                </div>
              </div>
              <button className="px-4 py-2 bg-blue-500 text-white rounded-full text-sm hover:bg-blue-600 transition-colors">
                Participar
              </button>
            </div>
          </div>
        ))}
      </div>

      <button className="glossy-button w-full mt-6">
        <Plus size={20} className="mr-2" />
        Criar Novo Grupo
      </button>
    </div>
  );

  const renderEventos = () => (
    <div className="p-6">
      <div className="flex items-center mb-6">
        <button 
          onClick={() => setCurrentView('home')}
          className="mr-4 p-2 rounded-full bg-white/50 hover:bg-white/70"
        >
          <ArrowLeft size={20} className="text-slate-700" />
        </button>
        <h2 className="text-xl font-bold text-slate-700">Eventos</h2>
      </div>

      <div className="space-y-4">
        {eventos.map(evento => (
          <div key={evento.id} className="frutiger-card cursor-pointer">
            <div className="flex items-start space-x-4">
              <img src={iconEvento} alt="Evento" className="w-10 h-10 mt-1" />
              <div className="flex-1">
                <h3 className="font-semibold text-slate-700">{evento.titulo}</h3>
                <p className="text-sm text-slate-600 mb-2">{evento.descricao}</p>
                <div className="flex space-x-4 text-xs text-slate-500">
                  <span>📅 {new Date(evento.data).toLocaleDateString('pt-BR')}</span>
                  <span>👥 {evento.participantes} participantes</span>
                </div>
              </div>
              <button className="px-4 py-2 bg-green-500 text-white rounded-full text-sm hover:bg-green-600 transition-colors">
                Participar
              </button>
            </div>
          </div>
        ))}
      </div>

      <button className="glossy-button w-full mt-6">
        <Plus size={20} className="mr-2" />
        Criar Novo Evento
      </button>
    </div>
  );

  const renderParticipacoes = () => (
    <div className="p-6">
      <div className="flex items-center mb-6">
        <button 
          onClick={() => setCurrentView('home')}
          className="mr-4 p-2 rounded-full bg-white/50 hover:bg-white/70"
        >
          <ArrowLeft size={20} className="text-slate-700" />
        </button>
        <h2 className="text-xl font-bold text-slate-700">Minhas Participações</h2>
      </div>

      <div className="space-y-4">
        <div className="frutiger-card">
          <div className="flex items-start space-x-4">
            <img src={iconParticipacao} alt="Participação" className="w-10 h-10 mt-1" />
            <div className="flex-1">
              <h3 className="font-semibold text-slate-700">Limpeza da Praça Central</h3>
              <p className="text-sm text-slate-600 mb-2">
                Participei da limpeza e organização da praça. Coletamos 15 sacos de lixo!
              </p>
              <div className="text-xs text-slate-500">
                📅 Realizado em 15/06/2025
              </div>
            </div>
            <div className="text-orange-500">
              <Star size={20} fill="currentColor" />
            </div>
          </div>
        </div>

        <div className="frutiger-card">
          <div className="flex items-start space-x-4">
            <img src={iconParticipacao} alt="Participação" className="w-10 h-10 mt-1" />
            <div className="flex-1">
              <h3 className="font-semibold text-slate-700">Plantio de Árvores</h3>
              <p className="text-sm text-slate-600 mb-2">
                Ajudei a plantar 20 mudas no parque. Foi muito gratificante!
              </p>
              <div className="text-xs text-slate-500">
                📅 Realizado em 10/06/2025
              </div>
            </div>
            <div className="text-orange-500">
              <Star size={20} fill="currentColor" />
            </div>
          </div>
        </div>

        <div className="frutiger-card">
          <div className="flex items-start space-x-4">
            <img src={iconParticipacao} alt="Participação" className="w-10 h-10 mt-1" />
            <div className="flex-1">
              <h3 className="font-semibold text-slate-700">Pintura do Muro</h3>
              <p className="text-sm text-slate-600 mb-2">
                Participei da renovação da pintura do muro da escola.
              </p>
              <div className="text-xs text-slate-500">
                📅 Realizado em 05/06/2025
              </div>
            </div>
            <div className="text-orange-500">
              <Star size={20} fill="currentColor" />
            </div>
          </div>
        </div>
      </div>

      <button className="glossy-button w-full mt-6">
        <Plus size={20} className="mr-2" />
        Adicionar Participação
      </button>
    </div>
  );

  return (
    <div className="mobile-container min-h-screen">
      {currentView === 'home' && renderHome()}
      {currentView === 'grupos' && renderGrupos()}
      {currentView === 'eventos' && renderEventos()}
      {currentView === 'participacoes' && renderParticipacoes()}
    </div>
  );
};

export default MainScreen;

