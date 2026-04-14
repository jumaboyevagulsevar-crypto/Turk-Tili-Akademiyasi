// --- Global State & Defaults ---
const DEFAULTS = {
    xp: 0,
    lessons: 0,
    streak: 1,
    progress: 1,
    level: 'A1',
    lastLogin: new Date().toDateString(),
    name: "O'quvchi",
    lang: 'uz',
    theme: 'dark',
    completedLessons: [],
    email: localStorage.getItem('turktili-email') || 'o@q.vchi', // Added email for sync
    completedAssignments: [] // Added for tasks
};

const API_BASE = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1' 
    ? 'http://localhost:5000/api' 
    : 'https://turk-tili-akademiyasi.onrender.com/api'; 

const state = {};
Object.keys(DEFAULTS).forEach(key => {
    const stored = localStorage.getItem(`turktili-${key}`);
    if (stored !== null) {
        if (key === 'completedLessons' || key === 'completedAssignments') {
            try { state[key] = JSON.parse(stored); } catch(e) { state[key] = []; }
        } else {
            state[key] = (key === 'name' || key === 'lang' || key === 'theme' || key === 'lastLogin' || key === 'level') ? stored : parseInt(stored);
        }
    } else {
        state[key] = DEFAULTS[key];
    }
});

let currentLessonData = null;
let currentQuizState = {
    questions: [],
    currentIndex: 0,
    score: 0
};

// --- Global Functions (Exposed to Window) ---
window.showView = function(targetId) {
    if (!targetId) return;
    const navItems = document.querySelectorAll('.nav-item');
    const viewSections = document.querySelectorAll('.view-section');

    navItems.forEach(nav => {
        nav.classList.toggle('active', nav.getAttribute('data-target') === targetId);
    });

    viewSections.forEach(section => {
        if (section.id === targetId) {
            section.classList.add('active');
            if (targetId === 'topics-view') { renderTopics(); }
            if (targetId === 'certificates') { renderCertificates(); }
            if (targetId === 'admin-panel') {
                if (typeof window.renderAdminVideoList === 'function') window.renderAdminVideoList();
                if (typeof window.renderUsersList === 'function') window.renderUsersList();
            }
            if (targetId === 'tasks') { renderAssignments(); }
        } else {
            section.classList.remove('active');
        }
    });

    // Hide lesson player when switching views
    const lessonPlayer = document.getElementById('lesson-player-area');
    if (lessonPlayer) {
        lessonPlayer.style.display = 'none';
        const iframe = document.getElementById('inline-video-iframe');
        if (iframe) iframe.src = '';
    }
};

window.setLevel = function(lvl) {
    state.level = lvl;
    localStorage.setItem('turktili-level', lvl);
    updateStatsUI();
    
    const topicsTitle = document.querySelector('#topics-view h2');
    if (topicsTitle) topicsTitle.innerText = `${lvl} Mavzulari`;

    document.querySelectorAll('.level-card').forEach(card => {
        const badge = card.querySelector('.level-badge');
        card.classList.toggle('active', badge && badge.innerText === lvl);
    });

    window.showView('topics-view');
};

