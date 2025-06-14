import { useState } from 'react'
import LoginScreen from './components/LoginScreen'
import ChatScreen from './components/ChatScreen'
import MainApp from './components/MainApp'
import './App.css'

function App() {
  const [user, setUser] = useState(null)
  const [currentScreen, setCurrentScreen] = useState('login')

  const handleLogin = (credentials) => {
    // Simular login
    setUser(credentials)
    setCurrentScreen('chat')
  }

  const handleChatComplete = () => {
    setCurrentScreen('main')
  }

  const handleBackToChat = () => {
    setCurrentScreen('chat')
  }

  const handleLogout = () => {
    setUser(null)
    setCurrentScreen('login')
  }

  return (
    <div className="App">
      {currentScreen === 'login' && (
        <LoginScreen onLogin={handleLogin} />
      )}
      
      {currentScreen === 'chat' && (
        <ChatScreen user={user} onContinue={handleChatComplete} />
      )}
      
      {currentScreen === 'main' && (
        <MainApp 
          user={user} 
          onLogout={handleLogout}
          onBackToChat={handleBackToChat}
        />
      )}
    </div>
  )
}

export default App
