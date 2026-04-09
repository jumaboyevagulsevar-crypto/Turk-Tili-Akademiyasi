/**
 * Turk Tili Akademiyasi - Curriculum Data
 * This file contains all lesson topics, vocabulary, and quizzes.
 * All special characters are Unicode-escaped for maximum compatibility.
 */

window.vocabulary = [
    { tr: "Selam", uz: "Salom", lvl: "A1" },
    { tr: "G\u00FCnayd\u0131n", uz: "Xayrli tong", lvl: "A1" },
    { tr: "Nas\u0131ls\u0131n?", uz: "Yaxshimisiz?", lvl: "A1" },
    { tr: "Te\u015Fekk\u00FCr ederim", uz: "Rahmat", lvl: "A1" },
    { tr: "G\u00F6r\u00FC\u015F\u00FCr\u00FCz", uz: "Ko'rishguncha", lvl: "A1" },
    { tr: "\u0130yi ak\u015Famlar", uz: "Xayrli kech", lvl: "A1" },
    { tr: "Anlad\u0131m", uz: "Tushundim", lvl: "A2" },
    { tr: "Bilmiyorum", uz: "Bilmayman", lvl: "A2" },
    { tr: "Yard\u0131m et", uz: "Yordam bering", lvl: "A2" },
    { tr: "Mutluyum", uz: "Baxtliman", lvl: "A2" },
    { tr: "\u015Eehir", uz: "Shahar", lvl: "A2" },
    { tr: "Gelecek", uz: "Kelajak", lvl: "B1" },
    { tr: "D\u00FC\u015F\u00FCnce", uz: "Fikr", lvl: "B1" },
    { tr: "M\u00FCmk\u00FCn", uz: "Iloji bor", lvl: "B1" },
    { tr: "Karar", uz: "Qaror", lvl: "B1" },
    { tr: "Zorunlu", uz: "Majburiy", lvl: "B1" },
    { tr: "\u00D6zellikle", uz: "Ayniqsa", lvl: "B2" },
    { tr: "Ba\u015Far\u0131", uz: "Muvaffaqiyat", lvl: "B2" },
    { tr: "Tecr\u00FCbe", uz: "Tajriba", lvl: "B2" },
    { tr: "Geli\u015Fim", uz: "Rivojlanish", lvl: "B2" },
    { tr: "F\u0131rsat", uz: "Imkoniyat", lvl: "B2" },
    { tr: "Kavram", uz: "Tushuncha", lvl: "C1" },
    { tr: "Ele\u015Ftiri", uz: "Tanqid", lvl: "C1" },
    { tr: "Mant\u0131kl\u0131", uz: "Mantiqli", lvl: "C1" },
    { tr: "Felsefe", uz: "Falsafa", lvl: "C2" },
    { tr: "Edebiyat", uz: "Adabiyot", lvl: "C2" },
    { tr: "Paradoks", uz: "Paradoks", lvl: "C2" },
    { tr: "Medeniyet", uz: "Sivilizatsiya", lvl: "C2" },
    { tr: "Gelenek", uz: "An'ana", lvl: "C2" }
];

window.quizData = {
    'A1': [
        { q: "\"Selam\" so'zi qanday tarjima qilinadi?", a: ["Salom", "Xayr", "Rahmat", "Yo'q"], correct: 0 },
        { q: "Turk tilida \"Xayrli tong\" nima deyiladi?", a: ["\u0130yi ak\u015Famlar", "G\u00FCnayd\u0131n", "Merhaba", "G\u00F6r\u00FC\u015F\u00FCr\u00FCz"], correct: 1 }
    ],
    'A2': [
        { q: "Kelajak zamon qo'shimchasi?", a: ["-iyor", "-ecek", "-mi\u015F", "-di"], correct: 1 }
    ],
    'B1': [
        { q: "\"Okuyordum\" so'zining ma'nosi?", a: ["O'qiyapman", "O'qirdim", "O'qiyman", "O'qidim"], correct: 1 }
    ],
    'B2': [
        { q: "Belirsiz Ge\u00E7mi\u015F Zaman qo'shimchasi?", a: ["-di", "-iyor", "-mi\u015F", "-ar"], correct: 2 }
    ],
    'C1': [
        { q: "\u0130stek Kipi (1-shaxs ko'plik)?", a: ["Bakal\u0131m", "Bak\u0131yoruz", "Bakt\u0131k", "Bakaca\u011F\u0131z"], correct: 0 }
    ],
    'C2': [
        { q: "Akademik tilda 'Tez' so'zining sinonimi?", a: ["\u00E7abuk", "H\u0131zl\u0131", "\u0130vedilikle", "Hemen"], correct: 2 }
    ]
};

window.topicsData = {};
(function() {
    const levels = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'];
    const vids = {
        'A1': ['CkwEedkE4Zo', 'S7cd1hoT1Ek', 'v3iRuqE78qo'],
        'A2': ['dvynHnBsmFo', 'j5t4wZ5qfFU', '8C8y_Z33Rt8'],
        'B1': ['CkwEedkE4Zo', 'S7cd1hoT1Ek', 'v3iRuqE78qo'],
        'B2': ['S7cd1hoT1Ek', '8C8y_Z33Rt8', 'dvynHnBsmFo'],
        'C1': ['8C8y_Z33Rt8', 'v3iRuqE78qo', 'CkwEedkE4Zo'],
        'C2': ['v3iRuqE78qo', 'CkwEedkE4Zo', 'S7cd1hoT1Ek']
    };
    let gId = 1;
    levels.forEach(lvl => {
        window.topicsData[lvl] = [];
        for(let i = 1; i <= 15; i++) {
            window.topicsData[lvl].push({
                id: gId++,
                title: `${lvl} kursi - ${i}-dars`,
                desc: `${lvl} darajasi malakaviy video darsi`,
                status: "active",
                type: "video",
                videoId: vids[lvl][i % 3]
            });
        }
    });
})();

window.lessonTasks = {
    'A1': {
        1: [ { q: "Turk alifbosida nechta harf bor?", a: ["29", "26", "32", "28"], correct: 0 } ]
    }
};
