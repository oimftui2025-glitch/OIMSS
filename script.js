// ================= DATABASE SURVEY =================
const surveyDatabase = [
    {
        question: "Alasan paling klasik pas telat masuk kelas pagi?",
        answers: [
            { text: "Kesiangan / Bangun Kebo", points: 40, keywords: ["siang", "bangun", "tidur", "kebo", "alarm"], revealed: false },
            { text: "Macet Parah", points: 25, keywords: ["macet", "jalan", "margo", "lantas", "stuck"], revealed: false },
            { text: "Ban Bocor / Rusak", points: 15, keywords: ["ban", "bocor", "tambal", "bengkel", "mogok"], revealed: false },
            { text: "Hujan Badai", points: 10, keywords: ["hujan", "air", "basah", "deras", "banjir", "neduh"], revealed: false },
            { text: "Ojol Lama / Susah Sinyal", points: 8, keywords: ["ojol", "grab", "gojek", "lama", "driver", "jemput"], revealed: false },
            { text: "Susah Cari Parkir", points: 7, keywords: ["parkir", "sempit", "antri", "penuh", "motor"], revealed: false },
            { text: "Sakit Perut / Ke WC", points: 6, keywords: ["mules", "boker", "berak", "wc", "toilet", "perut"], revealed: false },
            { text: "Ketinggalan KRL/Kereta/Bikun", points: 5, keywords: ["krl", "kereta", "stasiun", "telat", "jadwal"], revealed: false },
            { text: "Nugas Sampai Subuh", points: 3, keywords: ["nugas", "tugas", "begadang", "subuh", "laporan"], revealed: false },
            { text: "Nunggu Temen Tebengan", points: 1, keywords: ["temen", "tebeng", "nebeng", "bareng", "nunggu"], revealed: false }
        ]
    },
    {
        question: "Benda wajib anak Teknik pas nugas malam/begadang?",
        answers: [
            { text: "Kopi / Caffeine", points: 35, keywords: ["kopi", "coffee", "nescafe", "kopisoe", "caffeine"], revealed: false },
            { text: "Colokan / Terminal", points: 20, keywords: ["colokan", "terminal", "kabel", "casan", "charger"], revealed: false },
            { text: "Rokok / Vape", points: 15, keywords: ["rokok", "vape", "pods", "asap", "sebats"], revealed: false },
            { text: "Laptop / Mouse", points: 12, keywords: ["laptop", "mouse", "pc", "komputer", "casan"], revealed: false },
            { text: "Indomie / Mie Instan", points: 10, keywords: ["indomie", "mie", "mie rebus", "makanan", "popmie"], revealed: false },
            { text: "Tolak Angin", points: 8, keywords: ["tolak angin", "angin", "obat", "jamu", "masuk angin"], revealed: false },
            { text: "Spotify / Earphone", points: 5, keywords: ["spotify", "earphone", "headset", "lagu", "musik", "tws"], revealed: false },
            { text: "Air Putih / Galon", points: 4, keywords: ["air", "putih", "galon", "aqua", "minum"], revealed: false },
            { text: "Jaket / Hoodie", points: 3, keywords: ["jaket", "hoodie", "dingin", "selimut"], revealed: false },
            { text: "Buku Referensi", points: 1, keywords: ["buku", "catatan", "referensi", "kalkulus", "diktat"], revealed: false }
        ]
    },
    {
        question: "Tempat nongkrong/nugas favorit anak FTUI?",
        answers: [
            { text: "Kantin Teknik / Kantek", points: 35, keywords: ["kantin", "kantek", "teknik", "makan", "nongkrong"], revealed: false },
            { text: "Perpus UI / Perpusat", points: 20, keywords: ["perpus", "perpusui", "pusat", "perpustakaan"], revealed: false },
            { text: "Kosan Temen", points: 15, keywords: ["kosan", "kos", "kontrakan", "kamar", "numpang"], revealed: false },
            { text: "Warkop / Burjo / Coffe Shop / Cafe", points: 10, keywords: ["warkop", "kopi", "burjo", "cafe", "warung", "coffee shop"], revealed: false },
            { text: "Kutek", points: 8, keywords: ["kutek", "kukusan teknik", "pokus"], revealed: false },
            { text: "Zona Departemen", points: 5, keywords: ["gazeb mesin", "gazeb", "kandal", "kantas", "kantin atas", "kanmet", "kantin metal", "tamtek", "taman teknik"], revealed: false },
            { text: "Rotunda FT", points: 4, keywords: ["rotun", "rotunda", "tamtek", "tamsen", "nonton"], revealed: false },
            { text: "Kukel", points: 3, keywords: ["kukusan keluar", "kukel"], revealed: false },
            { text: "Lobby K", points: 2, keywords: ["Lobby", "Gedung K", "lobby k", "lobi k"], revealed: false },
            { text: "Rotunda FT", points: 1, keywords: ["rotun", "rotunda"], revealed: false }
        ]
    },
    {
        question: "Hal yang paling sering hilang di kampus/kosan?",
        answers: [
            { text: "Pulpen", points: 30, keywords: ["pulpen", "pena", "pen", "alat tulis"], revealed: false },
            { text: "Korek Api", points: 25, keywords: ["korek", "gas", "cricket", "mancis"], revealed: false },
            { text: "Botol Minum / Tumbler", points: 15, keywords: ["botol", "tumbler", "tempat minum"], revealed: false },
            { text: "Kalkulator scientific", points: 10, keywords: ["kalkulator", "alat hitung"], revealed: false },
            { text: "Helm", points: 8, keywords: ["helm", "bogo", "kyt", "ink", "pelindung"], revealed: false },
            { text: "Kunci (Motor/Kosan)", points: 5, keywords: ["kunci", "motor", "kamar", "gembok", "hilang"], revealed: false },
            { text: "Uang Kembalian / Koin", points: 4, keywords: ["uang", "kembalian", "koin", "receh", "duit"], revealed: false },
            { text: "Kabel Data / Charger", points: 3, keywords: ["kabel", "data", "charger", "casan", "adaptor"], revealed: false },
            { text: "ID Card / KTM", points: 2, keywords: ["id", "card", "ktm", "kartu", "mahasiswa"], revealed: false },
            { text: "Dompet", points: 1, keywords: ["dompet", "uang"], revealed: false }
        ]
    },
    {
        question: "Kelakuan random mahasiswa pas kelas online / Zoom?",
        answers: [
            { text: "Tidur Lagi / Rebahan", points: 30, keywords: ["tidur", "bobo", "merem", "rebahan", "kasur"], revealed: false },
            { text: "Belum Mandi / Kucel", points: 20, keywords: ["mandi", "bau", "cuci muka", "kucel", "kotor"], revealed: false },
            { text: "Makan / Sarapan", points: 15, keywords: ["makan", "sarapan", "ngemil", "ngunyah", "piring"], revealed: false },
            { text: "Main Game (ML/Valo)", points: 12, keywords: ["game", "ml", "valo", "mabar", "pubg"], revealed: false },
            { text: "Scroll TikTok / IG", points: 10, keywords: ["tiktok", "ig", "instagram", "scroll", "fyp"], revealed: false },
            { text: "Titip Absen / Joki", points: 5, keywords: ["titip", "absen", "joki", "nitip", "ta"], revealed: false },
            { text: "Ninggalin HP/Laptop", points: 4, keywords: ["tinggal", "pergi", "kamar mandi", "kabur"], revealed: false },
            { text: "Nonton Film/Series", points: 3, keywords: ["nonton", "film", "series", "netflix", "drakor"], revealed: false },
            { text: "Buka Olshop", points: 2, keywords: ["olshop", "online shop", "shopee", "tokped", "belanja", "checkout"], revealed: false },
            { text: "Bengong / Ngelamun", points: 1, keywords: ["bengong", "ngelamun", "blank", "kosong"], revealed: false }
        ]
    },
    {
        question: "Makanan andalan akhir bulan anak kos?",
        answers: [
            { text: "Indomie", points: 35, keywords: ["indomie", "mie", "rebus", "goreng", "instan"], revealed: false },
            { text: "Warteg (Nasi Setengah)", points: 20, keywords: ["warteg", "nasi", "setengah", "porsi", "warung"], revealed: false },
            { text: "Telur (Dadar/Ceplok)", points: 15, keywords: ["telur", "ceplok", "dadar", "endog", "omelet"], revealed: false },
            { text: "Promag / Obat Maag", points: 10, keywords: ["promag", "maag", "obat", "mylanta", "lambung"], revealed: false },
            { text: "Nasi Pake Kecap", points: 8, keywords: ["kecap", "garam", "nasi putih", "kerupuk"], revealed: false },
            { text: "Tempe / Tahu Orek", points: 5, keywords: ["tempe", "tahu", "orek", "gorengan"], revealed: false },
            { text: "Roti Tawar", points: 3, keywords: ["roti", "tawar", "selai", "sariroti"], revealed: false },
            { text: "Nasi Goreng Abang-abang", points: 2, keywords: ["nasi goreng", "nasgor", "abang", "gerobak"], revealed: false },
            { text: "Puasa Daud / Nahan Laper", points: 1, keywords: ["puasa", "nahan", "laper", "daud", "air putih"], revealed: false },
            { text: "Minta Ortu / Ngutang", points: 1, keywords: ["ortu", "ngutang", "pinjol", "paylater", "minta"], revealed: false }
        ]
    },
    {
        question: "Kata yang paling bikin deg-degan pas asistensi/sidang?",
        answers: [
            { text: "Revisi", points: 30, keywords: ["revisi", "perbaiki", "salah", "coret", "rubah"], revealed: false },
            { text: "Ulang dari Awal", points: 25, keywords: ["ulang", "rombak", "ganti", "awal", "bikin lagi"], revealed: false },
            { text: "Coba Jelaskan / Maksudnya?", points: 15, keywords: ["jelaskan", "coba", "jelasin", "maksudnya", "apa ini"], revealed: false },
            { text: "Datanya Dari Mana?", points: 10, keywords: ["data", "sumber", "dari mana", "referensi", "dapet"], revealed: false },
            { text: "Deadline Besok", points: 8, keywords: ["deadline", "besok", "kumpul", "waktu", "telat"], revealed: false },
            { text: "Gak Logis", points: 5, keywords: ["logis", "masuk akal", "ngawur", "aneh"], revealed: false },
            { text: "Formatnya Salah", points: 3, keywords: ["format", "margin", "font", "typo", "spasi"], revealed: false },
            { text: "Mana Buktinya?", points: 2, keywords: ["bukti", "lampiran", "foto", "dokumentasi"], revealed: false },
            { text: "Kok Bisa Gini?", points: 1, keywords: ["kok bisa", "kenapa", "gimana ceritanya"], revealed: false },
            { text: "ACC (Deg-degan Seneng)", points: 1, keywords: ["acc", "lulus", "terima", "aman", "approve"], revealed: false }
        ]
    },
    {
        question: "Alasan izin gak ikut rapat proker/kepanitiaan?",
        answers: [
            { text: "Nugas / Deadline", points: 35, keywords: ["nugas", "tugas", "deadline", "laporan", "praktikum"], revealed: false },
            { text: "Sakit / Gak Enak Badan", points: 20, keywords: ["sakit", "meriang", "pusing", "demam", "badan"], revealed: false },
            { text: "Ketiduran", points: 15, keywords: ["ketiduran", "kebo", "tidur", "ngantuk", "bablas"], revealed: false },
            { text: "Acara Keluarga", points: 10, keywords: ["keluarga", "ortu", "pulang", "kampung", "nikahan"], revealed: false },
            { text: "Rapat Organisasi Lain", points: 8, keywords: ["rapat", "organisasi", "bem", "dpm", "ukm", "bentrok"], revealed: false },
            { text: "Jaringan Jelek / Kuota Habis", points: 5, keywords: ["jaringan", "sinyal", "kuota", "wifi", "jelek", "putus"], revealed: false },
            { text: "Lupa Jadwal", points: 3, keywords: ["lupa", "ingat", "jadwal", "gak tau"], revealed: false },
            { text: "Ada Kelas Pengganti", points: 2, keywords: ["kelas", "dosen", "pengganti", "kuliah", "makeup"], revealed: false },
            { text: "Hujan / Gak Ada Kendaraan", points: 1, keywords: ["hujan", "motor", "kendaraan", "ojol", "banjir"], revealed: false },
            { text: "Lagi di Jalan", points: 1, keywords: ["jalan", "otw", "macet", "krl"], revealed: false }
        ]
    },
    {
        question: "Ciri-ciri Maba (Mahasiswa Baru) FTUI banget?",
        answers: [
            { text: "Pake Jakun Terus", points: 30, keywords: ["jakun", "jaket", "kuning", "bangga", "almamater"], revealed: false },
            { text: "Jalan Bergerombol", points: 20, keywords: ["gerombol", "rombongan", "banyak", "rame", "bareng"], revealed: false },
            { text: "Kemejaan Rapi & Wangi", points: 15, keywords: ["kemeja", "rapi", "wangi", "klimis", "sopan"], revealed: false },
            { text: "Bawa Buku Tebal/Tas Gede", points: 10, keywords: ["buku", "tebal", "tas", "berat", "kalkulus", "ransel"], revealed: false },
            { text: "Muka Polos / Panik", points: 8, keywords: ["polos", "panik", "takut", "bingung", "nyasar"], revealed: false },
            { text: "Pake Lanyard Kampus", points: 7, keywords: ["lanyard", "id card", "nametag", "tali", "leher"], revealed: false },
            { text: "Rajin Duduk Paling Depan", points: 5, keywords: ["depan", "rajin", "baris", "duduk", "nanya"], revealed: false },
            { text: "Nanya Letak Ruangan", points: 3, keywords: ["nanya", "ruangan", "nyasar", "kelas", "gedung"], revealed: false },
            { text: "Story IG Tiap Sudut Kampus", points: 1, keywords: ["story", "ig", "foto", "update", "pamer"], revealed: false },
            { text: "Sering Nyebut 'Kak/Bang'", points: 1, keywords: ["kak", "bang", "kating", "sopan", "panggil"], revealed: false }
        ]
    },
    {
        question: "Alasan paling klasik anak Teknik nunda ngerjain Tugas / Laprak?",
        answers: [
            { text: "Scroll TikTok / IG", points: 35, keywords: ["tiktok", "ig", "instagram", "scroll", "reels", "sosmed"], revealed: false },
            { text: "Ketiduran / Ngantuk", points: 25, keywords: ["tidur", "ngantuk", "rebahan", "kasur", "merem"], revealed: false },
            { text: "Main Game / Mabar", points: 15, keywords: ["game", "mabar", "ml", "valo", "push rank", "pubg"], revealed: false },
            { text: "Nungguin Temen (Biar Copas)", points: 10, keywords: ["temen", "copas", "nyontek", "bareng", "nunggu", "nebeng"], revealed: false },
            { text: "Nunggu 'Mood' / Belum Niat", points: 5, keywords: ["mood", "inspirasi", "niat", "males", "nanti"], revealed: false },
            { text: "Cari Makan / Laper", points: 4, keywords: ["makan", "lapar", "laper", "ngemil", "gofood", "makan dulu"], revealed: false },
            { text: "Nonton Netflix / Anime", points: 3, keywords: ["netflix", "anime", "drakor", "nonton", "film", "series"], revealed: false },
            { text: "Laptop Lemot / Update", points: 1, keywords: ["laptop", "lemot", "update", "windows", "lag", "kentang"], revealed: false },
            { text: "Ngerjain Tugas Matkul Lain", points: 1, keywords: ["matkul", "tugas lain", "prioritas", "kuis", "belajar"], revealed: false },
            { text: "Besok Aja Lah (SKS)", points: 1, keywords: ["besok", "lama", "ntar", "h-1", "mepet", "sks"], revealed: false }
        ]
    },
    {
        question: "Momen paling bikin panik pas presentasi Tugas Besar?",
        answers: [
            { text: "Dosen Nanya Susah / Di-roasting", points: 35, keywords: ["dosen", "nanya", "killer", "susah", "diuji", "bantah"], revealed: false },
            { text: "Temen Sekelompok Diem Aja", points: 20, keywords: ["temen", "blank", "diem", "beban", "kelompok", "patung", "matil", "ngaret"], revealed: false },
            { text: "File PPT/Data Corrupt & Hilang", points: 15, keywords: ["file", "ppt", "corrupt", "error", "hilang", "flashdisk"], revealed: false },
            { text: "Laptop Hang / Blue Screen", points: 10, keywords: ["laptop", "hang", "lag", "blue screen", "mati", "lemot"], revealed: false },
            { text: "Lupa Materi / Nge-blank", points: 8, keywords: ["lupa", "blank", "gugup", "teks", "materi", "hapalan"], revealed: false },
            { text: "Baterai Laptop Habis", points: 5, keywords: ["baterai", "habis", "casan", "lowbat", "mati", "drop"], revealed: false },
            { text: "Ketahuan Copas / Plagiat", points: 3, keywords: ["copas", "plagiat", "nyontek", "ketahuan", "turnitin"], revealed: false },
            { text: "Proyektor / HDMI Ngadat", points: 2, keywords: ["proyektor", "hdmi", "kabel", "layar", "gak nyala"], revealed: false },
            { text: "Slide Typo / Salah Rumus", points: 1, keywords: ["typo", "salah", "data", "slide", "ketik", "rumus"], revealed: false },
            { text: "Waktu Habis Padahal Belum Kelar", points: 1, keywords: ["waktu", "habis", "timer", "cut", "disetop", "durasi"], revealed: false }
        ]
    }
];

