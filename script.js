// DOM Referansları
const welcomeScreen = document.getElementById("welcome-screen");
const rulesScreen = document.getElementById("rules-screen");
const modeSelection = document.getElementById("mode-selection");
const gameArea = document.getElementById("game-area");
const leaderboard = document.getElementById("leaderboard");
const hintElement = document.getElementById("hint");
const scoreElement = document.getElementById("score");
const finalScoreElement = document.getElementById("final-score");
const timeReport = document.getElementById("time-report");
const correctAnswersReport = document.getElementById("correct-answers-report");
const restartButton = document.getElementById("restart");

// Butonlar
const goToRulesButton = document.getElementById("go-to-rules");
const startGameButton = document.getElementById("start-game");
const backToWelcomeButton = document.getElementById("back-to-welcome");

// Oyun Durum Değişkenleri
let map;
let currentMode = null;
let currentIndex = 0;
let score = 0;
let correctAnswers = 0;
let attempts = 0;
let startTime;

// Sorular ve İpuçları
const hints = {
    easy: [
        { hint: "Şerbetli tatlısıyla ünlüdür.", secondHint: "Bu şehir 'Baklava'nın başkenti olarak bilinir.", city: "Gaziantep", location: [37.0662, 37.3833] },
        { hint: "Efsanevi köftesiyle tanınır.", secondHint: "Marmara Bölgesi'nde bir şehir.", city: "Tekirdağ", location: [40.9789, 27.5111] },
        { hint: "Kayısısıyla meşhurdur.", secondHint: "Doğu Anadolu'da bulunur.", city: "Malatya", location: [38.3555, 38.3095] },
        { hint: "Hamsisiyle ünlüdür.", secondHint: "Karadeniz kıyısındaki bir şehir.", city: "Trabzon", location: [41.003, 39.7178] },
        { hint: "Sucuğuyla meşhur.", secondHint: "İç Anadolu'daki bir şehir.", city: "Kayseri", location: [38.7312, 35.4787] },
        { hint: "Zeytinyağı ve Ayvalık tostu ile tanınır.", secondHint: "Ege Bölgesi'nde bir sahil şehri.", city: "Balıkesir", location: [39.6499, 27.8826] },
        { hint: "Döneriyle ünlüdür.", secondHint: "Türkiye'nin Başkenti.", city: "Ankara", location: [39.9208, 32.8541] }
    ],
    medium: [
        { hint: "Künefesiyle meşhurdur.", secondHint: "Akdeniz Bölgesi'ndeki bir şehir.", city: "Hatay", location: [36.2021, 36.1602] },
        { hint: "Meşhur etli ekmeğiyle bilinir.", secondHint: "İç Anadolu Bölgesi'nde bir şehir.", city: "Konya", location: [37.8746, 32.4932] },
        { hint: "Leblebisiyle ünlüdür.", secondHint: "Karadeniz'in iç kısmında bir şehir.", city: "Çorum", location: [40.5506, 34.9556] },
        { hint: "Meşhur cevizli sucuğu ile tanınır.", secondHint: "Ege'nin kapısı olarak bilinir.", city: "Afyonkarahisar", location: [38.7629, 30.5386] },
        { hint: "Tarhanası ile bilinir.", secondHint: "Ege Bölgesi'nin içinde bir şehir.", city: "Kütahya", location: [39.423, 29.983] },
        { hint: "Pide diyarıdır.", secondHint: "Orta Karadeniz Bölgesi'nde bulunur.", city: "Samsun", location: [41.2867, 36.33] },
        { hint: "Fırın sütlacı meşhurdur.", secondHint: "Çay üretimiyle tanınır.", city: "Rize", location: [41.0257, 40.517] }
    ],
    hard: [
        { hint: "İnciriyle meşhurdur.", secondHint: "Ege Bölgesi'ndeki bir şehir.", city: "Aydın", location: [37.845, 27.8396] },
        { hint: "Patlıcan kebabıyla ünlüdür.", secondHint: "Akdeniz'deki bir şehir.", city: "Adana", location: [37.001, 35.3213] },
        { hint: "Pekmezi ile meşhurdur.", secondHint: "Doğu Anadolu'daki bir şehir.", city: "Erzincan", location: [39.7464, 39.491] },
        { hint: "Tandır kebabı ile tanınır.", secondHint: "Batı Karadeniz Bölgesi'nde bir şehir.", city: "Kastamonu", location: [41.3781, 33.7753] },
        { hint: "Tuzlu yoğurdu ile meşhur.", secondHint: "Iğdır'ın komşusu bir şehir.", city: "Kars", location: [40.6013, 43.0945] },
        { hint: "Ünlü katmeriyle bilinir.", secondHint: "Suriye sınırındaki bir şehir.", city: "Kilis", location: [36.7184, 37.1147] },
        { hint: "Hurma tatlısıyla bilinir.", secondHint: "Batı Anadolu'daki bir şehir.", city: "Manisa", location: [38.6191, 27.4289] }
    ]
};

