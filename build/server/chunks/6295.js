exports.id = 6295;
exports.ids = [6295];
exports.modules = {

/***/ 6295:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_features_owl_carousel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4138);
/* harmony import */ var _utils_data_carousel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4943);
var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);




function ThumbTwo(props) {
  const {
    product,
    index = 0
  } = props;
  let thumbs = product.pictures;
  const {
    0: thumbRef,
    1: setThumbRef
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (thumbRef !== null && index >= 0) {
      thumbRef.current.$car.to(index, 300, true);

      if (document.querySelector('.product-thumbs')) {
        document.querySelector('.product-thumbs .owl-stage').querySelector('.product-thumb.active') && document.querySelector('.product-thumbs .owl-stage').querySelector('.product-thumb.active').classList.remove('active');
        document.querySelector('.product-thumbs .owl-stage').querySelectorAll('.owl-item')[index] && document.querySelector('.product-thumbs .owl-stage').querySelectorAll('.owl-item')[index] && document.querySelector('.product-thumbs .owl-stage').querySelectorAll('.owl-item')[index].querySelector('.product-thumb').classList.add('active');
      }
    }
  }, [index]);

  const thumbActiveHandler = (e, thumbIndex) => {
    props.onChangeIndex(thumbIndex);
    document.querySelector('.product-thumbs') && document.querySelector('.product-thumbs .owl-stage').querySelector('.product-thumb.active').classList.remove('active');
    e.currentTarget.classList.add('active'); // window.jQuery( '.quickview-modal .product-single-carousel' ).trigger( 'to.owl.carousel', [ thumbIndex, 100, true ] );
  };

  const changeRefHandler = carRef => {
    if (carRef.current !== undefined && thumbRef === null) {
      setThumbRef(carRef);
    }
  };

  return __jsx("div", {
    className: "product-thumbs-wrap product-thumbs-two"
  }, __jsx(_components_features_owl_carousel__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z, {
    adClass: "product-thumbs product-thumb-carousel",
    options: _utils_data_carousel__WEBPACK_IMPORTED_MODULE_2__/* .mainSlider15 */ .tv,
    onChangeRef: changeRefHandler
  }, thumbs.map((thumb, index) => __jsx("div", {
    className: `product-thumb ${index === 0 ? 'active' : ''}`,
    onClick: e => {
      thumbActiveHandler(e, index);
    },
    key: thumb + '-2-' + index
  }, __jsx("img", {
    src: "https://d-themes.com/react_asset_api/riode" + thumb.url,
    alt: "product thumbnail",
    width: "137",
    height: "137"
  })))));
}

/* harmony default export */ __webpack_exports__["Z"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().memo(ThumbTwo));

/***/ })

};
;