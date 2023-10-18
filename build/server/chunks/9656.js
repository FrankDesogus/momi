exports.id = 9656;
exports.ids = [9656];
exports.modules = {

/***/ 9656:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(79);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7530);
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_image_magnifiers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7773);
/* harmony import */ var react_image_magnifiers__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_image_magnifiers__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9997);
/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_modal__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var imagesloaded__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6558);
/* harmony import */ var imagesloaded__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(imagesloaded__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _server_queries__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4733);
/* harmony import */ var _server_apollo__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5438);
/* harmony import */ var _components_features_owl_carousel__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(4138);
/* harmony import */ var _components_partials_product_detail_detail_one__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(3232);
/* harmony import */ var _store_modal__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(6723);
/* harmony import */ var _utils_data_carousel__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(4943);

var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);












const customStyles = {
  content: {
    position: "relative"
  },
  overlay: {
    background: 'rgba(0,0,0,.4)',
    zIndex: '10000',
    overflowX: 'hidden',
    overflowY: 'auto'
  }
};
react_modal__WEBPACK_IMPORTED_MODULE_4___default().setAppElement('#__next');

function Quickview(props) {
  const {
    slug,
    closeQuickview,
    isOpen
  } = props;
  if (!isOpen) return __jsx("div", null);
  const {
    0: loaded,
    1: setLoadingState
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const {
    data,
    loading
  } = (0,_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2__.useQuery)(_server_queries__WEBPACK_IMPORTED_MODULE_6__/* .GET_PRODUCT */ .N4, {
    variables: {
      slug,
      onlyData: true
    }
  });
  const product = data && data.product;
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    setTimeout(() => {
      if (!loading && data && isOpen && document.querySelector('.quickview-modal')) imagesloaded__WEBPACK_IMPORTED_MODULE_5___default()('.quickview-modal').on('done', function () {
        setLoadingState(true);
        window.jQuery('.quickview-modal .product-single-carousel').trigger('refresh.owl.carousel');
      }).on('progress', function () {
        setLoadingState(false);
      });
    }, 200);
  }, [data, isOpen]);
  if (slug === '' || !product || !product.data) return '';

  const closeQuick = () => {
    document.querySelector(".ReactModal__Overlay").classList.add('removed');
    document.querySelector('.quickview-modal').classList.add('removed');
    setLoadingState(false);
    setTimeout(() => {
      closeQuickview();
    }, 330);
  };

  return __jsx((react_modal__WEBPACK_IMPORTED_MODULE_4___default()), {
    isOpen: isOpen,
    contentLabel: "QuickView",
    onRequestClose: closeQuick,
    shouldFocusAfterRender: false,
    style: customStyles,
    className: "product product-single row product-popup quickview-modal",
    id: "product-quickview"
  }, __jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, __jsx("div", {
    className: `row p-0 m-0 ${loaded ? '' : 'd-none'}`
  }, __jsx("div", {
    className: "col-md-6"
  }, __jsx("div", {
    className: "product-gallery mb-md-0 pb-0"
  }, __jsx("div", {
    className: "product-label-group"
  }, product.data.is_new ? __jsx("label", {
    className: "product-label label-new"
  }, "New") : '', product.data.is_top ? __jsx("label", {
    className: "product-label label-top"
  }, "Top") : '', product.data.discount > 0 ? product.data.variants.length === 0 ? __jsx("label", {
    className: "product-label label-sale"
  }, product.data.discount, "% OFF") : __jsx("label", {
    className: "product-label label-sale"
  }, "Sale") : ''), __jsx(_components_features_owl_carousel__WEBPACK_IMPORTED_MODULE_8__/* .default */ .Z, {
    adClass: "product-single-carousel owl-theme owl-nav-inner",
    options: _utils_data_carousel__WEBPACK_IMPORTED_MODULE_11__/* .mainSlider3 */ .Hr
  }, product && product.data && product.data.large_pictures.map((item, index) => __jsx(react_image_magnifiers__WEBPACK_IMPORTED_MODULE_3__.Magnifier, {
    key: 'quickview-image-' + index,
    imageSrc: "https://d-themes.com/react_asset_api/riode" + item.url,
    imageAlt: "magnifier",
    largeImageSrc: "https://d-themes.com/react_asset_api/riode" + item.url,
    dragToMove: false,
    mouseActivation: "hover",
    cursorStyleActive: "crosshair",
    className: "product-image large-image"
  }))))), __jsx("div", {
    className: "col-md-6"
  }, __jsx(_components_partials_product_detail_detail_one__WEBPACK_IMPORTED_MODULE_9__/* .default */ .Z, {
    data: data,
    adClass: "scrollable pr-3",
    isNav: false
  }))), __jsx("button", {
    title: "Close (Esc)",
    type: "button",
    className: "mfp-close p-0",
    onClick: closeQuick
  }, __jsx("span", null, "\xD7"))), loaded ? '' : __jsx("div", {
    className: "product row p-0 m-0 skeleton-body mfp-product"
  }, __jsx("div", {
    className: "col-md-6"
  }, __jsx("div", {
    className: "skel-pro-gallery"
  })), __jsx("div", {
    className: "col-md-6"
  }, __jsx("div", {
    className: "skel-pro-summary"
  }))));
}

function mapStateToProps(state) {
  return {
    slug: state.modal.singleSlug,
    isOpen: state.modal.quickview
  };
}

/* harmony default export */ __webpack_exports__["Z"] = ((0,_server_apollo__WEBPACK_IMPORTED_MODULE_7__/* .default */ .Z)({
  ssr: true
})((0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(mapStateToProps, {
  closeQuickview: _store_modal__WEBPACK_IMPORTED_MODULE_10__/* .modalActions.closeQuickview */ .n.closeQuickview
})(Quickview)));

/***/ })

};
;