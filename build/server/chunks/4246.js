exports.id = 4246;
exports.ids = [4246];
exports.modules = {

/***/ 4246:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9290);
/* harmony import */ var react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(79);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_features_custom_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8765);
/* harmony import */ var _store_cart__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6090);
/* harmony import */ var _store_modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6723);
/* harmony import */ var _store_wishlist__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5708);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6442);
var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }










function ProductThree(props) {
  const {
    product,
    adClass,
    toggleWishlist,
    wishlist,
    addToCart,
    openQuickview,
    isCategory = true
  } = props; // decide if the product is wishlisted

  let isWishlisted;
  isWishlisted = wishlist.findIndex(item => item.slug === product.slug) > -1 ? true : false;

  const showQuickviewHandler = () => {
    openQuickview(product.slug);
  };

  const wishlistHandler = e => {
    if (toggleWishlist) {
      toggleWishlist(product);
    }

    e.preventDefault();
    let currentTarget = e.currentTarget;
    currentTarget.classList.add('load-more-overlay', 'loading');
    setTimeout(() => {
      currentTarget.classList.remove('load-more-overlay', 'loading');
    }, 1000);
  };

  const addToCartHandler = e => {
    e.preventDefault();
    addToCart(_objectSpread(_objectSpread({}, product), {}, {
      qty: 1,
      price: product.price[0]
    }));
  };

  return __jsx("div", {
    className: `product product-classic ${adClass} ${product.variants.length > 0 ? 'product-variable' : ''}`
  }, __jsx("figure", {
    className: "product-media"
  }, __jsx(_components_features_custom_link__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {
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
  }) : ""), __jsx("div", {
    className: "product-label-group"
  }, product.is_new ? __jsx("label", {
    className: "product-label label-new"
  }, "New") : '', product.is_top ? __jsx("label", {
    className: "product-label label-top"
  }, "Top") : '', product.discount > 0 ? product.variants.length === 0 ? __jsx("label", {
    className: "product-label label-sale"
  }, product.discount, "% OFF") : __jsx("label", {
    className: "product-label label-sale"
  }, "Sale") : '')), __jsx("div", {
    className: "product-details"
  }, isCategory ? __jsx("div", {
    className: "product-cat"
  }, product.categories ? product.categories.map((item, index) => __jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), {
    key: item.name + '-' + index
  }, __jsx(_components_features_custom_link__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {
    href: {
      pathname: '/shop',
      query: {
        category: item.slug
      }
    }
  }, item.name, index < product.categories.length - 1 ? ', ' : ""))) : "") : '', __jsx("h3", {
    className: "product-name"
  }, __jsx(_components_features_custom_link__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {
    href: `/product/default/${product.slug}`
  }, product.name)), __jsx("div", {
    className: "product-price"
  }, product.price[0] !== product.price[1] ? product.variants.length === 0 || product.variants.length > 0 && !product.variants[0].price ? __jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, __jsx("ins", {
    className: "new-price"
  }, "$", (0,_utils__WEBPACK_IMPORTED_MODULE_7__/* .toDecimal */ .YM)(product.price[0])), __jsx("del", {
    className: "old-price"
  }, "$", (0,_utils__WEBPACK_IMPORTED_MODULE_7__/* .toDecimal */ .YM)(product.price[1]))) : __jsx("del", {
    className: "new-price"
  }, "$", (0,_utils__WEBPACK_IMPORTED_MODULE_7__/* .toDecimal */ .YM)(product.price[0]), " \u2013 $", (0,_utils__WEBPACK_IMPORTED_MODULE_7__/* .toDecimal */ .YM)(product.price[1])) : __jsx("ins", {
    className: "new-price"
  }, "$", (0,_utils__WEBPACK_IMPORTED_MODULE_7__/* .toDecimal */ .YM)(product.price[0]))), __jsx("div", {
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
  }, (0,_utils__WEBPACK_IMPORTED_MODULE_7__/* .toDecimal */ .YM)(product.ratings))), __jsx(_components_features_custom_link__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {
    href: `/product/default/${product.slug}`,
    className: "rating-reviews"
  }, "( ", product.reviews, " reviews )")), __jsx("div", {
    className: "product-action"
  }, product.variants.length > 0 ? __jsx(_components_features_custom_link__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {
    href: `/product/default/${product.slug}`,
    className: "btn-product btn-cart",
    title: "Go to product"
  }, __jsx("span", null, "Select Options")) : __jsx("a", {
    href: "#",
    className: "btn-product btn-cart",
    title: "Add to cart",
    onClick: addToCartHandler
  }, __jsx("i", {
    className: "d-icon-bag"
  }), __jsx("span", null, "Add to cart")), __jsx("a", {
    href: "#",
    className: "btn-product-icon btn-wishlist",
    title: isWishlisted ? 'Remove from wishlist' : 'Add to wishlist',
    onClick: wishlistHandler
  }, __jsx("i", {
    className: isWishlisted ? "d-icon-heart-full" : "d-icon-heart"
  })), __jsx(_components_features_custom_link__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {
    href: "#",
    className: "btn-product-icon btn-quickview",
    title: "Quick View",
    onClick: showQuickviewHandler
  }, __jsx("i", {
    className: "d-icon-search"
  })))));
}

function mapStateToProps(state) {
  return {
    wishlist: state.wishlist.data ? state.wishlist.data : []
  };
}

/* harmony default export */ __webpack_exports__["Z"] = ((0,react_redux__WEBPACK_IMPORTED_MODULE_2__.connect)(mapStateToProps, _objectSpread({
  toggleWishlist: _store_wishlist__WEBPACK_IMPORTED_MODULE_6__/* .wishlistActions.toggleWishlist */ .w.toggleWishlist,
  addToCart: _store_cart__WEBPACK_IMPORTED_MODULE_4__/* .cartActions.addToCart */ .Uw.addToCart
}, _store_modal__WEBPACK_IMPORTED_MODULE_5__/* .modalActions */ .n))(ProductThree));

/***/ })

};
;