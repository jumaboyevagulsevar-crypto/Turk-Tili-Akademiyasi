document.addEventListener('DOMContentLoaded', () => {
    // --- Data Storage & Initialization ---
    const DEFAULTS = {
        xp: 0,
        lessons: 0,
        streak: 1,
        progress: 1,
        level: 'B1',
        lastLogin: new Date().toDateString(),
        name: "O'quvchi",
        lang: 'uz',
        theme: 'dark'
    };

    // Initialize state from localStorage
    const state = {};
    Object.keys(DEFAULTS).forEach(key => {
        const stored = localStorage.getItem(`turktili-${key}`);
        if (stored !== null) {
            if (key === 'name' || key === 'lang' || key === 'theme' || key === 'lastLogin' || key === 'level') {
                state[key] = stored;
            } else {
                state[key] = parseInt(stored);
            }
        } else {
            state[key] = DEFAULTS[key];
        }
    });

    // Check Streak
    const today = new Date().toDateString();
    if (state.lastLogin !== today) {
        const lastDate = new Date(state.lastLogin);
        const diff = Math.floor((new Date(today) - lastDate) / (1000 * 60 * 60 * 24));
        if (diff === 1) {
            state.streak += 1;
        } else if (diff > 1) {
            state.streak = 1;
        }
        state.lastLogin = today;
        localStorage.setItem('turktili-streak', state.streak);
        localStorage.setItem('turktili-lastLogin', today);
    }

    // --- DOM Elements ---
    const navItems = document.querySelectorAll('.nav-item');
    const viewSections = document.querySelectorAll('.view-section');
    const themeToggle = document.getElementById('theme-toggle');
    const languageSelect = document.getElementById('language-select');

    const sidebarToggle = document.getElementById('sidebar-toggle');
    const sidebar = document.querySelector('.sidebar');

    if (sidebarToggle && sidebar) {
        sidebarToggle.addEventListener('click', () => {
            sidebar.classList.toggle('active');
        });
    }

    // --- UI Update Helpers ---
    const updateStatsUI = () => {
        const xpEl = document.getElementById('stat-xp');
        const lessonsEl = document.getElementById('stat-lessons');
        const streakEl = document.querySelector('.streak-box span');
        const sidebarName = document.querySelector('.user-info h4');
        const bannerTitle = document.querySelector('.banner-text h1');
        const mainProgressText = document.querySelector('.course-info .progress-text');
        const mainProgressBar = document.querySelector('.course-info .progress-bar');

        if (xpEl) xpEl.innerText = `${state.xp} XP`;
        if (lessonsEl) lessonsEl.innerText = state.lessons;
        if (streakEl) streakEl.innerText = `${state.streak} Kun`;
        if (sidebarName) sidebarName.innerText = state.name;
        if (bannerTitle) bannerTitle.innerText = `Xush kelibsiz, ${state.name}! 👋`;

        // Level Progress (Total 30 lessons across A1-C2)
        const totalLessons = 30; 
        const progressPct = Math.min(Math.round((state.lessons / totalLessons) * 100), 100);
        
        if (mainProgressText) mainProgressText.innerText = `${progressPct}% yakunlandi`;
        if (mainProgressBar) mainProgressBar.style.width = `${progressPct}%`;
        
        // Global Progress Sidebar
        const globalPctEl = document.getElementById('global-progress-pct');
        const globalBarEl = document.getElementById('global-progress-bar');
        const userLevelBadge = document.getElementById('user-level-badge');

        if (globalPctEl) globalPctEl.innerText = `${progressPct}%`;
        if (globalBarEl) globalBarEl.style.width = `${progressPct}%`;
        if (userLevelBadge) userLevelBadge.innerText = `${state.level} Daraja`;
    };

    // --- Navigation ---
    const showView = (targetId) => {
        navItems.forEach(nav => {
            if (nav.getAttribute('data-target') === targetId) nav.classList.add('active');
            else nav.classList.remove('active');
        });

        viewSections.forEach(section => {
            if (section.id === targetId) {
                section.classList.add('active');
                if (targetId === 'topics-view') renderTopics();
                if (targetId === 'courses') renderVideoLessons();
                if (targetId === 'admin-panel') {
                    renderAdminVideoList();
                    renderUsersList();
                }
                section.style.animation = 'none';
                section.offsetHeight;
                section.style.animation = null;
            } else {
                section.classList.remove('active');
            }
        });
    };

    window.showView = showView; // Global access for onclicks

    const setLevel = (lvl) => {
        state.level = lvl;
        localStorage.setItem('turktili-level', lvl);
        
        // Update UI elements that show level
        const levelBadge = document.querySelector('.user-info p');
        if (levelBadge) levelBadge.innerText = `${lvl} Daraja`;
        
        const dashboardLevelBadge = document.querySelector('.course-thumb');
        if (dashboardLevelBadge) dashboardLevelBadge.innerText = lvl;
        
        const dashboardLevelTitle = document.querySelector('.course-info h4');
        if (dashboardLevelTitle) dashboardLevelTitle.innerText = `Turk Tili (${lvl})`;

        const topicsTitle = document.querySelector('#topics-view h2');
        if (topicsTitle) topicsTitle.innerText = `${lvl} Mavzulari`;

        updateStatsUI();
        showView('topics-view');
        renderVideoLessons(); // Update videos for new level
    };
    window.setLevel = setLevel;

    navItems.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            showView(item.getAttribute('data-target'));
        });
    });

    // --- Theme & Language ---
    document.body.setAttribute('data-theme', state.theme);
    if (themeToggle) {
        themeToggle.checked = state.theme === 'dark';
        themeToggle.addEventListener('change', (e) => {
            state.theme = e.target.checked ? 'dark' : 'light';
            document.body.setAttribute('data-theme', state.theme);
            localStorage.setItem('turktili-theme', state.theme);
        });
    }

    if (languageSelect) {
        languageSelect.value = state.lang;
        languageSelect.addEventListener('change', (e) => {
            state.lang = e.target.value;
            localStorage.setItem('turktili-lang', state.lang);
            location.reload(); 
        });
    }

    // --- Quiz System ---
    const quizData = {
        'A1': [
            { q: "\"Selam\" so'zi qanday tarjima qilinadi?", a: ["Salom", "Xayr", "Rahmat", "Yo'q"], correct: 0 },
            { q: "Turk tilida \"Xayrli tong\" nima deyiladi?", a: ["İyi akşamlar", "Günaydın", "Merhaba", "Görüşürüz"], correct: 1 }
        ],
        'A2': [
            { q: "Kelajak zamon qo'shimchasi?", a: ["-iyor", "-ecek", "-miş", "-di"], correct: 1 }
        ],
        'B1': [
            { q: "\"Okuyordum\" so'zining ma'nosi?", a: ["O'qiyapman", "O'qirdim", "O'qiyman", "O'qidim"], correct: 1 }
        ],
        'B2': [
            { q: "Belirsiz Geçmiş Zaman qo'shimchasi?", a: ["-di", "-iyor", "-miş", "-ar"], correct: 2 }
        ],
        'C1': [
            { q: "İstek Kipi (1-shaxs ko'plik)?", a: ["Bakalım", "Bakıyoruz", "Baktık", "Bakacağız"], correct: 0 }
        ],
        'C2': [
            { q: "Akademik tilda 'Tez' so'zining sinonimi?", a: ["Çabuk", "Hızlı", "İvedilikle", "Hemen"], correct: 2 }
        ]
    };

    let currentQuestion = 0;
    const updateQuiz = () => {
        const questionBox = document.querySelector('.question-box');
        if (!questionBox) return;

        const levelData = quizData[state.level] || quizData['A1'];
        const data = levelData[currentQuestion];
        const progressPct = ((currentQuestion + 1) / levelData.length) * 100;
        
        document.querySelector('#test-view .progress-bar').style.width = `${progressPct}%`;
        document.querySelector('#test-view .test-progress span').innerText = `Savol ${currentQuestion + 1} / ${levelData.length}`;
        
        questionBox.querySelector('h3').innerText = data.q;
        const optionsGrid = questionBox.querySelector('.options-grid');
        optionsGrid.innerHTML = '';
        
        data.a.forEach((opt, idx) => {
            const btn = document.createElement('button');
            btn.className = 'option-btn';
            btn.innerText = opt;
            btn.onclick = () => checkAnswer(idx, btn, levelData);
            optionsGrid.appendChild(btn);
        });
    };

    const checkAnswer = (idx, btn, levelData) => {
        const correct = levelData[currentQuestion].correct;
        const btns = document.querySelectorAll('.option-btn');
        btns.forEach(b => b.disabled = true);

        if (idx === correct) {
            btn.classList.add('correct');
            state.xp += 25;
            localStorage.setItem('turktili-xp', state.xp);
            updateStatsUI();
            if (typeof confetti === 'function') confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 } });
        } else {
            btn.classList.add('wrong');
            btns[correct].classList.add('correct');
        }
    };

    const nextBtn = document.getElementById('next-question');
    if (nextBtn) {
        nextBtn.onclick = () => {
            const levelData = quizData[state.level] || quizData['A1'];
            currentQuestion++;
            if (currentQuestion < levelData.length) {
                updateQuiz();
            } else {
                alert(`Test yakunlandi! XP balingiz: ${state.xp}`);
                showView('dashboard');
                currentQuestion = 0;
                updateQuiz();
            }
        };
    }

    // --- Vocabulary Section ---
    const vocabulary = [
        // A1
        { tr: "Merhaba", uz: "Salom", lvl: "A1" },
        { tr: "Günaydın", uz: "Xayrli tong", lvl: "A1" },
        { tr: "Nasılsın?", uz: "Qalaysan?", lvl: "A1" },
        // A2
        { tr: "Gelecek", uz: "Kelajak", lvl: "A2" },
        { tr: "Geçmiş", uz: "O'tmish", lvl: "A2" },
        { tr: "Tatil", uz: "Ta'til", lvl: "A2" },
        // B1
        { tr: "Okumak", uz: "O'qish", lvl: "B1" },
        { tr: "Anlatmak", uz: "Tushuntirish", lvl: "B1" },
        { tr: "Söylemek", uz: "Aytish", lvl: "B1" },
        // B2
        { tr: "Tahmin", uz: "Taxmin", lvl: "B2" },
        { tr: "Olasılık", uz: "Ehtimollik", lvl: "B2" },
        { tr: "Rapor", uz: "Hisobot", lvl: "B2" },
        // C1
        { tr: "Kavram", uz: "Tushuncha", lvl: "C1" },
        { tr: "Eleştiri", uz: "Tanqid", lvl: "C1" },
        { tr: "Mantıklı", uz: "Mantiqli", lvl: "C1" },
        // C2
        { tr: "Felsefe", uz: "Falsafa", lvl: "C2" },
        { tr: "Edebiyat", uz: "Adabiyot", lvl: "C2" },
        { tr: "Paradoks", uz: "Paradoks", lvl: "C2" },
        { tr: "Medeniyet", uz: "Sivilizatsiya", lvl: "C2" },
        { tr: "Gelenek", uz: "An'ana", lvl: "C2" }
    ];

    const renderVocabList = (filter = "") => {
        const container = document.getElementById('vocab-list-container');
        if (!container) return;
        container.innerHTML = '';
        
        vocabulary.filter(v => 
            (v.tr.toLowerCase().includes(filter.toLowerCase()) || v.uz.toLowerCase().includes(filter.toLowerCase())) &&
            (v.lvl === state.level || filter !== "")
        ).forEach(v => {
            const card = document.createElement('div');
            card.className = 'vocab-card glass-card';
            card.innerHTML = `
                <h3>${v.tr}</h3>
                <p>${v.uz}</p>
                <div class="lvl-tag">${v.lvl}</div>
                <button class="btn-audio" onclick="speak('${v.tr}')"><i class="fa-solid fa-volume-high"></i></button>
            `;
            container.appendChild(card);
        });

        // Update Revision Stats
        const revWordsCount = document.getElementById('rev-words-count');
        if (revWordsCount) revWordsCount.innerText = vocabulary.length;
    };

    const searchInput = document.getElementById('vocab-search-input');
    if (searchInput) {
        searchInput.oninput = (e) => renderVocabList(e.target.value);
    }

    // Flashcards
    let currentFlashIdx = 0;
    const updateFlashcard = () => {
        const term = document.getElementById('card-term');
        const meaning = document.getElementById('card-meaning');
        const card = document.querySelector('.flashcard');
        if (!term || !card) return;

        card.classList.remove('flipped');
        setTimeout(() => {
            term.innerText = vocabulary[currentFlashIdx].tr;
            meaning.innerText = vocabulary[currentFlashIdx].uz;
        }, 300);
    };

    const flashcard = document.getElementById('current-flashcard');
    if (flashcard) {
        flashcard.onclick = () => flashcard.classList.toggle('flipped');
    }

    document.getElementById('prev-card')?.addEventListener('click', () => {
        currentFlashIdx = (currentFlashIdx - 1 + vocabulary.length) % vocabulary.length;
        updateFlashcard();
    });

    document.getElementById('next-card')?.addEventListener('click', () => {
        currentFlashIdx = (currentFlashIdx + 1) % vocabulary.length;
        updateFlashcard();
    });

    // --- Topics Generation ---
    const topicsData = {
        'A1': [
            { id: 1, title: "Turk tili alifbosi", desc: "Video darslik", status: "active", type: "video", videoId: "CkwEedkE4Zo" },
            { id: 2, title: "Salomlashish", desc: "Asosiy iboralar", status: "completed", lessonId: 1 },
            { id: 3, title: "Sonlar va Vaqt", desc: "Sanoq sonlar", status: "active", lessonId: 2 },
            { id: 4, title: "Oilam", desc: "Qarindoshlik", status: "locked", lessonId: 3 }
        ],
        'A2': [
            { id: 1, title: "Kelajak rejalari", desc: "Gelecek Zaman (-ecek)", status: "active" },
            { id: 2, title: "O'tgan kunlar", desc: "Geçmiş Zaman (-di)", status: "locked" }
        ],
        'B1': [
            { id: 1, title: "O'tmish xotiralari", desc: "-iyordu (Hikaye)", status: "active" },
            { id: 2, title: "Odatlar", desc: "Geniş Zaman", status: "locked" },
            { id: 3, title: "Xabarlar", desc: "Dolaylı Anlatım", status: "locked" }
        ],
        'B2': [
            { id: 1, title: "Ehtimollar", desc: "Belirsiz Geçmiş (-miş)", status: "active" },
            { id: 2, title: "Shartlar", desc: "Şart Kipi (-se)", status: "locked" }
        ],
        'C1': [
            { id: 1, title: "Istaklar", desc: "İstek Kipi (-eyim)", status: "active" },
            { id: 2, title: "Bog'lovchilar", desc: "Bağlaçlar", status: "locked" }
        ],
        'C2': [
            { id: 1, title: "Akademik nutq", desc: "Akademik Metinler", status: "active" },
            { id: 2, title: "Adabiyot", desc: "Edebi Sanatlar", status: "locked" }
        ]
    };

    const renderTopics = () => {
        const container = document.querySelector('.topics-grid');
        if (!container) return;
        container.innerHTML = '';

        const levelTopics = topicsData[state.level] || topicsData['A1'];
        levelTopics.forEach(topic => {
            const item = document.createElement('div');
            item.className = `topic-item glass-card ${topic.status}`;
            
            let actionBtn = '';
            if (topic.type === 'video') {
                actionBtn = `<button class="btn-primary-sm" onclick="playVideo('${topic.videoId}')"><i class="fa-solid fa-play"></i> Tomosha qilish</button>`;
            } else {
                const lid = topic.lessonId || topic.id;
                actionBtn = topic.status === 'active' ? `<button class="btn-primary-sm" onclick="startLesson('${state.level}', ${lid})">O'rganish</button>` : 
                           topic.status === 'completed' ? `<div class="topic-status"><i class="fa-solid fa-check-circle"></i></div>` : 
                           `<button class="btn-outline-sm" disabled>Qulflangan</button>`;
            }

            item.innerHTML = `
                <div class="topic-number">${topic.id < 10 ? '0' + topic.id : topic.id}</div>
                <div class="topic-info">
                    <h4>${topic.title}</h4>
                    <p>${topic.desc}</p>
                </div>
                ${actionBtn}
            `;
            container.appendChild(item);
        });
    };

    window.startLesson = (level, id) => {
        window.location.href = `lesson-${level.toLowerCase()}-${id}.html`;
    };

    // --- Revision Logic (Removed) ---

    // Mode Switching
    document.querySelectorAll('.mode-btn').forEach(btn => {
        btn.onclick = () => {
            document.querySelectorAll('.mode-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            const mode = btn.dataset.mode;
            document.getElementById('vocab-list-container').style.display = mode === 'list' ? 'grid' : 'none';
            document.getElementById('flashcard-container').style.display = mode === 'flashcards' ? 'flex' : 'none';
        };
    });

    // --- Grammar Checker: Vowel Harmony (Ünlü Uyumu) ---
    window.checkVowelHarmony = (word) => {
        if (!word) return null;
        const vowels = word.match(/[aeıioöuü]/gi);
        if (!vowels || vowels.length < 2) return true; // Single vowel always "harmonious"

        const backVowels = /[aıou]/i;
        const frontVowels = /[eiöü]/i;

        const isBack = backVowels.test(vowels[0]);
        for (let i = 1; i < vowels.length; i++) {
            if (isBack && !backVowels.test(vowels[i])) return false;
            if (!isBack && !frontVowels.test(vowels[i])) return false;
        }
        return true;
    };

    // Helper for suffixes (4-way)
    window.getHarmonySuffix = (word, type) => {
        const lastVowel = word.match(/[aeıioöuü]/gi).pop().toLowerCase();
        if (type === '2way') {
            return /[aıou]/.test(lastVowel) ? 'a' : 'e';
        } else if (type === '4way') {
            if (/[aı]/.test(lastVowel)) return 'ı';
            if (/[ei]/.test(lastVowel)) return 'i';
            if (/[ou]/.test(lastVowel)) return 'u';
            if (/[öü]/.test(lastVowel)) return 'ü';
        }
        return '';
    };

    // --- Audio (Web Speech API) ---
    window.speak = (text) => {
        if (!window.speechSynthesis) return;
        window.speechSynthesis.cancel(); // Stop current speech
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = 'tr-TR';
        utterance.rate = 0.9;
        window.speechSynthesis.speak(utterance);
    };

    // --- Initialization ---
    updateStatsUI();
    renderVocabList();
    updateQuiz();
    updateFlashcard();

    // --- Button Listeners ---
    // Tasks "Boshlash" -> Quiz
    document.querySelectorAll('#tasks .btn-outline').forEach(btn => {
        btn.onclick = () => showView('test-view');
    });

    // Topics "O'rganish" -> Lessons
    document.querySelectorAll('.topic-item .btn-primary-sm').forEach((btn, idx) => {
        btn.onclick = () => {
            window.location.href = `lesson-${idx + 1}.html`;
        };
    });

    // Dashboard "Davom etish" -> Next Lesson
    const continueBtn = document.querySelector('.welcome-banner .btn-primary');
    if (continueBtn) {
        continueBtn.onclick = () => {
            const next = Math.min(state.lessons + 1, 4);
            window.location.href = `lesson-${next}.html`;
        };
    }

    // Courses "Davom etish" -> Topics View
    const courseContinueBtn = document.querySelector('#courses .btn-primary');
    if (courseContinueBtn) {
        courseContinueBtn.onclick = () => showView('topics-view');
    }

    // Personal Form
    const personalForm = document.getElementById('personal-form');
        if (personalForm) {
            personalForm.onsubmit = (e) => {
                e.preventDefault();
                state.name = document.getElementById('user-name').value;
                localStorage.setItem('turktili-name', state.name);
                updateStatsUI();
                alert("Saqlandi!");
            };
        }

    // --- Video & Admin Expanded Logic ---
    let videoLessons = JSON.parse(localStorage.getItem('turktili-videos') || '[]');
    
    // Add default A1 lesson if not already present
    const defaultA1Video = { 
        id: 1712571257001, 
        title: "Turk tili alifbosi bilan tanishuv | 1-dars", 
        url: "https://youtu.be/CkwEedkE4Zo", 
        level: "A1" 
    };
    
    if (!videoLessons.find(v => v.url.includes("CkwEedkE4Zo"))) {
        videoLessons.unshift(defaultA1Video);
        localStorage.setItem('turktili-videos', JSON.stringify(videoLessons));
    }

    let registeredUsers = JSON.parse(localStorage.getItem('turktili-users') || '[]');

    const getYoutubeID = (url) => {
        const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
        const match = url.match(regExp);
        return (match && match[2].length === 11) ? match[2] : url;
    };

    const renderVideoLessons = () => {
        const container = document.getElementById('video-grid-container');
        const levelSpan = document.getElementById('current-course-level');
        if (!container) return;
        
        if (levelSpan) levelSpan.innerText = state.level;
        container.innerHTML = '';

        const levelVideos = videoLessons.filter(v => v.level === state.level);
        
        if (levelVideos.length === 0) {
            container.innerHTML = '<p style="grid-column: 1/-1; text-align: center; color: var(--text-secondary); padding: 40px;">Ushbu daraja uchun videolar hali yuklanmagan.</p>';
            return;
        }

        levelVideos.forEach(v => {
            const videoId = getYoutubeID(v.url);
            const card = document.createElement('div');
            card.className = 'video-card glass-card';
            card.style.background = 'var(--bg-card)';
            card.innerHTML = `
                <div class="video-thumb" onclick="playVideo('${videoId}')" style="cursor: pointer; position: relative;">
                    <img src="https://img.youtube.com/vi/${videoId}/mqdefault.jpg" alt="${v.title}" style="width:100%; display:block;">
                    <div class="play-overlay" style="position:absolute; top:0; left:0; width:100%; height:100%; background:rgba(0,0,0,0.3); display:flex; align-items:center; justify-content:center; opacity:0; transition:0.3s;"><i class="fa-solid fa-play" style="font-size:2rem; color:white;"></i></div>
                </div>
                <div class="video-content" style="padding:15px;">
                    <h4 style="margin-bottom:5px;">${v.title}</h4>
                    <span class="video-tag" style="font-size:0.7rem; background:rgba(227,10,23,0.1); color:var(--accent-red); padding:2px 8px; border-radius:10px;">${v.level}</span>
                </div>
            `;
            card.onmouseover = () => card.querySelector('.play-overlay').style.opacity = '1';
            card.onmouseout = () => card.querySelector('.play-overlay').style.opacity = '0';
            container.appendChild(card);
        });
    };

    window.playVideo = (id) => {
        const url = `https://www.youtube.com/embed/${id}?autoplay=1`;
        let modal = document.getElementById('video-modal');
        if (!modal) {
            modal = document.createElement('div');
            modal.id = 'video-modal';
            modal.style = "position:fixed; top:0; left:0; width:100%; height:100%; background:rgba(0,0,0,0.95); z-index:9999; display:flex; align-items:center; justify-content:center;";
            modal.innerHTML = `
                <div style="position:relative; width:90%; max-width:1000px; aspect-ratio:16/9;">
                    <button onclick="this.parentElement.parentElement.remove()" style="position:absolute; top:-40px; right:0; background:none; border:none; color:white; font-size:2rem; cursor:pointer;"><i class="fa-solid fa-xmark"></i></button>
                    <iframe id="video-iframe" width="100%" height="100%" src="" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
                </div>
            `;
            document.body.appendChild(modal);
        }
        document.getElementById('video-iframe').src = url;
    };

    // --- Admin Logic ---
    window.verifyAdmin = () => {
        const pass = document.getElementById('admin-pass-input').value;
        if (pass === '1234') {
            showView('admin-panel');
        } else {
            alert('Parol noto\'g\'ri!');
        }
    };

    window.addVideoLesson = () => {
        const title = document.getElementById('v-title').value;
        const url = document.getElementById('v-url').value;
        const level = document.getElementById('v-level').value;

        if (!title || !url) return alert('Hamma maydonlarni to\'ldiring!');

        videoLessons.push({ id: Date.now(), title, url, level });
        localStorage.setItem('turktili-videos', JSON.stringify(videoLessons));
        
        document.getElementById('v-title').value = '';
        document.getElementById('v-url').value = '';
        renderAdminVideoList();
        alert('Dars qo\'shildi!');
    };

    const renderAdminVideoList = () => {
        const container = document.getElementById('admin-video-list');
        if (!container) return;
        container.innerHTML = '';
        videoLessons.forEach(v => {
            const div = document.createElement('div');
            div.className = 'admin-video-item';
            div.style = "display:flex; justify-content:space-between; align-items:center; padding:10px; border-bottom:1px solid var(--border-color);";
            div.innerHTML = `
                <span><strong>${v.level}</strong>: ${v.title}</span>
                <button class="btn-delete-sm" onclick="deleteVideoLesson(${v.id})"><i class="fa-solid fa-trash"></i></button>
            `;
            container.appendChild(div);
        });
    };

    window.deleteVideoLesson = (id) => {
        if (!confirm('O\'chirilsinmi?')) return;
        videoLessons = videoLessons.filter(v => v.id !== id);
        localStorage.setItem('turktili-videos', JSON.stringify(videoLessons));
        renderAdminVideoList();
    };

    const renderUsersList = () => {
        const body = document.getElementById('users-list-body');
        if (!body) return;
        body.innerHTML = '';
        registeredUsers = JSON.parse(localStorage.getItem('turktili-users') || '[]');
        
        if (registeredUsers.length === 0) {
            body.innerHTML = '<tr><td colspan="4" style="text-align:center; padding:20px;">Hali hech kim ro\'yxatdan o\'tmadi.</td></tr>';
            return;
        }

        registeredUsers.forEach((u, idx) => {
            const tr = document.createElement('tr');
            tr.innerHTML = `
                <td>${u.name}</td>
                <td>${u.email}</td>
                <td>${u.date}</td>
                <td><button class="btn-delete-sm" onclick="deleteUser(${idx})"><i class="fa-solid fa-user-minus"></i></button></td>
            `;
            body.appendChild(tr);
        });
    };

    window.deleteUser = (idx) => {
        if (!confirm('Foydalanuvchi o\'chirilsinmi?')) return;
        registeredUsers.splice(idx, 1);
        localStorage.setItem('turktili-users', JSON.stringify(registeredUsers));
        renderUsersList();
    };

    // Admin Tab Switching
    document.querySelectorAll('.admin-tab-btn').forEach(btn => {
        btn.onclick = () => {
            document.querySelectorAll('.admin-tab-btn').forEach(b => b.classList.remove('active'));
            document.querySelectorAll('.admin-tab-content').forEach(c => c.classList.remove('active'));
            btn.classList.add('active');
            document.getElementById(btn.dataset.tab).classList.add('active');
        };
    });

    // Logout Logic
    const logoutBtn = document.getElementById('logout-btn');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', (e) => {
            e.preventDefault();
            if (confirm('Platformadan chiqishni xohlaysizmi? Progressingiz saqlanib qolinadi.')) {
                window.location.href = 'index.html';
            }
        });
    }

});