function updateStatsUI() {
    const xpEl = document.getElementById('stat-xp');
    const lessonsEl = document.getElementById('stat-lessons');
    const streakEl = document.querySelector('.streak-box span');
    const sidebarName = document.querySelector('.user-info h4');
    const bannerTitle = document.querySelector('.banner-text h1');
    
    if (xpEl) xpEl.innerText = `${state.xp} XP`;
    if (lessonsEl) lessonsEl.innerText = state.lessons;
    if (streakEl) streakEl.innerText = `${state.streak} Kun`;
    if (sidebarName) sidebarName.innerText = state.name;
    if (bannerTitle) bannerTitle.innerText = `Xush kelibsiz, ${state.name}! \uD83D\uDC4B`;

    const totalLessons = 90; 
    const uniqueCompletions = Array.isArray(state.completedLessons) ? state.completedLessons.length : 0;
    const progressPct = Math.min(Math.round((uniqueCompletions / totalLessons) * 100), 100);
    
    const mainProgressText = document.querySelector('.course-info .progress-text');
    const mainProgressBar = document.querySelector('.course-info .progress-bar');
    if (mainProgressText) mainProgressText.innerText = `${progressPct}% yakunlandi`;
    if (mainProgressBar) mainProgressBar.style.width = `${progressPct}%`;
    
    const globalPctEl = document.getElementById('global-progress-pct');
    const globalBarEl = document.getElementById('global-progress-bar');
    const userLevelBadge = document.getElementById('user-level-badge');

    if (globalPctEl) globalPctEl.innerText = `${progressPct}%`;
    if (globalBarEl) globalBarEl.style.width = `${progressPct}%`;
    if (userLevelBadge) userLevelBadge.innerText = `${state.level} Daraja`;

    // Update level cards specifically
    const levels = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'];
    levels.forEach(lvl => {
        const levelCompletions = state.completedLessons.filter(id => id.startsWith(lvl + '_')).length;
        const levelPct = Math.round((levelCompletions / 15) * 100);
        
        // Find cards in the levels-grid
        const cards = document.querySelectorAll('.level-card');
        cards.forEach(card => {
            const badge = card.querySelector('.level-badge');
            if (badge && badge.innerText === lvl) {
                const bar = card.querySelector('.progress-bar');
                const text = card.querySelector('.progress-text');
                if (bar) bar.style.width = `${levelPct}%`;
                if (text) text.innerText = `${levelPct}% yakunlandi`;
            }
        });
    });
}

