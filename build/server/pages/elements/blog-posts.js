(function() {
var exports = {};
exports.id = 6053;
exports.ids = [6053,3866];
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

/***/ 1166:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ blog_posts; }
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: external "react-helmet"
var external_react_helmet_ = __webpack_require__(6481);
var external_react_helmet_default = /*#__PURE__*/__webpack_require__.n(external_react_helmet_);
// EXTERNAL MODULE: external "@apollo/react-hooks"
var react_hooks_ = __webpack_require__(7530);
// EXTERNAL MODULE: ./server/apollo.js
var apollo = __webpack_require__(5438);
// EXTERNAL MODULE: ./server/queries.js
var queries = __webpack_require__(4733);
// EXTERNAL MODULE: ./components/features/owl-carousel.jsx
var owl_carousel = __webpack_require__(4138);
// EXTERNAL MODULE: ./components/features/breadcrumb.jsx
var breadcrumb = __webpack_require__(4699);
// EXTERNAL MODULE: ./components/features/post/post-four.jsx
var post_four = __webpack_require__(2644);
// EXTERNAL MODULE: external "react-lazy-load-image-component"
var external_react_lazy_load_image_component_ = __webpack_require__(9290);
// EXTERNAL MODULE: ./components/features/custom-link.jsx
var custom_link = __webpack_require__(8765);
// EXTERNAL MODULE: ./utils/index.js
var utils = __webpack_require__(6442);
// EXTERNAL MODULE: ./utils/data/carousel.js
var carousel = __webpack_require__(4943);
;// CONCATENATED MODULE: ./components/features/post/post-five.jsx
var __jsx = (external_react_default()).createElement;







function PostFive(props) {
  const {
    post,
    adClass = '',
    isLazy = false,
    isOriginal = false,
    btnText = "Read more",
    btnAdClass = ''
  } = props;
  const months = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
  return __jsx("div", {
    className: `post post-list overlay-dark ${post.type === 'video' ? 'post-video' : ''} ${adClass}`
  }, post.type === 'image' || post.type === 'video' ? __jsx("figure", {
    className: "post-media"
  }, isLazy ? __jsx(custom_link/* default */.Z, {
    href: `/blog/single/${post.slug}`
  }, isOriginal ? __jsx(external_react_lazy_load_image_component_.LazyLoadImage, {
    src: "https://d-themes.com/react_asset_api/riode" + post.large_picture[0].url,
    alt: "post image",
    width: 280,
    height: 200,
    effect: "opacity",
    style: {
      backgroundColor: "#DEE6E8"
    }
  }) : __jsx(external_react_lazy_load_image_component_.LazyLoadImage, {
    src: "https://d-themes.com/react_asset_api/riode" + post.picture[0].url,
    alt: "post image",
    width: 280,
    height: 200,
    effect: "opacity",
    style: {
      backgroundColor: "#DEE6E8"
    }
  })) : __jsx(custom_link/* default */.Z, {
    href: `/blog/single/${post.slug}`
  }, isOriginal ? __jsx("img", {
    src: "https://d-themes.com/react_asset_api/riode" + post.large_picture[0].url,
    alt: "post image",
    width: 280,
    height: post.large_picture[0].height
  }) : __jsx("img", {
    src: "https://d-themes.com/react_asset_api/riode" + post.picture[0].url,
    alt: "post image",
    width: post.picture[0].width,
    height: post.picture[0].height
  })), post.type === 'video' ? __jsx((external_react_default()).Fragment, null, __jsx("span", {
    className: "video-play",
    onClick: utils/* videoHandler */.X9
  }), __jsx("video", {
    width: "380"
  }, __jsx("source", {
    src: "https://d-themes.com/react_asset_api/riode" + post.video.url,
    type: "video/mp4"
  }))) : '', __jsx("div", {
    className: "post-calendar"
  }, __jsx("span", {
    className: "post-day"
  }, new Date(post.date).getDay() + 1), __jsx("span", {
    className: "post-month"
  }, months[new Date(post.date).getMonth()]))) : __jsx("figure", {
    className: "post-media"
  }, isLazy ? __jsx(owl_carousel/* default */.Z, {
    adClass: "owl-theme owl-dot-inner owl-dot-white gutter-no",
    options: carousel/* mainSlider20 */.cQ
  }, post.picture.map((item, index) => __jsx(external_react_lazy_load_image_component_.LazyLoadImage, {
    src: "https://d-themes.com/react_asset_api/riode" + item.url,
    alt: "post gallery",
    key: item.title + '-' + index,
    width: 280,
    height: 200,
    effect: "opacity",
    style: {
      backgroundColor: "#DEE6E8"
    }
  }))) : __jsx(owl_carousel/* default */.Z, {
    adClass: "owl-theme owl-dot-inner owl-dot-white gutter-no",
    options: carousel/* mainSlider20 */.cQ
  }, post.picture.map((item, index) => __jsx("img", {
    src: "https://d-themes.com/react_asset_api/riode" + item.url,
    alt: "post gallery",
    key: item.title + '-' + index,
    width: item.width,
    height: item.height
  }))), __jsx("div", {
    className: "post-calendar"
  }, __jsx("span", {
    className: "post-day"
  }, new Date(post.date).getDay() + 1), __jsx("span", {
    className: "post-month"
  }, months[new Date(post.date).getMonth()]))), __jsx("div", {
    className: "post-details"
  }, __jsx("h4", {
    className: "post-title"
  }, __jsx(custom_link/* default */.Z, {
    href: `/blog/single/${post.slug}`
  }, post.title)), __jsx("p", {
    className: "post-content"
  }, post.content), __jsx(custom_link/* default */.Z, {
    href: `/blog/single/${post.slug}`,
    className: `btn btn-outline btn-md btn-dark btn-rounded ${btnAdClass}`
  }, btnText, __jsx("i", {
    className: "d-icon-arrow-right"
  }))));
}

/* harmony default export */ var post_five = (PostFive);
// EXTERNAL MODULE: ./components/features/post/post-six.jsx
var post_six = __webpack_require__(2556);
// EXTERNAL MODULE: ./components/features/post/post-seven.jsx
var post_seven = __webpack_require__(7333);
;// CONCATENATED MODULE: ./components/features/post/post-eight.jsx
var post_eight_jsx = (external_react_default()).createElement;







function PostEight(props) {
  const {
    post,
    adClass = 'mb-7',
    isLazy = false,
    isOriginal = false,
    btnText = "Read more",
    btnAdClass = ''
  } = props;
  const months = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
  return post_eight_jsx("div", {
    className: `post post-frame ${post.type === 'video' ? 'post-video' : ''} ${adClass}`
  }, post.type === 'image' || post.type === 'video' ? post_eight_jsx("figure", {
    className: "post-media"
  }, isLazy ? post_eight_jsx(custom_link/* default */.Z, {
    href: `/blog/single/${post.slug}`
  }, isOriginal ? post_eight_jsx(external_react_lazy_load_image_component_.LazyLoadImage, {
    src: "https://d-themes.com/react_asset_api/riode" + post.large_picture[0].url,
    alt: "post image",
    width: 320,
    height: 206,
    effect: "opacity; transform",
    style: {
      backgroundColor: "#DEE6E8"
    }
  }) : post_eight_jsx(external_react_lazy_load_image_component_.LazyLoadImage, {
    src: "https://d-themes.com/react_asset_api/riode" + post.picture[0].url,
    alt: "post image",
    width: 320,
    height: 206,
    effect: "opacity; transform",
    style: {
      backgroundColor: "#DEE6E8"
    }
  })) : post_eight_jsx(custom_link/* default */.Z, {
    href: `/blog/single/${post.slug}`
  }, isOriginal ? post_eight_jsx("img", {
    src: "https://d-themes.com/react_asset_api/riode" + post.large_picture[0].url,
    alt: "post image",
    width: post.large_picture[0].width,
    height: post.large_picture[0].height
  }) : post_eight_jsx("img", {
    src: "https://d-themes.com/react_asset_api/riode" + post.picture[0].url,
    alt: "post image",
    width: post.picture[0].width,
    height: post.picture[0].height
  })), post.type === 'video' ? post_eight_jsx((external_react_default()).Fragment, null, post_eight_jsx("span", {
    className: "video-play",
    onClick: utils/* videoHandler */.X9
  }), post_eight_jsx("video", {
    width: "320"
  }, post_eight_jsx("source", {
    src: "https://d-themes.com/react_asset_api/riode" + post.video.url,
    type: "video/mp4"
  }))) : '', post_eight_jsx("div", {
    className: "post-calendar"
  }, post_eight_jsx("span", {
    className: "post-day"
  }, new Date(post.date).getDay() + 1), post_eight_jsx("span", {
    className: "post-month"
  }, months[new Date(post.date).getMonth()]))) : post_eight_jsx("figure", {
    className: "post-media"
  }, isLazy ? post_eight_jsx(owl_carousel/* default */.Z, {
    adClass: "owl-theme owl-dot-inner owl-dot-white gutter-no",
    options: carousel/* mainSlider20 */.cQ
  }, post.picture.map((item, index) => post_eight_jsx(external_react_lazy_load_image_component_.LazyLoadImage, {
    src: "https://d-themes.com/react_asset_api/riode" + item.url,
    alt: "post gallery",
    key: item.title + '-' + index,
    width: 320,
    height: 206,
    effect: "opacity; transform",
    style: {
      backgroundColor: "#DEE6E8"
    }
  }))) : post_eight_jsx(owl_carousel/* default */.Z, {
    adClass: "owl-theme owl-dot-inner owl-dot-white gutter-no",
    options: carousel/* mainSlider20 */.cQ
  }, post.picture.map((item, index) => post_eight_jsx("img", {
    src: "https://d-themes.com/react_asset_api/riode" + item.url,
    alt: "post gallery",
    key: item.title + '-' + index,
    width: 320,
    height: 206
  }))), post_eight_jsx("div", {
    className: "post-calendar"
  }, post_eight_jsx("span", {
    className: "post-day"
  }, new Date(post.date).getDay() + 1), post_eight_jsx("span", {
    className: "post-month"
  }, months[new Date(post.date).getMonth()]))), post_eight_jsx("div", {
    className: "post-details"
  }, post_eight_jsx("h4", {
    className: "post-title"
  }, post_eight_jsx(custom_link/* default */.Z, {
    href: `/blog/single/${post.slug}`
  }, post.title)), post_eight_jsx("p", {
    className: "post-content"
  }, post.content), post_eight_jsx(custom_link/* default */.Z, {
    href: `/blog/single/${post.slug}`,
    className: `btn btn-primary btn-link btn-underline ${btnAdClass}`
  }, btnText, post_eight_jsx("i", {
    className: "d-icon-arrow-right"
  }))));
}

/* harmony default export */ var post_eight = (PostEight);
// EXTERNAL MODULE: ./components/partials/elements/elements-list.jsx
var elements_list = __webpack_require__(3405);
;// CONCATENATED MODULE: ./pages/elements/blog-posts.jsx
var blog_posts_jsx = (external_react_default()).createElement;


 // Import Apollo Server and Query













function BlogPosts() {
  const [getPosts, {
    data,
    loading,
    error
  }] = (0,react_hooks_.useLazyQuery)(queries/* GET_POSTS */.p$);
  const posts = data && data.posts.data;
  (0,external_react_.useEffect)(() => {
    getPosts();
  }, []);
  return blog_posts_jsx("main", {
    className: "main skeleton-body"
  }, blog_posts_jsx((external_react_helmet_default()), null, blog_posts_jsx("title", null, "Riode React eCommerce Template | Blog")), blog_posts_jsx("h1", {
    className: "d-none"
  }, "Riode React eCommerce Template - Blog"), blog_posts_jsx(breadcrumb/* default */.Z, {
    subTitle: "Elements",
    title: "Element Blog",
    parentUrl: "/elements"
  }), blog_posts_jsx("div", {
    className: "page-content"
  }, blog_posts_jsx("section", {
    className: "mt-10 pt-4 pb-10"
  }, blog_posts_jsx("div", {
    className: "container"
  }, blog_posts_jsx("h2", {
    className: "title title-center"
  }, "Default"), blog_posts_jsx(owl_carousel/* default */.Z, {
    adClass: "owl-theme",
    options: carousel/* mainSlider13 */.Xu
  }, loading ? new Array(parseInt(3)).fill(1).map((item, index) => blog_posts_jsx("div", {
    key: "Skeleton:" + index
  }, blog_posts_jsx("div", {
    className: "skel-post"
  }))) : posts ? posts.length ? posts.slice(12, 15).map((post, index) => blog_posts_jsx((external_react_default()).Fragment, {
    key: "post-four" + index
  }, blog_posts_jsx(post_four/* default */.Z, {
    post: post,
    isOriginal: true,
    adClass: "text-center"
  }))) : blog_posts_jsx("div", {
    className: "info-box with-icon"
  }, blog_posts_jsx("p", {
    className: "mt-4"
  }, "No blogs were found matching your selection.")) : ''))), blog_posts_jsx("section", {
    className: "grey-section pt-10 pb-10"
  }, blog_posts_jsx("div", {
    className: "container mt-4"
  }, blog_posts_jsx("h2", {
    className: "title title-center"
  }, "List"), blog_posts_jsx(owl_carousel/* default */.Z, {
    adClass: "owl-theme",
    options: carousel/* mainSlider14 */.Jn
  }, loading ? new Array(parseInt(2)).fill(1).map((item, index) => blog_posts_jsx("div", {
    key: "Skeleton:" + index
  }, blog_posts_jsx("div", {
    className: "skel-post"
  }))) : posts ? posts.length ? posts.slice(13, 15).map((post, index) => blog_posts_jsx((external_react_default()).Fragment, {
    key: "post-five" + index
  }, blog_posts_jsx(post_five, {
    post: post
  }))) : blog_posts_jsx("div", {
    className: "info-box with-icon"
  }, blog_posts_jsx("p", {
    className: "mt-4"
  }, "No blogs were found matching your selection.")) : ''))), blog_posts_jsx("section", {
    className: "mt-10 pt-4 pb-10"
  }, blog_posts_jsx("div", {
    className: "container"
  }, blog_posts_jsx("h2", {
    className: "title title-center"
  }, "Without description"), blog_posts_jsx(owl_carousel/* default */.Z, {
    adClass: "owl-theme",
    options: carousel/* mainSlider13 */.Xu
  }, loading ? new Array(parseInt(3)).fill(1).map((item, index) => blog_posts_jsx("div", {
    key: "Skeleton:" + index
  }, blog_posts_jsx("div", {
    className: "skel-post"
  }))) : posts ? posts.length ? posts.slice(12, 15).map((post, index) => blog_posts_jsx((external_react_default()).Fragment, {
    key: "post-six" + index
  }, blog_posts_jsx(post_six/* default */.Z, {
    post: post,
    isOriginal: true
  }))) : blog_posts_jsx("div", {
    className: "info-box with-icon"
  }, blog_posts_jsx("p", {
    className: "mt-4"
  }, "No blogs were found matching your selection.")) : ''))), blog_posts_jsx("section", {
    className: "grey-section pt-10 pb-10"
  }, blog_posts_jsx("div", {
    className: "container mt-4"
  }, blog_posts_jsx("h2", {
    className: "title title-center"
  }, "4 Columns"), blog_posts_jsx(owl_carousel/* default */.Z, {
    adClass: "owl-theme",
    options: carousel/* mainSlider5 */.cD
  }, loading ? new Array(parseInt(3)).fill(1).map((item, index) => blog_posts_jsx("div", {
    key: "Skeleton:" + index
  }, blog_posts_jsx("div", {
    className: "skel-post"
  }))) : posts ? posts.length ? posts.slice(4, 8).map((post, index) => blog_posts_jsx((external_react_default()).Fragment, {
    key: "post-four" + index
  }, blog_posts_jsx(post_four/* default */.Z, {
    post: post
  }))) : blog_posts_jsx("div", {
    className: "info-box with-icon"
  }, blog_posts_jsx("p", {
    className: "mt-4"
  }, "No blogs were found matching your selection.")) : ''))), blog_posts_jsx("section", {
    className: "mt-10 pt-4 pb-4 mb-10"
  }, blog_posts_jsx("div", {
    className: "container"
  }, blog_posts_jsx("h2", {
    className: "title title-center"
  }, "On Image"), blog_posts_jsx(owl_carousel/* default */.Z, {
    adClass: "owl-theme",
    options: carousel/* mainSlider13 */.Xu
  }, loading ? new Array(parseInt(3)).fill(1).map((item, index) => blog_posts_jsx("div", {
    key: "Skeleton:" + index
  }, blog_posts_jsx("div", {
    className: "skel-post"
  }))) : posts ? posts.length ? posts.slice(12, 15).map((post, index) => blog_posts_jsx((external_react_default()).Fragment, {
    key: "post-seven" + index
  }, blog_posts_jsx(post_seven/* default */.Z, {
    post: post,
    isOriginal: true
  }))) : blog_posts_jsx("div", {
    className: "info-box with-icon"
  }, blog_posts_jsx("p", {
    className: "mt-4"
  }, "No blogs were found matching your selection.")) : ''))), blog_posts_jsx("section", {
    className: "pt-10 pb-10 grey-section"
  }, blog_posts_jsx("div", {
    className: "container mt-4"
  }, blog_posts_jsx("h2", {
    className: "title title-center"
  }, "Framed"), blog_posts_jsx(owl_carousel/* default */.Z, {
    adClass: "owl-theme owl-shadow-carousel",
    options: carousel/* mainSlider13 */.Xu
  }, loading ? new Array(parseInt(3)).fill(1).map((item, index) => blog_posts_jsx("div", {
    key: "Skeleton:" + index
  }, blog_posts_jsx("div", {
    className: "skel-post"
  }))) : posts ? posts.length ? posts.slice(12, 15).map((post, index) => blog_posts_jsx((external_react_default()).Fragment, {
    key: "post-eight" + index
  }, blog_posts_jsx("div", {
    className: "blog-post"
  }, blog_posts_jsx(post_eight, {
    post: post,
    isOriginal: true
  })))) : blog_posts_jsx("div", {
    className: "info-box with-icon"
  }, blog_posts_jsx("p", {
    className: "mt-4"
  }, "No blogs were found matching your selection.")) : ''))), blog_posts_jsx(elements_list/* default */.Z, {
    adClass: "bg-white"
  })));
}

/* harmony default export */ var blog_posts = ((0,apollo/* default */.Z)({
  ssr: true
})(BlogPosts));

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
var __webpack_exports__ = __webpack_require__.X(0, [1664,5588,5961,4138,4943,3405,7333,2644,2556], function() { return __webpack_exec__(1166); });
module.exports = __webpack_exports__;

})();