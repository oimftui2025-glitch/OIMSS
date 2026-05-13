// ================= DATABASE SURVEY (10 JAWABAN) =================
const surveyDatabase = [
    {
        question: "Alasan paling klasik pas telat masuk kelas pagi?",
        answers: [
            { text: "Kesiangan / Bangun Kebo", points: 25, keywords: ["siang", "bangun", "tidur", "kebo", "alarm", "pulas"], revealed: false },
            { text: "Macet Parah", points: 20, keywords: ["macet", "jalan", "margo", "lantas", "lalin", "stuck"], revealed: false },
            { text: "Susah Dapet Parkir", points: 15, keywords: ["parkir", "sempit", "antri", "penuh", "motor", "slot"], revealed: false },
            { text: "Mules Dadakan / Ke WC", points: 10, keywords: ["mules", "boker", "berak", "wc", "toilet", "perut", "bab"], revealed: false },
            { text: "Hujan Badai", points: 8, keywords: ["hujan", "air", "badai", "basah", "jas", "neduh", "deras"], revealed: false },
            { text: "Jemputan / Ojol Lama", points: 7, keywords: ["jemput", "grab", "gojek", "ojol", "lama", "driver", "indriver"], revealed: false },
            { text: "Nunggu Temen Tebengan", points: 5, keywords: ["temen", "tebeng", "nebeng", "bareng", "nunggu", "bonceng"], revealed: false },
            { text: "Ban Bocor", points: 4, keywords: ["ban", "bocor", "tambal", "paku", "kempes", "roda"], revealed: false },
            { text: "Kunci Motor Nyelip", keywords: ["kunci", "nyelip", "ilang", "lupa", "cari", "motor"], points: 3, revealed: false },
            { text: "Kelamaan Nugas di Rumah", points: 3, keywords: ["nugas", "tugas", "pr", "laporan", "begadang", "ngerjain", "proyek"], revealed: false }
        ]
    }
];

let scoreA = 0;
let scoreB = 0;
let activeTeam = null; 

// ================= PEER JS (JARINGAN HOST) =================
const randomStr = Math.random().toString(36).substring(2, 6).toUpperCase();
const myRoomId = "OIM-" + randomStr;
const peer = new Peer(myRoomId);

peer.on('open', (id) => {
    document.getElementById('room-id-display').innerText = id;
});

peer.on('connection', (conn) => {
    conn.on('data', (data) => {
        if(data.action === 'buzz') triggerBuzzFromPhone(data.team);
    });
});

function triggerBuzzFromPhone(team) {
    if(activeTeam === null) {
        activeTeam = team;
        updateTeamUI();
        playBuzzerSound();
    }
}

// ================= CORE GAME =================
window.onload = () => { loadQuestion(); };

function loadQuestion() {
    const data = surveyDatabase[0];
    document.getElementById('question-text').innerText = data.question;
    const board = document.getElementById('board-container');
    board.innerHTML = ''; 

    data.answers.forEach((ans, i) => {
        ans.revealed = false; 
        const slot = document.createElement('div');
        slot.className = 'answer-slot hidden-ans';
        slot.id = `ans-slot-${i}`;
        slot.onclick = () => revealAnswer(i);
        slot.innerHTML = `<span class="ans-text">${ans.text}</span><span class="ans-points">${ans.points}</span>`;
        board.appendChild(slot);
    });

    activeTeam = null;
    updateTeamUI();
    document.getElementById('operator-input').value = '';
}

function updateTeamUI() {
    const boxA = document.getElementById('teamA');
    const boxB = document.getElementById('teamB');
    const activeText = document.getElementById('active-team-text');
    boxA.classList.remove('active-buzzer');
    boxB.classList.remove('active-buzzer');

    if(activeTeam === 'A') {
        boxA.classList.add('active-buzzer');
        activeText.innerText = "TIM A MENJAWAB!";
    } else if (activeTeam === 'B') {
        boxB.classList.add('active-buzzer');
        activeText.innerText = "TIM B MENJAWAB!";
    } else {
        activeText.innerText = "BELUM ADA (Tunggu Buzzer)";
    }
}

function playBuzzerSound() {
    const ctx = new (window.AudioContext || window.webkitAudioContext)();
    const osc = ctx.createOscillator();
    osc.type = 'square';
    osc.frequency.setValueAtTime(450, ctx.currentTime); 
    osc.connect(ctx.destination);
    osc.start(); osc.stop(ctx.currentTime + 0.3); 
}

// ================= INPUT OPERATOR =================
document.getElementById('operator-input').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') submitAnswer();
});

function submitAnswer() {
    const rawInput = document.getElementById('operator-input').value.toLowerCase().trim();
    const feedback = document.getElementById('operator-feedback');
    if(rawInput === "") return;

    const currentAnswers = surveyDatabase[0].answers;
    let foundIndex = -1;

    for(let i = 0; i < currentAnswers.length; i++) {
        const ansData = currentAnswers[i];
        if(ansData.revealed) continue; 
        if(ansData.keywords.some(k => rawInput.includes(k))) {
            foundIndex = i; break; 
        }
    }

    if(foundIndex !== -1) {
        feedback.innerText = "JAWABAN ADA!"; feedback.style.color = "#2ecc71";
        revealAnswer(foundIndex);
    } else {
        feedback.innerText = "TETOOOT! SALAH!"; feedback.style.color = "#e74c3c";
        triggerStrike();
    }
    document.getElementById('operator-input').value = '';
}

function revealAnswer(index) {
    const ansData = surveyDatabase[0].answers[index];
    if(ansData.revealed) return; 

    ansData.revealed = true;
    const slot = document.getElementById(`ans-slot-${index}`);
    slot.classList.remove('hidden-ans');
    slot.classList.add('revealed');

    if(activeTeam === 'A') scoreA += ansData.points;
    else if (activeTeam === 'B') scoreB += ansData.points;
    
    document.getElementById('scoreA').innerText = scoreA;
    document.getElementById('scoreB').innerText = scoreB;

    activeTeam = null; 
    updateTeamUI(); 
}

function triggerStrike() {
    const strike = document.getElementById('strike-container');
    strike.classList.remove('hidden');
    const ctx = new (window.AudioContext || window.webkitAudioContext)();
    const osc = ctx.createOscillator(); osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(150, ctx.currentTime); 
    osc.connect(ctx.destination);
    osc.start(); osc.stop(ctx.currentTime + 0.6);
    setTimeout(() => { strike.classList.add('hidden'); activeTeam = null; updateTeamUI(); }, 1500);
}

window.addEventListener('keydown', (e) => {
    if(e.target.tagName === 'INPUT') return; 
    if(e.key.toLowerCase() === 'q') triggerBuzzFromPhone('A');
    if(e.key.toLowerCase() === 'p') triggerBuzzFromPhone('B');
});
