(function() {
var exports = {};
exports.id = 5522;
exports.ids = [5522,3866];
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

/***/ 4504:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6481);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_features_breadcrumb__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4699);
/* harmony import */ var _components_features_owl_carousel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4138);
/* harmony import */ var _components_partials_elements_elements_list__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3405);
/* harmony import */ var _utils_data_carousel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4943);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6442);
var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);








function ElementTabs() {
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    window.addEventListener('scroll', _utils__WEBPACK_IMPORTED_MODULE_6__/* .parallaxHandler */ .K6, true);
    return () => {
      window.removeEventListener('scroll', _utils__WEBPACK_IMPORTED_MODULE_6__/* .parallaxHandler */ .K6, true);
    };
  }, []);
  return __jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, __jsx((react_helmet__WEBPACK_IMPORTED_MODULE_1___default()), null, __jsx("title", null, "Riode React eCommerce Template | Testimonials")), __jsx("h1", {
    className: "d-none"
  }, "Riode React eCommerce Template - Testimonials"), __jsx(_components_features_breadcrumb__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, {
    subTitle: "Elements",
    title: "Element Tabs",
    parentUrl: "/elements"
  }), __jsx("div", {
    className: "page-content"
  }, __jsx("section", {
    className: "mt-10 pt-8"
  }, __jsx("div", {
    className: "container"
  }, __jsx("h2", {
    className: "title title-center mb-5"
  }, "Default"), __jsx(_components_features_owl_carousel__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {
    adClass: "owl-theme",
    options: _utils_data_carousel__WEBPACK_IMPORTED_MODULE_5__/* .mainSlider6 */ .wf
  }, __jsx("div", {
    className: "testimonial"
  }, __jsx("blockquote", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu ante eget nisl convallis tempus Phsellus anctus, tincidunt tincidunt dui."), __jsx("div", {
    className: "testimonial-info"
  }, __jsx("figure", {
    className: "testimonial-author-thumbnail"
  }, __jsx("img", {
    src: "./images/agents/1.jpg",
    alt: "user",
    width: "50",
    height: "50"
  })), __jsx("cite", null, "Herman Beck", __jsx("span", null, "Investor")))), __jsx("div", {
    className: "testimonial"
  }, __jsx("blockquote", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu ante eget nisl convallis tempus Phsellus anctus, tincidunt tincidunt dui."), __jsx("div", {
    className: "testimonial-info"
  }, __jsx("figure", {
    className: "testimonial-author-thumbnail"
  }, __jsx("img", {
    src: "./images/agents/2.jpg",
    alt: "user",
    width: "50",
    height: "50"
  })), __jsx("cite", null, "Herman Beck", __jsx("span", null, "Investor")))), __jsx("div", {
    className: "testimonial"
  }, __jsx("blockquote", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu ante eget nisl convallis tempus Phsellus anctus, tincidunt tincidunt dui."), __jsx("div", {
    className: "testimonial-info"
  }, __jsx("figure", {
    className: "testimonial-author-thumbnail"
  }, __jsx("img", {
    src: "./images/agents/3.jpg",
    alt: "user",
    width: "50",
    height: "50"
  })), __jsx("cite", null, "Herman Beck", __jsx("span", null, "Investor"))))))), __jsx("section", {
    className: "mt-10 pt-6"
  }, __jsx("div", {
    className: "container"
  }, __jsx("h2", {
    className: "title title-center"
  }, "Inversed"), __jsx(_components_features_owl_carousel__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {
    adClass: "owl-theme",
    options: _utils_data_carousel__WEBPACK_IMPORTED_MODULE_5__/* .mainSlider6 */ .wf
  }, __jsx("div", {
    className: "testimonial testimonial-inversed"
  }, __jsx("blockquote", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu ante eget nisl convallis tempus Phsellus anctus, tincidunt tincidunt dui."), __jsx("div", {
    className: "testimonial-info"
  }, __jsx("figure", {
    className: "testimonial-author-thumbnail"
  }, __jsx("img", {
    src: "./images/agents/1.jpg",
    alt: "user",
    width: "50",
    height: "50"
  })), __jsx("cite", null, "Herman Beck", __jsx("span", null, "Investor")))), __jsx("div", {
    className: "testimonial testimonial-inversed"
  }, __jsx("blockquote", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu ante eget nisl convallis tempus Phsellus anctus, tincidunt tincidunt dui."), __jsx("div", {
    className: "testimonial-info"
  }, __jsx("figure", {
    className: "testimonial-author-thumbnail"
  }, __jsx("img", {
    src: "./images/agents/2.jpg",
    alt: "user",
    width: "50",
    height: "50"
  })), __jsx("cite", null, "Herman Beck", __jsx("span", null, "Investor")))), __jsx("div", {
    className: "testimonial testimonial-inversed"
  }, __jsx("blockquote", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu ante eget nisl convallis tempus Phsellus anctus, tincidunt tincidunt dui."), __jsx("div", {
    className: "testimonial-info"
  }, __jsx("figure", {
    className: "testimonial-author-thumbnail"
  }, __jsx("img", {
    src: "./images/agents/3.jpg",
    alt: "user",
    width: "50",
    height: "50"
  })), __jsx("cite", null, "Herman Beck", __jsx("span", null, "Investor"))))))), __jsx("section", {
    className: "mt-10 pt-6"
  }, __jsx("div", {
    className: "container"
  }, __jsx("h2", {
    className: "title title-center"
  }, "Centered"), __jsx(_components_features_owl_carousel__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {
    adClass: "owl-theme",
    options: _utils_data_carousel__WEBPACK_IMPORTED_MODULE_5__/* .mainSlider6 */ .wf
  }, __jsx("div", {
    className: "testimonial testimonial-centered"
  }, __jsx("div", {
    className: "testimonial-info"
  }, __jsx("h3", {
    className: "testimonial-title"
  }, "What they say about us"), __jsx("figure", {
    className: "testimonial-author-thumbnail"
  }, __jsx("img", {
    src: "./images/agents/4.jpg",
    alt: "user",
    width: "40",
    height: "40"
  })), __jsx("blockquote", null, "\u201C Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque \u201D"), __jsx("cite", null, "Herman Beck", __jsx("span", null, "Customer")))), __jsx("div", {
    className: "testimonial testimonial-centered testimonial-border"
  }, __jsx("div", {
    className: "testimonial-info"
  }, __jsx("h3", {
    className: "testimonial-title"
  }, "What they say about us"), __jsx("figure", {
    className: "testimonial-author-thumbnail"
  }, __jsx("img", {
    src: "./images/agents/4.jpg",
    alt: "user",
    width: "40",
    height: "40"
  })), __jsx("blockquote", null, "\u201C Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque \u201D"), __jsx("cite", null, "Mary Adams", __jsx("span", null, "Customer")))), __jsx("div", {
    className: "testimonial testimonial-centered"
  }, __jsx("div", {
    className: "testimonial-info"
  }, __jsx("h3", {
    className: "testimonial-title"
  }, "What they say about us"), __jsx("figure", {
    className: "testimonial-author-thumbnail"
  }, __jsx("img", {
    src: "./images/agents/5.jpg",
    alt: "user",
    width: "40",
    height: "40"
  })), __jsx("blockquote", null, "\u201C Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque \u201D"), __jsx("cite", null, "Owen Hunt", __jsx("span", null, "Customer"))))))), __jsx("section", {
    className: "mt-10 pt-6 mb-8 pb-2"
  }, __jsx("div", {
    className: "container"
  }, __jsx("h2", {
    className: "title title-center"
  }, "Slider"), __jsx("div", {
    className: "row"
  }, __jsx("div", {
    className: "col-md-6 mb-6"
  }, __jsx(_components_features_owl_carousel__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {
    adClass: "owl-nav-bottom",
    options: _utils_data_carousel__WEBPACK_IMPORTED_MODULE_5__/* .mainSlider7 */ .wI
  }, __jsx("div", {
    className: "testimonial"
  }, __jsx("blockquote", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu ante eget nisl convallis tempus Phsellus anctus, tincidunt tincidunt dui.met, consectetur adipiscing elit. Sed eu ante eget nisldolor sit amet."), __jsx("div", {
    className: "testimonial-info"
  }, __jsx("figure", {
    className: "testimonial-author-thumbnail"
  }, __jsx("img", {
    src: "./images/agents/1.jpg",
    alt: "user",
    width: "50",
    height: "50"
  })), __jsx("cite", null, "Herman Beck", __jsx("span", null, "Investor")))), __jsx("div", {
    className: "testimonial"
  }, __jsx("blockquote", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu ante eget nisl convallis tempus Phsellus anctus, tincidunt tincidunt dui.met, consectetur adipiscing elit. Sed eu ante eget nisldolor sit amet."), __jsx("div", {
    className: "testimonial-info"
  }, __jsx("figure", {
    className: "testimonial-author-thumbnail"
  }, __jsx("img", {
    src: "./images/agents/2.jpg",
    alt: "user",
    width: "50",
    height: "50"
  })), __jsx("cite", null, "Herman Beck", __jsx("span", null, "Investor")))), __jsx("div", {
    className: "testimonial"
  }, __jsx("blockquote", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu ante eget nisl convallis tempus Phsellus anctus, tincidunt tincidunt dui.met, consectetur adipiscing elit. Sed eu ante eget nisldolor sit amet."), __jsx("div", {
    className: "testimonial-info"
  }, __jsx("figure", {
    className: "testimonial-author-thumbnail"
  }, __jsx("img", {
    src: "./images/agents/3.jpg",
    alt: "user",
    width: "50",
    height: "50"
  })), __jsx("cite", null, "Herman Beck", __jsx("span", null, "Investor")))))), __jsx("div", {
    className: "col-md-6 mb-6"
  }, __jsx(_components_features_owl_carousel__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {
    adClass: "owl-nav-bottom",
    options: _utils_data_carousel__WEBPACK_IMPORTED_MODULE_5__/* .mainSlider7 */ .wI
  }, __jsx("div", {
    className: "testimonial"
  }, __jsx("blockquote", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu ante eget nisl convallis tempus Phsellus anctus, tincidunt tincidunt dui.met, consectetur adipiscing elit. Sed eu ante eget nisldolor sit amet."), __jsx("div", {
    className: "testimonial-info"
  }, __jsx("figure", {
    className: "testimonial-author-thumbnail"
  }, __jsx("img", {
    src: "./images/agents/1.jpg",
    alt: "user",
    width: "50",
    height: "50"
  })), __jsx("cite", null, "Herman Beck", __jsx("span", null, "Investor")))), __jsx("div", {
    className: "testimonial"
  }, __jsx("blockquote", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu ante eget nisl convallis tempus Phsellus anctus, tincidunt tincidunt dui.met, consectetur adipiscing elit. Sed eu ante eget nisldolor sit amet."), __jsx("div", {
    className: "testimonial-info"
  }, __jsx("figure", {
    className: "testimonial-author-thumbnail"
  }, __jsx("img", {
    src: "./images/agents/2.jpg",
    alt: "user",
    width: "50",
    height: "50"
  })), __jsx("cite", null, "Herman Beck", __jsx("span", null, "Investor")))), __jsx("div", {
    className: "testimonial"
  }, __jsx("blockquote", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu ante eget nisl convallis tempus Phsellus anctus, tincidunt tincidunt dui.met, consectetur adipiscing elit. Sed eu ante eget nisldolor sit amet."), __jsx("div", {
    className: "testimonial-info"
  }, __jsx("figure", {
    className: "testimonial-author-thumbnail"
  }, __jsx("img", {
    src: "./images/agents/3.jpg",
    alt: "user",
    width: "50",
    height: "50"
  })), __jsx("cite", null, "Herman Beck", __jsx("span", null, "Investor"))))))))), __jsx("section", {
    className: "pt-10 pb-10 parallax",
    style: {
      backgroundImage: "url('./images/banner.jpg')"
    }
  }, __jsx("div", {
    className: "container mt-4 mb-4"
  }, __jsx("h2", {
    className: "title title-center title-white mb-0"
  }, "Centered on background"), __jsx(_components_features_owl_carousel__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {
    adClass: "owl-theme owl-dot-white",
    options: _utils_data_carousel__WEBPACK_IMPORTED_MODULE_5__/* .mainSlider4 */ .s1
  }, __jsx("div", {
    className: "testimonial testimonial-centered testimonial-bg"
  }, __jsx("div", {
    className: "testimonial-info"
  }, __jsx("figure", {
    className: "testimonial-author-thumbnail"
  }, __jsx("img", {
    src: "./images/agents/4.jpg",
    alt: "user",
    width: "50",
    height: "50"
  })), __jsx("blockquote", null, "\u201C Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim pellentesque felis. Morbi in sem quis dui placerat ornare. Pellentesque odio nisi, euismod in, pharetra \u201D"), __jsx("cite", null, "Charly Simth", __jsx("span", null, "Customer")))), __jsx("div", {
    className: "testimonial testimonial-centered testimonial-bg"
  }, __jsx("div", {
    className: "testimonial-info"
  }, __jsx("figure", {
    className: "testimonial-author-thumbnail"
  }, __jsx("img", {
    src: "./images/agents/5.jpg",
    alt: "user",
    width: "50",
    height: "50"
  })), __jsx("blockquote", null, "\u201C Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim pellentesque felis. Morbi in sem quis dui placerat ornare. Pellentesque odio nisi, euismod in, pharetra \u201D"), __jsx("cite", null, "Herman Beck", __jsx("span", null, "Investor")))), __jsx("div", {
    className: "testimonial testimonial-centered testimonial-bg"
  }, __jsx("div", {
    className: "testimonial-info"
  }, __jsx("figure", {
    className: "testimonial-author-thumbnail"
  }, __jsx("img", {
    src: "./images/agents/2.jpg",
    alt: "user",
    width: "50",
    height: "50"
  })), __jsx("blockquote", null, "\u201C Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim pellentesque felis. Morbi in sem quis dui placerat ornare. Pellentesque odio nisi, euismod in, pharetra \u201D"), __jsx("cite", null, "Herman Beck", __jsx("span", null, "Investor"))))))), __jsx(_components_partials_elements_elements_list__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z, {
    adClass: "bg-white mt-10"
  })));
}

/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().memo(ElementTabs));

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

/***/ 7033:
/***/ (function(module) {

"use strict";
module.exports = require("react-owl-carousel2");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, [1664,5588,4138,4943,3405], function() { return __webpack_exec__(4504); });
module.exports = __webpack_exports__;

})();