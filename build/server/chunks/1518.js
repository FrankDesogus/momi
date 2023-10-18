exports.id = 1518;
exports.ids = [1518];
exports.modules = {

/***/ 1518:
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







function SidebarFilterTwo() {
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
  const {
    0: isFirst,
    1: setFirst
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true);
  const query = router.query;
  let timerId;
  const prices = [{
    min: '',
    max: ''
  }, {
    min: '0',
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
    return () => {
      window.removeEventListener('resize', resizeHandler);
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

  const toggleSidebar = e => {
    e.preventDefault();
    document.querySelector('body').classList.remove("sidebar-active");
    let stickyWraper = e.currentTarget.closest('.sticky-sidebar-wrapper');
    let mainContent = e.currentTarget.closest('.main-content-wrap');
    if (mainContent && type !== "off-canvas") mainContent.querySelector('.product-wrapper').classList.toggle('cols-md-4');

    if (stickyWraper) {
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

  const hideSidebar = () => {
    document.querySelector('body').classList.remove("sidebar-active");
  };

  const resizeHandler = () => {
    document.querySelector('body').classList.remove("sidebar-active");
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
    className: "sidebar-content pb-0 pb-lg-4"
  }, __jsx("div", null, __jsx("div", {
    className: "filter-actions"
  }, __jsx("a", {
    href: "#",
    className: "sidebar-toggle-btn toggle-remain btn btn-sm btn-outline btn-primary",
    onClick: toggleSidebar
  }, "Filter", __jsx("i", {
    className: "d-icon-arrow-left"
  })), __jsx(_components_features_custom_link__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, {
    href: {
      pathname: router.pathname,
      query: {
        type: router.query.type ? router.query.type : null
      }
    },
    className: "filter-clean text-primary",
    scroll: false,
    style: {
      opacity: 1
    }
  }, "Clean All")), __jsx("div", {
    className: "row cols-lg-4"
  }, __jsx("div", {
    className: "widget"
  }, __jsx("h3", {
    className: "widget-title border-no"
  }, "Size"), __jsx("ul", {
    className: "widget-body filter-items"
  }, _utils_data_shop__WEBPACK_IMPORTED_MODULE_3__/* .default.sizes.map */ .Z.sizes.map((item, index) => __jsx("li", {
    className: containsAttrInUrl('sizes', item.slug) ? 'active' : '',
    key: item + ' - ' + index
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
    className: "widget"
  }, __jsx("h3", {
    className: "widget-title border-no"
  }, "Color"), __jsx("ul", {
    className: "widget-body filter-items"
  }, _utils_data_shop__WEBPACK_IMPORTED_MODULE_3__/* .default.colors.map */ .Z.colors.map((item, index) => __jsx("li", {
    className: containsAttrInUrl('colors', item.slug) ? 'active' : '',
    key: item + ' - ' + index
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
    className: "widget price-with-count"
  }, __jsx("h3", {
    className: "widget-title border-no"
  }, "Price"), __jsx("ul", {
    className: "widget-body filter-items filter-price"
  }, prices.map((price, index) => __jsx("li", {
    className: containsAttrInUrl('min_price', price.min) && containsAttrInUrl('max_price', price.max) ? 'active' : '',
    key: "price-filter-" + index
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
  }, price.min === '' && price.max === '' ? 'All' : price.max === '' ? `$${price.min}.00 +` : `$${price.min}.00 - $${price.max}.00`))))), __jsx("div", {
    className: "widget"
  }, __jsx("h3", {
    className: "widget-title border-no"
  }, "Tags"), __jsx("div", {
    className: "widget-body pt-2"
  }, _utils_data_shop__WEBPACK_IMPORTED_MODULE_3__/* .default.tag.map */ .Z.tag.map((item, index) => __jsx(_components_features_custom_link__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, {
    scroll: false,
    href: {
      pathname: router.pathname,
      query: _objectSpread(_objectSpread({}, query), {}, {
        page: 1,
        tag: getUrlForAttrs('tag', item.slug),
        type: router.query.type ? router.query.type : null
      })
    },
    className: `${containsAttrInUrl('tag', item.slug) ? 'active' : ''} tag`,
    key: "tag-" + index
  }, item.name))))))));
}

/* harmony default export */ __webpack_exports__["Z"] = (SidebarFilterTwo);

/***/ })

};
;