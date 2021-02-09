"use strict";

var bagTrigger = document.getElementById('bag-trigger');
var bagCloseTrigger = document.getElementById('bag-close');
var bag = document.getElementById('bag-drawer');
var drawerOverlay = document.querySelector('.drawer-overlay');

if (drawerOverlay) {
  drawerOverlay.onclick = function () {
    bag.classList.remove('open');
    drawerOverlay.style.display = 'none';
  };
} // Drawer open


if (bagTrigger) {
  bagTrigger.onclick = function () {
    bag.classList.add('open');
    drawerOverlay.style.display = 'block';
  };
} // Drawer close


if (bagCloseTrigger) {
  bagCloseTrigger.onclick = function () {
    bag.classList.remove('open');
    drawerOverlay.style.display = 'none';
  };
}
"use strict";

var countModifiers = document.querySelectorAll('.count-modifier') || [];
countModifiers.forEach(function (modifier) {
  modifier.onclick = function () {
    return handleModifier(modifier);
  };
});

function modifyItem(line, quantity) {
  var formData = {
    line: line,
    quantity: quantity
  };
  return fetch('/cart/change.js', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(formData)
  }).then(function (response) {
    return response.json();
  })["catch"](function (error) {
    console.error('Error:', error);
  });
}

function handleModifier(modifier) {
  var _modifier$dataset = modifier.dataset,
      line = _modifier$dataset.line,
      itemQuantity = _modifier$dataset.itemQuantity,
      modifierType = _modifier$dataset.modifierType;
  var lineNumber = parseInt(line);
  var request = null;

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

  request.then(function (response) {
    updateTotalCount(response.item_count);
    updateSubTotal(response.items_subtotal_price);
    var item = response.items[lineNumber - 1];

    if (modifierType === 'delete') {
      deleteLine(line);
    } else {
      updateLineItem(line, item);
    }
  });
}

function updateLineItem(lineNumber, item) {
  var count = document.querySelector("#item-count-".concat(lineNumber));
  var minusModifier = document.querySelector("#item-minus-".concat(lineNumber));
  var plusModifier = document.querySelector("#item-plus-".concat(lineNumber));
  var deleteModifier = document.querySelector("#item-delete-".concat(lineNumber));
  var price = document.querySelector("#item-price-".concat(lineNumber));
  count.textContent = item.quantity;
  price.textContent = Shopify.formatMoney(item.final_line_price);
  count.setAttribute('data-item-quantity', item.quantity);
  minusModifier.setAttribute('data-item-quantity', item.quantity);
  plusModifier.setAttribute('data-item-quantity', item.quantity);
  deleteModifier.setAttribute('data-item-quantity', item.quantity);
}

function deleteLine(lineNumber) {
  var line = document.querySelector("#cart-item-".concat(lineNumber));
  line.remove();
}

function updateTotalCount(count) {
  var element = document.getElementById('cart-total-count');
  element.textContent = "(".concat(count, ")");
}

function updateSubTotal(subtotal) {
  var subtotalElements = document.getElementsByClassName('cart-items-subtotal');
  subtotalElements.forEach(function (element) {
    element.textContent = Shopify.formatMoney(subtotal);
  });
}
"use strict";

var drawerTrigger = document.getElementById('drawer-trigger');
var closeTrigger = document.getElementById('drawer-close');
var drawer = document.getElementById('drawer-menu'); // Drawer open

if (drawerTrigger) {
  drawerTrigger.onclick = function () {
    var scrollY = window.pageYOffset;
    drawer.classList.add('open');
    setTimeout(function () {
      document.body.style.position = 'fixed';
      document.body.style.top = "".concat(scrollY, "px");
    }, 400);
  };
} // Drawer close


if (closeTrigger) {
  closeTrigger.onclick = function () {
    var scrollY = document.body.style.top;
    drawer.classList.remove('open');
    document.body.style.position = '';
    document.body.style.top = '';
    window.scrollTo(0, parseInt(scrollY || '0'));
  };
}
"use strict";

window.addEventListener('scroll', handleHeaderScroll);
var lastScrollTop = 0;
var delta = 5;

function handleHeaderScroll() {
  var header = document.getElementById('header');
  var topOffset = window.pageYOffset;

  if (Math.abs(lastScrollTop - topOffset) <= delta) {
    return;
  }

  if (topOffset > lastScrollTop && topOffset > header.clientHeight) {
    // Scroll down
    header.style.top = "".concat(-header.clientHeight, "px");
  } else {
    if (topOffset < lastScrollTop) {
      // Scroll up
      header.style.position = 'fixed';
      header.style.top = 0;
    }
  }

  if (topOffset <= delta) {
    header.style.position = 'absolute';
  }

  lastScrollTop = topOffset;
}
"use strict";

var Shopify = Shopify || {}; // ---------------------------------------------------------------------------
// Money format handler
// ---------------------------------------------------------------------------

Shopify.money_format = "${{amount}}";

Shopify.formatMoney = function (cents, format) {
  if (typeof cents == 'string') {
    cents = cents.replace('.', '');
  }

  var value = '';
  var placeholderRegex = /\{\{\s*(\w+)\s*\}\}/;
  var formatString = format || this.money_format;

  function defaultOption(opt, def) {
    return typeof opt == 'undefined' ? def : opt;
  }

  function formatWithDelimiters(number, precision, thousands, decimal) {
    precision = defaultOption(precision, 2);
    thousands = defaultOption(thousands, ',');
    decimal = defaultOption(decimal, '.');

    if (isNaN(number) || number == null) {
      return 0;
    }

    number = (number / 100.0).toFixed(precision);
    var parts = number.split('.'),
        dollars = parts[0].replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1' + thousands),
        cents = parts[1] ? decimal + parts[1] : '';
    return dollars + cents;
  }

  switch (formatString.match(placeholderRegex)[1]) {
    case 'amount':
      value = formatWithDelimiters(cents, 2);
      break;

    case 'amount_no_decimals':
      value = formatWithDelimiters(cents, 0);
      break;

    case 'amount_with_comma_separator':
      value = formatWithDelimiters(cents, 2, '.', ',');
      break;

    case 'amount_no_decimals_with_comma_separator':
      value = formatWithDelimiters(cents, 0, '.', ',');
      break;
  }

  return formatString.replace(placeholderRegex, value);
};
"use strict";

document.addEventListener("DOMContentLoaded", adjustVideoPlayerSize);
window.addEventListener('resize', adjustVideoPlayerSize);

function adjustVideoPlayerSize() {
  var videoWrapper = document.querySelector('#video');
  var video = document.querySelector('#video_html5_api');
  var width = document.body.clientWidth;

  if (video) {
    video.style.width = "".concat(width, "px");
    video.style.height = "".concat(width / 16 * 9, "px");
  }

  if (videoWrapper) {
    videoWrapper.style.width = "".concat(width, "px");
    videoWrapper.style.height = "".concat(width / 16 * 9, "px");
  }
}