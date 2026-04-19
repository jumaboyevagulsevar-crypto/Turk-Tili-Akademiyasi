// v2.0 - Dashboard & Certs Logic Update
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
    email: localStorage.getItem('turktili-email') || 'o@q.vchi',
    completedAssignments: [],
    avatar: null,
    dailyTasks: { vocab: false, grammar: false, ai: false, lesson: false }
};

const translations = {
    'uz': {
        'nav-home': 'Asosiy',
        'nav-courses': 'Mening Kurslarim',
        'nav-tasks': 'Vazifalar',
        'nav-certs': 'Sertifikatlar',
        'nav-vocab': "Lug'at",
        'nav-library': 'Kutubxona',
        'nav-settings': 'Sozlamalar',
        'header-time': 'Server vaqti',
        'settings-title': 'Sozlamalar Markazi',
        'settings-desc': 'Profil va platforma sozlamalarini boshqaring',
        'settings-personal-title': 'Shaxsiy sozlamalar',
        'settings-personal-desc': 'Ism, email va avatar',
        'settings-platform-title': 'Platforma sozlamalari',
        'settings-platform-desc': 'Til va tungi rejim',
        'platform-settings-title': 'Platforma Sozlamalari',
        'platform-settings-desc': "Ilova ko'rinishi va funksiyalarini sozlang",
        'settings-lang-label': 'Platforma tili',
        'settings-lang-sub': 'Interfeys tilini tanlang',
        'settings-theme-label': 'Tungi rejim',
        'settings-theme-sub': 'Qora mavzuni yoqish/o\'chirish',
        'settings-notif-label': 'Xabarnomalar',
        'settings-notif-sub': 'Yangi vazifalar haqida xabar berish',
        'settings-remind-label': 'Kunlik eslatma',
        'settings-remind-sub': 'Dars qilish vaqtini eslatish',
        'btn-back': 'Orqaga',
        'vocab-title': "Lug'at Boyligi",
        'vocab-desc': "Yangi so'zlarni qidirish va yodlash",
        'vocab-level': 'Daraja:',
        'vocab-lesson': 'Dars:',
        'vocab-all-lessons': '— Barchasi —',
        'vocab-search-placeholder': "So'zni qidirish...",
        'vocab-list-btn': "Ro'yxat",
        'vocab-flash-btn': 'Flashcards',
        'library-title': 'Kutubxona',
        'library-desc': "Turk tilidagi qiziqarli kitoblar va o'quv qo'llanmalari"
    },
    'tr': {
        'nav-home': 'Ana Sayfa',
        'nav-courses': 'Kurslarım',
        'nav-tasks': 'Görevler',
        'nav-certs': 'Sertifikalar',
        'nav-vocab': 'Sözlük',
        'nav-library': 'Kütüphane',
        'nav-settings': 'Ayarlar',
        'header-time': 'Sunucu Saati',
        'settings-title': 'Ayarlar Merkezi',
        'settings-desc': 'Profil ve platform ayarlarını yönetin',
        'settings-personal-title': 'Kişisel Ayarlar',
        'settings-personal-desc': 'İsim, e-posta ve avatar',
        'settings-platform-title': 'Platform Ayarları',
        'settings-platform-desc': 'Dil ve karanlık mod',
        'platform-settings-title': 'Platform Ayarları',
        'platform-settings-desc': 'Uygulama görünümünü ve özelliklerini özelleştirin',
        'settings-lang-label': 'Platform Dili',
        'settings-lang-sub': 'Arayüz dilini seçin',
        'settings-theme-label': 'Karanlık Mod',
        'settings-theme-sub': 'Karanlık temayı aç/kapat',
        'settings-notif-label': 'Bildirimler',
        'settings-notif-sub': 'Yeni görevler hakkında bildirim al',
        'settings-remind-label': 'Günlük Hatırlatıcı',
        'settings-remind-sub': 'Ders çalışma vaktini hatırlat',
        'btn-back': 'Geri',
        'vocab-title': 'Kelime Hazinesi',
        'vocab-desc': 'Yeni kelimeler arayın ve ezberleyin',
        'vocab-level': 'Seviye:',
        'vocab-lesson': 'Ders:',
        'vocab-all-lessons': '— Hepsi —',
        'vocab-search-placeholder': 'Kelime ara...',
        'vocab-list-btn': 'Liste',
        'vocab-flash-btn': 'Kartlar',
        'library-title': 'Kütüphane',
        'library-desc': 'Türkçe ilginç kitaplar ve eğitim materyalleri'
    },
    'en': {
        'nav-home': 'Dashboard',
        'nav-courses': 'My Courses',
        'nav-tasks': 'Assignments',
        'nav-certs': 'Certificates',
        'nav-vocab': 'Vocabulary',
        'nav-library': 'Library',
        'nav-settings': 'Settings',
        'header-time': 'Server Time',
        'settings-title': 'Settings Hub',
        'settings-desc': 'Manage profile and platform settings',
        'settings-personal-title': 'Personal Settings',
        'settings-personal-desc': 'Name, email and avatar',
        'settings-platform-title': 'Platform Settings',
        'settings-platform-desc': 'Language and dark mode',
        'platform-settings-title': 'Platform Settings',
        'platform-settings-desc': 'Configure app appearance and features',
        'settings-lang-label': 'Platform Language',
        'settings-lang-sub': 'Select interface language',
        'settings-theme-label': 'Dark Mode',
        'settings-theme-sub': 'Toggle dark theme on/off',
        'settings-notif-label': 'Notifications',
        'settings-notif-sub': 'Notify about new assignments',
        'settings-remind-label': 'Daily Reminder',
        'settings-remind-sub': 'Remind study time',
        'btn-back': 'Back',
        'vocab-title': 'Vocabulary Hub',
        'vocab-desc': 'Search and memorize new words',
        'vocab-level': 'Level:',
        'vocab-lesson': 'Lesson:',
        'vocab-all-lessons': '— All —',
        'vocab-search-placeholder': 'Search word...',
        'vocab-list-btn': 'List View',
        'vocab-flash-btn': 'Flashcards',
        'library-title': 'Library',
        'library-desc': 'Interesting Turkish books and study guides'
    }
};

