exports.id = 7333;
exports.ids = [7333];
exports.modules = {

/***/ 7333:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9290);
/* harmony import */ var react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_features_custom_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8765);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6442);
var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);





function PostSeven(props) {
  const {
    post,
    adClass = 'mb-7',
    isLazy = false,
    isOriginal = false,
    btnText = "Read more",
    btnAdClass = ''
  } = props;
  return __jsx("div", {
    className: `post post-mask gradient ${post.type === 'video' ? 'post-video' : ''} ${post.type === 'image' ? 'overlay-zoom' : ''} ${adClass}`
  }, __jsx("figure", {
    className: "post-media"
  }, isLazy ? __jsx(_components_features_custom_link__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, {
    href: `/blog/single/${post.slug}`
  }, isOriginal ? __jsx(react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_1__.LazyLoadImage, {
    src: "https://d-themes.com/react_asset_api/riode" + post.large_picture[0].url,
    alt: "post image",
    width: 380,
    height: 280,
    effect: "opacity; transform",
    style: {
      backgroundColor: "#DEE6E8"
    }
  }) : __jsx(react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_1__.LazyLoadImage, {
    src: "https://d-themes.com/react_asset_api/riode" + post.picture[0].url,
    alt: "post image",
    width: 380,
    height: 280,
    effect: "opacity; transform",
    style: {
      backgroundColor: "#DEE6E8"
    }
  })) : __jsx(_components_features_custom_link__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, {
    href: `/blog/single/${post.slug}`
  }, isOriginal ? __jsx("img", {
    src: "https://d-themes.com/react_asset_api/riode" + post.large_picture[0].url,
    alt: "post image",
    width: post.large_picture[0].width,
    height: post.large_picture[0].height
  }) : __jsx("img", {
    src: "https://d-themes.com/react_asset_api/riode" + post.picture[0].url,
    alt: "post image",
    width: post.picture[0].width,
    height: post.picture[0].height
  })), post.type === 'video' ? __jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, __jsx("span", {
    className: "video-play",
    onClick: _utils__WEBPACK_IMPORTED_MODULE_3__/* .videoHandler */ .X9
  }), __jsx("video", {
    width: "380"
  }, __jsx("source", {
    src: "https://d-themes.com/react_asset_api/riode" + post.video.url,
    type: "video/mp4"
  }))) : ''), __jsx("div", {
    className: "post-details"
  }, __jsx("div", {
    className: "post-meta"
  }, "on ", __jsx(_components_features_custom_link__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, {
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
    className: `btn btn-link btn-underline btn-white ${btnAdClass}`
  }, btnText, __jsx("i", {
    className: "d-icon-arrow-right"
  }))));
}

/* harmony default export */ __webpack_exports__["Z"] = (PostSeven);

/***/ })

};
;