function renderTopics() {
    const container = document.querySelector('.topics-grid');
    if (!container || !window.topicsData) return;
    container.innerHTML = '';

    const levelTopics = window.topicsData[state.level] || window.topicsData['A1'];
    levelTopics.forEach(topic => {
        const lessonUID = `${state.level}_${topic.id}`;
        const isCompleted = Array.isArray(state.completedLessons) && state.completedLessons.includes(lessonUID);
        
        const item = document.createElement('div');
        item.className = `topic-item glass-card ${topic.status} ${isCompleted ? 'completed' : ''}`;
        
        // Safe string for JS calls
        const safeTitle = (topic.title || "").replace(/'/g, "\\'");
        
        let actionButtons = '';
        if (topic.type === 'video') {
            actionButtons = `
                <div class="topic-actions">
                    <button class="btn-primary-sm lesson-btn ${isCompleted ? 'btn-completed' : ''}" 
                            data-level="${state.level}" 
                            data-id="${topic.id}" 
                            data-video="${topic.videoId}" 
                            data-title="${topic.title}">
                        <i class="fa-solid ${isCompleted ? 'fa-circle-check' : 'fa-play'}"></i> 
                        ${isCompleted ? 'Bajarildi' : 'Dars'}
                    </button>
                </div>
            `;
        } else {
            actionButtons = topic.status === 'active' ? `<button class="btn-primary-sm" onclick="startLesson('${state.level}', ${topic.id})">O'rganish</button>` : `<button class="btn-outline-sm" disabled>Qulflangan</button>`;
        }
        item.innerHTML = `<div class="topic-number">${isCompleted ? '<i class="fa-solid fa-check"></i>' : topic.id}</div><div class="topic-info"><h4>${topic.title}</h4><p>${topic.desc}</p></div>${actionButtons}`;
        container.appendChild(item);
    });
}

window.openLesson = function(lvl, id, videoId, title) {
    console.log("Opening Lesson:", title);
    currentLessonData = { lvl, id, title };
    const area = document.getElementById('lesson-player-area');
    const iframe = document.getElementById('inline-video-iframe');
    const titleEl = document.getElementById('current-lesson-title');
    const quizContainer = document.getElementById('lesson-quiz-container');
    const exercisePrompt = document.getElementById('exercise-prompt');

    if (!area || !iframe) {
        console.error("Player area or iframe not found!", { area, iframe });
        return;
    }

    titleEl.innerText = title;
    iframe.src = `https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1`;
    
    area.style.display = 'block';
    quizContainer.style.display = 'none';
    exercisePrompt.style.display = 'block';

    area.scrollIntoView({ behavior: 'smooth', block: 'start' });
};

window.renderLessonQuiz = function(index = 0) {
    if (!currentLessonData) return;
    const { lvl, id } = currentLessonData;
    const quizContainer = document.getElementById('lesson-quiz-container');
    const exercisePrompt = document.getElementById('exercise-prompt');
    const allTasks = window.lessonTasks && window.lessonTasks[lvl] ? window.lessonTasks[lvl][id] : null;

    if (index === 0) {
        currentQuizState.questions = allTasks || [];
        currentQuizState.currentIndex = 0;
        currentQuizState.score = 0;
        exercisePrompt.style.display = 'none';
        quizContainer.style.display = 'block';
    }

    if (!currentQuizState.questions || currentQuizState.questions.length === 0) {
        quizContainer.innerHTML = `
            <div class="glass-card quiz-result-card" style="padding: 30px; text-align: center;">
                <div class="result-icon pulse-yellow"><i class="fa-solid fa-triangle-exclamation"></i></div>
                <h4>Hozircha dars uchun mashqlar yo'q.</h4>
                <p>Keyingi darslarda yangi mashqlar qo'shiladi!</p>
                <button class="btn-primary mt-3" onclick="document.getElementById('lesson-player-area').style.display='none'">Yopish</button>
            </div>
        `;
        return;
    }

    const task = currentQuizState.questions[index];
    const progress = Math.round(((index + 1) / currentQuizState.questions.length) * 100);

    quizContainer.innerHTML = `
        <div class="quiz-box animate-fade-in">
            <div class="quiz-header" style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px;">
                <span class="badge-red">Savol ${index + 1} / ${currentQuizState.questions.length}</span>
                <div class="mini-progress-bg" style="flex: 1; height: 8px; background: rgba(255,255,255,0.1); margin: 0 15px; border-radius: 4px; overflow: hidden;">
                    <div class="mini-progress-fill" style="width: ${progress}%; height: 100%; background: var(--accent-red); transition: width 0.3s ease;"></div>
                </div>
            </div>
            
            <h4 style="margin-bottom: 25px; line-height: 1.4;">${task.q}</h4>
            
            <div class="options-grid" style="display: grid; grid-template-columns: repeat(1, 1fr); gap: 12px;">
                ${task.a.map((opt, i) => `
                    <button class="btn-quiz-option" onclick="checkLessonAnswer(${i}, ${task.correct})">
                        <span class="opt-letter">${String.fromCharCode(65 + i)}</span>
                        <span class="opt-text">${opt}</span>
                    </button>
                `).join('')}
            </div>
            
            <div id="quiz-feedback" class="quiz-feedback-area"></div>
        </div>
    `;
};

window.checkLessonAnswer = function(selected, correct) {
    const feedback = document.getElementById('quiz-feedback');
    const buttons = document.querySelectorAll('.btn-quiz-option');
    const isCorrect = selected === correct;
    
    buttons.forEach((btn, i) => {
        btn.disabled = true;
        if (i === correct) btn.classList.add('correct');
        else if (i === selected) btn.classList.add('wrong');
    });

    if (isCorrect) {
        currentQuizState.score++;
        feedback.innerHTML = '<div class="feedback-msg success animate-bounce-in"><i class="fa-solid fa-circle-check"></i> To\'g\'ri!</div>';
        if (typeof confetti === 'function') confetti({ particleCount: 40, spread: 60, origin: { y: 0.8 } });
    } else {
        feedback.innerHTML = '<div class="feedback-msg error animate-shake"><i class="fa-solid fa-circle-xmark"></i> Noto\'g\'ri</div>';
    }

    setTimeout(() => {
        if (currentQuizState.currentIndex < currentQuizState.questions.length - 1) {
            currentQuizState.currentIndex++;
            window.renderLessonQuiz(currentQuizState.currentIndex);
        } else {
            window.showQuizResult();
        }
    }, 1500);
};

window.showQuizResult = function() {
    const quizContainer = document.getElementById('lesson-quiz-container');
    const scorePct = Math.round((currentQuizState.score / currentQuizState.questions.length) * 100);
    const xpEarned = currentQuizState.score * 10;
    
    let message = "Yaxshi natija!";
    let icon = "fa-star";
    if (scorePct >= 90) { message = "Mukammal! Ajoyib!"; icon = "fa-crown"; }
    else if (scorePct >= 70) { message = "Barakalla! Juda yaxshi!"; icon = "fa-thumbs-up"; }
    else if (scorePct < 50) { message = "Yana bir bor o'qib chiqing!"; icon = "fa-book-open"; }

    // Update Global State
    state.xp += xpEarned;
    localStorage.setItem('turktili-xp', state.xp);

    // Track Lesson Completion
    if (scorePct >= 70 && currentLessonData) {
        const lessonUID = `${currentLessonData.lvl}_${currentLessonData.id}`;
        if (!state.completedLessons.includes(lessonUID)) {
            state.completedLessons.push(lessonUID);
            state.lessons = state.completedLessons.length;
            localStorage.setItem('turktili-completedLessons', JSON.stringify(state.completedLessons));
            localStorage.setItem('turktili-lessons', state.lessons);
            
            // Sync with server immediately after completion
            syncProgress();
        }
    }
    
    updateStatsUI();

    quizContainer.innerHTML = `
        <div class="glass-card quiz-result-card animate-scale-up" style="padding: 40px; text-align: center;">
            <div class="result-circular-progress" style="--percent: ${scorePct}">
                <div class="inner-circle">
                    <span class="pct-text">${scorePct}%</span>
                    <span class="sub-text">O'zlashtirildi</span>
                </div>
            </div>
            
            <h2 style="margin: 20px 0 10px; color: var(--accent-red);">${message}</h2>
            <p style="color: var(--text-secondary); margin-bottom: 25px;">
                Siz ${currentQuizState.questions.length} tadan ${currentQuizState.score} ta savolga to'g'ri javob berdingiz va <strong>+${xpEarned} XP</strong> ishladingiz!
            </p>
            
            <div class="result-actions" style="display: flex; gap: 15px; justify-content: center;">
                <button class="btn-primary" onclick="document.getElementById('lesson-player-area').style.display='none'">
                    <i class="fa-solid fa-check-double"></i> Darsni yakunlash
                </button>
                <button class="btn-outline" onclick="renderLessonQuiz(0)">
                    <i class="fa-solid fa-rotate-right"></i> Qayta urinish
                </button>
            </div>
        </div>
    `;
    
    if (scorePct >= 70 && typeof confetti === 'function') {
        confetti({ particleCount: 150, spread: 100, origin: { y: 0.6 } });
    }
};

window.playVideo = function(id) {
    const url = `https://www.youtube-nocookie.com/embed/${id}?autoplay=1`;
    let modal = document.getElementById('video-modal');
    if (!modal) {
        modal = document.createElement('div');
        modal.id = 'video-modal';
        modal.classList.add('video-modal-overlay');
        modal.innerHTML = `<div class="video-modal-container"><button onclick="this.parentElement.parentElement.remove()" class="close-modal"><i class="fa-solid fa-xmark"></i></button><iframe id="video-iframe" src="" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe></div>`;
        document.body.appendChild(modal);
    }
    document.getElementById('video-iframe').src = url;
};

// --- DOM Initialization ---
document.addEventListener('DOMContentLoaded', () => {
    updateStatsUI();
    const navItems = document.querySelectorAll('.nav-item');
    
    navItems.forEach(item => {
        item.addEventListener('click', (e) => {
            const target = item.getAttribute('data-target');
            if (target) {
                e.preventDefault();
                window.showView(target);
            }
        });
    });

    const bannerContinueBtn = document.querySelector('.welcome-banner .btn-primary');
    if (bannerContinueBtn) {
        bannerContinueBtn.onclick = () => window.setLevel(state.level || 'A1');
    }

    // Global Event Delegation for Lesson Buttons
    document.addEventListener('click', (e) => {
        const btn = e.target.closest('.lesson-btn');
        if (btn) {
            e.preventDefault();
            const lvl = btn.getAttribute('data-level');
            const id = btn.getAttribute('data-id');
            const videoId = btn.getAttribute('data-video');
            const title = btn.getAttribute('data-title');
            console.log("Lesson Clicked:", { lvl, id, videoId, title });
            if (window.openLesson) window.openLesson(lvl, id, videoId, title);
        }
    });

    // Theme Toggle
    const themeToggle = document.getElementById('theme-toggle');
    if(themeToggle) {
        themeToggle.checked = state.theme === 'dark';
        document.body.classList.toggle('light-mode', !themeToggle.checked);
        themeToggle.onchange = (e) => {
            state.theme = e.target.checked ? 'dark' : 'light';
            localStorage.setItem('turktili-theme', state.theme);
            document.body.classList.toggle('light-mode', !e.target.checked);
        };
    }

    // Sidebar Toggle (Mobile)
    const sidebarToggle = document.getElementById('sidebar-toggle');
    const sidebar = document.querySelector('.sidebar');
    if (sidebarToggle && sidebar) {
        sidebarToggle.addEventListener('click', () => {
            console.log("Sidebar Toggle Clicked");
            sidebar.classList.toggle('active');
        });
    }

    // Close sidebar when clicking a nav item on mobile
    const navItemsList = document.querySelectorAll('.nav-item');
    navItemsList.forEach(item => {
        item.addEventListener('click', () => {
            if (window.innerWidth <= 768 && sidebar) sidebar.classList.remove('active');
        });
    });

    // Global Search
    const searchInput = document.getElementById('global-search-input');
    if (searchInput) {
        searchInput.addEventListener('input', (e) => handleGlobalSearch(e.target.value));
    }

    // AI Chat Toggle
    const chatToggle = document.getElementById('chat-toggle');
    const closeChat = document.getElementById('close-chat');
    const chatWindow = document.getElementById('ai-chat-window');
    if (chatToggle && chatWindow) {
        chatToggle.addEventListener('click', (e) => {
            e.stopPropagation();
            console.log("AI Chat Toggle Clicked");
            chatWindow.classList.toggle('active');
            chatToggle.classList.toggle('active');
        });
    }
    if (closeChat && chatWindow) {
        closeChat.addEventListener('click', (e) => {
            e.stopPropagation();
            chatWindow.classList.remove('active');
            if (chatToggle) chatToggle.classList.remove('active');
        });
    }

    // Close chat when clicking outside
    document.addEventListener('click', (e) => {
        if (chatWindow && chatWindow.classList.contains('active')) {
            if (!chatWindow.contains(e.target) && !chatToggle.contains(e.target)) {
                chatWindow.classList.remove('active');
                chatToggle.classList.remove('active');
            }
        }
    });

    // AI Send Msg
    const sendBtn = document.getElementById('send-msg');
    const chatInput = document.getElementById('chat-input');
    if (sendBtn && chatInput) {
        sendBtn.addEventListener('click', () => sendChatMessage());
        chatInput.addEventListener('keypress', (e) => { if(e.key === 'Enter') sendChatMessage(); });
    }

    // Logout
    const logoutBtn = document.getElementById('logout-btn');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', (e) => {
            e.preventDefault();
            localStorage.removeItem('turktili-name');
            window.location.href = 'index.html';
        });
    }

    // Initialize Vocabulary
    try {
        renderVocab();
    } catch(e) { console.warn("Vocab init skipped", e); }
});

