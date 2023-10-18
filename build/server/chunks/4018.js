exports.id = 4018;
exports.ids = [4018];
exports.modules = {

/***/ 4018:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ blog_sidebar; }
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: external "@apollo/react-hooks"
var react_hooks_ = __webpack_require__(7530);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(6731);
// EXTERNAL MODULE: external "react-sticky-box"
var external_react_sticky_box_ = __webpack_require__(9058);
var external_react_sticky_box_default = /*#__PURE__*/__webpack_require__.n(external_react_sticky_box_);
// EXTERNAL MODULE: ./server/apollo.js
var apollo = __webpack_require__(5438);
// EXTERNAL MODULE: ./server/queries.js
var queries = __webpack_require__(4733);
// EXTERNAL MODULE: ./components/features/custom-link.jsx
var custom_link = __webpack_require__(8765);
// EXTERNAL MODULE: ./components/features/accordion/card.jsx
var card = __webpack_require__(2674);
// EXTERNAL MODULE: external "react-lazy-load-image-component"
var external_react_lazy_load_image_component_ = __webpack_require__(9290);
;// CONCATENATED MODULE: ./components/features/post/post-two.jsx
var __jsx = (external_react_default()).createElement;




function PostTwo(props) {
  const {
    post,
    adClass = '',
    isLazy = false
  } = props;
  return __jsx("div", {
    className: `post post-list-sm ${adClass}`
  }, __jsx("figure", {
    className: "post-media"
  }, isLazy ? __jsx(custom_link/* default */.Z, {
    href: `/blog/single/${post.slug}`
  }, __jsx(external_react_lazy_load_image_component_.LazyLoadImage, {
    src: "https://d-themes.com/react_asset_api/riode" + post.small_picture[0].url,
    alt: "post image",
    width: post.small_picture[0].width,
    height: post.small_picture[0].height,
    effect: "opacity",
    style: {
      backgroundColor: "#DEE6E8"
    }
  })) : __jsx(custom_link/* default */.Z, {
    href: `/blog/single/${post.slug}`
  }, __jsx("img", {
    src: "https://d-themes.com/react_asset_api/riode" + post.small_picture[0].url,
    alt: "post image",
    width: post.small_picture[0].width,
    height: post.small_picture[0].height
  }))), __jsx("div", {
    className: "post-details"
  }, __jsx("div", {
    className: "post-meta"
  }, __jsx(custom_link/* default */.Z, {
    href: "#",
    className: "post-date"
  }, new Date(post.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: "2-digit",
    timeZone: "UTC"
  }))), __jsx("h4", {
    className: "post-title"
  }, __jsx(custom_link/* default */.Z, {
    href: `/blog/single/${post.slug}`
  }, post.title))));
}

/* harmony default export */ var post_two = (PostTwo);
;// CONCATENATED MODULE: ./components/partials/post/blog-sidebar.jsx

var blog_sidebar_jsx = (external_react_default()).createElement;









