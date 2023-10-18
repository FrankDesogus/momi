exports.id = 6775;
exports.ids = [6775];
exports.modules = {

/***/ 8866:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_image_lightbox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6302);
/* harmony import */ var react_image_lightbox__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_image_lightbox__WEBPACK_IMPORTED_MODULE_1__);

var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);




function MediaLightBox(props) {
  const {
    images,
    product
  } = props;
  const {
    0: isOpen,
    1: setOpenState
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const {
    0: index,
    1: setIndex
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    setOpenState(props.isOpen);
  }, [props.isOpen]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    setIndex(props.index);
  }, [props.index]);

  const closeLightBox = () => {
    props.changeOpenState(false);
  };

  const setNextHandler = () => {
    setIndex((index + 1) % images.length);
  };

  const setPrevHandler = () => {
    setIndex((index + images.length - 1) % images.length);
  };

  return __jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, isOpen ? __jsx((react_image_lightbox__WEBPACK_IMPORTED_MODULE_1___default()), {
    mainSrc: "https://d-themes.com/react_asset_api/riode" + images[index].url,
    nextSrc: "https://d-themes.com/react_asset_api/riode" + images[(index + 1) % images.length].url,
    prevSrc: "https://d-themes.com/react_asset_api/riode" + images[(index + images.length - 1) % images.length].url,
    onCloseRequest: closeLightBox,
    onMovePrevRequest: setPrevHandler,
    onMoveNextRequest: setNextHandler,
    animationDisabled: false,
    animationDuration: 300,
    imageTitle: product.name,
    imagePadding: 80,
    clickOutsideToClose: true
  }) : '');
}

/* harmony default export */ __webpack_exports__["Z"] = (MediaLightBox);

/***/ }),

/***/ 7999:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ RelatedProducts; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_features_owl_carousel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4138);
/* harmony import */ var _components_features_product_product_three__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4246);
/* harmony import */ var _utils_data_carousel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4943);

var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);



function RelatedProducts(props) {
  const {
    products,
    adClass = "pt-3 mt-10"
  } = props;
  return products.length > 0 ? __jsx("section", {
    className: `${adClass}`
  }, __jsx("h2", {
    className: "title title-simple title-related font-primary text-dark text-capitalize"
  }, "Related Products"), __jsx(_components_features_owl_carousel__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z, {
    adClass: "owl-carousel owl-theme owl-nav-full",
    options: _utils_data_carousel__WEBPACK_IMPORTED_MODULE_3__/* .mainSlider21 */ .yH
  }, products && products.slice(0, 7).map((item, index) => __jsx("div", {
    className: "product-wrap",
    key: 'related-product-' + index
  }, __jsx(_components_features_product_product_three__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, {
    product: item,
    adClass: "",
    isCategory: false
  }))))) : '';
}

/***/ })

};
;