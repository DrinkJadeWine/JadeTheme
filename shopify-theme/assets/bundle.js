/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/bag-drawer.js":
/*!**************************!*\
  !*** ./js/bag-drawer.js ***!
  \**************************/
/*! exports provided: openBagDrawer, closeBagDrawer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"openBagDrawer\", function() { return openBagDrawer; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"closeBagDrawer\", function() { return closeBagDrawer; });\nvar drawerOverlay = document.querySelector('.drawer-overlay');\nvar bagTriggers = document.querySelectorAll('.bag-trigger') || [];\nvar bagCloseTrigger = document.getElementById('bag-close');\n\nif (drawerOverlay) {\n  drawerOverlay.onclick = closeBagDrawer;\n} // Drawer open\n\n\nbagTriggers.forEach(function (trigger) {\n  console.log('WTF?');\n  trigger.onclick = openBagDrawer;\n}); // Drawer close\n\nif (bagCloseTrigger) {\n  bagCloseTrigger.onclick = closeBagDrawer;\n}\n\nfunction openBagDrawer() {\n  var bag = document.getElementById('bag-drawer');\n\n  if (bag) {\n    bag.classList.add('open');\n    drawerOverlay.style.display = 'block';\n  }\n}\nfunction closeBagDrawer() {\n  var bag = document.getElementById('bag-drawer');\n\n  if (bag) {\n    bag.classList.remove('open');\n    drawerOverlay.style.display = 'none';\n  }\n}\n\n//# sourceURL=webpack:///./js/bag-drawer.js?");

/***/ }),

/***/ "./js/bag.js":
/*!*******************!*\
  !*** ./js/bag.js ***!
  \*******************/
/*! exports provided: applyListeners, updateTotalCount, updateSubTotal, activateCart, disableCart */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"applyListeners\", function() { return applyListeners; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"updateTotalCount\", function() { return updateTotalCount; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"updateSubTotal\", function() { return updateSubTotal; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"activateCart\", function() { return activateCart; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"disableCart\", function() { return disableCart; });\n/* harmony import */ var _shopify_money__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shopify-money */ \"./js/shopify-money.js\");\n\nfunction applyListeners() {\n  var countModifiers = document.querySelectorAll('.count-modifier') || [];\n  countModifiers.forEach(function (modifier) {\n    modifier.onclick = function () {\n      return handleModifier(modifier);\n    };\n  });\n}\napplyListeners();\n\nfunction modifyItem(line, quantity) {\n  var formData = {\n    line: line,\n    quantity: quantity\n  };\n  return fetch('/cart/change.js', {\n    method: 'POST',\n    headers: {\n      'Content-Type': 'application/json'\n    },\n    body: JSON.stringify(formData)\n  }).then(function (response) {\n    return response.json();\n  })[\"catch\"](function (error) {\n    console.error('Error:', error);\n  });\n}\n\nfunction handleModifier(modifier) {\n  var _modifier$dataset = modifier.dataset,\n      line = _modifier$dataset.line,\n      itemQuantity = _modifier$dataset.itemQuantity,\n      modifierType = _modifier$dataset.modifierType;\n  var lineNumber = parseInt(line);\n  var quantity = parseInt(itemQuantity);\n  var request = null;\n  var shouldRemoveLine = modifierType === 'delete' || modifierType === 'minus' && quantity === 1;\n\n  switch (modifierType) {\n    case 'minus':\n      request = modifyItem(lineNumber, quantity - 1);\n      break;\n\n    case 'plus':\n      request = modifyItem(lineNumber, quantity + 1);\n      break;\n\n    case 'delete':\n      request = modifyItem(lineNumber, 0);\n      break;\n  }\n\n  request.then(function (response) {\n    updateTotalCount(response.item_count);\n    updateSubTotal(response.items_subtotal_price);\n\n    if (response.item_count === 0) {\n      disableCart();\n    }\n\n    var item = response.items[lineNumber - 1];\n\n    if (shouldRemoveLine) {\n      deleteLine(line);\n    } else {\n      updateLineItem(line, item);\n    }\n  });\n}\n\nfunction updateLineItem(lineNumber, item) {\n  var count = document.querySelector(\"#item-count-\".concat(lineNumber));\n  var minusModifier = document.querySelector(\"#item-minus-\".concat(lineNumber));\n  var plusModifier = document.querySelector(\"#item-plus-\".concat(lineNumber));\n  var deleteModifier = document.querySelector(\"#item-delete-\".concat(lineNumber));\n  var price = document.querySelector(\"#item-price-\".concat(lineNumber));\n  count.textContent = item.quantity;\n  price.textContent = Object(_shopify_money__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(item.final_line_price);\n  count.setAttribute('data-item-quantity', item.quantity);\n  minusModifier.setAttribute('data-item-quantity', item.quantity);\n  plusModifier.setAttribute('data-item-quantity', item.quantity);\n  deleteModifier.setAttribute('data-item-quantity', item.quantity);\n}\n\nfunction deleteLine(lineNumber) {\n  var line = document.querySelector(\"#cart-item-\".concat(lineNumber));\n  line.remove();\n}\n\nfunction updateTotalCount(count) {\n  var element = document.getElementById('cart-total-count');\n  element.textContent = \"(\".concat(count, \")\");\n}\nfunction updateSubTotal(subtotal) {\n  var subtotalElements = document.querySelectorAll('.cart-items-subtotal');\n  subtotalElements.forEach(function (element) {\n    element.textContent = Object(_shopify_money__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(subtotal);\n  });\n}\n\nfunction toggleCartState(state) {\n  var cartSubTotal = document.querySelector('.cart-subtotal');\n  var emptyCartText = document.querySelector('.empty-cart-text');\n  var checkoutButton = document.querySelector('#drawer-checkout-button');\n\n  if (state === 'active') {\n    cartSubTotal.classList.remove('hidden');\n    emptyCartText.classList.add('hidden');\n    checkoutButton.classList.remove('disabled');\n  } else if (state === 'disable') {\n    cartSubTotal.classList.add('hidden');\n    emptyCartText.classList.remove('hidden');\n    checkoutButton.classList.add('disabled');\n  }\n}\n\nvar activateCart = function activateCart() {\n  return toggleCartState('active');\n};\nvar disableCart = function disableCart() {\n  return toggleCartState('disable');\n};\n\n//# sourceURL=webpack:///./js/bag.js?");

