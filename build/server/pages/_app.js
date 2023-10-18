(function() {
var exports = {};
exports.id = 2888;
exports.ids = [2888,3866];
exports.modules = {

/***/ 1439:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ _app; }
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(79);
;// CONCATENATED MODULE: external "redux-persist/integration/react"
var react_namespaceObject = require("redux-persist/integration/react");;
// EXTERNAL MODULE: external "react-helmet"
var external_react_helmet_ = __webpack_require__(6481);
var external_react_helmet_default = /*#__PURE__*/__webpack_require__.n(external_react_helmet_);
;// CONCATENATED MODULE: external "redux"
var external_redux_namespaceObject = require("redux");;
;// CONCATENATED MODULE: external "next-redux-wrapper"
var external_next_redux_wrapper_namespaceObject = require("next-redux-wrapper");;
;// CONCATENATED MODULE: external "redux-saga"
var external_redux_saga_namespaceObject = require("redux-saga");;
var external_redux_saga_default = /*#__PURE__*/__webpack_require__.n(external_redux_saga_namespaceObject);
// EXTERNAL MODULE: external "redux-persist"
var external_redux_persist_ = __webpack_require__(3643);
// EXTERNAL MODULE: external "redux-saga/effects"
var effects_ = __webpack_require__(5060);
// EXTERNAL MODULE: ./store/cart.js + 1 modules
var cart = __webpack_require__(6090);
;// CONCATENATED MODULE: ./store/root-saga.js


function* rootSaga() {
  yield (0,effects_.all)([(0,cart/* cartSaga */.xT)()]);
}
// EXTERNAL MODULE: ./store/modal.js
var modal = __webpack_require__(6723);
// EXTERNAL MODULE: ./store/wishlist.js
var wishlist = __webpack_require__(5708);
// EXTERNAL MODULE: external "redux-persist/lib/storage"
var storage_ = __webpack_require__(584);
var storage_default = /*#__PURE__*/__webpack_require__.n(storage_);
;// CONCATENATED MODULE: ./store/demo.js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const actionTypes = {
  RefreshStore: "REFRESH_STORE"
};
let initialState = {
  current: 1
};

const demoReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.RefreshStore:
      return _objectSpread(_objectSpread({}, state), {}, {
        current: action.payload.current
      });

    default:
      return state;
  }
};

const demoActions = {
  refreshStore: current => ({
    type: actionTypes.RefreshStore,
    payload: {
      current
    }
  })
};
const persistConfig = {
  keyPrefix: "riode-",
  key: "demo",
  storage: (storage_default())
};
/* harmony default export */ var demo = ((0,external_redux_persist_.persistReducer)(persistConfig, demoReducer));
;// CONCATENATED MODULE: ./store/index.js









const sagaMiddleware = external_redux_saga_default()();
const rootReducers = (0,external_redux_namespaceObject.combineReducers)({
  cart: cart/* default */.ZP,
  modal: modal/* default */.Z,
  wishlist: wishlist/* default */.Z,
  demo: demo
});
const makeStore = context => {
  const store = (0,external_redux_namespaceObject.createStore)(rootReducers, (0,external_redux_namespaceObject.applyMiddleware)(sagaMiddleware));
  store.sagaTask = sagaMiddleware.run(rootSaga);
  store.__persistor = (0,external_redux_persist_.persistStore)(store);
  return store;
};
const wrapper = (0,external_next_redux_wrapper_namespaceObject.createWrapper)(makeStore);
// EXTERNAL MODULE: external "react-toastify"
var external_react_toastify_ = __webpack_require__(2034);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(6731);
// EXTERNAL MODULE: ./node_modules/react-toastify/dist/ReactToastify.min.css
var ReactToastify_min = __webpack_require__(3326);
// EXTERNAL MODULE: ./components/features/custom-link.jsx
var custom_link = __webpack_require__(8765);
// EXTERNAL MODULE: ./utils/index.js
var utils = __webpack_require__(6442);
;// CONCATENATED MODULE: ./components/common/partials/cart-menu.jsx

var __jsx = (external_react_default()).createElement;





function CartMenu(props) {
  const {
    cartList,
    removeFromCart
  } = props;

  const removeCart = item => {
    removeFromCart(item);
  };

  return __jsx("div", {
    className: "dropdown cart-dropdown type2"
  }, __jsx(custom_link/* default */.Z, {
    href: "#",
    className: "cart-toggle link"
  }, __jsx("i", {
    className: "d-icon-bag"
  }, __jsx("span", {
    className: "cart-count"
  }, (0,utils/* getCartCount */.c0)(cartList)))), __jsx("div", {
    className: "dropdown-box"
  }, cartList.length > 0 ? __jsx((external_react_default()).Fragment, null, __jsx("div", {
    className: "products scrollable"
  }, cartList.map((item, index) => __jsx("div", {
    className: "product product-cart",
    key: 'cart-menu-product-' + index
  }, __jsx("figure", {
    className: "product-media pure-media"
  }, __jsx(custom_link/* default */.Z, {
    href: '/product/default/' + item.slug
  }, __jsx("img", {
    src: "https://d-themes.com/react_asset_api/riode" + item.pictures[0].url,
    alt: "product",
    width: "80",
    height: "88"
  })), __jsx("button", {
    className: "btn btn-link btn-close",
    onClick: () => {
      removeCart(item);
    }
  }, __jsx("i", {
    className: "fas fa-times"
  }), __jsx("span", {
    className: "sr-only"
  }, "Close"))), __jsx("div", {
    className: "product-detail"
  }, __jsx(custom_link/* default */.Z, {
    href: '/product/default/' + item.slug,
    className: "product-name"
  }, item.name), __jsx("div", {
    className: "price-box"
  }, __jsx("span", {
    className: "product-quantity"
  }, item.qty), __jsx("span", {
    className: "product-price"
  }, "$", (0,utils/* toDecimal */.YM)(item.price))))))), __jsx("div", {
    className: "cart-total"
  }, __jsx("label", null, "Subtotal:"), __jsx("span", {
    className: "price"
  }, "$", (0,utils/* toDecimal */.YM)((0,utils/* getTotalPrice */.m_)(cartList)))), __jsx("div", {
    className: "cart-action"
  }, __jsx(custom_link/* default */.Z, {
    href: "/pages/cart",
    className: "btn btn-dark btn-link"
  }, "View Cart"), __jsx(custom_link/* default */.Z, {
    href: "/pages/checkout",
    className: "btn btn-dark"
  }, __jsx("span", null, "Go To Checkout")))) : __jsx("p", {
    className: "m-0 text-center font-weight-semi-bold ls-normal text-body"
  }, "No products in the cart.")));
}

function mapStateToProps(state) {
  return {
    cartList: state.cart.data
  };
}