// ================= GLOBAL VARIABLES =================
let currentQuestionIndex = 0;
let scoreA = 0;
let scoreB = 0;
let activeTeam = null; 
let strikes = { A: 0, B: 0 }; 

// ================= PEER JS (JARINGAN HOST) =================
const randomStr = Math.random().toString(36).substring(2, 6).toUpperCase();
const myRoomId = "OIM-" + randomStr;
const peer = new Peer(myRoomId, {
    config: {
        'iceServers': [
            { urls: 'stun:stun.l.google.com:19302' },
            { urls: 'stun:stun1.l.google.com:19302' }
        ]
    }
});

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

// ================= CORE GAME & NAVIGASI =================
window.onload = () => { loadQuestion(0); };

function loadQuestion(index) {
    currentQuestionIndex = index;
    const data = surveyDatabase[index];
    document.getElementById('question-text').innerText = `Q${index + 1}: ${data.question}`;
    
    const board = document.getElementById('board-container');
    board.innerHTML = ''; 

    // Urutkan 10 jawaban dari poin paling tinggi ke rendah
    data.answers.sort((a, b) => b.points - a.points);

    data.answers.forEach((ans, i) => {
        ans.revealed = false; 
        const slot = document.createElement('div');
        slot.className = 'answer-slot hidden-ans';
        slot.id = `ans-slot-${i}`;
        
        slot.onclick = () => {
            triggerReveal(i);
        };
        
        slot.innerHTML = `<span class="ans-text">${i+1}. ${ans.text}</span><span class="ans-points">${ans.points}</span>`;
        board.appendChild(slot);
    });

    activeTeam = null;
    updateTeamUI();
    document.getElementById('operator-input').value = '';
    resetSemuaNyawa(); 
}