/***/ }),

/***/ "./js/drawer-menu.js":
/*!***************************!*\
  !*** ./js/drawer-menu.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var drawerTrigger = document.getElementById('drawer-trigger');\nvar closeTrigger = document.getElementById('drawer-close');\nvar drawer = document.getElementById('drawer-menu'); // Drawer open\n\nif (drawerTrigger) {\n  drawerTrigger.onclick = function () {\n    var scrollY = window.pageYOffset;\n    drawer.classList.add('open');\n    setTimeout(function () {\n      document.body.style.position = 'fixed';\n      document.body.style.top = \"\".concat(scrollY, \"px\");\n    }, 400);\n  };\n} // Drawer close\n\n\nif (closeTrigger) {\n  closeTrigger.onclick = function () {\n    var scrollY = document.body.style.top;\n    drawer.classList.remove('open');\n    document.body.style.position = '';\n    document.body.style.top = '';\n    window.scrollTo(0, parseInt(scrollY || '0'));\n  };\n}\n\n//# sourceURL=webpack:///./js/drawer-menu.js?");

/***/ }),

/***/ "./js/header.js":
/*!**********************!*\
  !*** ./js/header.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("window.addEventListener('scroll', handleHeaderScroll);\nvar lastScrollTop = 0;\nvar delta = 5;\n\nfunction handleHeaderScroll() {\n  var header = document.querySelector('header .floating');\n  var topOffset = window.pageYOffset;\n\n  if (Math.abs(lastScrollTop - topOffset) <= delta) {\n    return;\n  }\n\n  if (topOffset > lastScrollTop && topOffset > header.clientHeight) {\n    // Scroll down\n    header.style.top = \"\".concat(-header.clientHeight, \"px\");\n  } else {\n    if (topOffset < lastScrollTop) {\n      // Scroll up\n      header.style.opacity = 1;\n      header.style.position = 'fixed';\n      header.style.top = 0;\n    }\n\n    if (topOffset <= header.clientHeight) {\n      header.style.opacity = 0;\n    }\n  }\n\n  if (topOffset <= delta) {\n    header.style.position = 'absolute';\n  }\n\n  lastScrollTop = topOffset;\n}\n\n//# sourceURL=webpack:///./js/header.js?");

/***/ }),

