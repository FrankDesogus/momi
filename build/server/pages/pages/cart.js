(function() {
var exports = {};
exports.id = 9839;
exports.ids = [9839];
exports.modules = {

/***/ 7520:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(79);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_features_custom_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8765);
/* harmony import */ var _components_features_quantity__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1473);
/* harmony import */ var _store_cart__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6090);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6442);

var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








function Cart(props) {
  const {
    cartList,
    removeFromCart,
    updateCart
  } = props;
  const {
    0: cartItems,
    1: setCartItems
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    setCartItems([...cartList]);
  }, [cartList]);

  const onChangeQty = (name, qty) => {
    setCartItems(cartItems.map(item => {
      return item.name === name ? _objectSpread(_objectSpread({}, item), {}, {
        qty: qty
      }) : item;
    }));
  };

  const compareItems = () => {
    if (cartItems.length !== cartList.length) return false;

    for (let index = 0; index < cartItems.length; index++) {
      if (cartItems[index].qty !== cartList[index].qty) return false;
    }

    return true;
  };

  const update = () => {
    updateCart(cartItems);
  };

  return __jsx("div", {
    className: "main cart"
  }, __jsx("div", {
    className: "page-content pt-7 pb-10"
  }, __jsx("div", {
    className: "step-by pr-4 pl-4"
  }, __jsx("h3", {
    className: "title title-simple title-step active"
  }, __jsx(_components_features_custom_link__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, {
    href: "#"
  }, "1. Shopping Cart")), __jsx("h3", {
    className: "title title-simple title-step"
  }, __jsx(_components_features_custom_link__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, {
    href: "/pages/checkout"
  }, "2. Checkout")), __jsx("h3", {
    className: "title title-simple title-step"
  }, __jsx(_components_features_custom_link__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, {
    href: "/pages/order"
  }, "3. Order Complete"))), __jsx("div", {
    className: "container mt-7 mb-2"
  }, __jsx("div", {
    className: "row"
  }, cartItems.length > 0 ? __jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, __jsx("div", {
    className: "col-lg-8 col-md-12 pr-lg-4"
  }, __jsx("table", {
    className: "shop-table cart-table"
  }, __jsx("thead", null, __jsx("tr", null, __jsx("th", null, __jsx("span", null, "Product")), __jsx("th", null), __jsx("th", null, __jsx("span", null, "Price")), __jsx("th", null, __jsx("span", null, "quantity")), __jsx("th", null, "Subtotal"))), __jsx("tbody", null, cartItems.map(item => __jsx("tr", {
    key: 'cart' + item.name
  }, __jsx("td", {
    className: "product-thumbnail"
  }, __jsx("figure", null, __jsx(_components_features_custom_link__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, {
    href: '/product/default/' + item.slug
  }, __jsx("img", {
    src: "https://d-themes.com/react_asset_api/riode" + item.pictures[0].url,
    width: "100",
    height: "100",
    alt: "product"
  })))), __jsx("td", {
    className: "product-name"
  }, __jsx("div", {
    className: "product-name-section"
  }, __jsx(_components_features_custom_link__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, {
    href: '/product/default/' + item.slug
  }, "Converse Training Shoes"))), __jsx("td", {
    className: "product-subtotal"
  }, __jsx("span", {
    className: "amount"
  }, "$", (0,_utils__WEBPACK_IMPORTED_MODULE_5__/* .toDecimal */ .YM)(item.price))), __jsx("td", {
    className: "product-quantity"
  }, __jsx(_components_features_quantity__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {
    qty: item.qty,
    max: item.stock,
    onChangeQty: qty => onChangeQty(item.name, qty)
  })), __jsx("td", {
    className: "product-price"
  }, __jsx("span", {
    className: "amount"
  }, "$", (0,_utils__WEBPACK_IMPORTED_MODULE_5__/* .toDecimal */ .YM)(item.price * item.qty))), __jsx("td", {
    className: "product-close"
  }, __jsx(_components_features_custom_link__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, {
    href: "#",
    className: "product-remove",
    title: "Remove this product",
    onClick: () => removeFromCart(item)
  }, __jsx("i", {
    className: "fas fa-times"
  }))))))), __jsx("div", {
    className: "cart-actions mb-6 pt-4"
  }, __jsx(_components_features_custom_link__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, {
    href: "/shop",
    className: "btn btn-dark btn-md btn-rounded btn-icon-left mr-4 mb-4"
  }, __jsx("i", {
    className: "d-icon-arrow-left"
  }), "Continue Shopping"), __jsx("button", {
    type: "submit",
    className: `btn btn-outline btn-dark btn-md btn-rounded ${compareItems() ? ' btn-disabled' : ''}`,
    onClick: update
  }, "Update Cart")), __jsx("div", {
    className: "cart-coupon-box mb-8"
  }, __jsx("h4", {
    className: "title coupon-title text-uppercase ls-m"
  }, "Coupon Discount"), __jsx("input", {
    type: "text",
    name: "coupon_code",
    className: "input-text form-control text-grey ls-m mb-4",
    id: "coupon_code",
    placeholder: "Enter coupon code here..."
  }), __jsx("button", {
    type: "submit",
    className: "btn btn-md btn-dark btn-rounded btn-outline"
  }, "Apply Coupon"))), __jsx("aside", {
    className: "col-lg-4 sticky-sidebar-wrapper"
  }, __jsx("div", {
    className: "sticky-sidebar",
    "data-sticky-options": "{'bottom': 20}"
  }, __jsx("div", {
    className: "summary mb-4"
  }, __jsx("h3", {
    className: "summary-title text-left"
  }, "Cart Totals"), __jsx("table", {
    className: "shipping"
  }, __jsx("tbody", null, __jsx("tr", {
    className: "summary-subtotal"
  }, __jsx("td", null, __jsx("h4", {
    className: "summary-subtitle"
  }, "Subtotal")), __jsx("td", null, __jsx("p", {
    className: "summary-subtotal-price"
  }, "$", (0,_utils__WEBPACK_IMPORTED_MODULE_5__/* .toDecimal */ .YM)((0,_utils__WEBPACK_IMPORTED_MODULE_5__/* .getTotalPrice */ .m_)(cartItems))))), __jsx("tr", {
    className: "sumnary-shipping shipping-row-last"
  }, __jsx("td", {
    colSpan: "2"
  }, __jsx("h4", {
    className: "summary-subtitle"
  }, "Calculate Shipping"), __jsx("ul", null, __jsx("li", null, __jsx("div", {
    className: "custom-radio"
  }, __jsx("input", {
    type: "radio",
    id: "flat_rate",
    name: "shipping",
    className: "custom-control-input",
    defaultChecked: true
  }), __jsx("label", {
    className: "custom-control-label",
    htmlFor: "flat_rate"
  }, "Flat rate"))), __jsx("li", null, __jsx("div", {
    className: "custom-radio"
  }, __jsx("input", {
    type: "radio",
    id: "free-shipping",
    name: "shipping",
    className: "custom-control-input"
  }), __jsx("label", {
    className: "custom-control-label",
    htmlFor: "free-shipping"
  }, "Free shipping"))), __jsx("li", null, __jsx("div", {
    className: "custom-radio"
  }, __jsx("input", {
    type: "radio",
    id: "local_pickup",
    name: "shipping",
    className: "custom-control-input"
  }), __jsx("label", {
    className: "custom-control-label",
    htmlFor: "local_pickup"
  }, "Local pickup")))))))), __jsx("div", {
    className: "shipping-address"
  }, __jsx("label", null, "Shipping to ", __jsx("strong", null, "CA.")), __jsx("div", {
    className: "select-box"
  }, __jsx("select", {
    name: "country",
    className: "form-control",
    defaultValue: "us"
  }, __jsx("option", {
    value: "us"
  }, "United States (US)"), __jsx("option", {
    value: "uk"
  }, " United Kingdom"), __jsx("option", {
    value: "fr"
  }, "France"), __jsx("option", {
    value: "aus"
  }, "Austria"))), __jsx("div", {
    className: "select-box"
  }, __jsx("select", {
    name: "country",
    className: "form-control",
    defaultValue: "us"
  }, __jsx("option", {
    value: "us"
  }, "California"), __jsx("option", {
    value: "uk"
  }, "Alaska"), __jsx("option", {
    value: "fr"
  }, "Delaware"), __jsx("option", {
    value: "aus"
  }, "Hawaii"))), __jsx("input", {
    type: "text",
    className: "form-control",
    name: "code",
    placeholder: "Town / City"
  }), __jsx("input", {
    type: "text",
    className: "form-control",
    name: "code",
    placeholder: "ZIP"
  }), __jsx(_components_features_custom_link__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, {
    href: "#",
    className: "btn btn-md btn-dark btn-rounded btn-outline"
  }, "Update totals")), __jsx("table", {
    className: "total"
  }, __jsx("tbody", null, __jsx("tr", {
    className: "summary-subtotal"
  }, __jsx("td", null, __jsx("h4", {
    className: "summary-subtitle"
  }, "Total")), __jsx("td", null, __jsx("p", {
    className: "summary-total-price ls-s"
  }, "$", (0,_utils__WEBPACK_IMPORTED_MODULE_5__/* .toDecimal */ .YM)((0,_utils__WEBPACK_IMPORTED_MODULE_5__/* .getTotalPrice */ .m_)(cartItems))))))), __jsx(_components_features_custom_link__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, {
    href: "/pages/checkout",
    className: "btn btn-dark btn-rounded btn-checkout"
  }, "Proceed to checkout"))))) : __jsx("div", {
    className: "empty-cart text-center"
  }, __jsx("p", null, "Your cart is currently empty."), __jsx("i", {
    className: "cart-empty d-icon-bag"
  }), __jsx("p", {
    className: "return-to-shop mb-0"
  }, __jsx(_components_features_custom_link__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, {
    className: "button wc-backward btn btn-dark btn-md",
    href: "/shop"
  }, "Return to shop")))))));
}

