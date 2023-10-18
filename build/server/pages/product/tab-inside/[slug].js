(function() {
var exports = {};
exports.id = 5026;
exports.ids = [5026,3866];
exports.modules = {

/***/ 3147:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6731);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7530);
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6481);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var imagesloaded__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6558);
/* harmony import */ var imagesloaded__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(imagesloaded__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _server_apollo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5438);
/* harmony import */ var _server_queries__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4733);
/* harmony import */ var _components_features_owl_carousel__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(4138);
/* harmony import */ var _components_partials_product_media_media_five__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(4422);
/* harmony import */ var _components_partials_product_detail_detail_three__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1338);
/* harmony import */ var _components_partials_product_related_products__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(7999);
/* harmony import */ var _utils_data_carousel__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(4943);
var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);













function ProductMasonry() {
  const slug = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)().query.slug;
  if (!slug) return '';
  const {
    data,
    loading,
    error
  } = (0,_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2__.useQuery)(_server_queries__WEBPACK_IMPORTED_MODULE_6__/* .GET_PRODUCT */ .N4, {
    variables: {
      slug
    }
  });
  const {
    0: loaded,
    1: setLoadingState
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const product = data && data.product.data;
  const related = data && data.product.related;
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (!loading && product) imagesloaded__WEBPACK_IMPORTED_MODULE_4___default()('main').on('done', function () {
      setLoadingState(true);
    }).on('progress', function () {
      setLoadingState(false);
    });
    if (loading) setLoadingState(false);
  }, [loading, product]);
  return __jsx("main", {
    className: "main mt-6 single-product"
  }, __jsx((react_helmet__WEBPACK_IMPORTED_MODULE_3___default()), null, __jsx("title", null, "Riode React eCommerce Template | Product Masonry")), __jsx("h1", {
    className: "d-none"
  }, "Riode React eCommerce Template - Product Masonry"), product !== undefined ? __jsx("div", {
    className: `page-content mb-10 pb-6 ${loaded ? '' : 'd-none'}`
  }, __jsx("div", {
    className: "container skeleton-body"
  }, __jsx("div", {
    className: "product product-single row mb-2"
  }, __jsx("div", {
    className: "col-md-6"
  }, __jsx(_components_partials_product_media_media_five__WEBPACK_IMPORTED_MODULE_8__/* .default */ .Z, {
    product: product,
    isSticky: true,
    adClass: "pb-0"
  })), __jsx("div", {
    className: "col-md-6"
  }, __jsx(_components_partials_product_detail_detail_three__WEBPACK_IMPORTED_MODULE_9__/* .default */ .Z, {
    data: data,
    isDesc: true,
    adClass: "pb-0 mb-6"
  }))), __jsx(_components_partials_product_related_products__WEBPACK_IMPORTED_MODULE_10__/* .default */ .Z, {
    products: related
  }))) : '', loaded && !loading ? '' : __jsx("div", {
    className: "skeleton-body container mb-10"
  }, __jsx("div", {
    className: "row mb-7"
  }, __jsx("div", {
    className: "col-md-6 sticky-sidebar-wrapper "
  }, __jsx("div", {
    className: "skel-pro-gallery"
  })), __jsx("div", {
    className: "col-md-6"
  }, __jsx("div", {
    className: "skel-pro-summary mt-4 mt-md-0"
  }), __jsx("div", {
    className: "skel-pro-tabs"
  }))), __jsx("section", {
    className: "pt-3 mt-4"
  }, __jsx("h2", {
    className: "title justify-content-center"
  }, "Related Products"), __jsx(_components_features_owl_carousel__WEBPACK_IMPORTED_MODULE_7__/* .default */ .Z, {
    adClass: "owl-carousel owl-theme owl-nav-full",
    options: _utils_data_carousel__WEBPACK_IMPORTED_MODULE_11__/* .mainSlider17 */ .F6
  }, [1, 2, 3, 4, 5, 6].map(item => __jsx("div", {
    className: "product-loading-overlay",
    key: 'popup-skel-' + item
  }))))));
}

/* harmony default export */ __webpack_exports__["default"] = ((0,_server_apollo__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z)({
  ssr: true
})(ProductMasonry));

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

/***/ 6558:
/***/ (function(module) {

"use strict";
module.exports = require("imagesloaded");;

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

/***/ 9226:
/***/ (function(module) {

"use strict";
module.exports = require("react-bootstrap");;

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

/***/ 6302:
/***/ (function(module) {

"use strict";
module.exports = require("react-image-lightbox");;

/***/ }),

/***/ 7773:
/***/ (function(module) {

"use strict";
module.exports = require("react-image-magnifiers");;

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
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, [1664,5588,5961,4138,4943,6090,5708,6723,4246,2674,7845,1473,7684,6775,7185,1338,6295,4422], function() { return __webpack_exec__(3147); });
module.exports = __webpack_exports__;

})();