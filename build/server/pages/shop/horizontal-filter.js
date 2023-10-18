(function() {
var exports = {};
exports.id = 2368;
exports.ids = [2368,3866];
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

/***/ 6690:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6481);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6731);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_features_custom_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8765);
/* harmony import */ var _components_partials_shop_shop_banner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5128);
/* harmony import */ var _components_partials_shop_toolbox__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5122);
/* harmony import */ var _components_partials_shop_product_list_product_list_one__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1496);
/* harmony import */ var _utils_data_shop__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(129);
var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }










function ShopHorizontalFilter() {
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
  const query = router.query;
  const prices = [{
    min: '0',
    max: '50'
  }, {
    min: '50',
    max: '100'
  }, {
    min: '100',
    max: '200'
  }, {
    min: '200',
    max: ''
  }];

  const containsAttrInUrl = (type, value) => {
    const currentQueries = query[type] ? query[type].split(',') : [];
    return currentQueries && (currentQueries.includes(value) || type === 'max_price' && value === '' || type === 'min_price' && value === '');
  };

  const getUrlForAttrs = (type, value) => {
    let currentQueries = query[type] ? query[type].split(',') : [];
    currentQueries = containsAttrInUrl(type, value) ? currentQueries.filter(item => item !== value) : type === 'min_price' || type === 'max_price' ? [value] : [...currentQueries, value];
    return currentQueries.join(',');
  };

  const selectFilterHandler = () => {
    if (document.querySelectorAll('.select-items .select-item').length === 1) {
      document.querySelector('.select-items').removeAttribute('style');
    }
  };

  const cleanAllHandler = () => {
    document.querySelector('.select-items').removeAttribute('style');
  };

  return __jsx("main", {
    className: "main"
  }, __jsx(react_helmet__WEBPACK_IMPORTED_MODULE_1__.Helmet, null, __jsx("title", null, "Riode React eCommerce Template - Shop Horizontal Filter")), __jsx("h1", {
    className: "d-none"
  }, "Riode React eCommerce Template - Shop Horizontal Filter"), __jsx(_components_partials_shop_shop_banner__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z, {
    subTitle: "Categories",
    title: "Horizontal Filter",
    current: "Horizontal Filter"
  }), __jsx("div", {
    className: "page-content mb-lg-10 mb-0 pb-lg-3 pb-0"
  }, __jsx("div", {
    className: "container"
  }, __jsx(_components_partials_shop_toolbox__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z, {
    type: "horizontal"
  }), __jsx("div", {
    className: "select-items"
  }, _utils_data_shop__WEBPACK_IMPORTED_MODULE_7__/* .default.sizes.map */ .Z.sizes.map((item, index) => containsAttrInUrl('sizes', item.slug) ? __jsx(_components_features_custom_link__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {
    className: "select-item",
    href: {
      pathname: router.pathname,
      query: _objectSpread(_objectSpread({}, query), {}, {
        page: 1,
        sizes: getUrlForAttrs('sizes', item.slug),
        type: router.query.type ? router.query.type : null
      })
    },
    key: item + ' - ' + index,
    onClick: selectFilterHandler,
    scroll: false
  }, item.name, __jsx("i", {
    className: "d-icon-times"
  })) : ''), _utils_data_shop__WEBPACK_IMPORTED_MODULE_7__/* .default.colors.map */ .Z.colors.map((item, index) => containsAttrInUrl('colors', item.slug) ? __jsx(_components_features_custom_link__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {
    className: "select-item",
    href: {
      pathname: router.pathname,
      query: _objectSpread(_objectSpread({}, query), {}, {
        page: 1,
        colors: getUrlForAttrs('colors', item.slug),
        type: router.query.type ? router.query.type : null
      })
    },
    key: item + ' - ' + index,
    onClick: selectFilterHandler,
    scroll: false
  }, item.name, __jsx("i", {
    className: "d-icon-times"
  })) : ''), prices.map((price, index) => containsAttrInUrl('min_price', price.min) && containsAttrInUrl('max_price', price.max) ? __jsx(_components_features_custom_link__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {
    className: "select-item",
    href: {
      pathname: router.pathname,
      query: _objectSpread(_objectSpread({}, query), {}, {
        page: 1,
        min_price: getUrlForAttrs('min_price', price.min),
        max_price: getUrlForAttrs('max_price', price.max),
        type: router.query.type ? router.query.type : null
      })
    },
    key: price + ' - ' + index,
    onClick: selectFilterHandler,
    scroll: false
  }, price.max === '' ? `$${price.min}.00 +` : `$${price.min}.00 - $${price.max}.00`, __jsx("i", {
    className: "d-icon-times"
  })) : ''), __jsx(_components_features_custom_link__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {
    href: {
      pathname: router.pathname,
      query: {
        type: router.query.type ? router.query.type : null
      }
    },
    className: "filter-clean text-primary",
    onClick: cleanAllHandler,
    scroll: false
  }, "Clean All")), __jsx("div", {
    className: "row main-content-wrap gutter-lg"
  }, __jsx("div", {
    className: "main-content"
  }, __jsx(_components_partials_shop_product_list_product_list_one__WEBPACK_IMPORTED_MODULE_6__/* .default */ .Z, {
    isToolbox: false,
    itemsPerRow: 4
  }))))));
}

/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().memo(ShopHorizontalFilter));

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
var __webpack_exports__ = __webpack_require__.X(0, [1664,5588,5961,6090,5708,6723,4246,2078,4298,5122,1496], function() { return __webpack_exec__(6690); });
module.exports = __webpack_exports__;

})();