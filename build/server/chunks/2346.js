exports.id = 2346;
exports.ids = [2346];
exports.modules = {

/***/ 2346:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ MediaSix; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_image_magnifiers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7773);
/* harmony import */ var react_image_magnifiers__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_image_magnifiers__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_partials_product_light_box__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8866);

var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);



function MediaSix(props) {
  const {
    product,
    adClass = ''
  } = props;
  const {
    0: index,
    1: setIndex
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);
  const {
    0: isOpen,
    1: setOpenState
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  let lgImages = product.large_pictures ? product.large_pictures : product.pictures;
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    setIndex(0);
  }, [window.location.pathname]);

  const changeOpenState = openState => {
    setOpenState(openState);
  };

  const openLightBox = e => {
    e.preventDefault();
    setIndex(parseInt(e.currentTarget.getAttribute("index")));
    setOpenState(true);
  };

  return __jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, __jsx("div", {
    className: "product-gallery row mb-4"
  }, lgImages.slice(0, 4).map((image, index) => __jsx("figure", {
    className: `product-image mb-4 ${adClass}`,
    key: 'image' + index
  }, __jsx(react_image_magnifiers__WEBPACK_IMPORTED_MODULE_1__.Magnifier, {
    imageSrc: "https://d-themes.com/react_asset_api/riode" + image.url,
    imageAlt: "magnifier",
    largeImageSrc: "https://d-themes.com/react_asset_api/riode" + image.url,
    dragToMove: false,
    mouseActivation: "hover",
    cursorStyleActive: "crosshair",
    className: "product-image large-image"
  }), index === 0 ? __jsx("div", {
    className: "product-label-group"
  }, product.stock === 0 ? __jsx("label", {
    className: "product-label label-out"
  }, "out") : "", product.is_top ? __jsx("label", {
    className: "product-label label-top"
  }, "top") : "", product.is_new ? __jsx("label", {
    className: "product-label label-new"
  }, "new") : "", product.discount ? __jsx("label", {
    className: "product-label label-sale"
  }, "sale") : "") : '', __jsx("a", {
    href: "#",
    className: "product-image-full",
    onClick: openLightBox,
    index: index
  }, __jsx("i", {
    className: "d-icon-zoom"
  }))))), __jsx(_components_partials_product_light_box__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, {
    images: lgImages.slice(0, 4),
    isOpen: isOpen,
    changeOpenState: changeOpenState,
    index: index,
    product: product
  }));
}

/***/ })

};
;