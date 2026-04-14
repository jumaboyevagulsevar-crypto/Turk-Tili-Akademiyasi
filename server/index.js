require('dotenv').config();
const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');
const { OpenAI } = require('openai');

const app = express();
const PORT = process.env.PORT || 5000;
const DB_PATH = path.join(__dirname, 'db.json');

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, '..'))); // Serve frontend files

// Helper to Load/Save Data
function loadDB() {
    if (!fs.existsSync(DB_PATH)) {
        const initialData = { users: [] };
        fs.writeFileSync(DB_PATH, JSON.stringify(initialData, null, 2));
        return initialData;
    }
    try {
        const data = fs.readFileSync(DB_PATH, 'utf8');
        return JSON.parse(data);
    } catch (e) {
        return { users: [] };
    }
}

function saveDB(data) {
    fs.writeFileSync(DB_PATH, JSON.stringify(data, null, 2));
}

// OpenAI Config
let openai;
if (process.env.OPENAI_API_KEY && process.env.OPENAI_API_KEY !== 'your_openai_api_key_here') {
    openai = new OpenAI({
        apiKey: process.env.OPENAI_API_KEY,
    });
}

// Routes
app.post('/api/auth/register', (req, res) => {
    const { name, email } = req.body;
    const db = loadDB();
    let user = db.users.find(u => u.email === email);
    
    if (!user) {
        user = {
            id: Date.now().toString(),
            name,
            email,
            xp: 0,
            lessons: 0,
            completedLessons: [],
            completedAssignments: [], // Added for new tasks functionality
            level: 'A1',
            dateJoined: new Date().toISOString()
        };
        db.users.push(user);
        saveDB(db);
    }
    res.json(user);
});

app.post('/api/user/sync', (req, res) => {
    const { email, state } = req.body;
    const db = loadDB();
    const userIndex = db.users.findIndex(u => u.email === email);
    
    if (userIndex !== -1) {
        // Update user state
        db.users[userIndex] = { ...db.users[userIndex], ...state };
        saveDB(db);
        res.json({ success: true, state: db.users[userIndex] });
    } else {
        res.status(404).json({ error: 'User not found' });
    }
});

app.get('/api/user/data', (req, res) => {
    const { email } = req.query;
    const db = loadDB();
    const user = db.users.find(u => u.email === email);
    if (user) {
        res.json(user);
    } else {
        res.status(404).json({ error: 'User not found' });
    }
});

app.get('/api/leaderboard', (req, res) => {
    const db = loadDB();
    const sortedUsers = [...db.users].sort((a, b) => (b.xp || 0) - (a.xp || 0)).slice(0, 10);
    res.json(sortedUsers);
});

// AI Chat Route
app.post('/api/chat', async (req, res) => {
    try {
        if (!openai) return res.json({ message: "AI Chat Tutor o'chirilgan." });
        const { messages } = req.body;
        const completion = await openai.chat.completions.create({
            model: "gpt-4-turbo-preview",
            messages: [{ role: "system", content: "You are a Turkish tutor..." }, ...messages],
        });
        res.json({ message: completion.choices[0].message.content });
    } catch (error) {
        res.status(500).json({ error: 'AI Error' });
    }
});

app.get('/status', (req, res) => {
    res.json({ status: 'Online', usersCount: loadDB().users.length });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});

