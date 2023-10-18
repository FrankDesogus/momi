(function() {
var exports = {};
exports.id = 5505;
exports.ids = [5505,3866];
exports.modules = {

/***/ 4699:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ Breadcrumb; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_features_custom_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8765);

var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);

function Breadcrumb(props) {
  return __jsx("div", {
    className: "page-header",
    style: {
      backgroundImage: `url( ./images/home/page-header.jpg )`,
      backgroundColor: "#584B3B"
    }
  }, __jsx("h1", {
    className: "page-title"
  }, props.title), __jsx("ul", {
    className: "breadcrumb"
  }, __jsx("li", null, __jsx(_components_features_custom_link__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z, {
    href: "/"
  }, __jsx("i", {
    className: "d-icon-home"
  }))), __jsx("li", {
    className: "delimiter"
  }, "/"), props.parentUrl ? __jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, __jsx("li", null, __jsx(_components_features_custom_link__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z, {
    href: props.parentUrl
  }, props.subTitle)), __jsx("li", {
    className: "delimiter"
  }, "/")) : "", __jsx("li", null, props.title)));
}

/***/ }),

/***/ 9642:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ products; }
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: external "@apollo/react-hooks"
var react_hooks_ = __webpack_require__(7530);
// EXTERNAL MODULE: external "react-helmet"
var external_react_helmet_ = __webpack_require__(6481);
var external_react_helmet_default = /*#__PURE__*/__webpack_require__.n(external_react_helmet_);
// EXTERNAL MODULE: ./components/features/breadcrumb.jsx
var breadcrumb = __webpack_require__(4699);
// EXTERNAL MODULE: ./components/features/owl-carousel.jsx
var owl_carousel = __webpack_require__(4138);
// EXTERNAL MODULE: ./server/queries.js
var queries = __webpack_require__(4733);
// EXTERNAL MODULE: ./server/apollo.js
var apollo = __webpack_require__(5438);
// EXTERNAL MODULE: ./components/features/product/common/quickview-modal.jsx
var quickview_modal = __webpack_require__(9656);
// EXTERNAL MODULE: external "react-lazy-load-image-component"
var external_react_lazy_load_image_component_ = __webpack_require__(9290);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(79);
// EXTERNAL MODULE: ./components/features/custom-link.jsx
var custom_link = __webpack_require__(8765);
// EXTERNAL MODULE: ./store/cart.js + 1 modules
var cart = __webpack_require__(6090);
// EXTERNAL MODULE: ./store/modal.js
var modal = __webpack_require__(6723);
// EXTERNAL MODULE: ./store/wishlist.js
var wishlist = __webpack_require__(5708);
// EXTERNAL MODULE: ./utils/index.js
var utils = __webpack_require__(6442);
;// CONCATENATED MODULE: ./components/features/product/product-one.jsx
var __jsx = (external_react_default()).createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }










function ProductOne(props) {
  const {
    product,
    adClass,
    toggleWishlist,
    wishlist,
    addToCart,
    openQuickview
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
    className: `product shadow-media ${adClass}`
  }, __jsx("figure", {
    className: "product-media"
  }, __jsx(custom_link/* default */.Z, {
    href: `/product/default/${product.slug}`
  }, __jsx(external_react_lazy_load_image_component_.LazyLoadImage, {
    alt: "product",
    src: "https://d-themes.com/react_asset_api/riode" + product.pictures[0].url,
    threshold: 500,
    effect: "opacity",
    width: "300",
    height: "338"
  }), product.pictures.length >= 2 ? __jsx(external_react_lazy_load_image_component_.LazyLoadImage, {
    alt: "product",
    src: "https://d-themes.com/react_asset_api/riode" + product.pictures[1].url,
    threshold: 500,
    effect: "opacity",
    width: "300",
    height: "338"
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
  }, "Sale") : ''), __jsx("div", {
    className: "product-action-vertical"
  }, product.variants.length > 0 ? __jsx(custom_link/* default */.Z, {
    href: `/product/default/${product.slug}`,
    className: "btn-product-icon btn-cart",
    title: "Go to product"
  }, __jsx("i", {
    className: "d-icon-arrow-right"
  })) : __jsx("a", {
    href: "#",
    className: "btn-product-icon btn-cart",
    title: "Add to cart",
    onClick: addToCartHandler
  }, __jsx("i", {
    className: "d-icon-bag"
  }))), __jsx("div", {
    className: "product-action"
  }, __jsx(custom_link/* default */.Z, {
    href: "#",
    className: "btn-product btn-quickview",
    title: "Quick View",
    onClick: showQuickviewHandler
  }, "Quick View"))), __jsx("div", {
    className: "product-details"
  }, __jsx("a", {
    href: "#",
    className: `btn-wishlist`,
    title: isWishlisted ? 'Remove from wishlist' : 'Add to wishlist',
    onClick: wishlistHandler
  }, __jsx("i", {
    className: isWishlisted ? "d-icon-heart-full" : "d-icon-heart"
  })), __jsx("div", {
    className: "product-cat"
  }, product.categories ? product.categories.map((item, index) => __jsx((external_react_default()).Fragment, {
    key: item.name + '-' + index
  }, __jsx(custom_link/* default */.Z, {
    href: {
      pathname: '/shop',
      query: {
        category: item.slug
      }
    }
  }, item.name, index < product.categories.length - 1 ? ', ' : ""))) : ""), __jsx("h3", {
    className: "product-name"
  }, __jsx(custom_link/* default */.Z, {
    href: `/product/default/${product.slug}`
  }, product.name)), __jsx("div", {
    className: "product-price"
  }, product.price[0] !== product.price[1] ? product.variants.length === 0 || product.variants.length > 0 && !product.variants[0].price ? __jsx((external_react_default()).Fragment, null, __jsx("ins", {
    className: "new-price"
  }, "$", (0,utils/* toDecimal */.YM)(product.price[0])), __jsx("del", {
    className: "old-price"
  }, "$", (0,utils/* toDecimal */.YM)(product.price[1]))) : __jsx("del", {
    className: "new-price"
  }, "$", (0,utils/* toDecimal */.YM)(product.price[0]), " \u2013 $", (0,utils/* toDecimal */.YM)(product.price[1])) : __jsx("ins", {
    className: "new-price"
  }, "$", (0,utils/* toDecimal */.YM)(product.price[0]))), __jsx("div", {
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
  }, (0,utils/* toDecimal */.YM)(product.ratings))), __jsx(custom_link/* default */.Z, {
    href: `/product/default/${product.slug}`,
    className: "rating-reviews"
  }, "( ", product.reviews, " reviews )"))));
}