/* harmony default export */ var cart_menu = ((0,external_react_redux_.connect)(mapStateToProps, {
  removeFromCart: cart/* cartActions.removeFromCart */.Uw.removeFromCart
})(CartMenu));
;// CONCATENATED MODULE: ./utils/data/menu.js
const mainMenu = {
  "shop": {
    "variation1": [{
      "title": "Banner With Sidebar",
      "url": "shop/banner-sidebar"
    }, {
      "title": "Boxed Banner",
      "url": "shop/boxed-banner"
    }, {
      "title": "Infinite Ajaxscroll",
      "url": "shop/infinite-scroll"
    }, {
      "title": "Horizontal Filter",
      "url": "shop/horizontal-filter"
    }, {
      "title": "Navigation Filter",
      "url": "shop/navigation-filter",
      "hot": true
    }, {
      "title": "Off-Canvas Filter",
      "url": "shop/off-canvas-filter"
    }, {
      "title": "Right Toggle Sidebar",
      "url": "shop/right-sidebar"
    }],
    "variation2": [{
      "title": "3 Columns Mode",
      "url": "shop/grid/3cols",
      "new": true
    }, {
      "title": "4 Columns Mode",
      "url": "shop/grid/4cols"
    }, {
      "title": "5 Columns Mode",
      "url": "shop/grid/5cols"
    }, {
      "title": "6 Columns Mode",
      "url": "shop/grid/6cols"
    }, {
      "title": "7 Columns Mode",
      "url": "shop/grid/7cols"
    }, {
      "title": "8 Columns Mode",
      "url": "shop/grid/8cols"
    }, {
      "title": "List Mode",
      "url": "shop/?type=list"
    }]
  },
  "product": {
    "pages": [{
      "title": "Simple Product",
      "url": "product/default/fashionable-overnight-bag"
    }, {
      "title": "Variable Product",
      "url": "product/default/cavin-fashion-suede-handbag"
    }, {
      "title": "Sale Product",
      "url": "product/default/mackintosh-poket-backpack"
    }, {
      "title": "Feature & On Sale",
      "url": "product/default/cavin-klein-fashion-sheepskin-handbag"
    }, {
      "title": "With Left Sidebar",
      "url": "product/left-sidebar/fashionable-leather-satchel"
    }, {
      "title": "With Right Sidebar",
      "url": "product/right-sidebar/fashionable-leather-satchel"
    }, {
      "title": "Add Cart Sticky",
      "url": "product/sticky-cart/fashionable-leather-satchel",
      "hot": true
    }, {
      "title": "Tab Inside",
      "url": "product/tab-inside/fashionable-leather-satchel"
    }],
    "layout": [{
      "title": "Grid Images",
      "url": "product/grid/fashionable-leather-satchel",
      "new": true
    }, {
      "title": "Masonry",
      "url": "product/masonry/fashionable-hooded-coat"
    }, {
      "title": "Gallery Type",
      "url": "product/gallery/fashionable-leather-satchel"
    }, {
      "title": "Full Width Layout",
      "url": "product/full-width/fashionable-leather-satchel"
    }, {
      "title": "Sticky Info",
      "url": "product/sticky-info/fashionable-leather-satchel"
    }, {
      "title": "Left & Right Sticky",
      "url": "product/sticky-both/fashionable-leather-satchel"
    }, {
      "title": "Horizontal Thumb",
      "url": "product/horizontal/fashionable-leather-satchel"
    }, {
      "title": "Build Your Own",
      "url": ""
    }]
  },
  "other": [{
    "title": "About",
    "url": "pages/about-us"
  }, {
    "title": "Contact Us",
    "url": "pages/contact-us"
  }, {
    "title": "My Account",
    "url": "pages/account"
  }, {
    "title": "FAQs",
    "url": "pages/faqs"
  }, {
    "title": "Error 404",
    "url": "pages/404"
  }, {
    "title": "Coming Soon",
    "url": "pages/coming-soon"
  }],
  "blog": [{
    "title": "Classic",
    "url": "blog/classic"
  }, {
    "title": "Listing",
    "url": "blog/listing"
  }, {
    "title": "Grid",
    "url": "blog/grid/2cols",
    "subPages": [{
      "title": "Grid 2 columns",
      "url": "blog/grid/2cols"
    }, {
      "title": "Grid 3 columns",
      "url": "blog/grid/3cols"
    }, {
      "title": "Grid 4 columns",
      "url": "blog/grid/4cols"
    }, {
      "title": "Grid sidebar",
      "url": "blog/grid/sidebar"
    }]
  }, {
    "title": "Masonry",
    "url": "blog/masonry/2cols",
    "subPages": [{
      "title": "Masonry 2 columns",
      "url": "blog/masonry/2cols"
    }, {
      "title": "Masonry 3 columns",
      "url": "blog/masonry/3cols"
    }, {
      "title": "Masonry 4 columns",
      "url": "blog/masonry/4cols"
    }, {
      "title": "Masonry sidebar",
      "url": "blog/masonry/sidebar"
    }]
  }, {
    "title": "Mask",
    "url": "blog/mask/grid",
    "subPages": [{
      "title": "Blog mask grid",
      "url": "blog/mask/grid"
    }, {
      "title": "Blog mask masonry",
      "url": "blog/mask/masonry"
    }]
  }, {
    "title": "Single Post",
    "url": "blog/single/pellentesque-fusce-suscipit"
  }],
  "element": [{
    "title": "Products",
    "url": "elements/products"
  }, {
    "title": "Typography",
    "url": "elements/typography"
  }, {
    "title": "Titles",
    "url": "elements/titles"
  }, {
    "title": "Product Category",
    "url": "elements/product-category"
  }, {
    "title": "Buttons",
    "url": "elements/buttons"
  }, {
    "title": "Accordions",
    "url": "elements/accordions"
  }, {
    "title": "Alert & Notification",
    "url": "elements/alerts"
  }, {
    "title": "Tabs",
    "url": "elements/tabs"
  }, {
    "title": "Testimonials",
    "url": "elements/testimonials"
  }, {
    "title": "Blog Posts",
    "url": "elements/blog-posts"
  }, {
    "title": "Instagrams",
    "url": "elements/instagrams"
  }, {
    "title": "Call to Action",
    "url": "elements/cta"
  }, {
    "title": "Icon Boxes",
    "url": "elements/icon-boxes"
  }, {
    "title": "Icons",
    "url": "elements/icons"
  }]
};
const elementsList = [{
  "url": "accordions",
  "class": "element-accordian",
  "title": "accordions"
}, {
  "url": "blog-posts",
  "class": "element-blog",
  "title": "blog posts"
}, {
  "url": "buttons",
  "class": "element-button",
  "title": "buttons"
}, {
  "url": "cta",
  "class": "element-cta",
  "title": "call to action"
}, {
  "url": "icon-boxes",
  "class": "element-icon-box",
  "title": "icon boxes"
}, {
  "url": "icons",
  "class": "element-icon",
  "title": "Icons"
}, {
  "url": "instagrams",
  "class": "element-portfolio",
  "title": "instagrams"
}, {
  "url": "categories",
  "class": "element-category",
  "title": "product categories"
}, {
  "url": "products",
  "class": "element-product",
  "title": "products"
}, {
  "url": "tabs",
  "class": "element-tab",
  "title": "tabs"
}, {
  "url": "testimonials",
  "class": "element-testimonial",
  "title": "testimonials"
}, {
  "url": "titles",
  "class": "element-title",
  "title": "titles"
}, {
  "url": "typography",
  "class": "element-typography",
  "title": "typography"
}, {
  "url": "alerts",
  "class": "element-video",
  "title": "Notification"
}];
const headerTransprentList = ["/shop/banner-sidebar", "/shop/boxed-banner", "/product/default/[slug]", "/pages/about-us", "/pages/contact-us", "/pages/account", "/pages/faqs", "/pages/cart", "/pages/wishlist", "/pages/checkout", "/pages/order", "/pages/404", "/blog/classic", "/blog/listing", "/blog/grid/[column]", "/blog/grid/sidebar", "/blog/masonry/[column]", "/blog/masonry/sidebar", "/blog/mask/grid", "/blog/mask/masonry", "/blog/single/[slug]", "/elements"];
;// CONCATENATED MODULE: ./components/common/partials/main-menu.jsx

var main_menu_jsx = (external_react_default()).createElement;




