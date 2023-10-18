exports.id = 4302;
exports.ids = [4302];
exports.modules = {

/***/ 4302:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ detail_five; }
});

// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(79);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(6731);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: external "react-bootstrap"
var external_react_bootstrap_ = __webpack_require__(9226);
// EXTERNAL MODULE: ./components/features/custom-link.jsx
var custom_link = __webpack_require__(8765);
// EXTERNAL MODULE: ./components/features/countdown.jsx
var countdown = __webpack_require__(7845);
// EXTERNAL MODULE: ./components/features/quantity.jsx
var features_quantity = __webpack_require__(1473);
// EXTERNAL MODULE: ./components/partials/product/product-nav.jsx
var product_nav = __webpack_require__(7684);
// EXTERNAL MODULE: external "react-tabs"
var external_react_tabs_ = __webpack_require__(7659);
// EXTERNAL MODULE: ./utils/index.js
var utils = __webpack_require__(6442);
;// CONCATENATED MODULE: ./components/partials/product/desc/desc-three.jsx
var __jsx = (external_react_default()).createElement;




function DescThree(props) {
  const {
    product,
    isGuide = false
  } = props;
  let colors = [],
      sizes = [];

  if (product.variants.length > 0) {
    if (product.variants[0].size) product.variants.forEach(item => {
      if (sizes.findIndex(size => size.name === item.size.name) === -1) {
        sizes.push({
          name: item.size.name,
          value: item.size.size
        });
      }
    });

    if (product.variants[0].color) {
      product.variants.forEach(item => {
        if (colors.findIndex(color => color.name === item.color.name) === -1) colors.push({
          name: item.color.name,
          value: item.color.color
        });
      });
    }
  }

  const setRating = e => {
    e.preventDefault();

    if (e.currentTarget.parentNode.querySelector('.active')) {
      e.currentTarget.parentNode.querySelector('.active').classList.remove('active');
    }

    e.currentTarget.classList.add('active');
  };

  return __jsx(external_react_tabs_.Tabs, {
    className: "tab tab-nav-simple product-tabs mb-4",
    selectedTabClassName: "show",
    selectedTabPanelClassName: "active",
    defaultIndex: 0
  }, __jsx(external_react_tabs_.TabList, {
    className: "nav nav-tabs justify-content-center",
    role: "tablist"
  }, __jsx(external_react_tabs_.Tab, {
    className: "nav-item"
  }, __jsx("span", {
    className: "nav-link"
  }, "Description")), __jsx(external_react_tabs_.Tab, {
    className: "nav-item"
  }, __jsx("span", {
    className: "nav-link"
  }, "Additional information")), isGuide ? __jsx(external_react_tabs_.Tab, {
    className: "nav-item"
  }, __jsx("span", {
    className: "nav-link"
  }, "Size Guide")) : '', __jsx(external_react_tabs_.Tab, {
    className: "nav-item"
  }, __jsx("span", {
    className: "nav-link"
  }, "Reviews (", product.reviews, ")"))), __jsx("div", {
    className: "tab-content"
  }, __jsx(external_react_tabs_.TabPanel, {
    className: "tab-pane product-tab-description"
  }, __jsx("div", {
    className: "row"
  }, __jsx("div", {
    className: "col-12 mb-8"
  }, __jsx("p", {
    className: "mb-6"
  }, "Praesent id enim sit amet.Tdio vulputate eleifend in in tortor. ellus massa. siti iMassa ristique sit amet condim vel, facilisis quimequistiqutiqu amet condim Dilisis Facilisis quis sapien. Praesent id enim sit amet."), __jsx("ul", {
    className: "mb-6"
  }, __jsx("li", null, "Praesent id enim sit amet.Tdio vulputate"), __jsx("li", null, "Eleifend in in tortor. ellus massa.Dristique sitii"), __jsx("li", null, "Massa ristique sit amet condim vel"), __jsx("li", null, "Dilisis Facilisis quis sapien. Praesent id enim sit amet")), __jsx("p", {
    className: "mb-0"
  }, "Praesent id enim sit amet odio vulputate eleifend in in tortor. Sellus massa, tristique sitiismonec tellus massa, tristique sit amet condim vel, facilisis quimequistiqutiqu amet condim vel, facilisis Facilisis quis sapien. Praesent id enim sit amet odio vulputate odio vulputate eleifend in in tortor. Sellus massa, tristique sitiismonec tellus massa, tristique sit ametcdimel,facilisis quimequistiqutiqu amet condim vel, facilisis Facilisis sit amet odio vulputate")))), __jsx(external_react_tabs_.TabPanel, {
    className: "tab-pane product-tab-additional"
  }, __jsx("ul", {
    className: "list-none"
  }, product.categories.length > 0 ? __jsx("li", null, __jsx("label", null, "Categories:"), __jsx("p", null, product.categories.map((item, index) => __jsx((external_react_default()).Fragment, {
    key: item.name + '-' + index
  }, item.name, index < product.categories.length - 1 ? ', ' : "")))) : "", product && product.brands.length > 0 ? __jsx("li", null, __jsx("label", null, "Brands:"), __jsx("p", null, product.brands.map((item, index) => __jsx((external_react_default()).Fragment, {
    key: item.name + '-' + index
  }, item.name, index < product.brands.length - 1 ? ', ' : "")))) : "", colors.length > 0 ? __jsx("li", null, __jsx("label", null, "Color:"), __jsx("p", null, colors.map((item, index) => __jsx((external_react_default()).Fragment, {
    key: item.name + '-' + index
  }, item.name, index < colors.length - 1 ? ', ' : "")))) : "", sizes.length > 0 ? __jsx("li", null, __jsx("label", null, "Size:"), __jsx("p", null, sizes.map((item, index) => __jsx((external_react_default()).Fragment, {
    key: item.name + '-' + index
  }, item.name, index < sizes.length - 1 ? ', ' : "")))) : "")), isGuide ? __jsx(external_react_tabs_.TabPanel, {
    className: "tab-pane product-tab-size-guide"
  }, __jsx("figure", {
    className: "size-image mt-4 mb-4"
  }, __jsx("img", {
    src: "./images/size_guide.png",
    alt: "Size Guide Image",
    width: "217",
    height: "398"
  })), __jsx("figure", {
    className: "size-table mt-4 mb-4"
  }, __jsx("table", null, __jsx("thead", null, __jsx("tr", null, __jsx("th", null, "SIZE"), __jsx("th", null, "CHEST(IN.)"), __jsx("th", null, "WEIST(IN.)"), __jsx("th", null, "HIPS(IN.)"))), __jsx("tbody", null, __jsx("tr", null, __jsx("th", null, "XS"), __jsx("td", null, "34-36"), __jsx("td", null, "27-29"), __jsx("td", null, "34.5-36.5")), __jsx("tr", null, __jsx("th", null, "S"), __jsx("td", null, "36-38"), __jsx("td", null, "29-31"), __jsx("td", null, "36.5-38.5")), __jsx("tr", null, __jsx("th", null, "M"), __jsx("td", null, "38-40"), __jsx("td", null, "31-33"), __jsx("td", null, "38.5-40.5")), __jsx("tr", null, __jsx("th", null, "L"), __jsx("td", null, "40-42"), __jsx("td", null, "33-36"), __jsx("td", null, "40.5-43.5")), __jsx("tr", null, __jsx("th", null, "XL"), __jsx("td", null, "42-45"), __jsx("td", null, "36-40"), __jsx("td", null, "43.5-47.5")), __jsx("tr", null, __jsx("th", null, "XXL"), __jsx("td", null, "45-48"), __jsx("td", null, "40-44"), __jsx("td", null, "47.5-51.5")))))) : '', __jsx(external_react_tabs_.TabPanel, {
    className: "tab-pane product-tab-reviews"
  }, product.reviews === 0 ? __jsx("div", {
    className: "comments mb-2 pt-2 pb-2 border-no"
  }, "There are no reviews yet.") : __jsx("div", {
    className: "comments mb-8 pt-2 pb-2 border-no"
  }, __jsx("ul", null, __jsx("li", null, __jsx("div", {
    className: "comment"
  }, __jsx("figure", {
    className: "comment-media"
  }, __jsx(custom_link/* default */.Z, {
    href: "#"
  }, __jsx("img", {
    src: "./images/blog/comments/1.jpg",
    alt: "avatar",
    width: "100",
    height: "100"
  }))), __jsx("div", {
    className: "comment-body"
  }, __jsx("div", {
    className: "comment-rating ratings-container mb-0"
  }, __jsx("div", {
    className: "ratings-full"
  }, __jsx("span", {
    className: "ratings",
    style: {
      width: product.ratings * 20 + '%'
    }
  }), __jsx("span", {
    className: "tooltiptext tooltip-top"
  }, (0,utils/* toDecimal */.YM)(product.ratings)))), __jsx("div", {
    className: "comment-user"
  }, __jsx("span", {
    className: "comment-date text-body"
  }, "September 22, 2020 at 9:42 pm"), __jsx("h4", null, __jsx(custom_link/* default */.Z, {
    href: "#"
  }, "John Doe"))), __jsx("div", {
    className: "comment-content"
  }, __jsx("p", null, "Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue."))))), product.reviews > 1 ? __jsx("li", null, __jsx("div", {
    className: "comment"
  }, __jsx("figure", {
    className: "comment-media"
  }, __jsx(custom_link/* default */.Z, {
    href: "#"
  }, __jsx("img", {
    src: "./images/blog/comments/2.jpg",
    alt: "avatar",
    width: "100",
    height: "100"
  }))), __jsx("div", {
    className: "comment-body"
  }, __jsx("div", {
    className: "comment-rating ratings-container mb-0"
  }, __jsx("div", {
    className: "ratings-full"
  }, __jsx("span", {
    className: "ratings",
    style: {
      width: product.ratings * 20 + '%'
    }
  }), __jsx("span", {
    className: "tooltiptext tooltip-top"
  }, (0,utils/* toDecimal */.YM)(product.ratings)))), __jsx("div", {
    className: "comment-user"
  }, __jsx("span", {
    className: "comment-date text-body"
  }, "September 22, 2020 at 9:42 pm"), __jsx("h4", null, __jsx(custom_link/* default */.Z, {
    href: "#"
  }, "John Doe"))), __jsx("div", {
    className: "comment-content"
  }, __jsx("p", null, "Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue. Morbi purus libero, faucibus adipiscing, commodo quis, avida id, est. Sed lectus. Praesent elementum hendrerit tortor. Sed semper lorem at felis. Vestibulum volutpat."))))) : "")), __jsx("div", {
    className: "reply"
  }, __jsx("div", {
    className: "title-wrapper text-left"
  }, __jsx("h3", {
    className: "title title-simple text-left text-normal"
  }, product.reviews > 0 ? "Add a Review" : "Be The First To Review “" + product.name + "”"), __jsx("p", null, "Your email address will not be published. Required fields are marked *")), __jsx("div", {
    className: "rating-form"
  }, __jsx("label", {
    htmlFor: "rating",
    className: "text-dark"
  }, "Your rating * "), __jsx("span", {
    className: "rating-stars selected"
  }, [1, 2, 3, 4, 5].map((num, index) => __jsx("a", {
    className: `star-${num}`,
    href: "#",
    onClick: setRating,
    key: 'star-' + index
  }, num))), __jsx("select", {
    name: "rating",
    id: "rating",
    required: "",
    style: {
      display: 'none'
    }
  }, __jsx("option", {
    value: ""
  }, "Rate\u2026"), __jsx("option", {
    value: "5"
  }, "Perfect"), __jsx("option", {
    value: "4"
  }, "Good"), __jsx("option", {
    value: "3"
  }, "Average"), __jsx("option", {
    value: "2"
  }, "Not that bad"), __jsx("option", {
    value: "1"
  }, "Very poor"))), __jsx("form", {
    action: "#"
  }, __jsx("textarea", {
    id: "reply-message",
    cols: "30",
    rows: "6",
    className: "form-control mb-4",
    placeholder: "Comment *",
    required: true
  }), __jsx("div", {
    className: "row"
  }, __jsx("div", {
    className: "col-md-6 mb-5"
  }, __jsx("input", {
    type: "text",
    className: "form-control",
    id: "reply-name",
    name: "reply-name",
    placeholder: "Name *",
    required: true
  })), __jsx("div", {
    className: "col-md-6 mb-5"
  }, __jsx("input", {
    type: "email",
    className: "form-control",
    id: "reply-email",
    name: "reply-email",
    placeholder: "Email *",
    required: true
  }))), __jsx("div", {
    className: "form-checkbox mb-4"
  }, __jsx("input", {
    type: "checkbox",
    className: "custom-checkbox",
    id: "signin-remember",
    name: "signin-remember"
  }), __jsx("label", {
    className: "form-control-label",
    htmlFor: "signin-remember"
  }, "Save my name, email, and website in this browser for the next time I comment.")), __jsx("button", {
    type: "submit",
    className: "btn btn-primary btn-rounded"
  }, "Submit", __jsx("i", {
    className: "d-icon-arrow-right"
  })))))));
}
// EXTERNAL MODULE: ./store/wishlist.js
var wishlist = __webpack_require__(5708);
// EXTERNAL MODULE: ./store/cart.js + 1 modules
var cart = __webpack_require__(6090);
;// CONCATENATED MODULE: ./components/partials/product/detail/detail-five.jsx
var detail_five_jsx = (external_react_default()).createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }














function DetailOne(props) {
  let router = (0,router_.useRouter)();
  const {
    data,
    isSticky = false,
    isDesc = false,
    isProductNav = true,
    isGuide = false
  } = props;
  const {
    toggleWishlist,
    addToCart,
    wishlist
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

  const toggleColorHandler = color => {
    if (!isDisabled(color.name, curSize)) {
      if (curColor === color.name) {
        setCurColor('null');
      } else {
        setCurColor(color.name);
      }
    }
  };

  const toggleSizeHandler = size => {
    if (!isDisabled(curColor, size.name)) {
      if (curSize === size.name) {
        setCurSize('null');
      } else {
        setCurSize(size.name);
      }
    }
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

  return detail_five_jsx("div", {
    className: `product-details ${isSticky ? 'sticky' : ''}`
  }, isProductNav ? detail_five_jsx("div", {
    className: "product-navigation"
  }, detail_five_jsx("ul", {
    className: "breadcrumb breadcrumb-lg"
  }, detail_five_jsx("li", null, detail_five_jsx(custom_link/* default */.Z, {
    href: "/"
  }, detail_five_jsx("i", {
    className: "d-icon-home"
  }))), detail_five_jsx("li", null, detail_five_jsx(custom_link/* default */.Z, {
    href: "#",
    className: "active"
  }, "Products")), detail_five_jsx("li", null, "Detail")), detail_five_jsx(product_nav/* default */.Z, {
    product: product
  })) : '', detail_five_jsx("h2", {
    className: "product-name"
  }, product.data.name), detail_five_jsx("div", {
    className: "product-meta"
  }, "SKU: ", detail_five_jsx("span", {
    className: "product-sku"
  }, product.data.sku), "CATEGORIES: ", detail_five_jsx("span", {
    className: "product-brand"
  }, product.data.categories.map((item, index) => detail_five_jsx((external_react_default()).Fragment, {
    key: item.name + '-' + index
  }, detail_five_jsx(custom_link/* default */.Z, {
    href: {
      pathname: '/shop',
      query: {
        category: item.slug
      }
    }
  }, item.name), index < product.data.categories.length - 1 ? ', ' : '')))), detail_five_jsx("div", {
    className: "product-price"
  }, product.data.price[0] !== product.data.price[1] ? product.data.variants.length === 0 || product.data.variants.length > 0 && !product.data.variants[0].price ? detail_five_jsx((external_react_default()).Fragment, null, detail_five_jsx("ins", {
    className: "new-price"
  }, "$", (0,utils/* toDecimal */.YM)(product.data.price[0])), detail_five_jsx("del", {
    className: "old-price"
  }, "$", (0,utils/* toDecimal */.YM)(product.data.price[1]))) : detail_five_jsx("del", {
    className: "new-price"
  }, "$", (0,utils/* toDecimal */.YM)(product.data.price[0]), " \u2013 $", (0,utils/* toDecimal */.YM)(product.data.price[1])) : detail_five_jsx("ins", {
    className: "new-price"
  }, "$", (0,utils/* toDecimal */.YM)(product.data.price[0]))), product.data.price[0] !== product.data.price[1] && product.data.variants.length === 0 ? detail_five_jsx(countdown/* default */.Z, {
    type: 2
  }) : '', detail_five_jsx("div", {
    className: "ratings-container"
  }, detail_five_jsx("div", {
    className: "ratings-full"
  }, detail_five_jsx("span", {
    className: "ratings",
    style: {
      width: 20 * product.data.ratings + '%'
    }
  }), detail_five_jsx("span", {
    className: "tooltiptext tooltip-top"
  }, (0,utils/* toDecimal */.YM)(product.data.ratings))), detail_five_jsx(custom_link/* default */.Z, {
    href: "#",
    className: "rating-reviews"
  }, "( ", product.data.reviews, " reviews )")), detail_five_jsx("p", {
    className: "product-short-desc"
  }, product.data.short_description), product && product.data.variants.length > 0 ? detail_five_jsx((external_react_default()).Fragment, null, product.data.variants[0].color ? detail_five_jsx("div", {
    className: "product-form product-color"
  }, detail_five_jsx("label", null, "Color:"), detail_five_jsx("div", {
    className: "product-variations"
  }, colors.map(item => detail_five_jsx(custom_link/* default */.Z, {
    href: "#",
    className: `color ${curColor === item.name ? 'active' : ''} ${isDisabled(item.name, curSize) ? 'disabled' : ''}`,
    key: "color-" + item.name,
    style: {
      backgroundColor: `${item.value}`
    },
    onClick: e => toggleColorHandler(item)
  })))) : '', product.data.variants[0].size ? detail_five_jsx("div", {
    className: "product-form product-size"
  }, detail_five_jsx("label", null, "Size:"), detail_five_jsx("div", {
    className: "product-form-group"
  }, detail_five_jsx("div", {
    className: "product-variations"
  }, sizes.map(item => detail_five_jsx(custom_link/* default */.Z, {
    href: "#",
    className: `size ${curSize === item.name ? 'active' : ''} ${isDisabled(curColor, item.name) ? 'disabled' : ''}`,
    key: "size-" + item.name,
    onClick: e => toggleSizeHandler(item)
  }, item.value))), detail_five_jsx(external_react_bootstrap_.Collapse, {
    in: 'null' !== curColor || 'null' !== curSize
  }, detail_five_jsx("div", {
    className: "card-wrapper overflow-hidden reset-value-button w-100 mb-0"
  }, detail_five_jsx(custom_link/* default */.Z, {
    href: "#",
    className: "product-variation-clean",
    onClick: resetValueHandler
  }, "Clean All"))))) : '', detail_five_jsx("div", {
    className: "product-variation-price"
  }, detail_five_jsx(external_react_bootstrap_.Collapse, {
    in: cartActive && curIndex > -1
  }, detail_five_jsx("div", {
    className: "card-wrapper"
  }, curIndex > -1 ? detail_five_jsx("div", {
    className: "single-product-price"
  }, product.data.variants[curIndex].price ? product.data.variants[curIndex].sale_price ? detail_five_jsx("div", {
    className: "product-price mb-0"
  }, detail_five_jsx("ins", {
    className: "new-price"
  }, "$", (0,utils/* toDecimal */.YM)(product.data.variants[curIndex].sale_price)), detail_five_jsx("del", {
    className: "old-price"
  }, "$", (0,utils/* toDecimal */.YM)(product.data.variants[curIndex].price))) : detail_five_jsx("div", {
    className: "product-price mb-0"
  }, detail_five_jsx("ins", {
    className: "new-price"
  }, "$", (0,utils/* toDecimal */.YM)(product.data.variants[curIndex].price))) : "") : '')))) : '', detail_five_jsx("hr", {
    className: "product-divider"
  }), detail_five_jsx("div", {
    className: "product-form product-qty"
  }, detail_five_jsx("label", {
    className: "d-none"
  }, "QTY:"), detail_five_jsx("div", {
    className: "product-form-group"
  }, detail_five_jsx(features_quantity/* default */.Z, {
    max: product.data.stock,
    product: product,
    onchangeQty: changeQty
  }), detail_five_jsx("button", {
    className: `btn-product btn-cart text-normal ls-normal font-weight-semi-bold ${cartActive ? '' : 'disabled'}`,
    onClick: addToCartHandler,
    onClick: addToCartHandler
  }, detail_five_jsx("i", {
    className: "d-icon-bag"
  }), "Add to Cart"))), detail_five_jsx("hr", {
    className: "product-divider mb-3"
  }), detail_five_jsx("div", {
    className: "product-footer"
  }, detail_five_jsx("div", {
    className: "social-links mr-4"
  }, detail_five_jsx(custom_link/* default */.Z, {
    href: "#",
    className: "social-link social-facebook fab fa-facebook-f"
  }), detail_five_jsx(custom_link/* default */.Z, {
    href: "#",
    className: "social-link social-twitter fab fa-twitter"
  }), detail_five_jsx(custom_link/* default */.Z, {
    href: "#",
    className: "social-link social-pinterest fab fa-pinterest-p"
  })), " ", detail_five_jsx("span", {
    className: "divider d-lg-show"
  }), " ", detail_five_jsx("a", {
    href: "#",
    className: `btn-product btn-wishlist`,
    title: isWishlisted ? 'Browse wishlist' : 'Add to wishlist',
    onClick: wishlistHandler
  }, detail_five_jsx("i", {
    className: isWishlisted ? "d-icon-heart-full" : "d-icon-heart"
  }), " ", isWishlisted ? 'Browse wishlist' : 'Add to Wishlist')), isDesc ? detail_five_jsx(DescThree, {
    product: product.data,
    isGuide: isGuide
  }) : '');
}

function mapStateToProps(state) {
  return {
    wishlist: state.wishlist.data ? state.wishlist.data : []
  };
}

/* harmony default export */ var detail_five = ((0,external_react_redux_.connect)(mapStateToProps, {
  toggleWishlist: wishlist/* wishlistActions.toggleWishlist */.w.toggleWishlist,
  addToCart: cart/* cartActions.addToCart */.Uw.addToCart
})(DetailOne));

/***/ })

};
;