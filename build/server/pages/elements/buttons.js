(function() {
var exports = {};
exports.id = 2489;
exports.ids = [2489,3866];
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

/***/ 1360:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6481);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_features_custom_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8765);
/* harmony import */ var _components_features_breadcrumb__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4699);
/* harmony import */ var _components_partials_elements_elements_list__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3405);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6442);
var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);







function Buttons() {
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    window.addEventListener('scroll', _utils__WEBPACK_IMPORTED_MODULE_5__/* .parallaxHandler */ .K6, true);
    return () => {
      window.removeEventListener('scroll', _utils__WEBPACK_IMPORTED_MODULE_5__/* .parallaxHandler */ .K6, true);
    };
  }, []);
  return __jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, __jsx((react_helmet__WEBPACK_IMPORTED_MODULE_1___default()), null, __jsx("title", null, "Riode React eCommerce Template | Buttons")), __jsx("h1", {
    className: "d-none"
  }, "Riode React eCommerce Template - Buttons"), __jsx(_components_features_breadcrumb__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {
    subTitle: "Elements",
    title: "Element Buttons",
    parentUrl: "/elements"
  }), __jsx("div", {
    className: "page-content mt-10 pt-10"
  }, __jsx("section", {
    className: "section-buttons"
  }, __jsx("div", {
    className: "container"
  }, __jsx("div", {
    className: "mb-10 pb-2"
  }, __jsx("div", {
    className: "title-wrapper"
  }, __jsx("h2", {
    className: "title title-center"
  }, "Default Style"), __jsx("p", {
    className: "text-center"
  }, "Select between any button styles and color you want.")), __jsx("div", {
    className: "row"
  }, __jsx("div", {
    className: "col-6 col-sm-4 col-md-3 col-lg-2"
  }, __jsx(_components_features_custom_link__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, {
    href: "#",
    className: "btn btn-block"
  }, "Default")), __jsx("div", {
    className: "col-6 col-sm-4 col-md-3 col-lg-2"
  }, __jsx(_components_features_custom_link__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, {
    href: "#",
    className: "btn btn-primary btn-block"
  }, "Primary Color")), __jsx("div", {
    className: "col-6 col-sm-4 col-md-3 col-lg-2"
  }, __jsx(_components_features_custom_link__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, {
    href: "#",
    className: "btn btn-secondary btn-block"
  }, "Secondary Color")), __jsx("div", {
    className: "col-6 col-sm-4 col-md-3 col-lg-2"
  }, __jsx(_components_features_custom_link__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, {
    href: "#",
    className: "btn btn-alert btn-block"
  }, "Alert Color")), __jsx("div", {
    className: "col-6 col-sm-4 col-md-3 col-lg-2"
  }, __jsx(_components_features_custom_link__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, {
    href: "#",
    className: "btn btn-success btn-block"
  }, "Success Color")), __jsx("div", {
    className: "col-6 col-sm-4 col-md-3 col-lg-2"
  }, __jsx(_components_features_custom_link__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, {
    href: "#",
    className: "btn btn-dark btn-block"
  }, "Dark Color")))), __jsx("div", {
    className: "row"
  }, __jsx("div", {
    className: "col-lg-6 mb-10"
  }, __jsx("h2", {
    className: "title title-sm title-center "
  }, "Default Border"), __jsx("div", {
    className: "row"
  }, __jsx("div", {
    className: "col-6 col-sm-4 col-md-3 col-lg-4"
  }, __jsx(_components_features_custom_link__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, {
    href: "#",
    className: "btn btn-outline btn-block"
  }, "Default")), __jsx("div", {
    className: "col-6 col-sm-4 col-md-3 col-lg-4"
  }, __jsx(_components_features_custom_link__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, {
    href: "#",
    className: "btn btn-outline btn-primary btn-block"
  }, "Primary Color")), __jsx("div", {
    className: "col-6 col-sm-4 col-md-3 col-lg-4"
  }, __jsx(_components_features_custom_link__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, {
    href: "#",
    className: "btn btn-outline btn-secondary btn-block"
  }, "Secondary Color")))), __jsx("div", {
    className: "col-lg-6 mb-10"
  }, __jsx("h2", {
    className: "title title-sm title-center"
  }, "Light Border"), __jsx("div", {
    className: "row"
  }, __jsx("div", {
    className: "col-6 col-sm-4 col-md-3 col-lg-4"
  }, __jsx(_components_features_custom_link__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, {
    href: "#",
    className: "btn btn-outline btn-outline-light btn-alert btn-block"
  }, "Alert Color")), __jsx("div", {
    className: "col-6 col-sm-4 col-md-3 col-lg-4"
  }, __jsx(_components_features_custom_link__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, {
    href: "#",
    className: "btn btn-outline btn-outline-light btn-success btn-block"
  }, "Success Color")), __jsx("div", {
    className: "col-6 col-sm-4 col-md-3 col-lg-4"
  }, __jsx(_components_features_custom_link__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, {
    href: "#",
    className: "btn btn-outline btn-outline-light btn-dark btn-block"
  }, "Dark Color"))))))), __jsx("section", {
    className: "section-buttons grey-section pt-10"
  }, __jsx("div", {
    className: "container"
  }, __jsx("div", {
    className: "mb-10 mt-4 pb-2"
  }, __jsx("div", {
    className: "title-wrapper"
  }, __jsx("h2", {
    className: "title title-center"
  }, "Flat With Icon"), __jsx("p", {
    className: "text-center"
  }, "Add included Riode icons to default buttons, using any color.")), __jsx("div", {
    className: "row"
  }, __jsx("div", {
    className: "col-6 col-sm-4 col-md-3 col-lg-2"
  }, __jsx(_components_features_custom_link__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, {
    href: "#",
    className: "btn btn-block btn-icon-left btn-slide-left"
  }, __jsx("i", {
    className: "d-icon-arrow-left"
  }), __jsx("span", null, "Slide Left"))), __jsx("div", {
    className: "col-6 col-sm-4 col-md-3 col-lg-2"
  }, __jsx(_components_features_custom_link__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, {
    href: "#",
    className: "btn btn-block btn-icon-left btn-slide-right"
  }, __jsx("i", {
    className: "d-icon-arrow-right"
  }), __jsx("span", null, "Slide Right"))), __jsx("div", {
    className: "col-6 col-sm-4 col-md-3 col-lg-2"
  }, __jsx(_components_features_custom_link__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, {
    href: "#",
    className: "btn btn-block btn-icon-left btn-slide-up"
  }, __jsx("i", {
    className: "d-icon-arrow-up"
  }), __jsx("span", null, "Slide Up"))), __jsx("div", {
    className: "col-6 col-sm-4 col-md-3 col-lg-2"
  }, __jsx(_components_features_custom_link__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, {
    href: "#",
    className: "btn btn-block btn-icon-left btn-slide-down"
  }, __jsx("i", {
    className: "d-icon-arrow-down"
  }), __jsx("span", null, "Slide Down"))), __jsx("div", {
    className: "col-6 col-sm-4 col-md-3 col-lg-2"
  }, __jsx(_components_features_custom_link__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, {
    href: "#",
    className: "btn btn-block btn-reveal-left"
  }, __jsx("i", {
    className: "d-icon-arrow-left"
  }), __jsx("span", null, "Reveal Left"))), __jsx("div", {
    className: "col-6 col-sm-4 col-md-3 col-lg-2"
  }, __jsx(_components_features_custom_link__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, {
    href: "#",
    className: "btn btn-block btn-reveal-right"
  }, __jsx("span", null, "Reveal Right"), __jsx("i", {
    className: "d-icon-arrow-right"
  }))))), __jsx("div", {
    className: "row"
  }, __jsx("div", {
    className: "col-lg-6 mb-10"
  }, __jsx("h2", {
    className: "title title-sm title-center"
  }, "Shadow"), __jsx("div", {
    className: "row"
  }, __jsx("div", {
    className: "col-6 col-sm-4 col-md-3 col-lg-4"
  }, __jsx(_components_features_custom_link__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, {
    href: "#",
    className: "btn btn-shadow-sm btn-white btn-block"
  }, __jsx("span", null, "Shadow1"))), __jsx("div", {
    className: "col-6 col-sm-4 col-md-3 col-lg-4"
  }, __jsx(_components_features_custom_link__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, {
    href: "#",
    className: "btn btn-shadow btn-white btn-block"
  }, __jsx("span", null, "Shadow2"))), __jsx("div", {
    className: "col-6 col-sm-4 col-md-3 col-lg-4"
  }, __jsx(_components_features_custom_link__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, {
    href: "#",
    className: "btn btn-shadow-lg btn-white btn-block"
  }, __jsx("span", null, "Shadow3"))), __jsx("div", {
    className: "col-6 col-sm-4 col-md-3 col-lg-4"
  }, __jsx(_components_features_custom_link__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, {
    href: "#",
    className: "btn btn-primary btn-shadow-lg btn-rounded btn-block"
  }, __jsx("span", null, "Rounded"))), __jsx("div", {
    className: "col-6 col-sm-4 col-md-3 col-lg-4"
  }, __jsx(_components_features_custom_link__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, {
    href: "#",
    className: "btn btn-primary btn-shadow-lg btn-ellipse btn-block"
  }, __jsx("span", null, "Ellipse"))), __jsx("div", {
    className: "col-6 col-sm-4 col-md-3 col-lg-4"
  }, __jsx(_components_features_custom_link__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, {
    href: "#",
    className: "btn btn-shadow btn-disabled btn-block "
  }, __jsx("span", null, "Disabled"))))), __jsx("div", {
    className: "col-lg-6 mb-10"
  }, __jsx("h2", {
    className: "title title-sm title-center"
  }, "Block With Icon"), __jsx(_components_features_custom_link__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, {
    className: "btn btn-outline btn-block",
    href: "#"
  }, "Full Width"), __jsx(_components_features_custom_link__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, {
    className: "btn btn-primary btn-block btn-icon-right",
    href: "#"
  }, "Full Width"))))), __jsx("section", {
    className: "section-buttons pt-10"
  }, __jsx("div", {
    className: "container"
  }, __jsx("div", {
    className: "btn-simple-wrapper mb-10 mt-4 pb-1"
  }, __jsx("h2", {
    className: "title title-center mb-7"
  }, "Simple Button"), __jsx("div", {
    className: "row align-items-center"
  }, __jsx("div", {
    className: "col-6 col-sm-4 col-md-3 col-lg-2"
  }, __jsx(_components_features_custom_link__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, {
    href: "#",
    className: "btn btn-underline sm btn-link"
  }, "Underline 1")), __jsx("div", {
    className: "col-6 col-sm-4 col-md-3 col-lg-2"
  }, __jsx(_components_features_custom_link__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, {
    href: "#",
    className: "btn btn-underline btn-link"
  }, "Underline 2")), __jsx("div", {
    className: "col-6 col-sm-4 col-md-3 col-lg-2"
  }, __jsx(_components_features_custom_link__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, {
    href: "#",
    className: "btn btn-underline lg btn-link"
  }, "Underline 3")), __jsx("div", {
    className: "col-6 col-sm-4 col-md-3 col-lg-2"
  }, __jsx(_components_features_custom_link__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, {
    href: "#",
    className: "btn btn-block btn-primary btn-link"
  }, "Primary Color")), __jsx("div", {
    className: "col-6 col-sm-4 col-md-3 col-lg-2"
  }, __jsx(_components_features_custom_link__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, {
    href: "#",
    className: "btn btn-block btn-secondary btn-link"
  }, "Secondary Color")), __jsx("div", {
    className: "col-6 col-sm-4 col-md-3 col-lg-2"
  }, __jsx(_components_features_custom_link__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, {
    href: "#",
    className: "btn btn-block btn-success btn-link"
  }, "Success Color")))), __jsx("div", {
    className: "mb-10 pb-1"
  }, __jsx("div", {
    className: "title-wrapper"
  }, __jsx("h2", {
    className: "title title-center"
  }, "Shape & Size"), __jsx("p", {
    className: "text-center mb-2"
  }, "Size might vary from smaller screen to a larger screen.")), __jsx("div", {
    className: "row"
  }, __jsx("div", {
    className: "col-lg-6 btn-wrapper"
  }, __jsx(_components_features_custom_link__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, {
    href: "#",
    className: "btn btn-outline btn-lg"
  }, "Large Size"), __jsx(_components_features_custom_link__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, {
    href: "#",
    className: "btn btn-outline"
  }, "Normal Size"), __jsx(_components_features_custom_link__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, {
    href: "#",
    className: "btn btn-outline btn-md"
  }, "Medium Size"), __jsx(_components_features_custom_link__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, {
    href: "#",
    className: "btn btn-outline btn-sm"
  }, "Small Size")), __jsx("div", {
    className: "col-lg-6 btn-wrapper"
  }, __jsx(_components_features_custom_link__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, {
    href: "#",
    className: "btn btn-block btn-outline"
  }, "Rectangle"), __jsx(_components_features_custom_link__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, {
    href: "#",
    className: "btn btn-block btn-outline btn-rounded"
  }, "Rounded"), __jsx(_components_features_custom_link__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, {
    href: "#",
    className: "btn btn-block btn-outline btn-ellipse"
  }, "Ellipse")))))), __jsx("section", {
    className: "section-buttons background-section parallax",
    "data-option": "{'speed': 1}",
    style: {
      backgroundImage: 'url(./images/buttons/banner.jpg)'
    }
  }, __jsx("div", {
    className: "container"
  }, __jsx("div", {
    className: "title-wrapper title-white"
  }, __jsx("h2", {
    className: "title title-center"
  }, "On Background"), __jsx("p", {
    className: "text-center"
  }, "These are the Button Style on dark Background.")), __jsx("div", {
    className: "row"
  }, __jsx("div", {
    className: "col-6 col-sm-4 col-md-3 col-lg-2"
  }, __jsx(_components_features_custom_link__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, {
    href: "#",
    className: "btn btn-block"
  }, "Default")), __jsx("div", {
    className: "col-6 col-sm-4 col-md-3 col-lg-2"
  }, __jsx(_components_features_custom_link__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, {
    href: "#",
    className: "btn btn-primary btn-block"
  }, "Primary Color")), __jsx("div", {
    className: "col-6 col-sm-4 col-md-3 col-lg-2"
  }, __jsx(_components_features_custom_link__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, {
    href: "#",
    className: "btn btn-secondary btn-block"
  }, "Secondary Color")), __jsx("div", {
    className: "col-6 col-sm-4 col-md-3 col-lg-2"
  }, __jsx(_components_features_custom_link__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, {
    href: "#",
    className: "btn btn-alert btn-block"
  }, "Alert Color")), __jsx("div", {
    className: "col-6 col-sm-4 col-md-3 col-lg-2"
  }, __jsx(_components_features_custom_link__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, {
    href: "#",
    className: "btn btn-success btn-block"
  }, "Success Color")), __jsx("div", {
    className: "col-6 col-sm-4 col-md-3 col-lg-2"
  }, __jsx(_components_features_custom_link__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, {
    href: "#",
    className: "btn btn-dark btn-block"
  }, "Dark Color")), __jsx("div", {
    className: "col-6 col-sm-4 col-md-3 col-lg-2"
  }, __jsx(_components_features_custom_link__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, {
    href: "#",
    className: "btn btn-outline btn-block btn-bg"
  }, "Default")), __jsx("div", {
    className: "col-6 col-sm-4 col-md-3 col-lg-2"
  }, __jsx(_components_features_custom_link__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, {
    href: "#",
    className: "btn btn-outline btn-primary btn-block"
  }, "Primary Color")), __jsx("div", {
    className: "col-6 col-sm-4 col-md-3 col-lg-2"
  }, __jsx(_components_features_custom_link__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, {
    href: "#",
    className: "btn btn-outline btn-secondary btn-block"
  }, "Secondary Color")), __jsx("div", {
    className: "col-6 col-sm-4 col-md-3 col-lg-2"
  }, __jsx(_components_features_custom_link__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, {
    href: "#",
    className: "btn btn-outline btn-alert btn-block"
  }, "Alert Color")), __jsx("div", {
    className: "col-6 col-sm-4 col-md-3 col-lg-2"
  }, __jsx(_components_features_custom_link__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, {
    href: "#",
    className: "btn btn-outline btn-success btn-block"
  }, "Success Color")), __jsx("div", {
    className: "col-6 col-sm-4 col-md-3 col-lg-2"
  }, __jsx(_components_features_custom_link__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, {
    href: "#",
    className: "btn btn-outline btn-block btn-white"
  }, "White Color"))))), __jsx(_components_partials_elements_elements_list__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z, null)));
}

/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().memo(Buttons));

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
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, [1664,5588,3405], function() { return __webpack_exec__(1360); });
module.exports = __webpack_exports__;

})();