function MainMenu() {
  const pathname = (0,router_.useRouter)().pathname;
  return main_menu_jsx("nav", {
    className: "main-nav ml-0"
  }, main_menu_jsx("ul", {
    className: "menu"
  }, main_menu_jsx("li", {
    id: "menu-home",
    className: pathname === '/' ? 'active' : ''
  }, main_menu_jsx(custom_link/* default */.Z, {
    href: "/"
  }, "Home")), main_menu_jsx("li", {
    className: `submenu  ${pathname.includes('/shop') ? 'active' : ''}`
  }, main_menu_jsx(custom_link/* default */.Z, {
    href: "/shop"
  }, "Categories"), main_menu_jsx("div", {
    className: "megamenu"
  }, main_menu_jsx("div", {
    className: "row"
  }, main_menu_jsx("div", {
    className: "col-6 col-sm-4 col-md-3 col-lg-4"
  }, main_menu_jsx("h4", {
    className: "menu-title"
  }, "Variations 1"), main_menu_jsx("ul", null, mainMenu.shop.variation1.map((item, index) => main_menu_jsx("li", {
    key: `shop-${item.title}`
  }, main_menu_jsx(custom_link/* default */.Z, {
    href: '/' + item.url
  }, item.title, item.hot ? main_menu_jsx("span", {
    className: "tip tip-hot"
  }, "Hot") : ""))))), main_menu_jsx("div", {
    className: "col-6 col-sm-4 col-md-3 col-lg-4"
  }, main_menu_jsx("h4", {
    className: "menu-title"
  }, "Variations 2"), main_menu_jsx("ul", null, mainMenu.shop.variation2.map((item, index) => main_menu_jsx("li", {
    key: `shop-${item.title}`
  }, main_menu_jsx(custom_link/* default */.Z, {
    href: '/' + item.url
  }, item.title, item.new ? main_menu_jsx("span", {
    className: "tip tip-new"
  }, "New") : ""))))), main_menu_jsx("div", {
    className: "col-6 col-sm-4 col-md-3 col-lg-4 menu-banner menu-banner1 banner banner-fixed"
  }, main_menu_jsx("figure", null, main_menu_jsx("img", {
    src: "./images/menu/banner-1.jpg",
    alt: "Menu banner",
    width: "221",
    height: "330"
  })), main_menu_jsx("div", {
    className: "banner-content y-50"
  }, main_menu_jsx("h4", {
    className: "banner-subtitle font-weight-bold text-primary ls-m"
  }, "Sale."), main_menu_jsx("h3", {
    className: "banner-title font-weight-bold"
  }, main_menu_jsx("span", {
    className: "text-uppercase"
  }, "Up to"), "70% Off"), main_menu_jsx(custom_link/* default */.Z, {
    href: "/shop",
    className: "btn btn-link btn-underline"
  }, "shop now", main_menu_jsx("i", {
    className: "d-icon-arrow-right"
  }))))))), main_menu_jsx("li", {
    className: `submenu  ${pathname.includes('/pages') ? 'active' : ''}`
  }, main_menu_jsx(custom_link/* default */.Z, {
    href: "#"
  }, "Pages"), main_menu_jsx("ul", null, mainMenu.other.map((item, index) => main_menu_jsx("li", {
    key: `other-${item.title}`
  }, main_menu_jsx(custom_link/* default */.Z, {
    href: '/' + item.url
  }, item.title, item.new ? main_menu_jsx("span", {
    className: "tip tip-new"
  }, "New") : ""))))), main_menu_jsx("li", {
    className: `submenu  ${pathname.includes('/blog') && !pathname.includes('/elements') ? 'active' : ''}`
  }, main_menu_jsx(custom_link/* default */.Z, {
    href: `/blog/classic`
  }, "Blog"), main_menu_jsx("ul", null, mainMenu.blog.map((item, index) => main_menu_jsx("li", {
    key: "blog" + item.title,
    className: item.subPages ? "submenu" : ""
  }, main_menu_jsx(custom_link/* default */.Z, {
    href: '/' + item.url
  }, item.title), item.subPages ? main_menu_jsx("ul", null, item.subPages.map((item, index) => main_menu_jsx("li", {
    key: `blog-${item.title}`
  }, main_menu_jsx(custom_link/* default */.Z, {
    href: '/' + item.url
  }, item.title)))) : "")))), main_menu_jsx("li", {
    className: `${pathname.includes('/elements') ? 'active' : ''} d-xl-show submenu`
  }, main_menu_jsx(custom_link/* default */.Z, {
    href: `/elements`
  }, "Elements"), main_menu_jsx("ul", null, mainMenu.element.map((item, index) => main_menu_jsx("li", {
    key: `elements-${item.title}`
  }, main_menu_jsx(custom_link/* default */.Z, {
    href: '/' + item.url
  }, item.title)))))));
}

/* harmony default export */ var main_menu = (MainMenu);
// EXTERNAL MODULE: external "@apollo/react-hooks"
var react_hooks_ = __webpack_require__(7530);
// EXTERNAL MODULE: external "react-lazy-load-image-component"
var external_react_lazy_load_image_component_ = __webpack_require__(9290);
// EXTERNAL MODULE: ./server/queries.js
var queries = __webpack_require__(4733);
// EXTERNAL MODULE: ./server/apollo.js
var apollo = __webpack_require__(5438);
;// CONCATENATED MODULE: ./components/common/partials/search-box.jsx
var search_box_jsx = (external_react_default()).createElement;









function SearchForm() {
  const router = (0,router_.useRouter)();
  const {
    0: search,
    1: setSearch
  } = (0,external_react_.useState)("");
  const [searchProducts, {
    data
  }] = (0,react_hooks_.useLazyQuery)(queries/* GET_PRODUCTS */.tT);
  const {
    0: timer,
    1: setTimer
  } = (0,external_react_.useState)('null');
  (0,external_react_.useEffect)(() => {
    document.querySelector("body").addEventListener("click", onBodyClick);
    return () => {
      document.querySelector("body").removeEventListener("click", onBodyClick);
    };
  }, []);
  (0,external_react_.useEffect)(() => {
    setSearch("");
  }, [router.query.slug]);
  (0,external_react_.useEffect)(() => {
    if (search.length > 2) {
      if (timer) clearTimeout(timer);
      let timerId = setTimeout(() => {
        searchProducts({
          variables: {
            search: search
          }
        });
        setTimer(null);
        ;
      }, 500);
      setTimer(timerId);
    }
  }, [search]);
  (0,external_react_.useEffect)(() => {
    document.querySelector('.header-search.show-results') && document.querySelector('.header-search.show-results').classList.remove('show-results');
  }, [router.pathname]);

  function removeXSSAttacks(html) {
    const SCRIPT_REGEX = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi; // Removing the <script> tags

    while (SCRIPT_REGEX.test(html)) {
      html = html.replace(SCRIPT_REGEX, "");
    } // Removing all events from tags...


    html = html.replace(/ on\w+="[^"]*"/g, "");
    return {
      __html: html
    };
  }

  function matchEmphasize(name) {
    let regExp = new RegExp(search, "i");
    return name.replace(regExp, match => "<strong>" + match + "</strong>");
  }

  function showSearchBox(e) {
    e.preventDefault();
    e.stopPropagation();
    e.currentTarget.closest('.header-search').classList.toggle('show');
  }

  function onBodyClick(e) {
    if (e.target.closest('.header-search')) return e.target.closest('.header-search').classList.contains('show-results') || e.target.closest('.header-search').classList.add('show-results');
    document.querySelector('.header-search.show') && document.querySelector('.header-search.show').classList.remove('show');
    document.querySelector('.header-search.show-results') && document.querySelector('.header-search.show-results').classList.remove('show-results');
  }

  function onSearchChange(e) {
    setSearch(e.target.value);
  }

  function onSubmitSearchForm(e) {
    e.preventDefault();
    router.push({
      pathname: '/shop',
      query: {
        search: search
      }
    });
  }

  return search_box_jsx("div", {
    className: "header-search hs-toggle"
  }, search_box_jsx(custom_link/* default */.Z, {
    href: "#",
    className: "search-toggle",
    role: "button"
  }, search_box_jsx("i", {
    className: "d-icon-search"
  })), search_box_jsx("form", {
    action: "#",
    method: "get",
    onSubmit: onSubmitSearchForm,
    className: "input-wrapper"
  }, search_box_jsx("input", {
    type: "text",
    className: "form-control",
    name: "search",
    autoComplete: "off",
    value: search,
    onChange: onSearchChange,
    placeholder: "Search...",
    required: true,
    onClick: showSearchBox
  }), search_box_jsx("button", {
    className: "btn btn-search",
    type: "submit"
  }, search_box_jsx("i", {
    className: "d-icon-search"
  })), search_box_jsx("div", {
    className: "live-search-list bg-white scrollable"
  }, search.length > 2 && data && data.products.data.map((product, index) => search_box_jsx(custom_link/* default */.Z, {
    href: `/product/default/${product.slug}`,
    className: "autocomplete-suggestion",
    key: `search-result-${index}`
  }, search_box_jsx(external_react_lazy_load_image_component_.LazyLoadImage, {
    src: "https://d-themes.com/react_asset_api/riode" + product.pictures[0].url,
    width: 40,
    height: 40,
    alt: "product"
  }), search_box_jsx("div", {
    className: "search-name",
    dangerouslySetInnerHTML: removeXSSAttacks(matchEmphasize(product.name))
  }), search_box_jsx("span", {
    className: "search-price"
  }, product.price[0] !== product.price[1] ? product.variants.length === 0 ? search_box_jsx((external_react_default()).Fragment, null, search_box_jsx("span", {
    className: "new-price mr-1"
  }, "$", (0,utils/* toDecimal */.YM)(product.price[0])), search_box_jsx("span", {
    className: "old-price"
  }, "$", (0,utils/* toDecimal */.YM)(product.price[1]))) : search_box_jsx("span", {
    className: "new-price"
  }, "$", (0,utils/* toDecimal */.YM)(product.price[0]), " \u2013 $", (0,utils/* toDecimal */.YM)(product.price[1])) : search_box_jsx("span", {
    className: "new-price"
  }, "$", (0,utils/* toDecimal */.YM)(product.price[0]))))))));
}

