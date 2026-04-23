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
        {q:"Turk tilida \"Xayrli tong\" nima deyiladi?",a:["İyi akşamlar","Görüşürüz","Merhaba","Günaydın"],correct:3}
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
            {q:"Turk alifbosida nechta harf bor?",a:["29","32","28","26"],correct:0},
            {q:"\"Merhaba\" nima degani?",a:["Rahmat","Ertalab","Salom","Xayr"],correct:2},
            { q: "\"Selam\" so'zining o'zbekcha tarjimasi?", a: ["Xayr", "Kechirasiz", "Salom", "Yaxshiman"], correct: 2 },
            { q: "Xayrli tong turkchada qanday bo'ladi?", a: ["İyi akşamlar", "Günaydın", "İyi geceler", "Merhaba"], correct: 1 },
            {q:"\"Nasılsın?\" savoliga qanday javob beriladi?",a:["Güle güle","Görüşürüz","Günaydın","İyiyim, teşekkür ederim"],correct:3},
            {q:"\"Memnun oldum\" nima degani?",a:["Yaxshi qol","Kechirasiz","Salom","Tanishganimdan xursandman"],correct:3},
            {q:"\"Teşekkür ederim\" - ?",a:["Rahmat","Xayr","Iltimos","Arzimaydi"],correct:0},
            {q:"Isming nima? - Turkchada?",a:["Nerelisin?","Kaç yaşındasın?","Nasılsın?","Adın ne?"],correct:3},
            {q:"\"Hoş geldiniz\" ga qanday javob beriladi?",a:["Hoş bulduk","Günaydın","Merhaba","Güle güle"],correct:0},
            { q: "\"Görüşürüz\" ma'nosi?", a: ["Salom", "Xayrli kun", "Ko'rishguncha", "Xayr"], correct: 2 }
        ],
        2: [
            {q:"\"Ben\" olmoshi nima degani?",a:["Sen","U","Men","Biz"],correct:2},
            {q:"\"Biz\" turkchada nimani anglatadi?",a:["Ular","Men","Biz","Siz"],correct:2},
            {q:"\"Onlar\" olmoshi?",a:["Siz","U","Biz","Ular"],correct:3},
            {q:"\"Sen\" - ?",a:["Sen","Men","Siz","U"],correct:0},
            {q:"Turk tilida \"Siz\" nima deyiladi?",a:["O","Siz","Biz","Sen"],correct:1},
            {q:"\"O\" olmoshi nima degani?",a:["U","Biz","Sen","Men"],correct:0},
            { q: "\"Öğrenci\" nima degani?", a: ["O'qituvchi", "O'quvchi", "Maktab", "Kitob"], correct: 1 },
            { q: "\"Öğretmen\" - ?", a: ["Dars", "O'quvchi", "O'qituvchi", "Sinf"], correct: 2 },
            {q:"Turk tilida \"Ha\" nima deyiladi?",a:["Yok","Evet","Hayır","Belki"],correct:1},
            { q: "\"Hayır\" - ?", a: ["Ha", "Yo'q", "Rahmat", "Salom"], correct: 1 }
        ],
        3: [
            { q: "\"Kalem\" so'zining tarjimasi?", a: ["Kitob", "Daftar", "Ruchka/Qalam", "O'chirg'ich"], correct: 2 },
            { q: "\"Kitap\" - ?", a: ["Sinf", "Kitob", "Papka", "Qog'oz"], correct: 1 },
            {q:"\"Masa\" nima degani?",a:["Shkaf","Oyna","Stul","Stol"],correct:3},
            { q: "\"Okul\" - ?", a: ["Uy", "Bog'", "Maktab", "Shahar"], correct: 2 },
            { q: "\"Sınıf\" nima degani?", a: ["Darslik", "Sinf", "Maktab", "O'quvchi"], correct: 1 },
            {q:"Turk tilida \"Stul\" nima deyiladi?",a:["Sandalye","Yatak","Koltuk","Masa"],correct:0},
            {q:"\"Kapı\" - ?",a:["Tom","Eshik","Deraza","Devor"],correct:1},
            { q: "\"Pencere\" nima degani?", a: ["Deraza", "Eshik", "Ko'cha", "Hovli"], correct: 0 },
            {q:"\"Defter\" - ?",a:["Qalam","Kitob","Daftar","Siyoh"],correct:2},
            { q: "\"Silgi\" nima degani?", a: ["Qaychi", "Chizg'ich", "O'chirg'ich", "Yelim"], correct: 2 }
        ],
        4: [
            {q:"\"Elma\" - ?",a:["Nok","Uzum","Olma","Anor"],correct:2},
            {q:"\"Ekmek\" nima degani?",a:["Choy","Non","Sut","Suv"],correct:1},
            {q:"\"Su\" - ?",a:["Qahva","Sut","Suv","Sharbat"],correct:2},
            {q:"Turk tilida \"Choy\" nima deyiladi?",a:["Kahve","Çay","Ayran","Süt"],correct:1},
            { q: "\"Süt\" nima degani?", a: ["Qatiq", "Sut", "Pishloq", "Yog'"], correct: 1 },
            { q: "\"Peynir\" - ?", a: ["Go'sht", "Tuxum", "Pishloq", "Non"], correct: 2 },
            { q: "\"Zeytin\" nima degani?", a: ["Yong'oq", "Zaytun", "Bodom", "Pista"], correct: 1 },
            { q: "\"Yumurta\" - ?", a: ["Tuxum", "Go'sht", "Baliq", "Tovuq"], correct: 0 },
            { q: "\"Kahvaltı\" nima degani?", a: ["Tushlik", "Kechki ovqat", "Nonushta", "Choyxo'rlik"], correct: 2 },
            { q: "\"Yemek\" - ?", a: ["Ichish", "Ovqat", "Uxlash", "O'ynash"], correct: 1 }
        ],
        5: [
            {q:"\"Anne\" - ?",a:["Ona","Xola","Buvijon","Dada"],correct:0},
            { q: "\"Baba\" nima degani?", a: ["Dada", "Amaki", "Tog'a", "Bobo"], correct: 0 },
            { q: "\"Kardeş\" - ?", a: ["Aka/Uka/Opa/Singil", "Do'st", "Qo'shni", "Dushman"], correct: 0 },
            {q:"\"Abla\" nima degani?",a:["Opa","Uka","Aka","Singil"],correct:0},
            { q: "\"Abi\" - ?", a: ["Aka", "Uka", "Dada", "Tog'a"], correct: 0 },
            {q:"\"Dede\" nima degani?",a:["Kuyov","Bobo","Amaki","Dada"],correct:1},
            {q:"\"Nene\" - ?",a:["Ona","Amma","Xola","Buvijon"],correct:3},
            { q: "\"Amca\" - ?", a: ["Amaki", "Tog'a", "Xola", "Amma"], correct: 0 },
            { q: "\"Dayı\" - ?", a: ["Amaki", "Tog'a", "Xola", "Amma"], correct: 1 },
            { q: "\"Teyze\" - ?", a: ["Tog'a", "Amma", "Xola", "Amaki"], correct: 2 }
        ],
        6: [
            {q:"Turk tilida 1 nima deyiladi?",a:["İki","Dört","Bir","Üç"],correct:2},
            {q:"5 raqami turkchada?",a:["Dört","Altı","Yedi","Beş"],correct:3},
            {q:"10 soni - ?",a:["Yirmi","On","Sekiz","Dokuz"],correct:1},
            {q:"\"Sıfır\" - ?",a:["0","1","100","10"],correct:0},
            {q:"\"Yüz\" nima degani?",a:["1000","10","10000","100"],correct:3},
            {q:"20 soni?",a:["On","Otuz","Kırk","Yirmi"],correct:3},
            {q:"Kaç yaşındasın? - ?",a:["Qayerdansan?","Qandaysan?","Isming nima?","Yoshing nechada?"],correct:3},
            {q:"Turk tilida \"Qizil\" nima deyiladi?",a:["Sarı","Kırmızı","Mavi","Yeşil"],correct:1},
            { q: "\"Siyah\" - ?", a: ["Oq", "Qora", "Ko'k", "Sariq"], correct: 1 },
            {q:"\"Beyaz\" nima degani?",a:["Sariq","Qora","Oq","Yashil"],correct:2}
        ],
        7: [
            {q:"\"Bugün\" - ?",a:["Ertaga","Kecha","Indin","Bugun"],correct:3},
            {q:"\"Dün\" nima degani?",a:["Hozir","Kecha","Bugun","Ertaga"],correct:1},
            {q:"\"Yarın\" - ?",a:["Kecha","Keyin","Ertaga","Bugun"],correct:2},
            {q:"\"Şimdi\" nima degani?",a:["Keyin","Oldin","Hozir","Hech qachon"],correct:2},
            {q:"\"Sabah\" - ?",a:["Peshin","Ertalab","Tun","Kechqurun"],correct:1},
            {q:"\"Akşam\" nima degani?",a:["Hafta","Ertalab","Kechqurun","Kun"],correct:2},
            {q:"\"Gece\" - ?",a:["Tun","Kun","Oy","Yil"],correct:0},
            {q:"\"Hafta\" - ?",a:["Kun","Hafta","Daqiqa","Yil"],correct:1},
            {q:"\"Ay\" nima degani?",a:["Yil","Oy","Kun","Hafta"],correct:1},
            {q:"\"Yıl\" - ?",a:["Yil","Kun","Oy","Hafta"],correct:0}
        ],
        8: [
            { q: "Hozirgi zamon qo'shimchasi?", a: ["-di", "-iyor", "-ecek", "-ar"], correct: 1 },
            {q:"\"Geliyorum\" nima degani?",a:["Kelyapsan","Kelyapman","Kelaman","Keldim"],correct:1},
            {q:"\"Gidiyoruz\" - ?",a:["Ketdik","Ketyapmiz","Keting","Ketyapsiz"],correct:1},
            { q: "\"Okuyor\" - ?", a: ["O'qiyapman", "O'qiyapti", "O'qiyapdilar", "O'qiyapsiz"], correct: 1 },
            { q: "\"Seviyorum\" nima degani?", a: ["Yomon ko'raman", "Yaxshi ko'raman", "Bilaman", "Xohlayman"], correct: 1 },
            { q: "\"İstiyorum\" - ?", a: ["Bilaman", "Xohlayman", "O'ylayman", "Qilaman"], correct: 1 },
            {q:"\"Biliyorum\" nima degani?",a:["Gapiraman","Eshitaman","Tushunaman","Bilaman"],correct:3},
            { q: "\"Anlıyorum\" - ?", a: ["Bilaman", "Tushunyapman", "Ko'ryapman", "O'qiyapman"], correct: 1 },
            { q: "\"Görüyorum\" nima degani?", a: ["Eshityapman", "Ko'ryapman", "Ketyapman", "Kelyapman"], correct: 1 },
            {q:"\"Konuşuyorum\" - ?",a:["Eshityapman","Gapinyapman","Jimman","Gapiryapman"],correct:3}
        ],
        9: [
            { q: "Turk tilida \"Mening\" nima bo'ladi?", a: ["Senin", "Benim", "Onun", "Bizim"], correct: 1 },
            { q: "\"Senin\" so'zining tarjimasi?", a: ["Mening", "Sening", "Uning", "Bizning"], correct: 1 },
            {q:"\"Onun\" - ?",a:["Bizning","Uning","Sizning","Ularning"],correct:1},
            {q:"\"Bizim\" nima degani?",a:["Uning","Mening","Sening","Bizning"],correct:3},
            {q:"\"Sizin\" - ?",a:["Ularning","Bizning","Mening","Sizning"],correct:3},
            {q:"\"Onların\" nima degani?",a:["Sizning","Ularning","Bizning","Uning"],correct:1},
            {q:"Mening ismim - ?",a:["Bizim adımız","Onun adı","Benim adım","Senin adın"],correct:2},
            {q:"Sening uying - ?",a:["Sizin eviniz","Benim evim","Onun evi","Senin evin"],correct:3},
            {q:"Uning kitobi - ?",a:["Sizin kitabınız","Onun kitabı","Senin kitabın","Benim kitabım"],correct:1},
            {q:"Bizning maktabimiz - ?",a:["Okulumuz","Okulu","Okulun","Okulum"],correct:0}
        ],
        10: [
            {q:"\"Nerede?\" nima degani?",a:["Qachon?","Qayerda?","Qanday?","Nima uchun?"],correct:1},
            {q:"\"Nasıl?\" - ?",a:["Qancha?","Qayerda?","Kim?","Qanday?"],correct:3},
            {q:"\"Niçin?\" nima degani?",a:["Nima uchun?","Qachon?","Qayerda?","Qancha?"],correct:0},
            {q:"\"Kim?\" - ?",a:["Nima?","Kim?","Qachon?","Qayerda?"],correct:1},
            {q:"\"Ne?\" nima degani?",a:["Kim?","Qachon?","Nima?","Qanday?"],correct:2},
            {q:"\"Kaç?\" - ?",a:["Qanday?","Nima?","Nechta/Qancha?","Qayerda?"],correct:2},
            {q:"\"Ne zaman?\" nima degani?",a:["Nima uchun?","Kim?","Qayerda?","Qachon?"],correct:3},
            {q:"\"Hangi?\" - ?",a:["Nima?","Qancha?","Qaysi?","Kim?"],correct:2},
            {q:"\"Nereye?\" nima degani?",a:["Kimga?","Qayerga?","Qayerdan?","Qayerda?"],correct:1},
            {q:"\"Nereden?\" - ?",a:["Qayerdan?","Qayerga?","Qayerda?","Kimdan?"],correct:0}
        ],
        11: [
            { q: "Chiqish kelishigi qo'shimchasi?", a: ["-de", "-den", "-e", "-i"], correct: 1 },
            { q: "Jo'nalish kelishigi qo'shimchasi?", a: ["-den", "-e/-a", "-de", "-i"], correct: 1 },
            { q: "O'rin-payt kelishigi qo'shimchasi?", a: ["-den", "-e", "-de/-da", "-i"], correct: 2 },
            { q: "Tushum kelishigi qo'shimchasi?", a: ["-den", "-e", "-de", "-i/-ı/-u/-ü"], correct: 3 },
            {q:"Evde - ?",a:["Uyni","Uyda","Uydan","Uyga"],correct:1},
            {q:"Okuldan - ?",a:["Maktabga","Maktabni","Maktabdan","Maktabda"],correct:2},
            { q: "Ankara'ya - ?", a: ["Anqaradan", "Anqarada", "Anqaraga", "Anqarani"], correct: 2 },
            {q:"Kitabı - ?",a:["Kitobdan","Kitobga","Kitobni","Kitobda"],correct:2},
            {q:"İşten - ?",a:["Ishdan","Ishni","Ishga","Ishda"],correct:0},
            { q: "Sokakta - ?", a: ["Ko'chada", "Ko'chaga", "Ko'chadan", "Ko'chani"], correct: 0 }
        ],
        12: [
            { q: "\"Gitmek\" nima degani?", a: ["Kelmoq", "Ketmoq", "O'tirmoq", "Uxlamoq"], correct: 1 },
            {q:"\"Gelmek\" - ?",a:["Ketmoq","Kelmoq","Chiqmoq","Kirmoq"],correct:1},
            { q: "\"Okumak\" nima degani?", a: ["Yozmoq", "O'qimoq", "Tinglamoq", "Gapirmoq"], correct: 1 },
            { q: "\"Yazmak\" - ?", a: ["O'qimoq", "Yozmoq", "Chizmoq", "Bo'yamoq"], correct: 1 },
            { q: "\"Uyumak\" nima degani?", a: ["Uyg'onmoq", "Uxlamoq", "Yugurmoq", "Yurmoq"], correct: 1 },
            {q:"\"İçmek\" - ?",a:["Yemoq","Sotmoq","Ichmoq","Chekmoq"],correct:2},
            {q:"\"Yemek\" nima degani?",a:["Ichmoq","Yuvmoq","Pishirmoq","Yemoq"],correct:3},
            { q: "\"Bakmak\" - ?", a: ["Ko'rmoq", "Qaramoq", "Eshatmoq", "Ushlamoq"], correct: 1 },
            { q: "\"Görmek\" nima degani?", a: ["Qaramoq", "Ko'rmoq", "Topmoq", "Yo'qotmoq"], correct: 1 },
            { q: "\"Duymak\" - ?", a: ["Eshitmoq/Sezmoq", "Gapirmoq", "Kulmoq", "Yig'lamoq"], correct: 0 }
        ],
        13: [
            {q:"\"Sıcak\" - ?",a:["Sovuq","Muzdek","Issiq","Iliq"],correct:2},
            { q: "\"Soğuk\" nima degani?", a: ["Issiq", "Sovuq", "O'rtacha", "Dim"], correct: 1 },
            {q:"\"Güzel\" - ?",a:["Chiroyli","Yaxshi","Yomon","Xunuk"],correct:0},
            {q:"\"Çirkin\" nima degani?",a:["Xunuk","Kichik","Katta","Chiroyli"],correct:0},
            {q:"\"Büyük\" - ?",a:["Qisqa","Uzun","Katta","Kichik"],correct:2},
            {q:"\"Küçük\" nima degani?",a:["Kichik","Katta","Tor","Keng"],correct:0},
            {q:"\"Yeni\" - ?",a:["Qimmat","Eski","Yangi","Arzon"],correct:2},
            {q:"\"Eski\" nima degani?",a:["Yangi","Toza","Eski","Kir"],correct:2},
            {q:"\"Pahalı\" - ?",a:["Qimmat","Boy","Arzon","Tekin"],correct:0},
            { q: "\"Ucuz\" nima degani?", a: ["Qimmat", "Arzon", "Qulay", "Og'ir"], correct: 1 }
        ],
        14: [
            {q:"\"Çalışkan\" - ?",a:["Aqlli","Dangasa","Tiridshoq","Ahmoq"],correct:2},
            {q:"\"Tembel\" nima degani?",a:["Sekin","Ishchan","Dangasa","Tez"],correct:2},
            { q: "\"Mutlu\" - ?", a: ["Xafa", "Baxtli", "Asabiy", "Qo'rqoq"], correct: 1 },
            { q: "\"Üzgün\" nima degani?", a: ["Xursand", "Xafa", "Kasal", "Sog'lom"], correct: 1 },
            { q: "\"Zengin\" - ?", a: ["Kambag'al", "Boy", "Mashhur", "Oddiy"], correct: 1 },
            { q: "\"Fakir\" nima degani?", a: ["Boy", "Kambag'al", "Kuchsiz", "Kuchli"], correct: 1 },
            {q:"\"Hızlı\" - ?",a:["Uzoq","Tez","Sekin","Yaqin"],correct:1},
            {q:"\"Yavaş\" nima degani?",a:["Sekin","Tez","Oson","Qiyin"],correct:0},
            {q:"\"Zor\" - ?",a:["Oson","Qisqa","Qiyin","Uzun"],correct:2},
            {q:"\"Kolay\" nima degani?",a:["Oson","Qiyin","Qattiq","Yumshoq"],correct:0}
        ],
        15: [
            { q: "Turk tilida \"Men o'qituvchiman\"?", a: ["Ben öğretmenim", "Sen öğretmensin", "O öğretmen", "Biz öğretmeniz"], correct: 0 },
            { q: "\"Sen öğrencisin\" nima degani?", a: ["Men o'quvchiman", "Sen o'quvchisan", "U o'quvchi", "Siz o'quvchisiz"], correct: 1 },
            {q:"\"O yorgun\" - ?",a:["Men charchadim","U charchagan","Ular charchashdi","Siz charchadingiz"],correct:1},
            {q:"\"Biz açız\" nima degani?",a:["Biz ochmiz","Ular och","Men ochman","Siz ochsiz"],correct:0},
            {q:"\"Siz çalışkansınız\" - ?",a:["Sen tirishqoqsan","Biz tirishqoqmiz","Siz tirishqoqsiz","Ular tirishqoq"],correct:2},
            {q:"\"Onlar burada\" nima degani?",a:["U shu yerda","Siz shu yerdasiz","Biz shu yerdamiz","Ular shu yerda"],correct:3},
            {q:"\"Ben hastayım\" - ?",a:["U kasal","Siz kasalsiz","Men kasalman","Biz kasalmi"],correct:2},
            {q:"\"Mutlu musun?\" savoliga qanday javob beriladi?",a:["Evet, gidiyorum","Hayır, yorgunum","Hayır, gelmiyorum","Evet, mutluyum"],correct:3},
            { q: "Inkor shakli: \"Ben doktor değilim\" - ?", a: ["Men doktorman", "Men doktor emasman", "Siz doktormiz", "U doktor emas"], correct: 1 },
            { q: "\"Nerelisin?\" savolining ma'nosi?", a: ["Isming nima?", "Qayerdansan?", "Qayerdasan?", "Yoshing nechada?"], correct: 1 }
        ]
    },
    'A2': {
        1: [
            { q: "O'tgan zamon qo'shimchasi?", a: ["-iyor", "-ecek", "-di/-dı/-du/-dü", "-ar"], correct: 2 },
            {q:"\"Gittim\" nima degani?",a:["Ketyapman","Ketaman","Ketdim","Kelyapman"],correct:2},
            {q:"\"Geldin\" - ?",a:["Keldi","Keldingiz","Kelding","Keldik"],correct:2},
            { q: "\"Okudu\" nima degani?", a: ["O'qidim", "O'qiding", "O'qidi", "O'qidik"], correct: 2 },
            {q:"\"Yazdık\" - ?",a:["Yozdim","Yozdilar","Yozding","Yozdik"],correct:3},
            {q:"\"Uyudunuz\" nima degani?",a:["Uxladim","Uxlandingiz","Uxladilar","Uxloq"],correct:1},
            { q: "\"Gördüler\" - ?", a: ["Ko'rdim", "Ko'rdilar", "Ko'rdik", "Ko'rding"], correct: 1 },
            { q: "\"Baktım\" nima degani?", a: ["Qaradim", "Ko'rdim", "Eshitdim", "Yedim"], correct: 0 },
            { q: "\"Anladın mı?\" - ?", a: ["Tushundingmi?", "Bildingmi?", "Ko'rdingmi?", "Keldingmi?"], correct: 0 },
            { q: "\"Dün ne yaptın?\" savolining ma'nosi?", a: ["Bugun nima qilyapsan?", "Ertaga nima qilasan?", "Kecha nima qilding?", "Hozir nima qilyapsan?"], correct: 2 }
        ],
        2: [
            { q: "Kelajak zamon qo'shimchasi?", a: ["-iyor", "-di", "-ecek/-acak", "-miş"], correct: 2 },
            {q:"\"Gideceğim\" nima degani?",a:["Ketaman","Ketdim","Ketganman","Ketyapman"],correct:0},
            {q:"\"Geleceksin\" - ?",a:["Kelasan","Kelding","Kelyapsan","Kelganman"],correct:0},
            { q: "\"Okuyacak\" nima degani?", a: ["O'qidi", "O'qiyapti", "O'qiydi", "O'qidik"], correct: 2 },
            {q:"\"Yazacağız\" - ?",a:["Yozyapmiz","Yozamiz","Yozdik","Yozganmiz"],correct:1},
            {q:"\"Uyuyacaksınız\" nima degani?",a:["Uxladilar","Uxlayapman","Uxlaysizlar","Uxlayapsiz"],correct:2},
            {q:"\"Gülecekler\" - ?",a:["Kulyaptilar","Kulishdi","Kuladilar","Kuldilar"],correct:2},
            {q:"\"Yapmayacağım\" - ?",a:["Qilmayman","Qilmaydim","Qilmayapman","Qilyapman"],correct:0},
            {q:"\"Gelecek misin?\" - ?",a:["Kelasanmi?","Keldingmi?","Kelyapsanmi?","Kelganmisan?"],correct:0},
            { q: "\"Yarın ne yapacaksın?\" ma'nosi?", a: ["Kecha nima qilding?", "Bugun nima qilyapsan?", "Ertaga nima qilasan?", "Hozir nima qilasan?"], correct: 2 }
        ],
        3: [
            {q:"\"Lazım\" nima degani?",a:["Shart emas","Balki","Mumkin","Kerak"],correct:3},
            {q:"\"Gerek\" - ?",a:["Kerak","Qiyin","Oson","Majbur"],correct:0},
            {q:"\"Gitmem lazım\" nima degani?",a:["Ketishim mumkin","Ketishim shart emas","Kelyapman","Ketishim kerak"],correct:3},
            { q: "\"Okuman gerek\" - ?", a: ["O'qishing kerak", "O'qiding", "O'qishing mumkin", "O'qima"], correct: 0 },
            { q: "\"Mümkün\" nima degani?", a: ["Imkonsiz", "Iloji bor/Mumkin", "Kerak", "Farqi yo'q"], correct: 1 },
            { q: "\"İmkansız\" - ?", a: ["Mumkin", "Iloji yo'q/Imkonsiz", "Shart", "Muhim"], correct: 1 },
            {q:"\"Plan\" nima degani?",a:["Joy","Natija","Vaqt","Reja"],correct:3},
            {q:"\"Randevu\" - ?",a:["Sayohat","Dars","Ish","Uchrashuv"],correct:3},
            {q:"\"Erken\" nima degani?",a:["Sekin","Erta","Kech","Tez"],correct:1},
            {q:"\"Geç\" - ?",a:["Kech","Erta","Sekin","Yaqin"],correct:0}
        ],
        4: [
            { q: "Qiyosiy daraja qo'shimchasi?", a: ["En", "Daha", "Çok", "Gibi"], correct: 1 },
            { q: "Orttirma daraja qo'shimchasi?", a: ["Daha", "En", "Kadar", "Gibi"], correct: 1 },
            {q:"\"Daha büyük\" nima degani?",a:["Katta kabi","Eng katta","Kattaroq","Juda katta"],correct:2},
            {q:"\"En küçük\" - ?",a:["Kichikroq","Kichik emas","Eng kichik","Juda kichik"],correct:2},
            { q: "\"Ali, Can'dan daha uzun\" ma'nosi?", a: ["Ali va Can uzun", "Ali Candan uzunroq", "Can Alidan uzunroq", "Ikkalasi teng"], correct: 1 },
            { q: "\"Dünyanın en yüksek dağı\" - ?", a: ["Dunyodagi baland tog'", "Dunyoning eng baland tog'i", "Tog' juda baland", "Baland tog'lar ko'p"], correct: 1 },
            {q:"\"Kadar\" nima degani?",a:["Gacha/Chalalik","Keyin","Kabi","Oldin"],correct:0},
            { q: "\"Senin kadar çalışkan\" - ?", a: ["Senga o'xshab dangasa", "Sendek tirishqoq", "Sendan ko'ra tirishqoq", "Eng tirishqoq"], correct: 1 },
            { q: "\"Gibi\" nima degani?", a: ["Uchun", "Kabi/O'xshash", "Keyin", "Oldin"], correct: 1 },
            {q:"\"Melek gibi biri\" - ?",a:["Farishta emas","Eng yaxshi farishta","Farishtadek odam","Farishtadan yaxshiroq"],correct:2}
        ],
        5: [
            {q:"\"İçin\" nima degani?",a:["Bilan","Oldin","Uchun","Keyin"],correct:2},
            {q:"\"İle\" - ?",a:["Bilan","Keyin","Kabi","Uchun"],correct:0},
            {q:"\"Senin için\" nima degani?",a:["Sen uchun","Sen kabi","Sen bilan","Sendan keyin"],correct:0},
            {q:"\"Arabayla\" - ?",a:["Moshinada","Moshina bilan","Moshinadan","Moshinaga"],correct:1},
            {q:"\"Önce\" nima degani?",a:["Oldin","Hech qachon","Hozir","Keyin"],correct:0},
            {q:"\"Sonra\" - ?",a:["Hozir","Yaqinda","Oldin","Keyin"],correct:3},
            {q:"\"Dersten önce\" - ?",a:["Dars paytida","Darsgacha","Darsdan oldin","Darsdan keyin"],correct:2},
            {q:"\"Yemekten sonra\" - ?",a:["Ovqatdan oldin","Ovqatdan keyin","Ovqat paytida","Ovqat bilan"],correct:1},
            {q:"\"Beri\" nima degani?",a:["Beri","Uchun","Gacha","Kabi"],correct:0},
            {q:"\"Sabahtan beri\" - ?",a:["Ertalabdan beri","Ertalabgacha","Ertalabda","Ertalab uchun"],correct:0}
        ],
        6: [
            {q:"\"Vücut\" nima degani?",a:["Kiyim","Tana/Badan","Uy","Shahar"],correct:1},
            { q: "\"Baş\" - ?", a: ["Qo'l", "Oyoq", "Bosh", "Ko'z"], correct: 2 },
            { q: "\"Göz\" nima degani?", a: ["Burun", "Quloq", "Ko'z", "Og'iz"], correct: 2 },
            { q: "\"Kulak\" - ?", a: ["Qo'l", "Quloq", "Oyoq", "Bosh"], correct: 1 },
            {q:"\"Burun\" - ?",a:["Soch","Burun","Yuz","Tish"],correct:1},
            { q: "\"Ağız\" nima degani?", a: ["Tish", "Og'iz", "Til", "Lab"], correct: 1 },
            { q: "\"El\" - ?", a: ["Oyoq", "Qo'l", "Barmoq", "Tirsak"], correct: 1 },
            { q: "\"Ayak\" nima degani?", a: ["Qo'l", "Oyoq", "Tizza", "Yelka"], correct: 1 },
            { q: "\"Kalp\" - ?", a: ["O'pka", "Yurak", "Jigar", "Miya"], correct: 1 },
            { q: "\"Sağlık\" nima degani?", a: ["Kasallik", "Sog'liq", "Dori", "Shifoxona"], correct: 1 }
        ],
        7: [
            { q: "\"Kıyafet\" nima degani?", a: ["Taom", "Kiyim-kechak", "O'yinchoq", "Mebel"], correct: 1 },
            { q: "\"Gömlek\" - ?", a: ["Shim", "Ko'ylak (erkaklar)", "Kurtka", "Paypoq"], correct: 1 },
            {q:"\"Pantolon\" nima degani?",a:["Shim","Kostyum","Palto","Yubka"],correct:0},
            { q: "\"Elbise\" - ?", a: ["Shim", "Ko'ylak (ayollar)", "Shlyapa", "Sharfish"], correct: 1 },
            { q: "\"Ayakkabı\" nima degani?", a: ["Paypoq", "Oyoq kiyim", "Qo'lqop", "Shlyapa"], correct: 1 },
            {q:"\"Ceket\" - ?",a:["Pidjak/Kurtka","Shim","Kardigan","Nimcha"],correct:0},
            { q: "\"Şapka\" nima degani?", a: ["Sharfish", "Shlyapa/Kepka", "Qo'lqop", "Paypoq"], correct: 1 },
            { q: "\"Atkı\" - ?", a: ["Kepka", "Sharflash", "Qo'lqop", "Kamar"], correct: 1 },
            { q: "\"Eldiven\" nima degani?", a: ["Paypoq", "Qo'lqop", "Kamar", "Sharflash"], correct: 1 },
            { q: "\"Çorap\" - ?", a: ["Shim", "Paypoq", "Ko'ylak", "Oyoq kiyim"], correct: 1 }
        ],
        8: [
            { q: "\"Şehir\" nima degani?", a: ["Qishloq", "Shahar", "Ko'cha", "Tuman"], correct: 1 },
            {q:"\"Mahalle\" - ?",a:["Davlat","Mahalla","Bino","Uy"],correct:1},
            { q: "\"Sokak\" nima degani?", a: ["Maydon", "Ko'cha", "Yo'l", "Bekat"], correct: 1 },
            { q: "\"Bina\" - ?", a: ["Bog'", "Bino/Imorat", "Zavod", "Do'kon"], correct: 1 },
            { q: "\"Park\" nima degani?", a: ["Park/Istirohat bog'i", "Kasalxona", "Maktab", "Kutubxona"], correct: 0 },
            {q:"\"Hastane\" - ?",a:["Dorixona","Kasalxona","Maktab","Sinf"],correct:1},
            { q: "\"Eczane\" nima degani?", a: ["Do'kon", "Dorixona", "Bank", "Pochta"], correct: 1 },
            {q:"\"Banka\" - ?",a:["Bozor","Bank","Supermarket","Pochta"],correct:1},
            {q:"\"Postane\" nima degani?",a:["Teatr","Pochta","Muzey","Kutubxona"],correct:1},
            {q:"\"Kütüphane\" - ?",a:["Universitet","Maktab","Kutubxona","Kollej"],correct:2}
        ],
        9: [
            {q:"\"Hava Durumu\" nima degani?",a:["Ob-havo","Suv holati","Havo iflosligi","Yer holati"],correct:0},
            { q: "\"Güneşli\" - ?", a: ["Yomg'irli", "Quyoshli", "Bulutli", "Qorli"], correct: 1 },
            { q: "\"Yağmurlu\" nima degani?", a: ["Shamolli", "Yomg'irli", "Ochiq", "Issiq"], correct: 1 },
            {q:"\"Bulutlu\" - ?",a:["Sovuq","Quyoshli","Tumanli","Bulutli"],correct:3},
            { q: "\"Karlı\" nima degani?", a: ["Issiq", "Qorli", "Yomg'irli", "Shamolli"], correct: 1 },
            {q:"\"Rüzgarlı\" - ?",a:["Bulutli","Shamolli","Quyoshli","Ochiq"],correct:1},
            {q:"\"Sıcaklık\" nima degani?",a:["Namlik","Bosim","Harorat","Tezlik"],correct:2},
            {q:"\"Derece\" - ?",a:["Daraja/Gradus","Kilogram","Litr","Metr"],correct:0},
            {q:"\"Mevsim\" nima degani?",a:["Hafta","Oy","Fasl","Yil"],correct:2},
            {q:"\"İlkbahar\" - ?",a:["Yoz","Bahor","Kuz","Qish"],correct:1}
        ],
        10: [
            { q: "\"Seyahat\" nima degani?", a: ["Ish", "Sayohat", "O'qish", "O'yin"], correct: 1 },
            { q: "\"Tatil\" - ?", a: ["Bayram", "Ta'til", "Dam olish", "Sayohat"], correct: 1 },
            {q:"\"Bilet\" nima degani?",a:["Passport","Kitob","Chipta","Pul"],correct:2},
            {q:"\"Pasaport\" - ?",a:["Viza","Hujjat","Passport","Chipta"],correct:2},
            {q:"\"Otel\" nima degani?",a:["Kafe","Restoran","Mehmonxona","Uy"],correct:2},
            { q: "\"Rezervasyon\" - ?", a: ["Sotib olish", "Band qilish/Rezervatsiya", "Sotish", "To'lash"], correct: 1 },
            {q:"\"Uçak\" nima degani?",a:["Poyezd","Avtobus","Kema","Samolyot"],correct:3},
            {q:"\"Tren\" - ?",a:["Velesoped","Samolyot","Poyezd","Moshina"],correct:2},
            {q:"\"Gemi\" nima degani?",a:["Avtobus","Samolyot","Qayiq","Kema"],correct:3},
            {q:"\"Valiz\" - ?",a:["Chomadon","Sumka","Papka","Hamyon"],correct:0}
        ],
        11: [
            {q:"\"Emir Kipi\" nima?",a:["Shart mayli","Xabar mayli","Buyruq mayli","Istak mayli"],correct:2},
            {q:"\"Gel!\" nima degani?",a:["Kelaman","Keldi","Kel!","Keling"],correct:2},
            {q:"\"Yapmayın!\" - ?",a:["Qiling!","Qilmang!","Qilyapman","Qildim"],correct:1},
            {q:"\"Bak\" nima degani?",a:["Qarama","Qaradi","Qara","Qarayman"],correct:2},
            {q:"\"Gelin\" - ?",a:["Keldik","Kel!","Kelishyapti","Keling/Kelish"],correct:3},
            { q: "\"Oturun\" nima degani?", a: ["Turmang", "O'tiring", "O'tirdilar", "O'tir"], correct: 1 },
            {q:"\"Koşma!\" - ?",a:["Yugurdik","Yuguryapman","Yugurma!","Yugur!"],correct:2},
            {q:"\"Yaz\" - ?",a:["Yozdim","Yozamiz","Yoz!","Yozyapti"],correct:2},
            { q: "\"Okusun\" nima degani?", a: ["O'qisin", "O'qiyapman", "O'qiding", "O'qidik"], correct: 0 },
            {q:"\"Gitsinler\" - ?",a:["Ketishsin","Ketdim","Ketamiz","Ketishdi"],correct:0}
        ],
        12: [
            { q: "\"Şimdiki Zamanın Hikayesi\"?", a: ["Kelajak zamon", "Hozirgi davomli o'tgan zamon", "O'tgan zamon", "Keltiruvchi zamon"], correct: 1 },
            { q: "\"Okuyordum\" nima degani?", a: ["O'qiyapman", "O'qirdim/O'qiyotgan edim", "O'qiyman", "O'qidim"], correct: 1 },
            {q:"\"Geliyordu\" - ?",a:["Kelyapti","Kelayotgan edi","Keldi","Kelgan"],correct:1},
            {q:"\"Yapıyorduk\" nima degani?",a:["Qilayotgan edik","Qilamiz","Qildik","Qilyapmiz"],correct:0},
            {q:"\"Gidiyordun\" - ?",a:["Ketyapsan","Ketasan","Ketding","Ketayotgan eding"],correct:3},
            {q:"\"Bakıyorlardı\" nima degani?",a:["Qaradilar","Qarayotgan edilar","Qarashdi","Qarayaptilar"],correct:1},
            {q:"\"Çalışıyordum\" - ?",a:["Ishladim","Ishlayotgan edim","Ishlayapman","Ishlayman"],correct:1},
            {q:"\"Bekliyorduk\" nima degani?",a:["Kutyapmiz","Kutayotgan edik","Kutamiz","Kutdik"],correct:1},
            {q:"\"Anlamıyordum\" - ?",a:["Tushunmayotgan edim","Tushunmadim","Tushunmayapman","Tushunaman"],correct:0},
            {q:"\"Sevmiyordun\" nima degani?",a:["Sevmayotgan eding","Sevmading","Sevasan","Sevmayapsan"],correct:0}
        ],
        13: [
            { q: "\"Geniş Zaman\" nima?", a: ["Hozirgi zamon", "Umumiy/Hozirgi-kelajak zamon", "O'tgan zamon", "Kelajak zamon"], correct: 1 },
            { q: "\"Okurum\" nima degani?", a: ["O'qiyapman", "O'qiyman (odatan)", "O'qidim", "O'qiydi"], correct: 1 },
            {q:"\"Gelir\" - ?",a:["Kelgan","Keldi","Kelyapti","Keladi"],correct:3},
            {q:"\"Yaparız\" nima degani?",a:["Qilganmiz","Qildik","Qilyapmiz","Qilamiz/Qilamiz"],correct:3},
            {q:"\"Giderler\" - ?",a:["Ketishdi","Ketamiz","Ketishadi","Ketadilar"],correct:3},
            {q:"\"Bakarsın\" nima degani?",a:["Qarading","Qaraysan","Qarayapsan","Qarabsan"],correct:1},
            {q:"\"Severler\" - ?",a:["Sevishadi","Sevishdi","Sevadilar","Sevishgan"],correct:1},
            {q:"\"İçmez\" nima degani?",a:["Ichmadi","Ichmagan","Ichmayapti","Ichmaydi"],correct:3},
            {q:"\"Gelmezler\" - ?",a:["Kelishni xohlashmaydi","Kelishmadi","Kelmadilar","Kelmaydilar"],correct:3},
            { q: "\"Yapar mısın?\" ma'nosi?", a: ["Qilasanmi? (Iltimos)", "Qildingmi?", "Qilyapsanmi?", "Qilmaganmisan?"], correct: 0 }
        ],
        14: [
            {q:"\"Meslek\" nima degani?",a:["Kasb","Vaqt","Ism","Joy"],correct:0},
            { q: "\"Doktor\" - ?", a: ["O'qituvchi", "Shifokor", "Muxandis", "Haydovchi"], correct: 1 },
            { q: "\"Öğretmen\" nima degani?", a: ["O'quvchi", "O'qituvchi", "Direktor", "Kotib"], correct: 1 },
            {q:"\"Mühendis\" - ?",a:["Rassom","Hukshunos","Musiqachi","Muhandis"],correct:3},
            {q:"\"Avukat\" nima degani?",a:["Advokat","Sudya","Polis","Oshpaz"],correct:0},
            { q: "\"Şoför\" - ?", a: ["Uchuvchi", "Haydovchi", "Bog'bon", "Sotuvchi"], correct: 1 },
            {q:"\"Aşçı\" nima degani?",a:["Tikuvchi","Ofitsiant","Oshpaz","Sotuvchi"],correct:2},
            { q: "\"Polis\" - ?", a: ["Askar", "Politsiyachi", "Yong'in o'chiruvchi", "Qo'riqchi"], correct: 1 },
            {q:"\"Pilot\" nima degani?",a:["Haydovchi","Muxandis","Kema kapitani","Uchuvchi"],correct:3},
            {q:"\"İşçi\" - ?",a:["Ishchi","Xizmatchi","Boshliq","Menejer"],correct:0}
        ],
        15: [
            { q: "\"Hobi\" nima degani?", a: ["Ish", "Qiziqish/Hobbiy", "O'qish", "Dam olish"], correct: 1 },
            { q: "\"Müzik dinlemek\" - ?", a: ["Musiqa eshitish", "Rasm chizish", "Kitob o'qish", "Sport bilan shug'ullanish"], correct: 0 },
            { q: "\"Kitap okumak\" nima degani?", a: ["Televizor ko'rish", "Kitob o'qish", "Yozish", "Uxlayish"], correct: 1 },
            { q: "\"Spor yapmak\" - ?", a: ["Ovqat tayyorlash", "Sport bilan shug'ullanish", "Sayohat qilish", "Raqsga tushish"], correct: 1 },
            { q: "\"Resim yapmak\" nima degani?", a: ["Rasmga tushish", "Rasm chizish", "Rasm ko'rish", "Bo'yash"], correct: 1 },
            {q:"\"Yüzmek\" - ?",a:["Yugurish","Suzish","Yurish","Sakrash"],correct:1},
            { q: "\"Seyahat etmek\" nima degani?", a: ["O'qish", "Sayohat qilish", "Ishlash", "O'ynash"], correct: 1 },
            {q:"\"Yemek pişirmek\" - ?",a:["Idish yuvish","Bozorga borish","Dasturxon yozish","Ovqat pishirish"],correct:3},
            { q: "\"Fotoğraf çekmek\" nima degani?", a: ["Rasm chizish", "Rasmga tushirish", "Kino ko'rish", "O'yin o'ynash"], correct: 1 },
            {q:"\"Dans etmek\" - ?",a:["Kulish","Raqsga tushish","Ashula aytish","Gapirish"],correct:1}
        ]
    },
    'B1': {
        1: [
            { q: "\"Belirsiz Geçmiş Zaman\" qo'shimchasi?", a: ["-di", "-miş/-mış/-muş/-müş", "-iyor", "-ecek"], correct: 1 },
            {q:"\"Gelmiş\" nima degani?",a:["Keldi","Kelgan emish/Kelgan","Kelyapti","Keladi"],correct:1},
            { q: "\"Okumuşsun\" - ?", a: ["O'qiding", "O'qigan ekansan", "O'qiyapsan", "O'qiysan"], correct: 1 },
            { q: "\"Duydum ki...\" ma'nosi?", a: ["Eshatdimki...", "Ko'rdimki...", "Bildimki...", "O'yladimki..."], correct: 0 },
            {q:"\"Anlatmışlar\" nima degani?",a:["Gapirishdi","Gapirib berishibdi","Gapiryaptilar","Gapirishadi"],correct:1},
            { q: "\"Unutmuşum\" - ?", a: ["Unutdim", "Unutib qo'yibman", "Unutmayapman", "Unutaman"], correct: 1 },
            {q:"\"Bakmıştık\" nima degani?",a:["Qaraymiz","Qaradik","Qaragan edik","Qarayapmiz"],correct:2},
            {q:"\"Yapmışlar mı?\" - ?",a:["Qilishdimi?","Qilishibdimi?","Qilishyaptimi?","Qilishadimi?"],correct:1},
            {q:"\"Yorulmuşum\" nima degani?",a:["Charchamayman","Charchabman","Charchayman","Charchadim"],correct:1},
            {q:"\"Gelmemişler\" - ?",a:["Kelishmabdi","Kelishmadi","Kelishmaydi","Kelishdi"],correct:0}
        ],
        2: [
            { q: "\"Şart Kipi\" qo'shimchasi?", a: ["-se/-sa", "-meli", "-iyor", "-di"], correct: 0 },
            {q:"\"Gelse\" nima degani?",a:["Keldi","Kelsa","Keladi","Kelgan"],correct:1},
            {q:"\"Yapsak\" - ?",a:["Qildik","Qilsak","Qilganmiz","Qilamiz"],correct:1},
            { q: "\"Okusam\" nima degani?", a: ["O'qidim", "O'qisam", "O'qiyman", "O'qiyotgan edim"], correct: 1 },
            {q:"\"Gitmeseler\" - ?",a:["Ketishmasa","Ketishsa","Ketmaydilar","Ketishmadi"],correct:0},
            {q:"\"Bilsen\" nima degani?",a:["Bolding","Bilsang","Bilyapsan","Bilasan"],correct:1},
            {q:"\"Baksa\" - ?",a:["Qarsa","Qaradi","Qarayapti","Qaraydi"],correct:0},
            { q: "\"Gerçekleşse\" nima degani?", a: ["Amalga oshsa", "Bo'lmasa", "O'zgarsa", "Yaxshilansa"], correct: 0 },
            { q: "\"Keşke...\" so'zining ma'nosi?", a: ["Balki...", "Qaniydi...", "Chunki...", "Agarda..."], correct: 1 },
            {q:"\"Sevseydim\" - ?",a:["Sevsam edi","Sevganman","Sevdim","Sevar edim"],correct:0}
        ],
        3: [
            { q: "\"Gereklilik Kipi\" qo'shimchasi?", a: ["-meli/-malı", "-iyor", "-ecek", "-se"], correct: 0 },
            {q:"\"Gitmeliyim\" nima degani?",a:["Ketishim mumkin","Ketishim kerak","Ketdim","Ketaman"],correct:1},
            { q: "\"Okumalısın\" - ?", a: ["O'qiding", "O'qishing kerak", "O'qishing mumkin", "O'qimagin"], correct: 1 },
            {q:"\"Yapmamalıyız\" nima degani?",a:["Qilmaymiz","Qilmasligimiz kerak","Qilmadik","Qilishimiz kerak"],correct:1},
            {q:"\"Bakmalılar\" - ?",a:["Qarashlari kerak","Qaradilar","Qaraydilar","Qarayotgan edilar"],correct:0},
            {q:"\"Gelmelisin\" nima degani?",a:["Kelyapsan","Kelding","Kelasan","Kelishing kerak"],correct:3},
            {q:"\"Çalışmalıyım\" - ?",a:["Ishlayotgan edim","Ishlashim kerak","Ishlayman","Ishladim"],correct:1},
            {q:"\"Beklemeliyiz\" nima degani?",a:["Kutyapmiz","Kutayotgan edik","Kutishimiz kerak","Kutdik"],correct:2},
            {q:"\"Sevmelisin\" - ?",a:["Sevasan","Sevishing kerak","Sevding","Savyapsan"],correct:1},
            { q: "\"Öğrenmeliyiz\" nima degani?", a: ["O'rgandik", "O'rganishimiz kerak", "O'rganyapmiz", "O'rganamiz"], correct: 1 }
        ],
        4: [
            { q: "\"Dolaylı Anlatım\" nima?", a: ["To'g'ri nutq", "Ko'chirma nutq", "O'zlashtirma nutq", "Buyruq nutq"], correct: 2 },
            {q:"\"Söyledi\" nima degani?",a:["Suhbatlashdi","Aytdi","Dedi","Gapirdi"],correct:1},
            {q:"\"Geleceğini söyledi\" - ?",a:["Kelyapti dedi","Kelishini aytdi","Keldi","Kelaman dedi"],correct:1},
            { q: "\"Yaptığını gördüm\" nima degani?", a: ["Qilayotganini ko'rdim", "Qildim", "Qildi", "Qilmoqchi"], correct: 0 },
            { q: "\"Bildiğini sanmıyorum\" - ?", a: ["Bilishingni o'ylamayman", "Bilishingni bilaman", "Bilishingni xohlayman", "Bilarding"], correct: 0 },
            {q:"\"Gittiğini duydum\" nima degani?",a:["Ketyapti","Ketmoqchi","Ketganini eshitdim","Ketdi"],correct:2},
            { q: "\"Okuduğunu biliyorum\" - ?", a: ["O'qiyotganingni bilaman", "O'qidim", "O'qiysan", "O'qiyapsan"], correct: 0 },
            { q: "\"Geldiğini gördük\" nima degani?", a: ["Kelganini ko'rdik", "Keldi", "Kelamiz", "Kelyapmiz"], correct: 0 },
            {q:"\"Sevdiğini hissettim\" - ?",a:["Sevdim","Sevasan","Sevishini his qildim","Sevyapti"],correct:2},
            { q: "\"Öğrendiğini anladım\" nima degani?", a: ["O'rganganini tushundim", "O'rgandim", "O'rganasan", "O'rganyapsan"], correct: 0 }
        ],
        5: [
            { q: "\"Zarf-fiiller\" nima uchun ishlatiladi?", a: ["Ot yasash uchun", "Fe'ldan ravish yasash uchun", "Sifat yasash uchun", "Zamon uchun"], correct: 1 },
            { q: "\"-erek/-arak\" qo'shimchasi ma'nosi?", a: ["...sh uchun", "...ib/...gan holda", "...dan keyin", "...dan oldin"], correct: 1 },
            {q:"\"Koşarak geldi\" nima degani?",a:["Yugurdi va keldi","Yugurish uchun keldi","Yugurgandan keyin keldi","Yugurib keldi"],correct:3},
            {q:"\"Gülerek konuştu\" - ?",a:["Kulib gapirdi","Kuldi va gapirdi","Kulish uchun gapirdi","Kulayotgan edi"],correct:0},
            {q:"\"Bakarak anladı\" nima degani?",a:["Qarab tushundi","Qarayotgan edi","Qaradi va tushundi","Qarash uchun"],correct:0},
            { q: "\"Ağlayarak gitti\" - ?", a: ["Yig'lab ketdi", "Yig'lash uchun", "Yig'ladi va ketdi", "Yig'layotgan edi"], correct: 0 },
            { q: "\"Çalışarak başardı\" nima degani?", a: ["Ishlab muvaffaqiyat qozondi", "Ishlash uchun", "Ishladi va bo'ldi", "Ishlayapti"], correct: 0 },
            { q: "\"Düşünerek cevap verdi\" - ?", a: ["O'ylab javob berdi", "O'ylash uchun", "O'yladi va dedi", "O'ylayapti"], correct: 0 },
            { q: "\"Bilerek yaptı\" nima degani?", a: ["Bilib qildi (ataylab)", "Bilish uchun", "Bildi va bo'ldi", "Bilyapti"], correct: 0 },
            { q: "\"Korkarak baktı\" - ?", a: ["Qo'rqib qaradi", "Qo'rqish uchun", "Qo'rqdi va dedi", "Qo'rqayapti"], correct: 0 }
        ],
        6: [
            { q: "\"Edatlar\" (Ko'makchilar) nima?", a: ["Fe'llar", "So'zlarni bog'lovchi yordamchilar", "Otlar", "Sifatlar"], correct: 1 },
            {q:"\"Rağmen\" nima degani?",a:["Oldin","Qaramasdan","Keyin","Uchun"],correct:1},
            { q: "\"Yağmura rağmen gittik\" - ?", a: ["Yomg'ir uchun ketdik", "Yomg'irga qaramasdan ketdik", "Yomg'irdan keyin", "Yomg'irgacha"], correct: 1 },
            {q:"\"Dolayı\" nima degani?",a:["Tufayli/Sababli","Kabi","Oldin","Keyin"],correct:0},
            {q:"\"Bundan dolayı...\" - ?",a:["Shu sababli...","Shungacha","Shundan keyin","Shuningdek"],correct:0},
            {q:"\"Hakkında\" nima degani?",a:["Uchun","Bilan","Kabi","Haqida"],correct:3},
            {q:"\"Senin hakkında\" - ?",a:["Sen uchun","Sen kabi","Sen haqingda","Sen bilan"],correct:2},
            {q:"\"Tarafından\" nima degani?",a:["Oldin","Tomonidan","Keyin","Ichida"],correct:1},
            {q:"\"Devlet tarafından\" - ?",a:["Davlat uchun","Davlat ichida","Davlat tomonidan","Davlat bilan"],correct:2},
            { q: "\"Göre\" nima degani?", a: ["Muvofiq/Ko'ra", "Keyin", "Oldin", "Bilan"], correct: 0 }
        ],
        7: [
            { q: "\"Bağlaçlar\" (Bog'lovchilar) nima?", a: ["Sifatlar", "Gaplarni bog'lovchi so'zlar", "Fe'llar", "Otlar"], correct: 1 },
            {q:"\"Çünkü\" nima degani?",a:["Lekin","Chunki","Shuning uchun","Va"],correct:1},
            {q:"\"Fakat\"/\"Ama\" - ?",a:["Chunki","Lekin/Biroq","Va","Yoki"],correct:1},
            {q:"\"Ancak\" nima degani?",a:["Ham","Chunki","Faqat/Lekin","Shuning uchun"],correct:2},
            {q:"\"Veya\"/\"Yahut\" - ?",a:["Biroq","Va","Lekin","Yoki"],correct:3},
            { q: "\"Hem... hem...\" ma'nosi?", a: ["Nafaqat... balki...", "Ham... ham...", "Yoki... yoki...", "Na... na..."], correct: 1 },
            {q:"\"Ya... ya...\" - ?",a:["Ham... ham...","Yoki... yoki...","Va","Lekin"],correct:1},
            { q: "\"Ne... ne...\" ma'nosi?", a: ["Ham... ham...", "Na... na... (inkor)", "Yoki... yoki...", "Lekin"], correct: 1 },
            {q:"\"Üstelik\"/\"Ayrıca\" - ?",a:["Uchun","Bundan tashqari","Chunki","Lekin"],correct:1},
            {q:"\"Hatta\" nima degani?",a:["Hatto","Lekin","Yoki","Chunki"],correct:0}
        ],
        8: [
            {q:"\"Zaman Zarfları\" nima?",a:["Vaqt ravishlari","Joy ravishlari","Sifatlar","Holat ravishlari"],correct:0},
            {q:"\"Henüz\" nima degani?",a:["Keyin","Oldin","Hali","Yaqinda"],correct:2},
            {q:"\"Hala\" - ?",a:["Hali ham","Kech","Erta","Hozir"],correct:0},
            {q:"\"Az önce\" nima degani?",a:["Yaqinda/Hozirgina","Hech qachon","Hozir","Keyin"],correct:0},
            {q:"\"Yakında\" - ?",a:["Orqada","Yaqinda","Uzoqda","Oldinda"],correct:1},
            {q:"\"Ara sıra\" nima degani?",a:["Har doim","Tez-tez","Goh-gohida/Vaqti-vaqti bilan","Hech qachon"],correct:2},
            { q: "\"Bazen\" - ?", a: ["Har doim", "Ba'zan", "Hech doim", "Tez"], correct: 1 },
            {q:"\"Sık sık\" nima degani?",a:["Sekin","Hech qachon","Tez-tez","Kamdan-kam"],correct:2},
            { q: "\"Nadiren\" - ?", a: ["Tez-tez", "Kamdan-kam", "Har doim", "Ba'zan"], correct: 1 },
            {q:"\"Asla\" nima degani?",a:["Hech qachon/Aslo","Balki","Har doim","Yaqinda"],correct:0}
        ],
        9: [
            { q: "\"Dönüşlü Fiiller\" nima?", a: ["O'zlik nisbati", "Ortirma nisbati", "Majhul nisbati", "Birgalik nisbati"], correct: 0 },
            { q: "O'zlik nisbati qo'shimchasi?", a: ["-dir", "-l", "-n", "-ş"], correct: 2 },
            {q:"\"Yıkandı\" nima degani?",a:["Yuvdi","Yuvishdi","Yuvindi","Yuvildi"],correct:2},
            {q:"\"Giyindi\" - ?",a:["Kiyildi","Kiyishdi","Kiyindi","Kiydi"],correct:2},
            {q:"\"Tarandı\" nima degani?",a:["Tarandi","Taraldi","Tarashdi","Taradi"],correct:0},
            {q:"\"Süslendi\" - ?",a:["Yasadilar","Yasaldi","Yasashdi","Yasandi"],correct:3},
            { q: "\"Sevindi\" nima degani?", a: ["Sevdi", "Xursand bo'ldi (sevindi)", "Sevilgan", "Sevishdi"], correct: 1 },
            {q:"\"Kaşındı\" - ?",a:["Qashindi","Qashaldi","Qashladi","Qashashdi"],correct:0},
            {q:"\"Hazırlandı\" nima degani?",a:["Tayyorlandi","Tayyorladi","Tayyor","Tayyorlashdi"],correct:0},
            {q:"\"Dinlendi\" - ?",a:["Eshatilda","Dam oldilar","Eshitdi","Dam oldi (tinchlandi)"],correct:3}
        ],
        10: [
            { q: "\"İşteş Fiiller\" nima?", a: ["Birgalik nisbati", "O'zlik nisbati", "Majhul nisbati", "Ortirma nisbati"], correct: 0 },
            { q: "Birgalik nisbati qo'shimchasi?", a: ["-n", "-l", "-ş", "-dir"], correct: 2 },
            { q: "\"Görüştüler\" nima degani?", a: ["Ko'rdilar", "Ko'rishdilar", "Ko'rilganlar", "Ko'rishadi"], correct: 1 },
            {q:"\"Bakıştılar\" - ?",a:["Qaraldilar","Qaraydilar","Qaradilar","Bir-biriga qarashdi"],correct:3},
            {q:"\"Yazıştılar\" nima degani?",a:["Yozishdilar","Yozildi","Yozyaptilar","Yozdilar"],correct:0},
            {q:"\"Gülüştüler\" - ?",a:["Kuladi","Kulganlar","Kulishdilar","Kuldilar"],correct:2},
            { q: "\"Savaştılar\" nima degani?", a: ["Urushdilar", "Kurashdilar", "G'olib bo'lishdi", "Ketishdi"], correct: 0 },
            {q:"\"Dövüştüler\" - ?",a:["Urilgalar","Urdilar","Urushdilar/Mushtlashdilar","Ketishdi"],correct:2},
            {q:"\"Selamlaştılar\" nima degani?",a:["Salom berdilar","Salom beradi","Salomlashdilar","Kelishdi"],correct:2},
            { q: "\"Tanıştılar\" - ?", a: ["Tanishdilar", "Bildi", "O'rgandilar", "Ko'rdilar"], correct: 0 }
        ],
        11: [
            { q: "\"Ettirgen/Oldurgan Fiiller\" nima?", a: ["Majhul nisbati", "Ortirma nisbati", "O'zlik nisbati", "Birgalik nisbati"], correct: 1 },
            { q: "Ortirma nisbati qo'shimchalari?", a: ["-dir, -t, -ir, -ar", "-l, -n", "-ş", "-me"], correct: 0 },
            { q: "\"Okuttu\" nima degani?", a: ["O'qidi", "O'qitdi/O'qittirdi", "O'qiyapti", "O'qigan"], correct: 1 },
            {q:"\"Yaptırdı\" - ?",a:["Qildi","Qilyapti","Qildirdi/Qildirib berdi","Qilyapmiz"],correct:2},
            {q:"\"İçirdi\" nima degani?",a:["Ichirdi","Ichgan","Ichadi","Ichdi"],correct:0},
            {q:"\"Yedirdi\" - ?",a:["Yedirdi","Yegan","Yeydi","Yedi"],correct:0},
            {q:"\"Güldürdü\" nima degani?",a:["Kulganmi","Kuladi","Kuldi","Kuldirdi"],correct:3},
            { q: "\"Ağlattı\" - ?", a: ["Yig'ladi", "Yig'latdi", "Yig'layapti", "Yig'lagan"], correct: 1 },
            { q: "\"Korkuttu\" nima degani?", a: ["Qo'rqdi", "Qo'rqitdi", "Qo'rqyapti", "Qo'rqadi"], correct: 1 },
            {q:"\"Pişirtti\" - ?",a:["Pishirdi","Pishirgan","Pishirttirdi","Pishiradi"],correct:2}
        ],
        12: [
            { q: "\"Kelime Türetme\" (So'z yasash) nima?", a: ["Fe'llar", "Morfologik o'zgarishlar", "Sifatlar", "Otlar"], correct: 1 },
            { q: "\"-ci/-cı\" qo'shimchasi ma'nosi?", a: ["O'rin", "Kasb/Harakat egasi", "Sifat", "Zamon"], correct: 1 },
            {q:"\"Kitapçı\" nima degani?",a:["Kitob","Kitoblar","Kitob sotuvchi","Kitobxon"],correct:2},
            {q:"\"Sütçü\" - ?",a:["Sutchilik","Sutlar","Sut","Sut sotuvchi"],correct:3},
            { q: "\"-lik/-lık\" qo'shimchasi ma'nosi?", a: ["Mavhum ot yoki o'rin yasovchi", "Kasb", "Zamon", "Mayl"], correct: 0 },
            { q: "\"Güzellik\" nima degani?", a: ["Chiroyli", "Go'zallik", "Chiroyliroq", "Eng chiroyli"], correct: 1 },
            {q:"\"Kalemlik\" - ?",a:["Qalam bilan","Qalamdon","Qalamlar","Qalam"],correct:1},
            { q: "\"-li/-lı\" qo'shimchasi?", a: ["...siz", "...li (borlik)", "Zamon", "Shaxs"], correct: 1 },
            {q:"\"Şekerli\" nima degani?",a:["Shakarchilik","Shakarsiz","Shakarli","Shakar"],correct:2},
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
            {q:"\"Misafirperverlik\" - ?",a:["Mehmondostlik","Baxillik","Kuchsizlik","Xasislik"],correct:0},
            { q: "\"Düğün\" nima degani?", a: ["Uchrashuv", "Tayyorgarlik", "To'y", "Dafn"], correct: 2 },
            { q: "\"Halk oyunları\" - ?", a: ["Xalq o'yinlari/raqslari", "Sport o'yinlari", "Video o'yinlar", "Bolalar o'yinlari"], correct: 0 },
            { q: "\"El sanatları\" nima degani?", a: ["Mashina yasash", "Xalq amaliy san'ati (hunarmandlik)", "Rasm chizish", "Oshpazlik"], correct: 1 },
            {q:"\"Mutfak kültürü\" - ?",a:["Oshxona madaniyati","Uy bezagi","Kiyinish uslubi","Til boyligi"],correct:0},
            { q: "\"Türkü\" nima degani?", a: ["She'r", "Xalq qo'shig'i (Turku)", "Hikoya", "Ertak"], correct: 1 },
            { q: "\"Efsane\" - ?", a: ["Xabar", "Afsona", "Haqiqat", "Ma'ruza"], correct: 1 }
        ]
    },
    'B2': {
        1: [
            { q: "\"Etkin Geniş Zaman\"?", a: ["Hozirgi", "Kelasi", "Umumiy turg'un o'tgan zamon (-irdi)", "Aniq"], correct: 2 },
            {q:"\"Yapardı\" nima degani?",a:["Qildi","Qilyapti","Qilgan","Qilyapti edi/Qilar edi"],correct:3},
            {q:"\"Gelirdi\" - ?",a:["Kelardi","Keldi","Kelyapti","Kelgan emish"],correct:0},
            { q: "\"Okurduk\" nima degani?", a: ["O'qidik", "O'qirdik", "O'qimoqdamiz", "O'qiganmiz"], correct: 1 },
            {q:"\"Severlerdi\" - ?",a:["Sevishdi","Sevardilar","Sevishadi","Sevadilar"],correct:1},
            {q:"\"Bakardın\" nima degani?",a:["Qarading","Qarayapsan","Qararding","Qaraysan"],correct:2},
            { q: "\"İçmezdi\" - ?", a: ["Ichmayapti", "Ichmas edi", "Ichmadi", "Ichmaydigan bo'ldi"], correct: 1 },
            {q:"\"Gelmezlerdi\" nima degani?",a:["Kelmasdilar","Kelmadilar","Kelishni xohlashmadi","Kelishmadi"],correct:0},
            {q:"\"Çalışırdım\" - ?",a:["Ishladim","Ishlar edim","Ishlayman","Ishlayapman"],correct:1},
            {q:"\"Uyumazdı\" nima degani?",a:["Uxlamaydi","Uxlamadi","Uxlamas edi","Uxlamagan"],correct:2}
        ],
        2: [
            { q: "\"Eylemsiler\" (Ravishdosh/Sifatdosh/Harakat nomi)?", a: ["Fe'l shakllari", "Otlar", "Sifatlar", "Ravishlar"], correct: 0 },
            { q: "\"-dıkça/-dikçe\" qo'shimchasi ma'nosi?", a: ["...sh uchun", "...gan sari / ...gan vaqtda", "...dan keyin", "...dan oldin"], correct: 1 },
            { q: "\"Gördükçe hatırlıyorum\" nima degani?", a: ["Ko'ryapman va eslayman", "Ko'rgan sari eslayapman", "Ko'rganim yo'q", "Ko'rganimdan keyin"], correct: 1 },
            { q: "\"Okudukça öğrenirsin\" - ?", a: ["O'qisang bilasan", "O'qigan sari o'rganasan", "O'qishing kerak", "O'qisang ham bo'lmaydi"], correct: 1 },
            { q: "\"Geldikçe bize uğra\" nima degani?", a: ["Kelsang bizga kirib o't (har gal)", "Kelganingdan so'ng", "Kelyapsan", "Keldik"], correct: 0 },
            {q:"\"Yaptıkça düzeliyor\" - ?",a:["Qilding","Qilyapsan","Qilsang yaxshi","Qilgan sari tuzalyapti"],correct:3},
            { q: "\"Düşündükçe üzülüyor\" nima degani?", a: ["O'ylayapti", "O'ylagan sari xafa bo'lyapti", "O'yladi", "O'ylamaydi"], correct: 1 },
            { q: "\"Konuştukça alışıyorum\" - ?", a: ["Gapirgan sari o'rganyapman", "Gapiryapman", "Gapirdim", "Gapiraman"], correct: 0 },
            {q:"\"Baktıkça gülümsüyor\" nima degani?",a:["Qaragan sari jilmayyapti","Qaramaydi","Qarayapti","Qaradi"],correct:0},
            { q: "\"Sordukça anlıyorum\" - ?", a: ["Sog'inyapman", "So'ragan sari tushunyapman", "So'radim", "So'rayman"], correct: 1 }
        ],
        3: [
            {q:"\"Soru Cümleleri (Zarf-fiil)\" - ?",a:["Nasıl?","Kim?","Neden?","Ne zaman?"],correct:0},
            { q: "\"-ınca/-ince\" qo'shimchasi ma'nosi?", a: ["...sh uchun", "...ganda / ...ishi bilan", "...kabi", "...tufayli"], correct: 1 },
            {q:"\"Gelince haber ver\" nima degani?",a:["Kelishing bilan (kelganda) xabar ber","Kelishing uchun ayt","Kelganingdan keyin","Kelayapsan"],correct:0},
            { q: "\"Görünce şaşırdım\" - ?", a: ["Ko'rib hayron bo'ldim", "Ko'rganda hayron bo'ldim", "Ko'rganim yo'q", "Ko'rayotgan edim"], correct: 1 },
            { q: "\"Okuyunca anladım\" nima degani?", a: ["O'qish uchun", "O'qiganda tushundim", "O'qidim", "O'qiyman"], correct: 1 },
            {q:"\"Bakınca gülümsedi\" - ?",a:["Qaraganda jilmaydi","Qarayapti","Qaradi va jilmaydi","Qaramoqchi"],correct:0},
            { q: "\"Duyunca ağladı\" nima degani?", a: ["Eshitib yig'ladi", "Eshitganda yig'ladi", "Eshityapti", "Eshitgan"], correct: 1 },
            { q: "\"Yapınca öğreneceksin\" - ?", a: ["Qilsang o'rganasan", "Qilganda o'rganasan", "Qilding", "Qilganingda"], correct: 1 },
            { q: "\"Bilinince değişir\" nima degani?", a: ["Bilsang o'zgaradi", "Bilinsa (ma'lum bo'lganda) o'zgaradi", "Bilyapti", "Bildi"], correct: 1 },
            { q: "\"Uyanınca kalktı\" - ?", a: ["Uyg'ondi va turdi", "Uyg'onganda (uyg'onishi bilan) turdi", "Uxlayotgan edi", "Uyg'onadi"], correct: 1 }
        ],
        4: [
            { q: "\"Belirteçler\" (Ravishlar) nima?", a: ["Fe'llarni tavsiflovchi so'zlar", "Otlar", "Sifatlar", "Bog'lovchilar"], correct: 0 },
            {q:"\"Aşağı\" nima degani?",a:["Yuqori","Tashqari","Past","Icha"],correct:2},
            { q: "\"Yukarı\" - ?", a: ["Past", "Yuqori/Tepad", "O'ng", "Chap"], correct: 1 },
            {q:"\"İçeri\" nima degani?",a:["Tashqari","Ichkari","Uzoq","Yaqin"],correct:1},
            {q:"\"Dışarı\" - ?",a:["Oldi","Orqa","Ichkari","Tashqari"],correct:3},
            { q: "\"İleri\" nima degani?", a: ["Orqaga", "Oldinga/Ilgari", "To'g'riga", "Chapga"], correct: 1 },
            {q:"\"Geri\" - ?",a:["Yuqoriga","Orqaga","Pastga","Oldinga"],correct:1},
            { q: "\"Beraber\" nima degani?", a: ["Yolg'iz", "Birgalikda", "Alohida", "Keyin"], correct: 1 },
            {q:"\"Birlikte\" - ?",a:["Oldin","Birga","Keyin","Hamda"],correct:1},
            { q: "\"Yalnız\" nima degani?", a: ["Birga", "Faqat/Yolg'iz", "Ko'p", "Tez"], correct: 1 }
        ],
        5: [
            {q:"\"Zarf Cümlecikleri\" (Sabab)?",a:["İçin","Ama","Çünkü","-dığı için / -diğinden dolayı"],correct:3},
            { q: "\"Hastalandığım için gelemedim\" - ?", a: ["Kasal bo'lganim uchun kelolmadim", "Kasalman", "Kelolmayman", "Hozir keldim"], correct: 0 },
            {q:"\"Çalıştığından dolayı başardı\" nima degani?",a:["Ishlamaydi","Ishladi","Ishlaganligi uchun muvaffaqiyat qozondi","Ishlash kerak"],correct:2},
            {q:"\"Bildiğim kadarıyla...\" - ?",a:["Bilishimcha...","Bilishim kerak","Bilmayman","Bilardim"],correct:0},
            { q: "\"Okuduğum üzere...\" nima degani?", a: ["O'qiganimga ko'ra/asoslanib", "O'qidim", "O'qiyapman", "O'qiyman"], correct: 0 },
            {q:"\"Anladığım şu ki...\" - ?",a:["Tushunyapman","Tushunmadim","Tushunganim shuki...","Tushunaman"],correct:2},
            {q:"\"Söylediğim gibi...\" nima degani?",a:["Aytaman","Aytganimdek...","Aytmayapman","Aytdim"],correct:1},
            { q: "\"İstediğin sürece...\" - ?", a: ["Xohlaganingcha/mubodo", "Xohlasang bo'ladi", "Xohlading", "Xohlamaysan"], correct: 0 },
            {q:"\"Gittiği vakit...\" nima degani?",a:["Ketyapmiz","Ketgan vaqtda...","Ketamiz","Ketdi"],correct:1},
            {q:"\"Sevdiğin müddetçe...\" - ?",a:["Sevding","Sevasan","Sevyapmiz","Sevib turganingcha/muddat mobaynida"],correct:3}
        ],
        6: [
            {q:"\"Subjektif Anlatım\" nima?",a:["Badiiy nutq","Ilmiy nutq","Obyektiv nutq","Subyektiv nutq (shaxsiy fikr)"],correct:3},
            {q:"\"Bence\" nima degani?",a:["Sizcha","Menimcha","Bizcha","Uningcha"],correct:1},
            {q:"\"Sence\" - ?",a:["Menimcha","Ularcha","Sizcha/Seningcha","Bizcha"],correct:2},
            { q: "\"Öyle sanıyorum ki...\" ma'nosi?", a: ["Ishonchim komil", "Shunday deb o'ylayman/taxmin qilamanki...", "Bilmayman", "To'g'ri"], correct: 1 },
            {q:"\"Galiba\" nima degani?",a:["Ehtimol/Shekilli","Aniq","Oldin","Keyin"],correct:0},
            {q:"\"Belki\" - ?",a:["Mumkin","Albatta","Hech qachon","Balki"],correct:3},
            { q: "\"Herhalde\" nima degani?", a: ["Hech doim", "Ehtimol/Har holda", "Aniq", "To'g'ri"], correct: 1 },
            {q:"\"Tahminimce\" - ?",a:["Taxminimcha","Bilishimcha","Fikrimcha","Xohishimcha"],correct:0},
            { q: "\"Görünüşe göre...\" nima degani?", a: ["Ko'rinishgan ko'ra...", "Ko'ryapman", "Ko'rildi", "Ko'rinmaydi"], correct: 0 },
            { q: "\"Bana göre...\" - ?", a: ["Sizga ko'ra", "Menga ko'ra/fikrimcha", "Unga ko'ra", "Bizga ko'ra"], correct: 1 }
        ],
        7: [
            {q:"\"Olasılık Cümleleri\" (Ehtimollik)?",a:["Şüphe","İhtimal/Olasılık","Anlam","Kesinlik"],correct:1},
            { q: "\"-ebil/-abil\" (Imkoniyat) qo'shimchasi?", a: ["Kelajak", "Qila olish/Imkoniyat", "O'tgan", "Buyruq"], correct: 1 },
            {q:"\"Gelebilirim\" nima degani?",a:["Kelishim kerak","Kelaman","Kela olaman/Kelishim mumkin","Keldim"],correct:2},
            { q: "\"Yapabilirsin\" - ?", a: ["Qilishing kerak", "Qila olasan (qo'lingdan keladi)", "Qilding", "Qilyapsan"], correct: 1 },
            { q: "\"Okuyabilirler\" nima degani?", a: ["O'qidilar", "O'qiy oladilar/O'qishlari mumkin", "O'qishadi", "O'qiyaptilar"], correct: 1 },
            {q:"\"Bakabiliriz\" - ?",a:["Qardik","Qaraylik","Qaray olamiz/Qarashimiz mumkin","Qaraymiz"],correct:2},
            {q:"\"Anlayabilir misin?\" nima degani?",a:["Tushuna olasanmi?","Tushunasanmi?","Tushunyapsanmi?","Tushundingmi?"],correct:0},
            {q:"\"Gidemeyebilirim\" - ?",a:["Ketishim shart emas","Keta olmasligim mumkin","Ketmayapman","Ketolmayman"],correct:1},
            {q:"\"Yazamayabilirler\" nima degani?",a:["Yozolmasliklari mumkin","Yozishmadi","Yozishmaydi","Yozmaydilar"],correct:0},
            { q: "\"Olamaz\" nima degani?", a: ["Bo'lmaydi", "Bo'lishi mumkin emas", "Bo'lmadi", "Bo'lyapti"], correct: 1 }
        ],
        8: [
            {q:"\"Pasif Fiiller\" (Majhul nisbat)?",a:["İşteş","Dönüşlü","Etken","Edilgen"],correct:3},
            { q: "Majhul nisbat qo'shimchasi?", a: ["-l / -n", "-sh", "-dir", "-r"], correct: 0 },
            {q:"\"Yapıldı\" nima degani?",a:["Qilyapti","Qildi","Qilinadi","Qilindi"],correct:3},
            { q: "\"Görüldü\" - ?", a: ["Ko'rildi", "Ko'rdi", "Ko'ryapti", "Ko'rgan"], correct: 0 },
            { q: "\"Okundu\" nima degani?", a: ["O'qidilar", "O'qildi", "O'qiydi", "O'qilmoqda"], correct: 1 },
            { q: "\"Eski ev boyandı\" ma'nosi?", a: ["Eski uyni bo'yadi", "Eski uy bo'yaldi", "Uy yangi", "Bo'yayapmiz"], correct: 1 },
            {q:"\"Kapı kapandı\" - ?",a:["Eshik ochiq","Eshik yopildi","Eshikni yopdi","Eshik ochildi"],correct:1},
            { q: "\"Yemek yendi\" nima degani?", a: ["Ovqat yeyishdi", "Ovqat yeyildi", "Ovqat pishdi", "Ovqat yo'q"], correct: 1 },
            { q: "\"Mektup yazıldı\" - ?", a: ["Xat yozdi", "Xat yozildi", "Xat kelyapti", "Xat yo'q"], correct: 1 },
            {q:"\"Sınıf temizlendi\" nima degani?",a:["Sinfni tozaladi","Tozalayapmiz","Sinf kir","Sinf tozalandi"],correct:3}
        ],
        9: [
            { q: "\"İddia Cümleleri\"?", a: ["Savol", "Da'vo/Idda", "Tasdiq", "Inkor"], correct: 1 },
            { q: "\"Güya\" nima degani?", a: ["Aniq", "Go'yoki/Emishki", "Rostdan", "To'g'ri"], correct: 1 },
            { q: "\"Sözde\" - ?", a: ["O'zida", "Suhbatda", "Go'yoki/Nomiga/So'zda", "Gapda"], correct: 2 },
            { q: "\"Anlattığına göre...\" ma'nosi?", a: ["Gapirganim...", "Uning aytishiga ko'ra...", "Gapiradilar", "Bilmayman"], correct: 1 },
            { q: "\"Öyle olduğu söyleniyor\" nima degani?", a: ["Shunday bo'ldi", "Shunday bo'lganligi aytilmoqda", "Bilmim", "Rost"], correct: 1 },
            { q: "\"İddiaya göre...\" - ?", a: ["Taxminga ko'ra", "Da'voga ko'ra/Idda qilinishicha...", "Aniqki", "Bilamiz"], correct: 1 },
            { q: "\"Görünüşte...\" nima degani?", a: ["Ko'ryapman", "Ko'rinishidan.../Aslida esa", "Ko'rildi", "Ko'rmadim"], correct: 1 },
            {q:"\"Dediklerine göre...\" - ?",a:["Eshatildilar","Deyishmoqdaki...","Ular aytishicha...","Bildilar"],correct:2},
            { q: "\"Rivayete göre...\" nima degani?", a: ["Haqiqatda", "Rivoyat qilinishicha...", "Balki", "To'g'ri"], correct: 1 },
            { q: "\"Gelen bilgilere göre...\" - ?", a: ["Kelyapman", "Kelgan ma'lumotlarga ko'ra...", "Bilardim", "Bildiridilar"], correct: 1 }
        ],
        10: [
            {q:"\"Kesin Zaman\"?",a:["-iyor","-di","-dir / -dur","-ecek"],correct:2},
            { q: "\"Okumaktasınız\" nima degani?", a: ["O'qish kerak", "O'qiyapsizlar (rasmiy)", "O'qidingiz", "O'qiysiz"], correct: 1 },
            {q:"\"Yapmaktayım\" - ?",a:["Qildim","Qilyapman (rasmiy)","Qilganman","Qilaman"],correct:1},
            {q:"\"Gelmektedir\" nima degani?",a:["Kelyapti","Keldi","Kelgan","Keladi (doimiy/rasmiy)"],correct:3},
            { q: "\"Ders bitmiştir\" - ?", a: ["Dars tugadi (qat'iy)", "Dars boshlandi", "Dars bo'lyapti", "Dars yo'q"], correct: 0 },
            {q:"\"Giriş yasaktır\" nima degani?",a:["Kirish ochiq","Kirish taqiqlangan","Yopish","Kirish mumkin"],correct:1},
            { q: "\"Süre dolmuştur\" - ?", a: ["Vaqt bor", "Vaqt tugadi (to'ldi)", "Vaqt kelyapti", "Vaqt kam"], correct: 1 },
            { q: "\"Karar verilmiştir\" nima degani?", a: ["Qaror qabul qilindi (aniq/yakuniy)", "Qaror yo'q", "O'ylayapmiz", "Bilmadim"], correct: 0 },
            { q: "\"Sonuç açıklanacaktır\" - ?", a: ["Natija aytiladi (aniq)", "Natija yo'q", "Natija chiqdi", "Natija kutyapmiz"], correct: 0 },
            { q: "\"Lütfen sessiz olalım\" ma'nosi?", a: ["Gapiring", "Iltimos, jim bo'laylik", "Keling", "Ketaylik"], correct: 1 }
        ],
        11: [
            {q:"\"Eylemsiler II - Gelecek Zaman Sıfat-fiili\"?",a:["-ar","-acak/-ecek","-en","-miş"],correct:1},
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
            {q:"\"Eylemsiler III - Geçmiş Zaman Sıfat-fiili\"?",a:["-en","-ar","-miş / -dik","-ecek"],correct:2},
            { q: "\"Gelen yolcu\" nima degani?", a: ["Kelgan yo'lovchi", "Keladigan yo'lovchi", "Kelyapdi", "Ketgan yo'lovchi"], correct: 0 },
            { q: "\"Yaptığım hata\" - ?", a: ["Qiladigan hatoyim", "Qilgan hatoyim", "Hata yo'q", "Qildim"], correct: 1 },
            { q: "\"Bildiğin konu\" nima degani?", a: ["Biladigan mavzuing", "Senga ma'lum bo'lgan (bilgan) mavzuing", "Bilyapsan", "Biilmaysan"], correct: 1 },
            { q: "\"Gördüğüm manzara\" - ?", a: ["Ko'rib turgan manzaram", "Ko'rgan manzaram", "Ko'rmadim", "Ko'raman"], correct: 1 },
            {q:"\"Tanıdığım biri\" nima degani?",a:["Men taniydigan (tanish) odam","Tanimayman","Tanishishdi","Taniydigan odamim"],correct:0},
            { q: "\"Okuduğum kitap\" - ?", a: ["O'qiyotgan kitobim", "O'qigan kitobim", "O'qiyman", "O'qiding"], correct: 1 },
            { q: "\"Gittiği yer\" nima degani?", a: ["Ketadigan joyi", "U ketgan joy", "Joy yo'q", "Ketildi"], correct: 1 },
            { q: "\"Sevdiğim film\" - ?", a: ["Sevadigan filmim", "Menga yoqqan (sevgan) filmim", "Film yo'q", "Sevaman"], correct: 1 },
            { q: "\"Aldığım karar\" nima degani?", a: ["Oladigan qarorim", "Men qabul qilgan (olgan) qarorim", "Qaror yo'q", "Oldim"], correct: 1 }
        ],
        13: [
            { q: "\"Gelişmiş Sıfatlar\"?", a: ["Otlar", "Fe'ldan yasalgan sifatlar (Sifatdosh)", "Ravishlar", "Bog'lovchilar"], correct: 1 },
            {q:"\"Kırılmış bardak\" nima degani?",a:["Singan stakan","Sindi","Sinadigan stakan","Stakan butun"],correct:0},
            {q:"\"Pişmiş aş\" - ?",a:["Pishadigan ovqat","Ovqat xom","Pishdi","Pishgan ovqat"],correct:3},
            {q:"\"Unutulmuş anılar\" nima degani?",a:["Unutdik","Unutiladigan xotiralar","Xotirladik","Unutilgan xotiralar"],correct:3},
            { q: "\"Yırtılmış sayfa\" - ?", a: ["Yirtiladigan sahifa", "Yirtilgan sahifa", "Sahifa o'qildi", "Sindi"], correct: 1 },
            { q: "\"Bilinmiş gerçekler\" nima degani?", a: ["Ma'lum bo'lgan haqiqatlar", "Bilmadik", "Bilyapmiz", "Bilishadi"], correct: 0 },
            {q:"\"Kızarmış ekmek\" - ?",a:["Shirin non","Non qiziryapti","Qizitilgan non","Qizargan non"],correct:3},
            { q: "\"Haşlanmış yumurta\" nima degani?", a: ["Qovurilgan tuxum", "Qaynatilgan tuxum", "Xom tuxum", "Tuxum yo'q"], correct: 1 },
            {q:"\"Yenilenmiş oda\" - ?",a:["Yangi xona","Yangilangan xona","Xona yangilanadi","Xonani yopish"],correct:1},
            {q:"\"Bozulmuş saat\" nima degani?",a:["Tuzalgan soat","Sotildi","Buzilgan soat","Soat ishlaydi"],correct:2}
        ],
        14: [
            { q: "\"Metin Tahlili\" (Matn tahlili) nima uchun kerak?", a: ["Gapirish uchun", "Mazmunni chuqur tushunish uchun", "Yozish uchun", "Lug'at uchun"], correct: 1 },
            {q:"\"Tema\" nima degani?",a:["Ism","Mavzu/Tez","Vaqt","Joy"],correct:1},
            { q: "\"Ana fikir\" - ?", a: ["Asosiy g'oya", "Yomon fikr", "Yangi fikr", "Eski fikr"], correct: 0 },
            {q:"\"Karakter\" nima degani?",a:["Mavzu","Sahna","Libos","Qahramon/Xarakter"],correct:3},
            {q:"\"Olay örgüsü\" - ?",a:["Xulosa","Tushunish","Voqealar rivoji","Tushuntirish"],correct:2},
            {q:"\"Tasvir\" nima degani?",a:["Natija","Tasdiq","Inkor","Tasvirlash/Tavsiflash"],correct:3},
            {q:"\"Diyalog\" - ?",a:["Nutq","Monolog","Muloqot/Dialoq","Eshatish"],correct:2},
            { q: "\"Sonuç\" nima degani?", a: ["Boshlanish", "Natija/Yakun", "O'rtasi", "Mavzu"], correct: 1 },
            {q:"\"Giriş\" - ?",a:["Kirish/Muqaddima","Chiqish","Zamon","Mato"],correct:0},
            { q: "\"Gelişme\" nima degani?", a: ["To'xtab qolish", "Rivojlanish/Asosiy qism", "Natija", "Xulosa"], correct: 1 }
        ],
        15: [
            {q:"\"Toplum\" nima degani?",a:["Jamiyat","Davlat","Hukumat","Shaxs"],correct:0},
            { q: "\"Eğitim\" - ?", a: ["Ish", "Ta'lim", "Sayohat", "O'yin"], correct: 1 },
            {q:"\"Ekonomi\" nima degani?",a:["Iqtisodiyot","Tarix","Geografiya","Siyosat"],correct:0},
            { q: "\"Siyaset\" - ?", a: ["San'at", "Siyosat", "Sport", "Diniy"], correct: 1 },
            { q: "\"Sağlık sistemi\" nima degani?", a: ["Ta'lim tizimi", "Sog'liqni saqlash tizimi", "Bank tizimi", "Soliq tizimi"], correct: 1 },
            { q: "\"Teknoloji\" - ?", a: ["Qishloq xo'jaligi", "Texnologiya", "Xizmat ko'rsatish", "Savdo"], correct: 1 },
            { q: "\"Çevre\" nima degani?", a: ["Joy", "Atrof-muhit", "Oila", "Do'stlar"], correct: 1 },
            {q:"\"Hukuk\" - ?",a:["Til","Adabiyot","Tarix","Huquq"],correct:3},
            { q: "\"Sanat\" nima degani?", a: ["Sport", "San'at", "Fan", "Hunar"], correct: 1 },
            { q: "\"Medya\" - ?", a: ["Do'kon", "Ommaviy axborot vositalari (Mediya)", "Bog'", "Maktab"], correct: 1 }
        ]
    },
    'C1': {
        1: [
            { q: "\"İstek Kipi\" (1. Ko'plik)?", a: ["Bakalım", "Bakarız", "Baktık", "Bakacağız"], correct: 0 },
            {q:"\"Gidelim\" nima degani?",a:["Ketmoqchimiz","Ketdik","Ketamiz","Ketaylik"],correct:3},
            {q:"\"Yapalım\" - ?",a:["Qilganmiz","Qilyapmiz","Qildik","Qilaylik"],correct:3},
            { q: "\"Okuyalım mı?\" ma'nosi?", a: ["O'qidimmi?", "O'qiylikmi?", "O'qiymizmi?", "O'qidingmi?"], correct: 1 },
            {q:"\"Bilelim\" nima degani?",a:["Bildik","Bilamiz","Bilaylik","Bilyapmiz"],correct:2},
            {q:"\"Konuşalım\" - ?",a:["Gapiraylik","Gapirganmiz","Gapirdik","Gapiryapmiz"],correct:0},
            { q: "\"Görmeyelim\" nima degani?", a: ["Ko'rmadik", "Ko'rmaylik", "Ko'rmayapmiz", "Ko'rmaymiz"], correct: 1 },
            {q:"\"Gelmeyelim\" - ?",a:["Kelmayapmiz","Kelmaylik","Kelmaymiz","Kelmadik"],correct:1},
            {q:"\"Yenileyelim\" nima degani?",a:["Yangilaylik","Yangiladik","Yangilaymiz","Yangilanyapmiz"],correct:0},
            { q: "\"Başlayalım mı?\" ma'nosi?", a: ["Boshladikmi?", "Boshlaylikmi?", "Boshlaymizmi?", "Boshladingmi?"], correct: 1 }
        ],
        2: [
            {q:"\"İlgeçler Advanced\"?",a:["Nazaran / Kıyasla","Gibi","İçin","İle"],correct:0},
            { q: "\"Geçen yıla nazaran...\" nima degani?", a: ["O'tgan yil uchun", "O'tgan yilga nisbatan/qaraganda...", "O'tgan yildan beri", "Bu yil kabi"], correct: 1 },
            { q: "\"Buna kıyasla...\" - ?", a: ["Bunga ko'ra", "Bunga qiyoslaganda...", "Buni uchun", "Shu sababli"], correct: 1 },
            {q:"\"Şu ana değin...\" nima degani?",a:["Hozir","Oldin","Keyin","Hozirgacha/Shu vaqtgacha..."],correct:3},
            { q: "\"Aksi takdirde...\" - ?", a: ["Shunday bo'lsa", "Aks holda/Bo'lmasa...", "Chunki", "Lekin"], correct: 1 },
            {q:"\"Nitekim...\" nima degani?",a:["Balki","Darhaqiqat/Shuningdek (xuddi shunday)...","Chunki","Lekin"],correct:1},
            {q:"\"Meğer...\" - ?",a:["Lekin","Chunki","Mabodo/Eshitsamki/Aslida esa (kutilmagan holat)...","Va"],correct:2},
            {q:"\"Zira...\" nima degani?",a:["Chunki/Zotan...","Oldin","Lekin","Keyin"],correct:0},
            { q: "\"Mamafih...\" - ?", a: ["Chunki", "Shunga qaramay/Shunday bo'lsa-da...", "Keyin", "Balki"], correct: 1 },
            {q:"\"Eskiye oranla...\" nima degani?",a:["Yangi","Eski","Eskiga qaraganda/nisbatan...","Bildik"],correct:2}
        ],
        3: [
            { q: "\"Adlaşmış Sıfatlar\"?", a: ["Otga aylangan sifatlar", "Fe'llar", "Otlar", "Ravishlar"], correct: 0 },
            {q:"\"Yaşlılar\" nima degani?",a:["Odamlar","Qariyalar (yoshi kattalar)","Yoshlar","Yillar"],correct:1},
            {q:"\"Gençler\" - ?",a:["Qariyalar","Bolalar","Yoshlar","Ayollar"],correct:2},
            { q: "\"Çalışkanlar\" nima degani?", a: ["Tirishqoqlar", "Dangasalik", "Ishchilar", "O'quvchilar"], correct: 0 },
            {q:"\"Güzeller\" - ?",a:["Xunuklar","Chiroylilar","Yaxshilar","Yomonlar"],correct:1},
            { q: "\"Zenginler\" nima degani?", a: ["Kambag'allar", "Boylar", "Odamlar", "Do'stlar"], correct: 1 },
            { q: "\"Kambag'allar\" turkchada?", a: ["Zenginler", "Fakirler", "Kötüler", "Haydutlar"], correct: 1 },
            { q: "\"İyiler\" nima degani?", a: ["Yaxshilar", "Yomonlar", "Dushmanlar", "Do'stlar"], correct: 0 },
            { q: "\"Kötüler\" - ?", a: ["Yaxshilar", "Yomonlar", "O'g'rilar", "Asabiy"], correct: 1 },
            { q: "\"Doğrular\" nima degani?", a: ["Yolg'onlar", "Haqiqatlar/To'g'rilar", "Xatolar", "Savollar"], correct: 1 }
        ],
        4: [
            {q:"\"Fiilimsiler Advanced\"?",a:["-ış","Hech biri","-ma","-maklık / -ışma"],correct:3},
            { q: "\"Okuyuşun çok güzel\" nima degani?", a: ["O'qishing (uslubing) juda chiroyli", "O'qiding", "O'qiysan", "O'qiyapsan"], correct: 0 },
            {q:"\"Gülüşün beni mutlu etti\" - ?",a:["Kulganing...","Kulishadi","Kuldik","Kulishing/Kulging meni baxtli qildi"],correct:3},
            { q: "\"Bakış açısı\" nima degani?", a: ["Qarash uchun", "Dunyoqarash/Qarash nuqtayi nazari", "O'ylash", "Ko'rish"], correct: 1 },
            {q:"\"Konuşma tarzı\" - ?",a:["Gapirish uslubi/tarzi","Gapiramiz","Gapirdi","Gapirish uchun"],correct:0},
            {q:"\"Yürüyüşe çıktık\" nima degani?",a:["Keldik","Sayrga (yurishga) chiqdik","Ketdik","Yugurdik"],correct:1},
            { q: "\"Geliş saati\" - ?", null: "...", a: ["Ketish vaqti", "Kelish vaqti", "Vaqt yo'q", "Keldi"], correct: 1 },
            { q: "\"Bekleyiş ne zaman biter?\" ma'nosi?", a: ["Kutyapmiz", "Kutish (intizorlik) qachon tugaydi?", "Kutdik", "Kutamiz"], correct: 1 },
            {q:"\"Anlatış biçimi\" nima degani?",a:["Gapirgan","Gapamiz","Tushuntirish/Gapirish uslubi","Gapirdik"],correct:2},
            {q:"\"Yapış şekli\" - ?",a:["Qilingan","Qildik","Qilish uslubi/shakli","Qilamiz"],correct:2}
        ],
        5: [
            {q:"\"Birleşik Fiiller Advanced\"?",a:["Gelemem","Yapmak","Gidedur / Geleyazdı","Gelebilirmiş"],correct:2},
            {q:"\"Gidedur\" nima degani?",a:["Ketaver/Keta tur","Ketyapman","Ketish","Ketmadi"],correct:0},
            { q: "\"Baka kaldım\" - ?", a: ["Qarab qoldim", "Ko'rdim", "Ushladim", "Ketdum"], correct: 0 },
            { q: "\"Uyuyakaldı\" nima degani?", a: ["Uxlab qoldi", "Uxlamadi", "Uyg'ondi", "Uxlaydi"], correct: 0 },
            { q: "\"Süregelmek\" - ?", a: ["Dovom etib kelmoq", "To'xtamoq", "Boshlanmoq", "Tugamoq"], correct: 0 },
            {q:"\"Düşeyazdı\" nima degani?",a:["YurdI","Yiqildi","Yiqilmadi","Yiqilishiga oz qoldi/Yiqila yozdi"],correct:3},
            { q: "\"Öleyazdı\" - ?", a: ["O'ldi", "O'lishiga oz qoldi/O'la yozdi", "O'lmaydi", "Yashadi"], correct: 1 },
            {q:"\"Söyleyedur\" nima degani?",a:["Sukunat","Gapiraver/Aytib tur","Gapir","Aytmagin"],correct:1},
            { q: "\"Bileyazdı\" - ?", a: ["Bildi", "Bilishiga oz qoldi", "Bilmadi", "O'rgandi"], correct: 1 },
            {q:"\"Gidiverdi\" nima degani?",a:["Ketmadi","Keldi","Sekin ketdi","Tezda/Birdaniga ketib qoldi"],correct:3}
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
            {q:"\"Hipotez\" nima degani?",a:["Haqiqat","Qonun","Natija","Gipoteza/Taxmin"],correct:3},
            { q: "\"Veri\" - ?", a: ["Natija", "Ma'lumotlar/Bazoviy ma'lumot", "Tahlil", "Xulosa"], correct: 1 },
            { q: "\"Analiz\" nima degani?", a: ["To'plash", "Tahlil", "Sintez", "Inkor"], correct: 1 },
            { q: "\"Tez\" - ?", a: ["Ilmiy ish/Tezis", "Kitob", "Maqola", "Lug'at"], correct: 0 },
            {q:"\"Yöntem\" nima degani?",a:["Maqsad","Metod/Uslub/Yondashuv","Natija","Reja"],correct:1},
            {q:"\"Kaynak\" - ?",a:["Darslik","Manba","Kitob","Suv"],correct:1},
            { q: "\"Atıf\" nima degani?", a: ["Iqtibos/Havola", "Yozma", "O'qish", "Natija"], correct: 0 },
            {q:"\"Kuram\" - ?",a:["Reja","Nazariya","Vazifa","Amaliyot"],correct:1},
            { q: "\"Bulgu\" nima degani?", a: ["Xato", "Topilma/Natija", "Ma'lumot", "Savol"], correct: 1 }
        ],
        8: [
            {q:"\"Resmi Yazışmalar\" (Rasmiy yozishmalar)?",a:["Chat","Eslatma","Arziza/Rasmiy xat","Email"],correct:2},
            {q:"\"Dilekçe\" nima degani?",a:["Xat","Hujjat","Kitob","Ariza (rasmiy)"],correct:3},
            { q: "\"Arz ederim\" ma'nosi?", a: ["Xohlayman", "Taklif/Arz qilaman (pastdan yuqoriga)", "Bilaman", "Bo'ldi"], correct: 1 },
            { q: "\"Sayın...\" - ?", a: ["Salom", "Hurmatli/Muhtaram...", "Qadrdon", "Do'stim"], correct: 1 },
            { q: "\"Bilgilerinize sunulur\" nima degani?", a: ["Sizga ma'lum qiladi", "Ma'lumotingiz uchun taqdim etiladi", "Bilib oling", "Bo'ldi"], correct: 1 },
            { q: "\"Gereği rica olunur\" - ?", a: ["Iltimos qilaman", "Kerakli choralarni ko'rishingizni so'rayman", "Qiling", "Bo'lmadi"], correct: 1 },
            {q:"\"İmza\" nima degani?",a:["Sana","Ism","Muhr","Imzo"],correct:3},
            {q:"\"Tarih\" - ?",a:["Sana (va tarix)","Ism","Joy","Raqam"],correct:0},
            {q:"\"Konu\" nima degani?",a:["Xulosa","Matn","Mavzu","Salom"],correct:2},
            {q:"\"Ekler\" - ?",a:["Natija","Ilovalar","Imzo","Boshlanish"],correct:1}
        ],
        9: [
            { q: "\"İleri Düzey Kelime Hazinesi\"?", a: ["Sodda so'zlar", "Murakkab/Nodir so'zlar", "Faqat otlar", "Faqat fe'llar"], correct: 1 },
            {q:"\"Hassasiyet\" nima degani?",a:["Qattiqlik","Noziklik/Sezuvchanlik","Rang","Kuchsizlik"],correct:1},
            {q:"\"Kabiliyet\" - ?",a:["Bilim","Kuch","Vaqt","Qobiliyat"],correct:3},
            {q:"\"Özveri\" nima degani?",a:["Fidoyilik","Xudbinlik","Baxillik","Xasislik"],correct:0},
            { q: "\"İstikrar\" - ?", a: ["O'zgaruvchanlik", "Barqarorlik", "Tinchlik", "Urush"], correct: 1 },
            { q: "\"Mahrum\" nima degani?", a: ["Bor", "Mahrum/Yo'q", "Kamyob", "Ko'p"], correct: 1 },
            { q: "\"Münasip\" - ?", a: ["Noto'g'ri", "Munosib", "Yomon", "Eski"], correct: 1 },
            { q: "\"Sarsılmaz\" nima degani?", a: ["Bo'sh", "Sarsilmas/Chidamli", "Eski", "Yangi"], correct: 1 },
            {q:"\"Titizlik\" - ?",a:["Lanjlik/Ehtiyotkorlik (titizlik)","Sekinlik","Tezlik","Ehtiyotsizlik"],correct:0},
            { q: "\"Yegane\" nima degani?", a: ["Ko'p", "Yagona", "Boshqa", "Hammasi"], correct: 1 }
        ],
        10: [
            {q:"\"Mantık Hataları\" (Mantiqiy xatolar)?",a:["Imlo","Ohang","Grammatika","Mantiqiy xatoliklar"],correct:3},
            { q: "\"Çelişki\" nima degani?", a: ["Moslik", "Ziddiyat", "Haqiqat", "Yolg'on"], correct: 1 },
            {q:"\"Ön yargı\" - ?",a:["Oldindan xulosa (prejudis)","Bilim","Fikr","Tajriba"],correct:0},
            { q: "\"Abartı\" nima degani?", a: ["Kamaytirib ko'rsatish", "Mubolag'a/Bo'rttirish", "Rost", "Xato"], correct: 1 },
            { q: "\"Genelleme\" - ?", a: ["Xususiylashtirish", "Umumlashtirish", "Yolg'on", "To'g'ri"], correct: 1 },
            { q: "\"Sapma\" nima degani?", a: ["To'g'ri cho'zish", "Og'ish/Chetlanish", "Natija", "Reja"], correct: 1 },
            { q: "\"Yanlış kıyas\" - ?", a: ["To'g'ri qiyos", "Noto'g'ri qiyoslash", "Natija", "Bilim"], correct: 1 },
            { q: "\"Kısır döngü\" nima degani?", a: ["To'rtburchak", "Yopiq (besamar) aylana", "Uchburchak", "Chiziq"], correct: 1 },
            {q:"\"Tutarsızlık\" - ?",a:["Aniqlik","Barqarorlik","Rost","Muntazamsizlik/Nomuvofiqlik"],correct:3},
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
            {q:"\"Teşhis\" nima degani?",a:["Inkor","Savol","Insonlashtirish","Bilim"],correct:2},
            { q: "\"Kinaye\" - ?", a: ["To'g'ri so'z", "Kinoya/Piching", "Maqtov", "Xushomad"], correct: 1 },
            { q: "\"Tariz\" nima degani?", a: ["Tasdiq", "Piching/Kesatiq", "Rost", "Yaxshi so'z"], correct: 1 },
            { q: "\"İstiare\" - ?", a: ["Ochiq so'z", "Metafora/Isti'ora", "Savol", "Inkor"], correct: 1 },
            { q: "\"Tenasüp\" nima degani?", a: ["Muvofiqlik (so'zlar orasidagi)", "Ziddiyat", "Xato", "Hech biri"], correct: 0 }
        ],
        13: [
            {q:"\"Sosyolojik Terimler\"?",a:["Sotsiologik terminlar","Biologik","Tarixiy","Kimyoviy"],correct:0},
            { q: "\"Toplumsal yapı\" nima degani?", a: ["Bino", "Ijtimoiy tuzilma", "Shaxsiy hayot", "O'yin"], correct: 1 },
            { q: "\"Norm\" - ?", a: ["Xato", "Me'yor/Norma", "Qonun", "Fikr"], correct: 1 },
            {q:"\"Statü\" nima degani?",a:["Vaqt","Ism","Joy","Ijtimoiy mavqe/Status"],correct:3},
            { q: "\"Rol\" - ?", a: ["Vazifa/Rol", "O'yin", "Kiyim", "Natija"], correct: 0 },
            { q: "\"Etkileşim\" nima degani?", a: ["To'xtash", "O'zaro ta'sir/Interaksiya", "Ketish", "Kelish"], correct: 1 },
            {q:"\"Kültürel miras\" - ?",a:["Bilim","Eski buyum","Madaniy meros","Yangi madaniyat"],correct:2},
            {q:"\"Sınıflandırma\" nima degani?",a:["Xato","Inkor","Turkumlash/Tasniflash","Birlashtirish"],correct:2},
            { q: "\"Azınlık\" - ?", a: ["Ko'pchilik", "Ozchilik", "Hammasi", "Hech biri"], correct: 1 },
            { q: "\"Çoğunluk\" nima degani?", a: ["Ozchilik", "Ko'pchilik", "Yarmi", "Hech kim"], correct: 1 }
        ],
        14: [
            {q:"\"Ekonomik Analiz\"?",a:["Tarix","Iqtisodiy tahlil","Geografiya","Siyosat"],correct:1},
            { q: "\"Enflasyon\" nima degani?", a: ["Deflyatsiya", "Inflatsiya (narx navo oshishi)", "Krizis", "O'sish"], correct: 1 },
            { q: "\"Büyüme oranı\" - ?", a: ["Kamayish", "O'sish sur'ati", "Vaqt", "Joy"], correct: 1 },
            {q:"\"İhracat\" nima degani?",a:["Import","Eksport (tashqari)","Soliq","Savdo"],correct:1},
            {q:"\"İthalat\" - ?",a:["Import (ichkariga)","Pul","Eksport","Bozor"],correct:0},
            {q:"\"Bütçe\" nima degani?",a:["Byudjet","Xarajat","Soliq","Daromad"],correct:0},
            { q: "\"Yatırım\" - ?", a: ["Sotish", "Investitsiya/Sarmoya", "To'lash", "Sotib olish"], correct: 1 },
            { q: "\"Piyasa\" nima degani?", a: ["Do'kon", "Bozor/Market", "Bank", "Soliq"], correct: 1 },
            { q: "\"İstihdam\" - ?", a: ["Ishsizlik", "Bandlik (ish bilan ta'minlash)", "Oshirish", "Kamaytirish"], correct: 1 },
            {q:"\"Sermaye\" nima degani?",a:["Sarmoya/Kapital","Ishchi","Joy","Boshliq"],correct:0}
        ],
        15: [
            {q:"\"Globalleşme\" (Globallashuv) nima?",a:["Ajralish","Mahalliylashuv","Urush","Globallashuv"],correct:3},
            { q: "\"Dijitalleşme\" - ?", a: ["Raqamlashtirish", "Eski uslub", "Yozma", "Og'zaki"], correct: 0 },
            {q:"\"Sürdürülebilirlik\" nima degani?",a:["Sekin","Tezkor","Qisqa muddatli","Barqaror rivojlanish"],correct:3},
            {q:"\"İnovasyon\" - ?",a:["Innovatsiya/Yangilik kiritish","Yozuv","Haqiqat","Eski narsa"],correct:0},
            { q: "\"Yapay zeka\" nima degani?", a: ["Odam ongi", "Sun'iy intellekt", "Robot", "Kompyuter"], correct: 1 },
            { q: "\"İklim değişikliği\" - ?", a: ["Havo yaxshilanishi", "Iqlim o'zgarishi", "Suv balandligi", "Issiq"], correct: 1 },
            {q:"\"Demokrasi\" nima degani?",a:["Podshohlik","Siyosat","Diktatura","Demokratiya"],correct:3},
            {q:"\"İnsan hakları\" - ?",a:["Hayvon huquqlari","Inson huquqlari","Tosh huquqlari","Bolalar"],correct:1},
            {q:"\"Barış\" nima degani?",a:["Urush","Ochiqlik","Tinchlik","Kelishuv"],correct:2},
            { q: "\"Hoşgörü\" - ?", a: ["Baxillik", "Bag'rikenglik/Tolerantlik", "Xasislik", "Yomonlik"], correct: 1 }
        ]
    },
    'C2': {
        1: [
            {q:"\"Edebi Eleştiri\" (Adabiy tanqid)?",a:["Adabiy tanqid","Shoir","Kitobxon","Yozuvchi"],correct:0},
            { q: "\"Kurgu\" nima degani?", a: ["Haqiqat", "To'qima/Badiiy kurgu", "Tarix", "Xurmat"], correct: 1 },
            {q:"\"Üslup\" - ?",a:["Mazmun","Sarlavha","Mavzu","Uslub/Stil"],correct:3},
            { q: "\"İmge\" nima degani?", a: ["Haqiqat", "Obraz/Timsol/Tasvir", "So'z", "Harf"], correct: 1 },
            { q: "\"Anlam derinliği\" - ?", a: ["Sayozlik", "Ma'no chuqurligi", "Kenglik", "Balandlik"], correct: 1 },
            {q:"\"Betimleme\" nima degani?",a:["Tasdiq","Inkor","Tasvirlash/Tavsiflash","Tahlil"],correct:2},
            { q: "\"Özgünlük\" - ?", a: ["Nusxa", "Originallik/O'ziga xoslik", "Eskilik", "O'xshashlik"], correct: 1 },
            { q: "\"Sürrealizm\" nima degani?", a: ["Realizm", "Syurrealizm (g'ayritabiiy)", "Klassika", "Zamonaviy"], correct: 1 },
            {q:"\"Postmodernizm\" - ?",a:["Yangi","Eski","Qadimgi","Postmodernizm"],correct:3},
            {q:"\"Yalınlık\" nima degani?",a:["Soddalik/Rovonlik","Murakkablik","Qattiqlik","Noziklik"],correct:0}
        ],
        2: [
            {q:"\"Felsefi Terimler\" (Falsafiy terminlar)?",a:["Biologik","Matematik","Fizik","Falsafiy terminlar"],correct:3},
            { q: "\"Varlık\" nima degani?", a: ["Yo'qlik", "Borliq", "Hayot", "O'lim"], correct: 1 },
            {q:"\"Bilinç\" - ?",a:["Tushunish","Uquv","Ong/Shuur","Bilim"],correct:2},
            {q:"\"Ahlak\" nima degani?",a:["Odob","Aqlli","Axloq/Etika","Xulq"],correct:2},
            {q:"\"İrade\" - ?",a:["Majburiyat","Kuch","Iroda","Xohish"],correct:2},
            {q:"\"Mantık\" nima degani?",a:["Mantiq","Tasavvur","His","Xotira"],correct:0},
            {q:"\"Bilgi kuramı\" - ?",a:["Fizika","Gnoseologiya/Bilim nazariyasi","Sifat","Kimyo"],correct:1},
            {q:"\"Metafizik\" nima degani?",a:["Metafizika","Borliq","Fizika","Tabiat"],correct:0},
            {q:"\"Eytişim (Diyalektik)\" - ?",a:["Dialektika","Tasdiq","Muloqot","Inkor"],correct:0},
            { q: "\"Öz\" nima degani?", a: ["Sirt", "Mohiyat/Mag'iz", "Joy", "Vaqt"], correct: 1 }
        ],
        3: [
            {q:"\"Siyaset Bilimi Advanced\"?",a:["Davlat","Hukumat","Xalq","Siyosatshunoslik"],correct:3},
            {q:"\"Egemenlik\" nima degani?",a:["Suverenitet/Mustaqillik","Tinchlik","Boshqaruv","Qaramlik"],correct:0},
            {q:"\"Meşruiyet\" - ?",a:["Fikr","Legitimlik/Qonuniylik","Haqiqat","Qonunsizlik"],correct:1},
            {q:"\"İdeoloji\" nima degani?",a:["Din","Tarix","Siyosat","Mafkura/Ideologiya"],correct:3},
            {q:"\"Bürokrasi\" - ?",a:["Demokratiya","Idora","Xizmat","Byurokratiya (mansabdorlik)"],correct:3},
            {q:"\"Kamu oyu\" nima degani?",a:["Jamoatchilik fikri","Ovoz berish","Shaxsiy fikr","Saylov"],correct:0},
            {q:"\"Seçim sistemi\" - ?",a:["Bank tizimi","Saylov tizimi","Soliq","Qonun"],correct:1},
            {q:"\"Anayasa\" nima degani?",a:["Kitob","Qonun","Konstitutsiya","Hujjat"],correct:2},
            {q:"\"Yürütme\" - ?",a:["Ijro etuvchi (hokimiyat)","Sud","Boshqarish","Qonun chiqarish"],correct:0},
            { q: "\"Yasama\" nima degani?", a: ["Ijro", "Qonun chiqaruvchi", "Tekshirish", "O'zgartirish"], correct: 1 }
        ],
        4: [
            { q: "\"Osmanlıca ve Eski Türkçe Etkisi\"?", a: ["O'zbekcha", "Usmonli turkchasi va eski turkcha ta'siri", "Inglizcha", "Ruscha"], correct: 1 },
            {q:"\"Münhasır\" nima degani?",a:["Xos/Maxsus","Yangi","Eski","Hammasi"],correct:0},
            { q: "\"İstifade\" - ?", a: ["Zarar", "Foydalanish/Bahramand bo'lish", "Bilim", "Ketish"], correct: 1 },
            {q:"\"Müteşekkir\" nima degani?",a:["Xafa","Xursand","Minnatdor","Baxtli"],correct:2},
            {q:"\"Filvaki\" - ?",a:["Ehtimol","Chunki","Darhaqiqat/Haqiqatan","Balki"],correct:2},
            {q:"\"Maatteessüf\" nima degani?",a:["Lekin","Va","Afsuski/Ming afsuski","Xursandman"],correct:2},
            {q:"\"Muvaffaqiyet\" - ?",a:["Xato","Muvaffaqiyat","Natija","Omadsizlik"],correct:1},
            {q:"\"Kıymetli\" nima degani?",a:["Eski","Qiymatli/Qadrli","Qimmat","Arzon"],correct:1},
            { q: "\"Sual\" - ?", a: ["Javob", "Savol", "Gap", "So'z"], correct: 1 },
            { q: "\"Cevap\" (Eski tilda: Yanıt) nima degani?", a: ["Savol", "Javob", "Fikr", "Mavzu"], correct: 1 }
        ],
        5: [
            {q:"\"Hukuk Terminolojisi Advanced\"?",a:["Sud","Huquqiy terminologiya","Jinoyat","Advokat"],correct:1},
            { q: "\"Gıyabında\" nima degani?", a: ["Huzurida", "G'oyibona/Sirtidan", "Bilan", "Uchun"], correct: 1 },
            {q:"\"Yargıtay\" - ?",a:["Hukumat","Oliy sud","Tuman sudi","Kassatsiya sudi"],correct:3},
            { q: "\"Danıştay\" nima degani?", a: ["Hukumat", "Oliy ma'muriy sud", "Bank", "Soliq idorasi"], correct: 1 },
            {q:"\"Müvekkil\" - ?",a:["Prokuror","Advokat","Mijoz (advokat uchun/muvakkil)","Sudya"],correct:2},
            { q: "\"Dava\" nima degani?", a: ["Savol", "Sud ishi/Da'vo", "Jarima", "Qamoq"], correct: 1 },
            {q:"\"Savcı\" - ?",a:["Polis","Sudya","Guvoh","Prokuror"],correct:3},
            {q:"\"Tanık\" nima degani?",a:["Mijoz","Sudya","Jinoyatchi","Guvoh"],correct:3},
            {q:"\"Hüküm\" - ?",a:["Savol","Xulosa","Hukm/Qaror","Fikr"],correct:2},
            {q:"\"Tazminat\" nima degani?",a:["Xarajat","Pul","Tazminat/Zarar haqqi","Soliq"],correct:2}
        ],
        6: [
            {q:"\"Teknoloji va Gelecek Advanced\"?",a:["Telefon","Yuqori texnologiyalar va kelajak","Internet","Kompyuter"],correct:1},
            {q:"\"Otonom\" nima degani?",a:["Yangi","Boshqariladigan","Eski","Muxtor/Mustaqil (avtonom)"],correct:3},
            {q:"\"Algoritma\" - ?",a:["Reja","Savol","Algoritm","Natija"],correct:2},
            { q: "\"Veri madenciliği\" nima degani?", a: ["Ma'lumotlar tahlili", "Ma'lumotlar koni/qazib olish (data mining)", "Bank", "Soliq"], correct: 1 },
            { q: "\"Siber güvenlik\" - ?", a: ["Havo xavfsizligi", "Kiberxavfsizlik", "Yo'l xavfsizligi", "Dengiz"], correct: 1 },
            { q: "\"Büyük veri\" nima degani?", a: ["Kichik ma'lumot", "Katta ma'lumot (Big Data)", "Internet", "Bulutli"], correct: 1 },
            {q:"\"Bulut bilişim\" - ?",a:["Kompyuter","Bulutli hisoblash (Cloud computing)","Dastur","Havo"],correct:1},
            { q: "\"Kripto para\" nima degani?", a: ["Qog'oz pul", "Kriptovalyuta", "Oltin", "Kumush"], correct: 1 },
            { q: "\"Sanal gerçeklik\" - ?", a: ["Haqiqat", "Virtual borliq (VR)", "Kino", "O'yin"], correct: 1 },
            {q:"\"Blok zinciri\" nima degani?",a:["Bank","Blokcheyn","Soliq","Zanjir"],correct:1}
        ],
        7: [
            {q:"\"Edebi Akımlar\" (Adabiy oqimlar)?",a:["Adabiy oqimlar","Realizm","Romantizm","Klassizm"],correct:0},
            {q:"\"Klasisizm\" nima degani?",a:["Romantika","Klassitsizm","Realizm","Modern"],correct:1},
            {q:"\"Romantizm\" - ?",a:["Haqiqatchilik","Falsafa","Matematika","Romantizm"],correct:3},
            { q: "\"Realizm\" nima degani?", a: ["Xayolparastlik", "Realizm (voqe'lik)", "Ertak", "Badiiy"], correct: 1 },
            { q: "\"Natüralizm\" - ?", a: ["Tabiiylik (naturalizm)", "Sun'iylik", "Rang", "Ohang"], correct: 0 },
            {q:"\"Sembolizm\" nima degani?",a:["Rost","Simvolizm (ramziylik)","Aniqlik","Xato"],correct:1},
            { q: "\"Parsenizm\" - ?", a: ["She'riyatda realizm (parnasizm)", "Hikoya", "Roman", "Ertak"], correct: 0 },
            {q:"\"Egzistansiyalizm\" nima degani?",a:["Kapitalizm","Ekzistensializm (mavjudlik falsafasi)","Realizm","Sotsializm"],correct:1},
            { q: "\"Fütürizm\" - ?", a: ["O'tmish", "Futurizm (kelajakparastlik)", "Hozirgi", "Eski"], correct: 1 },
            { q: "\"Dadaizm\" nima degani?", a: ["An'ana", "Dadaizm (nihilizmga yaqin)", "Klassika", "Madaniyat"], correct: 1 }
        ],
        8: [
            { q: "\"Bilim dalları\" (Fan sohalari)?", a: ["Maktab", "Fan sohalari", "Darslik", "O'qituvchi"], correct: 1 },
            { q: "\"Antropoloji\" nima degani?", a: ["Yulduzlar fani", "Antropologiya (insonyatni o'rganish)", "Yer fani", "Suv"], correct: 1 },
            { q: "\"Arkeoloji\" - ?", a: ["O'simliklar", "Arxeologiya (qadimgi topilmalar)", "Hayvonlar", "Odamlar"], correct: 1 },
            {q:"\"Sosyoloji\" nima degani?",a:["Tarix","Siyosat","Sotsiologiya (jamiyatshunoslik)","Fizika"],correct:2},
            { q: "\"Psikoloji\" - ?", a: ["Miya", "Psixologiya (ruhiyatshunoslik)", "Tan", "Sog'liq"], correct: 1 },
            {q:"\"Astronomi\" nima degani?",a:["Yer","Biologiya","Kimyo","Astronomiya (falakiyot)"],correct:3},
            {q:"\"Biyoloji\" - ?",a:["Tosh","Havo","Hayot (Biologiya)","Nur"],correct:2},
            {q:"\"Jeoloji\" nima degani?",a:["Geologiya (yer haqida fan)","Kosmos","Ob-havo","Suv"],correct:0},
            { q: "\"Ekoloji\" - ?", a: ["San'at", "Ekologiya", "Musiqa", "Raqs"], correct: 1 },
            {q:"\"Felsefe\" nima degani?",a:["Falsafa","Mantiq","Huquq","Tarix"],correct:0}
        ],
        9: [
            { q: "\"Diploması ve Uluslararası İlişkiler\"?", a: ["Diplomatiya va xalqaro munosabatlar", "Siyosat", "Savdo", "O'yin"], correct: 0 },
            {q:"\"Büyükelçi\" nima degani?",a:["Prezident","Vazir","Konsul","Elchi"],correct:3},
            {q:"\"Konsolosluk\" - ?",a:["Elchixona","Hukumat","Konsullik","Soliq"],correct:2},
            {q:"\"Müzakere\" nima degani?",a:["Kelish","Ketish","Urush","Muzokara/Suhbat"],correct:3},
            { q: "\"Protokol\" - ?", a: ["Qoida", "Protokol/Tartib", "Dars", "O'yin"], correct: 1 },
            {q:"\"Antlaşma\" nima degani?",a:["Shartnoma/Bitim","Urush","Inkor","Savol"],correct:0},
            { q: "\"Zirve\" - ?", a: ["Pastlik", "Sammit/Tepadagi uchrashuv/Cho'qqi", "Voha", "Dengiz"], correct: 1 },
            {q:"\"Ambargo\" nima degani?",a:["Embargo/Taqiq","Ochiqlik","Savdo","Sayohat"],correct:0},
            { q: "\"Ateşe\" - ?", a: ["O't", "Attashe (diplomatik unvon)", "Suv", "Havo"], correct: 1 },
            {q:"\"Dış politika\" nima degani?",a:["Iqtisodiyot","Ichki siyosat","Bank","Tashqi siyosat"],correct:3}
        ],
        10: [
            { q: "\"Estetik ve Sanat Eleştirisi\"?", a: ["Estetika va san'at tanqidi", "Musiqa", "Raqs", "Oshpazlik"], correct: 0 },
            { q: "\"Zarafet\" nima degani?", a: ["Qo'pollik", "Zarofat/Nafislik", "Kuchsizlik", "Rang"], correct: 1 },
            { q: "\"İhtişam\" - ?", a: ["Soddalik", "Hashamat/Muhtashamlik", "Kambag'allik", "Eskilik"], correct: 1 },
            {q:"\"Yalınlık\" nima degani?",a:["Murakkablik","Soddalik","Noziklik","Qattiqlik"],correct:1},
            { q: "\"Özgünlük\" - ?", a: ["Nusxa", "Originallik", "Eskilik", "O'xshashlik"], correct: 1 },
            { q: "\"Uyum\" nima degani?", a: ["Nogohlik", "Uyg'unlik/Garmoniya", "Ziddiyat", "Xato"], correct: 1 },
            { q: "\"Doku\" - ?", a: ["Rang", "Faktura/To'qima", "Nur", "Soya"], correct: 1 },
            {q:"\"Perspektif\" nima degani?",a:["Natija","Reja","Istiqbol/Nuqtayi nazar (perspektiva)","Rang"],correct:2},
            {q:"\"Kompozisyon\" - ?",a:["Rang","Kompozitsiya/Tuzilish","Mato","Eskiz"],correct:1},
            {q:"\"Üslup\" nima degani?",a:["Mavzu","Oxirgi","Uslub/Stil","Boshida"],correct:2}
        ],
        11: [
            {q:"\"Tıbbi Terimler Advanced\"?",a:["Maktab","Siyosiy","Harbiy","Tibbiy terminlar"],correct:3},
            { q: "\"Teşhis\" nima degani?", a: ["Davolash", "Tashxis/Aniqlash", "Kasal", "Sog'lom"], correct: 1 },
            {q:"\"Tedavi\" - ?",a:["Kasalxona","Davolash","Dori","Tekshirish"],correct:1},
            { q: "\"Semptom\" nima degani?", a: ["Natija", "Simptom/Belgi", "Haqiqat", "Yolg'on"], correct: 1 },
            { q: "\"Kronik\" - ?", a: ["O'tkir", "Surunkali (hronik)", "Tez", "Sekin"], correct: 1 },
            {q:"\"Ameliyat\" nima degani?",a:["Dori","Jarrohlik amaliyoti","Tekshirish","Maslahat"],correct:1},
            {q:"\"Reçete\" - ?",a:["Retsept","Kitob","Xat","Hujjat"],correct:0},
            { q: "\"Bağışıklık\" nima degani?", a: ["Kasallik", "Immunitet", "Kuchsizlik", "Sog'liq"], correct: 1 },
            {q:"\"Enfeksiyon\" - ?",a:["Dori","Infeksiya","Tozalik","Davo"],correct:1},
            { q: "\"Yan etki\" nima degani?", a: ["Asosiy ta'sir", "Nojo'ya ta'sir", "Natija", "Foyda"], correct: 1 }
        ],
        12: [
            { q: "\"Psikolojik Analiz Advanced\"?", a: ["Miya", "Psixologik tahlil", "Xulq", "Sog'liq"], correct: 1 },
            {q:"\"Bilinçaltı\" nima degani?",a:["Ong usti","Ong osti (shuur osti)","Bilim","Fikr"],correct:1},
            { q: "\"Travma\" - ?", a: ["Xursandchilik", "Travma/Ruhiy jarohat", "Sog'liq", "O'yin"], correct: 1 },
            {q:"\"Kaygı\" nima degani?",a:["Kulgu","Baxt","Xotirjamlik","Xavotir/Anksiytet"],correct:3},
            {q:"\"Depresyon\" - ?",a:["Xursandlik","Sekin","Depressiya","Tez"],correct:2},
            { q: "\"Kişilik bozukluğu\" nima degani?", a: ["Sog'lom shaxs", "Shaxsiyat buzilishi", "Ism", "Joy"], correct: 1 },
            { q: "\"Rehabilitasyon\" - ?", a: ["Kasal bo'lish", "Reabilitatsiya/Tiklanish", "O'qish", "Ish"], correct: 1 },
            { q: "\"Motivasyon\" nima degani?", a: ["To'xtash", "Motivatsiya/G'ayrat", "Sekinlik", "Xato"], correct: 1 },
            { q: "\"Algı\" - ?", a: ["Bilmaslik", "Idrok/Qabul qilish (alg'i)", "Nazar", "Ko'rish"], correct: 1 },
            { q: "\"Empati\" nima degani?", a: ["Xudbinlik", "Empatiya (o'zgani his qilish)", "Xasislik", "Baxillik"], correct: 1 }
        ],
        13: [
            {q:"\"Edebi Akımlar II - Modernizm\"?",a:["Klassizm","Realizm","Modernizm","Eski tushuncha"],correct:2},
            {q:"\"Varoluşçuluk\" nima degani?",a:["Fizika","Ekzistensializm (mavjudlik)","Sotsializm","Kapitalizm"],correct:1},
            { q: "\"Nihilizm\" - ?", a: ["Tasdiq", "Nihilizm (yo'qlikni tan olish)", "Diniy", "Siyosiy"], correct: 1 },
            {q:"\"Realist yaklaşım\" nima degani?",a:["Realistik (hayotiy) yondashuv","Balki","Ertak","Xayoliy yondashuv"],correct:0},
            { q: "\"Soyut sanat\" - ?", a: ["Aniq san'at", "Abstrakt (mavhum) san'at", "Rasm", "Haykal"], correct: 1 },
            { q: "\"Absürt\" nima degani?", a: ["Mantiqli", "Absurd/Mantiqsiz", "To'g'ri", "Xato"], correct: 1 },
            { q: "\"Avangart\" - ?", a: ["Eski", "Avangard (oldingi saflarda)", "Keyingi", "O'rtacha"], correct: 1 },
            {q:"\"Klasik\" nima degani?",a:["Oddiy","Klassik","Boshqa","Yangi"],correct:1},
            {q:"\"Yenilikçi\" - ?",a:["Eski uslub","Yangilik tarafdori (innovator)","Sekin","Lanj"],correct:1},
            { q: "\"Geleneksel\" nima degani?", a: ["Yangi", "An'anaviy", "Tez", "Balki"], correct: 1 }
        ],
        14: [
            { q: "\"Çeviri Teknikleri\" (Tarjima texnikasi)?", a: ["O'qish", "Tarjima qilish texnikasi", "Yozish", "Gapirish"], correct: 1 },
            {q:"\"Edebi çeviri\" nima degani?",a:["Texnik tarjima","Ilmiy tarjima","Email","Badiiy tarjima"],correct:3},
            { q: "\"Teknik çeviri\" - ?", a: ["She'riy tarjima", "Texnik tarjima", "Sodda", "Og'zaki"], correct: 1 },
            {q:"\"Eşzamanlı çeviri\" nima degani?",a:["Sekin","Ketma-ket tarjima","Yozma","Sinxron (bir vaqtda) tarjima"],correct:3},
            { q: "\"Ardıl çeviri\" - ?", a: ["Sinxron", "Ketma-ket (konsikutiv) tarjima", "Tez", "O'yin"], correct: 1 },
            { q: "\"Yeminli tercüman\" nima degani?", a: ["Do'st", "Qasamyodli (litsenziyali) tarjimon", "Xato", "Yolg'on"], correct: 1 },
            { q: "\"Metin sadakati\" - ?", a: ["Matnga sodiqlik", "O'zgartirish", "Xato", "Inkor"], correct: 0 },
            { q: "\"Yerelleştirme\" nima degani?", a: ["Sotish", "Lokalizatsiya/Mahalliylashtirish", "Ketish", "Bo'lish"], correct: 1 },
            {q:"\"Kaynak dil\" - ?",a:["Eski til","Yangi til","Maqsad til","Manba tili (original)"],correct:3},
            {q:"\"Hedef dil\" nima degani?",a:["Boshqa til","Maqsadli til (tarjima qilinayotgan)","Inkor","Manba tili"],correct:1}
        ],
        15: [
            {q:"\"Akademik Makale Yazımı\"?",a:["Darslik","Email","Ilmiy maqola yozish","Suhbat"],correct:2},
            {q:"\"Özet\" nima degani?",a:["Hammasi","Annotatsiya/Xulosa/Annotatsiya","Boshlanish","Matn"],correct:1},
            {q:"\"Giriş\" - ?",a:["Vaqt","Sana","Chiqish","Kirish/Muqaddima"],correct:3},
            {q:"\"Metodoloji\" nima degani?",a:["Natija","Metodologiya (uslubiyot)","Reja","Mavzu"],correct:1},
            { q: "\"Bulgular\" - ?", a: ["Xatolar", "Topilmalar/Natijalar", "Ma'lumotlar", "Savollar"], correct: 1 },
            { q: "\"Tartışma\" nima degani?", a: ["Urush", "Muhokama (diskussiya)", "Sukunat", "Bo'ldi"], correct: 1 },
            { q: "\"Sonuç\" - ?", a: ["Boshlanish", "Natija/Xulosa", "O'rtasi", "Mavzu"], correct: 1 },
            {q:"\"Kaynakça\" nima degani?",a:["Ismlar","Foydalanilgan adabiyotlar","Kitoblar","Havolar"],correct:1},
            { q: "\"Alıntı\" - ?", a: ["Sotish", "Iqtibos/Sitata", "Gap", "So'z"], correct: 1 },
            { q: "\"Hakemli dergi\" nima degani?", a: ["Gazeta", "Taqriz qilinadigan (professional) jurnal", "O'yin", "Sport"], correct: 1 }
        ]
    }
};

// Old assignmentsData removed - using the correct version from assignments_data_fixed.js below



