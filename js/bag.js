const countModifiers = document.querySelectorAll('.count-modifier') || [];

countModifiers.forEach(modifier => {
    modifier.onclick = () => handleModifier(modifier)
})

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
    const { line, itemQuantity, modifierType } = modifier.dataset;
    const lineNumber = parseInt(line);
    let request = null;

    switch (modifierType) {
        case 'minus':
            request = modifyItem(lineNumber, parseInt(itemQuantity) - 1);
            break;
        case 'plus':
            request = modifyItem(lineNumber, parseInt(itemQuantity) + 1);
            break;
        case 'delete':
            request = modifyItem(lineNumber, 0);
            break;
    }

    request.then(response => {
        updateTotalCount(response.item_count);
        updateSubTotal(response.items_subtotal_price);
        const item = response.items[lineNumber - 1];

        if (modifierType === 'delete') {
            deleteLine(line)
        } else {
            updateLineItem(line, item);
        }
    })
}

function updateLineItem(lineNumber, item) {
    const count = document.querySelector(`#item-count-${lineNumber}`);
    const minusModifier = document.querySelector(`#item-minus-${lineNumber}`);
    const plusModifier = document.querySelector(`#item-plus-${lineNumber}`);
    const deleteModifier = document.querySelector(`#item-delete-${lineNumber}`);
    const price = document.querySelector(`#item-price-${lineNumber}`);

    count.textContent = item.quantity;
    price.textContent = Shopify.formatMoney(item.final_line_price);
    count.setAttribute('data-item-quantity', item.quantity);
    minusModifier.setAttribute('data-item-quantity', item.quantity);
    plusModifier.setAttribute('data-item-quantity', item.quantity);
    deleteModifier.setAttribute('data-item-quantity', item.quantity);
}

function deleteLine(lineNumber) {
    const line = document.querySelector(`#cart-item-${lineNumber}`);
    line.remove();
}

function updateTotalCount(count) {
    const element = document.getElementById('cart-total-count');
    element.textContent = `(${count})`;
}

function updateSubTotal(subtotal) {
    const subtotalElements = document.getElementsByClassName('cart-items-subtotal');

    subtotalElements.forEach(element => {
        element.textContent = Shopify.formatMoney(subtotal);
    })
}