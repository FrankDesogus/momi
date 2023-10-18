(function() {
var exports = {};
exports.id = 3211;
exports.ids = [3211,3866];
exports.modules = {

/***/ 9945:
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
// EXTERNAL MODULE: ./components/features/custom-link.jsx
var custom_link = __webpack_require__(8765);
// EXTERNAL MODULE: ./components/features/owl-carousel.jsx
var owl_carousel = __webpack_require__(4138);
// EXTERNAL MODULE: ./components/partials/product/media/media-six.jsx
var media_six = __webpack_require__(2346);
// EXTERNAL MODULE: ./components/features/countdown.jsx
var countdown = __webpack_require__(7845);
// EXTERNAL MODULE: ./utils/index.js
var utils = __webpack_require__(6442);
;// CONCATENATED MODULE: ./components/partials/product/detail/detail-left.jsx
var __jsx = (external_react_default()).createElement;





function DetailLeft(props) {
  const {
    data,
    isSticky = false,
    adClass = "mb-4"
  } = props;
  let product = data && data.product;
  return __jsx("div", {
    className: `product-details p-0 ${isSticky ? 'p-sticky' : ''} ${adClass}`
  }, __jsx("h2", {
    className: "product-name mt-3"
  }, product.data.name), __jsx("div", {
    className: "product-meta"
  }, "SKU: ", __jsx("span", {
    className: "product-sku"
  }, product.data.sku), "CATEGORIES: ", __jsx("span", {
    className: "product-brand"
  }, product.data.categories.map((item, index) => __jsx((external_react_default()).Fragment, {
    key: item.name + '-' + index
  }, __jsx(custom_link/* default */.Z, {
    href: {
      pathname: '/shop',
      query: {
        category: item.slug
      }
    }
  }, item.name), index < product.data.categories.length - 1 ? ', ' : '')))), __jsx("div", {
    className: "product-price"
  }, product.data.price[0] !== product.data.price[1] ? product.data.variants.length === 0 || product.data.variants.length > 0 && !product.data.variants[0].price ? __jsx((external_react_default()).Fragment, null, __jsx("ins", {
    className: "new-price"
  }, "$", (0,utils/* toDecimal */.YM)(product.data.price[0])), __jsx("del", {
    className: "old-price"
  }, "$", (0,utils/* toDecimal */.YM)(product.data.price[1]))) : __jsx("del", {
    className: "new-price"
  }, "$", (0,utils/* toDecimal */.YM)(product.data.price[0]), " \u2013 $", (0,utils/* toDecimal */.YM)(product.data.price[1])) : __jsx("ins", {
    className: "new-price"
  }, "$", (0,utils/* toDecimal */.YM)(product.data.price[0]))), product.data.price[0] !== product.data.price[1] && product.data.variants.length === 0 ? __jsx(countdown/* default */.Z, {
    type: 2
  }) : '', __jsx("div", {
    className: "ratings-container"
  }, __jsx("div", {
    className: "ratings-full"
  }, __jsx("span", {
    className: "ratings",
    style: {
      width: 20 * product.data.ratings + '%'
    }
  }), __jsx("span", {
    className: "tooltiptext tooltip-top"
  }, (0,utils/* toDecimal */.YM)(product.data.ratings))), __jsx(custom_link/* default */.Z, {
    href: "#",
    className: "rating-reviews"
  }, "( ", product.data.reviews, " reviews )")), __jsx("p", {
    className: "product-short-desc"
  }, product.data.short_description));
}

/* harmony default export */ var detail_left = (DetailLeft);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(79);
// EXTERNAL MODULE: external "react-bootstrap"
var external_react_bootstrap_ = __webpack_require__(9226);
var external_react_bootstrap_default = /*#__PURE__*/__webpack_require__.n(external_react_bootstrap_);
// EXTERNAL MODULE: ./store/wishlist.js
var wishlist = __webpack_require__(5708);
// EXTERNAL MODULE: ./store/cart.js + 1 modules
var cart = __webpack_require__(6090);
// EXTERNAL MODULE: ./components/features/quantity.jsx
var features_quantity = __webpack_require__(1473);
;// CONCATENATED MODULE: ./components/partials/product/detail/detail-right.jsx

var detail_right_jsx = (external_react_default()).createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }











function DetailRight(props) {
  let router = (0,router_.useRouter)();
  const {
    data
  } = props;
  const {
    toggleWishlist,
    addToCart,
    wishlist,
    isSticky = false,
    adClass = ''
  } = props;
  const {
    0: curColor,
    1: setCurColor
  } = (0,external_react_.useState)('null');
  const {
    0: curSize,
    1: setCurSize
  } = (0,external_react_.useState)('null');
  const {
    0: curIndex,
    1: setCurIndex
  } = (0,external_react_.useState)(0);
  const {
    0: cartActive,
    1: setCartActive
  } = (0,external_react_.useState)(false);
  const {
    0: quantity,
    1: setQauntity
  } = (0,external_react_.useState)(1);
  let product = data && data.product; // decide if the product is wishlisted

  let isWishlisted,
      colors = [],
      sizes = [];
  isWishlisted = wishlist.findIndex(item => item.slug === product.data.slug) > -1 ? true : false;

  if (product.data && product.data.variants.length > 0) {
    if (product.data.variants[0].size) product.data.variants.forEach(item => {
      if (sizes.findIndex(size => size.name === item.size.name) === -1) {
        sizes.push({
          name: item.size.name,
          value: item.size.size
        });
      }
    });

    if (product.data.variants[0].color) {
      product.data.variants.forEach(item => {
        if (colors.findIndex(color => color.name === item.color.name) === -1) colors.push({
          name: item.color.name,
          value: item.color.color
        });
      });
    }
  }

  (0,external_react_.useEffect)(() => {
    setCurIndex(-1);
    resetValueHandler();
  }, [product]);
  (0,external_react_.useEffect)(() => {
    if (product.data.variants.length > 0) {
      if (curSize !== 'null' && curColor !== 'null' || curSize === 'null' && product.data.variants[0].size === null && curColor !== 'null' || curColor === 'null' && product.data.variants[0].color === null && curSize !== 'null') {
        setCartActive(true);
        setCurIndex(product.data.variants.findIndex(item => item.size !== null && item.color !== null && item.color.name === curColor && item.size.name === curSize || item.size === null && item.color.name === curColor || item.color === null && item.size.name === curSize));
      } else {
        setCartActive(false);
      }
    } else {
      setCartActive(true);
    }

    if (product.stock === 0) {
      setCartActive(false);
    }
  }, [curColor, curSize, product]);

  const wishlistHandler = e => {
    e.preventDefault();

    if (toggleWishlist && !isWishlisted) {
      let currentTarget = e.currentTarget;
      currentTarget.classList.add('load-more-overlay', 'loading');
      toggleWishlist(product.data);
      setTimeout(() => {
        currentTarget.classList.remove('load-more-overlay', 'loading');
      }, 1000);
    } else {
      router.push('/pages/wishlist');
    }
  };

  const setColorHandler = e => {
    setCurColor(e.target.value);
  };

  const setSizeHandler = e => {
    setCurSize(e.target.value);
  };

  const addToCartHandler = () => {
    if (product.data.stock > 0 && cartActive) {
      if (product.data.variants.length > 0) {
        let tmpName = product.data.name,
            tmpPrice;
        tmpName += curColor !== 'null' ? '-' + curColor : '';
        tmpName += curSize !== 'null' ? '-' + curSize : '';

        if (product.data.price[0] === product.data.price[1]) {
          tmpPrice = product.data.price[0];
        } else if (!product.data.variants[0].price && product.data.discount > 0) {
          tmpPrice = product.data.price[0];
        } else {
          tmpPrice = product.data.variants[curIndex].sale_price ? product.data.variants[curIndex].sale_price : product.data.variants[curIndex].price;
        }

        addToCart(_objectSpread(_objectSpread({}, product.data), {}, {
          name: tmpName,
          qty: quantity,
          price: tmpPrice
        }));
      } else {
        addToCart(_objectSpread(_objectSpread({}, product.data), {}, {
          qty: quantity,
          price: product.data.price[0]
        }));
      }
    }
  };

  const resetValueHandler = e => {
    setCurColor('null');
    setCurSize('null');
  };

  function isDisabled(color, size) {
    if (color === 'null' || size === 'null') return false;

    if (sizes.length === 0) {
      return product.data.variants.findIndex(item => item.color.name === curColor) === -1;
    }

    if (colors.length === 0) {
      return product.data.variants.findIndex(item => item.size.name === curSize) === -1;
    }

    return product.data.variants.findIndex(item => item.color.name === color && item.size.name === size) === -1;
  }

  function changeQty(qty) {
    setQauntity(qty);
  }

  return detail_right_jsx("div", {
    className: `product-details mb-4 ${isSticky ? 'p-sticky' : ''} ${adClass}`
  }, product && product.data.variants.length > 0 ? detail_right_jsx((external_react_default()).Fragment, null, product.data.variants[0].color ? detail_right_jsx("div", {
    className: "product-form product-variations product-color"
  }, detail_right_jsx("label", null, "Color:"), detail_right_jsx("div", {
    className: "select-box"
  }, detail_right_jsx("select", {
    name: "color",
    className: "form-control select-color",
    onChange: setColorHandler,
    value: curColor
  }, detail_right_jsx("option", {
    value: "null"
  }, "Choose an option"), colors.map(item => !isDisabled(item.name, curSize) ? detail_right_jsx("option", {
    value: item.name,
    key: "color-" + item.name
  }, item.name) : '')))) : "", product.data.variants[0].size ? detail_right_jsx("div", {
    className: "product-form product-variations product-size"
  }, detail_right_jsx("label", null, "Size:"), detail_right_jsx("div", {
    className: "product-form-group"
  }, detail_right_jsx("div", {
    className: "select-box"
  }, detail_right_jsx("select", {
    name: "size",
    className: "form-control select-size",
    onChange: setSizeHandler,
    value: curSize
  }, detail_right_jsx("option", {
    value: "null"
  }, "Choose an option"), sizes.map(item => !isDisabled(curColor, item.name) ? detail_right_jsx("option", {
    value: item.name,
    key: "size-" + item.name
  }, item.name) : ''))), detail_right_jsx((external_react_bootstrap_default()), {
    in: 'null' !== curColor || 'null' !== curSize
  }, detail_right_jsx("div", {
    className: "card-wrapper overflow-hidden reset-value-button w-100 mb-0"
  }, detail_right_jsx(custom_link/* default */.Z, {
    href: "#",
    className: "product-variation-clean",
    onClick: resetValueHandler
  }, "Clean All"))))) : "", detail_right_jsx("div", {
    className: "product-variation-price"
  }, detail_right_jsx((external_react_bootstrap_default()), {
    in: cartActive && curIndex > -1
  }, detail_right_jsx("div", {
    className: "card-wrapper"
  }, curIndex > -1 ? detail_right_jsx("div", {
    className: "single-product-price"
  }, product.data.variants[curIndex].price ? product.data.variants[curIndex].sale_price ? detail_right_jsx("div", {
    className: "product-price mb-0"
  }, detail_right_jsx("ins", {
    className: "new-price"
  }, "$", (0,utils/* toDecimal */.YM)(product.data.variants[curIndex].sale_price)), detail_right_jsx("del", {
    className: "old-price"
  }, "$", (0,utils/* toDecimal */.YM)(product.data.variants[curIndex].price))) : detail_right_jsx("div", {
    className: "product-price mb-0"
  }, detail_right_jsx("ins", {
    className: "new-price"
  }, "$", (0,utils/* toDecimal */.YM)(product.data.variants[curIndex].price))) : "") : '')))) : '', detail_right_jsx("hr", {
    className: "product-divider"
  }), detail_right_jsx("div", {
    className: "product-form product-qty pb-0"
  }, detail_right_jsx("label", {
    className: "d-none"
  }, "QTY:"), detail_right_jsx("div", {
    className: "product-form-group"
  }, detail_right_jsx(features_quantity/* default */.Z, {
    max: product.data.stock,
    product: product,
    onChangeQty: changeQty
  }), detail_right_jsx("button", {
    className: `btn-product btn-cart text-normal ls-normal font-weight-semi-bold ${cartActive ? '' : 'disabled'}`,
    onClick: addToCartHandler
  }, detail_right_jsx("i", {
    className: "d-icon-bag"
  }), "Add to Cart"))), detail_right_jsx("hr", {
    className: "product-divider mb-3"
  }), detail_right_jsx("div", {
    className: "product-footer"
  }, detail_right_jsx("div", {
    className: "social-links mr-4"
  }, detail_right_jsx(custom_link/* default */.Z, {
    href: "#",
    className: "social-link social-facebook fab fa-facebook-f"
  }), detail_right_jsx(custom_link/* default */.Z, {
    href: "#",
    className: "social-link social-twitter fab fa-twitter"
  }), detail_right_jsx(custom_link/* default */.Z, {
    href: "#",
    className: "social-link social-pinterest fab fa-pinterest-p"
  })), " ", detail_right_jsx("span", {
    className: "divider d-lg-show"
  }), " ", detail_right_jsx("a", {
    href: "#",
    className: `btn-product btn-wishlist`,
    title: isWishlisted ? 'Browse wishlist' : 'Add to wishlist',
    onClick: wishlistHandler
  }, detail_right_jsx("i", {
    className: isWishlisted ? "d-icon-heart-full" : "d-icon-heart"
  }), " ", isWishlisted ? 'Browse wishlist' : 'Add to Wishlist')));
}

function mapStateToProps(state) {
  return {
    wishlist: state.wishlist.data ? state.wishlist.data : []
  };
}

/* harmony default export */ var detail_right = ((0,external_react_redux_.connect)(mapStateToProps, {
  toggleWishlist: wishlist/* wishlistActions.toggleWishlist */.w.toggleWishlist,
  addToCart: cart/* cartActions.addToCart */.Uw.addToCart
})(DetailRight));
// EXTERNAL MODULE: ./components/partials/product/desc/desc-one.jsx
var desc_one = __webpack_require__(4617);
// EXTERNAL MODULE: ./components/partials/product/related-products.jsx
var related_products = __webpack_require__(7999);
// EXTERNAL MODULE: ./components/partials/product/product-nav.jsx
var product_nav = __webpack_require__(7684);
// EXTERNAL MODULE: ./utils/data/carousel.js
var carousel = __webpack_require__(4943);
;// CONCATENATED MODULE: ./pages/product/sticky-both/[slug].jsx
var _slug_jsx = (external_react_default()).createElement;

















function ProductStickyBoth() {
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
    className: "main single-product product-sticky-both"
  }, _slug_jsx((external_react_helmet_default()), null, _slug_jsx("title", null, "Riode React eCommerce Template | Product Sticky Both")), _slug_jsx("h1", {
    className: "d-none"
  }, "Riode React eCommerce Template - Product Sticky Both"), product !== undefined ? _slug_jsx("div", {
    className: `page-content mb-10 pb-6 ${loaded ? '' : 'd-none'}`
  }, _slug_jsx("div", {
    className: "container skeleton-body"
  }, _slug_jsx("div", {
    className: "product-navigation"
  }, _slug_jsx("ul", {
    className: "breadcrumb breadcrumb-lg"
  }, _slug_jsx("li", null, _slug_jsx(custom_link/* default */.Z, {
    href: "/"
  }, _slug_jsx("i", {
    className: "d-icon-home"
  }))), _slug_jsx("li", null, _slug_jsx(custom_link/* default */.Z, {
    href: "#",
    className: "active"
  }, "Products")), _slug_jsx("li", null, "Detail")), _slug_jsx(product_nav/* default */.Z, {
    product: data.product
  })), _slug_jsx("div", {
    className: "product product-single product-sticky-both mb-8"
  }, _slug_jsx("div", {
    className: "row"
  }, _slug_jsx("div", {
    className: "col-lg-6"
  }, _slug_jsx(media_six/* default */.Z, {
    product: product,
    adClass: "col-lg-12 col-sm-6"
  })), _slug_jsx("div", {
    className: "col-lg-3 col-md-6 order-lg-first"
  }, _slug_jsx(detail_left, {
    data: data,
    isSticky: true
  })), _slug_jsx("div", {
    className: "col-lg-3 col-md-6"
  }, _slug_jsx(detail_right, {
    data: data,
    isSticky: true
  })))), _slug_jsx(desc_one/* default */.Z, {
    product: product
  }), _slug_jsx(related_products/* default */.Z, {
    products: related,
    adClass: "pt-3 mt-2"
  }))) : '', loaded && !loading ? '' : _slug_jsx("div", {
    className: "skeleton-body sticky-both container mt-10 pt-3 mb-10"
  }, _slug_jsx("div", {
    className: "row p-relative"
  }, _slug_jsx("div", {
    className: "woocommerce-product-gallery sticky col-lg-6 mt-3"
  }, _slug_jsx("div", {
    className: "skel-pro-gallery"
  })), _slug_jsx("div", {
    className: "product-details sticky"
  }, _slug_jsx("div", {
    className: "skel-pro-summary mt-4 mt-md-0"
  }))), _slug_jsx("div", {
    className: "skel-pro-tabs"
  }), _slug_jsx("section", {
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
})(ProductStickyBoth));

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

/***/ 7659:
/***/ (function(module) {

"use strict";
module.exports = require("react-tabs");;

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
var __webpack_exports__ = __webpack_require__.X(0, [1664,5588,5961,4138,4943,6090,5708,6723,4246,7845,1473,7684,6775,4617,2346], function() { return __webpack_exec__(9945); });
module.exports = __webpack_exports__;

})();