// --- AI Chat Logic (Groq Integration) ---
async function sendChatMessage() {
    const input = document.getElementById('chat-input');
    const body = document.getElementById('chat-body');
    const text = input.value.trim();
    if (!text) return;

    // User Message
    const userMsg = document.createElement('div');
    userMsg.className = 'chat-msg msg-user';
    userMsg.innerText = text;
    body.appendChild(userMsg);
    input.value = '';
    body.scrollTop = body.scrollHeight;

    // Typing Indicator
    const typing = document.createElement('div');
    typing.className = 'chat-msg msg-ai typing';
    typing.innerHTML = '<div class="typing-indicator"><div class="typing-dot"></div><div class="typing-dot"></div><div class="typing-dot"></div></div>';
    body.appendChild(typing);
    body.scrollTop = body.scrollHeight;

    try {
        // Placeholder for Groq API Logic
        // In a real scenario, you'd call the Groq API here
        setTimeout(() => {
            typing.remove();
            const aiMsg = document.createElement('div');
            aiMsg.className = 'chat-msg msg-ai';
            
            // Simple logic for demo
            if (text.toLowerCase().includes('salom')) {
                aiMsg.innerText = "Salom! Men sizga turk tilini o'rganishda yordam berishga tayyorman. Savolingiz bo'lsa bering!";
            } else {
                aiMsg.innerText = "Ajoyib savol! Men hozirda o'rganish jarayonidaman, lekin turk tili boyicha barcha savollaringizga javob bera olaman.";
            }
            body.appendChild(aiMsg);
            body.scrollTop = body.scrollHeight;
        }, 1000);
    } catch (err) {
        typing.remove();
        console.error("AI Error:", err);
    }
}

