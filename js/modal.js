document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('modal');
    const closeButton = document.querySelector('.close-button');

    // Функция для открытия модального окна
    function openModal(imageSrc, title, description) {
        modal.querySelector('.modal-image').src = imageSrc;
        modal.querySelector('.modal-title').textContent = title;
        modal.querySelector('.modal-description').textContent = description;

        modal.style.display = 'flex';
        setTimeout(() => {
            modal.classList.add('show');
        }, 10);
    }

    // Обработчик события для закрытия модального окна
    closeButton.addEventListener('click', () => {
        modal.classList.remove('show'); 
        setTimeout(() => {
            modal.style.display = 'none';
        }, 300);
    });

    // Закрытие модального окна при клике вне его
    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.classList.remove('show');
            setTimeout(() => {
                modal.style.display = 'none';
            }, 300);
        }
    });

    // Добавление обработчиков событий для всех изображений товаров
    const productImages = document.querySelectorAll('.product-image');

    productImages.forEach((image, index) => {
        image.addEventListener('click', () => {
            const title = image.getAttribute('data-title');
            const description = image.getAttribute('data-description'); // Описание
            const imageSrc = image.src;

            openModal(imageSrc, title, description);
        });
    });
});
