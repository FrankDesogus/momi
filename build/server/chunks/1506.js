exports.id = 1506;
exports.ids = [1506];
exports.modules = {

/***/ 1506:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6731);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7530);
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_input_range__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4766);
/* harmony import */ var react_input_range__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_input_range__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_features_custom_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8765);
/* harmony import */ var _components_features_accordion_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2674);
/* harmony import */ var _components_features_owl_carousel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4138);
/* harmony import */ var _components_features_product_product_sm__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5379);
/* harmony import */ var _server_apollo__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(5438);
/* harmony import */ var _server_queries__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(4733);
/* harmony import */ var react_slide_toggle__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(3920);
/* harmony import */ var react_slide_toggle__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_slide_toggle__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _utils_data_shop__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(129);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(6442);

var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }















function SidebarFilterOne(props) {
  const {
    type = "left",
    isFeatured = false
  } = props;
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
  const query = router.query;
  const {
    data,
    loading,
    error
  } = (0,_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2__.useQuery)(_server_queries__WEBPACK_IMPORTED_MODULE_9__/* .GET_SHOP_SIDEBAR_DATA */ .EP, {
    variables: {
      demo: 1,
      featured: true
    }
  });
  let tmpPrice = {
    max: query.max_price ? parseInt(query.max_price) : 1000,
    min: query.min_price ? parseInt(query.min_price) : 0
  };
  const {
    0: filterPrice,
    1: setPrice
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(tmpPrice);
  const {
    0: isFirst,
    1: setFirst
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true);
  let sidebarData = data && data.shopSidebarData;
  let timerId;
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    window.addEventListener('resize', hideSidebar);
    return () => {
      window.removeEventListener('resize', hideSidebar);
    };
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    setPrice({
      max: query.max_price ? parseInt(query.max_price) : 1000,
      min: query.min_price ? parseInt(query.min_price) : 0
    });

    if (isFirst) {
      setFirst(false);
    } else {
      (0,_utils__WEBPACK_IMPORTED_MODULE_12__/* .scrollTopHandler */ ._M)();
    }
  }, [query]);

  const filterByPrice = e => {
    e.preventDefault();
    let url = router.pathname.replace('[grid]', query.grid);
    let arr = [`min_price=${filterPrice.min}`, `max_price=${filterPrice.max}`, 'page=1'];

    for (let key in query) {
      if (key !== 'min_price' && key !== 'max_price' && key !== 'page' && key !== 'grid') arr.push(key + '=' + query[key]);
    }

    url = url + '?' + arr.join('&');
    router.push(url);
  };

  const containsAttrInUrl = (type, value) => {
    const currentQueries = query[type] ? query[type].split(',') : [];
    return currentQueries && currentQueries.includes(value);
  };

  const getUrlForAttrs = (type, value) => {
    let currentQueries = query[type] ? query[type].split(',') : [];
    currentQueries = containsAttrInUrl(type, value) ? currentQueries.filter(item => item !== value) : [...currentQueries, value];
    return currentQueries.join(',');
  };

  const onChangePrice = value => {
    setPrice(value);
  };

  const toggleSidebar = e => {
    e.preventDefault();
    document.querySelector('body').classList.remove(`${type === "left" || type === "off-canvas" ? "sidebar-active" : "right-sidebar-active"}`);
    let stickyWraper = e.currentTarget.closest('.sticky-sidebar-wrapper');
    let mainContent = e.currentTarget.closest('.main-content-wrap');
    if (mainContent && type !== "off-canvas" && query.grid !== '4cols') mainContent.querySelector('.row.product-wrapper') && mainContent.querySelector('.row.product-wrapper').classList.toggle('cols-md-4');

    if (mainContent && stickyWraper) {
      stickyWraper.classList.toggle('closed');

      if (stickyWraper.classList.contains('closed')) {
        mainContent.classList.add('overflow-hidden');
        clearTimeout(timerId);
      } else {
        timerId = setTimeout(() => {
          mainContent.classList.remove('overflow-hidden');
        }, 500);
      }
    }
  };

  const showSidebar = e => {
    e.preventDefault();
    document.querySelector('body').classList.add("sidebar-active");
  };

  const hideSidebar = () => {
    document.querySelector('body').classList.remove(`${type === "left" || type === "off-canvas" || type === "boxed" || type === "banner" ? "sidebar-active" : "right-sidebar-active"}`);
  };

  return __jsx("aside", {
    className: `col-lg-3 shop-sidebar skeleton-body ${type === "off-canvas" ? '' : "sidebar-fixed sticky-sidebar-wrapper"} ${type === "off-canvas" || type === "boxed" ? '' : "sidebar-toggle-remain"} ${type === "left" || type === "off-canvas" || type === "boxed" || type === "banner" ? "sidebar" : "right-sidebar"}`
  }, __jsx("div", {
    className: "sidebar-overlay",
    onClick: hideSidebar
  }), type === "boxed" || type === "banner" ? __jsx("a", {
    href: "#",
    className: "sidebar-toggle",
    onClick: showSidebar
  }, __jsx("i", {
    className: "fas fa-chevron-right"
  })) : '', __jsx(_components_features_custom_link__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z, {
    className: "sidebar-close",
    href: "#",
    onClick: hideSidebar
  }, __jsx("i", {
    className: "d-icon-times"
  })), __jsx("div", {
    className: "sidebar-content"
  }, !loading && sidebarData ? __jsx("div", {
    className: "sticky-sidebar"
  }, type === "boxed" || type === "banner" ? '' : __jsx("div", {
    className: "filter-actions mb-4"
  }, __jsx("a", {
    href: "#",
    className: "sidebar-toggle-btn toggle-remain btn btn-outline btn-primary btn-icon-right btn-rounded",
    onClick: toggleSidebar
  }, "Filter", type === "left" || type === "off-canvas" ? __jsx("i", {
    className: "d-icon-arrow-left"
  }) : __jsx("i", {
    className: "d-icon-arrow-right"
  })), __jsx(_components_features_custom_link__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z, {
    href: {
      pathname: router.pathname,
      query: {
        grid: query.grid,
        type: router.query.type ? router.query.type : null
      }
    },
    scroll: false,
    className: "filter-clean"
  }, "Clean All")), __jsx("div", {
    className: "widget widget-collapsible"
  }, __jsx(_components_features_accordion_card__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z, {
    title: "<h3 class='widget-title'>All Categories<span class='toggle-btn p-0 parse-content'></span></h3>",
    type: "parse",
    expanded: true
  }, __jsx("ul", {
    className: "widget-body filter-items search-ul"
  }, data && sidebarData.categories.map((item, index) => item.children ? __jsx("li", {
    key: item.name + ' - ' + index,
    className: `with-ul overflow-hidden ${item.slug === query.category || item.children.findIndex(subCat => subCat.slug === query.category) > -1 ? 'show' : ''} `
  }, __jsx((react_slide_toggle__WEBPACK_IMPORTED_MODULE_10___default()), {
    collapsed: true
  }, ({
    onToggle,
    setCollapsibleElement,
    toggleState
  }) => __jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, __jsx(_components_features_custom_link__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z, {
    href: {
      pathname: router.pathname,
      query: {
        category: item.slug,
        grid: query.grid,
        type: router.query.type ? router.query.type : null
      }
    },
    scroll: false
  }, item.name, __jsx("i", {
    className: `fas fa-chevron-down ${toggleState.toLowerCase()}`,
    onClick: e => {
      onToggle();
      e.stopPropagation();
      e.preventDefault();
    }
  })), __jsx("div", {
    ref: setCollapsibleElement
  }, __jsx("div", null, __jsx("ul", {
    style: {
      display: "block"
    }
  }, item.children.map((subItem, index) => __jsx("li", {
    key: subItem.name + ' - ' + index,
    className: `with-ul ${subItem.slug === query.category ? 'show' : ''} `
  }, __jsx(_components_features_custom_link__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z, {
    scroll: false,
    href: {
      pathname: router.pathname,
      query: {
        category: subItem.slug,
        grid: query.grid,
        type: router.query.type ? router.query.type : null
      }
    }
  }, subItem.name))))))))) : __jsx("li", {
    className: query.category === item.slug ? 'show' : '',
    key: item.name + ' - ' + index
  }, __jsx(_components_features_custom_link__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z, {
    href: {
      pathname: router.pathname,
      query: {
        category: item.slug,
        grid: query.grid,
        type: router.query.type ? router.query.type : null
      }
    },
    scroll: false
  }, item.name)))))), __jsx("div", {
    className: "widget widget-collapsible"
  }, __jsx(_components_features_accordion_card__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z, {
    title: "<h3 class='widget-title'>Filter by Price<span class='toggle-btn p-0 parse-content'></span></h3>",
    type: "parse",
    expanded: true
  }, __jsx("div", {
    className: "widget-body"
  }, __jsx("form", {
    action: "#"
  }, __jsx("div", {
    className: "filter-price-slider noUi-target noUi-ltr noUi-horizontal shop-input-range"
  }, __jsx((react_input_range__WEBPACK_IMPORTED_MODULE_3___default()), {
    formatLabel: value => `$${value}`,
    maxValue: 1000,
    minValue: 0,
    step: 50,
    value: filterPrice,
    onChange: onChangePrice
  })), __jsx("div", {
    className: "filter-actions"
  }, __jsx("div", {
    className: "filter-price-text mb-4"
  }, "Price: $", filterPrice.min, " - $", filterPrice.max, __jsx("span", {
    className: "filter-price-range"
  })), __jsx("button", {
    className: "btn btn-dark btn-filter btn-rounded",
    onClick: filterByPrice
  }, "Filter")))))), __jsx("div", {
    className: "widget widget-collapsible"
  }, __jsx(_components_features_accordion_card__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z, {
    title: "<h3 class='widget-title'>Size<span class='toggle-btn p-0 parse-content'></span></h3>",
    type: "parse",
    expanded: true
  }, __jsx("ul", {
    className: "widget-body filter-items"
  }, _utils_data_shop__WEBPACK_IMPORTED_MODULE_11__/* .default.sizes.map */ .Z.sizes.map((item, index) => __jsx("li", {
    className: containsAttrInUrl('sizes', item.slug) ? 'active' : '',
    key: item + ' - ' + index
  }, __jsx(_components_features_custom_link__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z, {
    scroll: false,
    href: {
      pathname: router.pathname,
      query: _objectSpread(_objectSpread({}, query), {}, {
        page: 1,
        sizes: getUrlForAttrs('sizes', item.slug),
        type: router.query.type ? router.query.type : null
      })
    }
  }, item.name)))))), __jsx("div", {
    className: "widget widget-collapsible"
  }, __jsx(_components_features_accordion_card__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z, {
    title: "<h3 class='widget-title'>Color<span class='toggle-btn p-0 parse-content'></span></h3>",
    type: "parse",
    expanded: true
  }, __jsx("ul", {
    className: "widget-body filter-items"
  }, _utils_data_shop__WEBPACK_IMPORTED_MODULE_11__/* .default.colors.map */ .Z.colors.map((item, index) => __jsx("li", {
    className: containsAttrInUrl('colors', item.slug) ? 'active' : '',
    key: item + ' - ' + index
  }, __jsx(_components_features_custom_link__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z, {
    scroll: false,
    href: {
      pathname: router.pathname,
      query: _objectSpread(_objectSpread({}, query), {}, {
        page: 1,
        colors: getUrlForAttrs('colors', item.slug),
        type: router.query.type ? router.query.type : null
      })
    }
  }, item.name)))))), __jsx("div", {
    className: "widget widget-collapsible"
  }, __jsx(_components_features_accordion_card__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z, {
    title: "<h3 class='widget-title'>Brand<span class='toggle-btn p-0 parse-content'></span></h3>",
    type: "parse",
    expanded: true
  }, __jsx("ul", {
    className: "widget-body filter-items"
  }, _utils_data_shop__WEBPACK_IMPORTED_MODULE_11__/* .default.brands.map */ .Z.brands.map((item, index) => __jsx("li", {
    className: containsAttrInUrl('brands', item.slug) ? 'active' : '',
    key: item + ' - ' + index
  }, __jsx(_components_features_custom_link__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z, {
    scroll: false,
    href: {
      pathname: router.pathname,
      query: _objectSpread(_objectSpread({}, query), {}, {
        page: 1,
        brands: getUrlForAttrs('brands', item.slug),
        type: router.query.type ? router.query.type : null
      })
    }
  }, item.name)))))), isFeatured ? __jsx("div", {
    className: "widget widget-products widget-collapsible"
  }, __jsx("h4", {
    className: "widget-title"
  }, "Our Featured"), __jsx("div", {
    className: "widget-body"
  }, __jsx(_components_features_owl_carousel__WEBPACK_IMPORTED_MODULE_6__/* .default */ .Z, {
    adClass: "owl-nav-top"
  }, __jsx("div", {
    className: "products-col"
  }, sidebarData.featured.slice(0, 3).map((item, index) => __jsx(_components_features_product_product_sm__WEBPACK_IMPORTED_MODULE_7__/* .default */ .Z, {
    product: item,
    key: item.name + ' - ' + index
  }))), __jsx("div", {
    className: "products-col"
  }, sidebarData.featured.slice(3, 6).map((item, index) => __jsx(_components_features_product_product_sm__WEBPACK_IMPORTED_MODULE_7__/* .default */ .Z, {
    product: item,
    key: item.name + ' - ' + index
  })))))) : '') : __jsx("div", {
    className: "widget-2 mt-10 pt-5"
  })));
}

/* harmony default export */ __webpack_exports__["Z"] = ((0,_server_apollo__WEBPACK_IMPORTED_MODULE_8__/* .default */ .Z)({
  ssr: true
})(SidebarFilterOne));

/***/ })

};
;