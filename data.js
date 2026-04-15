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
    levels.forEach(lvl => {
        window.topicsData[lvl] = [];
        let levelId = 1;
        for(let i = 1; i <= 15; i++) {
            window.topicsData[lvl].push({
                id: levelId++,
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
        1: [
            { q: "Turk alifbosida nechta harf bor?", a: ["29", "26", "32", "28"], correct: 0 },
            { q: "\"Merhaba\" nima degani?", a: ["Xayr", "Salom", "Rahmat", "Ertalab"], correct: 1 },
            { q: "\"Selam\" so'zining o'zbekcha tarjimasi?", a: ["Xayr", "Kechirasiz", "Salom", "Yaxshiman"], correct: 2 },
            { q: "Xayrli tong turkchada qanday bo'ladi?", a: ["İyi akşamlar", "Günaydın", "İyi geceler", "Merhaba"], correct: 1 },
            { q: "\"Nasılsın?\" savoliga qanday javob beriladi?", a: ["Güle güle", "Günaydın", "İyiyim, teşekkür ederim", "Görüşürüz"], correct: 2 },
            { q: "\"Memnun oldum\" nima degani?", a: ["Tanishganimdan xursandman", "Yaxshi qol", "Salom", "Kechirasiz"], correct: 0 },
            { q: "\"Teşekkür ederim\" - ?", a: ["Rahmat", "Arzimaydi", "Iltimos", "Xayr"], correct: 0 },
            { q: "Isming nima? - Turkchada?", a: ["Nasılsın?", "Adın ne?", "Nerelisin?", "Kaç yaşındasın?"], correct: 1 },
            { q: "\"Hoş geldiniz\" ga qanday javob beriladi?", a: ["Güle güle", "Merhaba", "Hoş bulduk", "Günaydın"], correct: 2 },
            { q: "\"Görüşürüz\" ma'nosi?", a: ["Salom", "Xayrli kun", "Ko'rishguncha", "Xayr"], correct: 2 }
        ],
        2: [
            { q: "\"Ben\" olmoshi nima degani?", a: ["Sen", "U", "Men", "Biz"], correct: 2 },
            { q: "\"Biz\" turkchada nimani anglatadi?", a: ["Siz", "Ular", "Biz", "Men"], correct: 2 },
            { q: "\"Onlar\" olmoshi?", a: ["Biz", "Siz", "Ular", "U"], correct: 2 },
            { q: "\"Sen\" - ?", a: ["Siz", "U", "Sen", "Men"], correct: 2 },
            { q: "Turk tilida \"Siz\" nima deyiladi?", a: ["Sen", "Siz", "O", "Biz"], correct: 1 },
            { q: "\"O\" olmoshi nima degani?", a: ["U", "Men", "Sen", "Biz"], correct: 0 },
            { q: "\"Öğrenci\" nima degani?", a: ["O'qituvchi", "O'quvchi", "Maktab", "Kitob"], correct: 1 },
            { q: "\"Öğretmen\" - ?", a: ["Dars", "O'quvchi", "O'qituvchi", "Sinf"], correct: 2 },
            { q: "Turk tilida \"Ha\" nima deyiladi?", a: ["Hayır", "Belki", "Evet", "Yok"], correct: 2 },
            { q: "\"Hayır\" - ?", a: ["Ha", "Yo'q", "Rahmat", "Salom"], correct: 1 }
        ],
        3: [
            { q: "\"Kalem\" so'zining tarjimasi?", a: ["Kitob", "Daftar", "Ruchka/Qalam", "O'chirg'ich"], correct: 2 },
            { q: "\"Kitap\" - ?", a: ["Sinf", "Kitob", "Papka", "Qog'oz"], correct: 1 },
            { q: "\"Masa\" nima degani?", a: ["Stul", "Shkaf", "Stol", "Oyna"], correct: 2 },
            { q: "\"Okul\" - ?", a: ["Uy", "Bog'", "Maktab", "Shahar"], correct: 2 },
            { q: "\"Sınıf\" nima degani?", a: ["Darslik", "Sinf", "Maktab", "O'quvchi"], correct: 1 },
            { q: "Turk tilida \"Stul\" nima deyiladi?", a: ["Masa", "Sandalye", "Koltuk", "Yatak"], correct: 1 },
            { q: "\"Kapı\" - ?", a: ["Deraza", "Eshik", "Devor", "Tom"], correct: 1 },
            { q: "\"Pencere\" nima degani?", a: ["Deraza", "Eshik", "Ko'cha", "Hovli"], correct: 0 },
            { q: "\"Defter\" - ?", a: ["Kitob", "Daftar", "Qalam", "Siyoh"], correct: 1 },
            { q: "\"Silgi\" nima degani?", a: ["Qaychi", "Chizg'ich", "O'chirg'ich", "Yelim"], correct: 2 }
        ],
        4: [
            { q: "\"Elma\" - ?", a: ["Nok", "Olma", "Uzum", "Anor"], correct: 1 },
            { q: "\"Ekmek\" nima degani?", a: ["Suv", "Sut", "Non", "Choy"], correct: 2 },
            { q: "\"Su\" - ?", a: ["Suv", "Sharbat", "Qahva", "Sut"], correct: 0 },
            { q: "Turk tilida \"Choy\" nima deyiladi?", a: ["Kahve", "Çay", "Süt", "Ayran"], correct: 1 },
            { q: "\"Süt\" nima degani?", a: ["Qatiq", "Sut", "Pishloq", "Yog'"], correct: 1 },
            { q: "\"Peynir\" - ?", a: ["Go'sht", "Tuxum", "Pishloq", "Non"], correct: 2 },
            { q: "\"Zeytin\" nima degani?", a: ["Yong'oq", "Zaytun", "Bodom", "Pista"], correct: 1 },
            { q: "\"Yumurta\" - ?", a: ["Tuxum", "Go'sht", "Baliq", "Tovuq"], correct: 0 },
            { q: "\"Kahvaltı\" nima degani?", a: ["Tushlik", "Kechki ovqat", "Nonushta", "Choyxo'rlik"], correct: 2 },
            { q: "\"Yemek\" - ?", a: ["Ichish", "Ovqat", "Uxlash", "O'ynash"], correct: 1 }
        ],
        5: [
            { q: "\"Anne\" - ?", a: ["Dada", "Ona", "Buvijon", "Xola"], correct: 1 },
            { q: "\"Baba\" nima degani?", a: ["Dada", "Amaki", "Tog'a", "Bobo"], correct: 0 },
            { q: "\"Kardeş\" - ?", a: ["Aka/Uka/Opa/Singil", "Do'st", "Qo'shni", "Dushman"], correct: 0 },
            { q: "\"Abla\" nima degani?", a: ["Singil", "Opa", "Aka", "Uka"], correct: 1 },
            { q: "\"Abi\" - ?", a: ["Aka", "Uka", "Dada", "Tog'a"], correct: 0 },
            { q: "\"Dede\" nima degani?", a: ["Bobo", "Amaki", "Dada", "Kuyov"], correct: 0 },
            { q: "\"Nene\" - ?", a: ["Ona", "Xola", "Buvijon", "Amma"], correct: 2 },
            { q: "\"Amca\" - ?", a: ["Amaki", "Tog'a", "Xola", "Amma"], correct: 0 },
            { q: "\"Dayı\" - ?", a: ["Amaki", "Tog'a", "Xola", "Amma"], correct: 1 },
            { q: "\"Teyze\" - ?", a: ["Tog'a", "Amma", "Xola", "Amaki"], correct: 2 }
        ],
        6: [
            { q: "Turk tilida 1 nima deyiladi?", a: ["Bir", "İki", "Üç", "Dört"], correct: 0 },
            { q: "5 raqami turkchada?", a: ["Dört", "Beş", "Altı", "Yedi"], correct: 1 },
            { q: "10 soni - ?", a: ["Sekiz", "Dokuz", "On", "Yirmi"], correct: 2 },
            { q: "\"Sıfır\" - ?", a: ["0", "1", "10", "100"], correct: 0 },
            { q: "\"Yüz\" nima degani?", a: ["10", "100", "1000", "10000"], correct: 1 },
            { q: "20 soni?", a: ["On", "Yirmi", "Otuz", "Kırk"], correct: 1 },
            { q: "Kaç yaşındasın? - ?", a: ["Yoshing nechada?", "Isming nima?", "Qayerdansan?", "Qandaysan?"], correct: 0 },
            { q: "Turk tilida \"Qizil\" nima deyiladi?", a: ["Mavi", "Yeşil", "Kırmızı", "Sarı"], correct: 2 },
            { q: "\"Siyah\" - ?", a: ["Oq", "Qora", "Ko'k", "Sariq"], correct: 1 },
            { q: "\"Beyaz\" nima degani?", a: ["Qora", "Sariq", "Oq", "Yashil"], correct: 2 }
        ],
        7: [
            { q: "\"Bugün\" - ?", a: ["Kecha", "Bugun", "Ertaga", "Indin"], correct: 1 },
            { q: "\"Dün\" nima degani?", a: ["Bugun", "Kecha", "Ertaga", "Hozir"], correct: 1 },
            { q: "\"Yarın\" - ?", a: ["Kecha", "Ertaga", "Bugun", "Keyin"], correct: 1 },
            { q: "\"Şimdi\" nima degani?", a: ["Hozir", "Keyin", "Oldin", "Hech qachon"], correct: 0 },
            { q: "\"Sabah\" - ?", a: ["Kechqurun", "Peshin", "Ertalab", "Tun"], correct: 2 },
            { q: "\"Akşam\" nima degani?", a: ["Ertalab", "Kechqurun", "Kun", "Hafta"], correct: 1 },
            { q: "\"Gece\" - ?", a: ["Kun", "Tun", "Yil", "Oy"], correct: 1 },
            { q: "\"Hafta\" - ?", a: ["Yil", "Hafta", "Kun", "Daqiqa"], correct: 1 },
            { q: "\"Ay\" nima degani?", a: ["Oy", "Yil", "Kun", "Hafta"], correct: 0 },
            { q: "\"Yıl\" - ?", a: ["Oy", "Yil", "Hafta", "Kun"], correct: 1 }
        ],
        8: [
            { q: "Hozirgi zamon qo'shimchasi?", a: ["-di", "-iyor", "-ecek", "-ar"], correct: 1 },
            { q: "\"Geliyorum\" nima degani?", a: ["Kelyapman", "Keldim", "Kelaman", "Kelyapsan"], correct: 0 },
            { q: "\"Gidiyoruz\" - ?", a: ["Ketyapmiz", "Keting", "Ketdik", "Ketyapsiz"], correct: 0 },
            { q: "\"Okuyor\" - ?", a: ["O'qiyapman", "O'qiyapti", "O'qiyapdilar", "O'qiyapsiz"], correct: 1 },
            { q: "\"Seviyorum\" nima degani?", a: ["Yomon ko'raman", "Yaxshi ko'raman", "Bilaman", "Xohlayman"], correct: 1 },
            { q: "\"İstiyorum\" - ?", a: ["Bilaman", "Xohlayman", "O'ylayman", "Qilaman"], correct: 1 },
            { q: "\"Biliyorum\" nima degani?", a: ["Bilaman", "Tushunaman", "Gapiraman", "Eshitaman"], correct: 0 },
            { q: "\"Anlıyorum\" - ?", a: ["Bilaman", "Tushunyapman", "Ko'ryapman", "O'qiyapman"], correct: 1 },
            { q: "\"Görüyorum\" nima degani?", a: ["Eshityapman", "Ko'ryapman", "Ketyapman", "Kelyapman"], correct: 1 },
            { q: "\"Konuşuyorum\" - ?", a: ["Gapinyapman", "Gapiryapman", "Jimman", "Eshityapman"], correct: 1 }
        ],
        9: [
            { q: "Turk tilida \"Mening\" nima bo'ladi?", a: ["Senin", "Benim", "Onun", "Bizim"], correct: 1 },
            { q: "\"Senin\" so'zining tarjimasi?", a: ["Mening", "Sening", "Uning", "Bizning"], correct: 1 },
            { q: "\"Onun\" - ?", a: ["Bizning", "Uning", "Sizning", "Ularning"], correct: 1 },
            { q: "\"Bizim\" nima degani?", a: ["Mening", "Sening", "Bizning", "Uning"], correct: 2 },
            { q: "\"Sizin\" - ?", a: ["Sizning", "Bizning", "Ularning", "Mening"], correct: 0 },
            { q: "\"Onların\" nima degani?", a: ["Ularning", "Sizning", "Bizning", "Uning"], correct: 0 },
            { q: "Mening ismim - ?", a: ["Benim adım", "Senin adın", "Onun adı", "Bizim adımız"], correct: 0 },
            { q: "Sening uying - ?", a: ["Benim evim", "Senin evin", "Onun evi", "Sizin eviniz"], correct: 1 },
            { q: "Uning kitobi - ?", a: ["Onun kitabı", "Benim kitabım", "Sizin kitabınız", "Senin kitabın"], correct: 0 },
            { q: "Bizning maktabimiz - ?", a: ["Okulumuz", "Okulum", "Okulun", "Okulu"], correct: 0 }
        ],
        10: [
            { q: "\"Nerede?\" nima degani?", a: ["Qachon?", "Qayerda?", "Nima uchun?", "Qanday?"], correct: 1 },
            { q: "\"Nasıl?\" - ?", a: ["Qanday?", "Qancha?", "Qayerda?", "Kim?"], correct: 0 },
            { q: "\"Niçin?\" nima degani?", a: ["Nima uchun?", "Qachon?", "Qancha?", "Qayerda?"], correct: 0 },
            { q: "\"Kim?\" - ?", a: ["Nima?", "Qachon?", "Kim?", "Qayerda?"], correct: 2 },
            { q: "\"Ne?\" nima degani?", a: ["Kim?", "Nima?", "Qanday?", "Qachon?"], correct: 1 },
            { q: "\"Kaç?\" - ?", a: ["Qanday?", "Qayerda?", "Nechta/Qancha?", "Nima?"], correct: 2 },
            { q: "\"Ne zaman?\" nima degani?", a: ["Qachon?", "Qayerda?", "Kim?", "Nima uchun?"], correct: 0 },
            { q: "\"Hangi?\" - ?", a: ["Qaysi?", "Kim?", "Nima?", "Qancha?"], correct: 0 },
            { q: "\"Nereye?\" nima degani?", a: ["Qayerga?", "Qayerdan?", "Qayerda?", "Kimga?"], correct: 0 },
            { q: "\"Nereden?\" - ?", a: ["Qayerdan?", "Qayerda?", "Qayerga?", "Kimdan?"], correct: 0 }
        ],
        11: [
            { q: "Chiqish kelishigi qo'shimchasi?", a: ["-de", "-den", "-e", "-i"], correct: 1 },
            { q: "Jo'nalish kelishigi qo'shimchasi?", a: ["-den", "-e/-a", "-de", "-i"], correct: 1 },
            { q: "O'rin-payt kelishigi qo'shimchasi?", a: ["-den", "-e", "-de/-da", "-i"], correct: 2 },
            { q: "Tushum kelishigi qo'shimchasi?", a: ["-den", "-e", "-de", "-i/-ı/-u/-ü"], correct: 3 },
            { q: "Evde - ?", a: ["Uydan", "Uyga", "Uyda", "Uyni"], correct: 2 },
            { q: "Okuldan - ?", a: ["Maktabga", "Maktabdan", "Maktabda", "Maktabni"], correct: 1 },
            { q: "Ankara'ya - ?", a: ["Anqaradan", "Anqarada", "Anqaraga", "Anqarani"], correct: 2 },
            { q: "Kitabı - ?", a: ["Kitobga", "Kitobdan", "Kitobda", "Kitobni"], correct: 3 },
            { q: "İşten - ?", a: ["Ishga", "Ishdan", "Ishda", "Ishni"], correct: 1 },
            { q: "Sokakta - ?", a: ["Ko'chada", "Ko'chaga", "Ko'chadan", "Ko'chani"], correct: 0 }
        ],
        12: [
            { q: "\"Gitmek\" nima degani?", a: ["Kelmoq", "Ketmoq", "O'tirmoq", "Uxlamoq"], correct: 1 },
            { q: "\"Gelmek\" - ?", a: ["Chiqmoq", "Kirmoq", "Kelmoq", "Ketmoq"], correct: 2 },
            { q: "\"Okumak\" nima degani?", a: ["Yozmoq", "O'qimoq", "Tinglamoq", "Gapirmoq"], correct: 1 },
            { q: "\"Yazmak\" - ?", a: ["O'qimoq", "Yozmoq", "Chizmoq", "Bo'yamoq"], correct: 1 },
            { q: "\"Uyumak\" nima degani?", a: ["Uyg'onmoq", "Uxlamoq", "Yugurmoq", "Yurmoq"], correct: 1 },
            { q: "\"İçmek\" - ?", a: ["Yemoq", "Ichmoq", "Chekmoq", "Sotmoq"], correct: 1 },
            { q: "\"Yemek\" nima degani?", a: ["Ichmoq", "Yemoq", "Pishirmoq", "Yuvmoq"], correct: 1 },
            { q: "\"Bakmak\" - ?", a: ["Ko'rmoq", "Qaramoq", "Eshatmoq", "Ushlamoq"], correct: 1 },
            { q: "\"Görmek\" nima degani?", a: ["Qaramoq", "Ko'rmoq", "Topmoq", "Yo'qotmoq"], correct: 1 },
            { q: "\"Duymak\" - ?", a: ["Eshitmoq/Sezmoq", "Gapirmoq", "Kulmoq", "Yig'lamoq"], correct: 0 }
        ],
        13: [
            { q: "\"Sıcak\" - ?", a: ["Sovuq", "Issiq", "Iliq", "Muzdek"], correct: 1 },
            { q: "\"Soğuk\" nima degani?", a: ["Issiq", "Sovuq", "O'rtacha", "Dim"], correct: 1 },
            { q: "\"Güzel\" - ?", a: ["Xunuk", "Chiroyli", "Yaxshi", "Yomon"], correct: 1 },
            { q: "\"Çirkin\" nima degani?", a: ["Chiroyli", "Xunuk", "Kichik", "Katta"], correct: 1 },
            { q: "\"Büyük\" - ?", a: ["Kichik", "Katta", "Uzun", "Qisqa"], correct: 1 },
            { q: "\"Küçük\" nima degani?", a: ["Katta", "Kichik", "Tor", "Keng"], correct: 1 },
            { q: "\"Yeni\" - ?", a: ["Eski", "Yangi", "Arzon", "Qimmat"], correct: 1 },
            { q: "\"Eski\" nima degani?", a: ["Yangi", "Eski", "Toza", "Kir"], correct: 1 },
            { q: "\"Pahalı\" - ?", a: ["Arzon", "Qimmat", "Tekin", "Boy"], correct: 1 },
            { q: "\"Ucuz\" nima degani?", a: ["Qimmat", "Arzon", "Qulay", "Og'ir"], correct: 1 }
        ],
        14: [
            { q: "\"Çalışkan\" - ?", a: ["Tiridshoq", "Dangasa", "Aqlli", "Ahmoq"], correct: 0 },
            { q: "\"Tembel\" nima degani?", a: ["Ishchan", "Dangasa", "Tez", "Sekin"], correct: 1 },
            { q: "\"Mutlu\" - ?", a: ["Xafa", "Baxtli", "Asabiy", "Qo'rqoq"], correct: 1 },
            { q: "\"Üzgün\" nima degani?", a: ["Xursand", "Xafa", "Kasal", "Sog'lom"], correct: 1 },
            { q: "\"Zengin\" - ?", a: ["Kambag'al", "Boy", "Mashhur", "Oddiy"], correct: 1 },
            { q: "\"Fakir\" nima degani?", a: ["Boy", "Kambag'al", "Kuchsiz", "Kuchli"], correct: 1 },
            { q: "\"Hızlı\" - ?", a: ["Sekin", "Tez", "Yaqin", "Uzoq"], correct: 1 },
            { q: "\"Yavaş\" nima degani?", a: ["Tez", "Sekin", "Oson", "Qiyin"], correct: 1 },
            { q: "\"Zor\" - ?", a: ["Oson", "Qiyin", "Qisqa", "Uzun"], correct: 1 },
            { q: "\"Kolay\" nima degani?", a: ["Qiyin", "Oson", "Yumshoq", "Qattiq"], correct: 1 }
        ],
        15: [
            { q: "Turk tilida \"Men o'qituvchiman\"?", a: ["Ben öğretmenim", "Sen öğretmensin", "O öğretmen", "Biz öğretmeniz"], correct: 0 },
            { q: "\"Sen öğrencisin\" nima degani?", a: ["Men o'quvchiman", "Sen o'quvchisan", "U o'quvchi", "Siz o'quvchisiz"], correct: 1 },
            { q: "\"O yorgun\" - ?", a: ["Men charchadim", "U charchagan", "Siz charchadingiz", "Ular charchashdi"], correct: 1 },
            { q: "\"Biz açız\" nima degani?", a: ["Siz ochsiz", "Biz ochmiz", "Ular och", "Men ochman"], correct: 1 },
            { q: "\"Siz çalışkansınız\" - ?", a: ["Siz tirishqoqsiz", "Biz tirishqoqmiz", "Ular tirishqoq", "Sen tirishqoqsan"], correct: 0 },
            { q: "\"Onlar burada\" nima degani?", a: ["Biz shu yerdamiz", "Ular shu yerda", "Siz shu yerdasiz", "U shu yerda"], correct: 1 },
            { q: "\"Ben hastayım\" - ?", a: ["Siz kasalsiz", "Men kasalman", "U kasal", "Biz kasalmi"], correct: 1 },
            { q: "\"Mutlu musun?\" savoliga qanday javob beriladi?", a: ["Evet, mutluyum", "Hayır, gelmiyorum", "Evet, gidiyorum", "Hayır, yorgunum"], correct: 0 },
            { q: "Inkor shakli: \"Ben doktor değilim\" - ?", a: ["Men doktorman", "Men doktor emasman", "Siz doktormiz", "U doktor emas"], correct: 1 },
            { q: "\"Nerelisin?\" savolining ma'nosi?", a: ["Isming nima?", "Qayerdansan?", "Qayerdasan?", "Yoshing nechada?"], correct: 1 }
        ]
    },
    'A2': {
        1: [
            { q: "O'tgan zamon qo'shimchasi?", a: ["-iyor", "-ecek", "-di/-dı/-du/-dü", "-ar"], correct: 2 },
            { q: "\"Gittim\" nima degani?", a: ["Kelyapman", "Ketdim", "Ketaman", "Ketyapman"], correct: 1 },
            { q: "\"Geldin\" - ?", a: ["Kelding", "Keldingiz", "Keldik", "Keldi"], correct: 0 },
            { q: "\"Okudu\" nima degani?", a: ["O'qidim", "O'qiding", "O'qidi", "O'qidik"], correct: 2 },
            { q: "\"Yazdık\" - ?", a: ["Yozdim", "Yozding", "Yozdik", "Yozdilar"], correct: 2 },
            { q: "\"Uyudunuz\" nima degani?", a: ["Uxladim", "Uxladilar", "Uxloq", "Uxlandingiz"], correct: 3 },
            { q: "\"Gördüler\" - ?", a: ["Ko'rdim", "Ko'rdilar", "Ko'rdik", "Ko'rding"], correct: 1 },
            { q: "\"Baktım\" nima degani?", a: ["Qaradim", "Ko'rdim", "Eshitdim", "Yedim"], correct: 0 },
            { q: "\"Anladın mı?\" - ?", a: ["Tushundingmi?", "Bildingmi?", "Ko'rdingmi?", "Keldingmi?"], correct: 0 },
            { q: "\"Dün ne yaptın?\" savolining ma'nosi?", a: ["Bugun nima qilyapsan?", "Ertaga nima qilasan?", "Kecha nima qilding?", "Hozir nima qilyapsan?"], correct: 2 }
        ],
        2: [
            { q: "Kelajak zamon qo'shimchasi?", a: ["-iyor", "-di", "-ecek/-acak", "-miş"], correct: 2 },
            { q: "\"Gideceğim\" nima degani?", a: ["Ketyapman", "Ketaman", "Ketdim", "Ketganman"], correct: 1 },
            { q: "\"Geleceksin\" - ?", a: ["Kelasan", "Kelding", "Kelyapsan", "Kelganman"], correct: 0 },
            { q: "\"Okuyacak\" nima degani?", a: ["O'qidi", "O'qiyapti", "O'qiydi", "O'qidik"], correct: 2 },
            { q: "\"Yazacağız\" - ?", a: ["Yozdik", "Yozamiz", "Yozyapmiz", "Yozganmiz"], correct: 1 },
            { q: "\"Uyuyacaksınız\" nima degani?", a: ["Uxlayapman", "Uxlayapsiz", "Uxlaysizlar", "Uxladilar"], correct: 2 },
            { q: "\"Gülecekler\" - ?", a: ["Kulyaptilar", "Kuladilar", "Kuldilar", "Kulishdi"], correct: 1 },
            { q: "\"Yapmayacağım\" - ?", a: ["Qilmayman", "Qilyapman", "Qilmayapman", "Qilmaydim"], correct: 0 },
            { q: "\"Gelecek misin?\" - ?", a: ["Kelasanmi?", "Keldingmi?", "Kelganmisan?", "Kelyapsanmi?"], correct: 0 },
            { q: "\"Yarın ne yapacaksın?\" ma'nosi?", a: ["Kecha nima qilding?", "Bugun nima qilyapsan?", "Ertaga nima qilasan?", "Hozir nima qilasan?"], correct: 2 }
        ],
        3: [
            { q: "\"Lazım\" nima degani?", a: ["Mumkin", "Kerak", "Shart emas", "Balki"], correct: 1 },
            { q: "\"Gerek\" - ?", a: ["Kerak", "Majbur", "Oson", "Qiyin"], correct: 0 },
            { q: "\"Gitmem lazım\" nima degani?", a: ["Ketishim kerak", "Kelyapman", "Ketishim mumkin", "Ketishim shart emas"], correct: 0 },
            { q: "\"Okuman gerek\" - ?", a: ["O'qishing kerak", "O'qiding", "O'qishing mumkin", "O'qima"], correct: 0 },
            { q: "\"Mümkün\" nima degani?", a: ["Imkonsiz", "Iloji bor/Mumkin", "Kerak", "Farqi yo'q"], correct: 1 },
            { q: "\"İmkansız\" - ?", a: ["Mumkin", "Iloji yo'q/Imkonsiz", "Shart", "Muhim"], correct: 1 },
            { q: "\"Plan\" nima degani?", a: ["Vaqt", "Reja", "Joy", "Natija"], correct: 1 },
            { q: "\"Randevu\" - ?", a: ["Uchrashuv", "Dars", "Ish", "Sayohat"], correct: 0 },
            { q: "\"Erken\" nima degani?", a: ["Kech", "Erta", "Tez", "Sekin"], correct: 1 },
            { q: "\"Geç\" - ?", a: ["Erta", "Sekin", "Kech", "Yaqin"], correct: 2 }
        ],
        4: [
            { q: "Qiyosiy daraja qo'shimchasi?", a: ["En", "Daha", "Çok", "Gibi"], correct: 1 },
            { q: "Orttirma daraja qo'shimchasi?", a: ["Daha", "En", "Kadar", "Gibi"], correct: 1 },
            { q: "\"Daha büyük\" nima degani?", a: ["Kattaroq", "Eng katta", "Katta kabi", "Juda katta"], correct: 0 },
            { q: "\"En küçük\" - ?", a: ["Kichikroq", "Eng kichik", "Juda kichik", "Kichik emas"], correct: 1 },
            { q: "\"Ali, Can'dan daha uzun\" ma'nosi?", a: ["Ali va Can uzun", "Ali Candan uzunroq", "Can Alidan uzunroq", "Ikkalasi teng"], correct: 1 },
            { q: "\"Dünyanın en yüksek dağı\" - ?", a: ["Dunyodagi baland tog'", "Dunyoning eng baland tog'i", "Tog' juda baland", "Baland tog'lar ko'p"], correct: 1 },
            { q: "\"Kadar\" nima degani?", a: ["Kabi", "Gacha/Chalalik", "Keyin", "Oldin"], correct: 1 },
            { q: "\"Senin kadar çalışkan\" - ?", a: ["Senga o'xshab dangasa", "Sendek tirishqoq", "Sendan ko'ra tirishqoq", "Eng tirishqoq"], correct: 1 },
            { q: "\"Gibi\" nima degani?", a: ["Uchun", "Kabi/O'xshash", "Keyin", "Oldin"], correct: 1 },
            { q: "\"Melek gibi biri\" - ?", a: ["Farishtadek odam", "Farishtadan yaxshiroq", "Farishta emas", "Eng yaxshi farishta"], correct: 0 }
        ],
        5: [
            { q: "\"İçin\" nima degani?", a: ["Oldin", "Keyin", "Uchun", "Bilan"], correct: 2 },
            { q: "\"İle\" - ?", a: ["Uchun", "Bilan", "Kabi", "Keyin"], correct: 1 },
            { q: "\"Senin için\" nima degani?", a: ["Sen bilan", "Sen kabi", "Sen uchun", "Sendan keyin"], correct: 2 },
            { q: "\"Arabayla\" - ?", a: ["Moshinaga", "Moshina bilan", "Moshinadan", "Moshinada"], correct: 1 },
            { q: "\"Önce\" nima degani?", a: ["Keyin", "Oldin", "Hozir", "Hech qachon"], correct: 1 },
            { q: "\"Sonra\" - ?", a: ["Oldin", "Keyin", "Hozir", "Yaqinda"], correct: 1 },
            { q: "\"Dersten önce\" - ?", a: ["Darsdan keyin", "Darsdan oldin", "Dars paytida", "Darsgacha"], correct: 1 },
            { q: "\"Yemekten sonra\" - ?", a: ["Ovqatdan oldin", "Ovqatdan keyin", "Ovqat paytida", "Ovqat bilan"], correct: 1 },
            { q: "\"Beri\" nima degani?", a: ["Gacha", "Beri", "Uchun", "Kabi"], correct: 1 },
            { q: "\"Sabahtan beri\" - ?", a: ["Ertalabgacha", "Ertalabdan beri", "Ertalabda", "Ertalab uchun"], correct: 1 }
        ],
        6: [
            { q: "\"Vücut\" nima degani?", a: ["Shahar", "Tana/Badan", "Kiyim", "Uy"], correct: 1 },
            { q: "\"Baş\" - ?", a: ["Qo'l", "Oyoq", "Bosh", "Ko'z"], correct: 2 },
            { q: "\"Göz\" nima degani?", a: ["Burun", "Quloq", "Ko'z", "Og'iz"], correct: 2 },
            { q: "\"Kulak\" - ?", a: ["Qo'l", "Quloq", "Oyoq", "Bosh"], correct: 1 },
            { q: "\"Burun\" - ?", a: ["Yuz", "Burun", "Soch", "Tish"], correct: 1 },
            { q: "\"Ağız\" nima degani?", a: ["Tish", "Og'iz", "Til", "Lab"], correct: 1 },
            { q: "\"El\" - ?", a: ["Oyoq", "Qo'l", "Barmoq", "Tirsak"], correct: 1 },
            { q: "\"Ayak\" nima degani?", a: ["Qo'l", "Oyoq", "Tizza", "Yelka"], correct: 1 },
            { q: "\"Kalp\" - ?", a: ["O'pka", "Yurak", "Jigar", "Miya"], correct: 1 },
            { q: "\"Sağlık\" nima degani?", a: ["Kasallik", "Sog'liq", "Dori", "Shifoxona"], correct: 1 }
        ],
        7: [
            { q: "\"Kıyafet\" nima degani?", a: ["Taom", "Kiyim-kechak", "O'yinchoq", "Mebel"], correct: 1 },
            { q: "\"Gömlek\" - ?", a: ["Shim", "Ko'ylak (erkaklar)", "Kurtka", "Paypoq"], correct: 1 },
            { q: "\"Pantolon\" nima degani?", a: ["Shim", "Yubka", "Kostyum", "Palto"], correct: 0 },
            { q: "\"Elbise\" - ?", a: ["Shim", "Ko'ylak (ayollar)", "Shlyapa", "Sharfish"], correct: 1 },
            { q: "\"Ayakkabı\" nima degani?", a: ["Paypoq", "Oyoq kiyim", "Qo'lqop", "Shlyapa"], correct: 1 },
            { q: "\"Ceket\" - ?", a: ["Shim", "Pidjak/Kurtka", "Kardigan", "Nimcha"], correct: 1 },
            { q: "\"Şapka\" nima degani?", a: ["Sharfish", "Shlyapa/Kepka", "Qo'lqop", "Paypoq"], correct: 1 },
            { q: "\"Atkı\" - ?", a: ["Kepka", "Sharflash", "Qo'lqop", "Kamar"], correct: 1 },
            { q: "\"Eldiven\" nima degani?", a: ["Paypoq", "Qo'lqop", "Kamar", "Sharflash"], correct: 1 },
            { q: "\"Çorap\" - ?", a: ["Shim", "Paypoq", "Ko'ylak", "Oyoq kiyim"], correct: 1 }
        ],
        8: [
            { q: "\"Şehir\" nima degani?", a: ["Qishloq", "Shahar", "Ko'cha", "Tuman"], correct: 1 },
            { q: "\"Mahalle\" - ?", a: ["Davlat", "Mahalla", "Uy", "Bino"], correct: 1 },
            { q: "\"Sokak\" nima degani?", a: ["Maydon", "Ko'cha", "Yo'l", "Bekat"], correct: 1 },
            { q: "\"Bina\" - ?", a: ["Bog'", "Bino/Imorat", "Zavod", "Do'kon"], correct: 1 },
            { q: "\"Park\" nima degani?", a: ["Park/Istirohat bog'i", "Kasalxona", "Maktab", "Kutubxona"], correct: 0 },
            { q: "\"Hastane\" - ?", a: ["Dorixona", "Kasalxona", "Maktab", "Sinf"], correct: 1 },
            { q: "\"Eczane\" nima degani?", a: ["Do'kon", "Dorixona", "Bank", "Pochta"], correct: 1 },
            { q: "\"Banka\" - ?", a: ["Pochta", "Bank", "Bozor", "Supermarket"], correct: 1 },
            { q: "\"Postane\" nima degani?", a: ["Kutubxona", "Pochta", "Muzey", "Teatr"], correct: 1 },
            { q: "\"Kütüphane\" - ?", a: ["Maktab", "Kutubxona", "Universitet", "Kollej"], correct: 1 }
        ],
        9: [
            { q: "\"Hava Durumu\" nima degani?", a: ["Suv holati", "Ob-havo", "Yer holati", "Havo iflosligi"], correct: 1 },
            { q: "\"Güneşli\" - ?", a: ["Yomg'irli", "Quyoshli", "Bulutli", "Qorli"], correct: 1 },
            { q: "\"Yağmurlu\" nima degani?", a: ["Shamolli", "Yomg'irli", "Ochiq", "Issiq"], correct: 1 },
            { q: "\"Bulutlu\" - ?", a: ["Quyoshli", "Bulutli", "Tumanli", "Sovuq"], correct: 1 },
            { q: "\"Karlı\" nima degani?", a: ["Issiq", "Qorli", "Yomg'irli", "Shamolli"], correct: 1 },
            { q: "\"Rüzgarlı\" - ?", a: ["Bulutli", "Shamolli", "Quyoshli", "Ochiq"], correct: 1 },
            { q: "\"Sıcaklık\" nima degani?", a: ["Namlik", "Harorat", "Bosim", "Tezlik"], correct: 1 },
            { q: "\"Derece\" - ?", a: ["Metr", "Daraja/Gradus", "Kilogram", "Litr"], correct: 1 },
            { q: "\"Mevsim\" nima degani?", a: ["Hafta", "Fasl", "Oy", "Yil"], correct: 1 },
            { q: "\"İlkbahar\" - ?", a: ["Yoz", "Bahor", "Kuz", "Qish"], correct: 1 }
        ],
        10: [
            { q: "\"Seyahat\" nima degani?", a: ["Ish", "Sayohat", "O'qish", "O'yin"], correct: 1 },
            { q: "\"Tatil\" - ?", a: ["Bayram", "Ta'til", "Dam olish", "Sayohat"], correct: 1 },
            { q: "\"Bilet\" nima degani?", a: ["Chipta", "Passport", "Pul", "Kitob"], correct: 0 },
            { q: "\"Pasaport\" - ?", a: ["Chipta", "Passport", "Viza", "Hujjat"], correct: 1 },
            { q: "\"Otel\" nima degani?", a: ["Uy", "Mehmonxona", "Restoran", "Kafe"], correct: 1 },
            { q: "\"Rezervasyon\" - ?", a: ["Sotib olish", "Band qilish/Rezervatsiya", "Sotish", "To'lash"], correct: 1 },
            { q: "\"Uçak\" nima degani?", a: ["Avtobus", "Samolyot", "Poyezd", "Kema"], correct: 1 },
            { q: "\"Tren\" - ?", a: ["Samolyot", "Poyezd", "Moshina", "Velesoped"], correct: 1 },
            { q: "\"Gemi\" nima degani?", a: ["Qayiq", "Kema", "Samolyot", "Avtobus"], correct: 1 },
            { q: "\"Valiz\" - ?", a: ["Sumka", "Chomadon", "Hamyon", "Papka"], correct: 1 }
        ],
        11: [
            { q: "\"Emir Kipi\" nima?", a: ["Istak mayli", "Buyruq mayli", "Shart mayli", "Xabar mayli"], correct: 1 },
            { q: "\"Gel!\" nima degani?", a: ["Kelaman", "Kel!", "Keldi", "Keling"], correct: 1 },
            { q: "\"Yapmayın!\" - ?", a: ["Qilmang!", "Qiling!", "Qilyapman", "Qildim"], correct: 0 },
            { q: "\"Bak\" nima degani?", a: ["Qarama", "Qara", "Qaradi", "Qarayman"], correct: 1 },
            { q: "\"Gelin\" - ?", a: ["Kel!", "Keling/Kelish", "Keldik", "Kelishyapti"], correct: 1 },
            { q: "\"Oturun\" nima degani?", a: ["Turmang", "O'tiring", "O'tirdilar", "O'tir"], correct: 1 },
            { q: "\"Koşma!\" - ?", a: ["Yugur!", "Yugurma!", "Yuguryapman", "Yugurdik"], correct: 1 },
            { q: "\"Yaz\" - ?", a: ["Yozdim", "Yoz!", "Yozamiz", "Yozyapti"], correct: 1 },
            { q: "\"Okusun\" nima degani?", a: ["O'qisin", "O'qiyapman", "O'qiding", "O'qidik"], correct: 0 },
            { q: "\"Gitsinler\" - ?", a: ["Ketdim", "Ketishsin", "Ketishdi", "Ketamiz"], correct: 1 }
        ],
        12: [
            { q: "\"Şimdiki Zamanın Hikayesi\"?", a: ["Kelajak zamon", "Hozirgi davomli o'tgan zamon", "O'tgan zamon", "Keltiruvchi zamon"], correct: 1 },
            { q: "\"Okuyordum\" nima degani?", a: ["O'qiyapman", "O'qirdim/O'qiyotgan edim", "O'qiyman", "O'qidim"], correct: 1 },
            { q: "\"Geliyordu\" - ?", a: ["Kelyapti", "Kelayotgan edi", "Keldi", "Kelgan"], correct: 1 },
            { q: "\"Yapıyorduk\" nima degani?", a: ["Qilyapmiz", "Qilayotgan edik", "Qildik", "Qilamiz"], correct: 1 },
            { q: "\"Gidiyordun\" - ?", a: ["Ketyapsan", "Ketayotgan eding", "Ketding", "Ketasan"], correct: 1 },
            { q: "\"Bakıyorlardı\" nima degani?", a: ["Qarayaptilar", "Qarayotgan edilar", "Qarashdi", "Qaradilar"], correct: 1 },
            { q: "\"Çalışıyordum\" - ?", a: ["Ishlayapman", "Ishlayotgan edim", "Ishladim", "Ishlayman"], correct: 1 },
            { q: "\"Bekliyorduk\" nima degani?", a: ["Kutyapmiz", "Kutayotgan edik", "Kutdik", "Kutamiz"], correct: 1 },
            { q: "\"Anlamıyordum\" - ?", a: ["Tushunmayapman", "Tushunmayotgan edim", "Tushunmadim", "Tushunaman"], correct: 1 },
            { q: "\"Sevmiyordun\" nima degani?", a: ["Sevmayapsan", "Sevmayotgan eding", "Sevmading", "Sevasan"], correct: 1 }
        ],
        13: [
            { q: "\"Geniş Zaman\" nima?", a: ["Hozirgi zamon", "Umumiy/Hozirgi-kelajak zamon", "O'tgan zamon", "Kelajak zamon"], correct: 1 },
            { q: "\"Okurum\" nima degani?", a: ["O'qiyapman", "O'qiyman (odatan)", "O'qidim", "O'qiydi"], correct: 1 },
            { q: "\"Gelir\" - ?", a: ["Kelyapti", "Keladi", "Keldi", "Kelgan"], correct: 1 },
            { q: "\"Yaparız\" nima degani?", a: ["Qildik", "Qilamiz/Qilamiz", "Qilyapmiz", "Qilganmiz"], correct: 1 },
            { q: "\"Giderler\" - ?", a: ["Ketishdi", "Ketadilar", "Ketishadi", "Ketamiz"], correct: 1 },
            { q: "\"Bakarsın\" nima degani?", a: ["Qarayapsan", "Qaraysan", "Qarading", "Qarabsan"], correct: 1 },
            { q: "\"Severler\" - ?", a: ["Sevadilar", "Sevishdi", "Sevishadi", "Sevishgan"], correct: 1 },
            { q: "\"İçmez\" nima degani?", a: ["Ichmayapti", "Ichmaydi", "Ichmadi", "Ichmagan"], correct: 1 },
            { q: "\"Gelmezler\" - ?", a: ["Kelmaydilar", "Kelmadilar", "Kelishni xohlashmaydi", "Kelishmadi"], correct: 0 },
            { q: "\"Yapar mısın?\" ma'nosi?", a: ["Qilasanmi? (Iltimos)", "Qildingmi?", "Qilyapsanmi?", "Qilmaganmisan?"], correct: 0 }
        ],
        14: [
            { q: "\"Meslek\" nima degani?", a: ["Ism", "Kasb", "Joy", "Vaqt"], correct: 1 },
            { q: "\"Doktor\" - ?", a: ["O'qituvchi", "Shifokor", "Muxandis", "Haydovchi"], correct: 1 },
            { q: "\"Öğretmen\" nima degani?", a: ["O'quvchi", "O'qituvchi", "Direktor", "Kotib"], correct: 1 },
            { q: "\"Mühendis\" - ?", a: ["Hukshunos", "Muhandis", "Rassom", "Musiqachi"], correct: 1 },
            { q: "\"Avukat\" nima degani?", a: ["Sudya", "Advokat", "Polis", "Oshpaz"], correct: 1 },
            { q: "\"Şoför\" - ?", a: ["Uchuvchi", "Haydovchi", "Bog'bon", "Sotuvchi"], correct: 1 },
            { q: "\"Aşçı\" nima degani?", a: ["Ofitsiant", "Oshpaz", "Sotuvchi", "Tikuvchi"], correct: 1 },
            { q: "\"Polis\" - ?", a: ["Askar", "Politsiyachi", "Yong'in o'chiruvchi", "Qo'riqchi"], correct: 1 },
            { q: "\"Pilot\" nima degani?", a: ["Haydovchi", "Uchuvchi", "Kema kapitani", "Muxandis"], correct: 1 },
            { q: "\"İşçi\" - ?", a: ["Xizmatchi", "Ishchi", "Boshliq", "Menejer"], correct: 1 }
        ],
        15: [
            { q: "\"Hobi\" nima degani?", a: ["Ish", "Qiziqish/Hobbiy", "O'qish", "Dam olish"], correct: 1 },
            { q: "\"Müzik dinlemek\" - ?", a: ["Musiqa eshitish", "Rasm chizish", "Kitob o'qish", "Sport bilan shug'ullanish"], correct: 0 },
            { q: "\"Kitap okumak\" nima degani?", a: ["Televizor ko'rish", "Kitob o'qish", "Yozish", "Uxlayish"], correct: 1 },
            { q: "\"Spor yapmak\" - ?", a: ["Ovqat tayyorlash", "Sport bilan shug'ullanish", "Sayohat qilish", "Raqsga tushish"], correct: 1 },
            { q: "\"Resim yapmak\" nima degani?", a: ["Rasmga tushish", "Rasm chizish", "Rasm ko'rish", "Bo'yash"], correct: 1 },
            { q: "\"Yüzmek\" - ?", a: ["Yugurish", "Suzish", "Sakrash", "Yurish"], correct: 1 },
            { q: "\"Seyahat etmek\" nima degani?", a: ["O'qish", "Sayohat qilish", "Ishlash", "O'ynash"], correct: 1 },
            { q: "\"Yemek pişirmek\" - ?", a: ["Idish yuvish", "Ovqat pishirish", "Bozorga borish", "Dasturxon yozish"], correct: 1 },
            { q: "\"Fotoğraf çekmek\" nima degani?", a: ["Rasm chizish", "Rasmga tushirish", "Kino ko'rish", "O'yin o'ynash"], correct: 1 },
            { q: "\"Dans etmek\" - ?", a: ["Ashula aytish", "Raqsga tushish", "Kulish", "Gapirish"], correct: 1 }
        ]
    },
    'B1': {
        1: [
            { q: "\"Belirsiz Geçmiş Zaman\" qo'shimchasi?", a: ["-di", "-miş/-mış/-muş/-müş", "-iyor", "-ecek"], correct: 1 },
            { q: "\"Gelmiş\" nima degani?", a: ["Keldi", "Kelgan emish/Kelgan", "Keladi", "Kelyapti"], correct: 1 },
            { q: "\"Okumuşsun\" - ?", a: ["O'qiding", "O'qigan ekansan", "O'qiyapsan", "O'qiysan"], correct: 1 },
            { q: "\"Duydum ki...\" ma'nosi?", a: ["Eshatdimki...", "Ko'rdimki...", "Bildimki...", "O'yladimki..."], correct: 0 },
            { q: "\"Anlatmışlar\" nima degani?", a: ["Gapirishdi", "Gapirib berishibdi", "Gapiryaptilar", "Gapirishadi"], correct: 1 },
            { q: "\"Unutmuşum\" - ?", a: ["Unutdim", "Unutib qo'yibman", "Unutmayapman", "Unutaman"], correct: 1 },
            { q: "\"Bakmıştık\" nima degani?", a: ["Qarayapmiz", "Qaragan edik", "Qaraymiz", "Qaradik"], correct: 1 },
            { q: "\"Yapmışlar mı?\" - ?", a: ["Qilishdimi?", "Qilishibdimi?", "Qilishyaptimi?", "Qilishadimi?"], correct: 1 },
            { q: "\"Yorulmuşum\" nima degani?", a: ["Charchadim", "Charchabman", "Charchayman", "Charchamayman"], correct: 1 },
            { q: "\"Gelmemişler\" - ?", a: ["Kelishdi", "Kelishmabdi", "Kelishmadi", "Kelishmaydi"], correct: 1 }
        ],
        2: [
            { q: "\"Şart Kipi\" qo'shimchasi?", a: ["-se/-sa", "-meli", "-iyor", "-di"], correct: 0 },
            { q: "\"Gelse\" nima degani?", a: ["Kelsa", "Keldi", "Keladi", "Kelgan"], correct: 0 },
            { q: "\"Yapsak\" - ?", a: ["Qildik", "Qilsak", "Qilamiz", "Qilganmiz"], correct: 1 },
            { q: "\"Okusam\" nima degani?", a: ["O'qidim", "O'qisam", "O'qiyman", "O'qiyotgan edim"], correct: 1 },
            { q: "\"Gitmeseler\" - ?", a: ["Ketishmadi", "Ketishmasa", "Ketmaydilar", "Ketishsa"], correct: 1 },
            { q: "\"Bilsen\" nima degani?", a: ["Bilsang", "Bolding", "Bilyapsan", "Bilasan"], correct: 0 },
            { q: "\"Baksa\" - ?", a: ["Qaradi", "Qarsa", "Qaraydi", "Qarayapti"], correct: 1 },
            { q: "\"Gerçekleşse\" nima degani?", a: ["Amalga oshsa", "Bo'lmasa", "O'zgarsa", "Yaxshilansa"], correct: 0 },
            { q: "\"Keşke...\" so'zining ma'nosi?", a: ["Balki...", "Qaniydi...", "Chunki...", "Agarda..."], correct: 1 },
            { q: "\"Sevseydim\" - ?", a: ["Sevganman", "Sevsam edi", "Sevar edim", "Sevdim"], correct: 1 }
        ],
        3: [
            { q: "\"Gereklilik Kipi\" qo'shimchasi?", a: ["-meli/-malı", "-iyor", "-ecek", "-se"], correct: 0 },
            { q: "\"Gitmeliyim\" nima degani?", a: ["Ketishim mumkin", "Ketishim kerak", "Ketdim", "Ketaman"], correct: 1 },
            { q: "\"Okumalısın\" - ?", a: ["O'qiding", "O'qishing kerak", "O'qishing mumkin", "O'qimagin"], correct: 1 },
            { q: "\"Yapmamalıyız\" nima degani?", a: ["Qilishimiz kerak", "Qilmasligimiz kerak", "Qilmadik", "Qilmaymiz"], correct: 1 },
            { q: "\"Bakmalılar\" - ?", a: ["Qarashlari kerak", "Qaradilar", "Qaraydilar", "Qarayotgan edilar"], correct: 0 },
            { q: "\"Gelmelisin\" nima degani?", a: ["Kelding", "Kelishing kerak", "Kelasan", "Kelyapsan"], correct: 1 },
            { q: "\"Çalışmalıyım\" - ?", a: ["Ishlayman", "Ishlashim kerak", "Ishladim", "Ishlayotgan edim"], correct: 1 },
            { q: "\"Beklemeliyiz\" nima degani?", a: ["Kutdik", "Kutishimiz kerak", "Kutayotgan edik", "Kutyapmiz"], correct: 1 },
            { q: "\"Sevmelisin\" - ?", a: ["Sevding", "Sevishing kerak", "Sevasan", "Savyapsan"], correct: 1 },
            { q: "\"Öğrenmeliyiz\" nima degani?", a: ["O'rgandik", "O'rganishimiz kerak", "O'rganyapmiz", "O'rganamiz"], correct: 1 }
        ],
        4: [
            { q: "\"Dolaylı Anlatım\" nima?", a: ["To'g'ri nutq", "Ko'chirma nutq", "O'zlashtirma nutq", "Buyruq nutq"], correct: 2 },
            { q: "\"Söyledi\" nima degani?", a: ["Aytdi", "Dedi", "Gapirdi", "Suhbatlashdi"], correct: 0 },
            { q: "\"Geleceğini söyledi\" - ?", a: ["Kelishini aytdi", "Kelaman dedi", "Keldi", "Kelyapti dedi"], correct: 0 },
            { q: "\"Yaptığını gördüm\" nima degani?", a: ["Qilayotganini ko'rdim", "Qildim", "Qildi", "Qilmoqchi"], correct: 0 },
            { q: "\"Bildiğini sanmıyorum\" - ?", a: ["Bilishingni o'ylamayman", "Bilishingni bilaman", "Bilishingni xohlayman", "Bilarding"], correct: 0 },
            { q: "\"Gittiğini duydum\" nima degani?", a: ["Ketganini eshitdim", "Ketdi", "Ketyapti", "Ketmoqchi"], correct: 0 },
            { q: "\"Okuduğunu biliyorum\" - ?", a: ["O'qiyotganingni bilaman", "O'qidim", "O'qiysan", "O'qiyapsan"], correct: 0 },
            { q: "\"Geldiğini gördük\" nima degani?", a: ["Kelganini ko'rdik", "Keldi", "Kelamiz", "Kelyapmiz"], correct: 0 },
            { q: "\"Sevdiğini hissettim\" - ?", a: ["Sevishini his qildim", "Sevdim", "Sevasan", "Sevyapti"], correct: 0 },
            { q: "\"Öğrendiğini anladım\" nima degani?", a: ["O'rganganini tushundim", "O'rgandim", "O'rganasan", "O'rganyapsan"], correct: 0 }
        ],
        5: [
            { q: "\"Zarf-fiiller\" nima uchun ishlatiladi?", a: ["Ot yasash uchun", "Fe'ldan ravish yasash uchun", "Sifat yasash uchun", "Zamon uchun"], correct: 1 },
            { q: "\"-erek/-arak\" qo'shimchasi ma'nosi?", a: ["...sh uchun", "...ib/...gan holda", "...dan keyin", "...dan oldin"], correct: 1 },
            { q: "\"Koşarak geldi\" nima degani?", a: ["Yugurish uchun keldi", "Yugurib keldi", "Yugurgandan keyin keldi", "Yugurdi va keldi"], correct: 1 },
            { q: "\"Gülerek konuştu\" - ?", a: ["Kulish uchun gapirdi", "Kulib gapirdi", "Kuldi va gapirdi", "Kulayotgan edi"], correct: 1 },
            { q: "\"Bakarak anladı\" nima degani?", a: ["Qarab tushundi", "Qaradi va tushundi", "Qarash uchun", "Qarayotgan edi"], correct: 0 },
            { q: "\"Ağlayarak gitti\" - ?", a: ["Yig'lab ketdi", "Yig'lash uchun", "Yig'ladi va ketdi", "Yig'layotgan edi"], correct: 0 },
            { q: "\"Çalışarak başardı\" nima degani?", a: ["Ishlab muvaffaqiyat qozondi", "Ishlash uchun", "Ishladi va bo'ldi", "Ishlayapti"], correct: 0 },
            { q: "\"Düşünerek cevap verdi\" - ?", a: ["O'ylab javob berdi", "O'ylash uchun", "O'yladi va dedi", "O'ylayapti"], correct: 0 },
            { q: "\"Bilerek yaptı\" nima degani?", a: ["Bilib qildi (ataylab)", "Bilish uchun", "Bildi va bo'ldi", "Bilyapti"], correct: 0 },
            { q: "\"Korkarak baktı\" - ?", a: ["Qo'rqib qaradi", "Qo'rqish uchun", "Qo'rqdi va dedi", "Qo'rqayapti"], correct: 0 }
        ],
        6: [
            { q: "\"Edatlar\" (Ko'makchilar) nima?", a: ["Fe'llar", "So'zlarni bog'lovchi yordamchilar", "Otlar", "Sifatlar"], correct: 1 },
            { q: "\"Rağmen\" nima degani?", a: ["Uchun", "Qaramasdan", "Keyin", "Oldin"], correct: 1 },
            { q: "\"Yağmura rağmen gittik\" - ?", a: ["Yomg'ir uchun ketdik", "Yomg'irga qaramasdan ketdik", "Yomg'irdan keyin", "Yomg'irgacha"], correct: 1 },
            { q: "\"Dolayı\" nima degani?", a: ["Kabi", "Tufayli/Sababli", "Keyin", "Oldin"], correct: 1 },
            { q: "\"Bundan dolayı...\" - ?", a: ["Shuningdek", "Shu sababli...", "Shundan keyin", "Shungacha"], correct: 1 },
            { q: "\"Hakkında\" nima degani?", a: ["Haqida", "Uchun", "Kabi", "Bilan"], correct: 0 },
            { q: "\"Senin hakkında\" - ?", a: ["Sen uchun", "Sen haqingda", "Sen bilan", "Sen kabi"], correct: 1 },
            { q: "\"Tarafından\" nima degani?", a: ["Tomonidan", "Keyin", "Oldin", "Ichida"], correct: 0 },
            { q: "\"Devlet tarafından\" - ?", a: ["Davlat ichida", "Davlat tomonidan", "Davlat bilan", "Davlat uchun"], correct: 1 },
            { q: "\"Göre\" nima degani?", a: ["Muvofiq/Ko'ra", "Keyin", "Oldin", "Bilan"], correct: 0 }
        ],
        7: [
            { q: "\"Bağlaçlar\" (Bog'lovchilar) nima?", a: ["Sifatlar", "Gaplarni bog'lovchi so'zlar", "Fe'llar", "Otlar"], correct: 1 },
            { q: "\"Çünkü\" nima degani?", a: ["Va", "Shuning uchun", "Chunki", "Lekin"], correct: 2 },
            { q: "\"Fakat\"/\"Ama\" - ?", a: ["Chunki", "Lekin/Biroq", "Va", "Yoki"], correct: 1 },
            { q: "\"Ancak\" nima degani?", a: ["Faqat/Lekin", "Shuning uchun", "Chunki", "Ham"], correct: 0 },
            { q: "\"Veya\"/\"Yahut\" - ?", a: ["Va", "Yoki", "Lekin", "Biroq"], correct: 1 },
            { q: "\"Hem... hem...\" ma'nosi?", a: ["Nafaqat... balki...", "Ham... ham...", "Yoki... yoki...", "Na... na..."], correct: 1 },
            { q: "\"Ya... ya...\" - ?", a: ["Ham... ham...", "Yoki... yoki...", "Lekin", "Va"], correct: 1 },
            { q: "\"Ne... ne...\" ma'nosi?", a: ["Ham... ham...", "Na... na... (inkor)", "Yoki... yoki...", "Lekin"], correct: 1 },
            { q: "\"Üstelik\"/\"Ayrıca\" - ?", a: ["Bundan tashqari", "Lekin", "Chunki", "Uchun"], correct: 0 },
            { q: "\"Hatta\" nima degani?", a: ["Hatto", "Lekin", "Yoki", "Chunki"], correct: 0 }
        ],
        8: [
            { q: "\"Zaman Zarfları\" nima?", a: ["Vaqt ravishlari", "Joy ravishlari", "Holat ravishlari", "Sifatlar"], correct: 0 },
            { q: "\"Henüz\" nima degani?", a: ["Yaqinda", "Hali", "Keyin", "Oldin"], correct: 1 },
            { q: "\"Hala\" - ?", a: ["Hali ham", "Kech", "Erta", "Hozir"], correct: 0 },
            { q: "\"Az önce\" nima degani?", a: ["Hozir", "Yaqinda/Hozirgina", "Keyin", "Hech qachon"], correct: 1 },
            { q: "\"Yakında\" - ?", a: ["Uzoqda", "Yaqinda", "Oldinda", "Orqada"], correct: 1 },
            { q: "\"Ara sıra\" nima degani?", a: ["Har doim", "Goh-gohida/Vaqti-vaqti bilan", "Hech qachon", "Tez-tez"], correct: 1 },
            { q: "\"Bazen\" - ?", a: ["Har doim", "Ba'zan", "Hech doim", "Tez"], correct: 1 },
            { q: "\"Sık sık\" nima degani?", a: ["Sekin", "Tez-tez", "Kamdan-kam", "Hech qachon"], correct: 1 },
            { q: "\"Nadiren\" - ?", a: ["Tez-tez", "Kamdan-kam", "Har doim", "Ba'zan"], correct: 1 },
            { q: "\"Asla\" nima degani?", a: ["Balki", "Hech qachon/Aslo", "Har doim", "Yaqinda"], correct: 1 }
        ],
        9: [
            { q: "\"Dönüşlü Fiiller\" nima?", a: ["O'zlik nisbati", "Ortirma nisbati", "Majhul nisbati", "Birgalik nisbati"], correct: 0 },
            { q: "O'zlik nisbati qo'shimchasi?", a: ["-dir", "-l", "-n", "-ş"], correct: 2 },
            { q: "\"Yıkandı\" nima degani?", a: ["Yuvindi", "Yuvdi", "Yuvildi", "Yuvishdi"], correct: 0 },
            { q: "\"Giyindi\" - ?", a: ["Kiydi", "Kiyindi", "Kiyildi", "Kiyishdi"], correct: 1 },
            { q: "\"Tarandı\" nima degani?", a: ["Taradi", "Tarandi", "Taraldi", "Tarashdi"], correct: 1 },
            { q: "\"Süslendi\" - ?", a: ["Yasadilar", "Yasandi", "Yasaldi", "Yasashdi"], correct: 1 },
            { q: "\"Sevindi\" nima degani?", a: ["Sevdi", "Xursand bo'ldi (sevindi)", "Sevilgan", "Sevishdi"], correct: 1 },
            { q: "\"Kaşındı\" - ?", a: ["Qashladi", "Qashindi", "Qashaldi", "Qashashdi"], correct: 1 },
            { q: "\"Hazırlandı\" nima degani?", a: ["Tayyorladi", "Tayyorlandi", "Tayyor", "Tayyorlashdi"], correct: 1 },
            { q: "\"Dinlendi\" - ?", a: ["Eshitdi", "Dam oldi (tinchlandi)", "Dam oldilar", "Eshatilda"], correct: 1 }
        ],
        10: [
            { q: "\"İşteş Fiiller\" nima?", a: ["Birgalik nisbati", "O'zlik nisbati", "Majhul nisbati", "Ortirma nisbati"], correct: 0 },
            { q: "Birgalik nisbati qo'shimchasi?", a: ["-n", "-l", "-ş", "-dir"], correct: 2 },
            { q: "\"Görüştüler\" nima degani?", a: ["Ko'rdilar", "Ko'rishdilar", "Ko'rilganlar", "Ko'rishadi"], correct: 1 },
            { q: "\"Bakıştılar\" - ?", a: ["Qaradilar", "Bir-biriga qarashdi", "Qaraldilar", "Qaraydilar"], correct: 1 },
            { q: "\"Yazıştılar\" nima degani?", a: ["Yozdilar", "Yozishdilar", "Yozildi", "Yozyaptilar"], correct: 1 },
            { q: "\"Gülüştüler\" - ?", a: ["Kuldilar", "Kulishdilar", "Kuladi", "Kulganlar"], correct: 1 },
            { q: "\"Savaştılar\" nima degani?", a: ["Urushdilar", "Kurashdilar", "G'olib bo'lishdi", "Ketishdi"], correct: 0 },
            { q: "\"Dövüştüler\" - ?", a: ["Urdilar", "Urushdilar/Mushtlashdilar", "Urilgalar", "Ketishdi"], correct: 1 },
            { q: "\"Selamlaştılar\" nima degani?", a: ["Salom berdilar", "Salomlashdilar", "Salom beradi", "Kelishdi"], correct: 1 },
            { q: "\"Tanıştılar\" - ?", a: ["Tanishdilar", "Bildi", "O'rgandilar", "Ko'rdilar"], correct: 0 }
        ],
        11: [
            { q: "\"Ettirgen/Oldurgan Fiiller\" nima?", a: ["Majhul nisbati", "Ortirma nisbati", "O'zlik nisbati", "Birgalik nisbati"], correct: 1 },
            { q: "Ortirma nisbati qo'shimchalari?", a: ["-dir, -t, -ir, -ar", "-l, -n", "-ş", "-me"], correct: 0 },
            { q: "\"Okuttu\" nima degani?", a: ["O'qidi", "O'qitdi/O'qittirdi", "O'qiyapti", "O'qigan"], correct: 1 },
            { q: "\"Yaptırdı\" - ?", a: ["Qildi", "Qildirdi/Qildirib berdi", "Qilyapti", "Qilyapmiz"], correct: 1 },
            { q: "\"İçirdi\" nima degani?", a: ["Ichdi", "Ichirdi", "Ichadi", "Ichgan"], correct: 1 },
            { q: "\"Yedirdi\" - ?", a: ["Yedi", "Yedirdi", "Yeydi", "Yegan"], correct: 1 },
            { q: "\"Güldürdü\" nima degani?", a: ["Kuldi", "Kuldirdi", "Kuladi", "Kulganmi"], correct: 1 },
            { q: "\"Ağlattı\" - ?", a: ["Yig'ladi", "Yig'latdi", "Yig'layapti", "Yig'lagan"], correct: 1 },
            { q: "\"Korkuttu\" nima degani?", a: ["Qo'rqdi", "Qo'rqitdi", "Qo'rqyapti", "Qo'rqadi"], correct: 1 },
            { q: "\"Pişirtti\" - ?", a: ["Pishirdi", "Pishirttirdi", "Pishiradi", "Pishirgan"], correct: 1 }
        ],
        12: [
            { q: "\"Kelime Türetme\" (So'z yasash) nima?", a: ["Fe'llar", "Morfologik o'zgarishlar", "Sifatlar", "Otlar"], correct: 1 },
            { q: "\"-ci/-cı\" qo'shimchasi ma'nosi?", a: ["O'rin", "Kasb/Harakat egasi", "Sifat", "Zamon"], correct: 1 },
            { q: "\"Kitapçı\" nima degani?", a: ["Kitob", "Kitob sotuvchi", "Kitobxon", "Kitoblar"], correct: 1 },
            { q: "\"Sütçü\" - ?", a: ["Sut", "Sut sotuvchi", "Sutchilik", "Sutlar"], correct: 1 },
            { q: "\"-lik/-lık\" qo'shimchasi ma'nosi?", a: ["Mavhum ot yoki o'rin yasovchi", "Kasb", "Zamon", "Mayl"], correct: 0 },
            { q: "\"Güzellik\" nima degani?", a: ["Chiroyli", "Go'zallik", "Chiroyliroq", "Eng chiroyli"], correct: 1 },
            { q: "\"Kalemlik\" - ?", a: ["Qalam", "Qalamdon", "Qalamlar", "Qalam bilan"], correct: 1 },
            { q: "\"-li/-lı\" qo'shimchasi?", a: ["...siz", "...li (borlik)", "Zamon", "Shaxs"], correct: 1 },
            { q: "\"Şekerli\" nima degani?", a: ["Shakar", "Shakarli", "Shakarsiz", "Shakarchilik"], correct: 1 },
            { q: "\"-siz/-sız\" qo'shimchasi?", a: ["...li", "...siz (yo'qlik)", "Uchun", "Keyin"], correct: 1 }
        ],
        13: [
            { q: "\"Deyimler\" (Iboralar) nima?", a: ["So'zlar", "Iboralar/Ko'chma ma'noli birikmalar", "Sifatlar", "Fe'llar"], correct: 1 },
            { q: "\"Gözden düşmek\" ma'nosi?", a: ["Ko'zi tushmoq", "Hurmatini yo'qotmoq", "Yiqilmoq", "Ko'rmoq"], correct: 1 },
            { q: "\"Kulak asmamak\" - ?", a: ["Eshitmaslik/E'tibor bermaslik", "Quloq solish", "Quloq sig'maslik", "Tushunmaslik"], correct: 0 },
            { q: "\"Ağzı kulaklarına varmak\" - ?", a: ["Xafa bo'lmoq", "Juda xursand bo'lmoq", "Gapirmoq", "Kulmoq"], correct: 1 },
            { q: "\"Karnı zil çalmak\" - ?", a: ["Qorni to'ymoq", "Juda och bo'lmoq", "Musiqa eshitish", "Uxlash"], correct: 1 },
            { q: "\"Göz atmak\" nima degani?", a: ["Ko'zini uzmoq", "Yuzaki qarab chiqmoq", "Rasmga tushish", "Ko'rib qolmoq"], correct: 1 },
            { q: "\"Can atmak\" - ?", a: ["O'lib qolmoq", "Intizor bo'lib kutmoq/Xohlamoq", "Ketmoq", "Kelmoq"], correct: 1 },
            { q: "\"Yola gelmek\" nima degani?", a: ["Yo'lda yurish", "Gapga kirmoq/Yaxshi bo'lmoq", "Uzoqqa borish", "Kelish"], correct: 1 },
            { q: "\"Etekleri zil çalmak\" - ?", a: ["Raqsga tushish", "Juda sevinib ketmoq", "Xafa bo'lish", "Charchash"], correct: 1 },
            { q: "\"Burnu havada\" - ?", a: ["Kasal bo'lmoq", "Kibrli/Mag'rur", "Uchish", "Egilish"], correct: 1 }
        ],
        14: [
            { q: "\"Atasözleri\" (Maqollar) nima?", a: ["Iboralar", "Maqollar/Xalq donishmandligi", "She'rlar", "Hikoyalar"], correct: 1 },
            { q: "\"Damlaya damlaya göl olur\" ma'nosi?", a: ["Suv oz", "Tejamkorlik haqida (tomchi yig'ilib ko'l bo'lar)", "Ko'l katta", "Yomg'ir yog'yapti"], correct: 1 },
            { q: "\"Gülme komşuna, gelir başına\" - ?", a: ["Qo'shni bilan kul", "Birovning ustidan kulma, o'zingga qaytadi", "Qo'shni yaxshi", "Kulishtilar"], correct: 1 },
            { q: "\"Ayağını yorganına göre uzat\" - ?", a: ["Ko'rpani yop", "Imkoniyatingga qarab ish tut", "Oyoqni cho'z", "Uxla"], correct: 1 },
            { q: "\"Bir elin nesi var, iki elin sesi var\" - ?", a: ["Qo'llar toza", "Birlikda kuch bor (ko'p bo'lib harakat qil)", "Qo'lni yuv", "Ikki qo'l"], correct: 1 },
            { q: "\"Sabreden derviş, muradına ermiş\" - ?", a: ["Sabr qilgan murodiga yetar", "Sabr qiyin", "Dervish keldi", "Murod yo'q"], correct: 0 },
            { q: "\"Ak akçe kara gün içindir\" - ?", a: ["Oq pul", "Zahira pul qiyin kunlar uchun", "Qora kun", "Pul yo'q"], correct: 1 },
            { q: "\"Sakla samanı, gelir zamanı\" - ?", a: ["Samonni sot", "Har narsaning o'z vaqti/keragi bor", "Vaqt o'tdi", "Samon ko'p"], correct: 1 },
            { q: "\"Tatlı dil yılanı deliğinden çıkarır\" - ?", a: ["Shirin so'z - jon ozig'i", "Ilon chaqdi", "Til shirin", "Ilon chiqdi"], correct: 0 },
            { q: "\"Taşıma suyla değirmen dönmez\" - ?", a: ["Suv tashi", "Yordamchi/Sun'iy kuch bilan ish bitmaydi", "Tegirmon yurdi", "Suv yo'q"], correct: 1 }
        ],
        15: [
            { q: "\"Kültür\" nima degani?", a: ["O'yin", "Madaniyat", "Ish", "Siyosat"], correct: 1 },
            { q: "\"Gelenek\" - ?", a: ["Yangi", "An'ana", "Qonun", "Fikr"], correct: 1 },
            { q: "\"Bayram\" nima degani?", a: ["Ish kuni", "Bayram/Tantan", "Dam olish", "O'qish"], correct: 1 },
            { q: "\"Misafirperverlik\" - ?", a: ["Mehmondostlik", "Xasislik", "Baxillik", "Kuchsizlik"], correct: 0 },
            { q: "\"Düğün\" nima degani?", a: ["Uchrashuv", "Tayyorgarlik", "To'y", "Dafn"], correct: 2 },
            { q: "\"Halk oyunları\" - ?", a: ["Xalq o'yinlari/raqslari", "Sport o'yinlari", "Video o'yinlar", "Bolalar o'yinlari"], correct: 0 },
            { q: "\"El sanatları\" nima degani?", a: ["Mashina yasash", "Xalq amaliy san'ati (hunarmandlik)", "Rasm chizish", "Oshpazlik"], correct: 1 },
            { q: "\"Mutfak kültürü\" - ?", a: ["Oshxona madaniyati", "Uy bezagi", "Kiyinish uslubi", "Til boyligi"], correct: 0 },
            { q: "\"Türkü\" nima degani?", a: ["She'r", "Xalq qo'shig'i (Turku)", "Hikoya", "Ertak"], correct: 1 },
            { q: "\"Efsane\" - ?", a: ["Xabar", "Afsona", "Haqiqat", "Ma'ruza"], correct: 1 }
        ]
    },
    'B2': {
        1: [
            { q: "\"Etkin Geniş Zaman\"?", a: ["Hozirgi", "Kelasi", "Umumiy turg'un o'tgan zamon (-irdi)", "Aniq"], correct: 2 },
            { q: "\"Yapardı\" nima degani?", a: ["Qilyapti", "Qilyapti edi/Qilar edi", "Qildi", "Qilgan"], correct: 1 },
            { q: "\"Gelirdi\" - ?", a: ["Kelyapti", "Kelardi", "Keldi", "Kelgan emish"], correct: 1 },
            { q: "\"Okurduk\" nima degani?", a: ["O'qidik", "O'qirdik", "O'qimoqdamiz", "O'qiganmiz"], correct: 1 },
            { q: "\"Severlerdi\" - ?", a: ["Sevadilar", "Sevardilar", "Sevishdi", "Sevishadi"], correct: 1 },
            { q: "\"Bakardın\" nima degani?", a: ["Qarayapsan", "Qararding", "Qarading", "Qaraysan"], correct: 1 },
            { q: "\"İçmezdi\" - ?", a: ["Ichmayapti", "Ichmas edi", "Ichmadi", "Ichmaydigan bo'ldi"], correct: 1 },
            { q: "\"Gelmezlerdi\" nima degani?", a: ["Kelmadilar", "Kelmasdilar", "Kelishni xohlashmadi", "Kelishmadi"], correct: 1 },
            { q: "\"Çalışırdım\" - ?", a: ["Ishlayapman", "Ishlar edim", "Ishladim", "Ishlayman"], correct: 1 },
            { q: "\"Uyumazdı\" nima degani?", a: ["Uxlamaydi", "Uxlamas edi", "Uxlamadi", "Uxlamagan"], correct: 1 }
        ],
        2: [
            { q: "\"Eylemsiler\" (Ravishdosh/Sifatdosh/Harakat nomi)?", a: ["Fe'l shakllari", "Otlar", "Sifatlar", "Ravishlar"], correct: 0 },
            { q: "\"-dıkça/-dikçe\" qo'shimchasi ma'nosi?", a: ["...sh uchun", "...gan sari / ...gan vaqtda", "...dan keyin", "...dan oldin"], correct: 1 },
            { q: "\"Gördükçe hatırlıyorum\" nima degani?", a: ["Ko'ryapman va eslayman", "Ko'rgan sari eslayapman", "Ko'rganim yo'q", "Ko'rganimdan keyin"], correct: 1 },
            { q: "\"Okudukça öğrenirsin\" - ?", a: ["O'qisang bilasan", "O'qigan sari o'rganasan", "O'qishing kerak", "O'qisang ham bo'lmaydi"], correct: 1 },
            { q: "\"Geldikçe bize uğra\" nima degani?", a: ["Kelsang bizga kirib o't (har gal)", "Kelganingdan so'ng", "Kelyapsan", "Keldik"], correct: 0 },
            { q: "\"Yaptıkça düzeliyor\" - ?", a: ["Qilsang yaxshi", "Qilgan sari tuzalyapti", "Qilyapsan", "Qilding"], correct: 1 },
            { q: "\"Düşündükçe üzülüyor\" nima degani?", a: ["O'ylayapti", "O'ylagan sari xafa bo'lyapti", "O'yladi", "O'ylamaydi"], correct: 1 },
            { q: "\"Konuştukça alışıyorum\" - ?", a: ["Gapirgan sari o'rganyapman", "Gapiryapman", "Gapirdim", "Gapiraman"], correct: 0 },
            { q: "\"Baktıkça gülümsüyor\" nima degani?", a: ["Qarayapti", "Qaragan sari jilmayyapti", "Qaradi", "Qaramaydi"], correct: 1 },
            { q: "\"Sordukça anlıyorum\" - ?", a: ["Sog'inyapman", "So'ragan sari tushunyapman", "So'radim", "So'rayman"], correct: 1 }
        ],
        3: [
            { q: "\"Soru Cümleleri (Zarf-fiil)\" - ?", a: ["Ne zaman?", "Nasıl?", "Neden?", "Kim?"], correct: 1 },
            { q: "\"-ınca/-ince\" qo'shimchasi ma'nosi?", a: ["...sh uchun", "...ganda / ...ishi bilan", "...kabi", "...tufayli"], correct: 1 },
            { q: "\"Gelince haber ver\" nima degani?", a: ["Kelishing uchun ayt", "Kelishing bilan (kelganda) xabar ber", "Kelganingdan keyin", "Kelayapsan"], correct: 1 },
            { q: "\"Görünce şaşırdım\" - ?", a: ["Ko'rib hayron bo'ldim", "Ko'rganda hayron bo'ldim", "Ko'rganim yo'q", "Ko'rayotgan edim"], correct: 1 },
            { q: "\"Okuyunca anladım\" nima degani?", a: ["O'qish uchun", "O'qiganda tushundim", "O'qidim", "O'qiyman"], correct: 1 },
            { q: "\"Bakınca gülümsedi\" - ?", a: ["Qaradi va jilmaydi", "Qaraganda jilmaydi", "Qarayapti", "Qaramoqchi"], correct: 1 },
            { q: "\"Duyunca ağladı\" nima degani?", a: ["Eshitib yig'ladi", "Eshitganda yig'ladi", "Eshityapti", "Eshitgan"], correct: 1 },
            { q: "\"Yapınca öğreneceksin\" - ?", a: ["Qilsang o'rganasan", "Qilganda o'rganasan", "Qilding", "Qilganingda"], correct: 1 },
            { q: "\"Bilinince değişir\" nima degani?", a: ["Bilsang o'zgaradi", "Bilinsa (ma'lum bo'lganda) o'zgaradi", "Bilyapti", "Bildi"], correct: 1 },
            { q: "\"Uyanınca kalktı\" - ?", a: ["Uyg'ondi va turdi", "Uyg'onganda (uyg'onishi bilan) turdi", "Uxlayotgan edi", "Uyg'onadi"], correct: 1 }
        ],
        4: [
            { q: "\"Belirteçler\" (Ravishlar) nima?", a: ["Fe'llarni tavsiflovchi so'zlar", "Otlar", "Sifatlar", "Bog'lovchilar"], correct: 0 },
            { q: "\"Aşağı\" nima degani?", a: ["Yuqori", "Past", "Icha", "Tashqari"], correct: 1 },
            { q: "\"Yukarı\" - ?", a: ["Past", "Yuqori/Tepad", "O'ng", "Chap"], correct: 1 },
            { q: "\"İçeri\" nima degani?", a: ["Tashqari", "Ichkari", "Yaqin", "Uzoq"], correct: 1 },
            { q: "\"Dışarı\" - ?", a: ["Ichkari", "Tashqari", "Orqa", "Oldi"], correct: 1 },
            { q: "\"İleri\" nima degani?", a: ["Orqaga", "Oldinga/Ilgari", "To'g'riga", "Chapga"], correct: 1 },
            { q: "\"Geri\" - ?", a: ["Oldinga", "Orqaga", "Pastga", "Yuqoriga"], correct: 1 },
            { q: "\"Beraber\" nima degani?", a: ["Yolg'iz", "Birgalikda", "Alohida", "Keyin"], correct: 1 },
            { q: "\"Birlikte\" - ?", a: ["Hamda", "Birga", "Keyin", "Oldin"], correct: 1 },
            { q: "\"Yalnız\" nima degani?", a: ["Birga", "Faqat/Yolg'iz", "Ko'p", "Tez"], correct: 1 }
        ],
        5: [
            { q: "\"Zarf Cümlecikleri\" (Sabab)?", a: ["İçin", "Çünkü", "-dığı için / -diğinden dolayı", "Ama"], correct: 2 },
            { q: "\"Hastalandığım için gelemedim\" - ?", a: ["Kasal bo'lganim uchun kelolmadim", "Kasalman", "Kelolmayman", "Hozir keldim"], correct: 0 },
            { q: "\"Çalıştığından dolayı başardı\" nima degani?", a: ["Ishlaganligi uchun muvaffaqiyat qozondi", "Ishlash kerak", "Ishladi", "Ishlamaydi"], correct: 0 },
            { q: "\"Bildiğim kadarıyla...\" - ?", a: ["Bilishimcha...", "Bilmayman", "Bilishim kerak", "Bilardim"], correct: 0 },
            { q: "\"Okuduğum üzere...\" nima degani?", a: ["O'qiganimga ko'ra/asoslanib", "O'qidim", "O'qiyapman", "O'qiyman"], correct: 0 },
            { q: "\"Anladığım şu ki...\" - ?", a: ["Tushunganim shuki...", "Tushunyapman", "Tushunmadim", "Tushunaman"], correct: 0 },
            { q: "\"Söylediğim gibi...\" nima degani?", a: ["Aytganimdek...", "Aytdim", "Aytaman", "Aytmayapman"], correct: 0 },
            { q: "\"İstediğin sürece...\" - ?", a: ["Xohlaganingcha/mubodo", "Xohlasang bo'ladi", "Xohlading", "Xohlamaysan"], correct: 0 },
            { q: "\"Gittiği vakit...\" nima degani?", a: ["Ketgan vaqtda...", "Ketdi", "Ketamiz", "Ketyapmiz"], correct: 0 },
            { q: "\"Sevdiğin müddetçe...\" - ?", a: ["Sevib turganingcha/muddat mobaynida", "Sevasan", "Sevding", "Sevyapmiz"], correct: 0 }
        ],
        6: [
            { q: "\"Subjektif Anlatım\" nima?", a: ["Obyektiv nutq", "Subyektiv nutq (shaxsiy fikr)", "Ilmiy nutq", "Badiiy nutq"], correct: 1 },
            { q: "\"Bence\" nima degani?", a: ["Sizcha", "Menimcha", "Uningcha", "Bizcha"], correct: 1 },
            { q: "\"Sence\" - ?", a: ["Menimcha", "Sizcha/Seningcha", "Bizcha", "Ularcha"], correct: 1 },
            { q: "\"Öyle sanıyorum ki...\" ma'nosi?", a: ["Ishonchim komil", "Shunday deb o'ylayman/taxmin qilamanki...", "Bilmayman", "To'g'ri"], correct: 1 },
            { q: "\"Galiba\" nima degani?", a: ["Aniq", "Ehtimol/Shekilli", "Keyin", "Oldin"], correct: 1 },
            { q: "\"Belki\" - ?", a: ["Mumkin", "Balki", "Albatta", "Hech qachon"], correct: 1 },
            { q: "\"Herhalde\" nima degani?", a: ["Hech doim", "Ehtimol/Har holda", "Aniq", "To'g'ri"], correct: 1 },
            { q: "\"Tahminimce\" - ?", a: ["Bilishimcha", "Taxminimcha", "Xohishimcha", "Fikrimcha"], correct: 1 },
            { q: "\"Görünüşe göre...\" nima degani?", a: ["Ko'rinishgan ko'ra...", "Ko'ryapman", "Ko'rildi", "Ko'rinmaydi"], correct: 0 },
            { q: "\"Bana göre...\" - ?", a: ["Sizga ko'ra", "Menga ko'ra/fikrimcha", "Unga ko'ra", "Bizga ko'ra"], correct: 1 }
        ],
        7: [
            { q: "\"Olasılık Cümleleri\" (Ehtimollik)?", a: ["Anlam", "İhtimal/Olasılık", "Kesinlik", "Şüphe"], correct: 1 },
            { q: "\"-ebil/-abil\" (Imkoniyat) qo'shimchasi?", a: ["Kelajak", "Qila olish/Imkoniyat", "O'tgan", "Buyruq"], correct: 1 },
            { q: "\"Gelebilirim\" nima degani?", a: ["Kelaman", "Kela olaman/Kelishim mumkin", "Kelishim kerak", "Keldim"], correct: 1 },
            { q: "\"Yapabilirsin\" - ?", a: ["Qilishing kerak", "Qila olasan (qo'lingdan keladi)", "Qilding", "Qilyapsan"], correct: 1 },
            { q: "\"Okuyabilirler\" nima degani?", a: ["O'qidilar", "O'qiy oladilar/O'qishlari mumkin", "O'qishadi", "O'qiyaptilar"], correct: 1 },
            { q: "\"Bakabiliriz\" - ?", a: ["Qardik", "Qaray olamiz/Qarashimiz mumkin", "Qaraymiz", "Qaraylik"], correct: 1 },
            { q: "\"Anlayabilir misin?\" nima degani?", a: ["Tushundingmi?", "Tushuna olasanmi?", "Tushunyapsanmi?", "Tushunasanmi?"], correct: 1 },
            { q: "\"Gidemeyebilirim\" - ?", a: ["Ketolmayman", "Keta olmasligim mumkin", "Ketishim shart emas", "Ketmayapman"], correct: 1 },
            { q: "\"Yazamayabilirler\" nima degani?", a: ["Yozishmaydi", "Yozolmasliklari mumkin", "Yozmaydilar", "Yozishmadi"], correct: 1 },
            { q: "\"Olamaz\" nima degani?", a: ["Bo'lmaydi", "Bo'lishi mumkin emas", "Bo'lmadi", "Bo'lyapti"], correct: 1 }
        ],
        8: [
            { q: "\"Pasif Fiiller\" (Majhul nisbat)?", a: ["Etken", "Edilgen", "Dönüşlü", "İşteş"], correct: 1 },
            { q: "Majhul nisbat qo'shimchasi?", a: ["-l / -n", "-sh", "-dir", "-r"], correct: 0 },
            { q: "\"Yapıldı\" nima degani?", a: ["Qildi", "Qilindi", "Qilyapti", "Qilinadi"], correct: 1 },
            { q: "\"Görüldü\" - ?", a: ["Ko'rildi", "Ko'rdi", "Ko'ryapti", "Ko'rgan"], correct: 0 },
            { q: "\"Okundu\" nima degani?", a: ["O'qidilar", "O'qildi", "O'qiydi", "O'qilmoqda"], correct: 1 },
            { q: "\"Eski ev boyandı\" ma'nosi?", a: ["Eski uyni bo'yadi", "Eski uy bo'yaldi", "Uy yangi", "Bo'yayapmiz"], correct: 1 },
            { q: "\"Kapı kapandı\" - ?", a: ["Eshikni yopdi", "Eshik yopildi", "Eshik ochildi", "Eshik ochiq"], correct: 1 },
            { q: "\"Yemek yendi\" nima degani?", a: ["Ovqat yeyishdi", "Ovqat yeyildi", "Ovqat pishdi", "Ovqat yo'q"], correct: 1 },
            { q: "\"Mektup yazıldı\" - ?", a: ["Xat yozdi", "Xat yozildi", "Xat kelyapti", "Xat yo'q"], correct: 1 },
            { q: "\"Sınıf temizlendi\" nima degani?", a: ["Sinfni tozaladi", "Sinf tozalandi", "Sinf kir", "Tozalayapmiz"], correct: 1 }
        ],
        9: [
            { q: "\"İddia Cümleleri\"?", a: ["Savol", "Da'vo/Idda", "Tasdiq", "Inkor"], correct: 1 },
            { q: "\"Güya\" nima degani?", a: ["Aniq", "Go'yoki/Emishki", "Rostdan", "To'g'ri"], correct: 1 },
            { q: "\"Sözde\" - ?", a: ["O'zida", "Suhbatda", "Go'yoki/Nomiga/So'zda", "Gapda"], correct: 2 },
            { q: "\"Anlattığına göre...\" ma'nosi?", a: ["Gapirganim...", "Uning aytishiga ko'ra...", "Gapiradilar", "Bilmayman"], correct: 1 },
            { q: "\"Öyle olduğu söyleniyor\" nima degani?", a: ["Shunday bo'ldi", "Shunday bo'lganligi aytilmoqda", "Bilmim", "Rost"], correct: 1 },
            { q: "\"İddiaya göre...\" - ?", a: ["Taxminga ko'ra", "Da'voga ko'ra/Idda qilinishicha...", "Aniqki", "Bilamiz"], correct: 1 },
            { q: "\"Görünüşte...\" nima degani?", a: ["Ko'ryapman", "Ko'rinishidan.../Aslida esa", "Ko'rildi", "Ko'rmadim"], correct: 1 },
            { q: "\"Dediklerine göre...\" - ?", a: ["Deyishmoqdaki...", "Ular aytishicha...", "Bildilar", "Eshatildilar"], correct: 1 },
            { q: "\"Rivayete göre...\" nima degani?", a: ["Haqiqatda", "Rivoyat qilinishicha...", "Balki", "To'g'ri"], correct: 1 },
            { q: "\"Gelen bilgilere göre...\" - ?", a: ["Kelyapman", "Kelgan ma'lumotlarga ko'ra...", "Bilardim", "Bildiridilar"], correct: 1 }
        ],
        10: [
            { q: "\"Kesin Zaman\"?", a: ["-dir / -dur", "-iyor", "-ecek", "-di"], correct: 0 },
            { q: "\"Okumaktasınız\" nima degani?", a: ["O'qish kerak", "O'qiyapsizlar (rasmiy)", "O'qidingiz", "O'qiysiz"], correct: 1 },
            { q: "\"Yapmaktayım\" - ?", a: ["Qilyapman (rasmiy)", "Qildim", "Qilaman", "Qilganman"], correct: 0 },
            { q: "\"Gelmektedir\" nima degani?", a: ["Keladi (doimiy/rasmiy)", "Keldi", "Kelyapti", "Kelgan"], correct: 0 },
            { q: "\"Ders bitmiştir\" - ?", a: ["Dars tugadi (qat'iy)", "Dars boshlandi", "Dars bo'lyapti", "Dars yo'q"], correct: 0 },
            { q: "\"Giriş yasaktır\" nima degani?", a: ["Kirish mumkin", "Kirish taqiqlangan", "Kirish ochiq", "Yopish"], correct: 1 },
            { q: "\"Süre dolmuştur\" - ?", a: ["Vaqt bor", "Vaqt tugadi (to'ldi)", "Vaqt kelyapti", "Vaqt kam"], correct: 1 },
            { q: "\"Karar verilmiştir\" nima degani?", a: ["Qaror qabul qilindi (aniq/yakuniy)", "Qaror yo'q", "O'ylayapmiz", "Bilmadim"], correct: 0 },
            { q: "\"Sonuç açıklanacaktır\" - ?", a: ["Natija aytiladi (aniq)", "Natija yo'q", "Natija chiqdi", "Natija kutyapmiz"], correct: 0 },
            { q: "\"Lütfen sessiz olalım\" ma'nosi?", a: ["Gapiring", "Iltimos, jim bo'laylik", "Keling", "Ketaylik"], correct: 1 }
        ],
        11: [
            { q: "\"Eylemsiler II - Gelecek Zaman Sıfat-fiili\"?", a: ["-acak/-ecek", "-miş", "-en", "-ar"], correct: 0 },
            { q: "\"Gelecek hafta\" nima degani?", a: ["Kelgan hafta", "Kelasi hafta", "Bu hafta", "O'tgan hafta"], correct: 1 },
            { q: "\"Yapacak iş\" - ?", a: ["Qilingan ish", "Qilinadigan ish", "Ish yo'q", "Ish kelyapti"], correct: 1 },
            { q: "\"Okuyacak çocuk\" nima degani?", a: ["O'qigan bola", "O'qiydigan bola (kelajakda)", "Bola o'qidi", "Bola o'qiyapti"], correct: 1 },
            { q: "\"Görülecek yerler\" - ?", a: ["Ko'rilgan joylar", "Ko'riladigan (ko'rish kerak bo'lgan) joylar", "Ko'rilmadi", "Joylar yo'q"], correct: 1 },
            { q: "\"Pişecek yemek\" nima degani?", a: ["Pishgan ovqat", "Pishadigan ovqat", "Ovqat yo'q", "Ovqat pishdi"], correct: 1 },
            { q: "\"Yetecek kadar\" - ?", a: ["Yetganicha", "Yetadigan darajada", "Yetmaydi", "Juda ko'p"], correct: 1 },
            { q: "\"Bitecek film\" nima degani?", a: ["Tugagan film", "Tugaydigan film", "Film o'rtasida", "Film yo'q"], correct: 1 },
            { q: "\"Solacak çiçek\" - ?", a: ["So'lgan gul", "So'ladigan gul", "Gul o'syapti", "Gul yo'q"], correct: 1 },
            { q: "\"Uçacak kuş\" nima degani?", a: ["Uchgan qush", "Uchadigan qush", "Qush o'tiribdi", "Qush yo'q"], correct: 1 }
        ],
        12: [
            { q: "\"Eylemsiler III - Geçmiş Zaman Sıfat-fiili\"?", a: ["-en", "-miş / -dik", "-ar", "-ecek"], correct: 1 },
            { q: "\"Gelen yolcu\" nima degani?", a: ["Kelgan yo'lovchi", "Keladigan yo'lovchi", "Kelyapdi", "Ketgan yo'lovchi"], correct: 0 },
            { q: "\"Yaptığım hata\" - ?", a: ["Qiladigan hatoyim", "Qilgan hatoyim", "Hata yo'q", "Qildim"], correct: 1 },
            { q: "\"Bildiğin konu\" nima degani?", a: ["Biladigan mavzuing", "Senga ma'lum bo'lgan (bilgan) mavzuing", "Bilyapsan", "Biilmaysan"], correct: 1 },
            { q: "\"Gördüğüm manzara\" - ?", a: ["Ko'rib turgan manzaram", "Ko'rgan manzaram", "Ko'rmadim", "Ko'raman"], correct: 1 },
            { q: "\"Tanıdığım biri\" nima degani?", a: ["Taniydigan odamim", "Men taniydigan (tanish) odam", "Tanimayman", "Tanishishdi"], correct: 1 },
            { q: "\"Okuduğum kitap\" - ?", a: ["O'qiyotgan kitobim", "O'qigan kitobim", "O'qiyman", "O'qiding"], correct: 1 },
            { q: "\"Gittiği yer\" nima degani?", a: ["Ketadigan joyi", "U ketgan joy", "Joy yo'q", "Ketildi"], correct: 1 },
            { q: "\"Sevdiğim film\" - ?", a: ["Sevadigan filmim", "Menga yoqqan (sevgan) filmim", "Film yo'q", "Sevaman"], correct: 1 },
            { q: "\"Aldığım karar\" nima degani?", a: ["Oladigan qarorim", "Men qabul qilgan (olgan) qarorim", "Qaror yo'q", "Oldim"], correct: 1 }
        ],
        13: [
            { q: "\"Gelişmiş Sıfatlar\"?", a: ["Otlar", "Fe'ldan yasalgan sifatlar (Sifatdosh)", "Ravishlar", "Bog'lovchilar"], correct: 1 },
            { q: "\"Kırılmış bardak\" nima degani?", a: ["Sinadigan stakan", "Singan stakan", "Stakan butun", "Sindi"], correct: 1 },
            { q: "\"Pişmiş aş\" - ?", a: ["Pishadigan ovqat", "Pishgan ovqat", "Ovqat xom", "Pishdi"], correct: 1 },
            { q: "\"Unutulmuş anılar\" nima degani?", a: ["Unutiladigan xotiralar", "Unutilgan xotiralar", "Xotirladik", "Unutdik"], correct: 1 },
            { q: "\"Yırtılmış sayfa\" - ?", a: ["Yirtiladigan sahifa", "Yirtilgan sahifa", "Sahifa o'qildi", "Sindi"], correct: 1 },
            { q: "\"Bilinmiş gerçekler\" nima degani?", a: ["Ma'lum bo'lgan haqiqatlar", "Bilmadik", "Bilyapmiz", "Bilishadi"], correct: 0 },
            { q: "\"Kızarmış ekmek\" - ?", a: ["Qizargan non", "Non qiziryapti", "Qizitilgan non", "Shirin non"], correct: 0 },
            { q: "\"Haşlanmış yumurta\" nima degani?", a: ["Qovurilgan tuxum", "Qaynatilgan tuxum", "Xom tuxum", "Tuxum yo'q"], correct: 1 },
            { q: "\"Yenilenmiş oda\" - ?", a: ["Yangilangan xona", "Xona yangilanadi", "Yangi xona", "Xonani yopish"], correct: 0 },
            { q: "\"Bozulmuş saat\" nima degani?", a: ["Tuzalgan soat", "Buzilgan soat", "Soat ishlaydi", "Sotildi"], correct: 1 }
        ],
        14: [
            { q: "\"Metin Tahlili\" (Matn tahlili) nima uchun kerak?", a: ["Gapirish uchun", "Mazmunni chuqur tushunish uchun", "Yozish uchun", "Lug'at uchun"], correct: 1 },
            { q: "\"Tema\" nima degani?", a: ["Ism", "Mavzu/Tez", "Vaqt", "Joy"], correct: 1 },
            { q: "\"Ana fikir\" - ?", a: ["Asosiy g'oya", "Yomon fikr", "Yangi fikr", "Eski fikr"], correct: 0 },
            { q: "\"Karakter\" nima degani?", a: ["Mavzu", "Qahramon/Xarakter", "Sahna", "Libos"], correct: 1 },
            { q: "\"Olay örgüsü\" - ?", a: ["Voqealar rivoji", "Tushuntirish", "Tushunish", "Xulosa"], correct: 0 },
            { q: "\"Tasvir\" nima degani?", a: ["Natija", "Tasvirlash/Tavsiflash", "Inkor", "Tasdiq"], correct: 1 },
            { q: "\"Diyalog\" - ?", a: ["Monolog", "Muloqot/Dialoq", "Nutq", "Eshatish"], correct: 1 },
            { q: "\"Sonuç\" nima degani?", a: ["Boshlanish", "Natija/Yakun", "O'rtasi", "Mavzu"], correct: 1 },
            { q: "\"Giriş\" - ?", a: ["Chiqish", "Kirish/Muqaddima", "Mato", "Zamon"], correct: 1 },
            { q: "\"Gelişme\" nima degani?", a: ["To'xtab qolish", "Rivojlanish/Asosiy qism", "Natija", "Xulosa"], correct: 1 }
        ],
        15: [
            { q: "\"Toplum\" nima degani?", a: ["Shaxs", "Jamiyat", "Davlat", "Hukumat"], correct: 1 },
            { q: "\"Eğitim\" - ?", a: ["Ish", "Ta'lim", "Sayohat", "O'yin"], correct: 1 },
            { q: "\"Ekonomi\" nima degani?", a: ["Siyosat", "Iqtisodiyot", "Tarix", "Geografiya"], correct: 1 },
            { q: "\"Siyaset\" - ?", a: ["San'at", "Siyosat", "Sport", "Diniy"], correct: 1 },
            { q: "\"Sağlık sistemi\" nima degani?", a: ["Ta'lim tizimi", "Sog'liqni saqlash tizimi", "Bank tizimi", "Soliq tizimi"], correct: 1 },
            { q: "\"Teknoloji\" - ?", a: ["Qishloq xo'jaligi", "Texnologiya", "Xizmat ko'rsatish", "Savdo"], correct: 1 },
            { q: "\"Çevre\" nima degani?", a: ["Joy", "Atrof-muhit", "Oila", "Do'stlar"], correct: 1 },
            { q: "\"Hukuk\" - ?", a: ["Tarix", "Huquq", "Til", "Adabiyot"], correct: 1 },
            { q: "\"Sanat\" nima degani?", a: ["Sport", "San'at", "Fan", "Hunar"], correct: 1 },
            { q: "\"Medya\" - ?", a: ["Do'kon", "Ommaviy axborot vositalari (Mediya)", "Bog'", "Maktab"], correct: 1 }
        ]
    },
    'C1': {
        1: [
            { q: "\"İstek Kipi\" (1. Ko'plik)?", a: ["Bakalım", "Bakarız", "Baktık", "Bakacağız"], correct: 0 },
            { q: "\"Gidelim\" nima degani?", a: ["Ketdik", "Ketaylik", "Ketamiz", "Ketmoqchimiz"], correct: 1 },
            { q: "\"Yapalım\" - ?", a: ["Qildik", "Qilaylik", "Qilyapmiz", "Qilganmiz"], correct: 1 },
            { q: "\"Okuyalım mı?\" ma'nosi?", a: ["O'qidimmi?", "O'qiylikmi?", "O'qiymizmi?", "O'qidingmi?"], correct: 1 },
            { q: "\"Bilelim\" nima degani?", a: ["Bildik", "Bilaylik", "Bilamiz", "Bilyapmiz"], correct: 1 },
            { q: "\"Konuşalım\" - ?", a: ["Gapirdik", "Gapiraylik", "Gapiryapmiz", "Gapirganmiz"], correct: 1 },
            { q: "\"Görmeyelim\" nima degani?", a: ["Ko'rmadik", "Ko'rmaylik", "Ko'rmayapmiz", "Ko'rmaymiz"], correct: 1 },
            { q: "\"Gelmeyelim\" - ?", a: ["Kelmadik", "Kelmaylik", "Kelmaymiz", "Kelmayapmiz"], correct: 1 },
            { q: "\"Yenileyelim\" nima degani?", a: ["Yangiladik", "Yangilaylik", "Yangilaymiz", "Yangilanyapmiz"], correct: 1 },
            { q: "\"Başlayalım mı?\" ma'nosi?", a: ["Boshladikmi?", "Boshlaylikmi?", "Boshlaymizmi?", "Boshladingmi?"], correct: 1 }
        ],
        2: [
            { q: "\"İlgeçler Advanced\"?", a: ["Gibi", "Nazaran / Kıyasla", "İçin", "İle"], correct: 1 },
            { q: "\"Geçen yıla nazaran...\" nima degani?", a: ["O'tgan yil uchun", "O'tgan yilga nisbatan/qaraganda...", "O'tgan yildan beri", "Bu yil kabi"], correct: 1 },
            { q: "\"Buna kıyasla...\" - ?", a: ["Bunga ko'ra", "Bunga qiyoslaganda...", "Buni uchun", "Shu sababli"], correct: 1 },
            { q: "\"Şu ana değin...\" nima degani?", a: ["Hozirgacha/Shu vaqtgacha...", "Hozir", "Keyin", "Oldin"], correct: 0 },
            { q: "\"Aksi takdirde...\" - ?", a: ["Shunday bo'lsa", "Aks holda/Bo'lmasa...", "Chunki", "Lekin"], correct: 1 },
            { q: "\"Nitekim...\" nima degani?", a: ["Chunki", "Darhaqiqat/Shuningdek (xuddi shunday)...", "Lekin", "Balki"], correct: 1 },
            { q: "\"Meğer...\" - ?", a: ["Chunki", "Mabodo/Eshitsamki/Aslida esa (kutilmagan holat)...", "Lekin", "Va"], correct: 1 },
            { q: "\"Zira...\" nima degani?", a: ["Lekin", "Chunki/Zotan...", "Keyin", "Oldin"], correct: 1 },
            { q: "\"Mamafih...\" - ?", a: ["Chunki", "Shunga qaramay/Shunday bo'lsa-da...", "Keyin", "Balki"], correct: 1 },
            { q: "\"Eskiye oranla...\" nima degani?", a: ["Eski", "Eskiga qaraganda/nisbatan...", "Yangi", "Bildik"], correct: 1 }
        ],
        3: [
            { q: "\"Adlaşmış Sıfatlar\"?", a: ["Otga aylangan sifatlar", "Fe'llar", "Otlar", "Ravishlar"], correct: 0 },
            { q: "\"Yaşlılar\" nima degani?", a: ["Yillar", "Qariyalar (yoshi kattalar)", "Yoshlar", "Odamlar"], correct: 1 },
            { q: "\"Gençler\" - ?", a: ["Qariyalar", "Yoshlar", "Bolalar", "Ayollar"], correct: 1 },
            { q: "\"Çalışkanlar\" nima degani?", a: ["Tirishqoqlar", "Dangasalik", "Ishchilar", "O'quvchilar"], correct: 0 },
            { q: "\"Güzeller\" - ?", a: ["Yomonlar", "Chiroylilar", "Yaxshilar", "Xunuklar"], correct: 1 },
            { q: "\"Zenginler\" nima degani?", a: ["Kambag'allar", "Boylar", "Odamlar", "Do'stlar"], correct: 1 },
            { q: "\"Kambag'allar\" turkchada?", a: ["Zenginler", "Fakirler", "Kötüler", "Haydutlar"], correct: 1 },
            { q: "\"İyiler\" nima degani?", a: ["Yaxshilar", "Yomonlar", "Dushmanlar", "Do'stlar"], correct: 0 },
            { q: "\"Kötüler\" - ?", a: ["Yaxshilar", "Yomonlar", "O'g'rilar", "Asabiy"], correct: 1 },
            { q: "\"Doğrular\" nima degani?", a: ["Yolg'onlar", "Haqiqatlar/To'g'rilar", "Xatolar", "Savollar"], correct: 1 }
        ],
        4: [
            { q: "\"Fiilimsiler Advanced\"?", a: ["-ma", "-ış", "-maklık / -ışma", "Hech biri"], correct: 2 },
            { q: "\"Okuyuşun çok güzel\" nima degani?", a: ["O'qishing (uslubing) juda chiroyli", "O'qiding", "O'qiysan", "O'qiyapsan"], correct: 0 },
            { q: "\"Gülüşün beni mutlu etti\" - ?", a: ["Kulganing...", "Kulishing/Kulging meni baxtli qildi", "Kuldik", "Kulishadi"], correct: 1 },
            { q: "\"Bakış açısı\" nima degani?", a: ["Qarash uchun", "Dunyoqarash/Qarash nuqtayi nazari", "O'ylash", "Ko'rish"], correct: 1 },
            { q: "\"Konuşma tarzı\" - ?", a: ["Gapirish uchun", "Gapirish uslubi/tarzi", "Gapirdi", "Gapiramiz"], correct: 1 },
            { q: "\"Yürüyüşe çıktık\" nima degani?", a: ["Yugurdik", "Sayrga (yurishga) chiqdik", "Keldik", "Ketdik"], correct: 1 },
            { q: "\"Geliş saati\" - ?", null: "...", a: ["Ketish vaqti", "Kelish vaqti", "Vaqt yo'q", "Keldi"], correct: 1 },
            { q: "\"Bekleyiş ne zaman biter?\" ma'nosi?", a: ["Kutyapmiz", "Kutish (intizorlik) qachon tugaydi?", "Kutdik", "Kutamiz"], correct: 1 },
            { q: "\"Anlatış biçimi\" nima degani?", a: ["Gapirgan", "Tushuntirish/Gapirish uslubi", "Gapirdik", "Gapamiz"], correct: 1 },
            { q: "\"Yapış şekli\" - ?", a: ["Qilingan", "Qilish uslubi/shakli", "Qildik", "Qilamiz"], correct: 1 }
        ],
        5: [
            { q: "\"Birleşik Fiiller Advanced\"?", a: ["Gelemem", "Gelebilirmiş", "Gidedur / Geleyazdı", "Yapmak"], correct: 2 },
            { q: "\"Gidedur\" nima degani?", a: ["Ketyapman", "Ketaver/Keta tur", "Ketish", "Ketmadi"], correct: 1 },
            { q: "\"Baka kaldım\" - ?", a: ["Qarab qoldim", "Ko'rdim", "Ushladim", "Ketdum"], correct: 0 },
            { q: "\"Uyuyakaldı\" nima degani?", a: ["Uxlab qoldi", "Uxlamadi", "Uyg'ondi", "Uxlaydi"], correct: 0 },
            { q: "\"Süregelmek\" - ?", a: ["Dovom etib kelmoq", "To'xtamoq", "Boshlanmoq", "Tugamoq"], correct: 0 },
            { q: "\"Düşeyazdı\" nima degani?", a: ["Yiqildi", "Yiqilishiga oz qoldi/Yiqila yozdi", "Yiqilmadi", "YurdI"], correct: 1 },
            { q: "\"Öleyazdı\" - ?", a: ["O'ldi", "O'lishiga oz qoldi/O'la yozdi", "O'lmaydi", "Yashadi"], correct: 1 },
            { q: "\"Söyleyedur\" nima degani?", a: ["Gapir", "Gapiraver/Aytib tur", "Sukunat", "Aytmagin"], correct: 1 },
            { q: "\"Bileyazdı\" - ?", a: ["Bildi", "Bilishiga oz qoldi", "Bilmadi", "O'rgandi"], correct: 1 },
            { q: "\"Gidiverdi\" nima degani?", a: ["Sekin ketdi", "Tezda/Birdaniga ketib qoldi", "Ketmadi", "Keldi"], correct: 1 }
        ],
        6: [
            { q: "\"Vurgu ve Tonlama\"?", a: ["So'z urg'usi va ohang", "Lug'at", "Imlo", "Grammatika"], correct: 0 },
            { q: "\"Neresi?\" so'zida urg'u qayerda?", a: ["Oxiri", "Boshida (Ne-)", "O'rtasi", "Urg'u yo'q"], correct: 1 },
            { q: "\"Ankara\"da urg'u?", a: ["-ra", "An-", "-ka-", "Hammasi"], correct: 1 },
            { q: "\"Geliyorum\"da urg'u?", a: ["-um", "Ge-", "-li-", "-yor-"], correct: 3 },
            { q: "\"Gitme!\"da urg'u?", a: ["-me", "Git-", "Oxiri", "Boshida"], correct: 1 },
            { q: "\"Araba\"da urg'u?", a: ["-ba", "A-", "-ra-", "Hech biri"], correct: 0 },
            { q: "\"Kitapçı\"da urg'u?", a: ["-çı", "Ki-", "-tap-", "Oxiri"], correct: 0 },
            { q: "\"Çalışkan\"da urg'u?", a: ["-kan", "Ça-", "-lış-", "Oxhirida"], correct: 0 },
            { q: "\"Masa\"da urg'u?", a: ["-sa", "Ma-", "Har ikkala", "Hech qaysi"], correct: 1 },
            { q: "\"Dün\" so'zida urg'u?", a: ["Birinchi bo'g'in", "Oxirgi", "Urg'u shart emas", "Boshda"], correct: 0 }
        ],
        7: [
            { q: "\"Akademik Dil\" xususiyati?", a: ["Sodda", "Murakkab va qat'iy", "Ko'cha tili", "Qisqa"], correct: 1 },
            { q: "\"Hipotez\" nima degani?", a: ["Natija", "Gipoteza/Taxmin", "Haqiqat", "Qonun"], correct: 1 },
            { q: "\"Veri\" - ?", a: ["Natija", "Ma'lumotlar/Bazoviy ma'lumot", "Tahlil", "Xulosa"], correct: 1 },
            { q: "\"Analiz\" nima degani?", a: ["To'plash", "Tahlil", "Sintez", "Inkor"], correct: 1 },
            { q: "\"Tez\" - ?", a: ["Ilmiy ish/Tezis", "Kitob", "Maqola", "Lug'at"], correct: 0 },
            { q: "\"Yöntem\" nima degani?", a: ["Maqsad", "Metod/Uslub/Yondashuv", "Natija", "Reja"], correct: 1 },
            { q: "\"Kaynak\" - ?", a: ["Suv", "Manba", "Darslik", "Kitob"], correct: 1 },
            { q: "\"Atıf\" nima degani?", a: ["Iqtibos/Havola", "Yozma", "O'qish", "Natija"], correct: 0 },
            { q: "\"Kuram\" - ?", a: ["Amaliyot", "Nazariya", "Reja", "Vazifa"], correct: 1 },
            { q: "\"Bulgu\" nima degani?", a: ["Xato", "Topilma/Natija", "Ma'lumot", "Savol"], correct: 1 }
        ],
        8: [
            { q: "\"Resmi Yazışmalar\" (Rasmiy yozishmalar)?", a: ["Email", "Arziza/Rasmiy xat", "Chat", "Eslatma"], correct: 1 },
            { q: "\"Dilekçe\" nima degani?", a: ["Xat", "Ariza (rasmiy)", "Kitob", "Hujjat"], correct: 1 },
            { q: "\"Arz ederim\" ma'nosi?", a: ["Xohlayman", "Taklif/Arz qilaman (pastdan yuqoriga)", "Bilaman", "Bo'ldi"], correct: 1 },
            { q: "\"Sayın...\" - ?", a: ["Salom", "Hurmatli/Muhtaram...", "Qadrdon", "Do'stim"], correct: 1 },
            { q: "\"Bilgilerinize sunulur\" nima degani?", a: ["Sizga ma'lum qiladi", "Ma'lumotingiz uchun taqdim etiladi", "Bilib oling", "Bo'ldi"], correct: 1 },
            { q: "\"Gereği rica olunur\" - ?", a: ["Iltimos qilaman", "Kerakli choralarni ko'rishingizni so'rayman", "Qiling", "Bo'lmadi"], correct: 1 },
            { q: "\"İmza\" nima degani?", a: ["Muhr", "Imzo", "Sana", "Ism"], correct: 1 },
            { q: "\"Tarih\" - ?", a: ["Ism", "Sana (va tarix)", "Joy", "Raqam"], correct: 1 },
            { q: "\"Konu\" nima degani?", a: ["Mavzu", "Matn", "Xulosa", "Salom"], correct: 0 },
            { q: "\"Ekler\" - ?", a: ["Boshlanish", "Ilovalar", "Natija", "Imzo"], correct: 1 }
        ],
        9: [
            { q: "\"İleri Düzey Kelime Hazinesi\"?", a: ["Sodda so'zlar", "Murakkab/Nodir so'zlar", "Faqat otlar", "Faqat fe'llar"], correct: 1 },
            { q: "\"Hassasiyet\" nima degani?", a: ["Qattiqlik", "Noziklik/Sezuvchanlik", "Kuchsizlik", "Rang"], correct: 1 },
            { q: "\"Kabiliyet\" - ?", a: ["Qobiliyat", "Bilim", "Kuch", "Vaqt"], correct: 0 },
            { q: "\"Özveri\" nima degani?", a: ["Xudbinlik", "Fidoyilik", "Xasislik", "Baxillik"], correct: 1 },
            { q: "\"İstikrar\" - ?", a: ["O'zgaruvchanlik", "Barqarorlik", "Tinchlik", "Urush"], correct: 1 },
            { q: "\"Mahrum\" nima degani?", a: ["Bor", "Mahrum/Yo'q", "Kamyob", "Ko'p"], correct: 1 },
            { q: "\"Münasip\" - ?", a: ["Noto'g'ri", "Munosib", "Yomon", "Eski"], correct: 1 },
            { q: "\"Sarsılmaz\" nima degani?", a: ["Bo'sh", "Sarsilmas/Chidamli", "Eski", "Yangi"], correct: 1 },
            { q: "\"Titizlik\" - ?", a: ["Ehtiyotsizlik", "Lanjlik/Ehtiyotkorlik (titizlik)", "Tezlik", "Sekinlik"], correct: 1 },
            { q: "\"Yegane\" nima degani?", a: ["Ko'p", "Yagona", "Boshqa", "Hammasi"], correct: 1 }
        ],
        10: [
            { q: "\"Mantık Hataları\" (Mantiqiy xatolar)?", a: ["Grammatika", "Mantiqiy xatoliklar", "Imlo", "Ohang"], correct: 1 },
            { q: "\"Çelişki\" nima degani?", a: ["Moslik", "Ziddiyat", "Haqiqat", "Yolg'on"], correct: 1 },
            { q: "\"Ön yargı\" - ?", a: ["Fikr", "Oldindan xulosa (prejudis)", "Bilim", "Tajriba"], correct: 1 },
            { q: "\"Abartı\" nima degani?", a: ["Kamaytirib ko'rsatish", "Mubolag'a/Bo'rttirish", "Rost", "Xato"], correct: 1 },
            { q: "\"Genelleme\" - ?", a: ["Xususiylashtirish", "Umumlashtirish", "Yolg'on", "To'g'ri"], correct: 1 },
            { q: "\"Sapma\" nima degani?", a: ["To'g'ri cho'zish", "Og'ish/Chetlanish", "Natija", "Reja"], correct: 1 },
            { q: "\"Yanlış kıyas\" - ?", a: ["To'g'ri qiyos", "Noto'g'ri qiyoslash", "Natija", "Bilim"], correct: 1 },
            { q: "\"Kısır döngü\" nima degani?", a: ["To'rtburchak", "Yopiq (besamar) aylana", "Uchburchak", "Chiziq"], correct: 1 },
            { q: "\"Tutarsızlık\" - ?", a: ["Barqarorlik", "Muntazamsizlik/Nomuvofiqlik", "Aniqlik", "Rost"], correct: 1 },
            { q: "\"İddia\" nima degani?", a: ["Natija", "Idda/Da'vo", "Bilim", "Savol"], correct: 1 }
        ],
        11: [
            { q: "\"Anlatım Bozuklukları\" (Nutqiy nuqsonlar)?", a: ["Xato so'zlash", "To'g'ri gapirish", "Chiroyli she'r", "Lug'at"], correct: 0 },
            { q: "\"Gereksiz sözcük kullanımı\" xatosi?", a: ["Kerakli so'z", "Ortiqcha so'z ishlatish", "Kam so'z", "Yangi so'z"], correct: 1 },
            { q: "\"Çelişen sözcükler\" xatosi?", a: ["Sinonimlar", "Bir-biriga zid so'zlar", "Antonimlar", "Omonimlar"], correct: 1 },
            { q: "\"Sözcüğün yanlış yerde kullanımı\"?", a: ["To'g'ri joy", "So'zning noto'g'ri o'rinda bo'lishi", "Yangi joy", "Eski so'z"], correct: 1 },
            { q: "\"Deyim hatası\" - ?", a: ["To'g'ri ibora", "Iborani noto'g'ri qo'llash", "Yangi ibora", "Eski ibora"], correct: 1 },
            { q: "\"Mantık ve sıralama hatası\"?", a: ["To'g'ri mantiq", "Mantiq va ketma-ketlik xatosi", "Yaxshi mantiq", "Bilim"], correct: 1 },
            { q: "\"Özne-Yüklem uyuşmazlığı\"?", a: ["Ega va kesim moslashmasligi", "To'g'ri gap", "Sifatdosh", "Ravishdosh"], correct: 0 },
            { q: "\"Tamlama hatası\" - ?", a: ["To'g'ri so'z birikmasi", "Birikma yasashdagi xatolik", "Sifat", "Ot"], correct: 1 },
            { q: "\"Dolaylı tümleç eksikliği\"?", a: ["To'g'ri gap", "To'ldiruvchi yetishmasligi", "Ega yetishmasligi", "Kesim yetishmasligi"], correct: 1 },
            { q: "\"Noktalama hataları\"?", a: ["Imlo xatosi", "Tinish belgilari xatosi", "Talaffuz xatosi", "Lug'at xatosi"], correct: 1 }
        ],
        12: [
            { q: "\"Edebi Sanatlar\" (Badiiy san'atlar)?", a: ["Rasm", "Adabiy/Badiiy san'atlar", "Musiqa", "Raqs"], correct: 1 },
            { q: "\"Teşbih\" nima degani?", a: ["Inkor", "O'xshatish", "Mubolag'a", "Savol"], correct: 1 },
            { q: "\"Mübalağa\" - ?", a: ["Soddalik", "Bo'rttirish/Mubolag'a", "Rost", "Xato"], correct: 1 },
            { q: "\"Tezat\" nima degani?", a: ["O'xshashtik", "Zidlik/Antiteza", "Natija", "Tasdiq"], correct: 1 },
            { q: "\"İntak\" - ?", a: ["Uxlatish", "Jonlantirish/Nutq berish (nutqlantirish)", "Ko'rish", "Eshitish"], correct: 1 },
            { q: "\"Teşhis\" nima degani?", a: ["Insonlashtirish", "Inkor", "Bilim", "Savol"], correct: 0 },
            { q: "\"Kinaye\" - ?", a: ["To'g'ri so'z", "Kinoya/Piching", "Maqtov", "Xushomad"], correct: 1 },
            { q: "\"Tariz\" nima degani?", a: ["Tasdiq", "Piching/Kesatiq", "Rost", "Yaxshi so'z"], correct: 1 },
            { q: "\"İstiare\" - ?", a: ["Ochiq so'z", "Metafora/Isti'ora", "Savol", "Inkor"], correct: 1 },
            { q: "\"Tenasüp\" nima degani?", a: ["Muvofiqlik (so'zlar orasidagi)", "Ziddiyat", "Xato", "Hech biri"], correct: 0 }
        ],
        13: [
            { q: "\"Sosyolojik Terimler\"?", a: ["Tarixiy", "Sotsiologik terminlar", "Biologik", "Kimyoviy"], correct: 1 },
            { q: "\"Toplumsal yapı\" nima degani?", a: ["Bino", "Ijtimoiy tuzilma", "Shaxsiy hayot", "O'yin"], correct: 1 },
            { q: "\"Norm\" - ?", a: ["Xato", "Me'yor/Norma", "Qonun", "Fikr"], correct: 1 },
            { q: "\"Statü\" nima degani?", a: ["Joy", "Ijtimoiy mavqe/Status", "Vaqt", "Ism"], correct: 1 },
            { q: "\"Rol\" - ?", a: ["Vazifa/Rol", "O'yin", "Kiyim", "Natija"], correct: 0 },
            { q: "\"Etkileşim\" nima degani?", a: ["To'xtash", "O'zaro ta'sir/Interaksiya", "Ketish", "Kelish"], correct: 1 },
            { q: "\"Kültürel miras\" - ?", a: ["Eski buyum", "Madaniy meros", "Yangi madaniyat", "Bilim"], correct: 1 },
            { q: "\"Sınıflandırma\" nima degani?", a: ["Birlashtirish", "Turkumlash/Tasniflash", "Inkor", "Xato"], correct: 1 },
            { q: "\"Azınlık\" - ?", a: ["Ko'pchilik", "Ozchilik", "Hammasi", "Hech biri"], correct: 1 },
            { q: "\"Çoğunluk\" nima degani?", a: ["Ozchilik", "Ko'pchilik", "Yarmi", "Hech kim"], correct: 1 }
        ],
        14: [
            { q: "\"Ekonomik Analiz\"?", a: ["Siyosat", "Iqtisodiy tahlil", "Tarix", "Geografiya"], correct: 1 },
            { q: "\"Enflasyon\" nima degani?", a: ["Deflyatsiya", "Inflatsiya (narx navo oshishi)", "Krizis", "O'sish"], correct: 1 },
            { q: "\"Büyüme oranı\" - ?", a: ["Kamayish", "O'sish sur'ati", "Vaqt", "Joy"], correct: 1 },
            { q: "\"İhracat\" nima degani?", a: ["Import", "Eksport (tashqari)", "Savdo", "Soliq"], correct: 1 },
            { q: "\"İthalat\" - ?", a: ["Eksport", "Import (ichkariga)", "Bozor", "Pul"], correct: 1 },
            { q: "\"Bütçe\" nima degani?", a: ["Soliq", "Byudjet", "Daromad", "Xarajat"], correct: 1 },
            { q: "\"Yatırım\" - ?", a: ["Sotish", "Investitsiya/Sarmoya", "To'lash", "Sotib olish"], correct: 1 },
            { q: "\"Piyasa\" nima degani?", a: ["Do'kon", "Bozor/Market", "Bank", "Soliq"], correct: 1 },
            { q: "\"İstihdam\" - ?", a: ["Ishsizlik", "Bandlik (ish bilan ta'minlash)", "Oshirish", "Kamaytirish"], correct: 1 },
            { q: "\"Sermaye\" nima degani?", a: ["Ishchi", "Sarmoya/Kapital", "Boshliq", "Joy"], correct: 1 }
        ],
        15: [
            { q: "\"Globalleşme\" (Globallashuv) nima?", a: ["Mahalliylashuv", "Globallashuv", "Ajralish", "Urush"], correct: 1 },
            { q: "\"Dijitalleşme\" - ?", a: ["Raqamlashtirish", "Eski uslub", "Yozma", "Og'zaki"], correct: 0 },
            { q: "\"Sürdürülebilirlik\" nima degani?", a: ["Qisqa muddatli", "Barqaror rivojlanish", "Tezkor", "Sekin"], correct: 1 },
            { q: "\"İnovasyon\" - ?", a: ["Eski narsa", "Innovatsiya/Yangilik kiritish", "Haqiqat", "Yozuv"], correct: 1 },
            { q: "\"Yapay zeka\" nima degani?", a: ["Odam ongi", "Sun'iy intellekt", "Robot", "Kompyuter"], correct: 1 },
            { q: "\"İklim değişikliği\" - ?", a: ["Havo yaxshilanishi", "Iqlim o'zgarishi", "Suv balandligi", "Issiq"], correct: 1 },
            { q: "\"Demokrasi\" nima degani?", a: ["Diktatura", "Demokratiya", "Podshohlik", "Siyosat"], correct: 1 },
            { q: "\"İnsan hakları\" - ?", a: ["Hayvon huquqlari", "Inson huquqlari", "Tosh huquqlari", "Bolalar"], correct: 1 },
            { q: "\"Barış\" nima degani?", a: ["Urush", "Tinchlik", "Kelishuv", "Ochiqlik"], correct: 1 },
            { q: "\"Hoşgörü\" - ?", a: ["Baxillik", "Bag'rikenglik/Tolerantlik", "Xasislik", "Yomonlik"], correct: 1 }
        ]
    },
    'C2': {
        1: [
            { q: "\"Edebi Eleştiri\" (Adabiy tanqid)?", a: ["Kitobxon", "Adabiy tanqid", "Yozuvchi", "Shoir"], correct: 1 },
            { q: "\"Kurgu\" nima degani?", a: ["Haqiqat", "To'qima/Badiiy kurgu", "Tarix", "Xurmat"], correct: 1 },
            { q: "\"Üslup\" - ?", a: ["Mavzu", "Uslub/Stil", "Mazmun", "Sarlavha"], correct: 1 },
            { q: "\"İmge\" nima degani?", a: ["Haqiqat", "Obraz/Timsol/Tasvir", "So'z", "Harf"], correct: 1 },
            { q: "\"Anlam derinliği\" - ?", a: ["Sayozlik", "Ma'no chuqurligi", "Kenglik", "Balandlik"], correct: 1 },
            { q: "\"Betimleme\" nima degani?", a: ["Tahlil", "Tasvirlash/Tavsiflash", "Inkor", "Tasdiq"], correct: 1 },
            { q: "\"Özgünlük\" - ?", a: ["Nusxa", "Originallik/O'ziga xoslik", "Eskilik", "O'xshashlik"], correct: 1 },
            { q: "\"Sürrealizm\" nima degani?", a: ["Realizm", "Syurrealizm (g'ayritabiiy)", "Klassika", "Zamonaviy"], correct: 1 },
            { q: "\"Postmodernizm\" - ?", a: ["Qadimgi", "Postmodernizm", "Yangi", "Eski"], correct: 1 },
            { q: "\"Yalınlık\" nima degani?", a: ["Murakkablik", "Soddalik/Rovonlik", "Qattiqlik", "Noziklik"], correct: 1 }
        ],
        2: [
            { q: "\"Felsefi Terimler\" (Falsafiy terminlar)?", a: ["Matematik", "Falsafiy terminlar", "Biologik", "Fizik"], correct: 1 },
            { q: "\"Varlık\" nima degani?", a: ["Yo'qlik", "Borliq", "Hayot", "O'lim"], correct: 1 },
            { q: "\"Bilinç\" - ?", a: ["Uquv", "Ong/Shuur", "Tushunish", "Bilim"], correct: 1 },
            { q: "\"Ahlak\" nima degani?", a: ["Aqlli", "Axloq/Etika", "Xulq", "Odob"], correct: 1 },
            { q: "\"İrade\" - ?", a: ["Majburiyat", "Iroda", "Kuch", "Xohish"], correct: 1 },
            { q: "\"Mantık\" nima degani?", a: ["His", "Mantiq", "Tasavvur", "Xotira"], correct: 1 },
            { q: "\"Bilgi kuramı\" - ?", a: ["Sifat", "Gnoseologiya/Bilim nazariyasi", "Fizika", "Kimyo"], correct: 1 },
            { q: "\"Metafizik\" nima degani?", a: ["Fizika", "Metafizika", "Tabiat", "Borliq"], correct: 1 },
            { q: "\"Eytişim (Diyalektik)\" - ?", a: ["Muloqot", "Dialektika", "Inkor", "Tasdiq"], correct: 1 },
            { q: "\"Öz\" nima degani?", a: ["Sirt", "Mohiyat/Mag'iz", "Joy", "Vaqt"], correct: 1 }
        ],
        3: [
            { q: "\"Siyaset Bilimi Advanced\"?", a: ["Xalq", "Siyosatshunoslik", "Davlat", "Hukumat"], correct: 1 },
            { q: "\"Egemenlik\" nima degani?", a: ["Qaramlik", "Suverenitet/Mustaqillik", "Boshqaruv", "Tinchlik"], correct: 1 },
            { q: "\"Meşruiyet\" - ?", a: ["Qonunsizlik", "Legitimlik/Qonuniylik", "Haqiqat", "Fikr"], correct: 1 },
            { q: "\"İdeoloji\" nima degani?", a: ["Din", "Mafkura/Ideologiya", "Siyosat", "Tarix"], correct: 1 },
            { q: "\"Bürokrasi\" - ?", a: ["Demokratiya", "Byurokratiya (mansabdorlik)", "Xizmat", "Idora"], correct: 1 },
            { q: "\"Kamu oyu\" nima degani?", a: ["Shaxsiy fikr", "Jamoatchilik fikri", "Ovoz berish", "Saylov"], correct: 1 },
            { q: "\"Seçim sistemi\" - ?", a: ["Bank tizimi", "Saylov tizimi", "Soliq", "Qonun"], correct: 1 },
            { q: "\"Anayasa\" nima degani?", a: ["Qonun", "Konstitutsiya", "Kitob", "Hujjat"], correct: 1 },
            { q: "\"Yürütme\" - ?", a: ["Qonun chiqarish", "Ijro etuvchi (hokimiyat)", "Sud", "Boshqarish"], correct: 1 },
            { q: "\"Yasama\" nima degani?", a: ["Ijro", "Qonun chiqaruvchi", "Tekshirish", "O'zgartirish"], correct: 1 }
        ],
        4: [
            { q: "\"Osmanlıca ve Eski Türkçe Etkisi\"?", a: ["O'zbekcha", "Usmonli turkchasi va eski turkcha ta'siri", "Inglizcha", "Ruscha"], correct: 1 },
            { q: "\"Münhasır\" nima degani?", a: ["Hammasi", "Xos/Maxsus", "Yangi", "Eski"], correct: 1 },
            { q: "\"İstifade\" - ?", a: ["Zarar", "Foydalanish/Bahramand bo'lish", "Bilim", "Ketish"], correct: 1 },
            { q: "\"Müteşekkir\" nima degani?", a: ["Xursand", "Minnatdor", "Baxtli", "Xafa"], correct: 1 },
            { q: "\"Filvaki\" - ?", a: ["Ehtimol", "Darhaqiqat/Haqiqatan", "Balki", "Chunki"], correct: 1 },
            { q: "\"Maatteessüf\" nima degani?", a: ["Xursandman", "Afsuski/Ming afsuski", "Lekin", "Va"], correct: 1 },
            { q: "\"Muvaffaqiyet\" - ?", a: ["Xato", "Muvaffaqiyat", "Omadsizlik", "Natija"], correct: 1 },
            { q: "\"Kıymetli\" nima degani?", a: ["Arzon", "Qiymatli/Qadrli", "Qimmat", "Eski"], correct: 1 },
            { q: "\"Sual\" - ?", a: ["Javob", "Savol", "Gap", "So'z"], correct: 1 },
            { q: "\"Cevap\" (Eski tilda: Yanıt) nima degani?", a: ["Savol", "Javob", "Fikr", "Mavzu"], correct: 1 }
        ],
        5: [
            { q: "\"Hukuk Terminolojisi Advanced\"?", a: ["Sud", "Huquqiy terminologiya", "Advokat", "Jinoyat"], correct: 1 },
            { q: "\"Gıyabında\" nima degani?", a: ["Huzurida", "G'oyibona/Sirtidan", "Bilan", "Uchun"], correct: 1 },
            { q: "\"Yargıtay\" - ?", a: ["Oliy sud", "Kassatsiya sudi", "Tuman sudi", "Hukumat"], correct: 1 },
            { q: "\"Danıştay\" nima degani?", a: ["Hukumat", "Oliy ma'muriy sud", "Bank", "Soliq idorasi"], correct: 1 },
            { q: "\"Müvekkil\" - ?", a: ["Advokat", "Mijoz (advokat uchun/muvakkil)", "Sudya", "Prokuror"], correct: 1 },
            { q: "\"Dava\" nima degani?", a: ["Savol", "Sud ishi/Da'vo", "Jarima", "Qamoq"], correct: 1 },
            { q: "\"Savcı\" - ?", a: ["Sudya", "Prokuror", "Polis", "Guvoh"], correct: 1 },
            { q: "\"Tanık\" nima degani?", a: ["Jinoyatchi", "Guvoh", "Mijoz", "Sudya"], correct: 1 },
            { q: "\"Hüküm\" - ?", a: ["Xulosa", "Hukm/Qaror", "Fikr", "Savol"], correct: 1 },
            { q: "\"Tazminat\" nima degani?", a: ["Pul", "Tazminat/Zarar haqqi", "Soliq", "Xarajat"], correct: 1 }
        ],
        6: [
            { q: "\"Teknoloji va Gelecek Advanced\"?", a: ["Kompyuter", "Yuqori texnologiyalar va kelajak", "Telefon", "Internet"], correct: 1 },
            { q: "\"Otonom\" nima degani?", a: ["Boshqariladigan", "Muxtor/Mustaqil (avtonom)", "Yangi", "Eski"], correct: 1 },
            { q: "\"Algoritma\" - ?", a: ["Natija", "Algoritm", "Reja", "Savol"], correct: 1 },
            { q: "\"Veri madenciliği\" nima degani?", a: ["Ma'lumotlar tahlili", "Ma'lumotlar koni/qazib olish (data mining)", "Bank", "Soliq"], correct: 1 },
            { q: "\"Siber güvenlik\" - ?", a: ["Havo xavfsizligi", "Kiberxavfsizlik", "Yo'l xavfsizligi", "Dengiz"], correct: 1 },
            { q: "\"Büyük veri\" nima degani?", a: ["Kichik ma'lumot", "Katta ma'lumot (Big Data)", "Internet", "Bulutli"], correct: 1 },
            { q: "\"Bulut bilişim\" - ?", a: ["Havo", "Bulutli hisoblash (Cloud computing)", "Kompyuter", "Dastur"], correct: 1 },
            { q: "\"Kripto para\" nima degani?", a: ["Qog'oz pul", "Kriptovalyuta", "Oltin", "Kumush"], correct: 1 },
            { q: "\"Sanal gerçeklik\" - ?", a: ["Haqiqat", "Virtual borliq (VR)", "Kino", "O'yin"], correct: 1 },
            { q: "\"Blok zinciri\" nima degani?", a: ["Zanjir", "Blokcheyn", "Bank", "Soliq"], correct: 1 }
        ],
        7: [
            { q: "\"Edebi Akımlar\" (Adabiy oqimlar)?", a: ["Klassizm", "Adabiy oqimlar", "Realizm", "Romantizm"], correct: 1 },
            { q: "\"Klasisizm\" nima degani?", a: ["Romantika", "Klassitsizm", "Realizm", "Modern"], correct: 1 },
            { q: "\"Romantizm\" - ?", a: ["Haqiqatchilik", "Romantizm", "Falsafa", "Matematika"], correct: 1 },
            { q: "\"Realizm\" nima degani?", a: ["Xayolparastlik", "Realizm (voqe'lik)", "Ertak", "Badiiy"], correct: 1 },
            { q: "\"Natüralizm\" - ?", a: ["Tabiiylik (naturalizm)", "Sun'iylik", "Rang", "Ohang"], correct: 0 },
            { q: "\"Sembolizm\" nima degani?", a: ["Aniqlik", "Simvolizm (ramziylik)", "Rost", "Xato"], correct: 1 },
            { q: "\"Parsenizm\" - ?", a: ["She'riyatda realizm (parnasizm)", "Hikoya", "Roman", "Ertak"], correct: 0 },
            { q: "\"Egzistansiyalizm\" nima degani?", a: ["Realizm", "Ekzistensializm (mavjudlik falsafasi)", "Sotsializm", "Kapitalizm"], correct: 1 },
            { q: "\"Fütürizm\" - ?", a: ["O'tmish", "Futurizm (kelajakparastlik)", "Hozirgi", "Eski"], correct: 1 },
            { q: "\"Dadaizm\" nima degani?", a: ["An'ana", "Dadaizm (nihilizmga yaqin)", "Klassika", "Madaniyat"], correct: 1 }
        ],
        8: [
            { q: "\"Bilim dalları\" (Fan sohalari)?", a: ["Maktab", "Fan sohalari", "Darslik", "O'qituvchi"], correct: 1 },
            { q: "\"Antropoloji\" nima degani?", a: ["Yulduzlar fani", "Antropologiya (insonyatni o'rganish)", "Yer fani", "Suv"], correct: 1 },
            { q: "\"Arkeoloji\" - ?", a: ["O'simliklar", "Arxeologiya (qadimgi topilmalar)", "Hayvonlar", "Odamlar"], correct: 1 },
            { q: "\"Sosyoloji\" nima degani?", a: ["Fizika", "Sotsiologiya (jamiyatshunoslik)", "Siyosat", "Tarix"], correct: 1 },
            { q: "\"Psikoloji\" - ?", a: ["Miya", "Psixologiya (ruhiyatshunoslik)", "Tan", "Sog'liq"], correct: 1 },
            { q: "\"Astronomi\" nima degani?", a: ["Yer", "Astronomiya (falakiyot)", "Kimyo", "Biologiya"], correct: 1 },
            { q: "\"Biyoloji\" - ?", a: ["Hayot (Biologiya)", "Tosh", "Havo", "Nur"], correct: 0 },
            { q: "\"Jeoloji\" nima degani?", a: ["Ob-havo", "Geologiya (yer haqida fan)", "Suv", "Kosmos"], correct: 1 },
            { q: "\"Ekoloji\" - ?", a: ["San'at", "Ekologiya", "Musiqa", "Raqs"], correct: 1 },
            { q: "\"Felsefe\" nima degani?", a: ["Mantiq", "Falsafa", "Tarix", "Huquq"], correct: 1 }
        ],
        9: [
            { q: "\"Diploması ve Uluslararası İlişkiler\"?", a: ["Diplomatiya va xalqaro munosabatlar", "Siyosat", "Savdo", "O'yin"], correct: 0 },
            { q: "\"Büyükelçi\" nima degani?", a: ["Konsul", "Elchi", "Prezident", "Vazir"], correct: 1 },
            { q: "\"Konsolosluk\" - ?", a: ["Elchixona", "Konsullik", "Hukumat", "Soliq"], correct: 1 },
            { q: "\"Müzakere\" nima degani?", a: ["Urush", "Muzokara/Suhbat", "Ketish", "Kelish"], correct: 1 },
            { q: "\"Protokol\" - ?", a: ["Qoida", "Protokol/Tartib", "Dars", "O'yin"], correct: 1 },
            { q: "\"Antlaşma\" nima degani?", a: ["Urush", "Shartnoma/Bitim", "Inkor", "Savol"], correct: 1 },
            { q: "\"Zirve\" - ?", a: ["Pastlik", "Sammit/Tepadagi uchrashuv/Cho'qqi", "Voha", "Dengiz"], correct: 1 },
            { q: "\"Ambargo\" nima degani?", a: ["Ochiqlik", "Embargo/Taqiq", "Savdo", "Sayohat"], correct: 1 },
            { q: "\"Ateşe\" - ?", a: ["O't", "Attashe (diplomatik unvon)", "Suv", "Havo"], correct: 1 },
            { q: "\"Dış politika\" nima degani?", a: ["Ichki siyosat", "Tashqi siyosat", "Iqtisodiyot", "Bank"], correct: 1 }
        ],
        10: [
            { q: "\"Estetik ve Sanat Eleştirisi\"?", a: ["Estetika va san'at tanqidi", "Musiqa", "Raqs", "Oshpazlik"], correct: 0 },
            { q: "\"Zarafet\" nima degani?", a: ["Qo'pollik", "Zarofat/Nafislik", "Kuchsizlik", "Rang"], correct: 1 },
            { q: "\"İhtişam\" - ?", a: ["Soddalik", "Hashamat/Muhtashamlik", "Kambag'allik", "Eskilik"], correct: 1 },
            { q: "\"Yalınlık\" nima degani?", a: ["Murakkablik", "Soddalik", "Qattiqlik", "Noziklik"], correct: 1 },
            { q: "\"Özgünlük\" - ?", a: ["Nusxa", "Originallik", "Eskilik", "O'xshashlik"], correct: 1 },
            { q: "\"Uyum\" nima degani?", a: ["Nogohlik", "Uyg'unlik/Garmoniya", "Ziddiyat", "Xato"], correct: 1 },
            { q: "\"Doku\" - ?", a: ["Rang", "Faktura/To'qima", "Nur", "Soya"], correct: 1 },
            { q: "\"Perspektif\" nima degani?", a: ["Rang", "Istiqbol/Nuqtayi nazar (perspektiva)", "Natija", "Reja"], correct: 1 },
            { q: "\"Kompozisyon\" - ?", a: ["Mato", "Kompozitsiya/Tuzilish", "Rang", "Eskiz"], correct: 1 },
            { q: "\"Üslup\" nima degani?", a: ["Mavzu", "Uslub/Stil", "Oxirgi", "Boshida"], correct: 1 }
        ],
        11: [
            { q: "\"Tıbbi Terimler Advanced\"?", a: ["Maktab", "Tibbiy terminlar", "Harbiy", "Siyosiy"], correct: 1 },
            { q: "\"Teşhis\" nima degani?", a: ["Davolash", "Tashxis/Aniqlash", "Kasal", "Sog'lom"], correct: 1 },
            { q: "\"Tedavi\" - ?", a: ["Tekshirish", "Davolash", "Kasalxona", "Dori"], correct: 1 },
            { q: "\"Semptom\" nima degani?", a: ["Natija", "Simptom/Belgi", "Haqiqat", "Yolg'on"], correct: 1 },
            { q: "\"Kronik\" - ?", a: ["O'tkir", "Surunkali (hronik)", "Tez", "Sekin"], correct: 1 },
            { q: "\"Ameliyat\" nima degani?", a: ["Dori", "Jarrohlik amaliyoti", "Tekshirish", "Maslahat"], correct: 1 },
            { q: "\"Reçete\" - ?", a: ["Xat", "Retsept", "Kitob", "Hujjat"], correct: 1 },
            { q: "\"Bağışıklık\" nima degani?", a: ["Kasallik", "Immunitet", "Kuchsizlik", "Sog'liq"], correct: 1 },
            { q: "\"Enfeksiyon\" - ?", a: ["Tozalik", "Infeksiya", "Davo", "Dori"], correct: 1 },
            { q: "\"Yan etki\" nima degani?", a: ["Asosiy ta'sir", "Nojo'ya ta'sir", "Natija", "Foyda"], correct: 1 }
        ],
        12: [
            { q: "\"Psikolojik Analiz Advanced\"?", a: ["Miya", "Psixologik tahlil", "Xulq", "Sog'liq"], correct: 1 },
            { q: "\"Bilinçaltı\" nima degani?", a: ["Ong usti", "Ong osti (shuur osti)", "Fikr", "Bilim"], correct: 1 },
            { q: "\"Travma\" - ?", a: ["Xursandchilik", "Travma/Ruhiy jarohat", "Sog'liq", "O'yin"], correct: 1 },
            { q: "\"Kaygı\" nima degani?", a: ["Xotirjamlik", "Xavotir/Anksiytet", "Baxt", "Kulgu"], correct: 1 },
            { q: "\"Depresyon\" - ?", a: ["Xursandlik", "Depressiya", "Tez", "Sekin"], correct: 1 },
            { q: "\"Kişilik bozukluğu\" nima degani?", a: ["Sog'lom shaxs", "Shaxsiyat buzilishi", "Ism", "Joy"], correct: 1 },
            { q: "\"Rehabilitasyon\" - ?", a: ["Kasal bo'lish", "Reabilitatsiya/Tiklanish", "O'qish", "Ish"], correct: 1 },
            { q: "\"Motivasyon\" nima degani?", a: ["To'xtash", "Motivatsiya/G'ayrat", "Sekinlik", "Xato"], correct: 1 },
            { q: "\"Algı\" - ?", a: ["Bilmaslik", "Idrok/Qabul qilish (alg'i)", "Nazar", "Ko'rish"], correct: 1 },
            { q: "\"Empati\" nima degani?", a: ["Xudbinlik", "Empatiya (o'zgani his qilish)", "Xasislik", "Baxillik"], correct: 1 }
        ],
        13: [
            { q: "\"Edebi Akımlar II - Modernizm\"?", a: ["Modernizm", "Klassizm", "Realizm", "Eski tushuncha"], correct: 0 },
            { q: "\"Varoluşçuluk\" nima degani?", a: ["Kapitalizm", "Ekzistensializm (mavjudlik)", "Sotsializm", "Fizika"], correct: 1 },
            { q: "\"Nihilizm\" - ?", a: ["Tasdiq", "Nihilizm (yo'qlikni tan olish)", "Diniy", "Siyosiy"], correct: 1 },
            { q: "\"Realist yaklaşım\" nima degani?", a: ["Xayoliy yondashuv", "Realistik (hayotiy) yondashuv", "Ertak", "Balki"], correct: 1 },
            { q: "\"Soyut sanat\" - ?", a: ["Aniq san'at", "Abstrakt (mavhum) san'at", "Rasm", "Haykal"], correct: 1 },
            { q: "\"Absürt\" nima degani?", a: ["Mantiqli", "Absurd/Mantiqsiz", "To'g'ri", "Xato"], correct: 1 },
            { q: "\"Avangart\" - ?", a: ["Eski", "Avangard (oldingi saflarda)", "Keyingi", "O'rtacha"], correct: 1 },
            { q: "\"Klasik\" nima degani?", a: ["Yangi", "Klassik", "Boshqa", "Oddiy"], correct: 1 },
            { q: "\"Yenilikçi\" - ?", a: ["Eski uslub", "Yangilik tarafdori (innovator)", "Lanj", "Sekin"], correct: 1 },
            { q: "\"Geleneksel\" nima degani?", a: ["Yangi", "An'anaviy", "Tez", "Balki"], correct: 1 }
        ],
        14: [
            { q: "\"Çeviri Teknikleri\" (Tarjima texnikasi)?", a: ["O'qish", "Tarjima qilish texnikasi", "Yozish", "Gapirish"], correct: 1 },
            { q: "\"Edebi çeviri\" nima degani?", a: ["Texnik tarjima", "Badiiy tarjima", "Ilmiy tarjima", "Email"], correct: 1 },
            { q: "\"Teknik çeviri\" - ?", a: ["She'riy tarjima", "Texnik tarjima", "Sodda", "Og'zaki"], correct: 1 },
            { q: "\"Eşzamanlı çeviri\" nima degani?", a: ["Ketma-ket tarjima", "Sinxron (bir vaqtda) tarjima", "Yozma", "Sekin"], correct: 1 },
            { q: "\"Ardıl çeviri\" - ?", a: ["Sinxron", "Ketma-ket (konsikutiv) tarjima", "Tez", "O'yin"], correct: 1 },
            { q: "\"Yeminli tercüman\" nima degani?", a: ["Do'st", "Qasamyodli (litsenziyali) tarjimon", "Xato", "Yolg'on"], correct: 1 },
            { q: "\"Metin sadakati\" - ?", a: ["Matnga sodiqlik", "O'zgartirish", "Xato", "Inkor"], correct: 0 },
            { q: "\"Yerelleştirme\" nima degani?", a: ["Sotish", "Lokalizatsiya/Mahalliylashtirish", "Ketish", "Bo'lish"], correct: 1 },
            { q: "\"Kaynak dil\" - ?", a: ["Maqsad til", "Manba tili (original)", "Yangi til", "Eski til"], correct: 1 },
            { q: "\"Hedef dil\" nima degani?", a: ["Manba tili", "Maqsadli til (tarjima qilinayotgan)", "Boshqa til", "Inkor"], correct: 1 }
        ],
        15: [
            { q: "\"Akademik Makale Yazımı\"?", a: ["Darslik", "Ilmiy maqola yozish", "Email", "Suhbat"], correct: 1 },
            { q: "\"Özet\" nima degani?", a: ["Matn", "Annotatsiya/Xulosa/Annotatsiya", "Boshlanish", "Hammasi"], correct: 1 },
            { q: "\"Giriş\" - ?", a: ["Chiqish", "Kirish/Muqaddima", "Vaqt", "Sana"], correct: 1 },
            { q: "\"Metodoloji\" nima degani?", a: ["Mavzu", "Metodologiya (uslubiyot)", "Natija", "Reja"], correct: 1 },
            { q: "\"Bulgular\" - ?", a: ["Xatolar", "Topilmalar/Natijalar", "Ma'lumotlar", "Savollar"], correct: 1 },
            { q: "\"Tartışma\" nima degani?", a: ["Urush", "Muhokama (diskussiya)", "Sukunat", "Bo'ldi"], correct: 1 },
            { q: "\"Sonuç\" - ?", a: ["Boshlanish", "Natija/Xulosa", "O'rtasi", "Mavzu"], correct: 1 },
            { q: "\"Kaynakça\" nima degani?", a: ["Kitoblar", "Foydalanilgan adabiyotlar", "Havolar", "Ismlar"], correct: 1 },
            { q: "\"Alıntı\" - ?", a: ["Sotish", "Iqtibos/Sitata", "Gap", "So'z"], correct: 1 },
            { q: "\"Hakemli dergi\" nima degani?", a: ["Gazeta", "Taqriz qilinadigan (professional) jurnal", "O'yin", "Sport"], correct: 1 }
        ]
    }
};

window.assignmentsData = {
    'A1': [
        { id: 'a1_t1', type: 'vocab', title: "Yangi so'zlar: Oilam", desc: "20 ta yangi so'zni yodlash va testdan o'tish.", xp: 50, time: 15 },
        { id: 'a1_t2', type: 'grammar', title: "Grammatika: -lar, -ler", desc: "Ko'plik qo'shimchalarini to'g'ri qo'llash.", xp: 75, time: 20 },
        { id: 'a1_t3', type: 'listen', title: "Tinglash: Salomlashuv", desc: "Audioni eshitib, to'g'ri javoblarni belgilash.", xp: 100, time: 10 },
        { id: 'a1_t4', type: 'reading', title: "O'qish: Mening kunim", desc: "Matnni o'qing va savollarga javob bering.", xp: 60, time: 15 }
    ],
    'A2': [
        { id: 'a2_t1', type: 'grammar', title: "O'tgan zamon mashqi", desc: "-di qo'shimchasini gaplarda ishlating.", xp: 80, time: 25 },
        { id: 'a2_t2', type: 'vocab', title: "Kiyim-kechaklar", desc: "Kiyimlar mavzusida lug'at boyligini oshirish.", xp: 60, time: 15 },
        { id: 'a2_t3', type: 'listen', title: "Dialog: Bozorlik qilish", desc: "Suhbatni tinglang va narxlarni belgilang.", xp: 120, time: 20 }
    ],
    'B1': [
        { id: 'b1_t1', type: 'grammar', title: "Shart mayli (Agar...)", desc: "-se/-sa qo'shimchalari bilan murakkab gaplar.", xp: 100, time: 30 },
        { id: 'b1_t2', type: 'vocab', title: "Professional iboralar", desc: "Ish joyida ishlatiladigan rasmiy iboralar.", xp: 90, time: 20 },
        { id: 'b1_t3', type: 'reading', title: "Maqola: Atrof-muhit", desc: "Ekologiya haqidagi maqolani tahlil qiling.", xp: 150, time: 35 }
    ],
    'B2': [
        { id: 'b2_t1', type: 'grammar', title: "Majhul nisbat mashqlari", desc: "Gaplarni majhul nisbatga o'tkazing.", xp: 110, time: 25 },
        { id: 'b2_t2', type: 'listen', title: "Podkast: Texnologiya", desc: "Texnologik yangiliklar haqida podkast tahlili.", xp: 180, time: 30 }
    ],
    'C1': [
        { id: 'c1_t1', type: 'reading', title: "Badiiy asar tahlili", desc: "O'rxon Pomuq asarlaridan parcha tahlili.", xp: 200, time: 45 },
        { id: 'c1_t2', type: 'vocab', title: "Arxaik so'zlar", desc: "Eski turkcha so'zlarning zamonaviy ma'nosi.", xp: 150, time: 30 }
    ],
    'C2': [
        { id: 'c2_t1', type: 'writing', title: "Akademik Esse", desc: "Globallashuv mavzusida 500 so'zli esse yozing.", xp: 500, time: 120 },
        { id: 'c2_t2', type: 'grammar', title: "Stilistika: Nozik ma'nolar", desc: "Nutqiy nuqsonlarni tuzatish mashqlari.", xp: 250, time: 60 }
    ]
};


window.assignmentsData = {
    'A1': {
        1: [
            { id: "a1_l1_v", type: "vocab", category: "vocab", title: "Salomlashuv so'zlari", desc: "Asosiy salomlashuv so'zlarini o'rganing.", xp: 30, time: "5 min", icon: "fa-spell-check", questions: [{ q: "Turkchada 'Rahmat' qanday bo'ladi?", a: ["Merhaba", "Teşekkür ederim", "Nasılsın", "Selam"], correct: 1 }] },
            { id: "a1_l1_g", type: "grammar", category: "grammar", title: "Alifbo asoslari", desc: "Turk alifbosi harflari bo'yicha mashq.", xp: 30, time: "5 min", icon: "fa-pen-nib", questions: [{ q: "Turk alifbosida nechta unli harf bor?", a: ["6", "8", "10", "12"], correct: 1 }] },
            { id: "a1_l1_t", type: "listening", category: "tinglash", title: "Tinglash: Salom!", desc: "Ovozni eshitib so'zni toping.", xp: 50, time: "5 min", icon: "fa-headphones", questions: [{ q: "Qaysi so'zni eshitdingiz?", audio: "Merhaba", a: ["Merhaba", "Hoşçakal", "Güle güle", "Evet"], correct: 0 }] }
        ],
        2: [
            { id: "a1_l2_v", type: "vocab", category: "vocab", title: "Shaxsiy olmoshlar", desc: "Ben, Sen, O olmoshlari.", xp: 30, time: "5 min", icon: "fa-spell-check", questions: [{ q: "Siz - turkchada?", a: ["Siz", "Biz", "Sen", "Onlar"], correct: 0 }] },
            { id: "a1_l2_g", type: "grammar", category: "grammar", title: "Kishilik qo'shimchalari", desc: "Olmoshlarga mos qo'shimchalar.", xp: 30, time: "5 min", icon: "fa-pen-nib", questions: [{ q: "Ben ... (bo'lmoq)", a: ["-um/-im", "-sun", "-uz", "-lar"], correct: 0 }] },
            { id: "a1_l2_t", type: "listening", category: "tinglash", title: "Tinglash: Olmoshlar", desc: "Olmoshlarni tinglab aniqlang.", xp: 50, time: "5 min", icon: "fa-headphones", questions: [{ q: "Savolni eshiting:", audio: "Siz kimsiniz?", a: ["Siz kimsiz?", "Qayerdansiz?", "Ismingiz nima?", "Yaxshimisiz?"], correct: 0 }] }
        ],
        3: [
            { id: "a1_l3_v", type: "vocab", category: "vocab", title: "Sinf xonasi", desc: "Maktab buyumlari.", xp: 30, time: "5 min", icon: "fa-spell-check", questions: [{ q: "Kitob - ?", a: ["Kitap", "Defter", "Kalem", "Masa"], correct: 0 }] },
            { id: "a1_l3_g", type: "grammar", category: "grammar", title: "-mı, -mi so'roq", desc: "So'roq gap yasash.", xp: 30, time: "5 min", icon: "fa-pen-nib", questions: [{ q: "Bu bir kitap ...?", a: ["mı", "mi", "mu", "mü"], correct: 0 }] },
            { id: "a1_l3_t", type: "listening", category: "tinglash", title: "Tinglash: Buyumlar", desc: "Buyumlarni eshitish.", xp: 50, time: "5 min", icon: "fa-headphones", questions: [{ q: "Eshiting:", audio: "Bu bir masa mı?", a: ["Bu bir stolmi?", "Bu bir stulmi?", "Bu kitobmi?", "Bu daftarmi?"], correct: 0 }] }
        ],
        4: [
            { id: "a1_l4_v", type: "vocab", category: "vocab", title: "Mevalar", desc: "Meva nomlari.", xp: 30, time: "5 min", icon: "fa-spell-check", questions: [{ q: "Olma - ?", a: ["Elma", "Armut", "Muz", "Üzüm"], correct: 0 }] },
            { id: "a1_l4_g", type: "grammar", category: "grammar", title: "Ko'plik: -lar/-ler", desc: "Ko'plik yasash qoidalari.", xp: 30, time: "5 min", icon: "fa-pen-nib", questions: [{ q: "Kapı - ?", a: ["Kapılar", "Kapıler", "Kapıda", "Kapıdan"], correct: 0 }] },
            { id: "a1_l4_t", type: "listening", category: "tinglash", title: "Tinglash: Mevalar", desc: "Meva nomlarini tinglash.", xp: 50, time: "5 min", icon: "fa-headphones", questions: [{ q: "Eshiting:", audio: "Onlar elmadır", a: ["Ular olmalardir", "Bu olmadir", "Mevalar shirin", "Olma yeyman"], correct: 0 }] }
        ],
        5: [
            { id: "a1_l5_v", type: "vocab", category: "vocab", title: "Oila a'zolari", desc: "Anne, Baba, Kardeş.", xp: 30, time: "5 min", icon: "fa-spell-check", questions: [{ q: "Dada - ?", a: ["Baba", "Anne", "Dede", "Amca"], correct: 0 }] },
            { id: "a1_l5_g", type: "grammar", category: "grammar", title: "Egalik: Mening...", desc: "Mening, Sening qo'shimchalari.", xp: 40, time: "7 min", icon: "fa-pen-nib", questions: [{ q: "Mening onam - ?", a: ["Benim annem", "Senin annen", "Onun annesi", "Bizim annemiz"], correct: 0 }] },
            { id: "a1_l5_t", type: "listening", category: "tinglash", title: "Tinglash: Oila", desc: "Oila a'zolarini eshitish.", xp: 50, time: "5 min", icon: "fa-headphones", questions: [{ q: "Eshiting:", audio: "Benim babam doktordur", a: ["Mening dadam shifokor", "Sening dadang shifokor", "U shifokor", "Dadam keldi"], correct: 0 }] }
        ],
        6: [
            { id: "a1_l6_v", type: "vocab", category: "vocab", title: "Raqamlar 1-10", desc: "Sonlarni yodlash.", xp: 30, time: "5 min", icon: "fa-spell-check", questions: [{ q: "5 - ?", a: ["Beş", "Dört", "Altı", "Dokuz"], correct: 0 }] },
            { id: "a1_l6_g", type: "grammar", category: "grammar", title: "Kaç? (Nechta?)", desc: "Miqdor so'rash.", xp: 30, time: "5 min", icon: "fa-pen-nib", questions: [{ q: "Sinfda nechta bola bor? - ?", a: ["Sınıfta kaç öğrenci var?", "Kim var?", "Nerede?", "Nasılsın?"], correct: 0 }] },
            { id: "a1_l6_t", type: "listening", category: "tinglash", title: "Tinglash: Sonlar", desc: "Raqamlarni eshitish.", xp: 50, time: "5 min", icon: "fa-headphones", questions: [{ q: "Eshiting:", audio: "İki kitap ve üç kalem", a: ["2 ta kitob va 3 ta qalam", "3 ta kitob va 2 ta qalam", "5 ta kitob", "Qalamlar ko'p"], correct: 0 }] }
        ]
        // ... Higher lessons and levels would continue here similarly
    },
    'A2': {
        1: [
            { id: "a2_l1_v", type: "vocab", category: "vocab", title: "Fe'llar: Harakat", desc: "Asosiy harakat fe'llari.", xp: 40, time: "6 min", icon: "fa-spell-check", questions: [{ q: "Ketmoq - ?", a: ["Gitmek", "Gelmek", "Bakmak", "Okumak"], correct: 0 }] },
            { id: "a2_l1_g", type: "grammar", category: "grammar", title: "O'tgan zamon -di", desc: "O'tgan zamon gaplari.", xp: 50, time: "8 min", icon: "fa-pen-nib", questions: [{ q: "Gittim - ?", a: ["Ketdim", "Ketyapman", "Ketaman", "Ketganman"], correct: 0 }] },
            { id: "a2_l1_t", type: "listening", category: "tinglash", title: "Tinglash: O'tgan zamon", desc: "Harakatlarni tinglash.", xp: 60, time: "7 min", icon: "fa-headphones", questions: [{ q: "Eshiting:", audio: "Dün okula gittim", a: ["Kecha maktabga bordim", "Bugun boraman", "Kecha uydaman", "Maktab yaxshi"], correct: 0 }] }
        ]
    }
};

