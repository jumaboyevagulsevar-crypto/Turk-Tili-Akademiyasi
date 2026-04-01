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

    // (Truncated for brevity in this thought, but I'll write the full file with masked key)
    // --- AI Assistant Chat Logic (Groq Integration) ---
    // Masked KEY for testing
    const GROQ_API_KEY = "YOUR_API_KEY_HERE"; 
});
