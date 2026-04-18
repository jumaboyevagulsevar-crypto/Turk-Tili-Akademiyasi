const fs = require('fs');
const path = require('path');

const file = path.join(__dirname, 'assignments_data_fixed.js');

// Helper to shuffle choices while keeping track of the correct answer
function randomizeQuestions(bankArray, count) {
    // Shuffle the bank array and pick the top `count` logic
    let shuffled = [...bankArray].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count).map(q => {
        return {
            q: q.q,
            audio: q.audio || undefined,
            a: q.a,
            correct: q.correct
        };
    });
}

const levelsData = {
    "A1": {
        vocab: [
            {q: "Ona - ?", a: ["Anne", "Baba", "Kardeş", "Abla"], correct: 0},
            {q: "Ota - ?", a: ["Abey", "Anne", "Baba", "Dedem"], correct: 2},
            {q: "Kitob - ?", a: ["Kalem", "Defter", "Kitap", "Masa"], correct: 2},
            {q: "Suv - ?", a: ["Ekmek", "Su", "Çay", "Kahve"], correct: 1},
            {q: "Maktab - ?", a: ["Pazar", "Ev", "Okul", "Banka"], correct: 2},
            {q: "Do'st - ?", a: ["Düşman", "Öğretmen", "Öğrenci", "Arkadaş"], correct: 3},
            {q: "Bugun - ?", a: ["Dün", "Yarın", "Bugün", "Şimdi"], correct: 2},
            {q: "Ertaga - ?", a: ["Yarın", "Dün", "Hafta", "Ay"], correct: 0}
        ],
        grammar: [
            {q: "Mening ismim... = Benim ...", a: ["yolum", "adım", "soyadım", "yaşım"], correct: 1},
            {q: "Sening isming nima? = Senin adın ...?", a: ["kim", "ne", "nasıl", "nerede"], correct: 1},
            {q: "Ben ... seviyorum (Seni)", a: ["seni", "bana", "onlar", "sana"], correct: 0},
            {q: "O ... gidiyor (uyga)", a: ["eve", "evde", "evden", "evi"], correct: 0},
            {q: "Men kasalman = Ben ...", a: ["hastayım", "hasta", "hastasın", "hastalar"], correct: 0},
            {q: "Bu ... ? (Bu qalam)", a: ["nasıl", "kim", "ne", "nerede"], correct: 2}
        ],
        listening: [
            {q: "Nima dedi?", audio: "Merhaba, benim adım Ali.", a: ["Salom, mening ismim Ali.", "Men Aliman", "Sening isming nima?", "Ali uyida."], correct: 0},
            {q: "Qayerga ketyapti?", audio: "Ben bugün okula gidiyorum.", a: ["Maktabga", "Bozorga", "Uyga", "Ishga"], correct: 0},
            {q: "Suhbat qachon?", audio: "Günaydın!", a: ["Ertalab", "Kechasi", "Peshindan keyin", "Kechqurun"], correct: 0}
        ]
    },
    "A2": {
        vocab: [
            { q: "Do'kon - ?", a: ["Mağaza", "Okul", "Ev", "Hastane"], correct: 0 },
            { q: "Non - ?", a: ["Su", "Ekmek", "Et", "Süt"], correct: 1 },
            { q: "Poyabzal - ?", a: ["Şapka", "Gözlük", "Ayakkabı", "Çanta"], correct: 2 },
            { q: "Kasalxona - ?", a: ["Okul", "Hastane", "Market", "Müze"], correct: 1 },
            { q: "Taom - ?", a: ["İçecek", "Tatlı", "Yemek", "Meyve"], correct: 2 },
            { q: "Vilka - ?", a: ["Kaşık", "Çatal", "Bıçak", "Tabak"], correct: 1 },
            { q: "Poezd - ?", a: ["Uçak", "Otobüs", "Tren", "Gemi"], correct: 2 },
            { q: "Tabiat - ?", a: ["Doğa", "Şehir", "Sokak", "Bina"], correct: 0 }
        ],
        grammar: [
            { q: "Ben dün sinemaya ...", a: ["gittim", "gideceğim", "gidiyorum", "gitsem"], correct: 0 },
            { q: "Sen yarın ... ?", a: ["geldin mi", "gelecek misin", "geliyor musun", "gelir misin"], correct: 1 },
            { q: "O bu akşam yemek...", a: ["yapsın", "yapan", "yapıyor", "yiyen"], correct: 2 },
            { q: "Biz tatilde Antalya'ya ...", a: ["gittik", "gittiler", "gittiniz", "gittin"], correct: 0 },
            { q: "Masanın üstünde kalem ...", a: ["var", "varmış", "varmı", "vardı"], correct: 0 },
            { q: "Ben seni çok iyi ...", a: ["anlıyorsun", "anlamak", "anlıyorum", "anlıyor"], correct: 2 },
            { q: "Bu kitap senin ... ?", a: ["misin", "mi", "musun", "müsün"], correct: 1 }
        ],
        listening: [
            { q: "Eshitilgan gapning ma'nosi nima?", audio: "Yarın hava çok güzel olacak. Pikniğe gidelim mi?", a: ["Ertaga havo chiroyli bo'ladi, piknikka boramizmi?", "Ertaga havo issiq bo'ladi", "Bugun piknikka boramiz", "Ertaga yomg'ir yog'adi"], correct: 0 },
            { q: "Nima so'raldi?", audio: "Affedersiniz, en yakın eczane nerede?", a: ["Kechirasiz, eng yaqin doriqxona qayerda?", "Kechirasiz, kasalxona qayerda?", "Kechirasiz, do'kon uzoqmi?", "Kechirasiz, bekat qayerda?"], correct: 0 },
            { q: "Gap nima haqida?", audio: "Bugün hava durumunda kar yağışlı olacağı söylendi.", a: ["Bugun qor yog'ishi haqida", "Bugun issiq bo'lishi haqida", "Shamollar haqida", "Yomg'ir haqida"], correct: 0 },
            { q: "Kim gapirmoqda?", audio: "Merhaba, bana bir porsiyon kebap ve ayran lütfen.", a: ["Mijoz restoranda", "O'qituvchi maktabda", "Shifokor kasalxonada", "Xaridor bozorda"], correct: 0 }
        ]
    },
    "B1": {
        vocab: [
            { q: "Sayohat - ?", a: ["Yolculuk", "İş", "Tatil", "Spor"], correct: 0 },
            { q: "Muammo - ?", a: ["Sorun / Problem", "Çözüm", "Cevap", "Soru"], correct: 0 },
            { q: "Muvaffaqiyat - ?", a: ["Deneyim", "Başarı", "Zorluk", "Ödül"], correct: 1 },
            { q: "Kashfiyot - ?", a: ["Keşif", "İcat", "Bulmak", "Mucit"], correct: 0 },
            { q: "Istiqbol - ?", a: ["Geçmiş", "Şimdi", "Gelecek", "Dün"], correct: 2 },
            { q: "E'tibor bermoq - ?", a: ["Görmezden gelmek", "Dikkat etmek", "Bırakmak", "Tutmak"], correct: 1 }
        ],
        grammar: [
            { q: "Sınavı kazanmak ... çok çalışmalısın.", a: ["için", "gibi", "kadar", "göre"], correct: 0 },
            { q: "Eğer yağmur ... evde kalırız.", a: ["yağarsa", "yağardı", "yağıyor", "yağmış"], correct: 0 },
            { q: "Daha önce hiç bu filmi ... .", a: ["izlemiştim", "izlememiştim", "izliyorum", "izlerim"], correct: 1 },
            { q: "Oraya git... istemiyorum.", a: ["meyi", "mek", "mesini", "dikten"], correct: 0 },
            { q: "Kitabı okuduktan ... sana veririm.", a: ["önce", "sonra", "beri", "gibi"], correct: 1 },
            { q: "Benimle gelir ... memnun olurum.", a: ["sen", "se", "siniz", "dikçe"], correct: 0 }
        ],
        listening: [
            { q: "Suhbat mazmuni:", audio: "İstanbul trafiğinden gerçekten çok yoruldum. Belki de küçük bir şehre taşınmalıyım.", a: ["Katta shahar tirbandligidan charchash", "Kichik shaharni yomon ko'rish", "Istanbulni maqul ko'rish", "Tezroq ko'chib o'tish quvonchi"], correct: 0 },
            { q: "Xulosa qiling:", audio: "Teknoloji hayatımızı kolaylaştırıyor ancak sosyal ilişkilerimizi zayıflatıyor.", a: ["Texnologiya foydali, lekin ijtimoiy munosabatlarga zarar etadi.", "Texnologiya faqat ziyon keltiradi.", "Ijtimoiy aloqalar muhim emas.", "Hamma narsa onlayn bo'lishi kerak."], correct: 0 },
            { q: "Uchrashuv qachonga qoldirildi?", audio: "Toplantıyı çarşamba gününe ertelesek olur mu? Bugün çok yoğunum.", a: ["Chorshanba kuniga.", "Payshanbaga.", "Bugun kechqurunga.", "Seshanba kuniga."], correct: 0 }
        ]
    },
    "B2": {
        vocab: [
            { q: "Rivojlanish - ?", a: ["Gerileme", "Düşüş", "Gelişim", "Bölünme"], correct: 2 },
            { q: "Atrof-muhit - ?", a: ["Çevre", "Dünya", "Köy", "Orman"], correct: 0 },
            { q: "Barqarorlik - ?", a: ["İstikrar", "Dengesizlik", "Sorun", "Kaygı"], correct: 0 },
            { q: "Mutaxassis - ?", a: ["Öğrenci", "Uzman", "Çırak", "Yabancı"], correct: 1 },
            { q: "Ta'sirko'rlik - ?", a: ["Etkileşim", "Tepki", "Durum", "Baskı"], correct: 0 }
        ],
        grammar: [
            { q: "Ne kadar uğraş... uğraşsın, başaramadı.", a: ["sa", "tı", "yorsa", "mıştı"], correct: 0 },
            { q: "Oraya gitmektense, evde kalmayı ... .", a: ["tercih ederim", "istemedim", "bekliyorum", "gidiyorum"], correct: 0 },
            { q: "Gelecek ay bu projeyi ... olacağız.", a: ["bitirecek", "bitirmiş", "bitiriyor", "bitirir"], correct: 1 },
            { q: "Gösterdiğin çaba takdire ... .", a: ["şayandır", "olmaz", "gerek yok", "istemiyorum"], correct: 0 },
            { q: "Karar veril... kadar toplantı bitmeyecek.", a: ["ene", "ene", "di", "meden"], correct: 0 }
        ],
        listening: [
            { q: "Asosiy fikr nima?", audio: "Küresel ısınma sadece kurgusal bir teori değil, somut verilerle ispatlanmış küresel bir krizdir.", a: ["Global isish haqiqiy va isbotlangan inqiroz.", "Global isish shunchaki afsona.", "Havo harorati unchalik o'zgarmadi.", "Olimlar iqlimni noto'g'ri o'rganmoqda."], correct: 0 },
            { q: "Nima haqida bahs ketyapti?", audio: "Uzaktan çalışma modeli verimliliği artırsa da, takım içi iletişimi sekteye uğratabilir.", a: ["Masofaviy ishning avantaj va kamchiliklari", "Ofis ishlarining samarasi", "Jamoa qanday tuzilishi haqida", "Ish haqining kamligi"], correct: 0 },
            { q: "Xodim nima so'rayapti?", audio: "Performans değerlendirmesinin ardından maaş iyileştirmesi konusu ne zaman netleşir?", a: ["Oylik oshishining qachon aniq bo'lishini", "Qachon ishdan ketishini", "Boshqa bo'limga o'tishni", "Ish sharoitlarining qandayligini"], correct: 0 }
        ]
    },
    "C1": {
         vocab: [
            { q: "Taxmin qilmoq - ?", a: ["Kestirmek / Varsaymak", "Söylemek", "Bitirmek", "Başlamak"], correct: 0 },
            { q: "Murosaga kelmoq - ?", a: ["Kavga etmek", "Uzlaşmak", "Tartışmak", "Kaçmak"], correct: 1 },
            { q: "Idrok etish - ?", a: ["Algılamak", "Bilmek", "Hissetmek", "Görmek"], correct: 0 },
            { q: "Barkamol - ?", a: ["Yetersiz", "Mükemmel / Yetkin", "Eksik", "Kötü"], correct: 1 },
            { q: "Shubhasiz - ?", a: ["Belki", "Büyük ihtimalle", "Kuşkusuz", "Umarım"], correct: 2 }
        ],
        grammar: [
            { q: "Olayı tam olarak anla-...-sızın yargıya varmamak gerekir.", a: ["mak", "dık", "ma", "mış"], correct: 2 },
            { q: "Fikrini kabul etmem ... da, saygı duyuyorum.", a: ["gerçek", "söz konusu", "gerekse", "ile beraber"], correct: 2 },
            { q: "Bütün deliller failin o olduğu... işaret ediyor.", a: ["nu", "nun", "na", "nda"], correct: 2 },
            { q: "Bana kal... bu strateji sürdürülebilir değil.", a: ["ırsa", "dıysa", "mıyorsa", "dıkça"], correct: 0 }
        ],
        listening: [
            { q: "Akademik munozaraning maqsadi:", audio: "Son makalenizde ileri sürdüğünüz hipotez, klasik sosyolojik yaklaşımlarla köklü bir çelişki barındırıyor.", a: ["Yozilgan maqolaning an'anaviy nazariyalarga zid ekanligi.", "Sotsiologiyani chuqur o'rganish muhimligi.", "Yangi maqola yozish kerakligi.", "Maqolaning foydasiz ekanligi."], correct: 0 },
            { q: "Spikerning iqtisod haqidagi gapi:", audio: "Enflasyonla mücadelede para politikasının sıkılaştırılması kaçınılmaz bir zorunluluktur.", a: ["Inflyatsiyani yengish uchun pul siyosatini qat'iylashtirish shart.", "Inflyatsiya unchalik katta muammo emas.", "Siyosatni yumshatish iqtisodni qutqaradi.", "Soliqlar oshmasligi kerak."], correct: 0 }
        ]
    },
    "C2": {
         vocab: [
            { q: "Ziddiyatli fikr - ?", a: ["Müspet düşünce", "Paradoks", "Ahenk", "Uyum"], correct: 1 },
            { q: "Oqilona (Falsafiy) - ?", a: ["Rasyonel", "Duygusal", "Rastgele", "Eşsiz"], correct: 0 },
            { q: "Abstrakt / Mavhum - ?", a: ["Somut", "Soyut", "Fiziksel", "Gerçek"], correct: 1 },
            { q: "Betaraf - ?", a: ["Taraflı", "Objektif / Yansız", "Haksız", "Yabancı"], correct: 1 }
        ],
        grammar: [
            { q: "Mevcut bulgular işığında, bu varsayımın çöktüğü ... .", a: ["anlaşılmaktadır", "anlaşılmıştı", "görülecek", "sayılır"], correct: 0 },
            { q: "Toplumsal dinamikleri göz ardı et... suretiyle kalıcı bir çözüm üretilemez.", a: ["mek", "meden", "meye", "menin"], correct: 0 },
            { q: "Ne var ki, dönemin şartları ele alın... asıl nedenler su yüzüne çıkacaktır.", a: ["ırsa", "dığında", "mıyorsa", "madan"], correct: 1 }
        ],
        listening: [
            { q: "Fikrning mag'zi nimada?", audio: "Modernite, bireyin ontolojik güvenliğini sarsarak onu kronik bir varoluşsal kaygının kucağına itmiştir.", a: ["Zamonaviylik inson xotirjamligiga tahdid qilib, ekzistensial tashvish uyg'otadi.", "Insonning zamonaviy hayotdan foyda olishi.", "Zamonaviy texnologiyalar hayotimizni saqlab qoladi.", "Qonunga rioya qilishning ahamiyati."], correct: 0 },
            { q: "Xulosa:", audio: "Sanat eseri, otonom bir gerçeklik düzlemi yaratarak estetik yargının sınırlarını yeniden çizer.", a: ["San'at o'zining avtonom realligini yaratib estetika chegaralarini kengaytiradi.", "San'at go'zallikni inkor etadi.", "San'at faqat haqiqatni nusxalaydi.", "San'at estetikani buzib yuboradi."], correct: 0 }
        ]
    }
};