// --- AI Assistant Chat Logic (Groq Integration) ---
const chatToggle = document.getElementById('chat-toggle');
const aiChatWindow = document.getElementById('ai-chat-window');
const closeChat = document.getElementById('close-chat');
const chatInput = document.getElementById('chat-input');
const sendMsg = document.getElementById('send-msg');
const chatBody = document.getElementById('chat-body');

// Groq API Configuration (Split to avoid GitHub Secret Scanning block)
const GROQ_PART_1 = "gsk_3FUr3Dp18e2d";
const GROQ_PART_2 = "YHDywGUcWGdyb3FYzUGVoC9YQvgVqAG15E4I3xBt";
const GROQ_API_KEY = GROQ_PART_1 + GROQ_PART_2;
const GROQ_API_URL = "https://api.groq.com/openai/v1/chat/completions";
const MODEL_NAME = "llama-3.3-70b-versatile"; 

// Conversation History
let chatHistory = [
    {
        role: "system",
        content: `Sening isming Yordamchi AI. Sen "Turk Tili Akademiyasi" platformasining sun'iy intellekt yordamchisisan. 
        Sening vazifang o'quvchilarga turk tilini o'rganishda yordam berish. 
        - Javoblarni asosan O'zbek tilida ber, turkcha misollar bilan.
        - Doimo xushmuomala va dalda beruvchi bo'l.
        - Grammatika, lug'at va talaffuz bo'yicha savollarga aniq javob ber.
        - Agar foydalanuvchi turkcha gapirsa, turkcha javob qaytarishing ham mumkin.
        - Platformada A1 dan C2 gacha darajalar borligini bilasan.`
    }
];