// --- Vocabulary & Flashcards ---
let currentFlashIndex = 0;
function renderVocab() {
    const listContainer = document.getElementById('vocab-list-container');
    if (!listContainer || !window.vocabulary) return;
    
    listContainer.innerHTML = window.vocabulary.map(v => `
        <div class="glass-card vocab-item" style="padding: 15px; display: flex; justify-content: space-between; align-items: center;">
            <div>
                <strong style="color: var(--accent-red); font-size: 1.1rem;">${v.tr}</strong>
                <p style="color: var(--text-secondary); font-size: 0.9rem;">${v.uz}</p>
            </div>
            <span class="badge-grey" style="font-size: 0.7rem;">${v.lvl}</span>
        </div>
    `).join('');

    updateFlashcard();
}

function updateFlashcard() {
    const term = document.getElementById('card-term');
    const meaning = document.getElementById('card-meaning');
    if (!term || !meaning || !window.vocabulary) return;

    const v = window.vocabulary[currentFlashIndex];
    term.innerText = v.tr;
    meaning.innerText = v.uz;
    
    const card = document.getElementById('current-flashcard');
    if (card) card.classList.remove('flipped');
}

// Flashcard controls
document.addEventListener('click', (e) => {
    if (e.target.closest('#current-flashcard')) {
        e.target.closest('#current-flashcard').classList.toggle('flipped');
    }
    if (e.target.closest('#next-card')) {
        currentFlashIndex = (currentFlashIndex + 1) % window.vocabulary.length;
        updateFlashcard();
    }
    if (e.target.closest('#prev-card')) {
        currentFlashIndex = (currentFlashIndex - 1 + window.vocabulary.length) % window.vocabulary.length;
        updateFlashcard();
    }
});

