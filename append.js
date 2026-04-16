const fs = require('fs');
const jsCode = `
window.setTaskFilter = function(filter) {
    document.querySelectorAll('.task-item').forEach(item => {
        let show = false;
        if (filter === 'barchasi') show = true;
        else if (filter === 'grammar' && item.querySelector('.task-icon').classList.contains('grammar')) show = true;
        else if (filter === 'vocab' && item.querySelector('.task-icon').classList.contains('vocab')) show = true;
        else if (filter === 'tinglash' && item.querySelector('.task-icon').classList.contains('listen')) show = true;
        item.style.display = show ? 'flex' : 'none';
    });
    document.querySelectorAll('.filter-btn').forEach(btn => {
        let btnText = btn.innerText.toLowerCase();
        let isActive = btnText === filter || (filter === 'barchasi' && btnText === 'barchasi');
        btn.classList.toggle('active', isActive);
    });
};
`;
fs.appendFileSync('logic.js', jsCode);
