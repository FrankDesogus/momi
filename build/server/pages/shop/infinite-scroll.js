(function() {
var exports = {};
exports.id = 661;
exports.ids = [661,3866];
exports.modules = {

/***/ 5128:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ ShopBanner; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_features_custom_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8765);

var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);

function ShopBanner(props) {
  const {
    subTitle = '',
    title = "Riode Shop",
    current = "Riode Shop"
  } = props;
  return __jsx("div", {
    className: "page-header",
    style: {
      backgroundImage: `url( ./images/home/page-header.jpg )`,
      backgroundColor: "#3C63A4"
    }
  }, subTitle ? __jsx("h3", {
    className: "page-subtitle"
  }, subTitle) : '', title ? __jsx("h1", {
    className: "page-title"
  }, title) : '', __jsx("ul", {
    className: "breadcrumb"
  }, __jsx("li", null, __jsx(_components_features_custom_link__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z, {
    href: "/"
  }, __jsx("i", {
    className: "d-icon-home"
  }))), __jsx("li", {
    className: "delimiter"
  }, "/"), __jsx("li", null, current)));
}

/***/ }),

/***/ 8281:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ infinite_scroll; }
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: external "react-helmet"
var external_react_helmet_ = __webpack_require__(6481);
// EXTERNAL MODULE: ./components/partials/shop/shop-banner.jsx
var shop_banner = __webpack_require__(5128);
// EXTERNAL MODULE: ./components/partials/shop/sidebar/sidebar-filter-one.jsx
var sidebar_filter_one = __webpack_require__(1506);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(6731);
// EXTERNAL MODULE: external "@apollo/react-hooks"
var react_hooks_ = __webpack_require__(7530);
;// CONCATENATED MODULE: external "react-infinite-scroll-component"
var external_react_infinite_scroll_component_namespaceObject = require("react-infinite-scroll-component");;
var external_react_infinite_scroll_component_default = /*#__PURE__*/__webpack_require__.n(external_react_infinite_scroll_component_namespaceObject);
// EXTERNAL MODULE: ./server/apollo.js
var apollo = __webpack_require__(5438);
// EXTERNAL MODULE: ./server/queries.js
var queries = __webpack_require__(4733);
// EXTERNAL MODULE: ./components/partials/shop/toolbox.jsx
var toolbox = __webpack_require__(5122);
// EXTERNAL MODULE: ./components/features/product/product-two.jsx
var product_two = __webpack_require__(3264);
// EXTERNAL MODULE: ./components/features/product/product-eight.jsx
var product_eight = __webpack_require__(4298);
;// CONCATENATED MODULE: ./components/partials/shop/product-list/product-list-two.jsx

var __jsx = (external_react_default()).createElement;










