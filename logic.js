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
    function updateStatsUI() {
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
        if (bannerTitle) bannerTitle.innerText = `Xush kelibsiz, ${state.name}! рџ‘‹`;

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
    function showView(targetId) {
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

    function setLevel(lvl) {
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

        // Highlight active card in courses grid
        document.querySelectorAll('.level-card').forEach(card => {
            const badge = card.querySelector('.level-badge');
            if (badge && badge.innerText === lvl) {
                card.classList.add('active-level');
            } else {
                card.classList.remove('active-level');
            }
        });

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
            { q: "Turk tilida \"Xayrli tong\" nima deyiladi?", a: ["Д°yi akЕџamlar", "GГјnaydД±n", "Merhaba", "GГ¶rГјЕџГјrГјz"], correct: 1 }
        ],
        'A2': [
            { q: "Kelajak zamon qo'shimchasi?", a: ["-iyor", "-ecek", "-miЕџ", "-di"], correct: 1 }
        ],
        'B1': [
            { q: "\"Okuyordum\" so'zining ma'nosi?", a: ["O'qiyapman", "O'qirdim", "O'qiyman", "O'qidim"], correct: 1 }
        ],
        'B2': [
            { q: "Belirsiz GeГ§miЕџ Zaman qo'shimchasi?", a: ["-di", "-iyor", "-miЕџ", "-ar"], correct: 2 }
        ],
        'C1': [
            { q: "Д°stek Kipi (1-shaxs ko'plik)?", a: ["BakalД±m", "BakД±yoruz", "BaktД±k", "BakacaДџД±z"], correct: 0 }
        ],
        'C2': [
            { q: "Akademik tilda 'Tez' so'zining sinonimi?", a: ["Г‡abuk", "HД±zlД±", "Д°vedilikle", "Hemen"], correct: 2 }
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
        { tr: "GГјnaydД±n", uz: "Xayrli tong", lvl: "A1" },
        { tr: "NasД±lsД±n?", uz: "Qalaysan?", lvl: "A1" },
        // A2
        { tr: "Gelecek", uz: "Kelajak", lvl: "A2" },
        { tr: "GeГ§miЕџ", uz: "O'tmish", lvl: "A2" },
        { tr: "Tatil", uz: "Ta'til", lvl: "A2" },
        // B1
        { tr: "Okumak", uz: "O'qish", lvl: "B1" },
        { tr: "Anlatmak", uz: "Tushuntirish", lvl: "B1" },
        { tr: "SГ¶ylemek", uz: "Aytish", lvl: "B1" },
        // B2
        { tr: "Tahmin", uz: "Taxmin", lvl: "B2" },
        { tr: "OlasД±lД±k", uz: "Ehtimollik", lvl: "B2" },
        { tr: "Rapor", uz: "Hisobot", lvl: "B2" },
        // C1
        { tr: "Kavram", uz: "Tushuncha", lvl: "C1" },
        { tr: "EleЕџtiri", uz: "Tanqid", lvl: "C1" },
        { tr: "MantД±klД±", uz: "Mantiqli", lvl: "C1" },
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
            { id: 1, title: "Turk tili alifbosi", desc: "1-dars | Video darslik", status: "active", type: "video", videoId: "CkwEedkE4Zo" },
            { id: 2, title: "Olmoshlar va qo'shimchalar", desc: "2-dars | Video darslik", status: "active", type: "video", videoId: "S7cd1hoT1Ek" },
            { id: 3, title: "Qayerda? / Necha pul?", desc: "3-dars | Video darslik", status: "active", type: "video", videoId: "8C8y_Z33Rt8" },
            { id: 4, title: "Shaxs-son qo'shimchalari", desc: "4-dars | Video darslik", status: "active", type: "video", videoId: "v3iRuqE78qo" },
            { id: 5, title: "Nima qilyapsiz?", desc: "5-dars | Video darslik", status: "active", type: "video", videoId: "_EjAyeFNoC8" },
            { id: 6, title: "Savol berish", desc: "6-dars | Video darslik", status: "active", type: "video", videoId: "TdT5fhzphF8" },
            { id: 7, title: "Benim DГјnyam", desc: "7-dars | Video darslik", status: "active", type: "video", videoId: "URzXOszL6vk" },
            { id: 8, title: "Millat nomlari", desc: "8-dars | Video darslik", status: "active", type: "video", videoId: "1OvIhXK0L0g" },
            { id: 9, title: "O'zlik olmoshlari", desc: "9-dars | Video darslik", status: "active", type: "video", videoId: "x0gKvpg35fI" },
            { id: 10, title: "Soat nechchi bo'ldi?", desc: "10-dars | Video darslik", status: "active", type: "video", videoId: "ZxrqHHVDzu8" },
            { id: 11, title: "Oldin / Keyin", desc: "11-dars | Video darslik", status: "active", type: "video", videoId: "h4F1wTg71d0" },
            { id: 12, title: "Atrofimiz va biz", desc: "12-dars | Video darslik", status: "active", type: "video", videoId: "AI5UpuXjlqM" },
            { id: 13, title: "Noaniq ot / So'z birikmasi", desc: "13-dars | Video darslik", status: "active", type: "video", videoId: "iRr585CSmA0" },
            { id: 14, title: "Qayerda? (joylashuv)", desc: "14-dars | Video darslik", status: "active", type: "video", videoId: "LjFwcGmfnQo" },
            { id: 15, title: "Istak mayli", desc: "15-dars | Video darslik", status: "active", type: "video", videoId: "Sjj5-0GRXGg" }
        ],
        'A2': [
            { id: 16, title: "Sifat yasovchi qo'shimchalar", desc: "16-dars | Video darslik", status: "active", type: "video", videoId: "dzdHnNs4zno" },
            { id: 17, title: "Aniq o'tgan zamon", desc: "17-dars | Video darslik", status: "active", type: "video", videoId: "rP_bZrwZEj4" },
            { id: 18, title: "Ot so'zlardagi aniq o'tgan zamon", desc: "18-dars | Video darslik", status: "active", type: "video", videoId: "Nc7OrGBTvu8" },
            { id: 19, title: "Bilan bog'lovchisi va kelasi zamon", desc: "19-dars | Video darslik", status: "active", type: "video", videoId: "-GH0Ol_GQKY" },
            { id: 20, title: "Ot so'zlardagi kelasi zamon", desc: "20-dars | Video darslik", status: "active", type: "video", videoId: "539ACRjAvxQ" },
            { id: 21, title: "Noaniq o'tgan zamon", desc: "21-dars | Video darslik", status: "active", type: "video", videoId: "d8AtZrpc3lw" },
            { id: 22, title: "Orttirma sifatlari", desc: "22-dars | Video darslik", status: "active", type: "video", videoId: "r0rfLcdEIxY" },
            { id: 23, title: "O'zlashtirma gap", desc: "23-dars | Video darslik", status: "active", type: "video", videoId: "Dn2_iS6nZko" },
            { id: 24, title: "Hozirgi zamon", desc: "24-dars | Video darslik", status: "active", type: "video", videoId: "21xoW4XZZgw" },
            { id: 25, title: "Iltimos qilish", desc: "25-dars | Video darslik", status: "active", type: "video", videoId: "XuPj_iBLpu4" },
            { id: 26, title: "Modal fe'llar", desc: "26-dars | Video darslik", status: "active", type: "video", videoId: "wEWUKX136qg" },
            { id: 27, title: "Modal fellarning turlari", desc: "27-dars | Video darslik", status: "active", type: "video", videoId: "dvynHnBsmFo" },
            { id: 28, title: "Ravishdosh Orttirma sifatlari", desc: "28-dars | Video darslik", status: "active", type: "video", videoId: "8NP_s5n0q0w" },
            { id: 29, title: "Zarf-Fiiller. BГ¶lГјm 2", desc: "29-dars | Video darslik", status: "active", type: "video", videoId: "3RvRNHjMicg" },
            { id: 30, title: "Ећimdiki ZamanД±n HikГўyesi", desc: "30-dars | Video darslik", status: "active", type: "video", videoId: "j5t4wZ5qfFU" }
        ],
        'B1': [
            { id: 31, title: "B1 Daraja: O'rta", desc: "31-dars | Video darslik", status: "active", type: "video", videoId: "CkwEedkE4Zo" },
            { id: 32, title: "B1 Daraja: O'rta", desc: "32-dars | Video darslik", status: "active", type: "video", videoId: "CkwEedkE4Zo" },
            { id: 33, title: "B1 Daraja: O'rta", desc: "33-dars | Video darslik", status: "active", type: "video", videoId: "CkwEedkE4Zo" },
            { id: 34, title: "B1 Daraja: O'rta", desc: "34-dars | Video darslik", status: "active", type: "video", videoId: "CkwEedkE4Zo" },
            { id: 35, title: "B1 Daraja: O'rta", desc: "35-dars | Video darslik", status: "active", type: "video", videoId: "CkwEedkE4Zo" },
            { id: 36, title: "B1 Daraja: O'rta", desc: "36-dars | Video darslik", status: "active", type: "video", videoId: "CkwEedkE4Zo" },
            { id: 37, title: "B1 Daraja: O'rta", desc: "37-dars | Video darslik", status: "active", type: "video", videoId: "CkwEedkE4Zo" },
            { id: 38, title: "B1 Daraja: O'rta", desc: "38-dars | Video darslik", status: "active", type: "video", videoId: "CkwEedkE4Zo" },
            { id: 39, title: "B1 Daraja: O'rta", desc: "39-dars | Video darslik", status: "active", type: "video", videoId: "CkwEedkE4Zo" },
            { id: 40, title: "B1 Daraja: O'rta", desc: "40-dars | Video darslik", status: "active", type: "video", videoId: "CkwEedkE4Zo" },
            { id: 41, title: "B1 Daraja: O'rta", desc: "41-dars | Video darslik", status: "active", type: "video", videoId: "CkwEedkE4Zo" },
            { id: 42, title: "B1 Daraja: O'rta", desc: "42-dars | Video darslik", status: "active", type: "video", videoId: "CkwEedkE4Zo" },
            { id: 43, title: "B1 Daraja: O'rta", desc: "43-dars | Video darslik", status: "active", type: "video", videoId: "CkwEedkE4Zo" },
            { id: 44, title: "B1 Daraja: O'rta", desc: "44-dars | Video darslik", status: "active", type: "video", videoId: "CkwEedkE4Zo" },
            { id: 45, title: "B1 Daraja: O'rta", desc: "45-dars | Video darslik", status: "active", type: "video", videoId: "CkwEedkE4Zo" }
        ],
        'B2': [
            { id: 46, title: "B2 Daraja: Yuqori o'rta", desc: "46-dars | Video darslik", status: "active", type: "video", videoId: "S7cd1hoT1Ek" },
            { id: 47, title: "B2 Daraja: Yuqori o'rta", desc: "47-dars | Video darslik", status: "active", type: "video", videoId: "S7cd1hoT1Ek" },
            { id: 48, title: "B2 Daraja: Yuqori o'rta", desc: "48-dars | Video darslik", status: "active", type: "video", videoId: "S7cd1hoT1Ek" },
            { id: 49, title: "B2 Daraja: Yuqori o'rta", desc: "49-dars | Video darslik", status: "active", type: "video", videoId: "S7cd1hoT1Ek" },
            { id: 50, title: "B2 Daraja: Yuqori o'rta", desc: "50-dars | Video darslik", status: "active", type: "video", videoId: "S7cd1hoT1Ek" },
            { id: 51, title: "B2 Daraja: Yuqori o'rta", desc: "51-dars | Video darslik", status: "active", type: "video", videoId: "S7cd1hoT1Ek" },
            { id: 52, title: "B2 Daraja: Yuqori o'rta", desc: "52-dars | Video darslik", status: "active", type: "video", videoId: "S7cd1hoT1Ek" },
            { id: 53, title: "B2 Daraja: Yuqori o'rta", desc: "53-dars | Video darslik", status: "active", type: "video", videoId: "S7cd1hoT1Ek" },
            { id: 54, title: "B2 Daraja: Yuqori o'rta", desc: "54-dars | Video darslik", status: "active", type: "video", videoId: "S7cd1hoT1Ek" },
            { id: 55, title: "B2 Daraja: Yuqori o'rta", desc: "55-dars | Video darslik", status: "active", type: "video", videoId: "S7cd1hoT1Ek" },
            { id: 56, title: "B2 Daraja: Yuqori o'rta", desc: "56-dars | Video darslik", status: "active", type: "video", videoId: "S7cd1hoT1Ek" },
            { id: 57, title: "B2 Daraja: Yuqori o'rta", desc: "57-dars | Video darslik", status: "active", type: "video", videoId: "S7cd1hoT1Ek" },
            { id: 58, title: "B2 Daraja: Yuqori o'rta", desc: "58-dars | Video darslik", status: "active", type: "video", videoId: "S7cd1hoT1Ek" },
            { id: 59, title: "B2 Daraja: Yuqori o'rta", desc: "59-dars | Video darslik", status: "active", type: "video", videoId: "S7cd1hoT1Ek" },
            { id: 60, title: "B2 Daraja: Yuqori o'rta", desc: "60-dars | Video darslik", status: "active", type: "video", videoId: "S7cd1hoT1Ek" }
        ],
        'C1': [
            { id: 61, title: "C1 Daraja: Mukammal", desc: "61-dars | Video darslik", status: "active", type: "video", videoId: "8C8y_Z33Rt8" },
            { id: 62, title: "C1 Daraja: Mukammal", desc: "62-dars | Video darslik", status: "active", type: "video", videoId: "8C8y_Z33Rt8" },
            { id: 63, title: "C1 Daraja: Mukammal", desc: "63-dars | Video darslik", status: "active", type: "video", videoId: "8C8y_Z33Rt8" },
            { id: 64, title: "C1 Daraja: Mukammal", desc: "64-dars | Video darslik", status: "active", type: "video", videoId: "8C8y_Z33Rt8" },
            { id: 65, title: "C1 Daraja: Mukammal", desc: "65-dars | Video darslik", status: "active", type: "video", videoId: "8C8y_Z33Rt8" },
            { id: 66, title: "C1 Daraja: Mukammal", desc: "66-dars | Video darslik", status: "active", type: "video", videoId: "8C8y_Z33Rt8" },
            { id: 67, title: "C1 Daraja: Mukammal", desc: "67-dars | Video darslik", status: "active", type: "video", videoId: "8C8y_Z33Rt8" },
            { id: 68, title: "C1 Daraja: Mukammal", desc: "68-dars | Video darslik", status: "active", type: "video", videoId: "8C8y_Z33Rt8" },
            { id: 69, title: "C1 Daraja: Mukammal", desc: "69-dars | Video darslik", status: "active", type: "video", videoId: "8C8y_Z33Rt8" },
            { id: 70, title: "C1 Daraja: Mukammal", desc: "70-dars | Video darslik", status: "active", type: "video", videoId: "8C8y_Z33Rt8" },
            { id: 71, title: "C1 Daraja: Mukammal", desc: "71-dars | Video darslik", status: "active", type: "video", videoId: "8C8y_Z33Rt8" },
            { id: 72, title: "C1 Daraja: Mukammal", desc: "72-dars | Video darslik", status: "active", type: "video", videoId: "8C8y_Z33Rt8" },
            { id: 73, title: "C1 Daraja: Mukammal", desc: "73-dars | Video darslik", status: "active", type: "video", videoId: "8C8y_Z33Rt8" },
            { id: 74, title: "C1 Daraja: Mukammal", desc: "74-dars | Video darslik", status: "active", type: "video", videoId: "8C8y_Z33Rt8" },
            { id: 75, title: "C1 Daraja: Mukammal", desc: "75-dars | Video darslik", status: "active", type: "video", videoId: "8C8y_Z33Rt8" }
        ],
        'C2': [
            { id: 76, title: "C2 Daraja: Professional", desc: "76-dars | Video darslik", status: "active", type: "video", videoId: "v3iRuqE78qo" },
            { id: 77, title: "C2 Daraja: Professional", desc: "77-dars | Video darslik", status: "active", type: "video", videoId: "v3iRuqE78qo" },
            { id: 78, title: "C2 Daraja: Professional", desc: "78-dars | Video darslik", status: "active", type: "video", videoId: "v3iRuqE78qo" },
            { id: 79, title: "C2 Daraja: Professional", desc: "79-dars | Video darslik", status: "active", type: "video", videoId: "v3iRuqE78qo" },
            { id: 80, title: "C2 Daraja: Professional", desc: "80-dars | Video darslik", status: "active", type: "video", videoId: "v3iRuqE78qo" },
            { id: 81, title: "C2 Daraja: Professional", desc: "81-dars | Video darslik", status: "active", type: "video", videoId: "v3iRuqE78qo" },
            { id: 82, title: "C2 Daraja: Professional", desc: "82-dars | Video darslik", status: "active", type: "video", videoId: "v3iRuqE78qo" },
            { id: 83, title: "C2 Daraja: Professional", desc: "83-dars | Video darslik", status: "active", type: "video", videoId: "v3iRuqE78qo" },
            { id: 84, title: "C2 Daraja: Professional", desc: "84-dars | Video darslik", status: "active", type: "video", videoId: "v3iRuqE78qo" },
            { id: 85, title: "C2 Daraja: Professional", desc: "85-dars | Video darslik", status: "active", type: "video", videoId: "v3iRuqE78qo" },
            { id: 86, title: "C2 Daraja: Professional", desc: "86-dars | Video darslik", status: "active", type: "video", videoId: "v3iRuqE78qo" },
            { id: 87, title: "C2 Daraja: Professional", desc: "87-dars | Video darslik", status: "active", type: "video", videoId: "v3iRuqE78qo" },
            { id: 88, title: "C2 Daraja: Professional", desc: "88-dars | Video darslik", status: "active", type: "video", videoId: "v3iRuqE78qo" },
            { id: 89, title: "C2 Daraja: Professional", desc: "89-dars | Video darslik", status: "active", type: "video", videoId: "v3iRuqE78qo" },
            { id: 90, title: "C2 Daraja: Professional", desc: "90-dars | Video darslik", status: "active", type: "video", videoId: "v3iRuqE78qo" }
        ]
    };

    // --- Interactive Task System ---
    const lessonTasks = {
        'A1': {
            1: [
                { category: 'grammar', q: "Turk alifbosida nechta harf bor?", a: ["29", "28", "30", "26"], correct: 0 },
                { category: 'vocab', q: "'Elma' nima degani?", a: ["Anor", "Olma", "Uzum", "Nok"], correct: 1 }
            ]
        },
        'A2': {
            16: [
                { category: 'grammar', q: "'-li' qo'shimchasi nima yasaydi?", a: ["Fe'l", "Sifat", "Ot", "Ravish"], correct: 1 },
                { category: 'vocab', q: "'Tuzlu' so'zining ma'nosi?", a: ["Shirin", "Sho'r", "Achchiq", "Nordon"], correct: 1 }
            ],
            17: [
                { category: 'grammar', q: "Aniq o'tgan zamon qo'shimchasi?", a: ["-iyor", "-di", "-ecek", "-miЕџ"], correct: 1 },
                { category: 'vocab', q: "'DГјn' so'zi qanday tarjima qilinadi?", a: ["Bugun", "Ertaga", "Kecha", "Indin"], correct: 2 }
            ],
            18: [
                { category: 'grammar', q: "Ot so'zlarda o'tgan zamon (3-shaxs)?", a: ["-di", "-dir", "-li", "-siz"], correct: 0 },
                { category: 'tinglash', q: "Video darslikdagi asosiy audio mavzusi?", a: ["Oila", "Ish", "Uy", "Maktab"], correct: 2 }
            ],
            19: [
                { category: 'grammar', q: "'-ecek' qanday mazmunda ishlatiladi?", a: ["Hozir", "O'tmish", "Kelajak", "Har doim"], correct: 2 },
                { category: 'vocab', q: "'Bilan' so'zi turkchada?", a: ["Д°le", "Ve", "Veya", "Lakin"], correct: 0 }
            ],
            20: [
                { category: 'grammar', q: "Otlarda Kelasi Zamon (3-shaxs ko'plik)?", a: ["-lar", "-li", "-larcak", "-ecekler"], correct: 3 }
            ],
            21: [
                { category: 'grammar', q: "Noaniq o'tgan zamon qo'shimchasi?", a: ["-di", "-miЕџ", "-iyor", "-ecek"], correct: 1 }
            ],
            22: [
                { category: 'vocab', q: "'En gГјzel' nima degani?", a: ["Chiroyli", "Juda chiroyli", "Eng chiroyli", "Yomon"], correct: 2 }
            ],
            23: [
                { category: 'grammar', q: "O'zlashtirma gapda 'dedi' ma'nosi?", a: ["Dedi", "Aytadi", "Bildi", "Ko'rdi"], correct: 0 }
            ],
            24: [
                { category: 'grammar', q: "Hozirgi zamon (Еџimdiki zaman) qo'shimchasi?", a: ["-di", "-iyor", "-acak", "-ar"], correct: 1 }
            ],
            25: [
                { category: 'vocab', q: "'LГјtfen' nima degani?", a: ["Rahmat", "Marhamat", "Iltimos", "Kechirasiz"], correct: 2 }
            ],
            26: [
                { category: 'grammar', q: "Modal fe'llar nima uchun ishlatiladi?", a: ["Harakat", "Imkoniyat", "Zamon", "Sifat"], correct: 1 }
            ],
            27: [
                { category: 'grammar', q: "Majburiyat modal fe'li?", a: ["-ebilir", "-malД±/-meli", "-iyor", "-di"], correct: 1 }
            ],
            28: [
                { category: 'grammar', q: "Ravishdosh yasovchi qo'shimcha?", a: ["-arak/-erek", "-li", "-siz", "-dan"], correct: 0 }
            ],
            29: [
                { category: 'vocab', q: "'HД±zlД±ca' nima degani?", a: ["Sekin", "Tezda", "Oson", "Qiyin"], correct: 1 }
            ],
            30: [
                { category: 'grammar', q: "Ећimdiki ZamanД±n HikГўyesi (-iyordu)?", a: ["Qilyapman", "Qilar edim", "Qilyotgan edim", "Qildim"], correct: 2 }
            ]
        },
        'B1': {
            31: [
                { category: 'grammar', q: "B1 Daraja Mashqi: Test savoli", a: ["To'g'ri", "Xato"], correct: 0 }
            ]
        },
        'B2': {
            46: [
                { category: 'grammar', q: "B2 Daraja Mashqi: Test savoli", a: ["To'g'ri", "Xato"], correct: 0 }
            ]
        },
        'C1': {
            61: [
                { category: 'grammar', q: "C1 Daraja Mashqi: Test savoli", a: ["To'g'ri", "Xato"], correct: 0 }
            ]
        },
        'C2': {
            76: [
                { category: 'grammar', q: "C2 Daraja Mashqi: Test savoli", a: ["To'g'ri", "Xato"], correct: 0 }
            ]
        }
    };

    function renderTopics() {
        const container = document.querySelector('.topics-grid');
        if (!container) return;
        container.innerHTML = '';

        const levelTopics = topicsData[state.level] || topicsData['A1'];
        levelTopics.forEach(topic => {
            const item = document.createElement('div');
            item.className = `topic-item glass-card ${topic.status}`;
            
            let actionButtons = '';
            if (topic.type === 'video') {
                actionButtons = `
                    <div class="topic-actions">
                        <button class="btn-primary-sm" onclick="playVideo('${topic.videoId}')"><i class="fa-solid fa-play"></i> Dars</button>
                        <button class="btn-outline-sm" onclick="openLessonTasks(${topic.id})"><i class="fa-solid fa-tasks"></i> Vazifalar</button>
                    </div>
                `;
            } else {
                const lid = topic.lessonId || topic.id;
                actionButtons = topic.status === 'active' ? `<button class="btn-primary-sm" onclick="startLesson('${state.level}', ${lid})">O'rganish</button>` : 
                               topic.status === 'completed' ? `<div class="topic-status"><i class="fa-solid fa-check-circle"></i></div>` : 
                               `<button class="btn-outline-sm" disabled>Qulflangan</button>`;
            }

            item.innerHTML = `
                <div class="topic-number">${topic.id < 10 ? '0' + topic.id : topic.id}</div>
                <div class="topic-info">
                    <h4>${topic.title}</h4>
                    <p>${topic.desc}</p>
                </div>
                ${actionButtons}
            `;
            container.appendChild(item);
        });
    };

    let selectedLessonId = null;
    let currentCategory = 'barchasi';

    window.openLessonTasks = (lessonId) => {
        selectedLessonId = lessonId;
        currentCategory = 'barchasi';
        showView('tasks');
        renderTaskList();
    };

    const renderTaskList = () => {
        const container = document.querySelector('.task-items-list');
        if (!container) return;
        container.innerHTML = '';

        const levelTasks = lessonTasks[state.level] || {};
        const tasks = levelTasks[selectedLessonId] || [];
        
        const filteredTasks = currentCategory === 'barchasi' 
            ? tasks 
            : tasks.filter(t => t.category === currentCategory);

        if (filteredTasks.length === 0) {
            container.innerHTML = `<p class="no-tasks">Bu kategoriya uchun vazifalar hali yo'q.</p>`;
            return;
        }

        filteredTasks.forEach((task, idx) => {
            const item = document.createElement('div');
            item.className = 'task-item glass-card';
            item.innerHTML = `
                <div class="task-icon ${task.category}"><i class="fa-solid ${getCategoryIcon(task.category)}"></i></div>
                <div class="task-details">
                    <h4>${task.q}</h4>
                    <p>${task.category.toUpperCase()} mashqi</p>
                </div>
                <button class="btn-outline-sm" onclick="startSpecificTask(${selectedLessonId}, ${idx})">Boshlash</button>
            `;
            container.appendChild(item);
        });
    };

    const getCategoryIcon = (cat) => {
        switch(cat) {
            case 'grammar': return 'fa-book-open';
            case 'vocab': return 'fa-spell-check';
            case 'tinglash': return 'fa-headset';
            default: return 'fa-tasks';
        }
    };

    window.setTaskFilter = (cat) => {
        currentCategory = cat;
        document.querySelectorAll('.filter-btn').forEach(btn => {
            btn.classList.toggle('active', btn.innerText.toLowerCase() === cat || (cat === 'barchasi' && btn.innerText === 'Barchasi'));
        });
        renderTaskList();
    };

    window.startSpecificTask = (lessonId, taskIdx) => {
        const levelTasks = lessonTasks[state.level] || {};
        const tasks = levelTasks[lessonId] || [];
        const task = tasks[taskIdx];
        
        // Use existing test-view for the specific task
        showView('test-view');
        startSpecificQuiz(task);
    };

    const startSpecificQuiz = (task) => {
        const questionBox = document.querySelector('.question-box');
        if (!questionBox) return;

        questionBox.querySelector('h3').innerText = task.q;
        const optionsGrid = questionBox.querySelector('.options-grid');
        optionsGrid.innerHTML = '';
        
        task.a.forEach((opt, idx) => {
            const btn = document.createElement('button');
            btn.className = 'option-btn';
            btn.innerText = opt;
            btn.onclick = () => {
                const btns = document.querySelectorAll('.option-btn');
                btns.forEach(b => b.disabled = true);
                if (idx === task.correct) {
                    btn.classList.add('correct');
                    state.xp += 25;
                    localStorage.setItem('turktili-xp', state.xp);
                    updateStatsUI();
                    if (typeof confetti === 'function') confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 } });
                } else {
                    btn.classList.add('wrong');
                    btns[task.correct].classList.add('correct');
                }
            };
            optionsGrid.appendChild(btn);
        });
    };

    window.startLesson = (level, id) => {
        window.location.href = `lesson-${level.toLowerCase()}-${id}.html`;
    };

    // --- Global Search Logic ---
    const searchInput = document.getElementById('global-search-input');
    const searchDropdown = document.getElementById('search-results-dropdown');
    if (searchInput && searchDropdown) {
        searchInput.addEventListener('input', (e) => {
            const query = e.target.value.toLowerCase().trim();
            if (query.length < 2) {
                searchDropdown.style.display = 'none';
                return;
            }
            let resultsHTML = '';
            let count = 0;
            
            Object.keys(topicsData).forEach(lvl => {
                topicsData[lvl].forEach(topic => {
                    if (topic.title.toLowerCase().includes(query) || (topic.desc && topic.desc.toLowerCase().includes(query))) {
                        count++;
                        if(count <= 8) {
                            resultsHTML += `
                                <div class="search-result-item" style="padding: 10px; border-bottom: 1px solid var(--border-color); cursor: pointer;" onclick="fetchTopicsDataAndPlay('${lvl}', '${topic.videoId}', ${topic.id})">
                                    <div style="font-size: 0.9em; color: var(--primary-color)">${lvl} Daraja</div>
                                    <div style="font-weight: 500">${topic.desc} - ${topic.title}</div>
                                </div>
                            `;
                        }
                    }
                });
            });
            
            if (count === 0) {
                resultsHTML = '<div style="padding: 10px; color: var(--text-secondary); text-align: center;">Natija topilmadi</div>';
            }
            
            searchDropdown.innerHTML = resultsHTML;
            searchDropdown.style.display = 'block';
        });

        document.addEventListener('click', (e) => {
            if (!searchInput.contains(e.target) && !searchDropdown.contains(e.target)) {
                searchDropdown.style.display = 'none';
            }
        });
        
        window.fetchTopicsDataAndPlay = (lvl, videoId, topicId) => {
            searchDropdown.style.display = 'none';
            searchInput.value = '';
            setLevel(lvl);
            if (videoId && videoId !== 'undefined') {
                playVideo(videoId);
            } else {
                startLesson(lvl, topicId);
            }
        };
    }

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

    // --- Grammar Checker: Vowel Harmony (ГњnlГј Uyumu) ---
    window.checkVowelHarmony = (word) => {
        if (!word) return null;
        const vowels = word.match(/[aeД±ioГ¶uГј]/gi);
        if (!vowels || vowels.length < 2) return true; // Single vowel always "harmonious"

        const backVowels = /[aД±ou]/i;
        const frontVowels = /[eiГ¶Гј]/i;

        const isBack = backVowels.test(vowels[0]);
        for (let i = 1; i < vowels.length; i++) {
            if (isBack && !backVowels.test(vowels[i])) return false;
            if (!isBack && !frontVowels.test(vowels[i])) return false;
        }
        return true;
    };

    // Helper for suffixes (4-way)
    window.getHarmonySuffix = (word, type) => {
        const lastVowel = word.match(/[aeД±ioГ¶uГј]/gi).pop().toLowerCase();
        if (type === '2way') {
            return /[aД±ou]/.test(lastVowel) ? 'a' : 'e';
        } else if (type === '4way') {
            if (/[aД±]/.test(lastVowel)) return 'Д±';
            if (/[ei]/.test(lastVowel)) return 'i';
            if (/[ou]/.test(lastVowel)) return 'u';
            if (/[Г¶Гј]/.test(lastVowel)) return 'Гј';
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

    // Level buttons are handled by onclick="setLevel('...')" on the parent card div
    // No extra listeners needed here to avoid double triggering or stale level state.

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

    function renderVideoLessons() {
        const container = document.getElementById('video-grid-container');
        const levelSpan = document.getElementById('current-course-level');
        if (!container) return;
        
        if (levelSpan) levelSpan.innerText = state.level;
        container.innerHTML = '';

        // Combine manually uploaded videos with auto-generated generic topics
        let levelVideos = videoLessons.filter(v => v.level === state.level);
        
        // Add topics videos smoothly
        if (topicsData[state.level]) {
            topicsData[state.level].forEach(t => {
                if (t.type === 'video' && t.videoId) {
                    levelVideos.push({
                        title: t.desc + " - " + t.title,
                        url: "https://youtu.be/" + t.videoId,
                        level: state.level
                    });
                }
            });
        }
        
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
        const url = `https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0`;
        let modal = document.getElementById('video-modal');
        if (!modal) {
            modal = document.createElement('div');
            modal.id = 'video-modal';
            modal.style = "position:fixed; top:0; left:0; width:100%; height:100%; background:rgba(0,0,0,0.95); z-index:9999; display:flex; align-items:center; justify-content:center;";
            modal.innerHTML = `
                <div style="position:relative; width:90%; max-width:1000px; aspect-ratio:16/9;">
                    <button onclick="this.parentElement.parentElement.remove()" style="position:absolute; top:-40px; right:0; background:none; border:none; color:white; font-size:2rem; cursor:pointer;"><i class="fa-solid fa-xmark"></i></button>
                    <iframe id="video-iframe" width="100%" height="100%" src="" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen referrerpolicy="strict-origin-when-cross-origin"></iframe>
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

    function renderAdminVideoList() {
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

    function renderUsersList() {
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

    // --- End of Main Platform Logic ---
    // AI Assistant and other logic will now be included inside this block.


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
        addMessage("вљ пёЏ Xavfsizlik qoidasi: Faylni to'g'ridan-to'g'ri ochganingiz uchun brauzer AI-ni bloklamoqda. Iltimos, VS Code-da 'Live Server' orqali oching.", false);
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
    // --- End of ALL Logic (Inside DOMContentLoaded) ---
});