window.updateUITranslations = function() {
    const lang = state.lang || 'uz';
    const langSet = translations[lang] || translations['uz'];
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (langSet[key]) {
            if (el.tagName === 'INPUT' && el.hasAttribute('placeholder')) {
                el.placeholder = langSet[key];
            } else {
                el.innerText = langSet[key];
            }
        }
    });
};

const API_BASE = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1' 
    ? 'http://localhost:5000/api' 
    : 'https://turk-tili-akademiyasi.onrender.com/api'; 

const state = {};
let currentTaskFilter = 'barchasi';
let activeTask = null;
let activeQuestionIndex = 0;
Object.keys(DEFAULTS).forEach(key => {
    const stored = localStorage.getItem(`turktili-${key}`);
    if (stored !== null) {
        if (key === 'completedLessons' || key === 'completedAssignments' || key === 'dailyTasks') {
            try { state[key] = JSON.parse(stored); } catch(e) { state[key] = DEFAULTS[key]; }
        } else {
            const stringKeys = ['name', 'lang', 'theme', 'lastLogin', 'level', 'avatar', 'email', 'phone'];
            state[key] = stringKeys.includes(key) ? stored : parseInt(stored);
        }
    } else {
        state[key] = DEFAULTS[key];
    }
});

// --- Daily Reset & Streak Logic ---
const today = new Date().toDateString();
const lastLogin = state.lastLogin;

if (lastLogin !== today) {
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    const yesterdayStr = yesterday.toDateString();

    if (lastLogin === yesterdayStr) {
        state.streak += 1;
    } else if (lastLogin !== today) {
        state.streak = 1;
    }

    // Reset daily tasks for new day
    state.dailyTasks = { vocab: false, grammar: false, ai: false, lesson: false };
    state.lastLogin = today;
    
    // Save new state
    localStorage.setItem('turktili-streak', state.streak);
    localStorage.setItem('turktili-lastLogin', state.lastLogin);
    localStorage.setItem('turktili-dailyTasks', JSON.stringify(state.dailyTasks));
}

