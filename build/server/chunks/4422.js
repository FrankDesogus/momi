exports.id = 4422;
exports.ids = [4422];
exports.modules = {

/***/ 4422:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ MediaFive; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_image_magnifiers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7773);
/* harmony import */ var react_image_magnifiers__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_image_magnifiers__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_features_custom_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8765);
/* harmony import */ var _components_features_owl_carousel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4138);
/* harmony import */ var _components_partials_product_thumb_thumb_two__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6295);
/* harmony import */ var _components_partials_product_light_box__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8866);
/* harmony import */ var _utils_data_carousel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4943);

var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);







function MediaFive(props) {
  const {
    product,
    adClass = ''
  } = props;
  const {
    0: index,
    1: setIndex
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);
  const {
    0: mediaIndex,
    1: setMediaIndex
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);
  const {
    0: isOpen,
    1: setOpenState
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const {
    0: mediaRef,
    1: setMediaRef
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  let lgImages = product.large_pictures ? product.large_pictures : product.pictures;
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    setIndex(0);
  }, [window.location.pathname]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (mediaRef !== null && mediaRef.current !== null && index >= 0) {
      mediaRef.current.$car.to(index, 300, true);
    }
  }, [index]);

  const setIndexHandler = mediaIndex => {
    if (mediaIndex !== index) {
      setIndex(mediaIndex);
    }
  };

  const changeRefHandler = carRef => {
    if (carRef.current !== undefined) {
      setMediaRef(carRef);
    }
  };

  const changeOpenState = openState => {
    setOpenState(openState);
  };

  const openLightBox = () => {
    setOpenState(true);
  };

  let events = {
    onTranslate: function (e) {
      if (!e.target) return;

      if (document.querySelector('.product-thumbs')) {
        document.querySelector('.product-thumbs').querySelector('.product-thumb.active').classList.remove('active');
        document.querySelector('.product-thumbs').querySelectorAll('.product-thumb')[e.item.index].classList.add('active');
      }
    }
  };
  return __jsx("div", {
    className: `product-gallery product-gallery-vertical product-gallery-sticky ${adClass}`
  }, __jsx("div", {
    className: "product-label-group"
  }, product.stock === 0 ? __jsx("label", {
    className: "product-label label-out"
  }, "out") : "", product.is_top ? __jsx("label", {
    className: "product-label label-top"
  }, "top") : "", product.is_new ? __jsx("label", {
    className: "product-label label-new"
  }, "new") : "", product.discount ? __jsx("label", {
    className: "product-label label-sale"
  }, "sale") : ""), __jsx(_components_features_owl_carousel__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {
    adClass: "product-single-carousel owl-theme owl-nav-inner",
    options: _utils_data_carousel__WEBPACK_IMPORTED_MODULE_6__/* .mainSlider3 */ .Hr,
    onChangeIndex: setIndexHandler,
    onChangeRef: changeRefHandler,
    events: events
  }, lgImages.map((image, index) => __jsx("div", {
    key: image + '-' + index
  }, __jsx(react_image_magnifiers__WEBPACK_IMPORTED_MODULE_1__.Magnifier, {
    imageSrc: "https://d-themes.com/react_asset_api/riode" + image.url,
    imageAlt: "magnifier",
    largeImageSrc: "https://d-themes.com/react_asset_api/riode" + image.url,
    dragToMove: false,
    mouseActivation: "hover",
    cursorStyleActive: "crosshair",
    className: "product-image large-image"
  })))), __jsx(_components_features_custom_link__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, {
    href: "#",
    className: "product-image-full",
    onClick: openLightBox
  }, __jsx("i", {
    className: "d-icon-zoom"
  })), __jsx(_components_partials_product_thumb_thumb_two__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z, {
    product: product,
    index: index,
    onChangeIndex: setIndexHandler
  }), __jsx(_components_partials_product_light_box__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z, {
    images: lgImages,
    isOpen: isOpen,
    changeOpenState: changeOpenState,
    index: index,
    product: product
  }));
}

/***/ })

};
;