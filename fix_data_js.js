const fs = require('fs');
const buf = fs.readFileSync('data.js');
// Find the first occurrence of "window.assignmentsData = [" from the previous edit or just the one I just added.
// Actually, I'll just look for those strange null bytes 0x00.
console.log('Buffer length:', buf.length);
let firstNull = buf.indexOf(0x00);
console.log('First null byte at:', firstNull);

if (firstNull !== -1) {
    // The file is likely UTF-16 from that point.
    // Let's take the part before the first null byte and manually append the correct assignmentsData.
    let cleanPart = buf.slice(0, firstNull).toString('utf8');
    
    // Search for the start of the assignments block to remove the OLD flat array part if it exists
    // actually, let's just find the last occurrence of "window.assignmentsData =" in the clean part
    let lastAss = cleanPart.lastIndexOf('window.assignmentsData =');
    if (lastAss !== -1) {
        cleanPart = cleanPart.slice(0, lastAss);
    }
    
    const newAss = `
window.assignmentsData = {
    'A1': {
        1: [
            { id: "a1_l1_v", type: "vocab", category: "vocab", title: "Salomlashuv", desc: "Asosiy so'zlar.", xp: 30, time: "5 min", icon: "fa-spell-check", questions: [{ q: "Rahmat - ?", a: ["Merhaba", "Teşekkür ederim", "Nasılsın", "Selam"], correct: 1 }] },
            { id: "a1_l1_g", type: "grammar", category: "grammar", title: "Alfabe", desc: "Harflar.", xp: 30, time: "5 min", icon: "fa-pen-nib", questions: [{ q: "Nechta unli bor?", a: ["6", "8", "10", "12"], correct: 1 }] },
            { id: "a1_l1_t", type: "listening", category: "tinglash", title: "Tinglash: Salom", desc: "Eshiting.", xp: 50, time: "5 min", icon: "fa-headphones", questions: [{ q: "Qaysi so'z?", audio: "Merhaba", a: ["Merhaba", "Hoşçakal", "Evet"], correct: 0 }] }
        ],
        2: [
            { id: "a1_l2_v", type: "vocab", category: "vocab", title: "Olmoshlar", desc: "Ben, Sen, O.", xp: 30, time: "5 min", icon: "fa-spell-check", questions: [{ q: "Siz - ?", a: ["Siz", "Biz", "Sen"], correct: 0 }] },
            { id: "a1_l2_g", type: "grammar", category: "grammar", title: "Shaxs qo'shimchalari", desc: "Asoslar.", xp: 30, time: "5 min", icon: "fa-pen-nib", questions: [{ q: "Ben - ?", a: ["-im", "-sin", "-iz"], correct: 0 }] },
            { id: "a1_l2_t", type: "listening", category: "tinglash", title: "Tinglash: Savol", desc: "Eshiting.", xp: 50, time: "5 min", icon: "fa-headphones", questions: [{ q: "Nima deyiladi?", audio: "Siz kimsiniz?", a: ["Siz kimsiz?", "Qayerdansiz?"], correct: 0 }] }
        ],
        3: [
            { id: "a1_l3_v", type: "vocab", category: "vocab", title: "Maktab", desc: "Buyumlar.", xp: 30, time: "5 min", icon: "fa-spell-check", questions: [{ q: "Kitob - ?", a: ["Kitap", "Kalem", "Masa"], correct: 0 }] },
            { id: "a1_l3_g", type: "grammar", category: "grammar", title: "So'roq gap", desc: "-mi, -mi.", xp: 30, time: "5 min", icon: "fa-pen-nib", questions: [{ q: "Bu kitap ...?", a: ["mı", "mi", "mu"], correct: 0 }] },
            { id: "a1_l3_t", type: "listening", category: "tinglash", title: "Tinglash: Buyum", desc: "Eshiting.", xp: 50, time: "5 min", icon: "fa-headphones", questions: [{ q: "Qaysi buyum?", audio: "Bu bir masa mı?", a: ["Stolmi?", "Daftarmi?"], correct: 0 }] }
        ],
        4: [
            { id: "a1_l4_v", type: "vocab", category: "vocab", title: "Mevalar", desc: "Mevalar.", xp: 30, time: "5 min", icon: "fa-spell-check", questions: [{ q: "Elma - ?", a: ["Olma", "Nok"], correct: 0 }] },
            { id: "a1_l4_g", type: "grammar", category: "grammar", title: "Ko'plik", desc: "-lar/-ler.", xp: 30, time: "5 min", icon: "fa-pen-nib", questions: [{ q: "Ders - ?", a: ["Dersler", "Derslar"], correct: 0 }] },
            { id: "a1_l4_t", type: "listening", category: "tinglash", title: "Tinglash: Mevalar", desc: "Eshiting.", xp: 50, time: "5 min", icon: "fa-headphones", questions: [{ q: "Nima?", audio: "Elmalar", a: ["Olmalalar", "Olma"], correct: 0 }] }
        ],
        5: [
            { id: "a1_l5_v", type: "vocab", category: "vocab", title: "Oila", desc: "Anne, Baba.", xp: 30, time: "5 min", icon: "fa-spell-check", questions: [{ q: "Dada - ?", a: ["Baba", "Anne"], correct: 0 }] },
            { id: "a1_l5_g", type: "grammar", category: "grammar", title: "Egalik", desc: "Mening...", xp: 40, time: "7 min", icon: "fa-pen-nib", questions: [{ q: "Mening onam - ?", a: ["Benim annem", "O"], correct: 0 }] },
            { id: "a1_l5_t", type: "listening", category: "tinglash", title: "Tinglash: Oila", desc: "Eshiting.", xp: 50, time: "5 min", icon: "fa-headphones", questions: [{ q: "Kim?", audio: "Babam", a: ["Dadam", "Onam"], correct: 0 }] }
        ],
        6: [
            { id: "a1_l6_v", type: "vocab", category: "vocab", title: "Sonlar 1-10", desc: "Raqamlar.", xp: 30, time: "5 min", icon: "fa-spell-check", questions: [{ q: "5 - ?", a: ["Beş", "Dört"], correct: 0 }] },
            { id: "a1_l6_g", type: "grammar", category: "grammar", title: "Miqdor", desc: "Kaç?", xp: 30, time: "5 min", icon: "fa-pen-nib", questions: [{ q: "Nechta? - ?", a: ["Kaç?", "Nerede?"], correct: 0 }] },
            { id: "a1_l6_t", type: "listening", category: "tinglash", title: "Tinglash: Sonlar", desc: "Eshiting.", xp: 50, time: "5 min", icon: "fa-headphones", questions: [{ q: "Necha?", audio: "Üç", a: ["3", "5"], correct: 0 }] }
        ],
        7: [
            { id: "a1_l7_v", type: "vocab", category: "vocab", title: "Ranglar", desc: "Siyah, Beyaz.", xp: 30, time: "5 min", icon: "fa-spell-check", questions: [{ q: "Qora - ?", a: ["Siyah", "Beyaz"], correct: 0 }] },
            { id: "a1_l7_g", type: "grammar", category: "grammar", title: "Sifatlar", desc: "Ranglar bilan.", xp: 30, time: "5 min", icon: "fa-pen-nib", questions: [{ q: "Qizil olma - ?", a: ["Kırmızı elma", "Elma"], correct: 0 }] },
            { id: "a1_l7_t", type: "listening", category: "tinglash", title: "Tinglash: Ranglar", desc: "Eshiting.", xp: 50, time: "5 min", icon: "fa-headphones", questions: [{ q: "Rang?", audio: "Mavi", a: ["Ko'k", "Yashil"], correct: 0 }] }
        ],
        8: [
            { id: "a1_l8_v", type: "vocab", category: "vocab", title: "Hayvonlar", desc: "Kedi, Köpek.", xp: 30, time: "5 min", icon: "fa-spell-check", questions: [{ q: "Mushuk - ?", a: ["Kedi", "Köpek"], correct: 0 }] },
            { id: "a1_l8_g", type: "grammar", category: "grammar", title: "Bor/Yo'q", desc: "Var/Yok.", xp: 30, time: "5 min", icon: "fa-pen-nib", questions: [{ q: "Mushugim bor - ?", a: ["Kedim var", "Kedi"], correct: 0 }] },
            { id: "a1_l8_t", type: "listening", category: "tinglash", title: "Tinglash: Hayvon", desc: "Eshiting.", xp: 50, time: "5 min", icon: "fa-headphones", questions: [{ q: "Hayvon?", audio: "Aslan", a: ["Sher", "Fil"], correct: 0 }] }
        ],
        9: [
            { id: "a1_l9_v", type: "vocab", category: "vocab", title: "Kunlar", desc: "Pazartesi...", xp: 30, time: "5 min", icon: "fa-spell-check", questions: [{ q: "Dushanba - ?", a: ["Pazartesi", "Salı"], correct: 0 }] },
            { id: "a1_l9_g", type: "grammar", category: "grammar", title: "Vaqt", desc: "Bugun, Erta.", xp: 30, time: "5 min", icon: "fa-pen-nib", questions: [{ q: "Bugun - ?", a: ["Bugün", "Yarın"], correct: 0 }] },
            { id: "a1_l9_t", type: "listening", category: "tinglash", title: "Tinglash: Vaqt", desc: "Eshiting.", xp: 50, time: "5 min", icon: "fa-headphones", questions: [{ q: "Qachon?", audio: "Yarın", a: ["Ertaga", "Kecha"], correct: 0 }] }
        ],
        10: [
            { id: "a1_l10_v", type: "vocab", category: "vocab", title: "Kiyimlar", desc: "Gömlek, Pantolon.", xp: 30, time: "5 min", icon: "fa-spell-check", questions: [{ q: "Ko'ylak - ?", a: ["Gömlek", "Ceket"], correct: 0 }] },
            { id: "a1_l10_g", type: "grammar", category: "grammar", title: "Sifatlar 2", desc: "Katta, Kichik.", xp: 30, time: "5 min", icon: "fa-pen-nib", questions: [{ q: "Katta - ?", a: ["Büyük", "Küçük"], correct: 0 }] },
            { id: "a1_l10_t", type: "listening", category: "tinglash", title: "Tinglash: Kiyim", desc: "Eshiting.", xp: 50, time: "5 min", icon: "fa-headphones", questions: [{ q: "Nima?", audio: "Şapka", a: ["Shlyapa", "Paypog"], correct: 0 }] }
        ],
        11: [
            { id: "a1_l11_v", type: "vocab", category: "vocab", title: "Taomlar", desc: "Ekmek, Su.", xp: 30, time: "5 min", icon: "fa-spell-check", questions: [{ q: "Non - ?", a: ["Ekmek", "Su"], correct: 0 }] },
            { id: "a1_l11_g", type: "grammar", category: "grammar", title: "Xohish", desc: "-iyor (hozirgi zamon).", xp: 30, time: "5 min", icon: "fa-pen-nib", questions: [{ q: "Yeyapman - ?", a: ["Yorum", "Yiyeceğim"], correct: 0 }] },
            { id: "a1_l11_t", type: "listening", category: "tinglash", title: "Tinglash: Taom", desc: "Eshiting.", xp: 50, time: "5 min", icon: "fa-headphones", questions: [{ q: "Nima?", audio: "Su lütfen", a: ["Suv iltimos", "Non"], correct: 0 }] }
        ],
        12: [
            { id: "a1_l12_v", type: "vocab", category: "vocab", title: "Tana a'zolari", desc: "Göz, El.", xp: 30, time: "5 min", icon: "fa-spell-check", questions: [{ q: "Ko'z - ?", a: ["Göz", "El"], correct: 0 }] },
            { id: "a1_l12_g", type: "grammar", category: "grammar", title: "-da/-de (O'rin)", desc: "Qayerda?", xp: 30, time: "5 min", icon: "fa-pen-nib", questions: [{ q: "Uyda - ?", a: ["Evde", "Evden"], correct: 0 }] },
            { id: "a1_l12_t", type: "listening", category: "tinglash", title: "Tinglash: Tana", desc: "Eshiting.", xp: 50, time: "5 min", icon: "fa-headphones", questions: [{ q: "Nima?", audio: "Başım ağrıyor", a: ["Boshim og'riyapti", "Qo'lim"], correct: 0 }] }
        ],
        13: [
            { id: "a1_l13_v", type: "vocab", category: "vocab", title: "Shahar", desc: "Okul, Market.", xp: 30, time: "5 min", icon: "fa-spell-check", questions: [{ q: "Maktab - ?", a: ["Okul", "Hastane"], correct: 0 }] },
            { id: "a1_l13_g", type: "grammar", category: "grammar", title: "Yo'nalish", desc: "-a/-e.", xp: 30, time: "5 min", icon: "fa-pen-nib", questions: [{ q: "Maktabga - ?", a: ["Okula", "Okulda"], correct: 0 }] },
            { id: "a1_l13_t", type: "listening", category: "tinglash", title: "Tinglash: Shahar", desc: "Eshiting.", xp: 50, time: "5 min", icon: "fa-headphones", questions: [{ q: "Qayerga?", audio: "Eve gidiyorum", a: ["Uyga ketyapman", "Maktabga"], correct: 0 }] }
        ],
        14: [
            { id: "a1_l14_v", type: "vocab", category: "vocab", title: "Ob-havo", desc: "Güneş, Yağmur.", xp: 30, time: "5 min", icon: "fa-spell-check", questions: [{ q: "Yomg'ir - ?", a: ["Yağmur", "Kar"], correct: 0 }] },
            { id: "a1_l14_g", type: "grammar", category: "grammar", title: "Hozirgi zamon 2", desc: "Davomiylik.", xp: 30, time: "5 min", icon: "fa-pen-nib", questions: [{ q: "Yomg'ir yog'yapti - ?", a: ["Yağmur yağıyor", "Kar"], correct: 0 }] },
            { id: "a1_l14_t", type: "listening", category: "tinglash", title: "Tinglash: Havo", desc: "Eshiting.", xp: 50, time: "5 min", icon: "fa-headphones", questions: [{ q: "Qanday?", audio: "Hava çok sıcak", a: ["Havo juda issiq", "Sovuq"], correct: 0 }] }
        ],
        15: [
            { id: "a1_l15_v", type: "vocab", category: "vocab", title: "Xobbi", desc: "Spor, Müzik.", xp: 30, time: "5 min", icon: "fa-spell-check", questions: [{ q: "Musiqa - ?", a: ["Müzik", "Oyun"], correct: 0 }] },
            { id: "a1_l15_g", type: "grammar", category: "grammar", title: "Jamlovchi", desc: "Takrorlash.", xp: 50, time: "10 min", icon: "fa-pen-nib", questions: [{ q: "Hammasi - ?", a: ["Hepsi", "Bazı"], correct: 0 }] },
            { id: "a1_l15_t", type: "listening", category: "tinglash", title: "Tinglash: Xulosa", desc: "Eshiting.", xp: 100, time: "15 min", icon: "fa-headphones", questions: [{ q: "Nima?", audio: "Türkçeyi seviyorum", a: ["Turk tilini sevaman", "O'rganyapman"], correct: 0 }] }
        ]
    },
    'A2': {
        1: [
            { id: "a2_l1_v", type: "vocab", category: "vocab", title: "Fe'llar", desc: "Gitmek, Gelmek.", xp: 40, time: "6 min", icon: "fa-spell-check", questions: [{ q: "Ketmoq - ?", a: ["Gitmek", "Gelmek"], correct: 0 }] },
            { id: "a2_l1_g", type: "grammar", category: "grammar", title: "O'tgan zamon", desc: "-di.", xp: 50, time: "8 min", icon: "fa-pen-nib", questions: [{ q: "Gittim - ?", a: ["Ketdim", "Ketyapman"], correct: 0 }] },
            { id: "a2_l1_t", type: "listening", category: "tinglash", title: "Tinglash: O'tgan", desc: "Eshiting.", xp: 60, time: "7 min", icon: "fa-headphones", questions: [{ q: "Nima?", audio: "Dün akşam", a: ["Kecha kechqurun", "Ertalab"], correct: 0 }] }
        ]
    }
};
`;
    fs.writeFileSync('data.js', cleanPart + newAss, 'utf8');
    console.log('Fixed data.js encoding and content.');
} else {
    console.log('No null bytes found, maybe file is not corrupted in that way.');
}
