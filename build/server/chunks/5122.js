exports.id = 5122;
exports.ids = [5122];
exports.modules = {

/***/ 957:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6731);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_features_custom_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8765);
/* harmony import */ var _utils_data_shop__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(129);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6442);

var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







function SidebarFilterThree() {
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
  const {
    0: isFirst,
    1: setFirst
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true);
  const query = router.query;
  const prices = [{
    min: '0',
    max: '50'
  }, {
    min: '50',
    max: '100'
  }, {
    min: '100',
    max: '200'
  }, {
    min: '200',
    max: ''
  }];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    window.addEventListener('resize', resizeHandler, false);
    document.querySelector("body").addEventListener("click", onBodyClick);
    return () => {
      window.removeEventListener('resize', resizeHandler);
      document.querySelector("body").removeEventListener("click", onBodyClick);
    };
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (isFirst) {
      setFirst(false);
    } else {
      (0,_utils__WEBPACK_IMPORTED_MODULE_4__/* .scrollTopHandler */ ._M)();
    }
  }, [query]);

  const containsAttrInUrl = (type, value) => {
    const currentQueries = query[type] ? query[type].split(',') : [];

    if (type === 'min_price' || type === 'max_price') {
      return currentQueries && (value === '' && currentQueries.length === 0 || currentQueries.includes(value));
    } else {
      return currentQueries && currentQueries.includes(value);
    }
  };

  const getUrlForAttrs = (type, value) => {
    let currentQueries = query[type] ? query[type].split(',') : [];

    if (type === 'min_price' || type === 'max_price') {
      currentQueries = currentQueries.length > 0 && currentQueries.includes(value) ? [] : [value];
    } else {
      currentQueries = containsAttrInUrl(type, value) ? currentQueries.filter(item => item !== value) : [...currentQueries, value];
    }

    return currentQueries.join(',');
  };

  const selectOptionHandler = function (e) {
    e.preventDefault();
    e.currentTarget.closest('.toolbox-item.select-menu').classList.toggle('opened');
  };

  function onBodyClick(e) {
    e.target.closest('.select-menu.opened') || document.querySelector('.select-menu.opened') && document.querySelector('.select-menu.opened').classList.remove('opened');
  }

  const hideSidebar = () => {
    document.querySelector('body').classList.remove("sidebar-active");
  };

  const resizeHandler = () => {
    document.querySelector('body').classList.remove("sidebar-active");
  };

  const selectFilterHandler = e => {
    setTimeout(() => {
      if (document.querySelector('.select-items').children.length > 1) {
        document.querySelector('.select-items').setAttribute('style', 'visibility: visible; opacity: 1; height: auto; margin-top: 2px; margin-bottom: 1.8rem');
      } else {
        document.querySelector('.select-items').setAttribute('style', '');
      }
    }, 100);
  };

  return __jsx("aside", {
    className: "sidebar shop-sidebar sidebar-fixed"
  }, __jsx("div", {
    className: "sidebar-overlay",
    onClick: hideSidebar
  }), __jsx(_components_features_custom_link__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, {
    className: "sidebar-close",
    href: "#",
    onClick: hideSidebar
  }, __jsx("i", {
    className: "d-icon-times"
  })), __jsx("div", {
    className: "sidebar-content toolbox-left"
  }, __jsx("div", {
    className: "toolbox-item select-menu"
  }, __jsx("a", {
    className: "select-menu-toggle",
    href: "#",
    onClick: selectOptionHandler
  }, "Select Size"), __jsx("ul", {
    className: "filter-items"
  }, _utils_data_shop__WEBPACK_IMPORTED_MODULE_3__/* .default.sizes.map */ .Z.sizes.map((item, index) => __jsx("li", {
    className: containsAttrInUrl('sizes', item.slug) ? 'active' : '',
    key: item + ' - ' + index,
    onClick: selectFilterHandler
  }, __jsx(_components_features_custom_link__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, {
    href: {
      pathname: router.pathname,
      query: _objectSpread(_objectSpread({}, query), {}, {
        page: 1,
        sizes: getUrlForAttrs('sizes', item.slug),
        type: router.query.type ? router.query.type : null
      })
    },
    scroll: false
  }, item.name))))), __jsx("div", {
    className: "toolbox-item select-menu"
  }, __jsx("a", {
    className: "select-menu-toggle",
    href: "#",
    onClick: selectOptionHandler
  }, "Select Color"), __jsx("ul", {
    className: "filter-items"
  }, _utils_data_shop__WEBPACK_IMPORTED_MODULE_3__/* .default.colors.map */ .Z.colors.map((item, index) => __jsx("li", {
    className: containsAttrInUrl('colors', item.slug) ? 'active' : '',
    key: item + ' - ' + index,
    onClick: selectFilterHandler
  }, __jsx(_components_features_custom_link__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, {
    href: {
      pathname: router.pathname,
      query: _objectSpread(_objectSpread({}, query), {}, {
        page: 1,
        colors: getUrlForAttrs('colors', item.slug),
        type: router.query.type ? router.query.type : null
      })
    },
    scroll: false
  }, item.name))))), __jsx("div", {
    className: "toolbox-item select-menu price-with-count"
  }, __jsx("a", {
    className: "select-menu-toggle",
    href: "#",
    onClick: selectOptionHandler
  }, "Select Price"), __jsx("ul", {
    className: "filter-items filter-price"
  }, prices.map((price, index) => __jsx("li", {
    className: containsAttrInUrl('min_price', price.min) && containsAttrInUrl('max_price', price.max) ? 'active' : '',
    key: "price-filter-" + index,
    onClick: selectFilterHandler
  }, __jsx(_components_features_custom_link__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, {
    href: {
      pathname: router.pathname,
      query: _objectSpread(_objectSpread({}, query), {}, {
        page: 1,
        min_price: getUrlForAttrs('min_price', price.min),
        max_price: getUrlForAttrs('max_price', price.max),
        type: router.query.type ? router.query.type : null
      })
    },
    scroll: false
  }, price.min === '' && price.max === '' ? 'All' : price.max === '' ? `$${price.min}.00 +` : `$${price.min}.00 - $${price.max}.00`)))))));
}

