exports.id = 2556;
exports.ids = [2556];
exports.modules = {

/***/ 2556:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9290);
/* harmony import */ var react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_features_custom_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8765);
/* harmony import */ var _components_features_owl_carousel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4138);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6442);
/* harmony import */ var _utils_data_carousel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4943);
var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);







function PostSix(props) {
  const {
    post,
    adClass = 'post-sm',
    isLazy = false,
    isOriginal = false,
    btnText = "Read more",
    btnAdClass = 'btn-md'
  } = props;
  return __jsx("div", {
    className: `post ${post.type === 'gallery' ? '' : 'overlay-zoom'} ${post.type === 'video' ? 'post-video' : ''} ${adClass}`
  }, post.type === 'image' || post.type === 'video' ? __jsx("figure", {
    className: "post-media"
  }, isLazy ? __jsx(_components_features_custom_link__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, {
    href: `/blog/single/${post.slug}`
  }, isOriginal ? __jsx(react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_1__.LazyLoadImage, {
    src: "https://d-themes.com/react_asset_api/riode" + post.large_picture[0].url,
    alt: "post image",
    width: 380,
    height: 230,
    effect: "opacity; transform",
    style: {
      backgroundColor: "#DEE6E8"
    }
  }) : __jsx(react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_1__.LazyLoadImage, {
    src: "https://d-themes.com/react_asset_api/riode" + post.picture[0].url,
    alt: "post image",
    width: 380,
    height: 230,
    effect: "opacity; transform",
    style: {
      backgroundColor: "#DEE6E8"
    }
  })) : __jsx(_components_features_custom_link__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, {
    href: `/blog/single/${post.slug}`
  }, isOriginal ? __jsx("img", {
    src: "https://d-themes.com/react_asset_api/riode" + post.large_picture[0].url,
    alt: "post image",
    width: 300,
    height: post.large_picture[0].height
  }) : __jsx("img", {
    src: "https://d-themes.com/react_asset_api/riode" + post.picture[0].url,
    alt: "post image",
    width: 300,
    height: post.picture[0].height
  })), post.type === 'video' ? __jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, __jsx("span", {
    className: "video-play",
    onClick: _utils__WEBPACK_IMPORTED_MODULE_5__/* .videoHandler */ .X9
  }), __jsx("video", {
    width: "380"
  }, __jsx("source", {
    src: "https://d-themes.com/react_asset_api/riode" + post.video.url,
    type: "video/mp4"
  }))) : '') : __jsx("figure", {
    className: "post-media"
  }, isLazy ? __jsx(_components_features_owl_carousel__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {
    adClass: "owl-theme owl-dot-inner owl-dot-white gutter-no",
    options: _utils_data_carousel__WEBPACK_IMPORTED_MODULE_4__/* .mainSlider20 */ .cQ
  }, post.picture.map((item, index) => __jsx(react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_1__.LazyLoadImage, {
    src: "https://d-themes.com/react_asset_api/riode" + item.url,
    alt: "post gallery",
    key: item.title + '-' + index,
    width: 380,
    height: 230,
    effect: "opacity; transform",
    style: {
      backgroundColor: "#DEE6E8"
    }
  }))) : __jsx(_components_features_owl_carousel__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {
    adClass: "owl-theme owl-dot-inner owl-dot-white gutter-no",
    options: _utils_data_carousel__WEBPACK_IMPORTED_MODULE_4__/* .mainSlider20 */ .cQ
  }, post.picture.map((item, index) => __jsx("img", {
    src: "https://d-themes.com/react_asset_api/riode" + item.url,
    alt: "post gallery",
    key: item.title + '-' + index,
    width: item.width,
    height: item.height
  })))), __jsx("div", {
    className: "post-details"
  }, __jsx("div", {
    className: "post-meta"
  }, __jsx(_components_features_custom_link__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, {
    href: "#",
    className: "post-author"
  }, post.author), " on ", __jsx(_components_features_custom_link__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, {
    href: "#",
    className: "post-date"
  }, new Date(post.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: "2-digit",
    timeZone: "UTC"
  })), " | ", __jsx(_components_features_custom_link__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, {
    href: "#",
    className: "post-comment"
  }, __jsx("span", null, post.comments), " Comments")), __jsx("h4", {
    className: "post-title"
  }, __jsx(_components_features_custom_link__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, {
    href: `/blog/single/${post.slug}`
  }, post.title)), __jsx(_components_features_custom_link__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, {
    href: `/blog/single/${post.slug}`,
    className: `btn btn-link btn-underline btn-dark ${btnAdClass}`
  }, btnText, __jsx("i", {
    className: "d-icon-arrow-right"
  }))));
}

/* harmony default export */ __webpack_exports__["Z"] = (PostSix);

/***/ })

};
;