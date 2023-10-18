(function() {
var exports = {};
exports.id = 4800;
exports.ids = [4800,3866];
exports.modules = {

/***/ 7968:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ shop; }
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: external "react-helmet"
var external_react_helmet_ = __webpack_require__(6481);
// EXTERNAL MODULE: ./components/features/custom-link.jsx
var custom_link = __webpack_require__(8765);
// EXTERNAL MODULE: ./components/partials/shop/sidebar/sidebar-filter-two.jsx
var sidebar_filter_two = __webpack_require__(1518);
// EXTERNAL MODULE: ./components/partials/shop/product-list/product-list-one.jsx
var product_list_one = __webpack_require__(1496);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(6731);
// EXTERNAL MODULE: ./components/partials/shop/sidebar/sidebar-filter-three.jsx
var sidebar_filter_three = __webpack_require__(957);
;// CONCATENATED MODULE: ./components/partials/shop/toolbox-two.jsx

var __jsx = (external_react_default()).createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





function ToolBoxTwo(props) {
  const {
    type = "left"
  } = props;
  const router = (0,router_.useRouter)();
  const query = router.query;
  const gridType = query.type ? query.type : 'grid';
  const sortBy = query.sortby ? query.sortby : 'default';
  const perPage = query.per_page ? query.per_page : 12;
  let tmp = 0;
  (0,external_react_.useEffect)(() => {
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
  }, type === "horizontal" ? __jsx(sidebar_filter_three/* default */.Z, null) : '', __jsx("div", {
    className: "toolbox-left"
  }, type === "left" || type === "off-canvas" || type === "navigation" || type === "horizontal" ? __jsx(custom_link/* default */.Z, {
    href: "#",
    className: `toolbox-item shop-toolbox-item  left-sidebar-toggle btn btn-outline btn-primary font-primary ${type === "navigation" ? "btn-icon-left btn-sm" : "btn-sm btn-icon-right"} ${type === "off-canvas" || type === "navigation" ? '' : "d-lg-none"}`,
    onClick: showSidebar
  }, type === "navigation" ? __jsx("i", {
    className: "d-icon-filter-2"
  }) : '', "Filter", type === "navigation" ? '' : __jsx("i", {
    className: "d-icon-arrow-right"
  })) : '', __jsx("p", {
    className: "toolbox-item show-info mr-sm-auto"
  }, "Showing ", __jsx("span", null, " 12 of ", props.totalCount, " "), " Products")), __jsx("div", {
    className: "toolbox-right"
  }, __jsx("div", {
    className: "toolbox-item toolbox-sort select-box"
  }, __jsx("label", null, "Sort By :"), __jsx("select", {
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
  }, "Clear custom sort"))), __jsx("div", {
    className: `toolbox-item toolbox-layout ${type === "right" ? "mr-lg-0" : ''}`
  }, __jsx(custom_link/* default */.Z, {
    href: {
      pathname: router.pathname,
      query: _objectSpread(_objectSpread({}, query), {}, {
        type: "list"
      })
    },
    scroll: false,
    className: `d-icon-mode-list btn-layout ${gridType === 'list' ? 'active' : ''}`
  }), __jsx(custom_link/* default */.Z, {
    href: {
      pathname: router.pathname,
      query: _objectSpread(_objectSpread({}, query), {}, {
        type: "grid"
      })
    },
    scroll: false,
    className: `d-icon-mode-grid btn-layout ${gridType !== 'list' ? 'active' : ''}`
  })), type === "right" ? __jsx(custom_link/* default */.Z, {
    href: "#",
    className: "toolbox-item right-sidebar-toggle btn btn-sm btn-outline btn-primary btn-rounded btn-icon-right d-lg-none",
    onClick: showSidebar
  }, "Filter", __jsx("i", {
    className: "d-icon-arrow-left"
  })) : ''));
}
// EXTERNAL MODULE: external "react-slide-toggle"
var external_react_slide_toggle_ = __webpack_require__(3920);
var external_react_slide_toggle_default = /*#__PURE__*/__webpack_require__.n(external_react_slide_toggle_);
;// CONCATENATED MODULE: ./pages/shop/index.jsx
var shop_jsx = (external_react_default()).createElement;








function Shop() {
  let expanded = false;
  const {
    0: totalCount,
    1: setTotalCount
  } = (0,external_react_.useState)(12);

  const changeTotal = count => {
    setTotalCount(count);
  };

  return shop_jsx("main", {
    className: "main navigation-filter"
  }, shop_jsx(external_react_helmet_.Helmet, null, shop_jsx("title", null, "Riode React eCommerce Template - Shop")), shop_jsx("h1", {
    className: "d-none"
  }, "Riode React eCommerce Template - Shop"), shop_jsx("div", {
    className: "page-header",
    style: {
      backgroundImage: `url(images/home/page-header.jpg)`,
      backgroundColor: "#584B3B"
    }
  }, shop_jsx("h1", {
    className: "page-title font-secondary font-weight-bold ls-m"
  }, "Riode Shop"), shop_jsx("ul", {
    className: "breadcrumb"
  }, shop_jsx("li", null, shop_jsx(custom_link/* default */.Z, {
    href: "/"
  }, "Home")), shop_jsx("li", {
    className: "delimiter"
  }, shop_jsx("i", {
    className: "fas fa-angle-right"
  })), shop_jsx("li", null, "Riode Shop"))), shop_jsx("div", {
    className: "page-content mb-10 pb-2"
  }, shop_jsx("div", {
    className: "container-fluid"
  }, shop_jsx("div", {
    className: "toolbox-wrap"
  }, shop_jsx((external_react_slide_toggle_default()), {
    collapsed: expanded ? false : true
  }, ({
    onToggle,
    setCollapsibleElement,
    toggleState
  }) => shop_jsx("div", {
    className: `card navigation-card ${toggleState.toLowerCase()}`
  }, shop_jsx("div", {
    className: "card-header",
    onClick: onToggle
  }, shop_jsx("span", {
    className: "toggle"
  }, shop_jsx("span", {
    className: "navigation-toggle-btn d-none"
  }, "toggle button"))), shop_jsx("div", {
    ref: setCollapsibleElement
  }, shop_jsx("div", {
    className: `card-body p-0 ${toggleState.toLowerCase()}`
  }, shop_jsx(sidebar_filter_two/* default */.Z, null))))), shop_jsx(ToolBoxTwo, {
    type: "navigation",
    totalCount: totalCount
  })), shop_jsx(product_list_one/* default */.Z, {
    isToolbox: false,
    itemsPerRow: 6,
    changeTotal: changeTotal
  }))));
}

/* harmony default export */ var shop = (/*#__PURE__*/external_react_default().memo(Shop));

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

/***/ 9290:
/***/ (function(module) {

"use strict";
module.exports = require("react-lazy-load-image-component");;

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
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, [1664,5588,5961,6090,5708,6723,4246,2078,4298,5122,1496,1518], function() { return __webpack_exec__(7968); });
module.exports = __webpack_exports__;

})();