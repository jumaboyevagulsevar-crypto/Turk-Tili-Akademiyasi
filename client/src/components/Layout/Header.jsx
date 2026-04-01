import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <header className="top-header">
            <div className="search-bar">
                <i className="fa-solid fa-search"></i>
                <input type="text" placeholder="Qidirish..." />
            </div>

            <div className="header-actions">
                <div className="streak-box">
                    <i className="fa-solid fa-fire"></i>
                    <span>12 Kun</span>
                </div>
                <button className="btn-icon">
                    <i className="fa-solid fa-bell"></i>
                    <span className="badge">3</span>
                </button>
                <button className="btn-icon">
                    <i className="fa-solid fa-moon"></i>
                </button>
            </div>
        </header>
    );
};

export default Header;
