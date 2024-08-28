document.addEventListener('DOMContentLoaded', function() {
    setTimeout(function() {
        // Получаем все элементы с классом 'logo'
        const logos = document.querySelectorAll('.logo');

        // Функция для загрузки изображения и установки его в качестве источника
        function loadImage(url) {
            return fetch(url)
                .then(response => response.blob())
                .then(blob => URL.createObjectURL(blob));
        }
        // Ссылка на изображение
        const imageUrl = 'https://cdn.discordapp.com/avatars/1261251971315404812/285485f3cab67f5cf819bd35198e50ff.png?size=512'
        // Загрузка изображения и установка его в качестве источника
        loadImage(imageUrl).then(blobUrl => {
            logos.forEach(function(logo) {
                logo.src = blobUrl; // Устанавливаем новый src
                logo.style.opacity = 1;
            });
        }).catch(error => {
            console.error('Ошибка загрузки изображения:', error);
        });
    }, 1000);
});


/*
document.addEventListener('DOMContentLoaded', function() {
    setTimeout(function() {
        // Получаем все элементы с классом 'logo'
        const logos = document.querySelectorAll('.logo');

        // Обновляем стили и src для каждого элемента
        logos.forEach(function(logo) {
            logo.src = 'https://cdn.discordapp.com/avatars/1261251971315404812/285485f3cab67f5cf819bd35198e50ff.png?size=512'; // Устанавливаем новый src
            logo.style.opacity = 1;
        });
    }, 500);
});
*/