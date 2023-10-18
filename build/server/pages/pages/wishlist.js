(function() {
var exports = {};
exports.id = 6436;
exports.ids = [6436,3866];
exports.modules = {

/***/ 7286:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(79);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6481);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_features_custom_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8765);
/* harmony import */ var _store_cart__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6090);
/* harmony import */ var _store_wishlist__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5708);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6442);

var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








function Wishlist(props) {
  const {
    wishlist,
    addToCart,
    removeFromWishlist
  } = props;

  const moveToCart = (e, item) => {
    e.preventDefault();
    addToCart(_objectSpread(_objectSpread({}, item), {}, {
      qty: 1,
      price: item.price[0]
    }));
    removeFromWishlist(item);
  };

  return __jsx("main", {
    className: "main"
  }, __jsx((react_helmet__WEBPACK_IMPORTED_MODULE_2___default()), null, __jsx("title", null, "Riode React eCommerce Template | Wishlist")), __jsx("h1", {
    className: "d-none"
  }, "Riode React eCommerce Template - Wishlist"), __jsx("nav", {
    className: "breadcrumb-nav"
  }, __jsx("div", {
    className: "container"
  }, __jsx("ul", {
    className: "breadcrumb"
  }, __jsx("li", null, __jsx(_components_features_custom_link__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {
    href: "/"
  }, __jsx("i", {
    className: "d-icon-home"
  }))), __jsx("li", null, "Wishlist")))), __jsx("div", {
    className: "page-content pt-10 pb-10 mb-2"
  }, __jsx("div", {
    className: "container"
  }, wishlist.length > 0 ? __jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, __jsx("table", {
    className: "shop-table wishlist-table mt-2 mb-4"
  }, __jsx("thead", null, __jsx("tr", null, __jsx("th", {
    className: "product-name"
  }, __jsx("span", null, "Product")), __jsx("th", null), __jsx("th", {
    className: "product-price"
  }, __jsx("span", null, "Price")), __jsx("th", {
    className: "product-stock-status"
  }, __jsx("span", null, "Stock status")), __jsx("th", {
    className: "product-add-to-cart"
  }), __jsx("th", {
    className: "product-remove"
  }))), __jsx("tbody", {
    className: "wishlist-items-wrapper"
  }, wishlist.map(item => __jsx("tr", {
    key: 'wishlist-' + item.name
  }, __jsx("td", {
    className: "product-thumbnail"
  }, __jsx(_components_features_custom_link__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {
    href: '/product/default/' + item.slug
  }, __jsx("figure", null, __jsx("img", {
    src: "https://d-themes.com/react_asset_api/riode" + item.pictures[0].url,
    width: "100",
    height: "100",
    alt: "product"
  })))), __jsx("td", {
    className: "product-name"
  }, __jsx(_components_features_custom_link__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {
    href: '/product/default/' + item.slug
  }, item.name)), __jsx("td", {
    className: "product-price"
  }, item.price[0] !== item.price[1] ? __jsx("span", {
    className: "amount"
  }, "$", (0,_utils__WEBPACK_IMPORTED_MODULE_6__/* .toDecimal */ .YM)(item.price[0]), " \u2013 $", (0,_utils__WEBPACK_IMPORTED_MODULE_6__/* .toDecimal */ .YM)(item.price[1])) : item.discount > 0 && item.variants.length > 0 ? __jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, __jsx("span", {
    className: "amount"
  }, "$", (0,_utils__WEBPACK_IMPORTED_MODULE_6__/* .toDecimal */ .YM)(item.salePrice)), __jsx("span", {
    className: "amount"
  }, "$", (0,_utils__WEBPACK_IMPORTED_MODULE_6__/* .toDecimal */ .YM)(item.price))) : __jsx("span", {
    className: "amount"
  }, "$", (0,_utils__WEBPACK_IMPORTED_MODULE_6__/* .toDecimal */ .YM)(item.price[0]))), __jsx("td", {
    className: "product-stock-status"
  }, __jsx("span", {
    className: item.stock > 0 ? 'wishlist-in-stock' : 'wishlist-out-stock'
  }, item.stock > 0 ? 'In Stock' : 'Out of Stock')), __jsx("td", {
    className: "product-add-to-cart"
  }, item.stock > 0 ? item.variants.length > 0 ? __jsx(_components_features_custom_link__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {
    href: '/product/default/' + item.slug,
    className: "btn-product btn-primary"
  }, __jsx("span", null, "Select options")) : __jsx("a", {
    href: "#",
    className: "btn-product btn-primary",
    onClick: e => moveToCart(e, item)
  }, __jsx("span", null, "Add to Cart")) : ""), __jsx("td", {
    className: "product-remove"
  }, __jsx("div", null, __jsx(_components_features_custom_link__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {
    href: "#",
    className: "remove",
    title: "Remove this product"
  }, __jsx("i", {
    className: "fas fa-times",
    onClick: () => removeFromWishlist(item)
  })))))))), __jsx("div", {
    className: "social-links share-on"
  }, __jsx("h5", {
    className: "text-uppercase font-weight-bold mb-0 mr-4 ls-s"
  }, "Share on:"), __jsx(_components_features_custom_link__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {
    href: "#",
    className: "social-link social-icon social-facebook",
    title: "Facebook"
  }, __jsx("i", {
    className: "fab fa-facebook-f"
  })), __jsx(_components_features_custom_link__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {
    href: "#",
    className: "social-link social-icon social-twitter",
    title: "Twitter"
  }, __jsx("i", {
    className: "fab fa-twitter"
  })), __jsx(_components_features_custom_link__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {
    href: "#",
    className: "social-link social-icon social-pinterest",
    title: "Pinterest"
  }, __jsx("i", {
    className: "fab fa-pinterest-p"
  })), __jsx(_components_features_custom_link__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {
    href: "#",
    className: "social-link social-icon social-email",
    title: "Email"
  }, __jsx("i", {
    className: "far fa-envelope"
  })), __jsx(_components_features_custom_link__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {
    href: "#",
    className: "social-link social-icon social-whatsapp",
    title: "Whatsapp"
  }, __jsx("i", {
    className: "fab fa-whatsapp"
  })))) : __jsx("div", {
    className: "empty-cart text-center"
  }, __jsx("p", null, "No products added to the wishlist."), __jsx("i", {
    className: "cart-empty d-icon-heart"
  }), __jsx("p", {
    className: "return-to-shop mb-0"
  }, __jsx(_components_features_custom_link__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {
    className: "button wc-backward btn btn-dark btn-md",
    href: "/shop"
  }, "Return to shop"))))));
}

function mapStateToProps(state) {
  return {
    wishlist: state.wishlist.data ? state.wishlist.data : []
  };
}

/* harmony default export */ __webpack_exports__["default"] = ((0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(mapStateToProps, {
  addToCart: _store_cart__WEBPACK_IMPORTED_MODULE_4__/* .cartActions.addToCart */ .Uw.addToCart,
  removeFromWishlist: _store_wishlist__WEBPACK_IMPORTED_MODULE_5__/* .wishlistActions.removeFromWishlist */ .w.removeFromWishlist
})(Wishlist));

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

/***/ 6481:
/***/ (function(module) {

"use strict";
module.exports = require("react-helmet");;

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
var __webpack_exports__ = __webpack_require__.X(0, [1664,5588,6090,5708], function() { return __webpack_exec__(7286); });
module.exports = __webpack_exports__;

})();