// --- Helper: Server Time Clock ---
function updateServerTime() {
    const timeEl = document.getElementById('header-server-time');
    if (!timeEl) return;
    const now = new Date();
    const dateStr = now.toLocaleDateString('uz-UZ', { day: '2-digit', month: '2-digit', year: 'numeric' }).replace(/\//g, '.');
    const timeStr = now.toLocaleTimeString('uz-UZ', { hour: '2-digit', minute: '2-digit', hour12: false });
    timeEl.innerText = `${dateStr} | ${timeStr}`;
}
setInterval(updateServerTime, 10000); // 10 soniyada soat yangilanadi
updateServerTime(); // Darhol ishga tushirish


let currentLessonData = null;
let currentQuizState = {
    questions: [],
    currentIndex: 0,
    score: 0
};

// --- Global Functions (Exposed to Window) ---
window.showView = function(targetId) {
    if (!targetId) return;
    
    // [ANTI-LOOP PROTECTION]
    const currentActive = document.querySelector('.view-section.active');
    if (currentActive && currentActive.id === targetId) {
        console.log(`[Loop Protection] Already on ${targetId}, skipping navigation.`);
        return;
    }

    const navItems = document.querySelectorAll('.nav-item');
    const viewSections = document.querySelectorAll('.view-section');

    navItems.forEach(nav => {
        nav.classList.toggle('active', nav.getAttribute('data-target') === targetId);
    });

    viewSections.forEach(section => {
        if (section.id === targetId) {
            section.classList.add('active');
            if (targetId === 'topics-view') { renderTopics(); }
            if (targetId === 'certificates' && typeof renderCertificates === 'function') { renderCertificates(); }
            if (targetId === 'admin-panel') {
                if (typeof window.renderAdminVideoList === 'function') window.renderAdminVideoList();
                if (typeof window.renderUsersList === 'function') window.renderUsersList();
            }
            if (targetId === 'tasks' && typeof renderAssignments === 'function') { renderAssignments(); }
            if (targetId === 'vocabulary') {
                if (typeof window.updateVocabLessonOptions === 'function') window.updateVocabLessonOptions();
                if (typeof window.renderVocab === 'function') window.renderVocab();
                // Mark daily task done
                state.dailyTasks.vocab = true;
                localStorage.setItem('turktili-dailyTasks', JSON.stringify(state.dailyTasks));
                updateStatsUI();
            }
            if (targetId === 'library') { renderLibrary(); }
        } else {
            section.classList.remove('active');
        }
    });

    // Toggle global search bar visibility
    const globalSearch = document.querySelector('.search-bar');
    if (globalSearch) {
        if (targetId === 'dashboard' || targetId === 'courses') {
            globalSearch.style.display = 'flex';
        } else {
            globalSearch.style.display = 'none';
        }
    }

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
    // Define UI Elements
    const xpEl = document.getElementById('stat-xp');
    const lessonsEl = document.getElementById('stat-lessons');
    const streakEl = document.getElementById('stat-streak');
    const sidebarName = document.getElementById('sidebar-user-name');
    const bannerTitle = document.getElementById('user-display-name');

    const sidebarAvatar = document.getElementById('sidebar-avatar');
    
    if (xpEl) xpEl.innerText = `${state.xp} XP`;
    if (lessonsEl) lessonsEl.innerText = state.lessons;
    if (streakEl) streakEl.innerText = `${state.streak} Kun`;
    if (sidebarName) sidebarName.innerText = state.name;
    if (bannerTitle) bannerTitle.innerText = `Xush kelibsiz, ${state.name}! \uD83D\uDC4B`;

    if (sidebarAvatar && state.avatar) {
        sidebarAvatar.src = state.avatar;
    }

    // Update settings form if it exists
    const nameInput = document.getElementById('user-name');
    const emailInput = document.getElementById('user-email');
    const phoneInput = document.getElementById('user-phone');
    const settingsAvatarPreview = document.getElementById('settings-avatar-preview');

    if (nameInput) nameInput.value = state.name || '';
    if (emailInput) emailInput.value = state.email || '';
    if (phoneInput) phoneInput.value = state.phone || '';
    if (settingsAvatarPreview && state.avatar) settingsAvatarPreview.src = state.avatar;

    // --- Header Profile Sync ---
    const headerAvatar = document.getElementById('header-avatar');
    const headerName = document.getElementById('header-user-name');
    const headerRole = document.getElementById('header-user-role');
    const dropdownName = document.getElementById('dropdown-user-name');

    if (headerAvatar && state.avatar) headerAvatar.src = state.avatar;
    if (headerName) headerName.innerText = state.name;
    if (headerRole) headerRole.innerText = `${state.level} Talaba`;
    if (dropdownName) dropdownName.innerText = state.name;

    const totalLessons = 90; 
    const uniqueCompletions = Array.isArray(state.completedLessons) ? state.completedLessons.length : 0;
    const progressPct = Math.min(Math.round((uniqueCompletions / totalLessons) * 100), 100);
    
    // --- Dynamic "Joriy Kurs" Card Update ---
    const currentCourseBadge = document.getElementById('current-course-badge');
    const currentCourseName = document.getElementById('current-course-name');
    const currentCourseLesson = document.getElementById('current-course-lesson');
    const currentCourseBar = document.getElementById('current-course-bar');
    const currentCoursePct = document.getElementById('current-course-pct');

    if (currentCourseBadge) {
        const globalPctEl = document.getElementById('global-progress-pct');
        const globalBarEl = document.getElementById('global-progress-bar');
        const userLevelBadge = document.getElementById('user-level-badge');
        const bannerProgressText = document.getElementById('banner-progress-text');
        const userDisplayName = document.getElementById('user-display-name');

        if (globalPctEl) globalPctEl.innerText = `${progressPct}%`;
        if (globalBarEl) globalBarEl.style.width = `${progressPct}%`;
        if (userLevelBadge) userLevelBadge.innerText = `${state.level} Daraja`;
        if (userDisplayName) userDisplayName.innerText = state.name;

        const levelNames = {
            'A1': "Boshlang'ich", 'A2': 'Elementar', 'B1': "O'rta",
            'B2': "Yuqori o'rta", 'C1': 'Mukammal', 'C2': 'Pro'
        };
        const currentLevelCompletions = state.completedLessons.filter(id => id.startsWith(state.level + '_')).length;
        const currentLevelPct = Math.min(Math.round((currentLevelCompletions / 15) * 100), 100);

        if (bannerProgressText) {
            bannerProgressText.innerHTML = `Bugun turk tilini o'rganishni davom ettiramizmi? Siz <strong>${state.level}</strong> darajasining <strong>${currentLevelPct}%</strong> qismini yakunladingiz.`;
        }

        currentCourseBadge.innerText = state.level;
        if (currentCourseName) currentCourseName.innerText = `${levelNames[state.level]} Turk Tili (${state.level})`;
        
        // Find next lesson
        if (currentCourseLesson && window.topicsData && window.topicsData[state.level]) {
            const nextLesson = window.topicsData[state.level].find(t => !state.completedLessons.includes(`${state.level}_${t.id}`)) || window.topicsData[state.level][14];
            let cleanTitle = nextLesson.title;
            if (cleanTitle.includes('kursi - ')) {
                cleanTitle = cleanTitle.split('kursi - ')[1];
            }
            currentCourseLesson.innerText = `${nextLesson.id}-dars: ${cleanTitle}`;
        }

        if (currentCourseBar) currentCourseBar.style.width = `${currentLevelPct}%`;
        if (currentCoursePct) currentCoursePct.innerText = `${currentLevelPct}% yakunlandi`;
    }

    // --- Dynamic "Bugungi Vazifalar" Update ---
    const tasksList = document.getElementById('daily-tasks-list');
    if (tasksList) {
        const tasks = [
            { text: "Darsni yakunlash", id: 'lesson', icon: "fa-book-open" },
            { text: "Yangi so'zlarni yodlash", id: 'vocab', icon: "fa-spell-check" },
            { text: `Grammatika mashqi (${state.level})`, id: 'grammar', icon: "fa-pen-nib" },
            { text: "AI Tutor bilan muloqot", id: 'ai', icon: "fa-robot" }
        ];

        tasksList.innerHTML = tasks.map(t => {
            const done = state.dailyTasks[t.id];
            return `
                <li class="${done ? 'completed' : ''}">
                    <i class="fa-solid ${done ? 'fa-circle-check' : 'fa-circle'}"></i>
                    <span>${t.text}</span>
                </li>
            `;
        }).join('');

        // Trigger confetti if all daily tasks are done for the first time
        const allDone = tasks.every(t => state.dailyTasks[t.id]);
        if (allDone && !localStorage.getItem('turktili-daily-celebrated-' + today)) {
            if (typeof confetti === 'function') {
                confetti({
                    particleCount: 150,
                    spread: 70,
                    origin: { y: 0.6 },
                    colors: ['#E30A17', '#ff4b2b', '#ffffff']
                });
                localStorage.setItem('turktili-daily-celebrated-' + today, 'true');
            }
        }
    }

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

        // Update Certificate cards in Certificates View
        const certBar = document.getElementById(`cert-${lvl.toLowerCase()}-bar`);
        const certText = document.getElementById(`cert-${lvl.toLowerCase()}-text`);
        const certCard = certBar ? certBar.closest('.cert-card') : null;

        if (certBar) certBar.style.width = `${levelPct}%`;
        if (certText) certText.innerText = `${levelPct}% tugallandi`;
        
        if (certCard) {
            if (levelPct >= 100) {
                certCard.classList.remove('locked');
            } else {
                certCard.classList.add('locked');
            }
        }
    });
}

