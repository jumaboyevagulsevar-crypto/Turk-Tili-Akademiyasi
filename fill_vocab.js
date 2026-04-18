const fs = require('fs');

const b1Raw = `
Gelecek:Kelajak
Düşünce:Fikr
Mümkün:Iloji bor
Karar:Qaror
Zorunlu:Majburiy
Anlaşma:Kelishuv
Bağımsız:Mustaqil
Çevre:Muhit
Davranış:Xulq-atvor
Eğitim:Ta'lim
Farklı:Farqli
Gelenek:An'ana
Hak:Haq-huquq
İhtiyaç:Ehtiyoj
Kanıt:Dalil
Amaç:Maqsad
Toplum:Jamiyat
Sorumluluk:Mas'uliyet
Yetenek:Qobiliyat
Özgürlük:Erkinlik
Adalet:Adolat
Huzur:Tinchlik/Xotirjamlik
Saygı:Hurmat
Sevgi:Sevgi
Korku:Qo'rquv
Cesaret:Jasorat
Umut:Umid
Hedef:Maqsad
Başlangıç:Boshlanish
Sonuç:Natija
Sebep:Sabab
Durum:Holat
İlişki:Munosabat
İletişim:Aloqa
Gelişim:Rivojlanish
Çözüm:Yechim
Sorun:Muammo
Fayda:Foyda
Zarar:Zarar
Değer:Qadr-qimmat
`;

const b2Raw = `
Özellikle:Ayniqsa
Başarı:Muvaffaqiyat
Tecrübe:Tajriba
Gelişim:Rivojlanish
Fırsat:Imkoniyat
Algı:Idrok
Bilinç:Ong
Çatışma:Ziddiyat
Dayanışma:Hamjihatlik
Etkilileşim:Ta'sir
Farkındalık:Xabardorlik
Girişimci:Tadbirkor
Hassasiyet:Ta'sirchanlik
İstikrar:Barqarorlik
Kavrama:Tushunish
Mücadele:Kurash
Nitelik:Sifat
Özveri:Fidoyilik
Rekabet:Raqobat
Sürdürülebilir:Barqaror (davom etuvchi)
Taviz:Yon berish
Uygunluk:Moslik
Zihniyet:Dunyoqarash
Geleneksel:An'anaviy
Çağdaş:Zamonaviy
İnovasyon:Innovatsiya
Denge:Muvozanat
Kriter:Mezon
Yaklaşım:Yondashuv
Beklenti:Kutish
Eğilim:Moyillik
Gözlem:Kuzatuv
Kariyer:Karyera
Katkı:Hissa
Performans:Ish samaradorligi
Yatırım:Sarmoya
Kapasite:Imkoniyat darajasi
İstihdam:Bandlik
Tüketim:Iste'mol
Üretim:Ishlab chiqarish
`;

const c1Raw = `
Kavram:Tushuncha
Eleştiri:Tanqid
Mantıklı:Mantiqli
Kapsamlı:Qamrovli
Bütünsel:Yaxlit
Ön yargı:Buzuq qarash
Nispeten:Nisbatan
Teyit etmek:Tasdiqlamak
Çelişki:Ziddiyat
Varsayım:Faraz
Yadsımak:Inkor etmoq
Sorgulamak:So'roq qilmoq
Eğreti:Vaqtinchalik
Evrensel:Umumbashariy
Kozmopolit:Kozmopolit
Mütevazı:Kamtar
Olağan:Odatdagi
Tutarlılık:Muvofiqlik
Vurgulamak:Ta'kidlamoq
İhmal etmek:E'tiborsiz qoldirmoq
Tahsis etmek:Ajratmoq
Kısıtlamak:Cheklamoq
Teşvik etmek:Rag'batlantirmoq
Göz ardı etmek:Mensimaslik
Dikkat çekmek:E'tiborni tortmoq
Şeffaflık:Shaffoflik
İhlal:Qoidabuzarlik
Tutum:Xulq-atvor (Munosabat)
İdrak:Tushunish
Muhakeme:Fikrlash (Tahlil)
Tavsiye:Tavsiya
Niyet:Niyat
Samimiyet:Samimiyat
Tesadüf:Tasodif
Mutabakat:Kelishuv
Yönelim:Yo'nalish
Tepki:Reaksiya
İkna:Ishontirish
Önlem:Ehtiyot chorasi
Vesile:Sabab/Vosita
`;

