// ================= DATABASE SURVEY =================
// Lo bisa tambah soal sebanyak-banyaknya di sini
const surveyDatabase = [
    {
        question: "Alasan paling klasik pas telat masuk kelas pagi?",
        answers: [
            { text: "Kesiangan / Tidur Lagi", points: 45, keywords: ["siang", "tidur", "bangun", "kebo", "telat"], revealed: false },
            { text: "Susah Dapet Parkir", points: 30, keywords: ["parkir", "sempit", "antri", "penuh", "motor"], revealed: false },
            { text: "Macet di Jalan", points: 15, keywords: ["macet", "margo", "jalan", "lampu merah"], revealed: false },
            { text: "Nungguin Temen Bareng", points: 10, keywords: ["temen", "bareng", "nunggu", "nebeng"], revealed: false }
        ]
    },
    {
        question: "Barang yang sering banget hilang di kampus?",
        answers: [
            { text: "Pulpen / Alat Tulis", points: 50, keywords: ["pulpen", "pensil", "pen", "alat tulis", "tipe x"], revealed: false },
            { text: "Botol Minum / Tumbler", points: 25, keywords: ["botol", "minum", "tumbler", "tupperware"], revealed: false },
            { text: "Flashdisk", points: 15, keywords: ["flashdisk", "fd", "usb"], revealed: false },
            { text: "Jaket / Hoodie", points: 10, keywords: ["jaket", "hoodie", "sweater"], revealed: false }
        ]
    }
];

let currentQuestionIndex = 0;
let scoreA = 0;
let scoreB = 0;
let activeTeam = null; 

// ================= PEER JS (JARINGAN HOST) =================
// Bikin ID Acak (Misal: OIM-A1B2)
const randomStr = Math.random().toString(36).substring(2, 6).toUpperCase();
const myRoomId = "OIM-" + randomStr;

const peer = new Peer(myRoomId);

peer.on('open', (id) => {
    document.getElementById('room-id-display').innerText = id;
    console.log("Menunggu HP konek ke:", id);
});

// Listener kalau ada HP (Buzzer) yang nyambung
peer.on('connection', (conn) => {
    conn.on('data', (data) => {
        if(data.action === 'buzz') {
            triggerBuzzFromPhone(data.team);
        }
    });
});

function triggerBuzzFromPhone(team) {
    // Kalo belum ada yang neken buzzer, kunci buat tim itu
    if(activeTeam === null) {
        activeTeam = team;
        updateTeamUI();
        playBuzzerSound();
    }
}

// ================= CORE GAME =================
window.onload = () => { loadQuestion(currentQuestionIndex); };

function loadQuestion(index) {
    if(index >= surveyDatabase.length) return alert("Semua soal udah habis bos!");
    
    const data = surveyDatabase[index];
    document.getElementById('question-text').innerText = data.question;
    
    const board = document.getElementById('board-container');
    board.innerHTML = ''; 

    data.answers.forEach((ans, i) => {
        ans.revealed = false; 
        const slot = document.createElement('div');
        slot.className = 'answer-slot hidden-ans';
        slot.id = `ans-slot-${i}`;
        
        // Kalo input error, lo bisa klik kotaknya langsung pake mouse
        slot.onclick = () => revealAnswer(i);
        
        slot.innerHTML = `<span class="ans-text">${ans.text}</span><span class="ans-points">${ans.points}</span>`;
        board.appendChild(slot);
    });

    activeTeam = null;
    updateTeamUI();
    document.getElementById('operator-feedback').innerText = '';
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

// ================= INPUT OPERATOR (KEYWORD CHECKER) =================
document.getElementById('operator-input').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') submitAnswer();
});

function submitAnswer() {
    const rawInput = document.getElementById('operator-input').value.toLowerCase().trim();
    const feedback = document.getElementById('operator-feedback');
    if(rawInput === "") return feedback.innerText = "Ketik dulu bos!";

    const currentAnswers = surveyDatabase[currentQuestionIndex].answers;
    let foundIndex = -1;

    for(let i = 0; i < currentAnswers.length; i++) {
        const ansData = currentAnswers[i];
        if(ansData.revealed) continue; // Kalo udah kebuka, skip
        
        // Cek kecocokan keyword
        if(ansData.keywords.some(k => rawInput.includes(k))) {
            foundIndex = i; break; 
        }
    }

    if(foundIndex !== -1) {
        feedback.innerText = "JAWABAN ADA DI PAPAN!"; feedback.style.color = "#2ecc71";
        revealAnswer(foundIndex);
    } else {
        feedback.innerText = "TETOOOT! SALAH ATAU GA ADA KEYWORD!"; feedback.style.color = "#e74c3c";
        triggerStrike();
    }
    document.getElementById('operator-input').value = '';
}

function revealAnswer(index) {
    const ansData = surveyDatabase[currentQuestionIndex].answers[index];
    if(ansData.revealed) return; 

    ansData.revealed = true;
    const slot = document.getElementById(`ans-slot-${index}`);
    slot.classList.remove('hidden-ans');
    slot.classList.add('revealed');

    // Tambah Poin
    if(activeTeam === 'A') scoreA += ansData.points;
    else if (activeTeam === 'B') scoreB += ansData.points;
    
    document.getElementById('scoreA').innerText = scoreA;
    document.getElementById('scoreB').innerText = scoreB;

    // Buka sesi rebutan lagi
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

    setTimeout(() => {
        strike.classList.add('hidden');
        activeTeam = null; updateTeamUI();
    }, 1500);
}

function nextQuestion() {
    currentQuestionIndex++;
    loadQuestion(currentQuestionIndex);
}

// Backup Keyboard: Tekan Q (Tim A) atau P (Tim B) di laptop kalau HP error
window.addEventListener('keydown', (e) => {
    if(e.target.tagName === 'INPUT') return; 
    if(e.key.toLowerCase() === 'q') triggerBuzzFromPhone('A');
    if(e.key.toLowerCase() === 'p') triggerBuzzFromPhone('B');
});
