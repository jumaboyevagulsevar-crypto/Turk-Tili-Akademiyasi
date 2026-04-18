const fs = require('fs');
const file = 'c:/Users/Chuwi/Desktop/Turk tili/data.js';
let content = fs.readFileSync(file, 'utf8');

const index = content.indexOf('window.assignmentsData = {');
if (index !== -1) {
    content = content.substring(0, index);
    fs.writeFileSync(file, content);
    console.log("Successfully removed window.assignmentsData from data.js");
} else {
    console.log("Not found.");
}
