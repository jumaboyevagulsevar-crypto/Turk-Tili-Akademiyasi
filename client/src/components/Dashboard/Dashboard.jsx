import React from 'react';
import { motion } from 'framer-motion';
import './Dashboard.css';

const Dashboard = ({ onStartLesson }) => {
    return (
        <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="dashboard"
        >
            <div className="welcome-banner">
                <div className="banner-text">
                    <h1>Xush kelibsiz, O'rganuvchi! 👋</h1>
                    <p>Bugungi turk tili sarguzashtingizni davom ettiring. Sizning progress darajangiz a'lo!</p>
                    <button className="btn-primary" onClick={onStartLesson}>
                        O'rganishni davom ettirish <i className="fa-solid fa-arrow-right"></i>
                    </button>
                </div>
                <i className="fa-solid fa-graduation-cap large-icon"></i>
            </div>

            <div className="stats-grid">
                <div className="stat-card glass-card">
                    <div className="stat-icon red">
                        <i className="fa-solid fa-book"></i>
                    </div>
                    <div className="stat-details">
                        <h3>15</h3>
                        <p>Yakunlangan darslar</p>
                    </div>
                </div>
                <div className="stat-card glass-card">
                    <div className="stat-icon orange">
                        <i className="fa-solid fa-bolt"></i>
                    </div>
                    <div className="stat-details">
                        <h3>1,240</h3>
                        <p>Jami XP</p>
                    </div>
                </div>
                <div className="stat-card glass-card">
                    <div className="stat-icon green">
                        <i className="fa-solid fa-chart-line"></i>
                    </div>
                    <div className="stat-details">
                        <h3>85%</h3>
                        <p>O'rtacha natija</p>
                    </div>
                </div>
            </div>

            <div className="dashboard-bottom">
                <div className="recent-courses glass-card">
                    <div className="section-header">
                        <h3>Joriy Kurs</h3>
                        <a href="#" className="view-all">Barchasi</a>
                    </div>
                    <div className="course-progress-card">
                        <div className="course-thumb">A1</div>
                        <div className="course-info">
                            <h4>Boshlang'ich Turk Tili</h4>
                            <p>12-mavzu: Bozorlik qilish</p>
                            <div className="progress-container">
                                <div className="progress-bar" style={{ width: '45%' }}></div>
                            </div>
                            <span className="progress-text">45% yakunlandi</span>
                        </div>
                    </div>
                </div>

                <div className="upcoming-tasks glass-card">
                    <div className="section-header">
                        <h3>Bugungi Vazifalar</h3>
                    </div>
                    <ul className="task-list-mini">
                        <li className="completed">
                            <i className="fa-solid fa-circle-check"></i>
                            <span>Kundalik lug'at</span>
                        </li>
                        <li>
                            <i className="fa-regular fa-circle"></i>
                            <span>Grammatika: -iyor</span>
                        </li>
                        <li>
                            <i className="fa-regular fa-circle"></i>
                            <span>Audio tinglash</span>
                        </li>
                    </ul>
                </div>
            </div>
        </motion.section>
    );
};

export default Dashboard;
