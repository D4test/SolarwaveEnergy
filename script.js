// Функціональність модального вікна
const modal = document.getElementById("consultationModal");
const openModalBtns = document.querySelectorAll(".openModalBtn");
const closeModalSpan = document.getElementsByClassName("close")[0];

// Відкриття модального вікна при кліку на будь-яку кнопку з класом "openModalBtn"
openModalBtns.forEach(button => {
    button.onclick = function() {
        modal.style.display = "block";
    }
});

// Закриття модального вікна при кліку на <span> (x)
closeModalSpan.onclick = function() {
    modal.style.display = "none";
}

// Закриття модального вікна при кліку поза його межами
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// Функціональність автоматичної прокрутки партнерів
const carousel = document.querySelector('.partners-carousel');

// Клонування елементів для безперервної прокрутки
carousel.innerHTML += carousel.innerHTML; // Клонуємо контент для циклічної прокрутки

// Розрахунок ширини всіх елементів
const items = carousel.querySelectorAll('.partner-item');
let totalWidth = 0;
items.forEach(item => {
    totalWidth += item.offsetWidth + 20; // 20px - відстань між елементами
});
carousel.style.width = `${totalWidth}px`;

// Прокрутка
let scrollAmount = 0;
const scrollSpeed = 0.1; // Швидкість прокрутки (чим більше, тим швидше)

function autoScroll() {
    scrollAmount += scrollSpeed;
    if (scrollAmount >= totalWidth / 2) {
        scrollAmount = 0; // Повертаємося на початок
    }
    carousel.style.transform = `translateX(-${scrollAmount}px)`;
    requestAnimationFrame(autoScroll);
}

autoScroll();


