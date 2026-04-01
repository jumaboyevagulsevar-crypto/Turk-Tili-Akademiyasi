import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis } from 'recharts';
import axios from 'axios';
import './Analytics.css';

const Analytics = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchAnalytics = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/analytics');
                setData(response.data);
            } catch (error) {
                console.error('Analytics error:', error);
            } finally {
                setLoading(false);
            }
        };
        fetchAnalytics();
    }, []);

    if (loading) return <div className="loader">Ma'lumotlar tahlil qilinmoqda...</div>;

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="analytics-container"
        >
            <div className="page-header">
                <h2>Progress Analytics</h2>
                <p>Sizning haftalik faolligingiz va tilni o'zlashtirish darajangiz</p>
            </div>

            <div className="analytics-grid">
                <div className="chart-card glass-card">
                    <h3>Haftalik XP Faolligi</h3>
                    <div className="chart-wrapper">
                        <ResponsiveContainer width="100%" height={300}>
                            <BarChart data={data.activityData}>
                                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                                <XAxis dataKey="day" stroke="var(--text-secondary)" />
                                <YAxis stroke="var(--text-secondary)" />
                                <Tooltip
                                    contentStyle={{ background: 'var(--bg-sidebar)', border: '1px solid var(--border-color)', borderRadius: '12px' }}
                                    itemStyle={{ color: 'var(--accent-red)' }}
                                />
                                <Bar dataKey="xp" fill="var(--accent-red)" radius={[4, 4, 0, 0]} />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                <div className="chart-card glass-card">
                    <h3>Ko'nikmalar Diagrammasi</h3>
                    <div className="chart-wrapper">
                        <ResponsiveContainer width="100%" height={300}>
                            <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data.masteryData}>
                                <PolarGrid stroke="rgba(255,255,255,0.1)" />
                                <PolarAngleAxis dataKey="subject" stroke="var(--text-secondary)" />
                                <PolarRadiusAxis angle={30} domain={[0, 150]} stroke="var(--text-secondary)" />
                                <Radar
                                    name="O'zlashtirish"
                                    dataKey="A"
                                    stroke="var(--accent-orange)"
                                    fill="var(--accent-orange)"
                                    fillOpacity={0.6}
                                />
                                <Tooltip />
                            </RadarChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </div>

            <div className="insights-section glass-card">
                <h3>Sun'iy intellekt tahlili</h3>
                <div className="insight-item">
                    <i className="fa-solid fa-lightbulb"></i>
                    <p>Sizning <strong>Lug'at</strong> boyligingiz juda yaxshi o'smoqda. Keyingi hafta ko'proq <strong>Gapirish</strong> mashqlariga e'tibor qarating.</p>
                </div>
            </div>
        </motion.div>
    );
};

export default Analytics;