/* harmony default export */ var search_box = ((0,apollo/* default */.Z)({
  ssr: true
})(SearchForm));
// EXTERNAL MODULE: external "react-tabs"
var external_react_tabs_ = __webpack_require__(7659);
// EXTERNAL MODULE: external "react-modal"
var external_react_modal_ = __webpack_require__(9997);
var external_react_modal_default = /*#__PURE__*/__webpack_require__.n(external_react_modal_);
;// CONCATENATED MODULE: ./components/features/modals/login-modal.jsx
var login_modal_jsx = (external_react_default()).createElement;




const customStyles = {
  overlay: {
    backgroundColor: 'rgba(0,0,0,0.4)',
    display: "flex"
  }
};
let index = 0;
external_react_modal_default().setAppElement("#__next");

function LoginModal() {
  const {
    0: open,
    1: setOpen
  } = (0,external_react_.useState)(false);

  function closeModal() {
    document.querySelector(".ReactModal__Overlay").classList.add('removed');
    document.querySelector(".login-popup.ReactModal__Content").classList.remove("ReactModal__Content--after-open");
    document.querySelector(".login-popup-overlay.ReactModal__Overlay").classList.remove("ReactModal__Overlay--after-open");
    setTimeout(() => {
      setOpen(false);
    }, 330);
  }

  function openModal(e, loginIndex = 0) {
    e.preventDefault();
    index = loginIndex;
    setOpen(true);
  }

  return login_modal_jsx((external_react_default()).Fragment, null, login_modal_jsx("a", {
    className: "login-link",
    href: "#",
    "data-toggle": "login-modal",
    onClick: openModal
  }, login_modal_jsx("i", {
    className: "d-icon-user"
  })), open ? login_modal_jsx((external_react_modal_default()), {
    isOpen: open,
    onRequestClose: closeModal,
    style: customStyles,
    contentLabel: "Login Modal",
    className: "login-popup",
    overlayClassName: "login-popup-overlay",
    shouldReturnFocusAfterClose: false,
    id: "login-modal"
  }, login_modal_jsx("div", {
    className: "form-box"
  }, login_modal_jsx("div", {
    className: "tab tab-nav-simple tab-nav-boxed form-tab"
  }, login_modal_jsx(external_react_tabs_.Tabs, {
    selectedTabClassName: "active",
    selectedTabPanelClassName: "active",
    defaultIndex: index
  }, login_modal_jsx(external_react_tabs_.TabList, {
    className: "nav nav-tabs nav-fill align-items-center border-no justify-content-center mb-5"
  }, login_modal_jsx(external_react_tabs_.Tab, {
    className: "nav-item"
  }, login_modal_jsx("span", {
    className: "nav-link border-no lh-1 ls-normal"
  }, "Sign in")), login_modal_jsx("li", {
    className: "delimiter"
  }, "or"), login_modal_jsx(external_react_tabs_.Tab, {
    className: "nav-item"
  }, login_modal_jsx("span", {
    className: "nav-link border-no lh-1 ls-normal"
  }, "Register"))), login_modal_jsx("div", {
    className: "tab-content"
  }, login_modal_jsx(external_react_tabs_.TabPanel, {
    className: "tab-pane"
  }, login_modal_jsx("form", {
    action: "#"
  }, login_modal_jsx("div", {
    className: "form-group mb-3"
  }, login_modal_jsx("input", {
    type: "text",
    className: "form-control",
    id: "singin-email",
    name: "singin-email",
    placeholder: "Username or Email Address *",
    required: true
  })), login_modal_jsx("div", {
    className: "form-group"
  }, login_modal_jsx("input", {
    type: "password",
    className: "form-control",
    id: "singin-password",
    placeholder: "Password *",
    name: "singin-password",
    required: true
  })), login_modal_jsx("div", {
    className: "form-footer"
  }, login_modal_jsx("div", {
    className: "form-checkbox"
  }, login_modal_jsx("input", {
    type: "checkbox",
    className: "custom-checkbox",
    id: "signin-remember",
    name: "signin-remember"
  }), login_modal_jsx("label", {
    className: "form-control-label",
    htmlFor: "signin-remember"
  }, "Remember me")), login_modal_jsx(custom_link/* default */.Z, {
    href: "#",
    className: "lost-link"
  }, "Lost your password?")), login_modal_jsx("button", {
    className: "btn btn-dark btn-block btn-rounded",
    type: "submit"
  }, "Login")), login_modal_jsx("div", {
    className: "form-choice text-center"
  }, login_modal_jsx("label", {
    className: "ls-m"
  }, "or Login With"), login_modal_jsx("div", {
    className: "social-links"
  }, login_modal_jsx(custom_link/* default */.Z, {
    href: "#",
    className: "social-link social-google fab fa-google border-no"
  }), login_modal_jsx(custom_link/* default */.Z, {
    href: "#",
    className: "social-link social-facebook fab fa-facebook-f border-no"
  }), login_modal_jsx(custom_link/* default */.Z, {
    href: "#",
    className: "social-link social-twitter fab fa-twitter border-no"
  })))), login_modal_jsx(external_react_tabs_.TabPanel, {
    className: "tab-pane"
  }, login_modal_jsx("form", {
    action: "#"
  }, login_modal_jsx("div", {
    className: "form-group"
  }, login_modal_jsx("label", {
    htmlFor: "singin-email"
  }, "Your email address:"), login_modal_jsx("input", {
    type: "email",
    className: "form-control",
    id: "register-email",
    name: "register-email",
    placeholder: "Your Email address *",
    required: true
  })), login_modal_jsx("div", {
    className: "form-group"
  }, login_modal_jsx("label", {
    htmlFor: "singin-password"
  }, "Password:"), login_modal_jsx("input", {
    type: "password",
    className: "form-control",
    id: "register-password",
    name: "register-password",
    placeholder: "Password *",
    required: true
  })), login_modal_jsx("div", {
    className: "form-footer"
  }, login_modal_jsx("div", {
    className: "form-checkbox"
  }, login_modal_jsx("input", {
    type: "checkbox",
    className: "custom-checkbox",
    id: "register-agree",
    name: "register-agree",
    required: true
  }), login_modal_jsx("label", {
    className: "form-control-label",
    htmlFor: "register-agree"
  }, "I agree to the privacy policy"))), login_modal_jsx("button", {
    className: "btn btn-dark btn-block btn-rounded",
    type: "submit"
  }, "Register")), login_modal_jsx("div", {
    className: "form-choice text-center"
  }, login_modal_jsx("label", {
    className: "ls-m"
  }, "or Register With"), login_modal_jsx("div", {
    className: "social-links"
  }, login_modal_jsx(custom_link/* default */.Z, {
    href: "#",
    className: "social-link social-google fab fa-google border-no"
  }), login_modal_jsx(custom_link/* default */.Z, {
    href: "#",
    className: "social-link social-facebook fab fa-facebook-f border-no"
  }), login_modal_jsx(custom_link/* default */.Z, {
    href: "#",
    className: "social-link social-twitter fab fa-twitter border-no"
  })))))))), login_modal_jsx("button", {
    title: "Close (Esc)",
    type: "button",
    className: "mfp-close",
    onClick: closeModal
  }, login_modal_jsx("span", null, "\xD7"))) : '');
}

