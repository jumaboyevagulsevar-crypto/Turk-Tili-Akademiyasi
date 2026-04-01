import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import axios from 'axios';
import './Flashcards.css';

const Flashcards = () => {
    const [cards, setCards] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isFlipped, setIsFlipped] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchCards = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/flashcards');
                setCards(response.data);
            } catch (error) {
                console.error('Flashcards error:', error);
            } finally {
                setLoading(false);
            }
        };
        fetchCards();
    }, []);

    const handleReview = async (quality) => {
        const currentCard = cards[currentIndex];
        try {
            await axios.post('http://localhost:5000/api/flashcards/review', {
                cardId: currentCard.id,
                quality
            });

            setIsFlipped(false);
            setTimeout(() => {
                if (currentIndex < cards.length - 1) {
                    setCurrentIndex(prev => prev + 1);
                } else {
                    setCards([]); // All done for now
                }
            }, 300);
        } catch (error) {
            console.error('Review error:', error);
        }
    };

    if (loading) return <div className="loader">Kartochkalar yuklanmoqda...</div>;
    if (cards.length === 0) return (
        <div className="view-placeholder">
            <i className="fa-solid fa-circle-check" style={{ fontSize: '48px', color: 'var(--accent-green)', marginBottom: '20px' }}></i>
            <h2>Barchasi yodlandi!</h2>
            <p>Bugun uchun takrorlanadigan so'zlar qolmadi. Ertaga yana uchrashguncha!</p>
        </div>
    );

    const currentCard = cards[currentIndex];

    return (
        <div className="flashcards-container">
            <div className="flashcards-header">
                <h2>Smart Flashcards</h2>
                <p>Mavjud kartochkalar: {cards.length - currentIndex}</p>
            </div>

            <div className="card-scene" onClick={() => setIsFlipped(!isFlipped)}>
                <motion.div
                    className={`flashcard ${isFlipped ? 'is-flipped' : ''}`}
                    animate={{ rotateY: isFlipped ? 180 : 0 }}
                    transition={{ type: 'spring', stiffness: 260, damping: 20 }}
                >
                    <div className="card-face card-front">
                        <span className="card-label">TURKCHA</span>
                        <h3>{currentCard.front}</h3>
                        <p className="hint">Ko'rish uchun bosing</p>
                    </div>
                    <div className="card-face card-back">
                        <span className="card-label">TARJIMASI</span>
                        <h3>{currentCard.back}</h3>
                        <div className="srs-actions" onClick={(e) => e.stopPropagation()}>
                            <button className="btn-srs red" onClick={() => handleReview(1)}>Qiyin</button>
                            <button className="btn-srs orange" onClick={() => handleReview(3)}>O'rtacha</button>
                            <button className="btn-srs green" onClick={() => handleReview(5)}>Oson</button>
                        </div>
                    </div>
                </motion.div>
            </div>

            <div className="flashcard-progress">
                <div className="progress-bar-inner" style={{ width: `${((currentIndex) / cards.length) * 100}%` }}></div>
            </div>
        </div>
    );
};

export default Flashcards;