/***/ "./js/product.js":
/*!***********************!*\
  !*** ./js/product.js ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _shopify_money__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shopify-money */ \"./js/shopify-money.js\");\n/* harmony import */ var _bag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bag */ \"./js/bag.js\");\n/* harmony import */ var _bag_drawer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bag-drawer */ \"./js/bag-drawer.js\");\n\n\n\nvar quantityPickers = document.querySelectorAll('.quantity-picker') || [];\nvar addToBagButton = document.getElementById('product-add-to-bag'); // Apply listeners\n\nquantityPickers.forEach(function (picker) {\n  picker.onclick = function () {\n    onQuantityPickerClick(picker);\n  };\n});\n\nif (addToBagButton) {\n  addToBagButton.onclick = addItemsToBag;\n}\n\nfunction selectQuantityPicker(picker) {\n  quantityPickers.forEach(function (picker) {\n    picker.classList.remove('selected');\n  });\n  picker.classList.add('selected');\n}\n\nfunction onQuantityPickerClick(picker) {\n  var _picker$dataset = picker.dataset,\n      quantity = _picker$dataset.quantity,\n      price = _picker$dataset.price;\n  var productResultPrice = document.getElementById('product-result-price');\n  selectQuantityPicker(picker);\n  productResultPrice.textContent = Object(_shopify_money__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(parseFloat(price) * parseInt(quantity));\n\n  if (addToBagButton) {\n    addToBagButton.setAttribute('data-items-quantity', quantity);\n  }\n}\n\nfunction addItemsAjax(data) {\n  return fetch('/cart/add.js', {\n    method: 'POST',\n    headers: {\n      'Content-Type': 'application/json'\n    },\n    body: JSON.stringify(data)\n  }).then(function (response) {\n    return response.json();\n  })[\"catch\"](function (error) {\n    console.error('Error:', error);\n  });\n}\n\nfunction addItemsToBag() {\n  var _addToBagButton$datas = addToBagButton.dataset,\n      productId = _addToBagButton$datas.productId,\n      itemsQuantity = _addToBagButton$datas.itemsQuantity;\n  var data = {\n    'items': [{\n      'id': parseInt(productId),\n      'quantity': parseInt(itemsQuantity)\n    }]\n  };\n  addItemsAjax(data).then(function () {\n    return updateBag();\n  });\n}\n\nfunction updateBag() {\n  var bag = document.getElementById('bag-body');\n  fetch('/cart.js').then(function (response) {\n    return response.json();\n  }).then(function (data) {\n    var htmlItems = data.items.map(function (item, index) {\n      var itemIndex = index + 1;\n      return \"<div id=\\\"cart-item-\".concat(itemIndex, \"\\\" class=\\\"drawer__item\\\">\\n                    <div class=\\\"drawer__item-image\\\">\\n                        <img src=\\\"\").concat(item.image, \"\\\" alt=\\\"\").concat(item.title, \"\\\" />\\n                    </div>\\n                    <div class=\\\"drawer__item-info\\\">\\n                        <span>\\n                            \").concat(item.title, \"\\n                        </span>\\n                        <span>\\n                            <span\\n                                id=\\\"item-minus-\").concat(itemIndex, \"\\\"\\n                                class=\\\"count-modifier\\\"\\n                                data-modifier-type=\\\"minus\\\"\\n                                data-item-quantity=\\\"\").concat(item.quantity, \"\\\"\\n                                data-line=\\\"\").concat(itemIndex, \"\\\"\\n                            >\\n                            -\\n                            </span>\\n                            <span id=\\\"item-count-\").concat(itemIndex, \"\\\">\\n                                \").concat(item.quantity, \"\\n                            </span>\\n                            <span\\n                                id=\\\"item-plus-\").concat(itemIndex, \"\\\"\\n                                class=\\\"count-modifier\\\"\\n                                data-modifier-type=\\\"plus\\\"\\n                                data-item-quantity=\\\"\").concat(item.quantity, \"\\\"\\n                                data-line=\\\"\").concat(itemIndex, \"\\\"\\n                            >\\n                                +\\n                            </span>\\n                            <span\\n                                id=\\\"item-delete-\").concat(itemIndex, \"\\\"\\n                                class=\\\"count-modifier ml-1\\\"\\n                                data-modifier-type=\\\"delete\\\"\\n                                data-item-quantity=\\\"\").concat(item.quantity, \"\\\"\\n                                data-line=\\\"\").concat(itemIndex, \"\\\"\\n                            >\\n                                <svg width=\\\"11px\\\" height=\\\"12px\\\" viewBox=\\\"0 0 11 12\\\" version=\\\"1.1\\\" xmlns=\\\"http://www.w3.org/2000/svg\\\" xmlns:xlink=\\\"http://www.w3.org/1999/xlink\\\">\\n                                    <g stroke=\\\"none\\\" stroke-width=\\\"1\\\" fill=\\\"none\\\" fill-rule=\\\"evenodd\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\">\\n                                        <g transform=\\\"translate(-790.000000, -190.000000)\\\" stroke=\\\"#FFFFFF\\\">\\n                                            <g transform=\\\"translate(791.000000, 191.000000)\\\">\\n                                                <polyline id=\\\"Path\\\" points=\\\"0 2 1 2 9 2\\\"></polyline>\\n                                                <path d=\\\"M8,2 L8,9 C8,9.55228475 7.55228475,10 7,10 L2,10 C1.44771525,10 1,9.55228475 1,9 L1,2 M2.5,2 L2.5,1 C2.5,0.44771525 2.94771525,0 3.5,0 L5.5,0 C6.05228475,0 6.5,0.44771525 6.5,1 L6.5,2\\\" id=\\\"Shape\\\"></path>\\n                                                <line x1=\\\"3.5\\\" y1=\\\"4.5\\\" x2=\\\"3.5\\\" y2=\\\"7.5\\\" id=\\\"Path\\\"></line>\\n                                                <line x1=\\\"5.5\\\" y1=\\\"4.5\\\" x2=\\\"5.5\\\" y2=\\\"7.5\\\" id=\\\"Path\\\"></line>\\n                                            </g>\\n                                        </g>\\n                                    </g>\\n                                </svg>\\n                            </span>\\n                        </span>\\n                    </div>\\n                    <div id=\\\"item-price-\").concat(itemIndex, \"\\\" class=\\\"drawer__item-price\\\">\\n                        <span>\\n                            \").concat(Object(_shopify_money__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(item.line_price), \"\\n                        </span>\\n                    </div>\\n                </div>\");\n    });\n    bag.innerHTML = htmlItems.join('');\n    Object(_bag__WEBPACK_IMPORTED_MODULE_1__[\"updateTotalCount\"])(data.item_count);\n    Object(_bag__WEBPACK_IMPORTED_MODULE_1__[\"updateSubTotal\"])(data.total_price);\n    Object(_bag__WEBPACK_IMPORTED_MODULE_1__[\"activateCart\"])();\n    Object(_bag__WEBPACK_IMPORTED_MODULE_1__[\"applyListeners\"])();\n    Object(_bag_drawer__WEBPACK_IMPORTED_MODULE_2__[\"openBagDrawer\"])();\n  });\n}\n\n//# sourceURL=webpack:///./js/product.js?");

