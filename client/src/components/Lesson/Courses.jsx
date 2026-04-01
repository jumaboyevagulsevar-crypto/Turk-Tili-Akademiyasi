import React from 'react';
import { motion } from 'framer-motion';
import PDFExportButton from './PDFExportButton';
import './Courses.css';

const Courses = () => {
    const lessons = [
        {
            id: 1, title: '1-Dars: Salomlashish', status: 'completed', vocab: [
                { word: 'Merhaba', translation: 'Salom' },
                { word: 'Nasılsın?', translation: 'Qalaysan?' },
                { word: 'İyi günler', translation: 'Xayrli kun' }
            ]
        },
        {
            id: 2, title: '2-Dars: Oila', status: 'ongoing', vocab: [
                { word: 'Anne', translation: 'Ona' },
                { word: 'Baba', translation: 'Ota' },
                { word: 'Kardeş', translation: 'Uka/Singil' }
            ]
        },
        { id: 3, title: '3-Dars: Bozorlik', status: 'locked', vocab: [] },
    ];

    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="courses-container">
            <div className="page-header">
                <h2>Mening Kurslarim</h2>
                <p>Darajangiz bo'yicha darslar ro'yxati</p>
            </div>

            <div className="lessons-grid">
                {lessons.map(lesson => (
                    <div key={lesson.id} className={`lesson-card glass-card ${lesson.status}`}>
                        <div className="lesson-badge">{lesson.id}</div>
                        <h3>{lesson.title}</h3>
                        {lesson.status === 'completed' && (
                            <div className="lesson-complete-tag">
                                <i className="fa-solid fa-circle-check"></i> Yakunlangan
                                <PDFExportButton lessonTitle={lesson.title} vocabulary={lesson.vocab} />
                            </div>
                        )}
                        {lesson.status === 'ongoing' && <button className="btn-primary mt-3">Davom etish</button>}
                        {lesson.status === 'locked' && <div className="lock-icon"><i className="fa-solid fa-lock"></i></div>}
                    </div>
                ))}
            </div>
        </motion.div>
    );
};

export default Courses;
