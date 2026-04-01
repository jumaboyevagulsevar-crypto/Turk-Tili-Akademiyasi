import React from 'react';
import './Sidebar.css';

const Sidebar = ({ activeView, setActiveView }) => {
    const navItems = [
        { id: 'dashboard', icon: 'fa-house', label: 'Asosiy' },
        { id: 'courses', icon: 'fa-book-open', label: 'Kurslarim' },
        { id: 'chat', icon: 'fa-comments', label: 'AI Chat Tutor' },
        { id: 'flashcards', icon: 'fa-clone', label: 'Smart Flashcards' },
        { id: 'analytics', icon: 'fa-chart-line', label: 'Progress' },
        { id: 'gamification', icon: 'fa-trophy', label: 'Liderlar' },
        { id: 'settings', icon: 'fa-gear', label: 'Sozlamalar' },
    ];

    return (
        <aside className="sidebar">
            <div className="logo-area">
                <div className="logo-icon">
                    <i className="fa-solid fa-moon"></i>
                    <i className="fa-solid fa-star half-star"></i>
                </div>
                <h2>Turk Tili Akademiyasi</h2>
            </div>

            <nav className="nav-menu">
                {navItems.map((item) => (
                    <a
                        key={item.id}
                        href="#"
                        className={`nav-item ${activeView === item.id ? 'active' : ''}`}
                        onClick={(e) => {
                            e.preventDefault();
                            setActiveView(item.id);
                        }}
                    >
                        <i className={`fa-solid ${item.icon}`}></i>
                        <span>{item.label}</span>
                    </a>
                ))}
            </nav>

            <div className="sidebar-bottom">
                <div className="user-profile-mini">
                    <img
                        src="https://ui-avatars.com/api/?name=Oquvchi&background=ff2e2e&color=fff"
                        alt="User"
                        className="avatar"
                    />
                    <div className="user-info">
                        <h4>O'quvchi</h4>
                        <p>A1 Daraja</p>
                    </div>
                </div>
            </div>
        </aside>
    );
};

export default Sidebar;