/* harmony default export */ __webpack_exports__["Z"] = (SidebarFilterThree);

/***/ }),

/***/ 5122:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ ToolBox; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6731);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_features_custom_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8765);
/* harmony import */ var _components_partials_shop_sidebar_sidebar_filter_three__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(957);

var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





function ToolBox(props) {
  const {
    type = "left"
  } = props;
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
  const query = router.query;
  const gridType = query.type ? query.type : 'grid';
  const sortBy = query.sortby ? query.sortby : 'default';
  const perPage = query.per_page ? query.per_page : 12;
  let tmp = 0;
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    window.addEventListener('scroll', stickyToolboxHandler);
    return () => {
      window.removeEventListener('scroll', stickyToolboxHandler);
    };
  }, []);

  const onChangeAttri = (e, attri) => {
    e.preventDefault();
    let url = router.pathname.replace('[grid]', query.grid);
    let arr = [`${attri}=${e.target.value}`, 'page=1'];

    for (let key in query) {
      if (key !== attri && key !== 'page' && key !== 'grid') arr.push(key + '=' + query[key]);
    }

    url = url + '?' + arr.join('&');
    router.push(url);
  };

  const showSidebar = () => {
    if (type === "navigation" && window.innerWidth > 991) {
      document.querySelector('.navigation-toggle-btn').click();
    } else {
      document.querySelector('body').classList.add(`${type === "left" || type === "off-canvas" || type === "navigation" || type === "horizontal" ? "sidebar-active" : "right-sidebar-active"}`);
    }
  };

  const stickyToolboxHandler = e => {
    let top = document.querySelector('.page-content') ? document.querySelector('.page-content').offsetTop + document.querySelector('header').offsetHeight + 100 : 600;
    let stickyToolbox = document.querySelector('.sticky-toolbox');
    let height = 0;

    if (stickyToolbox) {
      height = stickyToolbox.offsetHeight;
    }

    if (window.pageYOffset >= top && window.innerWidth < 768 && e.currentTarget.scrollY < tmp) {
      if (stickyToolbox) {
        stickyToolbox.classList.add('fixed');

        if (!document.querySelector('.sticky-toolbox-wrapper')) {
          let newNode = document.createElement("div");
          newNode.className = "sticky-toolbox-wrapper";
          stickyToolbox.parentNode.insertBefore(newNode, stickyToolbox);
          document.querySelector('.sticky-toolbox-wrapper').insertAdjacentElement('beforeend', stickyToolbox);
          document.querySelector('.sticky-toolbox-wrapper').setAttribute("style", "height: " + height + "px");
        }

        if (!document.querySelector('.sticky-toolbox-wrapper').getAttribute("style")) {
          document.querySelector('.sticky-toolbox-wrapper').setAttribute("style", "height: " + height + "px");
        }
      }
    } else {
      if (stickyToolbox) {
        stickyToolbox.classList.remove('fixed');
      }

      if (document.querySelector('.sticky-toolbox-wrapper')) {
        document.querySelector('.sticky-toolbox-wrapper').removeAttribute("style");
      }
    }

    if (window.outerWidth > 767 && document.querySelector('.sticky-toolbox-wrapper')) {
      document.querySelector('.sticky-toolbox-wrapper').style.height = 'auto';
    }

    tmp = e.currentTarget.scrollY;
  };

  return __jsx("nav", {
    className: `toolbox sticky-toolbox sticky-content fix-top ${type === "horizontal" ? 'toolbox-horizontal' : ''}`
  }, type === "horizontal" ? __jsx(_components_partials_shop_sidebar_sidebar_filter_three__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, null) : '', __jsx("div", {
    className: "toolbox-left"
  }, type === "left" || type === "off-canvas" || type === "navigation" || type === "horizontal" ? __jsx(_components_features_custom_link__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, {
    href: "#",
    className: `toolbox-item left-sidebar-toggle btn btn-outline btn-primary font-primary ${type === "navigation" ? "btn-icon-left btn-sm" : "btn-sm btn-icon-right"} ${type === "off-canvas" || type === "navigation" ? '' : "d-lg-none"}`,
    onClick: showSidebar
  }, type === "navigation" ? __jsx("i", {
    className: "d-icon-filter-2"
  }) : '', "Filter", type === "navigation" ? '' : __jsx("i", {
    className: "d-icon-arrow-right"
  })) : '', __jsx("div", {
    className: `toolbox-item toolbox-sort ${type === "boxed" || type === "banner" ? "select-box text-dark" : "select-menu"}`
  }, type === "boxed" || type === "banner" ? __jsx("label", null, "Sort By :") : '', __jsx("select", {
    name: "orderby",
    className: "form-control",
    defaultValue: query.sortby ? query.sortby : 'default',
    onChange: e => onChangeAttri(e, 'sortby')
  }, __jsx("option", {
    value: "default"
  }, "Default"), __jsx("option", {
    value: "popularity"
  }, "Most Popular"), __jsx("option", {
    value: "rating"
  }, "Average rating"), __jsx("option", {
    value: "date"
  }, "Latest"), __jsx("option", {
    value: "price-low"
  }, "Sort forward price low"), __jsx("option", {
    value: "price-high"
  }, "Sort forward price high"), __jsx("option", {
    value: ""
  }, "Clear custom sort")))), __jsx("div", {
    className: "toolbox-right"
  }, __jsx("div", {
    className: "toolbox-item toolbox-show select-box text-dark"
  }, __jsx("label", null, "Show :"), __jsx("select", {
    name: "count",
    className: "form-control",
    defaultValue: perPage,
    onChange: e => onChangeAttri(e, 'per_page')
  }, __jsx("option", {
    value: "12"
  }, "12"), __jsx("option", {
    value: "24"
  }, "24"), __jsx("option", {
    value: "36"
  }, "36"))), __jsx("div", {
    className: `toolbox-item toolbox-layout ${type === "right" ? "mr-lg-0" : ''}`
  }, __jsx(_components_features_custom_link__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, {
    href: {
      pathname: router.pathname,
      query: _objectSpread(_objectSpread({}, query), {}, {
        type: "list"
      })
    },
    scroll: false,
    className: `d-icon-mode-list btn-layout ${gridType === 'list' ? 'active' : ''}`
  }), __jsx(_components_features_custom_link__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, {
    href: {
      pathname: router.pathname,
      query: _objectSpread(_objectSpread({}, query), {}, {
        type: "grid"
      })
    },
    scroll: false,
    className: `d-icon-mode-grid btn-layout ${gridType !== 'list' ? 'active' : ''}`
  })), type === "right" ? __jsx(_components_features_custom_link__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, {
    href: "#",
    className: "toolbox-item right-sidebar-toggle btn btn-sm btn-outline btn-primary btn-rounded btn-icon-right d-lg-none",
    onClick: showSidebar
  }, "Filter", __jsx("i", {
    className: "d-icon-arrow-left"
  })) : ''));
}