function ProductListTwo(props) {
  const router = (0,router_.useRouter)();
  const query = router.query;
  const {
    0: products,
    1: setProducts
  } = (0,external_react_.useState)([]);
  const [getInitData, {
    data,
    loading,
    error
  }] = (0,react_hooks_.useLazyQuery)(queries/* GET_PRODUCTS */.tT);
  const [loadMoreProducts, {
    data: newData
  }] = (0,react_hooks_.useLazyQuery)(queries/* GET_PRODUCTS */.tT, {
    fetchPolicy: 'no-cache'
  });
  const perPage = query.per_page ? parseInt(query.per_page) : 12;
  const {
    0: loadedCount,
    1: setLoadedCount
  } = (0,external_react_.useState)(perPage);
  const totalCount = data && data.products.total;
  const gridType = query.type ? query.type : 'grid';
  (0,external_react_.useEffect)(() => {
    setLoadedCount(perPage);
  }, [query]);
  (0,external_react_.useEffect)(() => {
    getInitData({
      variables: {
        search: query.search,
        colors: query.colors ? query.colors.split(',') : [],
        sizes: query.sizes ? query.sizes.split(',') : [],
        brands: query.brands ? query.brands.split(',') : [],
        min_price: parseInt(query.min_price),
        max_price: parseInt(query.max_price),
        category: query.category,
        tag: query.tag,
        sortBy: query.sortby,
        from: 0,
        to: loadedCount
      }
    });
  }, [query]);
  (0,external_react_.useLayoutEffect)(() => {
    data && setProducts(data.products.data);
  }, [data]);
  (0,external_react_.useEffect)(() => {
    let newProducts = newData ? newData.products.data : [];
    setProducts([...products, ...newProducts]);
  }, [newData]);

  const productLoadHandler = () => {
    setTimeout(() => {
      loadMoreProducts({
        variables: {
          search: query.search,
          colors: query.colors ? query.colors.split(',') : [],
          sizes: query.sizes ? query.sizes.split(',') : [],
          brands: query.brands ? query.brands.split(',') : [],
          min_price: parseInt(query.min_price),
          max_price: parseInt(query.max_price),
          category: query.category,
          tag: query.tag,
          sortBy: query.sortby,
          from: products.length,
          to: products.length + 3
        }
      });
    }, 1500);
  };

  return __jsx((external_react_default()).Fragment, null, __jsx(toolbox/* default */.Z, null), __jsx((external_react_infinite_scroll_component_default()), {
    dataLength: products ? products.length : 0,
    next: productLoadHandler,
    style: {
      overflow: "visible"
    },
    hasMore: products.length >= totalCount ? false : true,
    loader: __jsx("div", {
      className: "d-loading"
    })
  }, loading ? gridType === 'grid' ? __jsx("div", {
    className: `row product-wrapper cols-2 cols-sm-3`
  }, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(item => __jsx("div", {
    className: "product-loading-overlay",
    key: 'popup-skel-' + item
  }))) : __jsx("div", {
    className: "row product-wrapper skeleton-body cols-1"
  }, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(item => __jsx("div", {
    className: "skel-pro skel-pro-list mb-4",
    key: 'list-skel-' + item
  }))) : '', gridType === 'grid' ? __jsx("div", {
    className: `row product-wrapper cols-2 cols-sm-3`
  }, products.length > 0 && products.map(item => __jsx("div", {
    className: "product-wrap",
    key: 'shop-' + item.slug
  }, __jsx(product_two/* default */.Z, {
    product: item,
    adClass: ""
  })))) : __jsx("div", {
    className: "product-lists product-wrapper"
  }, products.length > 0 && products.map(item => __jsx(product_eight/* default */.Z, {
    product: item,
    key: 'shop-list-' + item.slug
  }))), products && products.length === 0 ? __jsx("p", {
    className: "ml-1"
  }, "No products were found matching your selection.") : ''));
}

/* harmony default export */ var product_list_two = ((0,apollo/* default */.Z)({
  ssr: true
})(ProductListTwo));
;// CONCATENATED MODULE: ./pages/shop/infinite-scroll.jsx
var infinite_scroll_jsx = (external_react_default()).createElement;






function InfiniteScroll() {
  return infinite_scroll_jsx("main", {
    className: "main"
  }, infinite_scroll_jsx(external_react_helmet_.Helmet, null, infinite_scroll_jsx("title", null, "Riode React eCommerce Template - Shop Ajax Infinite Scroll")), infinite_scroll_jsx("h1", {
    className: "d-none"
  }, "Riode React eCommerce Template - Shop Ajax Infinite Scroll"), infinite_scroll_jsx(shop_banner/* default */.Z, null), infinite_scroll_jsx("div", {
    className: "page-content mb-10 pb-3"
  }, infinite_scroll_jsx("div", {
    className: "container"
  }, infinite_scroll_jsx("div", {
    className: "row main-content-wrap gutter-lg"
  }, infinite_scroll_jsx(sidebar_filter_one/* default */.Z, null), infinite_scroll_jsx("div", {
    className: "col-lg-9 main-content"
  }, infinite_scroll_jsx(product_list_two, null))))));
}

/* harmony default export */ var infinite_scroll = (/*#__PURE__*/external_react_default().memo(InfiniteScroll));

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

/***/ 6481:
/***/ (function(module) {

"use strict";
module.exports = require("react-helmet");;

/***/ }),

/***/ 4766:
/***/ (function(module) {

"use strict";
module.exports = require("react-input-range");;

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
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, [1664,5588,5961,4138,6090,5708,6723,2674,4298,5379,5122,1506,3264], function() { return __webpack_exec__(8281); });
module.exports = __webpack_exports__;

})();