function BlogSidebar() {
  const {
    data,
    loading,
    error
  } = (0,react_hooks_.useQuery)(queries/* GET_POST_SIDEBAR_DATA */.oG);
  const categories = data && data.postSidebarData.categories;
  const recent = data && data.postSidebarData.recent;
  const router = (0,router_.useRouter)();
  const query = router.query;

  const toggleSidebarHandler = e => {
    document.querySelector('body').classList.toggle('right-sidebar-active');
  };

  const hideSidebarhandler = e => {
    document.querySelector('body').classList.remove('right-sidebar-active');
  };

  return blog_sidebar_jsx("div", {
    className: "col-lg-3 right-sidebar sidebar-fixed sticky-sidebar-wrapper"
  }, blog_sidebar_jsx("div", {
    className: "sidebar-overlay",
    onClick: hideSidebarhandler
  }, blog_sidebar_jsx(custom_link/* default */.Z, {
    className: "sidebar-close",
    href: "#"
  }, blog_sidebar_jsx("i", {
    className: "close-icon"
  }))), blog_sidebar_jsx("div", {
    className: "sidebar-toggle",
    onClick: toggleSidebarHandler
  }, blog_sidebar_jsx("i", {
    className: "fas fa-chevron-left"
  })), blog_sidebar_jsx((external_react_sticky_box_default()), {
    offsetTop: 88,
    className: "blog-sidebar-wrapper"
  }, blog_sidebar_jsx("div", {
    className: "sidebar-content"
  }, !loading && recent ? blog_sidebar_jsx((external_react_default()).Fragment, null, blog_sidebar_jsx("div", {
    className: "widget widget-search border-no mb-2"
  }, blog_sidebar_jsx("form", {
    action: "#",
    className: "input-wrapper input-wrapper-inline btn-absolute"
  }, blog_sidebar_jsx("input", {
    type: "text",
    className: "form-control",
    name: "search",
    autoComplete: "off",
    placeholder: "Search in Blog",
    required: true
  }), blog_sidebar_jsx("button", {
    className: "btn btn-search btn-link",
    type: "submit"
  }, blog_sidebar_jsx("i", {
    className: "d-icon-search"
  })))), blog_sidebar_jsx("div", {
    className: "widget widget-collapsible border-no"
  }, blog_sidebar_jsx(card/* default */.Z, {
    title: "<h3 class='widget-title border-no'>Blog Categories<span class='toggle-btn p-0 parse-content'></span></h3>",
    type: "parse",
    expanded: true
  }, blog_sidebar_jsx("ul", {
    className: "widget-body filter-items search-ul"
  }, blog_sidebar_jsx("li", {
    className: `${query.category === 'fashion' ? 'active' : ''}`
  }, blog_sidebar_jsx(custom_link/* default */.Z, {
    href: {
      pathname: '/blog/classic',
      query: {
        category: 'fashion'
      }
    },
    scroll: false
  }, "Fashion")), blog_sidebar_jsx("li", {
    className: `${query.category === 'lifestyle' ? 'active' : ''}`
  }, blog_sidebar_jsx(custom_link/* default */.Z, {
    href: {
      pathname: '/blog/classic',
      query: {
        category: 'lifestyle'
      }
    },
    scroll: false
  }, "Lifestyle")), blog_sidebar_jsx("li", {
    className: `${query.category === 'shopping' ? 'active' : ''}`
  }, blog_sidebar_jsx(custom_link/* default */.Z, {
    href: {
      pathname: '/blog/classic',
      query: {
        category: 'shopping'
      }
    },
    scroll: false
  }, "Shopping")), blog_sidebar_jsx("li", {
    className: `${query.category === 'sport' ? 'active' : ''}`
  }, blog_sidebar_jsx(custom_link/* default */.Z, {
    href: {
      pathname: '/blog/classic',
      query: {
        category: 'sport'
      }
    },
    scroll: false
  }, "Sport")), blog_sidebar_jsx("li", {
    className: `${query.category === 'travel' ? 'active' : ''}`
  }, blog_sidebar_jsx(custom_link/* default */.Z, {
    href: {
      pathname: '/blog/classic',
      query: {
        category: 'travel'
      }
    },
    scroll: false
  }, "Travel"))))), blog_sidebar_jsx("div", {
    className: "widget widget-collapsible"
  }, blog_sidebar_jsx(card/* default */.Z, {
    title: "<h3 class='widget-title'>Popular Posts<span class='toggle-btn p-0 parse-content'></span></h3>",
    type: "parse",
    expanded: true
  }, blog_sidebar_jsx("ul", {
    className: "widget-body"
  }, recent.slice(0, 3).map((post, index) => blog_sidebar_jsx("div", {
    className: "post-col",
    key: "Small Post " + index
  }, blog_sidebar_jsx(post_two, {
    post: post
  })))))), blog_sidebar_jsx("div", {
    className: "widget widget-collapsible"
  }, blog_sidebar_jsx(card/* default */.Z, {
    title: "<h3 class='widget-title'>About us<span class='toggle-btn p-0 parse-content'></span></h3>",
    type: "parse",
    expanded: true
  }, blog_sidebar_jsx("ul", {
    className: "widget-body"
  }, blog_sidebar_jsx("p", null, "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt.")))), blog_sidebar_jsx("div", {
    className: "widget widget-collapsible widget-posts"
  }, blog_sidebar_jsx(card/* default */.Z, {
    title: "<h3 class='widget-title'>Tag Cloud<span class='toggle-btn p-0 parse-content'></span></h3>",
    type: "parse",
    expanded: true
  }, blog_sidebar_jsx("ul", {
    className: "widget-body"
  }, blog_sidebar_jsx(custom_link/* default */.Z, {
    href: "#",
    className: "tag"
  }, "Bag"), blog_sidebar_jsx(custom_link/* default */.Z, {
    href: "#",
    className: "tag"
  }, "Classic"), blog_sidebar_jsx(custom_link/* default */.Z, {
    href: "#",
    className: "tag"
  }, "Converse"), blog_sidebar_jsx(custom_link/* default */.Z, {
    href: "#",
    className: "tag"
  }, "Leather"), blog_sidebar_jsx(custom_link/* default */.Z, {
    href: "#",
    className: "tag"
  }, "Fit"), blog_sidebar_jsx(custom_link/* default */.Z, {
    href: "#",
    className: "tag"
  }, "Green"), blog_sidebar_jsx(custom_link/* default */.Z, {
    href: "#",
    className: "tag"
  }, "Man"), blog_sidebar_jsx(custom_link/* default */.Z, {
    href: "#",
    className: "tag"
  }, "Jeans"), blog_sidebar_jsx(custom_link/* default */.Z, {
    href: "#",
    className: "tag"
  }, "Women"))))) : blog_sidebar_jsx("div", {
    className: "widget-2"
  }))));
}

/* harmony default export */ var blog_sidebar = ((0,apollo/* default */.Z)({
  ssr: true
})(BlogSidebar));

/***/ })

};
;