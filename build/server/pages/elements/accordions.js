(function() {
var exports = {};
exports.id = 7515;
exports.ids = [7515,3866];
exports.modules = {

/***/ 4699:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ Breadcrumb; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_features_custom_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8765);

var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);

function Breadcrumb(props) {
  return __jsx("div", {
    className: "page-header",
    style: {
      backgroundImage: `url( ./images/home/page-header.jpg )`,
      backgroundColor: "#584B3B"
    }
  }, __jsx("h1", {
    className: "page-title"
  }, props.title), __jsx("ul", {
    className: "breadcrumb"
  }, __jsx("li", null, __jsx(_components_features_custom_link__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z, {
    href: "/"
  }, __jsx("i", {
    className: "d-icon-home"
  }))), __jsx("li", {
    className: "delimiter"
  }, "/"), props.parentUrl ? __jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, __jsx("li", null, __jsx(_components_features_custom_link__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z, {
    href: props.parentUrl
  }, props.subTitle)), __jsx("li", {
    className: "delimiter"
  }, "/")) : "", __jsx("li", null, props.title)));
}

/***/ }),

/***/ 2803:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6481);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_features_breadcrumb__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4699);
/* harmony import */ var _components_features_accordion_accordion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7185);
/* harmony import */ var _components_features_accordion_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2674);
/* harmony import */ var _components_partials_elements_elements_list__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3405);
var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);







