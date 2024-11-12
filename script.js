const images = [
    'images/cat-1.jpg',
    'images/cat-2.jpg',
    'images/cat-3.jpg',
    'images/cat-4.jpg',
    'images/cat-5.jpg',
    'images/cat-6.jpg',
    'images/cat-7.jpg',
    'images/cat-8.jpg',
    'images/cat-1.jpg',  
    'images/cat-2.jpg',
    'images/cat-3.jpg',
    'images/cat-4.jpg',
    'images/cat-5.jpg',
    'images/cat-6.jpg',
    'images/cat-7.jpg',
    'images/cat-8.jpg'
];

let countdownInterval; // 倒數計時的變數
let timeLeft; // 倒數的時間

// 隨機打亂陣列的函數
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function createCards() {
    const cardContainer = document.getElementById('cardContainer');
    cardContainer.innerHTML = ''; // 清空現有的卡片
    shuffle(images); // 打亂圖片陣列

    images.forEach((image, index) => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.onclick = () => card.classList.toggle('flipped');

        card.innerHTML = `
            <div class="card-inner">
                <div class="card-front">
                    <img src="${image}" alt="Front ${index + 1}">
                </div>
                <div class="card-back">
                    <img src="images/cat-0.jpg" alt="Back">
                </div>
            </div>
        `;

        cardContainer.appendChild(card);
    });
}

// 倒數計時函數
function startCountdown() {
    timeLeft = 10;
    const countdownElement = document.getElementById('countdown');

    // 所有卡片翻到背面
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.classList.add('flipped');
    });

    countdownElement.textContent = timeLeft; // 重置顯示的時間

    countdownInterval = setInterval(() => {
        timeLeft--;
        countdownElement.textContent = timeLeft;

        if (timeLeft < 1) {
            clearInterval(countdownInterval);
            // 自動翻轉所有卡片
            cards.forEach(card => {
                card.classList.remove('flipped');
            });
        }
    }, 1000);
}

// 開始遊戲按鈕功能
document.getElementById('startGame').onclick = () => {
    if (countdownInterval) {
        clearInterval(countdownInterval); // 停止之前的倒數計時
    }
    createCards(); // 重新創建卡片
    startCountdown(); // 開始新的倒數計時
};

// 顯示正面按鈕功能
document.getElementById('showFront').onclick = () => {
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.classList.remove('flipped');
    });
};

// 顯示背面按鈕功能
document.getElementById('showBack').onclick = () => {
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.classList.add('flipped');
    });
};