function nextQuestion() {
    if (currentQuestionIndex < surveyDatabase.length - 1) {
        loadQuestion(currentQuestionIndex + 1);
    }
}

function prevQuestion() {
    if (currentQuestionIndex > 0) {
        loadQuestion(currentQuestionIndex - 1);
    }
}

// ================= LOGIKA NYAWA (STRIKES) =================
function triggerWrongAnswer() {
    const strike = document.getElementById('strike-container');
    strike.classList.remove('hidden');
    
    // Suara Tetot
    const ctx = new (window.AudioContext || window.webkitAudioContext)();
    const osc = ctx.createOscillator(); osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(150, ctx.currentTime); 
    osc.connect(ctx.destination);
    osc.start(); osc.stop(ctx.currentTime + 0.6);

    if (activeTeam === 'A') {
        strikes.A++;
        if (strikes.A <= 3) document.getElementById(`a-strike-${strikes.A}`).classList.add('active');
    } else if (activeTeam === 'B') {
        strikes.B++;
        if (strikes.B <= 3) document.getElementById(`b-strike-${strikes.B}`).classList.add('active');
    }

    setTimeout(() => { 
        strike.classList.add('hidden'); 
        activeTeam = null; 
        updateTeamUI(); 
    }, 1500);
}

function resetSemuaNyawa() {
    strikes.A = 0;
    strikes.B = 0;
    for(let i=1; i<=3; i++) {
        document.getElementById(`a-strike-${i}`).classList.remove('active');
        document.getElementById(`b-strike-${i}`).classList.remove('active');
    }
}

