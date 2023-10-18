(function() {
var exports = {};
exports.id = 6725;
exports.ids = [6725,3866];
exports.modules = {

/***/ 8763:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ _slug_; }
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(6731);
// EXTERNAL MODULE: external "@apollo/react-hooks"
var react_hooks_ = __webpack_require__(7530);
// EXTERNAL MODULE: external "react-helmet"
var external_react_helmet_ = __webpack_require__(6481);
var external_react_helmet_default = /*#__PURE__*/__webpack_require__.n(external_react_helmet_);
// EXTERNAL MODULE: external "imagesloaded"
var external_imagesloaded_ = __webpack_require__(6558);
var external_imagesloaded_default = /*#__PURE__*/__webpack_require__.n(external_imagesloaded_);
// EXTERNAL MODULE: ./server/apollo.js
var apollo = __webpack_require__(5438);
// EXTERNAL MODULE: ./server/queries.js
var queries = __webpack_require__(4733);
// EXTERNAL MODULE: ./components/features/owl-carousel.jsx
var owl_carousel = __webpack_require__(4138);
// EXTERNAL MODULE: external "react-image-magnifiers"
var external_react_image_magnifiers_ = __webpack_require__(7773);
// EXTERNAL MODULE: ./components/partials/product/light-box.jsx
var light_box = __webpack_require__(8866);
;// CONCATENATED MODULE: ./components/partials/product/media/media-three.jsx

var __jsx = (external_react_default()).createElement;



function MediaThree(props) {
  const {
    product
  } = props;
  const {
    0: index,
    1: setIndex
  } = (0,external_react_.useState)(0);
  const {
    0: isOpen,
    1: setOpenState
  } = (0,external_react_.useState)(false);
  let lgImages = product.large_pictures ? product.large_pictures : product.pictures;
  (0,external_react_.useEffect)(() => {
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

  return __jsx((external_react_default()).Fragment, null, __jsx("div", {
    className: "product-gallery row"
  }, lgImages.slice(0, 5).map((image, index) => index === 0 ? __jsx("figure", {
    className: "product-image mb-4",
    key: 'image' + index
  }, __jsx(external_react_image_magnifiers_.Magnifier, {
    imageSrc: "https://d-themes.com/react_asset_api/riode" + image.url,
    imageAlt: "magnifier",
    largeImageSrc: "https://d-themes.com/react_asset_api/riode" + image.url,
    dragToMove: false,
    mouseActivation: "hover",
    cursorStyleActive: "crosshair",
    className: "product-image large-image"
  }), __jsx("div", {
    className: "product-label-group"
  }, product.stock === 0 ? __jsx("label", {
    className: "product-label label-out"
  }, "out") : "", product.is_top ? __jsx("label", {
    className: "product-label label-top"
  }, "top") : "", product.is_new ? __jsx("label", {
    className: "product-label label-new"
  }, "new") : "", product.discount ? __jsx("label", {
    className: "product-label label-sale"
  }, "sale") : ""), __jsx("a", {
    href: "#",
    className: "product-image-full",
    onClick: openLightBox,
    index: index
  }, __jsx("i", {
    className: "d-icon-zoom"
  }))) : __jsx("div", {
    className: `thumb-pictures ${index % 4 < 2 ? 'col-sm-4' : 'col-sm-8'}`,
    key: 'image' + index
  }, __jsx("figure", {
    className: "product-image mb-4"
  }, __jsx(external_react_image_magnifiers_.Magnifier, {
    imageSrc: "https://d-themes.com/react_asset_api/riode" + image.url,
    imageAlt: "magnifier",
    largeImageSrc: "https://d-themes.com/react_asset_api/riode" + image.url,
    dragToMove: false,
    mouseActivation: "hover",
    cursorStyleActive: "crosshair",
    className: "product-image large-image"
  }), __jsx("a", {
    href: "#",
    className: "product-image-full",
    onClick: openLightBox,
    index: index
  }, __jsx("i", {
    className: "d-icon-zoom"
  })))))), __jsx(light_box/* default */.Z, {
    images: lgImages,
    isOpen: isOpen,
    changeOpenState: changeOpenState,
    index: index,
    product: product
  }));
}
// EXTERNAL MODULE: ./components/partials/product/detail/detail-three.jsx + 1 modules
var detail_three = __webpack_require__(1338);
// EXTERNAL MODULE: ./components/partials/product/related-products.jsx
var related_products = __webpack_require__(7999);
// EXTERNAL MODULE: ./utils/data/carousel.js
var carousel = __webpack_require__(4943);
;// CONCATENATED MODULE: ./pages/product/masonry/[slug].jsx
var _slug_jsx = (external_react_default()).createElement;













function ProductMasonry() {
  const slug = (0,router_.useRouter)().query.slug;
  if (!slug) return '';
  const {
    data,
    loading,
    error
  } = (0,react_hooks_.useQuery)(queries/* GET_PRODUCT */.N4, {
    variables: {
      slug
    }
  });
  const {
    0: loaded,
    1: setLoadingState
  } = (0,external_react_.useState)(false);
  const product = data && data.product.data;
  const related = data && data.product.related;
  (0,external_react_.useEffect)(() => {
    if (!loading && product) external_imagesloaded_default()('main').on('done', function () {
      setLoadingState(true);
    }).on('progress', function () {
      setLoadingState(false);
    });
    if (loading) setLoadingState(false);
  }, [loading, product]);
  return _slug_jsx("main", {
    className: "main mt-6 single-product product-layout-masonry"
  }, _slug_jsx((external_react_helmet_default()), null, _slug_jsx("title", null, "Riode React eCommerce Template | Product Masonry")), _slug_jsx("h1", {
    className: "d-none"
  }, "Riode React eCommerce Template - Product Masonry"), product !== undefined ? _slug_jsx("div", {
    className: `page-content mb-10 pb-6 ${loaded ? '' : 'd-none'}`
  }, _slug_jsx("div", {
    className: "container skeleton-body"
  }, _slug_jsx("div", {
    className: "product product-single row mb-2"
  }, _slug_jsx("div", {
    className: "col-md-6"
  }, _slug_jsx(MediaThree, {
    product: product
  })), _slug_jsx("div", {
    className: "col-md-6"
  }, _slug_jsx(detail_three/* default */.Z, {
    data: data,
    isSticky: true,
    isDesc: true
  }))), _slug_jsx(related_products/* default */.Z, {
    products: related
  }))) : '', loaded && !loading ? '' : _slug_jsx("div", {
    className: "skeleton-body container mb-10"
  }, _slug_jsx("div", {
    className: "row mb-2"
  }, _slug_jsx("div", {
    className: "col-md-6 product-masonry-type"
  }, _slug_jsx("div", {
    className: "skel-pro-gallery"
  })), _slug_jsx("div", {
    className: "col-md-6"
  }, _slug_jsx("div", {
    className: "skel-pro-summary mt-4 mt-md-0"
  }), _slug_jsx("div", {
    className: "skel-pro-tabs"
  }))), _slug_jsx("section", {
    className: "pt-3 mt-4"
  }, _slug_jsx("h2", {
    className: "title justify-content-center"
  }, "Related Products"), _slug_jsx(owl_carousel/* default */.Z, {
    adClass: "owl-carousel owl-theme owl-nav-full",
    options: carousel/* mainSlider17 */.F6
  }, [1, 2, 3, 4, 5, 6].map(item => _slug_jsx("div", {
    className: "product-loading-overlay",
    key: 'popup-skel-' + item
  }))))));
}

/* harmony default export */ var _slug_ = ((0,apollo/* default */.Z)({
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
var __webpack_exports__ = __webpack_require__.X(0, [1664,5588,5961,4138,4943,6090,5708,6723,4246,2674,7845,1473,7684,6775,7185,1338], function() { return __webpack_exec__(8763); });
module.exports = __webpack_exports__;

})();