(function() {
var exports = {};
exports.id = 4183;
exports.ids = [4183,3866];
exports.modules = {

/***/ 5128:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ ShopBanner; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_features_custom_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8765);

var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);

function ShopBanner(props) {
  const {
    subTitle = '',
    title = "Riode Shop",
    current = "Riode Shop"
  } = props;
  return __jsx("div", {
    className: "page-header",
    style: {
      backgroundImage: `url( ./images/home/page-header.jpg )`,
      backgroundColor: "#3C63A4"
    }
  }, subTitle ? __jsx("h3", {
    className: "page-subtitle"
  }, subTitle) : '', title ? __jsx("h1", {
    className: "page-title"
  }, title) : '', __jsx("ul", {
    className: "breadcrumb"
  }, __jsx("li", null, __jsx(_components_features_custom_link__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z, {
    href: "/"
  }, __jsx("i", {
    className: "d-icon-home"
  }))), __jsx("li", {
    className: "delimiter"
  }, "/"), __jsx("li", null, current)));
}

/***/ }),

/***/ 4321:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6481);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_partials_shop_shop_banner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5128);
/* harmony import */ var _components_partials_shop_sidebar_sidebar_filter_one__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1506);
/* harmony import */ var _components_partials_shop_product_list_product_list_one__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1496);
var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);






function ShopRightSidebar() {
  return __jsx("main", {
    className: "main"
  }, __jsx(react_helmet__WEBPACK_IMPORTED_MODULE_1__.Helmet, null, __jsx("title", null, "Riode React eCommerce Template - Shop With Right Sidebar")), __jsx("h1", {
    className: "d-none"
  }, "Riode React eCommerce Template - Shop With Right Sidebar"), __jsx(_components_partials_shop_shop_banner__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, {
    subTitle: "Categories",
    title: "With Right Sidebar",
    current: "With Right Sidebar"
  }), __jsx("div", {
    className: "page-content mb-lg-10 mb-0 pb-lg-6 pb-0"
  }, __jsx("div", {
    className: "container"
  }, __jsx("div", {
    className: "row main-content-wrap gutter-lg"
  }, __jsx(_components_partials_shop_sidebar_sidebar_filter_one__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {
    type: "right"
  }), __jsx("div", {
    className: "col-lg-9 main-content"
  }, __jsx(_components_partials_shop_product_list_product_list_one__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z, {
    type: "right"
  }))))));
}

/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().memo(ShopRightSidebar));

/***/ }),

/***/ 7530:
/***/ (function(module) {

"use strict";
module.exports = require("@apollo/react-hooks");;

/***/ }),

/***/ 806:
/***/ (function(module) {

"use strict";
module.exports = require("apollo-boost");;

/***/ }),

/***/ 9875:
/***/ (function(module) {

"use strict";
module.exports = require("graphql-tag");;

/***/ }),

/***/ 5766:
/***/ (function(module) {

"use strict";
module.exports = require("next-apollo");;

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

/***/ 6731:
/***/ (function(module) {

"use strict";
module.exports = require("next/router");;

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

/***/ 4766:
/***/ (function(module) {

"use strict";
module.exports = require("react-input-range");;

/***/ }),

/***/ 9290:
/***/ (function(module) {

"use strict";
module.exports = require("react-lazy-load-image-component");;

/***/ }),

/***/ 7033:
/***/ (function(module) {

"use strict";
module.exports = require("react-owl-carousel2");;

/***/ }),

/***/ 79:
/***/ (function(module) {

"use strict";
module.exports = require("react-redux");;

/***/ }),

/***/ 3920:
/***/ (function(module) {

"use strict";
module.exports = require("react-slide-toggle");;

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
var __webpack_exports__ = __webpack_require__.X(0, [1664,5588,5961,4138,6090,5708,6723,4246,2674,2078,4298,5379,5122,1496,1506], function() { return __webpack_exec__(4321); });
module.exports = __webpack_exports__;

})();