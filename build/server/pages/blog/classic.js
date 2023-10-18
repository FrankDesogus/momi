(function() {
var exports = {};
exports.id = 2283;
exports.ids = [2283,3866];
exports.modules = {

/***/ 5859:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ classic; }
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: external "react-helmet"
var external_react_helmet_ = __webpack_require__(6481);
var external_react_helmet_default = /*#__PURE__*/__webpack_require__.n(external_react_helmet_);
// EXTERNAL MODULE: external "@apollo/react-hooks"
var react_hooks_ = __webpack_require__(7530);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(6731);
// EXTERNAL MODULE: ./server/apollo.js
var apollo = __webpack_require__(5438);
// EXTERNAL MODULE: ./server/queries.js
var queries = __webpack_require__(4733);
// EXTERNAL MODULE: ./components/features/custom-link.jsx
var custom_link = __webpack_require__(8765);
// EXTERNAL MODULE: ./components/features/pagination.jsx
var pagination = __webpack_require__(2078);
// EXTERNAL MODULE: external "react-lazy-load-image-component"
var external_react_lazy_load_image_component_ = __webpack_require__(9290);
// EXTERNAL MODULE: ./components/features/owl-carousel.jsx
var owl_carousel = __webpack_require__(4138);
// EXTERNAL MODULE: ./utils/index.js
var utils = __webpack_require__(6442);
// EXTERNAL MODULE: ./utils/data/carousel.js
var carousel = __webpack_require__(4943);
;// CONCATENATED MODULE: ./components/features/post/post-one.jsx
var __jsx = (external_react_default()).createElement;







function PostOne(props) {
  const {
    post,
    adClass = 'mb-7',
    isLazy = false,
    isOriginal = false,
    btnText = "Read more",
    btnAdClass = '',
    isButton = true
  } = props;
  return __jsx("div", {
    className: `post post-classic ${post.type === 'video' ? 'post-video' : ''} ${adClass}`
  }, post.type === 'image' || post.type === 'video' ? __jsx("figure", {
    className: `post-media ${post.type === 'image' ? 'overlay-zoom' : ''}`
  }, isLazy ? __jsx(custom_link/* default */.Z, {
    href: `/blog/single/${post.slug}`
  }, isOriginal ? __jsx(external_react_lazy_load_image_component_.LazyLoadImage, {
    src: "https://d-themes.com/react_asset_api/riode" + post.large_picture[0].url,
    alt: "post image",
    width: 100,
    height: post.large_picture[0].height,
    effect: "opacity; transform",
    style: {
      backgroundColor: "#DEE6E8"
    }
  }) : __jsx(external_react_lazy_load_image_component_.LazyLoadImage, {
    src: "https://d-themes.com/react_asset_api/riode" + post.picture[0].url,
    alt: "post image",
    width: post.picture[0].width,
    height: post.picture[0].height,
    effect: "opacity; transform",
    style: {
      backgroundColor: "#DEE6E8"
    }
  })) : __jsx(custom_link/* default */.Z, {
    href: `/blog/single/${post.slug}`
  }, isOriginal ? __jsx("img", {
    src: "https://d-themes.com/react_asset_api/riode" + post.large_picture[0].url,
    alt: "post image",
    width: 100,
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
  }))) : '') : __jsx("figure", {
    className: "post-media"
  }, isLazy ? __jsx(owl_carousel/* default */.Z, {
    adClass: "owl-theme owl-dot-inner owl-dot-white gutter-no",
    options: carousel/* mainSlider20 */.cQ
  }, post.picture.map((item, index) => __jsx(external_react_lazy_load_image_component_.LazyLoadImage, {
    src: "https://d-themes.com/react_asset_api/riode" + item.url,
    alt: "post gallery",
    key: item.title + '-' + index,
    width: item.width,
    height: item.height,
    effect: "opacity; transform",
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
  })))), __jsx("div", {
    className: "post-details"
  }, __jsx("div", {
    className: "post-meta"
  }, "by ", __jsx(custom_link/* default */.Z, {
    href: "#",
    className: "post-author"
  }, post.author), " on ", __jsx(custom_link/* default */.Z, {
    href: "#",
    className: "post-date"
  }, new Date(post.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: "2-digit",
    timeZone: "UTC"
  })), " | ", __jsx(custom_link/* default */.Z, {
    href: "#",
    className: "post-comment"
  }, __jsx("span", null, post.comments), " Comments")), __jsx("h4", {
    className: "post-title"
  }, __jsx(custom_link/* default */.Z, {
    href: `/blog/single/${post.slug}`
  }, post.title)), __jsx("p", {
    className: "post-content"
  }, post.content), isButton ? __jsx(custom_link/* default */.Z, {
    href: `/blog/single/${post.slug}`,
    className: `btn btn-link btn-underline btn-primary ${btnAdClass}`
  }, btnText, __jsx("i", {
    className: "d-icon-arrow-right"
  })) : ''));
}