function renderCertificates() {
    // Basic implementation to avoid undefined errors
    console.log("Certificates rendered.");
    updateStatsUI(); // Ensure progress bars match
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
                        <i class="fa-solid ${isCompleted ? 'fa-rotate-right' : 'fa-play'}"></i> 
                        ${isCompleted ? 'Qayta ko\'rish' : 'Dars'}
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
        
        // Mark daily task done
        state.dailyTasks.lesson = true;
        localStorage.setItem('turktili-dailyTasks', JSON.stringify(state.dailyTasks));
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
    console.log("🚀 Turk Tili Platformasi yuklanmoqda...");
    
    try {
        updateStatsUI();
    } catch (e) {
        console.error("❌ Stats update failed:", e);
    }

    // Event Delegation for Navigation (Robust against SVG replacements)
    document.addEventListener('click', (e) => {
        const navItem = e.target.closest('.nav-item');
        if (navItem) {
            const target = navItem.getAttribute('data-target');
            if (target) {
                e.preventDefault();
                console.log(`🔗 Navigating to: ${target}`);
                window.showView(target);
            }
        }
    });

    // Special handler for Logout


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

    // Theme Toggle (Fixed Version)
    const themeToggle = document.getElementById('theme-toggle');
    if(themeToggle) {
        const currentTheme = state.theme || 'dark';
        themeToggle.checked = currentTheme === 'dark';
        document.documentElement.setAttribute('data-theme', currentTheme);
        
        themeToggle.onchange = (e) => {
            state.theme = e.target.checked ? 'dark' : 'light';
            localStorage.setItem('turktili-theme', state.theme);
            document.documentElement.setAttribute('data-theme', state.theme);
            console.log("Theme changed to:", state.theme);
        };
    }

    // Platform Language Toggle
    const langSelect = document.getElementById('language-select');
    if (langSelect) {
        langSelect.value = state.lang || 'uz';
        langSelect.onchange = (e) => {
            state.lang = e.target.value;
            localStorage.setItem('turktili-lang', state.lang);
            window.updateUITranslations();
            console.log("Language changed to:", state.lang);
        };
    }

    // Notification and Reminder Toggles (UI only for now)
    const notifToggle = document.getElementById('notif-toggle');
    if (notifToggle) {
        notifToggle.addEventListener('change', (e) => {
            console.log("Notifications toggled:", e.target.checked);
            // In a real app, this would register service workers/ask for permission
        });
    }

    const reminderToggle = document.getElementById('reminder-toggle');
    if (reminderToggle) {
        reminderToggle.addEventListener('change', (e) => {
            console.log("Reminder toggled:", e.target.checked);
        });
    }

    // Sidebar Toggle (Mobile)
    const sidebarToggle = document.getElementById('sidebar-toggle');
    const sidebar = document.querySelector('.sidebar');
    if (sidebarToggle && sidebar) {
        sidebarToggle.addEventListener('click', () => {
            console.log("Sidebar Toggle Clicked");
            sidebar.classList.toggle('active');
        });

        const sidebarClose = document.getElementById('sidebar-close');
        if (sidebarClose) {
            sidebarClose.addEventListener('click', () => {
                sidebar.classList.remove('active');
            });
        }
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

    // --- Personal Settings Handlers [NEW] ---
    const avatarInput = document.getElementById('avatar-input');
    const settingsAvatarPreview = document.getElementById('settings-avatar-preview');
    const personalForm = document.getElementById('personal-form');

    if (avatarInput && settingsAvatarPreview) {
        avatarInput.addEventListener('change', function(e) {
            const file = e.target.files[0];
            if (file) {
                if (file.size > 2 * 1024 * 1024) { // 2MB limit for localStorage safety
                    alert("Rasm hajmi juda katta (maksimal 2MB). Iltimos, kichikroq rasm tanlang.");
                    return;
                }
                const reader = new FileReader();
                reader.onload = function(event) {
                    settingsAvatarPreview.src = event.target.result;
                };
                reader.readAsDataURL(file);
            }
        });
    }

    if (personalForm) {
        personalForm.addEventListener('submit', function(e) {
            e.preventDefault();
            console.log("Saving Personal Settings...");
            
            const newName = document.getElementById('user-name').value;
            const newEmail = document.getElementById('user-email').value;
            const newPhone = document.getElementById('user-phone').value;
            const newAvatar = settingsAvatarPreview ? settingsAvatarPreview.src : state.avatar;

            state.name = newName;
            state.email = newEmail;
            state.phone = newPhone;
            state.avatar = newAvatar;

            localStorage.setItem('turktili-name', state.name);
            localStorage.setItem('turktili-email', state.email);
            localStorage.setItem('turktili-phone', state.phone);
            localStorage.setItem('turktili-avatar', state.avatar);

            updateStatsUI();
            
            // Visual feedback
            const submitBtn = personalForm.querySelector('button[type="submit"]');
            const originalText = submitBtn.innerText;
            submitBtn.innerText = "Saqlandi! \u2705";
            submitBtn.style.background = "#4ade80";
            
            setTimeout(() => {
                submitBtn.innerText = originalText;
                submitBtn.style.background = "";
                showView('settings-hub'); 
            }, 1000);

            if (window.syncProgress) window.syncProgress();
        });
    }

    // --- Header Profile Dropdown Toggle [NEW] ---
    const profileTrigger = document.getElementById('header-profile-trigger');
    const profileDropdown = document.getElementById('profile-dropdown');
    
    if (profileTrigger && profileDropdown) {
        profileTrigger.addEventListener('click', (e) => {
            e.stopPropagation();
            const isActive = profileDropdown.classList.contains('active');
            
            // Close other dropdowns if any (future proofing)
            document.querySelectorAll('.profile-dropdown.active').forEach(d => d.classList.remove('active'));
            
            if (!isActive) {
                profileDropdown.classList.add('active');
            }
        });
        
        // Close dropdown when clicking outside
        document.addEventListener('click', (e) => {
            if (!profileTrigger.contains(e.target)) {
                profileDropdown.classList.remove('active');
            }
        });
    }

    // Header Logout
    const headerLogoutBtn = document.getElementById('header-logout-btn');
    if (headerLogoutBtn) {
        headerLogoutBtn.onclick = () => {
            if (confirm('Tizimdan chiqishni xohlaysizmi?')) {
                localStorage.clear();
                window.location.href = 'index.html';
            }
        };
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

    // Check Server Status on Load
    checkServerStatus();
    setInterval(checkServerStatus, 30000); // Check every 30s

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
        if (typeof window.updateVocabLessonOptions === 'function') window.updateVocabLessonOptions();
        renderVocab();
        // Vocab search live filter
        const vocabSearchEl = document.getElementById('vocab-search-input');
        if (vocabSearchEl) vocabSearchEl.addEventListener('input', () => renderVocab());
    } catch(e) { console.warn('Vocab init skipped', e); }
});

// --- AI Chat Logic (Backend Integration) ---
let chatHistory = []; // Global history for this session

