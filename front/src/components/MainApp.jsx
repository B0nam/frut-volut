import React, { useState } from 'react';
import { Home, Users, Calendar, User, Settings, LogOut, Search, Plus, MessageCircle, Heart, Share2, Menu, X } from 'lucide-react';
import mascoteLogo from '../assets/mascote.png';
import iconGrupo from '../assets/icon-grupo.png';
import iconEvento from '../assets/icon-evento.png';
import iconParticipacao from '../assets/icon-participacao.png';

const MainApp = ({ user, onLogout, onBackToChat }) => {
  const [currentPage, setCurrentPage] = useState('feed');
  const [selectedGroup, setSelectedGroup] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Dados simulados mais realistas
  const feedData = [
    {
      id: 1,
      usuario: "Ana Silva",
      avatar: "👩‍🦱",
      grupo: "Amigos do Bairro Centro",
      evento: "Limpeza da Praça Central",
      descricao: "Conseguimos coletar 25 sacos de lixo e plantar 5 mudas de árvores! A comunidade se mobilizou de forma incrível.",
      tempo: "2 horas atrás",
      likes: 12,
      comentarios: 3,
      imagem: "🌳"
    },
    {
      id: 2,
      usuario: "Carlos Santos",
      avatar: "👨‍🦲",
      grupo: "Comunidade Verde",
      evento: "Plantio de Árvores no Parque",
      descricao: "Plantamos 15 mudas nativas hoje! As crianças da escola participaram e aprenderam sobre sustentabilidade.",
      tempo: "5 horas atrás",
      likes: 18,
      comentarios: 7,
      imagem: "🌱"
    },
    {
      id: 3,
      usuario: "Maria Oliveira",
      avatar: "👩‍🦳",
      grupo: "Vizinhos Solidários",
      evento: "Pintura do Muro da Escola",
      descricao: "O muro ficou lindo! Criamos um mural com desenhos das crianças. A escola agora tem uma cara nova.",
      tempo: "1 dia atrás",
      likes: 24,
      comentarios: 5,
      imagem: "🎨"
    },
    {
      id: 4,
      usuario: "João Pereira",
      avatar: "👨‍🦱",
      grupo: "Amigos do Bairro Centro",
      evento: "Reforma da Quadra Esportiva",
      descricao: "Pintamos as linhas da quadra e consertamos as cestas de basquete. Os jovens já estão aproveitando!",
      tempo: "2 dias atrás",
      likes: 15,
      comentarios: 4,
      imagem: "⚽"
    }
  ];

  const grupos = [
    {
      id: 1,
      nome: "Amigos do Bairro Centro",
      descricao: "Grupo dedicado a melhorar a infraestrutura e qualidade de vida no centro da cidade",
      membros: 127,
      eventos: 8,
      categoria: "Infraestrutura",
      ativo: true,
      ultimaAtividade: "Hoje"
    },
    {
      id: 2,
      nome: "Comunidade Verde",
      descricao: "Focado em sustentabilidade, meio ambiente e práticas ecológicas",
      membros: 89,
      eventos: 5,
      categoria: "Meio Ambiente",
      ativo: true,
      ultimaAtividade: "Ontem"
    },
    {
      id: 3,
      nome: "Vizinhos Solidários",
      descricao: "Rede de apoio mútuo entre vizinhos e famílias da comunidade",
      membros: 156,
      eventos: 12,
      categoria: "Social",
      ativo: true,
      ultimaAtividade: "2 dias atrás"
    }
  ];

  const eventos = [
    {
      id: 1,
      grupoId: 1,
      titulo: "Revitalização da Praça Central",
      descricao: "Mutirão completo para limpeza, pintura e plantio de flores na praça principal",
      data: "2025-06-20",
      horario: "08:00",
      local: "Praça Central - Centro",
      participantes: 23,
      vagas: 50,
      status: "aberto",
      categoria: "Limpeza"
    },
    {
      id: 2,
      grupoId: 1,
      titulo: "Pintura do Muro da Escola Municipal",
      descricao: "Renovação da pintura externa e criação de mural artístico",
      data: "2025-06-25",
      horario: "14:00",
      local: "Escola Municipal João Silva",
      participantes: 15,
      vagas: 30,
      status: "aberto",
      categoria: "Arte"
    },
    {
      id: 3,
      grupoId: 2,
      titulo: "Plantio de Árvores Nativas",
      descricao: "Plantio de mudas nativas para reflorestamento urbano",
      data: "2025-06-22",
      horario: "07:00",
      local: "Parque Municipal",
      participantes: 31,
      vagas: 40,
      status: "aberto",
      categoria: "Meio Ambiente"
    }
  ];

  const menuItems = [
    { id: 'feed', icon: Home, label: 'Feed', badge: null },
    { id: 'grupos', icon: Users, label: 'Grupos', badge: grupos.length },
    { id: 'eventos', icon: Calendar, label: 'Eventos', badge: eventos.length },
    { id: 'perfil', icon: User, label: 'Perfil', badge: null },
  ];

  const handleMenuClick = (pageId) => {
    setCurrentPage(pageId);
    setIsMobileMenuOpen(false); // Fecha o menu mobile após seleção
  };

  const renderMobileHeader = () => (
    <div className="lg:hidden bg-white/90 backdrop-blur-lg border-b border-white/30 p-4 flex items-center justify-between">
      <div className="flex items-center space-x-3">
        <img src={mascoteLogo} alt="Mutirão" className="w-8 h-8" />
        <div>
          <h2 className="font-bold text-slate-700 text-sm">Mutirão</h2>
          <p className="text-xs text-slate-500">Comunitário</p>
        </div>
      </div>
      <button
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className="p-2 rounded-lg hover:bg-white/50 transition-colors"
      >
        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>
    </div>
  );

  const renderMobileMenu = () => (
    <div className={`lg:hidden fixed inset-0 z-50 transition-transform duration-300 ${
      isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
    }`}>
      <div className="absolute inset-0 bg-black/50" onClick={() => setIsMobileMenuOpen(false)} />
      <div className="absolute right-0 top-0 h-full w-80 max-w-[80vw] bg-white/95 backdrop-blur-lg border-l border-white/30">
        <div className="p-6 border-b border-white/30">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-3">
              <img src={mascoteLogo} alt="Mutirão" className="w-10 h-10" />
              <div>
                <h2 className="font-bold text-slate-700">Mutirão</h2>
                <p className="text-sm text-slate-500">Comunitário</p>
              </div>
            </div>
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-2 rounded-lg hover:bg-white/50 transition-colors"
            >
              <X size={20} />
            </button>
          </div>
        </div>

        <nav className="p-4">
          <div className="space-y-2">
            {menuItems.map(item => (
              <button
                key={item.id}
                onClick={() => handleMenuClick(item.id)}
                className={`w-full flex items-center justify-between p-3 rounded-xl transition-all duration-200 ${
                  currentPage === item.id 
                    ? 'bg-gradient-to-r from-blue-500 to-turquoise-500 text-white shadow-lg' 
                    : 'hover:bg-white/50 text-slate-700'
                }`}
              >
                <div className="flex items-center space-x-3">
                  <item.icon size={20} />
                  <span className="font-medium">{item.label}</span>
                </div>
                {item.badge && (
                  <span className={`px-2 py-1 rounded-full text-xs font-bold ${
                    currentPage === item.id ? 'bg-white/20' : 'bg-blue-100 text-blue-600'
                  }`}>
                    {item.badge}
                  </span>
                )}
              </button>
            ))}
          </div>
        </nav>

        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-white/30">
          <div className="flex items-center space-x-3 mb-3">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-turquoise-500 rounded-full flex items-center justify-center text-white font-bold">
              {user?.username?.charAt(0).toUpperCase()}
            </div>
            <div className="flex-1">
              <p className="font-medium text-slate-700">{user?.username}</p>
              <p className="text-xs text-slate-500">Membro ativo</p>
            </div>
          </div>
          <div className="space-y-2">
            <button 
              onClick={() => {
                onBackToChat();
                setIsMobileMenuOpen(false);
              }}
              className="w-full flex items-center space-x-2 p-2 rounded-lg hover:bg-white/50 text-slate-600 text-sm"
            >
              <MessageCircle size={16} />
              <span>Tutorial</span>
            </button>
            <button 
              onClick={() => {
                onLogout();
                setIsMobileMenuOpen(false);
              }}
              className="w-full flex items-center space-x-2 p-2 rounded-lg hover:bg-white/50 text-slate-600 text-sm"
            >
              <LogOut size={16} />
              <span>Sair</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  const renderDesktopSidebar = () => (
    <div className="hidden lg:block w-64 bg-white/90 backdrop-blur-lg border-r border-white/30 min-h-screen">
      {/* Header do Sidebar */}
      <div className="p-6 border-b border-white/30">
        <div className="flex items-center space-x-3">
          <img src={mascoteLogo} alt="Mutirão" className="w-10 h-10" />
          <div>
            <h2 className="font-bold text-slate-700">Mutirão</h2>
            <p className="text-sm text-slate-500">Comunitário</p>
          </div>
        </div>
      </div>

      {/* Menu Items */}
      <nav className="p-4">
        <div className="space-y-2">
          {menuItems.map(item => (
            <button
              key={item.id}
              onClick={() => setCurrentPage(item.id)}
              className={`w-full flex items-center justify-between p-3 rounded-xl transition-all duration-200 ${
                currentPage === item.id 
                  ? 'bg-gradient-to-r from-blue-500 to-turquoise-500 text-white shadow-lg' 
                  : 'hover:bg-white/50 text-slate-700'
              }`}
            >
              <div className="flex items-center space-x-3">
                <item.icon size={20} />
                <span className="font-medium">{item.label}</span>
              </div>
              {item.badge && (
                <span className={`px-2 py-1 rounded-full text-xs font-bold ${
                  currentPage === item.id ? 'bg-white/20' : 'bg-blue-100 text-blue-600'
                }`}>
                  {item.badge}
                </span>
              )}
            </button>
          ))}
        </div>
      </nav>

      {/* User Info */}
      <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-white/30">
        <div className="flex items-center space-x-3 mb-3">
          <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-turquoise-500 rounded-full flex items-center justify-center text-white font-bold">
            {user?.username?.charAt(0).toUpperCase()}
          </div>
          <div className="flex-1">
            <p className="font-medium text-slate-700">{user?.username}</p>
            <p className="text-xs text-slate-500">Membro ativo</p>
          </div>
        </div>
        <div className="space-y-2">
          <button 
            onClick={onBackToChat}
            className="w-full flex items-center space-x-2 p-2 rounded-lg hover:bg-white/50 text-slate-600 text-sm"
          >
            <MessageCircle size={16} />
            <span>Tutorial</span>
          </button>
          <button 
            onClick={onLogout}
            className="w-full flex items-center space-x-2 p-2 rounded-lg hover:bg-white/50 text-slate-600 text-sm"
          >
            <LogOut size={16} />
            <span>Sair</span>
          </button>
        </div>
      </div>
    </div>
  );

  const renderFeed = () => (
    <div className="flex-1 p-4 lg:p-6">
      <div className="max-w-2xl mx-auto">
        <div className="mb-6">
          <h1 className="text-xl lg:text-2xl font-bold text-slate-700 mb-2">Feed da Comunidade</h1>
          <p className="text-sm lg:text-base text-slate-600">Acompanhe as últimas atividades e participações</p>
        </div>

        <div className="space-y-4 lg:space-y-6">
          {feedData.map(post => (
            <div key={post.id} className="bg-white/80 backdrop-blur-lg rounded-2xl p-4 lg:p-6 border border-white/30 shadow-lg">
              <div className="flex items-start space-x-3 lg:space-x-4">
                <div className="text-xl lg:text-2xl">{post.avatar}</div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center space-x-2 mb-2">
                    <h3 className="font-semibold text-slate-700 text-sm lg:text-base">{post.usuario}</h3>
                    <span className="text-slate-500">•</span>
                    <span className="text-xs lg:text-sm text-slate-500">{post.tempo}</span>
                  </div>
                  <div className="mb-3">
                    <p className="text-xs lg:text-sm text-blue-600 font-medium">{post.grupo}</p>
                    <p className="font-medium text-slate-700 text-sm lg:text-base">{post.evento}</p>
                  </div>
                  <p className="text-slate-600 mb-4 text-sm lg:text-base">{post.descricao}</p>
                  
                  {post.imagem && (
                    <div className="mb-4 p-3 lg:p-4 bg-gradient-to-r from-blue-50 to-turquoise-50 rounded-xl">
                      <div className="text-2xl lg:text-4xl text-center">{post.imagem}</div>
                    </div>
                  )}

                  <div className="flex items-center space-x-4 lg:space-x-6 text-slate-500">
                    <button className="flex items-center space-x-2 hover:text-red-500 transition-colors">
                      <Heart size={16} className="lg:w-[18px] lg:h-[18px]" />
                      <span className="text-xs lg:text-sm">{post.likes}</span>
                    </button>
                    <button className="flex items-center space-x-2 hover:text-blue-500 transition-colors">
                      <MessageCircle size={16} className="lg:w-[18px] lg:h-[18px]" />
                      <span className="text-xs lg:text-sm">{post.comentarios}</span>
                    </button>
                    <button className="flex items-center space-x-2 hover:text-green-500 transition-colors">
                      <Share2 size={16} className="lg:w-[18px] lg:h-[18px]" />
                      <span className="text-xs lg:text-sm">Compartilhar</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderGrupos = () => (
    <div className="flex-1 p-4 lg:p-6">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-6 space-y-4 lg:space-y-0">
          <div>
            <h1 className="text-xl lg:text-2xl font-bold text-slate-700 mb-2">Meus Grupos</h1>
            <p className="text-sm lg:text-base text-slate-600">Gerencie sua participação em grupos comunitários</p>
          </div>
          <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-3">
            <button className="flex items-center justify-center space-x-2 px-4 py-2 bg-white/70 hover:bg-white/90 rounded-xl border border-white/30 transition-all text-sm">
              <Search size={16} />
              <span>Buscar Grupos</span>
            </button>
            <button className="flex items-center justify-center space-x-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-turquoise-500 text-white rounded-xl hover:shadow-lg transition-all text-sm">
              <Plus size={16} />
              <span>Criar Grupo</span>
            </button>
          </div>
        </div>

        <div className="grid gap-4 lg:gap-6">
          {grupos.map(grupo => (
            <div key={grupo.id} className="bg-white/80 backdrop-blur-lg rounded-2xl p-4 lg:p-6 border border-white/30 shadow-lg hover:shadow-xl transition-all">
              <div className="flex flex-col lg:flex-row lg:items-start justify-between space-y-4 lg:space-y-0">
                <div className="flex items-start space-x-3 lg:space-x-4 flex-1">
                  <img src={iconGrupo} alt="Grupo" className="w-10 h-10 lg:w-12 lg:h-12" />
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-col lg:flex-row lg:items-center space-y-2 lg:space-y-0 lg:space-x-3 mb-2">
                      <h3 className="text-base lg:text-lg font-semibold text-slate-700">{grupo.nome}</h3>
                      <span className="px-2 py-1 bg-green-100 text-green-700 text-xs font-medium rounded-full self-start">
                        {grupo.categoria}
                      </span>
                    </div>
                    <p className="text-slate-600 mb-3 text-sm lg:text-base">{grupo.descricao}</p>
                    <div className="flex flex-wrap items-center gap-3 lg:gap-6 text-xs lg:text-sm text-slate-500">
                      <span>👥 {grupo.membros} membros</span>
                      <span>📅 {grupo.eventos} eventos</span>
                      <span>🕒 {grupo.ultimaAtividade}</span>
                    </div>
                  </div>
                </div>
                <button 
                  onClick={() => setSelectedGroup(grupo)}
                  className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-xl transition-colors text-sm lg:text-base self-start lg:self-auto"
                >
                  Ver Eventos
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderEventos = () => (
    <div className="flex-1 p-4 lg:p-6">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-6 space-y-4 lg:space-y-0">
          <div>
            <h1 className="text-xl lg:text-2xl font-bold text-slate-700 mb-2">Eventos Disponíveis</h1>
            <p className="text-sm lg:text-base text-slate-600">Participe de ações que transformam a comunidade</p>
          </div>
          <button className="flex items-center justify-center space-x-2 px-4 py-2 bg-gradient-to-r from-green-500 to-turquoise-500 text-white rounded-xl hover:shadow-lg transition-all text-sm self-start lg:self-auto">
            <Plus size={16} />
            <span>Criar Evento</span>
          </button>
        </div>

        <div className="grid gap-4 lg:gap-6">
          {eventos.map(evento => (
            <div key={evento.id} className="bg-white/80 backdrop-blur-lg rounded-2xl p-4 lg:p-6 border border-white/30 shadow-lg hover:shadow-xl transition-all">
              <div className="flex flex-col lg:flex-row lg:items-start justify-between space-y-4 lg:space-y-0">
                <div className="flex items-start space-x-3 lg:space-x-4 flex-1">
                  <img src={iconEvento} alt="Evento" className="w-10 h-10 lg:w-12 lg:h-12" />
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-col lg:flex-row lg:items-center space-y-2 lg:space-y-0 lg:space-x-3 mb-2">
                      <h3 className="text-base lg:text-lg font-semibold text-slate-700">{evento.titulo}</h3>
                      <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs font-medium rounded-full self-start">
                        {evento.categoria}
                      </span>
                    </div>
                    <p className="text-slate-600 mb-3 text-sm lg:text-base">{evento.descricao}</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 lg:gap-4 text-xs lg:text-sm text-slate-500">
                      <span>📅 {new Date(evento.data).toLocaleDateString('pt-BR')} às {evento.horario}</span>
                      <span>📍 {evento.local}</span>
                      <span>👥 {evento.participantes}/{evento.vagas} participantes</span>
                      <span>🏷️ Grupo: {grupos.find(g => g.id === evento.grupoId)?.nome}</span>
                    </div>
                  </div>
                </div>
                <button className="px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-xl transition-colors text-sm lg:text-base self-start lg:self-auto">
                  Participar
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderPerfil = () => (
    <div className="flex-1 p-4 lg:p-6">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-xl lg:text-2xl font-bold text-slate-700 mb-6">Meu Perfil</h1>
        <div className="bg-white/80 backdrop-blur-lg rounded-2xl p-4 lg:p-6 border border-white/30 shadow-lg">
          <div className="text-center mb-6">
            <div className="w-16 h-16 lg:w-20 lg:h-20 bg-gradient-to-r from-blue-500 to-turquoise-500 rounded-full flex items-center justify-center text-white text-xl lg:text-2xl font-bold mx-auto mb-4">
              {user?.username?.charAt(0).toUpperCase()}
            </div>
            <h2 className="text-lg lg:text-xl font-semibold text-slate-700">{user?.username}</h2>
            <p className="text-sm lg:text-base text-slate-500">Membro desde junho 2025</p>
          </div>
          
          <div className="grid grid-cols-3 gap-3 lg:gap-4 text-center mb-6">
            <div className="p-3 lg:p-4 bg-blue-50 rounded-xl">
              <div className="text-xl lg:text-2xl font-bold text-blue-600">3</div>
              <div className="text-xs lg:text-sm text-slate-600">Grupos</div>
            </div>
            <div className="p-3 lg:p-4 bg-green-50 rounded-xl">
              <div className="text-xl lg:text-2xl font-bold text-green-600">7</div>
              <div className="text-xs lg:text-sm text-slate-600">Eventos</div>
            </div>
            <div className="p-3 lg:p-4 bg-orange-50 rounded-xl">
              <div className="text-xl lg:text-2xl font-bold text-orange-600">12</div>
              <div className="text-xs lg:text-sm text-slate-600">Participações</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-gradient-to-br from-blue-100 via-white to-turquoise-100">
      {renderMobileHeader()}
      {renderMobileMenu()}
      {renderDesktopSidebar()}
      
      <div className="flex-1 overflow-auto">
        {currentPage === 'feed' && renderFeed()}
        {currentPage === 'grupos' && renderGrupos()}
        {currentPage === 'eventos' && renderEventos()}
        {currentPage === 'perfil' && renderPerfil()}
      </div>
    </div>
  );
};

export default MainApp;