try {
    const rawData = fs.readFileSync(file, 'utf8');
    
    // Extricate the JSON part: window.assignmentsData = { ... };
    let jsonStr = rawData.replace('window.assignmentsData = ', '').trim();
    if(jsonStr.endsWith(';')) {
        jsonStr = jsonStr.slice(0, -1);
    }
    
    let db = JSON.parse(jsonStr);

    ["A1", "A2", "B1", "B2", "C1", "C2"].forEach(level => {
        if(db[level]) {
            // Loop through lessons 1 to 15
            Object.keys(db[level]).forEach(lessonNum => {
                let assignments = db[level][lessonNum];
                if(assignments && assignments.length) {
                    assignments.forEach(assignment => {
                        let type = assignment.type; // "vocab", "grammar", "listening"
                        // Determine default category fallback if not matched
                        if (assignment.id.includes('_g')) type = "grammar";
                        else if (assignment.id.includes('_v')) type = "vocab";
                        else if (assignment.id.includes('_t')) type = "listening";
                        
                        let questionsToAssign = [];
                        if (levelsData[level][type] && levelsData[level][type].length > 0) {
                            // select up to 8
                            questionsToAssign = randomizeQuestions(levelsData[level][type], 8);
                        } else {
                            questionsToAssign = randomizeQuestions(levelsData["A2"]["vocab"], 8); // absolute fallback
                        }
                        
                        // overwrite existing placeholder questions
                        assignment.questions = questionsToAssign;
                    });
                }
            });
        }
    });

    // Write back
    const finalContent = 'window.assignmentsData = ' + JSON.stringify(db, null, 4) + ';';
    fs.writeFileSync(file, finalContent, 'utf8');
    console.log("SUCCESS! All A1-C2 levels have been populated with realistic Turkish questions.");
} catch (e) {
    console.error("ERROR modifying file:", e);
}