/* harmony default export */ var login_modal = (LoginModal);
;// CONCATENATED MODULE: ./components/common/header.jsx

var header_jsx = (external_react_default()).createElement;







function Header(props) {
  const router = (0,router_.useRouter)();

  const showMobileMenu = () => {
    document.querySelector('body').classList.add('mmenu-active');
  };

  return header_jsx("header", {
    className: `header header-transparent ${headerTransprentList.includes(router.pathname) ? 'p-relative bg-dark' : ''}`
  }, header_jsx("div", {
    className: "header-top"
  }, header_jsx("div", {
    className: "container-fluid"
  }, header_jsx("div", {
    className: "header-left"
  }, header_jsx("div", {
    className: "social-links inline-links d-lg-show"
  }, header_jsx(custom_link/* default */.Z, {
    href: "#",
    className: "social-link social-twitter fab fa-twitter",
    title: "twitter"
  }), header_jsx(custom_link/* default */.Z, {
    href: "#",
    className: "social-link social-linkedin fab fa-linkedin-in",
    title: "linkedin"
  }), header_jsx(custom_link/* default */.Z, {
    href: "#",
    className: "social-link social-facebook fab fa-facebook-f",
    title: "facebook"
  }), header_jsx(custom_link/* default */.Z, {
    href: "#",
    className: "social-link social-pinterest fab fa-pinterest-p",
    title: "pinterest"
  })), header_jsx("p", {
    className: "welcome-msg ls-normal"
  }, "Welcome to Riode store message or remove it!")), header_jsx("div", {
    className: "header-right"
  }, header_jsx(custom_link/* default */.Z, {
    className: "call d-lg-show",
    href: "#"
  }, header_jsx("span", null, "Call us: "), "123-456-7890"), header_jsx("div", {
    className: "dropdown ml-4 d-lg-show"
  }, header_jsx(custom_link/* default */.Z, {
    href: "#"
  }, "USD"), header_jsx("ul", {
    className: "dropdown-box"
  }, header_jsx("li", null, header_jsx(custom_link/* default */.Z, {
    href: "#"
  }, "USD")), header_jsx("li", null, header_jsx(custom_link/* default */.Z, {
    href: "#"
  }, "EUR")))), header_jsx("span", {
    className: "divider ml-3 d-lg-show"
  }), header_jsx("div", {
    className: "dropdown language-dropdown d-lg-show"
  }, header_jsx(custom_link/* default */.Z, {
    href: "#"
  }, "ENG"), header_jsx("ul", {
    className: "dropdown-box"
  }, header_jsx("li", null, header_jsx(custom_link/* default */.Z, {
    href: "#"
  }, "ENG")), header_jsx("li", null, header_jsx(custom_link/* default */.Z, {
    href: "#"
  }, "FRH")))), header_jsx(custom_link/* default */.Z, {
    href: "/pages/contact-us",
    className: "btn btn-primary btn-sm contact font-weight-normal mr-0 ml-4"
  }, "Contact us")))), header_jsx("div", {
    className: "header-middle sticky-header fix-top sticky-content has-center"
  }, header_jsx("div", {
    className: "container-fluid"
  }, header_jsx("div", {
    className: "header-left"
  }, header_jsx(custom_link/* default */.Z, {
    href: "#",
    className: "mobile-menu-toggle",
    onClick: showMobileMenu
  }, header_jsx("i", {
    className: "d-icon-bars2"
  })), header_jsx(custom_link/* default */.Z, {
    href: "/",
    className: "logo d-block d-lg-none"
  }, header_jsx("img", {
    src: "./images/home/logo.png",
    alt: "logo",
    width: "154",
    height: "44"
  })), header_jsx(main_menu, null)), header_jsx("div", {
    className: "header-center d-none d-lg-block"
  }, header_jsx(custom_link/* default */.Z, {
    href: "/",
    className: "logo"
  }, header_jsx("img", {
    src: "./images/home/logo.png",
    alt: "logo",
    width: "154",
    height: "44"
  }))), header_jsx("div", {
    className: "header-right"
  }, header_jsx(search_box, null), header_jsx(login_modal, null), header_jsx(custom_link/* default */.Z, {
    href: "/pages/wishlist",
    className: "wishlist d-block"
  }, header_jsx("i", {
    className: "d-icon-heart"
  })), header_jsx(cart_menu, null)))));
}
;// CONCATENATED MODULE: ./components/common/footer.jsx

var footer_jsx = (external_react_default()).createElement;

function Footer() {
  return footer_jsx("footer", {
    className: "footer"
  }, footer_jsx("div", {
    className: "footer-middle"
  }, footer_jsx("div", {
    className: "container"
  }, footer_jsx("div", {
    className: "row"
  }, footer_jsx("div", {
    className: "col-lg-3 col-md-6"
  }, footer_jsx("div", {
    className: "widget widget-about"
  }, footer_jsx(custom_link/* default */.Z, {
    href: "/",
    className: "logo-footer"
  }, footer_jsx("img", {
    src: "./images/home/logo.png",
    alt: "logo-footer",
    width: "154",
    height: "44"
  })), footer_jsx("div", {
    className: "widget-body"
  }, footer_jsx("p", null, "Fringilla urna porttitor rhoncus dolor purus luctus venenatis lectus magna fringilla diam maecenas ultricies mi eget mauris."), footer_jsx(custom_link/* default */.Z, {
    href: "mailto:mail@riode.com"
  }, "Riode@example.com")))), footer_jsx("div", {
    className: "col-lg-3 col-md-6"
  }, footer_jsx("div", {
    className: "widget"
  }, footer_jsx("h4", {
    className: "widget-title"
  }, "Account"), footer_jsx("ul", {
    className: "widget-body"
  }, footer_jsx("li", null, footer_jsx(custom_link/* default */.Z, {
    href: "/pages/account"
  }, "My Account")), footer_jsx("li", null, footer_jsx(custom_link/* default */.Z, {
    href: "#"
  }, "Our Guarantees")), footer_jsx("li", null, footer_jsx(custom_link/* default */.Z, {
    href: "#"
  }, "Terms And Conditions")), footer_jsx("li", null, footer_jsx(custom_link/* default */.Z, {
    href: "#"
  }, "Privacy Policy")), footer_jsx("li", null, footer_jsx(custom_link/* default */.Z, {
    href: "#"
  }, "Intellectual Property Claims")), footer_jsx("li", null, footer_jsx(custom_link/* default */.Z, {
    href: "#"
  }, "Site Map"))))), footer_jsx("div", {
    className: "col-lg-2 col-md-6"
  }, footer_jsx("div", {
    className: "widget mb-md-0 mb-lg-6"
  }, footer_jsx("h4", {
    className: "widget-title"
  }, "Get Help"), footer_jsx("ul", {
    className: "widget-body"
  }, footer_jsx("li", null, footer_jsx(custom_link/* default */.Z, {
    href: "#"
  }, "Shipping & Delivery")), footer_jsx("li", null, footer_jsx(custom_link/* default */.Z, {
    href: "#"
  }, "Order Status")), footer_jsx("li", null, footer_jsx(custom_link/* default */.Z, {
    href: "#"
  }, "Brand")), footer_jsx("li", null, footer_jsx(custom_link/* default */.Z, {
    href: "#"
  }, "Returns")), footer_jsx("li", null, footer_jsx(custom_link/* default */.Z, {
    href: "#"
  }, "Payment Options")), footer_jsx("li", null, footer_jsx(custom_link/* default */.Z, {
    href: "/pages/contact-us"
  }, "Contact Us"))))), footer_jsx("div", {
    className: "col-lg-4 col-md-6"
  }, footer_jsx("div", {
    className: "widget"
  }, footer_jsx("h4", {
    className: "widget-title pt-1 mb-4"
  }, "Subscribe to Our Newsletter"), footer_jsx("div", {
    className: "widget-body widget-newsletter pt-0"
  }, footer_jsx("form", {
    action: "#",
    className: "input-wrapper input-wrapper-inline"
  }, footer_jsx("input", {
    type: "email",
    className: "form-control",
    name: "email",
    id: "email",
    placeholder: "Email address here...",
    required: true
  }), footer_jsx("button", {
    className: "btn btn-primary btn-sm btn-icon-right font-primary",
    type: "submit"
  }, "subscribe", footer_jsx("i", {
    className: "d-icon-arrow-right"
  }))))), footer_jsx("div", {
    className: "footer-info d-flex align-items-center justify-content-between"
  }, footer_jsx("figure", {
    className: "payment"
  }, footer_jsx("img", {
    src: "./images/home/payment.png",
    alt: "payment",
    width: "135",
    height: "24"
  })), footer_jsx("div", {
    className: "social-links"
  }, footer_jsx(custom_link/* default */.Z, {
    href: "#",
    className: "social-link social-facebook fab fa-facebook-f"
  }), footer_jsx(custom_link/* default */.Z, {
    href: "#",
    className: "social-link social-twitter fab fa-twitter"
  }), footer_jsx(custom_link/* default */.Z, {
    href: "#",
    className: "social-link social-linkedin fab fa-linkedin-in"
  }))))))), footer_jsx("div", {
    className: "footer-bottom d-block"
  }, footer_jsx("div", {
    className: "container justify-content-center"
  }, footer_jsx("div", {
    className: "footer-center mb-0"
  }, footer_jsx("p", {
    className: "copyright"
  }, "Riode eCommerce \xA9 2021. All Rights Reserved")))));
}
;// CONCATENATED MODULE: ./components/common/partials/footer-search-box.jsx
var footer_search_box_jsx = (external_react_default()).createElement;