async function sendChatMessage() {
    const input = document.getElementById('chat-input');
    const body = document.getElementById('chat-body');
    const sendBtn = document.getElementById('send-msg');
    const text = input.value.trim();
    if (!text) return;

    // Initialize history if empty with a welcome message context if desired
    // (Optional: can add the first AI greeting to history)
    
    // Disable input while thinking
    input.disabled = true;
    sendBtn.disabled = true;

    // User Message
    renderMessage(text, 'user');
    chatHistory.push({ role: "user", content: text });
    
    // Mark daily task done
    state.dailyTasks.ai = true;
    localStorage.setItem('turktili-dailyTasks', JSON.stringify(state.dailyTasks));
    updateStatsUI();
    
    input.value = '';
    body.scrollTop = body.scrollHeight;

    // Typing Indicator
    const typing = document.createElement('div');
    typing.className = 'chat-msg msg-ai typing';
    typing.innerHTML = `
        <div class="typing-indicator">
            <div class="typing-dot"></div>
            <div class="typing-dot"></div>
            <div class="typing-dot"></div>
        </div>
    `;
    body.appendChild(typing);
    body.scrollTop = body.scrollHeight;

    try {
        const response = await fetch(`${API_BASE}/chat`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ 
                messages: chatHistory, // Send the full history
                user: state.name,
                level: state.level
            })
        });

        const data = await response.json();
        typing.remove();
        
        if (data.message) {
            renderMessage(data.message, 'ai');
            chatHistory.push({ role: "assistant", content: data.message });
        } else {
            renderMessage("Kechirasiz, hozirda javob bera olmayman. Iltimos, keyinroq urinib ko'ring.", 'ai');
        }
    } catch (err) {
        typing.remove();
        console.error("AI Error:", err);
        renderMessage("Server bilan aloqa uzildi. Iltimos, server ishlayotganini tekshiring.", 'ai');
    } finally {
        input.disabled = false;
        sendBtn.disabled = false;
        input.focus();
        body.scrollTop = body.scrollHeight;
    }
}

function renderMessage(text, role) {
    const body = document.getElementById('chat-body');
    const msgDiv = document.createElement('div');
    msgDiv.className = `chat-msg msg-${role} animate-fade-in`;
    
    const now = new Date();
    const timeStr = now.getHours().toString().padStart(2, '0') + ':' + now.getMinutes().toString().padStart(2, '0');
    
    msgDiv.innerHTML = `
        <div class="msg-content">${text.replace(/\n/g, '<br>')}</div>
        <span class="msg-time">${timeStr}</span>
    `;
    
    body.appendChild(msgDiv);
}

async function checkServerStatus() {
    const syncIndicator = document.getElementById('sync-status');
    if (!syncIndicator) return;

    try {
        const res = await fetch(`${API_BASE.replace('/api', '')}/status`);
        if (res.ok) {
            syncIndicator.classList.remove('offline');
            syncIndicator.classList.add('online');
            syncIndicator.querySelector('span').innerText = 'Online';
        } else {
            throw new Error();
        }
    } catch (e) {
        syncIndicator.classList.add('offline');
        syncIndicator.classList.remove('online');
        syncIndicator.querySelector('span').innerText = 'Offline';
    }
}

// --- Vocabulary & Flashcards ---
let currentFlashIndex = 0;
let currentVocabWords = [];

function renderVocab() {
    const levelSel = document.getElementById('vocab-level-select');
    const lessonSel = document.getElementById('vocab-lesson-select');
    const listContainer = document.getElementById('vocab-list-container');
    if (!listContainer) return;

    const selectedLevel = levelSel ? levelSel.value : 'A1';
    const selectedLesson = lessonSel ? parseInt(lessonSel.value) : 0;

    let words = [];

    // Use new lesson-based vocabulary if available
    if (window.vocabularyByLesson && window.vocabularyByLesson[selectedLevel]) {
        if (selectedLesson === 0) {
            Object.values(window.vocabularyByLesson[selectedLevel]).forEach(lw => {
                words = words.concat(lw);
            });
        } else {
            words = window.vocabularyByLesson[selectedLevel][selectedLesson] || [];
        }
    } else if (window.vocabulary) {
        // Fallback to old flat vocabulary
        words = window.vocabulary.filter(w => (w.lvl || 'A1') === selectedLevel);
    }

    // Apply search filter
    const searchInput = document.getElementById('vocab-search-input');
    const q = searchInput ? searchInput.value.toLowerCase().trim() : '';
    if (q.length > 0) {
        words = words.filter(w =>
            w.tr.toLowerCase().includes(q) || w.uz.toLowerCase().includes(q)
        );
    }

    currentVocabWords = words;

    // Update word count
    const countEl = document.getElementById('vocab-word-count');
    if (countEl) countEl.innerText = words.length > 0 ? `📚 ${words.length} ta so'z` : '';

    if (words.length === 0) {
        listContainer.innerHTML = `<div class="glass-card" style="padding:30px;text-align:center;color:var(--text-secondary);grid-column:1/-1;">So'z topilmadi.</div>`;
    } else {
        listContainer.innerHTML = words.map((v, idx) => `
            <div class="glass-card vocab-item" style="padding:14px 18px;display:flex;justify-content:space-between;align-items:center;gap:12px;transition:transform 0.18s;cursor:default;"
                onmouseover="this.style.transform='translateY(-2px)'" onmouseout="this.style.transform='none'">
                <div style="flex:1;min-width:0;">
                    <strong style="color:var(--accent-red);font-size:1.05rem;display:block;margin-bottom:3px;">${v.tr}</strong>
                    <span style="color:var(--text-secondary);font-size:0.88rem;">${v.uz}</span>
                </div>
                <button class="vocab-speak-btn" data-word="${idx}"
                    onclick="window.speakWord('${v.tr.replace(/'/g, "\\'")}')"
                    style="background:rgba(255,45,46,0.1);border:1px solid rgba(255,45,46,0.25);color:var(--accent-red);width:40px;height:40px;border-radius:50%;cursor:pointer;flex-shrink:0;transition:all 0.2s;display:flex;align-items:center;justify-content:center;font-size:15px;"
                    onmouseover="this.style.background='rgba(255,45,46,0.28)';this.style.transform='scale(1.12)'"
                    onmouseout="this.style.background='rgba(255,45,46,0.1)';this.style.transform='scale(1)'"
                    title="Tingla (tr-TR)">
                    <i class="fa-solid fa-volume-high"></i>
                </button>
            </div>
        `).join('');
    }

    currentFlashIndex = 0;
    updateFlashcard();
}

