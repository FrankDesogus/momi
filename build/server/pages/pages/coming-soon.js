(function() {
var exports = {};
exports.id = 2929;
exports.ids = [2929,3866];
exports.modules = {

/***/ 4561:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6481);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9290);
/* harmony import */ var react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_features_custom_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8765);
/* harmony import */ var _components_features_countdown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7845);
var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);






function ComingSoon() {
  let time = 10 * 24 * 3600000;
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    document.querySelector('header').classList.add('d-none');
    document.querySelector('footer').classList.add('d-none');
    return () => {
      document.querySelector('header').classList.remove('d-none');
      document.querySelector('footer').classList.remove('d-none');
    };
  });
  return __jsx("main", {
    className: "main"
  }, __jsx((react_helmet__WEBPACK_IMPORTED_MODULE_1___default()), null, __jsx("title", null, "Riode React eCommerce Template | Coming Soon")), __jsx("h1", {
    className: "d-none"
  }, "Riode React eCommerce Template - Coming Soon"), __jsx("div", {
    className: "page-content"
  }, __jsx("section", {
    className: "coming-section container text-center text-grey font-primary"
  }, __jsx("div", {
    className: "row align-items-center pt-10 pb-10"
  }, __jsx("div", {
    className: "col-md-6"
  }, __jsx(react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_2__.LazyLoadImage, {
    src: "./images/subpages/coming-soon.jpg",
    alt: "coming soon",
    width: "519",
    height: "568",
    effect: "opacity",
    style: {
      backgroundColor: "#fff"
    }
  })), __jsx("div", {
    className: "col-md-6 order-md-first"
  }, __jsx("h1", {
    className: "mb-9 ls-m lh-1 font-italic text-uppercase"
  }, "Coming Soon"), __jsx(_components_features_countdown__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z, {
    adClass: "countdown-coming mb-7",
    date: Date.now() + time
  }), __jsx("hr", {
    className: "mb-6 ml-8 mr-8"
  }), __jsx("p", null, "We are currently working on an awesome new site. Stay tuned for more information. Subscribe to our newsletter to stay updated on our progress."), __jsx("form", {
    action: "#",
    className: "ml-lg-8 mr-lg-8 mb-8"
  }, __jsx("input", {
    type: "email",
    className: "form-control font-primary text-grey",
    name: "email",
    id: "email",
    placeholder: "Enter Your Email Address",
    required: true
  }), __jsx("button", {
    className: "btn btn-primary btn-link btn-icon-right",
    type: "submit"
  }, "subscribe")), __jsx("div", {
    className: "social-links"
  }, __jsx(_components_features_custom_link__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {
    href: "#",
    className: "social-link social-facebook fab fa-facebook-f"
  }), __jsx(_components_features_custom_link__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {
    href: "#",
    className: "social-link social-twitter fab fa-twitter"
  }), __jsx(_components_features_custom_link__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {
    href: "#",
    className: "social-link social-instagram fab fa-instagram"
  }), __jsx(_components_features_custom_link__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {
    href: "#",
    className: "social-link social-pinterest fab fa-pinterest-p"
  }), __jsx(_components_features_custom_link__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {
    href: "#",
    className: "social-link social-email far fa-envelope"
  })))))));
}

/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().memo(ComingSoon));

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

/***/ 7183:
/***/ (function(module) {

"use strict";
module.exports = require("react-countdown");;

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

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, [1664,5588,7845], function() { return __webpack_exec__(4561); });
module.exports = __webpack_exports__;

})();