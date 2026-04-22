const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '..', '.env') });
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const { OpenAI } = require('openai');

const app = express();
const PORT = process.env.PORT || 5000;
const MONGODB_URI = process.env.MONGODB_URI;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, '..')));

// MongoDB Connection
if (MONGODB_URI) {
    mongoose.connect(MONGODB_URI)
        .then(() => console.log('✅ Connected to MongoDB'))
        .catch(err => console.error('❌ MongoDB connection error:', err));
} else {
    console.warn('⚠️ MONGODB_URI not found. Data will not persist.');
}

// User Schema
const userSchema = new mongoose.Schema({
    name: String,
    email: { type: String, unique: true, required: true },
    xp: { type: Number, default: 0 },
    lessons: { type: Number, default: 0 },
    streak: { type: Number, default: 1 },
    level: { type: String, default: 'A1' },
    completedLessons: [String],
    completedAssignments: [String],
    lastLogin: String,
    avatar: String,
    dailyTasks: {
        vocab: { type: Boolean, default: false },
        grammar: { type: Boolean, default: false },
        ai: { type: Boolean, default: false },
        lesson: { type: Boolean, default: false }
    },
    dateJoined: { type: Date, default: Date.now }
});

const User = mongoose.model('User', userSchema);

// AI Service Configuration
let aiClient;
const provider = 'groq';
const groqKey = process.env.GROQ_API_KEY;

if (provider === 'groq' && groqKey) {
    aiClient = new OpenAI({
        apiKey: groqKey,
        baseURL: "https://api.groq.com/openai/v1"
    });
    console.log("AI Service: Using Groq");
} else if (process.env.OPENAI_API_KEY) {
    aiClient = new OpenAI({
        apiKey: process.env.OPENAI_API_KEY,
    });
    console.log("AI Service: Using OpenAI");
}

// Routes
app.post('/api/auth/register', async (req, res) => {
    const { name, email } = req.body;
    try {
        let user = await User.findOne({ email });
        if (!user) {
            user = new User({ 
                name, 
                email, 
                lastLogin: new Date().toDateString(),
                xp: 50, // Welcome bonus
                level: 'A1'
            });
            await user.save();
        }
        res.json(user);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.post('/api/user/sync', async (req, res) => {
    const { email, state } = req.body;
    try {
        const user = await User.findOneAndUpdate({ email }, { $set: state }, { new: true });
        if (user) {
            res.json({ success: true, state: user });
        } else {
            res.status(404).json({ error: 'User not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.get('/api/user/data', async (req, res) => {
    const { email } = req.query;
    try {
        const user = await User.findOne({ email });
        if (user) res.json(user);
        else res.status(404).json({ error: 'User not found' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.get('/api/leaderboard', async (req, res) => {
    try {
        const sortedUsers = await User.find().sort({ xp: -1 }).limit(10);
        res.json(sortedUsers);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// AI Chat Route
app.post('/api/chat', async (req, res) => {
    try {
        if (!aiClient) return res.json({ message: "AI Tutor is offline." });
        const { messages, user, level } = req.body;
        
        const systemPrompt = `Siz "Turk Tili Akademiyasi" loyihasining professional turk tili ustozisiz.
Ismingiz "Yordamchi AI".
Vazifalaringiz:
1. Turk tilini o'rganuvchilarga grammatika, lug'at va talaffuz bo'yicha yordam berish.
2. Savollarga doimo turk tilida javob bering, agar tushunmasa o'zbek tilida izohlang.
3. O'quvchi darajasi: ${level || 'A1'}. Shunga qarab gaplaringiz murakkabligini tanlang.
4. Xatolarni muloyimlik bilan to'g'rilang.
5. Har bir javobingizda turk madaniyati haqida qisqa qiziqarli ma'lumot qo'shishga harakat qiling.
6. Javoblaringiz qisqa, tushunarli va motivatsiya beruvchi bo'lsin.
Foydalanuvchi ismi: ${user || 'O\'quvchi'}.`;
        
        const model = provider === 'groq' ? "llama-3.3-70b-versatile" : "gpt-4-turbo-preview";
        const completion = await aiClient.chat.completions.create({
            model: model,
            messages: [{ role: "system", content: systemPrompt }, ...messages],
            max_tokens: 500,
            temperature: 0.7
        });
        res.json({ message: completion.choices[0].message.content });
    } catch (error) {
        res.status(500).json({ error: 'AI Error' });
    }
});

app.get('/status', async (req, res) => {
    try {
        const count = await User.countDocuments();
        res.json({ 
            status: 'Online', 
            usersCount: count, 
            ai: aiClient ? 'Connected' : 'Disconnected'
        });
    } catch (e) {
        res.json({ status: 'Error', error: e.message });
    }
});

if (process.env.NODE_ENV !== 'production') {
    app.listen(PORT, () => {
        console.log(`Server running on http://localhost:${PORT}`);
    });
}

module.exports = app;

