(function() {
var exports = {};
exports.id = 6571;
exports.ids = [6571,3866];
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

/***/ 4755:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6481);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_tabs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7659);
/* harmony import */ var react_tabs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_tabs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_features_breadcrumb__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4699);
/* harmony import */ var _components_partials_elements_elements_list__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3405);
var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);






function Icons() {
  return __jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, __jsx((react_helmet__WEBPACK_IMPORTED_MODULE_1___default()), null, __jsx("title", null, "Riode React eCommerce Template | Icons")), __jsx("h1", {
    className: "d-none"
  }, "Riode React eCommerce Template - Icons"), __jsx(_components_features_breadcrumb__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {
    subTitle: "Elements",
    title: "Element Icons",
    parentUrl: "/elements"
  }), __jsx("div", {
    className: "page-content mt-10 pt-3"
  }, __jsx("section", {
    className: "sample-icons container"
  }, __jsx("div", {
    className: "title-wrap mb-6"
  }, __jsx("h3", {
    className: "title title-center mb-2"
  }, "Icons"), __jsx("p", {
    className: "text-center"
  }, "Riode comes with Riode Icons and ", __jsx("a", {
    href: "https://fontawesome.com/icons",
    target: "_blank",
    rel: "noopener noreferrer",
    className: "text-primary"
  }, "Font Awesome 5 Icons "), " that can be used in your website.")), __jsx("div", {
    className: "row cols-xl-12 cols-md-6 cols-xs-4 cols-3 mb-4"
  }, __jsx("div", {
    className: "sample-icon-circle"
  }, __jsx("i", {
    className: "d-icon-officebag"
  })), __jsx("div", {
    className: "sample-icon-circle"
  }, __jsx("i", {
    className: "d-icon-basketball1"
  })), __jsx("div", {
    className: "sample-icon-circle"
  }, __jsx("i", {
    className: "d-icon-desktop"
  })), __jsx("div", {
    className: "sample-icon-circle"
  }, __jsx("i", {
    className: "d-icon-headphone"
  })), __jsx("div", {
    className: "sample-icon-circle"
  }, __jsx("i", {
    className: "d-icon-cook"
  })), __jsx("div", {
    className: "sample-icon-circle"
  }, __jsx("i", {
    className: "d-icon-backpack"
  })), __jsx("div", {
    className: "sample-icon-circle"
  }, __jsx("i", {
    className: "d-icon-gamepad1"
  })), __jsx("div", {
    className: "sample-icon-circle"
  }, __jsx("i", {
    className: "d-icon-camera2"
  })), __jsx("div", {
    className: "sample-icon-circle"
  }, __jsx("i", {
    className: "d-icon-tcard"
  })), __jsx("div", {
    className: "sample-icon-circle"
  }, __jsx("i", {
    className: "d-icon-camera2"
  })), __jsx("div", {
    className: "sample-icon-circle"
  }, __jsx("i", {
    className: "d-icon-category"
  })), __jsx("div", {
    className: "sample-icon-circle"
  }, __jsx("i", {
    className: "d-icon-ball"
  }))), __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_2__.Tabs, {
    selectedTabClassName: "show",
    selectedTabPanelClassName: "active",
    defaultIndex: 0,
    className: "tab tab-boxed tab-nav-boxed tab-outline"
  }, __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_2__.TabList, {
    className: "nav nav-tabs",
    role: "tablist"
  }, __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_2__.Tab, {
    className: "nav-item"
  }, __jsx("a", {
    className: "nav-link"
  }, "Riode Icons")), __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_2__.Tab, {
    className: "nav-item"
  }, __jsx("a", {
    className: "nav-link"
  }, "Font Awesome"))), __jsx("div", {
    className: "tab-content"
  }, __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_2__.TabPanel, {
    className: "tab-pane pb-2"
  }, __jsx("div", {
    className: "row cols-lg-4 sample-icon-list"
  }, __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "d-icon-truck"
  }), __jsx("span", {
    className: "name"
  }, "d-icon-truck")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "d-icon-service"
  }), __jsx("span", {
    className: "name"
  }, "d-icon-service")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "d-icon-secure"
  }), __jsx("span", {
    className: "name"
  }, "d-icon-secure")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "d-icon-lock"
  }), __jsx("span", {
    className: "name"
  }, "d-icon-lock")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "d-icon-percent"
  }), __jsx("span", {
    className: "name"
  }, "d-icon-percent")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "d-icon-layer"
  }), __jsx("span", {
    className: "name"
  }, "d-icon-layer")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "d-icon-alert"
  }), __jsx("span", {
    className: "name"
  }, "d-icon-alert")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "d-icon-database"
  }), __jsx("span", {
    className: "name"
  }, "d-icon-database")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "d-icon-money"
  }), __jsx("span", {
    className: "name"
  }, "d-icon-money")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "d-icon-shoppingbag"
  }), __jsx("span", {
    className: "name"
  }, "d-icon-shoppingbag")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "d-icon-t-shirt1"
  }), __jsx("span", {
    className: "name"
  }, "d-icon-t-shirt1")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "d-icon-t-shirt2"
  }), __jsx("span", {
    className: "name"
  }, "d-icon-t-shirt2")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "d-icon-hat"
  }), __jsx("span", {
    className: "name"
  }, "d-icon-hat")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "d-icon-officebag"
  }), __jsx("span", {
    className: "name"
  }, "d-icon-officebag")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "d-icon-handbag"
  }), __jsx("span", {
    className: "name"
  }, "d-icon-handbag")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "d-icon-backpack"
  }), __jsx("span", {
    className: "name"
  }, "d-icon-backpack")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "d-icon-shoes"
  }), __jsx("span", {
    className: "name"
  }, "d-icon-shoes")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "d-icon-pillow"
  }), __jsx("span", {
    className: "name"
  }, "d-icon-pillow")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "d-icon-dress"
  }), __jsx("span", {
    className: "name"
  }, "d-icon-dress")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "d-icon-loungewear"
  }), __jsx("span", {
    className: "name"
  }, "d-icon-loungewear")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "d-icon-desktop"
  }), __jsx("span", {
    className: "name"
  }, "d-icon-desktop")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "d-icon-laptop"
  }), __jsx("span", {
    className: "name"
  }, "d-icon-laptop")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "d-icon-gamepad1"
  }), __jsx("span", {
    className: "name"
  }, "d-icon-gamepad1")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "d-icon-wireless"
  }), __jsx("span", {
    className: "name"
  }, "d-icon-wireless")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "d-icon-projector"
  }), __jsx("span", {
    className: "name"
  }, "d-icon-projector")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "d-icon-drone1"
  }), __jsx("span", {
    className: "name"
  }, "d-icon-drone1")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "d-icon-drone2"
  }), __jsx("span", {
    className: "name"
  }, "d-icon-drone2")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "d-icon-radio"
  }), __jsx("span", {
    className: "name"
  }, "d-icon-radio")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "d-icon-battery"
  }), __jsx("span", {
    className: "name"
  }, "d-icon-battery")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "d-icon-plugin"
  }), __jsx("span", {
    className: "name"
  }, "d-icon-plugin")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "d-icon-memory"
  }), __jsx("span", {
    className: "name"
  }, "d-icon-memory")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "d-icon-ball"
  }), __jsx("span", {
    className: "name"
  }, "d-icon-ball")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "d-icon-basketball1"
  }), __jsx("span", {
    className: "name"
  }, "d-icon-basketball1")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "d-icon-babycare"
  }), __jsx("span", {
    className: "name"
  }, "d-icon-babycare")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "d-icon-card"
  }), __jsx("span", {
    className: "name"
  }, "d-icon-card")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "d-icon-gamepad2"
  }), __jsx("span", {
    className: "name"
  }, "d-icon-gamepad2")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "d-icon-camera1"
  }), __jsx("span", {
    className: "name"
  }, "d-icon-camera1")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "d-icon-camera2"
  }), __jsx("span", {
    className: "name"
  }, "d-icon-camera2")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "d-icon-babywear"
  }), __jsx("span", {
    className: "name"
  }, "d-icon-babywear")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "d-icon-abacus"
  }), __jsx("span", {
    className: "name"
  }, "d-icon-abacus")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "d-icon-pot"
  }), __jsx("span", {
    className: "name"
  }, "d-icon-pot")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "d-icon-freezer"
  }), __jsx("span", {
    className: "name"
  }, "d-icon-freezer")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "d-icon-cook"
  }), __jsx("span", {
    className: "name"
  }, "d-icon-cook")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "d-icon-student"
  }), __jsx("span", {
    className: "name"
  }, "d-icon-student")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "d-icon-category"
  }), __jsx("span", {
    className: "name"
  }, "d-icon-category")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "d-icon-basketball2"
  }), __jsx("span", {
    className: "name"
  }, "d-icon-basketball2")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "d-icon-watch"
  }), __jsx("span", {
    className: "name"
  }, "d-icon-watch")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "d-icon-tcard"
  }), __jsx("span", {
    className: "name"
  }, "d-icon-tcard")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "d-icon-heartbeat"
  }), __jsx("span", {
    className: "name"
  }, "d-icon-heartbeat")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "d-icon-watch-round"
  }), __jsx("span", {
    className: "name"
  }, "d-icon-watch-round")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "d-icon-washbowl"
  }), __jsx("span", {
    className: "name"
  }, "d-icon-washbowl")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "d-icon-bridge-lamp"
  }), __jsx("span", {
    className: "name"
  }, "d-icon-bridge-lamp")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "d-icon-lamp"
  }), __jsx("span", {
    className: "name"
  }, "d-icon-lamp")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "d-icon-sofa"
  }), __jsx("span", {
    className: "name"
  }, "d-icon-sofa")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "d-icon-sofa2"
  }), __jsx("span", {
    className: "name"
  }, "d-icon-sofa2")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "d-icon-bed"
  }), __jsx("span", {
    className: "name"
  }, "d-icon-bed")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "d-icon-table"
  }), __jsx("span", {
    className: "name"
  }, "d-icon-table")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "d-icon-table-lamp"
  }), __jsx("span", {
    className: "name"
  }, "d-icon-table-lamp")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "d-icon-table-tv"
  }), __jsx("span", {
    className: "name"
  }, "d-icon-table-tv")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "d-icon-mirror"
  }), __jsx("span", {
    className: "name"
  }, "d-icon-mirror")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "d-icon-volume"
  }), __jsx("span", {
    className: "name"
  }, "d-icon-volume")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "d-icon-bars2"
  }), __jsx("span", {
    className: "name"
  }, "d-icon-bars2")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "d-icon-bars"
  }), __jsx("span", {
    className: "name"
  }, "d-icon-bars")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "d-icon-phone"
  }), __jsx("span", {
    className: "name"
  }, "d-icon-phone")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "d-icon-user"
  }), __jsx("span", {
    className: "name"
  }, "d-icon-user")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "d-icon-search"
  }), __jsx("span", {
    className: "name"
  }, "d-icon-search")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "d-icon-bag"
  }), __jsx("span", {
    className: "name"
  }, "d-icon-bag")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "d-icon-map"
  }), __jsx("span", {
    className: "name"
  }, "d-icon-map")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "d-icon-info"
  }), __jsx("span", {
    className: "name"
  }, "d-icon-info")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "d-icon-refresh"
  }), __jsx("span", {
    className: "name"
  }, "d-icon-refresh")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "d-icon-ruler"
  }), __jsx("span", {
    className: "name"
  }, "d-icon-ruler")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "d-icon-zoom"
  }), __jsx("span", {
    className: "name"
  }, "d-icon-zoom")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "d-icon-star"
  }), __jsx("span", {
    className: "name"
  }, "d-icon-star")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "d-icon-star-full"
  }), __jsx("span", {
    className: "name"
  }, "d-icon-star-full")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "d-icon-heart"
  }), __jsx("span", {
    className: "name"
  }, "d-icon-heart")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "d-icon-heart-full"
  }), __jsx("span", {
    className: "name"
  }, "d-icon-heart-full")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "d-icon-close"
  }), __jsx("span", {
    className: "name"
  }, "d-icon-close")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "d-icon-play-circle"
  }), __jsx("span", {
    className: "name"
  }, "d-icon-play-circle")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "d-icon-home"
  }), __jsx("span", {
    className: "name"
  }, "d-icon-home")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "d-icon-filter-2"
  }), __jsx("span", {
    className: "name"
  }, "d-icon-filter-2")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "d-icon-switch"
  }), __jsx("span", {
    className: "name"
  }, "d-icon-switch")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "d-icon-switch-left-on"
  }), __jsx("span", {
    className: "name"
  }, "d-icon-switch-left-on")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "d-icon-switch-right-on"
  }), __jsx("span", {
    className: "name"
  }, "d-icon-switch-right-on")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "d-icon-filter-2"
  }), __jsx("span", {
    className: "name"
  }, "d-icon-filter-2")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "d-icon-alert-solid"
  }), __jsx("span", {
    className: "name"
  }, "d-icon-alert-solid")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "d-icon-headphone"
  }), __jsx("span", {
    className: "name"
  }, "d-icon-headphone")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "d-icon-mode-grid"
  }), __jsx("span", {
    className: "name"
  }, "d-icon-mode-grid")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "d-icon-mode-list"
  }), __jsx("span", {
    className: "name"
  }, "d-icon-mode-list")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "d-icon-angle-left"
  }), __jsx("span", {
    className: "name"
  }, "d-icon-angle-left")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "d-icon-angle-right"
  }), __jsx("span", {
    className: "name"
  }, "d-icon-angle-right")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "d-icon-cancel"
  }), __jsx("span", {
    className: "name"
  }, "d-icon-cancel")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "d-icon-instagram"
  }), __jsx("span", {
    className: "name"
  }, "d-icon-instagram")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "d-icon-check"
  }), __jsx("span", {
    className: "name"
  }, "d-icon-check")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "d-icon-play-solid"
  }), __jsx("span", {
    className: "name"
  }, "d-icon-play-solid")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "d-icon-angle-right"
  }), __jsx("span", {
    className: "name"
  }, "d-icon-angle-right")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "d-icon-angle-up"
  }), __jsx("span", {
    className: "name"
  }, "d-icon-angle-up")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "d-icon-angle-down"
  }), __jsx("span", {
    className: "name"
  }, "d-icon-angle-down")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "d-icon-angle-left"
  }), __jsx("span", {
    className: "name"
  }, "d-icon-angle-left")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "d-icon-mobile"
  }), __jsx("span", {
    className: "name"
  }, "d-icon-mobile")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "d-icon-minus"
  }), __jsx("span", {
    className: "name"
  }, "d-icon-minus")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "d-icon-plus"
  }), __jsx("span", {
    className: "name"
  }, "d-icon-plus")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "d-icon-wifi"
  }), __jsx("span", {
    className: "name"
  }, "d-icon-wifi")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "d-icon-times"
  }), __jsx("span", {
    className: "name"
  }, "d-icon-times")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "d-icon-times-circle"
  }), __jsx("span", {
    className: "name"
  }, "d-icon-times-circle")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "d-icon-random"
  }), __jsx("span", {
    className: "name"
  }, "d-icon-random")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "d-icon-th-list"
  }), __jsx("span", {
    className: "name"
  }, "d-icon-th-list")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "d-icon-rocket"
  }), __jsx("span", {
    className: "name"
  }, "d-icon-rocket")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "d-icon-map-marker"
  }), __jsx("span", {
    className: "name"
  }, "d-icon-map-marker")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "d-icon-birthday-cake"
  }), __jsx("span", {
    className: "name"
  }, "d-icon-birthday-cake")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "d-icon-gift"
  }), __jsx("span", {
    className: "name"
  }, "d-icon-gift")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "d-icon-female"
  }), __jsx("span", {
    className: "name"
  }, "d-icon-female")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "d-icon-clock"
  }), __jsx("span", {
    className: "name"
  }, "d-icon-clock")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "d-icon-comments"
  }), __jsx("span", {
    className: "name"
  }, "d-icon-comments")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "d-icon-arrow-down"
  }), __jsx("span", {
    className: "name"
  }, "d-icon-arrow-down")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "d-icon-arrow-left"
  }), __jsx("span", {
    className: "name"
  }, "d-icon-arrow-left")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "d-icon-arrow-right"
  }), __jsx("span", {
    className: "name"
  }, "d-icon-arrow-right")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "d-icon-arrow-up"
  }), __jsx("span", {
    className: "name"
  }, "d-icon-arrow-up")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "d-icon-rotate-left"
  }), __jsx("span", {
    className: "name"
  }, "d-icon-rotate-left")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "d-icon-rotate-right"
  }), __jsx("span", {
    className: "name"
  }, "d-icon-rotate-right")))), __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_2__.TabPanel, {
    className: "tab-pane pb-2"
  }, __jsx("h5", {
    className: "mb-3"
  }, "Solid Icons"), __jsx("div", {
    className: "mb-4"
  }, __jsx("div", {
    className: "wpb_wrapper"
  }, __jsx("div", {
    className: "row fontawesome-icon-list cols-lg-4 cols-md-3 cols-xs-2 cols-1"
  }, __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-ad"
  }), __jsx("span", null, "ad")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-address-book"
  }), __jsx("span", null, "address-book")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-address-card"
  }), __jsx("span", null, "address-card")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-adjust"
  }), __jsx("span", null, "adjust")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-air-freshener"
  }), __jsx("span", null, "air-freshener")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-align-center"
  }), __jsx("span", null, "align-center")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-align-justify"
  }), __jsx("span", null, "align-justify")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-align-left"
  }), __jsx("span", null, "align-left")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-align-right"
  }), __jsx("span", null, "align-right")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-allergies"
  }), __jsx("span", null, "allergies")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-ambulance"
  }), __jsx("span", null, "ambulance")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-american-sign-language-interpreting"
  }), __jsx("span", null, "american-sign-language-interpreting")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-anchor"
  }), __jsx("span", null, "anchor")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-angle-double-down"
  }), __jsx("span", null, "angle-double-down")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-angle-double-left"
  }), __jsx("span", null, "angle-double-left")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-angle-double-right"
  }), __jsx("span", null, "angle-double-right")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-angle-double-up"
  }), __jsx("span", null, "angle-double-up")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-angle-down"
  }), __jsx("span", null, "angle-down")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-angle-left"
  }), __jsx("span", null, "angle-left")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-angle-right"
  }), __jsx("span", null, "angle-right")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-angle-up"
  }), __jsx("span", null, "angle-up")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-angry"
  }), __jsx("span", null, "angry")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-ankh"
  }), __jsx("span", null, "ankh")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-apple-alt"
  }), __jsx("span", null, "apple-alt")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-archive"
  }), __jsx("span", null, "archive")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-archway"
  }), __jsx("span", null, "archway")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-arrow-alt-circle-down"
  }), __jsx("span", null, "arrow-alt-circle-down")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-arrow-alt-circle-left"
  }), __jsx("span", null, "arrow-alt-circle-left")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-arrow-alt-circle-right"
  }), __jsx("span", null, "arrow-alt-circle-right")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-arrow-alt-circle-up"
  }), __jsx("span", null, "arrow-alt-circle-up")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-arrow-circle-down"
  }), __jsx("span", null, "arrow-circle-down")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-arrow-circle-left"
  }), __jsx("span", null, "arrow-circle-left")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-arrow-circle-right"
  }), __jsx("span", null, "arrow-circle-right")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-arrow-circle-up"
  }), __jsx("span", null, "arrow-circle-up")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-arrow-down"
  }), __jsx("span", null, "arrow-down")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-arrow-left"
  }), __jsx("span", null, "arrow-left")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-arrow-right"
  }), __jsx("span", null, "arrow-right")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-arrow-up"
  }), __jsx("span", null, "arrow-up")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-arrows-alt"
  }), __jsx("span", null, "arrows-alt")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-arrows-alt-h"
  }), __jsx("span", null, "arrows-alt-h")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-arrows-alt-v"
  }), __jsx("span", null, "arrows-alt-v")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-assistive-listening-systems"
  }), __jsx("span", null, "assistive-listening-systems")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-asterisk"
  }), __jsx("span", null, "asterisk")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-at"
  }), __jsx("span", null, "at")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-atlas"
  }), __jsx("span", null, "atlas")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-atom"
  }), __jsx("span", null, "atom")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-audio-description"
  }), __jsx("span", null, "audio-description")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-award"
  }), __jsx("span", null, "award")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-baby"
  }), __jsx("span", null, "baby")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-baby-carriage"
  }), __jsx("span", null, "baby-carriage")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-backspace"
  }), __jsx("span", null, "backspace")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-backward"
  }), __jsx("span", null, "backward")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-bacon"
  }), __jsx("span", null, "bacon")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-balance-scale"
  }), __jsx("span", null, "balance-scale")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-ban"
  }), __jsx("span", null, "ban")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-band-aid"
  }), __jsx("span", null, "band-aid")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-barcode"
  }), __jsx("span", null, "barcode")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-bars"
  }), __jsx("span", null, "bars")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-baseball-ball"
  }), __jsx("span", null, "baseball-ball")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-basketball-ball"
  }), __jsx("span", null, "basketball-ball")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-bath"
  }), __jsx("span", null, "bath")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-battery-empty"
  }), __jsx("span", null, "battery-empty")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-battery-full"
  }), __jsx("span", null, "battery-full")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-battery-half"
  }), __jsx("span", null, "battery-half")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-battery-quarter"
  }), __jsx("span", null, "battery-quarter")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-battery-three-quarters"
  }), __jsx("span", null, "battery-three-quarters")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-bed"
  }), __jsx("span", null, "bed")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-beer"
  }), __jsx("span", null, "beer")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-bell"
  }), __jsx("span", null, "bell")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-bell-slash"
  }), __jsx("span", null, "bell-slash")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-bezier-curve"
  }), __jsx("span", null, "bezier-curve")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-bible"
  }), __jsx("span", null, "bible")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-bicycle"
  }), __jsx("span", null, "bicycle")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-binoculars"
  }), __jsx("span", null, "binoculars")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-biohazard"
  }), __jsx("span", null, "biohazard")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-birthday-cake"
  }), __jsx("span", null, "birthday-cake")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-blender"
  }), __jsx("span", null, "blender")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-blender-phone"
  }), __jsx("span", null, "blender-phone")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-blind"
  }), __jsx("span", null, "blind")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-blog"
  }), __jsx("span", null, "blog")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-bold"
  }), __jsx("span", null, "bold")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-bolt"
  }), __jsx("span", null, "bolt")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-bomb"
  }), __jsx("span", null, "bomb")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-bone"
  }), __jsx("span", null, "bone")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-bong"
  }), __jsx("span", null, "bong")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-book"
  }), __jsx("span", null, "book")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-book-dead"
  }), __jsx("span", null, "book-dead")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-book-medical"
  }), __jsx("span", null, "book-medical")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-book-open"
  }), __jsx("span", null, "book-open")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-book-reader"
  }), __jsx("span", null, "book-reader")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-bookmark"
  }), __jsx("span", null, "bookmark")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-bowling-ball"
  }), __jsx("span", null, "bowling-ball")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-box"
  }), __jsx("span", null, "box")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-box-open"
  }), __jsx("span", null, "box-open")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-boxes"
  }), __jsx("span", null, "boxes")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-braille"
  }), __jsx("span", null, "braille")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-brain"
  }), __jsx("span", null, "brain")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-bread-slice"
  }), __jsx("span", null, "bread-slice")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-briefcase"
  }), __jsx("span", null, "briefcase")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-briefcase-medical"
  }), __jsx("span", null, "briefcase-medical")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-broadcast-tower"
  }), __jsx("span", null, "broadcast-tower")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-broom"
  }), __jsx("span", null, "broom")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-brush"
  }), __jsx("span", null, "brush")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-bug"
  }), __jsx("span", null, "bug")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-building"
  }), __jsx("span", null, "building")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-bullhorn"
  }), __jsx("span", null, "bullhorn")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-bullseye"
  }), __jsx("span", null, "bullseye")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-burn"
  }), __jsx("span", null, "burn")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-bus"
  }), __jsx("span", null, "bus")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-bus-alt"
  }), __jsx("span", null, "bus-alt")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-business-time"
  }), __jsx("span", null, "business-time")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-calculator"
  }), __jsx("span", null, "calculator")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-calendar"
  }), __jsx("span", null, "calendar")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-calendar-alt"
  }), __jsx("span", null, "calendar-alt")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-calendar-check"
  }), __jsx("span", null, "calendar-check")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-calendar-day"
  }), __jsx("span", null, "calendar-day")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-calendar-minus"
  }), __jsx("span", null, "calendar-minus")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-calendar-plus"
  }), __jsx("span", null, "calendar-plus")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-calendar-times"
  }), __jsx("span", null, "calendar-times")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-calendar-week"
  }), __jsx("span", null, "calendar-week")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-camera"
  }), __jsx("span", null, "camera")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-camera-retro"
  }), __jsx("span", null, "camera-retro")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-campground"
  }), __jsx("span", null, "campground")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-candy-cane"
  }), __jsx("span", null, "candy-cane")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-cannabis"
  }), __jsx("span", null, "cannabis")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-capsules"
  }), __jsx("span", null, "capsules")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-car"
  }), __jsx("span", null, "car")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-car-alt"
  }), __jsx("span", null, "car-alt")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-car-battery"
  }), __jsx("span", null, "car-battery")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-car-crash"
  }), __jsx("span", null, "car-crash")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-car-side"
  }), __jsx("span", null, "car-side")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-caret-down"
  }), __jsx("span", null, "caret-down")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-caret-left"
  }), __jsx("span", null, "caret-left")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-caret-right"
  }), __jsx("span", null, "caret-right")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-caret-square-down"
  }), __jsx("span", null, "caret-square-down")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-caret-square-left"
  }), __jsx("span", null, "caret-square-left")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-caret-square-right"
  }), __jsx("span", null, "caret-square-right")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-caret-square-up"
  }), __jsx("span", null, "caret-square-up")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-caret-up"
  }), __jsx("span", null, "caret-up")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-carrot"
  }), __jsx("span", null, "carrot")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-cart-arrow-down"
  }), __jsx("span", null, "cart-arrow-down")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-cart-plus"
  }), __jsx("span", null, "cart-plus")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-cash-register"
  }), __jsx("span", null, "cash-register")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-cat"
  }), __jsx("span", null, "cat")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-certificate"
  }), __jsx("span", null, "certificate")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-chair"
  }), __jsx("span", null, "chair")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-chalkboard"
  }), __jsx("span", null, "chalkboard")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-chalkboard-teacher"
  }), __jsx("span", null, "chalkboard-teacher")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-charging-station"
  }), __jsx("span", null, "charging-station")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-chart-area"
  }), __jsx("span", null, "chart-area")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-chart-bar"
  }), __jsx("span", null, "chart-bar")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-chart-line"
  }), __jsx("span", null, "chart-line")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-chart-pie"
  }), __jsx("span", null, "chart-pie")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-check"
  }), __jsx("span", null, "check")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-check-circle"
  }), __jsx("span", null, "check-circle")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-check-double"
  }), __jsx("span", null, "check-double")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-check-square"
  }), __jsx("span", null, "check-square")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-cheese"
  }), __jsx("span", null, "cheese")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-chess"
  }), __jsx("span", null, "chess")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-chess-bishop"
  }), __jsx("span", null, "chess-bishop")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-chess-board"
  }), __jsx("span", null, "chess-board")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-chess-king"
  }), __jsx("span", null, "chess-king")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-chess-knight"
  }), __jsx("span", null, "chess-knight")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-chess-pawn"
  }), __jsx("span", null, "chess-pawn")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-chess-queen"
  }), __jsx("span", null, "chess-queen")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-chess-rook"
  }), __jsx("span", null, "chess-rook")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-chevron-circle-down"
  }), __jsx("span", null, "chevron-circle-down")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-chevron-circle-left"
  }), __jsx("span", null, "chevron-circle-left")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-chevron-circle-right"
  }), __jsx("span", null, "chevron-circle-right")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-chevron-circle-up"
  }), __jsx("span", null, "chevron-circle-up")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-chevron-down"
  }), __jsx("span", null, "chevron-down")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-chevron-left"
  }), __jsx("span", null, "chevron-left")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-chevron-right"
  }), __jsx("span", null, "chevron-right")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-chevron-up"
  }), __jsx("span", null, "chevron-up")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-child"
  }), __jsx("span", null, "child")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-church"
  }), __jsx("span", null, "church")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-circle"
  }), __jsx("span", null, "circle")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-circle-notch"
  }), __jsx("span", null, "circle-notch")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-city"
  }), __jsx("span", null, "city")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-clinic-medical"
  }), __jsx("span", null, "clinic-medical")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-clipboard"
  }), __jsx("span", null, "clipboard")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-clipboard-check"
  }), __jsx("span", null, "clipboard-check")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-clipboard-list"
  }), __jsx("span", null, "clipboard-list")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-clock"
  }), __jsx("span", null, "clock")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-clone"
  }), __jsx("span", null, "clone")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-closed-captioning"
  }), __jsx("span", null, "closed-captioning")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-cloud"
  }), __jsx("span", null, "cloud")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-cloud-download-alt"
  }), __jsx("span", null, "cloud-download-alt")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-cloud-meatball"
  }), __jsx("span", null, "cloud-meatball")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-cloud-moon"
  }), __jsx("span", null, "cloud-moon")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-cloud-moon-rain"
  }), __jsx("span", null, "cloud-moon-rain")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-cloud-rain"
  }), __jsx("span", null, "cloud-rain")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-cloud-showers-heavy"
  }), __jsx("span", null, "cloud-showers-heavy")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-cloud-sun"
  }), __jsx("span", null, "cloud-sun")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-cloud-sun-rain"
  }), __jsx("span", null, "cloud-sun-rain")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-cloud-upload-alt"
  }), __jsx("span", null, "cloud-upload-alt")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-cocktail"
  }), __jsx("span", null, "cocktail")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-code"
  }), __jsx("span", null, "code")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-code-branch"
  }), __jsx("span", null, "code-branch")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-coffee"
  }), __jsx("span", null, "coffee")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-cog"
  }), __jsx("span", null, "cog")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-cogs"
  }), __jsx("span", null, "cogs")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-coins"
  }), __jsx("span", null, "coins")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-columns"
  }), __jsx("span", null, "columns")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-comment"
  }), __jsx("span", null, "comment")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-comment-alt"
  }), __jsx("span", null, "comment-alt")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-comment-dollar"
  }), __jsx("span", null, "comment-dollar")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-comment-dots"
  }), __jsx("span", null, "comment-dots")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-comment-medical"
  }), __jsx("span", null, "comment-medical")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-comment-slash"
  }), __jsx("span", null, "comment-slash")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-comments"
  }), __jsx("span", null, "comments")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-comments-dollar"
  }), __jsx("span", null, "comments-dollar")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-compact-disc"
  }), __jsx("span", null, "compact-disc")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-compass"
  }), __jsx("span", null, "compass")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-compress"
  }), __jsx("span", null, "compress")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-compress-arrows-alt"
  }), __jsx("span", null, "compress-arrows-alt")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-concierge-bell"
  }), __jsx("span", null, "concierge-bell")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-cookie"
  }), __jsx("span", null, "cookie")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-cookie-bite"
  }), __jsx("span", null, "cookie-bite")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-copy"
  }), __jsx("span", null, "copy")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-copyright"
  }), __jsx("span", null, "copyright")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-couch"
  }), __jsx("span", null, "couch")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-credit-card"
  }), __jsx("span", null, "credit-card")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-crop"
  }), __jsx("span", null, "crop")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-crop-alt"
  }), __jsx("span", null, "crop-alt")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-cross"
  }), __jsx("span", null, "cross")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-crosshairs"
  }), __jsx("span", null, "crosshairs")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-crow"
  }), __jsx("span", null, "crow")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-crown"
  }), __jsx("span", null, "crown")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-crutch"
  }), __jsx("span", null, "crutch")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-cube"
  }), __jsx("span", null, "cube")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-cubes"
  }), __jsx("span", null, "cubes")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-cut"
  }), __jsx("span", null, "cut")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-database"
  }), __jsx("span", null, "database")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-deaf"
  }), __jsx("span", null, "deaf")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-democrat"
  }), __jsx("span", null, "democrat")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-desktop"
  }), __jsx("span", null, "desktop")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-dharmachakra"
  }), __jsx("span", null, "dharmachakra")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-diagnoses"
  }), __jsx("span", null, "diagnoses")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-dice"
  }), __jsx("span", null, "dice")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-dice-d20"
  }), __jsx("span", null, "dice-d20")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-dice-d6"
  }), __jsx("span", null, "dice-d6")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-dice-five"
  }), __jsx("span", null, "dice-five")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-dice-four"
  }), __jsx("span", null, "dice-four")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-dice-one"
  }), __jsx("span", null, "dice-one")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-dice-six"
  }), __jsx("span", null, "dice-six")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-dice-three"
  }), __jsx("span", null, "dice-three")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-dice-two"
  }), __jsx("span", null, "dice-two")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-digital-tachograph"
  }), __jsx("span", null, "digital-tachograph")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-directions"
  }), __jsx("span", null, "directions")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-divide"
  }), __jsx("span", null, "divide")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-dizzy"
  }), __jsx("span", null, "dizzy")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-dna"
  }), __jsx("span", null, "dna")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-dog"
  }), __jsx("span", null, "dog")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-dollar-sign"
  }), __jsx("span", null, "dollar-sign")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-dolly"
  }), __jsx("span", null, "dolly")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-dolly-flatbed"
  }), __jsx("span", null, "dolly-flatbed")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-donate"
  }), __jsx("span", null, "donate")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-door-closed"
  }), __jsx("span", null, "door-closed")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-door-open"
  }), __jsx("span", null, "door-open")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-dot-circle"
  }), __jsx("span", null, "dot-circle")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-dove"
  }), __jsx("span", null, "dove")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-download"
  }), __jsx("span", null, "download")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-drafting-compass"
  }), __jsx("span", null, "drafting-compass")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-dragon"
  }), __jsx("span", null, "dragon")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-draw-polygon"
  }), __jsx("span", null, "draw-polygon")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-drum"
  }), __jsx("span", null, "drum")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-drum-steelpan"
  }), __jsx("span", null, "drum-steelpan")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-drumstick-bite"
  }), __jsx("span", null, "drumstick-bite")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-dumbbell"
  }), __jsx("span", null, "dumbbell")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-dumpster"
  }), __jsx("span", null, "dumpster")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-dumpster-fire"
  }), __jsx("span", null, "dumpster-fire")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-dungeon"
  }), __jsx("span", null, "dungeon")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-edit"
  }), __jsx("span", null, "edit")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-egg"
  }), __jsx("span", null, "egg")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-eject"
  }), __jsx("span", null, "eject")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-ellipsis-h"
  }), __jsx("span", null, "ellipsis-h")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-ellipsis-v"
  }), __jsx("span", null, "ellipsis-v")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-envelope"
  }), __jsx("span", null, "envelope")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-envelope-open"
  }), __jsx("span", null, "envelope-open")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-envelope-open-text"
  }), __jsx("span", null, "envelope-open-text")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-envelope-square"
  }), __jsx("span", null, "envelope-square")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-equals"
  }), __jsx("span", null, "equals")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-eraser"
  }), __jsx("span", null, "eraser")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-ethernet"
  }), __jsx("span", null, "ethernet")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-euro-sign"
  }), __jsx("span", null, "euro-sign")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-exchange-alt"
  }), __jsx("span", null, "exchange-alt")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-exclamation"
  }), __jsx("span", null, "exclamation")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-exclamation-circle"
  }), __jsx("span", null, "exclamation-circle")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-exclamation-triangle"
  }), __jsx("span", null, "exclamation-triangle")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-expand"
  }), __jsx("span", null, "expand")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-expand-arrows-alt"
  }), __jsx("span", null, "expand-arrows-alt")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-external-link-alt"
  }), __jsx("span", null, "external-link-alt")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-external-link-square-alt"
  }), __jsx("span", null, "external-link-square-alt")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-eye"
  }), __jsx("span", null, "eye")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-eye-dropper"
  }), __jsx("span", null, "eye-dropper")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-eye-slash"
  }), __jsx("span", null, "eye-slash")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-fast-backward"
  }), __jsx("span", null, "fast-backward")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-fast-forward"
  }), __jsx("span", null, "fast-forward")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-fax"
  }), __jsx("span", null, "fax")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-feather"
  }), __jsx("span", null, "feather")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-feather-alt"
  }), __jsx("span", null, "feather-alt")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-female"
  }), __jsx("span", null, "female")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-fighter-jet"
  }), __jsx("span", null, "fighter-jet")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-file"
  }), __jsx("span", null, "file")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-file-alt"
  }), __jsx("span", null, "file-alt")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-file-archive"
  }), __jsx("span", null, "file-archive")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-file-audio"
  }), __jsx("span", null, "file-audio")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-file-code"
  }), __jsx("span", null, "file-code")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-file-contract"
  }), __jsx("span", null, "file-contract")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-file-csv"
  }), __jsx("span", null, "file-csv")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-file-download"
  }), __jsx("span", null, "file-download")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-file-excel"
  }), __jsx("span", null, "file-excel")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-file-export"
  }), __jsx("span", null, "file-export")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-file-image"
  }), __jsx("span", null, "file-image")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-file-import"
  }), __jsx("span", null, "file-import")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-file-invoice"
  }), __jsx("span", null, "file-invoice")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-file-invoice-dollar"
  }), __jsx("span", null, "file-invoice-dollar")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-file-medical"
  }), __jsx("span", null, "file-medical")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-file-medical-alt"
  }), __jsx("span", null, "file-medical-alt")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-file-pdf"
  }), __jsx("span", null, "file-pdf")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-file-powerpoint"
  }), __jsx("span", null, "file-powerpoint")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-file-prescription"
  }), __jsx("span", null, "file-prescription")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-file-signature"
  }), __jsx("span", null, "file-signature")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-file-upload"
  }), __jsx("span", null, "file-upload")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-file-video"
  }), __jsx("span", null, "file-video")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-file-word"
  }), __jsx("span", null, "file-word")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-fill"
  }), __jsx("span", null, "fill")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-fill-drip"
  }), __jsx("span", null, "fill-drip")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-film"
  }), __jsx("span", null, "film")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-filter"
  }), __jsx("span", null, "filter")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-fingerprint"
  }), __jsx("span", null, "fingerprint")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-fire"
  }), __jsx("span", null, "fire")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-fire-alt"
  }), __jsx("span", null, "fire-alt")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-fire-extinguisher"
  }), __jsx("span", null, "fire-extinguisher")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-first-aid"
  }), __jsx("span", null, "first-aid")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-fish"
  }), __jsx("span", null, "fish")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-fist-raised"
  }), __jsx("span", null, "fist-raised")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-flag"
  }), __jsx("span", null, "flag")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-flag-checkered"
  }), __jsx("span", null, "flag-checkered")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-flag-usa"
  }), __jsx("span", null, "flag-usa")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-flask"
  }), __jsx("span", null, "flask")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-flushed"
  }), __jsx("span", null, "flushed")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-folder"
  }), __jsx("span", null, "folder")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-folder-minus"
  }), __jsx("span", null, "folder-minus")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-folder-open"
  }), __jsx("span", null, "folder-open")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-folder-plus"
  }), __jsx("span", null, "folder-plus")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-font"
  }), __jsx("span", null, "font")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-football-ball"
  }), __jsx("span", null, "football-ball")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-forward"
  }), __jsx("span", null, "forward")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-frog"
  }), __jsx("span", null, "frog")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-frown"
  }), __jsx("span", null, "frown")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-frown-open"
  }), __jsx("span", null, "frown-open")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-funnel-dollar"
  }), __jsx("span", null, "funnel-dollar")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-futbol"
  }), __jsx("span", null, "futbol")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-gamepad"
  }), __jsx("span", null, "gamepad")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-gas-pump"
  }), __jsx("span", null, "gas-pump")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-gavel"
  }), __jsx("span", null, "gavel")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-gem"
  }), __jsx("span", null, "gem")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-genderless"
  }), __jsx("span", null, "genderless")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-ghost"
  }), __jsx("span", null, "ghost")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-gift"
  }), __jsx("span", null, "gift")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-gifts"
  }), __jsx("span", null, "gifts")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-glass-cheers"
  }), __jsx("span", null, "glass-cheers")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-glass-martini"
  }), __jsx("span", null, "glass-martini")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-glass-martini-alt"
  }), __jsx("span", null, "glass-martini-alt")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-glass-whiskey"
  }), __jsx("span", null, "glass-whiskey")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-glasses"
  }), __jsx("span", null, "glasses")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-globe"
  }), __jsx("span", null, "globe")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-globe-africa"
  }), __jsx("span", null, "globe-africa")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-globe-americas"
  }), __jsx("span", null, "globe-americas")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-globe-asia"
  }), __jsx("span", null, "globe-asia")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-globe-europe"
  }), __jsx("span", null, "globe-europe")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-golf-ball"
  }), __jsx("span", null, "golf-ball")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-gopuram"
  }), __jsx("span", null, "gopuram")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-graduation-cap"
  }), __jsx("span", null, "graduation-cap")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-greater-than"
  }), __jsx("span", null, "greater-than")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-greater-than-equal"
  }), __jsx("span", null, "greater-than-equal")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-grimace"
  }), __jsx("span", null, "grimace")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-grin"
  }), __jsx("span", null, "grin")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-grin-alt"
  }), __jsx("span", null, "grin-alt")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-grin-beam"
  }), __jsx("span", null, "grin-beam")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-grin-beam-sweat"
  }), __jsx("span", null, "grin-beam-sweat")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-grin-hearts"
  }), __jsx("span", null, "grin-hearts")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-grin-squint"
  }), __jsx("span", null, "grin-squint")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-grin-squint-tears"
  }), __jsx("span", null, "grin-squint-tears")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-grin-stars"
  }), __jsx("span", null, "grin-stars")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-grin-tears"
  }), __jsx("span", null, "grin-tears")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-grin-tongue"
  }), __jsx("span", null, "grin-tongue")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-grin-tongue-squint"
  }), __jsx("span", null, "grin-tongue-squint")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-grin-tongue-wink"
  }), __jsx("span", null, "grin-tongue-wink")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-grin-wink"
  }), __jsx("span", null, "grin-wink")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-grip-horizontal"
  }), __jsx("span", null, "grip-horizontal")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-grip-lines"
  }), __jsx("span", null, "grip-lines")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-grip-lines-vertical"
  }), __jsx("span", null, "grip-lines-vertical")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-grip-vertical"
  }), __jsx("span", null, "grip-vertical")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-guitar"
  }), __jsx("span", null, "guitar")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-h-square"
  }), __jsx("span", null, "h-square")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-hamburger"
  }), __jsx("span", null, "hamburger")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-hammer"
  }), __jsx("span", null, "hammer")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-hamsa"
  }), __jsx("span", null, "hamsa")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-hand-holding"
  }), __jsx("span", null, "hand-holding")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-hand-holding-heart"
  }), __jsx("span", null, "hand-holding-heart")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-hand-holding-usd"
  }), __jsx("span", null, "hand-holding-usd")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-hand-lizard"
  }), __jsx("span", null, "hand-lizard")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-hand-middle-finger"
  }), __jsx("span", null, "hand-middle-finger")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-hand-paper"
  }), __jsx("span", null, "hand-paper")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-hand-peace"
  }), __jsx("span", null, "hand-peace")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-hand-point-down"
  }), __jsx("span", null, "hand-point-down")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-hand-point-left"
  }), __jsx("span", null, "hand-point-left")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-hand-point-right"
  }), __jsx("span", null, "hand-point-right")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-hand-point-up"
  }), __jsx("span", null, "hand-point-up")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-hand-pointer"
  }), __jsx("span", null, "hand-pointer")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-hand-rock"
  }), __jsx("span", null, "hand-rock")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-hand-scissors"
  }), __jsx("span", null, "hand-scissors")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-hand-spock"
  }), __jsx("span", null, "hand-spock")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-hands"
  }), __jsx("span", null, "hands")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-hands-helping"
  }), __jsx("span", null, "hands-helping")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-handshake"
  }), __jsx("span", null, "handshake")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-hanukiah"
  }), __jsx("span", null, "hanukiah")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-hard-hat"
  }), __jsx("span", null, "hard-hat")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-hashtag"
  }), __jsx("span", null, "hashtag")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-hat-wizard"
  }), __jsx("span", null, "hat-wizard")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-haykal"
  }), __jsx("span", null, "haykal")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-hdd"
  }), __jsx("span", null, "hdd")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-heading"
  }), __jsx("span", null, "heading")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-headphones"
  }), __jsx("span", null, "headphones")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-headphones-alt"
  }), __jsx("span", null, "headphones-alt")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-headset"
  }), __jsx("span", null, "headset")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-heart"
  }), __jsx("span", null, "heart")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-heart-broken"
  }), __jsx("span", null, "heart-broken")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-heartbeat"
  }), __jsx("span", null, "heartbeat")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-helicopter"
  }), __jsx("span", null, "helicopter")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-highlighter"
  }), __jsx("span", null, "highlighter")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-hiking"
  }), __jsx("span", null, "hiking")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-hippo"
  }), __jsx("span", null, "hippo")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-history"
  }), __jsx("span", null, "history")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-hockey-puck"
  }), __jsx("span", null, "hockey-puck")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-holly-berry"
  }), __jsx("span", null, "holly-berry")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-home"
  }), __jsx("span", null, "home")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-horse"
  }), __jsx("span", null, "horse")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-horse-head"
  }), __jsx("span", null, "horse-head")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-hospital"
  }), __jsx("span", null, "hospital")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-hospital-alt"
  }), __jsx("span", null, "hospital-alt")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-hospital-symbol"
  }), __jsx("span", null, "hospital-symbol")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-hot-tub"
  }), __jsx("span", null, "hot-tub")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-hotdog"
  }), __jsx("span", null, "hotdog")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-hotel"
  }), __jsx("span", null, "hotel")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-hourglass"
  }), __jsx("span", null, "hourglass")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-hourglass-end"
  }), __jsx("span", null, "hourglass-end")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-hourglass-half"
  }), __jsx("span", null, "hourglass-half")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-hourglass-start"
  }), __jsx("span", null, "hourglass-start")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-house-damage"
  }), __jsx("span", null, "house-damage")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-hryvnia"
  }), __jsx("span", null, "hryvnia")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-i-cursor"
  }), __jsx("span", null, "i-cursor")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-ice-cream"
  }), __jsx("span", null, "ice-cream")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-icicles"
  }), __jsx("span", null, "icicles")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-id-badge"
  }), __jsx("span", null, "id-badge")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-id-card"
  }), __jsx("span", null, "id-card")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-id-card-alt"
  }), __jsx("span", null, "id-card-alt")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-igloo"
  }), __jsx("span", null, "igloo")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-image"
  }), __jsx("span", null, "image")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-images"
  }), __jsx("span", null, "images")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-inbox"
  }), __jsx("span", null, "inbox")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-indent"
  }), __jsx("span", null, "indent")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-industry"
  }), __jsx("span", null, "industry")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-infinity"
  }), __jsx("span", null, "infinity")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-info"
  }), __jsx("span", null, "info")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-info-circle"
  }), __jsx("span", null, "info-circle")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-italic"
  }), __jsx("span", null, "italic")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-jedi"
  }), __jsx("span", null, "jedi")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-joint"
  }), __jsx("span", null, "joint")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-journal-whills"
  }), __jsx("span", null, "journal-whills")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-kaaba"
  }), __jsx("span", null, "kaaba")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-key"
  }), __jsx("span", null, "key")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-keyboard"
  }), __jsx("span", null, "keyboard")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-khanda"
  }), __jsx("span", null, "khanda")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-kiss"
  }), __jsx("span", null, "kiss")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-kiss-beam"
  }), __jsx("span", null, "kiss-beam")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-kiss-wink-heart"
  }), __jsx("span", null, "kiss-wink-heart")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-kiwi-bird"
  }), __jsx("span", null, "kiwi-bird")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-landmark"
  }), __jsx("span", null, "landmark")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-language"
  }), __jsx("span", null, "language")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-laptop"
  }), __jsx("span", null, "laptop")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-laptop-code"
  }), __jsx("span", null, "laptop-code")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-laptop-medical"
  }), __jsx("span", null, "laptop-medical")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-laugh"
  }), __jsx("span", null, "laugh")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-laugh-beam"
  }), __jsx("span", null, "laugh-beam")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-laugh-squint"
  }), __jsx("span", null, "laugh-squint")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-laugh-wink"
  }), __jsx("span", null, "laugh-wink")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-layer-group"
  }), __jsx("span", null, "layer-group")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-leaf"
  }), __jsx("span", null, "leaf")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-lemon"
  }), __jsx("span", null, "lemon")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-less-than"
  }), __jsx("span", null, "less-than")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-less-than-equal"
  }), __jsx("span", null, "less-than-equal")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-level-down-alt"
  }), __jsx("span", null, "level-down-alt")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-level-up-alt"
  }), __jsx("span", null, "level-up-alt")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-life-ring"
  }), __jsx("span", null, "life-ring")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-lightbulb"
  }), __jsx("span", null, "lightbulb")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-link"
  }), __jsx("span", null, "link")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-lira-sign"
  }), __jsx("span", null, "lira-sign")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-list"
  }), __jsx("span", null, "list")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-list-alt"
  }), __jsx("span", null, "list-alt")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-list-ol"
  }), __jsx("span", null, "list-ol")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-list-ul"
  }), __jsx("span", null, "list-ul")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-location-arrow"
  }), __jsx("span", null, "location-arrow")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-lock"
  }), __jsx("span", null, "lock")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-lock-open"
  }), __jsx("span", null, "lock-open")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-long-arrow-alt-down"
  }), __jsx("span", null, "long-arrow-alt-down")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-long-arrow-alt-left"
  }), __jsx("span", null, "long-arrow-alt-left")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-long-arrow-alt-right"
  }), __jsx("span", null, "long-arrow-alt-right")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-long-arrow-alt-up"
  }), __jsx("span", null, "long-arrow-alt-up")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-low-vision"
  }), __jsx("span", null, "low-vision")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-luggage-cart"
  }), __jsx("span", null, "luggage-cart")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-magic"
  }), __jsx("span", null, "magic")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-magnet"
  }), __jsx("span", null, "magnet")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-mail-bulk"
  }), __jsx("span", null, "mail-bulk")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-male"
  }), __jsx("span", null, "male")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-map"
  }), __jsx("span", null, "map")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-map-marked"
  }), __jsx("span", null, "map-marked")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-map-marked-alt"
  }), __jsx("span", null, "map-marked-alt")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-map-marker"
  }), __jsx("span", null, "map-marker")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-map-marker-alt"
  }), __jsx("span", null, "map-marker-alt")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-map-pin"
  }), __jsx("span", null, "map-pin")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-map-signs"
  }), __jsx("span", null, "map-signs")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-marker"
  }), __jsx("span", null, "marker")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-mars"
  }), __jsx("span", null, "mars")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-mars-double"
  }), __jsx("span", null, "mars-double")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-mars-stroke"
  }), __jsx("span", null, "mars-stroke")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-mars-stroke-h"
  }), __jsx("span", null, "mars-stroke-h")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-mars-stroke-v"
  }), __jsx("span", null, "mars-stroke-v")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-mask"
  }), __jsx("span", null, "mask")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-medal"
  }), __jsx("span", null, "medal")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-medkit"
  }), __jsx("span", null, "medkit")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-meh"
  }), __jsx("span", null, "meh")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-meh-blank"
  }), __jsx("span", null, "meh-blank")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-meh-rolling-eyes"
  }), __jsx("span", null, "meh-rolling-eyes")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-memory"
  }), __jsx("span", null, "memory")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-menorah"
  }), __jsx("span", null, "menorah")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-mercury"
  }), __jsx("span", null, "mercury")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-meteor"
  }), __jsx("span", null, "meteor")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-microchip"
  }), __jsx("span", null, "microchip")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-microphone"
  }), __jsx("span", null, "microphone")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-microphone-alt"
  }), __jsx("span", null, "microphone-alt")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-microphone-alt-slash"
  }), __jsx("span", null, "microphone-alt-slash")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-microphone-slash"
  }), __jsx("span", null, "microphone-slash")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-microscope"
  }), __jsx("span", null, "microscope")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-minus"
  }), __jsx("span", null, "minus")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-minus-circle"
  }), __jsx("span", null, "minus-circle")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-minus-square"
  }), __jsx("span", null, "minus-square")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-mitten"
  }), __jsx("span", null, "mitten")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-mobile"
  }), __jsx("span", null, "mobile")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-mobile-alt"
  }), __jsx("span", null, "mobile-alt")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-money-bill"
  }), __jsx("span", null, "money-bill")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-money-bill-alt"
  }), __jsx("span", null, "money-bill-alt")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-money-bill-wave"
  }), __jsx("span", null, "money-bill-wave")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-money-bill-wave-alt"
  }), __jsx("span", null, "money-bill-wave-alt")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-money-check"
  }), __jsx("span", null, "money-check")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-money-check-alt"
  }), __jsx("span", null, "money-check-alt")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-monument"
  }), __jsx("span", null, "monument")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-moon"
  }), __jsx("span", null, "moon")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-mortar-pestle"
  }), __jsx("span", null, "mortar-pestle")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-mosque"
  }), __jsx("span", null, "mosque")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-motorcycle"
  }), __jsx("span", null, "motorcycle")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-mountain"
  }), __jsx("span", null, "mountain")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-mouse-pointer"
  }), __jsx("span", null, "mouse-pointer")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-mug-hot"
  }), __jsx("span", null, "mug-hot")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-music"
  }), __jsx("span", null, "music")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-network-wired"
  }), __jsx("span", null, "network-wired")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-neuter"
  }), __jsx("span", null, "neuter")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-newspaper"
  }), __jsx("span", null, "newspaper")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-not-equal"
  }), __jsx("span", null, "not-equal")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-notes-medical"
  }), __jsx("span", null, "notes-medical")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-object-group"
  }), __jsx("span", null, "object-group")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-object-ungroup"
  }), __jsx("span", null, "object-ungroup")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-oil-can"
  }), __jsx("span", null, "oil-can")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-om"
  }), __jsx("span", null, "om")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-otter"
  }), __jsx("span", null, "otter")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-outdent"
  }), __jsx("span", null, "outdent")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-pager"
  }), __jsx("span", null, "pager")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-paint-brush"
  }), __jsx("span", null, "paint-brush")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-paint-roller"
  }), __jsx("span", null, "paint-roller")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-palette"
  }), __jsx("span", null, "palette")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-pallet"
  }), __jsx("span", null, "pallet")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-paper-plane"
  }), __jsx("span", null, "paper-plane")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-paperclip"
  }), __jsx("span", null, "paperclip")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-parachute-box"
  }), __jsx("span", null, "parachute-box")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-paragraph"
  }), __jsx("span", null, "paragraph")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-parking"
  }), __jsx("span", null, "parking")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-passport"
  }), __jsx("span", null, "passport")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-pastafarianism"
  }), __jsx("span", null, "pastafarianism")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-paste"
  }), __jsx("span", null, "paste")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-pause"
  }), __jsx("span", null, "pause")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-pause-circle"
  }), __jsx("span", null, "pause-circle")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-paw"
  }), __jsx("span", null, "paw")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-peace"
  }), __jsx("span", null, "peace")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-pen"
  }), __jsx("span", null, "pen")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-pen-alt"
  }), __jsx("span", null, "pen-alt")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-pen-fancy"
  }), __jsx("span", null, "pen-fancy")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-pen-nib"
  }), __jsx("span", null, "pen-nib")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-pen-square"
  }), __jsx("span", null, "pen-square")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-pencil-alt"
  }), __jsx("span", null, "pencil-alt")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-pencil-ruler"
  }), __jsx("span", null, "pencil-ruler")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-people-carry"
  }), __jsx("span", null, "people-carry")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-pepper-hot"
  }), __jsx("span", null, "pepper-hot")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-percent"
  }), __jsx("span", null, "percent")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-percentage"
  }), __jsx("span", null, "percentage")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-person-booth"
  }), __jsx("span", null, "person-booth")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-phone"
  }), __jsx("span", null, "phone")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-phone-slash"
  }), __jsx("span", null, "phone-slash")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-phone-square"
  }), __jsx("span", null, "phone-square")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-phone-volume"
  }), __jsx("span", null, "phone-volume")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-piggy-bank"
  }), __jsx("span", null, "piggy-bank")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-pills"
  }), __jsx("span", null, "pills")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-pizza-slice"
  }), __jsx("span", null, "pizza-slice")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-place-of-worship"
  }), __jsx("span", null, "place-of-worship")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-plane"
  }), __jsx("span", null, "plane")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-plane-arrival"
  }), __jsx("span", null, "plane-arrival")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-plane-departure"
  }), __jsx("span", null, "plane-departure")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-play"
  }), __jsx("span", null, "play")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-play-circle"
  }), __jsx("span", null, "play-circle")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-plug"
  }), __jsx("span", null, "plug")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-plus"
  }), __jsx("span", null, "plus")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-plus-circle"
  }), __jsx("span", null, "plus-circle")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-plus-square"
  }), __jsx("span", null, "plus-square")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-podcast"
  }), __jsx("span", null, "podcast")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-poll"
  }), __jsx("span", null, "poll")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-poll-h"
  }), __jsx("span", null, "poll-h")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-poo"
  }), __jsx("span", null, "poo")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-poo-storm"
  }), __jsx("span", null, "poo-storm")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-poop"
  }), __jsx("span", null, "poop")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-portrait"
  }), __jsx("span", null, "portrait")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-pound-sign"
  }), __jsx("span", null, "pound-sign")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-power-off"
  }), __jsx("span", null, "power-off")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-pray"
  }), __jsx("span", null, "pray")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-praying-hands"
  }), __jsx("span", null, "praying-hands")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-prescription"
  }), __jsx("span", null, "prescription")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-prescription-bottle"
  }), __jsx("span", null, "prescription-bottle")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-prescription-bottle-alt"
  }), __jsx("span", null, "prescription-bottle-alt")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-print"
  }), __jsx("span", null, "print")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-procedures"
  }), __jsx("span", null, "procedures")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-project-diagram"
  }), __jsx("span", null, "project-diagram")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-puzzle-piece"
  }), __jsx("span", null, "puzzle-piece")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-qrcode"
  }), __jsx("span", null, "qrcode")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-question"
  }), __jsx("span", null, "question")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-question-circle"
  }), __jsx("span", null, "question-circle")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-quidditch"
  }), __jsx("span", null, "quidditch")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-quote-left"
  }), __jsx("span", null, "quote-left")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-quote-right"
  }), __jsx("span", null, "quote-right")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-quran"
  }), __jsx("span", null, "quran")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-radiation"
  }), __jsx("span", null, "radiation")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-radiation-alt"
  }), __jsx("span", null, "radiation-alt")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-rainbow"
  }), __jsx("span", null, "rainbow")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-random"
  }), __jsx("span", null, "random")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-receipt"
  }), __jsx("span", null, "receipt")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-recycle"
  }), __jsx("span", null, "recycle")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-redo"
  }), __jsx("span", null, "redo")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-redo-alt"
  }), __jsx("span", null, "redo-alt")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-registered"
  }), __jsx("span", null, "registered")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-reply"
  }), __jsx("span", null, "reply")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-reply-all"
  }), __jsx("span", null, "reply-all")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-republican"
  }), __jsx("span", null, "republican")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-restroom"
  }), __jsx("span", null, "restroom")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-retweet"
  }), __jsx("span", null, "retweet")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-ribbon"
  }), __jsx("span", null, "ribbon")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-ring"
  }), __jsx("span", null, "ring")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-road"
  }), __jsx("span", null, "road")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-robot"
  }), __jsx("span", null, "robot")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-rocket"
  }), __jsx("span", null, "rocket")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-route"
  }), __jsx("span", null, "route")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-rss"
  }), __jsx("span", null, "rss")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-rss-square"
  }), __jsx("span", null, "rss-square")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-ruble-sign"
  }), __jsx("span", null, "ruble-sign")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-ruler"
  }), __jsx("span", null, "ruler")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-ruler-combined"
  }), __jsx("span", null, "ruler-combined")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-ruler-horizontal"
  }), __jsx("span", null, "ruler-horizontal")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-ruler-vertical"
  }), __jsx("span", null, "ruler-vertical")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-running"
  }), __jsx("span", null, "running")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-rupee-sign"
  }), __jsx("span", null, "rupee-sign")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-sad-cry"
  }), __jsx("span", null, "sad-cry")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-sad-tear"
  }), __jsx("span", null, "sad-tear")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-satellite"
  }), __jsx("span", null, "satellite")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-satellite-dish"
  }), __jsx("span", null, "satellite-dish")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-save"
  }), __jsx("span", null, "save")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-school"
  }), __jsx("span", null, "school")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-screwdriver"
  }), __jsx("span", null, "screwdriver")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-scroll"
  }), __jsx("span", null, "scroll")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-sd-card"
  }), __jsx("span", null, "sd-card")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-search"
  }), __jsx("span", null, "search")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-search-dollar"
  }), __jsx("span", null, "search-dollar")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-search-location"
  }), __jsx("span", null, "search-location")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-search-minus"
  }), __jsx("span", null, "search-minus")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-search-plus"
  }), __jsx("span", null, "search-plus")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-seedling"
  }), __jsx("span", null, "seedling")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-server"
  }), __jsx("span", null, "server")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-shapes"
  }), __jsx("span", null, "shapes")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-share"
  }), __jsx("span", null, "share")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-share-alt"
  }), __jsx("span", null, "share-alt")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-share-alt-square"
  }), __jsx("span", null, "share-alt-square")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-share-square"
  }), __jsx("span", null, "share-square")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-shekel-sign"
  }), __jsx("span", null, "shekel-sign")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-shield-alt"
  }), __jsx("span", null, "shield-alt")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-ship"
  }), __jsx("span", null, "ship")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-shipping-fast"
  }), __jsx("span", null, "shipping-fast")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-shoe-prints"
  }), __jsx("span", null, "shoe-prints")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-shopping-bag"
  }), __jsx("span", null, "shopping-bag")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-shopping-basket"
  }), __jsx("span", null, "shopping-basket")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-shopping-cart"
  }), __jsx("span", null, "shopping-cart")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-shower"
  }), __jsx("span", null, "shower")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-shuttle-van"
  }), __jsx("span", null, "shuttle-van")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-sign"
  }), __jsx("span", null, "sign")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-sign-in-alt"
  }), __jsx("span", null, "sign-in-alt")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-sign-language"
  }), __jsx("span", null, "sign-language")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-sign-out-alt"
  }), __jsx("span", null, "sign-out-alt")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-signal"
  }), __jsx("span", null, "signal")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-signature"
  }), __jsx("span", null, "signature")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-sim-card"
  }), __jsx("span", null, "sim-card")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-sitemap"
  }), __jsx("span", null, "sitemap")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-skating"
  }), __jsx("span", null, "skating")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-skiing"
  }), __jsx("span", null, "skiing")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-skiing-nordic"
  }), __jsx("span", null, "skiing-nordic")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-skull"
  }), __jsx("span", null, "skull")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-skull-crossbones"
  }), __jsx("span", null, "skull-crossbones")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-slash"
  }), __jsx("span", null, "slash")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-sleigh"
  }), __jsx("span", null, "sleigh")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-sliders-h"
  }), __jsx("span", null, "sliders-h")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-smile"
  }), __jsx("span", null, "smile")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-smile-beam"
  }), __jsx("span", null, "smile-beam")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-smile-wink"
  }), __jsx("span", null, "smile-wink")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-smog"
  }), __jsx("span", null, "smog")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-smoking"
  }), __jsx("span", null, "smoking")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-smoking-ban"
  }), __jsx("span", null, "smoking-ban")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-sms"
  }), __jsx("span", null, "sms")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-snowboarding"
  }), __jsx("span", null, "snowboarding")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-snowflake"
  }), __jsx("span", null, "snowflake")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-snowman"
  }), __jsx("span", null, "snowman")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-snowplow"
  }), __jsx("span", null, "snowplow")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-socks"
  }), __jsx("span", null, "socks")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-solar-panel"
  }), __jsx("span", null, "solar-panel")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-sort"
  }), __jsx("span", null, "sort")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-sort-alpha-down"
  }), __jsx("span", null, "sort-alpha-down")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-sort-alpha-up"
  }), __jsx("span", null, "sort-alpha-up")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-sort-amount-down"
  }), __jsx("span", null, "sort-amount-down")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-sort-amount-up"
  }), __jsx("span", null, "sort-amount-up")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-sort-down"
  }), __jsx("span", null, "sort-down")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-sort-numeric-down"
  }), __jsx("span", null, "sort-numeric-down")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-sort-numeric-up"
  }), __jsx("span", null, "sort-numeric-up")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-sort-up"
  }), __jsx("span", null, "sort-up")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-spa"
  }), __jsx("span", null, "spa")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-space-shuttle"
  }), __jsx("span", null, "space-shuttle")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-spider"
  }), __jsx("span", null, "spider")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-spinner"
  }), __jsx("span", null, "spinner")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-splotch"
  }), __jsx("span", null, "splotch")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-spray-can"
  }), __jsx("span", null, "spray-can")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-square"
  }), __jsx("span", null, "square")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-square-full"
  }), __jsx("span", null, "square-full")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-square-root-alt"
  }), __jsx("span", null, "square-root-alt")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-stamp"
  }), __jsx("span", null, "stamp")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-star"
  }), __jsx("span", null, "star")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-star-and-crescent"
  }), __jsx("span", null, "star-and-crescent")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-star-half"
  }), __jsx("span", null, "star-half")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-star-half-alt"
  }), __jsx("span", null, "star-half-alt")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-star-of-david"
  }), __jsx("span", null, "star-of-david")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-star-of-life"
  }), __jsx("span", null, "star-of-life")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-step-backward"
  }), __jsx("span", null, "step-backward")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-step-forward"
  }), __jsx("span", null, "step-forward")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-stethoscope"
  }), __jsx("span", null, "stethoscope")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-sticky-note"
  }), __jsx("span", null, "sticky-note")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-stop"
  }), __jsx("span", null, "stop")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-stop-circle"
  }), __jsx("span", null, "stop-circle")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-stopwatch"
  }), __jsx("span", null, "stopwatch")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-store"
  }), __jsx("span", null, "store")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-store-alt"
  }), __jsx("span", null, "store-alt")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-stream"
  }), __jsx("span", null, "stream")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-street-view"
  }), __jsx("span", null, "street-view")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-strikethrough"
  }), __jsx("span", null, "strikethrough")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-stroopwafel"
  }), __jsx("span", null, "stroopwafel")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-subscript"
  }), __jsx("span", null, "subscript")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-subway"
  }), __jsx("span", null, "subway")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-suitcase"
  }), __jsx("span", null, "suitcase")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-suitcase-rolling"
  }), __jsx("span", null, "suitcase-rolling")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-sun"
  }), __jsx("span", null, "sun")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-superscript"
  }), __jsx("span", null, "superscript")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-surprise"
  }), __jsx("span", null, "surprise")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-swatchbook"
  }), __jsx("span", null, "swatchbook")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-swimmer"
  }), __jsx("span", null, "swimmer")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-swimming-pool"
  }), __jsx("span", null, "swimming-pool")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-synagogue"
  }), __jsx("span", null, "synagogue")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-sync"
  }), __jsx("span", null, "sync")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-sync-alt"
  }), __jsx("span", null, "sync-alt")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-syringe"
  }), __jsx("span", null, "syringe")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-table"
  }), __jsx("span", null, "table")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-table-tennis"
  }), __jsx("span", null, "table-tennis")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-tablet"
  }), __jsx("span", null, "tablet")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-tablet-alt"
  }), __jsx("span", null, "tablet-alt")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-tablets"
  }), __jsx("span", null, "tablets")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-tachometer-alt"
  }), __jsx("span", null, "tachometer-alt")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-tag"
  }), __jsx("span", null, "tag")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-tags"
  }), __jsx("span", null, "tags")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-tape"
  }), __jsx("span", null, "tape")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-tasks"
  }), __jsx("span", null, "tasks")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-taxi"
  }), __jsx("span", null, "taxi")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-teeth"
  }), __jsx("span", null, "teeth")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-teeth-open"
  }), __jsx("span", null, "teeth-open")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-temperature-high"
  }), __jsx("span", null, "temperature-high")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-temperature-low"
  }), __jsx("span", null, "temperature-low")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-tenge"
  }), __jsx("span", null, "tenge")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-terminal"
  }), __jsx("span", null, "terminal")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-text-height"
  }), __jsx("span", null, "text-height")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-text-width"
  }), __jsx("span", null, "text-width")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-th"
  }), __jsx("span", null, "th")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-th-large"
  }), __jsx("span", null, "th-large")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-th-list"
  }), __jsx("span", null, "th-list")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-theater-masks"
  }), __jsx("span", null, "theater-masks")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-thermometer"
  }), __jsx("span", null, "thermometer")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-thermometer-empty"
  }), __jsx("span", null, "thermometer-empty")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-thermometer-full"
  }), __jsx("span", null, "thermometer-full")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-thermometer-half"
  }), __jsx("span", null, "thermometer-half")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-thermometer-quarter"
  }), __jsx("span", null, "thermometer-quarter")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-thermometer-three-quarters"
  }), __jsx("span", null, "thermometer-three-quarters")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-thumbs-down"
  }), __jsx("span", null, "thumbs-down")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-thumbs-up"
  }), __jsx("span", null, "thumbs-up")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-thumbtack"
  }), __jsx("span", null, "thumbtack")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-ticket-alt"
  }), __jsx("span", null, "ticket-alt")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-times"
  }), __jsx("span", null, "times")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-times-circle"
  }), __jsx("span", null, "times-circle")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-tint"
  }), __jsx("span", null, "tint")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-tint-slash"
  }), __jsx("span", null, "tint-slash")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-tired"
  }), __jsx("span", null, "tired")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-toggle-off"
  }), __jsx("span", null, "toggle-off")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-toggle-on"
  }), __jsx("span", null, "toggle-on")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-toilet"
  }), __jsx("span", null, "toilet")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-toilet-paper"
  }), __jsx("span", null, "toilet-paper")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-toolbox"
  }), __jsx("span", null, "toolbox")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-tools"
  }), __jsx("span", null, "tools")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-tooth"
  }), __jsx("span", null, "tooth")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-torah"
  }), __jsx("span", null, "torah")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-torii-gate"
  }), __jsx("span", null, "torii-gate")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-tractor"
  }), __jsx("span", null, "tractor")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-trademark"
  }), __jsx("span", null, "trademark")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-traffic-light"
  }), __jsx("span", null, "traffic-light")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-train"
  }), __jsx("span", null, "train")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-tram"
  }), __jsx("span", null, "tram")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-transgender"
  }), __jsx("span", null, "transgender")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-transgender-alt"
  }), __jsx("span", null, "transgender-alt")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-trash"
  }), __jsx("span", null, "trash")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-trash-alt"
  }), __jsx("span", null, "trash-alt")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-trash-restore"
  }), __jsx("span", null, "trash-restore")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-trash-restore-alt"
  }), __jsx("span", null, "trash-restore-alt")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-tree"
  }), __jsx("span", null, "tree")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-trophy"
  }), __jsx("span", null, "trophy")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-truck"
  }), __jsx("span", null, "truck")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-truck-loading"
  }), __jsx("span", null, "truck-loading")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-truck-monster"
  }), __jsx("span", null, "truck-monster")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-truck-moving"
  }), __jsx("span", null, "truck-moving")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-truck-pickup"
  }), __jsx("span", null, "truck-pickup")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-tshirt"
  }), __jsx("span", null, "tshirt")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-tty"
  }), __jsx("span", null, "tty")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-tv"
  }), __jsx("span", null, "tv")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-umbrella"
  }), __jsx("span", null, "umbrella")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-umbrella-beach"
  }), __jsx("span", null, "umbrella-beach")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-underline"
  }), __jsx("span", null, "underline")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-undo"
  }), __jsx("span", null, "undo")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-undo-alt"
  }), __jsx("span", null, "undo-alt")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-universal-access"
  }), __jsx("span", null, "universal-access")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-university"
  }), __jsx("span", null, "university")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-unlink"
  }), __jsx("span", null, "unlink")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-unlock"
  }), __jsx("span", null, "unlock")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-unlock-alt"
  }), __jsx("span", null, "unlock-alt")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-upload"
  }), __jsx("span", null, "upload")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-user"
  }), __jsx("span", null, "user")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-user-alt"
  }), __jsx("span", null, "user-alt")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-user-alt-slash"
  }), __jsx("span", null, "user-alt-slash")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-user-astronaut"
  }), __jsx("span", null, "user-astronaut")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-user-check"
  }), __jsx("span", null, "user-check")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-user-circle"
  }), __jsx("span", null, "user-circle")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-user-clock"
  }), __jsx("span", null, "user-clock")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-user-cog"
  }), __jsx("span", null, "user-cog")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-user-edit"
  }), __jsx("span", null, "user-edit")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-user-friends"
  }), __jsx("span", null, "user-friends")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-user-graduate"
  }), __jsx("span", null, "user-graduate")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-user-injured"
  }), __jsx("span", null, "user-injured")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-user-lock"
  }), __jsx("span", null, "user-lock")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-user-md"
  }), __jsx("span", null, "user-md")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-user-minus"
  }), __jsx("span", null, "user-minus")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-user-ninja"
  }), __jsx("span", null, "user-ninja")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-user-nurse"
  }), __jsx("span", null, "user-nurse")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-user-plus"
  }), __jsx("span", null, "user-plus")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-user-secret"
  }), __jsx("span", null, "user-secret")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-user-shield"
  }), __jsx("span", null, "user-shield")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-user-slash"
  }), __jsx("span", null, "user-slash")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-user-tag"
  }), __jsx("span", null, "user-tag")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-user-tie"
  }), __jsx("span", null, "user-tie")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-user-times"
  }), __jsx("span", null, "user-times")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-users"
  }), __jsx("span", null, "users")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-users-cog"
  }), __jsx("span", null, "users-cog")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-utensil-spoon"
  }), __jsx("span", null, "utensil-spoon")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-utensils"
  }), __jsx("span", null, "utensils")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-vector-square"
  }), __jsx("span", null, "vector-square")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-venus"
  }), __jsx("span", null, "venus")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-venus-double"
  }), __jsx("span", null, "venus-double")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-venus-mars"
  }), __jsx("span", null, "venus-mars")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-vial"
  }), __jsx("span", null, "vial")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-vials"
  }), __jsx("span", null, "vials")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-video"
  }), __jsx("span", null, "video")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-video-slash"
  }), __jsx("span", null, "video-slash")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-vihara"
  }), __jsx("span", null, "vihara")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-volleyball-ball"
  }), __jsx("span", null, "volleyball-ball")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-volume-down"
  }), __jsx("span", null, "volume-down")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-volume-mute"
  }), __jsx("span", null, "volume-mute")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-volume-off"
  }), __jsx("span", null, "volume-off")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-volume-up"
  }), __jsx("span", null, "volume-up")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-vote-yea"
  }), __jsx("span", null, "vote-yea")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-vr-cardboard"
  }), __jsx("span", null, "vr-cardboard")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-walking"
  }), __jsx("span", null, "walking")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-wallet"
  }), __jsx("span", null, "wallet")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-warehouse"
  }), __jsx("span", null, "warehouse")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-water"
  }), __jsx("span", null, "water")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-weight"
  }), __jsx("span", null, "weight")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-weight-hanging"
  }), __jsx("span", null, "weight-hanging")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-wheelchair"
  }), __jsx("span", null, "wheelchair")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-wifi"
  }), __jsx("span", null, "wifi")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-wind"
  }), __jsx("span", null, "wind")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-window-close"
  }), __jsx("span", null, "window-close")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-window-maximize"
  }), __jsx("span", null, "window-maximize")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-window-minimize"
  }), __jsx("span", null, "window-minimize")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-window-restore"
  }), __jsx("span", null, "window-restore")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-wine-bottle"
  }), __jsx("span", null, "wine-bottle")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-wine-glass"
  }), __jsx("span", null, "wine-glass")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-wine-glass-alt"
  }), __jsx("span", null, "wine-glass-alt")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-won-sign"
  }), __jsx("span", null, "won-sign")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-wrench"
  }), __jsx("span", null, "wrench")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-x-ray"
  }), __jsx("span", null, "x-ray")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-yen-sign"
  }), __jsx("span", null, "yen-sign")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fas fa-yin-yang"
  }), __jsx("span", null, "yin-yang"))))), __jsx("h5", {
    className: "mb-3"
  }, "Regular Icons"), __jsx("div", {
    className: "mb-4"
  }, __jsx("div", {
    className: "wpb_wrapper"
  }, __jsx("div", {
    className: "row fontawesome-icon-list cols-lg-4 cols-md-3 cols-xs-2 cols-1"
  }, __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "far fa-address-book"
  }), __jsx("span", null, "address-book")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "far fa-address-card"
  }), __jsx("span", null, "address-card")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "far fa-angry"
  }), __jsx("span", null, "angry")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "far fa-arrow-alt-circle-down"
  }), __jsx("span", null, "arrow-alt-circle-down")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "far fa-arrow-alt-circle-left"
  }), __jsx("span", null, "arrow-alt-circle-left")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "far fa-arrow-alt-circle-right"
  }), __jsx("span", null, "arrow-alt-circle-right")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "far fa-arrow-alt-circle-up"
  }), __jsx("span", null, "arrow-alt-circle-up")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "far fa-bell"
  }), __jsx("span", null, "bell")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "far fa-bell-slash"
  }), __jsx("span", null, "bell-slash")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "far fa-bookmark"
  }), __jsx("span", null, "bookmark")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "far fa-building"
  }), __jsx("span", null, "building")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "far fa-calendar"
  }), __jsx("span", null, "calendar")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "far fa-calendar-alt"
  }), __jsx("span", null, "calendar-alt")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "far fa-calendar-check"
  }), __jsx("span", null, "calendar-check")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "far fa-calendar-minus"
  }), __jsx("span", null, "calendar-minus")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "far fa-calendar-plus"
  }), __jsx("span", null, "calendar-plus")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "far fa-calendar-times"
  }), __jsx("span", null, "calendar-times")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "far fa-caret-square-down"
  }), __jsx("span", null, "caret-square-down")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "far fa-caret-square-left"
  }), __jsx("span", null, "caret-square-left")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "far fa-caret-square-right"
  }), __jsx("span", null, "caret-square-right")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "far fa-caret-square-up"
  }), __jsx("span", null, "caret-square-up")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "far fa-chart-bar"
  }), __jsx("span", null, "chart-bar")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "far fa-check-circle"
  }), __jsx("span", null, "check-circle")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "far fa-check-square"
  }), __jsx("span", null, "check-square")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "far fa-circle"
  }), __jsx("span", null, "circle")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "far fa-clipboard"
  }), __jsx("span", null, "clipboard")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "far fa-clock"
  }), __jsx("span", null, "clock")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "far fa-clone"
  }), __jsx("span", null, "clone")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "far fa-closed-captioning"
  }), __jsx("span", null, "closed-captioning")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "far fa-comment"
  }), __jsx("span", null, "comment")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "far fa-comment-alt"
  }), __jsx("span", null, "comment-alt")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "far fa-comment-dots"
  }), __jsx("span", null, "comment-dots")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "far fa-comments"
  }), __jsx("span", null, "comments")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "far fa-compass"
  }), __jsx("span", null, "compass")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "far fa-copy"
  }), __jsx("span", null, "copy")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "far fa-copyright"
  }), __jsx("span", null, "copyright")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "far fa-credit-card"
  }), __jsx("span", null, "credit-card")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "far fa-dizzy"
  }), __jsx("span", null, "dizzy")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "far fa-dot-circle"
  }), __jsx("span", null, "dot-circle")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "far fa-edit"
  }), __jsx("span", null, "edit")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "far fa-envelope"
  }), __jsx("span", null, "envelope")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "far fa-envelope-open"
  }), __jsx("span", null, "envelope-open")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "far fa-eye"
  }), __jsx("span", null, "eye")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "far fa-eye-slash"
  }), __jsx("span", null, "eye-slash")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "far fa-file"
  }), __jsx("span", null, "file")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "far fa-file-alt"
  }), __jsx("span", null, "file-alt")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "far fa-file-archive"
  }), __jsx("span", null, "file-archive")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "far fa-file-audio"
  }), __jsx("span", null, "file-audio")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "far fa-file-code"
  }), __jsx("span", null, "file-code")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "far fa-file-excel"
  }), __jsx("span", null, "file-excel")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "far fa-file-image"
  }), __jsx("span", null, "file-image")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "far fa-file-pdf"
  }), __jsx("span", null, "file-pdf")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "far fa-file-powerpoint"
  }), __jsx("span", null, "file-powerpoint")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "far fa-file-video"
  }), __jsx("span", null, "file-video")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "far fa-file-word"
  }), __jsx("span", null, "file-word")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "far fa-flag"
  }), __jsx("span", null, "flag")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "far fa-flushed"
  }), __jsx("span", null, "flushed")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "far fa-folder"
  }), __jsx("span", null, "folder")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "far fa-folder-open"
  }), __jsx("span", null, "folder-open")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "far fa-frown"
  }), __jsx("span", null, "frown")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "far fa-frown-open"
  }), __jsx("span", null, "frown-open")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "far fa-futbol"
  }), __jsx("span", null, "futbol")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "far fa-gem"
  }), __jsx("span", null, "gem")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "far fa-grimace"
  }), __jsx("span", null, "grimace")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "far fa-grin"
  }), __jsx("span", null, "grin")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "far fa-grin-alt"
  }), __jsx("span", null, "grin-alt")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "far fa-grin-beam"
  }), __jsx("span", null, "grin-beam")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "far fa-grin-beam-sweat"
  }), __jsx("span", null, "grin-beam-sweat")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "far fa-grin-hearts"
  }), __jsx("span", null, "grin-hearts")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "far fa-grin-squint"
  }), __jsx("span", null, "grin-squint")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "far fa-grin-squint-tears"
  }), __jsx("span", null, "grin-squint-tears")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "far fa-grin-stars"
  }), __jsx("span", null, "grin-stars")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "far fa-grin-tears"
  }), __jsx("span", null, "grin-tears")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "far fa-grin-tongue"
  }), __jsx("span", null, "grin-tongue")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "far fa-grin-tongue-squint"
  }), __jsx("span", null, "grin-tongue-squint")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "far fa-grin-tongue-wink"
  }), __jsx("span", null, "grin-tongue-wink")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "far fa-grin-wink"
  }), __jsx("span", null, "grin-wink")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "far fa-hand-lizard"
  }), __jsx("span", null, "hand-lizard")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "far fa-hand-paper"
  }), __jsx("span", null, "hand-paper")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "far fa-hand-peace"
  }), __jsx("span", null, "hand-peace")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "far fa-hand-point-down"
  }), __jsx("span", null, "hand-point-down")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "far fa-hand-point-left"
  }), __jsx("span", null, "hand-point-left")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "far fa-hand-point-right"
  }), __jsx("span", null, "hand-point-right")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "far fa-hand-point-up"
  }), __jsx("span", null, "hand-point-up")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "far fa-hand-pointer"
  }), __jsx("span", null, "hand-pointer")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "far fa-hand-rock"
  }), __jsx("span", null, "hand-rock")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "far fa-hand-scissors"
  }), __jsx("span", null, "hand-scissors")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "far fa-hand-spock"
  }), __jsx("span", null, "hand-spock")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "far fa-handshake"
  }), __jsx("span", null, "handshake")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "far fa-hdd"
  }), __jsx("span", null, "hdd")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "far fa-heart"
  }), __jsx("span", null, "heart")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "far fa-hospital"
  }), __jsx("span", null, "hospital")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "far fa-hourglass"
  }), __jsx("span", null, "hourglass")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "far fa-id-badge"
  }), __jsx("span", null, "id-badge")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "far fa-id-card"
  }), __jsx("span", null, "id-card")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "far fa-image"
  }), __jsx("span", null, "image")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "far fa-images"
  }), __jsx("span", null, "images")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "far fa-keyboard"
  }), __jsx("span", null, "keyboard")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "far fa-kiss"
  }), __jsx("span", null, "kiss")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "far fa-kiss-beam"
  }), __jsx("span", null, "kiss-beam")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "far fa-kiss-wink-heart"
  }), __jsx("span", null, "kiss-wink-heart")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "far fa-laugh"
  }), __jsx("span", null, "laugh")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "far fa-laugh-beam"
  }), __jsx("span", null, "laugh-beam")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "far fa-laugh-squint"
  }), __jsx("span", null, "laugh-squint")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "far fa-laugh-wink"
  }), __jsx("span", null, "laugh-wink")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "far fa-lemon"
  }), __jsx("span", null, "lemon")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "far fa-life-ring"
  }), __jsx("span", null, "life-ring")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "far fa-lightbulb"
  }), __jsx("span", null, "lightbulb")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "far fa-list-alt"
  }), __jsx("span", null, "list-alt")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "far fa-map"
  }), __jsx("span", null, "map")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "far fa-meh"
  }), __jsx("span", null, "meh")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "far fa-meh-blank"
  }), __jsx("span", null, "meh-blank")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "far fa-meh-rolling-eyes"
  }), __jsx("span", null, "meh-rolling-eyes")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "far fa-minus-square"
  }), __jsx("span", null, "minus-square")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "far fa-money-bill-alt"
  }), __jsx("span", null, "money-bill-alt")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "far fa-moon"
  }), __jsx("span", null, "moon")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "far fa-newspaper"
  }), __jsx("span", null, "newspaper")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "far fa-object-group"
  }), __jsx("span", null, "object-group")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "far fa-object-ungroup"
  }), __jsx("span", null, "object-ungroup")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "far fa-paper-plane"
  }), __jsx("span", null, "paper-plane")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "far fa-pause-circle"
  }), __jsx("span", null, "pause-circle")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "far fa-play-circle"
  }), __jsx("span", null, "play-circle")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "far fa-plus-square"
  }), __jsx("span", null, "plus-square")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "far fa-question-circle"
  }), __jsx("span", null, "question-circle")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "far fa-registered"
  }), __jsx("span", null, "registered")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "far fa-sad-cry"
  }), __jsx("span", null, "sad-cry")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "far fa-sad-tear"
  }), __jsx("span", null, "sad-tear")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "far fa-save"
  }), __jsx("span", null, "save")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "far fa-share-square"
  }), __jsx("span", null, "share-square")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "far fa-smile"
  }), __jsx("span", null, "smile")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "far fa-smile-beam"
  }), __jsx("span", null, "smile-beam")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "far fa-smile-wink"
  }), __jsx("span", null, "smile-wink")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "far fa-snowflake"
  }), __jsx("span", null, "snowflake")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "far fa-square"
  }), __jsx("span", null, "square")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "far fa-star"
  }), __jsx("span", null, "star")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "far fa-star-half"
  }), __jsx("span", null, "star-half")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "far fa-sticky-note"
  }), __jsx("span", null, "sticky-note")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "far fa-stop-circle"
  }), __jsx("span", null, "stop-circle")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "far fa-sun"
  }), __jsx("span", null, "sun")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "far fa-surprise"
  }), __jsx("span", null, "surprise")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "far fa-thumbs-down"
  }), __jsx("span", null, "thumbs-down")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "far fa-thumbs-up"
  }), __jsx("span", null, "thumbs-up")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "far fa-times-circle"
  }), __jsx("span", null, "times-circle")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "far fa-tired"
  }), __jsx("span", null, "tired")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "far fa-trash-alt"
  }), __jsx("span", null, "trash-alt")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "far fa-user"
  }), __jsx("span", null, "user")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "far fa-user-circle"
  }), __jsx("span", null, "user-circle")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "far fa-window-close"
  }), __jsx("span", null, "window-close")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "far fa-window-maximize"
  }), __jsx("span", null, "window-maximize")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "far fa-window-minimize"
  }), __jsx("span", null, "window-minimize")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "far fa-window-restore"
  }), __jsx("span", null, "window-restore"))))), __jsx("h5", {
    className: "mb-3"
  }, "Brands Icons"), __jsx("div", {
    className: "mb-4"
  }, __jsx("div", {
    className: "wpb_wrapper"
  }, __jsx("div", {
    className: "row fontawesome-icon-list cols-lg-4 cols-md-3 cols-xs-2 cols-1"
  }, __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fab fa-500px"
  }), __jsx("span", null, "500px")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fab fa-accessible-icon"
  }), __jsx("span", null, "accessible-icon")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fab fa-accusoft"
  }), __jsx("span", null, "accusoft")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fab fa-acquisitions-incorporated"
  }), __jsx("span", null, "acquisitions-incorporated")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fab fa-adn"
  }), __jsx("span", null, "adn")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fab fa-adobe"
  }), __jsx("span", null, "adobe")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fab fa-adversal"
  }), __jsx("span", null, "adversal")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fab fa-affiliatetheme"
  }), __jsx("span", null, "affiliatetheme")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fab fa-algolia"
  }), __jsx("span", null, "algolia")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fab fa-alipay"
  }), __jsx("span", null, "alipay")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fab fa-amazon"
  }), __jsx("span", null, "amazon")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fab fa-amazon-pay"
  }), __jsx("span", null, "amazon-pay")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fab fa-amilia"
  }), __jsx("span", null, "amilia")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fab fa-android"
  }), __jsx("span", null, "android")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fab fa-angellist"
  }), __jsx("span", null, "angellist")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fab fa-angrycreative"
  }), __jsx("span", null, "angrycreative")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fab fa-angular"
  }), __jsx("span", null, "angular")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fab fa-app-store"
  }), __jsx("span", null, "app-store")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fab fa-app-store-ios"
  }), __jsx("span", null, "app-store-ios")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fab fa-apper"
  }), __jsx("span", null, "apper")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fab fa-apple"
  }), __jsx("span", null, "apple")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fab fa-apple-pay"
  }), __jsx("span", null, "apple-pay")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fab fa-artstation"
  }), __jsx("span", null, "artstation")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fab fa-asymmetrik"
  }), __jsx("span", null, "asymmetrik")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fab fa-atlassian"
  }), __jsx("span", null, "atlassian")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fab fa-audible"
  }), __jsx("span", null, "audible")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fab fa-autoprefixer"
  }), __jsx("span", null, "autoprefixer")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fab fa-avianex"
  }), __jsx("span", null, "avianex")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fab fa-aviato"
  }), __jsx("span", null, "aviato")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fab fa-aws"
  }), __jsx("span", null, "aws")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fab fa-bandcamp"
  }), __jsx("span", null, "bandcamp")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fab fa-behance"
  }), __jsx("span", null, "behance")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fab fa-behance-square"
  }), __jsx("span", null, "behance-square")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fab fa-bimobject"
  }), __jsx("span", null, "bimobject")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fab fa-bitbucket"
  }), __jsx("span", null, "bitbucket")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fab fa-bitcoin"
  }), __jsx("span", null, "bitcoin")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fab fa-bity"
  }), __jsx("span", null, "bity")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fab fa-black-tie"
  }), __jsx("span", null, "black-tie")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fab fa-blackberry"
  }), __jsx("span", null, "blackberry")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fab fa-blogger"
  }), __jsx("span", null, "blogger")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fab fa-blogger-b"
  }), __jsx("span", null, "blogger-b")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fab fa-bluetooth"
  }), __jsx("span", null, "bluetooth")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fab fa-bluetooth-b"
  }), __jsx("span", null, "bluetooth-b")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fab fa-btc"
  }), __jsx("span", null, "btc")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fab fa-buromobelexperte"
  }), __jsx("span", null, "buromobelexperte")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fab fa-buysellads"
  }), __jsx("span", null, "buysellads")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fab fa-canadian-maple-leaf"
  }), __jsx("span", null, "canadian-maple-leaf")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fab fa-cc-amazon-pay"
  }), __jsx("span", null, "cc-amazon-pay")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fab fa-cc-amex"
  }), __jsx("span", null, "cc-amex")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fab fa-cc-apple-pay"
  }), __jsx("span", null, "cc-apple-pay")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fab fa-cc-diners-club"
  }), __jsx("span", null, "cc-diners-club")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fab fa-cc-discover"
  }), __jsx("span", null, "cc-discover")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fab fa-cc-jcb"
  }), __jsx("span", null, "cc-jcb")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fab fa-cc-mastercard"
  }), __jsx("span", null, "cc-mastercard")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fab fa-cc-paypal"
  }), __jsx("span", null, "cc-paypal")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fab fa-cc-stripe"
  }), __jsx("span", null, "cc-stripe")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fab fa-cc-visa"
  }), __jsx("span", null, "cc-visa")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fab fa-centercode"
  }), __jsx("span", null, "centercode")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fab fa-centos"
  }), __jsx("span", null, "centos")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fab fa-chrome"
  }), __jsx("span", null, "chrome")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fab fa-cloudscale"
  }), __jsx("span", null, "cloudscale")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fab fa-cloudsmith"
  }), __jsx("span", null, "cloudsmith")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fab fa-cloudversify"
  }), __jsx("span", null, "cloudversify")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fab fa-codepen"
  }), __jsx("span", null, "codepen")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fab fa-codiepie"
  }), __jsx("span", null, "codiepie")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fab fa-confluence"
  }), __jsx("span", null, "confluence")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fab fa-connectdevelop"
  }), __jsx("span", null, "connectdevelop")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fab fa-contao"
  }), __jsx("span", null, "contao")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fab fa-cpanel"
  }), __jsx("span", null, "cpanel")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fab fa-creative-commons"
  }), __jsx("span", null, "creative-commons")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fab fa-creative-commons-by"
  }), __jsx("span", null, "creative-commons-by")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fab fa-creative-commons-nc"
  }), __jsx("span", null, "creative-commons-nc")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fab fa-creative-commons-nc-eu"
  }), __jsx("span", null, "creative-commons-nc-eu")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fab fa-creative-commons-nc-jp"
  }), __jsx("span", null, "creative-commons-nc-jp")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fab fa-creative-commons-nd"
  }), __jsx("span", null, "creative-commons-nd")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fab fa-creative-commons-pd"
  }), __jsx("span", null, "creative-commons-pd")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fab fa-creative-commons-pd-alt"
  }), __jsx("span", null, "creative-commons-pd-alt")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fab fa-creative-commons-remix"
  }), __jsx("span", null, "creative-commons-remix")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fab fa-creative-commons-sa"
  }), __jsx("span", null, "creative-commons-sa")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fab fa-creative-commons-sampling"
  }), __jsx("span", null, "creative-commons-sampling")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fab fa-creative-commons-sampling-plus"
  }), __jsx("span", null, "creative-commons-sampling-plus")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fab fa-creative-commons-share"
  }), __jsx("span", null, "creative-commons-share")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fab fa-creative-commons-zero"
  }), __jsx("span", null, "creative-commons-zero")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fab fa-critical-role"
  }), __jsx("span", null, "critical-role")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fab fa-css3"
  }), __jsx("span", null, "css3")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fab fa-css3-alt"
  }), __jsx("span", null, "css3-alt")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fab fa-cuttlefish"
  }), __jsx("span", null, "cuttlefish")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fab fa-d-and-d"
  }), __jsx("span", null, "d-and-d")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fab fa-d-and-d-beyond"
  }), __jsx("span", null, "d-and-d-beyond")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fab fa-dashcube"
  }), __jsx("span", null, "dashcube")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fab fa-delicious"
  }), __jsx("span", null, "delicious")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fab fa-deploydog"
  }), __jsx("span", null, "deploydog")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fab fa-deskpro"
  }), __jsx("span", null, "deskpro")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fab fa-dev"
  }), __jsx("span", null, "dev")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fab fa-deviantart"
  }), __jsx("span", null, "deviantart")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fab fa-dhl"
  }), __jsx("span", null, "dhl")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fab fa-diaspora"
  }), __jsx("span", null, "diaspora")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fab fa-digg"
  }), __jsx("span", null, "digg")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fab fa-digital-ocean"
  }), __jsx("span", null, "digital-ocean")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fab fa-discord"
  }), __jsx("span", null, "discord")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fab fa-discourse"
  }), __jsx("span", null, "discourse")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fab fa-dochub"
  }), __jsx("span", null, "dochub")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fab fa-docker"
  }), __jsx("span", null, "docker")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fab fa-draft2digital"
  }), __jsx("span", null, "draft2digital")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fab fa-dribbble"
  }), __jsx("span", null, "dribbble")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fab fa-dribbble-square"
  }), __jsx("span", null, "dribbble-square")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fab fa-dropbox"
  }), __jsx("span", null, "dropbox")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fab fa-drupal"
  }), __jsx("span", null, "drupal")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fab fa-dyalog"
  }), __jsx("span", null, "dyalog")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fab fa-earlybirds"
  }), __jsx("span", null, "earlybirds")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fab fa-ebay"
  }), __jsx("span", null, "ebay")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fab fa-edge"
  }), __jsx("span", null, "edge")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fab fa-elementor"
  }), __jsx("span", null, "elementor")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fab fa-ello"
  }), __jsx("span", null, "ello")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fab fa-ember"
  }), __jsx("span", null, "ember")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fab fa-empire"
  }), __jsx("span", null, "empire")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fab fa-envira"
  }), __jsx("span", null, "envira")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fab fa-erlang"
  }), __jsx("span", null, "erlang")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fab fa-ethereum"
  }), __jsx("span", null, "ethereum")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fab fa-etsy"
  }), __jsx("span", null, "etsy")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fab fa-expeditedssl"
  }), __jsx("span", null, "expeditedssl")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fab fa-facebook"
  }), __jsx("span", null, "facebook")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fab fa-facebook-f"
  }), __jsx("span", null, "facebook-f")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fab fa-facebook-messenger"
  }), __jsx("span", null, "facebook-messenger")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fab fa-facebook-square"
  }), __jsx("span", null, "facebook-square")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fab fa-fantasy-flight-games"
  }), __jsx("span", null, "fantasy-flight-games")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fab fa-fedex"
  }), __jsx("span", null, "fedex")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fab fa-fedora"
  }), __jsx("span", null, "fedora")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fab fa-figma"
  }), __jsx("span", null, "figma")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fab fa-firefox"
  }), __jsx("span", null, "firefox")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fab fa-first-order"
  }), __jsx("span", null, "first-order")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fab fa-first-order-alt"
  }), __jsx("span", null, "first-order-alt")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fab fa-firstdraft"
  }), __jsx("span", null, "firstdraft")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fab fa-flickr"
  }), __jsx("span", null, "flickr")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fab fa-flipboard"
  }), __jsx("span", null, "flipboard")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fab fa-fly"
  }), __jsx("span", null, "fly")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fab fa-font-awesome"
  }), __jsx("span", null, "font-awesome")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fab fa-font-awesome-alt"
  }), __jsx("span", null, "font-awesome-alt")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fab fa-font-awesome-flag"
  }), __jsx("span", null, "font-awesome-flag")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fab fa-fonticons"
  }), __jsx("span", null, "fonticons")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fab fa-fonticons-fi"
  }), __jsx("span", null, "fonticons-fi")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fab fa-fort-awesome"
  }), __jsx("span", null, "fort-awesome")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fab fa-fort-awesome-alt"
  }), __jsx("span", null, "fort-awesome-alt")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fab fa-forumbee"
  }), __jsx("span", null, "forumbee")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fab fa-foursquare"
  }), __jsx("span", null, "foursquare")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fab fa-free-code-camp"
  }), __jsx("span", null, "free-code-camp")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fab fa-freebsd"
  }), __jsx("span", null, "freebsd")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fab fa-fulcrum"
  }), __jsx("span", null, "fulcrum")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fab fa-galactic-republic"
  }), __jsx("span", null, "galactic-republic")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fab fa-galactic-senate"
  }), __jsx("span", null, "galactic-senate")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fab fa-get-pocket"
  }), __jsx("span", null, "get-pocket")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fab fa-gg"
  }), __jsx("span", null, "gg")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fab fa-gg-circle"
  }), __jsx("span", null, "gg-circle")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fab fa-git"
  }), __jsx("span", null, "git")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fab fa-git-square"
  }), __jsx("span", null, "git-square")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fab fa-github"
  }), __jsx("span", null, "github")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fab fa-github-alt"
  }), __jsx("span", null, "github-alt")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fab fa-github-square"
  }), __jsx("span", null, "github-square")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fab fa-gitkraken"
  }), __jsx("span", null, "gitkraken")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fab fa-gitlab"
  }), __jsx("span", null, "gitlab")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fab fa-gitter"
  }), __jsx("span", null, "gitter")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fab fa-glide"
  }), __jsx("span", null, "glide")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fab fa-glide-g"
  }), __jsx("span", null, "glide-g")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fab fa-gofore"
  }), __jsx("span", null, "gofore")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fab fa-goodreads"
  }), __jsx("span", null, "goodreads")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fab fa-goodreads-g"
  }), __jsx("span", null, "goodreads-g")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fab fa-google"
  }), __jsx("span", null, "google")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fab fa-google-drive"
  }), __jsx("span", null, "google-drive")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fab fa-google-play"
  }), __jsx("span", null, "google-play")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fab fa-google-plus"
  }), __jsx("span", null, "google-plus")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fab fa-google-plus-g"
  }), __jsx("span", null, "google-plus-g")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fab fa-google-plus-square"
  }), __jsx("span", null, "google-plus-square")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fab fa-google-wallet"
  }), __jsx("span", null, "google-wallet")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fab fa-gratipay"
  }), __jsx("span", null, "gratipay")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fab fa-grav"
  }), __jsx("span", null, "grav")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fab fa-gripfire"
  }), __jsx("span", null, "gripfire")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fab fa-grunt"
  }), __jsx("span", null, "grunt")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fab fa-gulp"
  }), __jsx("span", null, "gulp")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fab fa-hacker-news"
  }), __jsx("span", null, "hacker-news")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fab fa-hacker-news-square"
  }), __jsx("span", null, "hacker-news-square")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fab fa-hackerrank"
  }), __jsx("span", null, "hackerrank")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fab fa-hips"
  }), __jsx("span", null, "hips")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fab fa-hire-a-helper"
  }), __jsx("span", null, "hire-a-helper")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fab fa-hooli"
  }), __jsx("span", null, "hooli")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fab fa-hornbill"
  }), __jsx("span", null, "hornbill")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fab fa-hotjar"
  }), __jsx("span", null, "hotjar")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fab fa-houzz"
  }), __jsx("span", null, "houzz")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fab fa-html5"
  }), __jsx("span", null, "html5")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fab fa-hubspot"
  }), __jsx("span", null, "hubspot")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fab fa-imdb"
  }), __jsx("span", null, "imdb")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fab fa-instagram"
  }), __jsx("span", null, "instagram")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fab fa-intercom"
  }), __jsx("span", null, "intercom")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fab fa-internet-explorer"
  }), __jsx("span", null, "internet-explorer")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fab fa-invision"
  }), __jsx("span", null, "invision")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fab fa-ioxhost"
  }), __jsx("span", null, "ioxhost")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fab fa-itunes"
  }), __jsx("span", null, "itunes")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fab fa-itunes-note"
  }), __jsx("span", null, "itunes-note")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fab fa-java"
  }), __jsx("span", null, "java")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fab fa-jedi-order"
  }), __jsx("span", null, "jedi-order")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fab fa-jenkins"
  }), __jsx("span", null, "jenkins")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fab fa-jira"
  }), __jsx("span", null, "jira")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fab fa-joget"
  }), __jsx("span", null, "joget")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fab fa-joomla"
  }), __jsx("span", null, "joomla")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fab fa-js"
  }), __jsx("span", null, "js")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fab fa-js-square"
  }), __jsx("span", null, "js-square")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fab fa-jsfiddle"
  }), __jsx("span", null, "jsfiddle")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fab fa-kaggle"
  }), __jsx("span", null, "kaggle")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fab fa-keybase"
  }), __jsx("span", null, "keybase")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fab fa-keycdn"
  }), __jsx("span", null, "keycdn")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fab fa-kickstarter"
  }), __jsx("span", null, "kickstarter")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fab fa-kickstarter-k"
  }), __jsx("span", null, "kickstarter-k")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fab fa-korvue"
  }), __jsx("span", null, "korvue")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fab fa-laravel"
  }), __jsx("span", null, "laravel")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fab fa-lastfm"
  }), __jsx("span", null, "lastfm")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fab fa-lastfm-square"
  }), __jsx("span", null, "lastfm-square")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fab fa-leanpub"
  }), __jsx("span", null, "leanpub")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fab fa-less"
  }), __jsx("span", null, "less")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fab fa-line"
  }), __jsx("span", null, "line")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fab fa-linkedin"
  }), __jsx("span", null, "linkedin")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fab fa-linkedin-in"
  }), __jsx("span", null, "linkedin-in")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fab fa-linode"
  }), __jsx("span", null, "linode")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fab fa-linux"
  }), __jsx("span", null, "linux")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fab fa-lyft"
  }), __jsx("span", null, "lyft")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fab fa-magento"
  }), __jsx("span", null, "magento")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fab fa-mailchimp"
  }), __jsx("span", null, "mailchimp")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fab fa-mandalorian"
  }), __jsx("span", null, "mandalorian")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fab fa-markdown"
  }), __jsx("span", null, "markdown")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fab fa-mastodon"
  }), __jsx("span", null, "mastodon")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fab fa-maxcdn"
  }), __jsx("span", null, "maxcdn")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fab fa-medapps"
  }), __jsx("span", null, "medapps")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fab fa-medium"
  }), __jsx("span", null, "medium")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fab fa-medium-m"
  }), __jsx("span", null, "medium-m")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fab fa-medrt"
  }), __jsx("span", null, "medrt")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fab fa-meetup"
  }), __jsx("span", null, "meetup")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fab fa-megaport"
  }), __jsx("span", null, "megaport")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fab fa-mendeley"
  }), __jsx("span", null, "mendeley")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fab fa-microsoft"
  }), __jsx("span", null, "microsoft")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fab fa-mix"
  }), __jsx("span", null, "mix")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fab fa-mixcloud"
  }), __jsx("span", null, "mixcloud")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fab fa-mizuni"
  }), __jsx("span", null, "mizuni")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fab fa-modx"
  }), __jsx("span", null, "modx")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fab fa-monero"
  }), __jsx("span", null, "monero")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fab fa-napster"
  }), __jsx("span", null, "napster")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fab fa-neos"
  }), __jsx("span", null, "neos")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fab fa-nimblr"
  }), __jsx("span", null, "nimblr")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fab fa-nintendo-switch"
  }), __jsx("span", null, "nintendo-switch")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fab fa-node"
  }), __jsx("span", null, "node")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fab fa-node-js"
  }), __jsx("span", null, "node-js")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fab fa-npm"
  }), __jsx("span", null, "npm")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fab fa-ns8"
  }), __jsx("span", null, "ns8")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fab fa-nutritionix"
  }), __jsx("span", null, "nutritionix")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fab fa-odnoklassniki"
  }), __jsx("span", null, "odnoklassniki")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fab fa-odnoklassniki-square"
  }), __jsx("span", null, "odnoklassniki-square")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fab fa-old-republic"
  }), __jsx("span", null, "old-republic")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fab fa-opencart"
  }), __jsx("span", null, "opencart")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fab fa-openid"
  }), __jsx("span", null, "openid")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fab fa-opera"
  }), __jsx("span", null, "opera")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fab fa-optin-monster"
  }), __jsx("span", null, "optin-monster")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fab fa-osi"
  }), __jsx("span", null, "osi")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fab fa-page4"
  }), __jsx("span", null, "page4")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fab fa-pagelines"
  }), __jsx("span", null, "pagelines")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fab fa-palfed"
  }), __jsx("span", null, "palfed")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fab fa-patreon"
  }), __jsx("span", null, "patreon")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fab fa-paypal"
  }), __jsx("span", null, "paypal")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fab fa-penny-arcade"
  }), __jsx("span", null, "penny-arcade")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fab fa-periscope"
  }), __jsx("span", null, "periscope")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fab fa-phabricator"
  }), __jsx("span", null, "phabricator")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fab fa-phoenix-framework"
  }), __jsx("span", null, "phoenix-framework")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fab fa-phoenix-squadron"
  }), __jsx("span", null, "phoenix-squadron")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fab fa-php"
  }), __jsx("span", null, "php")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fab fa-pied-piper"
  }), __jsx("span", null, "pied-piper")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fab fa-pied-piper-alt"
  }), __jsx("span", null, "pied-piper-alt")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fab fa-pied-piper-hat"
  }), __jsx("span", null, "pied-piper-hat")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fab fa-pied-piper-pp"
  }), __jsx("span", null, "pied-piper-pp")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fab fa-pinterest"
  }), __jsx("span", null, "pinterest")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fab fa-pinterest-p"
  }), __jsx("span", null, "pinterest-p")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fab fa-pinterest-square"
  }), __jsx("span", null, "pinterest-square")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fab fa-playstation"
  }), __jsx("span", null, "playstation")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fab fa-product-hunt"
  }), __jsx("span", null, "product-hunt")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fab fa-pushed"
  }), __jsx("span", null, "pushed")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fab fa-python"
  }), __jsx("span", null, "python")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fab fa-qq"
  }), __jsx("span", null, "qq")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fab fa-quinscape"
  }), __jsx("span", null, "quinscape")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fab fa-quora"
  }), __jsx("span", null, "quora")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fab fa-r-project"
  }), __jsx("span", null, "r-project")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fab fa-raspberry-pi"
  }), __jsx("span", null, "raspberry-pi")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fab fa-ravelry"
  }), __jsx("span", null, "ravelry")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fab fa-react"
  }), __jsx("span", null, "react")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fab fa-reacteurope"
  }), __jsx("span", null, "reacteurope")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fab fa-readme"
  }), __jsx("span", null, "readme")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fab fa-rebel"
  }), __jsx("span", null, "rebel")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fab fa-red-river"
  }), __jsx("span", null, "red-river")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fab fa-reddit"
  }), __jsx("span", null, "reddit")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fab fa-reddit-alien"
  }), __jsx("span", null, "reddit-alien")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fab fa-reddit-square"
  }), __jsx("span", null, "reddit-square")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fab fa-redhat"
  }), __jsx("span", null, "redhat")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fab fa-renren"
  }), __jsx("span", null, "renren")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fab fa-replyd"
  }), __jsx("span", null, "replyd")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fab fa-researchgate"
  }), __jsx("span", null, "researchgate")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fab fa-resolving"
  }), __jsx("span", null, "resolving")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fab fa-rev"
  }), __jsx("span", null, "rev")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fab fa-rocketchat"
  }), __jsx("span", null, "rocketchat")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fab fa-rockrms"
  }), __jsx("span", null, "rockrms")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fab fa-safari"
  }), __jsx("span", null, "safari")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fab fa-sass"
  }), __jsx("span", null, "sass")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fab fa-schlix"
  }), __jsx("span", null, "schlix")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fab fa-scribd"
  }), __jsx("span", null, "scribd")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fab fa-searchengin"
  }), __jsx("span", null, "searchengin")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fab fa-sellcast"
  }), __jsx("span", null, "sellcast")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fab fa-sellsy"
  }), __jsx("span", null, "sellsy")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fab fa-servicestack"
  }), __jsx("span", null, "servicestack")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fab fa-shirtsinbulk"
  }), __jsx("span", null, "shirtsinbulk")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fab fa-shopware"
  }), __jsx("span", null, "shopware")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fab fa-simplybuilt"
  }), __jsx("span", null, "simplybuilt")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fab fa-sistrix"
  }), __jsx("span", null, "sistrix")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fab fa-sith"
  }), __jsx("span", null, "sith")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fab fa-sketch"
  }), __jsx("span", null, "sketch")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fab fa-skyatlas"
  }), __jsx("span", null, "skyatlas")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fab fa-skype"
  }), __jsx("span", null, "skype")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fab fa-slack"
  }), __jsx("span", null, "slack")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fab fa-slack-hash"
  }), __jsx("span", null, "slack-hash")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fab fa-slideshare"
  }), __jsx("span", null, "slideshare")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fab fa-snapchat"
  }), __jsx("span", null, "snapchat")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fab fa-snapchat-ghost"
  }), __jsx("span", null, "snapchat-ghost")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fab fa-snapchat-square"
  }), __jsx("span", null, "snapchat-square")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fab fa-soundcloud"
  }), __jsx("span", null, "soundcloud")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fab fa-sourcetree"
  }), __jsx("span", null, "sourcetree")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fab fa-speakap"
  }), __jsx("span", null, "speakap")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fab fa-spotify"
  }), __jsx("span", null, "spotify")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fab fa-squarespace"
  }), __jsx("span", null, "squarespace")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fab fa-stack-exchange"
  }), __jsx("span", null, "stack-exchange")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fab fa-stack-overflow"
  }), __jsx("span", null, "stack-overflow")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fab fa-staylinked"
  }), __jsx("span", null, "staylinked")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fab fa-steam"
  }), __jsx("span", null, "steam")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fab fa-steam-square"
  }), __jsx("span", null, "steam-square")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fab fa-steam-symbol"
  }), __jsx("span", null, "steam-symbol")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fab fa-sticker-mule"
  }), __jsx("span", null, "sticker-mule")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fab fa-strava"
  }), __jsx("span", null, "strava")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fab fa-stripe"
  }), __jsx("span", null, "stripe")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fab fa-stripe-s"
  }), __jsx("span", null, "stripe-s")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fab fa-studiovinari"
  }), __jsx("span", null, "studiovinari")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fab fa-stumbleupon"
  }), __jsx("span", null, "stumbleupon")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fab fa-stumbleupon-circle"
  }), __jsx("span", null, "stumbleupon-circle")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fab fa-superpowers"
  }), __jsx("span", null, "superpowers")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fab fa-supple"
  }), __jsx("span", null, "supple")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fab fa-suse"
  }), __jsx("span", null, "suse")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fab fa-teamspeak"
  }), __jsx("span", null, "teamspeak")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fab fa-telegram"
  }), __jsx("span", null, "telegram")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fab fa-telegram-plane"
  }), __jsx("span", null, "telegram-plane")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fab fa-tencent-weibo"
  }), __jsx("span", null, "tencent-weibo")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fab fa-the-red-yeti"
  }), __jsx("span", null, "the-red-yeti")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fab fa-themeco"
  }), __jsx("span", null, "themeco")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fab fa-themeisle"
  }), __jsx("span", null, "themeisle")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fab fa-think-peaks"
  }), __jsx("span", null, "think-peaks")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fab fa-trade-federation"
  }), __jsx("span", null, "trade-federation")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fab fa-trello"
  }), __jsx("span", null, "trello")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fab fa-tripadvisor"
  }), __jsx("span", null, "tripadvisor")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fab fa-tumblr"
  }), __jsx("span", null, "tumblr")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fab fa-tumblr-square"
  }), __jsx("span", null, "tumblr-square")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fab fa-twitch"
  }), __jsx("span", null, "twitch")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fab fa-twitter"
  }), __jsx("span", null, "twitter")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fab fa-twitter-square"
  }), __jsx("span", null, "twitter-square")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fab fa-typo3"
  }), __jsx("span", null, "typo3")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fab fa-uber"
  }), __jsx("span", null, "uber")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fab fa-ubuntu"
  }), __jsx("span", null, "ubuntu")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fab fa-uikit"
  }), __jsx("span", null, "uikit")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fab fa-uniregistry"
  }), __jsx("span", null, "uniregistry")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fab fa-untappd"
  }), __jsx("span", null, "untappd")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fab fa-ups"
  }), __jsx("span", null, "ups")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fab fa-usb"
  }), __jsx("span", null, "usb")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fab fa-usps"
  }), __jsx("span", null, "usps")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fab fa-ussunnah"
  }), __jsx("span", null, "ussunnah")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fab fa-vaadin"
  }), __jsx("span", null, "vaadin")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fab fa-viacoin"
  }), __jsx("span", null, "viacoin")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fab fa-viadeo"
  }), __jsx("span", null, "viadeo")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fab fa-viadeo-square"
  }), __jsx("span", null, "viadeo-square")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fab fa-viber"
  }), __jsx("span", null, "viber")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fab fa-vimeo"
  }), __jsx("span", null, "vimeo")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fab fa-vimeo-square"
  }), __jsx("span", null, "vimeo-square")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fab fa-vimeo-v"
  }), __jsx("span", null, "vimeo-v")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fab fa-vine"
  }), __jsx("span", null, "vine")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fab fa-vk"
  }), __jsx("span", null, "vk")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fab fa-vnv"
  }), __jsx("span", null, "vnv")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fab fa-vuejs"
  }), __jsx("span", null, "vuejs")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fab fa-weebly"
  }), __jsx("span", null, "weebly")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fab fa-weibo"
  }), __jsx("span", null, "weibo")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fab fa-weixin"
  }), __jsx("span", null, "weixin")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fab fa-whatsapp"
  }), __jsx("span", null, "whatsapp")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fab fa-whatsapp-square"
  }), __jsx("span", null, "whatsapp-square")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fab fa-whmcs"
  }), __jsx("span", null, "whmcs")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fab fa-wikipedia-w"
  }), __jsx("span", null, "wikipedia-w")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fab fa-windows"
  }), __jsx("span", null, "windows")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fab fa-wix"
  }), __jsx("span", null, "wix")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fab fa-wizards-of-the-coast"
  }), __jsx("span", null, "wizards-of-the-coast")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fab fa-wolf-pack-battalion"
  }), __jsx("span", null, "wolf-pack-battalion")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fab fa-wordpress"
  }), __jsx("span", null, "wordpress")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fab fa-wordpress-simple"
  }), __jsx("span", null, "wordpress-simple")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fab fa-wpbeginner"
  }), __jsx("span", null, "wpbeginner")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fab fa-wpexplorer"
  }), __jsx("span", null, "wpexplorer")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fab fa-wpforms"
  }), __jsx("span", null, "wpforms")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fab fa-wpressr"
  }), __jsx("span", null, "wpressr")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fab fa-xbox"
  }), __jsx("span", null, "xbox")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fab fa-xing"
  }), __jsx("span", null, "xing")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fab fa-xing-square"
  }), __jsx("span", null, "xing-square")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fab fa-y-combinator"
  }), __jsx("span", null, "y-combinator")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fab fa-yahoo"
  }), __jsx("span", null, "yahoo")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fab fa-yandex"
  }), __jsx("span", null, "yandex")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fab fa-yandex-international"
  }), __jsx("span", null, "yandex-international")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fab fa-yarn"
  }), __jsx("span", null, "yarn")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fab fa-yelp"
  }), __jsx("span", null, "yelp")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fab fa-yoast"
  }), __jsx("span", null, "yoast")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fab fa-youtube"
  }), __jsx("span", null, "youtube")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fab fa-youtube-square"
  }), __jsx("span", null, "youtube-square")), __jsx("div", {
    className: "sample-icon"
  }, __jsx("i", {
    className: "fab fa-zhihu"
  }), __jsx("span", null, "zhihu"))))))))), __jsx(_components_partials_elements_elements_list__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z, {
    adClass: "bg-white mt-2 pt-10 pb-10"
  })));
}

/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().memo(Icons));

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

/***/ 7659:
/***/ (function(module) {

"use strict";
module.exports = require("react-tabs");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, [1664,5588,3405], function() { return __webpack_exec__(4755); });
module.exports = __webpack_exports__;

})();