// --- Search Logic ---
function handleGlobalSearch(query) {
    const dropdown = document.getElementById('search-results-dropdown');
    if (!query || query.length < 2) {
        dropdown.style.display = 'none';
        return;
    }

    const results = [];
    // Search in topicsData
    Object.keys(window.topicsData || {}).forEach(lvl => {
        window.topicsData[lvl].forEach(topic => {
            if (topic.title.toLowerCase().includes(query.toLowerCase())) {
                results.push({ name: topic.title, level: lvl });
            }
        });
    });

    if (results.length > 0) {
        dropdown.style.display = 'block';
        dropdown.innerHTML = results.slice(0, 5).map(r => `
            <div class="search-result-item" style="padding: 12px 15px; cursor: pointer; border-bottom: 1px solid var(--border-color);" 
                 onclick="window.goToLevel('${r.level}')">
                <i class="fa-solid fa-play-circle" style="color:var(--accent-red); margin-right: 8px;"></i> ${r.name}
            </div>
        `).join('');
    } else {
        dropdown.style.display = 'none';
    }
}

window.goToLevel = function(lvl) {
    window.setLevel(lvl);
    window.showView('topics-view');
    document.getElementById('search-results-dropdown').style.display = 'none';
    document.getElementById('global-search-input').value = '';
};

// --- Admin Panel Rendering ---
window.renderAdminVideoList = function() {
    const list = document.getElementById('admin-video-list');
    if (!list) return;
    
    // In a real app, you'd fetch from localStorage or DB
    list.innerHTML = `
        <div style="padding: 10px; opacity: 0.7;">
            Hozircha qo'shilgan videolar yo'q. Yangi video qo'shish uchun formadan foydalaning.
        </div>
    `;
};

window.renderUsersList = function() {
    const body = document.getElementById('users-list-body');
    if (!body) return;
    
    const users = JSON.parse(localStorage.getItem('turktili-users') || '[]');
    if (users.length === 0) {
        body.innerHTML = '<tr><td colspan="4" style="text-align:center; padding: 20px;">Foydalanuvchilar mavjud emas</td></tr>';
        return;
    }

    body.innerHTML = users.map(u => `
        <tr>
            <td>${u.name}</td>
            <td>${u.email}</td>
            <td>${u.date}</td>
            <td><button class="btn-icon" style="color:var(--accent-red)"><i class="fa-solid fa-trash"></i></button></td>
        </tr>
    `).join('');
};

