exports.id = 3232;
exports.ids = [3232];
exports.modules = {

/***/ 3232:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(79);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6731);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9226);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_features_custom_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8765);
/* harmony import */ var _components_features_countdown__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7845);
/* harmony import */ var _components_features_quantity__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1473);
/* harmony import */ var _components_partials_product_product_nav__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7684);
/* harmony import */ var _store_wishlist__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(5708);
/* harmony import */ var _store_cart__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(6090);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(6442);
var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }













function DetailOne(props) {
  let router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
  const {
    data,
    isStickyCart = false,
    adClass = '',
    isNav = true
  } = props;
  const {
    toggleWishlist,
    addToCart,
    wishlist
  } = props;
  const {
    0: curColor,
    1: setCurColor
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('null');
  const {
    0: curSize,
    1: setCurSize
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('null');
  const {
    0: curIndex,
    1: setCurIndex
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(-1);
  const {
    0: cartActive,
    1: setCartActive
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const {
    0: quantity,
    1: setQauntity
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(1);
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

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    return () => {
      setCurIndex(-1);
      resetValueHandler();
    };
  }, [product]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
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

  return __jsx("div", {
    className: "product-details " + adClass
  }, isNav ? __jsx("div", {
    className: "product-navigation"
  }, __jsx("ul", {
    className: "breadcrumb breadcrumb-lg"
  }, __jsx("li", null, __jsx(_components_features_custom_link__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z, {
    href: "/"
  }, __jsx("i", {
    className: "d-icon-home"
  }))), __jsx("li", null, __jsx(_components_features_custom_link__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z, {
    href: "#",
    className: "active"
  }, "Products")), __jsx("li", null, "Detail")), __jsx(_components_partials_product_product_nav__WEBPACK_IMPORTED_MODULE_7__/* .default */ .Z, {
    product: product
  })) : '', __jsx("h2", {
    className: "product-name"
  }, product.data.name), __jsx("div", {
    className: "product-meta"
  }, "SKU: ", __jsx("span", {
    className: "product-sku"
  }, product.data.sku), "CATEGORIES: ", __jsx("span", {
    className: "product-brand"
  }, product.data.categories.map((item, index) => __jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), {
    key: item.name + '-' + index
  }, __jsx(_components_features_custom_link__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z, {
    href: {
      pathname: '/shop',
      query: {
        category: item.slug
      }
    }
  }, item.name), index < product.data.categories.length - 1 ? ', ' : '')))), __jsx("div", {
    className: "product-price mb-2"
  }, product.data.price[0] !== product.data.price[1] ? product.data.variants.length === 0 || product.data.variants.length > 0 && !product.data.variants[0].price ? __jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, __jsx("ins", {
    className: "new-price"
  }, "$", (0,_utils__WEBPACK_IMPORTED_MODULE_10__/* .toDecimal */ .YM)(product.data.price[0])), __jsx("del", {
    className: "old-price"
  }, "$", (0,_utils__WEBPACK_IMPORTED_MODULE_10__/* .toDecimal */ .YM)(product.data.price[1]))) : __jsx("del", {
    className: "new-price"
  }, "$", (0,_utils__WEBPACK_IMPORTED_MODULE_10__/* .toDecimal */ .YM)(product.data.price[0]), " \u2013 $", (0,_utils__WEBPACK_IMPORTED_MODULE_10__/* .toDecimal */ .YM)(product.data.price[1])) : __jsx("ins", {
    className: "new-price"
  }, "$", (0,_utils__WEBPACK_IMPORTED_MODULE_10__/* .toDecimal */ .YM)(product.data.price[0]))), product.data.price[0] !== product.data.price[1] && product.data.variants.length === 0 ? __jsx(_components_features_countdown__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z, {
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
  }, (0,_utils__WEBPACK_IMPORTED_MODULE_10__/* .toDecimal */ .YM)(product.data.ratings))), __jsx(_components_features_custom_link__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z, {
    href: "#",
    className: "rating-reviews"
  }, "( ", product.data.reviews, " reviews )")), __jsx("p", {
    className: "product-short-desc"
  }, product.data.short_description), product && product.data.variants.length > 0 ? __jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, product.data.variants[0].color ? __jsx("div", {
    className: "product-form product-variations product-color"
  }, __jsx("label", null, "Color:"), __jsx("div", {
    className: "select-box"
  }, __jsx("select", {
    name: "color",
    className: "form-control select-color",
    onChange: setColorHandler,
    value: curColor
  }, __jsx("option", {
    value: "null"
  }, "Choose an option"), colors.map(item => !isDisabled(item.name, curSize) ? __jsx("option", {
    value: item.name,
    key: "color-" + item.name
  }, item.name) : '')))) : "", product.data.variants[0].size ? __jsx("div", {
    className: "product-form product-variations product-size mb-0 pb-2"
  }, __jsx("label", null, "Size:"), __jsx("div", {
    className: "product-form-group"
  }, __jsx("div", {
    className: "select-box"
  }, __jsx("select", {
    name: "size",
    className: "form-control select-size",
    onChange: setSizeHandler,
    value: curSize
  }, __jsx("option", {
    value: "null"
  }, "Choose an option"), sizes.map(item => !isDisabled(curColor, item.name) ? __jsx("option", {
    value: item.name,
    key: "size-" + item.name
  }, item.name) : ''))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Collapse, {
    in: 'null' !== curColor || 'null' !== curSize
  }, __jsx("div", {
    className: "card-wrapper overflow-hidden reset-value-button w-100 mb-0"
  }, __jsx(_components_features_custom_link__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z, {
    href: "#",
    className: "product-variation-clean",
    onClick: resetValueHandler
  }, "Clean All"))))) : "", __jsx("div", {
    className: "product-variation-price"
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Collapse, {
    in: cartActive && curIndex > -1
  }, __jsx("div", {
    className: "card-wrapper"
  }, curIndex > -1 ? __jsx("div", {
    className: "single-product-price"
  }, product.data.variants[curIndex].price ? product.data.variants[curIndex].sale_price ? __jsx("div", {
    className: "product-price mb-0"
  }, __jsx("ins", {
    className: "new-price"
  }, "$", (0,_utils__WEBPACK_IMPORTED_MODULE_10__/* .toDecimal */ .YM)(product.data.variants[curIndex].sale_price)), __jsx("del", {
    className: "old-price"
  }, "$", (0,_utils__WEBPACK_IMPORTED_MODULE_10__/* .toDecimal */ .YM)(product.data.variants[curIndex].price))) : __jsx("div", {
    className: "product-price mb-0"
  }, __jsx("ins", {
    className: "new-price"
  }, "$", (0,_utils__WEBPACK_IMPORTED_MODULE_10__/* .toDecimal */ .YM)(product.data.variants[curIndex].price))) : "") : '')))) : '', __jsx("hr", {
    className: "product-divider"
  }), isStickyCart ? __jsx("div", {
    className: "sticky-content fix-top product-sticky-content"
  }, __jsx("div", {
    className: "container"
  }, __jsx("div", {
    className: "sticky-product-details"
  }, __jsx("figure", {
    className: "product-image"
  }, __jsx(_components_features_custom_link__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z, {
    href: '/product/default/' + product.data.slug
  }, __jsx("img", {
    src: "https://d-themes.com/react_asset_api/riode" + product.data.pictures[0].url,
    width: "90",
    height: "90",
    alt: "Product"
  }))), __jsx("div", null, __jsx("h4", {
    className: "product-title"
  }, __jsx(_components_features_custom_link__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z, {
    href: '/product/default/' + product.data.slug
  }, product.data.name)), __jsx("div", {
    className: "product-info"
  }, __jsx("div", {
    className: "product-price mb-0"
  }, curIndex > -1 && product.data.variants[0] ? product.data.variants[curIndex].price ? product.data.variants[curIndex].sale_price ? __jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, __jsx("ins", {
    className: "new-price"
  }, "$", (0,_utils__WEBPACK_IMPORTED_MODULE_10__/* .toDecimal */ .YM)(product.data.variants[curIndex].sale_price)), __jsx("del", {
    className: "old-price"
  }, "$", (0,_utils__WEBPACK_IMPORTED_MODULE_10__/* .toDecimal */ .YM)(product.data.variants[curIndex].price))) : __jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, __jsx("ins", {
    className: "new-price"
  }, "$", (0,_utils__WEBPACK_IMPORTED_MODULE_10__/* .toDecimal */ .YM)(product.data.variants[curIndex].price))) : "" : product.data.price[0] !== product.data.price[1] ? product.data.variants.length === 0 ? __jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, __jsx("ins", {
    className: "new-price"
  }, "$", (0,_utils__WEBPACK_IMPORTED_MODULE_10__/* .toDecimal */ .YM)(product.data.price[0])), __jsx("del", {
    className: "old-price"
  }, "$", (0,_utils__WEBPACK_IMPORTED_MODULE_10__/* .toDecimal */ .YM)(product.data.price[1]))) : __jsx("del", {
    className: "new-price"
  }, "$", (0,_utils__WEBPACK_IMPORTED_MODULE_10__/* .toDecimal */ .YM)(product.data.price[0]), " \u2013 $", (0,_utils__WEBPACK_IMPORTED_MODULE_10__/* .toDecimal */ .YM)(product.data.price[1])) : __jsx("ins", {
    className: "new-price"
  }, "$", (0,_utils__WEBPACK_IMPORTED_MODULE_10__/* .toDecimal */ .YM)(product.data.price[0]))), __jsx("div", {
    className: "ratings-container mb-0"
  }, __jsx("div", {
    className: "ratings-full"
  }, __jsx("span", {
    className: "ratings",
    style: {
      width: 20 * product.data.ratings + '%'
    }
  }), __jsx("span", {
    className: "tooltiptext tooltip-top"
  }, (0,_utils__WEBPACK_IMPORTED_MODULE_10__/* .toDecimal */ .YM)(product.data.ratings))), __jsx(_components_features_custom_link__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z, {
    href: "#",
    className: "rating-reviews"
  }, "( ", product.data.reviews, " reviews )"))))), __jsx("div", {
    className: "product-form product-qty pb-0"
  }, __jsx("label", {
    className: "d-none"
  }, "QTY:"), __jsx("div", {
    className: "product-form-group"
  }, __jsx(_components_features_quantity__WEBPACK_IMPORTED_MODULE_6__/* .default */ .Z, {
    max: product.data.stock,
    product: product,
    onChangeQty: changeQty
  }), __jsx("button", {
    className: `btn-product btn-cart text-normal ls-normal font-weight-semi-bold ${cartActive ? '' : 'disabled'}`,
    onClick: addToCartHandler
  }, __jsx("i", {
    className: "d-icon-bag"
  }), "Add to Cart"))))) : __jsx("div", {
    className: "product-form product-qty pb-0"
  }, __jsx("label", {
    className: "d-none"
  }, "QTY:"), __jsx("div", {
    className: "product-form-group"
  }, __jsx(_components_features_quantity__WEBPACK_IMPORTED_MODULE_6__/* .default */ .Z, {
    max: product.data.stock,
    product: product,
    onChangeQty: changeQty
  }), __jsx("button", {
    className: `btn-product btn-cart text-normal ls-normal font-weight-semi-bold ${cartActive ? '' : 'disabled'}`,
    onClick: addToCartHandler
  }, __jsx("i", {
    className: "d-icon-bag"
  }), "Add to Cart"))), __jsx("hr", {
    className: "product-divider mb-3"
  }), __jsx("div", {
    className: "product-footer"
  }, __jsx("div", {
    className: "social-links mr-4"
  }, __jsx(_components_features_custom_link__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z, {
    href: "#",
    className: "social-link social-facebook fab fa-facebook-f"
  }), __jsx(_components_features_custom_link__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z, {
    href: "#",
    className: "social-link social-twitter fab fa-twitter"
  }), __jsx(_components_features_custom_link__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z, {
    href: "#",
    className: "social-link social-pinterest fab fa-pinterest-p"
  })), " ", __jsx("span", {
    className: "divider d-lg-show"
  }), " ", __jsx("a", {
    href: "#",
    className: `btn-product btn-wishlist`,
    title: isWishlisted ? 'Browse wishlist' : 'Add to wishlist',
    onClick: wishlistHandler
  }, __jsx("i", {
    className: isWishlisted ? "d-icon-heart-full" : "d-icon-heart"
  }), " ", isWishlisted ? 'Browse wishlist' : 'Add to Wishlist')));
}

function mapStateToProps(state) {
  return {
    wishlist: state.wishlist.data ? state.wishlist.data : []
  };
}

/* harmony default export */ __webpack_exports__["Z"] = ((0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(mapStateToProps, {
  toggleWishlist: _store_wishlist__WEBPACK_IMPORTED_MODULE_8__/* .wishlistActions.toggleWishlist */ .w.toggleWishlist,
  addToCart: _store_cart__WEBPACK_IMPORTED_MODULE_9__/* .cartActions.addToCart */ .Uw.addToCart
})(DetailOne));

/***/ })

};
;