function updateFlashcard() {
    const term = document.getElementById('card-term');
    const meaning = document.getElementById('card-meaning');
    if (!term || !meaning) return;

    const words = currentVocabWords.length > 0 ? currentVocabWords : (window.vocabulary || []);
    if (words.length === 0) return;

    const v = words[currentFlashIndex % words.length];
    term.innerText = v.tr;
    meaning.innerText = v.uz;

    const card = document.getElementById('current-flashcard');
    if (card) card.classList.remove('flipped');
}

// Flashcard controls & Vocab Mode Toggle
document.addEventListener('click', (e) => {
    // Flashcard flip
    const flashcard = e.target.closest('#current-flashcard');
    if (flashcard) {
        flashcard.classList.toggle('flipped');
        return;
    }
    // Next card
    if (e.target.closest('#next-card')) {
        const words = currentVocabWords.length > 0 ? currentVocabWords : (window.vocabulary || []);
        if (words.length > 0) { currentFlashIndex = (currentFlashIndex + 1) % words.length; updateFlashcard(); }
        return;
    }
    // Prev card
    if (e.target.closest('#prev-card')) {
        const words = currentVocabWords.length > 0 ? currentVocabWords : (window.vocabulary || []);
        if (words.length > 0) { currentFlashIndex = (currentFlashIndex - 1 + words.length) % words.length; updateFlashcard(); }
        return;
    }
    // Vocab mode buttons (list / flashcards)
    const modeBtn = e.target.closest('.mode-btn');
    if (modeBtn) {
        const mode = modeBtn.getAttribute('data-mode');
        document.querySelectorAll('.mode-btn').forEach(b => b.classList.remove('active'));
        modeBtn.classList.add('active');
        const listContainer = document.getElementById('vocab-list-container');
        const flashContainer = document.getElementById('flashcard-container');
        if (mode === 'list') {
            if (listContainer) listContainer.style.display = '';
            if (flashContainer) flashContainer.style.display = 'none';
        } else {
            if (listContainer) listContainer.style.display = 'none';
            if (flashContainer) { flashContainer.style.display = 'block'; updateFlashcard(); }
        }
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
                results.push({ name: topic.title, level: lvl, id: topic.id });
            }
        });
    });

    if (results.length > 0) {
        dropdown.style.display = 'block';
        dropdown.innerHTML = results.slice(0, 8).map(r => `
            <div class="search-result-item" style="padding: 12px 15px; cursor: pointer; border-bottom: 1px solid var(--border-color);" 
                 onclick="window.goToLesson('${r.level}', ${r.id})">
                <i class="fa-solid fa-play-circle" style="color:var(--accent-red); margin-right: 8px;"></i>
                <span style="color: var(--text-secondary); font-size: 0.75rem; margin-right: 5px;">${r.level}:</span> ${r.name}
            </div>
        `).join('');
    } else {
        dropdown.innerHTML = '<div style="padding: 15px; text-align: center; color: var(--text-secondary);">Natija topilmadi</div>';
        dropdown.style.display = 'block';
    }
}

window.goToLesson = function(lvl, lessonId) {
    window.setLevel(lvl);
    window.showView('topics-view');
    // Important: Wait a bit for level to switch and topics to render
    setTimeout(() => {
        window.openLesson(lessonId);
        document.getElementById('search-results-dropdown').style.display = 'none';
        document.getElementById('global-search-input').value = '';
    }, 100);
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
    if (!('speechSynthesis' in window)) return;
    window.speechSynthesis.cancel();
    const ut = new SpeechSynthesisUtterance(text);
    ut.lang = 'tr-TR';
    ut.rate = 0.85;
    window.speechSynthesis.speak(ut);
};

// Alias speakWord = speak (both work)
window.speakWord = window.speak;

// Populate lesson dropdown based on selected level
window.updateVocabLessonOptions = function() {
    const levelSel = document.getElementById('vocab-level-select');
    const lessonSel = document.getElementById('vocab-lesson-select');
    if (!levelSel || !lessonSel) return;

    const lv = levelSel.value;
    const names = (window.vocabLessonNames || {})[lv] || {};
    const dataSource = (window.vocabularyByLesson || {})[lv] || null;

    lessonSel.innerHTML = '<option value="0">— Barchasi —</option>';
    if (dataSource) {
        Object.keys(dataSource).forEach(num => {
            const opt = document.createElement('option');
            opt.value = num;
            opt.textContent = `${num}-dars${names[num] ? ': ' + names[num] : ''}`;
            lessonSel.appendChild(opt);
        });
    }
};

window.playVideo = function(id) {
    const url = `https://www.youtube-nocookie.com/embed/${id}?autoplay=1`;
    const iframe = document.getElementById('inline-video-iframe');
    if (iframe) iframe.src = url;
};

// --- Vocabulary Logic [RESTORED] ---
window.renderVocab = function() {
    console.log("Rendering vocabulary...");
    const container = document.getElementById('vocab-list-container');
    const flashcardWrap = document.getElementById('flashcard-container');
    const level = document.getElementById('vocab-level-select')?.value || 'A1';
    const lesson = document.getElementById('vocab-lesson-select')?.value || '0';
    const query = document.getElementById('vocab-search-input')?.value.toLowerCase() || '';
    
    if (!container) return;

    // Show/Hide based on mode
    const mode = document.querySelector('.mode-btn.active')?.dataset.mode || 'list';
    if (mode === 'list') {
        container.style.display = 'grid';
        if (flashcardWrap) flashcardWrap.style.display = 'none';
    } else {
        container.style.display = 'none';
        if (flashcardWrap) flashcardWrap.style.display = 'block';
        window.renderFlashcards();
        return;
    }

    const dataSource = (window.vocabularyByLesson || {})[level] || {};
    let allWords = [];
    
    if (lesson === '0') {
        Object.values(dataSource).forEach(words => allWords = allWords.concat(words));
    } else {
        allWords = dataSource[lesson] || [];
    }

    const filtered = allWords.filter(w => 
        w.tr.toLowerCase().includes(query) || 
        w.uz.toLowerCase().includes(query)
    );

    document.getElementById('vocab-word-count').innerText = `${filtered.length} ta so'z`;

    if (filtered.length === 0) {
        container.innerHTML = `<div class="glass-card" style="grid-column:1/-1;padding:40px;text-align:center;color:var(--text-secondary);">Natija topilmadi</div>`;
        return;
    }

    container.innerHTML = filtered.map(w => `
        <div class="vocab-card glass-card animate-fade-in">
            <div class="vocab-top">
                <h3 class="term-tr">${w.tr}</h3>
                <button class="btn-audio-sm" onclick="window.speak('${w.tr}')"><i class="fa-solid fa-volume-high"></i></button>
            </div>
            <p class="term-uz">${w.uz}</p>
        </div>
    `).join('');
};

