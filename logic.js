document.addEventListener('DOMContentLoaded', () => {
    // --- Data Storage & Initialization ---
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

    const today = new Date().toDateString();
    if (state.lastLogin !== today) {
        const lastDate = new Date(state.lastLogin);
        const diff = Math.floor((new Date(today) - lastDate) / (1000 * 60 * 60 * 24));
        state.streak = (diff === 1) ? state.streak + 1 : 1;
        state.lastLogin = today;
        localStorage.setItem('turktili-streak', state.streak);
        localStorage.setItem('turktili-lastLogin', today);
    }

    // --- DOM Elements ---
    const navItems = document.querySelectorAll('.nav-item');
    const viewSections = document.querySelectorAll('.view-section');
    const themeToggle = document.getElementById('theme-toggle');
    const languageSelect = document.getElementById('language-select');

    // --- UI Update Helpers ---
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

    // --- Navigation ---
    function showView(targetId) {
        if (!targetId) return;
        navItems.forEach(nav => {
            nav.classList.toggle('active', nav.getAttribute('data-target') === targetId);
        });

        viewSections.forEach(section => {
            if (section.id === targetId) {
                section.classList.add('active');
                if (targetId === 'topics-view') renderTopics();
                if (targetId === 'courses') renderVideoLessons();
                if (targetId === 'admin-panel') {
                    if (typeof renderAdminVideoList === 'function') renderAdminVideoList();
                    if (typeof renderUsersList === 'function') renderUsersList();
                }
            } else {
                section.classList.remove('active');
            }
        });
    }
    window.showView = showView;

    function setLevel(lvl) {
        state.level = lvl;
        localStorage.setItem('turktili-level', lvl);
        updateStatsUI();
        
        const topicsTitle = document.querySelector('#topics-view h2');
        if (topicsTitle) topicsTitle.innerText = `${lvl} Mavzulari`;

        document.querySelectorAll('.level-card').forEach(card => {
            const badge = card.querySelector('.level-badge');
            card.classList.toggle('active', badge && badge.innerText === lvl);
        });

        showView('courses');
        renderVideoLessons(); 
    }
    window.setLevel = setLevel;

    navItems.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            showView(item.getAttribute('data-target'));
        });
    });

    // --- Rendering Logic (Uses window.topicsData from data.js) ---
    function renderTopics() {
        const container = document.querySelector('.topics-grid');
        if (!container || !window.topicsData) return;
        container.innerHTML = '';

        const levelTopics = window.topicsData[state.level] || window.topicsData['A1'];
        levelTopics.forEach(topic => {
            const item = document.createElement('div');
            item.className = `topic-item glass-card ${topic.status}`;
            let actionButtons = '';
            if (topic.type === 'video') {
                actionButtons = `
                    <div class="topic-actions">
                        <button class="btn-primary-sm" onclick="playVideo('${topic.videoId}')"><i class="fa-solid fa-play"></i> Dars</button>
                    </div>
                `;
            } else {
                actionButtons = topic.status === 'active' ? `<button class="btn-primary-sm" onclick="startLesson('${state.level}', ${topic.id})">O'rganish</button>` : `<button class="btn-outline-sm" disabled>Qulflangan</button>`;
            }
            item.innerHTML = `<div class="topic-number">${topic.id}</div><div class="topic-info"><h4>${topic.title}</h4><p>${topic.desc}</p></div>${actionButtons}`;
            container.appendChild(item);
        });
    }

    function renderVideoLessons() {
        const container = document.getElementById('video-grid-container');
        if (!container || !window.topicsData) return;
        container.innerHTML = '';
        
        const videoLessons = JSON.parse(localStorage.getItem('turktili-videos') || '[]');
        let levelVideos = videoLessons.filter(v => v.level === state.level);
        
        if (window.topicsData[state.level]) {
            window.topicsData[state.level].forEach(t => {
                if (t.type === 'video' && t.videoId) {
                    levelVideos.push({ title: t.title, videoId: t.videoId, level: state.level });
                }
            });
        }
        
        levelVideos.forEach(v => {
            const card = document.createElement('div');
            card.className = 'video-card glass-card';
            card.innerHTML = `
                <div class="video-thumb" onclick="playVideo('${v.videoId}')">
                    <img src="https://img.youtube.com/vi/${v.videoId}/mqdefault.jpg">
                    <div class="play-overlay"><i class="fa-solid fa-play"></i></div>
                </div>
                <div class="video-content"><h4>${v.title}</h4></div>
            `;
            container.appendChild(card);
        });
    }

    window.playVideo = (id) => {
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

    // --- Startup ---
    updateStatsUI();
    if (state.level) setLevel(state.level);

    // AI Assistant Basic Toggle
    const chatToggle = document.getElementById('chat-toggle');
    const chatWindow = document.getElementById('chat-window');
    const chatClose = document.getElementById('chat-close');
    if (chatToggle && chatWindow) {
        chatToggle.onclick = () => chatWindow.classList.toggle('active');
        chatClose.onclick = () => chatWindow.classList.remove('active');
    }
});
