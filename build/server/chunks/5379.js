exports.id = 5379;
exports.ids = [5379];
exports.modules = {

/***/ 5379:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9290);
/* harmony import */ var react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_features_custom_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8765);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6442);
var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);





function SmallProduct(props) {
  const {
    product,
    adClass,
    isReviewCount = true
  } = props;
  return __jsx("div", {
    className: `product product-list-sm ${adClass}`
  }, __jsx("figure", {
    className: "product-media"
  }, __jsx(_components_features_custom_link__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, {
    href: `/product/default/${product.slug}`
  }, __jsx(react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_1__.LazyLoadImage, {
    alt: "product",
    src: "https://d-themes.com/react_asset_api/riode" + product.pictures[0].url,
    threshold: 500,
    effect: "opacity",
    width: "300",
    height: "338"
  }), product.pictures.length >= 2 ? __jsx(react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_1__.LazyLoadImage, {
    alt: "product",
    src: "https://d-themes.com/react_asset_api/riode" + product.pictures[1].url,
    threshold: 500,
    width: "300",
    height: "338",
    effect: "opacity",
    wrapperClassName: "product-image-hover"
  }) : "")), __jsx("div", {
    className: "product-details"
  }, __jsx("h3", {
    className: "product-name"
  }, __jsx(_components_features_custom_link__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, {
    href: `/product/default/${product.slug}`
  }, product.name)), __jsx("div", {
    className: "product-price"
  }, product.price[0] !== product.price[1] ? product.variants.length === 0 || product.variants.length > 0 && !product.variants[0].price ? __jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, __jsx("ins", {
    className: "new-price"
  }, "$", (0,_utils__WEBPACK_IMPORTED_MODULE_3__/* .toDecimal */ .YM)(product.price[0])), __jsx("del", {
    className: "old-price"
  }, "$", (0,_utils__WEBPACK_IMPORTED_MODULE_3__/* .toDecimal */ .YM)(product.price[1]))) : __jsx("del", {
    className: "new-price"
  }, "$", (0,_utils__WEBPACK_IMPORTED_MODULE_3__/* .toDecimal */ .YM)(product.price[0]), " \u2013 $", (0,_utils__WEBPACK_IMPORTED_MODULE_3__/* .toDecimal */ .YM)(product.price[1])) : __jsx("ins", {
    className: "new-price"
  }, "$", (0,_utils__WEBPACK_IMPORTED_MODULE_3__/* .toDecimal */ .YM)(product.price[0]))), __jsx("div", {
    className: "ratings-container"
  }, __jsx("div", {
    className: "ratings-full"
  }, __jsx("span", {
    className: "ratings",
    style: {
      width: 20 * product.ratings + '%'
    }
  }), __jsx("span", {
    className: "tooltiptext tooltip-top"
  }, (0,_utils__WEBPACK_IMPORTED_MODULE_3__/* .toDecimal */ .YM)(product.ratings))), isReviewCount ? __jsx(_components_features_custom_link__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, {
    href: `/product/default/${product.slug}`,
    className: "rating-reviews"
  }, "( ", product.reviews, " reviews )") : '')));
}

/* harmony default export */ __webpack_exports__["Z"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().memo(SmallProduct));

/***/ })

};
;