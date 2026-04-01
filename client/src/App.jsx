import React, { useState, useEffect } from 'react';
import Sidebar from './components/Layout/Sidebar';
import Header from './components/Layout/Header';
import Dashboard from './components/Dashboard/Dashboard';
import ChatTutor from './components/AIChat/ChatTutor';
import Leaderboard from './components/Gamification/Leaderboard';
import Flashcards from './components/Flashcards/Flashcards';
import Analytics from './components/Analytics/Analytics';
import Courses from './components/Lesson/Courses';
import './App.css';

function App() {
  const [activeView, setActiveView] = useState('dashboard');
  const [theme, setTheme] = useState(localStorage.getItem('turktili-theme') || 'dark');

  useEffect(() => {
    document.body.setAttribute('data-theme', theme);
    localStorage.setItem('turktili-theme', theme);
  }, [theme]);

  const renderView = () => {
    switch (activeView) {
      case 'dashboard':
        return <Dashboard onStartLesson={() => setActiveView('courses')} />;
      case 'chat':
        return <ChatTutor />;
      case 'courses':
        return <Courses />;
      case 'flashcards':
        return <Flashcards />;
      case 'analytics':
        return <Analytics />;
      case 'gamification':
        return <Leaderboard />;
      case 'settings':
        return (
          <div className="view-placeholder">
            <h2>Sozlamalar</h2>
            <p>Profil va platforma sozlamalari...</p>
          </div>
        );
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="app-container">
      <Sidebar activeView={activeView} setActiveView={setActiveView} />
      <main className="main-content">
        <Header theme={theme} setTheme={setTheme} />
        <div className="views-container">
          {renderView()}
        </div>
      </main>
    </div>
  );
}

export default App;
