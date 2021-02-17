import formatMoney from './shopify-money';

export function applyListeners() {
    const countModifiers = document.querySelectorAll('.count-modifier') || [];
    countModifiers.forEach(modifier => {
        modifier.onclick = () => handleModifier(modifier)
    })
}

applyListeners()

function modifyItem(line, quantity) {
    const formData = {
        line,
        quantity
    };

    return fetch('/cart/change.js', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    })
        .then(response => {
            return response.json();
        })
        .catch((error) => {
            console.error('Error:', error);
        });
}

function handleModifier(modifier) {
    const { line, itemQuantity, modifierType, productId } = modifier.dataset;
    const lineNumber = parseInt(line);
    const quantity = parseInt(itemQuantity)
    let request = null;
    const shouldRemoveLine = modifierType === 'delete' || (modifierType === 'minus' && quantity === 1);

    switch (modifierType) {
        case 'minus':
            request = modifyItem(lineNumber, quantity - 1);
            break;
        case 'plus':
            request = modifyItem(lineNumber, quantity + 1);
            break;
        case 'delete':
            request = modifyItem(lineNumber, 0);
            break;
    }

    request.then(response => {
        updateTotalCount(response.item_count);
        updateSubTotal(response.items_subtotal_price);

        if (response.item_count === 0) {
            disableCart()
        }

        const item = response.items[lineNumber - 1];

        if (shouldRemoveLine) {
            deleteLine(productId)
        } else {
            updateLineItem(productId, item);
        }

        updateLines();
    })
}

function updateLineItem(productId, item) {
    const count = document.querySelector(`.bag-item-quantity[data-product-id="${productId}"]`);
    const minusModifier = document.querySelector(`.count-modifier.minus[data-product-id="${productId}"]`);
    const plusModifier = document.querySelector(`.count-modifier.plus[data-product-id="${productId}"]`);
    const deleteModifier = document.querySelector(`.count-modifier.delete[data-product-id="${productId}"]`);
    const price = document.querySelector(`.item-price[data-product-id="${productId}"]`);

    count.textContent = item.quantity;
    price.textContent = formatMoney(item.final_line_price);
    count.setAttribute('data-item-quantity', item.quantity);
    minusModifier.setAttribute('data-item-quantity', item.quantity);
    plusModifier.setAttribute('data-item-quantity', item.quantity);
    deleteModifier.setAttribute('data-item-quantity', item.quantity);
}

function deleteLine(productId) {
    console.log(productId)
    const line = document.querySelector(`.cart-item[data-product-id="${productId}"]`);
    line.remove();
}

export function updateTotalCount(count) {
    const element = document.getElementById('cart-total-count');
    element.textContent = `(${count})`;
}

export function updateSubTotal(subtotal) {
    const subtotalElements = document.querySelectorAll('.cart-items-subtotal');

    subtotalElements.forEach(element => {
        element.textContent = formatMoney(subtotal);
    })
}

function toggleCartState(state) {
    const cartSubTotal = document.querySelector('.cart-subtotal');
    const emptyCartText = document.querySelector('.empty-cart-text');
    const checkoutButton = document.querySelector('#drawer-checkout-button');

    if (state === 'active') {
        cartSubTotal.classList.remove('hidden');
        emptyCartText.classList.add('hidden');
        checkoutButton.classList.remove('disabled');
    } else if (state === 'disable') {
        cartSubTotal.classList.add('hidden');
        emptyCartText.classList.remove('hidden');
        checkoutButton.classList.add('disabled');
    }
}

function updateLines() {
    const items = document.querySelectorAll('.cart-item');

    items.forEach((item, index) => {
        const countModifiers = item.querySelectorAll('.count-modifier');

        countModifiers.forEach(modifier => {
            modifier.setAttribute('data-line', index + 1)
        });
    });
}

export const activateCart = () => toggleCartState('active');
export const disableCart = () => toggleCartState('disable');