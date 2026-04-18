const fs = require('fs');

const file = 'assignments_data_fixed.js';

let rawData = fs.readFileSync(file, 'utf8');
let jsonStr = rawData.replace('window.assignmentsData = ', '').trim();
if(jsonStr.endsWith(';')) jsonStr = jsonStr.slice(0, -1);
let db = JSON.parse(jsonStr);

const extraBanks = {
    'A1': {
        vocab: [
            {q: "Ona - ?", a: ["Anne", "Baba", "Kardeş", "Abla"], correct: 0},
            {q: "Ota - ?", a: ["Abey", "Anne", "Baba", "Dedem"], correct: 2},
            {q: "Kitob - ?", a: ["Kalem", "Defter", "Kitap", "Masa"], correct: 2},
            {q: "Suv - ?", a: ["Ekmek", "Su", "Çay", "Kahve"], correct: 1},
            {q: "Maktab - ?", a: ["Pazar", "Ev", "Okul", "Banka"], correct: 2},
            {q: "Do'st - ?", a: ["Düşman", "Öğretmen", "Öğrenci", "Arkadaş"], correct: 3},
            {q: "Bugun - ?", a: ["Dün", "Yarın", "Bugün", "Şimdi"], correct: 2},
            {q: "Ertaga - ?", a: ["Yarın", "Dün", "Hafta", "Ay"], correct: 0},
            {q: "Salom - ?", a: ["Güle güle", "Merhaba", "Nasılsın", "İyiyim"], correct: 1},
            {q: "Rahmat - ?", a: ["Lütfen", "Merhaba", "Teşekkürler", "Evet"], correct: 2}
        ],
        grammar: [
            {q: "Mening ismim... = Benim ...", a: ["yolum", "adım", "soyadım", "yaşım"], correct: 1},
            {q: "Sening isming nima? = Senin adın ...?", a: ["kim", "ne", "nasıl", "nerede"], correct: 1},
            {q: "Ben ... seviyorum (Seni)", a: ["seni", "bana", "onlar", "sana"], correct: 0},
            {q: "O ... gidiyor (uyga)", a: ["eve", "evde", "evden", "evi"], correct: 0},
            {q: "Men kasalman = Ben ...", a: ["hastayım", "hasta", "hastasın", "hastalar"], correct: 0},
            {q: "Bu ... ? (Bu qalam)", a: ["nasıl", "kim", "ne", "nerede"], correct: 2},
            {q: "Biz bozordamiz = Biz ...", a: ["pazardayız", "pazarda", "pazara", "pazardan"], correct: 0}
        ],
        listening: [
            {q: "Nima dedi?", audio: "Merhaba, benim adım Ali.", a: ["Salom, mening ismim Ali.", "Men Aliman", "Sening isming nima?", "Ali uyida."], correct: 0},
            {q: "Qayerga ketyapti?", audio: "Ben bugün okula gidiyorum.", a: ["Maktabga", "Bozorga", "Uyga", "Ishga"], correct: 0},
            {q: "Suhbat qachon?", audio: "Günaydın!", a: ["Ertalab", "Kechasi", "Peshindan keyin", "Kechqurun"], correct: 0},
            {q: "Hol-ahvol", audio: "Nasılsın? İyiyim, teşekkürler.", a: ["Qandaysan? Yaxshiman, rahmat.", "Nima qilyapsan? Hech narsa.", "Qayerdasan? Uydaman.", "Yaxshimisan? Yoq."], correct: 0}
        ]
    },
    'A2': {
        vocab: [
            {q: "Kasalxona - ?", a: ["Hastane", "Okul", "Banka", "Ev"], correct: 0},
            {q: "Poezd - ?", a: ["Uçak", "Araba", "Tren", "Gemi"], correct: 2},
            {q: "Tabiat - ?", a: ["Şehir", "Doğa", "Cadde", "Bina"], correct: 1},
            {q: "Chipta - ?", a: ["Bilet", "Para", "Cüzdan", "Çanta"], correct: 0},
            {q: "Istirohat bog'i - ?", a: ["Pazar", "Park", "Hastane", "Okul"], correct: 1},
            {q: "Ertalab - ?", a: ["Gece", "Akşam", "Sabah", "Öğle"], correct: 2},
            {q: "Uhlash - ?", a: ["Yemek", "İçmek", "Uyumak", "Okumak"], correct: 2}
        ],
        grammar: [
            {q: "Dün akşam ... (Uylandim)", a: ["uyudum", "uyudu", "uyuyorsun", "uyumak"], correct: 0},
            {q: "Biz geçen hafta ... (Keldik)", a: ["geldik", "geldi", "geldiler", "geliyorum"], correct: 0},
            {q: "Sen yarın gelecek ...?", a: ["mi", "misin", "musun", "müsün"], correct: 1},
            {q: "Kitabı ... (O'qidim)", a: ["okudum", "okudu", "okuduk", "okudunuz"], correct: 0},
            {q: "O çok hızlı koş... (yuguryapti)", a: ["uyor", "arlar", "uruz", "uyorum"], correct: 0}
        ],
        listening: [
            {q: "Gap nima haqida?", audio: "Yarın hava yağmurlu olacak.", a: ["Ertaga yomg'ir yog'adi", "Ertaga qor yog'adi", "Havo issiq bo'ladi", "Shamol esadi"], correct: 0},
            {q: "Savol:", audio: "Saat kaçta buluşacağız?", a: ["Soat nechida ko'rishamiz?", "Qayerda ko'rishamiz?", "Kech qolyapsanmi?", "Soat necha bo'ldi?"], correct: 0}
        ]
    },
    'B1': {
        vocab: [
            {q: "Darhol - ?", a: ["Sonra", "Hemen", "Bazen", "Hiç"], correct: 1},
            {q: "Sabab - ?", a: ["Neden / Sebep", "Sonuç", "Fikir", "Olay"], correct: 0},
            {q: "Ta'sir - ?", a: ["Umut", "Tepki", "Etki", "Çaba"], correct: 2},
            {q: "Tarmoq - ?", a: ["Kök", "Ağ", "Bilgi', 'Işık"], correct: 1},
            {q: "Umid qilmoq - ?", a: ["Korkmak", "Sevmek", "Ummak", "Kaçmak"], correct: 2}
        ],
        grammar: [
            {q: "Eğer çalışır... geçersin.", a: ["san", "sa", "sınız", "lar"], correct: 0},
            {q: "Seninle gelmek ... (xohlayman)", a: ["istiyorum", "istedi", "istedim", "istemem"], correct: 0},
            {q: "Film başla... önce mısır aldık.", a: ["dıktan", "madan", "dıkça", "yalı"], correct: 1},
            {q: "Bunu yap... (Sengadir/Seni deb) yaptım.", a: ["nın için", "senin için", "bunun için", "kimin için"], correct: 1}
        ],
        listening: [
            {q: "Nima dedi?", audio: "Sanırım bu projeyi yarına kadar bitirebileceğiz.", a: ["Loyihani ertagacha tugatamiz deb umid qilaman.", "Loyiha kechga qoladi.", "Yangi loyiha boshlaymiz.", "Loyiha yoqmadi."], correct: 0}
        ]
    },
    'B2': {
        vocab: [
            {q: "E'timodli - ?", a: ["Güvenilir", "Yalancı', 'Zeki', 'Tembel"], correct: 0},
            {q: "Munozara - ?", a: ["Tartışma", "Görüşme', 'Söyleşi', 'Konuşma"], correct: 0},
            {q: "Noyob - ?", a: ["Ender / Nadir", "Sık', 'Çok', 'Ucuz"], correct: 0}
        ],
        grammar: [
            {q: "Benimle gel... gelse, bir şey değişmezdi.", a: ["se de", "mek', 'meden', 'di"], correct: 0},
            {q: "Biz farkında ol... her şey bitmiş.", a: ["madan", "dıkça', 'maktan', 'saydı"], correct: 0}
        ],
        listening: [
            {q: "Vaziyat:", audio: "Durum ne yazık ki beklediğimizden daha karmaşık çıktı.", a: ["Holat kutganimizdan ancha murakkab.", "Holat juda oddiy.", "Hech qanday muammo yo'q.", "Kutganimizdek bo'ldi."], correct: 0}
        ]
    },
    'C1': {
        vocab: [
            {q: "Barkamol - ?", a: ["Eksik", "Yetkin / Mükemmel", "Boş", "Sığ"], correct: 1},
            {q: "Moslashuv - ?", a: ["Direniş", "Uyum / Adaptasyon", "Bölünme', 'Karşıtlık"], correct: 1}
        ],
        grammar: [
            {q: "Sorun şu ki, taraflar henüz uzlaş... (olishmadi).", a: ["abilmiş değiller", "mak istemezler', 'salar bile', 'tıklarında"], correct: 0}
        ],
        listening: [
            {q: "Maqsad nima?", audio: "Bu konudaki asıl niyetimiz, toplumsal farkındalığı bir üst seviyeye taşımaktır.", a: ["Asl niyat - ijtimoiy xabardorlikni yangi bosqichga olib chiqish.", "Odamlarni qo'rqitish.", "Poydevorni buzish.", "Moliyaviy foyda ko'rish."], correct: 0}
        ]
    },
    'C2': {
        vocab: [
            {q: "Abstrakt - ?", a: ["Somut", "Soyut", "Uzak', 'Gerçek"], correct: 1},
            {q: "Ziddiyat - ?", a: ["Çelişki", "Uyum", "Karar', 'Eminlik"], correct: 0}
        ],
        grammar: [
            {q: "Kavramsal bir perspektiften ele alın... bu olgu anlamsız kalır.", a: ["dığında", "madan", "dıkça', 'masına rağmen"], correct: 0}
        ]
    }
};

