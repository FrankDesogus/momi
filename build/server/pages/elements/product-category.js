(function() {
var exports = {};
exports.id = 4285;
exports.ids = [4285,3866];
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

/***/ 9089:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9290);
/* harmony import */ var react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6481);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_features_custom_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8765);
/* harmony import */ var _components_features_breadcrumb__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4699);
/* harmony import */ var _components_features_owl_carousel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4138);
/* harmony import */ var _components_partials_elements_elements_list__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3405);
/* harmony import */ var _utils_data_carousel__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(4943);
var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);









function Cta() {
  return __jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, __jsx((react_helmet__WEBPACK_IMPORTED_MODULE_2___default()), null, __jsx("title", null, "Riode React eCommerce Template | Product Category")), __jsx("h1", {
    className: "d-none"
  }, "Riode React eCommerce Template - Product Category"), __jsx(_components_features_breadcrumb__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z, {
    subTitle: "Elements",
    title: "Element Categories",
    parentUrl: "/elements"
  }), __jsx("div", {
    className: "page-content"
  }, __jsx("div", {
    className: "container"
  }, __jsx("section", {
    className: "default-section"
  }, __jsx("h2", {
    className: "title title-center"
  }, "Default"), __jsx("div", {
    className: "row"
  }, __jsx("div", {
    className: "col-sm-6 col-lg-3 mb-4"
  }, __jsx("div", {
    className: "category category-default category-absolute overlay-zoom"
  }, __jsx(_components_features_custom_link__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {
    href: "#"
  }, __jsx("figure", {
    className: "category-media"
  }, __jsx(react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_1__.LazyLoadImage, {
    src: "./images/categories/category1.jpg",
    alt: "category",
    width: "280",
    height: "280",
    effect: "opacity; transform"
  }))), __jsx("div", {
    className: "category-content"
  }, __jsx("h4", {
    className: "category-name"
  }, __jsx(_components_features_custom_link__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {
    href: {
      pathname: '/shop',
      query: {
        category: 'for-men-s'
      }
    }
  }, "For Men's")), __jsx(_components_features_custom_link__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {
    href: "#",
    className: "btn btn-primary"
  }, "Shop Now")))), __jsx("div", {
    className: "col-sm-6 col-lg-3 mb-4"
  }, __jsx("div", {
    className: "category category-default category-absolute overlay-zoom"
  }, __jsx(_components_features_custom_link__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {
    href: "#"
  }, __jsx("figure", {
    className: "category-media"
  }, __jsx(react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_1__.LazyLoadImage, {
    src: "./images/categories/category2.jpg",
    alt: "category",
    width: "280",
    height: "280",
    effect: "opacity; transform"
  }))), __jsx("div", {
    className: "category-content"
  }, __jsx("h4", {
    className: "category-name"
  }, __jsx(_components_features_custom_link__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {
    href: {
      pathname: '/shop',
      query: {
        category: 'accessories'
      }
    }
  }, "Accessories")), __jsx(_components_features_custom_link__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {
    href: "#",
    className: "btn btn-primary"
  }, "Shop Now")))), __jsx("div", {
    className: "col-sm-6 col-lg-3 mb-4"
  }, __jsx("div", {
    className: "category category-default category-absolute overlay-zoom"
  }, __jsx(_components_features_custom_link__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {
    href: "#"
  }, __jsx("figure", {
    className: "category-media"
  }, __jsx(react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_1__.LazyLoadImage, {
    src: "./images/categories/category3.jpg",
    alt: "category",
    width: "280",
    height: "280",
    effect: "opacity; transform"
  }))), __jsx("div", {
    className: "category-content"
  }, __jsx("h4", {
    className: "category-name"
  }, __jsx(_components_features_custom_link__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {
    href: {
      pathname: '/shop',
      query: {
        category: 'fashionable-women-s'
      }
    }
  }, "Fashionable Women's")), __jsx(_components_features_custom_link__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {
    href: "#",
    className: "btn btn-primary"
  }, "Shop Now")))), __jsx("div", {
    className: "col-sm-6 col-lg-3 mb-4"
  }, __jsx("div", {
    className: "category category-default category-absolute overlay-zoom"
  }, __jsx(_components_features_custom_link__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {
    href: "#"
  }, __jsx("figure", {
    className: "category-media"
  }, __jsx(react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_1__.LazyLoadImage, {
    src: "./images/categories/category4.jpg",
    alt: "category",
    width: "280",
    height: "280",
    effect: "opacity; transform"
  }))), __jsx("div", {
    className: "category-content"
  }, __jsx("h4", {
    className: "category-name"
  }, __jsx(_components_features_custom_link__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {
    href: {
      pathname: '/shop',
      query: {
        category: 'cosmetic'
      }
    }
  }, "Cosmetic")), __jsx(_components_features_custom_link__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {
    href: "#",
    className: "btn btn-primary"
  }, "Shop Now")))))), __jsx("section", null, __jsx("h2", {
    className: "title title-center mt-10"
  }, "Carousel"), __jsx(_components_features_owl_carousel__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z, {
    adClass: "owl-theme owl-nav-full",
    options: _utils_data_carousel__WEBPACK_IMPORTED_MODULE_7__/* .mainSlider12 */ .nX
  }, __jsx("div", {
    className: "category category-light category-absolute overlay-zoom"
  }, __jsx(_components_features_custom_link__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {
    href: "#"
  }, __jsx("figure", {
    className: "category-media"
  }, __jsx(react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_1__.LazyLoadImage, {
    src: "./images/categories/category1.jpg",
    alt: "category",
    width: "280",
    height: "280",
    effect: "opacity; transform"
  }))), __jsx("div", {
    className: "category-content"
  }, __jsx("h4", {
    className: "category-name"
  }, __jsx(_components_features_custom_link__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {
    href: "#"
  }, "For Men's")))), __jsx("div", {
    className: "category category-light category-absolute overlay-zoom"
  }, __jsx(_components_features_custom_link__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {
    href: "#"
  }, __jsx("figure", {
    className: "category-media"
  }, __jsx(react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_1__.LazyLoadImage, {
    src: "./images/categories/category2.jpg",
    alt: "category",
    width: "280",
    height: "280",
    effect: "opacity; transform"
  }))), __jsx("div", {
    className: "category-content"
  }, __jsx("h4", {
    className: "category-name"
  }, __jsx(_components_features_custom_link__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {
    href: "#"
  }, "Accessories")))), __jsx("div", {
    className: "category category-light category-absolute overlay-zoom"
  }, __jsx(_components_features_custom_link__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {
    href: "#"
  }, __jsx("figure", {
    className: "category-media"
  }, __jsx(react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_1__.LazyLoadImage, {
    src: "./images/categories/category3.jpg",
    alt: "category",
    width: "280",
    height: "280",
    effect: "opacity; transform"
  }))), __jsx("div", {
    className: "category-content"
  }, __jsx("h4", {
    className: "category-name"
  }, __jsx(_components_features_custom_link__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {
    href: "#"
  }, "Fashionable Women\u2019s")))), __jsx("div", {
    className: "category category-light category-absolute overlay-zoom"
  }, __jsx(_components_features_custom_link__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {
    href: "#"
  }, __jsx("figure", {
    className: "category-media"
  }, __jsx(react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_1__.LazyLoadImage, {
    src: "./images/categories/category4.jpg",
    alt: "category",
    width: "280",
    height: "280",
    effect: "opacity; transform"
  }))), __jsx("div", {
    className: "category-content"
  }, __jsx("h4", {
    className: "category-name"
  }, __jsx(_components_features_custom_link__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {
    href: "#"
  }, "Cosmetic")))))), __jsx("section", {
    className: "mt-10 pt-4"
  }, __jsx("h2", {
    className: "title title-center"
  }, "Icon categories"), __jsx("div", {
    className: "row"
  }, __jsx("div", {
    className: "col-xl-2 col-lg-3 col-sm-4 col-6 mb-4"
  }, __jsx("div", {
    className: "category category-icon"
  }, __jsx(_components_features_custom_link__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {
    href: "#"
  }, __jsx("figure", {
    className: "category-media"
  }, __jsx("i", {
    className: "d-icon-t-shirt2"
  })), __jsx("div", {
    className: "category-content"
  }, __jsx("h4", {
    className: "category-name"
  }, "Fashion"))))), __jsx("div", {
    className: "col-xl-2 col-lg-3 col-sm-4 col-6 mb-4"
  }, __jsx("div", {
    className: "category category-icon"
  }, __jsx(_components_features_custom_link__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {
    href: "#"
  }, __jsx("figure", {
    className: "category-media"
  }, __jsx("i", {
    className: "d-icon-camera2"
  })), __jsx("div", {
    className: "category-content"
  }, __jsx("h4", {
    className: "category-name"
  }, "Electronics"))))), __jsx("div", {
    className: "col-xl-2 col-lg-3 col-sm-4 col-6 mb-4"
  }, __jsx("div", {
    className: "category category-icon"
  }, __jsx(_components_features_custom_link__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {
    href: "#"
  }, __jsx("figure", {
    className: "category-media"
  }, __jsx("i", {
    className: "d-icon-desktop"
  })), __jsx("div", {
    className: "category-content"
  }, __jsx("h4", {
    className: "category-name"
  }, "Computer"))))), __jsx("div", {
    className: "col-xl-2 col-lg-3 col-sm-4 col-6 mb-4"
  }, __jsx("div", {
    className: "category category-icon"
  }, __jsx(_components_features_custom_link__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {
    href: "#"
  }, __jsx("figure", {
    className: "category-media"
  }, __jsx("i", {
    className: "d-icon-backpack"
  })), __jsx("div", {
    className: "category-content"
  }, __jsx("h4", {
    className: "category-name"
  }, "Bag & Backpacks"))))), __jsx("div", {
    className: "col-xl-2 col-lg-3 col-sm-4 col-6 mb-4"
  }, __jsx("div", {
    className: "category category-icon"
  }, __jsx(_components_features_custom_link__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {
    href: "#"
  }, __jsx("figure", {
    className: "category-media"
  }, __jsx("i", {
    className: "d-icon-basketball1"
  })), __jsx("div", {
    className: "category-content"
  }, __jsx("h4", {
    className: "category-name"
  }, "Sports"))))), __jsx("div", {
    className: "col-xl-2 col-lg-3 col-sm-4 col-6 mb-4"
  }, __jsx("div", {
    className: "category category-icon"
  }, __jsx(_components_features_custom_link__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {
    href: "#"
  }, __jsx("figure", {
    className: "category-media"
  }, __jsx("i", {
    className: "d-icon-babycare"
  })), __jsx("div", {
    className: "category-content"
  }, __jsx("h4", {
    className: "category-name"
  }, "Toys & Babycare"))))))), __jsx("section", {
    className: "ellipse-section mt-10"
  }, __jsx("h2", {
    className: "title title-center"
  }, "Ellipse Style"), __jsx(_components_features_owl_carousel__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z, {
    adClass: "owl-theme",
    options: _utils_data_carousel__WEBPACK_IMPORTED_MODULE_7__/* .mainSlider9 */ .if
  }, __jsx("div", {
    className: "category category-ellipse"
  }, __jsx(_components_features_custom_link__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {
    href: "#"
  }, __jsx("figure", {
    className: "category-media"
  }, __jsx("img", {
    src: "images/categories/category1.png",
    alt: "Cateogry",
    width: "196",
    height: "196"
  }))), __jsx("div", {
    className: "category-content"
  }, __jsx("h4", {
    className: "category-name"
  }, __jsx(_components_features_custom_link__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {
    href: "#"
  }, "Newborn Essentials")), __jsx("span", {
    className: "category-count"
  }, __jsx("span", null, "0"), " Products"))), __jsx("div", {
    className: "category category-ellipse"
  }, __jsx(_components_features_custom_link__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {
    href: "#"
  }, __jsx("figure", {
    className: "category-media"
  }, __jsx("img", {
    src: "images/categories/category2.png",
    alt: "Cateogry",
    width: "196",
    height: "196"
  }))), __jsx("div", {
    className: "category-content"
  }, __jsx("h4", {
    className: "category-name"
  }, __jsx(_components_features_custom_link__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {
    href: "#"
  }, "Toy")), __jsx("span", {
    className: "category-count"
  }, __jsx("span", null, "0"), " Products"))), __jsx("div", {
    className: "category category-ellipse"
  }, __jsx(_components_features_custom_link__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {
    href: "#"
  }, __jsx("figure", {
    className: "category-media"
  }, __jsx("img", {
    src: "images/categories/category3.png",
    alt: "Cateogry",
    width: "196",
    height: "196"
  }))), __jsx("div", {
    className: "category-content"
  }, __jsx("h4", {
    className: "category-name"
  }, __jsx(_components_features_custom_link__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {
    href: "#"
  }, "Summer Sale is On")), __jsx("span", {
    className: "category-count"
  }, __jsx("span", null, "0"), " Products"))), __jsx("div", {
    className: "category category-ellipse"
  }, __jsx(_components_features_custom_link__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {
    href: "#"
  }, __jsx("figure", {
    className: "category-media"
  }, __jsx("img", {
    src: "images/categories/category4.png",
    alt: "Cateogry",
    width: "196",
    height: "196"
  }))), __jsx("div", {
    className: "category-content"
  }, __jsx("h4", {
    className: "category-name"
  }, __jsx(_components_features_custom_link__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {
    href: "#"
  }, "Clothes")), __jsx("span", {
    className: "category-count"
  }, __jsx("span", null, "0"), " Products"))), __jsx("div", {
    className: "category category-ellipse"
  }, __jsx(_components_features_custom_link__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {
    href: "#"
  }, __jsx("figure", {
    className: "category-media"
  }, __jsx("img", {
    src: "images/categories/category5.png",
    alt: "Cateogry",
    width: "196",
    height: "196"
  }))), __jsx("div", {
    className: "category-content"
  }, __jsx("h4", {
    className: "category-name"
  }, __jsx(_components_features_custom_link__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {
    href: "#"
  }, "Footwear & Accessories")), __jsx("span", {
    className: "category-count"
  }, __jsx("span", null, "0"), " Products"))))), __jsx("section", {
    className: "mt-10 pt-4"
  }, __jsx("h2", {
    className: "title title-center"
  }, "Classic"), __jsx(_components_features_owl_carousel__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z, {
    adClass: "owl-theme",
    options: _utils_data_carousel__WEBPACK_IMPORTED_MODULE_7__/* .mainSlider5 */ .cD
  }, __jsx("div", {
    className: "category category-absolute category-classic"
  }, __jsx("figure", {
    className: "category-media"
  }, __jsx("img", {
    src: "images/categories/category5.jpg",
    alt: "Cateogry",
    width: "280",
    height: "280"
  })), __jsx("div", {
    className: "category-content"
  }, __jsx("h4", {
    className: "category-name"
  }, "Women's Collection"), __jsx("span", {
    className: "category-count"
  }, "1 Products"))), __jsx("div", {
    className: "category category-absolute category-classic"
  }, __jsx("figure", {
    className: "category-media"
  }, __jsx("img", {
    src: "images/categories/category6.jpg",
    alt: "Cateogry",
    width: "280",
    height: "280"
  })), __jsx("div", {
    className: "category-content"
  }, __jsx("h4", {
    className: "category-name"
  }, "Electronics"), __jsx("span", {
    className: "category-count"
  }, "0 Products"))), __jsx("div", {
    className: "category category-absolute category-classic"
  }, __jsx("figure", {
    className: "category-media"
  }, __jsx("img", {
    src: "images/categories/category7.jpg",
    alt: "Cateogry",
    width: "280",
    height: "280"
  })), __jsx("div", {
    className: "category-content"
  }, __jsx("h4", {
    className: "category-name"
  }, "For Men's"), __jsx("span", {
    className: "category-count"
  }, "0 Products"))), __jsx("div", {
    className: "category category-absolute category-classic"
  }, __jsx("figure", {
    className: "category-media"
  }, __jsx("img", {
    src: "images/categories/category8.jpg",
    alt: "Cateogry",
    width: "280",
    height: "280"
  })), __jsx("div", {
    className: "category-content"
  }, __jsx("h4", {
    className: "category-name"
  }, "Sporting Goods"), __jsx("span", {
    className: "category-count"
  }, "7 Products"))))), __jsx("section", {
    className: "mt-10 pt-4 border-container"
  }, __jsx("h2", {
    className: "title title-center"
  }, "Category Group 1"), __jsx(_components_features_owl_carousel__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z, {
    adClass: "owl-theme",
    options: _utils_data_carousel__WEBPACK_IMPORTED_MODULE_7__/* .mainSlider6 */ .wf
  }, __jsx("div", {
    className: "category category-group-image"
  }, __jsx(_components_features_custom_link__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {
    href: "#"
  }, __jsx("figure", {
    className: "category-media"
  }, __jsx(react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_1__.LazyLoadImage, {
    src: "./images/categories/category13.jpg",
    alt: "category",
    width: "190",
    height: "169",
    effect: "opacity"
  }))), __jsx("div", {
    className: "category-content"
  }, __jsx("h4", {
    className: "category-name"
  }, __jsx(_components_features_custom_link__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {
    href: "#"
  }, "Electronics")), __jsx("ul", {
    className: "category-list"
  }, __jsx("li", null, __jsx(_components_features_custom_link__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {
    href: "#"
  }, "Air conditioners")), __jsx("li", null, __jsx(_components_features_custom_link__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {
    href: "#"
  }, "Machines")), __jsx("li", null, __jsx(_components_features_custom_link__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {
    href: "#"
  }, "Musical instrument")), __jsx("li", null, __jsx(_components_features_custom_link__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {
    href: "#"
  }, "Office Electronics")), __jsx("li", null, __jsx(_components_features_custom_link__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {
    href: "#"
  }, "TV"))))), __jsx("div", {
    className: "category category-group-image"
  }, __jsx(_components_features_custom_link__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {
    href: "#"
  }, __jsx("figure", {
    className: "category-media"
  }, __jsx(react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_1__.LazyLoadImage, {
    src: "./images/categories/category14.jpg",
    alt: "category",
    width: "190",
    height: "169",
    effect: "opacity"
  }))), __jsx("div", {
    className: "category-content"
  }, __jsx("h4", {
    className: "category-name"
  }, __jsx(_components_features_custom_link__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {
    href: "#"
  }, "Fashion & Clothings")), __jsx("ul", {
    className: "category-list"
  }, __jsx("li", null, __jsx(_components_features_custom_link__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {
    href: "#"
  }, "Accessories")), __jsx("li", null, __jsx(_components_features_custom_link__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {
    href: "#"
  }, "Bags & Backpacks")), __jsx("li", null, __jsx(_components_features_custom_link__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {
    href: "#"
  }, "Men's")), __jsx("li", null, __jsx(_components_features_custom_link__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {
    href: "#"
  }, "Shoes & Boots")), __jsx("li", null, __jsx(_components_features_custom_link__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {
    href: "#"
  }, "Women\u2019s"))))), __jsx("div", {
    className: "category category-group-image"
  }, __jsx(_components_features_custom_link__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {
    href: "#"
  }, __jsx("figure", {
    className: "category-media"
  }, __jsx(react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_1__.LazyLoadImage, {
    src: "./images/categories/category15.jpg",
    alt: "category",
    width: "190",
    height: "169",
    effect: "opacity"
  }))), __jsx("div", {
    className: "category-content"
  }, __jsx("h4", {
    className: "category-name"
  }, __jsx(_components_features_custom_link__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {
    href: "#"
  }, "Computers")), __jsx("ul", {
    className: "category-list"
  }, __jsx("li", null, __jsx(_components_features_custom_link__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {
    href: "#"
  }, "Desktop PC")), __jsx("li", null, __jsx(_components_features_custom_link__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {
    href: "#"
  }, "Laptop")), __jsx("li", null, __jsx(_components_features_custom_link__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {
    href: "#"
  }, "PC Components")), __jsx("li", null, __jsx(_components_features_custom_link__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {
    href: "#"
  }, "PC Gaming")), __jsx("li", null, __jsx(_components_features_custom_link__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {
    href: "#"
  }, "Storage & Memory"))))))), __jsx("section", {
    className: "mt-10 pt-4"
  }, __jsx("h2", {
    className: "title title-center"
  }, "Category Group 2"), __jsx(_components_features_owl_carousel__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z, {
    adClass: "owl-theme",
    options: _utils_data_carousel__WEBPACK_IMPORTED_MODULE_7__/* .mainSlider6 */ .wf
  }, __jsx("div", {
    className: "category category-group-icon",
    style: {
      backgroundColor: "#4b5577"
    }
  }, __jsx(_components_features_custom_link__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {
    href: "#"
  }, __jsx("figure", {
    className: "category-media"
  }, __jsx("i", {
    className: "d-icon-t-shirt1"
  })), __jsx("h4", {
    className: "category-name"
  }, "Clothing")), __jsx("div", {
    className: "category-content"
  }, __jsx("ul", {
    className: "category-list"
  }, __jsx("li", null, __jsx(_components_features_custom_link__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {
    href: "#"
  }, "Accessories")), __jsx("li", null, __jsx(_components_features_custom_link__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {
    href: "#"
  }, "Bracelets")), __jsx("li", null, __jsx(_components_features_custom_link__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {
    href: "#"
  }, "Men's Necklace")), __jsx("li", null, __jsx(_components_features_custom_link__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {
    href: "#"
  }, "Pendant")), __jsx("li", null, __jsx(_components_features_custom_link__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {
    href: "#"
  }, "Sale")), __jsx("li", null, __jsx(_components_features_custom_link__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {
    href: "#"
  }, "Watch"))))), __jsx("div", {
    className: "category category-group-icon",
    style: {
      backgroundColor: "#6d52af"
    }
  }, __jsx(_components_features_custom_link__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {
    href: "#"
  }, __jsx("figure", {
    className: "category-media"
  }, __jsx("i", {
    className: "d-icon-basketball2"
  })), __jsx("h4", {
    className: "category-name"
  }, "Sporting Goods")), __jsx("div", {
    className: "category-content"
  }, __jsx("ul", {
    className: "category-list"
  }, __jsx("li", null, __jsx(_components_features_custom_link__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {
    href: "#"
  }, "Accessories")), __jsx("li", null, __jsx(_components_features_custom_link__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {
    href: "#"
  }, "Gloves")), __jsx("li", null, __jsx(_components_features_custom_link__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {
    href: "#"
  }, "Men's")), __jsx("li", null, __jsx(_components_features_custom_link__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {
    href: "#"
  }, "Shoes")), __jsx("li", null, __jsx(_components_features_custom_link__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {
    href: "#"
  }, "Training Shirt")), __jsx("li", null, __jsx(_components_features_custom_link__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {
    href: "#"
  }, "Women's"))))), __jsx("div", {
    className: "category category-group-icon",
    style: {
      backgroundColor: "#2b579a"
    }
  }, __jsx(_components_features_custom_link__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {
    href: "#"
  }, __jsx("figure", {
    className: "category-media"
  }, __jsx("i", {
    className: "d-icon-backpack"
  })), __jsx("h4", {
    className: "category-name"
  }, "Bag & Backpack")), __jsx("div", {
    className: "category-content"
  }, __jsx("ul", {
    className: "category-list"
  }, __jsx("li", null, __jsx(_components_features_custom_link__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {
    href: "#"
  }, "Fashion Bags")), __jsx("li", null, __jsx(_components_features_custom_link__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {
    href: "#"
  }, "Hand Bags")), __jsx("li", null, __jsx(_components_features_custom_link__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {
    href: "#"
  }, "Kid's Bags")), __jsx("li", null, __jsx(_components_features_custom_link__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {
    href: "#"
  }, "Men's Bags")), __jsx("li", null, __jsx(_components_features_custom_link__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {
    href: "#"
  }, "Trip Bags")), __jsx("li", null, __jsx(_components_features_custom_link__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {
    href: "#"
  }, "Women's"))))))), __jsx("section", {
    className: "category-section masonry-section mt-10 pt-4"
  }, __jsx("h2", {
    className: "title title-center"
  }, "Banner Style"), __jsx("div", {
    className: "row grid gutter-sm"
  }, __jsx("div", {
    className: "grid-item height-x2"
  }, __jsx("div", {
    className: "category category-banner category-absolute overlay-light"
  }, __jsx(_components_features_custom_link__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {
    href: "#"
  }, __jsx("figure", {
    className: "category-media"
  }, __jsx(react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_1__.LazyLoadImage, {
    src: "./images/categories/category9.jpg",
    alt: "category",
    width: "585",
    height: "397",
    effect: "opacity"
  }))), __jsx("div", {
    className: "category-content"
  }, __jsx("h4", {
    className: "category-name"
  }, "Comfort Dresses"), __jsx("span", {
    className: "category-count"
  }, __jsx("span", null, "9"), " Products"), __jsx(_components_features_custom_link__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {
    href: "#",
    className: "btn btn-underline btn-link"
  }, "Shop Now")))), __jsx("div", {
    className: "grid-item height-x1"
  }, __jsx("div", {
    className: "category category-banner category-absolute text-white  overlay-dark"
  }, __jsx(_components_features_custom_link__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {
    href: "#"
  }, __jsx("figure", {
    className: "category-media"
  }, __jsx(react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_1__.LazyLoadImage, {
    src: "./images/categories/category10.jpg",
    alt: "category",
    width: "585",
    height: "205",
    effect: "opacity"
  }))), __jsx("div", {
    className: "category-content"
  }, __jsx("h4", {
    className: "category-name"
  }, "For Men's Fashion"), __jsx("span", {
    className: "category-count"
  }, __jsx("span", null, "25"), " Products"), __jsx(_components_features_custom_link__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {
    href: "#",
    className: "btn btn-underline btn-link"
  }, "Shop Now")))), __jsx("div", {
    className: "grid-item height-x2"
  }, __jsx("div", {
    className: "category category-banner category-absolute overlay-light"
  }, __jsx(_components_features_custom_link__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {
    href: "#"
  }, __jsx("figure", {
    className: "category-media"
  }, __jsx(react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_1__.LazyLoadImage, {
    src: "./images/categories/category11.jpg",
    alt: "category",
    width: "585",
    height: "397",
    effect: "opacity"
  }))), __jsx("div", {
    className: "category-content"
  }, __jsx("h4", {
    className: "category-name"
  }, "Denim Essentials"), __jsx("span", {
    className: "category-count"
  }, __jsx("span", null, "8"), " Products"), __jsx(_components_features_custom_link__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {
    href: "#",
    className: "btn btn-underline btn-link"
  }, "Shop Now")))), __jsx("div", {
    className: "grid-item height-x1"
  }, __jsx("div", {
    className: "category category-banner category-absolute text-white overlay-dark"
  }, __jsx(_components_features_custom_link__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {
    href: "#"
  }, __jsx("figure", {
    className: "category-media"
  }, __jsx(react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_1__.LazyLoadImage, {
    src: "./images/categories/category12.jpg",
    alt: "category",
    width: "585",
    height: "205",
    effect: "opacity"
  }))), __jsx("div", {
    className: "category-content"
  }, __jsx("h4", {
    className: "category-name"
  }, "Accessories"), __jsx("span", {
    className: "category-count"
  }, __jsx("span", null, "17"), " Products"), __jsx(_components_features_custom_link__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {
    href: "#",
    className: "btn btn-underline btn-link"
  }, "Shop Now")))), __jsx("div", {
    className: "col-1 grid-space"
  }))), __jsx("section", {
    className: "category-section badge-section mt-10 pt-4 pb-10 mb-10"
  }, __jsx("h2", {
    className: "title title-center"
  }, "Badge Categories"), __jsx("div", {
    className: "row grid gutter-sm"
  }, __jsx("div", {
    className: "grid-item height-x2"
  }, __jsx("div", {
    className: "category category-badge category-absolute overlay-dark"
  }, __jsx(_components_features_custom_link__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {
    href: "#"
  }, __jsx("figure", {
    className: "category-media"
  }, __jsx(react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_1__.LazyLoadImage, {
    src: "./images/categories/category16.jpg",
    alt: "category",
    width: "585",
    height: "397",
    effect: "opacity"
  }))), __jsx("div", {
    className: "category-content"
  }, __jsx("h4", {
    className: "category-name"
  }, "Footwear"), __jsx(_components_features_custom_link__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {
    className: "btn btn-primary btn-block",
    href: "#"
  }, "Shop Now")))), __jsx("div", {
    className: "grid-item height-x1"
  }, __jsx("div", {
    className: "category category-badge category-absolute overlay-dark"
  }, __jsx(_components_features_custom_link__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {
    href: "#"
  }, __jsx("figure", {
    className: "category-media"
  }, __jsx(react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_1__.LazyLoadImage, {
    src: "./images/categories/category17.jpg",
    alt: "category",
    width: "585",
    height: "205",
    effect: "opacity"
  }))), __jsx("div", {
    className: "category-content"
  }, __jsx("h4", {
    className: "category-name"
  }, "Sporting Goods"), __jsx(_components_features_custom_link__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {
    className: "btn btn-primary btn-block",
    href: "#"
  }, "Shop Now")))), __jsx("div", {
    className: "grid-item height-x1"
  }, __jsx("div", {
    className: "category category-badge category-absolute overlay-dark"
  }, __jsx(_components_features_custom_link__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {
    href: "#"
  }, __jsx("figure", {
    className: "category-media"
  }, __jsx(react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_1__.LazyLoadImage, {
    src: "./images/categories/category18.jpg",
    alt: "category",
    width: "585",
    height: "397",
    effect: "opacity"
  }))), __jsx("div", {
    className: "category-content"
  }, __jsx("h4", {
    className: "category-name"
  }, "Cosmetics"), __jsx(_components_features_custom_link__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {
    className: "btn btn-primary btn-block",
    href: "#"
  }, "Shop Now")))), __jsx("div", {
    className: "col-1 grid-space"
  })))), __jsx(_components_partials_elements_elements_list__WEBPACK_IMPORTED_MODULE_6__/* .default */ .Z, {
    subClass: "pt-4 mt-8"
  })));
}

/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().memo(Cta));

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

/***/ 9290:
/***/ (function(module) {

"use strict";
module.exports = require("react-lazy-load-image-component");;

/***/ }),

/***/ 7033:
/***/ (function(module) {

"use strict";
module.exports = require("react-owl-carousel2");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, [1664,5588,4138,4943,3405], function() { return __webpack_exec__(9089); });
module.exports = __webpack_exports__;

})();