(function() {
var exports = {};
exports.id = 2197;
exports.ids = [2197,3866];
exports.modules = {

/***/ 8125:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6481);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_features_custom_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8765);
var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);





function Error404() {
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    document.querySelector('header').classList.add('p-relative', 'bg-dark');
    return () => {
      document.querySelector('header').classList.remove('p-relative', 'bg-dark');
    };
  }, []);
  return __jsx("main", {
    className: "main"
  }, __jsx((react_helmet__WEBPACK_IMPORTED_MODULE_1___default()), null, __jsx("title", null, "Riode React eCommerce Template | 404")), __jsx("h1", {
    className: "d-none"
  }, "Riode React eCommerce Template - 404"), __jsx("div", {
    className: "page-content"
  }, __jsx("section", {
    className: "error-section d-flex flex-column justify-content-center align-items-center text-center pl-3 pr-3"
  }, __jsx("h1", {
    className: "mb-2 ls-m"
  }, "Error 404"), __jsx("img", {
    src: "./images/subpages/404.png",
    alt: "error 404",
    width: "609",
    height: "131"
  }), __jsx("h4", {
    className: "mt-7 mb-0 ls-m text-uppercase"
  }, "Ooopps! That page can\u2019t be found."), __jsx("p", {
    className: "text-grey font-primary ls-m"
  }, "It looks like nothing was found at this location."), __jsx(_components_features_custom_link__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, {
    href: "/",
    className: "btn btn-primary btn-rounded mb-4"
  }, "Go home"))));
}

/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().memo(Error404));

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

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, [1664,5588], function() { return __webpack_exec__(8125); });
module.exports = __webpack_exports__;

})();