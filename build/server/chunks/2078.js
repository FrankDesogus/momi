exports.id = 2078;
exports.ids = [2078];
exports.modules = {

/***/ 2078:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6731);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_features_custom_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8765);
var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





function Pagination(props) {
  const {
    maxShowCounts = 7,
    totalPage = 1,
    distance = 2
  } = props;
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
  const query = router.query;
  const page = query.page ? parseInt(query.page) : 1;
  let indexList = [];
  let min = Math.max(page - distance, 2);
  let max = Math.min(page + distance, totalPage - 1);

  for (let i = min; i <= max; i++) {
    indexList[i - min + 1] = i;
  }

  indexList[0] = 1;
  indexList[max - min + 2] = totalPage;
  return __jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, totalPage > 1 && __jsx("ul", {
    className: "pagination"
  }, __jsx("li", {
    className: `page-item ${page < 2 ? 'disabled' : ''}`
  }, __jsx(_components_features_custom_link__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, {
    className: "page-link page-link-prev",
    href: page > 1 ? {
      pathname: router.pathname,
      query: _objectSpread(_objectSpread({}, query), {}, {
        page: page - 1
      })
    } : '#',
    scroll: false
  }, __jsx("i", {
    className: "d-icon-arrow-left"
  }), "Prev")), indexList.map((item, index) => index === 1 && item > 2 ? __jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), {
    key: `page-${index}`
  }, __jsx("span", {
    className: "page-item dots"
  }, "..."), __jsx("li", {
    className: `page-item ${page === item ? 'active' : ''}`
  }, __jsx(_components_features_custom_link__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, {
    className: "page-link",
    href: page === item ? '#' : {
      pathname: router.pathname,
      query: _objectSpread(_objectSpread({}, query), {}, {
        page: item
      })
    },
    scroll: false
  }, item, page === item && __jsx("span", {
    className: "sr-only"
  }, "(current)")))) : index === indexList.length - 2 && item + 1 < totalPage ? __jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), {
    key: `page-${index}`
  }, __jsx("li", {
    className: `page-item ${page === item ? 'active' : ''}`
  }, __jsx(_components_features_custom_link__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, {
    className: "page-link",
    href: page === item ? '#' : {
      pathname: router.pathname,
      query: _objectSpread(_objectSpread({}, query), {}, {
        page: item
      })
    },
    scroll: false
  }, item, page === item && __jsx("span", {
    className: "sr-only"
  }, "(current)"))), __jsx("span", {
    className: "page-item dots"
  }, "...")) : __jsx("li", {
    className: `page-item ${page === item ? 'active' : ''}`,
    key: `page-${index}`
  }, __jsx(_components_features_custom_link__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, {
    className: "page-link",
    href: page === item ? '#' : {
      pathname: router.pathname,
      query: _objectSpread(_objectSpread({}, query), {}, {
        page: item
      })
    },
    scroll: false
  }, item, page === item && __jsx("span", {
    className: "sr-only"
  }, "(current)")))), __jsx("li", {
    className: `page-item ${page > totalPage - 1 ? 'disabled' : ''}`
  }, __jsx(_components_features_custom_link__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, {
    className: "page-link page-link-next",
    href: page < totalPage ? {
      pathname: router.pathname,
      query: _objectSpread(_objectSpread({}, query), {}, {
        page: page + 1
      })
    } : '#',
    scroll: false
  }, "Next", __jsx("i", {
    className: "d-icon-arrow-right"
  })))));
}

/* harmony default export */ __webpack_exports__["Z"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().memo(Pagination));

/***/ })

};
;