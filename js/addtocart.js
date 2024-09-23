// Функция добавления товара в корзину
function addToCart(product) {
    const productName = product.querySelector('.product-name').textContent;
    const productPrice = parseFloat(product.querySelector('.product-price').textContent.replace(' рублей', ''));
    const quantityElement = product.querySelector('.quantity'); // Получаем элемент для отображения количества

    if (cart[productName]) {
        cart[productName].quantity++;
    } else {
        cart[productName] = {
            price: productPrice,
            quantity: 1,
            image: product.querySelector('.product-image').src
        };
    }

    quantityElement.textContent = cart[productName].quantity; // Обновляем количество
    updateCart();
}