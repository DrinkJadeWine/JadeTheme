import formatMoney from './shopify-money';
import { updateTotalCount, updateSubTotal, applyListeners, activateCart } from './bag';
import { openBagDrawer } from './bag-drawer';

const quantityPickers = document.querySelectorAll('.quantity-picker') || [];
const addToBagButton = document.getElementById('product-add-to-bag');

// Apply listeners
quantityPickers.forEach(picker => {
    picker.onclick = () => {
        onQuantityPickerClick(picker)
    }
});

if (addToBagButton) {
    addToBagButton.onclick = addItemsToBag;
}

function selectQuantityPicker(picker) {
    quantityPickers.forEach(picker => {
        picker.classList.remove('selected');
    });
    picker.classList.add('selected');
}

function onQuantityPickerClick(picker) {
    const { quantity, price } = picker.dataset;
    const productResultPrice = document.getElementById('product-result-price');

    selectQuantityPicker(picker);
    productResultPrice.textContent = formatMoney(parseFloat(price) * parseInt(quantity));

    if (addToBagButton) {
        addToBagButton.setAttribute('data-items-quantity', quantity);
    }
}

function addItemsAjax(data) {
    return fetch('/cart/add.js', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }).then(response => {
        return response.json();
    }).catch((error) => {
        console.error('Error:', error);
    });
}

function addItemsToBag() {
    const { productId, itemsQuantity } = addToBagButton.dataset;

    const data = {
        'items': [{
            'id': parseInt(productId),
            'quantity': parseInt(itemsQuantity)
        }]
    };

    addItemsAjax(data).then(() => updateBag())
}

function updateBag() {
    const bag = document.getElementById('bag-body');
    fetch('/cart.js')
        .then(response => response.json())
        .then(data => {
            const htmlItems = data.items.map((item, index) => {
                const itemIndex = index + 1;
                return `<div id="cart-item-${itemIndex}" class="drawer__item">
                    <div class="drawer__item-image">
                        <img src="${item.image}" alt="${item.title}" />
                    </div>
                    <div class="drawer__item-info">
                        <span>
                            ${item.title}
                        </span>
                        <span>
                            <span
                                id="item-minus-${itemIndex}"
                                class="count-modifier"
                                data-modifier-type="minus"
                                data-item-quantity="${item.quantity}"
                                data-line="${itemIndex}"
                            >
                            -
                            </span>
                            <span id="item-count-${itemIndex}">
                                ${item.quantity}
                            </span>
                            <span
                                id="item-plus-${itemIndex}"
                                class="count-modifier"
                                data-modifier-type="plus"
                                data-item-quantity="${item.quantity}"
                                data-line="${itemIndex}"
                            >
                                +
                            </span>
                            <span
                                id="item-delete-${itemIndex}"
                                class="count-modifier ml-1"
                                data-modifier-type="delete"
                                data-item-quantity="${item.quantity}"
                                data-line="${itemIndex}"
                            >
                                <svg width="11px" height="12px" viewBox="0 0 11 12" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                                    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round">
                                        <g transform="translate(-790.000000, -190.000000)" stroke="#FFFFFF">
                                            <g transform="translate(791.000000, 191.000000)">
                                                <polyline id="Path" points="0 2 1 2 9 2"></polyline>
                                                <path d="M8,2 L8,9 C8,9.55228475 7.55228475,10 7,10 L2,10 C1.44771525,10 1,9.55228475 1,9 L1,2 M2.5,2 L2.5,1 C2.5,0.44771525 2.94771525,0 3.5,0 L5.5,0 C6.05228475,0 6.5,0.44771525 6.5,1 L6.5,2" id="Shape"></path>
                                                <line x1="3.5" y1="4.5" x2="3.5" y2="7.5" id="Path"></line>
                                                <line x1="5.5" y1="4.5" x2="5.5" y2="7.5" id="Path"></line>
                                            </g>
                                        </g>
                                    </g>
                                </svg>
                            </span>
                        </span>
                    </div>
                    <div id="item-price-${itemIndex}" class="drawer__item-price">
                        <span>
                            ${formatMoney(item.line_price)}
                        </span>
                    </div>
                </div>`
            });

            bag.innerHTML = htmlItems.join('');

            updateTotalCount(data.item_count);
            updateSubTotal(data.total_price);
            activateCart();
            applyListeners();
            openBagDrawer();
        })
}