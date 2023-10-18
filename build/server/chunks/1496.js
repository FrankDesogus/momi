exports.id = 1496;
exports.ids = [1496];
exports.modules = {

/***/ 1496:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6731);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7530);
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_partials_shop_toolbox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5122);
/* harmony import */ var _components_features_product_product_three__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4246);
/* harmony import */ var _components_features_product_product_eight__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4298);
/* harmony import */ var _components_features_pagination__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2078);
/* harmony import */ var _server_apollo__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5438);
/* harmony import */ var _server_queries__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(4733);

var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);










function ProductListOne(props) {
  const {
    itemsPerRow = 3,
    type = "left",
    isToolbox = true
  } = props;
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
  const query = router.query;
  const [getProducts, {
    data,
    loading,
    error
  }] = (0,_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2__.useLazyQuery)(_server_queries__WEBPACK_IMPORTED_MODULE_8__/* .GET_PRODUCTS */ .tT);
  const products = data && data.products.data;
  const gridClasses = {
    3: "cols-2 cols-sm-3",
    4: "cols-2 cols-sm-3 cols-md-4",
    5: "cols-2 cols-sm-3 cols-md-4 cols-xl-5",
    6: "cols-2 cols-sm-3 cols-md-4 cols-xl-6",
    7: "cols-2 cols-sm-3 cols-md-4 cols-lg-5 cols-xl-7",
    8: "cols-2 cols-sm-3 cols-md-4 cols-lg-5 cols-xl-8"
  };
  const perPage = query.per_page ? parseInt(query.per_page) : 12;
  const totalPage = data ? parseInt(data.products.total / perPage) + (data.products.total % perPage ? 1 : 0) : 1;
  const page = query.page ? query.page : 1;
  const gridType = query.type ? query.type : 'grid';
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect)(() => {
    if (props.changeTotal && data) {
      props.changeTotal(data.products.total);
    }
  }, [data]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    getProducts({
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
        from: perPage * (page - 1),
        to: perPage * page
      }
    });
  }, [query]);
  return __jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, isToolbox ? __jsx(_components_partials_shop_toolbox__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {
    type: type
  }) : '', loading ? gridType === 'grid' ? __jsx("div", {
    className: `row product-wrapper ${gridClasses[itemsPerRow]}`
  }, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(item => __jsx("div", {
    className: "product-loading-overlay",
    key: 'popup-skel-' + item
  }))) : __jsx("div", {
    className: "row product-wrapper skeleton-body cols-1"
  }, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(item => __jsx("div", {
    className: "skel-pro skel-pro-list mb-4",
    key: 'list-skel-' + item
  }))) : '', gridType === 'grid' ? __jsx("div", {
    className: `row product-wrapper ${gridClasses[itemsPerRow]}`
  }, products && products.map(item => __jsx("div", {
    className: "product-wrap",
    key: 'shop-' + item.slug
  }, __jsx(_components_features_product_product_three__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z, {
    isCategory: false,
    product: item,
    adClass: ""
  })))) : __jsx("div", {
    className: "product-lists product-wrapper"
  }, products && products.map(item => __jsx(_components_features_product_product_eight__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z, {
    product: item,
    key: 'shop-list-' + item.slug
  }))), products && products.length === 0 ? __jsx("p", {
    className: "ml-1"
  }, "No products were found matching your selection.") : '', data && data.products.total > 0 ? __jsx("div", {
    className: "toolbox toolbox-pagination justify-content-center"
  }, __jsx(_components_features_pagination__WEBPACK_IMPORTED_MODULE_6__/* .default */ .Z, {
    totalPage: totalPage
  })) : '');
}

/* harmony default export */ __webpack_exports__["Z"] = ((0,_server_apollo__WEBPACK_IMPORTED_MODULE_7__/* .default */ .Z)({
  ssr: true
})(ProductListOne));

/***/ })

};
;