(function() {
var exports = {};
exports.id = 7870;
exports.ids = [7870,3866];
exports.modules = {

/***/ 2295:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6731);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7530);
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6481);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var imagesloaded__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6558);
/* harmony import */ var imagesloaded__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(imagesloaded__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _server_apollo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5438);
/* harmony import */ var _server_queries__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4733);
/* harmony import */ var _components_features_custom_link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8765);
/* harmony import */ var _components_features_pagination__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2078);
/* harmony import */ var _components_features_post_post_nine__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(5780);
/* harmony import */ var _components_partials_post_blog_sidebar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(4018);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(6442);
var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);













function PostMasonrySidebar() {
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
  const {
    0: isFirst,
    1: setFirst
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true);
  const query = router.query;
  const showingCount = 8;
  const [getPosts, {
    data,
    loading,
    error
  }] = (0,_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2__.useLazyQuery)(_server_queries__WEBPACK_IMPORTED_MODULE_6__/* .GET_POSTS */ .p$);
  const {
    0: perPage,
    1: setPerPage
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(showingCount);
  const posts = data && data.posts.data;
  const totalPage = data ? parseInt(data.posts.total / perPage) + (data.posts.total % perPage ? 1 : 0) : 1;
  let page = query.page ? query.page : 1;
  let from = perPage * (page - 1);
  let to = perPage * page;
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    getPosts({
      variables: {
        category: query.category,
        from: from,
        to: to
      }
    });

    if (isFirst) {
      setFirst(false);
    } else {
      (0,_utils__WEBPACK_IMPORTED_MODULE_11__/* .scrollTopHandler */ ._M)();
    }
  }, [query]);
  const ref = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (!loading && posts) {
      let item = document.querySelector('.posts.grid');
      item && imagesloaded__WEBPACK_IMPORTED_MODULE_4___default()(item).on('done', function () {
        isotopeInit();
      });
    }
  }, [loading, posts]);

  async function isotopeInit() {
    const Isotope = (await Promise.resolve(/* import() */).then(__webpack_require__.t.bind(__webpack_require__, 7613, 23))).default;
    let iso = new Isotope(ref.current, {
      itemSelector: '.grid-item'
    });
  }

  return __jsx("main", {
    className: "main skeleton-body"
  }, __jsx((react_helmet__WEBPACK_IMPORTED_MODULE_3___default()), null, __jsx("title", null, "Riode React eCommerce Template | Blog Masonry With Sidebar")), __jsx("h1", {
    className: "d-none"
  }, "Riode React eCommerce Template - Blog Masonry With Sidebar"), __jsx("nav", {
    className: "breadcrumb-nav"
  }, __jsx("div", {
    className: "container"
  }, __jsx("ul", {
    className: "breadcrumb"
  }, __jsx("li", null, __jsx(_components_features_custom_link__WEBPACK_IMPORTED_MODULE_7__/* .default */ .Z, {
    href: "/"
  }, __jsx("i", {
    className: "d-icon-home"
  }))), __jsx("li", null, __jsx(_components_features_custom_link__WEBPACK_IMPORTED_MODULE_7__/* .default */ .Z, {
    href: "/blog/classic",
    className: "active"
  }, "Blog")), __jsx("li", null, "Masonry With Sidebar")))), __jsx("div", {
    className: "page-content with-sidebar"
  }, __jsx("div", {
    className: "container"
  }, __jsx("div", {
    className: "row gutter-lg"
  }, __jsx("div", {
    className: "col-lg-9"
  }, loading ? __jsx("div", {
    className: "posts grid row",
    style: {
      display: "flex"
    }
  }, new Array(parseInt(perPage)).fill(1).map((item, index) => __jsx("div", {
    className: "col-sm-6",
    key: "skel-post" + index
  }, __jsx("div", {
    className: "skel-post"
  })))) : '', __jsx("div", {
    className: "posts grid row masonry",
    ref: ref
  }, loading ? '' : posts ? posts.length ? posts.slice(0, posts.length).map((post, index) => __jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), {
    key: "post-nine" + index
  }, __jsx("div", {
    className: "grid-item col-sm-6"
  }, __jsx(_components_features_post_post_nine__WEBPACK_IMPORTED_MODULE_9__/* .default */ .Z, {
    post: post,
    isOriginal: true,
    type: "masonry"
  })))) : __jsx("div", {
    className: "info-box with-icon"
  }, __jsx("p", {
    className: "mt-4"
  }, "No blogs were found matching your selection.")) : ''), __jsx(_components_features_pagination__WEBPACK_IMPORTED_MODULE_8__/* .default */ .Z, {
    totalPage: totalPage
  })), __jsx(_components_partials_post_blog_sidebar__WEBPACK_IMPORTED_MODULE_10__/* .default */ .Z, null)))));
}

/* harmony default export */ __webpack_exports__["default"] = ((0,_server_apollo__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z)({
  ssr: true
})(PostMasonrySidebar));

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

/***/ 6558:
/***/ (function(module) {

"use strict";
module.exports = require("imagesloaded");;

/***/ }),

/***/ 7613:
/***/ (function(module) {

"use strict";
module.exports = require("isotope-layout");;

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
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, [1664,5588,5961,4138,4943,2674,2078,4018,5780], function() { return __webpack_exec__(2295); });
module.exports = __webpack_exports__;

})();