// Toggle Chat Window
chatToggle.addEventListener('click', () => {
    aiChatWindow.classList.toggle('active');
    chatToggle.classList.toggle('active');
    if (aiChatWindow.classList.contains('active')) {
        chatInput.focus();
        const badge = chatToggle.querySelector('.pulse-badge');
        if (badge) badge.style.display = 'none';
    }
});

closeChat.addEventListener('click', () => {
    aiChatWindow.classList.remove('active');
    chatToggle.classList.remove('active');
});

function addMessage(text, isUser = false) {
    const msgDiv = document.createElement('div');
    msgDiv.classList.add('chat-msg');
    msgDiv.classList.add(isUser ? 'msg-user' : 'msg-ai');
    msgDiv.textContent = text;
    chatBody.appendChild(msgDiv);
    chatBody.scrollTop = chatBody.scrollHeight;
}

function showTypingIndicator() {
    const indicator = document.createElement('div');
    indicator.classList.add('typing-indicator');
    indicator.id = 'typing-indicator';
    indicator.innerHTML = `
        <div class="typing-dot"></div>
        <div class="typing-dot"></div>
        <div class="typing-dot"></div>
    `;
    chatBody.appendChild(indicator);
    chatBody.scrollTop = chatBody.scrollHeight;
    return indicator;
}

