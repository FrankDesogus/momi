(function() {
var exports = {};
exports.id = 2853;
exports.ids = [2853,3866];
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

/***/ 783:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9290);
/* harmony import */ var react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6481);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_features_custom_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8765);
/* harmony import */ var _components_features_breadcrumb__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4699);
/* harmony import */ var _components_partials_elements_elements_list__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3405);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6442);
var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);








function Cta() {
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    window.addEventListener('scroll', _utils__WEBPACK_IMPORTED_MODULE_6__/* .parallaxHandler */ .K6, true);
    return () => {
      window.removeEventListener('scroll', _utils__WEBPACK_IMPORTED_MODULE_6__/* .parallaxHandler */ .K6, true);
    };
  }, []);
  return __jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, __jsx((react_helmet__WEBPACK_IMPORTED_MODULE_2___default()), null, __jsx("title", null, "Riode React eCommerce Template | Call To Action")), __jsx("h1", {
    className: "d-none"
  }, "Riode React eCommerce Template - Call To Action"), __jsx(_components_features_breadcrumb__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z, {
    subTitle: "Elements",
    title: "Element Call To Action",
    parentUrl: "/elements"
  }), __jsx("div", {
    className: "page-content"
  }, __jsx("section", {
    className: "mt-10 pt-4"
  }, __jsx("div", {
    className: "container"
  }, __jsx("h2", {
    className: "title title-center mb-5"
  }, "Simple"), __jsx("div", {
    className: "banner cta-simple"
  }, __jsx("div", {
    className: "banner-content bg-white d-lg-flex align-items-center"
  }, __jsx("div", {
    className: "banner-header pr-lg-7 pb-lg-0 pb-4 mb-lg-0 mb-6"
  }, __jsx("h3", {
    className: "banner-title font-weight-bold ls-s text-uppercase"
  }, "Trade-in"), __jsx("h4", {
    className: "banner-subtitle font-weight-normal ls-s text-body"
  }, "Upgrade and save")), __jsx("div", {
    className: "banner-text mb-lg-0 mb-4 mr-lg-4 pl-lg-6 pr-lg-0 pl-2 pr-2"
  }, __jsx("h4", {
    className: "font-weight-normal ls-normal text-uppercase mb-0"
  }, "Get a Riode gift card+25% off"), __jsx("p", {
    className: "ls-m mb-0"
  }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.")), __jsx(_components_features_custom_link__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {
    href: "#",
    className: "btn btn-primary btn-ellipse btn-md btn-rounded"
  }, "Shop Now", __jsx("i", {
    className: "d-icon-arrow-right"
  })))))), __jsx("section", {
    className: "mt-10 pt-4"
  }, __jsx("div", {
    className: "container"
  }, __jsx("h2", {
    className: "title title-center mb-5"
  }, "2 Columns"), __jsx("div", {
    className: "row"
  }, __jsx("div", {
    className: "col-md-6 mb-4"
  }, __jsx("div", {
    className: "banner banner-1 banner-fixed content-center content-middle"
  }, __jsx("figure", null, __jsx(react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_1__.LazyLoadImage, {
    src: "./images/cta/1.jpg",
    alt: "banner",
    width: "580",
    height: "330",
    effect: "opacity"
  })), __jsx("div", {
    className: "banner-content"
  }, __jsx("h3", {
    className: "banner-title text-uppercase font-weight-bold ls-m text-primary"
  }, "20% off"), __jsx("h4", {
    className: "banner-subtitle font-weight-bold ls-m text-white"
  }, "Riode Birthday Sale"), __jsx("p", {
    className: "ls-s text-light"
  }, "Get all the latest information on ", __jsx("br", null), "Events, Sales and Offers."), __jsx(_components_features_custom_link__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {
    href: "/shop",
    className: "btn btn-outline btn-white btn-md btn-rounded"
  }, "Discover now")))), __jsx("div", {
    className: "col-md-6 mb-4"
  }, __jsx("div", {
    className: "banner banner-2 banner-fixed content-center content-middle"
  }, __jsx("figure", null, __jsx(react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_1__.LazyLoadImage, {
    src: "./images/cta/2.jpg",
    alt: "banner",
    width: "580",
    height: "330",
    effect: "opacity"
  })), __jsx("div", {
    className: "banner-content"
  }, __jsx("h3", {
    className: "banner-title text-uppercase font-weight-normal ls-m text-white mb-3"
  }, "Subscribe to our", __jsx("br", null), __jsx("strong", null, "Newsletter")), __jsx("p", {
    className: "ls-normal text-white"
  }, "Start Shopping Right Now"), __jsx("form", {
    action: "#",
    method: "get",
    className: "input-wrapper"
  }, __jsx("input", {
    type: "email",
    className: "form-control w100 text-white text-center mb-4",
    name: "email",
    id: "email",
    placeholder: "Enter Your E-mail Address...",
    required: true
  }), __jsx("button", {
    className: "btn btn-white btn-md btn-ellipse btn-rounded",
    type: "submit"
  }, "Subscribe", __jsx("i", {
    className: "d-icon-arrow-right"
  }))))))))), __jsx("section", {
    className: "mt-9 pt-1"
  }, __jsx("div", {
    className: "container"
  }, __jsx("h2", {
    className: "title title-center"
  }, "3 Columns"), __jsx("div", {
    className: "banner-group row justify-content-center"
  }, __jsx("div", {
    className: "col-lg-4 col-sm-6 mb-4"
  }, __jsx("div", {
    className: "banner banner-3 banner-fixed banner-radius content-middle"
  }, __jsx("figure", null, __jsx(react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_1__.LazyLoadImage, {
    src: "./images/banners/banner1.jpg",
    alt: "banner",
    width: "380",
    height: "220",
    effect: "opacity"
  })), __jsx("div", {
    className: "banner-content"
  }, __jsx("h3", {
    className: "banner-title text-white mb-1"
  }, "For Men\u2019s"), __jsx("h4", {
    className: "banner-subtitle text-uppercase font-weight-normal text-white"
  }, "Starting at $29"), __jsx(_components_features_custom_link__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {
    href: "/shop",
    className: "btn btn-white btn-link btn-underline"
  }, "Shop Now", __jsx("i", {
    className: "d-icon-arrow-right"
  }))))), __jsx("div", {
    className: "col-lg-4 col-sm-6 mb-4 order-lg-auto order-sm-last"
  }, __jsx("div", {
    className: "banner banner-4 banner-fixed banner-radius content-middle content-center"
  }, __jsx("figure", null, __jsx(react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_1__.LazyLoadImage, {
    src: "./images/banners/banner2.jpg",
    alt: "banner",
    width: "380",
    height: "220",
    effect: "opacity"
  })), __jsx("div", {
    className: "banner-content d-flex align-items-center w-100 text-left"
  }, __jsx("div", {
    className: "mr-auto mb-4 mb-md-0"
  }, __jsx("h4", {
    className: "banner-subtitle text-white mb-0"
  }, "Up to 20% Off", __jsx("br", null), __jsx("span", {
    className: "ls-l"
  }, "Black Friday")), __jsx("h3", {
    className: "banner-title text-primary font-weight-bold lh-1 mb-0"
  }, "Sale")), __jsx(_components_features_custom_link__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {
    href: "/shop",
    className: "btn btn-primary btn-outline font-weight-bold text-white btn-rounded"
  }, "Shop Now", __jsx("i", {
    className: "d-icon-arrow-right"
  }))))), __jsx("div", {
    className: "col-lg-4 col-sm-6 mb-4"
  }, __jsx("div", {
    className: "banner banner-5 banner-fixed banner-radius content-middle"
  }, __jsx("figure", null, __jsx(react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_1__.LazyLoadImage, {
    src: "./images/banners/banner3.jpg",
    alt: "banner",
    width: "380",
    height: "220",
    effect: "opacity"
  })), __jsx("div", {
    className: "banner-content"
  }, __jsx("h3", {
    className: "banner-title text-white mb-1"
  }, "Fashions"), __jsx("h4", {
    className: "banner-subtitle text-uppercase font-weight-normal text-white"
  }, "30% Off"), __jsx(_components_features_custom_link__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {
    href: "/shop",
    className: "btn btn-white btn-link btn-underline"
  }, "Shop Now", __jsx("i", {
    className: "d-icon-arrow-right"
  })))))))), __jsx("section", {
    className: "mt-10"
  }, __jsx("div", {
    className: "container"
  }, __jsx("h2", {
    className: "title title-center"
  }, "Expanded Newsletter"), __jsx("div", {
    className: "banner banner-newsletter bg-whtie"
  }, __jsx("div", {
    className: "banner-content row gutter-no align-items-center pl-lg-6 pr-lg-6 pl-3 pr-3"
  }, __jsx("div", {
    className: "col-xl-5 col-lg-6"
  }, __jsx("div", {
    className: "icon-box icon-box-side mb-4 mb-lg-0"
  }, __jsx("div", {
    className: "icon-box-icon text-primary"
  }, __jsx("i", {
    className: "far fa-envelope"
  })), __jsx("div", {
    className: "icon-box-content"
  }, __jsx("h4", {
    className: "icon-box-title"
  }, "Get Special Offers and Savings"), __jsx("p", {
    className: "text-dark"
  }, "Get all the latest information on Events, Sales and Offers.")))), __jsx("div", {
    className: "col-xl-7 col-lg-6 d-lg-block d-flex justify-content-center"
  }, __jsx("form", {
    action: "#",
    method: "get",
    className: "input-wrapper input-wrapper-round input-wrapper-inline ml-lg-auto"
  }, __jsx("input", {
    type: "email",
    className: "form-control font-primary font-italic form-solid",
    name: "email",
    id: "email2",
    placeholder: "Enter Your E-mail Address...",
    required: true
  }), __jsx("button", {
    className: "btn btn-dark",
    type: "submit"
  }, "Sign up"))))))), __jsx("section", {
    className: "mt-10 pt-4"
  }, __jsx("div", {
    className: "container"
  }, __jsx("h2", {
    className: "title title-center mb-5"
  }, "Expanded on background")), __jsx("div", {
    className: "banner banner-background parallax text-center",
    style: {
      backgroundImage: `url(./images/parallax.jpg)`
    }
  }, __jsx("div", {
    className: "container"
  }, __jsx("div", {
    className: "banner-content"
  }, __jsx("h4", {
    className: "banner-subtitle text-white font-weight-bold ls-l"
  }, "Extra", __jsx("span", {
    className: "d-inline-block label-star bg-dark text-primary ml-4 mr-2"
  }, "30% Off"), "Online"), __jsx("h3", {
    className: "banner-title font-weight-bold text-white"
  }, "Summer Season Sale"), __jsx("p", {
    className: "text-white ls-s"
  }, "Free shipping on orders over $99"), __jsx(_components_features_custom_link__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {
    href: "/shop",
    className: "btn btn-primary btn-rounded"
  }, "Shop Now", __jsx("i", {
    className: "d-icon-arrow-right"
  })))))), __jsx(_components_partials_elements_elements_list__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z, {
    subClass: "pt-4 mt-8"
  })));
}

/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().memo(Cta));

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
var __webpack_exports__ = __webpack_require__.X(0, [1664,5588,3405], function() { return __webpack_exec__(783); });
module.exports = __webpack_exports__;

})();