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
    theme: 'dark'
};

const state = {};
Object.keys(DEFAULTS).forEach(key => {
    const stored = localStorage.getItem(`turktili-${key}`);
    if (stored !== null) {
        state[key] = (key === 'name' || key === 'lang' || key === 'theme' || key === 'lastLogin' || key === 'level') ? stored : parseInt(stored);
    } else {
        state[key] = DEFAULTS[key];
    }
});

let currentLessonData = null;

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
            if (targetId === 'admin-panel') {
                if (typeof window.renderAdminVideoList === 'function') window.renderAdminVideoList();
                if (typeof window.renderUsersList === 'function') window.renderUsersList();
            }
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
    const progressPct = Math.min(Math.round((state.lessons / totalLessons) * 100), 100);
    
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
}

function renderTopics() {
    const container = document.querySelector('.topics-grid');
    if (!container || !window.topicsData) return;
    container.innerHTML = '';

    const levelTopics = window.topicsData[state.level] || window.topicsData['A1'];
    levelTopics.forEach(topic => {
        const item = document.createElement('div');
        item.className = `topic-item glass-card ${topic.status}`;
        
        // Safe string for JS calls
        const safeTitle = (topic.title || "").replace(/'/g, "\\'");
        
        let actionButtons = '';
        if (topic.type === 'video') {
            actionButtons = `
                <div class="topic-actions">
                    <button class="btn-primary-sm lesson-btn" 
                            data-level="${state.level}" 
                            data-id="${topic.id}" 
                            data-video="${topic.videoId}" 
                            data-title="${topic.title}">
                        <i class="fa-solid fa-play"></i> Dars
                    </button>
                </div>
            `;
        } else {
            actionButtons = topic.status === 'active' ? `<button class="btn-primary-sm" onclick="startLesson('${state.level}', ${topic.id})">O'rganish</button>` : `<button class="btn-outline-sm" disabled>Qulflangan</button>`;
        }
        item.innerHTML = `<div class="topic-number">${topic.id}</div><div class="topic-info"><h4>${topic.title}</h4><p>${topic.desc}</p></div>${actionButtons}`;
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

window.renderLessonQuiz = function() {
    if (!currentLessonData) return;
    const { lvl, id } = currentLessonData;
    const quizContainer = document.getElementById('lesson-quiz-container');
    const exercisePrompt = document.getElementById('exercise-prompt');
    const tasks = window.lessonTasks && window.lessonTasks[lvl] ? window.lessonTasks[lvl][id] : null;

    exercisePrompt.style.display = 'none';
    quizContainer.style.display = 'block';
    
    if (!tasks || tasks.length === 0) {
        quizContainer.innerHTML = `
            <div class="glass-card" style="padding: 20px; text-align: center;">
                <h4>Bu dars uchun hali mashqlar qo'shilmagan.</h4>
                <p>Keyingi darsga o'tishingiz mumkin!</p>
                <button class="btn-primary mt-3" onclick="document.getElementById('lesson-player-area').style.display='none'">Yopish</button>
            </div>
        `;
        return;
    }

    const task = tasks[0]; 
    quizContainer.innerHTML = `
        <div class="quiz-box">
            <h4 style="margin-bottom: 20px;">Bilimingizni sinab ko'ring:</h4>
            <p style="font-size: 1.1rem; margin-bottom: 20px;">${task.q}</p>
            <div class="options-grid" style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 15px;">
                ${task.a.map((opt, i) => `<button class="btn-outline-sm quiz-opt-btn" onclick="checkLessonAnswer(${i}, ${task.correct})">${opt}</button>`).join('')}
            </div>
            <div id="quiz-feedback" style="margin-top: 20px; font-weight: bold; text-align: center;"></div>
        </div>
    `;
};

window.checkLessonAnswer = function(selected, correct) {
    const feedback = document.getElementById('quiz-feedback');
    const buttons = document.querySelectorAll('.quiz-opt-btn');
    
    buttons.forEach((btn, i) => {
        btn.disabled = true;
        if (i === correct) btn.style.background = 'var(--accent-green)';
        else if (i === selected) btn.style.background = 'var(--accent-red)';
    });

    if (selected === correct) {
        feedback.innerHTML = '<span style="color: var(--accent-green);">To\'g\'ri! Barakalla! +10 XP</span>';
        state.xp += 10;
        state.lessons += 1;
        localStorage.setItem('turktili-xp', state.xp);
        localStorage.setItem('turktili-lessons', state.lessons);
        updateStatsUI();
        
        if (typeof confetti === 'function') confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 } });

        setTimeout(() => {
            feedback.innerHTML += `<br><button class="btn-primary mt-3" onclick="document.getElementById('lesson-player-area').style.display='none'">Darsni yakunlash</button>`;
        }, 1000);
    } else {
        feedback.innerHTML = '<span style="color: var(--accent-red);">Noto\'g\'ri. Yana bir bor urinib ko\'ring!</span>';
        setTimeout(() => {
            buttons.forEach(btn => {
                btn.disabled = false;
                btn.style.background = '';
            });
            feedback.innerHTML = '';
        }, 2000);
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
            <div class="search-result-item" style="padding: 10px; cursor: pointer; border-bottom: 1px solid var(--border-color);" 
                 onclick="window.setLevel('${r.level}'); document.getElementById('search-results-dropdown').style.display='none';">
                ${r.name}
            </div>
        `).join('');
    } else {
        dropdown.style.display = 'none';
    }
}

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
