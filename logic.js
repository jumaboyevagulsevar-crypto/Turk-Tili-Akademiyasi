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
                if (targetId === 'topics-view') { renderTopics(); }
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

        showView('topics-view');
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
                        <button class="btn-primary-sm" onclick="openLesson('${state.level}', ${topic.id}, '${topic.videoId}', '${topic.title}')"><i class="fa-solid fa-play"></i> Dars</button>
                    </div>
                `;
            } else {
                actionButtons = topic.status === 'active' ? `<button class="btn-primary-sm" onclick="startLesson('${state.level}', ${topic.id})">O'rganish</button>` : `<button class="btn-outline-sm" disabled>Qulflangan</button>`;
            }
            item.innerHTML = `<div class="topic-number">${topic.id}</div><div class="topic-info"><h4>${topic.title}</h4><p>${topic.desc}</p></div>${actionButtons}`;
            container.appendChild(item);
        });
    }

    let currentLessonData = null;

    window.openLesson = (lvl, id, videoId, title) => {
        currentLessonData = { lvl, id, title };
        
        const area = document.getElementById('lesson-player-area');
        const iframe = document.getElementById('inline-video-iframe');
        const titleEl = document.getElementById('current-lesson-title');
        const quizContainer = document.getElementById('lesson-quiz-container');
        const exercisePrompt = document.getElementById('exercise-prompt');

        if (!area || !iframe) return;

        titleEl.innerText = title;
        iframe.src = `https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1`;
        
        area.style.display = 'block';
        quizContainer.style.display = 'none';
        exercisePrompt.style.display = 'block';

        area.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    window.renderLessonQuiz = () => {
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

        // Simple Single Question Implementation for now
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

    window.checkLessonAnswer = (selected, correct) => {
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
    const chatWindow = document.getElementById('ai-chat-window');
    const chatClose = document.getElementById('close-chat');
    if (chatToggle && chatWindow) {
        chatToggle.onclick = () => chatWindow.classList.toggle('active');
        if (chatClose) chatClose.onclick = () => chatWindow.classList.remove('active');
    }

    // --- Global Click Handlers & Helpers ---
    window.startLesson = function(level, lessonId) {
        showView('test-view'); 
    };

    window.verifyAdmin = function() {
        const pass = document.getElementById('admin-pass-input').value;
        if(pass === '1234') showView('admin-panel');
        else alert("Parol noto'g'ri!");
    };

    window.addVideoLesson = function() {
        const title = document.getElementById('v-title').value;
        const url = document.getElementById('v-url').value;
        const level = document.getElementById('v-level').value;
        if(!title || !url) return alert('Barcha maydonlarni to\'ldiring!');
        
        let videoId = url;
        if(url.includes('v=')) videoId = url.split('v=')[1].split('&')[0];
        else if(url.includes('youtu.be/')) videoId = url.split('youtu.be/')[1].split('?')[0];

        const videos = JSON.parse(localStorage.getItem('turktili-videos') || '[]');
        videos.push({ title, videoId, level });
        localStorage.setItem('turktili-videos', JSON.stringify(videos));
        alert("Dars qo'shildi!");
        renderAdminVideoList();
    };

    window.renderAdminVideoList = function() {
        const container = document.getElementById('admin-video-list');
        if(!container) return;
        const videos = JSON.parse(localStorage.getItem('turktili-videos') || '[]');
        container.innerHTML = videos.map((v, i) => `
            <div style="display:flex; justify-content:space-between; padding:10px; border-bottom:1px solid #333;">
                <span>[${v.level}] ${v.title}</span>
                <i class="fa-solid fa-trash" style="color:#ff2e2e; cursor:pointer;" onclick="deleteVideo(${i})"></i>
            </div>
        `).join('') || '<p>Videolar yo\'q</p>';
    };

    window.deleteVideo = function(i) {
        const videos = JSON.parse(localStorage.getItem('turktili-videos') || '[]');
        videos.splice(i, 1);
        localStorage.setItem('turktili-videos', JSON.stringify(videos));
        renderAdminVideoList();
    };

    window.renderUsersList = function() {
        const container = document.getElementById('users-list-body');
        if(!container) return;
        const users = JSON.parse(localStorage.getItem('turktili-users') || '[]');
        container.innerHTML = users.map((u, i) => `
            <tr>
                <td>${u.name}</td><td>${u.email}</td><td>${u.date || '-'}</td>
                <td><button class="btn-outline-sm" onclick="deleteUser(${i})">O'chirish</button></td>
            </tr>
        `).join('') || '<tr><td colspan="4">Foydalanuvchilar mavjud emas</td></tr>';
    };

    window.deleteUser = function(i) {
        const users = JSON.parse(localStorage.getItem('turktili-users') || '[]');
        users.splice(i, 1);
        localStorage.setItem('turktili-users', JSON.stringify(users));
        renderUsersList();
    };

    document.querySelectorAll('.admin-tab-btn').forEach(btn => {
        btn.onclick = () => {
            document.querySelectorAll('.admin-tab-btn').forEach(b => b.classList.remove('active'));
            document.querySelectorAll('.admin-tab-content').forEach(c => c.classList.remove('active'));
            btn.classList.add('active');
            const tgt = document.getElementById(btn.getAttribute('data-tab'));
            if(tgt) tgt.classList.add('active');
        };
    });

    window.setTaskFilter = function(filter) {
        document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        if(event && event.target) event.target.classList.add('active');
    };

    window.speak = function(word) {
        const u = new SpeechSynthesisUtterance(word);
        u.lang = 'tr-TR';
        window.speechSynthesis.speak(u);
    };

    function renderVocab() {
        const list = document.getElementById('vocab-list-container');
        if(!list || !window.vocabulary) return;
        list.innerHTML = window.vocabulary.map(v => `
            <div class="vocab-item glass-card">
                <div class="vocab-words">
                    <h4>${v.tr} <span class="lvl-tag">${v.lvl}</span></h4>
                    <p>${v.uz}</p>
                </div>
                <button class="btn-audio" onclick="speak('${v.tr}')"><i class="fa-solid fa-volume-high"></i></button>
            </div>
        `).join('');
    }
    
    document.querySelectorAll('.mode-btn').forEach(btn => {
        btn.onclick = () => {
            document.querySelectorAll('.mode-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            const mode = btn.getAttribute('data-mode');
            const list = document.getElementById('vocab-list-container');
            const flash = document.getElementById('flashcard-container');
            if(list && flash) {
                list.style.display = mode === 'list' ? 'grid' : 'none';
                flash.style.display = mode === 'flashcards' ? 'flex' : 'none';
            }
        };
    });

    renderVocab();

    let currentFlashIdx = 0;
    const flashTerm = document.getElementById('card-term');
    const flashMeaning = document.getElementById('card-meaning');
    function updateFlashcard() {
        if(!window.vocabulary || !window.vocabulary.length) return;
        const v = window.vocabulary[currentFlashIdx];
        if(flashTerm) flashTerm.innerText = v.tr;
        if(flashMeaning) flashMeaning.innerText = v.uz;
    }
    document.getElementById('next-card')?.addEventListener('click', () => {
        if(window.vocabulary && currentFlashIdx < window.vocabulary.length - 1) {
            currentFlashIdx++; updateFlashcard();
        }
    });
    document.getElementById('prev-card')?.addEventListener('click', () => {
        if(currentFlashIdx > 0) { currentFlashIdx--; updateFlashcard(); }
    });
    updateFlashcard();

    if(themeToggle) {
        themeToggle.checked = state.theme === 'dark';
        document.body.classList.toggle('light-mode', !themeToggle.checked);
        themeToggle.onchange = (e) => {
            state.theme = e.target.checked ? 'dark' : 'light';
            localStorage.setItem('turktili-theme', state.theme);
            document.body.classList.toggle('light-mode', !e.target.checked);
        };
    }

    const sbToggle = document.getElementById('sidebar-toggle');
    const sb = document.querySelector('.sidebar');
    if (sbToggle && sb) sbToggle.onclick = () => sb.classList.toggle('active');

    const sInput = document.getElementById('global-search-input');
    const sRes = document.getElementById('search-results-dropdown');
    if(sInput && sRes) {
        sInput.oninput = (e) => {
            const q = e.target.value.toLowerCase();
            if(!q) { sRes.style.display = 'none'; return; }
            let res = [];
            if(window.vocabulary) {
                window.vocabulary.filter(v => v.tr.toLowerCase().includes(q) || v.uz.toLowerCase().includes(q))
                    .forEach(v => res.push(`<div style="padding:10px; border-bottom:1px solid #444; cursor:pointer" onclick="showView('vocabulary')"><b>${v.tr}</b> - ${v.uz}</div>`));
            }
            if(window.topicsData) {
                Object.values(window.topicsData).flat().forEach(t => {
                    if(t.title.toLowerCase().includes(q)) {
                        res.push(`<div style="padding:10px; border-bottom:1px solid #444; cursor:pointer" onclick="showView('courses')"><b>${t.title}</b> (Video)</div>`);
                    }
                });
            }
            sRes.innerHTML = res.length ? res.join('') : '<div style="padding:10px">Natija topilmadi</div>';
            sRes.style.display = 'block';
        };
        document.addEventListener('click', (e) => {
            if(!e.target.closest('.search-bar')) sRes.style.display = 'none';
        });
    }

    const logoutBtn = document.getElementById('logout-btn');
    if (logoutBtn) {
        logoutBtn.onclick = (e) => {
            e.preventDefault();
            localStorage.removeItem('turktili-name');
            window.location.href = 'index.html';
        };
    }
});
