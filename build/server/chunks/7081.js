exports.id = 7081;
exports.ids = [7081];
exports.modules = {

/***/ 7081:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7530);
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9290);
/* harmony import */ var react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _server_apollo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5438);
/* harmony import */ var _server_queries__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4733);
/* harmony import */ var _components_features_custom_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8765);
/* harmony import */ var _components_features_owl_carousel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4138);
/* harmony import */ var _components_features_product_product_sm__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5379);
/* harmony import */ var _utils_data_carousel__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(4943);

var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);









function ProductsSidebar(props) {
  const {
    adClass = '',
    type = "right"
  } = props;
  const {
    data,
    loading,
    error
  } = (0,_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_1__.useQuery)(_server_queries__WEBPACK_IMPORTED_MODULE_4__/* .GET_SHOP_SIDEBAR_DATA */ .EP, {
    variables: {
      featured: true
    }
  });
  const featured = data && data.shopSidebarData.featured;

  const toggleSidebarHandler = e => {
    if (type === "right") document.querySelector('body').classList.toggle('right-sidebar-active');else document.querySelector('body').classList.toggle('sidebar-active');
  };

  const hideSidebarhandler = e => {
    if (type === "right") document.querySelector('body').classList.remove('right-sidebar-active');else document.querySelector('body').classList.remove('sidebar-active');
  };

  return __jsx("aside", {
    className: `col-lg-3 sidebar-fixed sticky-sidebar-wrapper ${adClass} ${type === 'left' ? 'sidebar' : 'right-sidebar'}`
  }, __jsx("div", {
    className: "sidebar-overlay",
    onClick: hideSidebarhandler
  }, __jsx(_components_features_custom_link__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z, {
    className: "sidebar-close",
    href: "#"
  }, __jsx("i", {
    className: "d-icon-times"
  }))), __jsx("div", {
    className: "sidebar-toggle",
    onClick: toggleSidebarHandler
  }, type === "right" ? __jsx("i", {
    className: "fas fa-chevron-left"
  }) : __jsx("i", {
    className: "fas fa-chevron-right"
  })), __jsx("div", {
    className: "sidebar-content"
  }, loading ? __jsx("div", {
    className: "widget-2"
  }) : __jsx("div", {
    className: "sticky-sidebar"
  }, __jsx("div", {
    className: "service-list mb-4"
  }, __jsx("div", {
    className: "icon-box icon-box-side icon-box3"
  }, __jsx("span", {
    className: "icon-box-icon"
  }, __jsx("i", {
    className: "d-icon-secure"
  })), __jsx("div", {
    className: "icon-box-content"
  }, __jsx("h4", {
    className: "icon-box-title text-capitalize"
  }, "Secured Payment"), __jsx("p", null, "We secure payment!"))), __jsx("div", {
    className: "icon-box icon-box-side icon-box1"
  }, __jsx("span", {
    className: "icon-box-icon"
  }, __jsx("i", {
    className: "d-icon-truck"
  })), __jsx("div", {
    className: "icon-box-content"
  }, __jsx("h4", {
    className: "icon-box-title text-capitalize"
  }, "Free Shipping"), __jsx("p", null, "For all orders over $99"))), __jsx("div", {
    className: "icon-box icon-box-side icon-box2"
  }, __jsx("span", {
    className: "icon-box-icon"
  }, __jsx("i", {
    className: "d-icon-money"
  })), __jsx("div", {
    className: "icon-box-content"
  }, __jsx("h4", {
    className: "icon-box-title text-capitalize"
  }, "Money Back"), __jsx("p", null, "Any back within 30 days")))), __jsx("div", {
    className: "banner banner-fixed mb-7"
  }, __jsx("figure", null, __jsx(react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_2__.LazyLoadImage, {
    src: "./images/product-banner.jpg",
    alt: "banner",
    width: "280",
    height: "320",
    effect: "opacity",
    style: {
      backgroundColor: "#BDD0DE"
    }
  })), __jsx("div", {
    className: "banner-content text-center"
  }, __jsx("h5", {
    className: "banner-subtitle ls-l text-uppercase mb-0"
  }, "Gucci Shoes"), __jsx("h3", {
    className: "banner-title ls-s text-uppercase mb-0"
  }, "New Trend 2021"))), __jsx("div", {
    className: "widget widget-products"
  }, __jsx("h4", {
    className: "widget-title mb-3 lh-1 border-no text-capitalize "
  }, "Our Featured"), __jsx("ul", {
    className: "widget-body"
  }, __jsx(_components_features_owl_carousel__WEBPACK_IMPORTED_MODULE_6__/* .default */ .Z, {
    adClass: "owl-nav-top",
    options: _utils_data_carousel__WEBPACK_IMPORTED_MODULE_8__/* .mainSlider7 */ .wI
  }, __jsx("div", {
    className: "products-col"
  }, featured.slice(0, 3).map((product, index) => __jsx(_components_features_product_product_sm__WEBPACK_IMPORTED_MODULE_7__/* .default */ .Z, {
    product: product,
    key: "small-product-" + index
  }))), __jsx("div", {
    className: "products-col"
  }, featured.slice(0, 3).map((product, index) => __jsx(_components_features_product_product_sm__WEBPACK_IMPORTED_MODULE_7__/* .default */ .Z, {
    product: product,
    key: "small-product-" + index
  })))))))));
}

/* harmony default export */ __webpack_exports__["Z"] = ((0,_server_apollo__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z)({
  ssr: true
})(ProductsSidebar));

/***/ })

};
;