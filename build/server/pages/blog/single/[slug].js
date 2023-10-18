(function() {
var exports = {};
exports.id = 409;
exports.ids = [409,3866];
exports.modules = {

/***/ 7483:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ _slug_; }
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(6731);
// EXTERNAL MODULE: external "@apollo/react-hooks"
var react_hooks_ = __webpack_require__(7530);
// EXTERNAL MODULE: external "react-lazy-load-image-component"
var external_react_lazy_load_image_component_ = __webpack_require__(9290);
// EXTERNAL MODULE: external "react-helmet"
var external_react_helmet_ = __webpack_require__(6481);
var external_react_helmet_default = /*#__PURE__*/__webpack_require__.n(external_react_helmet_);
// EXTERNAL MODULE: ./server/apollo.js
var apollo = __webpack_require__(5438);
// EXTERNAL MODULE: ./server/queries.js
var queries = __webpack_require__(4733);
// EXTERNAL MODULE: ./components/features/custom-link.jsx
var custom_link = __webpack_require__(8765);
// EXTERNAL MODULE: ./components/features/owl-carousel.jsx
var owl_carousel = __webpack_require__(4138);
// EXTERNAL MODULE: ./pages/pages/404.jsx
var _404 = __webpack_require__(2246);
// EXTERNAL MODULE: ./components/partials/post/blog-sidebar.jsx + 1 modules
var blog_sidebar = __webpack_require__(4018);
// EXTERNAL MODULE: ./components/features/post/post-four.jsx
var post_four = __webpack_require__(2644);
// EXTERNAL MODULE: ./utils/data/carousel.js
var carousel = __webpack_require__(4943);
;// CONCATENATED MODULE: ./components/partials/post/related-posts.jsx
var __jsx = (external_react_default()).createElement;




function RelatedPosts(props) {
  const {
    posts,
    loading
  } = props;
  return __jsx("div", {
    className: "related-posts"
  }, __jsx("h3", {
    className: "title title-simple text-left text-normal font-weight-bold ls-normal"
  }, "Related Posts"), __jsx(owl_carousel/* default */.Z, {
    adClass: "owl-theme",
    options: carousel/* mainSlider10 */.Ju
  }, loading ? new Array(parseInt(4)).fill(1).map((item, index) => __jsx("div", {
    key: "Skeleton:" + index
  }, __jsx("div", {
    className: "skel-post"
  }))) : posts ? posts.length ? posts.slice(0, posts.length).map((post, index) => __jsx((external_react_default()).Fragment, {
    key: "post-one" + index
  }, __jsx(post_four/* default */.Z, {
    post: post,
    btnAdClass: "btn-primary"
  }))) : __jsx("div", {
    className: "info-box with-icon"
  }, __jsx("p", {
    className: "mt-4"
  }, "No blogs were found matching your selection.")) : ''));
}
// EXTERNAL MODULE: ./utils/index.js
var utils = __webpack_require__(6442);
;// CONCATENATED MODULE: ./pages/blog/single/[slug].jsx

var _slug_jsx = (external_react_default()).createElement;














function PostSingle() {
  const slug = (0,router_.useRouter)().query.slug;
  if (!slug) return '';
  const {
    data,
    loading,
    error
  } = (0,react_hooks_.useQuery)(queries/* GET_POST */.QI, {
    variables: {
      slug
    }
  });
  const post = data && data.post.data;
  const related = data && data.post.related;
  if (error) return _slug_jsx(_404.default, null);
  return _slug_jsx("main", {
    className: "main skeleton-body"
  }, _slug_jsx((external_react_helmet_default()), null, _slug_jsx("title", null, "Riode React eCommerce Template | Blog Single")), _slug_jsx("h1", {
    className: "d-none"
  }, "Riode React eCommerce Template - Blog Single"), _slug_jsx("nav", {
    className: "breadcrumb-nav"
  }, _slug_jsx("div", {
    className: "container"
  }, _slug_jsx("ul", {
    className: "breadcrumb"
  }, _slug_jsx("li", null, _slug_jsx(custom_link/* default */.Z, {
    href: "/"
  }, _slug_jsx("i", {
    className: "d-icon-home"
  }))), _slug_jsx("li", null, _slug_jsx(custom_link/* default */.Z, {
    href: "/blog/classic",
    className: "active"
  }, "Blog")), _slug_jsx("li", null, "Single Post")))), _slug_jsx("div", {
    className: "page-content with-sidebar"
  }, _slug_jsx("div", {
    className: "container"
  }, _slug_jsx("div", {
    className: "row gutter-lg"
  }, _slug_jsx("div", {
    className: "col-lg-9"
  }, loading ? _slug_jsx("div", {
    className: "skel-post"
  }) : _slug_jsx("div", {
    className: `post post-single ${post.type === 'video' ? 'post-video' : ''}`
  }, post.type === 'image' || post.type === 'video' ? _slug_jsx("figure", {
    className: "post-media"
  }, _slug_jsx(custom_link/* default */.Z, {
    href: "#"
  }, _slug_jsx(external_react_lazy_load_image_component_.LazyLoadImage, {
    src: "https://d-themes.com/react_asset_api/riode" + post.large_picture[0].url,
    alt: "post image",
    width: "900",
    height: 500,
    style: {
      backgroundColor: "#DEE6E8"
    }
  })), post.type === 'video' ? _slug_jsx((external_react_default()).Fragment, null, _slug_jsx("span", {
    className: "video-play",
    onClick: utils/* videoHandler */.X9
  }), _slug_jsx("video", {
    width: "380"
  }, _slug_jsx("source", {
    src: "https://d-themes.com/react_asset_api/riode" + post.video.url,
    type: "video/mp4"
  }))) : '') : _slug_jsx("figure", {
    className: "post-media"
  }, _slug_jsx(owl_carousel/* default */.Z, {
    adClass: "owl-theme owl-dot-inner owl-dot-white gutter-no",
    options: carousel/* mainSlider20 */.cQ
  }, post.picture.map((item, index) => _slug_jsx("img", {
    src: "https://d-themes.com/react_asset_api/riode" + item.url,
    alt: "post gallery",
    key: item.title + '-' + index,
    width: item.width,
    height: item.height,
    style: {
      backgroundColor: "#DEE6E8"
    }
  })))), _slug_jsx("div", {
    className: "post-details"
  }, _slug_jsx("div", {
    className: "post-meta"
  }, "by ", _slug_jsx(custom_link/* default */.Z, {
    href: "#",
    className: "post-author"
  }, post.author), " on ", _slug_jsx(custom_link/* default */.Z, {
    href: "#",
    className: "post-date"
  }, new Date(post.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: "2-digit",
    timeZone: "UTC"
  })), " | ", _slug_jsx(custom_link/* default */.Z, {
    href: "#",
    className: "post-comment"
  }, _slug_jsx("span", null, post.comments), " Comments")), _slug_jsx("h4", {
    className: "post-title"
  }, _slug_jsx(custom_link/* default */.Z, {
    href: "#"
  }, post.title)), _slug_jsx("div", {
    className: "post-body mb-7"
  }, _slug_jsx("p", {
    className: "mb-5"
  }, post.content), _slug_jsx("p", {
    className: "mb-6"
  }, "Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue. Morbi purus libero, faucibus adipiscing, commodo quis, gravida id, est. Sed lectus. Praesent elementum hendrerit tortor. Sed semper lorem at felis. Vestibulum volutpat, lacus a ", _slug_jsx(custom_link/* default */.Z, {
    href: "#"
  }, "ultrices sagittis"), ", mi neque euismod dui, eu pulvinar nunc sapien ornare nisl. Phasellus pede arcu, dapibus eu, fermentum et, dapibus sed, urna."), _slug_jsx("div", {
    className: "with-img row align-items-center"
  }, _slug_jsx("div", {
    className: "col-md-6 mb-6"
  }, _slug_jsx("figure", null, _slug_jsx(external_react_lazy_load_image_component_.LazyLoadImage, {
    src: "./images/blog/1.jpg",
    alt: "post single image",
    width: 336,
    height: 415,
    effect: "opacity",
    className: "float-left",
    style: {
      backgroundColor: "#DEE6E8"
    }
  }), _slug_jsx("figcaption", {
    className: "text-left mt-1"
  }, "Designe by ", _slug_jsx(custom_link/* default */.Z, {
    href: "#"
  }, "Casper Dalin")))), _slug_jsx("div", {
    className: "col-md-6 mb-6"
  }, _slug_jsx("h4", {
    className: "font-weight-semi-bold ls-s"
  }, "Quisque volutpat mattiseros."), _slug_jsx("p", {
    className: "mb-8 col-lg-11"
  }, "Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. "), _slug_jsx("h4", {
    className: "font-weight-semi-bold ls-s"
  }, "More Details"), _slug_jsx("ul", {
    className: "list list-type-check mb-6"
  }, _slug_jsx("li", null, "Praesent id enim sit amet."), _slug_jsx("li", null, "Tdio vulputate eleifend in in tortor. ellus massa."), _slug_jsx("li", null, "Massa ristique sit amet condim vel"), _slug_jsx("li", null, "Dilisis Facilisis quis sapien. Praesent id enim sit amet"), _slug_jsx("li", null, "Praesent id enim sit amet."), _slug_jsx("li", null, "Tdio vulputate eleifend in in tortor. ellus massa.")))), _slug_jsx("blockquote", {
    className: "mt-1 mb-6 p-relative"
  }, _slug_jsx("p", {
    className: "font-weight-semi-bold ls-m"
  }, "\u201C Morbi purus libero, faucibus adipiscing, commodo quis, gravida id, est. Sed lectus. Praesent elementum hendrerit tortor. \u201D")), _slug_jsx("p", null, "Morbi purus libero, faucibus adipiscing, commodo quis, gravida id, est. Sed lectus. Praesent elementum hendrerit tortor. Sed semper lorem at felis. Vestibulum volutpat, lacus a ultrices sagittis, mi neque euismod dui, eu pulvinar nunc sapien ornare nisl. Phasellus pede arcu, dapibus eu, fermentum et, dapibus sed, urna. Morbi interdum mollis sapien. Sed ac risus. Phasellus lacinia, magna a ullamcorper laoreet, lectus arcu pulvinar risus, vitae facilisis libero dolor a purus. ")), _slug_jsx("div", {
    className: "post-author-detail"
  }, _slug_jsx("figure", {
    className: "author-media"
  }, _slug_jsx(custom_link/* default */.Z, {
    href: "#"
  }, _slug_jsx("img", {
    src: "./images/blog/comments/1.jpg",
    alt: "avatar",
    width: "50",
    height: "50"
  }))), _slug_jsx("div", {
    className: "author-body"
  }, _slug_jsx("div", {
    className: "author-header d-flex justify-content-between align-items-center"
  }, _slug_jsx("div", null, _slug_jsx("span", {
    className: "author-title"
  }, "AUTHOR"), _slug_jsx("h4", {
    className: "author-name font-weight-bold mb-0"
  }, "John Doe")), _slug_jsx("div", null, _slug_jsx(custom_link/* default */.Z, {
    href: "#",
    className: "author-link font-weight-semi-bold"
  }, "View all posts by John Doe ", _slug_jsx("i", {
    className: "d-icon-arrow-right"
  })))), _slug_jsx("div", {
    className: "author-content"
  }, _slug_jsx("p", {
    className: "mb-0"
  }, "Praesent dapibus, neque id cursus faucibus, tortor neque egestas auguae, eu vulputate magna eros euerat. Aliquam erat volutpat.")))), _slug_jsx("div", {
    className: "post-footer mt-7 mb-3"
  }, _slug_jsx("div", {
    className: "post-tags"
  }, _slug_jsx(custom_link/* default */.Z, {
    href: "#",
    className: "tag"
  }, "classic"), _slug_jsx(custom_link/* default */.Z, {
    href: "#",
    className: "tag"
  }, "converse")), _slug_jsx("div", {
    className: "social-icons"
  }, _slug_jsx(custom_link/* default */.Z, {
    href: "#",
    className: "social-icon social-facebook",
    title: "Facebook"
  }, _slug_jsx("i", {
    className: "fab fa-facebook-f"
  })), _slug_jsx(custom_link/* default */.Z, {
    href: "#",
    className: "social-icon social-twitter",
    title: "Twitter"
  }, _slug_jsx("i", {
    className: "fab fa-twitter"
  })), _slug_jsx(custom_link/* default */.Z, {
    href: "#",
    className: "social-icon social-pinterest",
    title: "Pinterest"
  }, _slug_jsx("i", {
    className: "fab fa-pinterest-p"
  })))))), loading ? '' : _slug_jsx("nav", {
    className: "page-nav"
  }, _slug_jsx(custom_link/* default */.Z, {
    className: "pager-link pager-link-prev",
    href: `/blog/single/${related[0].slug}`
  }, "Previous Post", _slug_jsx("span", {
    className: "pager-link-title"
  }, related[0].title)), _slug_jsx(custom_link/* default */.Z, {
    className: "pager-link pager-link-next",
    href: `/blog/single/${related[related.length - 1].slug}`
  }, "Go To Post", _slug_jsx("span", {
    className: "pager-link-title"
  }, related[related.length - 1].title))), _slug_jsx(RelatedPosts, {
    posts: related,
    loading: loading
  }), loading ? '' : _slug_jsx("div", {
    className: "comments"
  }, _slug_jsx("h3", {
    className: "title title-simple text-left text-normal font-weight-bold"
  }, post.comments, " Comments"), post.comments > 0 ? '' : _slug_jsx("h3", {
    className: "title title-simple text-left text-normal font-weight-normal",
    style: {
      fontSize: "1.8rem"
    }
  }, "Be The First To Review “" + post.title + "”"), _slug_jsx("ul", null, post.comments > 0 ? _slug_jsx("li", null, _slug_jsx("div", {
    className: "comment"
  }, _slug_jsx("figure", {
    className: "comment-media"
  }, _slug_jsx(custom_link/* default */.Z, {
    href: "#"
  }, _slug_jsx("img", {
    src: "images/blog/comments/1.jpg",
    alt: "avatar",
    width: "100",
    height: "100"
  }))), _slug_jsx("div", {
    className: "comment-body"
  }, _slug_jsx("div", {
    className: "comment-user"
  }, _slug_jsx("span", {
    className: "comment-date"
  }, "November 9, 2018 at 2:19 pm"), _slug_jsx("h4", null, _slug_jsx(custom_link/* default */.Z, {
    href: "#"
  }, "Jimmy Pearson"))), _slug_jsx("div", {
    className: "comment-content mb-2"
  }, _slug_jsx("p", null, "Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. ")), _slug_jsx(custom_link/* default */.Z, {
    href: "#",
    className: "btn btn-link btn-reveal-right"
  }, "REPLY", _slug_jsx("i", {
    className: "d-icon-arrow-right"
  })))), post.comments > 1 ? _slug_jsx("ul", null, _slug_jsx("li", null, _slug_jsx("div", {
    className: "comment"
  }, _slug_jsx("figure", {
    className: "comment-media"
  }, _slug_jsx(custom_link/* default */.Z, {
    href: "#"
  }, _slug_jsx("img", {
    src: "images/blog/comments/2.jpg",
    alt: "avatar",
    width: "100",
    height: "100"
  }))), _slug_jsx("div", {
    className: "comment-body"
  }, _slug_jsx("div", {
    className: "comment-user"
  }, _slug_jsx("span", {
    className: "comment-date"
  }, "November 9, 2018 at 2:19 pm"), _slug_jsx("h4", null, _slug_jsx(custom_link/* default */.Z, {
    href: "#"
  }, "Lena Knight"))), _slug_jsx("div", {
    className: "comment-content mb-2"
  }, _slug_jsx("p", null, "Morbi interdum mollis sapien. Sed ac risus.")), _slug_jsx(custom_link/* default */.Z, {
    href: "#",
    className: "btn btn-link btn-reveal-right"
  }, "REPLY", _slug_jsx("i", {
    className: "d-icon-arrow-right"
  })))))) : '') : '', post.comments > 2 ? _slug_jsx("li", null, _slug_jsx("div", {
    className: "comment"
  }, _slug_jsx("figure", {
    className: "comment-media"
  }, _slug_jsx(custom_link/* default */.Z, {
    href: "#"
  }, _slug_jsx("img", {
    src: "images/blog/comments/1.jpg",
    alt: "avatar",
    width: "100",
    height: "100"
  }))), _slug_jsx("div", {
    className: "comment-body"
  }, _slug_jsx("div", {
    className: "comment-user"
  }, _slug_jsx("span", {
    className: "comment-date"
  }, "November 9, 2018 at 2:19 pm"), _slug_jsx("h4", null, _slug_jsx(custom_link/* default */.Z, {
    href: "#"
  }, "Johnathan Castillo"))), _slug_jsx("div", {
    className: "comment-content mb-2"
  }, _slug_jsx("p", null, "Vestibulum volutpat, lacus a ultrices sagittis, mi neque euismod dui, eu pulvinar nunc sapien ornare nisl. Phasellus pede arcu, dapibus eu, fermentum et, dapibus sed, urna.")), _slug_jsx(custom_link/* default */.Z, {
    href: "#",
    className: "btn btn-link btn-reveal-right"
  }, "REPLY", _slug_jsx("i", {
    className: "d-icon-arrow-right"
  }))))) : '')), _slug_jsx("div", {
    className: "reply"
  }, _slug_jsx("div", {
    className: "title-wrapper text-left"
  }, _slug_jsx("h3", {
    className: "title title-simple text-left text-normal"
  }, "Leave A Reply"), _slug_jsx("p", null, "Your email address will not be published. Required fields are marked *")), _slug_jsx("form", {
    action: "#"
  }, _slug_jsx("textarea", {
    id: "reply-message",
    cols: "30",
    rows: "6",
    className: "form-control mb-4",
    placeholder: "Comment *",
    required: true
  }), _slug_jsx("div", {
    className: "row"
  }, _slug_jsx("div", {
    className: "col-md-6 mb-5"
  }, _slug_jsx("input", {
    type: "text",
    className: "form-control",
    id: "reply-name",
    name: "reply-name",
    placeholder: "Name *",
    required: true
  })), _slug_jsx("div", {
    className: "col-md-6 mb-5"
  }, _slug_jsx("input", {
    type: "email",
    className: "form-control",
    id: "reply-email",
    name: "reply-email",
    placeholder: "Email *",
    required: true
  }))), _slug_jsx("button", {
    type: "submit",
    className: "btn btn-primary btn-rounded"
  }, "POST COMMENT", _slug_jsx("i", {
    className: "d-icon-arrow-right"
  }))))), _slug_jsx(blog_sidebar/* default */.Z, null)))));
}

/* harmony default export */ var _slug_ = ((0,apollo/* default */.Z)({
  ssr: true
})(PostSingle));

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
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, [1664,5588,5961,4138,4943,2674,4018,2644,2246], function() { return __webpack_exec__(7483); });
module.exports = __webpack_exports__;

})();