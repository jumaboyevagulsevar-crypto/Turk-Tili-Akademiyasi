require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { OpenAI } = require('openai');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// OpenAI Config
let openai;
if (process.env.OPENAI_API_KEY && process.env.OPENAI_API_KEY !== 'your_openai_api_key_here') {
    openai = new OpenAI({
        apiKey: process.env.OPENAI_API_KEY,
    });
} else {
    console.warn('WARNING: OPENAI_API_KEY topilmadi. AI Chat Tutor ishlamaydi.');
}

// System Prompt for Turk Tili Chat Tutor
const SYSTEM_PROMPT = `
You are a friendly and professional Turkish language tutor for the 'Turk Tili Akademiyasi' LMS platform. 
Your goal is to help students practice Turkish conversation. 
RULES:
1. Speak mostly in Turkish, but if the student is at A1/A2 level, you can provide English or Uzbek translations in brackets.
2. If the student makes a grammatical error or a spelling mistake, gently correct them at the end of your response using a 'Tuzatish' (Correction) section.
3. Keep your tone encouraging and premium.
4. Current student level: A1.
`;

// AI Chat Route
app.post('/api/chat', async (req, res) => {
    try {
        if (!openai) {
            return res.json({
                message: "AI Chat Tutor hozirda o'chirilgan. Iltimos, serverdagi .env fayliga OpenAI API kalitini qo'shing."
            });
        }
        const { messages } = req.body;

        const completion = await openai.chat.completions.create({
            model: "gpt-4-turbo-preview",
            messages: [
                { role: "system", content: SYSTEM_PROMPT },
                ...messages
            ],
            temperature: 0.7,
        });

        res.json({
            message: completion.choices[0].message.content,
        });
    } catch (error) {
        console.error('OpenAI Error:', error);
        res.status(500).json({ error: 'Chat tutor hozirda band. Iltimos, keyinroq urinib ko\'ring.' });
    }
});

// Mock Data (In a real app, this would be in a DB)
const users = [
    { id: 1, name: "Azizbek", xp: 1540, level: 5, avatar: "https://ui-avatars.com/api/?name=Azizbek&background=random" },
    { id: 2, name: "Dilshod", xp: 1240, level: 4, avatar: "https://ui-avatars.com/api/?name=Dilshod&background=random" },
    { id: 3, name: "Madina", xp: 980, level: 3, avatar: "https://ui-avatars.com/api/?name=Madina&background=random" },
    { id: 4, name: "Laylo", xp: 850, level: 3, avatar: "https://ui-avatars.com/api/?name=Laylo&background=random" },
    { id: 5, name: "Javohir", xp: 720, level: 2, avatar: "https://ui-avatars.com/api/?name=Javohir&background=random" },
];

// Leaderboard Route
app.get('/api/leaderboard', (req, res) => {
    const sortedUsers = [...users].sort((a, b) => b.xp - a.xp);
    res.json(sortedUsers);
});

// Update XP Route
app.post('/api/update-xp', (req, res) => {
    const { userId, xpToAdd } = req.body;
    const user = users.find(u => u.id === userId);
    if (user) {
        user.xp += xpToAdd;
        user.level = Math.floor(user.xp / 500) + 1; // Basic level logic
        res.json({ success: true, newXp: user.xp, newLevel: user.level });
    } else {
        res.status(404).json({ error: 'User not found' });
    }
});

// Flashcards Data
const flashcards = [
    { id: 1, front: "Merhaba", back: "Salom / Hello", interval: 1, ease: 2.5, nextReview: new Date() },
    { id: 2, front: "Teşekkür ederim", back: "Rahmat / Thank you", interval: 1, ease: 2.5, nextReview: new Date() },
    { id: 3, front: "Nasılsın?", back: "Qalaysan? / How are you?", interval: 1, ease: 2.5, nextReview: new Date() },
    { id: 4, front: "Güle güle", back: "Xayr / Goodbye", interval: 1, ease: 2.5, nextReview: new Date() },
];

// Flashcards Route
app.get('/api/flashcards', (req, res) => {
    const dueCards = flashcards.filter(c => new Date(c.nextReview) <= new Date());
    res.json(dueCards);
});

// Review Flashcard (Simplified SRS)
app.post('/api/flashcards/review', (req, res) => {
    const { cardId, quality } = req.body; // quality 0-5
    const card = flashcards.find(c => c.id === cardId);

    if (card) {
        // Simple SRS Logic
        if (quality >= 3) {
            card.interval = card.interval * card.ease;
            card.ease = Math.max(1.3, card.ease + (0.1 - (5 - quality) * (0.08 + (5 - quality) * 0.02)));
        } else {
            card.interval = 1;
        }

        const nextDate = new Date();
        nextDate.setDate(nextDate.getDate() + Math.round(card.interval));
        card.nextReview = nextDate;

        res.json({ success: true, nextReview: card.nextReview });
    } else {
        res.status(404).json({ error: 'Card not found' });
    }
});

// Analytics Data
const activityData = [
    { day: 'Dush', xp: 400, lessons: 2 },
    { day: 'Sesh', xp: 300, lessons: 1 },
    { day: 'Chor', xp: 600, lessons: 3 },
    { day: 'Pay', xp: 800, lessons: 4 },
    { day: 'Jum', xp: 500, lessons: 2 },
    { day: 'Shan', xp: 900, lessons: 5 },
    { day: 'Yak', xp: 200, lessons: 1 },
];

const masteryData = [
    { subject: 'Lug\'at', A: 120, fullMark: 150 },
    { subject: 'Grammatika', A: 98, fullMark: 150 },
    { subject: 'Tinglash', A: 86, fullMark: 150 },
    { subject: 'Gapirish', A: 65, fullMark: 150 },
    { subject: 'O\'qish', A: 110, fullMark: 150 },
];

// Analytics Route
app.get('/api/analytics', (req, res) => {
    res.json({ activityData, masteryData });
});

// Basic Status Route
app.get('/status', (req, res) => {
    res.json({ status: 'Platforma faol' });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