// Ekran Yönetimi
function hideAllScreens() {
    welcomeScreen.classList.add("hidden");
    rulesScreen.classList.add("hidden");
    modeSelection.classList.add("hidden");
    gameArea.classList.add("hidden");
    leaderboard.classList.add("hidden");
}

function showWelcomeScreen() {
    hideAllScreens();
    welcomeScreen.classList.remove("hidden");
}

function showRulesScreen() {
    hideAllScreens();
    rulesScreen.classList.remove("hidden");
}

function showModeSelection() {
    hideAllScreens();
    modeSelection.classList.remove("hidden");
}

function showGameArea() {
    hideAllScreens();
    gameArea.classList.remove("hidden");
}

function showLeaderboard() {
    hideAllScreens();
    leaderboard.classList.remove("hidden");

    // Toplam süre ve skor bilgisi gösteriliyor
    const totalTime = ((Date.now() - startTime) / 1000).toFixed(2); // Süre saniye cinsinden
    finalScoreElement.textContent = `Toplam Puan: ${score}`;
    timeReport.textContent = `Geçen Süre: ${totalTime} saniye`;
    correctAnswersReport.textContent = `Doğru Cevap Sayısı: ${correctAnswers}`;
}

// Haritayı Başlat
function initializeMap() {
    if (map) {
        map.off();
        map.remove();
    }
    map = L.map("map").setView([39.92077, 32.85411], 6);
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);
    map.on("click", onMapClick);
}

// Soruları Yükle
function loadQuestion() {
    attempts = 0;
    const question = hints[currentMode][currentIndex];
    hintElement.textContent = question.hint;
    scoreElement.textContent = `Puan: ${score}`;
}

// Haritaya Tıklama İşlemi
function onMapClick(e) {
    const clickedLatLng = e.latlng;
    const question = hints[currentMode][currentIndex];
    const correctLocation = L.latLng(question.location);
    const distance = clickedLatLng.distanceTo(correctLocation);

    if (distance < 50000) {
        score += attempts === 0 ? 10 : 5;
        correctAnswers++;
        displayFeedback(true, correctLocation);
        nextQuestion();
    } else {
        attempts++;
        if (attempts === 1) {
            hintElement.textContent = question.secondHint;
            displayFeedback(false, clickedLatLng);
        } else {
            displayCorrectCity(question);
            nextQuestion();
        }
    }
}

// Animasyonları Göster
function displayFeedback(isCorrect, location) {
    const color = isCorrect ? "green" : "red";
    const circle = L.circle(location, {
        color: color,
        fillColor: color,
        fillOpacity: 0.5,
        radius: 20000
    }).addTo(map);

    setTimeout(() => {
        map.removeLayer(circle);
    }, 1500);
}

// Doğru Şehri Göster
function displayCorrectCity(question) {
    const circle = L.circle(question.location, {
        color: "blue",
        fillColor: "blue",
        fillOpacity: 0.5,
        radius: 30000
    }).addTo(map);
}

// Sonraki Soru
function nextQuestion() {
    currentIndex++;
    if (currentIndex < hints[currentMode].length) {
        setTimeout(loadQuestion, 2000);
    } else {
        setTimeout(endGame, 2000);
    }
}

// Oyunu Bitir
function endGame() {
    showLeaderboard(); // Liderlik tablosu ekranını göster
}

// Event Listeners
goToRulesButton.addEventListener("click", showRulesScreen);
startGameButton.addEventListener("click", showModeSelection);
backToWelcomeButton.addEventListener("click", showWelcomeScreen);

document.querySelectorAll(".mode-button").forEach(button => {
    button.addEventListener("click", (e) => {
        currentMode = e.target.dataset.mode;
        startGame();
    });
});

restartButton.addEventListener("click", showModeSelection); // Yeniden Başla Butonu

// Oyunu Başlat
function startGame() {
    currentIndex = 0;
    score = 0;
    correctAnswers = 0;
    attempts = 0;
    startTime = Date.now();
    showGameArea();
    initializeMap();
    loadQuestion();
}

// Oyuna Başlangıç
showWelcomeScreen();
