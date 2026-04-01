import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import axios from 'axios';
import './ChatTutor.css';

const ChatTutor = () => {
    const [messages, setMessages] = useState([
        { role: 'assistant', content: 'Merhaba! Men sizning turk tili repetitoringizman. Bugun nima haqida gaplashamiz? (Hello! I am your Turkish tutor. What shall we talk about today?)' }
    ]);
    const [input, setInput] = useState('');
    const [loading, setLoading] = useState(false);
    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const handleSend = async (e) => {
        e.preventDefault();
        if (!input.trim() || loading) return;

        const userMsg = { role: 'user', content: input };
        setMessages(prev => [...prev, userMsg]);
        setInput('');
        setLoading(true);

        try {
            const response = await axios.post('http://localhost:5000/api/chat', {
                messages: [...messages, userMsg].slice(-10) // Send last 10 messages for context
            });

            setMessages(prev => [...prev, { role: 'assistant', content: response.data.message }]);
        } catch (error) {
            setMessages(prev => [...prev, {
                role: 'assistant',
                content: 'Kechirasiz, ulanishda xatolik yuz berdi. Backend serverni ishga tushirganingizga ishonch hosil qiling.'
            }]);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="chat-container glass-card">
            <div className="chat-header">
                <div className="tutor-info">
                    <div className="tutor-avatar">AI</div>
                    <div>
                        <h3>AI Chat Tutor</h3>
                        <p><span className="status-dot"></span> Onlayn | Turk tili ustozingiz</p>
                    </div>
                </div>
                <button className="btn-clear" onClick={() => setMessages([{ role: 'assistant', content: 'Merhaba! Keling, suhbatni yangidan boshlaymiz.' }])}>
                    <i className="fa-solid fa-rotate-right"></i>
                </button>
            </div>

            <div className="chat-messages">
                <AnimatePresence>
                    {messages.map((msg, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95, y: 10 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            className={`message-wrapper ${msg.role === 'user' ? 'user' : 'assistant'}`}
                        >
                            <div className="message-content">
                                {msg.content.split('\n').map((line, i) => (
                                    <p key={i}>{line}</p>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </AnimatePresence>
                {loading && (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="message-wrapper assistant">
                        <div className="typing-indicator">
                            <span></span><span></span><span></span>
                        </div>
                    </motion.div>
                )}
                <div ref={messagesEndRef} />
            </div>

            <form className="chat-input-area" onSubmit={handleSend}>
                <input
                    type="text"
                    placeholder="Turkcha xabar yozing..."
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    disabled={loading}
                />
                <button type="submit" className="btn-send" disabled={loading}>
                    <i className="fa-solid fa-paper-plane"></i>
                </button>
            </form>
        </div>
    );
};

export default ChatTutor;
