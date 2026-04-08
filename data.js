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

window.topicsData = {
    'A1': [
        { id: 1, title: "Turk tili alifbosi", desc: "1-dars | Video darslik", status: "active", type: "video", videoId: "CkwEedkE4Zo" },
        { id: 2, title: "Olmoshlar va qo'shimchalar", desc: "2-dars | Video darslik", status: "active", type: "video", videoId: "S7cd1hoT1Ek" },
        { id: 3, title: "Tanishuv darsi", desc: "3-dars | Video darslik", status: "active", type: "video", videoId: "CkwEedkE4Zo" },
        { id: 10, title: "Sifatlar", desc: "10-dars | Video darslik", status: "active", type: "video", videoId: "CkwEedkE4Zo" }
    ],
    'A2': [
        { id: 16, title: "Isim C\u00FCmleleri", desc: "16-dars | Video darslik", status: "active", type: "video", videoId: "dvynHnBsmFo" },
        { id: 17, title: "Var / Yok", desc: "17-dars | Video darslik", status: "active", type: "video", videoId: "dvynHnBsmFo" },
        { id: 18, title: "Sahiplik", desc: "18-dars | Video darslik", status: "active", type: "video", videoId: "dvynHnBsmFo" },
        { id: 30, title: "\u015Eimdiki Zaman\u0131n Hik\u00E2yesi", desc: "30-dars | Video darslik", status: "active", type: "video", videoId: "j5t4wZ5qfFU" }
    ],
    'B1': [
        { id: 31, title: "B1 Daraja: O'rta", desc: "31-dars | Video darslik", status: "active", type: "video", videoId: "CkwEedkE4Zo" },
        { id: 45, title: "B1 Daraja: O'rta", desc: "45-dars | Video darslik", status: "active", type: "video", videoId: "CkwEedkE4Zo" }
    ],
    'B2': [
        { id: 46, title: "B2 Daraja: Yuqori o'rta", desc: "46-dars | Video darslik", status: "active", type: "video", videoId: "S7cd1hoT1Ek" },
        { id: 60, title: "B2 Daraja: Yuqori o'rta", desc: "60-dars | Video darslik", status: "active", type: "video", videoId: "S7cd1hoT1Ek" }
    ],
    'C1': [
        { id: 61, title: "C1 Daraja: Mukammal", desc: "61-dars | Video darslik", status: "active", type: "video", videoId: "8C8y_Z33Rt8" },
        { id: 75, title: "C1 Daraja: Mukammal", desc: "75-dars | Video darslik", status: "active", type: "video", videoId: "8C8y_Z33Rt8" }
    ],
    'C2': [
        { id: 76, title: "C2 Daraja: Professional", desc: "76-dars | Video darslik", status: "active", type: "video", videoId: "v3iRuqE78qo" },
        { id: 90, title: "C2 Daraja: Professional", desc: "90-dars | Video darslik", status: "active", type: "video", videoId: "v3iRuqE78qo" }
    ]
};

window.lessonTasks = {
    'A1': {
        1: [ { q: "Turk alifbosida nechta harf bor?", a: ["29", "26", "32", "28"], correct: 0 } ]
    }
};