function footer_search_box_SearchForm() {
  const router = (0,router_.useRouter)();
  const {
    0: search,
    1: setSearch
  } = (0,external_react_.useState)("");
  const [searchProducts, {
    data
  }] = (0,react_hooks_.useLazyQuery)(queries/* GET_PRODUCTS */.tT);
  const {
    0: timer,
    1: setTimer
  } = (0,external_react_.useState)(null);
  (0,external_react_.useEffect)(() => {
    document.querySelector("body").addEventListener("click", onBodyClick);
    return () => {
      document.querySelector("body").removeEventListener("click", onBodyClick);
    };
  }, []);
  (0,external_react_.useEffect)(() => {
    setSearch("");
  }, [router.query.slug]);
  (0,external_react_.useEffect)(() => {
    if (search.length > 2) {
      if (timer) clearTimeout(timer);
      let timerId = setTimeout(() => {
        searchProducts({
          variables: {
            search: search
          }
        });
        setTimer(null);
        ;
      }, 500);
      setTimer(timerId);
    }
  }, [search]);
  (0,external_react_.useEffect)(() => {
    document.querySelector('.header-search.show-results') && document.querySelector('.header-search.show-results').classList.remove('show-results');
  }, [router.pathname]);

  function removeXSSAttacks(html) {
    const SCRIPT_REGEX = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi; // Removing the <script> tags

    while (SCRIPT_REGEX.test(html)) {
      html = html.replace(SCRIPT_REGEX, "");
    } // Removing all events from tags...


    html = html.replace(/ on\w+="[^"]*"/g, "");
    return {
      __html: html
    };
  }

  function matchEmphasize(name) {
    let regExp = new RegExp(search, "i");
    return name.replace(regExp, match => "<strong>" + match + "</strong>");
  }

  function onSearchClick(e) {
    e.preventDefault();
    e.stopPropagation();
    e.currentTarget.parentNode.classList.toggle('show');
  }

  function onBodyClick(e) {
    if (e.target.closest('.header-search')) return e.target.closest('.header-search').classList.contains('show-results') || e.target.closest('.header-search').classList.add('show-results');
    document.querySelector('.header-search.show') && document.querySelector('.header-search.show').classList.remove('show');
    document.querySelector('.header-search.show-results') && document.querySelector('.header-search.show-results').classList.remove('show-results');
  }

  function onSearchChange(e) {
    setSearch(e.target.value);
  }

  function onSubmitSearchForm(e) {
    e.preventDefault();
    router.push({
      pathname: '/shop',
      query: {
        search: search
      }
    });
  }

  return footer_search_box_jsx("div", {
    className: "header-search hs-toggle dir-up"
  }, footer_search_box_jsx("a", {
    href: "#",
    className: "search-toggle sticky-link",
    role: "button",
    onClick: onSearchClick
  }, footer_search_box_jsx("i", {
    className: "d-icon-search"
  }), footer_search_box_jsx("span", null, "Search")), footer_search_box_jsx("form", {
    action: "#",
    method: "get",
    onSubmit: onSubmitSearchForm,
    className: "input-wrapper"
  }, footer_search_box_jsx("input", {
    type: "text",
    className: "form-control",
    name: "search",
    autoComplete: "off",
    value: search,
    onChange: onSearchChange,
    placeholder: "Search...",
    required: true
  }), footer_search_box_jsx("button", {
    className: "btn btn-search",
    type: "submit"
  }, footer_search_box_jsx("i", {
    className: "d-icon-search"
  })), footer_search_box_jsx("div", {
    className: "live-search-list bg-white"
  }, search.length > 2 && data && data.products.data.map((product, index) => footer_search_box_jsx(custom_link/* default */.Z, {
    href: `/product/default/${product.slug}`,
    className: "autocomplete-suggestion",
    key: `search-result-${index}`
  }, footer_search_box_jsx(external_react_lazy_load_image_component_.LazyLoadImage, {
    src: "https://d-themes.com/react_asset_api/riode" + product.pictures[0].url,
    width: 40,
    height: 40,
    alt: "product"
  }), footer_search_box_jsx("div", {
    className: "search-name",
    dangerouslySetInnerHTML: removeXSSAttacks(matchEmphasize(product.name))
  }), footer_search_box_jsx("span", {
    className: "search-price"
  }, product.price[0] !== product.price[1] ? product.variants.length === 0 ? footer_search_box_jsx((external_react_default()).Fragment, null, footer_search_box_jsx("span", {
    className: "new-price mr-1"
  }, "$", (0,utils/* toDecimal */.YM)(product.price[0])), footer_search_box_jsx("span", {
    className: "old-price"
  }, "$", (0,utils/* toDecimal */.YM)(product.price[1]))) : footer_search_box_jsx("span", {
    className: "new-price"
  }, "$", (0,utils/* toDecimal */.YM)(product.price[0]), " \u2013 $", (0,utils/* toDecimal */.YM)(product.price[1])) : footer_search_box_jsx("span", {
    className: "new-price"
  }, "$", (0,utils/* toDecimal */.YM)(product.price[0]))))))));
}

/* harmony default export */ var footer_search_box = ((0,apollo/* default */.Z)({
  ssr: true
})(footer_search_box_SearchForm));
;// CONCATENATED MODULE: ./components/common/sticky-footer.jsx

var sticky_footer_jsx = (external_react_default()).createElement;