/* harmony default export */ var post_one = (PostOne);
// EXTERNAL MODULE: ./components/partials/post/blog-sidebar.jsx + 1 modules
var blog_sidebar = __webpack_require__(4018);
;// CONCATENATED MODULE: ./pages/blog/classic.jsx
var classic_jsx = (external_react_default()).createElement;



 // Import Apollo Server and Query









function Classic() {
  const router = (0,router_.useRouter)();
  const {
    0: isFirst,
    1: setFirst
  } = (0,external_react_.useState)(true);
  const query = router.query;
  const showingCount = 8;
  const [getPosts, {
    data,
    loading,
    error
  }] = (0,react_hooks_.useLazyQuery)(queries/* GET_POSTS */.p$);
  const {
    0: perPage,
    1: setPerPage
  } = (0,external_react_.useState)(showingCount);
  const posts = data && data.posts.data;
  const totalPage = data ? parseInt(data.posts.total / perPage) + (data.posts.total % perPage ? 1 : 0) : 1;
  let page = query.page ? query.page : 1;
  (0,external_react_.useEffect)(() => {
    getPosts({
      variables: {
        category: query.category,
        from: perPage * (page - 1),
        to: perPage * page
      }
    });
    setTimeout(() => {
      if (isFirst) {
        setFirst(false);
      } else {
        (0,utils/* scrollTopHandler */._M)();
      }
    }, 100);
  }, [query]);
  return classic_jsx("main", {
    className: "main skeleton-body"
  }, classic_jsx((external_react_helmet_default()), null, classic_jsx("title", null, "Riode React eCommerce Template | Blog Classic")), classic_jsx("h1", {
    className: "d-none"
  }, "Riode React eCommerce Template - Blog Classic"), classic_jsx("nav", {
    className: "breadcrumb-nav"
  }, classic_jsx("div", {
    className: "container"
  }, classic_jsx("ul", {
    className: "breadcrumb"
  }, classic_jsx("li", null, classic_jsx(custom_link/* default */.Z, {
    href: "/"
  }, classic_jsx("i", {
    className: "d-icon-home"
  }))), classic_jsx("li", null, classic_jsx(custom_link/* default */.Z, {
    href: "#",
    className: "active"
  }, "Blog")), classic_jsx("li", null, "Classic")))), classic_jsx("div", {
    className: "page-content with-sidebar"
  }, classic_jsx("div", {
    className: "container"
  }, classic_jsx("div", {
    className: "row gutter-lg"
  }, classic_jsx("div", {
    className: "col-lg-9"
  }, classic_jsx("div", {
    className: "posts"
  }, loading ? new Array(parseInt(perPage)).fill(1).map((item, index) => classic_jsx("div", {
    key: "Skeleton:" + index
  }, classic_jsx("div", {
    className: "skel-post"
  }))) : posts ? posts.length ? posts.slice(0, posts.length).map((post, index) => classic_jsx((external_react_default()).Fragment, {
    key: "post-one" + index
  }, classic_jsx(post_one, {
    post: post
  }))) : classic_jsx("div", {
    className: "info-box with-icon"
  }, classic_jsx("p", {
    className: "mt-4"
  }, "No blogs were found matching your selection.")) : ''), classic_jsx(pagination/* default */.Z, {
    totalPage: totalPage
  })), classic_jsx(blog_sidebar/* default */.Z, null)))));
}

/* harmony default export */ var classic = ((0,apollo/* default */.Z)({
  ssr: true
})(Classic));

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

/***/ 7033:
/***/ (function(module) {

"use strict";
module.exports = require("react-owl-carousel2");;

/***/ }),

/***/ 3920:
/***/ (function(module) {

"use strict";
module.exports = require("react-slide-toggle");;

/***/ }),

/***/ 9058:
/***/ (function(module) {

"use strict";
module.exports = require("react-sticky-box");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, [1664,5588,5961,4138,4943,2674,2078,4018], function() { return __webpack_exec__(5859); });
module.exports = __webpack_exports__;

})();