function mapStateToProps(state) {
  return {
    wishlist: state.wishlist.data ? state.wishlist.data : []
  };
}

/* harmony default export */ var product_one = ((0,external_react_redux_.connect)(mapStateToProps, _objectSpread({
  toggleWishlist: wishlist/* wishlistActions.toggleWishlist */.w.toggleWishlist,
  addToCart: cart/* cartActions.addToCart */.Uw.addToCart
}, modal/* modalActions */.n))(ProductOne));
// EXTERNAL MODULE: ./components/features/product/product-two.jsx
var product_two = __webpack_require__(3264);
// EXTERNAL MODULE: ./components/features/product/product-three.jsx
var product_three = __webpack_require__(4246);
;// CONCATENATED MODULE: ./components/features/product/product-four.jsx
var product_four_jsx = (external_react_default()).createElement;

function product_four_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function product_four_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { product_four_ownKeys(Object(source), true).forEach(function (key) { product_four_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { product_four_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function product_four_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }











function ProductFour(props) {
  const {
    product,
    adClass,
    toggleWishlist,
    wishlist,
    addToCart,
    openQuickview
  } = props; // decide if the product is wishlisted

  let isWishlisted;
  isWishlisted = wishlist.findIndex(item => item.slug === product.slug) > -1 ? true : false;
  (0,external_react_.useEffect)(() => {
    let items = document.querySelectorAll('.product-slideup-content');

    for (let i = 0; i < items.length; i++) {
      items[i].addEventListener('mouseenter', mouseOverHandler, false);
      items[i].addEventListener('touchstart', mouseOverHandler, false);
      items[i].addEventListener('mouseleave', mouseLeaveHandler, false);
      items[i].addEventListener('touchleave', mouseLeaveHandler, false);
    }

    return () => {
      for (let i = 0; i < items.length; i++) {
        items[i].removeEventListener('mouseenter', mouseOverHandler);
        items[i].removeEventListener('touchstart', mouseOverHandler);
        items[i].removeEventListener('mouseleave', mouseLeaveHandler);
        items[i].removeEventListener('touchleave', mouseLeaveHandler);
      }
    };
  }, []);

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
    addToCart(product_four_objectSpread(product_four_objectSpread({}, product), {}, {
      qty: 1,
      price: product.price[0]
    }));
  };

  const mouseOverHandler = e => {
    let height = e.currentTarget.querySelector('.product-hide-details').offsetHeight;
    e.currentTarget.querySelector('.product-details').setAttribute('style', `transform: translateY(-${height}px)`);
    e.currentTarget.querySelector('.product-hide-details').setAttribute('style', `transform: translateY(-${height}px)`);
  };

  const mouseLeaveHandler = e => {
    e.currentTarget.querySelector('.product-details').setAttribute('style', '');
    e.currentTarget.querySelector('.product-hide-details').setAttribute('style', '');
  };

  return product_four_jsx("div", {
    className: `product product-slideup-content text-center ${adClass} ${product.variants.length > 0 ? 'product-variable' : ''}`
  }, product_four_jsx("figure", {
    className: "product-media"
  }, product_four_jsx(custom_link/* default */.Z, {
    href: `/product/default/${product.slug}`
  }, product_four_jsx(external_react_lazy_load_image_component_.LazyLoadImage, {
    alt: "product",
    src: "https://d-themes.com/react_asset_api/riode" + product.pictures[0].url,
    threshold: 500,
    effect: "opacity",
    width: "300",
    height: "338"
  }), product.pictures.length >= 2 ? product_four_jsx(external_react_lazy_load_image_component_.LazyLoadImage, {
    alt: "product",
    src: "https://d-themes.com/react_asset_api/riode" + product.pictures[1].url,
    threshold: 500,
    width: "300",
    height: "338",
    effect: "opacity",
    wrapperClassName: "product-image-hover"
  }) : ""), product_four_jsx("div", {
    className: "product-label-group"
  }, product.is_new ? product_four_jsx("label", {
    className: "product-label label-new"
  }, "New") : '', product.is_top ? product_four_jsx("label", {
    className: "product-label label-top"
  }, "Top") : '', product.discount > 0 ? product.variants.length === 0 ? product_four_jsx("label", {
    className: "product-label label-sale"
  }, product.discount, "% OFF") : product_four_jsx("label", {
    className: "product-label label-sale"
  }, "Sale") : '')), product_four_jsx("div", {
    className: "product-details"
  }, product_four_jsx("div", {
    className: "product-cat"
  }, product.categories ? product.categories.map((item, index) => product_four_jsx((external_react_default()).Fragment, {
    key: item.name + '-' + index
  }, product_four_jsx(custom_link/* default */.Z, {
    href: {
      pathname: '/shop',
      query: {
        category: item.slug
      }
    }
  }, item.name, index < product.categories.length - 1 ? ', ' : ""))) : ""), product_four_jsx("h3", {
    className: "product-name"
  }, product_four_jsx(custom_link/* default */.Z, {
    href: `/product/default/${product.slug}`
  }, product.name)), product_four_jsx("div", {
    className: "product-price"
  }, product.price[0] !== product.price[1] ? product.variants.length === 0 || product.variants.length > 0 && !product.variants[0].price ? product_four_jsx((external_react_default()).Fragment, null, product_four_jsx("ins", {
    className: "new-price"
  }, "$", (0,utils/* toDecimal */.YM)(product.price[0])), product_four_jsx("del", {
    className: "old-price"
  }, "$", (0,utils/* toDecimal */.YM)(product.price[1]))) : product_four_jsx("del", {
    className: "new-price"
  }, "$", (0,utils/* toDecimal */.YM)(product.price[0]), " \u2013 $", (0,utils/* toDecimal */.YM)(product.price[1])) : product_four_jsx("ins", {
    className: "new-price"
  }, "$", (0,utils/* toDecimal */.YM)(product.price[0])))), product_four_jsx("div", {
    className: "product-hide-details"
  }, product_four_jsx("div", {
    className: "ratings-container"
  }, product_four_jsx("div", {
    className: "ratings-full"
  }, product_four_jsx("span", {
    className: "ratings",
    style: {
      width: 20 * product.ratings + '%'
    }
  }), product_four_jsx("span", {
    className: "tooltiptext tooltip-top"
  }, (0,utils/* toDecimal */.YM)(product.ratings))), product_four_jsx(custom_link/* default */.Z, {
    href: `/product/default/${product.slug}`,
    className: "rating-reviews"
  }, "( ", product.reviews, " reviews )")), product_four_jsx("div", {
    className: "product-action"
  }, product_four_jsx("a", {
    href: "#",
    className: "btn-product-icon btn-wishlist",
    title: isWishlisted ? 'Remove from wishlist' : 'Add to wishlist',
    onClick: wishlistHandler
  }, product_four_jsx("i", {
    className: isWishlisted ? "d-icon-heart-full" : "d-icon-heart"
  })), product.variants.length > 0 ? product_four_jsx(custom_link/* default */.Z, {
    href: `/product/default/${product.slug}`,
    className: "btn-product btn-cart",
    title: "Go to product"
  }, product_four_jsx("span", null, "Select Options")) : product_four_jsx("a", {
    href: "#",
    className: "btn-product btn-cart",
    title: "Add to cart",
    onClick: addToCartHandler
  }, product_four_jsx("i", {
    className: "d-icon-bag"
  }), product_four_jsx("span", null, "Add to cart")), product_four_jsx(custom_link/* default */.Z, {
    href: "#",
    className: "btn-product-icon btn-quickview",
    title: "Quick View",
    onClick: showQuickviewHandler
  }, product_four_jsx("i", {
    className: "d-icon-search"
  })))));
}

function product_four_mapStateToProps(state) {
  return {
    wishlist: state.wishlist.data ? state.wishlist.data : []
  };
}

/* harmony default export */ var product_four = ((0,external_react_redux_.connect)(product_four_mapStateToProps, product_four_objectSpread({
  toggleWishlist: wishlist/* wishlistActions.toggleWishlist */.w.toggleWishlist,
  addToCart: cart/* cartActions.addToCart */.Uw.addToCart
}, modal/* modalActions */.n))(ProductFour));
;// CONCATENATED MODULE: ./components/features/product/product-five.jsx
var product_five_jsx = (external_react_default()).createElement;

function product_five_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function product_five_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { product_five_ownKeys(Object(source), true).forEach(function (key) { product_five_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { product_five_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function product_five_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }











function ProductFive(props) {
  const {
    product,
    adClass,
    toggleWishlist,
    wishlist,
    addToCart,
    openQuickview
  } = props; // decide if the product is wishlisted

  let isWishlisted;
  isWishlisted = wishlist.findIndex(item => item.slug === product.slug) > -1 ? true : false;
  (0,external_react_.useEffect)(() => {
    let items = document.querySelectorAll('.product-slideup-content');

    for (let i = 0; i < items.length; i++) {
      items[i].addEventListener('mouseenter', mouseOverHandler, false);
      items[i].addEventListener('touchstart', mouseOverHandler, false);
      items[i].addEventListener('mouseleave', mouseLeaveHandler, false);
      items[i].addEventListener('touchleave', mouseLeaveHandler, false);
    }

    return () => {
      for (let i = 0; i < items.length; i++) {
        items[i].removeEventListener('mouseenter', mouseOverHandler);
        items[i].removeEventListener('touchstart', mouseOverHandler);
        items[i].removeEventListener('mouseleave', mouseLeaveHandler);
        items[i].removeEventListener('touchleave', mouseLeaveHandler);
      }
    };
  }, []);

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
    addToCart(product_five_objectSpread(product_five_objectSpread({}, product), {}, {
      qty: 1,
      price: product.price[0]
    }));
  };

  const mouseOverHandler = e => {
    let height = e.currentTarget.querySelector('.product-hide-details').offsetHeight;
    e.currentTarget.querySelector('.product-details').setAttribute('style', `transform: translateY(-${height}px)`);
    e.currentTarget.querySelector('.product-hide-details').setAttribute('style', `transform: translateY(-${height}px)`);
  };

  const mouseLeaveHandler = e => {
    e.currentTarget.querySelector('.product-details').setAttribute('style', '');
    e.currentTarget.querySelector('.product-hide-details').setAttribute('style', '');
  };

  return product_five_jsx("div", {
    className: `product product-slideup text-center ${adClass} ${product.variants.length > 0 ? 'product-variable' : ''}`
  }, product_five_jsx("figure", {
    className: "product-media"
  }, product_five_jsx(custom_link/* default */.Z, {
    href: `/product/default/${product.slug}`
  }, product_five_jsx(external_react_lazy_load_image_component_.LazyLoadImage, {
    alt: "product",
    src: "https://d-themes.com/react_asset_api/riode" + product.pictures[0].url,
    threshold: 500,
    effect: "opacity",
    width: "300",
    height: "338"
  }), product.pictures.length >= 2 ? product_five_jsx(external_react_lazy_load_image_component_.LazyLoadImage, {
    alt: "product",
    src: "https://d-themes.com/react_asset_api/riode" + product.pictures[1].url,
    threshold: 500,
    width: "300",
    height: "338",
    effect: "opacity",
    wrapperClassName: "product-image-hover"
  }) : ""), product_five_jsx("div", {
    className: "product-label-group"
  }, product.is_new ? product_five_jsx("label", {
    className: "product-label label-new"
  }, "New") : '', product.is_top ? product_five_jsx("label", {
    className: "product-label label-top"
  }, "Top") : '', product.discount > 0 ? product.variants.length === 0 ? product_five_jsx("label", {
    className: "product-label label-sale"
  }, product.discount, "% OFF") : product_five_jsx("label", {
    className: "product-label label-sale"
  }, "Sale") : '')), product_five_jsx("div", {
    className: "product-details"
  }, product_five_jsx("div", {
    className: "product-cat"
  }, product.categories ? product.categories.map((item, index) => product_five_jsx((external_react_default()).Fragment, {
    key: item.name + '-' + index
  }, product_five_jsx(custom_link/* default */.Z, {
    href: {
      pathname: '/shop',
      query: {
        category: item.slug
      }
    }
  }, item.name, index < product.categories.length - 1 ? ', ' : ""))) : ""), product_five_jsx("h3", {
    className: "product-name"
  }, product_five_jsx(custom_link/* default */.Z, {
    href: `/product/default/${product.slug}`
  }, product.name)), product_five_jsx("div", {
    className: "product-price"
  }, product.price[0] !== product.price[1] ? product.variants.length === 0 || product.variants.length > 0 && !product.variants[0].price ? product_five_jsx((external_react_default()).Fragment, null, product_five_jsx("ins", {
    className: "new-price"
  }, "$", (0,utils/* toDecimal */.YM)(product.price[0])), product_five_jsx("del", {
    className: "old-price"
  }, "$", (0,utils/* toDecimal */.YM)(product.price[1]))) : product_five_jsx("del", {
    className: "new-price"
  }, "$", (0,utils/* toDecimal */.YM)(product.price[0]), " \u2013 $", (0,utils/* toDecimal */.YM)(product.price[1])) : product_five_jsx("ins", {
    className: "new-price"
  }, "$", (0,utils/* toDecimal */.YM)(product.price[0]))), product_five_jsx("div", {
    className: "ratings-container"
  }, product_five_jsx("div", {
    className: "ratings-full"
  }, product_five_jsx("span", {
    className: "ratings",
    style: {
      width: 20 * product.ratings + '%'
    }
  }), product_five_jsx("span", {
    className: "tooltiptext tooltip-top"
  }, (0,utils/* toDecimal */.YM)(product.ratings))), product_five_jsx(custom_link/* default */.Z, {
    href: `/product/default/${product.slug}`,
    className: "rating-reviews"
  }, "( ", product.reviews, " reviews )")), product_five_jsx("div", {
    className: "product-action"
  }, product_five_jsx("a", {
    href: "#",
    className: "btn-product-icon btn-wishlist",
    title: isWishlisted ? 'Remove from wishlist' : 'Add to wishlist',
    onClick: wishlistHandler
  }, product_five_jsx("i", {
    className: isWishlisted ? "d-icon-heart-full" : "d-icon-heart"
  })), product.variants.length > 0 ? product_five_jsx(custom_link/* default */.Z, {
    href: `/product/default/${product.slug}`,
    className: "btn-product btn-cart",
    title: "Go to product"
  }, product_five_jsx("span", null, "Select Options")) : product_five_jsx("a", {
    href: "#",
    className: "btn-product btn-cart",
    title: "Add to cart",
    onClick: addToCartHandler
  }, product_five_jsx("i", {
    className: "d-icon-bag"
  }), product_five_jsx("span", null, "Add to cart")), product_five_jsx(custom_link/* default */.Z, {
    href: "#",
    className: "btn-product-icon btn-quickview",
    title: "Quick View",
    onClick: showQuickviewHandler
  }, product_five_jsx("i", {
    className: "d-icon-search"
  })))));
}

function product_five_mapStateToProps(state) {
  return {
    wishlist: state.wishlist.data ? state.wishlist.data : []
  };
}

/* harmony default export */ var product_five = ((0,external_react_redux_.connect)(product_five_mapStateToProps, product_five_objectSpread({
  toggleWishlist: wishlist/* wishlistActions.toggleWishlist */.w.toggleWishlist,
  addToCart: cart/* cartActions.addToCart */.Uw.addToCart
}, modal/* modalActions */.n))(ProductFive));
;// CONCATENATED MODULE: ./components/features/product/product-six.jsx
var product_six_jsx = (external_react_default()).createElement;

function product_six_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function product_six_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { product_six_ownKeys(Object(source), true).forEach(function (key) { product_six_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { product_six_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function product_six_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }










function ProductSix(props) {
  const {
    product,
    adClass = 'text-center',
    toggleWishlist,
    wishlist,
    addToCart,
    openQuickview
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
    addToCart(product_six_objectSpread(product_six_objectSpread({}, product), {}, {
      qty: 1,
      price: product.price[0]
    }));
  };

  return product_six_jsx("div", {
    className: `product ${product.variants.length > 0 ? 'product-variable' : ''} text-center shadow-media cart-full ${adClass}`
  }, product_six_jsx("figure", {
    className: "product-media"
  }, product_six_jsx(custom_link/* default */.Z, {
    href: `/product/default/${product.slug}`
  }, product_six_jsx(external_react_lazy_load_image_component_.LazyLoadImage, {
    alt: "product",
    src: "https://d-themes.com/react_asset_api/riode" + product.pictures[0].url,
    threshold: 500,
    effect: "opacity",
    width: "300",
    height: "338"
  }), product.pictures.length >= 2 ? product_six_jsx(external_react_lazy_load_image_component_.LazyLoadImage, {
    alt: "product",
    src: "https://d-themes.com/react_asset_api/riode" + product.pictures[1].url,
    threshold: 500,
    width: "300",
    height: "338",
    effect: "opacity",
    wrapperClassName: "product-image-hover"
  }) : ""), product_six_jsx("div", {
    className: "product-label-group"
  }, product.is_new ? product_six_jsx("label", {
    className: "product-label label-new"
  }, "New") : '', product.is_top ? product_six_jsx("label", {
    className: "product-label label-top"
  }, "Top") : '', product.discount > 0 ? product.variants.length === 0 ? product_six_jsx("label", {
    className: "product-label label-sale"
  }, product.discount, "% OFF") : product_six_jsx("label", {
    className: "product-label label-sale"
  }, "Sale") : ''), product_six_jsx("div", {
    className: "product-action-vertical"
  }, product_six_jsx("a", {
    href: "#",
    className: "btn-product-icon btn-wishlist",
    title: isWishlisted ? 'Remove from wishlist' : 'Add to wishlist',
    onClick: wishlistHandler
  }, product_six_jsx("i", {
    className: isWishlisted ? "d-icon-heart-full" : "d-icon-heart"
  }))), product_six_jsx("div", {
    className: "product-action"
  }, product_six_jsx(custom_link/* default */.Z, {
    href: "#",
    className: "btn-product btn-quickview",
    title: "Quick View",
    onClick: showQuickviewHandler
  }, "Quick View"))), product_six_jsx("div", {
    className: "product-details"
  }, product_six_jsx("h3", {
    className: "product-name"
  }, product_six_jsx(custom_link/* default */.Z, {
    href: `/product/default/${product.slug}`
  }, product.name)), product_six_jsx("div", {
    className: "product-price"
  }, product.price[0] !== product.price[1] ? product.variants.length === 0 || product.variants.length > 0 && !product.variants[0].price ? product_six_jsx((external_react_default()).Fragment, null, product_six_jsx("ins", {
    className: "new-price"
  }, "$", (0,utils/* toDecimal */.YM)(product.price[0])), product_six_jsx("del", {
    className: "old-price"
  }, "$", (0,utils/* toDecimal */.YM)(product.price[1]))) : product_six_jsx("del", {
    className: "new-price"
  }, "$", (0,utils/* toDecimal */.YM)(product.price[0]), " \u2013 $", (0,utils/* toDecimal */.YM)(product.price[1])) : product_six_jsx("ins", {
    className: "new-price"
  }, "$", (0,utils/* toDecimal */.YM)(product.price[0]))), product.variants.length > 0 ? product_six_jsx(custom_link/* default */.Z, {
    href: `/product/default/${product.slug}`,
    className: "btn-product btn-cart",
    title: "Go to product"
  }, product_six_jsx("span", null, "Select Options")) : product_six_jsx("a", {
    href: "#",
    className: "btn-product btn-cart",
    title: "Add to cart",
    onClick: addToCartHandler
  }, product_six_jsx("i", {
    className: "d-icon-bag"
  }), "Add to cart")));
}

function product_six_mapStateToProps(state) {
  return {
    wishlist: state.wishlist.data ? state.wishlist.data : []
  };
}

/* harmony default export */ var product_six = ((0,external_react_redux_.connect)(product_six_mapStateToProps, product_six_objectSpread({
  toggleWishlist: wishlist/* wishlistActions.toggleWishlist */.w.toggleWishlist,
  addToCart: cart/* cartActions.addToCart */.Uw.addToCart
}, modal/* modalActions */.n))(ProductSix));
// EXTERNAL MODULE: ./components/features/quantity.jsx
var quantity = __webpack_require__(1473);
;// CONCATENATED MODULE: ./components/features/product/product-seven.jsx

var product_seven_jsx = (external_react_default()).createElement;

function product_seven_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function product_seven_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { product_seven_ownKeys(Object(source), true).forEach(function (key) { product_seven_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { product_seven_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function product_seven_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }










function ProductSeven(props) {
  const {
    product,
    adClass = 'text-center',
    toggleWishlist,
    wishlist,
    addToCart,
    openQuickview
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

    if (product.stock > 0) {
      let qty = e.currentTarget.closest('.product-with-qty').querySelector('.product-quantity .quantity').value;
      addToCart(product_seven_objectSpread(product_seven_objectSpread({}, product), {}, {
        qty: qty,
        price: product.price[0]
      }));
    }
  };

  return product_seven_jsx("div", {
    className: `product ${product.variants.length > 0 ? 'product-variable' : ''} text-center shadow-media product-with-qty ${adClass}`
  }, product_seven_jsx("figure", {
    className: "product-media"
  }, product_seven_jsx(custom_link/* default */.Z, {
    href: `/product/default/${product.slug}`
  }, product_seven_jsx(external_react_lazy_load_image_component_.LazyLoadImage, {
    alt: "product",
    src: "https://d-themes.com/react_asset_api/riode" + product.pictures[0].url,
    threshold: 500,
    effect: "opacity",
    width: "300",
    height: "338"
  }), product.pictures.length >= 2 ? product_seven_jsx(external_react_lazy_load_image_component_.LazyLoadImage, {
    alt: "product",
    src: "https://d-themes.com/react_asset_api/riode" + product.pictures[1].url,
    threshold: 500,
    width: "300",
    height: "338",
    effect: "opacity",
    wrapperClassName: "product-image-hover"
  }) : ""), product_seven_jsx("div", {
    className: "product-label-group"
  }, product.is_new ? product_seven_jsx("label", {
    className: "product-label label-new"
  }, "New") : '', product.is_top ? product_seven_jsx("label", {
    className: "product-label label-top"
  }, "Top") : '', product.discount > 0 ? product.variants.length === 0 ? product_seven_jsx("label", {
    className: "product-label label-sale"
  }, product.discount, "% OFF") : product_seven_jsx("label", {
    className: "product-label label-sale"
  }, "Sale") : ''), product_seven_jsx("div", {
    className: "product-action-vertical"
  }, product_seven_jsx("a", {
    href: "#",
    className: "btn-product-icon btn-wishlist",
    title: isWishlisted ? 'Remove from wishlist' : 'Add to wishlist',
    onClick: wishlistHandler
  }, product_seven_jsx("i", {
    className: isWishlisted ? "d-icon-heart-full" : "d-icon-heart"
  }))), product_seven_jsx("div", {
    className: "product-action"
  }, product_seven_jsx(custom_link/* default */.Z, {
    href: "#",
    className: "btn-product btn-quickview",
    title: "Quick View",
    onClick: showQuickviewHandler
  }, "Quick View"))), product_seven_jsx("div", {
    className: "product-details"
  }, product_seven_jsx("h3", {
    className: "product-name"
  }, product_seven_jsx(custom_link/* default */.Z, {
    href: `/product/default/${product.slug}`
  }, product.name)), product_seven_jsx("div", {
    className: "product-price"
  }, product.price[0] !== product.price[1] ? product.variants.length === 0 || product.variants.length > 0 && !product.variants[0].price ? product_seven_jsx((external_react_default()).Fragment, null, product_seven_jsx("ins", {
    className: "new-price"
  }, "$", (0,utils/* toDecimal */.YM)(product.price[0])), product_seven_jsx("del", {
    className: "old-price"
  }, "$", (0,utils/* toDecimal */.YM)(product.price[1]))) : product_seven_jsx("del", {
    className: "new-price"
  }, "$", (0,utils/* toDecimal */.YM)(product.price[0]), " \u2013 $", (0,utils/* toDecimal */.YM)(product.price[1])) : product_seven_jsx("ins", {
    className: "new-price"
  }, "$", (0,utils/* toDecimal */.YM)(product.price[0]))), product_seven_jsx("div", {
    className: "product-action"
  }, product.variants.length > 0 ? product_seven_jsx(custom_link/* default */.Z, {
    href: `/product/default/${product.slug}`,
    className: "btn-product btn-cart",
    title: "Go to product"
  }, product_seven_jsx("span", null, "Select Options")) : product_seven_jsx((external_react_default()).Fragment, null, product_seven_jsx(quantity/* default */.Z, {
    max: product.stock,
    product: product,
    adClass: "product-quantity"
  }), product_seven_jsx("a", {
    href: "#",
    className: "btn-product btn-cart",
    title: "Add to cart",
    onClick: addToCartHandler
  }, product_seven_jsx("i", {
    className: "d-icon-bag"
  }), product_seven_jsx("span", null, "Add to cart"))))));
}

function product_seven_mapStateToProps(state) {
  return {
    wishlist: state.wishlist.data ? state.wishlist.data : []
  };
}

/* harmony default export */ var product_seven = ((0,external_react_redux_.connect)(product_seven_mapStateToProps, product_seven_objectSpread({
  toggleWishlist: wishlist/* wishlistActions.toggleWishlist */.w.toggleWishlist,
  addToCart: cart/* cartActions.addToCart */.Uw.addToCart
}, modal/* modalActions */.n))(ProductSeven));
// EXTERNAL MODULE: ./components/features/product/product-eight.jsx
var product_eight = __webpack_require__(4298);
// EXTERNAL MODULE: ./components/features/product/product-sm.jsx
var product_sm = __webpack_require__(5379);
// EXTERNAL MODULE: ./components/partials/elements/elements-list.jsx
var elements_list = __webpack_require__(3405);
// EXTERNAL MODULE: ./utils/data/carousel.js
var carousel = __webpack_require__(4943);
;// CONCATENATED MODULE: ./pages/elements/products.jsx

var products_jsx = (external_react_default()).createElement;



















function Products() {
  const {
    data,
    loading
  } = (0,react_hooks_.useQuery)(queries/* GET_PRODUCTS */.tT);
  const products = data ? data.products.data : [];
  return products_jsx("main", {
    className: "skeleton-body"
  }, products_jsx((external_react_helmet_default()), null, products_jsx("title", null, "Riode React eCommerce Template | Products")), products_jsx("h1", {
    className: "d-none"
  }, "Riode React eCommerce Template - Products"), products_jsx(breadcrumb/* default */.Z, {
    subTitle: "Elements",
    title: "Element Products",
    parentUrl: "/elements"
  }), products_jsx("div", {
    className: "page-content"
  }, products_jsx("div", {
    className: "container"
  }, products_jsx("section", {
    className: "mt-10 pt-8"
  }, products_jsx("h2", {
    className: "title title-center"
  }, "Default Style"), !loading ? products_jsx("div", {
    className: "row product-wrapper"
  }, products.slice(0, 4).map(item => products_jsx("div", {
    className: "col-md-3 col-6",
    key: 'default-' + item.slug
  }, products_jsx(product_one, {
    product: item
  })))) : products_jsx("div", {
    className: "row product-wrapper"
  }, [1, 2, 3, 4].map(item => products_jsx("div", {
    className: "col-md-3 col-6 product-loading-overlay",
    key: 'default-skel-' + item
  })))), products_jsx("section", {
    className: "mt-8"
  }, products_jsx("h2", {
    className: "title title-center"
  }, "Centered"), !loading ? products_jsx("div", {
    className: "row product-wrapper"
  }, products.slice(0, 4).map(item => products_jsx("div", {
    className: "col-md-3 col-6",
    key: 'centered-' + item.slug
  }, products_jsx(product_two/* default */.Z, {
    product: item
  })))) : products_jsx("div", {
    className: "row product-wrapper"
  }, [1, 2, 3, 4].map(item => products_jsx("div", {
    className: "col-md-3 col-6 product-loading-overlay",
    key: 'centered-skel-' + item
  })))), products_jsx("section", {
    className: "mt-8"
  }, products_jsx("h2", {
    className: "title title-center"
  }, "Classic Button"), !loading ? products_jsx("div", {
    className: "row product-wrapper"
  }, products.slice(0, 4).map(item => products_jsx("div", {
    className: "col-md-3 col-6",
    key: 'classic-' + item.slug
  }, products_jsx(product_three/* default */.Z, {
    product: item
  })))) : products_jsx("div", {
    className: "row product-wrapper"
  }, [1, 2, 3, 4].map(item => products_jsx("div", {
    className: "col-md-3 col-6 product-loading-overlay",
    key: 'classic-skel-' + item
  })))), products_jsx("section", {
    className: "mt-8"
  }, products_jsx("h2", {
    className: "title title-center"
  }, "Pop-up"), !loading ? products_jsx("div", {
    className: "row product-wrapper"
  }, products.slice(0, 4).map(item => products_jsx("div", {
    className: "col-md-3 col-6",
    key: 'popup-' + item.slug
  }, products_jsx(product_four, {
    product: item
  })))) : products_jsx("div", {
    className: "row product-wrapper"
  }, [1, 2, 3, 4].map(item => products_jsx("div", {
    className: "col-md-3 col-6 product-loading-overlay",
    key: 'popup-skel-' + item
  })))), products_jsx("section", {
    className: "mt-8"
  }, products_jsx("h2", {
    className: "title title-center"
  }, "Split Line 5 Columns"), !loading ? products_jsx("div", {
    className: "row product-wrapper split-line"
  }, products.slice(0, 5).map(item => products_jsx("div", {
    className: "col-xl-5col col-lg-3 col-sm-4 col-6",
    key: 'split-line-' + item.slug
  }, products_jsx(product_five, {
    product: item
  })))) : products_jsx("div", {
    className: "row product-wrapper split-line"
  }, [1, 2, 3, 4, 5].map(item => products_jsx("div", {
    className: "col-xl-5col col-lg-3 col-sm-4 col-6",
    key: 'split-line-skel-' + item
  })))), products_jsx("section", {
    className: "mt-10"
  }, products_jsx("h2", {
    className: "title title-center"
  }, "Without Space"), !loading ? products_jsx(owl_carousel/* default */.Z, {
    adClass: "owl-theme gutter-xs",
    options: carousel/* mainSlider1 */.nB
  }, products.slice(0, 5).map(item => products_jsx(product_two/* default */.Z, {
    product: item,
    key: 'without-space-' + item.slug
  }))) : products_jsx(owl_carousel/* default */.Z, {
    adClass: "owl-theme gutter-xs",
    options: carousel/* mainSlider1 */.nB
  }, [1, 2, 3, 4, 5].map(item => products_jsx("div", {
    className: "product-loading-overlay",
    key: 'without-space-skel-' + item
  })))), products_jsx("section", {
    className: "mt-10 pt-2"
  }, products_jsx("h2", {
    className: "title title-center"
  }, "Image Gap Style"), !loading ? products_jsx("div", {
    className: "row product-wrapper equal-height"
  }, products.slice(0, 4).map(item => products_jsx("div", {
    className: "col-md-3 col-6",
    key: 'image-gap-' + item.slug
  }, products_jsx(product_two/* default */.Z, {
    product: item,
    adClass: "product-image-gap"
  })))) : products_jsx("div", {
    className: "row product-wrapper equal-height"
  }, [1, 2, 3, 4].map(item => products_jsx("div", {
    className: "col-md-3 col-6 product-loading-overlay",
    key: 'image-gap-skel-' + item
  })))), products_jsx("section", {
    className: "mt-10"
  }, products_jsx("h2", {
    className: "title title-center"
  }, "Modern Style 1"), !loading ? products_jsx(owl_carousel/* default */.Z, {
    adClass: "owl-theme",
    options: carousel/* mainSlider19 */.Aj
  }, products.slice(0, 5).map(item => products_jsx(product_six, {
    product: item,
    key: 'modern-style-one-' + item.slug
  }))) : products_jsx(owl_carousel/* default */.Z, {
    adClass: "owl-theme",
    options: carousel/* mainSlider19 */.Aj
  }, [1, 2, 3, 4, 5].map(item => products_jsx("div", {
    className: "product-loading-overlay",
    key: 'modern-style-one-skel-' + item
  })))), products_jsx("section", {
    className: "mt-10 pb-4"
  }, products_jsx("h2", {
    className: "title title-center"
  }, "Modern Style 2"), !loading ? products_jsx(owl_carousel/* default */.Z, {
    adClass: "owl-theme",
    options: carousel/* mainSlider19 */.Aj
  }, products.slice(0, 5).map(item => products_jsx(product_seven, {
    product: item,
    key: 'modern-style-two-' + item.slug
  }))) : products_jsx(owl_carousel/* default */.Z, {
    adClass: "owl-theme",
    options: carousel/* mainSlider19 */.Aj
  }, [1, 2, 3, 4, 5].map(item => products_jsx("div", {
    className: "product-loading-overlay",
    key: 'modern-style-two-skel-' + item
  })))), products_jsx("section", {
    className: "mt-8"
  }, products_jsx("h2", {
    className: "title title-center"
  }, "Product List"), !loading ? products_jsx("div", {
    className: "row"
  }, products_jsx("div", {
    className: "col-lg-9"
  }, products_jsx("div", {
    className: "row"
  }, products.slice(0, 2).map(item => products_jsx("div", {
    className: "col-6 col-sm-12",
    key: 'list-' + item.slug
  }, products_jsx(product_eight/* default */.Z, {
    product: item
  }))))), products_jsx("div", {
    className: "col-lg-3"
  }, products_jsx("div", {
    className: "widget widget-products"
  }, products_jsx("h4", {
    className: "widget-title"
  }, "Our Featured"), products_jsx("div", {
    className: "widget-body"
  }, products_jsx(owl_carousel/* default */.Z, {
    adClass: "owl-nav-top",
    options: carousel/* mainSlider7 */.wI
  }, products_jsx("div", {
    className: "products-col"
  }, products.slice(0, 4).map(item => products_jsx(product_sm/* default */.Z, {
    product: item,
    key: 'small-' + item.slug
  }))), products_jsx("div", {
    className: "products-col"
  }, products.slice(4, 8).map(item => products_jsx(product_sm/* default */.Z, {
    product: item,
    key: 'small-' + item.slug
  })))))))) : products_jsx("div", {
    className: "row"
  }, products_jsx("div", {
    className: "col-lg-9"
  }, products_jsx("div", {
    className: "row"
  }, [1, 2].map(item => products_jsx("div", {
    className: "skel-pro skel-pro-list mb-4 col-6 col-sm-12",
    key: 'list-skel-' + item
  })))), products_jsx("div", {
    className: "col-lg-3"
  }, products_jsx("div", {
    className: "widget widget-products"
  }, products_jsx("h4", {
    className: "widget-title"
  }, "Our Featured"), products_jsx("div", {
    className: "widget-body"
  }, products_jsx(owl_carousel/* default */.Z, {
    adClass: "owl-nav-top",
    options: carousel/* mainSlider7 */.wI
  }, products_jsx("div", {
    className: "products-col"
  }, [1, 2, 3, 4].map(item => products_jsx("div", {
    className: "skel-pro-list mb-4",
    key: 'small-skel-' + item
  }))), products_jsx("div", {
    className: "products-col"
  }, [1, 2, 3, 4].map(item => products_jsx("div", {
    className: "skel-pro-list mb-4",
    key: 'small-skel-one-' + item
  })))))))))), products_jsx(elements_list/* default */.Z, {
    adClass: "mt-9"
  })));
}

/* harmony default export */ var products = ((0,apollo/* default */.Z)({
  ssr: true
})(Products));

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

/***/ 9997:
/***/ (function(module) {

"use strict";
module.exports = require("react-modal");;

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
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, [1664,5588,5961,4138,4943,6090,5708,6723,4246,3405,7845,1473,7684,4298,5379,3232,3264,9656], function() { return __webpack_exec__(9642); });
module.exports = __webpack_exports__;

})();