window.speak = function(text) {
    const ut = new SpeechSynthesisUtterance(text);
    ut.lang = 'tr-TR';
    window.speechSynthesis.speak(ut);
};

window.playVideo = function(id) {
    const url = `https://www.youtube-nocookie.com/embed/${id}?autoplay=1`;
    const iframe = document.getElementById('inline-video-iframe');
    if (iframe) iframe.src = url;
};

// --- Server Synchronization Logic [NEW] ---
async function syncProgress() {
    const syncIndicator = document.getElementById('sync-status');
    if (!syncIndicator) return;
    
    try {
        const response = await fetch(`${API_BASE}/user/sync`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ 
                email: state.email, 
                state: { 
                    xp: state.xp, 
                    lessons: state.lessons, 
                    level: state.level, 
                    completedLessons: state.completedLessons,
                    name: state.name
                } 
            })
        });
        
        if (response.ok) {
            syncIndicator.classList.remove('offline');
            syncIndicator.classList.add('online');
            syncIndicator.querySelector('span').innerText = 'Synced';
        } else {
            throw new Error('Sync failed');
        }
    } catch (e) {
        syncIndicator.classList.add('offline');
        syncIndicator.classList.remove('online');
        syncIndicator.querySelector('span').innerText = 'Offline';
    }
}

async function loadRemoteProgress() {
    if (!state.email) return;
    try {
        const res = await fetch(`${API_BASE}/user/data?email=${state.email}`);
        if (res.ok) {
            const remote = await res.json();
            // Merge remote state into local
            if (remote.xp > state.xp) state.xp = remote.xp;
            if (remote.completedLessons && remote.completedLessons.length > state.completedLessons.length) {
                state.completedLessons = remote.completedLessons;
                state.lessons = state.completedLessons.length;
            }
            updateStatsUI();
        }
    } catch (e) { console.warn("Remote load failed."); }
}

// --- Certificate Logic [NEW] ---
function renderCertificates() {
    const levels = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'];
    const certsGrid = document.querySelector('.certs-grid');
    if (!certsGrid) return;
    
    certsGrid.innerHTML = ''; // Rebuild
    
    levels.forEach(lvl => {
        const levelCompletions = state.completedLessons.filter(id => id.startsWith(lvl + '_')).length;
        const totalInLevel = 15;
        const pct = Math.round((levelCompletions / totalInLevel) * 100);
        const isMastered = levelCompletions >= totalInLevel;
        
        const card = document.createElement('div');
        card.className = `cert-card ${isMastered ? 'unlocked' : 'locked'} glass-card`;
        card.innerHTML = `
            <div class="cert-visual">
                <i class="fa-solid ${isMastered ? 'fa-award' : 'fa-certificate'}"></i>
                <span>${lvl}</span>
            </div>
            <div class="cert-info">
                <h3>${lvl} Daraja Sertifikati</h3>
                <p>${isMastered ? 'Tabriklaymiz! Kursni muvaffaqiyatli yakunladingiz.' : 'Sertifikatni olish uchun kursni to\'liq (15 ta dars) yakunlang.'}</p>
                <div class="progress-container">
                    <div class="progress-bar" style="width: ${pct}%"></div>
                </div>
                <span>${pct}% tugallandi</span>
                ${isMastered ? `<button class="btn-primary mt-2" onclick="window.generateCertificate('${lvl}')">Sertifikatni Ko\'rish</button>` : ''}
            </div>
        `;
        certsGrid.appendChild(card);
    });
}

window.generateCertificate = function(lvl) {
    const modal = document.getElementById('cert-modal');
    const content = document.getElementById('cert-content');
    if (!modal || !content) return;
    
    const date = new Date().toLocaleDateString();
    const certID = 'TT-' + Math.random().toString(36).substr(2, 9).toUpperCase();
    
    content.innerHTML = `
        <div class="certificate-template">
            <div class="cert-border">
                <div class="cert-header">
                    <i class="fa-solid fa-moon"></i>
                    <h2>Turk Tili Akademiyasi</h2>
                    <p>MUVAFFAQIYAT SERTIFIKATI</p>
                </div>
                <div class="cert-body">
                    <p class="cert-text">Ushbu sertifikat bilan</p>
                    <h1 class="student-name">${state.name}</h1>
                    <p class="cert-text">Turk tilining <strong>${lvl}</strong> darajasini a'lo baholar bilan tamomlagani tasdiqlanadi.</p>
                </div>
                <div class="cert-footer">
                    <div class="footer-item">
                        <span class="label">Sana</span>
                        <span class="value">${date}</span>
                    </div>
                    <div class="footer-item">
                        <div class="cert-seal">
                            <i class="fa-solid fa-award"></i>
                        </div>
                    </div>
                    <div class="footer-item">
                        <span class="label">ID</span>
                        <span class="value">${certID}</span>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    modal.style.display = 'flex';
    setTimeout(() => modal.classList.add('active'), 10);
};

window.closeCertModal = function() {
    const modal = document.getElementById('cert-modal');
    if (modal) {
        modal.classList.remove('active');
        setTimeout(() => modal.style.display = 'none', 300);
    }
};

// --- Assignments (Tasks) Logic ---
let currentTaskFilter = 'all';

window.setTaskFilter = function(filter) {
    currentTaskFilter = filter;
    
    // UI feedback for filter buttons
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.toggle('active', btn.getAttribute('onclick').includes(`'${filter}'`));
    });
    
    renderAssignments();
};