/***/ }),

/***/ 129:
/***/ (function(__unused_webpack_module, __webpack_exports__) {

"use strict";
/* harmony default export */ __webpack_exports__["Z"] = ({
  sizes: [{
    name: "Extra Large",
    slug: 'xl',
    size: "XL"
  }, {
    name: "Large",
    slug: 'l',
    size: "L"
  }, {
    name: "Medium",
    slug: 'm',
    size: "M"
  }, {
    name: "Small",
    slug: 's',
    size: "S"
  }],
  colors: [{
    name: "Black",
    slug: 'black',
    color: "#333"
  }, {
    name: "Blue",
    slug: 'blue',
    color: "#1e73be"
  }, {
    name: "Brown",
    slug: 'brown',
    color: "#9e6924"
  }, {
    name: "Green",
    slug: 'green',
    color: "#56962e"
  }],
  brands: [{
    name: "Cinderella",
    slug: "cinderella"
  }, {
    name: "Comedy",
    slug: "comedy"
  }, {
    name: "RightCheck",
    slug: "rightcheck"
  }, {
    name: "SkillStar",
    slug: "skillstar"
  }, {
    name: "SLS",
    slug: "sls"
  }],
  tag: [{
    name: "Bag",
    slug: "bag"
  }, {
    name: "Classic",
    slug: "classic"
  }, {
    name: "Converse",
    slug: "converse"
  }, {
    name: "Fit",
    slug: "fit"
  }, {
    name: "Green",
    slug: "green"
  }, {
    name: "Jack and Jones",
    slug: "jack-and-jones"
  }, {
    name: "Jeans",
    slug: "jeans"
  }, {
    name: "Jumper",
    slug: "jumper"
  }, {
    name: "Leather",
    slug: "leather"
  }, {
    name: "Diesel",
    slug: "diesel"
  }, {
    name: "Man",
    slug: "man"
  }]
});

/***/ })

};
;