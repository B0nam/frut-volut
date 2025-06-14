# Mutirão Comunitário - Aplicação Mobile

Uma aplicação mobile desenvolvida em React com estética **Frutiger Aero** para facilitar a organização de mutirões comunitários e ações de melhoria urbana.

## 🎨 Estética Frutiger Aero

A aplicação foi desenvolvida seguindo a estética **Frutiger Aero** dos anos 2000, caracterizada por:

- **Skeuomorfismo**: Elementos de interface que imitam objetos do mundo real
- **Texturas Brilhantes e Glossy**: Superfícies com reflexos e brilho
- **Cores Vibrantes**: Paleta com azuis, verdes, turquesas e tons quentes
- **Elementos Naturais**: Incorporação de elementos que remetem à natureza
- **Transparência e Efeitos de Vidro**: Elementos translúcidos com desfoque
- **Tipografia Limpa**: Fontes sans-serif como Segoe UI

## 🚀 Funcionalidades

### 1. **Tela de Login**
- Design mobile-first com mascote centralizado
- Campos de usuário e senha com efeito glossy
- Validação básica de formulário

### 2. **Chat Tutorial com Mascote**
- Sistema de chat interativo com o mascote "Mutirão"
- Explicação passo a passo do funcionamento da aplicação
- 5 etapas de tutorial com opções de resposta predefinidas
- Barra de progresso visual

### 3. **Funcionalidades Principais**

#### **Grupos**
- Listagem de grupos comunitários disponíveis
- Informações sobre número de membros e eventos
- Botões para participar de grupos
- Opção para criar novos grupos

#### **Eventos**
- Visualização de eventos ativos
- Detalhes como data, descrição e número de participantes
- Sistema de inscrição em eventos
- Criação de novos eventos

#### **Participações**
- Histórico pessoal de participações
- Descrições detalhadas das contribuições
- Sistema de avaliação com estrelas
- Adição de novas participações

## 🛠️ Tecnologias Utilizadas

- **React 18** - Framework principal
- **Vite** - Build tool e servidor de desenvolvimento
- **Tailwind CSS** - Framework de CSS utilitário
- **Lucide React** - Biblioteca de ícones
- **CSS Custom Properties** - Para paleta de cores Frutiger Aero

## 📱 Design Mobile

A aplicação foi projetada especificamente para dispositivos móveis:

- Container máximo de 375px de largura
- Layout responsivo
- Elementos touch-friendly
- Navegação intuitiva com botões de voltar
- Animações suaves e micro-interações

## 🎯 Conceitos da Aplicação

### **Grupos**
Conjuntos de pessoas interessadas em melhorar um bairro, cidade, igreja ou comunidade específica.

### **Eventos**
Ações específicas organizadas pelos grupos, como:
- Limpeza de praças
- Pintura de muros
- Revitalização de espaços públicos
- Plantio de árvores

### **Participações**
Registro das contribuições individuais em eventos, incluindo:
- Descrição da participação
- Fotos das ações realizadas
- Data de realização
- Sistema de reconhecimento

## 🚀 Como Executar

1. **Instalar dependências:**
   ```bash
   cd mutirao-comunitario
   npm install
   ```

2. **Executar em modo desenvolvimento:**
   ```bash
   npm run dev
   ```

3. **Acessar a aplicação:**
   - Abra o navegador em `http://localhost:5173`

## 📁 Estrutura do Projeto

```
mutirao-comunitario/
├── src/
│   ├── assets/          # Imagens e ícones
│   │   ├── mascote.png
│   │   ├── icon-grupo.png
│   │   ├── icon-evento.png
│   │   └── icon-participacao.png
│   ├── components/      # Componentes React
│   │   ├── LoginScreen.jsx
│   │   ├── ChatScreen.jsx
│   │   └── MainScreen.jsx
│   ├── App.jsx         # Componente principal
│   ├── App.css         # Estilos Frutiger Aero
│   └── main.jsx        # Ponto de entrada
├── public/             # Arquivos públicos
├── index.html          # HTML principal
└── package.json        # Dependências
```

## 🎨 Paleta de Cores

- **Azul Céu**: #87CEEB
- **Azul Claro**: #ADD8E6
- **Azul Aço**: #4682B4
- **Verde Claro**: #90EE90
- **Verde Mar**: #3CB371
- **Turquesa**: #40E0D0
- **Salmão Claro**: #FFA07A
- **Dourado**: #FFD700
- **Branco Alice**: #F0F8FF

## 🌟 Características Especiais

- **Mascote Personalizado**: Criado especificamente para a aplicação
- **Ícones Temáticos**: Ícones customizados para cada funcionalidade
- **Animações Flutuantes**: Elementos decorativos com animação CSS
- **Efeitos de Vidro**: Backdrop-filter para efeitos translúcidos
- **Gradientes Suaves**: Fundos com gradientes característicos do Frutiger Aero

## 📝 Dados Simulados

A aplicação utiliza dados simulados para demonstração:
- 3 grupos comunitários
- 3 eventos ativos
- 3 participações do usuário

## 🔮 Próximos Passos

- Integração com backend real
- Sistema de autenticação completo
- Upload de fotos para participações
- Sistema de notificações
- Geolocalização para eventos
- Chat entre membros dos grupos

