exports.id = 7684;
exports.ids = [7684];
exports.modules = {

/***/ 7684:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ ProductNav; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_features_custom_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8765);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6731);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);

var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);


function ProductNav(props) {
  const {
    product
  } = props;
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
  return __jsx("ul", {
    className: "product-nav"
  }, product.prev ? __jsx("li", {
    className: `product-nav-${product.next ? 'prev' : 'next no-next'}`
  }, __jsx(_components_features_custom_link__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z, {
    href: {
      pathname: router.pathname,
      query: {
        slug: product.prev.slug
      }
    },
    scroll: false
  }, __jsx("i", {
    className: "d-icon-arrow-left"
  }), " Prev", __jsx("span", {
    className: "product-nav-popup"
  }, __jsx("img", {
    src: "https://d-themes.com/react_asset_api/riode" + product.prev.pictures[0].url,
    alt: "product thumbnail",
    width: "110",
    height: "123"
  }), __jsx("span", {
    className: "product-name"
  }, product.prev.name)))) : "", product.next ? __jsx("li", {
    className: "product-nav-next"
  }, __jsx(_components_features_custom_link__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z, {
    href: {
      pathname: router.pathname,
      query: {
        slug: product.next.slug
      }
    },
    scroll: false
  }, "Next ", __jsx("i", {
    className: "d-icon-arrow-right"
  }), __jsx("span", {
    className: "product-nav-popup"
  }, __jsx("img", {
    src: "https://d-themes.com/react_asset_api/riode" + product.next.pictures[0].url,
    alt: "product thumbnail",
    width: "110",
    height: "123"
  }), __jsx("span", {
    className: "product-name"
  }, product.next.name)))) : "");
}

/***/ })

};
;