function mapStateToProps(state) {
  return {
    cartList: state.cart.data ? state.cart.data : []
  };
}

/* harmony default export */ __webpack_exports__["default"] = ((0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(mapStateToProps, {
  removeFromCart: _store_cart__WEBPACK_IMPORTED_MODULE_4__/* .cartActions.removeFromCart */ .Uw.removeFromCart,
  updateCart: _store_cart__WEBPACK_IMPORTED_MODULE_4__/* .cartActions.updateCart */ .Uw.updateCart
})(Cart));

/***/ }),

/***/ 8417:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router-context.js");;

/***/ }),

/***/ 2238:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");;

/***/ }),

/***/ 9297:
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ 79:
/***/ (function(module) {

"use strict";
module.exports = require("react-redux");;

/***/ }),

/***/ 2034:
/***/ (function(module) {

"use strict";
module.exports = require("react-toastify");;

/***/ }),

/***/ 3643:
/***/ (function(module) {

"use strict";
module.exports = require("redux-persist");;

/***/ }),

/***/ 584:
/***/ (function(module) {

"use strict";
module.exports = require("redux-persist/lib/storage");;

/***/ }),

/***/ 5060:
/***/ (function(module) {

"use strict";
module.exports = require("redux-saga/effects");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, [1664,5588,6090,1473], function() { return __webpack_exec__(7520); });
module.exports = __webpack_exports__;

})();