const images = [
    'images/cat-1.jpg',
    'images/cat-2.jpg',
    'images/cat-3.jpg',
    'images/cat-4.jpg',
    'images/cat-5.jpg',
    'images/cat-6.jpg',
    'images/cat-7.jpg',
    'images/cat-8.jpg',
    'images/cat-1.jpg',  // 重複前8張以達到16張
    'images/cat-2.jpg',
    'images/cat-3.jpg',
    'images/cat-4.jpg',
    'images/cat-5.jpg',
    'images/cat-6.jpg',
    'images/cat-7.jpg',
    'images/cat-8.jpg'
];

const cardContainer = document.getElementById('cardContainer');

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
