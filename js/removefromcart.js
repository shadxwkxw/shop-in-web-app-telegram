// Функция удаления товара из корзины
function removeFromCart(product) {
    const productName = product.querySelector('.product-name').textContent;
    const quantityElement = product.querySelector('.quantity'); // Получаем элемент для отображения количества

    if (cart[productName]) {
        cart[productName].quantity--;

        if (cart[productName].quantity <= 0) {
            delete cart[productName];
        }
    }

    quantityElement.textContent = cart[productName] ? cart[productName].quantity : 0; // Обновляем количество
    updateCart();
}