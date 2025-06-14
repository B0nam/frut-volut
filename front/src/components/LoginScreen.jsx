import React, { useState } from 'react';
import { User, Lock } from 'lucide-react';
import mascoteLogo from '../assets/mascote.png';

const LoginScreen = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username.trim() && password.trim()) {
      onLogin({ username, password });
    }
  };

  return (
    <div className="mobile-container flex flex-col items-center justify-center min-h-screen p-6">
      {/* Mascote Logo */}
      <div className="mb-8 floating">
        <img 
          src={mascoteLogo} 
          alt="Mascote Mutirão Comunitário" 
          className="w-32 h-32 object-contain drop-shadow-lg"
        />
      </div>

      {/* Título */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-slate-700 mb-2">
          Mutirão Comunitário
        </h1>
        <p className="text-slate-600 text-lg">
          Transforme sua comunidade
        </p>
      </div>

      {/* Formulário de Login */}
      <form onSubmit={handleSubmit} className="w-full max-w-sm space-y-6">
        {/* Campo de Usuário */}
        <div className="relative">
          <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-500">
            <User size={20} />
          </div>
          <input
            type="text"
            placeholder="Usuário"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="glossy-input w-full pl-12 pr-4 py-3 text-slate-700 placeholder-slate-500 focus:placeholder-slate-400"
            required
          />
        </div>

        {/* Campo de Senha */}
        <div className="relative">
          <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-500">
            <Lock size={20} />
          </div>
          <input
            type="password"
            placeholder="Senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="glossy-input w-full pl-12 pr-4 py-3 text-slate-700 placeholder-slate-500 focus:placeholder-slate-400"
            required
          />
        </div>

        {/* Botão de Login */}
        <button
          type="submit"
          className="glossy-button w-full py-4 text-lg font-semibold"
        >
          Entrar
        </button>
      </form>

      {/* Links adicionais */}
      <div className="mt-8 text-center space-y-2">
        <a href="#" className="text-slate-600 hover:text-slate-800 text-sm underline">
          Esqueci minha senha
        </a>
        <div className="text-slate-500 text-sm">
          Não tem conta? 
          <a href="#" className="text-slate-700 hover:text-slate-900 ml-1 underline">
            Cadastre-se
          </a>
        </div>
      </div>

      {/* Elementos decorativos */}
      <div className="absolute top-20 left-10 w-4 h-4 bg-blue-300 rounded-full opacity-60 floating" style={{animationDelay: '0.5s'}}></div>
      <div className="absolute top-40 right-8 w-6 h-6 bg-turquoise-300 rounded-full opacity-50 floating" style={{animationDelay: '1s'}}></div>
      <div className="absolute bottom-32 left-6 w-3 h-3 bg-green-300 rounded-full opacity-70 floating" style={{animationDelay: '1.5s'}}></div>
      <div className="absolute bottom-20 right-12 w-5 h-5 bg-blue-200 rounded-full opacity-60 floating" style={{animationDelay: '2s'}}></div>
    </div>
  );
};

export default LoginScreen;

