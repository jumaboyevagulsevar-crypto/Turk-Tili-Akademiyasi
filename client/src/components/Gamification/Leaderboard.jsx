import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';
import './Leaderboard.css';

const Leaderboard = () => {
    const [players, setPlayers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchLeaderboard = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/leaderboard');
                setPlayers(response.data);
            } catch (error) {
                console.error('Leaderboard error:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchLeaderboard();
    }, []);

    if (loading) return <div className="loader">Yuklanmoqda...</div>;

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="leaderboard-container glass-card"
        >
            <div className="leaderboard-header">
                <i className="fa-solid fa-trophy trophy-icon"></i>
                <h2>Liderlar Jadvali</h2>
                <p>Eng faol o'quvchilar reytingi</p>
            </div>

            <div className="players-list">
                {players.map((player, index) => (
                    <motion.div
                        key={player.id}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className={`player-item ${index === 0 ? 'top-1' : ''}`}
                    >
                        <div className="player-rank">
                            {index === 0 ? <i className="fa-solid fa-crown gold"></i> : index + 1}
                        </div>
                        <img src={player.avatar} alt={player.name} className="player-avatar" />
                        <div className="player-info">
                            <h4>{player.name}</h4>
                            <span>{player.level}-Daraja</span>
                        </div>
                        <div className="player-xp">
                            <strong>{player.xp}</strong>
                            <span>XP</span>
                        </div>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
};

export default Leaderboard;
