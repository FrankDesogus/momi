(function() {
var exports = {};
exports.id = 4753;
exports.ids = [4753,3866];
exports.modules = {

/***/ 7831:
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
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6442);

var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);





function Order(props) {
  const {
    cartList
  } = props;
  return __jsx("main", {
    className: "main order"
  }, __jsx((react_helmet__WEBPACK_IMPORTED_MODULE_2___default()), null, __jsx("title", null, "Riode React eCommerce Template | Order")), __jsx("h1", {
    className: "d-none"
  }, "Riode React eCommerce Template - Order"), __jsx("div", {
    className: "page-content pt-7 pb-10 mb-10"
  }, __jsx("div", {
    className: "step-by pr-4 pl-4"
  }, __jsx("h3", {
    className: "title title-simple title-step"
  }, __jsx(_components_features_custom_link__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {
    href: "/pages/cart"
  }, "1. Shopping Cart")), __jsx("h3", {
    className: "title title-simple title-step"
  }, __jsx(_components_features_custom_link__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {
    href: "/pages/checkout"
  }, "2. Checkout")), __jsx("h3", {
    className: "title title-simple title-step active"
  }, __jsx(_components_features_custom_link__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {
    href: "#"
  }, "3. Order Complete"))), __jsx("div", {
    className: "container mt-8"
  }, __jsx("div", {
    className: "order-message mr-auto ml-auto"
  }, __jsx("div", {
    className: "icon-box d-inline-flex align-items-center"
  }, __jsx("div", {
    className: "icon-box-icon mb-0"
  }, __jsx("svg", {
    version: "1.1",
    id: "Layer_1",
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    x: "0px",
    y: "0px",
    viewBox: "0 0 50 50",
    enableBackground: "new 0 0 50 50",
    xmlSpace: "preserve"
  }, __jsx("g", null, __jsx("path", {
    fill: "none",
    strokeWidth: "3",
    strokeLinecap: "round",
    strokeLinejoin: "bevel",
    strokeMiterlimit: "10",
    d: "\r M33.3,3.9c-2.7-1.1-5.6-1.8-8.7-1.8c-12.3,0-22.4,10-22.4,22.4c0,12.3,10,22.4,22.4,22.4c12.3,0,22.4-10,22.4-22.4\r c0-0.7,0-1.4-0.1-2.1"
  }), __jsx("polyline", {
    fill: "none",
    strokeWidth: "4",
    strokeLinecap: "round",
    strokeLinejoin: "bevel",
    strokeMiterlimit: "10",
    points: "\r 48,6.9 24.4,29.8 17.2,22.3 \t"
  })))), __jsx("div", {
    className: "icon-box-content text-left"
  }, __jsx("h5", {
    className: "icon-box-title font-weight-bold lh-1 mb-1"
  }, "Thank You!"), __jsx("p", {
    className: "lh-1 ls-m"
  }, "Your order has been received")))), __jsx("div", {
    className: "order-results"
  }, __jsx("div", {
    className: "overview-item"
  }, __jsx("span", null, "Order number:"), __jsx("strong", null, "4935")), __jsx("div", {
    className: "overview-item"
  }, __jsx("span", null, "Status:"), __jsx("strong", null, "Processing")), __jsx("div", {
    className: "overview-item"
  }, __jsx("span", null, "Date:"), __jsx("strong", null, "November 20, 2020")), __jsx("div", {
    className: "overview-item"
  }, __jsx("span", null, "Email:"), __jsx("strong", null, "12345@gmail.com")), __jsx("div", {
    className: "overview-item"
  }, __jsx("span", null, "Total:"), __jsx("strong", null, "$", (0,_utils__WEBPACK_IMPORTED_MODULE_4__/* .toDecimal */ .YM)((0,_utils__WEBPACK_IMPORTED_MODULE_4__/* .getTotalPrice */ .m_)(cartList)))), __jsx("div", {
    className: "overview-item"
  }, __jsx("span", null, "Payment method:"), __jsx("strong", null, "Cash on delivery"))), __jsx("h2", {
    className: "title title-simple text-left pt-4 font-weight-bold text-uppercase"
  }, "Order Details"), __jsx("div", {
    className: "order-details"
  }, __jsx("table", {
    className: "order-details-table"
  }, __jsx("thead", null, __jsx("tr", {
    className: "summary-subtotal"
  }, __jsx("td", null, __jsx("h3", {
    className: "summary-subtitle"
  }, "Product")), __jsx("td", null))), __jsx("tbody", null, cartList.map(item => __jsx("tr", {
    key: 'order-' + item.name
  }, __jsx("td", {
    className: "product-name"
  }, item.name, " ", __jsx("span", null, " ", __jsx("i", {
    className: "fas fa-times"
  }), " ", item.qty)), __jsx("td", {
    className: "product-price"
  }, "$", (0,_utils__WEBPACK_IMPORTED_MODULE_4__/* .toDecimal */ .YM)(item.qty * item.price)))), __jsx("tr", {
    className: "summary-subtotal"
  }, __jsx("td", null, __jsx("h4", {
    className: "summary-subtitle"
  }, "Subtotal:")), __jsx("td", {
    className: "summary-subtotal-price"
  }, "$", (0,_utils__WEBPACK_IMPORTED_MODULE_4__/* .toDecimal */ .YM)((0,_utils__WEBPACK_IMPORTED_MODULE_4__/* .getTotalPrice */ .m_)(cartList)))), __jsx("tr", {
    className: "summary-subtotal"
  }, __jsx("td", null, __jsx("h4", {
    className: "summary-subtitle"
  }, "Shipping:")), __jsx("td", {
    className: "summary-subtotal-price"
  }, "Free shipping")), __jsx("tr", {
    className: "summary-subtotal"
  }, __jsx("td", null, __jsx("h4", {
    className: "summary-subtitle"
  }, "Payment method:")), __jsx("td", {
    className: "summary-subtotal-price"
  }, "Cash on delivery")), __jsx("tr", {
    className: "summary-subtotal"
  }, __jsx("td", null, __jsx("h4", {
    className: "summary-subtitle"
  }, "Total:")), __jsx("td", null, __jsx("p", {
    className: "summary-total-price"
  }, "$", (0,_utils__WEBPACK_IMPORTED_MODULE_4__/* .toDecimal */ .YM)((0,_utils__WEBPACK_IMPORTED_MODULE_4__/* .getTotalPrice */ .m_)(cartList)))))))), __jsx("h2", {
    className: "title title-simple text-left pt-10 mb-2"
  }, "Billing Address"), __jsx("div", {
    className: "address-info pb-8 mb-6"
  }, __jsx("p", {
    className: "address-detail pb-2"
  }, "John Doe", __jsx("br", null), "Riode Company", __jsx("br", null), "Steven street", __jsx("br", null), "El Carjon, CA 92020", __jsx("br", null), "123456789"), __jsx("p", {
    className: "email"
  }, "mail@riode.com")), __jsx(_components_features_custom_link__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {
    href: "/shop",
    className: "btn btn-icon-left btn-dark btn-back btn-rounded btn-md mb-4"
  }, __jsx("i", {
    className: "d-icon-arrow-left"
  }), " Back to List"))));
}

function mapStateToProps(state) {
  return {
    cartList: state.cart.data ? state.cart.data : []
  };
}

/* harmony default export */ __webpack_exports__["default"] = ((0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(mapStateToProps)(Order));

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

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, [1664,5588], function() { return __webpack_exec__(7831); });
module.exports = __webpack_exports__;

})();