window.currentFlashIndex = 0;
window.renderFlashcards = function() {
    const termEl = document.getElementById('card-term');
    const meaningEl = document.getElementById('card-meaning');
    if (!termEl || !meaningEl) return;

    const level = document.getElementById('vocab-level-select')?.value || 'A1';
    const lesson = document.getElementById('vocab-lesson-select')?.value || '0';
    const dataSource = (window.vocabularyByLesson || {})[level] || {};
    let allWords = [];
    if (lesson === '0') {
        Object.values(dataSource).forEach(words => allWords = allWords.concat(words));
    } else {
        allWords = dataSource[lesson] || [];
    }

    if (allWords.length === 0) {
        termEl.innerText = "So'zlar yo'q";
        meaningEl.innerText = "-";
        return;
    }

    if (window.currentFlashIndex >= allWords.length) window.currentFlashIndex = 0;
    if (window.currentFlashIndex < 0) window.currentFlashIndex = allWords.length - 1;

    const word = allWords[window.currentFlashIndex];
    termEl.innerText = word.tr;
    meaningEl.innerText = word.uz;
    document.getElementById('current-flashcard')?.classList.remove('flipped');
};

// Listeners for Mode switching
document.addEventListener('click', (e) => {
    if (e.target.classList.contains('mode-btn')) {
        document.querySelectorAll('.mode-btn').forEach(b => b.classList.remove('active'));
        e.target.classList.add('active');
        window.renderVocab();
    }
    
    if (e.target.id === 'current-flashcard' || e.target.closest('#current-flashcard')) {
        document.getElementById('current-flashcard').classList.toggle('flipped');
    }
    
    if (e.target.id === 'next-card') {
        window.currentFlashIndex++;
        window.renderFlashcards();
    }
    if (e.target.id === 'prev-card') {
        window.currentFlashIndex--;
        window.renderFlashcards();
    }
});

// Search input listener
document.addEventListener('input', (e) => {
    if (e.target.id === 'vocab-search-input') {
        window.renderVocab();
    }
});

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

// 
// --- Assignments (Tasks) Logic ---

window.setTaskFilter = function(filter) {
    currentTaskFilter = filter;
    document.querySelectorAll('.filter-btn').forEach(btn => {
        const onclick = btn.getAttribute('onclick') || '';
        btn.classList.toggle('active', onclick.includes(`'${filter}'`));
    });
    renderAssignments();
};

window.setTaskLevelFilter = function(lvl) {
    state.level = lvl;
    renderAssignments();
};

window.renderAssignments = function() {
    console.log("Rendering assignments with structured data...", window.assignmentsData);
    const container = document.getElementById('task-items-list');
    if (!container) return;
    if (!window.assignmentsData) return;
    
    const levelSelect = document.getElementById('tasks-level-select');
    if (levelSelect) levelSelect.value = state.level || 'A1';
    
    container.innerHTML = '';
    
    // Get all assignments for current level
    const levelAssignments = window.assignmentsData[state.level] || {};
    let allTasksAtLevel = [];
    
    // Flatten assignments with lesson ID for rendering
    for (const lessonId in levelAssignments) {
        levelAssignments[lessonId].forEach(task => {
            allTasksAtLevel.push({ ...task, lessonId: lessonId });
        });
    }

    const filtered = allTasksAtLevel.filter(task => {
        if (task.category === 'vocab') return false;
        if (currentTaskFilter === 'barchasi') return true;
        return task.category === currentTaskFilter;
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
        card.className = `task-item glass-card ${task.category === 'tinglash' ? 'listen' : task.type} ${isFinished ? 'completed-task' : ''}`;
        
        card.innerHTML = `
            <div class="task-icon ${task.category === 'tinglash' ? 'listen' : task.type}">
                <i class="fas ${task.icon || 'fa-tasks'}"></i>
            </div>
            <div class="task-details">
                <span class="lesson-badge">${task.lessonId}-dars</span>
                <h4>${task.title} ${isFinished ? '<i class="fa-solid fa-circle-check" style="color: #4ade80; margin-left: 8px;"></i>' : ''}</h4>
                <p>${task.desc}</p>
                <div class="task-meta">
                    <span class="points">+${task.xp} XP</span>
                    <span class="time"><i class="far fa-clock"></i> ${task.time}</span>
                </div>
            </div>
            ${isFinished ? 
                `<div style="display:flex; flex-direction:column; gap:8px; align-items:center;">
                    <span class="status-badge green">Bajarildi <i class="fa-solid fa-check"></i></span>
                    <button class="btn-outline" style="padding: 6px 12px; font-size: 0.8rem; height: auto;" onclick="startAssignment('${task.id}')">Qayta bajarish</button>
                 </div>` : 
                `<button class="btn-outline" onclick="startAssignment('${task.id}')">Boshlash</button>`
            }
        `;
        container.appendChild(card);
    });
}

window.startAssignment = function(taskId) {
    // Find task in structured data
    let task = null;
    const levelAssignments = window.assignmentsData[state.level] || {};
    for (const lessonId in levelAssignments) {
        const found = levelAssignments[lessonId].find(t => t.id === taskId);
        if (found) {
            task = found;
            break;
        }
    }
    
    if (!task) return;
    
    activeTask = task;
    activeQuestionIndex = 0;
    window.activeTaskCorrectCount = 0;
    
    const area = document.getElementById('assignment-active-area');
    document.getElementById('active-task-title').innerText = task.title;
    area.style.display = 'block';
    
    // Scroll to interaction area
    area.scrollIntoView({ behavior: 'smooth', block: 'center' });
    
    renderTaskQuestion();
};

