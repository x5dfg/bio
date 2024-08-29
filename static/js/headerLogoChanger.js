document.addEventListener('DOMContentLoaded', function() {
    setTimeout(function() {
        // Получаем все элементы с классом 'logo'
        const logos = document.querySelectorAll('.logo');
        const favicon = document.querySelector('link[rel="shortcut icon"]');

        // Функция для загрузки изображения и установки его в качестве источника
        function loadImage(url) {
            return fetch(url)
                .then(response => response.blob())
                .then(blob => URL.createObjectURL(blob));
        }

        // Функция для получения avatar_url из GitHub API
        function fetchAvatarUrl() {
            return fetch('https://api.github.com/users/x5dfg')
                .then(response => response.json())
                .then(data => data.avatar_url);
        }

        // Получаем URL аватара и загружаем изображение
        fetchAvatarUrl().then(imageUrl => {
            loadImage(imageUrl).then(blobUrl => {
                logos.forEach(function(logo) {
                    logo.src = blobUrl; // Устанавливаем новый src для логотипов
                    logo.style.opacity = 1;
                });

                if (favicon) {
                    favicon.href = blobUrl; // Устанавливаем новый src для favicon
                }
            }).catch(error => {
                console.error('Ошибка загрузки изображения:', error);
            });
        }).catch(error => {
            console.error('Ошибка получения URL аватара:', error);
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