function renderAssignments() {
    const container = document.getElementById('taskItemsList');
    if (!container || !window.assignmentsData) return;
    
    container.innerHTML = '';
    const levelAssignments = window.assignmentsData[state.level] || [];
    
    const filtered = levelAssignments.filter(task => {
        if (currentTaskFilter === 'all') return true;
        return task.type === currentTaskFilter;
    });

    if (filtered.length === 0) {
        container.innerHTML = `
            <div class="empty-state glass-card" style="grid-column: 1/-1; padding: 40px; text-align: center;">
                <i class="fa-solid fa-list-check" style="font-size: 48px; color: rgba(255,255,255,0.1); margin-bottom: 20px;"></i>
                <p style="color: var(--text-secondary)">Ushbu turkumda hozircha vazifalar yo'q.</p>
            </div>
        `;
        return;
    }

    filtered.forEach(task => {
        const isFinished = state.completedAssignments.includes(task.id);
        const card = document.createElement('div');
        card.className = `task-item glass-card animate-fade-in ${task.type} ${isFinished ? 'completed-task' : ''}`;
        
        const typeIcons = {
            'vocab': 'fa-language',
            'grammar': 'fa-book-open',
            'listen': 'fa-headphones',
            'reading': 'fa-book-open-reader',
            'writing': 'fa-pen-nib'
        };

        card.innerHTML = `
            <div class="task-icon ${task.type}">
                <i class="fas ${typeIcons[task.type] || 'fa-tasks'}"></i>
            </div>
            <div class="task-details">
                <h4>${task.title} ${isFinished ? '<i class="fa-solid fa-circle-check" style="color: #4ade80; margin-left: 8px;"></i>' : ''}</h4>
                <p>${task.desc}</p>
                <div class="task-meta">
                    <span class="points">+${task.xp} XP</span>
                    <span class="time"><i class="far fa-clock"></i> ${task.time} daqiqa</span>
                </div>
            </div>
            ${isFinished ? 
                '<span class="status-badge green">Bajarildi</span>' : 
                `<button class="btn-primary-sm" onclick="completeAssignment('${task.id}', ${task.xp})">Boshlash</button>`
            }
        `;
        container.appendChild(card);
    });
}

window.completeAssignment = function(taskId, xp) {
    if (state.completedAssignments.includes(taskId)) return;
    
    // Simple mock: Mark as completed and give XP
    state.completedAssignments.push(taskId);
    state.xp += xp;
    
    localStorage.setItem('turktili-completedAssignments', JSON.stringify(state.completedAssignments));
    localStorage.setItem('turktili-xp', state.xp);
    
    // Show quick feedback
    showNotification(`Tabriklaymiz! +${xp} XP qo'lga kiritildi!`, 'success');
    
    updateStatsUI();
    renderAssignments();
    syncProgress();
};

function showNotification(msg, type = 'info') {
    // Basic toast-like or just alert
    console.log(`[${type}] ${msg}`);
    // If we had a toast container, we'd use it here.
}

// Initial Sync & Load
window.addEventListener('load', () => {
    loadRemoteProgress();
    setInterval(syncProgress, 60000); // Auto-sync every minute
});