function renderTaskQuestion() {
    const container = document.getElementById('active-task-content');
    const question = activeTask.questions[activeQuestionIndex];
    const total = activeTask.questions.length;
    
    let content = `
        <div class="task-progress-mini" style="margin-bottom: 15px; font-size: 14px; color: var(--text-secondary);">
            Savol ${activeQuestionIndex + 1} / ${total}
        </div>
        <p style="font-size: 18px; font-weight: 600; margin-bottom: 20px;">${question.q}</p>
    `;
    
    if (activeTask.type === 'listening' && question.audio) {
        content += `
            <div class="listening-area" style="text-align: center; margin-bottom: 25px;">
                <button class="listening-task-play" onclick="speakTask('${question.audio}')" title="Qayta eshitish">
                    <i class="fa-solid fa-play"></i>
                </button>
                <p style="font-size: 14px; color: var(--accent-red); margin-top: -30px;">Qayta eshitish uchun bosing</p>
            </div>
        `;
        // Auto-speak first time
        setTimeout(() => speakTask(question.audio), 500);
    }
    
    content += `<div class="task-options-grid">`;
    question.a.forEach((opt, idx) => {
        content += `<button class="option-btn" onclick="checkTaskAnswer(${idx})">${opt}</button>`;
    });
    content += `</div>`;
    
    container.innerHTML = content;
}

window.speakTask = function(text) {
    if (typeof speak === 'function') {
        speak(text);
    } else {
        const msg = new SpeechSynthesisUtterance(text);
        msg.lang = 'tr-TR';
        window.speechSynthesis.speak(msg);
    }
};

window.checkTaskAnswer = function(choiceIdx) {
    const question = activeTask.questions[activeQuestionIndex];
    const buttons = document.querySelectorAll('.option-btn');
    
    // Disable all buttons to prevent double click
    buttons.forEach(b => b.disabled = true);
    
    if (choiceIdx === question.correct) {
        buttons[choiceIdx].classList.add('correct');
        window.activeTaskCorrectCount++;
        setTimeout(() => {
            activeQuestionIndex++;
            if (activeQuestionIndex < activeTask.questions.length) {
                renderTaskQuestion();
            } else {
                finishAssignment();
            }
        }, 1200);
    } else {
        buttons[choiceIdx].classList.add('wrong');
        // Show correct answer immediately
        if (buttons[question.correct]) {
            buttons[question.correct].classList.add('correct');
        }
        
        setTimeout(() => {
            activeQuestionIndex++;
            if (activeQuestionIndex < activeTask.questions.length) {
                renderTaskQuestion();
            } else {
                finishAssignment();
            }
        }, 2000);
    }
};

function finishAssignment() {
    const area = document.getElementById('assignment-active-area');
    const container = document.getElementById('active-task-content');
    const total = activeTask.questions.length;
    let earnedXP = activeTask.xp;
    
    // Reduce XP if retrying or didn't get all correct
    if (state.completedAssignments.includes(activeTask.id)) {
        earnedXP = 0; // Already completed, no extra XP
    } else if (window.activeTaskCorrectCount < total) {
        earnedXP = Math.floor(activeTask.xp * (window.activeTaskCorrectCount / total));
    }
    
    if (!state.completedAssignments.includes(activeTask.id) && window.activeTaskCorrectCount > 0) {
        state.completedAssignments.push(activeTask.id);
        state.xp += earnedXP;
        
        localStorage.setItem('turktili-completedAssignments', JSON.stringify(state.completedAssignments));
        localStorage.setItem('turktili-xp', state.xp);
        
        updateStatsUI();
        syncProgress();
    }
    
    container.innerHTML = `
        <div style="text-align: center; padding: 20px;">
            <i class="fa-solid fa-${window.activeTaskCorrectCount === total ? 'circle-check' : 'star-half-stroke'}" style="font-size: 60px; color: ${window.activeTaskCorrectCount === total ? '#4ade80' : '#facc15'}; margin-bottom: 20px;"></i>
            <h3>Yakunlandi!</h3>
            <p style="font-size: 1.1rem; margin: 15px 0;">Siz <strong>${total}</strong> ta savoldan <strong>${window.activeTaskCorrectCount}</strong> tasiga to'g'ri javob berdingiz.</p>
            ${earnedXP > 0 ? `<p style="color: var(--accent-green); font-weight:bold;">+${earnedXP} XP qo'lga kiritdingiz!</p>` : `<p style="color: var(--text-secondary);">(Bajarilgan yoki 0 olingan)</p>`}
            <button class="btn-primary" style="margin-top: 25px;" onclick="document.getElementById('assignment-active-area').style.display='none'; renderAssignments();">Yopish</button>
        </div>
    `;
    
    renderAssignments();
}

function showNotification(msg, type = 'info') {
    console.log(`[${type}] ${msg}`);
}


window.renderLibrary = function() {
    const container = document.getElementById('library-books-grid');
    if (!container) return;
    
    if (!window.libraryData || !window.libraryData.books || window.libraryData.books.length === 0) {
        container.innerHTML = `
            <div class="glass-card" style="grid-column: 1/-1; padding: 40px; text-align: center; color: var(--text-secondary);">
                <i class="fa-solid fa-book-open" style="font-size: 40px; margin-bottom: 15px; opacity: 0.5;"></i>
                <p>Hozircha kitoblar mavjud emas.</p>
            </div>
        `;
        return;
    }
    
    container.innerHTML = window.libraryData.books.map(book => `
        <div class="book-card glass-card animate-fade-in">
            <div class="book-cover">
                <img src="${book.cover}" alt="${book.title}" loading="lazy" onerror="this.src='https://placehold.co/400x600?text=Kitob+Muqovasi'">
                <div class="book-badge">${book.level}</div>
            </div>
            <div class="book-body">
                <h3>${book.title}</h3>
                <p>${book.author}</p>
                <div class="book-actions">
                    <a href="${book.link}" target="_blank" class="btn-primary-sm">
                        <i class="fa-solid fa-book-open"></i> O'qish
                    </a>
                </div>
            </div>
        </div>
    `).join('');
};

// Initial Sync & Load (Keep existing logic)
window.addEventListener('load', () => {
    // Apply theme and language on start
    document.documentElement.setAttribute('data-theme', state.theme || 'dark');
    window.updateUITranslations();
    
    // Remote progress check
    if (typeof loadRemoteProgress === 'function') loadRemoteProgress();
    setInterval(syncProgress, 60000); 
    
    if (document.getElementById('tasks') && document.getElementById('tasks').classList.contains('active')) {
        if (typeof window.renderAssignments === 'function') window.renderAssignments();
    }
});