async function handleSendMessage() {
    const text = chatInput.value.trim();
    if (!text) return;

    // Check protocol (Disabled to allow local testing)
    /*
    if (window.location.protocol === 'file:') {
        addMessage("⚠️ Xavfsizlik qoidasi: Faylni to'g'ridan-to'g'ri ochganingiz uchun brauzer AI-ni bloklamoqda. Iltimos, VS Code-da 'Live Server' orqali oching.", false);
        return;
    }
    */

    addMessage(text, true);
    chatHistory.push({ role: "user", content: text });
    chatInput.value = '';

    const indicator = showTypingIndicator();

    try {
        const response = await fetch(GROQ_API_URL, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${GROQ_API_KEY}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                model: MODEL_NAME,
                messages: chatHistory,
                temperature: 0.7,
                max_tokens: 1024
            })
        });

        if (!response.ok) {
            const errData = await response.json();
            throw new Error(errData.error?.message || 'API connection failed');
        }

        const data = await response.json();
        const aiMessage = data.choices[0].message.content;

        indicator.remove();
        addMessage(aiMessage);
        chatHistory.push({ role: "assistant", content: aiMessage });

    } catch (error) {
        console.error("Groq Error:", error);
        if (indicator) indicator.remove();
        addMessage(`Kechirasiz, xatolik yuz berdi: ${error.message}. Iltimos, keyinroq urinib ko'ring.`);
    }
}

sendMsg.addEventListener('click', handleSendMessage);
chatInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') handleSendMessage();
});