function StickyFooter() {
  let tmp = 0;
  (0,external_react_.useEffect)(() => {
    window.addEventListener('scroll', stickyFooterHandler);
    return () => {
      window.removeEventListener('scroll', stickyFooterHandler);
    };
  }, []);

  const stickyFooterHandler = e => {
    let top = document.querySelector('.page-content') ? document.querySelector('.page-content').offsetTop + document.querySelector('header').offsetHeight + 100 : 600;
    let stickyFooter = document.querySelector('.sticky-footer.sticky-content');
    let height = 0;

    if (stickyFooter) {
      height = stickyFooter.offsetHeight;
    }

    if (window.pageYOffset >= top && window.innerWidth < 768 && e.currentTarget.scrollY >= tmp) {
      if (stickyFooter) {
        stickyFooter.classList.add('fixed');
        stickyFooter.setAttribute('style', "margin-bottom: 0");

        if (!document.querySelector('.sticky-content-wrapper')) {
          let newNode = document.createElement("div");
          newNode.className = "sticky-content-wrapper";
          stickyFooter.parentNode.insertBefore(newNode, stickyFooter);
          document.querySelector('.sticky-content-wrapper').insertAdjacentElement('beforeend', stickyFooter);
          document.querySelector('.sticky-content-wrapper').setAttribute("style", "height: " + height + "px");
        }

        if (!document.querySelector('.sticky-content-wrapper').getAttribute("style")) {
          document.querySelector('.sticky-content-wrapper').setAttribute("style", "height: " + height + "px");
        }
      }
    } else {
      if (stickyFooter) {
        stickyFooter.classList.remove('fixed');
        stickyFooter.setAttribute('style', `margin-bottom: -${height}px`);
      }

      if (document.querySelector('.sticky-content-wrapper')) {
        document.querySelector('.sticky-content-wrapper').removeAttribute("style");
      }
    }

    if (window.innerWidth > 767 && document.querySelector('.sticky-content-wrapper')) {
      document.querySelector('.sticky-content-wrapper').style.height = 'auto';
    }

    tmp = e.currentTarget.scrollY;
  };

  return sticky_footer_jsx("div", {
    className: "sticky-footer sticky-content fix-bottom"
  }, sticky_footer_jsx(custom_link/* default */.Z, {
    href: "/",
    className: "sticky-link active"
  }, sticky_footer_jsx("i", {
    className: "d-icon-home"
  }), sticky_footer_jsx("span", null, "Home")), sticky_footer_jsx(custom_link/* default */.Z, {
    href: "/shop",
    className: "sticky-link"
  }, sticky_footer_jsx("i", {
    className: "d-icon-volume"
  }), sticky_footer_jsx("span", null, "Categories")), sticky_footer_jsx(custom_link/* default */.Z, {
    href: "/pages/wishlist",
    className: "sticky-link"
  }, sticky_footer_jsx("i", {
    className: "d-icon-heart"
  }), sticky_footer_jsx("span", null, "Wishlist")), sticky_footer_jsx(custom_link/* default */.Z, {
    href: "/pages/account",
    className: "sticky-link"
  }, sticky_footer_jsx("i", {
    className: "d-icon-user"
  }), sticky_footer_jsx("span", null, "Account")), sticky_footer_jsx(footer_search_box, null));
}
// EXTERNAL MODULE: ./components/features/product/common/quickview-modal.jsx
var quickview_modal = __webpack_require__(9656);
;// CONCATENATED MODULE: ./components/features/modals/video-modal.jsx

var video_modal_jsx = (external_react_default()).createElement;





const video_modal_customStyles = {
  content: {
    position: "relative"
  },
  overlay: {
    background: 'rgba(0,0,0,.4)',
    overflowX: 'hidden',
    display: 'flex',
    overflowY: 'auto',
    opacity: 0
  }
};
external_react_modal_default().setAppElement('#__next');

function VideoModal(props) {
  const router = (0,router_.useRouter)();
  const {
    isOpen,
    closeModal,
    singleSlug
  } = props;
  (0,external_react_.useEffect)(() => {
    closeModal();
    router.events.on('routeChangeStart', closeModal);
    return () => {
      router.events.off('routeChangeStart', closeModal);
    };
  }, []);
  (0,external_react_.useEffect)(() => {
    if (isOpen) setTimeout(() => {
      document.querySelector(".ReactModal__Overlay").classList.add('opened');
    }, 100);
  }, [isOpen]);

  const closeVideo = () => {
    document.querySelector(".ReactModal__Overlay").classList.add('removed');
    document.querySelector(".ReactModal__Overlay").classList.remove('opened');
    document.querySelector(".video-modal.ReactModal__Content").classList.remove("ReactModal__Content--after-open");
    document.querySelector(".video-modal-overlay.ReactModal__Overlay").classList.remove("ReactModal__Overlay--after-open");
    setTimeout(() => {
      closeModal();
    }, 330);
  };

  return video_modal_jsx((external_react_modal_default()), {
    isOpen: isOpen,
    contentLabel: "VideoModal",
    onRequestClose: closeVideo,
    shouldFocusAfterRender: false,
    style: video_modal_customStyles,
    overlayClassName: "video-modal-overlay",
    className: "row video-modal",
    id: "video-modal"
  }, video_modal_jsx("video", {
    src: "https://d-themes.com/react_asset_api/riode" + singleSlug,
    autoPlay: true,
    loop: true,
    controls: true,
    className: "p-0"
  }), video_modal_jsx("button", {
    title: "Close (Esc)",
    type: "button",
    className: "mfp-close",
    onClick: closeModal
  }, video_modal_jsx("span", null, "\xD7")));
}

function video_modal_mapStateToProps(state) {
  return {
    isOpen: state.modal.openModal,
    singleSlug: state.modal.singleSlug
  };
}

/* harmony default export */ var video_modal = ((0,external_react_redux_.connect)(video_modal_mapStateToProps, {
  closeModal: modal/* modalActions.closeModal */.n.closeModal
})(VideoModal));
// EXTERNAL MODULE: ./components/features/accordion/card.jsx
var card = __webpack_require__(2674);
;// CONCATENATED MODULE: ./components/common/partials/mobile-menu.jsx
var mobile_menu_jsx = (external_react_default()).createElement;






function MobileMenu(props) {
  const {
    0: search,
    1: setSearch
  } = (0,external_react_.useState)("");
  const {
    0: timer,
    1: setTimer
  } = (0,external_react_.useState)(null);
  const router = (0,router_.useRouter)();
  (0,external_react_.useEffect)(() => {
    window.addEventListener('resize', hideMobileMenuHandler);
    document.querySelector("body").addEventListener("click", onBodyClick);
    return () => {
      window.removeEventListener('resize', hideMobileMenuHandler);
      document.querySelector("body").removeEventListener("click", onBodyClick);
    };
  }, []);
  (0,external_react_.useEffect)(() => {
    setSearch("");
  }, [router.query.slug]);

  const hideMobileMenuHandler = () => {
    if (window.innerWidth > 991) {
      document.querySelector('body').classList.remove('mmenu-active');
    }
  };

  const hideMobileMenu = () => {
    document.querySelector('body').classList.remove('mmenu-active');
  };

  function onSearchChange(e) {
    setSearch(e.target.value);
  }

  function onBodyClick(e) {
    if (e.target.closest('.header-search')) return e.target.closest('.header-search').classList.contains('show-results') || e.target.closest('.header-search').classList.add('show-results');
    document.querySelector('.header-search.show') && document.querySelector('.header-search.show').classList.remove('show');
    document.querySelector('.header-search.show-results') && document.querySelector('.header-search.show-results').classList.remove('show-results');
  }

  function onSubmitSearchForm(e) {
    e.preventDefault();
    router.push({
      pathname: '/shop',
      query: {
        search: search
      }
    });
  }

  return mobile_menu_jsx("div", {
    className: "mobile-menu-wrapper"
  }, mobile_menu_jsx("div", {
    className: "mobile-menu-overlay",
    onClick: hideMobileMenu
  }), mobile_menu_jsx(custom_link/* default */.Z, {
    className: "mobile-menu-close",
    href: "#",
    onClick: hideMobileMenu
  }, mobile_menu_jsx("i", {
    className: "d-icon-times"
  })), mobile_menu_jsx("div", {
    className: "mobile-menu-container scrollable"
  }, mobile_menu_jsx("form", {
    action: "#",
    className: "input-wrapper",
    onSubmit: onSubmitSearchForm
  }, mobile_menu_jsx("input", {
    type: "text",
    className: "form-control",
    name: "search",
    autoComplete: "off",
    value: search,
    onChange: onSearchChange,
    placeholder: "Search your keyword...",
    required: true
  }), mobile_menu_jsx("button", {
    className: "btn btn-search",
    type: "submit"
  }, mobile_menu_jsx("i", {
    className: "d-icon-search"
  }))), mobile_menu_jsx("ul", {
    className: "mobile-menu mmenu-anim"
  }, mobile_menu_jsx("li", null, mobile_menu_jsx(custom_link/* default */.Z, {
    href: "/"
  }, "Home")), mobile_menu_jsx("li", null, mobile_menu_jsx(card/* default */.Z, {
    title: "categories",
    type: "mobile",
    url: "/shop"
  }, mobile_menu_jsx("ul", null, mobile_menu_jsx("li", null, mobile_menu_jsx(card/* default */.Z, {
    title: "Variations 1",
    type: "mobile"
  }, mobile_menu_jsx("ul", null, mainMenu.shop.variation1.map((item, index) => mobile_menu_jsx("li", {
    key: `shop-${item.title}`
  }, mobile_menu_jsx(custom_link/* default */.Z, {
    href: '/' + item.url
  }, item.title, item.hot ? mobile_menu_jsx("span", {
    className: "tip tip-hot"
  }, "Hot") : "")))))), mobile_menu_jsx("li", null, mobile_menu_jsx(card/* default */.Z, {
    title: "Variations 2",
    type: "mobile"
  }, mobile_menu_jsx("ul", null, mainMenu.shop.variation2.map((item, index) => mobile_menu_jsx("li", {
    key: `shop-${item.title}`
  }, mobile_menu_jsx(custom_link/* default */.Z, {
    href: '/' + item.url
  }, item.title, item.new ? mobile_menu_jsx("span", {
    className: "tip tip-new"
  }, "New") : ""))))))))), mobile_menu_jsx("li", null, mobile_menu_jsx(card/* default */.Z, {
    title: "Pages",
    type: "mobile",
    url: "/pages/about-us"
  }, mobile_menu_jsx("ul", null, mainMenu.other.map((item, index) => mobile_menu_jsx("li", {
    key: `other-${item.title}`
  }, mobile_menu_jsx(custom_link/* default */.Z, {
    href: '/' + item.url
  }, item.title, item.new ? mobile_menu_jsx("span", {
    className: "tip tip-new"
  }, "New") : "")))))), mobile_menu_jsx("li", null, mobile_menu_jsx(card/* default */.Z, {
    title: "Blog",
    type: "mobile",
    url: "/blog/classic"
  }, mobile_menu_jsx("ul", null, mainMenu.blog.map((item, index) => item.subPages ? mobile_menu_jsx("li", {
    key: "blog" + item.title
  }, mobile_menu_jsx(card/* default */.Z, {
    title: item.title,
    url: '/' + item.url,
    type: "mobile"
  }, mobile_menu_jsx("ul", null, item.subPages.map((item, index) => mobile_menu_jsx("li", {
    key: `blog-${item.title}`
  }, mobile_menu_jsx(custom_link/* default */.Z, {
    href: '/' + item.url
  }, item.title)))))) : mobile_menu_jsx("li", {
    key: "blog" + item.title,
    className: item.subPages ? "submenu" : ""
  }, mobile_menu_jsx(custom_link/* default */.Z, {
    href: '/' + item.url
  }, item.title)))))), mobile_menu_jsx("li", null, mobile_menu_jsx(card/* default */.Z, {
    title: "elements",
    type: "mobile",
    url: "/elements"
  }, mobile_menu_jsx("ul", null, mainMenu.element.map((item, index) => mobile_menu_jsx("li", {
    key: `elements-${item.title}`
  }, mobile_menu_jsx(custom_link/* default */.Z, {
    href: '/' + item.url
  }, item.title)))))))));
}

