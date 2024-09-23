// Функция обновления корзины
function updateCart() {
    cartItemsContainer.innerHTML = '';
    totalPrice = 0;

    for (const productName in cart) {
        const product = cart[productName];
        const itemPrice = product.price * product.quantity;
        totalPrice += itemPrice;

        const cartItem = document.createElement('div');
        cartItem.classList.add('cart-item');
        cartItem.innerHTML = `
            <div class="cart-item-info">
                <img src="${product.image}" alt="${productName}" class="cart-item-image">
                <div class="cart-item-2">
                    <p class="cart-item-name">${productName}</p>
                    <p class="cart-item-price">${product.price} рублей</p>
                </div>
            </div>
            <p class="cart-item-quantity">Кол-во: ${product.quantity}</p>
        `;
        cartItemsContainer.appendChild(cartItem);
    }

    // Проверка наличия товаров в корзине
    if (totalPrice === 0) {
        totalPriceElement.textContent = 'Товары не добавлены';
    } else {
        totalPriceElement.textContent = `Общая стоимость: ${totalPrice} рублей`;
    }
    
}