function Accordions() {
  return __jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, __jsx((react_helmet__WEBPACK_IMPORTED_MODULE_1___default()), null, __jsx("title", null, "Riode React eCommerce Template | Accordions")), __jsx("h1", {
    className: "d-none"
  }, "Riode React eCommerce Template - Accordions"), __jsx(_components_features_breadcrumb__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, {
    subTitle: "Elements",
    title: "Element Accordions",
    parentUrl: "/elements"
  }), __jsx("div", {
    className: "page-content"
  }, __jsx("section", {
    className: "mt-6 pt-10 pb-10 mb-7"
  }, __jsx("div", {
    className: "container"
  }, __jsx("h2", {
    className: "title title-center mb-5"
  }, "Simple"), __jsx("div", {
    className: "row"
  }, __jsx("div", {
    className: "col-md-6 mb-6"
  }, __jsx(_components_features_accordion_accordion__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {
    adClass: "accordion-simple"
  }, __jsx(_components_features_accordion_card__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z, {
    title: "First Header",
    expanded: true,
    adClass: "border-no"
  }, __jsx("p", {
    className: "mb-0"
  }, "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede. Donec nec justo eget felis facilisis fermentum.")), __jsx(_components_features_accordion_card__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z, {
    title: "Second Header"
  }, __jsx("p", {
    className: "mb-0"
  }, "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede. Donec nec justo eget felis facilisis fermentum.")), __jsx(_components_features_accordion_card__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z, {
    title: "Third Header"
  }, __jsx("p", {
    className: "mb-0"
  }, "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede. Donec nec justo eget felis facilisis fermentum.")))), __jsx("div", {
    className: "col-md-6 mb-6"
  }, __jsx(_components_features_accordion_accordion__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {
    adClass: "accordion-border accordion-boxed accordion-plus"
  }, __jsx(_components_features_accordion_card__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z, {
    title: "First Header",
    expanded: true
  }, __jsx("p", {
    className: "mb-0"
  }, "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede. Donec nec justo eget felis facilisis fermentum.")), __jsx(_components_features_accordion_card__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z, {
    title: "Second Header"
  }, __jsx("p", {
    className: "mb-0"
  }, "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede. Donec nec justo eget felis facilisis fermentum.")), __jsx(_components_features_accordion_card__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z, {
    title: "Third Header"
  }, __jsx("p", {
    className: "mb-0"
  }, "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede. Donec nec justo eget felis facilisis fermentum."))))))), __jsx("section", {
    className: "pt-10 pb-8 grey-section"
  }, __jsx("div", {
    className: "container mt-4"
  }, __jsx("div", {
    className: "row"
  }, __jsx("div", {
    className: "col-md-6 mb-6"
  }, __jsx("h2", {
    className: "title title-sm title-center mb-5"
  }, "On Background"), __jsx(_components_features_accordion_accordion__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {
    adClass: "accordion-boxed accordion-plus accordion-gutter-md"
  }, __jsx(_components_features_accordion_card__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z, {
    title: "First Header",
    expanded: true
  }, __jsx("p", {
    className: "mb-0"
  }, "De moveat laudatur vestra parum doloribus labitur sentire partes, eripuit praesenti congressus ostendit alienae, voluptati ornateque accusamus clamat reperietur convicia albucius, veniat quocirca vivendi aristotele errorem epicurus. Suppetet. Aeternum animadversionis.")), __jsx(_components_features_accordion_card__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z, {
    title: "Second Header"
  }, __jsx("p", {
    className: "mb-0"
  }, "De moveat laudatur vestra parum doloribus labitur sentire partes, eripuit praesenti congressus ostendit alienae, voluptati ornateque accusamus clamat reperietur convicia albucius, veniat quocirca vivendi aristotele errorem epicurus. Suppetet. Aeternum animadversionis.")), __jsx(_components_features_accordion_card__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z, {
    title: "Third Header"
  }, __jsx("p", {
    className: "mb-0"
  }, "De moveat laudatur vestra parum doloribus labitur sentire partes, eripuit praesenti congressus ostendit alienae, voluptati ornateque accusamus clamat reperietur convicia albucius, veniat quocirca vivendi aristotele errorem epicurus. Suppetet. Aeternum animadversionis.")))), __jsx("div", {
    className: "col-md-6 mb-6"
  }, __jsx("h2", {
    className: "title title-sm title-center mb-5"
  }, "Drop Shadow"), __jsx(_components_features_accordion_accordion__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {
    adClass: "accordion accordion-dropshadow accordion-boxed accordion-plus accordion-gutter-sm"
  }, __jsx(_components_features_accordion_card__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z, {
    title: "First Header",
    expanded: true
  }, __jsx("p", {
    className: "mb-0"
  }, "De moveat laudatur vestra parum doloribus labitur sentire partes, eripuit praesenti congressus ostendit alienae, voluptati ornateque accusamus clamat reperietur convicia albucius, veniat quocirca vivendi aristotele errorem epicurus. Suppetet. Aeternum animadversionis.")), __jsx(_components_features_accordion_card__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z, {
    title: "Second Header"
  }, __jsx("p", {
    className: "mb-0"
  }, "De moveat laudatur vestra parum doloribus labitur sentire partes, eripuit praesenti congressus ostendit alienae, voluptati ornateque accusamus clamat reperietur convicia albucius, veniat quocirca vivendi aristotele errorem epicurus. Suppetet. Aeternum animadversionis.")), __jsx(_components_features_accordion_card__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z, {
    title: "Third Header"
  }, __jsx("p", {
    className: "mb-0"
  }, "De moveat laudatur vestra parum doloribus labitur sentire partes, eripuit praesenti congressus ostendit alienae, voluptati ornateque accusamus clamat reperietur convicia albucius, veniat quocirca vivendi aristotele errorem epicurus. Suppetet. Aeternum animadversionis."))))))), __jsx("section", {
    className: "mt-4 pt-10 pb-8"
  }, __jsx("div", {
    className: "container"
  }, __jsx("h2", {
    className: "title title-center"
  }, "Color"), __jsx("div", {
    className: "row"
  }, __jsx("div", {
    className: "col-md-6 mb-6"
  }, __jsx(_components_features_accordion_accordion__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {
    adClass: "accordion accordion-card-bg accordion-boxed accordion-plus accordion-gutter-md"
  }, __jsx(_components_features_accordion_card__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z, {
    title: "First Header",
    expanded: true
  }, __jsx("p", {
    className: "mb-0"
  }, "De moveat laudatur vestra parum doloribus labitur sentire partes, eripuit praesenti congressus ostendit alienae, voluptati ornateque accusamus clamat reperietur convicia albucius, veniat quocirca vivendi aristotele errorem epicurus. Suppetet. Aeternum animadversionis.")), __jsx(_components_features_accordion_card__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z, {
    title: "Second Header"
  }, __jsx("p", {
    className: "mb-0"
  }, "De moveat laudatur vestra parum doloribus labitur sentire partes, eripuit praesenti congressus ostendit alienae, voluptati ornateque accusamus clamat reperietur convicia albucius, veniat quocirca vivendi aristotele errorem epicurus. Suppetet. Aeternum animadversionis.")), __jsx(_components_features_accordion_card__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z, {
    title: "Third Header"
  }, __jsx("p", {
    className: "mb-0"
  }, "De moveat laudatur vestra parum doloribus labitur sentire partes, eripuit praesenti congressus ostendit alienae, voluptati ornateque accusamus clamat reperietur convicia albucius, veniat quocirca vivendi aristotele errorem epicurus. Suppetet. Aeternum animadversionis.")))), __jsx("div", {
    className: "col-md-6 mb-6"
  }, __jsx(_components_features_accordion_accordion__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {
    adClass: "accordion accordion-card-bg accordion-primary accordion-boxed accordion-plus accordion-gutter-md"
  }, __jsx(_components_features_accordion_card__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z, {
    title: "First Header",
    expanded: true
  }, __jsx("p", {
    className: "mb-0"
  }, "De moveat laudatur vestra parum doloribus labitur sentire partes, eripuit praesenti congressus ostendit alienae, voluptati ornateque accusamus clamat reperietur convicia albucius, veniat quocirca vivendi aristotele errorem epicurus. Suppetet. Aeternum animadversionis.")), __jsx(_components_features_accordion_card__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z, {
    title: "Second Header"
  }, __jsx("p", {
    className: "mb-0"
  }, "De moveat laudatur vestra parum doloribus labitur sentire partes, eripuit praesenti congressus ostendit alienae, voluptati ornateque accusamus clamat reperietur convicia albucius, veniat quocirca vivendi aristotele errorem epicurus. Suppetet. Aeternum animadversionis.")), __jsx(_components_features_accordion_card__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z, {
    title: "Third Header"
  }, __jsx("p", {
    className: "mb-0"
  }, "De moveat laudatur vestra parum doloribus labitur sentire partes, eripuit praesenti congressus ostendit alienae, voluptati ornateque accusamus clamat reperietur convicia albucius, veniat quocirca vivendi aristotele errorem epicurus. Suppetet. Aeternum animadversionis."))))))), __jsx("section", {
    className: "grey-section pt-10 pb-10"
  }, __jsx("div", {
    className: "container pt-4 pb-4"
  }, __jsx("h2", {
    className: "title title-center"
  }, "With icon"), __jsx(_components_features_accordion_accordion__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {
    adClass: "accordion-background accordion-icon accordion-boxed accordion-card-border accordion-plus accordion-gutter-sm"
  }, __jsx(_components_features_accordion_card__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z, {
    title: "First Header",
    expanded: true,
    iconClass: "far fa-heart"
  }, __jsx("p", {
    className: "mb-0"
  }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.")), __jsx(_components_features_accordion_card__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z, {
    title: "Second Header",
    iconClass: "far fa-star"
  }, __jsx("div", {
    className: "card-body"
  }, __jsx("p", {
    className: "mb-0"
  }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."))), __jsx(_components_features_accordion_card__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z, {
    title: "Third Header",
    iconClass: "la la-info-circle mr-2"
  }, __jsx("div", {
    className: "card-body"
  }, __jsx("p", {
    className: "mb-0"
  }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.")))))), __jsx(_components_partials_elements_elements_list__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z, {
    adClass: "bg-white"
  })));
}

/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().memo(Accordions));

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

/***/ 3920:
/***/ (function(module) {

"use strict";
module.exports = require("react-slide-toggle");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, [1664,5588,2674,3405,7185], function() { return __webpack_exec__(2803); });
module.exports = __webpack_exports__;

})();