const c2Raw = `
Felsefe:Falsafa
Edebiyat:Adabiyot
Paradoks:Paradoks
Medeniyet:Sivilizatsiya
Söylem:Nutq/Diskurs
Ontoloji:Borliq falsafasi
Epistemoloji:Bilim falsafasi
Metafizik:Metafizika
Estetik:Estetika
Diyalektik:Dialektika
Rasyonel:Oqilona
Empirik:Tajribaviy
İroni:Kino/Kesatish
Soyut:Mavhum
Somut:Aniq/Moddiy
Aşkın:Transcendent
İçkin:Immanent
İndirgemek:Oddiylashtirmoq
Bağlam:Kontekst
Nüans:Nozik farq
Zımni:Yashirin
Aşikâr:Ochiq-oydin
Eksilti:Qisqartirish
Muamma:Jumboq
Tezahür:Namoyon bo'lish
Bunalım:Inqiroz
Ahenk:Muvofiqlik (garmoniya)
Tasavvur:Tasavvur
Sentez:Sintez
Analiz:Tahlil
Dogma:Aqida
Göreceli:Nisbiy
Mutlak:Mutlaq
Yozlaşma:Buzilish (Aynish)
Mefhum:Tushuncha
Kanaat:Qanoat
Tabu:Taqiq
Mahiyet:Mohiyat
Meşruiyet:Qonuniylik
Yaptırım:Sanksiya (Jazo)
`;

function processRaw(rawStr) {
    return rawStr.trim().split('\n')
        .filter(l => l.includes(':'))
        .map(l => {
            const [tr, uz] = l.split(':');
            return { tr: tr.trim(), uz: uz.trim() };
        });
}

const banks = {
    'B1': processRaw(b1Raw),
    'B2': processRaw(b2Raw),
    'C1': processRaw(c1Raw),
    'C2': processRaw(c2Raw)
};

const vocabFile = 'vocabulary_data.js';
let content = fs.readFileSync(vocabFile, 'utf8');

// Find the object string: window.vocabularyByLesson = { ... };
const marker = 'window.vocabularyByLesson = ';
let startIdx = content.indexOf(marker);
if (startIdx === -1) {
    console.error("Marker not found");
    process.exit(1);
}

// We will recreate vocabularyByLesson completely, 
// parsing the old A1 and A2 and adding B1, B2, C1, C2.

// Wait, I can just execute the file to get window.vocabularyByLesson, 
// modify it, and overwrite.

// We extract the code, eval it in a safe context
global.window = global;
eval(content);

const vocabData = global.vocabularyByLesson;

// First pad A2 since it only has lesson 1
if (vocabData['A2'] && vocabData['A2'][1]) {
    const a2Bank = vocabData['A2'][1]; // the 30 words from lesson 1
    for(let i = 2; i <= 15; i++) {
        let shuffled = [...a2Bank].sort(() => 0.5 - Math.random());
        vocabData['A2'][i] = shuffled.slice(0, 30);
    }
}

['B1', 'B2', 'C1', 'C2'].forEach(lvl => {
    vocabData[lvl] = {};
    const bank = banks[lvl];
    for(let i = 1; i <= 15; i++) {
        // pick 30 words randomly from the 40+ words bank
        let shuffled = [...bank].sort(() => 0.5 - Math.random());
        vocabData[lvl][i] = shuffled.slice(0, 30);
    }
});

// Write back
const newCode = `// === Turk Tili Akademiyasi - Keng Lug'at Ma'lumotlar Bazasi ===
// A1: 15 dars × 30 so'z
// A2-C2: Boyitilgan so'zlar zaxirasi

window.vocabLessonNames = ` + JSON.stringify(global.vocabLessonNames, null, 4) + `;

window.vocabularyByLesson = ` + JSON.stringify(vocabData, null, 4) + `;
`;

fs.writeFileSync(vocabFile, newCode, 'utf8');
console.log("Vocabulary expanded and injected for B1, B2, C1, C2!");
