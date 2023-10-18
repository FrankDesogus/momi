(function() {
var exports = {};
exports.id = 6960;
exports.ids = [6960,3866];
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

/***/ 7485:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6481);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_partials_shop_shop_banner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5128);
/* harmony import */ var _components_partials_shop_sidebar_sidebar_filter_two__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1518);
/* harmony import */ var _components_partials_shop_product_list_product_list_one__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1496);
/* harmony import */ var _components_partials_shop_toolbox__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5122);
/* harmony import */ var react_slide_toggle__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3920);
/* harmony import */ var react_slide_toggle__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_slide_toggle__WEBPACK_IMPORTED_MODULE_6__);
var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);








function ShopNavigationFilter() {
  let expanded = false;
  return __jsx("main", {
    className: "main navigation-filter"
  }, __jsx(react_helmet__WEBPACK_IMPORTED_MODULE_1__.Helmet, null, __jsx("title", null, "Riode React eCommerce Template - Shop Navigation Filter")), __jsx("h1", {
    className: "d-none"
  }, "Riode React eCommerce Template - Shop Navigation Filter"), __jsx(_components_partials_shop_shop_banner__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, {
    subTitle: "categories",
    title: "Navigation Filter",
    current: "Navigation Filter"
  }), __jsx("div", {
    className: "page-content mb-0 mb-lg-10 pb-0 pb-lg-6"
  }, __jsx("div", {
    className: "container"
  }, __jsx("div", {
    className: "toolbox-wrap"
  }, __jsx((react_slide_toggle__WEBPACK_IMPORTED_MODULE_6___default()), {
    collapsed: expanded ? false : true
  }, ({
    onToggle,
    setCollapsibleElement,
    toggleState
  }) => __jsx("div", {
    className: `card navigation-card ${toggleState.toLowerCase()}`
  }, __jsx("div", {
    className: "card-header",
    onClick: onToggle
  }, __jsx("span", {
    className: "toggle"
  }, __jsx("span", {
    className: "navigation-toggle-btn d-none"
  }, "toggle button"))), __jsx("div", {
    ref: setCollapsibleElement
  }, __jsx("div", {
    className: `card-body p-0 ${toggleState.toLowerCase()}`
  }, __jsx(_components_partials_shop_sidebar_sidebar_filter_two__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, null))))), __jsx(_components_partials_shop_toolbox__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z, {
    type: "navigation"
  })), __jsx(_components_partials_shop_product_list_product_list_one__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z, {
    isToolbox: false,
    itemsPerRow: 4
  }))));
}

/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().memo(ShopNavigationFilter));

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

/***/ 9290:
/***/ (function(module) {

"use strict";
module.exports = require("react-lazy-load-image-component");;

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
var __webpack_exports__ = __webpack_require__.X(0, [1664,5588,5961,6090,5708,6723,4246,2078,4298,5122,1496,1518], function() { return __webpack_exec__(7485); });
module.exports = __webpack_exports__;

})();