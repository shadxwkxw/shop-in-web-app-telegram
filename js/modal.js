document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('modal');
    const closeButton = document.querySelector('.close-button');

    // Функция для открытия модального окна
    function openModal(imageSrc, title, description) {
        modal.querySelector('.modal-image').src = imageSrc;
        modal.querySelector('.modal-title').textContent = title;
        modal.querySelector('.modal-description').textContent = description;
        modal.style.display = 'block';
    }

    // Обработчик события для закрытия модального окна
    closeButton.addEventListener('click', () => {
    modal.style.display = 'none';
    });

    // Закрытие модального окна при клике вне его
    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });

    // Добавление обработчиков событий для всех изображений товаров
    const productImages = document.querySelectorAll('.product-image');

    productImages.forEach((image, index) => {
        image.addEventListener('click', () => {
            const title = `Товар ${index + 1}`;
            const description = `Описание товара ${index + 1}`; // Описание
            const imageSrc = image.src;

            openModal(imageSrc, title, description);
        });
    });
});
