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

    const logoutBtn = document.getElementById('logout-btn');
    if (logoutBtn) {
        logoutBtn.onclick = (e) => {
            e.preventDefault();
            localStorage.removeItem('turktili-name');
            window.location.href = 'index.html';
        };
    }

    // Initialize Vocabulary & Flashcards
    if (typeof renderVocab === 'function') renderVocab();
});

// Admin & Other Features (Exposed for HTML)
window.verifyAdmin = function() {
    const pass = document.getElementById('admin-pass-input').value;
    if(pass === '1234') window.showView('admin-panel');
    else alert("Parol noto'g'ri!");
};

window.startLesson = function(lvl, id) { window.showView('test-view'); };