function getRandomSet(bank, originalQs, targetCount) {
    let combined = [];
    if(originalQs && originalQs.length) {
        if(originalQs[0].a && originalQs[0].a.length > 2) combined.push(...originalQs);
    }
    if(bank && bank.length) combined.push(...bank);
    
    let uniqueMap = {};
    combined.forEach(c => uniqueMap[c.q] = c);
    combined = Object.values(uniqueMap);
    
    if(combined.length === 0) return originalQs;
    
    combined.sort(() => 0.5 - Math.random());
    return combined.slice(0, targetCount);
}

Object.keys(db).forEach(level => {
    Object.keys(db[level]).forEach(lessonNum => {
        let assignments = db[level][lessonNum];
        if(!assignments) return;
        assignments.forEach(task => {
            let cat = 'vocab';
            if(task.type === 'grammar' || task.id.includes('_g')) cat = 'grammar';
            if(task.type === 'listening' || task.id.includes('_t')) cat = 'listening';
            
            let bank = null;
            if(extraBanks[level] && extraBanks[level][cat]) bank = extraBanks[level][cat];
            task.questions = getRandomSet(bank, task.questions, 8); 
        });
    });
});

let output = 'window.assignmentsData = ' + JSON.stringify(db, null, 4) + ';';
fs.writeFileSync(file, output, 'utf8');
console.log('DONE. Increased questions for all tasks.');