// ================= CEK JAWABAN & ANIMASI SURVEI =================
document.getElementById('operator-input').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') submitAnswer();
});

function submitAnswer() {
    const rawInput = document.getElementById('operator-input').value.toLowerCase().trim();
    const feedback = document.getElementById('operator-feedback');
    if(rawInput === "") return;

    const currentAnswers = surveyDatabase[currentQuestionIndex].answers;
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
        triggerReveal(foundIndex);
    } else {
        feedback.innerText = "TETOOOT! SALAH!"; feedback.style.color = "#e74c3c";
        triggerWrongAnswer();
    }
    document.getElementById('operator-input').value = '';
}

function triggerReveal(index) {
    const ansData = surveyDatabase[currentQuestionIndex].answers[index];
    if(ansData.revealed) return; 

    // Munculin Overlay Survei Membuktikan
    const overlay = document.getElementById('survei-overlay');
    overlay.classList.remove('hidden');

    // Jeda 2 Detik baru buka
    setTimeout(() => {
        overlay.classList.add('hidden');
        
        ansData.revealed = true;
        const slot = document.getElementById(`ans-slot-${index}`);
        slot.classList.remove('hidden-ans');
        slot.classList.add('revealed');

        if(activeTeam === 'A') scoreA += ansData.points;
        else if (activeTeam === 'B') scoreB += ansData.points;
        
        document.getElementById('scoreA').innerText = scoreA;
        document.getElementById('scoreB').innerText = scoreB;

        // Suara Ting!
        const ctx = new (window.AudioContext || window.webkitAudioContext)();
        const osc = ctx.createOscillator(); osc.type = 'sine';
        osc.frequency.setValueAtTime(800, ctx.currentTime);
        osc.connect(ctx.destination);
        osc.start(); osc.stop(ctx.currentTime + 0.2);

        activeTeam = null; 
        updateTeamUI(); 
    }, 2000); 
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

// Backup Keyboard di Laptop (Pencet Q atau P)
window.addEventListener('keydown', (e) => {
    if(e.target.tagName === 'INPUT') return; 
    if(e.key.toLowerCase() === 'q') triggerBuzzFromPhone('A');
    if(e.key.toLowerCase() === 'p') triggerBuzzFromPhone('B');
});