/* harmony default export */ var mobile_menu = (/*#__PURE__*/external_react_default().memo(MobileMenu));
;// CONCATENATED MODULE: ./components/layout.jsx

var layout_jsx = (external_react_default()).createElement;

















function Layout({
  children,
  closeQuickview
}) {
  const router = (0,router_.useRouter)();
  (0,external_react_.useLayoutEffect)(() => {
    document.querySelector('body') && document.querySelector('body').classList.remove('loaded');
  }, [router.pathname]);
  (0,external_react_.useEffect)(() => {
    window.addEventListener('scroll', utils/* showScrollTopHandler */.Py, true);
    window.addEventListener('scroll', utils/* stickyHeaderHandler */.Dp, true);
    window.addEventListener('scroll', utils/* stickyFooterHandler */.vW, true);
    window.addEventListener('resize', utils/* stickyHeaderHandler */.Dp);
    window.addEventListener('resize', utils/* stickyFooterHandler */.vW);
    window.addEventListener('resize', utils/* resizeHandler */.Ul);
    return () => {
      window.removeEventListener('scroll', utils/* showScrollTopHandler */.Py, true);
      window.removeEventListener('scroll', utils/* stickyHeaderHandler */.Dp, true);
      window.removeEventListener('scroll', utils/* stickyFooterHandler */.vW, true);
      window.removeEventListener('resize', utils/* stickyHeaderHandler */.Dp);
      window.removeEventListener('resize', utils/* stickyFooterHandler */.vW);
      window.removeEventListener('resize', utils/* resizeHandler */.Ul);
    };
  }, []);
  (0,external_react_.useEffect)(() => {
    closeQuickview();
    let bodyClasses = [...document.querySelector("body").classList];

    for (let i = 0; i < bodyClasses.length; i++) {
      document.querySelector('body').classList.remove(bodyClasses[i]);
    }

    setTimeout(() => {
      document.querySelector('body').classList.add('loaded');
    }, 50);
  }, [router.pathname]);
  return layout_jsx((external_react_default()).Fragment, null, layout_jsx("div", {
    className: "page-wrapper"
  }, layout_jsx(Header, null), children, layout_jsx(Footer, null), layout_jsx(StickyFooter, null)), layout_jsx(custom_link/* default */.Z, {
    id: "scroll-top",
    href: "#",
    title: "Top",
    role: "button",
    className: "scroll-top",
    onClick: () => (0,utils/* scrollTopHandler */._M)(false)
  }, layout_jsx("i", {
    className: "d-icon-arrow-up"
  })), layout_jsx(mobile_menu, null), layout_jsx(external_react_toastify_.ToastContainer, {
    autoClose: 3000,
    duration: 300,
    newestOnTo: true,
    className: "toast-container",
    position: "bottom-left",
    closeButton: false,
    hideProgressBar: true,
    newestOnTop: true
  }), layout_jsx(quickview_modal/* default */.Z, null), layout_jsx(video_modal, null));
}

/* harmony default export */ var layout = ((0,external_react_redux_.connect)(null, {
  closeQuickview: modal/* modalActions.closeQuickview */.n.closeQuickview
})(Layout));
;// CONCATENATED MODULE: ./pages/_app.js

var _app_jsx = (external_react_default()).createElement;










const App = ({
  Component,
  pageProps
}) => {
  const store = (0,external_react_redux_.useStore)();
  (0,external_react_.useEffect)(() => {
    if (store.getState().demo.current !== queries/* currentDemo */.ct) {
      store.dispatch(demoActions.refreshStore(queries/* currentDemo */.ct));
    }
  }, []);
  return _app_jsx(external_react_redux_.Provider, {
    store: store
  }, _app_jsx(react_namespaceObject.PersistGate, {
    persistor: store.__persistor,
    loading: _app_jsx("div", {
      className: "loading-overlay"
    }, _app_jsx("div", {
      className: "bounce-loader"
    }, _app_jsx("div", {
      className: "bounce1"
    }), _app_jsx("div", {
      className: "bounce2"
    }), _app_jsx("div", {
      className: "bounce3"
    }), _app_jsx("div", {
      className: "bounce4"
    })))
  }, _app_jsx((external_react_helmet_default()), null, _app_jsx("meta", {
    charSet: "UTF-8"
  }), _app_jsx("meta", {
    "http-equiv": "X-UA-Compatible",
    content: "IE=edge"
  }), _app_jsx("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1, shrink-to-fit=no"
  }), _app_jsx("title", null, "Riode - React eCommerce Template"), _app_jsx("meta", {
    name: "keywords",
    content: "React Template"
  }), _app_jsx("meta", {
    name: "description",
    content: "Riode - React eCommerce Template"
  }), _app_jsx("meta", {
    name: "author",
    content: "D-THEMES"
  })), _app_jsx(layout, null, _app_jsx(Component, pageProps))));
};

App.getInitialProps = async ({
  Component,
  ctx
}) => {
  let pageProps = {};

  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx);
  }

  return {
    pageProps
  };
};

/* harmony default export */ var _app = (wrapper.withRedux(App));

/***/ }),

/***/ 3326:
/***/ (function() {



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

/***/ 3920:
/***/ (function(module) {

"use strict";
module.exports = require("react-slide-toggle");;

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
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, [1664,5588,5961,4138,4943,6090,5708,6723,2674,7845,1473,7684,3232,9656], function() { return __webpack_exec__(1439); });
module.exports = __webpack_exports__;

})();