/***/ }),

/***/ "./js/shopify-money.js":
/*!*****************************!*\
  !*** ./js/shopify-money.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar formatMoney = function formatMoney(number) {\n  var precision = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;\n  var thousands = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : ',';\n  var decimal = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '.';\n\n  if (isNaN(number) || number == null) {\n    return 0;\n  }\n\n  number = (number / 100.0).toFixed(precision);\n  var parts = number.split('.'),\n      dollars = parts[0].replace(/(\\d)(?=(\\d\\d\\d)+(?!\\d))/g, '$1' + thousands),\n      cents = parts[1] ? decimal + parts[1] : '';\n  return '$' + dollars + cents;\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (formatMoney);\n\n//# sourceURL=webpack:///./js/shopify-money.js?");

/***/ }),

/***/ "./js/video-layout.js":
/*!****************************!*\
  !*** ./js/video-layout.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("document.addEventListener(\"DOMContentLoaded\", adjustVideoPlayerSize);\nwindow.addEventListener('resize', adjustVideoPlayerSize);\n\nfunction adjustVideoPlayerSize() {\n  var videoWrapper = document.querySelector('#video');\n  var video = document.querySelector('#video_html5_api');\n  var width = document.body.clientWidth;\n\n  if (video) {\n    video.style.width = \"\".concat(width, \"px\");\n    video.style.height = \"\".concat(width / 16 * 9, \"px\");\n  }\n\n  if (videoWrapper) {\n    videoWrapper.style.width = \"\".concat(width, \"px\");\n    videoWrapper.style.height = \"\".concat(width / 16 * 9, \"px\");\n  }\n}\n\n//# sourceURL=webpack:///./js/video-layout.js?");

/***/ }),

/***/ 0:
/*!******************************************************************************************************************************************!*\
  !*** multi ./js/bag-drawer.js ./js/bag.js ./js/drawer-menu.js ./js/header.js ./js/product.js ./js/shopify-money.js ./js/video-layout.js ***!
  \******************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! /Users/nakee/Projects/jade-theme/js/bag-drawer.js */\"./js/bag-drawer.js\");\n__webpack_require__(/*! /Users/nakee/Projects/jade-theme/js/bag.js */\"./js/bag.js\");\n__webpack_require__(/*! /Users/nakee/Projects/jade-theme/js/drawer-menu.js */\"./js/drawer-menu.js\");\n__webpack_require__(/*! /Users/nakee/Projects/jade-theme/js/header.js */\"./js/header.js\");\n__webpack_require__(/*! /Users/nakee/Projects/jade-theme/js/product.js */\"./js/product.js\");\n__webpack_require__(/*! /Users/nakee/Projects/jade-theme/js/shopify-money.js */\"./js/shopify-money.js\");\nmodule.exports = __webpack_require__(/*! /Users/nakee/Projects/jade-theme/js/video-layout.js */\"./js/video-layout.js\");\n\n\n//# sourceURL=webpack:///multi_./js/bag-drawer.js_./js/bag.js_./js/drawer-menu.js_./js/header.js_./js/product.js_./js/shopify-money.js_./js/video-layout.js?");

/***/ })

/******/ });