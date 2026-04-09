const fs = require('fs');

let out = "";
out += "        'B1': [\n";
for (let i = 31; i <= 45; i++) {
    out += `            { id: ${i}, title: "B1 Daraja: O'rta", desc: "${i}-dars | Video darslik", status: "active", type: "video", videoId: "CkwEedkE4Zo" }${i !== 45 ? ',' : ''}\n`;
}
out += "        ],\n";
out += "        'B2': [\n";
for (let i = 46; i <= 60; i++) {
    out += `            { id: ${i}, title: "B2 Daraja: Yuqori o'rta", desc: "${i}-dars | Video darslik", status: "active", type: "video", videoId: "S7cd1hoT1Ek" }${i !== 60 ? ',' : ''}\n`;
}
out += "        ],\n";
out += "        'C1': [\n";
for (let i = 61; i <= 75; i++) {
    out += `            { id: ${i}, title: "C1 Daraja: Mukammal", desc: "${i}-dars | Video darslik", status: "active", type: "video", videoId: "8C8y_Z33Rt8" }${i !== 75 ? ',' : ''}\n`;
}
out += "        ],\n";
out += "        'C2': [\n";
for (let i = 76; i <= 90; i++) {
    out += `            { id: ${i}, title: "C2 Daraja: Pro", desc: "${i}-dars | Video darslik", status: "active", type: "video", videoId: "v3iRuqE78qo" }${i !== 90 ? ',' : ''}\n`;
}
out += "        ]";

fs.writeFileSync('C:\\Users\\Chuwi\\Desktop\\Turk tili\\gen_topics.txt', out);
