// Массив градиентов
const gradients = [
    'linear-gradient(140deg, #ffeb3b, #ff9800, #f44336)', // Желтый, оранжевый, красный
    'linear-gradient(60deg, #ffeb3b, #f49800, #ff4336)',
    'linear-gradient(200deg, #eeeb3b, #f49800, #ee4336)'
];

// Функция для выбора случайного градиента
function getRandomGradient() {
    const randomIndex = Math.floor(Math.random() * gradients.length);
    return gradients[randomIndex];
}

// Применение случайного градиента к фону страницы
document.body.style.backgroundImage = getRandomGradient();